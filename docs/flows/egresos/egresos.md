# Manual de Flujo de Egresos

## 1. Ingreso a Nuevo Egreso

- Para registrar un egreso, dirigirse a **Nuevo CAJA: Egreso**.
- Se mostrará un formulario con los campos:
  ¡Claro! Aquí tienes la estructura que solicitaste en formato Markdown para la tabla de registro de egresos (pagos a proveedores):

## Estructura del Registro de Egreso

| Campo                    | Descripción                                                                                                             |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Fecha**                | Seleccionar la fecha en que se realiza el egreso (pago).                                                                |
| **Referencia**           | Opcional, para identificación interna (ej: N° de comprobante, código de seguimiento).                                   |
| **Proveedor**            | Seleccionar el proveedor o acreedor al que se le realiza el pago.                                                       |
| **Sub Total**            | Se calcula automáticamente según los detalles agregados (antes de impuestos/descuentos globales).                       |
| **Total Pesos**          | Suma total final del egreso (monto exacto pagado).                                                                      |
| **Usuario**              | El sistema asigna automáticamente el usuario que está registrando la operación.                                         |
| **Detalle**              | Campo de texto libre para agregar comentarios o información relevante del pago.                                         |
| **Actividades Rel. (H)** | Permite relacionar el egreso con actividades o flujos de compras anteriores (ej: Factura N° 1234, Orden de Compra #45). |

## 2. Selección de Facturas o Compras Relacionadas

- Hacer clic en el ícono de **lupa** al lado de **Actividades Rel. (H)**.
- Se abrirá un buscador donde se pueden seleccionar **facturas registradas** o compras relacionadas.
- El buscador permite:
  - **Filtrar por referencia**: escribir la referencia de la factura para encontrarla rápidamente.
  - **Seleccionar múltiples facturas**: se pueden abonar varias facturas en un solo egreso.
    ::: warning
    Si bien son multiples facturas la que puedes seleccionar, solo permite de una a la vez
    :::

- Esto asegura que todos los pagos estén vinculados a los documentos correspondientes del flujo de compras.

  ::: info
  :bulb: [Ver flujo de compras](../comprasypagos/index.md)
  :::

## 3. Detalle de Pago

- Una vez seleccionadas las facturas, en la sección **Detalle** se mostrarán los importes correspondientes.
- En esta sección se debe:
  - Seleccionar **con qué medio se abonará**:
    - **Caja**: si se paga en efectivo.
    - **Banco**: si se paga mediante transferencia o cheque.

  - Ajustar los importes parciales si es necesario.
  - Confirmar que la suma de los detalles coincida con el **Total Pesos** del egreso.

## 4. Agregar Archivos o Comprobantes

- Opcionalmente, se puede adjuntar archivos como:
  - Facturas escaneadas.
  - Comprobantes de transferencia.
  - Documentación adicional.

- Hacer clic en **Seleccionar archivo para adjuntar** y cargar los documentos correspondientes.

## 5. Verificar

- Este campos se agrrego con el fin de una etapa de verificarion o de espera en el caso de saber que se va a modificar
  - Una vez veridficado y que el registro no necesite modificaciones este se archiva haciendo click en **SIGUIENTE**

  :::info
  Los registros se veran en el reporte de Gastos siempre y cuando estos tengas asociada al menos una factura con articulos asociados a una cuenta contable
  :::

## 6. Guardar y Continuar

- Una vez completados todos los campos:
  - Hacer clic en **GUARDAR** para almacenar el egreso en el sistema.
  - Hacer clic en **SIGUIENTE** se archiva el egreso para visualizarlo en reportes.

## 6. Notas importantes

- Cada egreso queda registrado con un **ID único** que permite rastrear la transacción.
- El flujo asegura que todos los pagos estén vinculados a compras registradas, facilitando:
  - Reportes de pagos por proveedor.
  - Control de caja y banco.
  - Conciliación contable.

- Se pueden realizar múltiples egresos para un mismo proveedor si se desea abonar varias facturas en diferentes momentos.

## 7. Video

<ClientOnly>
  <lite-youtube 
    videoid="ODGg8uY7qOI" 
    videotitle="Flujo de Egresos"
  />
</ClientOnly>
