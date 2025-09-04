const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultados");
const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
        "Você usa a IA no seu trabalho?"
        alternativas:["Sim", "Não"],
    },
    {
        enunciado:
        "Você acha que os avanços da IA afetarão a privacidade e a liberdade individual no futuro?"
        alternativas: ["Sim","Não"],
    }
    { 
        enunciado:
        "A IA poderá ser usada para resolver grandes problemas globais, como mudanças climáticas e desilgualdade social?"
        alternativas: ["Sim","Não"],
    }
    {
        enunciado:
        "A IA poderá desenvolver consciência ou emoções senelhantes às humanas?"
        alternativas: ["Sim","Não"],
    }
    {enunciado:
        "A IA impactará o mercado de trabalho nos proximos 10 anos?"
        alternativas: ["Sim","Não"],
    }

    let atual = 0;
    let perguntaAtual;

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa;
            caixaAlternativas. appendChild(botaoAlternativas);
        }
    }

    mostraPergunta();
    