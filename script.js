//Bos vindas ao Cliente
alert(`Bem vindo ao sistema de pedidos !!`)

//Recebendo o nome do cliente
var nomeCliente;
if(nomeCliente = prompt(`Digite seu nome:`)){
   alert(`${nomeCliente}, faça cadastro para continuar!`)
}
while(nomeCliente == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nomeCliente = prompt(`Informe seu nome para continuar:`)){
    alert(`${nomeCliente}, faça cadastro para continuar`);
    break;
    }  
}

//Cadastro
var nomeUsuario = prompt(`Crie seu nome de usuário:`);

while(nomeUsuario == ""){
    alert(`${nomeCliente}, você ainda não criou seu nome de usuário`);
    if(nomeUsuario = prompt(`Crie seu nome de usuário`)){
    break;
    }
}

var senhaUsuario;
if(senhaUsuario = prompt(`Crie sua senha:`)){
    alert(`Você já pode fazer login!`);
}

while(senhaUsuario == ""){
    alert(`${nomeCliente}, você ainda não criou sua senha!`);
    if(senhaUsuario = prompt(`Crie sua senha para continuar:`)){
    alert(`Você já pode fazer login!`);
    break;
    }
}

//Login

var nomeUsuarioLogin = prompt(`Nome de usuário:`);
if(nomeUsuarioLogin == nomeUsuario){
}

else{
    while(nomeUsuarioLogin != nomeUsuario || nomeUsuarioLogin == ""){
    alert(`Nome de usuário inválido ou não inserido`);
    nomeUsuarioLogin = prompt(`Digite seu nome de usuário para continuar:`);
    if(nomeUsuarioLogin == nomeUsuario){
    break;
    }
    }
}

var senhaLogin = prompt(`Senha:`);
if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeCliente}!`);
    console.log(`O cliente: ${nomeCliente}, está conectado`);
}

else{
    while(senhaLogin != senhaUsuario || senhaLogin == ""){
    alert(`Senha inválida ou não inserida!`);
    senhaLogin = prompt(`Digite sua senha para continuar:`);
    if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeCliente}!`);
    console.log(`O cliente: ${nomeCliente}, está conectado`);
    break;
    }
    }
}

//Cardápio
alert(`Cardápio\n
       Lanche: Big Chease\n
       Lanche: Big Bacon\n
       Lanche: Master Salad`);

//Pedido Lanche
var lanches = ["Big Chease", "Big Bacon", "Master Salad"];
var pedidoLanche = prompt(`Peça seu lanche:`);

var index_lanche = lanches.indexOf(pedidoLanche);
if(index_lanche != -1){
}

else{
    while(index_lanche == -1){
    alert(`Não temos esse lanche aqui ${nomeCliente}!`);
    pedidoLanche = prompt(`Peça algum lanche do cardápio:`);
    index_lanche = lanches.indexOf(pedidoLanche);
    if(index_lanche != -1){
    break;
    }
    }
}

//Cardápio bebidas
alert(`Cardápio\n
       Bebida: Coquinha Gelada\n
       Bebida: Kuat Açai\n
       Bebida: Morango Refri`);

var bebidas = ["Coquinha Gelada", "Kuat Açai", "Morango Refri"];
var pedidoBebida = prompt(`Peça sua bebida:`);

var index_bebida = bebidas.indexOf(pedidoBebida);
if(index_bebida != -1){
}

else{
    while(index_bebida == -1){
    alert(`Não temos essa bebida aqui ${nomeCliente}!`);
    pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
    index_bebida = bebidas.indexOf(pedidoBebida);
    if(index_bebida != -1){
    break;
    }
    }
}

//Localização

alert(`${nomeCliente}, informe pra gente sua localização para a entrega!`);

var cidadeCliente = prompt(`Cidade:`);
while(cidadeCliente == ""){
    alert(`Você não informou a cidade para a entrega!`)
    if(cidadeCliente = prompt(`Informe sua cidade para a entrega:`)){
    break;
    }
}

var bairroCliente = prompt(`Bairro:`);
while(bairroCliente == ""){
    alert(`Você ainda não informou o bairro para a entrega!`);
    if(bairroCliente = prompt(`Informe seu bairro:`)){
    break;
    }
}

var ruaCliente = prompt(`Rua:`);
while(ruaCliente == ""){
    alert(`Você ainda não informou a sua rua para a entrega!`)
    if(ruaCliente = prompt(`Informe sua rua:`)){
    break;
    }
}

var numeroCasa = prompt(`Número:`);
while(numeroCasa == ""){
    alert(`Você ainda não informou o número de sua casa!`);
    if(numeroCasa = prompt(`Informe o número:`)){
    break;
    }
}

//Finalização

alert(`Tudo certo com o seu pedido ${nomeCliente}, estamos a caminho!`);
console.log(`O cliente ${nomeCliente} fez um pedido!\n
             Um: ${pedidoLanche}\n
             E um refrigerante : ${pedidoBebida}\n
             Entregar em:\n
             Cidade: ${cidadeCliente}\n
             Bairro: ${bairroCliente}\n
             Rua: ${ruaCliente}\n
             Número: ${numeroCasa}`);
