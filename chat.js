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

var chats;
var chat_got;

function load_chats(){
    ref = firebase.database().ref("/"+localStorage.getItem("uname"));
    ref.once("value", function (snapshot) {
        snapshot.forEach(function (child) {
            chat_got = child.key['chat'];
            console.log(chat_got);
        })
    })
}