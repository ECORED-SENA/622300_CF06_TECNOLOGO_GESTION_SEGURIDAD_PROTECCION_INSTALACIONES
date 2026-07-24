<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La prestación de servicios de seguridad privada exige una gestión integral que articule el talento humano, la estandarización de los procedimientos y la adecuada planificación de las actividades operativas. Estos elementos constituyen la base para garantizar la protección de personas, bienes e instalaciones, así como el cumplimiento de la normatividad vigente y los estándares de calidad propios del sector.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 En este componente formativo se desarrollan los fundamentos de la administración del personal, destacando la importancia de los procesos de reclutamiento, selección, inducción, capacitación, evaluación y desarrollo del talento humano como factores estratégicos para el desempeño eficiente de los servicios de seguridad. Asimismo, se analizan las directrices organizacionales, los métodos de entrenamiento y el papel del departamento de recursos humanos en la consolidación de una cultura institucional orientada hacia la prevención, la disciplina y el mejoramiento continuo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 De igual manera, se estudian los procedimientos técnicos y las actividades propias de la seguridad privada como herramientas para estandarizar la operación, optimizar el uso de los recursos y fortalecer la capacidad de respuesta frente a diferentes situaciones. El conocimiento y la aplicación de estos elementos permiten al personal desempeñar sus funciones con criterios de eficacia, trazabilidad, seguridad y responsabilidad, contribuyendo al cumplimiento de los objetivos organizacionales y a la prestación de un servicio confiable y de alta calidad.
      
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
