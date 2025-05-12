window.onload = function(){

  document.getElementById('pdf-assinar').onclick = openassinatura ;

  document.getElementById('baixar').onclick = baixartermo;

  document.getElementById('genereta-pdf').onclick = gerar;

  document.getElementById('baixar-em-branco').onclick = baixarembranco;

  }


   // Gera para impressão
  function gerar(){

    const tabeladate = document.getElementById('table-date');
    const tabela = document.getElementById('tableinicial');
    const campos = tabela.querySelectorAll('input');
    const camposdate = tabeladate.querySelectorAll('input');
    let algumVazio = false;
  
    campos.forEach(campo => {
      if (campo.value.trim() === '') {
        campo.style.border = '1.5px solid red'; // Destaca campo vazio
        algumVazio = true;
      } else {
        campo.style.border = '0px solid rgba(255, 0, 0, 0)'; // Limpa borda se preenchido
      }
    });

    camposdate.forEach(campo => {
      if (campo.value.trim() === '') {
        campo.style.border = '1.5px solid red'; // Destaca campo vazio
        algumVazio = true;
      } else {
        campo.style.border = '0px solid rgba(255, 0, 0, 0)'; // Limpa borda se preenchido
        campo.style.borderBottom = '1.4px solid black';
      }
    });
  
    if (algumVazio) {
      alert('Por favor, preencha todos os campos da tabela antes de continuar.');
      return false; // Impede de prosseguir
    }
  
  window.scrollTo(0, 0);

    const content = document.querySelector("#content");

    const options = {
        margin: [2, 3.5, 2, 3.5], // Margens: [cima, direito, baixo, esquerda]
        filename: "Proposta_VT_Preenchida.pdf",
        image: { type: 'jpeg', quality: 1 },
        tml2canvas: {scale:200, logging: true, dpi:1200, letterRendering:true},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait" }
    }

    alert('Caso haja distorções na qualidade da renderização do documento ou a resolução fique baixa, defina o ZOOM da página para 150% ou mais e você obterá alta definição na qualidade do documento.');

      html2pdf().set(options).from(content).toPdf().get('pdf').then(function (pdf) {
   
      window.open(pdf.output('bloburl'), '_blank');
  });

  }
  
      //Gera para assinatura
  function openassinatura(){

    const tabeladate = document.getElementById('table-date');
    const tabela = document.getElementById('tableinicial');
    const campos = tabela.querySelectorAll('input');
    const camposdate = tabeladate.querySelectorAll('input');
    let algumVazio = false;
  
    campos.forEach(campo => {
      if (campo.value.trim() === '') {
        campo.style.border = '1.5px solid red'; // Destaca campo vazio
        algumVazio = true;
      } else {
        campo.style.border = '0px solid rgba(255, 0, 0, 0)'; // Limpa borda se preenchido
      }
    });

    camposdate.forEach(campo => {
      if (campo.value.trim() === '') {
        campo.style.border = '1.5px solid red'; // Destaca campo vazio
        algumVazio = true;
      } else {
        campo.style.border = '0px solid rgba(255, 0, 0, 0)'; // Limpa borda se preenchido
        campo.style.borderBottom = '1.4px solid black';
      }
    });
  
    if (algumVazio) {
      alert('Por favor, preencha todos os campos da tabela antes de continuar.');
      return false; // Impede de prosseguir
    }
        window.scrollTo(0, 0);
    
          const content = document.querySelector("#content");
      
          const options = {
            margin: [2, 3.5, 2, 3.5], // Margens: [cima, direito, baixo, esquerda]
            filename: "Proposta_VT_Preenchida.pdf",
            image: { type: 'jpeg', quality: 1 },
            tml2canvas: {scale:200, logging: true, dpi:1200, letterRendering:true},
            jsPDF: {unit: "mm", format: "a4", orientation: "portrait" }
        }
      
          html2pdf().set(options).from(content).save(); 

          alert('Você será direcionado para o GOV.BR, uma copia do documento será baixada automaticamente.');

    window.open("https://sso.acesso.gov.br/login?client_id=assinador.iti.br&authorization_id=1935495407b", '_blank', "width=2000,height=1500,");
      
  }  
     
  //Faz dowloading em pdf 
  function baixartermo(){

    const tabeladate = document.getElementById('table-date');
    const tabela = document.getElementById('tableinicial');
    const campos = tabela.querySelectorAll('input');
    const camposdate = tabeladate.querySelectorAll('input');
    let algumVazio = false;
  
    campos.forEach(campo => {
      if (campo.value.trim() === '') {
        campo.style.border = '1.5px solid red'; // Destaca campo vazio
        algumVazio = true;
      } else {
        campo.style.border = '0px solid rgba(255, 0, 0, 0)'; // Limpa borda se preenchido
      }
    });

    camposdate.forEach(campo => {
      if (campo.value.trim() === '') {
        campo.style.border = '1.5px solid red'; // Destaca campo vazio
        algumVazio = true;
      } else {
        campo.style.border = '0px solid rgba(255, 0, 0, 0)'; // Limpa borda se preenchido
        campo.style.borderBottom = '1.4px solid black';
      }
    });
  
    if (algumVazio) {
      alert('Por favor, preencha todos os campos da tabela antes de continuar.');
      return false; // Impede de prosseguir
    }

    window.scrollTo(0, 0);

      const content = document.querySelector("#content");
  
      const options = {
        margin: [2, 3.5, 2, 3.5], // Margens: [cima, direito, baixo, esquerda]
        filename: "Proposta_VT_Preenchida.pdf",
        image: { type: 'jpeg', quality: 1 },
        tml2canvas: {scale:200, logging: true, dpi:1200, letterRendering:true},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait" }
    }

    alert('Caso haja distorções na qualidade da renderização do documento ou a resolução fique baixa, defina o ZOOM da página para 150% ou mais e você obterá alta definição na qualidade do documento.');
    
    html2pdf().set(options).from(content).save(); 

}  

             
  // Função que defina a mascara dos campos

function formatWithMask(value, mask) {
  // Remove tudo que não é dígito
  const digits = value.replace(/\D/g, '');
  let result = '';
  let digitIndex = 0;

  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === '#') {
      result += digits[digitIndex++];
    } else {
      result += mask[i];
    }
  }

  return result;
}

// Ao digitar em qualquer input[data-mask], atualiza o valor
function attachMasks() {
  document.querySelectorAll('input[data-mask]').forEach(input => {
    const mask = input.dataset.mask;
    input.addEventListener('input', () => {
      input.value = formatWithMask(input.value, mask);
    });
    // opcional: impede colar texto que fuja da máscara
    input.addEventListener('paste', e => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData('text');
      input.value = formatWithMask(pasted, mask);
    });
  });
}
// Inicializa após carregar a página
document.addEventListener('DOMContentLoaded', attachMasks);



function baixarembranco(){

  window.scrollTo(0, 0);

  const content = document.querySelector("#content");

  const options = {
    margin: [2, 3.5, 2, 3.5], // Margens: [cima, direito, baixo, esquerda]
    filename: "Proposta_VT_Preenchida.pdf",
    image: { type: 'jpeg', quality: 1 },
    tml2canvas: {scale:200, logging: true, dpi:1200, letterRendering:true},
    jsPDF: {unit: "mm", format: "a4", orientation: "portrait" }
}

alert('Caso haja distorções na qualidade da renderização do documento ou a resolução fique baixa, defina o ZOOM da página para 150% ou mais e você obterá alta definição na qualidade do documento.');

html2pdf().set(options).from(content).save(); 

}