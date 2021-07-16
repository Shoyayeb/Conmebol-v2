
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