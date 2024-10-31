"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "My",
  data() {
    return {};
  },
  props: {
    MyList: {
      type: [Array, Object]
    }
  },
  methods: {
    change(id) {
      id === 1 ? common_vendor.index.navigateTo({ url: "/pages/Enterprise/Enterprise" }) : "";
      id === 2 ? this.$emit("open") : "";
      id === 3 ? common_vendor.index.navigateTo({ url: "/pages/loan/loan" }) : "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.MyList, (item, index, i0) => {
      return {
        a: item.ioc,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.change(item.NvaGo), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e0d8f88"], ["__file", "D:/uniapp/建行惠懂你/components/My.vue"]]);
wx.createComponent(Component);
