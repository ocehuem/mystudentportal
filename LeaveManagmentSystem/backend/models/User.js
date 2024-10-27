const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    parentPassword: { type: String }, // Optional field for parent's password
    role: { type: String, enum: ['student', 'parent', 'admin', 'security'], default: 'student', required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to parent
});

const User = mongoose.model('User', userSchema);
module.exports = User;