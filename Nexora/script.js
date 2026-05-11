let cartCount = 0;

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    const cartControls = button.parentElement;

    const quantityBox =
    cartControls.querySelector(".quantity-box");

    const plusBtn =
    quantityBox.querySelector(".plus");

    const minusBtn =
    quantityBox.querySelector(".minus");

    const quantityText =
    quantityBox.querySelector(".quantity");

    // hide quantity box initially

    quantityBox.style.display = "none";

    // ADD TO CART

    button.onclick = () => {

        button.style.display = "none";

        quantityBox.style.display = "flex";

        quantityText.innerText = 1;

        cartCount++;

        document.getElementById("cart-count").innerText = cartCount;
    };

    // PLUS BUTTON

    plusBtn.onclick = () => {

        let quantity =
        Number(quantityText.innerText);

        quantity++;

        quantityText.innerText = quantity;

        cartCount++;

        document.getElementById("cart-count").innerText = cartCount;
    };

    // MINUS BUTTON

    minusBtn.onclick = () => {

        let quantity =
        Number(quantityText.innerText);

        quantity--;

        cartCount--;

        document.getElementById("cart-count").innerText = cartCount;

        if(quantity <= 0){

            quantityBox.style.display = "none";

            button.style.display = "block";
        }

        else{

            quantityText.innerText = quantity;
        }
    };

});

let popup = document.getElementById("product-popup");
let popupImg = document.getElementById("popup-img");
let popupTitle = document.getElementById("popup-title");
let popupPrice = document.getElementById("popup-price");
let popupDesc = document.getElementById("popup-desc");
let closePopup = document.getElementById("close-popup");

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImg.src = card.querySelector("img").src;

        popupTitle.innerText = card.querySelector("h3").innerText;

        popupPrice.innerText = card.querySelector("p").innerText;

        popupDesc.innerText = "Futuristic AI-powered product ✨";
    });

});

closePopup.onclick = () => {
    popup.style.display = "none";
};
