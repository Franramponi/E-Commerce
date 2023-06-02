
<script>
</script>

<template>
  <div class="footer">
    <div class="info-footer">
      <div class="col-xs-12 col-sm-4 info-store">
        <h3>TechBookStore</h3>
        <p>
          Nuestro catálogo incluye laptops de calidad de diversas marcas y una
          variedad de libros para todos los gustos. Brindamos una experiencia de
          compra segura y conveniente para los amantes de la tecnología y la
          lectura.
        </p>
      </div>
      <div class="col-xs-12 col-sm-4 info-store info-shop">
        <h3>COMPRAS</h3>
        <RouterLink to="/cart"  class="router-link">Tu carrito</RouterLink> <br />
<!--         <RouterLink to="/profile">Tu perfil</RouterLink> <br />
 -->        <a href="/"  class="router-link">Lista favoritos</a> <br />
      </div>

      <div class="col-xs-12 col-sm-4 info-store">
        <h3>INFO STORE</h3>
        <p>
          Calle Ficticia 123, Buenos Aires, CABA, Argentina <br>
          +54 11 8376 6284 <br>
          contact@techbookstore.com <br>
        </p>
      </div>
    </div>

    <div class="iconos-footer">
      <a href="/">
        <font-awesome-icon icon="fa-brands fa-facebook" class="home-icon footer-icon"/>
      </a>
      <a href="/">
        <font-awesome-icon icon="fa-brands fa-twitter" class="home-icon footer-icon"/>
      </a>
      <a href="/">
        <font-awesome-icon icon="fa-brands fa-instagram" class="home-icon footer-icon"/>
      </a>
      <a href="/">
        <font-awesome-icon icon="fa-brands fa-youtube" class="home-icon footer-icon"/>
      </a>
    </div>
  </div>

  <div class="derechos">
    <h2>TechBookStore © Todos los derechos reservados</h2>
  </div>
</template>

<style>
</style>