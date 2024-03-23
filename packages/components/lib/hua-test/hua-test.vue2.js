import { defineComponent as _, openBlock as a, createElementBlock as c, createElementVNode as e, toDisplayString as o, Fragment as m, renderList as h, createVNode as x, unref as f, withCtx as k, createTextVNode as v, pushScopeId as C, popScopeId as b } from "vue";
import { ElButton as g } from "element-plus";
const t = (s) => (C("data-v-4024db9b"), s = s(), b(), s), w = { class: "" }, y = /* @__PURE__ */ t(() => /* @__PURE__ */ e("div", null, "user", -1)), S = { class: "" }, B = /* @__PURE__ */ t(() => /* @__PURE__ */ e("span", null, "姓名", -1)), E = { class: "text-red ml-8px" }, I = { class: "" }, N = /* @__PURE__ */ t(() => /* @__PURE__ */ e("span", null, "性别", -1)), V = { class: "text-blue text-20px ml-8px" }, T = { class: "" }, $ = /* @__PURE__ */ t(() => /* @__PURE__ */ e("span", null, "年龄", -1)), z = { class: "text-yellow text-20px ml-8px" }, D = { class: "" }, F = /* @__PURE__ */ t(() => /* @__PURE__ */ e("span", null, "标签", -1)), j = /* @__PURE__ */ _({
  name: "HuaTest",
  __name: "hua-test",
  props: {
    user: { default: () => ({
      name: "1234",
      extra: "extra"
    }) },
    msg: { default: "hello" },
    labels: { default: () => [] }
  },
  emits: ["userClick"],
  setup(s, { emit: r }) {
    const n = s, d = r;
    function i() {
      d("userClick", n.user, `${n.user.name} click msg = ${n.msg}`);
    }
    return (l, H) => (a(), c("div", w, [
      e("div", {
        class: "flex flex-col hua5-web-ui-test-class",
        onClick: i
      }, [
        y,
        e("div", S, [
          B,
          e("span", E, o(l.user.name), 1)
        ]),
        e("div", I, [
          N,
          e("span", V, o(l.user.sex), 1)
        ]),
        e("div", T, [
          $,
          e("span", z, o(l.user.age), 1)
        ]),
        e("div", D, [
          F,
          (a(!0), c(m, null, h(l.labels, (u, p) => (a(), c("span", {
            key: p,
            class: "text-scope-test text-20px ml-8px"
          }, o(u), 1))), 128))
        ])
      ]),
      e("div", null, [
        x(f(g), {
          size: "small",
          type: "success",
          onClick: i
        }, {
          default: k(() => [
            v("按钮测试")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
export {
  j as default
};
