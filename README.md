# 🎯 SkillMatch JS

## 📋 Sobre o Projeto

Este projeto é um **simulador de compatibilidade** entre candidatos e vagas de emprego na área de tecnologia. Ele compara as habilidades de uma pessoa candidata com os requisitos de diferentes vagas e calcula um percentual de match.

O objetivo é **didático**: demonstrar conceitos fundamentais de **JavaScript puro** (Vanilla JS) em um único arquivo, sem dependências externas.

---

## ⚙️ Funcionalidades

- ✅ Cadastro de candidato com nome e habilidades
- ✅ Lista de vagas com empresa, cargo e requisitos
- ✅ Cálculo automático de compatibilidade (percentual)
- ✅ Identificação de habilidades faltantes
- ✅ Indicação de vagas recomendadas (≥ 60%)
- ✅ Exibição de empresa e salário para vagas compatíveis
- ✅ Cálculo de média geral de compatibilidade
- ✅ Simulação de busca assíncrona com `setTimeout`
- ✅ Contador de análises com closure

---

## 🧠 Conceitos de JavaScript Aplicados

Este projeto foi desenvolvido para praticar **JavaScript puro (ES6+)** .

| Conceito | Onde foi aplicado |
|----------|-------------------|
| **`var`, `let`, `const`** | Declaração de variáveis e versão do sistema |
| **Objetos** | Dados do candidato e habilidades |
| **Arrays** | Lista de vagas e requisitos |
| **`for...of`** | Iteração nos requisitos da vaga |
| **Arrow Functions** | Métodos `map`, `filter`, `find`, `reduce` |
| **`map()`** | Transformar vagas em lista de cargos |
| **`filter()`** | Filtrar vagas compatíveis |
| **`find()`** | Encontrar vaga por empresa |
| **`reduce()`** | Calcular média de compatibilidade |
| **`forEach()`** | Exibir resultados no console |
| **Classes** | Molde para criar vagas |
| **Herança** (`extends`, `super`) | Classe `VagaFrontEnd` herdando de `Vaga` |
| **Template Strings** | Formatação de texto com `${}` |
| **Operador Ternário** | Verificação de vaga recomendada |
| **Callbacks** | Função `processarResultados` |
| **IIFE** | Função autoexecutável |
| **Closure** | Contador de análises privado |
| **Promises** | Função `buscarVagas` simulando API |
| **`setTimeout`** | Atraso de 1 segundo na busca |
| **`async/await** | Função principal `iniciarSistema` |
| **`toFixed()`** | Formatação de casas decimais |
| **`parseFloat()`** | Conversão de string para número |
| **`console.log`** | Exibição de resultados |

---

## 📁 Estrutura do Projeto

SkillMatch-JS/
├── index.js # Código principal (JavaScript puro)
├── README.md # Documentação do projeto
text


---

## 🚀 Como Executar

   Abra seu navegador

    Pressione F12 para abrir o console

    Veja os resultados


# 📊 Exemplo de Saída

🚀 Sistema v1.0.0 iniciando...
Buscando vagas...

📊 RESULTADOS:

👉 Front-End Jr
   Compatibilidade: 66.67%
   Faltam: css
   Recomendada? SIM
🏢 Empresa: Tech Co
💰 Salário: R$ 3000

👉 Dev Jr
   Compatibilidade: 33.33%
   Faltam: react, git
   Recomendada? NÃO

👉 Junior Dev
   Compatibilidade: 33.33%
   Faltam: css, git
   Recomendada? NÃO

📋 Nomes das vagas: [ 'Front-End Jr', 'Dev Jr', 'Junior Dev' ]
✅ Vagas compatíveis: [ 'Front-End Jr' ]
📊 Média geral: 44.44%
🔢 Total de análises realizadas: 1

🛠 Tecnologia

    JavaScript (ES6+) — puro, sem bibliotecas ou frameworks

📝 Objetivo de Aprendizado

Este projeto foi criado para consolidar conhecimentos em:

    Sintaxe moderna de JavaScript

    Manipulação de objetos e arrays

    Métodos funcionais de array

    Programação orientada a objetos com classes

    Programação assíncrona com Promises e async/await

    Conceitos avançados como closures e IIFE

    Boas práticas de versionamento com Git

👤 Autora

Sabrina Correa

    GitHub: @eubinacorrea

📝 Licença

Este projeto é livre para estudos e modificações.

⭐ Sugestão: Experimente adicionar novos candidatos com habilidades diferentes e veja como os resultados mudam no console!