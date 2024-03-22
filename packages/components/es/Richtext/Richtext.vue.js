import { defineComponent as _, inject as f, ref as s, computed as h, openBlock as v, createElementBlock as x, createElementVNode as V } from "vue";
import { formItemContextKey as g } from "element-plus";
const R = { class: "gie-richtext" }, k = ["innerHTML"], L = /* @__PURE__ */ _({
  name: "GieRichtext",
  __name: "Richtext",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: r }) {
    const t = f(g), u = r, o = i, c = s(o.modelValue || ""), a = h({
      get: () => o.modelValue,
      set: (e) => {
        u("update:modelValue", e);
      }
    }), l = s(), d = () => {
      var e, n;
      a.value = ((e = l.value) == null ? void 0 : e.innerHTML) || "", (n = t.validate) == null || n.call(t, "change").catch((p) => console.warn(p));
    }, m = () => {
      var e;
      c.value = a.value, (e = t.validate) == null || e.call(t, "blur").catch((n) => console.warn(n));
    };
    return (e, n) => (v(), x("div", R, [
      V("div", {
        ref_key: "contentRef",
        ref: l,
        innerHTML: c.value,
        contenteditable: "true",
        onInput: d,
        onBlur: m,
        class: "gie-richtext__control"
      }, null, 40, k)
    ]));
  }
});
export {
  L as default
};
