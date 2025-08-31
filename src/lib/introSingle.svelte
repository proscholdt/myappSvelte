<script>
    export let data;
</script>

<div class="intro">

    <div class="intro__wrapper wrap">

        <div class="intro__info">
            <h1>{data.name}</h1>
            <p>{data.content}</p>
        </div>

        <div class="intro__img">
            <img src="{data.img}" alt="">

        </div>

    </div>
</div>

<style>
.intro {
  margin-bottom: 24px; /* dá espaço antes do próximo título */
}

.intro__wrapper{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items:center;
  /* max-height: 360px;  <-- remova isso */
}

.intro__img{
  /* margin-right: -20px;  <-- evite se possível */
  position: relative;
  width: 100%;
  height: 360px;
  overflow: hidden; /* garante que nada “vaze” */
}

.intro__img::before{
  content: '';
  position:absolute;
  inset:0;
  background-color: var(--overlay);
  border-radius: 0 0 0 8px;
  pointer-events: none;
  z-index: 1;
}

/* Escopar a imagem apenas dentro da intro */
.intro__img img{
  border-radius: 0 0 0 8px;
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
  max-width: unset;
  position: relative;
  z-index: 0;
}

@media (max-width: 800px){
  .intro__wrapper{
    grid-template-columns: 1fr;
  }

  .intro__img{
    /* Em vez de margin-left negativa, use full-bleed opcional: */
    left: 50%;
    right: 50%;
    width: 100vw;           /* ocupa a largura da viewport */
    margin-left: -50vw;     /* centraliza o “bleed” */
    margin-right: -50vw;
    height: 240px;
    border-radius: 0;       /* borda reta no mobile, opcional */
  }

  .intro__img::before,
  .intro__img img{
    border-radius: 0;
    height: 240px;
  }
}
</style>