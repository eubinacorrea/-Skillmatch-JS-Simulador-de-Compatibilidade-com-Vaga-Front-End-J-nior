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
};


// ----- MÉTODOS DE ARRAY -----
const nomesVagas = vagas.map(v => v.cargo);
const compativeis = vagas.filter(v => calcularCompatibilidade(candidato, v).compativel);
const primeira = vagas.find(v => v.empresa === "Tech Co");
const media = vagas.reduce(
  (acc, v) => acc + parseFloat(calcularCompatibilidade(candidato, v).percentual),
  0
) / vagas.length;

// ----- CALLBACK -----
function processarResultados(vagas, callback) {
  const resultados = vagas.map(v => calcularCompatibilidade(candidato, v));
  callback(resultados);
}

// ----- IIFE + CLOSURE -----
const contadorAnalises = (() => {
  let count = 0;
  return () => ++count;
})();

// ----- PROMISE (simulação assíncrona) -----
function buscarVagas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vagas), 3000); // 3 segundos
  });
}

// ----- FUNÇÃO PRINCIPAL -----
async function iniciarSistema() {
  console.log("🚀 Sistema v" + sistemaVersao + " iniciando...");
  console.log("Buscando vagas...\n");

  const vagasCarregadas = await buscarVagas();

  processarResultados(vagasCarregadas, (resultados) => {
    console.log("📊 RESULTADOS:");
    resultados.forEach(r => {
      console.log(`\n👉 ${r.vaga}`);
      console.log(`   Compatibilidade: ${r.percentual}`);
      console.log(`   Faltam: ${r.faltantes.length ? r.faltantes.join(", ") : "nenhuma ✅"}`);
      console.log(`   Recomendada? ${r.compativel ? "SIM" : "NÃO"}`);

      // NOVO: Se for compatível, exibe empresa e salário
      if (r.compativel) {
        console.log(`   🏢 Empresa: ${r.empresa}`);
        console.log(`   💰 Salário: R$ ${r.salario}`);
      }
    });
  });

  console.log(`\n📋 Vagas: ${nomesVagas.join(", ")}`);
  console.log(`✅ Compatíveis: ${compativeis.map(v => v.cargo).join(", ") || "nenhuma"}`);
  console.log(`📊 Média: ${media.toFixed(2)}%`);
  console.log(`🔢 Análises: ${contadorAnalises()}`);
}

// ----- EXECUÇÃO -----
iniciarSistema();