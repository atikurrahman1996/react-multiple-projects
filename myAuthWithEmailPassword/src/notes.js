/*
--------Login authentication with firebase-------
..........Initial Set Up

1. Visit : console.firebase.google.com
2. Create project ( skip google analytics for now)
3. Register App ( create config)
4. Install firebase : npm install firebase
5. Add config file to your project ( create a file like - firebase.config.js) 
6. Copy the code from firebase & paste it here (firebase.config file) & export default app
7. Activate Sing-In Method: Authentication > Sign-In Method > Select (Email/password) Enable toggle > Save

...........Integration.......
7. Go to Docs > Build > Authentication > Web > Get Started
8. import { getAuth } from "firebase/auth" in the firebase.config.js file 
9. Create const auth = getAuth(app);
10. export default app;
11. Go to password authentication > Follow the instructions to create a user & stored in firebase
12. For reset/forget password: Go to Manage user > Send password reset email > follow instructions

.......Provider .........

*/
