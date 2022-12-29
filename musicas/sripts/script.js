/*
<div class="itens">
<span class="material-symbols-outlined add">
    library_add
    </span>
<input type="text" name="comentario" id="comentario">
<button class="btn">Enviar</button>
</div>
<p class="p-comentario">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, mollitia quod fuga reiciendis distinctio neque officiis asperiores sit explicabo tenetur adipisci ipsam. Dolores ab maxime tenetur cumque aliquid consequuntur veritatis.</p>
*/

let banco = [
    {'anotacao': 'teste'},{'anotacao': 'teste1'},{'anotacao': 'teste2'}
]

const criarAba = () => {
    const item = document.createElement('div')
    item.classList.add('itens')
    item.innerHTML = `
        <span class="material-symbols-outlined add">
        library_add
        </span>
        <input type="text" name="comentario" id="comentario">
        <button class="btn" onclick="clickButton()">Enviar</button>
    `
    document.querySelector('.estrofe').appendChild(item)
}

const criarAnotacao = (anotacao) => {
    const anot = document.createElement('p')
    anot.classList.add('p-comentario')
    anot.innerHTML += `${anotacao}`
    document.querySelector('.estrofe').appendChild(anot)
}

const limparAnotacao = () => {
    const estrofe = document.querySelector('.estrofe')
    while (estrofe.anot) {
        estrofe.removeChild(anot)
    }

}

const atualizarTela = () => {
    limparAnotacao()
    banco.forEach(anot => criarAnotacao(anot.anotacao))
}






