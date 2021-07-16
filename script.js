// messenger chat code
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "101035532257185");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v11.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



// form code


function openForm() {
    var x = document.getElementById("myForm");
    if (document.getElementById("myForm").style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}