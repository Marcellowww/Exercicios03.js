let contador = 0 

function nextPage(){
    document.getElementById('nextPage').style.display = "flex";
}

function clique() {
    contador++
    document.querySelector('section#cont').innerHTML = `<p>Você clicou ${contador} vezes</p>`;
    nextPage();
}

function limpar(){
    contador = 0
    document.querySelector('section#cont').innerHTML = `<p>Você clicou 0 vezes</p>`;
}