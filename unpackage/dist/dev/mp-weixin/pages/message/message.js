"use strict";
const common_vendor = require("../../common/vendor.js");
const NavTab = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    NavTab
  }
};
if (!Array) {
  const _component_NavTab = common_vendor.resolveComponent("NavTab");
  _component_NavTab();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4c1b26cf"]]);
wx.createPage(MiniProgramPage);
