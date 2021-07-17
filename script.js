
function openForm() {
    var x = document.getElementById("id01");
    if (document.getElementById("myForm").style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function closeForm() {
    document.getElementById("id01").style.display = "none";
}

