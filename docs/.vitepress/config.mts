import { defineConfig, type DefaultTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import tailwindcss from "@tailwindcss/vite";

// aca insertamos fs, path y matter
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface DocWithTags {
  file: string;
  title?: string;
  tags?: string[];
  [key: string]: any;
}
function getDocsWithTags(): DocWithTags[] {
  const rootDir = path.resolve(__dirname, "../");

  function readDirRecursively(dir: string): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    return entries.flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return readDirRecursively(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        return [fullPath];
      }
      return [];
    });
  }

  const files = readDirRecursively(rootDir);

  const docs: DocWithTags[] = files.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const { data } = matter(raw);
    return {
      file: path.relative(rootDir, file).replace(/\\/g, "/"),
      ...data,
    };
  });

  // Filtramos solo los que tienen tags
  return docs.filter((doc): doc is DocWithTags => Array.isArray(doc.tags));
}

export default withMermaid(
  defineConfig({
    base: "/gmdoc/",
    title: "GM",
    description: "Prueba",

    vite: {
      optimizeDeps: {
        include: ["mermaid"],
      },
      plugins: [tailwindcss()],
      define: {
        __DOCS_WITH_TAGS__: JSON.stringify(getDocsWithTags()), // 👈 acá
      },
    },
    themeConfig: {
      logo: "/logGM.webp",
      nav: [
        { text: "Inicio", link: "/" },
        { text: "Tags", link: "/tags" },
        { text: "Soporte", link: "https://surl.li/kmiuwb" },
      ],
      sidebar: {
        "/tags": [
          {
            text: "Tags",
            link: "/tags",
          },
        ],
        "/reportes/": sidebarReportes(),
        "/flows/": sidebarFlows(),
        "/casosParticulares/": sidebarCasosParticulares(),
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/asterisk-consul/gmdoc" },
      ],

      lastUpdated: {
        text: "Última actualización",
        formatOptions: {
          dateStyle: "short",
        },
      },

      docFooter: {
        prev: "Anterior",
        next: "Siguiente",
      },

      outline: {
        level: "deep",
        label: "En esta página",
      },

      search: {
        provider: "local",
      },
    },
  })
);
// https://vitepress.dev/reference/site-config

function sidebarReportes(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Reportes",
      link: "/reportes/",
      collapsed: false,
      items: [
        {
          text: "Manual de Uso",
          collapsed: true,
          items: [
            { text: "Cheques", link: "/reportes/Cheques" },
            {
              text: "Control de tareas/tiempos",
              link: "/reportes/ControlTiempo_Usuario",
            },
            { text: "Compras", link: "/reportes/COMPRAS_maestro" },
            { text: "Cuentas", link: "/reportes/CTACTEPROV" },
            {
              text: "Estado integral de cuentas",
              link: "/reportes/estadoIntegraldeCuentas/estadoIntegraldeCuentas",
            },
            { text: "Gastos", link: "/reportes/Gastos/" },
            { text: "Producción", link: "/reportes/controlDeMuebles" },
            {
              text: "RemitosVSCompras",
              link: "/reportes/RemitosVsCompras",
            },
            { text: "Sueldos", link: "/reportes/manual_usuario_rhsueldos" },
          ],
        },
        {
          text: "Comportamietno de filtros",
          collapsed: true,
          items: [
            { text: "Fechas", link: "/reportes/ComportamientoFiltroFechas" },
            { text: "Busqueda parcial", link: "/reportes/BusquedaParcial" },
          ],
        },
      ],
    },
  ];
}

function sidebarFlows(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Flujos",
      link: "/flows/",
      collapsed: false,
      items: [
        {
          text: "Ajustes",
          link: "/flows/ajustes/",
          collapsed: true,
          items: [
            {
              text: "Realizar Ajuste",
              link: "/flows/ajustes/50301RealizarAjuste",
            },
            {
              text: "Ajustes Positivos o Negativos",
              link: "/flows/ajustes/AjustePosyNeg/",
            },
          ],
        },
        {
          text: "Compras y Pagos",
          link: "/flows/comprasypagos/",
          collapsed: true,
          items: [
            {
              text: "Orden de Compra",
              link: "/flows/comprasypagos/orden_De_Compra",
            },
            {
              text: "Ejecutar la compra",
              link: "/flows/comprasypagos/ejecutar_Compra",
            },
          ],
        },
        {
          text: "Egresos",
          link: "/flows/egresos/egresos",
          collapsed: true,
        },
      ],
    },
  ];
}

function sidebarCasosParticulares(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Casos Particulares",
      link: "/casosParticulares/",
      collapsed: false,
      items: [
        {
          text: "Cuentas Corrientes",
          link: "/casosParticulares/cuentasCorrientes/guia_cuentas_corrientes",
          collapsed: true,
          items: [
            {
              text: "Colocar cuentas corrientes",
              link: "/casosParticulares/cuentasCorrientes/colocarCuentasCorrientes",
            },
          ],
        },
        {
          text: "Cuentas Contables",
          link: "/casosParticulares/cuentasContables/",
          collapsed: true,
          items: [
            {
              text: "Plan de Cuentas",
              link: "/casosParticulares/cuentasContables/planCuentas",
            },
          ],
        },
      ],
    },
  ];
}
