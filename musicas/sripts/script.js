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
/*
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
*/

document.querySelector('section').addEventListener('click', (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest('p')
    const divEl = targetEl.closest('div')


    if(parentEl.style.color == 'blue') {
        parentEl.style.color = 'black'
    } else if (targetEl.classList.contains('estrofe')) {
        divEl.classList.add('clicou')
        parentEl.style.color = 'blue'   
    }


    if(divEl.classList.contains('clicou')) {

        const item = document.createElement('div')
        item.classList.add('itens')
        item.innerHTML = `
        <span class="material-symbols-outlined add">
        library_add
        </span>
        <input type="text" name="comentario" id="comentario">
        <button class="btn">Enviar</button>
    `
    document.querySelector('.clicou').appendChild(item)
    const buttonEnviar = document.querySelector('.btn')
    buttonEnviar.classList.add('enviou')
    divEl.classList.toggle('clicou')
    }

    document.querySelector('.enviou').addEventListener('click', (e) => {
        const targetBt = e.target
        const parentEl = targetBt.closest('button')
        const divES = targetEl.closest('div')

        comentario = document.querySelector('#comentario')
        const anotacao = document.createElement('p')
        anotacao.classList.add('p-comentario')
        anotacao.innerHTML = `${comentario.value}`
        divES.appendChild(anotacao)
        document.querySelector('div.itens').remove()
    })
})

/*
document.querySelector('div.estrofe').addEventListener('mouseout', (e) => {
    document.querySelector('div.itens').remove()
})*/







