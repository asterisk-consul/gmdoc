import {
  parse
} from "./chunk-LAWCLXFJ.js";
import "./chunk-A74IW6JM.js";
import "./chunk-GRAH7SS4.js";
import "./chunk-KH6FDV2Z.js";
import "./chunk-OUJ7EOZL.js";
import "./chunk-Q7UVJCTL.js";
import "./chunk-KPEK7QKZ.js";
import "./chunk-43XIZL32.js";
import "./chunk-WRHXTWHW.js";
import "./chunk-46Y37KHS.js";
import {
  package_default
} from "./chunk-RQACMK24.js";
import {
  selectSvgElement
} from "./chunk-52MPGX6F.js";
import {
  configureSvgSize
} from "./chunk-L7FQR7QU.js";
import {
  __name,
  log
} from "./chunk-74KEASJ4.js";
import "./chunk-SVROXNIC.js";
import "./chunk-5WV6JA3U.js";
import "./chunk-FDBJFBLO.js";

// node_modules/.pnpm/mermaid@11.12.0/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-F6ZHWCRC.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-F6ZHWCRC-KLKDCG2S.js.map
