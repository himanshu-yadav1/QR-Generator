var card = document.querySelector(".card")
var btn = document.querySelector(".form button");
var qrimg = document.querySelector(".qr-code img")
var input = document.querySelector(".form input");

btn.addEventListener("click", function() {
    var txt = input.value;
    if(!txt) return;   //if no text then return from here
    btn.innerText = "Generating QR......"
    var response = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`;
    qrimg.src = response;
    
    qrimg.addEventListener("load", function(){
        btn.innerText = "Generator QR Code"
        card.classList.add("active")   //add class 'active' to div-card for css animation
    })
})

input.addEventListener("keyup", ()=> {
    if(!input.value){
        card.classList.remove("active")   //remove class 'active' of div-card if text is removed
                                          //for css animation
    }
})
