import { defineComponent as _, openBlock as n, createElementBlock as o, createElementVNode as e, toDisplayString as t, Fragment as p, renderList as m, createVNode as x, unref as h, withCtx as f, createTextVNode as k } from "vue";
import { ElButton as g } from "element-plus";
const v = { class: "" }, C = /* @__PURE__ */ e("div", null, "user", -1), y = { class: "" }, b = /* @__PURE__ */ e("span", null, "姓名", -1), B = { class: "text-red ml-8px" }, E = { class: "" }, N = /* @__PURE__ */ e("span", null, "性别", -1), V = { class: "text-blue text-20px ml-8px" }, w = { class: "" }, T = /* @__PURE__ */ e("span", null, "年龄", -1), $ = { class: "text-yellow text-20px ml-8px" }, z = { class: "" }, D = /* @__PURE__ */ e("span", null, "标签", -1), S = /* @__PURE__ */ _({
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
  setup(c, { emit: i }) {
    const l = c, r = i;
    function a() {
      r("userClick", l.user, `${l.user.name} click msg = ${l.msg}`);
    }
    return (s, F) => (n(), o("div", v, [
      e("div", {
        class: "flex flex-col bg-gray",
        onClick: a
      }, [
        C,
        e("div", y, [
          b,
          e("span", B, t(s.user.name), 1)
        ]),
        e("div", E, [
          N,
          e("span", V, t(s.user.sex), 1)
        ]),
        e("div", w, [
          T,
          e("span", $, t(s.user.age), 1)
        ]),
        e("div", z, [
          D,
          (n(!0), o(p, null, m(s.labels, (u, d) => (n(), o("span", {
            key: d,
            class: "text-pink text-20px ml-8px"
          }, t(u), 1))), 128))
        ])
      ]),
      e("div", null, [
        x(h(g), {
          size: "small",
          type: "success",
          onClick: a
        }, {
          default: f(() => [
            k("按钮测试")
          ]),
          _: 1
        })
      ])
    ]));
  }
});
export {
  S as default
};
