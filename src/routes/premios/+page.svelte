<script lang="ts">
  import Header from "../../components/Header.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Prêmios &amp; Troféus • ItValley Portal</title>
</svelte:head>

<div class="min-h-screen transition-colors">
  <Header />
  <main class="pt-32 pb-20">
    <div class="max-w-5xl mx-auto px-6">
      <section class="text-center mb-12">
        <p class="eyebrow">Selecione a trilha</p>
        <h2 class="title">Prêmios &amp; Troféus</h2>
        <p class="lead">
          Escolha entre as conquistas focadas em Inteligência Artificial ou os destaques da trilha de Dados.
        </p>
      </section>

      <section class="grid gap-8 md:grid-cols-2">
        <a href="/premios/ia" class="cta-card ia">
          <div>
            <p class="eyebrow">Categoria</p>
            <h3>Inteligência Artificial</h3>
            <p>Troféus para quem domina pipelines, agentes e produtos completos de IA.</p>
          </div>
          <span>Ver troféus</span>
        </a>

        <a href="/premios/dados" class="cta-card dados">
          <div>
            <p class="eyebrow">Categoria</p>
            <h3>Dados &amp; Analytics</h3>
            <p>Reconhecimentos para projetos de dados, engenharia e visualização.</p>
          </div>
          <span>Ver troféus</span>
        </a>
      </section>
    </div>
  </main>
  <Footer />
</div>

<style>
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.75rem;
    color: var(--muted-text);
  }
  .title {
    font-size: clamp(2rem, 5vw, 3.2rem);
    margin: 0.75rem 0;
  }
  .lead {
    color: var(--muted-text);
    max-width: 620px;
    margin: 0 auto;
  }
  .cta-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 2rem;
    border-radius: 1.5rem;
    border: 1px solid var(--panel-border);
    text-decoration: none;
    color: var(--text-color);
    background: var(--panel-bg);
    box-shadow: var(--panel-shadow);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }
  .cta-card::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.4;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .cta-card h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
  .cta-card p {
    color: var(--muted-text);
  }
  .cta-card span {
    font-weight: 600;
    letter-spacing: 0.05em;
  }
  .cta-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 25px 50px rgba(15, 23, 42, 0.2);
  }
  .cta-card.ia {
    border-color: rgba(129, 140, 248, 0.4);
  }
  .cta-card.ia::after {
    background: radial-gradient(circle at top, rgba(129, 140, 248, 0.45), transparent 60%);
  }
  .cta-card.dados {
    border-color: rgba(45, 212, 191, 0.4);
  }
  .cta-card.dados::after {
    background: radial-gradient(circle at top, rgba(45, 212, 191, 0.45), transparent 60%);
  }
</style>
