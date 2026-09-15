// ========================================
// 🎮 CLASSES PIXELU
// ========================================

const classes = {

    programacao: {
        nome: "Programação",
        icone: "💻",
        descricao: "Criar sistemas, sites e jogos."
    },

    design: {
        nome: "Design",
        icone: "🎨",
        descricao: "Criar a aparência e a experiência que o usuário tem ao interagir com um sistema."
    },

    redes: {
        nome: "Redes e Internet",
        icone: "🌐",
        descricao: "Conectar computadores, celulares e sistemas."
    },

    seguranca: {
        nome: "Cibersegurança",
        icone: "🔐",
        descricao: "Proteger sistemas e informações."
    },

    suporte: {
        nome: "Tecnologia e Suporte",
        icone: "🛠️",
        descricao: "Configurar, resolver problemas e ajudar pessoas com tecnologia."
    }

};


// ========================================
// 📊 PONTUAÇÃO DO PIXELU
// ========================================

const pontuacao = {

    // ========================================
    // QUESTÃO 01. Você é uma pessoa extrovertida ou introvertida?
    // ========================================

    q1: {

        // Extrovertido(a)
        q1a: {
            programacao: 1,
            design: 4,
            redes: 3,
            seguranca: 2,
            suporte: 5
        },
        // Introvertido(a)
        q1b: {
            programacao: 5,
            design: 4,
            redes: 2,
            seguranca: 3,
            suporte: 1
        }

    },


    // ========================================
    // QUESTÃO 02. O que costuma chamar sua atenção ao acessar aplicativos ou sites?
    // ========================================

    q2: {

        // A aparência e as cores
        q2a: {
            programacao: 2,
            design: 5,
            redes: 3,
            seguranca: 1,
            suporte: 4
        },

        // As funções e ferramentas
        q2b: {
            programacao: 5,
            design: 3,
            redes: 4,
            seguranca: 5,
            suporte: 3
        },

        // A velocidade e o desempenho da pagina
        q2c: {
            programacao: 4,
            design: 2,
            redes: 5,
            seguranca: 3,
            suporte: 3
        },

        // A segurança e privacidade da pagina
        q2d: {
            programacao: 3,
            design: 2,
            redes: 4,
            seguranca: 4,
            suporte: 1
        }

    },


    // ========================================
    // 03. Qual desses desafios parece ser mais divertido?
    // ========================================

    q3: {

        // Criar um programa ou jogo
        q3a: {
            programacao: 5,
            design: 3,
            redes: 2,
            seguranca: 2,
            suporte: 2
        },

        // Criar uma interface bonita
        q3b: {
            programacao: 3,
            design: 5,
            redes: 1,
            seguranca: 1,
            suporte: 2
        },

        // Fazer computadores se conectarem
        q3c: {
            programacao: 2,
            design: 1,
            redes: 5,
            seguranca: 3,
            suporte: 4
        },

        // Descobrir e impedir uma invasão
        q3d: {
            programacao: 2,
            design: 1,
            redes: 4,
            seguranca: 5,
            suporte: 4
        },

        // Resolver um problema de computador
        q3e: {
            programacao: 2,
            design: 1,
            redes: 4,
            seguranca: 3,
            suporte: 5
        }

    },


    // ========================================
    // 04. Quando você tem dificuldade para usar um site ou aplicativo, qual é a primeira coisa que vem à sua cabeça?
    // ========================================

    q4: {

        // Quero entender como ele funciona
        q4a: {
            programacao: 5,
            design: 1,
            redes: 3,
            seguranca: 2,
            suporte: 4
        },

        // Acho que a interface poderia ser melhor
        q4b: {
            programacao: 3,
            design: 5,
            redes: 2,
            seguranca: 1,
            suporte: 3
        },

        // Procuro uma forma de resolver o problema
        q4c: {
            programacao: 5,
            design: 1,
            redes: 2,
            seguranca: 2,
            suporte: 5
        }

    },


    // ========================================
    //  05. Você já ficou curioso(a) sobre como a internet conecta pessoas e permite que você acesse sites e aplicativos de qualquer lugar?
    // ========================================

    q5: {

        //  Sim, acho isso muito interessante
        q5a: {
            programacao: 2,
            design: 1,
            redes: 5,
            seguranca: 4,
            suporte: 4
        },

        // Nunca parei para pensar nisso
        q5b: {
            programacao: 3,
            design: 5,
            redes: 1,
            seguranca: 2,
            suporte: 3
        }

    },


    // ========================================
    // 06. Qual dessas frases mais combina com você?
    // ========================================

    q6: {

        // Gosto de criar coisas novas
        q6a: {
            programacao: 5,
            design: 5,
            redes: 2,
            seguranca: 2,
            suporte: 3
        },

        // Gosto de resolver problemas
        q6b: {
            programacao: 5,
            design: 3,
            redes: 1,
            seguranca: 1,
            suporte: 5
        },

        // Gosto de ajudar outras pessoas
        q6c: {
            programacao: 3,
            design: 2,
            redes: 3,
            seguranca: 4,
            suporte: 5
        },

        // Gosto de descobrir como as coisas funcionam
        q6d: {
            programacao: 5,
            design: 3,
            redes: 4,
            seguranca: 3,
            suporte: 4
        }

    },


    // ========================================
    // 07. Se pudesse aprender uma coisa nova sobre tecnologia, o que escolheria??
    // ========================================

    q7: {

        // Aprender a programar
        q7a: {
            programacao: 5,
            design: 4,
            redes: 3,
            seguranca: 2,
            suporte: 2
        },

        // Criar designs e interfaces
        q7b: {
            programacao: 3,
            design: 5,
            redes: 1,
            seguranca: 1,
            suporte: 3
        },

        // Montar e configurar redes
        q7c: {
            programacao: 3,
            design: 1,
            redes: 5,
            seguranca: 4,
            suporte: 5
        },

        // Aprender sobre segurança digital
        q7d: {
            programacao: 1,
            design: 1,
            redes: 4,
            seguranca: 5,
            suporte: 3
        },

        // Aprender a configurar e solucionar problemas
        q7e: {
            programacao: 4,
            design: 2,
            redes: 4,
            seguranca: 3,
            suporte: 5
        }

    },


    // ========================================
    // 08. Como você prefere trabalhar?
    // ========================================

    q8: {

        //Sozinho(a), concentrado no meu trabalho

        q8a: {
            programacao: 5,
            design: 1,
            redes: 1,
            seguranca: 4,
            suporte: 3
        },

        // Em equipe, trocando ideias
        q8b: {
            programacao: 2,
            design: 4,
            redes: 5,
            seguranca: 3,
            suporte: 5
        },

        // Ajudando e conversando com pessoas
        q8c: {
            programacao: 2,
            design: 4,
            redes: 4,
            seguranca: 4,
            suporte: 5
        }

    },


    // ========================================
    // 09. Qual dessas áreas mais desperta sua curiosidade?
    // ========================================

    q9: {

        // Programação
        q9a: {
            programacao: 5,
            design: 4,
            redes: 1,
            seguranca: 1,
            suporte: 3
        },

        //  Design e criação
        q9b: {
            programacao: 4,
            design: 5,
            redes: 1,
            seguranca: 1,
            suporte: 4
        },

        // Redes e Internet
        q9c: {
            programacao: 2,
            design: 2,
            redes: 5,
            seguranca: 4,
            suporte: 3
        },

        //  Cibersegurança
        q9d: {
            programacao: 3,
            design: 1,
            redes: 4,
            seguranca: 5,
            suporte: 3
        },

        // Tecnologia e Suporte
        q9e: {
            programacao: 3,
            design: 1,
            redes: 4,
            seguranca: 3,
            suporte: 5
        },

        // Novas tecnologias
        q9f: {
            programacao: 3,
            design: 1,
            redes: 4,
            seguranca: 1,
            suporte: 5
        }

    },


    // ========================================
    // 10. O que mais te motiva quando aprende algo novo?
    // ========================================

    q10: {

        // Criar algo que posso usar
        q10a: {
            programacao: 5,
            design: 5,
            redes: 1,
            seguranca: 1,
            suporte: 3
        },

        // Enfrentar um desafio
        q10b: {
            programacao: 4,
            design: 4,
            redes: 2,
            seguranca: 2,
            suporte: 5
        },

        // Descobrir como algo funciona
        q10c: {
            programacao: 4,
            design: 4,
            redes: 1,
            seguranca: 1,
            suporte: 5
        },

        // Poder ajudar alguém
        q10d: {
            programacao: 3,
            design: 1,
            redes: 4,
            seguranca: 2,
            suporte: 5
        },

        // Melhorar algo que já existe
        q10e: {
            programacao: 5,
            design: 4,
            redes: 3,
            seguranca: 2,
            suporte: 5
        },

        // Satisfazer minha curiosidade
        q10f: {
            programacao: 2,
            design: 3,
            redes: 5,
            seguranca: 2,
            suporte: 2
        }

    }

};


