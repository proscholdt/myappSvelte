<script lang="ts">
  import Header from "../../../components/Header.svelte";
  import AwardsPage from "../../../components/AwardsPage.svelte";
  import Footer from "../../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Prêmios de Dados • ItValley Portal</title>
</svelte:head>

<div class="min-h-screen transition-colors">
  <Header />
  <main class="pt-32 pb-16">
    <div class="max-w-5xl mx-auto px-6">
      <AwardsPage
        area="Dados"
        titulo="Prêmios de Dados & Analytics"
        descricao="Conquistas para especialistas em engenharia de dados, analytics e visualização."
      />
    </div>
  </main>
  <Footer />
</div>
