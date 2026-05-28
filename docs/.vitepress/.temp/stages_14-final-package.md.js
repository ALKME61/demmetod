import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Этап 14. Финальная сдача","description":"","frontmatter":{},"headers":[],"relativePath":"stages/14-final-package.md","filePath":"stages/14-final-package.md","lastUpdated":1779973680000}');
const _sfc_main = { name: "stages/14-final-package.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="этап-14-финальная-сдача" tabindex="-1">Этап 14. Финальная сдача <a class="header-anchor" href="#этап-14-финальная-сдача" aria-label="Permalink to &quot;Этап 14. Финальная сдача&quot;">​</a></h1><div class="module-badges"><span class="module-badge">Финальная сдача</span><span class="module-note">Комплект результата</span></div><div class="info custom-block"><p class="custom-block-title">Отметка по модулю</p><p>Собираем исходный код, исполняемый файл, SQL-скрипт, ER-PDF и ресурсы.</p></div><h2 id="что-делаем" tabindex="-1">Что делаем <a class="header-anchor" href="#что-делаем" aria-label="Permalink to &quot;Что делаем&quot;">​</a></h2><p>Собираем итоговый комплект проекта так, чтобы его можно было проверить без дополнительных объяснений.</p><h2 id="что-должно-быть-в-проекте" tabindex="-1">Что должно быть в проекте <a class="header-anchor" href="#что-должно-быть-в-проекте" aria-label="Permalink to &quot;Что должно быть в проекте&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\demoexam_python</span></span>
<span class="line"><span>├─ resources\\</span></span>
<span class="line"><span>├─ .venv\\                 # можно не сдавать, если запрещено правилами</span></span>
<span class="line"><span>├─ db.py</span></span>
<span class="line"><span>├─ calculations.py</span></span>
<span class="line"><span>├─ main.py</span></span>
<span class="line"><span>├─ check_db.py</span></span>
<span class="line"><span>├─ check_costs.py</span></span>
<span class="line"><span>├─ check_module4.py</span></span>
<span class="line"><span>├─ requirements.txt</span></span>
<span class="line"><span>├─ docker-compose.yml</span></span>
<span class="line"><span>├─ mosaic_demo.sql</span></span>
<span class="line"><span>├─ mosaic_demo_er.pdf</span></span>
<span class="line"><span>├─ dist\\</span></span>
<span class="line"><span>│  └─ MosaicMaterialsApp.exe</span></span>
<span class="line"><span>└─ README.md              # желательно добавить инструкцию запуска</span></span></code></pre></div><h2 id="финальная-проверка-перед-сдачеи" tabindex="-1">Финальная проверка перед сдачей <a class="header-anchor" href="#финальная-проверка-перед-сдачеи" aria-label="Permalink to &quot;Финальная проверка перед сдачей&quot;">​</a></h2><ul><li>[ ] MySQL запускается.</li><li>[ ] База <code>mosaic_demo</code> создана.</li><li>[ ] Данные импортированы.</li><li>[ ] SQL-проверки совпадают с индивидуальным вариантом.</li><li>[ ] <code>python check_db.py</code> работает.</li><li>[ ] <code>python check_costs.py</code> выдаёт ожидаемые значения.</li><li>[ ] <code>python check_module4.py</code> выдаёт ожидаемые значения.</li><li>[ ] <code>python main.py</code> запускает интерфейс.</li><li>[ ] Добавление материала работает.</li><li>[ ] Редактирование материала работает.</li><li>[ ] Поставщики материала открываются.</li><li>[ ] <code>mosaic_demo.sql</code> сохранён.</li><li>[ ] <code>mosaic_demo_er.pdf</code> сохранён.</li><li>[ ] <code>MosaicMaterialsApp.exe</code> собран.</li><li>[ ] Есть локальный git-коммит.</li></ul><h2 id="итоговыи-критерии" tabindex="-1">Итоговый критерий <a class="header-anchor" href="#итоговыи-критерии" aria-label="Permalink to &quot;Итоговый критерий&quot;">​</a></h2><p>Если все пункты отмечены, студент получил готовый программный продукт и комплект файлов для проверки.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stages/14-final-package.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14FinalPackage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14FinalPackage as default
};
