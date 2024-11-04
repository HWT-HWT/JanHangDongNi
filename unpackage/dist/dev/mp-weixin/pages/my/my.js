"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const MyList = () => "../../components/My.js";
const _sfc_main = {
  data() {
    return {
      MyList: [
        {
          ioc: "../static/myiocn/ic_qy.png",
          name: "我的企业",
          NvaGo: 1
        },
        {
          ioc: "../static/myiocn/ic_ce.png",
          name: "我的测额"
        },
        {
          ioc: "../static/myiocn/iocn_8.png",
          name: "我的账户",
          NvaGo: 2
        },
        {
          ioc: "../static/myiocn/ic_home_ic_zncf.png",
          name: "我的贷款",
          NvaGo: 3
        },
        {
          ioc: "../static/myiocn/ic_us.png",
          name: "关于我们"
        }
      ]
    };
  },
  components: {
    MyList
  },
  methods: {
    open() {
      console.log(this.$refs.popup.open("bottom"));
    },
    close() {
      this.$refs.popup.close();
    },
    account() {
      common_vendor.index.navigateTo({
        url: "/pages/MyAccount/MyAccount"
      });
    }
  }
};
if (!Array) {
  const _component_MyList = common_vendor.resolveComponent("MyList");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_MyList + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_assets._imports_1$1,
    c: common_assets._imports_2$1,
    d: common_vendor.o($options.open),
    e: common_vendor.p({
      MyList: $data.MyList
    }),
    f: common_assets._imports_3$1,
    g: common_vendor.o(($event) => $options.close()),
    h: common_vendor.o(($event) => $options.account()),
    i: common_assets._imports_4,
    j: common_vendor.sr("popup", "2f1ef635-1"),
    k: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
