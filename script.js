document.getElementById("revealButton").addEventListener("click", function() {
    const details = document.getElementById("details");
    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        this.textContent = "Hide Details";
    } else {
        details.classList.add("hidden");
        this.textContent = "Click for Details!";
    }
});