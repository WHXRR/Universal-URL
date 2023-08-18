import { u as useFetch, a as useURL } from "./useURL-a02ff3c0.js";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { a as useState } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import "ohash";
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
    const colors = [
      "bg-rose-400",
      "bg-pink-400",
      "bg-fuchsia-400",
      "bg-purple-400",
      "bg-slate-400",
      "bg-orange-400",
      "bg-blue-400",
      "bg-sky-400",
      "bg-green-400",
      "bg-yellow-400"
    ];
    const randomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };
    const url = useURL();
    const keyword = useState("keyword");
    const { data: navData } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${url}/api/getAllSites`, {
      method: "POST",
      transform: (data) => data.data,
      query: {
        keyword
      }
    }, "$wwVYWyoTZd")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ "p-4": "" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(navData), (item) => {
        var _a;
        _push(`<div rounded drop-shadow flex items-center flex-col mb-5 md:flex-row bg-light-100>`);
        if ((_a = item.data) == null ? void 0 : _a.length) {
          _push(`<!--[--><div class="md:w-20%" mr-3 p-4 text-center font-bold text-4>${ssrInterpolate(item.title)}</div><div class="md:w-80%" p-2 flex flex-wrap text-3.5><!--[-->`);
          ssrRenderList(item == null ? void 0 : item.data, (ele, index) => {
            _push(`<a${ssrRenderAttr("href", ele.path)} target="_blank" color-light-500 drop-shadow rounded p-2 px-5 m-2 border border-solid cursor-pointer class="${ssrRenderClass(randomColor())}"${ssrRenderAttr("title", ele.introduction)}>${ssrInterpolate(ele.name)}</a>`);
          });
          _push(`<!--]--></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-b703e693.js.map
