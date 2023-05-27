<template>
  <ion-footer>
    <div class="footer">
      <div class="infoFooter">
        <div class="infoT">
          <h3>TechBookStore</h3>
          <p>
            Nuestro catálogo incluye laptops de calidad de diversas marcas y una
            variedad de libros para todos los gustos. Brindamos una experiencia
            de compra segura y conveniente para los amantes de la tecnología y
            la lectura.
          </p>
        </div>

        <div class="infoSt">
          <h4>INFO STORE</h4>
          <ul type="none">
            <li>Calle Ficticia 123, Buenos Aires, CABA, Argentina</li>
            <li>+54 11 8376 6284</li>
            <li>contact@techbookstore.com</li>
          </ul>
        </div>
      </div>

      <div class="iconosF">
        <a href="/">
          <img
            class="iconosFooter"
            src="/src/images/icons/icon_facebook.png"
            alt="icono facebook"
        /></a>
        <a href="/">
          <img
            class="iconosFooter"
            src="/src/images/icons/icon_tweeter.png"
            alt="icono twitter"
        /></a>
        <a href="/">
          <img
            class="iconosFooter"
            src="/src/images/icons/icon_instagram.png"
            alt="icono instagram"
        /></a>
        <a href="/">
          <img
            class="iconosFooter"
            src="/src/images/icons/icon_youtube.png"
            alt="icono youtube"
        /></a>
      </div>
    </div>

    <div class="derechos">
      <h2>TechBookStore © Todos los derechos reservados</h2>
    </div>
  </ion-footer>
</template>

<script>
</script>

<style>

.infoFooter{
	display: flex;
	justify-content: center;
    font-size: 1.2rem;
	margin-bottom: 2em;
}
.infoT{
 	text-align: justify;
	height: 13rem;
	width: 18rem;
	margin: 1rem 1rem 3rem 1rem;
}
.infoSt{
	display: inline-block;
	justify-content: center;
	margin-left: 2rem;
}
.iconosF{
	display: flex;
	justify-content: center;
} 
.iconosFooter{
	margin-right: 4em;
	margin-bottom: 0.5em;
	max-height: auto;
}
.derechos{
	border-top: var(--primary) 1px solid;
	text-align: center;
}

</style>