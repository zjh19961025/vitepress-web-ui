import { defineComponent as c, computed as p, ref as f, openBlock as x, createElementBlock as _, createVNode as v, unref as b, createElementVNode as t } from "vue";
import { ElInput as y } from "element-plus";
const V = { class: "" }, g = /* @__PURE__ */ t("div", { class: "text-red bg-blue" }, [
  /* @__PURE__ */ t("div", null, "1"),
  /* @__PURE__ */ t("div", { class: "text-yellow" }, "2"),
  /* @__PURE__ */ t("div", { class: "text-gray" }, "hello")
], -1), B = /* @__PURE__ */ c({
  name: "HuaTest",
  __name: "hua-test",
  props: {
    user: { default: () => ({
      name: "123",
      extra: "extra"
    }) },
    msg: { default: "123" },
    labels: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:user", "test"],
  setup(u, { expose: n, emit: d }) {
    const s = u, r = d, l = p({
      get: () => s.user,
      set: (e) => {
        r("update:user", e, "hello");
      }
    }), a = f();
    function i() {
      var e;
      (e = a.value) == null || e.focus();
    }
    return n({
      focus: i
    }), (e, o) => (x(), _("div", V, [
      g,
      v(b(y), {
        modelValue: l.value.name,
        "onUpdate:modelValue": o[0] || (o[0] = (m) => l.value.name = m),
        ref_key: "inputRef",
        ref: a,
        type: "text",
        disabled: s.disabled
      }, null, 8, ["modelValue", "disabled"])
    ]));
  }
});
export {
  B as default
};
