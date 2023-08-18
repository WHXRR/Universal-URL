import { _ as __nuxt_component_0$1 } from "./nuxt-link-26e5a74c.js";
import { ref, unref, useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from "vue";
import "hookable";
import { a as useState, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main$3 = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const flag = ref(false);
    ref(null);
    const keyword = useState("keyword", () => "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(flag)) {
        _push(`<div bg-dark-500 py-2 px-4 items-center text-3 rounded cursor-pointer hidden md:flex><svg t="1692171761385" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7414" width="20" height="20"><path d="M996.266454 988.517375a28.141392 28.141392 0 0 0-2.854924-7.137309 48.992532 48.992532 0 0 0-3.92552-5.86279c-2.192174-2.854924-5.098078-6.423579-9.329483-10.960869-7.086329-8.003983-17.486408-19.015832-31.200239-33.341431-21.462909-22.380564-42.9768-44.353281-95.283083-97.475257s-73.463308-74.788808-94.722294-96.863487q-20.035448-20.902121-30.027681-32.015931c-3.26277-3.721597-5.658867-6.474559-6.933386-8.156926a26.357065 26.357065 0 0 1 2.192173 5.556906c2.141193 7.494175 2.141193 7.494175-6.933386 24.674699a423.3954 423.3954 0 0 0 129.338245-305.884696c0-232.52335-185.213183-421.050284-413.709051-421.050284S19.219755 188.526934 19.219755 421.050284 204.585881 842.304491 432.877825 842.304491c5.098078 0 10.196157 0 15.956985-0.66275 4.129443-0.305885 7.749079-0.66275 14.274619-1.325501a222.225232 222.225232 0 0 1 23.655084-1.784327c9.482426 0 24.521756-3.364732 46.851339-9.533407l8.054963-2.294135c8.46281-2.396097 17.129543-5.098078 25.490392-7.596136l11.11381-3.517674a25.490391 25.490391 0 0 0 16.364832-32.015932 25.031564 25.031564 0 0 0-31.455143-16.619735l-10.553022 3.313751c-8.105944 2.498058-16.466793 5.098078-24.572737 7.341233l-7.647118 2.141192a244.045006 244.045006 0 0 1-33.698297 7.749079 249.805835 249.805835 0 0 0-28.702181 2.039232l-13.000099 1.223538c-4.58827 0.305885-8.564771 0.509808-12.184407 0.509808-200.762322 0-363.543961-165.636563-363.543961-370.01852S232.115503 51.031763 432.877825 51.031763s363.543961 165.687544 363.543961 370.018521a372.159713 372.159713 0 0 1-113.636164 268.719705c-9.227522 17.537389-9.227522 17.537389-7.035348 25.490391a27.631584 27.631584 0 0 0 2.854924 6.882406 44.863089 44.863089 0 0 0 3.92552 5.811809c2.192174 2.854924 5.098078 6.474559 9.329483 11.011849 7.086329 8.003983 17.486408 19.015832 31.200239 33.341432 21.51389 22.431544 43.282684 44.659166 95.181121 97.424276s73.565269 74.89077 94.824256 96.863487q20.035448 20.85114 30.027681 32.015931c3.26277 3.670616 5.607886 6.474559 6.882406 8.105945a26.968834 26.968834 0 0 1-2.294136-5.913771c-2.090212-8.054964-2.090212-8.054964 8.054964-25.490391a25.898238 25.898238 0 0 0-2.956885 35.992432 24.77666 24.77666 0 0 0 35.329682 3.007866c10.196157-17.58837 10.196157-17.58837 8.156925-26.204122z m0 0" fill="#ffffff" p-id="7415"></path><path d="M144.785423 427.575824a25.949218 25.949218 0 0 1-25.949219-25.949218 311.747486 311.747486 0 0 1 311.390621-311.390621 25.949218 25.949218 0 0 1 0 51.898437 260.001991 260.001991 0 0 0-259.492184 259.492184 25.949218 25.949218 0 0 1-25.949218 25.949218z" fill="#ffffff" p-id="7416"></path></svg><div ml-3 color-light-100>搜索</div></div>`);
      } else {
        _push(`<div><input type="text" p-2 outline-none rounded autofocus${ssrRenderAttr("value", unref(keyword))} style="${ssrRenderStyle({ "height": "16px" })}"></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$3;
const _imports_0 = "data:image/png;base64,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";
const header_vue_vue_type_style_index_0_scoped_67ac6d35_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_search = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    sticky: "",
    "top-0": "",
    "bg-dark-300": "",
    "drop-shadow": "",
    "px-5": "",
    "py-3": "",
    flex: "",
    "justify-between": "",
    "items-center": "",
    "gap-4": "",
    "font-bold": ""
  }, _attrs))} data-v-67ac6d35><div data-v-67ac6d35>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img vertical-bottom${ssrRenderAttr("src", _imports_0)} w-7 data-v-67ac6d35${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            "vertical-bottom": "",
            src: _imports_0,
            "w-7": ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="nav" absolute left-50% transform translate-x--50% flex-1 flex justify-center gap-4 data-v-67ac6d35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    "font-size-3.8": "",
    "py-1.5": "",
    "px-2": "",
    "hover-bg-dark-800": "",
    "color-light-500": "",
    "transition-all-500": "",
    rounded: "",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 首页 `);
      } else {
        return [
          createTextVNode(" 首页 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    "font-size-3.8": "",
    "py-1.5": "",
    "px-2": "",
    "hover-bg-dark-800": "",
    "color-light-500": "",
    "transition-all-500": "",
    rounded: "",
    to: "/provide"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`我要提供`);
      } else {
        return [
          createTextVNode("我要提供")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div gap-3 flex items-center data-v-67ac6d35>`);
  _push(ssrRenderComponent(_component_search, null, null, _parent));
  _push(`<svg t="1692171761385" class="icon" block md:hidden cursor-pointer viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7414" width="20" height="20" data-v-67ac6d35><path d="M996.266454 988.517375a28.141392 28.141392 0 0 0-2.854924-7.137309 48.992532 48.992532 0 0 0-3.92552-5.86279c-2.192174-2.854924-5.098078-6.423579-9.329483-10.960869-7.086329-8.003983-17.486408-19.015832-31.200239-33.341431-21.462909-22.380564-42.9768-44.353281-95.283083-97.475257s-73.463308-74.788808-94.722294-96.863487q-20.035448-20.902121-30.027681-32.015931c-3.26277-3.721597-5.658867-6.474559-6.933386-8.156926a26.357065 26.357065 0 0 1 2.192173 5.556906c2.141193 7.494175 2.141193 7.494175-6.933386 24.674699a423.3954 423.3954 0 0 0 129.338245-305.884696c0-232.52335-185.213183-421.050284-413.709051-421.050284S19.219755 188.526934 19.219755 421.050284 204.585881 842.304491 432.877825 842.304491c5.098078 0 10.196157 0 15.956985-0.66275 4.129443-0.305885 7.749079-0.66275 14.274619-1.325501a222.225232 222.225232 0 0 1 23.655084-1.784327c9.482426 0 24.521756-3.364732 46.851339-9.533407l8.054963-2.294135c8.46281-2.396097 17.129543-5.098078 25.490392-7.596136l11.11381-3.517674a25.490391 25.490391 0 0 0 16.364832-32.015932 25.031564 25.031564 0 0 0-31.455143-16.619735l-10.553022 3.313751c-8.105944 2.498058-16.466793 5.098078-24.572737 7.341233l-7.647118 2.141192a244.045006 244.045006 0 0 1-33.698297 7.749079 249.805835 249.805835 0 0 0-28.702181 2.039232l-13.000099 1.223538c-4.58827 0.305885-8.564771 0.509808-12.184407 0.509808-200.762322 0-363.543961-165.636563-363.543961-370.01852S232.115503 51.031763 432.877825 51.031763s363.543961 165.687544 363.543961 370.018521a372.159713 372.159713 0 0 1-113.636164 268.719705c-9.227522 17.537389-9.227522 17.537389-7.035348 25.490391a27.631584 27.631584 0 0 0 2.854924 6.882406 44.863089 44.863089 0 0 0 3.92552 5.811809c2.192174 2.854924 5.098078 6.474559 9.329483 11.011849 7.086329 8.003983 17.486408 19.015832 31.200239 33.341432 21.51389 22.431544 43.282684 44.659166 95.181121 97.424276s73.565269 74.89077 94.824256 96.863487q20.035448 20.85114 30.027681 32.015931c3.26277 3.670616 5.607886 6.474559 6.882406 8.105945a26.968834 26.968834 0 0 1-2.294136-5.913771c-2.090212-8.054964-2.090212-8.054964 8.054964-25.490391a25.898238 25.898238 0 0 0-2.956885 35.992432 24.77666 24.77666 0 0 0 35.329682 3.007866c10.196157-17.58837 10.196157-17.58837 8.156925-26.204122z m0 0" fill="#ffffff" p-id="7415" data-v-67ac6d35></path><path d="M144.785423 427.575824a25.949218 25.949218 0 0 1-25.949219-25.949218 311.747486 311.747486 0 0 1 311.390621-311.390621 25.949218 25.949218 0 0 1 0 51.898437 260.001991 260.001991 0 0 0-259.492184 259.492184 25.949218 25.949218 0 0 1-25.949218 25.949218z" fill="#ffffff" p-id="7416" data-v-67ac6d35></path></svg><a href="https://github.com/WHXRR" target="_black" flex items-center data-v-67ac6d35><svg t="1692171363225" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5381" width="30" height="30" data-v-67ac6d35><path d="M695.765333 981.333333h-276.053333c-26.794667 0-47.317333-21.077333-47.317333-48.64V739.84c0-29.184 6.314667-56.746667 17.365333-81.066667-129.365333-48.64-214.528-150.784-214.528-264.277333 0-53.504 17.365333-103.765333 50.474667-147.498667-12.629333-42.154667-15.786667-95.658667-12.629334-157.269333C216.234667 62.122667 236.8 42.666667 261.973333 42.666667c14.208 0 134.101333 1.621333 203.52 64.853333a504.448 504.448 0 0 1 184.533334 0C717.866667 44.288 837.717333 42.666667 853.504 42.666667c25.216 0 45.738667 19.456 47.317333 45.397333 4.693333 61.610667 0 115.114667-12.629333 157.269333C921.301333 290.688 938.666667 340.906667 938.666667 392.832c0 113.493333-85.162667 215.637333-214.528 264.277333a207.786667 207.786667 0 0 1 17.365333 81.066667v192.896c1.578667 27.562667-20.48 50.261333-45.738667 50.261333z m-228.693333-97.28h181.333333V739.84c0-27.562667-12.586667-53.504-33.109333-71.338667-14.165333-11.349333-20.48-30.805333-15.786667-50.261333 4.778667-17.834667 18.944-32.426667 36.309334-35.669333 123.050667-24.32 208.213333-102.144 208.213333-189.696 0-47.018667-25.258667-82.688-45.738667-105.386667-14.208-14.549333-17.365333-35.626667-7.893333-55.082667 6.314667-12.970667 15.786667-40.533333 15.786667-89.173333-39.466667 6.485333-85.205333 19.456-102.528 45.397333-11.093333 16.213333-31.573333 24.32-50.474667 19.456a393.045333 393.045333 0 0 0-194.005333 0c-18.944 4.864-37.888-3.242667-50.474667-19.456-17.365333-25.941333-63.146667-38.912-102.528-45.397333 1.578667 48.64 9.429333 76.202667 15.786667 89.173333 7.850667 17.834667 4.693333 40.533333-7.936 55.082667-20.48 22.698667-45.738667 58.368-45.738667 105.386667 0 87.552 85.205333 163.754667 208.213333 189.696 17.365333 3.242667 31.573333 17.834667 36.266667 35.669333 4.736 17.834667-1.578667 37.290667-15.786667 50.261333a95.104 95.104 0 0 0-33.109333 71.296v144.298667h3.157333z" fill="#ffffff" p-id="5382" data-v-67ac6d35></path><path d="M403.968 788.394667c-212.949333 0-309.162667-194.56-313.898667-202.666667-11.050667-24.32-1.578667-53.461333 20.48-64.810667 23.68-11.349333 52.053333-1.621333 63.146667 21.077334 3.114667 6.485333 80.426667 157.269333 241.28 149.162666 26.837333-1.621333 48.896 19.456 48.896 46.976 1.578667 27.562667-18.901333 50.261333-45.738667 50.261334h-14.165333z" fill="#7d7f85" p-id="5383" data-v-67ac6d35></path></svg></a></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-67ac6d35"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    flex: "",
    "items-center": "",
    "justify-center": "",
    "p-3": "",
    "bg-dark-300": "",
    "color-light-500": ""
  }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutsHeader = __nuxt_component_0;
  const _component_LayoutsFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    flex: "",
    "flex-col": "",
    "h-screen": "",
    "overflow-hidden": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutsHeader, null, null, _parent));
  _push(`<div flex-1 bg-gray-100 overflow-hidden overflow-y-auto><div class="w-100% md:w-80%" mx-auto box-border>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_LayoutsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-d4a55c19.js.map
