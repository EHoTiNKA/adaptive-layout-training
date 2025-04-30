document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burgerButton").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})