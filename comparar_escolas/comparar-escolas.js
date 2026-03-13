/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
};

/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */


/* ===== OBTER ELEMENTOS ===== */
//  unidade A
const cidadeA = document.querySelector("unidadeA__cidade");
const codigoA = document.querySelector("unidadeA__codigo");
const anoA = document.querySelector("unidadeA__ano");
const cursosA = document.querySelector("unidadeA__cursos");

//  unidade B
const cidadeB = document.querySelector("unidadeB__cidade");
const codigoB = document.querySelector("unidadeB__codigo");
const anoB = document.querySelector("unidadeB__ano");
const cursosB = document.querySelector("unidadeB__cursos");

const btnNovaConsulta = document.querySelector("botao--reset sistema__reset");




/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function validarCampos(cidade, codigo, anoConstrucao, qtdeCursos){
  if(
    cidade.value === "" ||
    codigo.value === "" ||
    anoConstrucao === "" ||
    qtdeCursos === "" ||
  ) {
    return false;
  }

  return true;
}


instanciarA.addEventListener("click", function() {
  if (validarCampos(cidadeA, codigoA, anoA, cursosA)) {
  } else {
    alert("Preencha todos os campos para a unidade A");
  }
});


/* ===== INSTANCIAR ESCOLA A ===== */
const escolaA = new Senai (cidadeA.value, codigoA.value, anoA.value, cursosA.value);

/* ===== INSTANCIAR ESCOLA B ===== */
const escolaB = new Senai (cidadeB.value, codigoB.value, anoB.value, cursosB.value);

mensagemA .textContent = `A escola SENAI ${cidadeA.value} tem ${escolaA.idade} anos de funcionamento e oferece ${cursosA.value} cursos.`;

/* ===== ABRIR ESCOLA ===== */
    abrirEscola() {
      const mensagem = document.getElementById("mensagem");
      if (this.statusFuncionamento === false) {
        this.statusFuncionamento = true;
        mensagem.textContent = `A escola SENAI ${this.cidade} agora esta aberta! Bem-vindo!`;
      } else {
        mensagem.textContent = "A escola esta aberta";
      }
    };     

/* ===== FECHAR ESCOLA ===== */
    fecharEscola() {
      const mensagem = document.getElementById("mensagem");
      if (this.statusFuncionamento === true) {
        this.statusFuncionamento = false;
        mensagem.textContent = `A escola SENAI ${this.cidade} esta fechada`;
      } else {
        mensagem.textContent = "A escola ja esta fechada";
      }
  };


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */



/* ===== NOVA CONSULTA ===== */




