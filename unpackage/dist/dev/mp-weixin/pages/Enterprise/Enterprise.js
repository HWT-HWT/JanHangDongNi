"use strict";
const common_vendor = require("../../common/vendor.js");
const NavTab = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    NavTab
  },
  methods: {
    change() {
      common_vendor.index.navigateTo({
        url: "/pages/message/message"
      });
    }
  }
};
if (!Array) {
  const _component_NavTab = common_vendor.resolveComponent("NavTab");
  _component_NavTab();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.change()),
    b: common_vendor.f(4, (item, k0, i0) => {
      return {
        a: item
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/建行惠懂你/pages/Enterprise/Enterprise.vue"]]);
wx.createPage(MiniProgramPage);
