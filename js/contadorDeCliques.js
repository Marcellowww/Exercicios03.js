let contador = 0 

function clique() {
    contador++
    document.querySelector('section#cont').innerHTML = `<p>Você clicou ${contador} vezes</p>`;
}

function limpar(){
    contador = 0
    document.querySelector('section#cont').innerHTML = `<p>Você clicou 0 vezes</p>`;
}