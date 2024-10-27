const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check for student or parent password
    const isPasswordValid = user.role === 'parent'
        ? await bcrypt.compare(password, user.parentPassword) // Check parent password
        : await bcrypt.compare(password, user.password); // Check student password

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
    
    res.status(200).json({ message: 'Login successful', token });
};
