const startButton = document.getElementById("start-btn");
const home=document.getElementById("home");
const roles=document.getElementById("roles");
startButton.addEventListener("click", () => {
    home.style.display = "none";
    roles.style.display = "block";
});