function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Seleciona a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Itens de coleta

// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    // add or remove class with javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    // const alreadySelected = selectedItems.findIndex(function (item) {
    //     const itemFound = item == itemId // retorna true ou false 
    //caso ache o itemId no item(do selected items)
    //     return itemFound
    // })
    // simplificar função acima

    const alreadySelected = selectedItems.findIndex(item => item == itemId) // retorn o index de 0 a 6


    // se já estiver selecionado, tirar da seleção
    // if (alreadySelected >= 0) {
    //     const filteredItems = selectedItems.filter(item => {
    //         const itemIsDifferent = item != itemId // compara o item que achou o index acima e compara
    //         // caso seja igual, a expressão retornará falso
    //         return itemIsDifferent
    //     })
    // }
    // simplificar função acima

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => item != itemId)

        selectedItems = filteredItems
        // se não estiver selecionado, adicionar à seleção
    } else {
        selectedItems.push(itemId)
    }


    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems


}