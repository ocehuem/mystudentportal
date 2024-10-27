const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Store user info in req.user
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Check if user is admin
exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};
