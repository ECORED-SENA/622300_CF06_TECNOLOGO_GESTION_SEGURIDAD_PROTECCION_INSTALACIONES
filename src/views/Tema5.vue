<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Manuales de funciones en seguridad privada
      p.mb-3 Los manuales de funciones constituyen herramientas de gestión que permiten definir las responsabilidades de cada cargo dentro de una empresa de seguridad privada. Su utilización favorece la estandarización de los procesos, facilita la asignación de responsabilidades y contribuye a la evaluación objetiva del desempeño del personal.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t5/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 El manual de funciones es un documento administrativo que describe de manera organizada cada uno de los cargos de la organización, indicando su objetivo, funciones, competencias requeridas, relaciones jerárquicas, nivel de autoridad, responsabilidades e indicadores de desempeño. Su finalidad es proporcionar claridad sobre las responsabilidades de cada puesto de trabajo, facilitar la administración del talento humano y promover la eficiencia en la prestación del servicio.
          p.mb-0 En las empresas de vigilancia y seguridad privada, estos manuales constituyen una herramienta de apoyo para la gestión del personal, ya que establecen los requisitos de idoneidad, las funciones asignadas, las relaciones de dependencia y los criterios que permiten evaluar el desempeño de cada colaborador.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img2.png', alt='').m-auto
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Tipos de manuales de funciones
      p.mb-5 Los manuales de funciones pueden elaborarse de acuerdo con la estructura organizacional, los procesos o los cargos existentes en la empresa. En el sector de la seguridad privada, los más utilizados son los siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Manual del vigilante")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Manual del vigilante
              p.mb-0 Define el objetivo del cargo, las funciones relacionadas con la custodia de bienes, el control de accesos, las rondas de vigilancia y el reporte de novedades. También establece las competencias requeridas, las relaciones jerárquicas y los indicadores utilizados para evaluar el desempeño, como el cumplimiento de rondas, el registro de novedades y la atención de incidentes.
        .py-3.py-md-4(titulo="Manual del supervisor")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Manual del supervisor
              p.mb-0 Describe las funciones relacionadas con la coordinación, supervisión y mejora del servicio. Incluye responsabilidades como la planificación de turnos, el seguimiento al cumplimiento de los procedimientos, la capacitación del personal y la implementación de acciones correctivas. Además, incorpora indicadores asociados al cumplimiento del servicio y a la gestión de la calidad.
        .py-3.py-md-4(titulo="Manual administrativo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Manual administrativo
              p.mb-0 Establece las funciones del personal encargado de los procesos administrativos, como la gestión documental, la programación del personal, el apoyo a la contratación, el control de registros y el seguimiento de los procesos internos que respaldan la prestación del servicio de seguridad.
      p.mb-0 La elaboración de estos manuales debe realizarse con un lenguaje claro, preciso y libre de ambigüedades, de manera que cada colaborador conozca con exactitud sus responsabilidades y los criterios mediante los cuales será evaluado.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Elementos que componen el manual de funciones
      p.mb-5 Todo manual de funciones debe contener la información necesaria para definir con claridad las responsabilidades de cada cargo y facilitar su administración dentro de la organización. Los elementos que lo integran son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Identificación del cargo
              p.mb-0.text-center Incluye el nombre del puesto, el código interno y la dependencia a la que pertenece.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Objetivo del cargo
              p.mb-0.text-center Explica la razón de ser del puesto dentro de la organización y su aporte al cumplimiento de los objetivos institucionales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Funciones principales y secundarias
              p.mb-0.text-center Describe las actividades y responsabilidades que corresponden al cargo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Competencias y requisitos
              p.mb-0.text-center Define la formación, la experiencia, las certificaciones y las habilidades necesarias para desempeñar el cargo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Relaciones jerárquicas
              p.mb-0.text-center Establece a quién reporta el colaborador y qué cargos se encuentran bajo su coordinación, cuando corresponda.
      p.mb-5 Además de los elementos básicos, el manual de funciones incluye componentes que fortalecen la administración del cargo y orientan su evaluación y actualización:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Autoridad y responsabilidades
              p.mb-0.text-center Determina el nivel de decisión, las obligaciones y los recursos asignados al cargo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Indicadores de desempeño
              p.mb-0.text-center Define los criterios utilizados para evaluar el cumplimiento de las funciones y la calidad del desempeño.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Condiciones de trabajo
              p.mb-0.text-center Especifica aspectos como el horario, el lugar de prestación del servicio y la dotación requerida.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Referencias normativas
              p.mb-0.text-center Relaciona las normas, políticas y procedimientos que regulan el desempeño del cargo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Vigencia y actualización
              p.mb-0.text-center Registra la versión del documento, la fecha de revisión y los mecanismos establecidos para su actualización.
          p.mb-5 La aplicación de estos elementos favorece la estandarización de las funciones, facilita la evaluación del desempeño y fortalece la gestión del talento humano dentro de las empresas de vigilancia y seguridad privada.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-2.ajuste-4(data-aos="fade-right")
                p.mb-0 Como ejemplo, el manual de funciones del cargo de vigilante puede establecer la realización de un número mínimo de rondas por turno, el registro oportuno de las novedades en la bitácora, la comunicación inmediata de situaciones relevantes al supervisor y el cumplimiento de los protocolos para la operación de los sistemas de seguridad.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t5/img17.jpg', alt='').m-auto
            .col-xl.fit___bottom
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
              p.mb-0 De igual manera, el manual de funciones del supervisor puede incorporar indicadores relacionados con el porcentaje de cumplimiento de las rondas programadas, el cierre oportuno de las acciones correctivas y la disminución de las no conformidades identificadas durante las actividades de supervisión.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Aplicación en seguridad privada
      p.mb-5 Los manuales de funciones permiten definir con precisión las responsabilidades, competencias e indicadores de desempeño de cada cargo. Su aplicación favorece la estandarización de las funciones y facilita la evaluación objetiva del personal. A continuación, se presentan algunos ejemplos de aplicación en el sector de la vigilancia y la seguridad privada: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img18.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Vigilante de accesos bancarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El manual de funciones establece como objetivo garantizar el acceso autorizado y proteger a las personas y los bienes de la entidad financiera. Entre sus funciones se encuentran el control de credenciales, la verificación biométrica y el registro de visitantes. Asimismo, define las competencias requeridas, como la autorización vigente para ejercer labores de vigilancia, la certificación correspondiente y la atención al usuario en un segundo idioma cuando el servicio lo exige. El cargo reporta al supervisor del contrato y su desempeño puede evaluarse mediante indicadores como el tiempo promedio de registro de visitantes y el porcentaje de ingresos no autorizados detectados.
            .row(titulo="Supervisor de seguridad bancaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El manual de funciones establece como objetivo garantizar el cumplimiento del contrato, la normatividad aplicable y los estándares de calidad del servicio. Entre sus responsabilidades se encuentran la revisión de bitácoras, la realización de visitas de supervisión, el seguimiento al desempeño del personal y la elaboración de informes para el cliente. Los indicadores de desempeño pueden incluir la reducción de incidentes, el cumplimiento de las actividades programadas y el cierre oportuno de las acciones de mejora.
      p.mb-0 Estos ejemplos evidencian que los manuales de funciones constituyen una herramienta de gestión que facilita la definición de responsabilidades, fortalece el control del desempeño y contribuye al mejoramiento continuo del servicio.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Manuales de procesos y procedimientos
      p.mb-5 Los manuales de procesos y procedimientos son instrumentos de gestión que orientan la ejecución de las actividades operativas, administrativas y de supervisión dentro de una empresa de seguridad privada. En ellos se documenta la forma como se desarrollan los procesos, se coordinan los recursos y se aplican los procedimientos necesarios para garantizar la calidad del servicio. Su utilización favorece la estandarización de las actividades, disminuye la variabilidad operativa y facilita la capacitación del personal, el seguimiento de los procesos y la realización de auditorías.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto de manuales de procesos y procedimientos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Un manual de procesos y procedimientos es un documento institucional que organiza y describe los procesos de la organización, así como los procedimientos necesarios para ejecutarlos de manera uniforme, controlada y trazable. En este contexto, un #[b proceso] corresponde al conjunto de actividades relacionadas entre sí que permiten alcanzar un objetivo determinado, mientras que un #[b procedimiento] describe, paso a paso, la forma de ejecutar una actividad específica dentro de ese proceso.
          p.mb-0 En las empresas de vigilancia y seguridad privada, estos manuales permiten estandarizar actividades relacionadas con el control de accesos, las rondas de vigilancia, la gestión de novedades, la respuesta a incidentes y la supervisión del servicio. Además, contribuyen al cumplimiento de la normatividad vigente y fortalecen los procesos de control y mejora continua.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img19.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de manuales de procesos y procedimientos
      p.mb-5 De acuerdo con las actividades que documentan, los manuales de procesos y procedimientos pueden clasificarse de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Operativos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Operativos
              p Documentan los procesos directamente relacionados con la prestación del servicio de vigilancia, como el control de accesos, las rondas de vigilancia, la respuesta a alarmas y la atención de incidentes. 
              p.mb-0 #[b Ejemplo:] manual que describe el procedimiento para el control de acceso vehicular en un parqueadero corporativo, incluyendo las actividades de recepción, verificación, registro y salida de vehículos.
        .py-3.py-md-4(titulo="Administrativos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Administrativos
              p Regulan los procesos de apoyo relacionados con la gestión del talento humano, la administración documental, la programación de turnos, la evaluación del desempeño, la formación del personal y el mantenimiento de los recursos. 
              p.mb-0 #[b Ejemplo:] manual que establece el procedimiento para la elaboración del informe trimestral de cumplimiento de turnos y la revisión de las bitácoras de servicio.
        .py-3.py-md-4(titulo="De supervisión o control interno")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 De supervisión o control interno
              p Describen los procesos de seguimiento, auditoría, control de calidad y evaluación del desempeño del servicio. 
              p.mb-0 #[b Ejemplo:] manual que establece el procedimiento para realizar visitas de supervisión, incluyendo la preparación de la visita, la aplicación de listas de verificación, el registro de hallazgos, la formulación de acciones de mejora y el seguimiento de los compromisos adquiridos.
      p.mb-5 La aplicación de estos manuales fortalece la organización de los procesos, facilita la coordinación entre las diferentes áreas de la empresa y contribuye a garantizar una prestación del servicio segura, eficiente y acorde con los estándares de calidad establecidos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estructura de los manuales de procesos y procedimientos
      p.mb-5 Los manuales de procesos y procedimientos deben presentar una estructura organizada que facilite su consulta, implementación, actualización y utilización durante la capacitación, la supervisión y las auditorías. Una estructura bien definida permite estandarizar los procesos, asignar responsabilidades y fortalecer el control de las actividades desarrolladas por la organización. Los elementos que conforman un manual de procesos y procedimientos son los siguientes:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Introducción
                    p.mb-0 Presenta el propósito del manual, sus objetivos, el ámbito de aplicación y las definiciones necesarias para facilitar su comprensión.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img23.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img24.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Alcance
                    p.mb-0 Especifica los procesos, servicios, contratos, áreas o unidades organizacionales a los que aplica el manual.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Responsables
                    p.mb-0 Identifica los cargos encargados de elaborar, aprobar, implementar, revisar y actualizar el manual, así como los responsables de ejecutar cada proceso.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img25.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img26.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Descripción del proceso
                    p.mb-0 Explica el desarrollo general del proceso, sus entradas, actividades, salidas e interrelaciones. Cuando es pertinente, puede incluir diagramas de flujo u otras representaciones del proceso.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Procedimientos asociados
                    p.mb-0 Describe de forma secuencial las actividades que deben ejecutarse, indicando responsables, recursos necesarios, criterios de aceptación, registros y formatos requeridos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img27.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img28.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Registros y formatos
                    p.mb-0 Relaciona los documentos generados durante la ejecución de los procesos, indicando su identificación, conservación, ubicación y control.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Controles de calidad e indicadores
                    p.mb-0 Define los indicadores utilizados para evaluar el desempeño de los procesos, la frecuencia de medición, las metas establecidas y los responsables del seguimiento.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img29.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img30.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Referencias normativas
                    p.mb-0 Incluye las normas, políticas, procedimientos internos y demás documentos que sustentan la aplicación del manual.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisión y actualización
                    p.mb-0 Establece la periodicidad de revisión del manual, el procedimiento para su actualización y el control de versiones del documento.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img31.png', alt='' style="width: 300px").m-auto
      p.mb-5 La incorporación de estos elementos facilita la estandarización de los procesos, fortalece la trazabilidad de las actividades y favorece la mejora continua dentro de las organizaciones de vigilancia y seguridad privada.
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img32.png', alt='').m-auto
          .col-xl.caja-1_p
            h5 Ejemplo 
            p.mb-0  Como ejemplo, un manual de procesos para un servicio de vigilancia fija puede incluir el procedimiento #[b Patrullaje interior – rutina nocturna], indicando la secuencia de actividades, los responsables de su ejecución, los recursos necesarios, los registros que deben diligenciarse y el indicador utilizado para evaluar el porcentaje de puntos de control cubiertos durante cada turno.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación en seguridad privada
      p.mb-5 Los manuales de procesos y procedimientos permiten organizar de manera uniforme la prestación de los servicios de seguridad privada. Los siguientes ejemplos presentan su aplicación en diferentes contextos operativos y administrativos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manual operativo
                  p.mb-0 En una empresa que presta servicios de monitoreo de alarmas para varios inmuebles, el manual documenta el proceso #[b Recepción y verificación de alarmas]. El procedimiento establece la recepción de la señal, la identificación del punto afectado, la verificación mediante el sistema de circuito cerrado de televisión, la comunicación con el personal de vigilancia, el reporte al cliente y el cierre del incidente. El desempeño del proceso se evalúa mediante indicadores como el tiempo de respuesta y el porcentaje de falsas alarmas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manual administrativo
                  p.mb-0 En un centro comercial, el manual documenta el proceso #[b Gestión de dotación del personal de vigilancia]. El procedimiento comprende la solicitud de dotación, la verificación de credenciales, la programación de turnos, la entrega de uniformes y el registro documental correspondiente. Los registros incluyen formatos de entrega, planillas de control y actas de inducción. Entre los indicadores se encuentra el porcentaje de personal con credencial vigente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manual de supervisión
                  p.mb-0 En una empresa de vigilancia con varias sedes, el manual documenta el proceso #[b Auditoría de cumplimiento de rondas]. El procedimiento contempla la elaboración de listas de verificación, la realización de visitas de supervisión, el registro de hallazgos, la retroalimentación al personal, la formulación de acciones de mejora y el seguimiento de los compromisos establecidos. Los indicadores consideran el número de no conformidades identificadas y el tiempo requerido para su cierre.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img35.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estos ejemplos evidencian que los manuales de procesos y procedimientos constituyen herramientas fundamentales para estandarizar las actividades, fortalecer el control operativo y garantizar una prestación del servicio alineada con los objetivos de calidad y mejora continua de la organización.          

</template>

<script>
export default {
  name: 'Tema5',
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
