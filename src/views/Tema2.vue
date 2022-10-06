<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes de datos digitales  
    
    .row.justify-content-center.align-items-center.BGIMG08.p-4.mb-4
      p La elaboración de informes digitales es el resultado de una serie de procesos encadenados que varían en función del objetivo por alcanzar. El informe se centra en un tipo de datos que requiere la combinación de diversas fuentes de información.
      .col-lg-5.col-10.mb-lg-0.mb-4
        img(src="@/assets/curso/tema2/img02.png")
      .col-lg-7
        .h4 <span style="color:#6E4435">Los informes de datos digitales tienen la finalidad de:</span>
        ul.lista-ul--color.ms-4
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Asegurar que los datos se ajustan a las clasificaciones estándar.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Garantizar la validez de los datos.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Reforzar la integridad de los datos y su coherencia interna.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Asegurar y mantener los datos originales.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Permitir un fácil acceso a los datos originales.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Elaborar los datos de forma eficiente según sea necesario.
          li
            <i class="fas fa-chevron-right" style="color:#FD9827"></i>
            | Permitir la integración de distintos conjuntos de datos, aumentando así su utilidad general .

    p Entre los principales tipos de informes digitales, en el contexto de las bibliotecas, se pueden mencionar los que se detallan a continuación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4
        img(src="@/assets/curso/tema2/img03.png")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="BGR15")
          div(titulo="Informe de resultados estadísticos para servicios de biblioteca")
            p.mb-0 Compilación de información recopilada de acuerdo con los servicios que se prestan dentro de la biblioteca para analizar los servicios que se prestan al público en general.
          div(titulo="Informe de listado de entrega y salida de material bibliográfico")
            p.mb-0 Responde efectiva y eficientemente a las necesidades de información y de entrega del material bibliográfico, así como mantener actualizadas las colecciones para la consulta del material bibliográfico.
          div(titulo="Informe de levantamiento de inventario")
            p.mb-0 Inicia definiendo la colección que se va a inventariar y finaliza con el envío de un reporte del material inventariado y perdido a auditoría. Implica la verificación a través de la toma de los recursos bibliográficos que se encuentren disponibles en las colecciones del sistema de bibliotecas para detectar material bibliográfico faltante.
          div(titulo="Informe comparación de inventario")
            p.mb-0 Con los datos obtenidos en la fase de recopilación e inventario, se dibuja un panorama del estado actual de la biblioteca, señalando sus puntos fuertes y sus puntos débiles.

      .row.justify-content-center.mb-5
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          .BGS03
            .row.justify-content-center.align-items-center
              .col-3
                img(src="@/assets/curso/tema1/img32.png")
              .col-9.p-4
                .h4 <span style="color:#FD9827">¡Tenga en cuenta!</span>
                p.text-white.mb-0 En relación con los informes de inventario, es clave realizar una muestra anual de material bibliográfico a través del proceso de inventario digital para establecer la cantidad de recursos que no estarán disponibles en el servicio.
        .col-lg-6.col-10(data-aos="fade-left")
          .BGS07
            .row.justify-content-center.align-items-center
              .col-3
                img(src="@/assets/curso/tema1/img32.png")
              .col-9.p-4
                .h4 ¡Importante!
                p.mb-0 En ese mismo sentido, y en consecuencia, se debe elaborar un cronograma de inventario determinando fechas y personal responsable.

    p Los informes comparativos del inventario tienen un alcance para el análisis del servicio de préstamo y de compra de material bibliográfico, se consideran herramientas de optimización del inventario y son utilizados por los responsables de realizar el inventario y reportar para vigilar cuidadosamente los niveles de inventario y los pedidos relacionados de los clientes.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
