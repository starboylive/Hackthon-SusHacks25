window.onload = function() {
    // Get the username from localStorage
    let name = localStorage.getItem("username");
    if (name) {
        document.getElementById("log2").innerText = "Welcome " + name + "!";
    } else {
        document.getElementById("log2").innerText = "Welcome Guest!";
    }
};