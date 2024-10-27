// Import the LeaveRequest model and User model
const LeaveRequest = require('../models/LeaveRequest');
const User = require('../models/User');

// 1. Function to submit a new leave request (for students)
exports.submitLeaveRequest = async (req, res) => {
    try {
        const { reason, startTime, endTime } = req.body;
        const studentId = req.user.userId;  // Assuming req.user is set by the auth middleware

        const leaveRequest = new LeaveRequest({
            studentId,
            reason,
            status: 'pending',
            startTime,
            endTime
        });

        await leaveRequest.save();
        res.status(201).json({ message: 'Leave request submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while submitting the leave request' });
    }
};

// 2. Function to get the status of leave requests (for students)
exports.getLeaveStatus = async (req, res) => {
    try {
        const studentId = req.user.userId;  // Assuming req.user is set by the auth middleware
        const leaveRequests = await LeaveRequest.find({ studentId });
        
        res.status(200).json(leaveRequests);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve leave status' });
    }
};

// 3. Function to get all pending leave requests (for admin)
exports.getPendingRequests = async (req, res) => {
    try {
        const pendingRequests = await LeaveRequest.find({ status: 'pending' });
        
        res.status(200).json(pendingRequests);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve pending requests' });
    }
};

// 4. Function to approve a specific leave request (for admin)
exports.approveLeaveRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const leaveRequest = await LeaveRequest.findById(id);

        if (!leaveRequest) {
            return res.status(404).json({ message: 'Leave request not found' });
        }

        leaveRequest.status = 'approved';
        await leaveRequest.save();
        res.status(200).json({ message: 'Leave request approved' });
    } catch (error) {
        res.status(500).json({ error: 'Could not approve the leave request' });
    }
};

// 5. Function to deny a specific leave request (for admin)
exports.denyLeaveRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const leaveRequest = await LeaveRequest.findById(id);

        if (!leaveRequest) {
            return res.status(404).json({ message: 'Leave request not found' });
        }

        leaveRequest.status = 'denied';
        await leaveRequest.save();
        res.status(200).json({ message: 'Leave request denied' });
    } catch (error) {
        res.status(500).json({ error: 'Could not deny the leave request' });
    }
};
