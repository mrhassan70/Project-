function openModal(productName, productPrice, myImg) {
    document.getElementById('myImg').setAttribute("src",myImg) 
    document.getElementById('modal-title').innerText = productName;
    document.getElementById('modal-price').innerText = productPrice;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function buyNow() {
    alert("Thank you for your purchase!");
    closeModal();
}

function addToCart() {
    alert("Item added to cart!");
    closeModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
