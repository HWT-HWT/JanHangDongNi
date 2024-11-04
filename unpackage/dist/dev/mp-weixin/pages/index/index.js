"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const NavbarTitle = () => "../../components/NavbarTitle.js";
const navTab = () => "../../components/navTab.js";
const loan = () => "../../components/loan.js";
const Strategy = () => "../../components/Strategy.js";
const _sfc_main = {
  data() {
    return {
      operationBar: ["我要贷款", "我要测额", "我要支用", "我要还款", "我要提额", "我要续费", "贷款查询", "我的账户", "我要开户", "更多"],
      list: ["我是小微企业", "我是个人企业", "我是科创企业", "我是农户", "我是村集体", "我是进出口企业", "全部产品"],
      loanList: [
        { name: "信用快贷", title: "纯信用 无抵押", money: "3,000,000", percentage: "3.6%" },
        { name: "抵押快贷", title: "便捷快速", money: "3,000,000", percentage: "3.0%" },
        { name: "质押快贷", title: "全流程线上办理", money: "3,000,000", percentage: "3.10%" },
        { name: "平台快贷", title: "数据增信", money: "3,000,000", percentage: "3.85%" }
      ],
      Strategy: ["看视频", "读攻略"]
    };
  },
  components: {
    NavbarTitle,
    navTab,
    loan,
    Strategy
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_z_tabs2 = common_vendor.resolveComponent("z-tabs");
  const _component_loan = common_vendor.resolveComponent("loan");
  const _component_Strategy = common_vendor.resolveComponent("Strategy");
  (_easycom_uni_search_bar2 + _easycom_z_tabs2 + _component_loan + _component_Strategy)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_z_tabs = () => "../../uni_modules/z-tabs/components/z-tabs/z-tabs.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_z_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.p({
      radius: "5",
      placeholder: "代发工资",
      clearButton: "always",
      cancelButton: "none",
      bgColor: "#000"
    }),
    c: common_vendor.f(4, (item, index, i0) => {
      return {
        a: `../../static/ioc/title/title_${index + 1}.png`,
        b: index
      };
    }),
    d: common_assets._imports_1,
    e: common_vendor.f(10, (item, index, i0) => {
      return {
        a: `../../static/ioc/bar/iocn_${index + 1}.png`,
        b: common_vendor.t($data.operationBar[index]),
        c: item
      };
    }),
    f: common_assets._imports_2,
    g: common_vendor.f(6, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    h: common_assets._imports_3,
    i: common_vendor.p({
      list: $data.list,
      ["inactive-color"]: "#6f6f6f",
      ["active-color"]: "#000",
      unit: "12rpx"
    }),
    j: common_vendor.f($data.loanList, (item, index, i0) => {
      return {
        a: index,
        b: "1cf27b2a-2-" + i0,
        c: common_vendor.p({
          list: item
        })
      };
    }),
    k: common_vendor.p({
      list: $data.Strategy,
      ["inactive-color"]: "#6f6f6f",
      ["active-color"]: "#000",
      unit: "12rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
