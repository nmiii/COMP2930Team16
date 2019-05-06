firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      doocument.getElementById("pella").style.display = "none";
       doocument.getElementById("dooja").style.display = "block";
      var user = firebase.auth().currentUser;
      (if user!=null){
          var email_id = user.email;
          document.getElementById("userpara").innerHTML("welcome User"+email_id);
      }
    // User is signed in.
  } else {
    // No user is signed in.
      doocument.getElementById("pella").style.display = "block";
       doocument.getElementById("dooja").style.display = "none";
  }
});
function login(){
    var useremail = document.getElementById("emailfield").value;
     var userpassword = document.getElementById("passwordfield").value;
    firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    window.alert("errormessage"+errorMessage);
    
}