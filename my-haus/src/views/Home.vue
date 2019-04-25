<template>
<html>
    <head>
        <title>Myhaus</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    </head>
    
    <body>

        
        <div id="intro" class="section">
            <table cellspacing="0" cellpadding="0">
                <tr>
                    <td id="textIntro">Moderna Casa en la Condesa</td>
                    <td><img id="imgIntro" alt="" src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/10/11/59de6400bacad.jpeg"></td>
                </tr>
            </table>
            
        </div>
        
        <!-- Mi hogar  -->
        <div id="mihogar" class="section">
            <h1><span>Mi hogar</span></h1>
            <p>
                Ubicado en el moderno barrio de La Condesa, este apartamento se encuentra a pocos pasos de docenas de cafés, panaderías, restaurantes de mariscos y clubes nocturnos, en todas las direcciones. Pasee por el Bosque de Chapultepec y visite museos y sitios culturales a lo largo del camino.
                <br/>
                <br/>
                La calidad del lugar es excelente, pisos de mármol, muebles de Madera oscura y de piel, aire acondicionado, TV por cabe, Pantalla plana de alta definición de 50 pulgadas, Sonido ambiental Haman Kardon, reproductor de DVD, además también dentro de la suite un servibar, un refrigerador para vinos, un horno de microondas y una cafetera.
                <br/>
                <br/>
                Realmente es un lugar muy hermoso, seguro, tranquilo y privado, con un magnífico jardín con una playa que da al canal, deck de madera, muelles y un pintoresco palafito justo en el canal.
                
            </p>
        </div>
        
        
        <!-- Servicios start -->
       <div id="servicios" class="section">
            <h1><span>Servicios</span></h1>
            <p>Estos son los servicios que ofrecemos:</p>
            
        </div>
        <!-- Servicios end -->
        
        <!-- Calificacion start -->
        <div class="section">
            <h1><span>Calificación</span></h1>
            <ul>
                <li>Limpieza <br />
                    <progress min="0" max="100" value="80"></progress>
                </li>
                <li>Servicio <br />
                    <progress min="0" max="100" value="50"></progress>
                </li>
                <li>Seguridad <br />
                    <progress min="0" max="100" value="30"></progress>
                </li>
            </ul>
        </div>
        <!-- Calificacion end -->
        
        
         <!-- Media section start -->
        <div class="section">
            <h1><span>Imágenes</span></h1>
            
        </div>
        <!-- Media section end -->

                <!-- Citas -->
        <div id="tablaDisp" class="section">
            <h1><span>Disponibilidad Citas</span></h1>
            <table>
                <tr>
                    <th>Dia</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                </tr>
                <tr>
                    <td>8-9</td>
                    <td class="selected">Libre</td>
                    <td class="selected">Libre</td>
                    <td></td>
                    <td></td>
                    <td class="selected">Libre</td>
                </tr>
                <tr>
                    <td>9-10</td>
                    <td class="selected">Libre</td>
                    <td class="selected">Libre</td>
                    <td class="selected">Libre</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>10-11</td>
                    <td></td>
                    <td></td>
                    <td class="selected">Libre</td>
                    <td class="selected">Libre</td>
                    <td></td>
                </tr>
                <tr>
                    <td>4-5</td>
                    <td class="selected">Libre</td>
                    <td></td>
                    <td></td>
                    <td class="selected">Libre</td>
                    <td></td>
                </tr>
                <tr>
                    <td>5-6</td>
                    <td></td>
                    <td></td>
                    <td class="selected">Libre</td>
                    <td></td>
                    <td class="selected">Libre</td>
                </tr>
            </table>
        </div>
        <!-- Citas end -->
        
        <!-- Form start -->
       <div class="section">
            <h1><span>Contacto</span></h1>
            
            
                 
            <form>
                <input name="name" placeholder="Nombre" type="text" required /><br/>
                <input name="email" placeholder="Email" type="email" required /><br/>
                <textarea name="message" placeholder="Mensaje" required ></textarea>
                <input type="submit" value="Enviar" class="submit" />
            </form>
        </div>
        <!-- Form end -->
    
        
    </body>
</html>

    
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

html {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Poppins', sans-serif;
    font-size: 13pt;
    background-color: #efefef;
    padding: 10px;
    margin: 0;
}
h1 {
    font-size: 15pt;
    color: #20bcd5;
    text-align: center;
    padding: 18px 0 18px 0;
    margin: 0 0 10px 0;
}
h1 span {
    border: 4px dashed #3fb6b2;
    padding: 10px;
}
p {
    padding: 0;
    margin: 0;
}
.img-circle {
    border: 3px solid white;
    border-radius: 50%;
}
.section {
    background-color: #fff;
    widows: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
}





#imgIntro {
    width: 100%;
    height: 70%;
    margin: auto;
    vertical-align: middle;
 
}

#textIntro{
    font-size: 35pt;
    width: 35%;
    text-align: center;
    vertical-align: middle;
}

#intro p {
    font-size: 30pt;
    color: #3b464c;
    padding-top: 5px;
    margin: 0;
    font-weight: bold;
    margin-left: 1%;
}

#intro table{
    border: none;
}


#mihogar p{
    text-align: justify;
    margin: auto;
    padding-left: 1%;
    padding-right: 1%;
}
table {
    width: 100%;
}
#tablaDisp table, #tablaDisp th, #tablaDisp td {
    border: 2px solid #cecece;
    border-collapse: collapse;
    text-align: center;
    table-layout: fixed;
}
.selected {
    background-color: #f36f48;
    font-weight: bold;
    color: white;
}
li {
    margin-bottom: 15px;
    font-weight: bold;
}
progress {
    width: 70%;
    height: 20px;
    color: #3fb6b2;
    background: #efefef;
}
progress::-webkit-progress-bar {
    background: #efefef;
}
progress::-webkit-progress-value {
    background: #3fb6b2;
} 
progress::-moz-progress-bar {
    color: #3fb6b2;
    background: #efefef;
}
iframe, audio {
    display: block;
    margin: 0 auto;
    border: 3px solid #3fb6b2;
}
hr {
    border: 0;
    height: 1px;
    background: #f36f48;
}
form {
    text-align: center;
    margin-top: 0;
}
.submit {
    background-color: #3fb6b2;
    padding: 12px 45px;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    border: none;
    outline: none;
    margin: 0;
    font-weight: bold;
}
.submit:hover {
    background-color: #43a09d;
}
textarea {
    height: 100px;
}
input, textarea {
    margin-bottom: 10px;
    font-size: 11pt;
    padding: 15px 10px 10px;
    border: 1px solid #cecece;
    background-color: #efefef;
    color: #787575;
    border-radius: 5px;
    width: 70%;
    outline: none;
}
.face {
    transform: scale(0.4);
    margin: 0 auto;
    display: block;
    margin-top: -35px;
    margin-bottom: -25px;
}
#contacts img {
    height: 50px;
    width: 50px;
    margin-left: 7px;
    margin-right: 7px;
}
#contacts a {
    text-decoration: none;
}
#contacts img:hover {
    opacity: 0.8;
}
#contacts {
    text-align: center;
}
.copyright {
    font-size: 8pt;
    text-align: right;
    padding-bottom: 10px;
    color: grey;
}

</style>



