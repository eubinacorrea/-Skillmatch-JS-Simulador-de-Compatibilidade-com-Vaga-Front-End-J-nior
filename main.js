var sistemaVersao = "1.0.0";

// ----- CANDIDATO -----
const candidato = {
  nome: "João Silva",
  habilidades: {
    javascript: 8,
    html: 7,
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

