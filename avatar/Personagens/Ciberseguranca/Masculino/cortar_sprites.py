from PIL import Image
from pathlib import Path
import sys


# ============================================================
# CONFIGURAÇÕES
# ============================================================

COLUNAS = 5
LINHAS = 2

TAMANHO = 128

RESAMPLE = Image.Resampling.NEAREST


# ============================================================
# PROCESSAR UMA IMAGEM
# ============================================================

def cortar_sprites(caminho_imagem):

    caminho = Path(caminho_imagem)

    if not caminho.exists():
        raise FileNotFoundError(
            f"Arquivo não encontrado: {caminho}"
        )

    imagem = Image.open(caminho).convert("RGBA")

    largura, altura = imagem.size

    print()
    print("Imagem:", caminho)
    print("Tamanho:", largura, "x", altura)
    print("Grade:", COLUNAS, "x", LINHAS)
    print()

    largura_celula = largura // COLUNAS
    altura_celula = altura // LINHAS

    # Nome da imagem sem extensão
    nome = caminho.stem

    # Extrai o número do arquivo
    if "(" in nome and ")" in nome:
        numero = nome.split("(")[1].split(")")[0]
    else:
        numero = "1"

    # Pasta específica para este arquivo
    pasta_saida = Path(
        "sprites_cortados"
    ) / f"seguranca_{numero}"

    pasta_saida.mkdir(
        parents=True,
        exist_ok=True
    )

    contador = 1

    # ========================================================
    # CORTA 5 COLUNAS x 2 LINHAS
    # ========================================================

    for linha in range(LINHAS):

        for coluna in range(COLUNAS):

            x0 = coluna * largura_celula
            y0 = linha * altura_celula

            # Última coluna/linha usa o limite real da imagem
            x1 = (
                largura
                if coluna == COLUNAS - 1
                else (coluna + 1) * largura_celula
            )

            y1 = (
                altura
                if linha == LINHAS - 1
                else (linha + 1) * altura_celula
            )

            crop = imagem.crop(
                (x0, y0, x1, y1)
            )

            # Redimensiona mantendo pixel art
            crop.thumbnail(
                (TAMANHO, TAMANHO),
                RESAMPLE
            )

            # Canvas transparente 128x128
            sprite = Image.new(
                "RGBA",
                (TAMANHO, TAMANHO),
                (0, 0, 0, 0)
            )

            # Centraliza
            x = (TAMANHO - crop.width) // 2
            y = (TAMANHO - crop.height) // 2

            sprite.alpha_composite(
                crop,
                (x, y)
            )

            arquivo = (
                pasta_saida
                / f"masculino_{contador:02d}.png"
            )

            sprite.save(arquivo)

            print(
                f"Criado: {arquivo}"
            )

            contador += 1

    print()
    print("==========================================")
    print("10 SPRITES CRIADOS")
    print("==========================================")
    print()
    print("Pasta:")
    print(pasta_saida.resolve())
    print()


# ============================================================
# PROGRAMA PRINCIPAL
# ============================================================

if __name__ == "__main__":

    if len(sys.argv) < 2:
        print(
            "Uso:"
        )
        print(
            'python cortar_sprites.py "sprites\\seguranca (1).png"'
        )
        sys.exit(1)

    cortar_sprites(
        sys.argv[1]
    )