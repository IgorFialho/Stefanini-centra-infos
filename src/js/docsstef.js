window.onload = function(){ 

    document.getElementById('box1').onclick = abrirFormulario ;
    
    document.getElementById('home').onclick = home ;

}


function abrirFormulario() {
    window.location.href = "data/formulario.html";
  }

  function home() {
    window.location.href = "index.html";
  }


  // Codigo do campo de pesquisa
  const input = document.getElementById("searchInput");
  const lista = document.getElementById("lista");
  const itens = lista.getElementsByTagName("li");

  input.addEventListener("input", () => {
    const filtro = input.value.toLowerCase();
    for (let i = 0; i < itens.length; i++) {
      const texto = itens[i].textContent.toLowerCase();
      itens[i].style.display = texto.includes(filtro) ? "" : "none";
    }
  });
