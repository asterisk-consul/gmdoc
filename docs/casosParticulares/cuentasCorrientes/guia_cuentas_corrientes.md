# Guía de Clasificación y Tratamiento de Cuentas Corrientes

## 1. Introducción

Las **cuentas corrientes** son registros que reflejan `deudas` o `créditos` que mantiene la empresa con terceros. No se trata únicamente de bancos, sino de toda relación económica que implica **un saldo pendiente de `cobro` o de `pago`**.  
El objetivo de este documento es brindar un criterio uniforme y sencillo para **clasificar y administrar las cuentas corrientes**, de manera que el área administrativa pueda interpretarlas y gestionarlas sin errores.

## 2. Clasificación de Cuentas Corrientes

La vamos a definir **cinco grandes grupos**:

### a) Proveedores

Incluye todas las obligaciones con empresas o personas a quienes se les compra mercadería, insumos o materiales.

- **Ejemplo**: compra de materia prima, repuestos, papelería.
- **Por qué aquí**: representan deudas a pagar a terceros que nos abastecen directamente.

### b) Clientes

Registra los montos que terceros nos deben por ventas realizadas.

- **Ejemplo**: venta de productos/servicios a crédito, facturas emitidas y aún no cobradas.
- **Por qué aquí**: son los saldos que representan ingresos futuros de la organización.

### c) Servicios

Se refiere a consumos regulares contratados por la empresa.

- **Ejemplo**: luz, gas, internet, telefonía, mantenimiento de software.
- **Por qué aquí**: no son proveedores de mercadería tangible, sino gastos periódicos que generan una obligación.

### d) Impuestos

Obligaciones fiscales y tributarias.

- **Ejemplo**: IVA, ganancias, tasas municipales, cargas sociales.
- **Por qué aquí**: son deudas con organismos públicos que se generan por normativa y deben cumplirse en tiempo y forma.

### e) Otros

Cualquier obligación o crédito que no encaje en los cuatro grupos anteriores.

- **Ejemplo**: préstamos entre socios, deudas esporádicas, ajustes contables especiales.
- **Por qué aquí**: se busca que este grupo sea la **excepción**, no la regla.

:::info
👉 [Haz click aqui](./colocarCuentasCorrientes.md) para una explicación más detallada sobre esta clasificación y ejemplos prácticos, consulta el documento complementario que incluye un video explicativo. Allí se muestran casos reales y la forma correcta de registrar cada grupo.
:::

## 3. Ciclo de Vida de una Cuenta Corriente

Para cada grupo, la lógica es la misma:

- **Activar**: cómo activar una cuenta corriente.
- **Aumento**: qué eventos hacen que el saldo crezca (más deuda o más crédito).
- **Disminución**: qué operaciones hacen que se reduzca (pagos, cobros, compensaciones).

### Ejemplo aplicado:

- **Cliente**

  - _Ingreso_: se genera al crear una Venta.
  - _Aumento_: se suman nuevas ventas emitidas al mismo cliente en el flujo de [Venta](../../flows/Ventas/index.md)..
  - _Disminución_: el cliente paga total o parcialmente en Ingresos.

- **Proveedor**

  - _Ingreso_: se recibe una factura de compra a crédito.
  - _Aumento_: se reciben más facturas del mismo proveedor al cárgala en [Compras y pagos](../../flows/comprasypagos/index.md)..
  - _Disminución_: se paga la deuda o se devuelve mercadería en [Egresos](../../flows/egresos/egresos.md)..

- **Servicios**

  - _Ingreso_: se recibe una factura de consumo (ejemplo: luz).
  - _Aumento_: se acumulan nuevos períodos sin pagar al cárgala en [Compras y pagos](../../flows/comprasypagos/index.md).
  - _Disminución_: se abona la factura en [Egresos](../../flows/egresos/egresos.md).

- **Impuestos**
  - _Ingreso_: se genera la obligación fiscal (ejemplo: IVA mensual).
  - _Aumento_: intereses o recargos por mora al cárgala en [Compras y pagos](../../flows/comprasypagos/index.md).
  - _Disminución_: pago del impuesto en [Egresos](../../flows/egresos/egresos.md)

::: danger
:bulb: es importante que para que tenga la opcion cuenta corriente habilitada. [Ver mas detalles](./colocarCuentasCorrientes.md)
:::

## 4. Diferencia entre Cuentas Corrientes y Cuentas Contables

Es importante distinguir entre **cuentas corrientes** y **cuentas contables**, ya que no son lo mismo ni cumplen el mismo rol:

### Cuentas Corrientes

- Están asociadas a la **parte interesada** (cliente, proveedor, servicio, impuesto u otro).
- Permiten seguir los saldos **pendientes con cada tercero** de manera individual.
- Ejemplo: Proveedor “Negrete” con saldo de $50.000 pendiente.

### Cuentas Contables

- Están asociadas a un **concepto contable o de gasto/ingreso** (combustible, honorarios, electricidad, ventas, etc.).
- Reflejan el destino económico de la operación en los estados contables.
- Ejemplo: la cuenta contable “Combustible” acumula todas las compras de nafta, sin importar el proveedor.

### Relación entre ambas

- Un **mismo gasto** (ejemplo: nafta) puede originarse en distintos proveedores (YPF, Shell, Axion).
- La **cuenta contable** será siempre la misma: “Combustible”.
- La **cuenta corriente** dependerá del proveedor:
  - Si se compra siempre a YPF, tendrá su cuenta corriente.
  - Si se compra una sola vez en una estación lejana y se paga en el momento, **no hace falta generar cuenta corriente**, aunque sí se impute contablemente a “Combustible”.

👉 **Conclusión:**  
No todos los clientes o proveedores necesitan necesariamente una cuenta contable propia. Las cuentas contables sirven para registrar el **tipo de gasto o ingreso**, mientras que las cuentas corrientes sirven para registrar la **relación con cada tercero**.

## 5. Recomendaciones de uso del reporte

- Verificar siempre que cada cuenta esté clasificada en uno de los cinco grupos.
- Evitar que el grupo **“Otros”** se use como habitual.
- Mantener actualizados los movimientos para que los saldos reflejen la realidad.
- Usar este reporte como herramienta de control de deudas y créditos, no solo como obligación contable.
