<script>
  import img from '$lib/assets/crossfit.jpg'
</script>

<footer class="footer">
  <div class="footer__wrapper wrap">
    <div class="footer__img">
      <img src="{img}" alt="">
    </div>
    <div class="footer__content">
      <div class="footer__info">
        <h2>Venha fazer seu <br>primeiro Treino Grátis</h2>
        <p>Entre em contato via WhatsApp ou e-mail e fale com um treinador especialista da equipe.</p>
      </div>
      <div class="footer__btns">
        <a href="https://api.whatsapp.com/send?phone=5527995130691" class="btn">Whatsapp</a>
        <a href="mailto:proscholdt.h2014@gmail.com" class="btn">E-mail</a>
      </div>
    </div>
  </div>


</footer>

<style>
  .footer{ margin-top:90px; }

  .footer__wrapper{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    align-items:center;
  }

  .footer__img{
    position:relative;
    border-radius:16px;
    overflow:hidden;
    min-height:clamp(260px, 45vh, 520px);
  }

  .footer__img img{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    display:block;
    max-width:none;
    z-index:0;
  }

  .footer__img::after{
    content:'';
    position:absolute;
    inset:0;
    background-color: var(--overlay);
    z-index:1;
    pointer-events:none;
  }

  img{ border-radius:16px; }

  p{
    margin-top:16px;
    max-width:360px;
  }

  h2{ font-size: calc(36/16*1rem) }

  .footer__btns{
    margin-top:24px;
    display:flex;
    gap:8px;
  }

</style>
