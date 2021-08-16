function confirmar(){
    const nome = document.getElementById('nome').value;
    const snome = document.getElementById('snome').value;
    const tel = document.getElementById('tel').value;
    const endereco = document.getElementById('endereco').value;
    const hrs = document.getElementById('hrs').value;
    const data = document.getElementById('data').value;
    
    if(nome == "" && snome == "" && tel == "" && endereco == "" && hrs == "" && data == "")return;
    
    const dataArray = data.split('-');
    const dia = dataArray[2];
    const mes = dataArray[1];
    const ano = dataArray[0];

    
    console.log(dia, mes, ano);
    console.log(hrs)

    document.getElementById('sec-container').style.display = 'block';
    document.querySelector('section#confirmar').innerHTML = `<h2>Confirme seus dados:</h2><ul><li>Nome: ${nome}</li><li>Sobrenome: ${snome}</li><li>Telefone: ${tel}</li><li>Endereço: ${endereco}</li></ul><p>Consulta marcada para o dia ${dia} do ${mes} de ${ano}</p>`;
    
}



