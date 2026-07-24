<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Diagramas de flujo
      p.mb-3 Los diagramas de flujo constituyen una herramienta ampliamente utilizada para representar de forma gráfica los procesos administrativos y operativos desarrollados en una organización. En el ámbito de la seguridad privada, facilitan la comprensión de la secuencia de actividades, la identificación de responsabilidades y la toma de decisiones durante la ejecución de los procedimientos. Su aplicación favorece la estandarización de las operaciones, la capacitación del personal y el mejoramiento continuo de los servicios.
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t6/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 Un diagrama de flujo, también denominado #[b flujograma], es la representación gráfica y secuencial de un proceso mediante símbolos estandarizados que describen las actividades, decisiones, entradas, salidas y la dirección del flujo de trabajo. Esta herramienta permite comprender la relación entre las diferentes etapas de un proceso, identificar oportunidades de mejora y facilitar la documentación de los procedimientos.
          p.mb-0 En las empresas de vigilancia y seguridad privada, los diagramas de flujo se emplean para documentar procesos como el control de accesos, la respuesta a alarmas, la atención de incidentes, la supervisión de rondas y otros procedimientos operativos. Su utilización contribuye a reducir la variabilidad en la ejecución de las actividades, fortalecer la trazabilidad de los procesos y apoyar la elaboración de manuales y procedimientos institucionales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img2.png', alt='').m-auto
      p.mb-0 Además de su utilidad operativa, los diagramas de flujo facilitan los procesos de inducción y capacitación del personal, ya que permiten comprender con mayor facilidad la secuencia de actividades y las responsabilidades asignadas durante la prestación del servicio.
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Estructura de un diagrama de flujo
      p.mb-5 Todo diagrama de flujo se construye a partir de elementos gráficos estandarizados que representan las diferentes etapas de un proceso y las relaciones existentes entre ellas. Los principales elementos que conforman un diagrama de flujo son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img3.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Símbolos estandarizados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representan los diferentes tipos de acciones dentro del proceso. Entre los más utilizados se encuentran el óvalo para indicar el inicio o el final, el rectángulo para representar una actividad, el rombo para una decisión y el paralelogramo para las entradas o salidas de información.
            .row(titulo="Dirección del flujo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las flechas indican el orden en que deben ejecutarse las actividades y permiten seguir la secuencia lógica del proceso, generalmente de arriba hacia abajo o de izquierda a derecha.
            .row(titulo="Actividades, decisiones y resultados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada etapa del proceso se identifica mediante un símbolo acompañado de una descripción breve, lo que facilita la comprensión de la secuencia operativa y de los posibles caminos que puede seguir el proceso.
            .row(titulo="Responsables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 En los diagramas interfuncionales o de carriles (#[i swimlane]), cada actividad se asigna al cargo, área o equipo responsable de su ejecución, permitiendo identificar con claridad las responsabilidades durante el desarrollo del proceso.
            .row(titulo="Procesos y subprocesos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los diagramas pueden incorporar bifurcaciones, conectores y rutas alternativas para representar excepciones, decisiones o actividades complementarias dentro del proceso principal.
      p.mb-0 La utilización de estos elementos permite construir diagramas claros, organizados y fáciles de interpretar, facilitando la estandarización de los procedimientos, el análisis de los procesos y la implementación de acciones orientadas al mejoramiento continuo en las organizaciones de vigilancia y seguridad privada.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Diagramas de flujo en la administración del servicio
      p.mb-5 Los diagramas de flujo constituyen una herramienta de apoyo para la administración de los servicios de vigilancia y seguridad privada, ya que permiten representar de manera ordenada la secuencia de actividades, los puntos de decisión, las responsabilidades y los resultados esperados. Su aplicación facilita la estandarización de los procesos, fortalece la capacitación del personal y favorece el seguimiento de las operaciones. A continuación, se presentan algunos ejemplos de aplicación en el sector:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Respuesta a una alarma")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Respuesta a una alarma
              p.mb-0 Representa la secuencia de actividades desde la recepción de la señal hasta el cierre del incidente. Incluye la verificación mediante el sistema de circuito cerrado de televisión, la comunicación con el vigilante, la toma de decisiones, la notificación al cliente y el registro de la actuación.
        .py-3.py-md-4(titulo="Control de acceso vehicular")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Control de acceso vehicular
              p.mb-0 Describe el procedimiento para verificar credenciales, autorizar el ingreso, registrar la información del vehículo y controlar la apertura y cierre de la barrera de acceso, incorporando los puntos de decisión y los responsables de cada actividad.
        .py-3.py-md-4(titulo="Supervisión de rondas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Supervisión de rondas
              p.mb-0 Representa el desarrollo de las rondas de vigilancia, desde la asignación de la ruta hasta el cierre de la actividad, incluyendo la verificación de novedades, la actualización de la bitácora y la comunicación con el supervisor cuando se presenta alguna incidencia.
      p.mb-0 La representación gráfica de estos procesos facilita la identificación de oportunidades de mejora, reduce la variabilidad operativa y fortalece el control de las actividades desarrolladas por el personal de seguridad.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Elaboración de un diagrama de flujo
      p.mb-5 La construcción de un diagrama de flujo requiere una planificación previa que permita representar el proceso de manera clara, lógica y ordenada. Para ello, es necesario definir el alcance del proceso, identificar las actividades que lo integran y establecer las responsabilidades de cada participante. Las principales etapas para elaborar un diagrama de flujo son las siguientes.
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Definir el propósito y el alcance
              p.mb-0.text-center Determinar el proceso que se representará y establecer los límites de la actividad para evitar diagramas excesivamente complejos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Recopilar la información
              p.mb-0.text-center Identificar las actividades, responsables, documentos, registros y recursos involucrados en el proceso mediante la revisión documental y el intercambio de información con el personal responsable.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Identificar actividades y decisiones
              p.mb-0.text-center Organizar la secuencia de actividades y determinar los puntos donde el proceso requiere una decisión o puede seguir rutas alternativas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Seleccionar la orientación del diagrama
              p.mb-0.text-center Definir una estructura vertical u horizontal que facilite la lectura y comprensión del proceso.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Representar el proceso
              p.mb-0.text-center Incorporar los símbolos estandarizados, las flechas de conexión y las descripciones de cada actividad siguiendo la secuencia lógica del procedimiento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Asignar responsables
              p.mb-0.text-center Identificar el cargo, área o equipo responsable de ejecutar cada actividad. Cuando intervienen varios responsables, pueden utilizarse diagramas por carriles (#[i swimlanes]).
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Definir indicadores y tiempos
              p.mb-0.text-center Establecer los tiempos de ejecución, los criterios de aceptación y los indicadores que permitan evaluar el desempeño del proceso.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Representar excepciones
              p.mb-0.text-center Incorporar las rutas alternativas y los subprocesos necesarios para atender situaciones diferentes al flujo principal.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Revisar y validar
              p.mb-0.text-center Verificar el diagrama con el personal involucrado para asegurar que represente correctamente el proceso y realizar los ajustes necesarios antes de su implementación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t6/img17.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Actualizar y controlar versiones
              p.mb-0.text-center Conservar el diagrama en formato editable y establecer mecanismos para su revisión y actualización periódica.
      .bg-2
        .px-5
          p.mb-5 La correcta elaboración de un diagrama de flujo facilita la estandarización de los procesos, mejora la comunicación entre los responsables y fortalece las actividades de supervisión, auditoría y mejora continua.
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Elementos gráficos de los diagramas de flujo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Símbolo
                      th.ajuste-border-tabla.texto-left Nombre
                      th.texto-left Descripción
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Terminal ovalado
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img18.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Inicio/Final
                      td.texto-left Se utiliza para indicar el inicio y el final de un diagrama; de inicio solo puede salir una línea de flujo y al final solo debe llegar una línea.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Paralelogramo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img19.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Entrada/Salida
                      td.texto-left Entrada/Salida de datos por cualquier dispositivo: scanner, lector de código de barras, micrófono, parlantes, etc.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trapecio
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img20.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Entrada por teclado
                      td.texto-left Entrada de datos por teclado. Indica que el computador debe esperar a que el usuario teclee un dato que se guardará en una variable o constante.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Rectángulo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img21.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Acción/Proceso
                      td.texto-left Indica una acción o instrucción general que debe realizarse: operaciones aritméticas, asignaciones, etc.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flechas
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img22.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Flujo/Flechas de dirección
                      td.texto-left Indica el seguimiento lógico del diagrama. También indica el sentido de ejecución de las operaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Rombo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img23.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Decisión
                      td.texto-left Indica la comparación de dos datos y, dependiendo del resultado lógico, falso o verdadero, se toma la decisión de seguir un camino del diagrama u otro.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documento
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img24.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Impresora/Documento
                      td.texto-left Indica la presentación de uno o varios resultados en forma impresa.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pantalla
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img25.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Pantalla
                      td.texto-left Instrucción de presentación de mensajes o resultados en pantalla.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Círculo
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img26.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Conector interno
                      td.texto-left Indica el enlace de dos partes de un diagrama dentro de la misma página.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pentágono
                        figure(data-aos="fade-right").mt-3
                          img(src="@/assets/curso/temas/t6/img27.svg" style="max-width: 120px").m-auto
                      td.ajuste-border-tabla.texto-left Conector externo
                      td.texto-left Indica el enlace de dos partes de un diagrama en páginas diferentes.
          Separador
          #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.4 Recomendaciones para la elaboración de diagramas de flujo
          .bg-3
            .px-5
              p.mb-5 Para garantizar que un diagrama de flujo sea claro y fácil de interpretar, es conveniente tener en cuenta las siguientes recomendaciones:
              .bg-carrusel
                .px-5
                  SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img28.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Utilizar textos breves y verbos en infinitivo
                      p.mb-0.text-center Facilita la comprensión de cada actividad.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img29.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Mantener una única dirección del flujo
                      p.mb-0.text-center Favorece una lectura ordenada del proceso.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img30.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Conectar todos los símbolos
                      p.mb-0.text-center Evita actividades aisladas o secuencias incompletas.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img31.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Representar cada decisión con al menos dos alternativas
                      p.mb-0.text-center Garantiza la continuidad lógica del proceso.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img32.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Reducir al mínimo el cruce de líneas
                      p.mb-0.text-center Mejora la claridad del diagrama.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img33.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Incorporar una leyenda cuando sea necesario
                      p.mb-0.text-center Facilita interpretar símbolos, responsables y convenciones.
                  p.mb-5 Como ejemplo, el procedimiento de respuesta a una alarma de intrusión puede representarse mediante un diagrama de flujo que inicie con la recepción de la señal por parte del operador, continúe con la verificación mediante el sistema de circuito cerrado de televisión y conduzca a una decisión sobre la existencia o no de una intrusión. Dependiendo del resultado, el proceso contempla la movilización del personal de seguridad, la notificación al cliente y a las autoridades cuando corresponda, o el registro y cierre del evento en caso de una falsa alarma. Asimismo, el diagrama puede incorporar los responsables de cada actividad y los tiempos máximos establecidos para la atención del incidente.
                  .row.justify-content-center.mb-0
                    .col-xl-6
                      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                        h5 Figura 1.
                        span Diagrama de flujo del procedimiento de respuesta a una alarma de intrusión 
                      figure(data-aos="zoom-in")
                        img(src='@/assets/curso/temas/t6/img34.svg', alt='Diagrama de flujo sobre el procedimiento de atención de una alarma de intrusión. Incluye las etapas de inicio, recepción de la señal de alarma, verificación mediante el sistema de CCTV, decisión para confirmar o descartar la intrusión, y dos rutas: una para falsa alarma con registro y cierre del evento, y otra para intrusión confirmada con movilización del personal de seguridad, notificación al cliente y a las autoridades, atención del incidente, registro del evento y finalización del proceso. ').m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
