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
    imagem: 'https://cdn-icons-png.flaticon.com/512/109/109617.png',
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
    imagem: 'https://play-lh.googleusercontent.com/2eh28GGKKKguVxCqmkw-27K7uq8mNxllO6_9dTiiHctx8-ADHTQL7xOU1zPxc-c9Bw',
    texto: 'Baixar música',
    comando: 
    [
      {
        imagem: 'https://play-lh.googleusercontent.com/g4PPPcejfhV8k_gW6F0LgHVzQwZ5r8uBiN4Ef0ZGHcPSXa6CUE-QVF1sxjZV2r35rw',
        texto: 'MP3',
        comando: '3',
        funcao: cor2bg
      },
      {
        imagem: 'https://play-lh.googleusercontent.com/swjnj_pp--Lw6tJUQhk4lhwLaeScouvt2vr5gIDX5_IxCAp8WDHdLrf8xLsSI_8UnA=w240-h480-rw',
        texto: 'MP4',
        funcao: cor2bg
      }
    ]
  }
];
new menuContexto([{ alvo: 'caixadox', dado: dadosParaOMenu},{ alvo: 'caixabox', dado: dadosParaOutro}]);
