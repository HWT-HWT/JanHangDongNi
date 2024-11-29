"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const NavbarTitleVue = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {
      AccountList: ["企业", "个人"]
    };
  },
  components: {
    NavbarTitleVue
  }
};
if (!Array) {
  const _component_NavbarTitleVue = common_vendor.resolveComponent("NavbarTitleVue");
  const _easycom_z_tabs2 = common_vendor.resolveComponent("z-tabs");
  (_component_NavbarTitleVue + _easycom_z_tabs2)();
}
const _easycom_z_tabs = () => "../../uni_modules/z-tabs/components/z-tabs/z-tabs.js";
if (!Math) {
  _easycom_z_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: $data.AccountList,
      ["inactive-color"]: "#d6cccc",
      ["active-color"]: "#fff",
      ["bg-color"]: "#4b7ae6",
      unit: "12rpx"
    }),
    b: common_assets._imports_0$3,
    c: common_assets._imports_1$2,
    d: common_assets._imports_0$4
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13a3a337"]]);
wx.createPage(MiniProgramPage);
