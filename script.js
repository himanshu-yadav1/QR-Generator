var card = document.querySelector(".card")
var btn = document.querySelector(".form button");
var qrimg = document.querySelector(".qr-code img")
var input = document.querySelector(".form input");
var qr = document.querySelector(".qr-code")

btn.addEventListener("click", function() {
    var txt = input.value;
    if(!txt) return;   //if no text then return from here
    var response = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`;
    qrimg.src = response;
    qr.style.display = "block"
})