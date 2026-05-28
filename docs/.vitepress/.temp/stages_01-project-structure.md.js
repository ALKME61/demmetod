import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Этап 1. Структура проекта","description":"","frontmatter":{},"headers":[],"relativePath":"stages/01-project-structure.md","filePath":"stages/01-project-structure.md","lastUpdated":1779973680000}');
const _sfc_main = { name: "stages/01-project-structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="этап-1-структура-проекта" tabindex="-1">Этап 1. Структура проекта <a class="header-anchor" href="#этап-1-структура-проекта" aria-label="Permalink to &quot;Этап 1. Структура проекта&quot;">​</a></h1><div class="module-badges"><span class="module-badge">Подготовка</span><span class="module-note">Перед модулем 1</span></div><div class="info custom-block"><p class="custom-block-title">Отметка по модулю</p><p>Готовим папку проекта и ресурсы: логотип, иконку и индивидуальные import-файлы.</p></div><h2 id="что-делаем" tabindex="-1">Что делаем <a class="header-anchor" href="#что-делаем" aria-label="Permalink to &quot;Что делаем&quot;">​</a></h2><p>Создаём рабочую папку, в которой будут лежать исходники, ресурсы, данные, экспорт базы и сборка приложения.</p><h2 id="команды" tabindex="-1">Команды <a class="header-anchor" href="#команды" aria-label="Permalink to &quot;Команды&quot;">​</a></h2><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">cd</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> C:\\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">mkdir</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> demoexam_python</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">cd</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> demoexam_python</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">mkdir</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> resources</span></span></code></pre></div><h2 id="что-положить-в-resources" tabindex="-1">Что положить в <code>resources</code> <a class="header-anchor" href="#что-положить-в-resources" aria-label="Permalink to &quot;Что положить в \`resources\`&quot;">​</a></h2><p>В папку <code>resources</code> студент кладёт свои индивидуальные приложения:</p><ul><li>логотип приложения, например <code>Мозаика.png</code>;</li><li>иконку приложения, например <code>Мозаика.ico</code>;</li><li>таблицы с исходными данными в формате <code>.xlsx</code>;</li><li>после подготовки — <code>.csv</code>-версии этих таблиц.</li></ul><h2 id="рекомендуемая-структура" tabindex="-1">Рекомендуемая структура <a class="header-anchor" href="#рекомендуемая-структура" aria-label="Permalink to &quot;Рекомендуемая структура&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\demoexam_python</span></span>
<span class="line"><span>├─ resources\\</span></span>
<span class="line"><span>│  ├─ Мозаика.png</span></span>
<span class="line"><span>│  ├─ Мозаика.ico</span></span>
<span class="line"><span>│  ├─ Material_type_import.xlsx</span></span>
<span class="line"><span>│  ├─ Product_type_import.xlsx</span></span>
<span class="line"><span>│  ├─ Suppliers_import.xlsx</span></span>
<span class="line"><span>│  ├─ Materials_import.xlsx</span></span>
<span class="line"><span>│  └─ Material_suppliers_import.xlsx</span></span>
<span class="line"><span>└─ docker-compose.yml</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Названия файлов могут отличаться у разных студентов. Важно не название, а смысл: типы материалов, типы продукции, поставщики, материалы и связи материалов с поставщиками.</p></div><h2 id="критерии-готовности-этапа" tabindex="-1">Критерий готовности этапа <a class="header-anchor" href="#критерии-готовности-этапа" aria-label="Permalink to &quot;Критерий готовности этапа&quot;">​</a></h2><p>Папка проекта создана, а индивидуальные приложения лежат в <code>resources</code>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stages/01-project-structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01ProjectStructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01ProjectStructure as default
};
