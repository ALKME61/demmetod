import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Этап 7. Python-окружение","description":"","frontmatter":{},"headers":[],"relativePath":"stages/07-python-env.md","filePath":"stages/07-python-env.md","lastUpdated":1779973680000}');
const _sfc_main = { name: "stages/07-python-env.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="этап-7-python-окружение" tabindex="-1">Этап 7. Python-окружение <a class="header-anchor" href="#этап-7-python-окружение" aria-label="Permalink to &quot;Этап 7. Python-окружение&quot;">​</a></h1><div class="module-badges"><span class="module-badge">Модуль 2</span><span class="module-note">Старт приложения</span></div><div class="info custom-block"><p class="custom-block-title">Отметка по модулю</p><p>Создаём Python-окружение и зависимости для программного модуля.</p></div><h2 id="что-делаем" tabindex="-1">Что делаем <a class="header-anchor" href="#что-делаем" aria-label="Permalink to &quot;Что делаем&quot;">​</a></h2><p>Создаём виртуальное окружение и устанавливаем зависимости приложения.</p><h2 id="команды" tabindex="-1">Команды <a class="header-anchor" href="#команды" aria-label="Permalink to &quot;Команды&quot;">​</a></h2><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">cd</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> C:\\demoexam_python</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">python -m venv .venv</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">.\\.venv\\Scripts\\activate</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">pip install PyQt6 mysql-connector-python pyinstaller</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">pip freeze </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> requirements.txt</span></span></code></pre></div><h2 id="что-должно-появиться" tabindex="-1">Что должно появиться <a class="header-anchor" href="#что-должно-появиться" aria-label="Permalink to &quot;Что должно появиться&quot;">​</a></h2><p>В проекте появятся:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.venv\\</span></span>
<span class="line"><span>requirements.txt</span></span></code></pre></div><h2 id="проверка" tabindex="-1">Проверка <a class="header-anchor" href="#проверка" aria-label="Permalink to &quot;Проверка&quot;">​</a></h2><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">python --version</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">pip list</span></span></code></pre></div><p>В списке пакетов должны быть:</p><ul><li><code>PyQt6</code>;</li><li><code>mysql-connector-python</code>;</li><li><code>pyinstaller</code>.</li></ul><h2 id="критерии-готовности-этапа" tabindex="-1">Критерий готовности этапа <a class="header-anchor" href="#критерии-готовности-этапа" aria-label="Permalink to &quot;Критерий готовности этапа&quot;">​</a></h2><p>Виртуальное окружение активируется, зависимости установлены, <code>requirements.txt</code> создан.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stages/07-python-env.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07PythonEnv = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _07PythonEnv as default
};
