let menu = document.getElementById('menu');
document.getElementById('toggle-btn').addEventListener("click", function () {
    toggleButton();
})

function toggleButton() {
    menu.classList.toggle('hidden');
}