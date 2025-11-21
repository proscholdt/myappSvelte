<script lang="ts">
  import Header from "../../components/Header.svelte";
  import CommunicationsPage from "../../components/CommunicationsPage.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Comunicados • ItValley Portal</title>
</svelte:head>

<div class="min-h-screen">
  <Header />
  <main class="pt-32 pb-12">
    <div class="max-w-4xl mx-auto px-6">
      <CommunicationsPage />
    </div>
  </main>
  <Footer />
</div>
