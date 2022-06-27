
// Configuration

const firebaseConfig = {
    apiKey: "AIzaSyCsa8Tj_5kj5ugy2PLwowp6Z0u-T6RRhJs",
    authDomain: "personal-portfolio-websi-b804f.firebaseapp.com",
    projectId: "personal-portfolio-websi-b804f",
    storageBucket: "personal-portfolio-websi-b804f.appspot.com",
    messagingSenderId: "430090594611",
    databaseURL: "https://personal-portfolio-websi-b804f-default-rtdb.firebaseio.com/",
    appId: "1:430090594611:web:e99a41451558fbd4107646"
};
firebase.initializeApp(firebaseConfig);

function sendmessage() {
    console.log("Function executed");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");
    if (name.value != '' && email.value!=' ' && comment.value!=' ') {
        firebase.database().ref("users").push().set({
            "name": name.value,
            "message": comment.value,
            "email":email.value,
        });
        alert("Feedback Submited! Thank you for your review");
        name.value = '';
        email.value = '';
        comment.value = '';
    }
    return false;
}

document.getElementById("submit").addEventListener("click", sendmessage);

// ----------------------Reading Messages----------------------

firebase.database().ref("users").on("child_added", function (snapshot) {
        var feeds = `
         <li>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile">
            <div class="rest">
                <div class="info">
                <span class="emailspan">${snapshot.val().email}</span>
                <h2>  ${snapshot.val().name}</h2>
                </div>
                <p>${snapshot.val().message}</p>
            </div>
        </li>`
    document.getElementById("ul").innerHTML += feeds;

    // myDiv.scrollTop = myDiv.scrollHeight;

});