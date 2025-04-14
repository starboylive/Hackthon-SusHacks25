function saveUsername() {
    const username = document.getElementById("username").value;
    if (username.trim()) {
        localStorage.setItem("username", username);
    } else {
        alert("Please enter a username");
    }
}