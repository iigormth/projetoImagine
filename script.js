const contentResultadoPesquisa = document.querySelector(".contentResultadoPesquisa"); 
const inputSearch = document.querySelector("input[type='search']"); 

let items = []; 


inputSearch.oninput = () => {
    contentResultadoPesquisa.innerHTML = "";

    items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};



function addHTML(item) {
    const div = document.createElement("div");
    div.innerHTML = item;
    contentResultadoPesquisa.append(div);
  }

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((dadosConvertApiJson) => dadosConvertApiJson.json())
    .then((todos) => {
        todos.forEach((informacaoJsonHTML) => {
            items.push(informacaoJsonHTML.title);
            
            
        });

    });


//  lINHA 1: content e nome dado na div pega dados da api para o  index
// LINHA 2:  content e nome dado na div de entrada de dados input do index
//LINHA 5: um array que apelidado a items onde vai carregar os itens 
// LINHA 7: barra de pesquisa
// LINHA 25: pegando dados api e convertendo para json 