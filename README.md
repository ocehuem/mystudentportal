in azure: https://ssiitdh-bvdrgyhwhqc9hccf.centralindia-01.azurewebsites.net/
The above repository contains 2 folders where each folder partially implemented leave_management_system via different frameworks 

1. LeaveManagementSystem   ---- Used Html,Css,Javascript as frontend
                           ---- Used MongoDB , Express.js , Node.js , JWT for backend


2. MyProject               ---- Used Html,Css, Javascript as frontend
                           ---- Used C# , .NET , Azure Web App as backend


3. The individual Files
   (admin (1).html)       ---- admin view for viewing all the submitted students leave requests and they can approve/disapprove the pending requests .
                          ---- we thought of removing the edit option for admin after 2-3 approvals/disapprovels that too until the time that leave_request endTime ( He can approve/disapprove) but wasn't able to                                   code due  to time constraints
   
   (index (1).html)       ---- student view for submitting leave_requests with their studentId , startTime , endTime , reasonForLeave

   track_leave (1).html   ---- student view for tracking the leave_requests given their studentId . Thought of even adding the timeline of leave_requests at which they submitted to order the view of leave's taken                                  by student. But wasn't able to do it .


   This 3rd approach of Us is What is submitted as demo video in DevFolio and this approach uses no backend rather for storing the data it uses WebBrowers'LocalStorage and stores it in JSON format ( MongoDB DB ig)
   The Problem with 3rd approach is that the a device's localWebStorage can't be acessed from the Other device's webbrowser . Like the leave_requests which you will be submiting from your's device's webbrowser         using  (index (1).html) will be stored in your WebBrowser's localDatabase and they are only requests which you will also be seeing on (admin (1).html) webpage.

   Didn't Implemented in 3rd approach (Cons):

   1. Didn't even had Signin/Login Pages for students and admins.
   2. Didn't protected the Routers like /admin (1).html to not be accesed by students and viseversa.
   3. The leave_requests you fill on 1 device won't be reflected on other Devices . They will be only be visible to you.
   4. They are nothing but just HTML,CSS,Javascript files with No Backend files
   5. (student's view) The leave requests dont have an edit option to edit them if you suddenly want to change the reason/endTime for that leave_request.
   6. (admin's view)   It's somewhat overwhelming to see the all the leave_requests for admin that were ever submitted via (index (1).html) . It would rather be easier
      // (Didn't implemented Though ) if the leaveRequests whose endTime is completed ( Kind of like if leave_requests endTime/Date > CurrentTime/Date ) We should mark that leaveRequests as complete and The                                               complemeted leave_requests will not be  shown to admin.


The FileStructure for The folderr LeaveManagementSystem is:

------------LMS/
|
|----->backend/
|       |------>config/
|       |       |------->database.js
|       |       |
|       |------>controllers/
|       |       |------->authController.js
|       |       |------->leaveController.js
|       |       |
|       |------>middlware/
|       |       |-------->authMiddleware.js
|       |       |
|       |------>models/
|       |       |------->LeaveRequest.js
|       |       |------->User.js
|       |       |------->Checkin.js
|       |       |------->Student.js
|       |       |
|       |------>routes/
|       |       |------->authRoutes.js
|       |       |------->leaveRoutes.js
|       |       |------->parent.js
|       |       |------->security.js
|       |       |------->timeline.js
|       |       |
|       |------->utils/
|       |-------> .env
|       |------->insertSampleData.js
|       |------->server.js
|       |------->package.json
|       |
|------>frontend/
|       |------>index.html (login.html)
|       |------>studentDashboard.html
|       |------>leaveRequestStatus.html
|       |------>studentLeaveTimeline.html
|       |------>adminDashboard.html
|       |------>parentDashboard.html
|       |------->securityDashboard.html
|
|
|-------->readme.txt
|



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leave Management System - README</title>
</head>
<body>

<h1>Leave Management System</h1>

<p>This repository contains two separate implementations of a <strong>Leave Management System</strong> using different frameworks and technologies. Additionally, a third approach was submitted as a demo on DevFolio, which demonstrates basic leave management functionality using only HTML, CSS, and JavaScript with local storage.</p>

<h2>Project Structure</h2>
<ol>
    <li><strong>LeaveManagementSystem</strong>
        <ul>
            <li><strong>Frontend</strong>: HTML, CSS, JavaScript</li>
            <li><strong>Backend</strong>: MongoDB, Express.js, Node.js, JWT Authentication</li>
        </ul>
    </li>
    <li><strong>MyProject</strong>
        <ul>
            <li><strong>Frontend</strong>: HTML, CSS, JavaScript</li>
            <li><strong>Backend</strong>: C#, .NET, Azure Web App</li>
        </ul>
    </li>
</ol>

<hr>

<h2>3rd Approach (Demo Video Submission)</h2>
<p>This approach was submitted as a demo on DevFolio and involves a leave management system using only <strong>HTML, CSS, and JavaScript</strong> with data stored in the browser's <strong>Local Storage</strong>.</p>

<p><strong>Limitations of the 3rd Approach</strong>:</p>
<ul>
    <li>No sign-in or login pages for students or admins.</li>
    <li>Lack of route protection (e.g., students can access admin pages).</li>
    <li>Data is stored in the local storage of each browser, making it inaccessible from other devices.</li>
    <li>Basic HTML, CSS, JavaScript with no backend integration.</li>
    <li>Students cannot edit leave requests once submitted.</li>
    <li>Admins view all requests ever submitted without filtering, making it overwhelming.</li>
</ul>

<hr>

<h2>Individual Files</h2>
<ul>
    <li><strong>admin (1).html</strong>
        <ul>
            <li><strong>Purpose</strong>: Admin view for reviewing and approving/disapproving student leave requests.</li>
            <li><strong>Feature Plan</strong>: Intended to disable editing options after 2-3 approvals or rejections and only until the leave request’s end time (not implemented due to time constraints).</li>
        </ul>
    </li>
    <li><strong>index (1).html</strong>
        <ul>
            <li><strong>Purpose</strong>: Student view for submitting leave requests, including <code>studentId</code>, <code>startTime</code>, <code>endTime</code>, and <code>reasonForLeave</code>.</li>
        </ul>
    </li>
    <li><strong>track_leave (1).html</strong>
        <ul>
            <li><strong>Purpose</strong>: Allows students to track the status of their leave requests.</li>
            <li><strong>Feature Plan</strong>: Intended to display a timeline of submitted requests, ordered chronologically (not implemented).</li>
        </ul>
    </li>
</ul>

<hr>

<h2>Directory Structure (LeaveManagementSystem)</h2>
<pre>
LMS/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── leaveController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── LeaveRequest.js
│   │   ├── User.js
│   │   ├── Checkin.js
│   │   └── Student.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── leaveRoutes.js
│   │   ├── parent.js
│   │   ├── security.js
│   │   └── timeline.js
│   ├── utils/
│   ├── .env
│   ├── insertSampleData.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── index.html (login.html)
    ├── studentDashboard.html
    ├── leaveRequestStatus.html
    ├── studentLeaveTimeline.html
    ├── adminDashboard.html
    ├── parentDashboard.html
    └── securityDashboard.html

readme.txt
</pre>

<hr>

<h2>Known Issues and Unimplemented Features in 3rd Approach</h2>
<ol>
    <li><strong>Authentication</strong>: No sign-in/login for students or admins.</li>
    <li><strong>Route Protection</strong>: Lacks role-based access (e.g., students can access <code>admin (1).html</code>).</li>
    <li><strong>Device Data Isolation</strong>: Requests submitted from one device aren’t accessible on another device.</li>
    <li><strong>No Backend</strong>: Basic HTML, CSS, and JavaScript only, without backend functionality.</li>
    <li><strong>Edit Functionality for Students</strong>: Leave requests are not editable once submitted.</li>
    <li><strong>Admin View Overload</strong>: No filtering for completed leave requests, making it cumbersome for the admin to navigate.</li>
</ol>

</body>
</html>




The LeaveManagementSystem and MyProject folders are partially completed . You won't able to run them currently.
  
                   
   
                   
