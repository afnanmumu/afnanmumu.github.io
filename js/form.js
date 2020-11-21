
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfsjilyoE8f6itcEFM_D0T2yHCW3K_M_k",
    authDomain: "form-ca6d7.firebaseapp.com",
    databaseURL: "https://form-ca6d7.firebaseio.com",
    projectId: "form-ca6d7",
    storageBucket: "form-ca6d7.appspot.com",
    messagingSenderId: "845197586675",
    appId: "1:845197586675:web:23ec4bb0fce88243d98786"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
	
	
    function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
 
  //////////////////////
//  var firebaseConfig = {
// //firebase config stuff
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
// 	const auth = firebase.auth();
	
	
// 	function signUp(){
		
// 		var email = document.getElementById("email");
// 		var password = document.getElementById("password");
		
// 		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
// 		promise.catch(e => alert(e.message));
		
// 		alert("Signed Up");
// 	}
	
	
	
// 	function signIn(){
		
// 		var email = document.getElementById("email");
// 		var password = document.getElementById("password");
		
// 		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
// 		promise.catch(e => alert(e.message));
		
		
		
		
// 	}
	
	
// 	function signOut(){
		
// 		auth.signOut();
// 		alert("Signed Out");
		
// 	}
	
	
	
// 	auth.onAuthStateChanged(function(user){
		
// 		if(user){
			
// 			var email = user.email;
// 			alert("Active User " + email);
			
// 			//Take user to a different or home page

// 			//is signed in
			
// 		}else{
			
// 			alert("No Active User");
// 			//no user is signed in
// 		}
		
		
		
// 	});
	

