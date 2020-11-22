// create map
var map = L.map('mapid').setView([38.7509192,-9.2829202], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker)

    // add incon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// adcionar o campo de fotos
function addPhotoField() {
    // pegar o container e fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // limpar texto do campo
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function removeField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar campo de upload de imagem
    span.parentNode.remove();
}

// select yes or no
function yesOrNo(event) {
    
    // remover selecao de botao caso outro seja selecionado
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove("active"))

    // capture button e ativa o selecionado
    const selected = event.currentTarget
    selected.classList.add("active")

    // verificar se sim ou não
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = selected.dataset.value
}