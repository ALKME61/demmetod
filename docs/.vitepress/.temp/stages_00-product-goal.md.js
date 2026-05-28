import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Этап 0. Цель программного продукта","description":"","frontmatter":{},"headers":[],"relativePath":"stages/00-product-goal.md","filePath":"stages/00-product-goal.md","lastUpdated":1779973680000}');
const _sfc_main = { name: "stages/00-product-goal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="этап-0-цель-программного-продукта" tabindex="-1">Этап 0. Цель программного продукта <a class="header-anchor" href="#этап-0-цель-программного-продукта" aria-label="Permalink to &quot;Этап 0. Цель программного продукта&quot;">​</a></h1><div class="module-badges"><span class="module-badge">Подготовка</span><span class="module-note">Связь с требованиями ДЭ</span></div><div class="info custom-block"><p class="custom-block-title">Отметка по модулю</p><p>Фиксируем итоговый продукт и функции, которые нужны для модулей 1–4.</p></div><h2 id="что-делаем" tabindex="-1">Что делаем <a class="header-anchor" href="#что-делаем" aria-label="Permalink to &quot;Что делаем&quot;">​</a></h2><p>Перед разработкой фиксируем, какой продукт должен получиться и какие функции в нём обязательны.</p><h2 id="итоговыи-продукт" tabindex="-1">Итоговый продукт <a class="header-anchor" href="#итоговыи-продукт" aria-label="Permalink to &quot;Итоговый продукт&quot;">​</a></h2><p>Приложение должно работать с материалами для производства и хранить данные в MySQL.</p><p>Минимальный функционал:</p><ul><li>просмотр списка материалов;</li><li>отображение типа материала, цены, остатков, минимального количества и единицы измерения;</li><li>автоматический расчёт стоимости дозакупки до минимального остатка;</li><li>добавление нового материала;</li><li>редактирование существующего материала;</li><li>просмотр поставщиков выбранного материала;</li><li>расчёт количества продукции по типу продукции, типу материала и параметрам изделия.</li></ul><h2 id="итоговые-артефакты" tabindex="-1">Итоговые артефакты <a class="header-anchor" href="#итоговые-артефакты" aria-label="Permalink to &quot;Итоговые артефакты&quot;">​</a></h2><p>После всех этапов в проекте должны быть:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\demoexam_python</span></span>
<span class="line"><span>├─ resources\\</span></span>
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
<span class="line"><span>└─ dist\\MosaicMaterialsApp.exe</span></span></code></pre></div><h2 id="критерии-готовности-этапа" tabindex="-1">Критерий готовности этапа <a class="header-anchor" href="#критерии-готовности-этапа" aria-label="Permalink to &quot;Критерий готовности этапа&quot;">​</a></h2><p>Студент понимает, что он собирает не отдельные файлы, а законченный продукт: база данных + настольное приложение + документы для сдачи.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("stages/00-product-goal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _00ProductGoal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _00ProductGoal as default
};
