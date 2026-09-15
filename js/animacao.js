/* =========================================================
   PIXELU — CONTROLE DO QUIZ
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const totalPerguntas = 10;

    /*
     * 0 = Dados pessoais
     * 1 = Pergunta 1
     * 2 = Pergunta 2
     * ...
     * 10 = Pergunta 10
     */
    let etapaAtual = 0;


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const dadosPessoais =
        document.getElementById("perguntaDados");


    /* =====================================================
       MOSTRAR ETAPA
       ===================================================== */

    function mostrarEtapa(etapa) {

        /* Esconde os dados pessoais */

        if (dadosPessoais) {
            dadosPessoais.style.display =
                etapa === 0 ? "block" : "none";
        }


        /* Esconde/mostra as perguntas */

        for (let i = 1; i <= totalPerguntas; i++) {

            const pergunta =
                document.getElementById(`pergunta${i}`);

            if (pergunta) {

                pergunta.style.display =
                    etapa === i ? "block" : "none";

            }
        }


        etapaAtual = etapa;

        atualizarBotoes();
    }


    /* =====================================================
       VERIFICAR DADOS PESSOAIS
       ===================================================== */

    function dadosPreenchidos() {

        const nome =
            document.getElementById("nome");

        const idade =
            document.getElementById("idade");

        const genero =
            document.querySelector(
                'input[name="genero"]:checked'
            );


        /*
         * Todos os três precisam estar preenchidos
         */

        if (!nome || !idade || !genero) {
            return false;
        }


        return (
            nome.value.trim() !== "" &&
            idade.value.trim() !== ""
        );
    }


    /* =====================================================
       VERIFICAR PERGUNTA RESPONDIDA
       ===================================================== */

    function perguntaRespondida(numero) {

        const pergunta =
            document.getElementById(`pergunta${numero}`);


        if (!pergunta) {
            return false;
        }


        const respostas =
            pergunta.querySelectorAll(
                'input[type="radio"], input[type="checkbox"]'
            );


        return Array.from(respostas).some(
            resposta => resposta.checked
        );
    }


    /* =====================================================
       VERIFICAR ETAPA ATUAL
       ===================================================== */

    function etapaRespondida() {

        /* Dados pessoais */

        if (etapaAtual === 0) {
            return dadosPreenchidos();
        }


        /* Perguntas */

        return perguntaRespondida(etapaAtual);
    }


    /* =====================================================
       ATUALIZAR BOTÕES
       ===================================================== */

    function atualizarBotoes() {

        /*
         * ================================================
         * DADOS PESSOAIS
         * ================================================
         */

        if (etapaAtual === 0) {

            const voltar =
                document.getElementById("btnVoltarDados");

            const proxima =
                document.getElementById("btnProximaDados");


            if (voltar) {
                voltar.disabled = true;
            }


            if (proxima) {
                proxima.disabled =
                    !dadosPreenchidos();
            }


            return;
        }


        /*
         * ================================================
         * PERGUNTAS 1 A 10
         * ================================================
         */

        const voltar =
            document.getElementById(`btnVoltar${etapaAtual}`);

        const proxima =
            document.getElementById(`btnProxima${etapaAtual}`);


        /*
         * Botão voltar
         */

        if (voltar) {
            voltar.disabled = false;
        }


        /*
         * Botão próxima
         */

        if (proxima) {

            proxima.disabled =
                !perguntaRespondida(etapaAtual);

        }
    }


    /* =====================================================
       IR PARA PRÓXIMA ETAPA
       ===================================================== */

    function proximaEtapa() {

        /*
         * Não deixa avançar sem responder
         */

        if (!etapaRespondida()) {
            return;
        }


        /*
         * Se chegou na pergunta 10,
         * finaliza o quiz
         */

        if (etapaAtual === totalPerguntas) {

            finalizarQuiz();

            return;
        }


        /*
         * Avança uma etapa
         */

        mostrarEtapa(etapaAtual + 1);
    }


    /* =====================================================
       VOLTAR
       ===================================================== */

    function voltarEtapa() {

        /*
         * Se está nos dados pessoais,
         * não existe etapa anterior
         */

        if (etapaAtual === 0) {
            return;
        }


        /*
         * Volta uma etapa
         */

        mostrarEtapa(etapaAtual - 1);
    }


    /* =====================================================
       FINALIZAR QUIZ
       ===================================================== */

    function finalizarQuiz() {

        alert("Quiz concluído! 🎮");

        /*
         * Depois vamos substituir isso pelo
         * cálculo do resultado do PixelU.
         */
    }


    /* =====================================================
       EVENTOS DOS DADOS PESSOAIS
       ===================================================== */

    const nome =
        document.getElementById("nome");

    const idade =
        document.getElementById("idade");

    const generos =
        document.querySelectorAll(
            'input[name="genero"]'
        );


    if (nome) {
        nome.addEventListener(
            "input",
            atualizarBotoes
        );
    }


    if (idade) {
        idade.addEventListener(
            "input",
            atualizarBotoes
        );
    }


    generos.forEach(function (genero) {

        genero.addEventListener(
            "change",
            atualizarBotoes
        );

    });


    /* =====================================================
       BOTÃO PRÓXIMO DOS DADOS
       ===================================================== */

    const btnProximaDados =
        document.getElementById("btnProximaDados");


    if (btnProximaDados) {

        btnProximaDados.addEventListener(
            "click",
            proximaEtapa
        );

    }


    /* =====================================================
       BOTÕES DAS PERGUNTAS
       ===================================================== */

    for (let i = 1; i <= totalPerguntas; i++) {

        const btnProxima =
            document.getElementById(`btnProxima${i}`);

        const btnVoltar =
            document.getElementById(`btnVoltar${i}`);


        /*
         * Próximo
         */

        if (btnProxima) {

            btnProxima.addEventListener(
                "click",
                proximaEtapa
            );

        }


        /*
         * Voltar
         */

        if (btnVoltar) {

            btnVoltar.addEventListener(
                "click",
                voltarEtapa
            );

        }
    }


    /* =====================================================
       DETECTAR RESPOSTAS DAS PERGUNTAS
       ===================================================== */

    for (let i = 1; i <= totalPerguntas; i++) {

        const pergunta =
            document.getElementById(`pergunta${i}`);


        if (!pergunta) {
            continue;
        }


        const respostas =
            pergunta.querySelectorAll(
                'input[type="radio"], input[type="checkbox"]'
            );


        respostas.forEach(function (resposta) {

            resposta.addEventListener(
                "change",
                atualizarBotoes
            );

        });

    }


    /* =====================================================
       INICIAR
       ===================================================== */

    mostrarEtapa(0);

});