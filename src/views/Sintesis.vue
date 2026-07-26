<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la administración de personal, manuales y procedimientos en seguridad privada. Incluye las categorías de administración de personal, procedimientos técnicos en seguridad, actividades en la seguridad privada, manuales y procedimientos, y resultados esperados, con elementos relacionados como recursos humanos, directrices, inducción, métodos de entrenamiento, tipos y características de procedimientos y actividades, manuales organizacionales, procedimientos operativos, estandarización, control y mejora continua, calidad del servicio, cumplimiento normativo, eficiencia operativa, gestión del talento humano y seguridad con mejora continua.  ")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
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
