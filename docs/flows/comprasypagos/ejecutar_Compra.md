# Ejecutar Compra

En esta pantalla se completan los siguientes datos que ya viene del paso anterior:
|Campo|Descripcion|
|--|--|
| **OCS N°:**| Número de la Orden de Compra generada.|
| **Fecha:**| Fecha en que se ejecuta la compra.|
| **Proveedor:**| Persona o empresa a la que se le realiza la compra.|
| **Total:**| Monto total de la orden (con impuestos incluidos).|
| **Usuario Inicio:**| Usuario que ejecuta la compra.|
| **Observaciones:**| Campo para comentarios adicionales.|
| **Detalle:**| Aquí aparecen los artículos con cantidad, precio unitario, ajustes, subtotal, IVA y total.|

::: warning
:bulb: no todos los campos se pueden modificar
:::

## 🔘 Botón **Siguiente**

- Al presionar el botón **Siguiente**, el sistema **finaliza el flujo de la compra**.
- En ese momento la Orden de Compra queda registrada como **ejecutada**.
- Si corresponde, se puede asociar (antes de dar siguiente) un documento adicional: el **Remito de Ingreso**.

### 📄 ¿Cuándo asociar un Remito?

El Remito es opcional dentro del flujo, y se utiliza únicamente si existe una entrega física de los bienes comprados.

- Si no hay entrega física (ejemplo: servicios, señas, reservas), no se genera remito.
- Si hay entrega de mercadería (ejemplo: muebles, accesorios, insumos), se debe asociar un remito como comprobante de entrega.

::: info
:bulb: [¿Que es un Remito?](../../casosParticulares/remito/remitos.md)
:::

## 🛋️ Ejemplo práctico

- **Compra de sillas y mesas a un proveedor:**

  - Se ejecuta la compra en el sistema.
  - Cuando el proveedor entrega los insumos o mercaderias, se emite un **Remito** que respalda la entrega física, este es el que se pasa al sistema.

- **Compra de un servicio de transporte o instalación:**

  - No es necesario un remito, porque no hay mercadería entregada físicamente.

---

👉 De esta manera, el flujo termina en la ejecución de la compra, y **solo si es necesario** se asocia un **Remito** como respaldo de entrega.
