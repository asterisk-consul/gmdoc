# Orden de Abastecimiento

## 1. Creación de Orden de Abastecimiento

La **Orden de Abastecimiento** es el primer paso del flujo de compras.
Permite registrar la intención de compra, definiendo los datos principales y habilitando luego la carga de artículos.

### Campos principales:

| Campo Principal           | Descripción                                                                                                                              |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Fecha**                 | Día en que se crea la orden.                                                                                                             |
| **Referencia**            | Identificador o número de referencia para seguimiento. **Recomendacion** n°de factura.                                                   |
| **Proveedor/Receptor**    | **Entidad a la que se realiza el pago/compra.** Incluye proveedores de bienes, servicios, registros de impuestos o empleados.            |
| **Sub Total**             | Monto de la compra o pago **sin incluir impuestos.** _se genera automaticante al ingresar el monto en detalles._                         |
| **Total con Impuestos**   | Cálculo automático que incluye todos los tributos aplicables al monto final. _se genera automaticante al ingresar el monto en detalles._ |
| **Usuario**               | Nombre del usuario que crea la orden (ejemplo: _Flows Manager_). _se genera automaticante._                                              |
| **Observaciones a la OC** | Campo libre para agregar notas o condiciones especiales.                                                                                 |
| **Adjuntos**              | Posibilidad de **adjuntar archivos** relacionados (presupuestos, cotizaciones, comprobantes, etc.).                                      |

## 2. Detalle de la Orden

Una vez cargados los datos generales, el sistema habilita la sección **Detalle**.

En esta sección se pueden **agregar artículos o servicios** a través del botón `AGREGAR`.

### 📋 Detalle de la Orden – Agregar Actividad

Cuando se agrega un **Artículo o Servicio**, se despliega una ventana donde se completan los siguientes campos:

| Campo                   | Descripción                                             | Tipo de Dato | Observaciones / Fórmulas de Cálculo                                                                 |
| ----------------------- | ------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------- |
| **Artículo o Servicio** | Selección del producto o servicio a registrar.          | Texto        | Se habilita al escribir mínimo 2 caracteres.                                                        |
| **Cantidad**            | Número de unidades a adquirir.                          | Numérico     | Se multiplica por el Precio Unitario.                                                               |
| **Precio Unitario**     | Valor monetario de cada unidad.                         | Numérico ($) | Ingresado manualmente.                                                                              |
| **Porc. Ajuste**        | Porcentaje de descuento o recargo.                      | Numérico %   | - Si es descuento, usar valor negativo (ej: `-10` para -10%). <br> - Si es recargo, valor positivo. |
| **Precio Total**        | Importe calculado automáticamente.                      | Numérico ($) | Fórmula: **Cantidad × Precio Unitario × (1 + Porc. Ajuste / 100)**                                  |
| **Impuestos (%)**       | Porcentaje de impuestos aplicables (IVA, etc.).         | Numérico %   | Se aplica sobre el Precio Total.                                                                    |
| **Total Imp.**          | Valor monetario de los impuestos calculados.            | Numérico ($) | Fórmula: **Precio Total × (Impuestos / 100)**                                                       |
| **Notas**               | Observaciones adicionales sobre el artículo o servicio. | Texto        | Opcional.                                                                                           |

#### 🔢 Ejemplo de Cálculo

- Cantidad: **10**
- Precio Unitario: **100**
- Porc. Ajuste: **-10** (10% de descuento)
- Impuestos: **21**

Cálculos:

1. **Precio Total** = 10 × 100 × (1 - 10/100) = **900**
2. **Total Imp.** = 900 × 21% = **189**
3. **Total con Impuestos** = 900 + 189 = **1.089**

## 3. Relación con Cuentas Contables

Cada artículo o servicio cargado en la orden debe tener vinculada una **cuenta contable**, lo que asegura que:

- Los movimientos impacten correctamente en la contabilidad.
- Se puedan generar reportes financieros claros y ordenados.
- Se cumplan las normas de registro contable y auditoría.

::: info
Para asociar una cuenta contable [Ver mas](../../casosParticulares/cuentasContables/index.md)
:::
