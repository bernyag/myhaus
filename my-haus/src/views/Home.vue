<template>
  <div class="hello">
    <h1 class="title is-1">Bienvenido a myHaus</h1>
    <br>
    <div class="columns is-centered is-mobile">
        <div class="column is-10">
        <carousel 
            class="car"
            :per-page="1" 
            :navigationEnabled="true" 
            :loop="true"
            >
            <slide >
                <!-- <img src="./../assets/fora1.png"> -->
            </slide>
            <slide >
                <!-- <img src="./../assets/fora2.png"> -->
            </slide>
            <slide >
                <!-- <img src="./../assets/fora3.png"> -->
            </slide>
            <slide >
                <!-- <img src="./../assets/fora4.png"> -->
            </slide>
        </carousel>
        </div>
    </div>
    <h1 class="subtitle is-2">¿Quiénes somos?</h1>
    <div class="columns is-mobile is-centered" id="itam70">
      <DIV class="column is-four-fifths">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iusto architecto earum et adipisci facere sit culpa illo at, totam nam deserunt porro, magnam dolor consectetur error impedit blanditiis odit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam quis delectus nesciunt cumque! Molestias exercitationem modi sunt aut odio id optio, temporibus expedita beatae. Sequi veniam iste dicta repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam repellat animi hic consectetur perferendis, aspernatur a consequuntur facere? Qui in soluta incidunt delectus perspiciatis ipsa aspernatur voluptatum architecto omnis.
          <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aspernatur vitae beatae corporis cum ea, eum impedit? In, deleniti fugit doloremque vel exercitationem incidunt impedit maiores sit possimus esse tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit velit ipsam fuga, nostrum inventore numquam delectus molestias molestiae fugiat deleniti sunt reprehenderit, harum sint aspernatur. Nulla temporibus quia et quasi!
          <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat dicta repudiandae a adipisci, ea minus officia facilis rerum repellat asperiores optio neque fugiat, praesentium ducimus dolores quos maxime qui!Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus consectetur quam eaque cum accusamus provident suscipit porro dignissimos, aliquid nemo. Iure possimus corporis incidunt provident! Quidem commodi odit asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores deserunt fugiat sequi quas, molestiae pariatur quae, dolorem enim rerum, debitis facere dolorum! Maiores, qui. Non fugit eveniet quae cumque?

      </DIV>
    </div>
    <div class="parallax">

    </div>
    <br>
    <h3 class="subtitle is-2">¿Por qué myHaus?</h3>
    <DIV class="columns is-mobile is-centered">
        <div class="column is-four-fifths">
            • <b class="word"> Inicio Convocatoria Becas:</b>
            17 de enero al 26 de enero.<br><br>

            • <b class="word"> Integración Extranjero:</b> 25 ó
            26 de enero.<br><br>

            • <b class="word"> Toma de Protesta:</b> 19 de
            enero 2:30 pm.<br><br>

            • <b class="word"> Trajineras:</b> 27 de enero.<br><br>

            • <b class="word"> Inicio de Gestión:</b> 22 de enero.<br><br>
        </div >
    </DIV>
    <div id="nosotros"> </div>
    <h3 class="subtitle is-2">Misión</h3>
      <DIV class="columns is-mobile is-centered">
          <div class="column is-four-fifths">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iusto architecto earum et adipisci facere sit culpa illo at, totam nam deserunt porro, magnam dolor consectetur error impedit blanditiis odit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam quis delectus nesciunt cumque! Molestias exercitationem modi sunt aut odio id optio, temporibus expedita beatae. Sequi veniam iste dicta repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam repellat animi hic consectetur perferendis, aspernatur a consequuntur facere? Qui in soluta incidunt delectus perspiciatis ipsa aspernatur voluptatum architecto omnis.
          <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aspernatur vitae beatae corporis cum ea, eum impedit? In, deleniti fugit doloremque vel exercitationem incidunt impedit maiores sit possimus esse tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit velit ipsam fuga, nostrum inventore numquam delectus molestias molestiae fugiat deleniti sunt reprehenderit, harum sint aspernatur. Nulla temporibus quia et quasi!
          
          </div >
      </DIV>
    <h3 class="subtitle is-2">Visión</h3>
      <DIV class="columns is-mobile is-centered">
          <div class="column is-four-fifths">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi iusto architecto earum et adipisci facere sit culpa illo at, totam nam deserunt porro, magnam dolor consectetur error impedit blanditiis odit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam quis delectus nesciunt cumque! Molestias exercitationem modi sunt aut odio id optio, temporibus expedita beatae. Sequi veniam iste dicta repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam repellat animi hic consectetur perferendis, aspernatur a consequuntur facere? Qui in soluta incidunt delectus perspiciatis ipsa aspernatur voluptatum architecto omnis.
          <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aspernatur vitae beatae corporis cum ea, eum impedit? In, deleniti fugit doloremque vel exercitationem incidunt impedit maiores sit possimus esse tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit velit ipsam fuga, nostrum inventore numquam delectus molestias molestiae fugiat deleniti sunt reprehenderit, harum sint aspernatur. Nulla temporibus quia et quasi!
          
          </div >
      </DIV>
    <h3 class="subtitle is-2">Conoce al equipo</h3>
    <DIV class="columns is-mobile is-centered">
        <div class="column is-four-fifths">
           <!-- <img src="./../assets/fora1.png" class="logo"> -->
           Foto
        </div >
    </DIV>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
#nosotros{width: 100%; height: 100px}
.word {
  color: #00805d;
}
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.carr{
  z-index: 0;
}

.column{
  padding: 10px;
  margin: 5px;
}
.columns{
  padding: 35px;
  border-radius: 200px;
  text-align: justify;
}
.parallax { 
    // background-image: url("./../assets/para.jpeg");
    height: 800px; 
    /* parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .7;
}
.logo{
  max-width: 45%;
  display: block;
  margin-left: auto;
  margin-right: auto;
    }
.cajas:hover{
    background:rgba(19, 107, 19, 0.466) !important;
    transition-delay:.3s;
    h3 { font-weight:bold; }
}
.cajas{
    transition: .5s background-color;
    margin: 35px;
    h3{     
   text-align: center;
    }
}
.title{
  text-align: center;
}
.text-center{text-align: center;}
.subtitle{
    padding: 20px;
}
.no-left{
    padding-left:0px;
}
.is-1{    padding-top: 15px;
}
.car{
    //  max-width: 500px !important;
    text-align: center;
}
</style>
