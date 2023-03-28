(() => {
  'use strict'

  var erros = [{ inicio: 'Iniciado' }];

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
    pre.innerHTML = JSON.stringify(tv, 0, 2);
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
