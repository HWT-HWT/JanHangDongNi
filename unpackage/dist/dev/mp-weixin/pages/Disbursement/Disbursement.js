"use strict";
const common_vendor = require("../../common/vendor.js");
const NavbarTitleVue = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {
      DetailsDay: ""
    };
  },
  components: {
    NavbarTitleVue
  },
  created() {
    this.DetailsDay = common_vendor.wx$1.getStorageSync("DetailsDay");
    console.log(this.DetailsDay.data);
  }
};
if (!Array) {
  const _component_NavbarTitleVue = common_vendor.resolveComponent("NavbarTitleVue");
  _component_NavbarTitleVue();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.DetailsDay.name),
    b: common_vendor.t($data.DetailsDay.money),
    c: !$data.DetailsDay.istrue
  }, !$data.DetailsDay.istrue ? {
    d: common_vendor.t($data.DetailsDay.money)
  } : {}, {
    e: common_vendor.f($data.DetailsDay.list, (index, vlaue, i0) => {
      return {
        a: common_vendor.t(vlaue),
        b: common_vendor.t(index)
      };
    }),
    f: _ctx.item
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
