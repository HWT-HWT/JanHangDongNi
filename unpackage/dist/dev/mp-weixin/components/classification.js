"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "classification",
  data() {
    return {
      classificationOne: [
        { id: 1, name: "小薇贷款(440***4657)", active: false },
        { id: 2, name: "小贷款(440***4657)", active: false }
      ],
      classificationTow: [
        { id: 1, name: "全部", active: false },
        { id: 2, name: "支用", active: false },
        { id: 3, name: "还款", active: false }
      ],
      classificationTherr: [
        {
          id: 1,
          title: "快速筛选",
          list: [
            { id: 1, name: "本日", active: false },
            { id: 2, name: "本月", active: false },
            { id: 3, name: "三个月", active: false },
            { id: 4, name: "半年", active: false },
            { id: 5, name: "一年", active: false }
          ]
        },
        {
          id: 2,
          title: "日前筛选",
          list: [
            { id: 1, name: "本日", active: false },
            { id: 2, name: "本月", active: false },
            { id: 3, name: "三个月", active: false }
          ]
        }
      ]
    };
  },
  methods: {
    classificationBtn(id) {
      this.classificationOne.map((item) => item.active = false);
      this.classificationOne.find((item) => item.id === id).active = !this.classificationOne.find((item) => item.id === id).active;
    },
    classificationTowBtn(id) {
      this.classificationTow.map((item) => item.active = false);
      this.classificationTow.find((item) => item.id === id).active = !this.classificationTow.find((item) => item.id === id).active;
    },
    classificationTherrBtn(Fid, id) {
      this.classificationTherr[Fid].list.map((item) => item.active = false);
      this.classificationTherr[Fid].list.find((item) => item.id === id).active = !this.classificationTherr[Fid].list.find((item) => item.id === id).active;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.classificationOne, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.active
      }, item.active ? {
        c: "5553ac64-0-" + i0,
        d: common_vendor.p({
          type: "checkmarkempty",
          size: "15",
          color: "#4a79e0"
        })
      } : {}, {
        e: index,
        f: common_vendor.o(($event) => $options.classificationBtn(item.id), index)
      });
    }),
    b: common_vendor.f($data.classificationTow, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.active
      }, item.active ? {
        c: "5553ac64-1-" + i0,
        d: common_vendor.p({
          type: "checkmarkempty",
          size: "15",
          color: "#4a79e0"
        })
      } : {}, {
        e: item.id,
        f: common_vendor.o(($event) => $options.classificationTowBtn(item.id), item.id)
      });
    }),
    c: common_vendor.f($data.classificationTherr, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.f(item.list, (sum, k1, i1) => {
          return common_vendor.e({
            a: common_vendor.t(sum.name),
            b: sum.active
          }, sum.active ? {
            c: "5553ac64-2-" + i0 + "-" + i1,
            d: common_vendor.p({
              type: "checkmarkempty",
              size: "15",
              color: "#fff"
            })
          } : {}, {
            e: sum.id,
            f: common_vendor.o(($event) => $options.classificationTherrBtn(item.id - 1, sum.id), sum.id)
          });
        }),
        c: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
