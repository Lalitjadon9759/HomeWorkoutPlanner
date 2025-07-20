  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getAuth,
           createUserWithEmailAndPassword,
           signInWithEmailAndPassword,
           signOut,
           onAuthStateChanged
        }  from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8nWsTxrjYzPKrpFMOlO0htrAJmE5nyh4",
    authDomain: "feedback-dd3b4.firebaseapp.com",
    projectId: "feedback-dd3b4",
    storageBucket: "feedback-dd3b4.firebasestorage.app",
    messagingSenderId: "210519429058",
    appId: "1:210519429058:web:83ce43b700961d3de7105b",
    measurementId: "G-QGYZMYVJSF"
  };

  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  let auth=getAuth(app); 

  document.getElementById('signup-btn').addEventListener("click",()=>{
    let email=document.getElementById("email-signup").value;
    let password=document.getElementById("password-signup").value;

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
        document.getElementById("signup-message").innerText="signup successful"
    })
    .catch((error)=>{
        document.getElementById("signup-message").innerText=error.message;
    })
    document.getElementById("email-signup").value=""
    document.getElementById("password-signup").value=""
  })

   document.getElementById('login-btn').addEventListener("click",()=>{
    let email=document.getElementById("email-login").value;
    let password=document.getElementById("password-login").value;

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
        document.getElementById("login-message").innerText="login successful"
    })
    .catch((error)=>{
        document.getElementById("login-message").innerText=error.message;
    })
    document.getElementById("email-login").value=""
    document.getElementById("password-login").value=""
  })


   document.getElementById('logout-btn').addEventListener('click',()=>{
    signOut(auth)
    .then(()=>{
        alert('logout successfully')
    }).catch((error)=>{
         document.getElementById("logout-message").innerText=error.message;
    })
   })
   


    onAuthStateChanged(auth,(user)=>{
        if(user){
            document.getElementById("user-email").innerText=user.email;
            document.getElementById("signup-container").classList.add("hidden")
             document.getElementById("signup-container").classList.add("hidden")
             document.getElementById("login-container").classList.add("hidden")
              document.getElementById("logout-container").classList.remove("hidden")
        }else{
             document.getElementById("signup-container").classList.remove("hidden")
              document.getElementById("login-container").classList.remove("hidden")
               document.getElementById("logout-container").classList.add("hidden")
        }
    })
