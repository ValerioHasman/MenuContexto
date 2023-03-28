(() => {
  'use strict'

  var erros = [{ inicio: 'Iniciado' }];

  try {

    window.addEventListener('log', (e) => {
      erros.push({
        addEventLog: {
          messageE: e.message,
        }
      })
    })

    window.addEventListener('warn', (e) => {
      erros.push({
        addEventWarn: {
          messageE: e.message,
        }
      })
    })

    window.addEventListener('info', (e) => {
      erros.push({
        addEventInfo: {
          messageE: e.message,
        }
      })
    })


  } catch (ex) {
    window.alert(
      ex.message + '  \n' +
      ex.stack,
    );
  }


  try {
    window.addEventListener('error', (e) => {
      erros.push({
        addEventErr: {
          messageE: e.message,
          message: e.error.message,
          stack: e.error.stack,
          filename: e.filename,
          colno: e.colno,
          lineno: e.lineno,
          type: e.type
        }
      })
    })
  } catch (ee) {
    erros.push('Não vai dá!!!');
  }
  try {




    class MenuContexto {
      #menus = [];
      #subMenus = [];
      #itemListas = [];
      #itemDropListas = [];
      #tempoFocusDrop = [];
      #arrayrand = [];
      #todosIds = [];
      #ArrowLeftMenu = [];
      funciona = "funciona sim";

      constructor(dados) {
        erros.push({ tipo: "Entrou no constructor" });
        window.addEventListener("load", () => {
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
          erros.push({ tipo: "Finalizou devidamente o load" });
        });
        erros.push({ tipo: "Finalizou devidamente o constructor" });
      }

      #ehTelevisao() {
        if (/TV/i.test(navigator.userAgent)) {
          erros.push({ tipo: "É TV mesmo" });
          return true;
        } else {
          return false;
        }
      }

      #criaEstiloPadrao() {
        const styleEl = document.createElement("style");
        document.head.appendChild(styleEl);
        const styleSheet = styleEl.sheet;
        styleSheet.insertRule('#despejo *, #despejo *::before, #despejo *::after { box-sizing: revert; }', styleSheet.cssRules.length);
        styleSheet.insertRule('#despejo hr { margin: revert; color: revert; border: revert; opacity: revert; }', styleSheet.cssRules.length);
        styleSheet.insertRule('.quebra {color: #000; border: 1px solid #bbb;  width: fit-content;padding: .5rem;background-color: white; user-select: none;border-radius: .5rem;max-width: 90vw;display: none;top: 0;left: 0;box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.50);position: fixed;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.menu {min-width: 200px;margin-block-start: 0;margin-block-end: 0;list-style-type: none;margin-inline-start: 0;margin-inline-end: 0;padding-inline-start: 0;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.item {--margin-x: 0rem;--margin-y: 0.1rem;display: flex;flex-wrap: wrap;margin-top: calc(-1 * var(--margin-y));margin-right: calc(-0.5 * var(--margin-x));margin-left: calc(-0.5 * var(--margin-x));flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--margin-x) * 0.5);padding-left: calc(var(--margin-x) * 0.5);margin-top: var(--margin-y);align-items: flex-start;transition: all 0.1s;border-radius: .5rem;align-items: center;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.item:hover, .item:focus {background-color: rgba(59, 59, 59, 0.15);transition: all 0s;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.item .imagem {padding-left: .5rem;flex: 0 0 auto;width: 1.5rem;height: 100%;aspect-ratio: 1 / 1;display: flex;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.item .imagem img {max-width: 100%;max-height: 100%;margin: auto; }', styleSheet.cssRules.length);
        styleSheet.insertRule('.item .texto {flex: 1 0 0%;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.item .comando {flex: 0 0 auto;width: auto;height: auto;display: flex;padding-right: 0.5rem;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.comando pre {padding-left: 1rem;padding-right: .5rem;margin: auto;}', styleSheet.cssRules.length);
        styleSheet.insertRule('.item p {margin: 6px 0 !important;padding-left: 1rem;}', styleSheet.cssRules.length);
      }

      #addEventoFocos() {
        let elementoLi = document.getElementById('despejo').querySelectorAll('li');
        elementoLi.forEach((li) => {
          li.addEventListener('focus', (e) => {
            let divMenus = e.currentTarget.parentNode;
            let liMenus = e.currentTarget.parentNode.querySelectorAll('li');
            let liQuebra = [];
            let desteGrupo = [];
            divMenus.querySelectorAll('.quebra').forEach((liErr) => {
              liQuebra = [...liQuebra, ...liErr.querySelectorAll('li')]
            });
            liMenus.forEach((certos) => {
              let conte = 0;
              liQuebra.forEach((errado) => {
                if (certos == errado) {
                  conte++;
                }
              });
              if (conte == 0) {
                desteGrupo.push(certos)
              }
            });
            this.#arrayrand = desteGrupo;
          });
        });
      }

      #CriarListaParaFocus(ids) {

        ids.forEach((menus) => {
          let divMenus = document.getElementById(menus)
          let liQuebra = [];
          divMenus.querySelectorAll('.quebra').forEach((liErr) => {
            liQuebra = [...liQuebra, ...liErr.querySelectorAll('li')]
          });
          liQuebra.forEach((liSub) => {
            let elementoPai = liSub.parentNode.parentNode.parentNode.parentNode;
            liSub.addEventListener('keydown', (e) => {
              if (e.code == "ArrowLeft") {
                elementoPai.focus();
                e.stopPropagation();
              }
            });
          });
        });
      }

      #addEventoproximoCimaOuBaixo() {
        let todos = [];
        this.#todosIds.forEach((id) => {
          let elemento = document.getElementById(id);
          let lis = elemento.querySelectorAll('li');
          todos = [...todos, ...lis];
        });
        todos.forEach((um) => {
          um.addEventListener('keydown', (e) => {
            if (e.keyCode == 40) {
              this.#vaiParaFrente(e.target);
            }
            if (e.keyCode == 38) {
              this.#vaiParaTras(e.target);
            }
          });
        });

      }

      #vaiParaTras(elem) {
        let posicao = this.#arrayrand.indexOf(elem) - 1;
        if (this.#arrayrand[posicao] == undefined) {
          posicao = this.#arrayrand.length - 1;
        }
        this.#arrayrand[posicao].focus();
      }

      #vaiParaFrente(elem) {
        let posicao = this.#arrayrand.indexOf(elem) + 1;
        if (this.#arrayrand[posicao] == undefined) {
          posicao = 0;
        }
        this.#arrayrand[posicao].focus();
      }

      #addEventoItemDropListas() {
        this.#itemDropListas.map((item) => {
          let focar = item.lastChild.querySelectorAll('li')[0];
          item.addEventListener('mouseenter', () => {
            this.#tempoFocusDrop.push(setTimeout(() => {
              focar.focus();
            }, 300));
          });
          item.addEventListener('keydown', (e) => {
            if (e.keyCode == 13 ^ e.keyCode == 39 ^ e.keyCode == 32) {
              this.#tempoFocusDrop.push(setTimeout(() => {
                this.#limparTempoLimite(this.#tempoFocusDrop);
                focar.focus();
              }, 300));
            }
          });
        });
      }

      #addEventoItemListas() {
        this.#itemListas.map((item) => {
          let executar = document.getElementById(item.id);
          executar.addEventListener('click', () => { item.funcao(); this.#semcontexto(); })
          executar.addEventListener('keypress', (e) => {
            if (e.key == 'Enter' ^ e.key == ' ') {
              item.funcao(); this.#semcontexto();
            }
          })
          executar.addEventListener('mouseenter', () => { executar.focus(); this.#limparTempoLimite(this.#tempoFocusDrop); })
        });
      }

      #addEventoSubMenus() {
        this.#subMenus.map((sub) => {
          let links = document.getElementById(sub);
          let tempoAbrir = [];
          let tempoFechar = [];
          this.#itemDropListas.push(links);
          links.addEventListener('mouseenter', () => { tempoAbrir.push(this.#comSubContexto(sub + 'Menu', tempoFechar, links)); });
          links.addEventListener('keydown', (e) => {
            if (e.key == "ArrowRight" ^ e.key == "Enter" ^ e.key == " ") {
              tempoAbrir.push(this.#comSubContexto(sub + 'Menu', tempoFechar, links));
            }
            if (e.code == "ArrowLeft") {
              this.#ArrowLeftMenu.push(setTimeout(() => {
                this.#semSubContexto([sub], this.#ArrowLeftMenu, 0);
              }, 0));
            }
          });

          let listas = document.querySelectorAll('.item');
          let nolistas = document.getElementById(sub).querySelectorAll('.item');

          listas.forEach((elemento) => {
            if (elemento.id != sub & this.#eele(nolistas, elemento)) {
              elemento.addEventListener('mouseenter', () => { tempoFechar.push(this.#semSubContexto([sub], tempoAbrir)); });
              elemento.addEventListener('focus', () => { tempoFechar.push(this.#semSubContexto([sub], tempoAbrir)); });
            }
          })
        });
      }

      #eele(nolistas, elemento) {
        let eh = false;
        let count = 0;
        nolistas.forEach((inter) => {
          if (elemento == inter) {
            count++;
          }
          if (count == 0) {
            eh = true;
          }
          if (count != 0) {
            eh = false;
          }
        })
        return eh;
      }

      #comSubContexto(menu, tempoFechar, links) {
        this.#limparTempoLimite(tempoFechar);
        return setTimeout(() => {
          let posicaoLink = links.getBoundingClientRect();
          this.#mostraMenu(posicaoLink.x + posicaoLink.width, posicaoLink.y, menu);
        }, 300);
      }

      #semSubContexto(menu = this.#subMenus, tempoAbrir = [], tempoLimite = 300) {
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

      #limparTempoLimite(arrayTempo) {
        arrayTempo.forEach(tempo => {
          clearTimeout(tempo);
        });
      }

      #addEventoMenus() {
        this.#menus.map((mn) => {
          let menu = document.getElementById(mn.id);
          menu.onmousedown = (e) => { e.stopPropagation() }
          menu.oncontextmenu = (e) => { e.preventDefault() }
        });
      }

      #criaAlvo(dados) {
        dados.map((link) => {
          this.#todosIds.push(link.alvo + 'Menu');
          document.getElementById('despejo').innerHTML += this.#criaMenu(link.dado, link.alvo);
          let alvo = document.getElementById(link.alvo);
          let menu = document.getElementById(link.alvo + 'Menu');
          if (this.#ehTelevisao()) {
            alvo.addEventListener('dblclick', (e) => { this.#contexto(e, link.alvo + 'Menu'); console.log(e); });
            alvo.addEventListener('dblclick', () => { document.getElementById(link.alvo + 'Menu').querySelectorAll('li')[0].focus(); });
          } else {
            alvo.addEventListener('contextmenu', (e) => { this.#contexto(e, link.alvo + 'Menu'); });
            alvo.addEventListener('contextmenu', () => { document.getElementById(link.alvo + 'Menu').querySelectorAll('li')[0].focus(); });
          }
          this.#menus.push(menu);
        });
      }

      #DesligadorDeContexto() {
        document.addEventListener('mousedown', () => { this.#semcontexto() });
        window.addEventListener('blur', () => { this.#semcontexto() });
      }

      #criaDivEncapsuladora() {
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

      #criaMenu(objetoMenu, idAlvo) {
        let menuInteiro = '';
        menuInteiro += '<div class="quebra" ' + (idAlvo == undefined ? '' : ' id="' + idAlvo + 'Menu' + '"') + '>\n' +
          '<div class="conteudo">\n' +
          '<ul class="menu">\n';

        objetoMenu.map((item) => {
          if (item.texto == undefined && item.comando == undefined && item.funcao == undefined && item.imagem == undefined) {
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

      #haTexto(texto) {
        if (this.#ehString(texto)) {
          return '<p>' + texto + '</p>';
        }
        return '';
      }

      #haImagem(imagem) {
        let mostraImagem = '';
        if (undefined != imagem) {
          mostraImagem = '<img src="' + imagem + '" />'
        }
        return mostraImagem;
      }

      #ehObjeto(variavel) {
        return typeof variavel == typeof {};
      }
      #ehString(variavel) {
        return typeof variavel == typeof '';
      }
      #ehFuncao(variavel) {
        return typeof variavel == typeof (() => { });
      }

      #acessarChave(comando, funcao, idAlvo) {
        if ((this.#ehString(comando) ^ comando == undefined) & this.#ehFuncao(funcao)) {
          let idFuncao = idAlvo + 'Fun' + this.#itemListas.length;
          this.#itemListas.push({ id: idFuncao, funcao: funcao });
          return `${comando == undefined ? '' : `accesskey="${comando}"`} id="${idFuncao}"`;
        }
        return '';
      }

      #doComando(comando, id) {

        let textoComando = '<div class="comando">';

        if (this.#ehString(comando)) {
          textoComando += '<pre>Alt+' + comando + '</pre></div>\n';
        }
        if (this.#ehObjeto(comando)) {
          let idLinkSub = id + this.#subMenus.length + 'Sub';
          textoComando += `<svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></div>\n${this.#criaMenu(comando, idLinkSub)}`;
          this.#subMenus.push(idLinkSub);
        }
        if (undefined == comando) {
          textoComando += '</div>';
        }
        return textoComando;
      }

      #semcontexto() {
        this.#semSubContexto(undefined, undefined, 0);
        this.#menus.map((link) => {
          let alvo = document.getElementById(link.id);
          alvo.style.display = 'none';
          alvo.style.top = 0 + 'px';
          alvo.style.left = 0 + 'px';
        })
      }
    }


    function corbg() {
      let doc = document.getElementById('caixadox');
      doc.style.backgroundColor = 'rgb(' + (parseInt(Math.random() * 256)) + ', '
        + (parseInt(Math.random() * 256)) + ', '
        + (parseInt(Math.random() * 256)) + ')';
    }
    function cor2bg() {
      let doc = document.getElementById('caixabox');
      doc.style.background = 'linear-gradient(' +
        +(parseInt(Math.random() * 360)) +
        'deg, rgba('
        + (parseInt(Math.random() * 256)) + ', '
        + (parseInt(Math.random() * 256)) + ', '
        + (parseInt(Math.random() * 256)) +
        ',1) 0%, rgba('
        + (parseInt(Math.random() * 256)) + ', '
        + (parseInt(Math.random() * 256)) + ', '
        + (parseInt(Math.random() * 256)) +
        ',1) 100%)';
    }
    var dadosParaOMenu =
      [
        {
          imagem: 'https://download.seaicons.com/download/i62119/designcontest/ecommerce-business/designcontest-ecommerce-business-pound.ico',
          texto: 'Libra, ícone',
          comando: 'l',
          funcao: corbg
        },
        {
          imagem: 'https://download.seaicons.com/download/i42625/oxygen-icons.org/oxygen/oxygen-icons.org-oxygen-actions-document-save-all.ico',
          texto: 'Salvar como',
          comando: 'd',
          funcao: corbg
        },
        {},
        {
          imagem: 'https://static.vecteezy.com/system/resources/previews/001/188/566/non_2x/fire-png.png',
          texto: 'Queimar',
          comando: [
            {
              texto: 'Madeira',
              comando: [
                {
                  texto: 'Fogo',
                  funcao: corbg
                },
                {
                  texto: 'Fricção',
                  funcao: corbg
                }
              ]
            },
            {
              texto: 'Carvão',
              comando: [
                {
                  texto: 'Brasa',
                  funcao: corbg
                },
                {
                  texto: 'Isqueiro',
                  funcao: corbg
                }
              ]
            },
            {
              texto: 'Nada',
              funcao: () => { }
            }
          ]
        },
      ];
    var dadosParaOutro =
      [
        {
          imagem: 'https://cdn-icons-png.flaticon.com/512/9444/9444156.png',
          texto: 'Desenho',
          comando: 'f',
          funcao: cor2bg
        },
        {},
        {
          imagem: 'https://cdn.pixabay.com/photo/2018/05/01/15/06/marker-3365838_960_720.png',
          texto: 'Ir para',
          comando:
            [
              {
                imagem: 'https://cdn-icons-png.flaticon.com/512/1670/1670080.png',
                texto: 'Casa',
                funcao: cor2bg
              },
              {
                imagem: 'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Engrenagem-PNG.png',
                texto: 'Trabalho',
                funcao: cor2bg
              }
            ]
        },
        {
          funcao: cor2bg
        },
        {
          imagem: 'https://cdn.pixabay.com/photo/2016/03/23/17/26/music-note-1275177_1280.png',
          texto: 'Baixar música',
          comando:
            [
              {
                imagem: 'https://cdn-icons-png.flaticon.com/512/483/483031.png',
                texto: 'MP3',
                comando: '3',
                funcao: cor2bg
              },
              {
                imagem: 'https://cdn-icons-png.flaticon.com/512/0/375.png',
                texto: 'MP4',
                funcao: cor2bg
              }
            ]
        }
      ];

    var classes = new MenuContexto([{ alvo: 'caixadox', dado: dadosParaOMenu }, { alvo: 'caixabox', dado: dadosParaOutro }]);

    erros.push({ classe: toString(classes), funfa: classes.funciona });

  } catch (err) {
    erros.push({
      name: err.name,
      message: err.message,
      stack: err.stack,
      lineNumber: err.lineNumber,
      fileName: err.fileName,
      columnNumber: err.columnNumber,
      cause: err.cause
    })
  }

  class TesteTV {
    #nome;
    #area;
    varPublica = 'varPublica';

    constructor(nome, area) {
      this.nome = nome;
      this.area = area;
    }

    get nome() {
      return this.#nome;
    }

    set nome(nome) {
      this.#nome = `${nome}`;
    }

    get area() {
      return this.#area;
    }

    set area(area) {
      this.#area = Number(area);
    }
  }

  document.getElementById('tv').innerHTML += " Mas por estar em uma TV terá que dar duplo click.";

  document.getElementById('setPre').addEventListener('click', setPre);
  document.getElementById('metodoTV').addEventListener('click', metodoTV);
  document.getElementById('temDespejo').addEventListener('click', temDespejo);
  document.getElementById('temVarGlobal').addEventListener('click', temVarGlobal);

  function setPre() {
    document.getElementById('preErr').innerHTML = JSON.stringify(erros, 0, 2);
  }
  function metodoTV() {
    let pre = document.getElementById('preTeste');
    let tv = new TesteTV('Smart', 22);
    pre.innerHTML = JSON.stringify(new TesteTV('Smart', 22), 0, 2);
    pre.innerHTML += JSON.stringify(tv, 0, 2);
    pre.innerHTML += `\nNome: ${tv.nome}, Area: ${tv.area}`;
    tv.nome = 'SmartTV';
    tv.area = 55;
    pre.innerHTML += `\nNome: ${tv.nome}, Area: ${tv.area}`;
  }
  function temDespejo() {
    if (document.getElementById('despejo') == null) {
      window.alert('NÃO EXISTE!!!');
    } else {
      window.alert('EXISTE SIM!!!');
    }
  }
  function temVarGlobal() {
    if (typeof erros == typeof undefined) {
      window.alert('NÃO EXISTE!!!');
    } else {
      window.alert('EXISTE SIM!!! ' + toString(erros));
    }
  }


})()
