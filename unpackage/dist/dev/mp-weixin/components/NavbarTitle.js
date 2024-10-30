"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    chang() {
      common_vendor.index.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.chang())
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3dce3942"], ["__file", "D:/uniapp/建行惠懂你/components/NavbarTitle.vue"]]);
wx.createComponent(Component);
