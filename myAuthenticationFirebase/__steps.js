/*
..........Initial Set Up
---------Login with Google --------------
1. Visit : console.firebase.google.com
2. Create project ( skip google analytics for now)
3. Register App ( create config)
4. Install firebase : npm install firebase
5. Add config file to your project

...........Integration.......
6. Go to Docs > Build > Authentication > Web > Get Started
7. Export app from firebase.init.js file : export default app
8. Login.jsx : import { getAuth } from "firebase/auth";
9. Create const auth = getAuth(app);

.......Provider .........

10. Google > import googleAuthProvider and create a new provider
11. Use signInWithPopup(auth, provider){}
12. Activate Sing-In Method: Authentication > Sign-In Method > Select (Google, facebook etc) Enable toggle > Save

---------Login with GitHub --------------

1. Go to Authentication > Sign-In method > select Github > Enable github toggle
2. Go to GitHub > Settings > Developer settings > Add gitHub name > write something in the box
3. Add homePage URL: http://localhost:5173/
4.Copy the Callback url from firebase github: https://simple-firebase-project-ac575.firebaseapp.com/__/auth/handler
5. Paste it in github Callback field
6. Create github
7. Copy the Client Id & paste it in firebase github "Client ID" field
8. Click on " Generate a new client secret" on github
9. copy the client secret id & paste it in firebase github "Client secret" field
10. Click Save > make sure GitHub is enabled
11. Docs > Authentication > Web > Github > Follow the documentation 
*/
