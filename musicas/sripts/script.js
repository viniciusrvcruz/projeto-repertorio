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

    if (targetEl.classList.contains('estrofe')) {
        divEl.classList.add('clicou')
        if(document.querySelector('div.itens')) {
            document.querySelector('div.itens').remove()
        }
    }


    if(divEl.classList.contains('clicou')) {

        const item = document.createElement('div')
        item.classList.add('itens')
        item.innerHTML = `
        <span class="material-symbols-outlined remover">close
        </span>
        <input type="text" name="comentario" id="comentario">
        <button class="btn">Enviar</button>
    `
    document.querySelector('.clicou').appendChild(item)
    const buttonEnviar = document.querySelector('.btn')
    buttonEnviar.classList.add('enviou')
    divEl.classList.toggle('clicou')
    comentario = document.querySelector('#comentario')
    comentario.focus()

    document.querySelector('.remover').addEventListener('click', (a) => {
        document.querySelector('div.itens').remove()
    })

    document.querySelector('div.itens').addEventListener('keypress', function(b) {

        if(b.key === "Enter") {
        const targetBt = b.target
        const parentEl = targetBt.closest('button')
        const divES = targetEl.closest('div')

        const comentarioValue = comentario.value
        if(comentarioValue)
        {
            const anotacao = document.createElement('p')
            anotacao.classList.add('p-comentario')
            anotacao.innerText = `${comentario.value}`
            divES.appendChild(anotacao)
            comentario.value = ''
            comentario.focus()
        }
        
        }
    })

    document.querySelector('.enviou').addEventListener('click', (a) => {
        const targetBt = a.target
        const parentEl = targetBt.closest('button')
        const divES = targetEl.closest('div')

        const comentarioValue = comentario.value
        if(comentarioValue)
        {
            const anotacao = document.createElement('p')
            anotacao.classList.add('p-comentario')
            anotacao.innerText = `${comentario.value}`
            divES.appendChild(anotacao)
            comentario.value = ''
            comentario.focus()
        }
    })
    }

    
})

/*
document.querySelector('div.estrofe').addEventListener('mouseout', (e) => {
    document.querySelector('div.itens').remove()
})*/







