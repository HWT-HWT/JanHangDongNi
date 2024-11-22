if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _e, _f, _g, _h;
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$k = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return code2.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$j = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const zTabsConfig = {};
  function _gc(key, defaultValue) {
    let config = null;
    if (zTabsConfig && Object.keys(zTabsConfig).length) {
      config = zTabsConfig;
    } else {
      return defaultValue;
    }
    const value = config[_toKebab(key)];
    return value === void 0 ? defaultValue : value;
  }
  function _toKebab(value) {
    return value.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  function rpx2px(rpx) {
    return uni.upx2px(rpx);
  }
  const _sfc_main$i = {
    name: "z-tabs",
    data() {
      return {
        currentIndex: 0,
        currentSwiperIndex: 0,
        bottomDotX: -1,
        bottomDotXForIndex: 0,
        showBottomDot: false,
        shouldSetDx: true,
        barCalcedWidth: 0,
        pxBarWidth: 0,
        scrollLeft: 0,
        tabsSuperWidth: rpx2px(750),
        tabsWidth: rpx2px(750),
        tabsHeight: rpx2px(80),
        tabsLeft: 0,
        tabsContainerWidth: 0,
        itemNodeInfos: [],
        isFirstLoaded: false,
        currentScrollLeft: 0,
        changeTriggerFailed: false,
        currentChanged: false
      };
    },
    props: {
      //数据源数组，支持形如['tab1','tab2']的格式或[{name:'tab1',value:1}]的格式
      list: {
        type: Array,
        default: function() {
          return [];
        }
      },
      //当前选中的index
      current: {
        type: [Number, String],
        default: _gc("current", 0)
      },
      //list数组长度超过scrollCount时滚动显示(不自动铺满全屏)
      scrollCount: {
        type: [Number, String],
        default: _gc("scrollCount", 5)
      },
      //z-tabs样式
      tabsStyle: {
        type: Object,
        default: function() {
          return _gc("tabsStyle", {});
        }
      },
      //自定义每个tab的宽度，默认为0，即代表根据内容自动撑开，单位rpx，支持传100、"100px"或"100rpx"
      tabWidth: {
        type: [Number, String],
        default: _gc("tabWidth", 0)
      },
      //滑块宽度，单位rpx，支持传100、"100px"或"100rpx"
      barWidth: {
        type: [Number, String],
        default: _gc("barWidth", 45)
      },
      //滑块高度，单位rpx，支持传100、"100px"或"100rpx"
      barHeight: {
        type: [Number, String],
        default: _gc("barHeight", 8)
      },
      //swiper的宽度，单位rpx，支持传100、"100px"或"100rpx"，默认为"750rpx"
      swiperWidth: {
        type: [Number, String],
        default: _gc("swiperWidth", 750)
      },
      //滑块样式，其中的width和height将被barWidth和barHeight覆盖
      barStyle: {
        type: Object,
        default: function() {
          return _gc("barStyle", {});
        }
      },
      //tabs与底部的间距，单位rpx，支持传100、"100px"或"100rpx"
      bottomSpace: {
        type: [Number, String],
        default: _gc("bottomSpace", 8)
      },
      //切换tab时滑块动画模式，与swiper联动时有效，点击切换tab时无效，必须调用setDx。默认为line，即切换tab时滑块宽度保持不变，线性运动。可选值为worm，即为类似毛毛虫蠕动效果
      barAnimateMode: {
        type: String,
        default: _gc("barAnimateMode", "line")
      },
      //list中item的name(标题)的key
      nameKey: {
        type: String,
        default: _gc("nameKey", "name")
      },
      //list中item的value的key
      valueKey: {
        type: String,
        default: _gc("valueKey", "value")
      },
      //激活状态tab的颜色
      activeColor: {
        type: String,
        default: _gc("activeColor", "#007AFF")
      },
      //未激活状态tab的颜色
      inactiveColor: {
        type: String,
        default: _gc("inactiveColor", "#666666")
      },
      //禁用状态tab的颜色
      disabledColor: {
        type: String,
        default: _gc("disabledColor", "#bbbbbb")
      },
      //激活状态tab的样式
      activeStyle: {
        type: Object,
        default: function() {
          return _gc("activeStyle", {});
        }
      },
      //未激活状态tab的样式
      inactiveStyle: {
        type: Object,
        default: function() {
          return _gc("inactiveStyle", {});
        }
      },
      //禁用状态tab的样式
      disabledStyle: {
        type: Object,
        default: function() {
          return _gc("disabledStyle", {});
        }
      },
      //z-tabs背景色
      bgColor: {
        type: String,
        default: _gc("bgColor", "white")
      },
      //徽标数最大数字限制，超过这个数字将变成badgeMaxCount+
      badgeMaxCount: {
        type: [Number, String],
        default: _gc("badgeMaxCount", 99)
      },
      //徽标样式，例如可自定义背景色，字体等等
      badgeStyle: {
        type: Object,
        default: function() {
          return _gc("badgeStyle", {});
        }
      },
      //初始化时是否自动触发change事件
      initTriggerChange: {
        type: Boolean,
        default: _gc("initTriggerChange", false)
      },
      //z-tabs中布局的单位，默认为rpx
      unit: {
        type: String,
        default: _gc("unit", "rpx")
      }
    },
    mounted() {
      this.updateSubviewLayout();
    },
    watch: {
      current: {
        handler(newVal) {
          this.currentChanged && this._lockDx();
          this.currentIndex = newVal;
          this._preUpdateDotPosition(this.currentIndex);
          if (this.initTriggerChange) {
            if (newVal < this.list.length) {
              this.$emit("change", newVal, this.list[newVal][this.valueKey]);
            } else {
              this.changeTriggerFailed = true;
            }
          }
          this.currentChanged = true;
        },
        immediate: true
      },
      list: {
        handler(newVal) {
          this._handleListChange(newVal);
        },
        immediate: false
      },
      bottomDotX(newVal) {
        if (newVal >= 0) {
          this.showBottomDot = true;
          this.$nextTick(() => {
          });
        }
      },
      finalBarWidth: {
        handler(newVal) {
          this.barCalcedWidth = newVal;
          this.pxBarWidth = this.barCalcedWidth;
        },
        immediate: true
      },
      currentIndex: {
        handler(newVal) {
          this.currentSwiperIndex = newVal;
        },
        immediate: true
      }
    },
    computed: {
      shouldScroll() {
        return this.list.length > this.scrollCount;
      },
      finalTabsHeight() {
        return this.tabsHeight;
      },
      tabStyle() {
        const stl = this.shouldScroll ? { "flex-shrink": 0 } : { "flex": 1 };
        if (this.finalTabWidth > 0) {
          stl["width"] = this.finalTabWidth + "px";
        } else {
          delete stl.width;
        }
        return stl;
      },
      tabsListStyle() {
        return this.shouldScroll ? {} : { "flex": 1 };
      },
      showAnimate() {
        return this.isFirstLoaded && !this.shouldSetDx;
      },
      dotTransition() {
        return this.showAnimate ? "transform .2s linear" : "none";
      },
      finalDotStyle() {
        return { ...this.barStyle, width: this.barCalcedWidth + "px", height: this.finalBarHeight + "px", opacity: this.showBottomDot ? 1 : 0 };
      },
      finalTabWidth() {
        return this._convertTextToPx(this.tabWidth);
      },
      finalBarWidth() {
        return this._convertTextToPx(this._addUnit(this.barWidth, this.unit));
      },
      finalBarHeight() {
        return this._convertTextToPx(this._addUnit(this.barHeight, this.unit));
      },
      finalSwiperWidth() {
        return this._convertTextToPx(this.swiperWidth);
      },
      finalBottomSpace() {
        return this._convertTextToPx(this._addUnit(this.bottomSpace, this.unit));
      }
    },
    methods: {
      //根据swiper的@transition实时更新底部dot位置
      setDx(dx) {
        if (!this.shouldSetDx)
          return;
        const isLineMode = this.barAnimateMode === "line";
        const isWormMode = this.barAnimateMode === "worm";
        let dxRate = dx / this.finalSwiperWidth;
        this.currentSwiperIndex = this.currentIndex + parseInt(dxRate);
        const isRight = dxRate > 0;
        const barWidth = this.pxBarWidth;
        if (this.currentSwiperIndex !== this.currentIndex) {
          dxRate = dxRate - (this.currentSwiperIndex - this.currentIndex);
          const currentNode = this.itemNodeInfos[this.currentSwiperIndex];
          if (!!currentNode) {
            this.bottomDotXForIndex = this._getBottomDotX(currentNode, barWidth);
          }
        }
        const currentIndex = this.currentSwiperIndex;
        let nextIndex = currentIndex + (isRight ? 1 : -1);
        nextIndex = Math.max(0, nextIndex);
        nextIndex = Math.min(nextIndex, this.itemNodeInfos.length - 1);
        const currentNodeInfo = this.itemNodeInfos[currentIndex];
        const nextNodeInfo = this.itemNodeInfos[nextIndex];
        const nextBottomX = this._getBottomDotX(nextNodeInfo, barWidth);
        if (isLineMode) {
          this.bottomDotX = this.bottomDotXForIndex + (nextBottomX - this.bottomDotXForIndex) * Math.abs(dxRate);
        } else if (isWormMode) {
          if (isRight && currentIndex >= this.itemNodeInfos.length - 1 || !isRight && currentIndex <= 0)
            return;
          const spaceOffset = isRight ? nextNodeInfo.right - currentNodeInfo.left : currentNodeInfo.right - nextNodeInfo.left;
          let barCalcedWidth = barWidth + spaceOffset * Math.abs(dxRate);
          if (isRight) {
            if (barCalcedWidth > nextBottomX - this.bottomDotX + barWidth) {
              const barMinusWidth = barWidth + spaceOffset * (1 - dxRate);
              this.bottomDotX = this.bottomDotXForIndex + (barCalcedWidth - barMinusWidth) / 2;
              barCalcedWidth = barMinusWidth;
            }
          } else if (!isRight) {
            if (barCalcedWidth > this.bottomDotXForIndex + barWidth - nextBottomX) {
              const barMinusWidth = barWidth + spaceOffset * (1 + dxRate);
              barCalcedWidth = barMinusWidth;
              this.bottomDotX = nextBottomX;
            } else {
              this.bottomDotX = this.bottomDotXForIndex - (barCalcedWidth - barWidth);
            }
          }
          barCalcedWidth = Math.max(barCalcedWidth, barWidth);
          this.barCalcedWidth = barCalcedWidth;
        }
      },
      //在swiper的@animationfinish中通知z-tabs结束多setDx的锁定，若在父组件中调用了setDx，则必须调用unlockDx
      unlockDx() {
        this.$nextTick(() => {
          this.shouldSetDx = true;
        });
      },
      //更新z-tabs内部布局
      updateSubviewLayout(tryCount = 0) {
        this.$nextTick(() => {
          let delayTime = 10;
          setTimeout(() => {
            this._getNodeClientRect(".z-tabs-scroll-view-conatiner").then((res) => {
              if (res) {
                if (!res[0].width && tryCount < 10) {
                  setTimeout(() => {
                    tryCount++;
                    this.updateSubviewLayout(tryCount);
                  }, 50);
                  return;
                }
                this.tabsWidth = res[0].width;
                this.tabsHeight = res[0].height;
                this.tabsLeft = res[0].left;
                this._handleListChange(this.list);
              }
            });
            this._getNodeClientRect(".z-tabs-conatiner").then((res) => {
              if (res && res[0].width) {
                this.tabsSuperWidth = res[0].width;
              }
            });
          }, delayTime);
        });
      },
      //点击了tabs
      tabsClick(index2, item) {
        if (item.disabled)
          return;
        if (this.currentIndex != index2) {
          this.shouldSetDx = false;
          this.$emit("change", index2, item[this.valueKey]);
          this.currentIndex = index2;
          this._preUpdateDotPosition(index2);
        } else {
          this.$emit("secondClick", index2, item[this.valueKey]);
        }
      },
      //scroll-view滚动
      scroll(e) {
        this.currentScrollLeft = e.detail.scrollLeft;
      },
      //锁定dx，用于避免在swiper被动触发滚动时候执行setDx中的代码
      _lockDx() {
        this.shouldSetDx = false;
      },
      //更新底部dot位置之前的预处理
      _preUpdateDotPosition(index2) {
        this.$nextTick(() => {
          uni.createSelectorQuery().in(this).select(".z-tabs-scroll-view").fields({
            scrollOffset: true
          }, (data) => {
            if (data) {
              this.currentScrollLeft = data.scrollLeft;
              this._updateDotPosition(index2);
            } else {
              this._updateDotPosition(index2);
            }
          }).exec();
        });
      },
      //更新底部dot位置
      _updateDotPosition(index2) {
        if (index2 >= this.itemNodeInfos.length)
          return;
        this.$nextTick(async () => {
          let node = this.itemNodeInfos[index2];
          let offset = 0;
          let tabsContainerWidth = this.tabsContainerWidth;
          if (JSON.stringify(this.activeStyle) !== "{}") {
            const nodeRes = await this._getNodeClientRect(`#z-tabs-item-${index2}`, true);
            if (nodeRes) {
              node = nodeRes[0];
              offset = this.currentScrollLeft;
              this.tabsHeight = Math.max(node.height + rpx2px(28), this.tabsHeight);
              tabsContainerWidth = 0;
              for (let i = 0; i < this.itemNodeInfos.length; i++) {
                let oldNode = this.itemNodeInfos[i];
                tabsContainerWidth += i === index2 ? node.width : oldNode.width;
              }
            }
          }
          if (node) {
            this.bottomDotX = this._getBottomDotX(node, this.finalBarWidth, offset);
          }
          this.bottomDotXForIndex = this.bottomDotX;
          if (this.tabsWidth) {
            setTimeout(() => {
              let scrollLeft = this.bottomDotX - this.tabsWidth / 2 + this.finalBarWidth / 2;
              scrollLeft = Math.max(0, scrollLeft);
              if (tabsContainerWidth) {
                scrollLeft = Math.min(scrollLeft, tabsContainerWidth - this.tabsWidth + 10);
              }
              if (this.shouldScroll && tabsContainerWidth > this.tabsWidth) {
                this.scrollLeft = scrollLeft;
              }
              this.$nextTick(() => {
                this.isFirstLoaded = true;
              });
            }, 200);
          }
        });
      },
      // 处理list改变
      _handleListChange(newVal) {
        this.$nextTick(async () => {
          if (newVal.length) {
            let itemNodeInfos = [];
            let tabsContainerWidth = 0;
            let delayTime = 0;
            setTimeout(async () => {
              for (let i = 0; i < newVal.length; i++) {
                const nodeRes = await this._getNodeClientRect(`#z-tabs-item-${i}`, true);
                if (nodeRes) {
                  const node = nodeRes[0];
                  node.left += this.currentScrollLeft;
                  itemNodeInfos.push(node);
                  tabsContainerWidth += node.width;
                }
                if (i === this.currentIndex) {
                  this.itemNodeInfos = itemNodeInfos;
                  this.tabsContainerWidth = tabsContainerWidth;
                  this._updateDotPosition(this.currentIndex);
                }
              }
              this.itemNodeInfos = itemNodeInfos;
              this.tabsContainerWidth = tabsContainerWidth;
              this._updateDotPosition(this.currentIndex);
            }, delayTime);
          }
        });
        if (this.initTriggerChange && this.changeTriggerFailed && newVal.length) {
          if (this.current < newVal.length) {
            this.$emit("change", this.current, newVal[this.current][this.valueKey]);
          }
        }
      },
      //根据node获取bottomX
      _getBottomDotX(node, barWidth = this.finalBarWidth, offset = 0) {
        return node.left + node.width / 2 - barWidth / 2 + offset - this.tabsLeft;
      },
      //获取节点信息
      _getNodeClientRect(select, withRefArr = false) {
        const res = uni.createSelectorQuery().in(this);
        res.select(select).boundingClientRect();
        return new Promise((resolve, reject) => {
          res.exec((data) => {
            resolve(data && data != "" && data != void 0 && data.length ? data : false);
          });
        });
      },
      //格式化badge中的count
      _formatCount(count) {
        if (!count)
          return "";
        if (count > this.badgeMaxCount) {
          return this.badgeMaxCount + "+";
        }
        return count.toString();
      },
      //将文本的px或者rpx转为px的值
      _convertTextToPx(text) {
        const dataType = Object.prototype.toString.call(text);
        if (dataType === "[object Number]") {
          return rpx2px(text);
        }
        let isRpx = false;
        if (text.indexOf("rpx") !== -1 || text.indexOf("upx") !== -1) {
          text = text.replace("rpx", "").replace("upx", "");
          isRpx = true;
        } else if (text.indexOf("px") !== -1) {
          text = text.replace("px", "");
        } else {
          text = rpx2px(text);
        }
        if (!isNaN(text)) {
          if (isRpx)
            return Number(rpx2px(text));
          return Number(text);
        }
        return 0;
      },
      // 添加单位
      _addUnit(value, unit) {
        if (Object.prototype.toString.call(value) === "[object String]") {
          let tempValue = value;
          tempValue = tempValue.replace("rpx", "").replace("upx", "").replace("px", "");
          if (value.indexOf("rpx") === -1 && value.indexOf("upx") === -1 && value.indexOf("px") !== -1) {
            tempValue = parseFloat(tempValue) * 2;
          }
          value = tempValue;
        }
        return unit === "rpx" ? value + "rpx" : value / 2 + "px";
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "z-tabs-conatiner",
        style: vue.normalizeStyle([{ background: $props.bgColor }, { height: $props.unit === "rpx" ? "80rpx" : "40px" }, $props.tabsStyle])
      },
      [
        vue.createElementVNode("view", { class: "z-tabs-left" }, [
          vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
        ]),
        vue.createElementVNode(
          "view",
          {
            ref: "z-tabs-scroll-view-conatiner",
            class: "z-tabs-scroll-view-conatiner"
          },
          [
            vue.createElementVNode("scroll-view", {
              ref: "z-tabs-scroll-view",
              class: "z-tabs-scroll-view",
              "scroll-x": true,
              "scroll-left": $data.scrollLeft,
              "show-scrollbar": false,
              "scroll-with-animation": $data.isFirstLoaded,
              onScroll: _cache[0] || (_cache[0] = (...args) => $options.scroll && $options.scroll(...args))
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "z-tabs-list-container",
                  style: vue.normalizeStyle([$options.tabsListStyle])
                },
                [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "z-tabs-list",
                      style: vue.normalizeStyle([$options.tabsListStyle, { marginTop: -$options.finalBottomSpace + "px" }])
                    },
                    [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList($props.list, (item, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            ref_for: true,
                            ref: `z-tabs-item-${index2}`,
                            id: `z-tabs-item-${index2}`,
                            class: "z-tabs-item",
                            style: vue.normalizeStyle([$options.tabStyle]),
                            key: index2,
                            onClick: ($event) => $options.tabsClick(index2, item)
                          }, [
                            vue.createElementVNode("view", { class: "z-tabs-item-title-container" }, [
                              vue.createElementVNode(
                                "text",
                                {
                                  class: vue.normalizeClass({ "z-tabs-item-title-rpx": $props.unit === "rpx", "z-tabs-item-title-px": $props.unit === "px", "z-tabs-item-title-disabled": item.disabled }),
                                  style: vue.normalizeStyle([{ color: item.disabled ? $props.disabledColor : $data.currentIndex === index2 ? $props.activeColor : $props.inactiveColor }, item.disabled ? $props.disabledStyle : $data.currentIndex === index2 ? $props.activeStyle : $props.inactiveStyle])
                                },
                                vue.toDisplayString(item[$props.nameKey] || item),
                                7
                                /* TEXT, CLASS, STYLE */
                              ),
                              item.badge && $options._formatCount(item.badge.count).length ? (vue.openBlock(), vue.createElementBlock(
                                "text",
                                {
                                  key: 0,
                                  class: vue.normalizeClass(["z-tabs-item-badge", { "z-tabs-item-badge-rpx": $props.unit === "rpx", "z-tabs-item-badge-px": $props.unit === "px" }]),
                                  style: vue.normalizeStyle([$props.badgeStyle])
                                },
                                vue.toDisplayString($options._formatCount(item.badge.count)),
                                7
                                /* TEXT, CLASS, STYLE */
                              )) : vue.createCommentVNode("v-if", true)
                            ])
                          ], 12, ["id", "onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "z-tabs-bottom",
                      style: vue.normalizeStyle([{ width: $data.tabsContainerWidth + "px", bottom: $options.finalBottomSpace + "px" }])
                    },
                    [
                      vue.createElementVNode(
                        "view",
                        {
                          ref: "z-tabs-bottom-dot",
                          class: "z-tabs-bottom-dot",
                          style: vue.normalizeStyle([{ transform: `translateX(${$data.bottomDotX}px)`, transition: $options.dotTransition, background: $props.activeColor }, $options.finalDotStyle])
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ],
                    4
                    /* STYLE */
                  )
                ],
                4
                /* STYLE */
              )
            ], 40, ["scroll-left", "scroll-with-animation"])
          ],
          512
          /* NEED_PATCH */
        ),
        vue.createElementVNode("view", { class: "z-tabs-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-0ac4bf81"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/z-tabs/components/z-tabs/z-tabs.vue"]]);
  const _imports_0$6 = "/static/ioc/title/back_icon.png";
  const _sfc_main$h = {
    data() {
      return {};
    },
    methods: {
      chang() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "navbar-title" }, [
      vue.createElementVNode("view", { class: "occupy" }),
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("view", {
          class: "iocBack",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.chang())
        }, [
          vue.createElementVNode("image", {
            src: _imports_0$6,
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "text" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("text", { class: "text-title" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "ioc" })
      ])
    ]);
  }
  const NavTab = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-3dce3942"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/NavbarTitle.vue"]]);
  const _sfc_main$g = {
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
      uni.getSystemInfo({
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
      longClick(index2) {
        if (this.tabTitle.length > 5) {
          this.tabLeft = (index2 - 2) * this.isWidth;
        }
        this.tabClick = index2;
        this.isLeft = index2 * this.isWidth;
        this.$emit("changeTab", index2);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "navTabBox" }, [
      vue.createElementVNode("view", { class: "longTab" }, [
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          style: { "white-space": "nowrap", "display": "flex" },
          "scroll-with-animation": "",
          "scroll-left": $data.tabLeft
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.tabTitle, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["longItem", index2 === $data.tabClick ? "click" : ""]),
                style: vue.normalizeStyle("width:" + $data.isWidth + "px"),
                "data-index": index2,
                key: index2,
                id: "id" + index2,
                onClick: ($event) => $options.longClick(index2)
              }, vue.toDisplayString(item), 15, ["data-index", "id", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode(
            "view",
            {
              class: "underlineBox",
              style: vue.normalizeStyle("transform:translateX(" + $data.isLeft + "px);width:" + $data.isWidth + "px")
            },
            [
              vue.createElementVNode("view", { class: "underline" })
            ],
            4
            /* STYLE */
          )
        ], 8, ["scroll-left"])
      ])
    ]);
  }
  const navTab = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-d8ce7dbc"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/navTab.vue"]]);
  const _sfc_main$f = {
    name: "loan",
    data() {
      return {};
    },
    props: {
      list: [Array, Object]
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "loan" }, [
      vue.createElementVNode("view", { class: "loan-money" }, [
        vue.createElementVNode("view", { class: "loan-title" }, [
          vue.createElementVNode(
            "text",
            { class: "title" },
            vue.toDisplayString($props.list.name),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "min-title" },
            vue.toDisplayString($props.list.title),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "loan-content" }, [
          vue.createElementVNode("view", { class: "money" }, [
            vue.createElementVNode(
              "view",
              { class: "num" },
              vue.toDisplayString($props.list.money),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "str" }, " 额度单户最高(元) ")
          ]),
          vue.createElementVNode("view", { class: "percentage" }, [
            vue.createElementVNode("view", { class: "num" }, [
              vue.createTextVNode(
                vue.toDisplayString($props.list.percentage),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", { style: { "color": "#ccc", "font-size": "12px" } }, "起")
            ]),
            vue.createElementVNode("view", { class: "str" }, " 年化利率 ")
          ]),
          vue.createElementVNode("view", { class: "btn" }, [
            vue.createElementVNode("view", { class: "botton" }, " 立即申请 ")
          ])
        ])
      ])
    ]);
  }
  const loan = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-6146b754"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/loan.vue"]]);
  const _imports_0$5 = "/static/banner/Strategy.png";
  const _sfc_main$e = {
    name: "Strategy",
    data() {
      return {};
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "Strategy" }, [
      vue.createElementVNode("view", { style: { "width": "100%", "display": "flex" } }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(2, (item) => {
            return vue.createElementVNode("view", {
              class: "Strategy-content",
              key: item
            }, [
              vue.createElementVNode("view", { class: "images" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$5,
                  mode: ""
                })
              ]),
              vue.createElementVNode("view", { class: "text" }, [
                vue.createElementVNode("text", null, "警惕不法贷款中介，这些说法不要听！不要信"),
                vue.createTextVNode("、 "),
                vue.createElementVNode("view", { style: { "text-align": "right", "color": "#ccc", "font-family": "黑体", "font-size": "12px" } }, " 122752人学过 ")
              ])
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const Strategy = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-bfd188c5"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/Strategy.vue"]]);
  const _imports_0$4 = "/static/SVG/positioning.svg";
  const _imports_1$5 = "/static/banner/img_plate.gif";
  const _imports_2$3 = "/static/ioc/broadcast/ic_horn_pushmessage.png";
  const _imports_3$1 = "/static/Background/xiaoweibanner.png";
  const _sfc_main$d = {
    data() {
      return {
        operationBar: ["我要贷款", "我要测额", "我要支用", "我要还款", "我要提额", "我要续费", "贷款查询", "我的账户", "我要开户", "更多"],
        list: ["我是小微企业", "我是个人企业", "我是科创企业", "我是农户", "我是村集体", "我是进出口企业", "全部产品"],
        loanList: [
          { name: "信用快贷", title: "纯信用 无抵押", money: "3,000,000", percentage: "3.6%" },
          { name: "抵押快贷", title: "便捷快速", money: "3,000,000", percentage: "3.0%" },
          { name: "质押快贷", title: "全流程线上办理", money: "3,000,000", percentage: "3.10%" },
          { name: "平台快贷", title: "数据增信", money: "3,000,000", percentage: "3.85%" }
        ],
        Strategy: ["看视频", "读攻略"]
      };
    },
    components: {
      NavbarTitle: NavTab,
      navTab,
      loan,
      Strategy
    },
    onLoad() {
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$5);
    const _component_z_tabs = resolveEasycom(vue.resolveDynamicComponent("z-tabs"), __easycom_0$4);
    const _component_loan = vue.resolveComponent("loan");
    const _component_Strategy = vue.resolveComponent("Strategy");
    return vue.openBlock(), vue.createElementBlock("view", { class: "Home" }, [
      vue.createElementVNode("view", { style: { "width": "100%", "height": "100px" } }),
      vue.createElementVNode("view", { class: "navbar-title" }, [
        vue.createElementVNode("view", { class: "occupy" }),
        vue.createElementVNode("view", { class: "navigationBar" }, [
          vue.createElementVNode("view", { class: "navigationBar-positioning" }, [
            vue.createElementVNode("view", { class: "images" }, [
              vue.createElementVNode("image", { src: _imports_0$4 })
            ]),
            vue.createElementVNode("view", { class: "text" }, [
              vue.createElementVNode("text", null, "广州")
            ])
          ]),
          vue.createElementVNode("view", { class: "navigationBar-search" }, [
            vue.createVNode(_component_uni_search_bar, {
              radius: "5",
              placeholder: "代发工资",
              clearButton: "none",
              cancelButton: "none",
              bgColor: "#000"
            })
          ]),
          vue.createElementVNode("view", { class: "navigationBar-ioc" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(4, (item, index2) => {
                return vue.createElementVNode("view", {
                  class: "ioc_",
                  key: index2
                }, [
                  vue.createElementVNode("image", {
                    src: `../../static/ioc/title/title_${index2 + 1}.png`,
                    mode: ""
                  }, null, 8, ["src"])
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "Maxbanner" }, [
        vue.createElementVNode("image", {
          src: _imports_1$5,
          mode: "widthFix"
        }),
        vue.createElementVNode("view", { class: "btnBanner" }, [
          vue.createElementVNode("text", null, "测测贷款额度")
        ])
      ]),
      vue.createElementVNode("view", { class: "operation" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(10, (item, index2) => {
            return vue.createElementVNode("view", {
              class: "operation_box",
              key: item
            }, [
              vue.createElementVNode("image", {
                src: `../../static/ioc/bar/iocn_${index2 + 1}.png`,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($data.operationBar[index2]),
                1
                /* TEXT */
              )
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "broadcast" }, [
        vue.createElementVNode("view", { class: "iocn" }, [
          vue.createElementVNode("image", {
            src: _imports_2$3,
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "Text" }, [
          vue.createElementVNode("view", { class: "text" }, " 关于贷款资金用途的提示 "),
          vue.createElementVNode("view", { class: "Text_iocn" })
        ])
      ]),
      vue.createElementVNode("view", { class: "min_banner" }, [
        vue.createElementVNode("swiper", {
          "indicator-dots": true,
          autoplay: true,
          circular: "true",
          interval: 3e3,
          duration: 2e3,
          "indicator-active-color": "#fff",
          "indicator-color": "#ccc"
        }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(6, (item) => {
              return vue.createElementVNode("swiper-item", { key: item }, [
                vue.createElementVNode("image", {
                  src: _imports_3$1,
                  mode: ""
                })
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_z_tabs, {
          list: $data.list,
          "inactive-color": "#6f6f6f",
          "active-color": "#000",
          unit: "12rpx"
        }, null, 8, ["list"])
      ]),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.loanList, (item, index2) => {
          return vue.openBlock(), vue.createBlock(_component_loan, {
            list: item,
            key: index2
          }, null, 8, ["list"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createElementVNode("view", { style: { "width": "300rpx" } }, [
        vue.createVNode(_component_z_tabs, {
          list: $data.Strategy,
          "inactive-color": "#6f6f6f",
          "active-color": "#000",
          unit: "12rpx"
        }, null, 8, ["list"])
      ]),
      vue.createVNode(_component_Strategy)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/index/index.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$c = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name2) {
        return name2.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$b = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:310", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          this.showPoptrans();
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      showPoptrans() {
        this.$nextTick(() => {
          this.showPopup = true;
          this.showTrans = true;
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$3);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _imports_0$3 = "/static/myiocn/icon_more_nebu_xyoersonal_rymain.png";
  const _sfc_main$a = {
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
        id === 1 ? uni.navigateTo({ url: "/pages/Enterprise/Enterprise" }) : "";
        id === 2 ? this.$emit("open") : "";
        id === 3 ? uni.navigateTo({ url: "/pages/loan/loan" }) : "";
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(true), vue.createElementBlock(
      vue.Fragment,
      null,
      vue.renderList($props.MyList, (item, index2) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "list",
          key: index2,
          onClick: ($event) => $options.change(item.NvaGo)
        }, [
          vue.createElementVNode("view", { class: "ioc" }, [
            vue.createElementVNode("image", {
              src: item.ioc,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode(
            "view",
            { class: "text" },
            vue.toDisplayString(item.name),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "point" }, [
            vue.createElementVNode("image", {
              src: _imports_0$3,
              mode: ""
            })
          ])
        ], 8, ["onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    );
  }
  const MyList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-5e0d8f88"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/My.vue"]]);
  const _imports_0$2 = "/static/myiocn/Topbg.png";
  const _imports_1$4 = "/static/myiocn/ic_setting.png";
  const _imports_2$2 = "/static/myiocn/head_nor.png";
  const _imports_3 = "/static/myiocn/home_icon_footer.png";
  const _imports_4 = "/static/myiocn/direction_right_icon.png";
  const _sfc_main$9 = {
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
        formatAppLog("log", "at pages/my/my.vue:127", this.$refs.popup.open("bottom"));
      },
      close() {
        this.$refs.popup.close();
      },
      account() {
        uni.navigateTo({
          url: "/pages/MyAccount/MyAccount"
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_MyList = vue.resolveComponent("MyList");
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "SetMy" }, [
      vue.createElementVNode("view", { class: "SetMyHead" }, [
        vue.createElementVNode("image", { src: _imports_0$2 }),
        vue.createElementVNode("view", { class: "SetMyHeadTitle" }, [
          vue.createElementVNode("view", { style: { "width": "100%", "height": "40px" } }),
          vue.createElementVNode("view", { class: "HeadTitle" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("view", { style: { "margin": "0 0 0 350rpx", "font-size": "36rpx" } }, " 我的 ")
            ]),
            vue.createElementVNode("view", { class: "iocn" }, [
              vue.createElementVNode("image", {
                src: _imports_1$4,
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "Information" }, [
            vue.createElementVNode("view", { class: "Head" }, [
              vue.createElementVNode("image", {
                class: "Head-image",
                src: _imports_2$2,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("text", null, "*华平"),
              vue.createElementVNode("view", { class: "provePhone" }, [
                vue.createElementVNode("view", { class: "prove" }, [
                  vue.createElementVNode("view", { class: "ioc_" }),
                  vue.createElementVNode("view", { class: "text" }, " 认证用户 ")
                ]),
                vue.createElementVNode("view", { class: "Phone" }, " 152***0646 ")
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "SetMyBody" }, [
        vue.createElementVNode("view", { class: "title" }, " 我的业务 "),
        vue.createVNode(_component_MyList, {
          MyList: $data.MyList,
          onOpen: $options.open
        }, null, 8, ["MyList", "onOpen"])
      ]),
      vue.createElementVNode("view", { class: "img" }, [
        vue.createElementVNode("view", { class: "" }, [
          vue.createElementVNode("image", {
            src: _imports_3,
            mode: ""
          })
        ])
      ]),
      vue.createVNode(
        _component_uni_popup,
        {
          class: "popup",
          ref: "popup",
          type: "bottom",
          "background-color": "#fff"
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "popup-title" }, [
              vue.createElementVNode("view", {
                class: "cloas",
                onClick: _cache[0] || (_cache[0] = ($event) => $options.close())
              }, " 取消 "),
              vue.createElementVNode("view", { class: "popup-text" }, " 请选择关联企业 "),
              vue.createElementVNode("view", {
                class: "rigth",
                onClick: _cache[1] || (_cache[1] = ($event) => $options.account())
              }, " 确定 ")
            ]),
            vue.createElementVNode("view", { class: "popup-conten" }, [
              vue.createElementVNode("view", { class: "popup-name" }, " 广州友福贸易有限公司 "),
              vue.createElementVNode("view", { class: "popup-ioc" }, [
                vue.createElementVNode("image", {
                  class: "popup-image",
                  src: _imports_4,
                  mode: ""
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-2f1ef635"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/my/my.vue"]]);
  const _imports_0$1 = "/static/myiocn/sanjiaoxing.png";
  const _imports_1$3 = "/static/myiocn/green.png";
  const _sfc_main$8 = {
    data() {
      return {
        Inquire: ["余额", "我的申请", "明细"],
        index: true,
        DetailsDay: [
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
          },
          {
            data: "2024/08/21 ",
            money: "1894.66",
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
            data: "2024/09/21 ",
            money: "2,030.17",
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
            data: "2024/10/21",
            money: "2,030.17",
            name: "还款",
            week: "星期一",
            list: {
              "还款时间": "2024/10/21 15:17:03",
              "贷款种类": "个人经营抵押贷款",
              "凭证号": "1081970011724224622779879",
              "贷款账号": "4400***9724",
              "还款账号": ""
            }
          }
        ]
      };
    },
    components: {
      NavbarTitle: NavTab
    },
    methods: {
      secondClick(index2) {
        index2 === 2 ? this.index = false : this.index = true;
      },
      Disbursement(item) {
        uni.clearStorageSync();
        uni.setStorageSync("DetailsDay", item);
        uni.navigateTo({
          url: "/pages/Disbursement/Disbursement"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavbarTitle = vue.resolveComponent("NavbarTitle");
    const _component_z_tabs = resolveEasycom(vue.resolveDynamicComponent("z-tabs"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "Inquire" }, [
      vue.createVNode(_component_NavbarTitle, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("查询")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_z_tabs, {
        list: $data.Inquire,
        "inactive-color": "#a8c3fb",
        "active-color": "#fff",
        "bg-color": "#4a79e0",
        unit: "12rpx",
        onChange: $options.secondClick
      }, null, 8, ["list", "onChange"]),
      $data.index ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        vue.createElementVNode("view", { class: "Moeny" }, [
          vue.createElementVNode("p", null, "贷款总余额(元)"),
          vue.createElementVNode("p", { style: { "font-size": "30px" } }, "700,000.00")
        ]),
        vue.createElementVNode("view", { class: "LoanMoeny" }, [
          vue.createElementVNode("view", { class: "LoanMoeny-title" }, [
            vue.createElementVNode("span", null, "个人经营抵押快贷"),
            vue.createElementVNode("span", { style: { "color": "#9c9c9c", "font-size": "13px" } }, "（4400***9724）")
          ]),
          vue.createElementVNode("view", { class: "LoanMoeny-body" }, [
            vue.createElementVNode("view", { class: "LoanMoeny-number" }, [
              vue.createElementVNode("p", null, "贷款余额(元)"),
              vue.createElementVNode("p", { style: { "font-size": "19px", "color": "#5179ce" } }, "700,000.00")
            ]),
            vue.createElementVNode("view", { class: "LoanMoeny-Day" }, [
              vue.createElementVNode("p", null, [
                vue.createTextVNode("开户日 "),
                vue.createElementVNode("span", { class: "Day" }, "2024/07/24")
              ]),
              vue.createElementVNode("p", null, [
                vue.createTextVNode("到期日 "),
                vue.createElementVNode("span", { class: "Day" }, "2029/07/24")
              ])
            ])
          ])
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        vue.createElementVNode("view", { class: "Details" }, [
          vue.createElementVNode("view", { class: "name" }, [
            vue.createElementVNode("view", { class: "text" }, " 个人经营抵押快贷(44... "),
            vue.createElementVNode("view", { class: "ioc" }, [
              vue.createElementVNode("image", {
                class: "ioc-image",
                src: _imports_0$1,
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "Repayment" }, [
            vue.createElementVNode("view", { class: "text" }, " 还款 "),
            vue.createElementVNode("view", { class: "ioc" }, [
              vue.createElementVNode("image", {
                class: "ioc-image",
                src: _imports_0$1,
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "Day" }, [
            vue.createElementVNode("view", { class: "text" }, " 近6个月 "),
            vue.createElementVNode("view", { class: "ioc" }, [
              vue.createElementVNode("image", {
                class: "ioc-image",
                src: _imports_0$1,
                mode: ""
              })
            ])
          ])
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.DetailsDay, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "DetailsDay",
              key: item,
              onClick: ($event) => $options.Disbursement(item)
            }, [
              vue.createElementVNode("view", { class: "ioc" }, [
                vue.createElementVNode("image", {
                  class: "ioc-image",
                  style: { "width": "18px", "height": "18px" },
                  src: _imports_1$3,
                  mode: ""
                })
              ]),
              vue.createElementVNode("view", { class: "DayHk" }, [
                vue.createElementVNode(
                  "view",
                  { class: "DayHk-day" },
                  vue.toDisplayString(item.data) + vue.toDisplayString(item.week),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "DayHk-text" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "money" }, [
                vue.createElementVNode("view", { class: "money-text" }, " 金额 "),
                vue.createElementVNode(
                  "view",
                  { class: "money-num" },
                  vue.toDisplayString(item.money),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "ioc" }, [
                vue.createElementVNode("image", {
                  class: "ioc-image",
                  src: _imports_0$3,
                  mode: ""
                })
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])),
      vue.createElementVNode("view", { class: "foot" }, " 已经全部加载全部 ")
    ]);
  }
  const PagesLoanLoan = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-88930688"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/loan/loan.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    components: {
      NavTab
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavTab = vue.resolveComponent("NavTab");
    return vue.openBlock(), vue.createElementBlock("view", { class: "message" }, [
      vue.createVNode(_component_NavTab, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("企业基本信息")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", {
        class: "text",
        style: { "margin-top": "10px" }
      }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.createElementVNode("text", null, "统一社会信用代码")
        ]),
        vue.createElementVNode("view", { class: "num" }, [
          vue.createElementVNode("text", null, "91440101MA5D2RL06E")
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.createElementVNode("text", null, "企业法定代表人")
        ]),
        vue.createElementVNode("view", { class: "num" }, [
          vue.createElementVNode("text", null, "刘华平")
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.createElementVNode("text", null, "统一社会信用代码")
        ]),
        vue.createElementVNode("view", { class: "num" }, [
          vue.createElementVNode("text", null, "1424***151X")
        ])
      ]),
      vue.createElementVNode("button", {
        type: "default",
        style: { "border-radius": "20px", "width": "90%", "background": "#4a79e0", "color": "white", "position": "relative", "top": "600rpx" }
      }, "删除企业")
    ]);
  }
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-4c1b26cf"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/message/message.vue"]]);
  const _imports_0 = "/static/myiocn/ic_st.png";
  const _imports_1$2 = "/static/myiocn/Snipaste_2024-10-30_23-42-57.png";
  const _sfc_main$6 = {
    data() {
      return {
        AccountList: ["企业", "个人"]
      };
    },
    components: {
      NavbarTitleVue: NavTab
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavbarTitleVue = vue.resolveComponent("NavbarTitleVue");
    const _component_z_tabs = resolveEasycom(vue.resolveDynamicComponent("z-tabs"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "account" }, [
      vue.createVNode(_component_NavbarTitleVue, { style: { "background-color": "#4a79e0" } }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("我的账户")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_z_tabs, {
          list: $data.AccountList,
          "inactive-color": "#d6cccc",
          "active-color": "#fff",
          "bg-color": "#4b7ae6",
          unit: "12rpx"
        }, null, 8, ["list"])
      ]),
      vue.createElementVNode("view", { class: "account-tittle" }, [
        vue.createElementVNode("view", { class: "account-tittle-ioc" }, [
          vue.createElementVNode("image", {
            class: "account-tittle-image",
            src: _imports_0,
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "account-tittle-name" }, " 账户总览(1) ")
      ]),
      vue.createElementVNode("view", { class: "account-Bank" }, [
        vue.createElementVNode("view", { class: "account-Bank-image" }, [
          vue.createElementVNode("image", {
            class: "Bank-image",
            src: _imports_1$2,
            mode: ""
          }),
          vue.createElementVNode("view", { class: "account-Bank-text" }, [
            vue.createElementVNode("view", { class: "Bank-text-title" }, [
              vue.createTextVNode(" 建行账号(1321) "),
              vue.createElementVNode("span", { class: "text-title-span" }, "查看账号")
            ]),
            vue.createElementVNode("view", { class: "text-title-money" }, [
              vue.createElementVNode("view", { class: "balance" }, [
                vue.createElementVNode("view", null, "余额（元）"),
                vue.createElementVNode("view", null, "81.95")
              ]),
              vue.createElementVNode("view", { class: "balance" }, [
                vue.createElementVNode("view", null, "可用余额（元）"),
                vue.createElementVNode("view", null, "81.95")
              ])
            ]),
            vue.createElementVNode("view", { style: { "line-height": "40rpx" } }, [
              vue.createElementVNode("p", {
                class: "",
                style: { "font-size": "20rpx", "color": "#b1b1b4" }
              }, " 开户网点 "),
              vue.createElementVNode("p", {
                class: "",
                style: { "font-size": "20rpx", "color": "#757578" }
              }, " 中国建设银行股份有限公司广州南沙气候支部 ")
            ]),
            vue.createElementVNode("view", { style: { "width": "100%", "text-align": "center", "font-size": "28rpx", "margin-top": "50rpx", "font-family": "'黑体'" } }, [
              vue.createTextVNode(" 收入分析 "),
              vue.createElementVNode("image", {
                style: { "width": "15rpx", "height": "20rpx" },
                src: _imports_0$3,
                mode: ""
              })
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesMyAccountMyAccount = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-13a3a337"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/MyAccount/MyAccount.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        DetailsDay: ""
      };
    },
    components: {
      NavbarTitleVue: NavTab
    },
    created() {
      this.DetailsDay = uni.getStorageSync("DetailsDay");
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavbarTitleVue = vue.resolveComponent("NavbarTitleVue");
    return vue.openBlock(), vue.createElementBlock("view", { class: "Disbursement" }, [
      vue.createVNode(_component_NavbarTitleVue, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("支出明细")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "Disbursement-title" }, [
        vue.createElementVNode(
          "view",
          { class: "title" },
          vue.toDisplayString($data.DetailsDay.name) + "金额 ",
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          { class: "text" },
          " ￥" + vue.toDisplayString($data.DetailsDay.money),
          1
          /* TEXT */
        ),
        !$data.DetailsDay.istrue ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "load"
        }, [
          vue.createElementVNode("view", { class: "load-content" }, [
            vue.createElementVNode("view", { class: "load-title" }, " 本金(元) "),
            vue.createElementVNode("view", { class: "load-money" }, " 0.00 ")
          ]),
          vue.createElementVNode("view", { class: "load-content" }, [
            vue.createElementVNode("view", { class: "load-title" }, " 利息(元) "),
            vue.createElementVNode(
              "view",
              { class: "load-money" },
              vue.toDisplayString($data.DetailsDay.money),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "load-content" }, [
            vue.createElementVNode("view", { class: "load-title" }, " 罚金(元) "),
            vue.createElementVNode("view", { class: "load-money" }, " 0.00 ")
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", { class: "Expenditure-details" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.DetailsDay.list, (index2, vlaue) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "Expenditure-details-list",
              key: vlaue
            }, [
              vue.createElementVNode(
                "view",
                { class: "name" },
                vue.toDisplayString(vlaue),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "content" },
                vue.toDisplayString(index2),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("text", { style: { "margin-left": "20px" } }, "温馨提示"),
      vue.createElementVNode("br"),
      vue.createElementVNode("text", { style: { "font-size": "12px", "margin-left": "20px" } }, "此凭证仅供参考")
    ]);
  }
  const PagesDisbursementDisbursement = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/Disbursement/Disbursement.vue"]]);
  const _imports_1$1 = "/static/myiocn/ic_preferred_services.png";
  const _imports_2$1 = "/static/ioc/bar/iocn_2.png";
  const _sfc_main$4 = {
    data() {
      return {};
    },
    components: {
      NavTab
    },
    methods: {
      change() {
        uni.navigateTo({
          url: "/pages/message/message"
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavTab = vue.resolveComponent("NavTab");
    return vue.openBlock(), vue.createElementBlock("view", { class: "enterprise" }, [
      vue.createVNode(_component_NavTab, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("我的企业")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "list" }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.createElementVNode("view", { class: "text" }, " 广州友福贸易有限公司 "),
          vue.createElementVNode("view", {
            class: "ioc",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.change())
          }, [
            vue.createElementVNode("image", {
              src: _imports_0$3,
              mode: ""
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "btn" }, [
          vue.createElementVNode("view", { class: "btn-content" }, [
            vue.createElementVNode("button", {
              class: "mini-btn",
              type: "default",
              size: "mini",
              style: { "background": "#4a79e0", "color": "white" }
            }, "授权"),
            vue.createElementVNode("button", {
              class: "mini-btn",
              type: "default",
              size: "mini"
            }, "一键更新"),
            vue.createElementVNode("button", {
              class: "mini-btn",
              type: "default",
              size: "mini"
            }, "企业维护")
          ])
        ])
      ]),
      vue.createElementVNode("view", { style: { "height": "200px" } }),
      vue.createElementVNode("view", { class: "btn" }, [
        vue.createElementVNode("button", {
          class: "add",
          type: "primary"
        }, "+ 创建企业")
      ]),
      vue.createElementVNode("view", { class: "bg-ioc" }, [
        vue.createElementVNode("image", {
          src: _imports_1$1,
          mode: ""
        })
      ]),
      (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList(4, (item) => {
          return vue.createElementVNode("view", {
            class: "serve",
            key: item
          }, [
            vue.createElementVNode("view", { class: "serveList" }, [
              vue.createElementVNode("view", { class: "text" }, [
                vue.createElementVNode("view", { class: "title" }, [
                  vue.createElementVNode("image", {
                    src: _imports_2$1,
                    mode: ""
                  }),
                  vue.createElementVNode("text", null, "精准测额")
                ]),
                vue.createElementVNode("view", { class: "miniTitle" }, "     多为数据 | 企业主 | 企业信息 ")
              ]),
              vue.createElementVNode("view", { class: "ioc" }, [
                vue.createElementVNode("button", {
                  type: "primary",
                  plain: "true",
                  style: { "width": "80px", "height": "35px", "font-size": "12px", "border-radius": "50px", "background-color": "#4a79e0", "color": "white", "border": "none" }
                }, "测一测")
              ])
            ])
          ]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))
    ]);
  }
  const PagesEnterpriseEnterprise = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/Enterprise/Enterprise.vue"]]);
  const mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/wu-ui-tools/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  const cssKeywords = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  function isArrayish(obj) {
    if (!obj || typeof obj === "string") {
      return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
  }
  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;
  function swizzle(args) {
    var results = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];
      if (isArrayish(arg)) {
        results = concat.call(results, slice.call(arg));
      } else {
        results.push(arg);
      }
    }
    return results;
  }
  swizzle.wrap = function(fn) {
    return function() {
      return fn(swizzle(arguments));
    };
  };
  var hasOwnProperty = Object.hasOwnProperty;
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (var name in cssKeywords) {
    if (hasOwnProperty.call(cssKeywords, name)) {
      reverseNames[cssKeywords[name]] = name;
    }
  }
  var cs = {
    to: {},
    get: {}
  };
  cs.get = function(string2) {
    var prefix = string2.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
      case "hsl":
        val = cs.get.hsl(string2);
        model = "hsl";
        break;
      case "hwb":
        val = cs.get.hwb(string2);
        model = "hwb";
        break;
      default:
        val = cs.get.rgb(string2);
        model = "rgb";
        break;
    }
    if (!val) {
      return null;
    }
    return { model, value: val };
  };
  cs.get.rgb = function(string2) {
    if (!string2) {
      return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    if (match = string2.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string2.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string2.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string2.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string2.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!hasOwnProperty.call(cssKeywords, match[1])) {
        return null;
      }
      rgb = cssKeywords[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };
  cs.get.hsl = function(string2) {
    if (!string2) {
      return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string2.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var s = clamp(parseFloat(match[2]), 0, 100);
      var l = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string2) {
    if (!string2) {
      return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string2.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var w = clamp(parseFloat(match[2]), 0, 100);
      var b = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }
  function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }
  const reverseKeywords = {};
  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
  const convert$1 = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  for (const model of Object.keys(convert$1)) {
    if (!("channels" in convert$1[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert$1[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert$1[model].labels.length !== convert$1[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const { channels, labels } = convert$1[model];
    delete convert$1[model].channels;
    delete convert$1[model].labels;
    Object.defineProperty(convert$1[model], "channels", { value: channels });
    Object.defineProperty(convert$1[model], "labels", { value: labels });
  }
  convert$1.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert$1.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert$1.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert$1.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert$1.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }
  convert$1.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert$1.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert$1.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert$1.rgb.lab = function(rgb) {
    const xyz = convert$1.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert$1.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert$1.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert$1.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t2 = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t2, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t2];
      case 3:
        return [p, q, v];
      case 4:
        return [t2, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert$1.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert$1.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert$1.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert$1.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert$1.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert$1.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert$1.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert$1.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert$1.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert$1.hsv.ansi16 = function(args) {
    return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
  };
  convert$1.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert$1.ansi16.rgb = function(args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert$1.ansi256.rgb = function(args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert$1.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string2 = integer.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert$1.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split("").map((char) => {
        return char + char;
      }).join("");
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 255;
    const g = integer >> 8 & 255;
    const b = integer & 255;
    return [r, g, b];
  };
  convert$1.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert$1.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f = 0;
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert$1.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert$1.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert$1.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    let f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert$1.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert$1.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert$1.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert$1.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert$1.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert$1.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert$1.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert$1.gray.hsv = convert$1.gray.hsl;
  convert$1.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert$1.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert$1.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert$1.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (val << 16) + (val << 8) + val;
    const string2 = integer.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert$1.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
  function buildGraph() {
    const graph = {};
    const models2 = Object.keys(convert$1);
    for (let len = models2.length, i = 0; i < len; i++) {
      graph[models2[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(convert$1[current]);
      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = convert$1[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(convert$1[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  function route(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models2 = Object.keys(graph);
    for (let len = models2.length, i = 0; i < len; i++) {
      const toModel = models2[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  }
  const convert = {};
  const models = Object.keys(convert$1);
  function wrapRaw(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach((fromModel) => {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", { value: convert$1[fromModel].channels });
    Object.defineProperty(convert[fromModel], "labels", { value: convert$1[fromModel].labels });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel) => {
      const fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  const skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    "keyword",
    // Gray conflicts with some method names, and has its own method defined.
    "gray",
    // Shouldn't really be in color-convert either...
    "hex"
  ];
  const hashedModelKeys = {};
  for (const model of Object.keys(convert)) {
    hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
  }
  const limiters = {};
  function Color(object2, model) {
    if (!(this instanceof Color)) {
      return new Color(object2, model);
    }
    if (model && model in skippedModels) {
      model = null;
    }
    if (model && !(model in convert)) {
      throw new Error("Unknown model: " + model);
    }
    let i;
    let channels;
    if (object2 == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (object2 instanceof Color) {
      this.model = object2.model;
      this.color = [...object2.color];
      this.valpha = object2.valpha;
    } else if (typeof object2 === "string") {
      const result = cs.get(object2);
      if (result === null) {
        throw new Error("Unable to parse color from string: " + object2);
      }
      this.model = result.model;
      channels = convert[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (object2.length > 0) {
      this.model = model || "rgb";
      channels = convert[this.model].channels;
      const newArray = Array.prototype.slice.call(object2, 0, channels);
      this.color = zeroArray(newArray, channels);
      this.valpha = typeof object2[channels] === "number" ? object2[channels] : 1;
    } else if (typeof object2 === "number") {
      this.model = "rgb";
      this.color = [
        object2 >> 16 & 255,
        object2 >> 8 & 255,
        object2 & 255
      ];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      const keys = Object.keys(object2);
      if ("alpha" in object2) {
        keys.splice(keys.indexOf("alpha"), 1);
        this.valpha = typeof object2.alpha === "number" ? object2.alpha : 0;
      }
      const hashedKeys = keys.sort().join("");
      if (!(hashedKeys in hashedModelKeys)) {
        throw new Error("Unable to parse color from object: " + JSON.stringify(object2));
      }
      this.model = hashedModelKeys[hashedKeys];
      const { labels } = convert[this.model];
      const color = [];
      for (i = 0; i < labels.length; i++) {
        color.push(object2[labels[i]]);
      }
      this.color = zeroArray(color);
    }
    if (limiters[this.model]) {
      channels = convert[this.model].channels;
      for (i = 0; i < channels; i++) {
        const limit = limiters[this.model][i];
        if (limit) {
          this.color[i] = limit(this.color[i]);
        }
      }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
      Object.freeze(this);
    }
  }
  Color.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(places) {
      let self = this.model in cs.to ? this : this.rgb();
      self = self.round(typeof places === "number" ? places : 1);
      const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return cs.to[self.model](args);
    },
    percentString(places) {
      const self = this.rgb().round(typeof places === "number" ? places : 1);
      const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return cs.to.rgb.percent(args);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      const result = {};
      const { channels } = convert[this.model];
      const { labels } = convert[this.model];
      for (let i = 0; i < channels; i++) {
        result[labels[i]] = this.color[i];
      }
      if (this.valpha !== 1) {
        result.alpha = this.valpha;
      }
      return result;
    },
    unitArray() {
      const rgb = this.rgb().color;
      rgb[0] /= 255;
      rgb[1] /= 255;
      rgb[2] /= 255;
      if (this.valpha !== 1) {
        rgb.push(this.valpha);
      }
      return rgb;
    },
    unitObject() {
      const rgb = this.rgb().object();
      rgb.r /= 255;
      rgb.g /= 255;
      rgb.b /= 255;
      if (this.valpha !== 1) {
        rgb.alpha = this.valpha;
      }
      return rgb;
    },
    round(places) {
      places = Math.max(places || 0, 0);
      return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
    },
    alpha(value) {
      if (value !== void 0) {
        return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
      }
      return this.valpha;
    },
    // Rgb
    red: getset("rgb", 0, maxfn(255)),
    green: getset("rgb", 1, maxfn(255)),
    blue: getset("rgb", 2, maxfn(255)),
    hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
    saturationl: getset("hsl", 1, maxfn(100)),
    lightness: getset("hsl", 2, maxfn(100)),
    saturationv: getset("hsv", 1, maxfn(100)),
    value: getset("hsv", 2, maxfn(100)),
    chroma: getset("hcg", 1, maxfn(100)),
    gray: getset("hcg", 2, maxfn(100)),
    white: getset("hwb", 1, maxfn(100)),
    wblack: getset("hwb", 2, maxfn(100)),
    cyan: getset("cmyk", 0, maxfn(100)),
    magenta: getset("cmyk", 1, maxfn(100)),
    yellow: getset("cmyk", 2, maxfn(100)),
    black: getset("cmyk", 3, maxfn(100)),
    x: getset("xyz", 0, maxfn(95.047)),
    y: getset("xyz", 1, maxfn(100)),
    z: getset("xyz", 2, maxfn(108.833)),
    l: getset("lab", 0, maxfn(100)),
    a: getset("lab", 1),
    b: getset("lab", 2),
    keyword(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return convert[this.model].keyword(this.color);
    },
    hex(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return cs.to.hex(this.rgb().round().color);
    },
    hexa(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      const rgbArray = this.rgb().round().color;
      let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (alphaHex.length === 1) {
        alphaHex = "0" + alphaHex;
      }
      return cs.to.hex(rgbArray) + alphaHex;
    },
    rgbNumber() {
      const rgb = this.rgb().color;
      return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
    },
    luminosity() {
      const rgb = this.rgb().color;
      const lum = [];
      for (const [i, element] of rgb.entries()) {
        const chan = element / 255;
        lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast(color2) {
      const lum1 = this.luminosity();
      const lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level(color2) {
      const contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7) {
        return "AAA";
      }
      return contrastRatio >= 4.5 ? "AA" : "";
    },
    isDark() {
      const rgb = this.rgb().color;
      const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
      return yiq < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      const rgb = this.rgb();
      for (let i = 0; i < 3; i++) {
        rgb.color[i] = 255 - rgb.color[i];
      }
      return rgb;
    },
    lighten(ratio) {
      const hsl = this.hsl();
      hsl.color[2] += hsl.color[2] * ratio;
      return hsl;
    },
    darken(ratio) {
      const hsl = this.hsl();
      hsl.color[2] -= hsl.color[2] * ratio;
      return hsl;
    },
    saturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] += hsl.color[1] * ratio;
      return hsl;
    },
    desaturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] -= hsl.color[1] * ratio;
      return hsl;
    },
    whiten(ratio) {
      const hwb = this.hwb();
      hwb.color[1] += hwb.color[1] * ratio;
      return hwb;
    },
    blacken(ratio) {
      const hwb = this.hwb();
      hwb.color[2] += hwb.color[2] * ratio;
      return hwb;
    },
    grayscale() {
      const rgb = this.rgb().color;
      const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      return Color.rgb(value, value, value);
    },
    fade(ratio) {
      return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer(ratio) {
      return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate(degrees) {
      const hsl = this.hsl();
      let hue = hsl.color[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      hsl.color[0] = hue;
      return hsl;
    },
    mix(mixinColor, weight) {
      if (!mixinColor || !mixinColor.rgb) {
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
      }
      const color1 = mixinColor.rgb();
      const color2 = this.rgb();
      const p = weight === void 0 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = color1.alpha() - color2.alpha();
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
      const w2 = 1 - w1;
      return Color.rgb(
        w1 * color1.red() + w2 * color2.red(),
        w1 * color1.green() + w2 * color2.green(),
        w1 * color1.blue() + w2 * color2.blue(),
        color1.alpha() * p + color2.alpha() * (1 - p)
      );
    }
  };
  for (const model of Object.keys(convert)) {
    if (skippedModels.includes(model)) {
      continue;
    }
    const { channels } = convert[model];
    Color.prototype[model] = function(...args) {
      if (this.model === model) {
        return new Color(this);
      }
      if (args.length > 0) {
        return new Color(args, model);
      }
      return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
    };
    Color[model] = function(...args) {
      let color = args[0];
      if (typeof color === "number") {
        color = zeroArray(args, channels);
      }
      return new Color(color, model);
    };
  }
  function roundTo(number2, places) {
    return Number(number2.toFixed(places));
  }
  function roundToPlace(places) {
    return function(number2) {
      return roundTo(number2, places);
    };
  }
  function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];
    for (const m of model) {
      (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }
    model = model[0];
    return function(value) {
      let result;
      if (value !== void 0) {
        if (modifier) {
          value = modifier(value);
        }
        result = this[model]();
        result.color[channel] = value;
        return result;
      }
      result = this[model]().color[channel];
      if (modifier) {
        result = modifier(result);
      }
      return result;
    };
  }
  function maxfn(max) {
    return function(v) {
      return Math.max(0, Math.min(max, v));
    };
  }
  function assertArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  function zeroArray(array2, length) {
    for (let i = 0; i < length; i++) {
      if (typeof array2[i] !== "number") {
        array2[i] = 0;
      }
    }
    return array2;
  }
  function convertFormat(color = "#fff", format = "rgb", type = "string") {
    let colorObj = Color(color);
    if (colorObj[format]) {
      if (format == "hex" && type != "string")
        format = "rgb";
      let typeName = "";
      switch (type) {
        case "string":
          typeName = "toString";
          break;
        case "object":
          typeName = "object";
          break;
        case "array":
          typeName = "array";
          break;
        case "round":
          typeName = "round";
          break;
        default:
          throw Error("Unsupported target type:" + type);
      }
      return colorObj[format]()[typeName]();
    } else {
      throw Error("Unsupported target format: " + format);
    }
  }
  function gradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = convertFormat(startColor, "rgb", "array");
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = convertFormat(endColor, "rgb", "array");
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = convertFormat(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`, "hex");
      if (i === 0)
        hex = convertFormat(startColor, "hex");
      if (i === step - 1)
        hex = convertFormat(endColor, "hex");
      colorArr.push(hex);
    }
    return colorArr;
  }
  const index$1 = {
    /**
     * 格式转换。
     */
    convertFormat,
    /**
     * 计算两个颜色之间的渐变值。
     */
    gradient,
    /**
     * 增加颜色的亮度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 增加的亮度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    lighten: (color, value, format = "rgb", type = "string") => convertFormat(Color(color).lighten(value), format, type),
    /**
     * 减少颜色的亮度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 减少的亮度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    darken: (color, value, format = "rgb", type = "string") => convertFormat(Color(color).darken(value), format, type),
    /**
     * 增加颜色的饱和度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 增加的饱和度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    saturate: (color, value, format = "rgb", type = "string") => convertFormat(Color(color).saturate(value), format, type),
    /**
     * 减少颜色的饱和度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 减少的饱和度值（0-1）。
     * @returns {string} 调整后的颜色。
     */
    desaturate: (color, value, format = "rgb", type = "string") => convertFormat(Color(color).desaturate(value), format, type),
    /**
     * 旋转颜色的色相。
     * @param {string} color - 输入的颜色。
     * @param {number} degrees - 旋转的度数。
     * @returns {string} 调整后的颜色。
     */
    rotate: (color, degrees, format = "rgb", type = "string") => convertFormat(Color(color).rotate(degrees), format, type),
    /**
     * 调整颜色的透明度。
     * @param {string} color - 输入的颜色。
     * @param {number} value - 透明度值（0-1，其中 1 是不透明）。
     * @returns {string} 调整后的颜色。
     */
    adjustAlpha: (color, value, format = "rgb", type = "string") => convertFormat(Color(color).alpha(value), format, type),
    /**
     * 获取颜色的亮度。
     * @param {string} color - 输入的颜色。
     * @returns {number} 颜色的亮度值（0-1）。
     */
    luminosity: (color, format) => Color(color).luminosity(),
    /**
     * 判断颜色是否为暗色。
     * @param {string} color - 输入的颜色。
     * @returns {boolean} 如果是暗色则返回 true，否则返回 false。
     */
    isDark: (color, format) => Color(color).isDark(),
    /**
     * 判断颜色是否为亮色。
     * @param {string} color - 输入的颜色。
     * @returns {boolean} 如果是亮色则返回 true，否则返回 false。
     */
    isLight: (color, format) => Color(color).isLight()
  };
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name2 = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name2) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$w) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$w) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "wu-form-item");
    const form = $parent.call(instance, "wu-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$w;
    uni.$w.config = deepMerge2(uni.$w.config, config);
    uni.$w.props = deepMerge2(uni.$w.props, props2);
    uni.$w.color = deepMerge2(uni.$w.color, color);
    uni.$w.zIndex = deepMerge2(uni.$w.zIndex, zIndex);
  }
  const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    Color: index$1,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$w.getRect = this.$wuGetRect;
    },
    created() {
      this.$w.getRect = this.$wuGetRect;
    },
    computed: {
      $w() {
        return {
          ...index,
          test
        };
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name2, fixed, change) {
          const prefix = `wu-${name2}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $wuGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      // 查询节点布局是否相交
      IntersectionObserver(_this, nodeName, callback) {
        this.$nextTick(() => {
          let intersectionObserver = uni.createIntersectionObserver(_this);
          intersectionObserver.relativeToViewport({
            bottom: Number(this.lazyLoadRootMargin)
          }).observe(nodeName, (res) => {
            callback(res, () => intersectionObserver.disconnect());
          });
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$w.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("wuOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const icons = {
    "wuicon-level": "e68f",
    "wuicon-download": "e670",
    "wuicon-search": "e632",
    "wuicon-reload": "e627",
    "wuicon-scan": "e631",
    "wuicon-calendar": "e65c",
    "wuicon-bag": "e647",
    "wuicon-checkbox-mark": "e659",
    "wuicon-attach": "e640",
    "wuicon-wifi-off": "e6cc",
    "wuicon-woman": "e626",
    "wuicon-man": "e675",
    "wuicon-chat": "e656",
    "wuicon-chat-fill": "e63f",
    "wuicon-red-packet": "e6c3",
    "wuicon-folder": "e694",
    "wuicon-order": "e695",
    "wuicon-arrow-up-fill": "e636",
    "wuicon-arrow-down-fill": "e638",
    "wuicon-backspace": "e64d",
    "wuicon-photo": "e60d",
    "wuicon-photo-fill": "e6b4",
    "wuicon-lock": "e69d",
    "wuicon-lock-fill": "e6a6",
    "wuicon-lock-open": "e68d",
    "wuicon-lock-opened-fill": "e6a1",
    "wuicon-home": "e67b",
    "wuicon-home-fill": "e68e",
    "wuicon-star": "e618",
    "wuicon-star-fill": "e61e",
    "wuicon-share": "e629",
    "wuicon-share-fill": "e6bb",
    "wuicon-share-square": "e6c4",
    "wuicon-volume": "e605",
    "wuicon-volume-fill": "e624",
    "wuicon-volume-off": "e6bd",
    "wuicon-volume-off-fill": "e6c8",
    "wuicon-trash": "e623",
    "wuicon-trash-fill": "e6ce",
    "wuicon-shopping-cart": "e6cb",
    "wuicon-shopping-cart-fill": "e630",
    "wuicon-question-circle": "e622",
    "wuicon-question-circle-fill": "e6bc",
    "wuicon-plus": "e625",
    "wuicon-plus-circle": "e603",
    "wuicon-plus-circle-fill": "e611",
    "wuicon-tags": "e621",
    "wuicon-tags-fill": "e613",
    "wuicon-pause": "e61c",
    "wuicon-pause-circle": "e696",
    "wuicon-pause-circle-fill": "e60c",
    "wuicon-play-circle": "e6af",
    "wuicon-play-circle-fill": "e62a",
    "wuicon-map": "e665",
    "wuicon-map-fill": "e6a8",
    "wuicon-phone": "e6ba",
    "wuicon-phone-fill": "e6ac",
    "wuicon-list": "e690",
    "wuicon-list-dot": "e6a9",
    "wuicon-info-circle": "e69f",
    "wuicon-info-circle-fill": "e6a7",
    "wuicon-minus": "e614",
    "wuicon-minus-circle": "e6a5",
    "wuicon-mic": "e66d",
    "wuicon-mic-off": "e691",
    "wuicon-grid": "e68c",
    "wuicon-grid-fill": "e698",
    "wuicon-eye": "e664",
    "wuicon-eye-fill": "e697",
    "wuicon-eye-off": "e69c",
    "wuicon-eye-off-outline": "e688",
    "wuicon-file-text": "e687",
    "wuicon-file-text-fill": "e67f",
    "wuicon-edit-pen": "e65d",
    "wuicon-edit-pen-fill": "e679",
    "wuicon-email": "e673",
    "wuicon-email-fill": "e683",
    "wuicon-checkmark": "e64a",
    "wuicon-checkmark-circle": "e643",
    "wuicon-checkmark-circle-fill": "e668",
    "wuicon-clock": "e66c",
    "wuicon-clock-fill": "e64b",
    "wuicon-close": "e65a",
    "wuicon-close-circle": "e64e",
    "wuicon-close-circle-fill": "e666",
    "wuicon-car": "e64f",
    "wuicon-car-fill": "e648",
    "wuicon-bell": "e651",
    "wuicon-bell-fill": "e604",
    "wuicon-play-left": "e6bf",
    "wuicon-play-right": "e6b3",
    "wuicon-play-left-fill": "e6ae",
    "wuicon-play-right-fill": "e6ad",
    "wuicon-skip-back-left": "e6c5",
    "wuicon-skip-forward-right": "e61f",
    "wuicon-setting": "e602",
    "wuicon-setting-fill": "e6d0",
    "wuicon-more-dot-fill": "e66f",
    "wuicon-more-circle": "e69e",
    "wuicon-more-circle-fill": "e684",
    "wuicon-arrow-upward": "e641",
    "wuicon-arrow-downward": "e634",
    "wuicon-arrow-leftward": "e63b",
    "wuicon-arrow-rightward": "e644",
    "wuicon-arrow-up": "e633",
    "wuicon-arrow-down": "e63e",
    "wuicon-arrow-left": "e646",
    "wuicon-arrow-right": "e63c",
    "wuicon-thumb-up": "e612",
    "wuicon-thumb-up-fill": "e62c",
    "wuicon-thumb-down": "e60a",
    "wuicon-thumb-down-fill": "e628",
    "wuicon-coupon": "e65f",
    "wuicon-coupon-fill": "e64c",
    "wuicon-kefu-ermai": "e660",
    "wuicon-server-fill": "e610",
    "wuicon-server-man": "e601",
    "wuicon-warning": "e6c1",
    "wuicon-warning-fill": "e6c7",
    "wuicon-camera": "e642",
    "wuicon-camera-fill": "e650",
    "wuicon-pushpin": "e6d1",
    "wuicon-pushpin-fill": "e6b6",
    "wuicon-heart": "e6a2",
    "wuicon-heart-fill": "e68b",
    "wuicon-account": "e63a",
    "wuicon-account-fill": "e653",
    "wuicon-integral": "e693",
    "wuicon-integral-fill": "e6b1",
    "wuicon-gift": "e680",
    "wuicon-gift-fill": "e6b0",
    "wuicon-empty-data": "e671",
    "wuicon-empty-address": "e68a",
    "wuicon-empty-favor": "e662",
    "wuicon-empty-car": "e656",
    "wuicon-empty-order": "e66b",
    "wuicon-empty-list": "e671",
    "wuicon-empty-search": "e677",
    "wuicon-empty-permission": "e67c",
    "wuicon-empty-news": "e67d",
    "wuicon-empty-history": "e684",
    "wuicon-empty-coupon": "e69b",
    "wuicon-empty-page": "e60e",
    "wuicon-apple-fill": "e635",
    "wuicon-zhifubao-circle-fill": "e617",
    "wuicon-weixin-circle-fill": "e6cd",
    "wuicon-weixin-fill": "e620",
    "wuicon-qq-fill": "e608",
    "wuicon-qq-circle-fill": "e6b9",
    "wuicon-moments": "e6a0",
    "wuicon-moments-circel-fill": "e6c2",
    "wuicon-twitter": "e607",
    "wuicon-twitter-circle-fill": "e6cf"
  };
  const props$1 = {
    props: {
      // 图标类名
      name: {
        type: String,
        default: ""
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: "#606266"
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: "16px"
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: false
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: null
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: "wuicon"
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: ""
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: "right"
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: "15px"
      },
      // label的颜色
      labelColor: {
        type: String,
        default: "#606266"
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: "3px"
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: ""
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: ""
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: ""
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: 0
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: false
      },
      ...(_f = (_e = uni.$w) == null ? void 0 : _e.props) == null ? void 0 : _f.icon
    }
  };
  const _sfc_main$3 = {
    name: "wu-icon",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        colorType: [
          "primary",
          "success",
          "info",
          "error",
          "warning"
        ]
      };
    },
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix);
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && this.colorType.includes(this.color))
          classes.push("wu-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.$w.addUnit(this.size),
          lineHeight: this.$w.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$w.addUnit(this.top)
        };
        if (this.color && !this.colorType.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
        return this.name.indexOf("/") !== -1 || isBase64;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$w.addUnit(this.width) : this.$w.addUnit(this.size);
        style.height = this.height ? this.$w.addUnit(this.height) : this.$w.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        const code2 = icons["wuicon-" + this.name];
        if (["wuicon"].indexOf(this.customPrefix) > -1) {
          return code2 ? unescape(`%u${code2}`) : this.name;
        } else {
          return "";
        }
      },
      // label样式
      labelStyle() {
        let style = {
          color: this.labelColor,
          fontSize: this.$w.addUnit(this.labelSize),
          marginLeft: this.labelPos == "right" ? this.$w.addUnit(this.space) : 0,
          marginTop: this.labelPos == "bottom" ? this.$w.addUnit(this.space) : 0,
          marginRight: this.labelPos == "left" ? this.$w.addUnit(this.space) : 0,
          marginBottom: this.labelPos == "top" ? this.$w.addUnit(this.space) : 0
        };
        return style;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["wu-icon", ["wu-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" && (_ctx.labelPos == "left" || _ctx.labelPos == "top") ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "wu-icon__label",
            style: vue.normalizeStyle($options.labelStyle)
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 1,
          class: "wu-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, _ctx.$w.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 2,
          class: vue.normalizeClass(["wu-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, _ctx.$w.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" && (_ctx.labelPos == "right" || _ctx.labelPos == "bottom") ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 3,
            class: "wu-icon__label",
            style: vue.normalizeStyle($options.labelStyle)
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-c6cfe730"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/wu-icon/components/wu-icon/wu-icon.vue"]]);
  const props = {
    props: {
      // checkbox的名称
      name: {
        type: [String, Number, Boolean],
        default: ""
      },
      // 形状，square为方形，circle为圆型
      shape: {
        type: String,
        default: "square"
      },
      // 整体的大小
      size: {
        type: [String, Number],
        default: ""
      },
      // 是否默认选中
      checked: {
        type: Boolean,
        default: false
      },
      // 是否禁用
      disabled: {
        type: [String, Boolean],
        default: ""
      },
      // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
      activeColor: {
        type: String,
        default: ""
      },
      // 未选中的颜色
      inactiveColor: {
        type: String,
        default: ""
      },
      // 图标的大小，单位px
      iconSize: {
        type: [String, Number],
        default: ""
      },
      // 图标颜色
      iconColor: {
        type: String,
        default: ""
      },
      // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
      label: {
        type: [String, Number],
        default: ""
      },
      // label的字体大小，px单位
      labelSize: {
        type: [String, Number],
        default: ""
      },
      // label的颜色
      labelColor: {
        type: String,
        default: ""
      },
      // 是否禁止点击提示语选中复选框
      labelDisabled: {
        type: [String, Boolean],
        default: ""
      },
      // 自定义样式
      customStyle: {
        type: Object,
        default: () => {
          return {};
        }
      },
      ...(_h = (_g = uni.$w) == null ? void 0 : _g.props) == null ? void 0 : _h.checkbox
    }
  };
  const _sfc_main$2 = {
    name: "wu-checkbox",
    emits: ["change"],
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        isChecked: false,
        // 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
        // 故只能使用如此方法
        parentData: {
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: "square",
          activeColor: null,
          inactiveColor: null,
          size: 18,
          modelValue: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        }
      };
    },
    computed: {
      // 是否禁用，如果父组件u-raios-group禁用的话，将会忽略子组件的配置
      elDisabled() {
        return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
      },
      // 是否禁用label点击
      elLabelDisabled() {
        return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
      },
      // 组件尺寸，对应size的值，默认值为21px
      elSize() {
        return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
      },
      // 组件的勾选图标的尺寸，默认12px
      elIconSize() {
        return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
      },
      // 组件选中激活时的颜色
      elActiveColor() {
        return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
      },
      // 组件选未中激活时的颜色
      elInactiveColor() {
        return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
      },
      // label的颜色
      elLabelColor() {
        return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
      },
      // 组件的形状
      elShape() {
        return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
      },
      // label大小
      elLabelSize() {
        return this.$w.addUnit(this.labelSize ? this.labelSize : this.parentData.labelSize ? this.parentData.labelSize : "15");
      },
      elIconColor() {
        const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
        if (this.elDisabled) {
          return this.isChecked ? this.elInactiveColor : "transparent";
        } else {
          return this.isChecked ? iconColor : "transparent";
        }
      },
      iconClasses() {
        let classes = [];
        classes.push("wu-checkbox__icon-wrap--" + this.elShape);
        if (this.elDisabled) {
          classes.push("wu-checkbox__icon-wrap--disabled");
        }
        if (this.isChecked && this.elDisabled) {
          classes.push("wu-checkbox__icon-wrap--disabled--checked");
        }
        return classes;
      },
      iconWrapStyle() {
        const style = {};
        style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
        style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
        style.width = this.$w.addUnit(this.elSize);
        style.height = this.$w.addUnit(this.elSize);
        if (this.parentData.iconPlacement === "right") {
          style.marginRight = 0;
        }
        return style;
      },
      checkboxStyle() {
        const style = {};
        if (this.parentData.borderBottom && this.parentData.placement === "row") {
          this.$w.error("检测到您将borderBottom设置为true，需要同时将wu-checkbox-group的placement设置为column才有效");
        }
        if (this.parentData.borderBottom && this.parentData.placement === "column") {
          style.paddingBottom = "8px";
          style.borderBottom = "2rpx solid #dadbde";
        }
        return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          this.$w.error("wu-checkbox必须搭配wu-checkbox-group组件使用");
        }
        if (this.checked) {
          this.isChecked = true;
        } else if (this.$w.test.array(this.parentData.modelValue)) {
          this.isChecked = this.parentData.modelValue.some((item) => {
            return item === this.name;
          });
        }
      },
      updateParentData() {
        this.getParentData("wu-checkbox-group");
      },
      // 横向两端排列时，点击组件即可触发选中事件
      wrapperClickHandler(e) {
        this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
      },
      // 点击图标
      iconClickHandler(e) {
        this.preventEvent(e);
        if (!this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      // 点击label
      labelClickHandler(e) {
        this.preventEvent(e);
        if (!this.elLabelDisabled && !this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      emitEvent() {
        this.$emit("change", this.isChecked);
        this.$nextTick(() => {
          this.$w.formValidate(this, "change");
        });
      },
      // 改变组件选中状态
      // 这里的改变的依据是，更改本组件的checked值为true，同时通过父组件遍历所有wu-checkbox实例
      // 将本组件外的其他wu-checkbox的checked都设置为false(都被取消选中状态)，因而只剩下一个为选中状态
      setRadioCheckedStatus() {
        this.isChecked = !this.isChecked;
        this.emitEvent();
        typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
      }
    },
    watch: {
      checked() {
        this.isChecked = this.checked;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_icon = resolveEasycom(vue.resolveDynamicComponent("wu-icon"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["wu-checkbox", [`wu-checkbox-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "wu-border-bottom"]]),
        style: vue.normalizeStyle([$options.checkboxStyle]),
        onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"]))
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["wu-checkbox__icon-wrap", $options.iconClasses]),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
            style: vue.normalizeStyle([$options.iconWrapStyle])
          },
          [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              vue.createVNode(_component_wu_icon, {
                class: "wu-checkbox__icon-wrap__icon",
                name: "checkbox-mark",
                size: $options.elIconSize,
                color: $options.elIconColor
              }, null, 8, ["size", "color"])
            ], true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "text",
            {
              onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
              style: vue.normalizeStyle({
                color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
                fontSize: $options.elLabelSize,
                lineHeight: $options.elLabelSize
              })
            },
            vue.toDisplayString(_ctx.label),
            5
            /* TEXT, STYLE */
          )
        ], true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-ae6bf3bf"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/wu-checkbox/components/wu-checkbox/wu-checkbox.vue"]]);
  const _imports_1 = "/static/banner/shouji.svg";
  const _imports_2 = "/static/banner/suo.svg";
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {
      NavTo() {
        uni.reLaunch({
          url: "/pages/index/index"
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wu_checkbox = resolveEasycom(vue.resolveDynamicComponent("wu-checkbox"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("view", {
        class: "iocBack",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.NavTo && $options.NavTo(...args))
      }, [
        vue.createElementVNode("image", {
          src: _imports_0$6,
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "center", "align-items": "center", "width": "100%", "height": "100vh" } }, [
        vue.createElementVNode("view", { class: "login-box" }, [
          vue.createElementVNode("view", { class: "login-input" }, [
            vue.createElementVNode("view", { class: "input-icon" }, [
              vue.createElementVNode("image", {
                src: _imports_1,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "input-input" }, [
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "请输入手机号"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "login-input" }, [
            vue.createElementVNode("view", { class: "input-icon" }, [
              vue.createElementVNode("image", {
                src: _imports_2,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "input-input" }, [
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "请输入密码",
                password: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "login-input" }, [
            vue.createElementVNode("view", { class: "input-icon" }, [
              vue.createElementVNode("image", {
                src: _imports_2,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "input-input" }, [
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "请输入验证码"
              })
            ]),
            vue.createElementVNode("view", { class: "yzm" }, " 获取验证码 ")
          ]),
          vue.createElementVNode("view", { class: "checkbox" }, [
            vue.createVNode(_component_wu_checkbox, { style: { "align-items": "baseline", "color": "#707072" } }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("我已认真阅读并同意《“建行惠懂你”个人信息保护政策》和《“建行惠懂你”用户服务协议》，我行不会以任何形式向您收取担保、评估、过桥资金等附加费用!")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          vue.createElementVNode("view", { class: "btn" }, " 立即登录 "),
          vue.createElementVNode("view", { class: "footView" }, [
            vue.createElementVNode("view", { class: "footViewleft" }, " 手机注册 "),
            vue.createElementVNode("view", { class: "footViewrigth" }, " 忘记密码 ")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/login/login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/loan/loan", PagesLoanLoan);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/MyAccount/MyAccount", PagesMyAccountMyAccount);
  __definePage("pages/Disbursement/Disbursement", PagesDisbursementDisbursement);
  __definePage("pages/Enterprise/Enterprise", PagesEnterpriseEnterprise);
  __definePage("pages/login/login", PagesLoginLogin);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
