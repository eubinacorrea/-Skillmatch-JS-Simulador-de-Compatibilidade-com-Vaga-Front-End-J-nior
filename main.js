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

<<<<<<< Updated upstream
=======
// ----- FUNÇÃO DE COMPATIBILIDADE -----
function calcularCompatibilidade(candidato, vaga) {
  let match = 0;
  let faltam = [];

  for (let req of vaga.requisitos) {
    if (candidato.habilidades[req]) {
      match++;
    } else {
      faltam.push(req);
    }
  }

  const percentual = (match / vaga.requisitos.length) * 100;

  return {
    vaga: vaga.cargo,
    empresa: vaga.empresa,        
    salario: vaga.salario,        
    percentual: percentual.toFixed(2) + "%",
    faltantes: faltam,
    compativel: percentual >= 60,
  };
}

>>>>>>> Stashed changes
