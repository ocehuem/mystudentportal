const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const bcrypt = require('bcrypt');

dotenv.config();

const insertSampleData = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const sampleUsers = [
        { username: 'student1', password: await bcrypt.hash('password1', 10), role: 'student' },
        { username: 'student2', password: await bcrypt.hash('password2', 10), role: 'student' },
        { username: 'parent1', parentPassword: await bcrypt.hash('parentpass1', 10), role: 'parent' }, // Parent with password
        { username: 'admin', password: await bcrypt.hash('adminpass', 10), role: 'admin' },
    ];

    await User.insertMany(sampleUsers);
    console.log('Sample users inserted successfully!');
    mongoose.connection.close();
};

insertSampleData().catch(console.error);