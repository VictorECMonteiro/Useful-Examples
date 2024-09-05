



//Função para introduzir dados no localStorage com data de vencimento.
function writeStorage()
{
    //recupera a data atual
    const dataAtual = new Date()
    //Seta um exemplo de dados para localStorage
    localStorage.setItem("login",JSON.stringify({
        "Nome": "victor",
        "senha": "Victor",
        "apiKey":"blablabla"
    }))
    //Seta uma chave valor para data de expirar para o localStorage
    localStorage.setItem("timeValidation", JSON.stringify({
        "expires": dataAtual.getTime() + 86400000
    }))
}

//Ler os valores do localStorage e retorna eles, talvez necessário parse
function readStorage(){
    var l = localStorage.length - 1
    var valores = []
    for(i=0; i<=l; i++){
        chaveArray = localStorage.key(l),
        valores = localStorage.getItem(chaveArray)
        return valores
    }
}




