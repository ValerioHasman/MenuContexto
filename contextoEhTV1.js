(() => {
  'use strict'

  try {

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
    dadosParaOMenu =
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
    dadosParaOutro =
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

  document.getElementById('tv').innerHTML += " Mas por estar em uma TV terá que dar duplo click.";

  document.getElementById('setPre').addEventListener('click', setPre);
  document.getElementById('metodoTV').addEventListener('click', metodoTV);
  document.getElementById('temDespejo').addEventListener('click', temDespejo);
  document.getElementById('temVarGlobal').addEventListener('click', temVarGlobal);
  document.getElementById('instanciar').addEventListener('click', instanciar);

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
    pre.innerHTML += `\nNome: ${tv.nome}, Area: ${tv.area}\n${tv.mostra()}!`;
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
  function instanciar(){
    document.getElementById('instanciar').disabled = true;
    new MenuContexto([{ alvo: 'caixadox', dado: dadosParaOMenu},{ alvo: 'caixabox', dado: dadosParaOutro}]);
  }


})()
