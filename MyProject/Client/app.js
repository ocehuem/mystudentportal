// /Client/app.js
document.getElementById("leaveRequestForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const leaveRequest = {
        studentName: document.getElementById("studentName").value,
        rollNumber: document.getElementById("rollNumber").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        reason: document.getElementById("reason").value,
        isApproved: false
    };

    const response = await fetch('/api/leaverequests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(leaveRequest)
    });

    if (response.ok) {
        document.getElementById("message").innerText = "Leave request submitted successfully!";
        document.getElementById("leaveRequestForm").reset();
    } else {
        document.getElementById("message").innerText = "Failed to submit leave request.";
    }
});
