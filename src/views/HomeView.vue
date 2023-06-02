<script>
import {} from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
import { IonPage } from '@ionic/vue'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage }
}

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <div class="row div-icons"  align="center">
          <div class="col-xs-12 col-sm-4 home-text">
            <font-awesome-icon icon="fa-solid fa-truck" class="home-icon"/>
            ENVÍO GRATIS
          </div>
          <div class="col-xs-12 col-sm-4 home-text" >
            <font-awesome-icon icon="fa-solid fa-credit-card" class="home-icon"/>
            TODAS LAS TARJETAS
          </div>
          <div class="col-xs-12 col-sm-4 home-text">
            <font-awesome-icon :icon="['fas', 'headset']" class="home-icon"/>
            SOPORTE 24HS
          </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="src/images/carousel/oferta_encic_pokemon.png" class="d-block w-100 carousel-img" alt="...">
            </div>
            <div class="carousel-item">
              <img src="src/images/carousel/oferta_gamer.png" class="d-block w-100 carousel-img" alt="...">
            </div>
            <div class="carousel-item">
              <img src="src/images/carousel/oferta_hp.png" class="d-block w-100 carousel-img" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>

        <div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, adipisci ea? Quis veniam iste cum animi delectus perferendis cumque. Necessitatibus sapiente aliquam iure possimus voluptatem placeat incidunt aut doloribus voluptatum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam accusantium inventore soluta iusto a labore veritatis ex quibusdam, fugit similique numquam corrupti sint quis delectus ducimus vero cum eum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit possimus soluta iste! Dolorem distinctio, neque quam, molestias delectus rerum hic in, temporibus doloremque molestiae omnis ea qui exercitationem aliquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio ab consequuntur. Temporibus debitis adipisci obcaecati provident qui quas voluptatibus maxime! Explicabo voluptates est suscipit, praesentium recusandae reiciendis facere illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero laborum eum eius, ullam corporis ea nam velit quidem adipisci quia nostrum culpa voluptas voluptatem cum. Aliquid, sint. Amet, nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi repudiandae libero perspiciatis error odio molestiae dolores fuga expedita explicabo natus. Accusantium tempore vitae reprehenderit laudantium perferendis minima officia quasi perspiciatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate in explicabo dicta doloremque numquam alias error amet voluptatem reiciendis voluptatibus praesentium incidunt, laudantium debitis reprehenderit! Necessitatibus beatae assumenda modi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta maxime iusto reiciendis eos ipsa minus vitae quibusdam consequatur impedit delectus eveniet ea, quasi neque adipisci quisquam commodi voluptatibus ullam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam hic, placeat exercitationem nesciunt consequatur? Officiis, explicabo debitis. Iusto sit nostrum asperiores velit veritatis expedita nobis eveniet sint voluptatum ullam?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus eum sapiente, quos dignissimos ab, cumque facilis inventore magni esse necessitatibus. Tenetur quae unde, eveniet cupiditate amet vero nobis non!
          </p>


          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam accusantium inventore soluta iusto a labore veritatis ex quibusdam, fugit similique numquam corrupti sint quis delectus ducimus vero cum eum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit possimus soluta iste! Dolorem distinctio, neque quam, molestias delectus rerum hic in, temporibus doloremque molestiae omnis ea qui exercitationem aliquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio ab consequuntur. Temporibus debitis adipisci obcaecati provident qui quas voluptatibus maxime! Explicabo voluptates est suscipit, praesentium recusandae reiciendis facere illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero laborum eum eius, ullam corporis ea nam velit quidem adipisci quia nostrum culpa voluptas voluptatem cum. Aliquid, sint. Amet, nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi repudiandae libero perspiciatis error odio molestiae dolores fuga expedita explicabo natus. Accusantium tempore vitae reprehenderit laudantium perferendis minima officia quasi perspiciatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate in explicabo dicta doloremque numquam alias error amet voluptatem reiciendis voluptatibus praesentium incidunt, laudantium debitis reprehenderit! Necessitatibus beatae assumenda modi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta maxime iusto reiciendis eos ipsa minus vitae quibusdam consequatur impedit delectus eveniet ea, quasi neque adipisci quisquam commodi voluptatibus ullam?
          </p>


          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam accusantium inventore soluta iusto a labore veritatis ex quibusdam, fugit similique numquam corrupti sint quis delectus ducimus vero cum eum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit possimus soluta iste! Dolorem distinctio, neque quam, molestias delectus rerum hic in, temporibus doloremque molestiae omnis ea qui exercitationem aliquam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio ab consequuntur. Temporibus debitis adipisci obcaecati provident qui quas voluptatibus maxime! Explicabo voluptates est suscipit, praesentium recusandae reiciendis facere illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero laborum eum eius, ullam corporis ea nam velit quidem adipisci quia nostrum culpa voluptas voluptatem cum. Aliquid, sint. Amet, nesciunt!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi repudiandae libero perspiciatis error odio molestiae dolores fuga expedita explicabo natus. Accusantium tempore vitae reprehenderit laudantium perferendis minima officia quasi perspiciatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate in explicabo dicta doloremque numquam alias error amet voluptatem reiciendis voluptatibus praesentium incidunt, laudantium debitis reprehenderit! Necessitatibus beatae assumenda modi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta maxime iusto reiciendis eos ipsa minus vitae quibusdam consequatur impedit delectus eveniet ea, quasi neque adipisci quisquam commodi voluptatibus ullam?
          </p>


        </div>
        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>

<style >

</style>