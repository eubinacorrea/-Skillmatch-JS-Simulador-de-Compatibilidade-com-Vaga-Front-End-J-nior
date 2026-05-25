var sistemaVersao = "1.0.0";

// ----- CANDIDATO -----
const candidato = {
  nome: "Sabrina Babiss Correa",
  habilidades: {
    javascript: 7,
    html: 8,
  },
};

// ----- CLASSES -----
class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  listarRequisitos() {
    return this.requisitos.join(", ");
  }
}

