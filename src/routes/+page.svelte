<script>
    // Importa a imagem musculacao.jpg da pasta assets para uso como fundo da seção principal
    import imgHome from '../assets/musculacao.jpg'
</script>

<!-- 
    Seção principal da página inicial.
    O estilo de fundo utiliza a imagem importada dinamicamente.
-->
<section 
    class="intro" 
    style="background-image: url({imgHome})" 
>
    <div class="intro__wrapper wrap">
        <!-- Título principal da página, pergunta motivacional para o visitante -->
        <h1>
            Voce está pronto <br>para o desafio ?
        </h1>

        <!-- Texto de apresentação/motivação da academia -->
        <p>
            A Academia Local está pronta para te ajudar a chegar mais longe
            e alcançar sua melhor performance.
        </p>

        <!-- Link para a página "Sobre" para mais informações sobre a academia -->
        <a class="btn" href="/sobre">Sobre</a>
    </div> 
</section>

<style>
/* Estilização da seção principal da página */
.intro{
    min-height: 360px;              /* Altura mínima da seção para garantir destaque */
    background-size: cover;         /* Imagem cobre toda a área da seção */
    background-position: center;    /* Centraliza a imagem de fundo */
    display: grid;                  /* Usa grid para facilitar o alinhamento do conteúdo */
    align-content: center;          /* Centraliza o conteúdo verticalmente */
    justify-content: start;         /* Alinha o conteúdo à esquerda */
    position: relative;             /* Permite posicionar elementos filhos de forma absoluta */
}

/* Adiciona uma camada escura sobre a imagem de fundo para melhorar a leitura do texto */
.intro::after{
    content:'';                     /* Elemento vazio para a camada */
    position: absolute;             /* Posiciona sobre toda a seção */
    inset: 0;                       /* Preenche toda a área da seção */
    background-color: rgba(0,0,0,0.55); /* Cor preta semi-transparente */
}

/* Garante que o conteúdo fique acima da camada escura */
.intro__wrapper{
    z-index: 1;
    max-width:480px;
}

.btn{
    margin-top:24px;
}

p{
    font-size: calc(18/16*1rem);
    margin-top:16px;
}
</style>
