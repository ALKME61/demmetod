import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Этап 12. Git, SQL-экспорт и ER-диаграмма","description":"","frontmatter":{},"headers":[],"relativePath":"stages/12-git-export.md","filePath":"stages/12-git-export.md","lastUpdated":1779973680000}');
const _sfc_main = { name: "stages/12-git-export.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="этап-12-git-sql-экспорт-и-er-диаграмма" tabindex="-1">Этап 12. Git, SQL-экспорт и ER-диаграмма <a class="header-anchor" href="#этап-12-git-sql-экспорт-и-er-диаграмма" aria-label="Permalink to &quot;Этап 12. Git, SQL-экспорт и ER-диаграмма&quot;">​</a></h1><div class="module-badges"><span class="module-badge">Модуль 1 + Модуль 4</span><span class="module-note">Артефакты</span></div><div class="info custom-block"><p class="custom-block-title">Отметка по модулю</p><p>Сохраняем SQL-скрипт, ER-диаграмму и коммит метода модуля 4.</p></div><h2 id="что-делаем" tabindex="-1">Что делаем <a class="header-anchor" href="#что-делаем" aria-label="Permalink to &quot;Что делаем&quot;">​</a></h2><p>Фиксируем проект в локальном git-репозитории и сохраняем обязательные артефакты базы данных.</p><h2 id="локальныи-git-коммит" tabindex="-1">Локальный git-коммит <a class="header-anchor" href="#локальныи-git-коммит" aria-label="Permalink to &quot;Локальный git-коммит&quot;">​</a></h2><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">cd</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> C:\\demoexam_python</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">git init</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">git add .</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">git commit -m </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;Добавлен расчет продукции и основная версия приложения&quot;</span></span></code></pre></div><h2 id="экспорт-sql" tabindex="-1">Экспорт SQL <a class="header-anchor" href="#экспорт-sql" aria-label="Permalink to &quot;Экспорт SQL&quot;">​</a></h2><p>В phpMyAdmin:</p><ol><li>откройте базу <code>mosaic_demo</code>;</li><li>перейдите во вкладку <strong>Экспорт</strong>;</li><li>выберите обычный способ экспорта;</li><li>формат — <code>SQL</code>;</li><li>включите структуру и данные;</li><li>сохраните файл как <code>mosaic_demo.sql</code>;</li><li>положите файл в корень проекта.</li></ol><h2 id="er-диаграмма" tabindex="-1">ER-диаграмма <a class="header-anchor" href="#er-диаграмма" aria-label="Permalink to &quot;ER-диаграмма&quot;">​</a></h2><p>В phpMyAdmin:</p><ol><li>откройте базу <code>mosaic_demo</code>;</li><li>перейдите в <strong>Ещё → Дизайнер</strong>;</li><li>выберите экспорт схемы;</li><li>формат — <code>PDF</code>;</li><li>сохраните файл как <code>mosaic_demo_er.pdf</code>;</li><li>положите файл в корень проекта.</li></ol><h2 id="критерии-готовности-этапа" tabindex="-1">Критерий готовности этапа <a class="header-anchor" href="#критерии-готовности-этапа" aria-label="Permalink to &quot;Критерий готовности этапа&quot;">​</a></h2><p>В проекте есть git-коммит, <code>mosaic_demo.sql</code> и <code>mosaic_demo_er.pdf</code>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stages/12-git-export.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12GitExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12GitExport as default
};
