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
//============Q1 — Você é uma pessoa extrovertida ou introvertida?===================
const pontuacao = {

    q1: {

        q1a: {
            programacao: 0,
            design: 1,
            redes: 1,
            seguranca: 0,
            suporte: 2
        },

        q1b: {
            programacao: 1,
            design: 1,
            redes: 1,
            seguranca: 2,
            suporte: 0
        }

    },
//=========================================
//=============Q2 — Qual dessas opções mais combina com os seus gostos?===================
q2: {
    q2a: {
        programacao: 1,
        design: 1,
        redes: 0,
        seguranca: 1,
        suporte: 0
    },

    q2b: {
        programacao: 0,
        design: 1,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q2c: {
        programacao: 2,
        design: 2,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q2d: {
        programacao: 2,
        design: 0,
        redes: 2,
        seguranca: 1,
        suporte: 1
    },

    q2e: {
        programacao: 0,
        design: 3,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q2f: {
        programacao: 0,
        design: 2,
        redes: 0,
        seguranca: 0,
        suporte: 0
    }

},
//=========================================
//==============Q3 — Você se considera uma pessoa criativa?===================
q3: {

    q3a: {
        programacao: 1,
        design: 3,
        redes: 0,
        seguranca: 0,
        suporte: 1
    },

    q3b: {
        programacao: 0,
        design: 0,
        redes: 1,
        seguranca: 1,
        suporte: 1
    }

},
//=========================================
//============== Q4 — Você já ficou curioso(a) sobre como um site, game ou aplicativo funciona por dentro?===================
q4: {

    q4a: {
        programacao: 3,
        design: 0,
        redes: 1,
        seguranca: 2,
        suporte: 1
    },

    q4b: {
        programacao: 0,
        design: 0,
        redes: 0,
        seguranca: 0,
        suporte: 0
    }

},
//=========================================
//=============Q5 —Você já ficou curioso(a) sobre como a internet conecta pessoas e permite que você acesse sites e aplicativos de qualquer lugar?===================
q5: {

    q5a: {
        programacao: 1,
        design: 0,
        redes: 3,
        seguranca: 1,
        suporte: 1
    },

    q5b: {
        programacao: 0,
        design: 0,
        redes: 0,
        seguranca: 0,
        suporte: 0
    }

},
//=========================================
//=============Q6 — Como você resolve problemas?===================
q6: {

    q6a: {
        programacao: 2,
        design: 0,
        redes: 2,
        seguranca: 2,
        suporte: 2
    },

    q6b: {
        programacao: 3,
        design: 1,
        redes: 1,
        seguranca: 2,
        suporte: 2
    },

    q6c: {
        programacao: 0,
        design: 0,
        redes: 1,
        seguranca: 0,
        suporte: 3
    },

    q6d: {
        programacao: 2,
        design: 0,
        redes: 1,
        seguranca: 3,
        suporte: 1
    }

},
//=========================================
//=============Q7 — O que você gosta de criar?===================
q7: {

    q7a: {
        programacao: 1,
        design: 3,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q7b: {
        programacao: 3,
        design: 0,
        redes: 1,
        seguranca: 1,
        suporte: 1
    },

    q7c: {
        programacao: 2,
        design: 2,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q7d: {
        programacao: 1,
        design: 1,
        redes: 0,
        seguranca: 0,
        suporte: 3
    }

},
//=========================================
//=============Q8 — Como prefere trabalhar?===================
q8: {

    q8a: {
        programacao: 1,
        design: 1,
        redes: 1,
        seguranca: 1,
        suporte: 3
    },

    q8b: {
        programacao: 2,
        design: 2,
        redes: 1,
        seguranca: 2,
        suporte: 0
    },

    q8c: {
        programacao: 1,
        design: 1,
        redes: 1,
        seguranca: 1,
        suporte: 1
    }

},
//=========================================
//============Q9 — Área que desperta curiosidade===================
q9: {

    q9a: {
        programacao: 4,
        design: 0,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q9b: {
        programacao: 0,
        design: 4,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q9c: {
        programacao: 0,
        design: 0,
        redes: 4,
        seguranca: 0,
        suporte: 0
    },

    q9d: {
        programacao: 2,
        design: 0,
        redes: 0,
        seguranca: 0,
        suporte: 1
    },

    q9e: {
        programacao: 0,
        design: 0,
        redes: 0,
        seguranca: 4,
        suporte: 0
    },

    q9f: {
        programacao: 1,
        design: 1,
        redes: 1,
        seguranca: 1,
        suporte: 1
    }

},
//=========================================
//=============Q10 — O que você criaria?===================
q10: {

    q10a: {
        programacao: 3,
        design: 1,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q10b: {
        programacao: 2,
        design: 2,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q10c: {
        programacao: 3,
        design: 2,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q10d: {
        programacao: 3,
        design: 0,
        redes: 1,
        seguranca: 1,
        suporte: 2
    },

    q10e: {
        programacao: 1,
        design: 0,
        redes: 3,
        seguranca: 0,
        suporte: 1
    },

    q10f: {
        programacao: 0,
        design: 0,
        redes: 0,
        seguranca: 0,
        suporte: 0
    }

},
//=========================================
//=============Q11 — O que mais motiva você?===================
q11: {

    q11a: {
        programacao: 2,
        design: 0,
        redes: 1,
        seguranca: 2,
        suporte: 2
    },

    q11b: {
        programacao: 1,
        design: 1,
        redes: 1,
        seguranca: 1,
        suporte: 1
    },

    q11c: {
        programacao: 2,
        design: 3,
        redes: 0,
        seguranca: 0,
        suporte: 0
    },

    q11d: {
        programacao: 3,
        design: 1,
        redes: 1,
        seguranca: 2,
        suporte: 1
    },

    q11e: {
        programacao: 1,
        design: 1,
        redes: 1,
        seguranca: 1,
        suporte: 3
    },

    q11f: {
        programacao: 1,
        design: 1,
        redes: 1,
        seguranca: 1,
        suporte: 1
    }

}
//=========================================
};
//================Calculos=========================

// ========================================
// 🎮 CALCULO DO RESULTADO PIXELU
// ========================================

// Pontuação final das classes
const resultado = {
    programacao: 0,
    design: 0,
    redes: 0,
    seguranca: 0,
    suporte: 0
};


// ========================================
// ➕ SOMAR OS PONTOS
// ========================================

function somarPontos(pontos) {

    resultado.programacao += pontos.programacao;
    resultado.design += pontos.design;
    resultado.redes += pontos.redes;
    resultado.seguranca += pontos.seguranca;
    resultado.suporte += pontos.suporte;

}


// ========================================
// ❓ Q1
// ========================================

function calcularQ1() {

    const resposta = document.querySelector(
        'input[name="personalidade"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q1[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q2
// PODE ESCOLHER VÁRIAS
// ========================================

function calcularQ2() {

    const respostas = document.querySelectorAll(
        'input[name="gosto"]:checked'
    );

    respostas.forEach(resposta => {

        const pontos = pontuacao.q2[resposta.id];

        somarPontos(pontos);

    });

}


// ========================================
// ❓ Q3
// ========================================

function calcularQ3() {

    const resposta = document.querySelector(
        'input[name="criatividade"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q3[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q4
// ========================================

function calcularQ4() {

    const resposta = document.querySelector(
        'input[name="curiosidade"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q4[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q5
// ========================================

function calcularQ5() {

    const resposta = document.querySelector(
        'input[name="internet"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q5[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q6
// ========================================

function calcularQ6() {

    const resposta = document.querySelector(
        'input[name="problema"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q6[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q7
// ========================================

function calcularQ7() {

    const resposta = document.querySelector(
        'input[name="criacao"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q7[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q8
// ========================================

function calcularQ8() {

    const resposta = document.querySelector(
        'input[name="equipe"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q8[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q9
// ========================================

function calcularQ9() {

    const resposta = document.querySelector(
        'input[name="tecnologia"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q9[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q10
// ========================================

function calcularQ10() {

    const resposta = document.querySelector(
        'input[name="projeto"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q10[resposta.id];

    somarPontos(pontos);

}


// ========================================
// ❓ Q11
// ========================================

function calcularQ11() {

    const resposta = document.querySelector(
        'input[name="motivacao"]:checked'
    );

    if (!resposta) return;

    const pontos = pontuacao.q11[resposta.id];

    somarPontos(pontos);

}


// ========================================
// 📊 CALCULAR TUDO
// ========================================

function calcularResultado() {

    // Zera antes de calcular
    resultado.programacao = 0;
    resultado.design = 0;
    resultado.redes = 0;
    resultado.seguranca = 0;
    resultado.suporte = 0;


    // Calcula todas as perguntas
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
    calcularQ11();


    // Mostra no console
    console.log("========== PIXELU ==========");
    console.log("💻 Programação:", resultado.programacao);
    console.log("🎨 Design:", resultado.design);
    console.log("🌐 Redes:", resultado.redes);
    console.log("🔐 Segurança:", resultado.seguranca);
    console.log("🛠️ Suporte:", resultado.suporte);


    // Mostra na página
    mostrarResultado();

}


// ========================================
// 🏆 DESCOBRIR MAIOR PONTUAÇÃO
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
    const vencedor = descobrirVencedor();

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


            <div class="rpg-linha">

                <div class="rpg-classe">
                    <span class="icone-classe">
                        ${classes.programacao.icone}
                    </span>

                    <span class="nome-classe">
                        ${classes.programacao.nome}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div
                            class="barra-xp-preenchida"
                            style="width: ${resultado.programacao * 2}%">
                        </div>
                    </div>

                    <span class="rpg-pontos">
                        ${resultado.programacao} XP
                    </span>
                </div>

            </div>


            <div class="rpg-linha">

                <div class="rpg-classe">
                    <span class="icone-classe">
                        ${classes.design.icone}
                    </span>

                    <span class="nome-classe">
                        ${classes.design.nome}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div
                            class="barra-xp-preenchida"
                            style="width: ${resultado.design * 2}%">
                        </div>
                    </div>

                    <span class="rpg-pontos">
                        ${resultado.design} XP
                    </span>
                </div>

            </div>


            <div class="rpg-linha">

                <div class="rpg-classe">
                    <span class="icone-classe">
                        ${classes.redes.icone}
                    </span>

                    <span class="nome-classe">
                        ${classes.redes.nome}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div
                            class="barra-xp-preenchida"
                            style="width: ${resultado.redes * 2}%">
                        </div>
                    </div>

                    <span class="rpg-pontos">
                        ${resultado.redes} XP
                    </span>
                </div>

            </div>


            <div class="rpg-linha">

                <div class="rpg-classe">
                    <span class="icone-classe">
                        ${classes.seguranca.icone}
                    </span>

                    <span class="nome-classe">
                        ${classes.seguranca.nome}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div
                            class="barra-xp-preenchida"
                            style="width: ${resultado.seguranca * 2}%">
                        </div>
                    </div>

                    <span class="rpg-pontos">
                        ${resultado.seguranca} XP
                    </span>
                </div>

            </div>


            <div class="rpg-linha">

                <div class="rpg-classe">
                    <span class="icone-classe">
                        ${classes.suporte.icone}
                    </span>

                    <span class="nome-classe">
                        ${classes.suporte.nome}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div
                            class="barra-xp-preenchida"
                            style="width: ${resultado.suporte * 2}%">
                        </div>
                    </div>

                    <span class="rpg-pontos">
                        ${resultado.suporte} XP
                    </span>
                </div>

            </div>

        </div>

    `;
}