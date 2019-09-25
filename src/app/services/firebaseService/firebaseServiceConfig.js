const prodConfig = {
  // apiKey           : "YOUR_API_KEY",
  // authDomain       : "your-app.firebaseapp.com",
  // databaseURL      : "https://your-app.firebaseio.com",
  // projectId        : "your-app",
  // storageBucket    : "your-app.appspot.com",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
  apiKey: "AIzaSyBviIgbXUrbeySSAuYDPakkpscCTe_zraM",
  authDomain: "ipmadmin-fb6f3.firebaseapp.com",
  databaseURL: "https://ipmadmin-fb6f3.firebaseio.com",
  projectId: "ipmadmin-fb6f3",
  storageBucket: "",
  messagingSenderId: "473157340198",
  appId: "1:473157340198:web:695f89108681ed05596ae7",
  measurementId: "G-LTE4CFZ9RM"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

export default config;

/*
< !--The core Firebase JS SDK is always required and must be listed first-- >
    <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>

    <!--TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-analytics.js"></script>

    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
        apiKey: "AIzaSyBviIgbXUrbeySSAuYDPakkpscCTe_zraM",
        authDomain: "ipmadmin-fb6f3.firebaseapp.com",
        databaseURL: "https://ipmadmin-fb6f3.firebaseio.com",
        projectId: "ipmadmin-fb6f3",
        storageBucket: "",
        messagingSenderId: "473157340198",
        appId: "1:473157340198:web:695f89108681ed05596ae7",
        measurementId: "G-LTE4CFZ9RM"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
</script>
*/
