"use strict";
const common_vendor = require("../../common/vendor.js");
const components_login = require("../../components/login.js");
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
      ],
      IsLogin: ""
    };
  },
  components: {
    MyList
  },
  onLoad() {
    this.IsLogin = common_vendor.index.getStorageSync("account");
    console.log(this.IsLogin);
  },
  methods: {
    open() {
      console.log(this.$refs.popup.open("bottom"));
    },
    close() {
      this.$refs.popup.close();
    },
    account() {
      components_login.gologin("/pages/MyAccount/MyAccount");
    },
    Gologin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    quit() {
      console.log(123);
      common_vendor.index.removeStorageSync("account");
      components_login.gologin("");
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
  return common_vendor.e({
    a: !$data.IsLogin
  }, !$data.IsLogin ? {
    b: common_assets._imports_0$1,
    c: common_vendor.o((...args) => $options.Gologin && $options.Gologin(...args))
  } : {
    d: common_assets._imports_1$1
  }, {
    e: common_assets._imports_2$1,
    f: common_vendor.o((...args) => $options.quit && $options.quit(...args)),
    g: !$data.IsLogin
  }, !$data.IsLogin ? {
    h: common_assets._imports_3$1,
    i: common_vendor.o((...args) => $options.Gologin && $options.Gologin(...args))
  } : {
    j: common_assets._imports_3$1
  }, {
    k: common_vendor.o($options.open),
    l: common_vendor.p({
      MyList: $data.MyList
    }),
    m: common_assets._imports_4,
    n: common_vendor.o(($event) => $options.close()),
    o: common_vendor.o(($event) => $options.account()),
    p: common_assets._imports_5,
    q: common_vendor.sr("popup", "2f1ef635-1"),
    r: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
