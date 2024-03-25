import { ref as n, watch as a } from "vue";
const u = function(o) {
  const e = n("");
  return a(o, (t) => {
    console.log("newval", t.name), e.value = t.name;
  }, { immediate: !0 }), {
    testVlaue: e
  };
};
export {
  u as useHuaTest
};
