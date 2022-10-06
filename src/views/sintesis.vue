<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.BG03.mb-4
      .col-1.px-0
        img(src="@/assets/curso/temas/img04.png")
      .col-11.p-3
        p.mb-0 <span style="color:#fff">Con este punto, se finaliza el estudio de los contenidos de este componente formativo. Es momento de hacer síntesis, para lo cual analice el esquema que se muestra a continuación. Registre esta síntesis en su libreta personal de apuntes. Además, haga un repaso de los temas que considere necesario.</span><span style="color:#FD9827 !important"><b>¡Adelante!</b></span>

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
