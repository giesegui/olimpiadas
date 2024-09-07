function pesquisar(){
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if(!campoPesquisa){
        section.innerHTML = "Nenhum atleta foi encontrado";
        return;
    }
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada elemento (dado) no array 'dados'
    for (let dado of dados) {
        if(dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa) || dado.tags.toLowerCase().includes(campoPesquisa)){
            // Concatena HTML para criar um novo item de resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        };   
    };

    if (!resultados){
        resultados = "Não encontrado na nossa base de dados";
    };
    // Atribui a string com os resultados formatados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}




