"use strict";
const common_vendor = require("../../common/vendor.js");
const NavbarTitle = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {
      cancel: "123"
    };
  },
  components: {
    NavbarTitle
    // 注册组件  
  },
  methods: {
    search() {
      console.log(123);
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.o($data.cancel),
    c: common_vendor.p({
      radius: "5",
      placeholder: "代发工资",
      clearButton: "always",
      cancelButton: "none",
      bgColor: "#000"
    }),
    d: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: item
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/建行惠懂你/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
