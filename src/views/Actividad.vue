<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Administración de personal, manuales y procedimientos en seguridad privada',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la administración del personal, los procedimientos técnicos, la supervisión, los manuales y el liderazgo en la seguridad privada.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la administración de personal en seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la gestión del talento humano para cumplir los objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar únicamente la rentabilidad financiera de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir exclusivamente los costos administrativos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar por completo las actividades de capacitación del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué área es responsable de los procesos de reclutamiento, selección y capacitación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El departamento financiero de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El departamento de recursos humanos de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El área comercial de la empresa contratante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La oficina de compras de la compañía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes corresponde a una directriz estratégica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener actualizado el inventario de uniformes diariamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reportar las novedades únicamente al finalizar el turno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir políticas institucionales orientadas a la integridad del personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registrar las visitas en un formato de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de inducción presenta al colaborador las normas y procedimientos específicos del cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La inducción general o corporativa institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La reinducción o actualización periódica del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La inducción orientada al desarrollo profesional continuo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La inducción al cliente o al contrato específico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué método de entrenamiento utiliza escenarios simulados para fortalecer la toma de decisiones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El entrenamiento basado en simulación de situaciones críticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El entrenamiento administrativo basado en documentos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El entrenamiento exclusivamente mediante lectura independiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El entrenamiento orientado únicamente a reuniones informativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es un procedimiento técnico en seguridad privada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una actividad realizada sin registros establecidos previamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una secuencia documentada y estandarizada de acciones operativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un informe elaborado al finalizar cada jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una política aplicada únicamente al área administrativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un procedimiento técnico de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La elaboración del presupuesto anual institucional completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La contratación del personal administrativo permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El procedimiento de control de acceso de personas y vehículos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La planeación de campañas comerciales de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué característica debe tener un procedimiento técnico para facilitar su comprensión?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar terminología ambigua y flexible continuamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incluir únicamente información confidencial restringida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicarse solamente en situaciones extraordinarias específicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Redactarse con claridad y simplicidad para todo el personal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo se clasifican las actividades ejecutadas ante situaciones imprevistas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actividades de emergencia para controlar riesgos inmediatos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Actividades rutinarias de operación permanente institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actividades especiales de programación periódica administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actividades recreativas de integración organizacional interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué elemento define cada cuánto debe ejecutarse una actividad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La finalidad estratégica del proceso institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La frecuencia establecida para su ejecución periódica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La jerarquía del supervisor responsable asignado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de formatos disponibles en archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal de la supervisión en seguridad privada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar únicamente el número de contratos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir exclusivamente los gastos operativos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar el cumplimiento de procedimientos y fortalecer el servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Modificar permanentemente la estructura organizacional existente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de supervisión utiliza herramientas como CCTV y GPS?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La supervisión administrativa de procesos documentales internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La supervisión remota mediante herramientas tecnológicas disponibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La supervisión presencial desarrollada en cada puesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La supervisión financiera de recursos institucionales asignados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es la finalidad principal de un manual de funciones?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir responsabilidades, competencias y requisitos de cada cargo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Establecer exclusivamente el presupuesto anual institucional completo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlar únicamente los inventarios de equipos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar los contratos comerciales con los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento del manual de funciones establece a quién reporta el colaborador?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las condiciones generales del ambiente laboral institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las relaciones jerárquicas definidas para el cargo correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Los indicadores financieros de la organización empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los procedimientos comerciales de atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué representan los diagramas de flujo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La secuencia gráfica de un proceso mediante símbolos estandarizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los resultados financieros obtenidos durante el año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los perfiles ocupacionales de cada trabajador activo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las estrategias comerciales de expansión empresarial futura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué símbolo representa una decisión en un diagrama de flujo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El rectángulo utilizado para representar actividades operativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El rombo utilizado para representar decisiones del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El óvalo destinado únicamente al inicio del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El círculo empleado como conector interno gráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es una característica esencial del trabajo en equipo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La comunicación efectiva entre todos los integrantes del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La competencia permanente entre los miembros del grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eliminación completa de la coordinación operativa diaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ejecución individual de todas las responsabilidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué estilo de liderazgo es más apropiado durante una emergencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El liderazgo transformacional centrado en innovación permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El liderazgo autocrático con decisiones rápidas y centralizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El liderazgo delegativo sin supervisión constante del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El liderazgo participativo mediante amplias consultas grupales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál es una función del supervisor como líder?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover la mejora continua y el desarrollo del equipo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente los procesos de capacitación interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Delegar todas las decisiones sin realizar seguimiento alguno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la comunicación únicamente con la alta dirección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué resultado se espera de la aplicación de manuales y procedimientos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar exclusivamente la documentación archivada institucionalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir únicamente el uso de herramientas tecnológicas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar totalmente la necesidad de supervisión operativa continua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer la calidad, la eficiencia y la mejora continua del servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
