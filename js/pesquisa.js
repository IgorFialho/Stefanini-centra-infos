window.onload = function(){
    document.getElementById('pesquisa').onclick = pesquisar ;
    document.getElementById('pesquisaN').onclick = pesquisarNome ;
    document.getElementById('desbloquear').onclick =  desbloqueado ;
    const input = document.getElementById('number');
    const inputname = document.getElementById('name');

    //Pega o Value do campo de pesquisa e altera a url do ISM ao apertar Enter
    input.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        
        N_chamado = document.getElementById('number').value;
  
        document.querySelector("#alert").classList.remove('hide');  
        window.open('https://csm3.serviceaide.com/#ticket/' + N_chamado , '_blank');
      }
    });

    //Pega o Value do campo de pesquisa por NOME e altera a url do ISM ao apertar Enter
    inputname.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        
        N_nome = document.getElementById('name').value;
  
        document.querySelector("#alert").classList.remove('hide');  
         window.open('https://csm3.serviceaide.com/?userLogin=' + N_nome + '@oncoclinicas.com#WORKSPACES-SERVICE-DESK-Scratchpad', '_blank');
      }
    });
     
     
  }
  
   // Pega o Value do campo de pesquisa e altera a url do ISM ao clicar em pesquisar
  function pesquisar(){
    
    N_chamado = document.getElementById('number').value;

    document.querySelector("#alert").classList.remove('hide');  
    window.open('https://csm3.serviceaide.com/#ticket/' + N_chamado , '_blank');
  }
  
    // Pesquisa chamado por NOME
    function pesquisarNome(){
 
      N_nome = document.getElementById('name').value;
  
      document.querySelector("#alert").classList.remove('hide');  
      window.open('https://csm3.serviceaide.com/?userLogin=' + N_nome + '@oncoclinicas.com#WORKSPACES-SERVICE-DESK-Scratchpad', '_blank');
    }


    function desbloqueado(){
        
        // Envia o valor de pesquisa para o content script que está sendo executado na página ativa
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: function(){

              window.open('https://csm3.serviceaide.com/#MANAGE-ADMINISTRATION-Tools', '_blank');


            }
      
          });
        });
   
      
    }


