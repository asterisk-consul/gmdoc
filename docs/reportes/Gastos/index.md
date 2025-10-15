# 📘 Manual de Uso del Reporte de Gastos

Este reporte permite **visualizar, analizar y detallar los gastos de la organización** en un período determinado, proporcionando herramientas de filtrado, gráficos de tendencia y un resumen detallado.

---

## 1. Filtros Disponibles (Columna Izquierda)

Los filtros permiten **acotar la información** que se presenta en el reporte y son todos **opcionales**. Si se deja un campo vacío, no se aplica filtro para ese criterio.

| Filtro                        | Descripción                                                         | Ejemplo de Uso                                                                   |
| :---------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------- |
| **Fecha Desde / Fecha Hasta** | Define el rango de tiempo para el análisis.                         | `del 01-08-2025 al 31-08-2025`                                                   |
| **Grupos**                    | Permite ver gastos de un grupo específico.                          | Filtrar solo por `Impuestos`, `Sueldos`, o `Servicios`.                          |
| **Orden**                     | Define la presentación cronológica del detalle.                     | **Ascendente** (más antiguos primero) o **Descendente** (más recientes primero). |
| **Aplicar**                   | Ejecuta los filtros seleccionados y actualiza el reporte.           | _Necesario para visualizar los cambios._                                         |
| **Restablecer**               | Limpia todos los filtros y devuelve el reporte a su estado inicial. |                                                                                  |

### 💡 Tip Importante

Para visualizar los filtros seleccionados, siempre debes hacer clic en el botón **Aplicar**.

---

## 2. Gráficos Principales

Los gráficos ofrecen un análisis visual rápido del comportamiento de los gastos.

### 📈 Gráfico de Línea: "Gastos sobre el mes actual y 2 meses antes"

- **Función:** Muestra la **evolución mensual** de cada grupo de gastos (Impuestos, Servicios, Sueldos, etc.) durante el mes actual y los dos meses anteriores.
- **Análisis:** Es útil para **ver tendencias** y detectar aumentos o disminuciones abruptas.
- **Nota:** Cada color en la línea corresponde a un grupo de gastos distinto. Si aplicaste el filtro **Grupo**, solo verás la tendencia de ese grupo seleccionado.

### 🥧 Gráfico de Torta: "Gastos sobre el período de tiempo filtrado"

- **Función:** Muestra la **distribución porcentual** de los gastos según su grupo, únicamente dentro del rango de fechas elegido.
- **Análisis:** Permite **identificar qué grupo tiene mayor peso** en el total de gastos del período (Ejemplo: _Sueldos y Cargas Sociales_ es el gasto más grande).

---

## 3. Resumen de Gastos (Recuadro Central)

Esta sección proporciona una visión numérica del costo y la proporción de cada categoría de gasto.

- Muestra el **Total** y el **porcentaje** que representa cada grupo respecto al **Total General de Gastos** del período filtrado:
  - Total de Impuestos
  - Total de Servicios
  - Total de Sueldos
  - Total de Proveedores
  - Total de Vehículos
  - Total de Honorarios
  - Total de Gastos Varios
  - Total de Otros
- **Acción Interactiva:** Todos los totales de grupo son **interactivos**. Al hacer clic sobre cualquiera de ellos, el reporte filtrará o abrirá un nuevo reporte con **únicamente los detalles** correspondientes a ese grupo.
- En la parte inferior se muestra el **TOTAL GENERAL** de todos los gastos.

---

## 4. Detalle de Movimientos (Tabla Inferior)

Aquí se listan en detalle todos los gastos, agrupados por categoría (ejemplo: GRUPO IMPUESTOS, GRUPO SERVICIOS), según los filtros aplicados.

| Columna           | Descripción                                                    |
| :---------------- | :------------------------------------------------------------- |
| **Fecha**         | Día en que se registró el gasto.                               |
| **Proveedor**     | Nombre de la entidad o persona a la que se le pagó.            |
| **Referencia**    | Motivo o concepto específico del gasto.                        |
| **Forma de pago** | Método utilizado para el pago (transferencia, efectivo, etc.). |
| **Subtotal**      | Importe del gasto **sin** impuestos adicionales o ajustes.     |
| **Total**         | Importe **final** registrado del gasto.                        |

---

## 5. Opciones Adicionales

- **"Ver más de la cuenta corriente":** Permite acceder a información más detallada vinculada a las cuentas corrientes asociadas a los gastos.

---

## 6. Recomendaciones de Uso

| Objetivo                      | Acción Recomendada                                                                              |
| :---------------------------- | :---------------------------------------------------------------------------------------------- |
| **Control Mensual**           | Revisar el **gráfico de línea** para detectar aumentos o disminuciones en algún grupo de gasto. |
| **Cierre de Período**         | Verificar el **gráfico de torta** para conocer la composición porcentual del gasto total.       |
| **Auditoría / Justificación** | Usar el **detalle de movimientos** para justificar y rastrear pagos realizados.                 |
| **Control Presupuestario**    | Comparar el **Total General de Gastos** con presupuestos o proyecciones internas.               |

---

## ❓ Preguntas Frecuentes (FAQs)

| Pregunta                                                      | Respuesta                                                                                                              |
| :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| **¿Qué pasa si no selecciono un rango de fechas?**            | El sistema tomará como predeterminado **todos los datos** disponibles, desde el inicio hasta el día de hoy, inclusive. |
| **¿Puedo ver los gastos de un único grupo (ej. Servicios)?**  | **Sí.** Usa el filtro **Grupo** y aplica. También puedes hacer clic sobre el total del gasto en el resumen central.    |
| **¿Qué significa el porcentaje en el cuadro de “Gastos”?**    | Indica el **peso relativo** de ese grupo de gastos respecto al Total General del período filtrado.                     |
| **¿Qué significa si veo un proveedor como “null” o vacío?**   | Indica que el gasto fue registrado **sin proveedor asignado**. Se recomienda revisar y actualizar el registro.         |
| **¿Qué diferencia hay entre Subtotal y Total en el detalle?** | **Subtotal** es el importe sin impuestos o ajustes. **Total** es el importe final del gasto.                           |
| **¿Puedo exportar este reporte?**                             | Depende de la configuración del sistema. Generalmente, esta opción se encuentra en las opciones superiores.            |
