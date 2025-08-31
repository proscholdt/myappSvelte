<script>
    // Importa a imagem musculacao.jpg da pasta assets para uso como fundo da seção principal
    import imgMsuculacao from '$lib/assets/musculacao.jpg';
    import imgExercicios from '$lib/assets/exercicios.jpg';
    import imgAlongamento from '$lib/assets/alongamento.jpg';
    import iconMuscle from '$lib/assets/icon-muscle.png';
    import iconWeight from '$lib/assets/icon-weight.png';
    import {fly} from 'svelte/transition';

    export let iconSize = "32px";
    export let title = 'Titulo';
    export let content = 'Insira o content';
    export let btn ="Saiba mais";
    export let href = false;

    export let img = 'musculacao';
    if(img === 'musculacao') img = imgMsuculacao
    if(img === 'exercicios') img = imgExercicios
    if(img === 'alongamento') img = imgAlongamento

    export let icon;
    if(icon === 'muscle') icon = iconMuscle
    if(icon === 'weight') icon = iconWeight
</script>

<!-- 
    Seção principal da página inicial.
    O estilo de fundo utiliza a imagem importada dinamicamente.
-->
<section 
    class="intro" 
    style="background-image: url({img})" >
   
    <div class="intro__wrapper wrap" >
        <!-- Título principal da página, pergunta motivacional para o visitante -->
    <h1 in:fly={{y:-12, duration:125, delay:250}}>
    {@html title}
    <img src="{icon}" alt="" style="width: {iconSize}; height: {iconSize}; margin-left: 8px;">
    </h1>

        <!-- Texto de apresentação/motivação da academia -->
        <p in:fly={{y:-12, duration:125, delay:250}}>
            {content}
        </p>

        {#if btn && href}
        <a class="btn" href={href} in:fly={{y:-12, duration:125, delay:375}}>{btn}</a>
        {/if}
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