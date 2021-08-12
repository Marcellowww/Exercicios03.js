let num = gerador();
console.log(num)

function gerador() { return Math.round(Math.random() * 100); }

function acertou() {
    document.getElementById('errou').style.display = "none";
    document.getElementById('acertou').style.display = "block";
    nextPage();
    return num = gerador()
}
function errou() {
    document.getElementById('acertou').style.display = "none";
    document.getElementById('errou').style.display = "block";
    nextPage();
}

function nextPage() { document.getElementById('nextPage').style.display = "block" }

function verificar() {
    const numero = document.getElementById('numero').value;
    if (numero == "") {
        alert("Você não inseriu nenhum número");
        return;
    }

    if (numero == num) { acertou(); } else { errou(); }
}