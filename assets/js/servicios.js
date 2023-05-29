var viaja = document.querySelector(".viaja").classList;
var experiencias = document.querySelector(".experiencias").classList;
var vuelos = document.querySelector(".vuelos").classList;
var escapadas = document.querySelector(".escapadas").classList;

// var viaja = document.querySelector(".viaja-cl").classList;
// var experiencias = document.querySelector(".experiencias-cl").classList;
// var vuelos = document.querySelector(".vuelos-cl").classList;
// var escapadas = document.querySelector(".escapadas-cl").classList;
var prom = document.querySelector(".txt-promo");

function mostrarPromo1(){
    viaja.toggle("viajaJs");
       
}

function mostrarPromo2(){
    experiencias.toggle("experienciasJs");
    }

function mostrarPromo3(){
    vuelos.toggle("vuelosJs");
    
}

function mostrarPromo4(){
    escapadas.toggle("escapadasJs");
   
}


function promo1(){
    
    prom.innerHTML="Viaja por el mundo con nuestra agencia de turismo y descubre destinos increíbles. Te ofrecemos paquetes personalizados para vivir aventuras inolvidables. ¡Explora el mundo a tu manera y crea recuerdos que durarán toda la vida! ";
}

function promo2(){
    
    prom.innerHTML="Vive experiencias únicas con nuestra agencia de turismo. Te llevamos a lugares extraordinarios, donde podrás sumergirte en culturas fascinantes y disfrutar de actividades inolvidables. ¡Descubre el mundo de una manera diferente con nosotros! ";
}

function promo3(){
    prom.innerHTML="Ahorrá Tiempo y Dinero en la Planificación de Tu Viaje ¡Compará Precios Acá! Los Mejores Precios de Argentina. Muchas Ofertas Por Tiempo Limitado! Pagá Menos Por Viajar.";
}

function promo4(){
    prom.innerHTML="Encontrá la escapada ideal para cortar con la rutina y desconectar. Descubrí nuevos destinos, respirá naturaleza, sumergite en el relax, animate a la aventura, sentí el latido de la ciudad.";

}

