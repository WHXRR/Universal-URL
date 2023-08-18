import { u as useURL, a as useFetch } from './useURL-a02ff3c0.mjs';
import { withAsyncContext, reactive, mergeProps, unref, useSSRContext } from 'file://D:/1--------------------work/learn-nuxt3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://D:/1--------------------work/learn-nuxt3/node_modules/vue/server-renderer/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/ohash/dist/index.mjs';
import '../server.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/ofetch/dist/node.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/hookable/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/unctx/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/h3/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/ufo/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/unhead/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/destr/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/scule/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/klona/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/unstorage/dist/index.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/1--------------------work/learn-nuxt3/node_modules/pathe/dist/index.mjs';

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
      }, _attrs))}><div w-full mx-auto flex flex-col style="${ssrRenderStyle({ "max-width": "300px" })}"><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>\u9009\u62E9\u5206\u7C7B</div><select flex-1 p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none cursor-pointer><!--[-->`);
      ssrRenderList(unref(sitesClassification), (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.title)}</option>`);
      });
      _push(`<!--]--><option${ssrRenderAttr("value", 0)}>\u6CA1\u6709\u60F3\u8981\u7684\u5206\u7C7B\uFF0C\u91CD\u65B0\u521B\u5EFA</option></select></div>`);
      if (unref(formData).classificationID === 0) {
        _push(`<div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>\u5206\u7C7B\u540D\u79F0</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).classificationName)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>\u7F51\u7AD9\u540D\u79F0</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).siteName)}></div><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>\u7F51\u7AD9\u4ECB\u7ECD</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).introduction)}></div><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right>\u7F51\u5740</div><input flex-1 type="text" p-2 rounded-1.4 border-2 b-solid b-dark-300 outline-none${ssrRenderAttr("value", unref(formData).siteUrl)}></div><div mb-4 flex items-center gap-2 text-3.6 font-bold><div class="w-20%" text-right></div><button flex-1 bg-dark-300 color-light-300 rounded-1.4 border-2 b-solid b-dark-300 p-2 cursor-pointer> submit </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/provide/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4e993758.mjs.map
