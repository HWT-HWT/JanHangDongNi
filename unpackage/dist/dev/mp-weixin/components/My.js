"use strict";
const common_vendor = require("../common/vendor.js");
const components_login = require("./login.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "My",
  data() {
    return {};
  },
  props: {
    MyList: {
      type: [Array, Object]
    }
  },
  methods: {
    change(id) {
      id === 1 ? components_login.gologin("/pages/Enterprise/Enterprise") : "";
      if (common_vendor.index.getStorageSync("account")) {
        id === 2 ? this.$emit("open") : "";
      }
      id === 3 ? components_login.gologin("/pages/loan/loan") : "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.MyList, (item, index, i0) => {
      return {
        a: item.ioc,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.change(item.NvaGo), index)
      };
    }),
    b: common_assets._imports_0$4
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e0d8f88"]]);
wx.createComponent(Component);
