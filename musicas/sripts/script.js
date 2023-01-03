document.querySelector('div#letra').addEventListener('click', (e) => {

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
            clickButton(b)
        }
        
    })

    document.querySelector('.enviou').addEventListener('click', (a) => {
        clickButton(a)
    })
    }

    function clickButton(a) {
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
}
    
})







