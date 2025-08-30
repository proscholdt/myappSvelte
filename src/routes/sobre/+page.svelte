<script>
	import Info from '$lib/info.svelte';
    import Intro from '$lib/intro.svelte';
</script>

 <Intro
    title ="Conheça a academia que mais cresce na cidade!"
    content = "Confira algumas das perguntas frequentes."
    btn="Modalidades"
    href="/modalidades"
    icon="weight"
    img="exercicios"
 />

<section class="faq">
    <div class="faq__wrapper wrap">
        <Info
        question = "Quanto custa a mensalidade?"
        answer = "LOrem ipsum color sit naturalies extrvagentis nebulosis"
        />

        <Info
        question = "Posso utilizar quantos dias?"
        answer = "LOrem ipsum color sit naturalies extrvagentis nebulosis"
        />

        <Info
        question = "Quantas modalides estão disponiveis?"
        answer = "LOrem ipsum color sit naturalies extrvagentis nebulosis"
        />

        

    </div>
</section>


<style>
    .faq{
        margin-top:60px;
    }

    .faq__wrapper{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:20px;
    }
</style>