"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const NavbarTitle = () => "../../components/NavbarTitle.js";
const _sfc_main = {
  data() {
    return {
      Inquire: ["余额", "我的申请", "明细"],
      index: true,
      DetailsDay: [
        {
          data: "2024/10/21",
          money: "2,030.00",
          name: "还款",
          week: "星期一",
          list: {
            "还款时间": "2024/10/21 15:17:03",
            "贷款种类": "个人经营抵押贷款",
            "凭证号": "1081970011724224622779879",
            "贷款账号": "4400***9724",
            "还款账号": ""
          }
        },
        {
          data: "2024/09/21 ",
          money: "2,030.00",
          name: "还款",
          week: "星期六",
          list: {
            "还款时间": "2024/09/21 15:17:03",
            "贷款种类": "个人经营抵押贷款",
            "凭证号": "1081970011724224622779879",
            "贷款账号": "4400***9724",
            "还款账号": ""
          }
        },
        {
          data: "2024/08/21 ",
          money: "2,030.00",
          name: "还款",
          week: "星期三",
          list: {
            "还款时间": "2024/08/21 15:17:03",
            "贷款种类": "个人经营抵押贷款",
            "凭证号": "1081970011724224622779879",
            "贷款账号": "4400***9724",
            "还款账号": "2617003320107801311"
          }
        },
        {
          data: "2024/07/24 ",
          money: "700,000.00",
          name: "支用",
          week: "星期三",
          list: {
            "支用时间": "2024/10/21 09:33:10",
            "贷款种类": "个人经营抵押贷款",
            "凭证号": "102008P051721784790059246",
            "贷款账号": "4400***9724"
          },
          istrue: true
        }
      ]
    };
  },
  components: {
    NavbarTitle
  },
  methods: {
    secondClick(index) {
      index === 2 ? this.index = false : this.index = true;
    },
    Disbursement(item) {
      common_vendor.wx$1.clearStorageSync();
      common_vendor.wx$1.setStorageSync("DetailsDay", item);
      common_vendor.index.navigateTo({
        url: "/pages/Disbursement/Disbursement"
      });
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
        b: common_vendor.t(item.week),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.money),
        e: item,
        f: common_vendor.o(($event) => $options.Disbursement(item), item)
      };
    }),
    e: common_assets._imports_0$4,
    f: common_assets._imports_0$2
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-88930688"]]);
wx.createPage(MiniProgramPage);
