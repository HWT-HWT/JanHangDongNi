"use strict";
const common_vendor = require("../common/vendor.js");
function gologin(url) {
  const hasAccount = common_vendor.index.getStorageSync("account");
  if (hasAccount) {
    common_vendor.index.navigateTo({
      url
    });
  } else {
    common_vendor.index.navigateTo({
      url: "/pages/login/login"
    });
  }
}
exports.gologin = gologin;
