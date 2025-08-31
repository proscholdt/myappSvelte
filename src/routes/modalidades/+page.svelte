<script>
	import Card from "$lib/card.svelte";
	import Intro from "$lib/intro.svelte";
    import {modalidades} from "$lib/stores";


</script>
 <Intro
    title = "Temos a modalidade certa para você "
    content = "Confira algumas das perguntas frequentes."
    icon = "weight"
    img = "alongamento"
 />

<section class="modalidades">
  <div class="modalidades__wrapper wrap">
    {#each $modalidades as modalidade}
      <Card info={modalidade}/>
    {/each}
  </div>
</section>

<style>
    .modalidades{
        margin-top:60px;
    }
    .modalidades__wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content:center;
    }
    
</style>