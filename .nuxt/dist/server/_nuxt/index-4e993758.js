import { u as useFetch, a as useURL } from "./useURL-a02ff3c0.js";
import { withAsyncContext, reactive, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "url-regex";
import "ohash";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const url = useURL();
    const sitesClassification = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return (_a = useFetch(
        `${url}/api/getSitesClassification`,
        {
          method: "POST",
          transform: (data) => data.data
        },
        "$0kQMjxrcnf"
      )) == null ? void 0 : _a.data;
    }), __temp = await __temp, __restore(), __temp);
    const formData = reactive({
      classificationID: "",
      classificationName: "",
      siteName: "",
      introduction: "",
      siteUrl: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "justify-center": "",
        "bg-light-100": "",
        "p-4": "",
        "w-full": ""
      }, _attrs))}><div w-full mx-auto flex flex-col style="${ssrRenderStyle({ "max-width": "300px" })}"><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>选择分类</div><select flex-1 p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none cursor-pointer><!--[-->`);
      ssrRenderList(unref(sitesClassification), (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.title)}</option>`);
      });
      _push(`<!--]--><option${ssrRenderAttr("value", 0)}>没有想要的分类，重新创建</option></select></div>`);
      if (unref(formData).classificationID === 0) {
        _push(`<div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>分类名称</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).classificationName)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>网站名称</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).siteName)}></div><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>网站介绍</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).introduction)}></div><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>网址</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).siteUrl)}></div><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right></div><button flex-1 bg-dark-300 color-light-300 rounded-1.4 border-2 b-solid b-dark-300 p-2 cursor-pointer> submit </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/provide/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-4e993758.js.map
