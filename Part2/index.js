let suitInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

function setCard() {
    let card = document.getElementById(suitInput.value);
    card.style.color = colorInput.value;
}

