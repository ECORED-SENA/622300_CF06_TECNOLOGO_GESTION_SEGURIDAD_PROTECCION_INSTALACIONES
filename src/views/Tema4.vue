<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Supervisión en seguridad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 La supervisión constituye uno de los procesos fundamentales para garantizar la calidad de los servicios de seguridad privada. A través de esta función se coordinan, controlan y evalúan las actividades operativas y administrativas, con el propósito de verificar el cumplimiento de los procedimientos establecidos, fortalecer el desempeño del personal y promover la mejora continua en la prestación del servicio.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img1.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 La supervisión es el proceso mediante el cual una persona con autoridad técnica y administrativa coordina, orienta, verifica y evalúa la ejecución de las actividades desarrolladas por el personal de seguridad. Además de comprobar el cumplimiento de los procedimientos establecidos, esta función contribuye al fortalecimiento del liderazgo, la comunicación, la capacitación y el mejoramiento permanente del servicio. De acuerdo con el medio utilizado para desarrollar el seguimiento y control, la supervisión puede clasificarse de la siguiente manera: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="<em>In situ</em>")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 #[i In situ]
              p.mb-0 Se realiza mediante visitas presenciales a los puestos de servicio, lo que permite verificar directamente el desempeño del personal, el estado de los equipos, el cumplimiento de las consignas y las condiciones generales de la operación.
        .py-3.py-md-4(titulo="Remota")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Remota
              p.mb-0 Utiliza herramientas tecnológicas, como sistemas de circuito cerrado de televisión, plataformas de monitoreo, sistemas de posicionamiento global (GPS) o plataformas integradas de gestión de la seguridad física (#[i Physical Security Information Management - PSIM]), para supervisar servicios ubicados en diferentes lugares.
        .py-3.py-md-4(titulo="Técnica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Técnica
              p.mb-0 Se enfoca en el funcionamiento, mantenimiento y disponibilidad de los equipos, sistemas de alarmas, medios electrónicos y demás recursos tecnológicos utilizados en la prestación del servicio.
        .py-3.py-md-4(titulo="Administrativa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Administrativa
              p.mb-0 Comprende la revisión de informes, registros de novedades, documentación operativa, cumplimiento de protocolos, programación del personal y demás aspectos relacionados con la gestión administrativa del servicio.
      p.mb-5 La supervisión abarca diferentes niveles de actuación, desde el control operativo diario hasta el seguimiento de aspectos administrativos y el fortalecimiento de los procesos estratégicos de la organización. En este contexto, el supervisor desarrolla funciones relacionadas con la planificación, la dirección, el control, la capacitación del personal y la implementación de acciones de mejora. Para cumplir estas responsabilidades, el supervisor emplea diversas técnicas que facilitan la verificación objetiva del servicio y la toma de decisiones oportunas:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Observación estructurada
              p.mb-0.text-center Verificar el desempeño del personal durante la ejecución de las actividades.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Auditorías de cumplimiento
              p.mb-0.text-center Evaluar el grado de cumplimiento de procedimientos, consignas y protocolos establecidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Entrevistas
              p.mb-0.text-center Obtener información del personal para identificar fortalezas, necesidades de mejora y oportunidades de capacitación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Listas de verificación
              p.mb-0.text-center Comprobar de forma sistemática el cumplimiento de los requisitos establecidos para la prestación del servicio.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Revisión de indicadores
              p.mb-0.text-center Analizar los resultados obtenidos mediante indicadores de desempeño para apoyar la toma de decisiones y la mejora continua.
      p.mb-5 La supervisión constituye un proceso permanente que fortalece el control operativo, favorece el desarrollo del talento humano y contribuye a garantizar servicios de seguridad privada eficientes, seguros y alineados con los objetivos de la organización.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. La supervisión
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Situaciones prácticas aplicadas al sector de vigilancia y seguridad privada
      p.mb-5 Las siguientes situaciones ejemplifican la aplicación de los diferentes tipos de supervisión en escenarios propios de la vigilancia y la seguridad privada. Cada caso evidencia cómo la supervisión contribuye al control operativo, al seguimiento de los procedimientos y al mejoramiento continuo del servicio: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img12.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Supervisión <em>in situ</em>").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 En un contrato de vigilancia para un complejo de oficinas, el supervisor realiza una visita no programada a las 22:00 horas para verificar que el vigilante diligencie correctamente la bitácora de rondas, mantenga el control del área de recepción y registre oportunamente las novedades del servicio. Posteriormente, analiza la información recopilada y, si identifica desviaciones, establece un plan de mejora con las acciones correctivas correspondientes.
            .row(titulo="Supervisión remota").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 En una empresa dedicada al monitoreo de alarmas para varios clientes, el supervisor realiza seguimiento desde la sala de control para comprobar que los operadores atiendan las alarmas dentro del tiempo máximo establecido de 60 segundos. Además, revisa los registros de cada incidente y desarrolla sesiones periódicas de retroalimentación orientadas a mejorar los tiempos de respuesta y la calidad del servicio.
            .row(titulo="Supervisión técnica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 En una instalación equipada con sistemas de circuito cerrado de televisión  y sensores perimetrales, el supervisor coordina el mantenimiento preventivo mensual. Durante esta actividad se verifica el funcionamiento de las cámaras, se reemplazan luminarias cuando es necesario, se calibran los sensores y se actualiza el software de gestión de alarmas. Todas las actividades quedan registradas como parte del plan de mantenimiento preventivo.
            .row(titulo="Supervisión administrativa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 En una empresa de seguridad privada, el supervisor realiza una revisión trimestral de la documentación del personal para verificar que todos los colaboradores hayan completado el proceso de inducción, cuenten con los permisos correspondientes, mantengan actualizadas las bitácoras de entrenamiento y cumplan los requisitos administrativos del servicio. Finalmente, elabora un informe dirigido al cliente con los resultados obtenidos y las oportunidades de mejora identificadas.
      p.mb-0 Estos casos evidencian que la supervisión no se limita a verificar el cumplimiento de las actividades, sino que constituye un proceso de seguimiento permanente orientado a fortalecer la calidad del servicio, optimizar el desempeño del personal y garantizar el cumplimiento de los procedimientos establecidos.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Complemento de funciones y perspectiva estratégica
      p.mb-5 Además de las funciones relacionadas con la supervisión operativa y administrativa, el supervisor desempeña un papel estratégico dentro de la organización. Su labor contribuye al fortalecimiento de la relación con el cliente, la optimización de los procesos y el mejoramiento continuo de la prestación del servicio.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Entre sus responsabilidades se encuentran la coordinación con el cliente, la identificación de oportunidades de mejora en la ejecución del contrato, la gestión de cambios de personal, la verificación del cumplimiento de la normatividad aplicable, la elaboración de estadísticas del servicio y la participación en el diseño de planes de contingencia. Asimismo, actúa como enlace entre la dirección de la empresa y el personal operativo, promoviendo el liderazgo, la comunicación, el trabajo en equipo, la motivación y el ejercicio ético de las funciones.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img13.jpg', alt='').m-auto
        .col-xl-3.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 Estas responsabilidades permiten que la supervisión trascienda el control de las operaciones diarias y se convierta en un elemento clave para la mejora continua, la satisfacción del cliente y el cumplimiento de los objetivos organizacionales.

</template>

<script>
export default {
  name: 'Tema4',
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
