<script>
import { IonPage } from "@ionic/vue";
import Footer from "./Footer.vue";

export default {
  components: { Footer, IonPage },
};
</script>
<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Sobre Nosotros</h2>
        <div class="historia">
          <div class="story2">
            <h3>Un poco de como surgio TechBook Store</h3>
            <p>
              En una ciudad pequeña, Alex, un apasionado de la tecnología y los
              libros, decidió crear un e-commerce llamado TechBooks. <br />
              Inspirado por la dificultad de encontrar productos de calidad en
              su área, Alex trabajó arduamente para establecer su tienda en
              línea.
              <br />
              Con una amplia selección de notebooks y libros, precios
              competitivos y un excelente servicio al cliente, TechBooks Store
              se convirtió en un éxito, satisfaciendo las necesidades de los
              amantes de la tecnología y la literatura en todo el país.
            </p>
          </div>
          <img src="src/images/carousel/story.jpg" alt="" />
        </div>

        <div class="empresa">
          <div class="compromis">
            <h3>Nuestro compromiso</h3>
            <p>
              Nuestro compromiso con los clientes es la piedra angular de
              nuestro e-commerce de notebooks y libros. Estamos aquí para
              servirles y asegurarnos de que tengan una experiencia de compra
              satisfactoria y confiable. Su satisfacción es nuestra máxima
              prioridad.
            </p>
          </div>
          <div class="mision">
            <h3>Mision</h3>
            <p>
              Nuestra misión en nuestro e-commerce de notebooks y libros es
              proporcionar a nuestros clientes una experiencia de compra en
              línea excepcional, ofreciendo una amplia selección de productos de
              alta calidad, excelencia en el servicio al cliente y un compromiso
              con la satisfacción del cliente. <br />
              Buscamos ser la primera opción para aquellos que buscan notebooks
              y libros, brindando un entorno seguro y confiable para adquirir
              productos tecnológicos y literarios.
            </p>
          </div>
        </div>

        <div>
          <h3>Nuestro equipo</h3>
          <div class="equipo">
            <div class="personal">
              <img src="src/images/carousel/persona4.jpg" alt="" />
              <p>Ricardo Torres</p>
              <p>
                CEO: <br />
                Responsable de establecer la visión y la dirección estratégica
                de la empresa, además de supervisar la gestión general.
              </p>
            </div>
            <div class="personal">
              <img src="src/images/carousel/persona2.jpg" alt="" />
              <p>Valeria Garcia</p>
              <p>
                COO: <br />
                Encargado de supervisar las operaciones diarias de la empresa y
                asegurarse de que los procesos internos sean eficientes.
              </p>
            </div>

            <div class="personal">
              <img src="src/images/carousel/persona1.jpg" alt="" />
              <p>Gabriel Rodriguez</p>
              <p>
                GER: <br />
                Encargado de supervisar todas las operaciones de la empresa y
                tomar decisiones estratégicas.
              </p>
            </div>
            <div class="personal">
              <img src="src/images/carousel/persona3.jpg" alt="" />
              <p>Laura Lopez</p>
              <p>
                CMO: <br />
                Encargado de desarrollar y ejecutar estrategias de marketing
                para promover los productos o servicios de la empresa y atraer a
                los clientes.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<style>

</style>