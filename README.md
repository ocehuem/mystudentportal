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



The LeaveManagementSystem and MyProject folders are partially completed . You won't able to run them currently.
  
                   
   
                   
