import { defineComponent as i, computed as f, ref as r, openBlock as c, createElementBlock as V, createVNode as _, unref as b } from "vue";
import { ElInput as v } from "element-plus";
const x = { class: "gie-input" }, B = /* @__PURE__ */ i({
  name: "GieInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { expose: n, emit: d }) {
    const s = d, t = a, o = f({
      get: () => t.modelValue,
      set: (e) => {
        s("update:modelValue", e);
      }
    }), l = r();
    function p() {
      var e;
      (e = l.value) == null || e.focus();
    }
    return n({
      focus: p
    }), (e, u) => (c(), V("div", x, [
      _(b(v), {
        modelValue: o.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => o.value = m),
        ref_key: "inputRef",
        ref: l,
        type: "text",
        disabled: t.disabled
      }, null, 8, ["modelValue", "disabled"])
    ]));
  }
});
export {
  B as default
};
