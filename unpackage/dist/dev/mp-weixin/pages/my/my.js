"use strict";
const common_vendor = require("../../common/vendor.js");
const NavbarTitle = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    NavbarTitle
    // 注册组件  
  }
};
if (!Array) {
  const _component_NavbarTitle = common_vendor.resolveComponent("NavbarTitle");
  _component_NavbarTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/建行惠懂你/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
