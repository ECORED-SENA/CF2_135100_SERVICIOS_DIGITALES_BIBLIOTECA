<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.BGR01.mb-5
      .col-lg-3.col-6.mb-lg-0.px-0.pt-1.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.png")
      .col-lg-9.p-4(data-aos="fade-left")
        p Se da inicio al estudio del componente formativo “<span style="color:#FD9827">#[strong Recuperación de datos y registro en unidades de información digital]</span>”; y para una experiencia satisfactoria se invita a ir, paso a paso, por cada una de las temáticas de esta unidad. Y ahora se invita a ver con atención el siguiente video. 
        p.mb-0 <span style="color:#FD9827">#[strong ¡Adelante!]</span>
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
