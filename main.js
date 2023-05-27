var firebaseConfig = {
    apiKey: "AIzaSyDAVxm-hlWKeTBMN5UTU2MkyntpXiwS7I8",
    authDomain: "chat-59ba8.firebaseapp.com",
    databaseURL: "https://chat-59ba8-default-rtdb.firebaseio.com",
    projectId: "chat-59ba8",
    storageBucket: "chat-59ba8.appspot.com",
    messagingSenderId: "981927729819",
    appId: "1:981927729819:web:4f4843c170995f54f1443e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var key;
var uname;
var pass_usr;

function login() {
    document.getElementById("btn").disabled = "true";
    uname = document.getElementById("name").value;
    pass_usr = document.getElementById("pass").value;

    ref = firebase.database().ref("/");
    ref.once("value", function (snapshot) {
        snapshot.forEach(function (child) {
            key = child.key;

            if (uname == key) {
                ref = firebase.database().ref("/" + uname);

                ref.once("value", function (snapshot) {
                    snapshot.forEach(function (child) {
                        console.log(child.val());
                        console.log("all good!")

                        if (pass_usr == child.val()) {
                            localStorage.setItem("uname", uname);
                            console.log("Login Successfull!");
                            window.location = "loading.html";
                        }
                        else {
                            console.log("Wrong Password!");
                            document.getElementById("btn").disabled = "false";
                        }
                    })
                })
            }
            else {
                document.getElementById("btn").disabled = "false";
                console.log("Wrong Username!");
            }
        })
    })
}