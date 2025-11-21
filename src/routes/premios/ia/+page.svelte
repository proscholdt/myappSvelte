<script lang="ts">
  import Header from "../../../components/Header.svelte";
  import AwardsPage from "../../../components/AwardsPage.svelte";
  import Footer from "../../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Prêmios de IA • ItValley Portal</title>
</svelte:head>

<div class="min-h-screen transition-colors">
  <Header />
  <main class="pt-32 pb-16">
    <div class="max-w-5xl mx-auto px-6">
      <AwardsPage
        area="IA"
        titulo="Prêmios de Inteligência Artificial"
        descricao="Reconhecimentos para quem entrega soluções completas de IA, do pipeline ao produto final."
      />
    </div>
  </main>
  <Footer />
</div>
