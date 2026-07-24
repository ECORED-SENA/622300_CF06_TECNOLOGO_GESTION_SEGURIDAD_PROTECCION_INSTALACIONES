<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Procedimiento técnico en seguridad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 Este tema introduce el procedimiento técnico como una secuencia documentada y estandarizada de acciones operativas que permiten ejecutar una tarea de seguridad con criterios de eficacia, seguridad y trazabilidad. Asimismo, aborda sus principales variantes, entre ellas los procedimientos operativos estándar (POE), los protocolos de emergencia, las listas de chequeo técnicas y los procedimientos de mantenimiento. 
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 También se analizan las características que distinguen un procedimiento técnico, como la precisión, la definición de pasos secuenciales, los criterios de aceptación, los registros y la asignación de responsabilidades, además de su aporte a la calidad del servicio al reducir la variabilidad operativa, facilitar la formación del personal y apoyar los procesos de auditoría y mejora continua. Finalmente, se resalta la importancia de establecer indicadores y registros que permitan evaluar el cumplimiento de cada procedimiento y ajustarlo de acuerdo con las necesidades operativas.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Definición de procedimiento técnico
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Un procedimiento técnico, en el ámbito de la seguridad privada, puede definirse como #[b una secuencia documentada, estructurada y estandarizada de acciones operativas] que permite ejecutar una tarea bajo criterios de eficacia, trazabilidad y control, con responsabilidades claramente definidas, registros de actuación y mecanismos de medición y mejora continua. Esta definición coincide con la noción de los procedimientos operativos de seguridad, los cuales describen las condiciones necesarias para desarrollar una operación segura, especificando las responsabilidades y las acciones requeridas para garantizar el adecuado funcionamiento del sistema de seguridad.
          p.mb-0 En consecuencia, dentro de los servicios de vigilancia y seguridad privada, un procedimiento técnico tiene como propósito prevenir riesgos, proteger bienes y personas, facilitar la formación del personal, respaldar los procesos de auditoría y promover la mejora continua del servicio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Tipos de procedimientos técnicos
      p.mb-5 Los procedimientos técnicos se diseñan de acuerdo con las necesidades operativas de cada organización y permiten estandarizar las actividades relacionadas con la prevención de riesgos, la protección de personas y bienes, y la respuesta frente a incidentes. Su aplicación contribuye a garantizar la uniformidad en la prestación del servicio y el cumplimiento de los estándares establecidos. De acuerdo con su finalidad, los procedimientos técnicos más utilizados en la seguridad privada son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos de vigilancia y rondas
                  p.mb-0 Definen las rutas, horarios, puntos de control y actividades que debe ejecutar el personal durante sus recorridos de supervisión. Su objetivo es detectar anomalías, prevenir intrusiones y disuadir actividades sospechosas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos de control de acceso
                  p.mb-0 Regulan el ingreso y la salida de personas, vehículos y materiales mediante procesos de identificación, verificación de autorizaciones y registro, utilizando mecanismos como tarjetas, códigos, documentos de identidad o sistemas biométricos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos de manejo de emergencias
                  p.mb-0 Establecen las acciones que deben ejecutarse ante situaciones críticas, como incendios, sismos, amenazas de bomba o emergencias médicas. Incluyen la coordinación de la evacuación, la comunicación con los organismos de atención y las responsabilidades del personal de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos para el uso de tecnología
                  p.mb-0 Regulan la operación de equipos de seguridad, como los sistemas de circuito cerrado de televisión, alarmas, sensores y equipos de comunicación. Comprenden aspectos relacionados con la operación, el monitoreo, el almacenamiento de información y la gestión de las grabaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos de respuesta a alarmas
                  p.mb-0 Definen las acciones que deben ejecutarse cuando se activa un sistema de alarma, incluyendo la verificación del evento, la coordinación de la respuesta operativa y, cuando corresponda, la notificación a las autoridades competentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos para la gestión de incidentes
                  p.mb-0 Estructuran el proceso de reporte, análisis, seguimiento y documentación de los incidentes de seguridad con el fin de facilitar la investigación, identificar causas y fortalecer las acciones preventivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos para el manejo de llaves y activos
                  p.mb-0 Establecen los lineamientos para la custodia, entrega, préstamo y devolución de llaves, así como para la protección de activos, bienes de alto valor y documentos confidenciales, garantizando su trazabilidad y control.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La implementación de procedimientos técnicos estandarizados fortalece la gestión de la seguridad privada, facilita la capacitación del personal, favorece el cumplimiento de la normatividad vigente y mejora la capacidad de respuesta ante situaciones operativas. Además, contribuye a la trazabilidad de las actuaciones y al desarrollo de procesos de evaluación y mejora continua.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Características de los procedimientos técnicos en la seguridad privada
      p.mb-5 Los procedimientos técnicos constituyen una herramienta fundamental para garantizar la uniformidad, la calidad y la eficacia en la prestación de los servicios de seguridad privada. Para cumplir su propósito, deben reunir un conjunto de características que faciliten su aplicación, comprensión, actualización y control, asegurando una respuesta adecuada frente a las diferentes situaciones operativas. Las principales características de los procedimientos técnicos son las siguientes:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Claridad y simplicidad
                  p.mb-0 Los procedimientos deben redactarse de forma clara y comprensible para todo el personal, evitando ambigüedades que puedan generar interpretaciones diferentes durante su ejecución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Estandarización
                  p.mb-0 Permiten que las actividades se desarrollen de manera uniforme, reduciendo la variabilidad operativa, minimizando los errores y garantizando respuestas consistentes frente a situaciones similares.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Adaptabilidad
                  p.mb-0 Aunque siguen una estructura estandarizada, deben conservar la flexibilidad necesaria para ajustarse a diferentes escenarios, niveles de riesgo o requerimientos específicos de cada cliente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Documentación
                  p.mb-0 Deben registrarse por escrito en manuales, procedimientos o consignas de servicio, con el fin de facilitar su consulta, la capacitación del personal y su actualización periódica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comunicación
                  p.mb-0 Deben definir los canales y responsables de la comunicación, estableciendo con claridad qué información debe reportarse, a quién se dirige y cómo mantener la coordinación durante las operaciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Formación continua
                  p.mb-0 Requieren procesos permanentes de capacitación para garantizar que el personal conozca y aplique correctamente los procedimientos, especialmente cuando se incorporan nuevas tecnologías o se actualizan los protocolos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Legalidad
                  p.mb-0 Deben cumplir la normatividad vigente y ajustarse a las disposiciones emitidas por la Superintendencia de Vigilancia y Seguridad Privada, así como a las demás normas aplicables al sector.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Disuasión
                  p.mb-0 Su adecuada implementación contribuye a prevenir riesgos y constituye un elemento disuasorio frente a posibles infracciones o amenazas contra la seguridad.
          p La aplicación de estas características fortalece la estandarización de los procesos, facilita la supervisión de las operaciones y contribuye a la mejora continua de la gestión de la seguridad privada.
          p.mb-0  Como ejemplo, un procedimiento técnico para la evacuación en caso de incendio establece de manera precisa la ubicación de las salidas de emergencia, el procedimiento para su apertura, la ruta de desplazamiento hacia el punto de encuentro y el mecanismo para verificar que todas las personas hayan evacuado las instalaciones de forma segura.     

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
