function modoTema() {
  const tema = document.querySelector('[data-bs-theme]');
  const botao = document.querySelector('#botaoTema');

  if(tema.attributes["data-bs-theme"].nodeValue == 'light'){
    botao.innerHTML = '<i class="bi bi-moon-stars"></i>';
    tema.attributes["data-bs-theme"].nodeValue = 'dark';
  } else {
    botao.innerHTML = '<i class="bi bi-brightness-high"></i>';
    tema.attributes["data-bs-theme"].nodeValue = 'light';
  }
}

fetch('https://valeriohasman.github.io/MenuContexto/navProjetos.html')
.then(resp => resp.text())
.then((data) => {
  document.body.innerHTML = data + document.body.innerHTML;
})
.catch(err=>{console.log(err)});
