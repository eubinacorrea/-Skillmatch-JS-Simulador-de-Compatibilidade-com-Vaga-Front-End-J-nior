var sistemaVersao = "1.0.0";

// ----- CANDIDATO -----
const candidato = {
  nome: "Sabrina Babiss Correa",
  habilidades: {
    javascript: 7,
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

// extends + super: herda de Vaga e adiciona salário
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario) {
    super(empresa, cargo, requisitos);
    this.salario = salario;
  }

  mostrarDetalhes() {
    return `${this.empresa} — ${this.cargo} — R$ ${this.salario}`;
  }
}
const vagas = [
  new VagaFrontEnd("Tech Co", "Front-End Jr", ["javascript", "html", "css"], 3000),
  new VagaFrontEnd("Startup X", "Dev Jr", ["javascript", "react", "git"], 2500),
  new VagaFrontEnd("Web Agency", "Junior Dev", ["html", "css", "git"], 2000),
];

