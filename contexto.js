(() => {
  'use strict'

  document.getElementById('instancia1').value = "[\n  {\n    alvo: 'idAlvo1',\n    dado: menuObjetoParaAlvo1\n  },\n  {\n    alvo: 'idAlvo2',\n    dado: menuObjetoParaAlvo2\n  }\n]";

  document.getElementById('instancia2').value = "[\n  {\n    imagem: 'imagem.png',\n    texto: 'Texto',\n    comando: 't',\n    funcao: umaFuncao\n  },\n  {\n    imagem: 'imagem.png',\n    texto: 'Texto',\n    comando: [\n      {\n        imagem: 'subImagem.png',\n        texto: 'Sub Texto',\n        funcao: outraFuncao\n      }\n    ]\n  }\n]";

  if(/TV/i.test(navigator.userAgent)){
    document.getElementById('tv').innerHTML += " Mas por estar em uma TV terá que dar duplo click.";
    document.getElementById('botaohtv').hidden = false;
  }

  function corbg(){
    let doc = document.getElementById('caixadox');
    doc.style.backgroundColor = 'rgb('+(parseInt(Math.random() * 256))+', '
                                      +(parseInt(Math.random() * 256))+', '
                                      +(parseInt(Math.random() * 256))+')';
  }
  function cor2bg(){
    let doc = document.getElementById('caixabox');
    doc.style.background = 'linear-gradient(' +
                            +(parseInt(Math.random() * 360))+
                            'deg, rgba('
                            +(parseInt(Math.random() * 256))+', '
                            +(parseInt(Math.random() * 256))+', '
                            +(parseInt(Math.random() * 256))+
                              ',1) 0%, rgba('
                            +(parseInt(Math.random() * 256))+', '
                            +(parseInt(Math.random() * 256))+', '
                            +(parseInt(Math.random() * 256))+
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
          funcao: ()=>{}
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
  
  new MenuContexto([{ alvo: 'caixadox', dado: dadosParaOMenu},{ alvo: 'caixabox', dado: dadosParaOutro}]);
  
})()

function setPre(){
  window.location.href = "https://valeriohasman.github.io/MenuContexto/contextotv1.html";
}
