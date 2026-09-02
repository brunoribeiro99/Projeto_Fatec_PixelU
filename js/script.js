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
const respostaQ1 = document.querySelector('input[name="q1"]:checked');

const pontosQ1 = pontuacao.q1[respostaQ1.id].programacao;