// ========================================
// RESULTADO
// ========================================

const resultado = {

    programacao: 0,
    design: 0,
    redes: 0,
    seguranca: 0,
    suporte: 0

};


// ========================================
// SOMAR PONTOS
// ========================================

function somarPontos(pontos) {

    if (!pontos) return;

    resultado.programacao += pontos.programacao;
    resultado.design += pontos.design;
    resultado.redes += pontos.redes;
    resultado.seguranca += pontos.seguranca;
    resultado.suporte += pontos.suporte;

}


// ========================================
// QUESTÃO 1
// ========================================

function calcularQ1() {

    const resposta = document.querySelector(
        'input[name="q1"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q1[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 2 // PODE ESCOLHER VÁRIAS ALTERNATIVAS
// ========================================

function calcularQ2() {

    const respostas = document.querySelectorAll(
        'input[name="q2"]:checked'
    );

    respostas.forEach(resposta => {

        const pontos = pontuacao.q2[resposta.id];

        if (pontos) {
            somarPontos(pontos);
        }

    });

}


// ========================================
// QUESTÃO 3
// ========================================

function calcularQ3() {

    const resposta = document.querySelector(
        'input[name="q3"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q3[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 4
// ========================================

function calcularQ4() {

    const resposta = document.querySelector(
        'input[name="q4"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q4[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 5
// ========================================

function calcularQ5() {

    const resposta = document.querySelector(
        'input[name="q5"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q5[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 6
// ========================================

function calcularQ6() {

    const resposta = document.querySelector(
        'input[name="q6"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q6[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 7
// ========================================

function calcularQ7() {

    const resposta = document.querySelector(
        'input[name="q7"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q7[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 8
// ========================================

function calcularQ8() {

    const resposta = document.querySelector(
        'input[name="q8"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q8[resposta.id];

    somarPontos(pontos);

}


// ========================================
//QUESTÃO 9
// ========================================

function calcularQ9() {

    const resposta = document.querySelector(
        'input[name="q9"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q9[resposta.id];

    somarPontos(pontos);

}


// ========================================
// QUESTÃO 10
// ========================================

function calcularQ10() {

    const resposta = document.querySelector(
        'input[name="q10"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q10[resposta.id];

    somarPontos(pontos);

}


// ========================================
// 📊 CALCULAR RESULTADO
// ========================================

function calcularResultado() {

    // Zera antes de calcular
    resultado.programacao = 0;
    resultado.design = 0;
    resultado.redes = 0;
    resultado.seguranca = 0;
    resultado.suporte = 0;


    // Calcula as 10 perguntas
    calcularQ1();
    calcularQ2();
    calcularQ3();
    calcularQ4();
    calcularQ5();
    calcularQ6();
    calcularQ7();
    calcularQ8();
    calcularQ9();
    calcularQ10();


    console.log("========== PIXELU ==========");
    console.log("💻 Programação:", resultado.programacao);
    console.log("🎨 Design:", resultado.design);
    console.log("🌐 Redes:", resultado.redes);
    console.log("🔐 Segurança:", resultado.seguranca);
    console.log("🛠️ Suporte:", resultado.suporte);


    mostrarResultado();

}


// ========================================
// DESCOBRIR CLASSE
// ========================================

function descobrirVencedor() {

    let vencedor = "programacao";

    for (const classe in resultado) {

        if (resultado[classe] > resultado[vencedor]) {
            vencedor = classe;
        }

    }

    return vencedor;

}


// ========================================
// 🎮 TABELA RPG
// ========================================

function mostrarResultado() {

    const areaResultado = document.getElementById("resultado");

    if (!areaResultado) {

        console.error(
            "Elemento #resultado não encontrado no HTML."
        );

        return;

    }


    const vencedor = descobrirVencedor();


    // ========================================
    // LISTA DAS CLASSES
    // ========================================

    const classesRPG = [
        "programacao",
        "design",
        "redes",
        "seguranca",
        "suporte"
    ];


    // ========================================
    // GERA AS LINHAS DA TABELA
    // ========================================

    const linhasRPG = classesRPG.map(classe => {

        const xp = resultado[classe];

        /*
         * Cada pergunta pode dar até 5 pontos.
         * São 10 perguntas.
         * Máximo aproximado = 50 XP.
         *
         * Por isso:
         * 50 XP = 100%
         */

        const porcentagem = Math.min(xp * 2, 100);


        return `

            <div class="rpg-linha">

                <div class="rpg-classe">

                    <span class="icone-classe">
                        ${classes[classe].icone}
                    </span>

                    <span class="nome-classe">
                        ${classes[classe].nome}
                    </span>

                </div>


                <div class="rpg-xp">

                    <div class="barra-xp">

                        <div
                            class="barra-xp-preenchida"
                            style="width: ${porcentagem}%"
                        ></div>

                    </div>


                    <span class="rpg-pontos">
                        ${xp} XP
                    </span>

                </div>

            </div>

        `;

    }).join("");


    // ========================================
    // MONTA RESULTADO COMPLETO
    // ========================================

    areaResultado.innerHTML = `

        <div class="classe-principal">

            <div class="icone">
                ${classes[vencedor].icone}
            </div>


            <div class="titulo">
                SUA CLASSE PIXELU
            </div>


            <h3>
                ${classes[vencedor].nome}
            </h3>


            <div class="pontos">
                ${resultado[vencedor]} XP
            </div>


            <p class="rpg-descricao">
                ${classes[vencedor].descricao}
            </p>

        </div>


        <div class="tabela-rpg">

            <div class="tabela-rpg-titulo">
                ⚔️ ATRIBUTOS DO PERSONAGEM
            </div>


            ${linhasRPG}

        </div>

    `;

}


// ========================================
// 🏆 BOTÃO "VER MINHA PONTUAÇÃO"
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const btnVerPontuacao =
        document.getElementById("btnVerPontuacao");

    const quiz =
        document.getElementById("quiz");

    const resultadoArea =
        document.getElementById("resultado");


    if (!btnVerPontuacao) {

        console.error(
            "Botão #btnVerPontuacao não encontrado."
        );

        return;

    }


    btnVerPontuacao.addEventListener("click", function () {

        console.log("🎮 Abrindo resultado PixelU...");


        // ========================================
        // 1. CALCULA A PONTUAÇÃO
        // ========================================

        calcularResultado();


        // ========================================
        // 2. ESCONDE O QUIZ
        // ========================================

        if (quiz) {
            quiz.hidden = true;
        }


        // ========================================
        // 3. MOSTRA O RESULTADO
        // ========================================

        if (resultadoArea) {

            resultadoArea.hidden = false;


            resultadoArea.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});