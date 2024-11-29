"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const uinput = () => "../../components/poiuy-uinput/uinput.js";
const _sfc_main = {
  data() {
    return {
      phone: "",
      pasw: "",
      yzm: "",
      Ischeckbox: false,
      ActiveBtn: true
    };
  },
  methods: {
    NavTo() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    },
    acBtn() {
      if (this.phone.length >= 11 && this.pasw.length >= 6 && this.Ischeckbox === true) {
        this.ActiveBtn = false;
      } else {
        this.ActiveBtn = true;
      }
    },
    login() {
      if (this.phone == "19867945909" && this.pasw == "abc123456789") {
        if (this.yzm == "2510") {
          common_vendor.index.setStorageSync("account", { phone: this.phone, pasw: this.pasw });
          common_vendor.index.getStorageSync("account");
          common_vendor.index.showToast({
            title: "登录成功",
            duration: 3e3,
            icon: "none"
          }), common_vendor.index.reLaunch({
            url: "/pages/index/index"
          });
        } else {
          common_vendor.index.showToast({
            title: "未填写验证码或验证码错误",
            duration: 3e3,
            icon: "error"
          });
        }
      } else {
        common_vendor.index.showToast({
          title: "账户密码不正确",
          duration: 3e3,
          icon: "error"
        });
      }
    },
    checkboxBtn(Ischeckbox) {
      this.Ischeckbox = !Ischeckbox;
    }
  },
  watch: {
    phone() {
      this.acBtn();
    },
    pasw() {
      this.acBtn();
    },
    yzm(value) {
      this.acBtn();
    },
    Ischeckbox(value) {
      this.acBtn();
    }
  },
  components: {
    uinput
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0$5,
    b: common_vendor.o((...args) => $options.NavTo && $options.NavTo(...args)),
    c: common_assets._imports_1$4,
    d: $data.phone,
    e: common_vendor.o(($event) => $data.phone = $event.detail.value),
    f: common_assets._imports_2$3,
    g: $data.pasw,
    h: common_vendor.o(($event) => $data.pasw = $event.detail.value),
    i: $data.yzm,
    j: common_vendor.o(($event) => $data.yzm = $event.detail.value),
    k: common_vendor.o(($event) => $options.checkboxBtn($data.Ischeckbox)),
    l: $data.Ischeckbox,
    m: $data.ActiveBtn
  }, $data.ActiveBtn ? {} : {
    n: common_vendor.o((...args) => $options.login && $options.login(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
