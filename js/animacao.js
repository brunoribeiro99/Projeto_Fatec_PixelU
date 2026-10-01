/* =========================================================
   PIXELU — CONTROLE DO QUIZ
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const totalPerguntas = 10;

    /*
     * 0 = Dados pessoais
     * 1 = Pergunta 1
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

        /* Esconde ou mostra os dados pessoais */

        if (dadosPessoais) {
            dadosPessoais.style.display =
                etapa === 0 ? "block" : "none";
        }


        /* Esconde ou mostra as perguntas */

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

        const nome = document.getElementById("nome");
        const celular = document.getElementById("celular");
        const idade = document.getElementById("idade");

        const genero =
            document.querySelector(
                'input[name="genero"]:checked'
            );

        if (!nome || !celular || !idade || !genero) {
            return false;
        }

        const celularNumeros =
            celular.value.replace(/\D/g, "");

        return (
            nome.value.trim().length >= 8 &&
            celularNumeros.length === 11 &&
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

        if (etapaAtual === 0) {
            return dadosPreenchidos();
        }

        return perguntaRespondida(etapaAtual);
    }


    /* =====================================================
       ATUALIZAR BOTÕES
       ===================================================== */

    function atualizarBotoes() {

        /* Dados pessoais */

        if (etapaAtual === 0) {

            const voltar =
                document.getElementById("btnVoltarDados");

            const proxima =
                document.getElementById("btnProximaDados");

            if (voltar) {
                voltar.disabled = true;
            }

            if (proxima) {
                proxima.disabled = !dadosPreenchidos();
            }

            return;
        }


        /* Perguntas 1 a 10 */

        const voltar =
            document.getElementById(`btnVoltar${etapaAtual}`);

        const proxima =
            document.getElementById(`btnProxima${etapaAtual}`);

        if (voltar) {
            voltar.disabled = false;
        }

        if (proxima) {
            proxima.disabled =
                !perguntaRespondida(etapaAtual);
        }
    }


    /* =====================================================
       IR PARA PRÓXIMA ETAPA
       ===================================================== */

    function proximaEtapa() {

        /* Não deixa avançar sem responder */

        if (!etapaRespondida()) {
            return;
        }

        /* Se chegou na pergunta 10, finaliza o quiz */

        if (etapaAtual === totalPerguntas) {
            finalizarQuiz();
            return;
        }

        mostrarEtapa(etapaAtual + 1);
    }


    /* =====================================================
       VOLTAR
       ===================================================== */

    function voltarEtapa() {

        if (etapaAtual === 0) {
            return;
        }

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

    const celular =
        document.getElementById("celular");

    const idade =
        document.getElementById("idade");

    const generos =
        document.querySelectorAll(
            'input[name="genero"]'
        );

    if (nome) {
        nome.addEventListener("input", atualizarBotoes);
    }

    if (celular) {
        celular.addEventListener("input", atualizarBotoes);
    }

    if (idade) {
        idade.addEventListener("input", atualizarBotoes);
    }

    generos.forEach(function (genero) {
        genero.addEventListener("change", atualizarBotoes);
    });


    /* =====================================================
       BOTÃO PRÓXIMO DOS DADOS
       ===================================================== */

    const btnProximaDados =
        document.getElementById("btnProximaDados");

    if (btnProximaDados) {
        btnProximaDados.addEventListener("click", proximaEtapa);
    }


    /* =====================================================
       BOTÕES DAS PERGUNTAS
       ===================================================== */

    for (let i = 1; i <= totalPerguntas; i++) {

        const btnProxima =
            document.getElementById(`btnProxima${i}`);

        const btnVoltar =
            document.getElementById(`btnVoltar${i}`);

        if (btnProxima) {
            btnProxima.addEventListener("click", proximaEtapa);
        }

        if (btnVoltar) {
            btnVoltar.addEventListener("click", voltarEtapa);
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
            resposta.addEventListener("change", atualizarBotoes);
        });
    }


    /* =====================================================
       INICIAR
       ===================================================== */

    mostrarEtapa(0);

});