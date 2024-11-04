"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "navTab",
  props: {
    tabTitle: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      tabClick: 0,
      //导航栏被点击
      isLeft: 0,
      //导航栏下划线位置
      isWidth: 0,
      //每个导航栏占位
      tabLeft: 0
    };
  },
  created() {
    var that = this;
    common_vendor.index.getSystemInfo({
      success(e) {
        if (that.tabTitle.length <= 5) {
          that.isWidth = e.windowWidth / that.tabTitle.length;
        } else {
          that.isWidth = e.windowWidth / 5;
        }
      }
    });
  },
  methods: {
    // 导航栏点击
    longClick(index) {
      if (this.tabTitle.length > 5) {
        this.tabLeft = (index - 2) * this.isWidth;
      }
      this.tabClick = index;
      this.isLeft = index * this.isWidth;
      this.$emit("changeTab", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.tabTitle, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.n(index === $data.tabClick ? "click" : ""),
        d: index,
        e: "id" + index,
        f: common_vendor.o(($event) => $options.longClick(index), index)
      };
    }),
    b: common_vendor.s("width:" + $data.isWidth + "px"),
    c: common_vendor.s("transform:translateX(" + $data.isLeft + "px);width:" + $data.isWidth + "px"),
    d: $data.tabLeft
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d8ce7dbc"]]);
wx.createComponent(Component);
