"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "loan",
  data() {
    return {};
  },
  props: {
    list: [Array, Object]
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.list.name),
    b: common_vendor.t($props.list.title),
    c: common_vendor.t($props.list.money),
    d: common_vendor.t($props.list.percentage)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6146b754"]]);
wx.createComponent(Component);
