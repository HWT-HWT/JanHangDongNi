"use strict";
const common_vendor = require("../../common/vendor.js");
const NavbarTitle = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {
      Inquire: ["余额", "我的申请", "明细"]
    };
  },
  components: {
    NavbarTitle
  }
};
if (!Array) {
  const _component_NavbarTitle = common_vendor.resolveComponent("NavbarTitle");
  const _easycom_z_tabs2 = common_vendor.resolveComponent("z-tabs");
  (_component_NavbarTitle + _easycom_z_tabs2)();
}
const _easycom_z_tabs = () => "../../uni_modules/z-tabs/components/z-tabs/z-tabs.js";
if (!Math) {
  _easycom_z_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: $data.Inquire,
      ["inactive-color"]: "#a8c3fb",
      ["active-color"]: "#fff",
      ["bg-color"]: "#4a79e0",
      unit: "12rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88930688"], ["__file", "D:/uniapp/建行惠懂你/pages/loan/loan.vue"]]);
wx.createPage(MiniProgramPage);
