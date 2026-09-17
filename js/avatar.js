const avatarConfig = {

    caminhoBase: "avatar/Personagens/",

    areas: {

        programacao: {
            nome: "Programacao",
            masculino: 20,
            feminino: 20
        },

        design: {
            nome: "Designer",
            masculino: 20,
            feminino: 20
        },

        redes: {
            nome: "Redes",
            masculino: 20,
            feminino: 20
        },

        seguranca: {
            nome: "Ciberseguranca",
            masculino: 20,
            feminino: 20
        }

    }

};


// ========================================
// DESCOBRIR SEXO
// ========================================

function obterGeneroSelecionado() {

    const genero = document.querySelector(
        'input[name="genero"]:checked'
    );

    if (!genero) {

        console.warn(
            "⚠️ Nenhum gênero selecionado."
        );

        return null;
    }

    if (genero.value === "masculino") {

        return "Masculino";
    }

    if (genero.value === "feminino") {

        return "Feminino";
    }

    return null;
}


// ========================================
// ESCOLHER UM AVATAR
// ========================================

function escolherAvatar(area, genero) {

    const configArea = avatarConfig.areas[area];

    if (!configArea) {

        console.error(
            "❌ Área de avatar não encontrada:",
            area
        );

        return null;
    }

    if (!genero) {

        console.warn(
            "⚠️ Não foi possível definir o gênero do avatar."
        );

        return null;
    }


    // Descobre quantos avatares existem
    // para o gênero escolhido

    const generoMinusculo =
        genero.toLowerCase();

    const quantidade =
        configArea[generoMinusculo];


    if (!quantidade || quantidade <= 0) {

        console.error(
            "❌ Nenhum avatar cadastrado para:",
            area,
            genero
        );

        return null;
    }


    // ========================================
    // SORTEIA O NÚMERO DO AVATAR
    // ========================================

    const numero =
        Math.floor(
            Math.random() * quantidade
        ) + 1;


    // ========================================
    // MONTA O NOME DO ARQUIVO
    // ========================================

    let nomeArquivo;


    // CIBERSEGURANCA
    //
    // Arquivos:
    // seguranca (1).png
    // seguranca (2).png
    // seguranca (3).png
    // ...
    // seguranca (20).png

    if (area === "seguranca") {

        nomeArquivo =
            "seguranca (" +
            numero +
            ").png";

    } else {

        // OUTRAS ÁREAS
        //
        // Programacao (1).png
        // Designer (1).png
        // Redes (1).png

        nomeArquivo =
            configArea.nome +
            " (" +
            numero +
            ").png";
    }


    // ========================================
    // MONTA O CAMINHO COMPLETO
    // ========================================

    const caminho =
        avatarConfig.caminhoBase +
        configArea.nome +
        "/" +
        genero +
        "/sprites/" +
        nomeArquivo;


    // ========================================
    // RETORNA OS DADOS DO AVATAR
    // ========================================

    return {

        area: area,

        genero: genero,

        numero: numero,

        imagem: caminho

    };
}


// ========================================
// MOSTRAR AVATAR NO RESULTADO
// ========================================

function mostrarAvatarNoResultado(avatar) {

    if (!avatar) {
        return;
    }


    // Procura a área de resultado

    const areaResultado =
        document.getElementById("resultado");


    if (!areaResultado) {

        console.error(
            "❌ Elemento #resultado não encontrado."
        );

        return;
    }


    // Procura a classe principal

    const classePrincipal =
        areaResultado.querySelector(
            ".classe-principal"
        );


    if (!classePrincipal) {

        console.error(
            "❌ .classe-principal não encontrada."
        );

        return;
    }


    // ========================================
    // REMOVE AVATAR ANTERIOR
    // ========================================

    const avatarAnterior =
        classePrincipal.querySelector(
            ".avatar-resultado"
        );


    if (avatarAnterior) {

        avatarAnterior.remove();
    }


    // ========================================
    // CRIA CONTAINER
    // ========================================

    const container =
        document.createElement("div");


    container.className =
        "avatar-resultado";


    // ========================================
    // CRIA IMAGEM
    // ========================================

    const imagem =
        document.createElement("img");


    imagem.src =
        avatar.imagem;


    imagem.alt =
        "Avatar PixelU - " +
        avatar.area;


    // ========================================
    // CASO O ARQUIVO NÃO EXISTA
    // ========================================

    imagem.addEventListener(
        "error",
        function () {

            console.error(
                "❌ Não foi possível carregar o avatar:",
                avatar.imagem
            );

            container.remove();
        }
    );


    // ========================================
    // ADICIONA IMAGEM AO CONTAINER
    // ========================================

    container.appendChild(imagem);


    // ========================================
    // ADICIONA AVATAR AO RESULTADO
    // ========================================

    classePrincipal.prepend(container);


    // ========================================
    // DEBUG NO CONSOLE
    // ========================================

    console.log(
        "🎮 Avatar PixelU escolhido:"
    );

    console.log(avatar);

    console.log(
        "🖼️ Caminho da imagem:",
        avatar.imagem
    );
}


// ========================================
// PRINCIPAL
// ========================================

function criarAvatar(areaVencedora) {

    console.log(
        "Criando avatar da classe:",
        areaVencedora
    );


    // ========================================
    // DESCOBRE O GÊNERO SELECIONADO
    // ========================================

    const genero =
        obterGeneroSelecionado();


    if (!genero) {

        console.warn(
            "⚠️ Erro de gênero."
        );

        return;
    }


    // ========================================
    // ESCOLHE O AVATAR
    // ========================================

    const avatar =
        escolherAvatar(
            areaVencedora,
            genero
        );


    if (!avatar) {

        return;
    }


    // ========================================
    // MOSTRA O AVATAR
    // ========================================

    mostrarAvatarNoResultado(avatar);
}


// ========================================
// RESULTADO
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const btnVerPontuacao =
            document.getElementById(
                "btnVerPontuacao"
            );


        if (!btnVerPontuacao) {

            console.warn(
                "⚠️ Botão #btnVerPontuacao não encontrado."
            );

            return;
        }


        btnVerPontuacao.addEventListener(
            "click",
            function () {


                /*
                 * Pequeno atraso para garantir que
                 * o script.js já tenha montado
                 * o resultado na tela.
                 */

                setTimeout(
                    function () {


                        // ========================================
                        // VERIFICA SE descobrirVencedor EXISTE
                        // ========================================

                        if (
                            typeof descobrirVencedor !==
                            "function"
                        ) {

                            console.error(
                                "❌ A função descobrirVencedor() não foi encontrada."
                            );

                            return;
                        }


                        // ========================================
                        // DESCOBRE A ÁREA VENCEDORA
                        // ========================================

                        const vencedor =
                            descobrirVencedor();


                        console.log(
                            "🏆 Área vencedora:",
                            vencedor
                        );


                        // ========================================
                        // CRIA O AVATAR
                        // ========================================

                        criarAvatar(vencedor);

                    },
                    50
                );

            }
        );

    }
);