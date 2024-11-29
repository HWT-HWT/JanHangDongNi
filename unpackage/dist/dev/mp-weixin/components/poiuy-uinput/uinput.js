"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "uInput",
  props: {
    name: {
      String
    },
    onlyInput: {
      type: Boolean,
      default: false
    },
    inputBorder: {
      //输入框边线 默认全边线 可选参数 bottom | all | none
      type: String,
      default: "all"
    },
    inputStyle: {
      type: String
    },
    borderAnimation: {
      //输入框边线 入场动画 可选参数 left | center | right | none
      type: String,
      default: "left"
    },
    mustFill: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "输入框"
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    placeholder: {
      type: String,
      default: null
    },
    maxlength: {
      type: Number,
      default: 70
    },
    value: {
      default: ""
    },
    codeText: {
      type: String,
      default: "获取验证码"
    },
    countDown: {
      type: Number,
      default: 60
    },
    send: {
      type: Boolean,
      default: false
    },
    tlposition: {
      type: String,
      default: "top"
    },
    height: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mobile: /^(13[0-9]|14[4579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/,
      email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      identity_card: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/,
      tipMsg: "",
      error: null,
      data: this.value,
      codetext: this.codeText,
      currCountDown: this.countDown,
      interval: false
    };
  },
  created() {
    if (this.value) {
      this.data = this.value;
    }
    if (this.codeText) {
      this.codetext = this.codeText;
    }
    if (this.countDown) {
      this.currCountDown = this.countDown;
    }
  },
  watch: {
    value(newV, oldV) {
      this.data = newV;
    }
  },
  methods: {
    input_blur(e) {
      if (this.mustFill) {
        if (e.detail.value || e.currentTarget.value) {
          this.error = false;
          let input = e.detail.value || e.currentTarget.value;
          if (this.type == "tel") {
            if (!this.mobile.test(input)) {
              this.tipMsg = "手机号格式不正确";
              this.error = true;
            } else {
              this.error = false;
            }
          }
          if (this.type == "email") {
            if (!this.email.test(input)) {
              this.tipMsg = "邮箱格式不正确";
              this.error = true;
            } else {
              this.error = false;
            }
          }
          if (this.type == "idcard") {
            if (!this.identity_card.test(input)) {
              this.tipMsg = "身份证格式不正确";
              this.error = true;
            } else {
              this.error = false;
            }
          }
          if (this.type == "bankcard") {
            if (input.length < 16 || input.length > 19) {
              this.tipMsg = "银行卡号长度为16位~19位";
              this.error = true;
            } else {
              this.error = false;
            }
          }
        } else {
          this.tipMsg = this.placeholder || "";
          this.error = true;
        }
        this.$emit("getValue", {
          el: e,
          value: e.detail.value || e.currentTarget.value,
          status: !this.error
        });
      } else {
        this.$emit("getValue", {
          el: e,
          value: e.detail.value || e.currentTarget.value
        });
      }
    },
    input(e) {
      this.$emit("input", e.target.value);
    },
    getFocus(e) {
      this.$emit("focus", {
        el: e,
        value: e.target.value
      });
    },
    getCode() {
      if (this.send) {
        if (this.currCountDown == this.countDown && this.interval == false) {
          this.interval = true;
          this.countDownFun();
          this.$emit("counting", null);
        }
      }
    },
    countDownFun() {
      const _this = this;
      let timer = setInterval(function() {
        if (_this.currCountDown <= 0) {
          _this.codetext = _this.codeText;
          _this.currCountDown = _this.countDown;
          _this.interval = false;
          clearInterval(timer);
          return;
        } else {
          _this.interval = true;
          _this.codetext = "重新获取(" + _this.currCountDown + ")";
          _this.currCountDown--;
        }
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.onlyInput && $props.type != "textarea"
  }, !$props.onlyInput && $props.type != "textarea" ? common_vendor.e({
    b: common_vendor.t($props.label),
    c: common_vendor.n($props.labelPosition == "right" ? "txt-r" : $props.labelPosition == "left" ? "txt-l" : $props.labelPosition == "center" ? "txt-c" : $props.labelPosition == "top" ? "txt-top" : ""),
    d: $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "all"
  }, $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "all" ? {
    e: common_vendor.s($props.inputStyle),
    f: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    g: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    h: $props.name,
    i: $props.type == "text" ? "text" : $props.type || "text",
    j: $props.disabled,
    k: $props.placeholder,
    l: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    m: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength,
    n: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    o: $data.data
  } : {}, {
    p: $props.type == "tel" && $props.inputBorder == "all"
  }, $props.type == "tel" && $props.inputBorder == "all" ? {
    q: $props.inputStyle,
    r: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    s: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    t: $props.name,
    v: $props.disabled,
    w: $props.placeholder,
    x: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    y: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    z: $data.data
  } : {}, {
    A: $props.inputBorder == "bottom"
  }, $props.inputBorder == "bottom" ? common_vendor.e({
    B: $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "bottom"
  }, $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "bottom" ? {
    C: common_vendor.s($props.inputStyle),
    D: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    E: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    F: $props.name,
    G: $props.type == "text" ? "text" : $props.type || "text",
    H: $props.disabled,
    I: $props.placeholder,
    J: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    K: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength,
    L: common_vendor.n($data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""),
    M: $data.data
  } : {}, {
    N: $props.type == "tel" && $props.inputBorder == "bottom"
  }, $props.type == "tel" && $props.inputBorder == "bottom" ? {
    O: common_vendor.s($props.inputStyle),
    P: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    Q: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    R: $props.name,
    S: $props.disabled,
    T: $props.placeholder,
    U: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    V: common_vendor.n($data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""),
    W: $data.data
  } : {}, {
    X: common_vendor.n($props.borderAnimation == "left" ? "ani-left" : $props.borderAnimation == "center" ? "ani-center" : $props.borderAnimation == "right" ? "ani-right" : "")
  }) : {}, {
    Y: $props.type == "msgcode" && $props.inputBorder == "all"
  }, $props.type == "msgcode" && $props.inputBorder == "all" ? {
    Z: common_vendor.o((...args) => $options.input && $options.input(...args)),
    aa: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    ab: $props.name,
    ac: $props.disabled,
    ad: $props.placeholder,
    ae: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    af: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    ag: common_vendor.t($data.codetext),
    ah: common_vendor.o((...args) => $options.getCode && $options.getCode(...args)),
    ai: common_vendor.n($data.interval ? "disabled" : "")
  } : {}, {
    aj: common_vendor.t($data.tipMsg),
    ak: $data.error && $props.mustFill,
    al: common_vendor.n($props.labelPosition == "top" ? "w-100" : ""),
    am: common_vendor.n($props.labelPosition == "top" ? "" : "flex_y_center")
  }) : {}, {
    an: $props.onlyInput && $props.type != "textarea"
  }, $props.onlyInput && $props.type != "textarea" ? common_vendor.e({
    ao: $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "all"
  }, $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "all" ? {
    ap: common_vendor.s($props.inputStyle),
    aq: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    ar: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    as: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    at: $props.name,
    av: $props.disabled,
    aw: $props.type == "text" ? "text" : $props.type || "text",
    ax: $props.placeholder,
    ay: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength,
    az: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    aA: $data.data
  } : {}, {
    aB: $props.type == "tel" && $props.inputBorder == "all"
  }, $props.type == "tel" && $props.inputBorder == "all" ? {
    aC: common_vendor.s($props.inputStyle),
    aD: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    aE: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    aF: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    aG: $props.name,
    aH: $props.disabled,
    aI: $props.type == "text" ? "text" : $props.type || "text",
    aJ: $props.placeholder,
    aK: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    aL: $data.data
  } : {}, {
    aM: $props.inputBorder == "bottom"
  }, $props.inputBorder == "bottom" ? common_vendor.e({
    aN: $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "bottom"
  }, $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "bottom" ? {
    aO: common_vendor.s($props.inputStyle),
    aP: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    aQ: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    aR: $props.name,
    aS: $props.type == "text" ? "text" : $props.type || "text",
    aT: $props.disabled,
    aU: $props.placeholder,
    aV: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    aW: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength,
    aX: common_vendor.n($data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""),
    aY: $data.data
  } : {}, {
    aZ: $props.type == "tel" && $props.inputBorder == "bottom"
  }, $props.type == "tel" && $props.inputBorder == "bottom" ? {
    ba: common_vendor.s($props.inputStyle),
    bb: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    bc: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    bd: $props.name,
    be: $props.disabled,
    bf: $props.placeholder,
    bg: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    bh: common_vendor.n($data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""),
    bi: $data.data
  } : {}, {
    bj: common_vendor.n($props.borderAnimation == "left" ? "ani-left" : $props.borderAnimation == "center" ? "ani-center" : $props.borderAnimation == "right" ? "ani-right" : "")
  }) : {}, {
    bk: $props.type == "msgcode" && $props.inputBorder == "all"
  }, $props.type == "msgcode" && $props.inputBorder == "all" ? {
    bl: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    bm: common_vendor.o((...args) => $options.input && $options.input(...args)),
    bn: $props.name,
    bo: $props.disabled,
    bp: $props.placeholder,
    bq: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    br: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    bs: common_vendor.t($data.codetext),
    bt: common_vendor.o((...args) => $options.getCode && $options.getCode(...args)),
    bv: common_vendor.n($data.interval ? "disabled" : "")
  } : {}, {
    bw: common_vendor.t($data.tipMsg),
    bx: $data.error && $props.mustFill
  }) : {}, {
    by: $props.type == "textarea" && $props.tlposition != "none" && $props.inputBorder == "all"
  }, $props.type == "textarea" && $props.tlposition != "none" && $props.inputBorder == "all" ? common_vendor.e({
    bz: common_vendor.t($props.label),
    bA: common_vendor.n($props.labelPosition == "right" ? "txt-r" : $props.labelPosition == "left" ? "txt-l" : $props.labelPosition == "center" ? "txt-c" : $props.labelPosition == "top" ? "txt-top" : ""),
    bB: $props.type == "textarea"
  }, $props.type == "textarea" ? {
    bC: $props.height + "upx",
    bD: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    bE: $props.name,
    bF: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    bG: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    bH: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    bI: $props.maxlength,
    bJ: $props.placeholder,
    bK: $data.data
  } : {}, {
    bL: common_vendor.t($data.tipMsg),
    bM: $data.error && $props.mustFill,
    bN: common_vendor.n($props.labelPosition == "top" ? "w-100" : ""),
    bO: common_vendor.n($props.labelPosition == "top" ? "" : $props.tlposition == "top" ? "flex_y_start" : $props.tlposition == "center" ? "flex_y_center" : $props.tlposition == "bottom" ? "flex_y_end" : "")
  }) : {}, {
    bP: $props.type == "textarea" && $props.tlposition == "none" && $props.inputBorder == "all"
  }, $props.type == "textarea" && $props.tlposition == "none" && $props.inputBorder == "all" ? common_vendor.e({
    bQ: $props.type == "textarea"
  }, $props.type == "textarea" ? {
    bR: $props.height + "upx",
    bS: common_vendor.n($data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""),
    bT: $props.name,
    bU: common_vendor.o((...args) => $options.input_blur && $options.input_blur(...args)),
    bV: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    bW: common_vendor.o([($event) => $data.data = $event.detail.value, (...args) => $options.input && $options.input(...args)]),
    bX: $props.maxlength,
    bY: $props.placeholder,
    bZ: $data.data
  } : {}, {
    ca: common_vendor.t($data.tipMsg),
    cb: $data.error && $props.mustFill
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-37a7e74b"]]);
wx.createComponent(Component);
