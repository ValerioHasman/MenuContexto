class MenuContexto {
  #menus = [];
  #subMenus = [];
  #itemListas = [];
  #itemDropListas = [];
  #tempoFocusDrop = [];
  #arrayrand = [];
  #todosIds = [];
  #ArrowLeftMenu = [];

  constructor(dados) {
    window.addEventListener("load",()=>{
      this.#DesligadorDeContexto();
      this.#criaEstiloPadrao();
      this.#criaDivEncapsuladora();
      this.#criaAlvo(dados);
      this.#addEventoMenus();
      this.#addEventoSubMenus();
      this.#addEventoItemListas();
      this.#addEventoItemDropListas();
      this.#addEventoproximoCimaOuBaixo();
      this.#addEventoFocos();
      this.#CriarListaParaFocus(this.#todosIds);
    });
  }

  #ehTelevisao(){
    if(/TV/i.test(navigator.userAgent)){
      return true;
    } else {
      return false;
    }
  }

  #criaEstiloPadrao(){
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule('#despejo *, #despejo *::before, #despejo *::after { box-sizing: revert; }',styleSheet.cssRules.length);
    styleSheet.insertRule('#despejo hr { margin: revert; color: revert; border: revert; opacity: revert; }',styleSheet.cssRules.length);
    styleSheet.insertRule('.quebra {color: #000; border: 1px solid #bbb;  width: fit-content;padding: .5rem;background-color: white; user-select: none;border-radius: .5rem;max-width: 90vw;display: none;top: 0;left: 0;box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.50);position: fixed;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.menu {min-width: 200px;margin-block-start: 0;margin-block-end: 0;list-style-type: none;margin-inline-start: 0;margin-inline-end: 0;padding-inline-start: 0;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.item {--margin-x: 0rem;--margin-y: 0.1rem;display: flex;flex-wrap: wrap;margin-top: calc(-1 * var(--margin-y));margin-right: calc(-0.5 * var(--margin-x));margin-left: calc(-0.5 * var(--margin-x));flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--margin-x) * 0.5);padding-left: calc(var(--margin-x) * 0.5);margin-top: var(--margin-y);align-items: flex-start;transition: all 0.1s;border-radius: .5rem;align-items: center;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.item:hover, .item:focus {background-color: rgba(59, 59, 59, 0.15);transition: all 0s;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.item .imagem {padding-left: .5rem;flex: 0 0 auto;width: 1.5rem;height: 100%;aspect-ratio: 1 / 1;display: flex;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.item .imagem img {max-width: 100%;max-height: 100%;margin: auto; }',styleSheet.cssRules.length);
    styleSheet.insertRule('.item .texto {flex: 1 0 0%;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.item .comando {flex: 0 0 auto;width: auto;height: auto;display: flex;padding-right: 0.5rem;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.comando pre {padding-left: 1rem;padding-right: .5rem;margin: auto;}',styleSheet.cssRules.length);
    styleSheet.insertRule('.item p {margin: 6px 0 !important;padding-left: 1rem;}',styleSheet.cssRules.length);
  }

  #addEventoFocos(){
    let elementoLi = document.getElementById('despejo').querySelectorAll('li');
    elementoLi.forEach((li)=>{
      li.addEventListener('focus', (e)=>{
        let divMenus = e.currentTarget.parentNode;
        let liMenus = e.currentTarget.parentNode.querySelectorAll('li');
        let liQuebra = [];
        let desteGrupo = [];
        divMenus.querySelectorAll('.quebra').forEach((liErr)=>{
          liQuebra = [...liQuebra, ...liErr.querySelectorAll('li')]
        });
        liMenus.forEach((certos)=>{
          let conte = 0;
          liQuebra.forEach((errado)=>{
            if(certos == errado){
              conte++;
            }
          });
          if(conte == 0){
            desteGrupo.push(certos)
          }
        });
        this.#arrayrand = desteGrupo;
      });
    });
  }

  #CriarListaParaFocus(ids){
    let listaLis = [];
    let conta = 0;

    ids.forEach((menus)=>{
      let divMenus = document.getElementById(menus)
      let liQuebra = [];
      divMenus.querySelectorAll('.quebra').forEach((liErr)=>{
        liQuebra = [...liQuebra, ...liErr.querySelectorAll('li')]
      });
      liQuebra.forEach((liSub)=>{
        let elementoPai = liSub.parentNode.parentNode.parentNode.parentNode;
        liSub.addEventListener('keydown', (e)=>{
          if(e.code == "ArrowLeft"){
            elementoPai.focus();
            e.stopPropagation();
          }
        });
      });
    });
  }

  #addEventoproximoCimaOuBaixo(){
    let todos = [];
    this.#todosIds.forEach((id)=>{
      let elemento = document.getElementById(id);
      let lis = elemento.querySelectorAll('li');
      todos = [...todos, ...lis];
    });
    todos.forEach((um)=>{
      um.addEventListener('keydown',(e)=>{
        if(e.keyCode == 40){
          this.#vaiParaFrente(e.target);
        }
        if(e.keyCode == 38){
          this.#vaiParaTras(e.target);
        }
      });
    });

  }

  #vaiParaTras(elem){
    let posicao = this.#arrayrand.indexOf(elem) - 1;
    if(this.#arrayrand[posicao] == undefined){
      posicao = this.#arrayrand.length - 1;
    }
    this.#arrayrand[posicao].focus();
  }

  #vaiParaFrente(elem){
    let posicao = this.#arrayrand.indexOf(elem) + 1;
    if(this.#arrayrand[posicao] == undefined){
      posicao = 0;
    }
    this.#arrayrand[posicao].focus();
  }

  #addEventoItemDropListas(){
    this.#itemDropListas.map((item)=>{
      let focar = item.lastChild.querySelectorAll('li')[0];
      item.addEventListener('mouseenter',()=>{
        this.#tempoFocusDrop.push(setTimeout(()=>{
          focar.focus();
        }, 300));
      });
      item.addEventListener('keydown', (e)=>{
        if(e.keyCode == 13 ^ e.keyCode == 39 ^ e.keyCode == 32){
          this.#tempoFocusDrop.push(setTimeout(()=>{
            this.#limparTempoLimite(this.#tempoFocusDrop);
            focar.focus();
          }, 300));
        }
      });
    });
  }

  #addEventoItemListas(){
    this.#itemListas.map((item)=>{
      let executar = document.getElementById(item.id);
      executar.addEventListener('click', ()=>{item.funcao();this.#semcontexto();})
      executar.addEventListener('keypress', (e)=>{
        if(e.key == 'Enter' ^ e.key == ' '){
          item.funcao();this.#semcontexto();
        }
      }) 
      executar.addEventListener('mouseenter', ()=>{executar.focus();this.#limparTempoLimite(this.#tempoFocusDrop);})
    });
  }

  #addEventoSubMenus(){
    this.#subMenus.map((sub)=>{
      let links = document.getElementById(sub);
      let tempoAbrir = [];
      let tempoFechar = [];
      this.#itemDropListas.push(links);
      links.addEventListener('mouseenter', ()=>{tempoAbrir.push(this.#comSubContexto(sub+'Menu', tempoFechar, links));});
      links.addEventListener('keydown', (e)=>{
        if(e.key == "ArrowRight" ^ e.key == "Enter" ^ e.key == " "){
          tempoAbrir.push(this.#comSubContexto(sub+'Menu', tempoFechar, links));
        }
        if(e.code == "ArrowLeft"){
          this.#ArrowLeftMenu.push(setTimeout(() => {
            this.#semSubContexto([sub], this.#ArrowLeftMenu, 0);
          }, 0));
        }
      });

      let listas = document.querySelectorAll('.item');
      let nolistas = document.getElementById(sub).querySelectorAll('.item');
      
      listas.forEach((elemento)=>{
        if(elemento.id != sub & this.#eele(nolistas, elemento)){
          elemento.addEventListener('mouseenter', ()=>{tempoFechar.push(this.#semSubContexto([sub], tempoAbrir));});
          elemento.addEventListener('focus', ()=>{tempoFechar.push(this.#semSubContexto([sub], tempoAbrir));});
        }
      })
    });
  }

  #eele(nolistas, elemento){
    let eh = false;
    let count = 0;
    nolistas.forEach((inter)=>{
      if(elemento == inter){
        count++;
      }
      if(count == 0){
        eh = true;
      }
      if(count != 0){
        eh = false;
      }
    })
    return eh;
  }

  #comSubContexto(menu, tempoFechar, links){
    this.#limparTempoLimite(tempoFechar);
    return setTimeout(() => {
      let posicaoLink = links.getBoundingClientRect();
      this.#mostraMenu(posicaoLink.x + posicaoLink.width, posicaoLink.y, menu);
    }, 300);
  }

  #semSubContexto(menu = this.#subMenus, tempoAbrir = [], tempoLimite = 300){
    this.#limparTempoLimite(tempoAbrir);
    return setTimeout(() => {
      menu.forEach(subMenu => {
        let alvo = document.getElementById(subMenu + 'Menu');
        alvo.style.display = 'none';
        alvo.style.top = 0 + 'px';
        alvo.style.left = 0 + 'px';
      });
    }, tempoLimite);
  }

  #limparTempoLimite(arrayTempo){
    arrayTempo.forEach(tempo => {
      clearTimeout(tempo);
    });
  }

  #addEventoMenus(){
    this.#menus.map((mn)=>{
      let menu = document.getElementById(mn.id);
      menu.onmousedown = (e)=>{ e.stopPropagation() }
      menu.oncontextmenu = (e)=>{ e.preventDefault() }
    });
  }

  #criaAlvo(dados){
    dados.map((link)=>{
      this.#todosIds.push(link.alvo + 'Menu');
      document.getElementById('despejo').innerHTML += this.#criaMenu(link.dado, link.alvo);
      let alvo= document.getElementById(link.alvo);
      let menu = document.getElementById(link.alvo + 'Menu');
      if(this.#ehTelevisao()){
        alvo.addEventListener('dblclick', (e) => { this.#contexto(e, link.alvo + 'Menu'); console.log(e);});
        alvo.addEventListener('dblclick', () => { document.getElementById(link.alvo + 'Menu').querySelectorAll('li')[0].focus(); });
      } else {
        alvo.addEventListener('contextmenu', (e) => { this.#contexto(e, link.alvo + 'Menu'); });
        alvo.addEventListener('contextmenu', () => { document.getElementById(link.alvo + 'Menu').querySelectorAll('li')[0].focus(); });
      }
      this.#menus.push(menu);
    });
  }

  #DesligadorDeContexto(){
    document.addEventListener('mousedown', () => { this.#semcontexto() });
    window.addEventListener('blur', () => { this.#semcontexto() });
  }

  #criaDivEncapsuladora(){
    let despejo = document.createElement("div");
    despejo.setAttribute("id", "despejo");
    document.body.appendChild(despejo);
  }

  #mostraMenu(x, y, id) {
    let menu = document.getElementById(id);
    menu.style.display = 'block';
    let larguraMenu = menu.clientWidth;
    let larguraPagina = window.innerWidth;
    let altutaMenu = menu.clientHeight;
    let altutaPagina = window.innerHeight;

    if (larguraMenu > larguraPagina - x) {
      menu.style.left = (larguraPagina - larguraMenu) + 'px';
    } else {
      menu.style.left = x + 'px';
    }
    if (altutaMenu > altutaPagina - y) {
      menu.style.top = (altutaPagina - altutaMenu) + 'px';
    } else {
      menu.style.top = y + 'px';
    }
  }
  
  #contexto(e, menu) {
    e.preventDefault();
    this.#semcontexto();
    this.#mostraMenu(e.clientX, e.clientY, menu);
  }

  #criaMenu(objetoMenu, idAlvo){
    let menuInteiro = '';
    menuInteiro += '<div class="quebra" ' + (idAlvo == undefined ? '' : ' id="'+ idAlvo + 'Menu' +'"') +'>\n'+
                    '<div class="conteudo">\n'+
                      '<ul class="menu">\n';
    
    objetoMenu.map((item)=>{
      if(item.texto == undefined && item.comando == undefined && item.funcao == undefined && item.imagem == undefined){
        menuInteiro += '<hr />'
      } else {
        menuInteiro += '<li tabindex="-1" class="item" role="menuitem" '
          + (this.#acessarChave(item.comando, item.funcao, idAlvo)) + ' '
          + (this.#ehObjeto(item.comando) ? `id="${idAlvo}${this.#subMenus.length}Sub"` : '') + '>\n';
        menuInteiro += '<div class="imagem">' + this.#haImagem(item.imagem) + '</div>\n';
        menuInteiro += '<div class="texto">' + this.#haTexto(item.texto) + '</div>\n';
        menuInteiro += '' + this.#doComando(item.comando, idAlvo) + '';
        menuInteiro += '</li>\n';
      }
    })
    menuInteiro += '</ul></div></div>';
    return menuInteiro;
  }
  
  #haTexto(texto){
    if(this.#ehString(texto)){
      return '<p>'+ texto +'</p>';
    }
    return '';
  }

  #haImagem(imagem){
    let mostraImagem = '';
    if(undefined != imagem){
      mostraImagem = '<img src="'+ imagem +'" />'
    }
    return mostraImagem;
  }

  #ehObjeto(variavel){
    return typeof variavel == typeof {};
  }
  #ehString(variavel){
    return typeof variavel == typeof '';
  }
  #ehFuncao(variavel){
    return typeof variavel == typeof (()=>{});
  }

  #acessarChave(comando, funcao, idAlvo){
    if((this.#ehString(comando) ^ comando == undefined ) & this.#ehFuncao(funcao)){
      let idFuncao = idAlvo + 'Fun' + this.#itemListas.length;
      this.#itemListas.push({id: idFuncao, funcao: funcao});
      return `${comando == undefined ? '' : `accesskey="${comando}"`} id="${idFuncao}"`;
    }
    return '';
  }

  #doComando(comando, id){

    let textoComando = '<div class="comando">';

    if(this.#ehString(comando)){
      textoComando += '<pre>Alt+' + comando + '</pre></div>\n';
    }
    if(this.#ehObjeto(comando)){
      let idLinkSub = id + this.#subMenus.length + 'Sub';
      textoComando += `<svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></div>\n${this.#criaMenu(comando, idLinkSub)}`;
      this.#subMenus.push(idLinkSub);
    }
    if(undefined == comando){
      textoComando += '</div>';
    }
    return textoComando;
  }

  #semcontexto() {
    this.#semSubContexto(undefined,undefined,0);
    this.#menus.map((link)=>{
      let alvo = document.getElementById(link.id);
      alvo.style.display = 'none';
      alvo.style.top = 0 + 'px';
      alvo.style.left = 0 + 'px';
    })
  }
}