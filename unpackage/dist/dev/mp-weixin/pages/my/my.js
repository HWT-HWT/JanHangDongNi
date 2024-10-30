"use strict";
const common_vendor = require("../../common/vendor.js");
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
  }
};
if (!Array) {
  const _component_MyList = common_vendor.resolveComponent("MyList");
  _component_MyList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      MyList: $data.MyList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"], ["__file", "D:/uniapp/建行惠懂你/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
