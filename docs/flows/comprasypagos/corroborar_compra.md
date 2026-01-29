# 💰 Corroborar / A pagar (12.2.10)

Esta instancia permite realizar una verificación final de la compra antes de proceder al pago. Su objetivo es centralizar las facturas pendientes y simplificar la búsqueda de comprobantes dentro del módulo de [Egresos](../egresos/egresos.md).

## 📋 Datos de la Pantalla

En esta sección se visualiza la información consolidada de la transacción:

| Campo                | Descripción                                           |
| -------------------- | ----------------------------------------------------- |
| **OCS N°:**          | Número de la Orden de Compra relacionada.             |
| **Proveedor:**       | Entidad a la cual se le adeuda el pago.               |
| **Monto Pendiente:** | Total de la factura o saldo pendiente de pago.        |
| **Estado:**          | Situación actual del registro (Pendiente/Verificado). |
| **Documentación:**   | Acceso directo a la factura o remito asociado.        |
| **Observaciones:**   | Notas adicionales sobre el proceso de verificación.   |

::: info
:bulb: Esta pantalla sirve como "filtro de seguridad" para asegurar que lo que se va a pagar coincida con lo recibido.
:::

## 🛠️ Acciones Disponibles

Dependiendo del estado del registro, el usuario puede realizar las siguientes acciones:

### 1. Verificar y Corregir

Si se detecta una discrepancia entre la factura física y el registro en el sistema, este es el momento de realizar ajustes en los montos o cantidades para que el egreso sea exacto.

### 2. Registro de Pago

Una vez corroborado que los datos son correctos:

- Se procede a registrar la salida de dinero en el módulo de **Egresos**.
- Se vincula el número de comprobante de pago (transferencia, cheque, efectivo).

### 3. Archivar

**Este es el paso final obligatorio.** Una vez que el pago ha sido registrado o el registro ha sido verificado satisfactoriamente, el documento debe ser **archivado** para limpiar la lista de tareas pendientes y mantener el orden administrativo.

## 🛋️ Ejemplo práctico

- **Escenario A (Todo correcto):**
  Llega la factura del proveedor. El administrativo entra a "Corroborar / A pagar", ve que el monto coincide con la OCS y el remito. Registra el pago en Egresos y presiona **SIGUIENTE** para archivar el registro.
- **Escenario B (Error en fecha):**
  La factura se cargo con una fecha incorrecta. El administrativo **corrige** el registro en esta pantalla antes de autorizar el pago, asegurando que la contabilidad sea fiel a la realidad.

::: warning
:warning: Un registro no archivado seguirá apareciendo como "Pendiente", lo que puede generar duplicidad en los pagos si no se gestiona a tiempo, o bine que quede demaciado cargada esta actividad de registros.
:::
