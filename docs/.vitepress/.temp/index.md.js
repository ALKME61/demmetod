import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Мозаика Docs","text":"Путь от исходных данных до готового приложения","tagline":"Пошаговая документация для студентов: база данных, импорт, Python, PyQt6, проверки и сборка EXE.","actions":[{"theme":"brand","text":"Начать по этапам","link":"/stages/"},{"theme":"alt","text":"Финальный чек-лист","link":"/reference/final-checklist"}]},"features":[{"title":"По этапам","details":"Каждый раздел заканчивается конкретным результатом, который можно проверить."},{"title":"Индивидуальные данные","details":"Данные студентов подключаются через приложения, не зашитые в документацию."},{"title":"Готовый продукт","details":"После прохождения всех этапов получается БД, приложение, SQL-экспорт, ER-диаграмма и EXE."}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1779975449000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
