<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Trabajo en equipo y liderazgo en la seguridad privada
      p.mb-5 El trabajo en equipo y el liderazgo son competencias fundamentales para garantizar la eficiencia de los servicios de vigilancia y seguridad privada. La coordinación entre los integrantes del equipo, la comunicación efectiva y el ejercicio de un liderazgo orientado al cumplimiento de los objetivos fortalecen la capacidad de respuesta ante situaciones operativas, favorecen la toma de decisiones y contribuyen al mejoramiento continuo del servicio. En este contexto, el trabajo colaborativo y el liderazgo se complementan para promover la organización de las actividades, la adecuada distribución de responsabilidades y el cumplimiento de los estándares de calidad establecidos por la empresa.
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Trabajo en equipo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El trabajo en equipo constituye un elemento fundamental para la prestación de los servicios de vigilancia y seguridad privada, ya que las actividades operativas requieren coordinación permanente entre los diferentes integrantes del servicio. La adecuada comunicación, la distribución de responsabilidades y la cooperación entre vigilantes, operadores y supervisores favorecen el cumplimiento de los objetivos institucionales, fortalecen la capacidad de respuesta y contribuyen a la prevención de incidentes.
          p.mb-0 El trabajo en equipo es la capacidad de un grupo de personas para desarrollar actividades de manera coordinada, interdependiente y orientada al logro de objetivos comunes. En el ámbito de la seguridad privada, este enfoque permite integrar las funciones de los diferentes cargos para garantizar la continuidad del servicio, optimizar el uso de los recursos y responder de forma eficiente ante las situaciones que se presentan durante la operación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img1.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actividades del personal en el trabajo en equipo
      p.mb-5 El trabajo en equipo requiere la participación coordinada de todos los integrantes del servicio. Para lograrlo, es necesario desarrollar actividades que favorezcan la organización, la comunicación y el seguimiento de las tareas asignadas. Las principales actividades son las siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Definición de objetivos comunes
                  p.mb-0 Establecer metas compartidas, como garantizar la cobertura de las rondas de vigilancia o mantener el control permanente de los accesos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Asignación de roles y responsabilidades
                  p.mb-0 Distribuir las funciones de acuerdo con el cargo de cada integrante, por ejemplo, vigilante de acceso, operador de circuito cerrado de televisión (CCTV) o supervisor de turno.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Coordinación de actividades
                  p.mb-0 Organizar las tareas que requieren la participación conjunta de varios integrantes, como la ejecución simultánea de patrullajes y el monitoreo de cámaras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación y retroalimentación
                  p.mb-0 Mantener un intercambio permanente de información mediante radios de comunicación, reuniones de cambio de turno e informes de novedades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evaluación y mejora continua
                  p.mb-0 Analizar los resultados del servicio, identificar oportunidades de mejora y establecer acciones correctivas para fortalecer el desempeño del equipo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La realización coordinada de estas actividades fortalece la integración del equipo y favorece el cumplimiento de los objetivos del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clases de equipos 
      p.mb-5 A continuación, se presenta una explicación sobre las clases de equipos de trabajo, su clasificación según la naturaleza de las actividades que desarrollan y las necesidades del servicio:
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-3(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t7/img7.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Clases de equipos de trabajo"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t7/img8.jpg" ).m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del trabajo en equipo
      p.mb-5 El desempeño eficiente de un equipo depende de un conjunto de características que favorecen la cooperación y el logro de los objetivos comunes:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t7/img9.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Comunicación efectiva
              p.mb-0.text-center Favorece el intercambio oportuno de información entre los integrantes del equipo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Colaboración
              p.mb-0.text-center Promueve el apoyo mutuo y la distribución adecuada de las responsabilidades.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Adaptabilidad
              p.mb-0.text-center Permite ajustar las actividades ante cambios en las condiciones del servicio o en los niveles de riesgo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Confianza y respeto
              p.mb-0.text-center Fortalece las relaciones entre los integrantes y favorece el compromiso con los objetivos del equipo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Roles claramente definidos
              p.mb-0.text-center Facilita que cada integrante conozca sus responsabilidades y actúe de manera coordinada con los demás.
      p.mb-5 Estas características contribuyen al fortalecimiento del desempeño colectivo y al mejoramiento continuo de la prestación del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación en seguridad privada
      p.mb-5 El trabajo en equipo se refleja de manera permanente en las actividades desarrolladas por las empresas de vigilancia y seguridad privada. A continuación, se presentan algunos ejemplos de aplicación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Operación habitual del servicio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Operación habitual del servicio
              p.mb-0 Un equipo permanente desarrolla las rondas de vigilancia, el control de accesos y el registro de novedades durante cada turno. Cuando se presenta una emergencia, un equipo de respuesta interviene de forma coordinada para controlar la situación, mientras que, durante eventos especiales, se conforman equipos temporales para reforzar la seguridad.
        .py-3.py-md-4(titulo="Edificio corporativo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Edificio corporativo
              p.mb-0 Al inicio de la jornada, el supervisor distribuye las responsabilidades entre los vigilantes, el operador de CCTV y el personal de recepción, informa las novedades y define las actividades del turno. Si se desarrolla un evento institucional, reorganiza temporalmente las funciones para reforzar la vigilancia y el monitoreo. Al finalizar la jornada, el equipo realiza una reunión de retroalimentación para revisar las novedades, evaluar los resultados y establecer acciones de mejora para el siguiente turno.
      p.mb-0 El trabajo en equipo constituye un proceso organizado que integra funciones, responsabilidades y mecanismos de comunicación para alcanzar los objetivos del servicio. Su adecuada implementación fortalece la coordinación entre los diferentes cargos, mejora la capacidad de respuesta ante situaciones operativas y contribuye al cumplimiento de los estándares de calidad en la seguridad privada.
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.2 Liderazgo en la supervisión
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 El liderazgo constituye un factor determinante para la gestión de los equipos de trabajo en la seguridad privada. A través de un liderazgo efectivo, los supervisores orientan las actividades del personal, fortalecen la comunicación, promueven el cumplimiento de los procedimientos y favorecen la toma de decisiones frente a las diferentes situaciones operativas. Su adecuada aplicación contribuye al mantenimiento del orden, la prevención de riesgos y el mejoramiento continuo del servicio.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t7/img17.jpg', alt='').m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 El liderazgo es la capacidad de influir, orientar y motivar a un grupo de personas para alcanzar objetivos comunes mediante una comunicación efectiva, la coordinación de esfuerzos y la toma de decisiones oportunas. En el ámbito de la seguridad privada, esta función suele ser ejercida por supervisores, coordinadores o jefes de contrato, quienes dirigen al personal operativo y garantizan el cumplimiento de los procedimientos, los estándares de calidad y las condiciones de seguridad establecidas para el servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del liderazgo
      p.mb-5 El desempeño efectivo de un líder depende de un conjunto de competencias personales y profesionales que favorecen la coordinación del equipo y el logro de los objetivos institucionales. Las principales características de un liderazgo efectivo son las siguientes:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img18.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Comunicación efectiva
              p.mb-0.text-center Transmite instrucciones claras, mantiene informados a los integrantes del equipo y facilita el intercambio permanente de información.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img19.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Empatía
              p.mb-0.text-center Comprende las necesidades del personal, promueve un ambiente de respeto y fortalece las relaciones laborales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img20.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Integridad
              p.mb-0.text-center Actúa con ética, transparencia y coherencia entre las decisiones adoptadas y las acciones ejecutadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img21.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Capacidad de motivación
              p.mb-0.text-center Impulsa el compromiso del equipo y orienta los esfuerzos hacia el logro de objetivos comunes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Adaptabilidad
              p.mb-0.text-center Ajusta el estilo de liderazgo de acuerdo con las condiciones operativas y las necesidades del servicio.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Visión
              p.mb-0.text-center Orienta las acciones del equipo hacia el cumplimiento de los objetivos estratégicos de la organización.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Delegación
              p.mb-0.text-center Distribuye responsabilidades de acuerdo con las competencias de cada integrante y realiza el seguimiento correspondiente.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Desarrollo del personal
              p.mb-0.text-center Promueve la capacitación, el aprendizaje continuo y el fortalecimiento de las competencias del equipo.
          p.mb-5 Estas características permiten fortalecer la confianza entre los integrantes del equipo y mejorar el desempeño de las operaciones de seguridad.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estilos de liderazgo 
      p.mb-5 El liderazgo puede ejercerse de diferentes maneras, según las características del equipo y las condiciones del entorno operativo:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Autocrático
                  p.mb-0 El líder toma las decisiones de forma centralizada y establece instrucciones de cumplimiento inmediato. Es apropiado en situaciones de emergencia o alto riesgo, donde se requiere una respuesta rápida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Democrático o participativo
                  p.mb-0 Promueve la participación del equipo en la toma de decisiones, favoreciendo el compromiso, la comunicación y la generación de propuestas de mejora.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transformacional
                  p.mb-0 Motiva al personal mediante una visión compartida, impulsa la innovación y promueve el desarrollo de las capacidades individuales y colectivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Delegativo (#[i laissez-faire])
                  p.mb-0 Otorga mayor autonomía al equipo para el desarrollo de las actividades, manteniendo un seguimiento general del cumplimiento de los objetivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img29.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La selección del estilo de liderazgo depende de las características del servicio, del nivel de riesgo y de las circunstancias en las que se desarrollan las operaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación en la supervisión de la seguridad privada
      p.mb-5 Los diferentes estilos de liderazgo pueden emplearse de acuerdo con las necesidades del servicio y las situaciones que enfrenta el personal de seguridad:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Gestión operativa cotidiana")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gestión operativa cotidiana
              p.mb-0 Un supervisor adopta un liderazgo participativo al involucrar al equipo en la revisión de las rutas de patrullaje, analizar las novedades del turno y proponer mejoras en los procedimientos de vigilancia.
        .py-3.py-md-4(titulo="Atención de una emergencia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Atención de una emergencia
              p.mb-0 Ante una situación crítica, como una amenaza de bomba o una evacuación, el supervisor ejerce un liderazgo autocrático, asignando responsabilidades inmediatas y coordinando la respuesta del personal para controlar la situación con rapidez.
        .py-3.py-md-4(titulo="Mejora continua del servicio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Mejora continua del servicio
              p.mb-0 Un supervisor aplica un liderazgo transformacional al promover iniciativas orientadas a disminuir incidentes, fortalecer las competencias del personal y mejorar los indicadores de desempeño mediante reuniones periódicas y planes de acción.
      p.mb-5 La aplicación adecuada del estilo de liderazgo fortalece la coordinación del equipo, mejora la capacidad de respuesta y contribuye al cumplimiento de los objetivos operativos de la organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones del supervisor como líder
      p.mb-5 Además de coordinar las actividades operativas, el supervisor desempeña funciones de liderazgo que fortalecen la gestión del talento humano y la calidad del servicio.
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Planificar las actividades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organizar turnos, asignar responsabilidades y establecer los objetivos operativos del servicio.
            .row(titulo="Evaluar el desempeño").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Realizar seguimiento al cumplimiento de las funciones mediante indicadores, bitácoras y reportes, proporcionando retroalimentación al personal.
            .row(titulo="Motivar y desarrollar al equipo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Promover la capacitación, fortalecer el trabajo en equipo y favorecer un ambiente de disciplina y compromiso.
            .row(titulo="Tomar decisiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Coordinar la respuesta ante incidentes y dirigir las actuaciones del personal en situaciones críticas.
            .row(titulo="Gestionar la relación con el cliente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comunicar los resultados del servicio, coordinar ajustes operativos y verificar el cumplimiento de los compromisos contractuales.
            .row(titulo="Promover la mejora continua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Liderar actividades de supervisión, auditoría y revisión de los procedimientos para fortalecer la calidad del servicio.
      p.mb-0 El liderazgo constituye un elemento esencial para la supervisión en la seguridad privada, ya que integra la planificación, la comunicación, la toma de decisiones y el desarrollo del talento humano. Su adecuada aplicación fortalece el trabajo en equipo, mejora la capacidad de respuesta frente a los riesgos y contribuye al cumplimiento de los estándares de calidad establecidos por la organización.

</template>

<script>
import audio1 from '@/assets/curso/temas/t7/audios/audio-ej.mp3'
export default {
  name: 'Tema7',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
