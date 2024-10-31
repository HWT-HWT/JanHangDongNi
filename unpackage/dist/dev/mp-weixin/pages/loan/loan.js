"use strict";
const common_vendor = require("../../common/vendor.js");
const NavbarTitle = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {
      Inquire: ["余额", "我的申请", "明细"],
      index: true,
      DetailsDay: [
        { data: "2024/08/21 星期三", money: "2,030.00" },
        { data: "2024/09/21 星期六", money: "2,030.00" },
        { data: "2024/10/21 星期一", money: "2,030.00" }
      ]
    };
  },
  components: {
    NavbarTitle
  },
  methods: {
    secondClick(index) {
      index === 2 ? this.index = false : this.index = true;
    }
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
  return common_vendor.e({
    a: common_vendor.o($options.secondClick),
    b: common_vendor.p({
      list: $data.Inquire,
      ["inactive-color"]: "#a8c3fb",
      ["active-color"]: "#fff",
      ["bg-color"]: "#4a79e0",
      unit: "12rpx"
    }),
    c: $data.index
  }, $data.index ? {} : {
    d: common_vendor.f($data.DetailsDay, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.data),
        b: common_vendor.t(item.money),
        c: item
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88930688"], ["__file", "D:/uniapp/建行惠懂你/pages/loan/loan.vue"]]);
wx.createPage(MiniProgramPage);
