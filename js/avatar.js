//CONFIG
// ========================================

const avatarConfig = {
caminhoBase: "avatar/Personagens/",

areas: {
    programacao: "Programacao",
    design: "Designer",
    redes: "Redes",
    seguranca: "Ciberseguranca",
    suporte: "Suporte"
},

quantidadeAvatares: 10

};

// DESCOBRIR SEXO
// ========================================

function obterGeneroSelecionado() {

const genero = document.querySelector(
    'input[name="genero"]:checked'
);

if (!genero) {
    console.warn("⚠️ Nenhum gênero selecionado.");
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

// ESCOLHER UM AVATAR
// ========================================

function escolherAvatar(area, genero) {

const nomeArea = avatarConfig.areas[area];

if (!nomeArea) {
    console.error("Área de avatar não encontrada:", area);
    return null;
}

if (!genero) {
    console.warn("Não foi possível definir o gênero do avatar.");
    return null;
}

const numero =
    Math.floor(
        Math.random() * avatarConfig.quantidadeAvatares
    ) + 1;

const caminho =
    avatarConfig.caminhoBase +
    nomeArea +
    "/" +
    genero +
    "/sprites/" +
    nomeArea +
    " (" +
    numero +
    ").png";

return {
    area: area,
    genero: genero,
    numero: numero,
    imagem: caminho
};

}

//MOSTRAR AVATAR NO RESULTADO
// ========================================

function mostrarAvatarNoResultado(avatar) {

if (!avatar) {
    return;
}

const areaResultado =
    document.getElementById("resultado");

if (!areaResultado) {
    console.error(
        "❌ Elemento #resultado não encontrado."
    );
    return;
}

const classePrincipal =
    areaResultado.querySelector(".classe-principal");

if (!classePrincipal) {
    console.error(
        "❌ .classe-principal não encontrada."
    );
    return;
}


const avatarAnterior =
    classePrincipal.querySelector(".avatar-resultado");

if (avatarAnterior) {
    avatarAnterior.remove();
}


const container =
    document.createElement("div");

container.className = "avatar-resultado";


const imagem =
    document.createElement("img");

imagem.src = avatar.imagem;

imagem.alt =
    "Avatar PixelU - " +
    avatar.area;


imagem.addEventListener("error", function () {

    console.error(
        "❌ Não foi possível carregar o avatar:",
        avatar.imagem
    );

    container.remove();
});

container.appendChild(imagem);

classePrincipal.prepend(container);

console.log("🎮 Avatar PixelU escolhido:");
console.log(avatar);

}

//PRINCIPAL
// ========================================

function criarAvatar(areaVencedora) {

console.log(
    "Criando avatar da classe:",
    areaVencedora
);

const genero =
    obterGeneroSelecionado();

if (!genero) {

    console.warn(
        "Erro de sexo"
    );

    return;
}

const avatar =
    escolherAvatar(
        areaVencedora,
        genero
    );

if (!avatar) {
    return;
}

mostrarAvatarNoResultado(avatar);

}

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

            setTimeout(function () {

                if (
                    typeof descobrirVencedor !==
                    "function"
                ) {
                    console.error(
                        "A função descobrirVencedor() não foi encontrada."
                    );

                    return;
                }

                const vencedor =
                    descobrirVencedor();

                criarAvatar(vencedor);

            }, 50);
        }
    );
}

);