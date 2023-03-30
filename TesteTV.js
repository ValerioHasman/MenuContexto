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

  #ehTelevisao(){
    if(/TV/i.test(navigator.userAgent)){
      return true;
    } else {
      return false;
    }
  }

  mostra(){
    return this.#ehTelevisao() ? 'Sim, é tv' : 'Não é tv';
  }

}