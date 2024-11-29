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
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$n = {
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
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
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
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
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
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
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
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
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
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
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
  const _sfc_main$m = {
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
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
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
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
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
  const _sfc_main$l = {
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
      tabsClick(index, item) {
        if (item.disabled)
          return;
        if (this.currentIndex != index) {
          this.shouldSetDx = false;
          this.$emit("change", index, item[this.valueKey]);
          this.currentIndex = index;
          this._preUpdateDotPosition(index);
        } else {
          this.$emit("secondClick", index, item[this.valueKey]);
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
      _preUpdateDotPosition(index) {
        this.$nextTick(() => {
          uni.createSelectorQuery().in(this).select(".z-tabs-scroll-view").fields({
            scrollOffset: true
          }, (data) => {
            if (data) {
              this.currentScrollLeft = data.scrollLeft;
              this._updateDotPosition(index);
            } else {
              this._updateDotPosition(index);
            }
          }).exec();
        });
      },
      //更新底部dot位置
      _updateDotPosition(index) {
        if (index >= this.itemNodeInfos.length)
          return;
        this.$nextTick(async () => {
          let node = this.itemNodeInfos[index];
          let offset = 0;
          let tabsContainerWidth = this.tabsContainerWidth;
          if (JSON.stringify(this.activeStyle) !== "{}") {
            const nodeRes = await this._getNodeClientRect(`#z-tabs-item-${index}`, true);
            if (nodeRes) {
              node = nodeRes[0];
              offset = this.currentScrollLeft;
              this.tabsHeight = Math.max(node.height + rpx2px(28), this.tabsHeight);
              tabsContainerWidth = 0;
              for (let i = 0; i < this.itemNodeInfos.length; i++) {
                let oldNode = this.itemNodeInfos[i];
                tabsContainerWidth += i === index ? node.width : oldNode.width;
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
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
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
                        vue.renderList($props.list, (item, index) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            ref_for: true,
                            ref: `z-tabs-item-${index}`,
                            id: `z-tabs-item-${index}`,
                            class: "z-tabs-item",
                            style: vue.normalizeStyle([$options.tabStyle]),
                            key: index,
                            onClick: ($event) => $options.tabsClick(index, item)
                          }, [
                            vue.createElementVNode("view", { class: "z-tabs-item-title-container" }, [
                              vue.createElementVNode(
                                "text",
                                {
                                  class: vue.normalizeClass({ "z-tabs-item-title-rpx": $props.unit === "rpx", "z-tabs-item-title-px": $props.unit === "px", "z-tabs-item-title-disabled": item.disabled }),
                                  style: vue.normalizeStyle([{ color: item.disabled ? $props.disabledColor : $data.currentIndex === index ? $props.activeColor : $props.inactiveColor }, item.disabled ? $props.disabledStyle : $data.currentIndex === index ? $props.activeStyle : $props.inactiveStyle])
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-0ac4bf81"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/z-tabs/components/z-tabs/z-tabs.vue"]]);
  const _imports_0$7 = "/static/ioc/title/back_icon.png";
  const _sfc_main$k = {
    data() {
      return {};
    },
    methods: {
      chang() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "navbar-title" }, [
      vue.createElementVNode("view", { class: "occupy" }),
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("view", {
          class: "iocBack",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.chang())
        }, [
          vue.createElementVNode("image", {
            src: _imports_0$7,
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
  const NavbarTitleVue = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-3dce3942"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/NavbarTitle.vue"]]);
  const _sfc_main$j = {
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
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
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
            vue.renderList($props.tabTitle, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["longItem", index === $data.tabClick ? "click" : ""]),
                style: vue.normalizeStyle("width:" + $data.isWidth + "px"),
                "data-index": index,
                key: index,
                id: "id" + index,
                onClick: ($event) => $options.longClick(index)
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
  const navTab = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-d8ce7dbc"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/navTab.vue"]]);
  const _sfc_main$i = {
    name: "loan",
    data() {
      return {};
    },
    props: {
      list: [Array, Object]
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
  const loan = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-6146b754"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/loan.vue"]]);
  const _imports_0$6 = "/static/banner/Strategy.png";
  const _sfc_main$h = {
    name: "Strategy",
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
                  src: _imports_0$6,
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
  const Strategy = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-bfd188c5"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/Strategy.vue"]]);
  function gologin(url) {
    const hasAccount = uni.getStorageSync("account");
    if (hasAccount) {
      uni.navigateTo({
        url
      });
    } else {
      uni.navigateTo({
        url: "/pages/login/login"
      });
    }
  }
  const _imports_0$5 = "/static/myiocn/login_1.png";
  const _sfc_main$g = {
    name: "shake",
    data() {
      return {};
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "image-container" }, [
      vue.createElementVNode("image", {
        src: _imports_0$5,
        mode: "",
        class: "rotating-shaking-image"
      })
    ]);
  }
  const shake = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-065250e3"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/shake.vue"]]);
  const _imports_0$4 = "/static/SVG/positioning.svg";
  const _imports_1$5 = "/static/banner/img_plate.gif";
  const _imports_2$3 = "/static/ioc/broadcast/ic_horn_pushmessage.png";
  const _imports_3$1 = "/static/Background/xiaoweibanner.png";
  const _sfc_main$f = {
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
        Strategy: ["看视频", "读攻略"],
        isLogin: ""
      };
    },
    components: {
      NavbarTitle: NavbarTitleVue,
      navTab,
      loan,
      Strategy,
      shake
    },
    created() {
      this.isLogin = uni.getStorageSync("account");
    },
    methods: {
      isLgin() {
        gologin("page/index/index");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_shake = vue.resolveComponent("shake");
    const _component_z_tabs = resolveEasycom(vue.resolveDynamicComponent("z-tabs"), __easycom_0$2);
    const _component_loan = vue.resolveComponent("loan");
    const _component_Strategy = vue.resolveComponent("Strategy");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "Home",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.isLgin && $options.isLgin(...args))
    }, [
      vue.createElementVNode("view", { style: { "width": "100%", "height": "100px" } }),
      vue.createElementVNode("view", { class: "navbar-title" }, [
        vue.createElementVNode("view", { class: "occupy" }),
        vue.createElementVNode("view", { class: "navigationBar" }, [
          vue.createElementVNode("view", { class: "navigationBar-positioning" }, [
            vue.createElementVNode("view", { class: "images" }, [
              vue.createElementVNode("image", { src: _imports_0$4 })
            ]),
            !$data.isLogin ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "text",
              style: { "margin-top": "-10rpx" }
            }, [
              vue.createElementVNode("text", null, "--")
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "text",
              style: { "margin-top": "-10rpx" }
            }, [
              vue.createElementVNode("text", null, "广州")
            ]))
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
              vue.renderList(4, (item, index) => {
                return vue.createElementVNode("view", {
                  class: "ioc_",
                  key: index
                }, [
                  vue.createElementVNode("image", {
                    src: `../../static/ioc/title/title_${index + 1}.png`,
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
          vue.createElementVNode("text", null, "提升贷款额度")
        ])
      ]),
      vue.createVNode(_component_shake),
      vue.createElementVNode("view", { class: "operation" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(10, (item, index) => {
            return vue.createElementVNode("view", {
              class: "operation_box",
              key: item
            }, [
              vue.createElementVNode("image", {
                src: `../../static/ioc/bar/iocn_${index + 1}.png`,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($data.operationBar[index]),
                  1
                  /* TEXT */
                )
              ])
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
        vue.renderList($data.loanList, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_loan, {
            list: item,
            key: index
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/index/index.vue"]]);
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
  const _sfc_main$e = {
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
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$d = {
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _imports_0$3 = "/static/myiocn/icon_more_nebu_xyoersonal_rymain.png";
  const _sfc_main$c = {
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
        id === 1 ? gologin("/pages/Enterprise/Enterprise") : "";
        if (uni.getStorageSync("account")) {
          id === 2 ? this.$emit("open") : "";
        }
        id === 3 ? gologin("/pages/loan/loan") : "";
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(true), vue.createElementBlock(
      vue.Fragment,
      null,
      vue.renderList($props.MyList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "list",
          key: index,
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
  const MyList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-5e0d8f88"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/My.vue"]]);
  const _imports_0$2 = "/static/myiocn/loginTopbg.png";
  const _imports_1$4 = "/static/myiocn/Topbg-1.png";
  const _imports_2$2 = "/static/myiocn/ic_setting.png";
  const _imports_3 = "/static/myiocn/head_nor.png";
  const _imports_4 = "/static/myiocn/home_icon_footer.png";
  const _imports_5 = "/static/myiocn/direction_right_icon.png";
  const _sfc_main$b = {
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
      this.IsLogin = uni.getStorageSync("account");
      formatAppLog("log", "at pages/my/my.vue:142", this.IsLogin);
    },
    methods: {
      open() {
        formatAppLog("log", "at pages/my/my.vue:146", this.$refs.popup.open("bottom"));
      },
      close() {
        this.$refs.popup.close();
      },
      account() {
        gologin("/pages/MyAccount/MyAccount");
      },
      Gologin() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      },
      quit() {
        formatAppLog("log", "at pages/my/my.vue:161", 123);
        uni.removeStorageSync("account");
        gologin("");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_MyList = vue.resolveComponent("MyList");
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "SetMy" }, [
      vue.createElementVNode("view", { class: "SetMyHead" }, [
        !$data.IsLogin ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          src: _imports_0$2,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.Gologin && $options.Gologin(...args))
        })) : (vue.openBlock(), vue.createElementBlock("image", {
          key: 1,
          style: {},
          src: _imports_1$4
        })),
        vue.createElementVNode("view", { class: "SetMyHeadTitle" }, [
          vue.createElementVNode("view", { style: { "width": "100%", "height": "40px" } }),
          vue.createElementVNode("view", { class: "HeadTitle" }, [
            vue.createElementVNode("view", { class: "title" }, " 我的 "),
            vue.createElementVNode("view", {
              class: "iocn",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.quit && $options.quit(...args))
            }, [
              vue.createElementVNode("image", {
                src: _imports_2$2,
                mode: ""
              })
            ])
          ]),
          !$data.IsLogin ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "Information",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.Gologin && $options.Gologin(...args))
          }, [
            vue.createElementVNode("view", { class: "Head" }, [
              vue.createElementVNode("image", {
                class: "Head-image",
                src: _imports_3,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("text", null, "欢迎登录")
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "Information"
          }, [
            vue.createElementVNode("view", { class: "Head" }, [
              vue.createElementVNode("image", {
                class: "Head-image",
                src: _imports_3,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("text", null, "*岳鹏"),
              vue.createElementVNode("view", { class: "provePhone" }, [
                vue.createElementVNode("view", { class: "prove" }, [
                  vue.createElementVNode("view", { class: "ioc_" }),
                  vue.createElementVNode("view", { class: "text" }, " 认证用户 ")
                ]),
                vue.createElementVNode("view", { class: "Phone" }, " 135***4922 ")
              ])
            ])
          ]))
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
            src: _imports_4,
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
                onClick: _cache[3] || (_cache[3] = ($event) => $options.close())
              }, " 取消 "),
              vue.createElementVNode("view", { class: "popup-text" }, " 请选择关联企业 "),
              vue.createElementVNode("view", {
                class: "rigth",
                onClick: _cache[4] || (_cache[4] = ($event) => $options.account())
              }, " 确定 ")
            ]),
            vue.createElementVNode("view", { class: "popup-conten" }, [
              vue.createElementVNode("view", { class: "popup-name" }, " 广州市智成毅创商务有限公司 "),
              vue.createElementVNode("view", { class: "popup-ioc" }, [
                vue.createElementVNode("image", {
                  class: "popup-image",
                  src: _imports_5,
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
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-2f1ef635"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/my/my.vue"]]);
  const _sfc_main$a = {
    name: "UniSteps",
    props: {
      direction: {
        // 排列方向 row column
        type: String,
        default: "row"
      },
      activeColor: {
        // 激活状态颜色
        type: String,
        default: "#2979FF"
      },
      deactiveColor: {
        // 未激活状态颜色
        type: String,
        default: "#a6c2ff"
      },
      active: {
        // 当前步骤
        type: Number,
        default: 0
      },
      activeIcon: {
        // 当前步骤
        type: String,
        default: "checkbox-filled"
      },
      options: {
        type: Array,
        default() {
          return [];
        }
      }
      // 数据
    },
    data() {
      return {
        heightArr: []
      };
    },
    mounted() {
      if (this.direction === "column") {
        let that = this;
        uni.createSelectorQuery().in(this).selectAll(".uni-steps__column-text").boundingClientRect((data) => {
          that.heightArr = data.map((item) => item.height + 1);
        }).exec();
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-steps" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column" : "uni-steps__row"])
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-container" : "uni-steps__row-container"])
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.options, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-line-item" : "uni-steps__row-line-item"]),
                      key: index,
                      style: vue.normalizeStyle({ height: $props.direction === "column" ? $data.heightArr[index] + "px" : "14px" })
                    },
                    [
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-line" : "uni-steps__row-line", $props.direction === "column" ? "uni-steps__column-line--before" : "uni-steps__row-line--before"]),
                          style: vue.normalizeStyle({ backgroundColor: index <= $props.active && index !== 0 ? $props.activeColor : index === 0 ? "transparent" : $props.deactiveColor })
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ),
                      index === $props.active ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-check" : "uni-steps__row-check"])
                        },
                        [
                          vue.createElementVNode("view", {
                            class: "",
                            style: { "width": "20rpx", "height": "20rpx", "background-color": "#4a79e0", "border-radius": "50%" }
                          })
                        ],
                        2
                        /* CLASS */
                      )) : (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-circle" : "uni-steps__row-circle"]),
                          style: vue.normalizeStyle([{ "width": "20rpx", "height": "20rpx", "background-color": "#4a79e0", "border-radius": "50%" }, { backgroundColor: index < $props.active ? $props.activeColor : $props.deactiveColor }])
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      )),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-line" : "uni-steps__row-line", $props.direction === "column" ? "uni-steps__column-line--after" : "uni-steps__row-line--after"]),
                          style: vue.normalizeStyle({ backgroundColor: index < $props.active && index !== $props.options.length - 1 ? $props.activeColor : index === $props.options.length - 1 ? "transparent" : $props.deactiveColor })
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-text-container" : "uni-steps__row-text-container"])
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.options, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: index,
                      class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-text" : "uni-steps__row-text"])
                    },
                    [
                      vue.createElementVNode(
                        "text",
                        {
                          style: vue.normalizeStyle([{ color: index === $props.active ? $props.activeColor : $props.deactiveColor }, { "font-size": "20rpx" }]),
                          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-title" : "uni-steps__row-title"])
                        },
                        vue.toDisplayString(item.title),
                        7
                        /* TEXT, CLASS, STYLE */
                      ),
                      vue.createElementVNode(
                        "text",
                        {
                          style: vue.normalizeStyle({ color: $props.deactiveColor }),
                          class: vue.normalizeClass([$props.direction === "column" ? "uni-steps__column-desc" : "uni-steps__row-desc"])
                        },
                        vue.toDisplayString(item.desc),
                        7
                        /* TEXT, CLASS, STYLE */
                      )
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-c0a11c53"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/uni_modules/uni-steps/components/uni-steps/uni-steps.vue"]]);
  const _sfc_main$9 = {
    name: "classification",
    data() {
      return {
        classificationOne: [
          { id: 1, name: "抵押快贷440 *** 0700", active: false }
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
              { id: 2, name: "本周", active: false },
              { id: 3, name: "本月", active: false },
              { id: 4, name: "近3个月", active: false },
              { id: 5, name: "近6个月", active: false }
            ]
          },
          {
            id: 2,
            title: "日前筛选",
            list: [
              { id: 1, name: "开始时间", active: false },
              { id: 2, name: "结束时间", active: false }
            ]
          }
        ]
      };
    },
    methods: {
      classificationBtn(id, name) {
        this.classificationOne.map((item) => item.active = false);
        this.classificationOne.find((item) => item.id === id).active = !this.classificationOne.find((item) => item.id === id).active;
        this.$emit("change", name);
      },
      classificationTowBtn(id, name) {
        this.classificationTow.map((item) => item.active = false);
        this.classificationTow.find((item) => item.id === id).active = !this.classificationTow.find((item) => item.id === id).active;
        this.$emit("change", name);
      },
      classificationTherrBtn(Fid, id, name) {
        formatAppLog("log", "at components/classification.vue:96", Fid);
        if (Fid === 1) {
          this.classificationTherr[Fid].list.map((item) => item.active = false);
          this.classificationTherr[Fid].list.find((item) => item.id === id).active = !this.classificationTherr[Fid].list.find((item) => item.id === id).active;
          return;
        }
        this.classificationTherr[Fid].list.map((item) => item.active = false);
        this.classificationTherr[Fid].list.find((item) => item.id === id).active = !this.classificationTherr[Fid].list.find((item) => item.id === id).active;
        this.$emit("change", name);
      },
      screenbtn() {
        this.$emit("change", "开始时间-结束时间");
      }
    },
    props: {
      menu: {
        type: [String, Number]
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "classification" }, [
      $props.menu == 1 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($data.classificationOne, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "classification-one",
            key: index,
            onClick: ($event) => $options.classificationBtn(item.id, item.name)
          }, [
            vue.createElementVNode(
              "view",
              { class: "classificationList" },
              vue.toDisplayString(item.name),
              1
              /* TEXT */
            ),
            item.active ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "icon"
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "checkmarkempty",
                size: "15",
                color: "#4a79e0"
              })
            ])) : vue.createCommentVNode("v-if", true)
          ], 8, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true),
      $props.menu == 2 ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.classificationTow, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "classification-one",
              key: item.id,
              onClick: ($event) => $options.classificationTowBtn(item.id, item.name)
            }, [
              vue.createElementVNode(
                "view",
                { class: "classificationList" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              ),
              item.active ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "checkmarkempty",
                  size: "15",
                  color: "#4a79e0"
                })
              ])) : vue.createCommentVNode("v-if", true)
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      $props.menu == 3 ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.classificationTherr, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "screen",
              key: item.id
            }, [
              vue.createElementVNode(
                "view",
                { class: "screen-title" },
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              ),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(item.list, (sum) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "screen-box",
                    key: sum.id,
                    onClick: ($event) => $options.classificationTherrBtn(item.id - 1, sum.id, sum.name)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "screen-box-text" },
                      vue.toDisplayString(sum.name),
                      1
                      /* TEXT */
                    ),
                    sum.active ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "right"
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "checkmarkempty",
                        size: "15",
                        color: "#fff"
                      })
                    ])) : vue.createCommentVNode("v-if", true)
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createElementVNode("view", {
          class: "screen-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.screenbtn && $options.screenbtn(...args))
        }, " 确认 ")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const classification = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-30d4d842"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/classification.vue"]]);
  const _imports_0$1 = "/static/myiocn/sanjiaoxing.png";
  const _imports_1$3 = "/static/myiocn/green.png";
  const _sfc_main$8 = {
    data() {
      return {
        Inquire: ["余额", "我的申请", "明细"],
        index: 0,
        TowIndex: ["申请中", "申请成功"],
        titleDetails: ["个人经营抵押快贷(44...", "还款", "近6个月"],
        DetailsDay: [
          {
            data: "2024/06/21 ",
            money: "1,600,000.00",
            name: "支用",
            week: "星期五",
            list: {
              "支用时间": "2024/06/21 11:19:15",
              "贷款种类": "抵押快贷",
              "凭证号": "102008P061718939954045563",
              "贷款账号": "4400 *** 0700"
            },
            istrue: true
          },
          {
            data: "2024/07/21",
            money: "4532.80",
            name: "还款",
            week: "星期日",
            list: {
              "还款时间": "2024/07/21 02:35:24",
              "贷款种类": "抵押快贷",
              "凭证号": "1082019781721416439791836",
              "贷款账号": "4400 *** 0700",
              "还款账号": "44050149020900002333"
            }
          },
          {
            data: "2024/08/21 ",
            money: "4684.10",
            name: "还款",
            week: "星期三",
            list: {
              "还款时间": "2024/08/21 01:55:14",
              "贷款种类": "抵押快贷",
              "凭证号": "1082013891724091236446786",
              "贷款账号": "4400 *** 0700",
              "还款账号": "44050149020900002333"
            }
          },
          {
            data: "2024/09/21",
            money: "4684.10",
            name: "还款",
            week: "星期六",
            list: {
              "还款时间": "2024/09/21 01:25:18",
              "贷款种类": "抵押快贷",
              "凭证号": "1082018971726771233504158",
              "贷款账号": "4400 *** 0700",
              "还款账号": "44050149020900002333"
            }
          },
          {
            data: "2024/10/21",
            money: "4532.80",
            name: "还款",
            week: "星期一",
            list: {
              "还款时间": "2024/10/21 01:54:29",
              "贷款种类": "抵押快贷",
              "凭证号": "1082016241729368995972612",
              "贷款账号": "4400 *** 0700",
              "还款账号": "44050149020900002333"
            }
          },
          {
            data: "2024/11/21",
            money: "4532.80",
            name: "还款",
            week: "星期四",
            list: {
              "还款时间": "2024/11/26 13:28:59",
              "贷款种类": "抵押快贷",
              "凭证号": "1081970011732594258586503",
              "贷款账号": "4400 *** 0700",
              "还款账号": "44050149020900002333"
            }
          }
        ],
        menu: "",
        list1: [
          {
            title: "申请提交"
          },
          {
            title: "申请受理"
          },
          {
            title: "贷款审批"
          },
          {
            title: "业务签约"
          },
          {
            title: "抵押登记"
          },
          {
            title: "发放贷款"
          }
        ],
        active: 0,
        apply: 0
      };
    },
    components: {
      NavbarTitle: NavbarTitleVue,
      classification
    },
    methods: {
      secondClick(index) {
        this.index = index;
      },
      Disbursement(item) {
        uni.clearStorageSync();
        uni.setStorageSync("DetailsDay", item);
        uni.navigateTo({
          url: "/pages/Disbursement/Disbursement"
        });
      },
      DetailsIndex(index) {
        this.menu = index + 1;
      },
      changeMenu(data) {
        this.titleDetails[this.menu - 1] = data;
        setTimeout(() => {
          this.menu = "";
        }, 200);
      },
      applyIned(index) {
        formatAppLog("log", "at pages/loan/loan.vue:266", index);
        this.apply = index;
      },
      DisbursementGo() {
        uni.navigateTo({
          url: "/pages/DisbursementDatali/DisbursementDatali"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavbarTitle = vue.resolveComponent("NavbarTitle");
    const _component_z_tabs = resolveEasycom(vue.resolveDynamicComponent("z-tabs"), __easycom_0$2);
    const _component_uni_steps = resolveEasycom(vue.resolveDynamicComponent("uni-steps"), __easycom_1);
    const _component_uni_section = vue.resolveComponent("uni-section");
    const _component_classification = vue.resolveComponent("classification");
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
      $data.index == 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        vue.createElementVNode("view", { class: "Moeny" }, [
          vue.createElementVNode("p", null, "贷款总余额(元)"),
          vue.createElementVNode("p", { style: { "font-size": "30px" } }, "1,600,000.00")
        ]),
        vue.createElementVNode("view", { class: "LoanMoeny" }, [
          vue.createElementVNode("view", { class: "LoanMoeny-title" }, [
            vue.createElementVNode("span", null, "抵押快贷"),
            vue.createElementVNode("span", { style: { "color": "#9c9c9c", "font-size": "25rpx" } }, "（4400***0700）")
          ]),
          vue.createElementVNode("view", { class: "LoanMoeny-body" }, [
            vue.createElementVNode("view", { class: "LoanMoeny-number" }, [
              vue.createElementVNode("p", null, "贷款余额(元)"),
              vue.createElementVNode("p", { style: { "font-size": "45rpx", "color": "#5179ce", "margin-top": "5rpx" } }, "1,600,000.00")
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
      ])) : vue.createCommentVNode("v-if", true),
      $data.index == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "Tow"
      }, [
        vue.createElementVNode("view", { class: "Details" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.TowIndex, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "name",
                key: index,
                onClick: ($event) => $options.applyIned(index)
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "text",
                    style: { "font-size": "30rpx", "padding": "20rpx" }
                  },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        $data.apply === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "apply"
        }, [
          vue.createElementVNode("view", { class: "apply-title" }, [
            vue.createElementVNode("view", { class: "apply-title-left" }, " 抵押快贷 "),
            vue.createElementVNode("view", { class: "apply-title-rigth" }, " 查看详情 ")
          ]),
          vue.createElementVNode("view", { style: { "width": "95%", "margin": "20rpx auto" } }, [
            vue.createElementVNode("span", { style: { "color": "#a8a8a8", "font-size": "25rpx", "padding": "20rpx" } }, "申请日期"),
            vue.createTextVNode(),
            vue.createElementVNode("span", { style: { "font-size": "28rpx" } }, "2024/05/20")
          ]),
          vue.createVNode(_component_uni_section, {
            title: "基本用法",
            type: "line",
            padding: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_steps, {
                options: $data.list1,
                active: $data.active
              }, null, 8, ["options", "active"])
            ]),
            _: 1
            /* STABLE */
          })
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "LoanMoeny",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.DisbursementGo && $options.DisbursementGo(...args))
        }, [
          vue.createElementVNode("view", { class: "LoanMoeny-title" }, [
            vue.createElementVNode("span", null, [
              vue.createTextVNode("抵押快贷"),
              vue.createElementVNode("span", { style: { "color": "#9c9c9c", "font-size": "25rpx", "font-weight": "normal" } }, "（4400***0700）")
            ]),
            vue.createElementVNode("span", { style: { "color": "#5179ce", "font-size": "25rpx", "margin-right": "30rpx", "font-weight": "normal" } }, "已生效 >")
          ]),
          vue.createElementVNode("view", { class: "LoanMoeny-body" }, [
            vue.createElementVNode("view", { class: "LoanMoeny-number" }, [
              vue.createElementVNode("p", null, "贷款余额(元)"),
              vue.createElementVNode("p", { style: { "font-size": "45rpx", "color": "#5179ce", "margin-top": "5rpx" } }, "1,600,000.00")
            ]),
            vue.createElementVNode("view", { class: "LoanMoeny-Day" }, [
              vue.createElementVNode("span", {
                class: "Day",
                style: { "color": "#a8a8a8" }
              }, "申请日期"),
              vue.createElementVNode("span", { class: "Day" }, "2024/06/21")
            ])
          ])
        ]))
      ])) : vue.createCommentVNode("v-if", true),
      $data.index == 2 ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
        vue.createElementVNode("view", { class: "Details" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.titleDetails, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "name",
                key: index,
                onClick: ($event) => $options.DetailsIndex(index)
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "ioc" }, [
                  vue.createElementVNode("image", {
                    class: "ioc-image",
                    src: _imports_0$1,
                    mode: ""
                  })
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        $data.menu ? (vue.openBlock(), vue.createBlock(_component_classification, {
          key: 0,
          menu: $data.menu,
          onChange: $options.changeMenu
        }, null, 8, ["menu", "onChange"])) : (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
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
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "foot" }, " 已经全部加载全部 ")
    ]);
  }
  const PagesLoanLoan = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-88930688"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/loan/loan.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    components: {
      NavTab: NavbarTitleVue
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
          vue.createElementVNode("text", null, "91440101MA59PJFB89")
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.createElementVNode("text", null, "企业法定代表人")
        ]),
        vue.createElementVNode("view", { class: "num" }, [
          vue.createElementVNode("text", null, "朱岳鹏")
        ])
      ]),
      vue.createElementVNode("view", { class: "text" }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.createElementVNode("text", null, "法定代表人身份证")
        ]),
        vue.createElementVNode("view", { class: "num" }, [
          vue.createElementVNode("text", null, "4401***0613")
        ])
      ]),
      vue.createElementVNode("button", {
        type: "default",
        style: {}
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
      NavbarTitleVue
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavbarTitleVue = vue.resolveComponent("NavbarTitleVue");
    const _component_z_tabs = resolveEasycom(vue.resolveDynamicComponent("z-tabs"), __easycom_0$2);
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
              vue.createTextVNode(" 建行账号(2333) "),
              vue.createElementVNode("span", { class: "text-title-span" }, "查看账号")
            ]),
            vue.createElementVNode("view", { class: "text-title-money" }, [
              vue.createElementVNode("view", { class: "balance" }, [
                vue.createElementVNode("view", null, "余额（元）"),
                vue.createElementVNode("view", null, "0.00")
              ]),
              vue.createElementVNode("view", { class: "balance" }, [
                vue.createElementVNode("view", null, "可用余额（元）"),
                vue.createElementVNode("view", null, "0.00")
              ])
            ]),
            vue.createElementVNode("view", { style: { "line-height": "40rpx", "width": "100%" } }, [
              vue.createElementVNode("p", {
                class: "",
                style: { "font-size": "25rpx", "color": "#b1b1b4" }
              }, " 开户网点 "),
              vue.createElementVNode("p", {
                class: "",
                style: { "font-size": "20rpx", "color": "#757578" }
              }, " 中国建设银行股份有限公司广州先烈东路支行 ")
            ])
          ]),
          vue.createElementVNode("view", { style: { "position": "absolute", "bottom": "5%", "left": "40%", "z-index": "999", "font-size": "25rpx", "display": "flex", "align-items": "center" } }, [
            vue.createTextVNode(" 收入分析 "),
            vue.createElementVNode("image", {
              style: { "width": "15rpx", "height": "20rpx", "margin-left": "5rpx" },
              src: _imports_0$3,
              mode: ""
            })
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
      NavbarTitleVue
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
          vue.renderList($data.DetailsDay.list, (index, vlaue) => {
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
                vue.toDisplayString(index),
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
      NavTab: NavbarTitleVue
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
          vue.createElementVNode("view", { class: "text" }, " 广州市智成毅创商务有限公司 "),
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
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      !$props.onlyInput && $props.type != "textarea" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["input-view", $props.labelPosition == "top" ? "" : "flex_y_center"])
        },
        [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($props.labelPosition == "right" ? "txt-r" : $props.labelPosition == "left" ? "txt-l" : $props.labelPosition == "center" ? "txt-c" : $props.labelPosition == "top" ? "txt-top" : "")
            },
            vue.toDisplayString($props.label),
            3
            /* TEXT, CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass($props.labelPosition == "top" ? "w-100" : "")
            },
            [
              $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "all" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                key: 0,
                style: vue.normalizeStyle($props.inputStyle),
                onFocus: _cache[0] || (_cache[0] = (...args) => $options.getFocus && $options.getFocus(...args)),
                onInput: _cache[1] || (_cache[1] = (...args) => $options.input && $options.input(...args)),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.data = $event),
                name: $props.name,
                class: vue.normalizeClass(["standard", $data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""]),
                type: $props.type == "text" ? "text" : $props.type || "text",
                disabled: $props.disabled,
                placeholder: $props.placeholder,
                onBlur: _cache[3] || (_cache[3] = (...args) => $options.input_blur && $options.input_blur(...args)),
                maxlength: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength
              }, null, 46, ["name", "type", "disabled", "placeholder", "maxlength"])), [
                [vue.vModelDynamic, $data.data]
              ]) : vue.createCommentVNode("v-if", true),
              $props.type == "tel" && $props.inputBorder == "all" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                key: 1,
                style: vue.normalizeStyle({ inputStyle: $props.inputStyle }),
                onFocus: _cache[4] || (_cache[4] = (...args) => $options.getFocus && $options.getFocus(...args)),
                onInput: _cache[5] || (_cache[5] = (...args) => $options.input && $options.input(...args)),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.data = $event),
                name: $props.name,
                class: vue.normalizeClass(["standard", $data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""]),
                type: "number",
                disabled: $props.disabled,
                placeholder: $props.placeholder,
                onBlur: _cache[7] || (_cache[7] = (...args) => $options.input_blur && $options.input_blur(...args)),
                maxlength: "11"
              }, null, 46, ["name", "disabled", "placeholder"])), [
                [vue.vModelText, $data.data]
              ]) : vue.createCommentVNode("v-if", true),
              $props.inputBorder == "bottom" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "rel"
              }, [
                $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "bottom" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                  key: 0,
                  style: vue.normalizeStyle($props.inputStyle),
                  onFocus: _cache[8] || (_cache[8] = (...args) => $options.getFocus && $options.getFocus(...args)),
                  onInput: _cache[9] || (_cache[9] = (...args) => $options.input && $options.input(...args)),
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.data = $event),
                  name: $props.name,
                  class: vue.normalizeClass(["standard-bottom", $data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""]),
                  type: $props.type == "text" ? "text" : $props.type || "text",
                  disabled: $props.disabled,
                  placeholder: $props.placeholder,
                  onBlur: _cache[11] || (_cache[11] = (...args) => $options.input_blur && $options.input_blur(...args)),
                  maxlength: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength
                }, null, 46, ["name", "type", "disabled", "placeholder", "maxlength"])), [
                  [vue.vModelDynamic, $data.data]
                ]) : vue.createCommentVNode("v-if", true),
                $props.type == "tel" && $props.inputBorder == "bottom" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                  key: 1,
                  style: vue.normalizeStyle($props.inputStyle),
                  onFocus: _cache[12] || (_cache[12] = (...args) => $options.getFocus && $options.getFocus(...args)),
                  onInput: _cache[13] || (_cache[13] = (...args) => $options.input && $options.input(...args)),
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.data = $event),
                  name: $props.name,
                  class: vue.normalizeClass(["standard-bottom", $data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""]),
                  type: "number",
                  disabled: $props.disabled,
                  placeholder: $props.placeholder,
                  onBlur: _cache[15] || (_cache[15] = (...args) => $options.input_blur && $options.input_blur(...args)),
                  maxlength: "11"
                }, null, 46, ["name", "disabled", "placeholder"])), [
                  [vue.vModelText, $data.data]
                ]) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode(
                  "label",
                  {
                    class: vue.normalizeClass(["standard-bottom-line", $props.borderAnimation == "left" ? "ani-left" : $props.borderAnimation == "center" ? "ani-center" : $props.borderAnimation == "right" ? "ani-right" : ""])
                  },
                  null,
                  2
                  /* CLASS */
                )
              ])) : vue.createCommentVNode("v-if", true),
              $props.type == "msgcode" && $props.inputBorder == "all" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 3,
                class: "msgcode flex_y_center"
              }, [
                vue.createElementVNode("input", {
                  onInput: _cache[16] || (_cache[16] = (...args) => $options.input && $options.input(...args)),
                  onFocus: _cache[17] || (_cache[17] = (...args) => $options.getFocus && $options.getFocus(...args)),
                  name: $props.name,
                  class: vue.normalizeClass(["standard", $data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""]),
                  type: "number",
                  disabled: $props.disabled,
                  placeholder: $props.placeholder,
                  onBlur: _cache[18] || (_cache[18] = (...args) => $options.input_blur && $options.input_blur(...args)),
                  maxlength: "6"
                }, null, 42, ["name", "disabled", "placeholder"]),
                vue.createElementVNode(
                  "text",
                  {
                    onClick: _cache[19] || (_cache[19] = (...args) => $options.getCode && $options.getCode(...args)),
                    class: vue.normalizeClass($data.interval ? "disabled" : "")
                  },
                  vue.toDisplayString($data.codetext),
                  3
                  /* TEXT, CLASS */
                )
              ])) : vue.createCommentVNode("v-if", true),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "error-tip" },
                vue.toDisplayString($data.tipMsg),
                513
                /* TEXT, NEED_PATCH */
              ), [
                [vue.vShow, $data.error && $props.mustFill]
              ])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 单input "),
      $props.onlyInput && $props.type != "textarea" ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "all" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          style: vue.normalizeStyle($props.inputStyle),
          onBlur: _cache[20] || (_cache[20] = (...args) => $options.input_blur && $options.input_blur(...args)),
          onFocus: _cache[21] || (_cache[21] = (...args) => $options.getFocus && $options.getFocus(...args)),
          onInput: _cache[22] || (_cache[22] = (...args) => $options.input && $options.input(...args)),
          name: $props.name,
          "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $data.data = $event),
          disabled: $props.disabled,
          type: $props.type == "text" ? "text" : $props.type || "text",
          class: vue.normalizeClass(["standard", $data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""]),
          placeholder: $props.placeholder,
          maxlength: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength
        }, null, 46, ["name", "disabled", "type", "placeholder", "maxlength"])), [
          [vue.vModelDynamic, $data.data]
        ]) : vue.createCommentVNode("v-if", true),
        $props.type == "tel" && $props.inputBorder == "all" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 1,
          style: vue.normalizeStyle($props.inputStyle),
          onFocus: _cache[24] || (_cache[24] = (...args) => $options.getFocus && $options.getFocus(...args)),
          onBlur: _cache[25] || (_cache[25] = (...args) => $options.input_blur && $options.input_blur(...args)),
          onInput: _cache[26] || (_cache[26] = (...args) => $options.input && $options.input(...args)),
          name: $props.name,
          "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $data.data = $event),
          disabled: $props.disabled,
          type: $props.type == "text" ? "text" : $props.type || "text",
          class: vue.normalizeClass(["standard", $data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""]),
          placeholder: $props.placeholder,
          maxlength: "11"
        }, null, 46, ["name", "disabled", "type", "placeholder"])), [
          [vue.vModelDynamic, $data.data]
        ]) : vue.createCommentVNode("v-if", true),
        $props.inputBorder == "bottom" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "rel"
        }, [
          $props.type != "tel" && $props.type != "msgcode" && $props.inputBorder == "bottom" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            style: vue.normalizeStyle($props.inputStyle),
            onFocus: _cache[28] || (_cache[28] = (...args) => $options.getFocus && $options.getFocus(...args)),
            onInput: _cache[29] || (_cache[29] = (...args) => $options.input && $options.input(...args)),
            "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $data.data = $event),
            name: $props.name,
            class: vue.normalizeClass(["standard-bottom", $data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""]),
            type: $props.type == "text" ? "text" : $props.type || "text",
            disabled: $props.disabled,
            placeholder: $props.placeholder,
            onBlur: _cache[31] || (_cache[31] = (...args) => $options.input_blur && $options.input_blur(...args)),
            maxlength: $props.type == "idcard" ? "18" : $props.type == "password" ? "16" : $props.type == "bankcard" ? "19" : $props.maxlength
          }, null, 46, ["name", "type", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelDynamic, $data.data]
          ]) : vue.createCommentVNode("v-if", true),
          $props.type == "tel" && $props.inputBorder == "bottom" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            style: vue.normalizeStyle($props.inputStyle),
            onFocus: _cache[32] || (_cache[32] = (...args) => $options.getFocus && $options.getFocus(...args)),
            onInput: _cache[33] || (_cache[33] = (...args) => $options.input && $options.input(...args)),
            "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => $data.data = $event),
            name: $props.name,
            class: vue.normalizeClass(["standard-bottom", $data.error && $props.mustFill ? "standard-bottom-error" : $data.error == false ? "standard-bottom-success" : ""]),
            type: "number",
            disabled: $props.disabled,
            placeholder: $props.placeholder,
            onBlur: _cache[35] || (_cache[35] = (...args) => $options.input_blur && $options.input_blur(...args)),
            maxlength: "11"
          }, null, 46, ["name", "disabled", "placeholder"])), [
            [vue.vModelText, $data.data]
          ]) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "label",
            {
              class: vue.normalizeClass(["standard-bottom-line", $props.borderAnimation == "left" ? "ani-left" : $props.borderAnimation == "center" ? "ani-center" : $props.borderAnimation == "right" ? "ani-right" : ""])
            },
            null,
            2
            /* CLASS */
          )
        ])) : vue.createCommentVNode("v-if", true),
        $props.type == "msgcode" && $props.inputBorder == "all" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "msgcode flex_y_center"
        }, [
          vue.createElementVNode("input", {
            onFocus: _cache[36] || (_cache[36] = (...args) => $options.getFocus && $options.getFocus(...args)),
            onInput: _cache[37] || (_cache[37] = (...args) => $options.input && $options.input(...args)),
            name: $props.name,
            class: vue.normalizeClass(["standard", $data.error && $props.mustFill ? "error" : $data.error == false ? "success" : ""]),
            type: "number",
            disabled: $props.disabled,
            placeholder: $props.placeholder,
            onBlur: _cache[38] || (_cache[38] = (...args) => $options.input_blur && $options.input_blur(...args)),
            maxlength: "6"
          }, null, 42, ["name", "disabled", "placeholder"]),
          vue.createElementVNode(
            "text",
            {
              onClick: _cache[39] || (_cache[39] = (...args) => $options.getCode && $options.getCode(...args)),
              class: vue.normalizeClass($data.interval ? "disabled" : "")
            },
            vue.toDisplayString($data.codetext),
            3
            /* TEXT, CLASS */
          )
        ])) : vue.createCommentVNode("v-if", true),
        vue.withDirectives(vue.createElementVNode(
          "view",
          { class: "error-tip" },
          vue.toDisplayString($data.tipMsg),
          513
          /* TEXT, NEED_PATCH */
        ), [
          [vue.vShow, $data.error && $props.mustFill]
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $props.type == "textarea" && $props.tlposition != "none" && $props.inputBorder == "all" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 2,
          class: vue.normalizeClass(["input-view", $props.labelPosition == "top" ? "" : $props.tlposition == "top" ? "flex_y_start" : $props.tlposition == "center" ? "flex_y_center" : $props.tlposition == "bottom" ? "flex_y_end" : ""])
        },
        [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($props.labelPosition == "right" ? "txt-r" : $props.labelPosition == "left" ? "txt-l" : $props.labelPosition == "center" ? "txt-c" : $props.labelPosition == "top" ? "txt-top" : "")
            },
            vue.toDisplayString($props.label),
            3
            /* TEXT, CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass($props.labelPosition == "top" ? "w-100" : "")
            },
            [
              $props.type == "textarea" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
                key: 0,
                style: vue.normalizeStyle({ height: $props.height + "upx" }),
                class: vue.normalizeClass([$data.error && $props.mustFill ? "error" : $data.error == false ? "success" : "", "standard text"]),
                name: $props.name,
                onBlur: _cache[40] || (_cache[40] = (...args) => $options.input_blur && $options.input_blur(...args)),
                onFocus: _cache[41] || (_cache[41] = (...args) => $options.getFocus && $options.getFocus(...args)),
                onInput: _cache[42] || (_cache[42] = (...args) => $options.input && $options.input(...args)),
                "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => $data.data = $event),
                maxlength: $props.maxlength,
                placeholder: $props.placeholder
              }, "\r\n			", 46, ["name", "maxlength", "placeholder"])), [
                [vue.vModelText, $data.data]
              ]) : vue.createCommentVNode("v-if", true),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "error-tip" },
                vue.toDisplayString($data.tipMsg),
                513
                /* TEXT, NEED_PATCH */
              ), [
                [vue.vShow, $data.error && $props.mustFill]
              ])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      $props.type == "textarea" && $props.tlposition == "none" && $props.inputBorder == "all" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        class: "input-view"
      }, [
        $props.type == "textarea" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
          key: 0,
          style: vue.normalizeStyle({ height: $props.height + "upx" }),
          class: vue.normalizeClass([$data.error && $props.mustFill ? "error" : $data.error == false ? "success" : "", "standard text"]),
          name: $props.name,
          onBlur: _cache[44] || (_cache[44] = (...args) => $options.input_blur && $options.input_blur(...args)),
          onFocus: _cache[45] || (_cache[45] = (...args) => $options.getFocus && $options.getFocus(...args)),
          onInput: _cache[46] || (_cache[46] = (...args) => $options.input && $options.input(...args)),
          "onUpdate:modelValue": _cache[47] || (_cache[47] = ($event) => $data.data = $event),
          maxlength: $props.maxlength,
          placeholder: $props.placeholder
        }, "\r\n			", 46, ["name", "maxlength", "placeholder"])), [
          [vue.vModelText, $data.data]
        ]) : vue.createCommentVNode("v-if", true),
        vue.withDirectives(vue.createElementVNode(
          "view",
          { class: "error-tip" },
          vue.toDisplayString($data.tipMsg),
          513
          /* TEXT, NEED_PATCH */
        ), [
          [vue.vShow, $data.error && $props.mustFill]
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uinput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-37a7e74b"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/components/poiuy-uinput/uinput.vue"]]);
  const _imports_1 = "/static/banner/shouji.svg";
  const _imports_2 = "/static/banner/suo.svg";
  const _sfc_main$2 = {
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
        uni.reLaunch({
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
            uni.setStorageSync("account", { phone: this.phone, pasw: this.pasw });
            uni.getStorageSync("account");
            uni.showToast({
              title: "登录成功",
              duration: 3e3,
              icon: "none"
            }), uni.reLaunch({
              url: "/pages/index/index"
            });
          } else {
            uni.showToast({
              title: "未填写验证码或验证码错误",
              duration: 3e3,
              icon: "error"
            });
          }
        } else {
          uni.showToast({
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("view", {
        class: "iocBack",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.NavTo && $options.NavTo(...args))
      }, [
        vue.createElementVNode("image", {
          src: _imports_0$7,
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
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  placeholder: "请输入手机号",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.phone = $event),
                  maxlength: "11"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.phone]
              ])
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
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  placeholder: "请输入密码",
                  password: "",
                  maxlength: "16",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.pasw = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.pasw]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "login-input" }, [
            vue.createElementVNode("view", { class: "input-input" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  placeholder: "请输入验证码",
                  maxlength: "6",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.yzm = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.yzm]
              ])
            ]),
            vue.createElementVNode("view", { class: "yzm" }, " 获取验证码 ")
          ]),
          vue.createElementVNode("view", { class: "checkbox" }, [
            vue.createElementVNode("label", null, [
              vue.createElementVNode("checkbox", {
                onClick: _cache[4] || (_cache[4] = ($event) => $options.checkboxBtn($data.Ischeckbox)),
                iconColor: "#fff",
                activeBackgroundColor: "#3475d3",
                checked: $data.Ischeckbox
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", null, [
                vue.createTextVNode("我已认真阅读并同意《"),
                vue.createElementVNode("text", { style: { "color": "#3475d3" } }, "“建行惠懂你”个人信息保护政策“建行惠懂你”用户服务协议"),
                vue.createTextVNode("》和《"),
                vue.createElementVNode("text", { style: { "color": "#3475d3" } }, "““建行惠懂你”用户服务协议"),
                vue.createTextVNode("》，我行不会以任何形式向您收取担保、评估、过桥资金等附加费用!")
              ])
            ])
          ]),
          $data.ActiveBtn ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "btn"
          }, " 立即登录 ")) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "btn",
            style: { "background-color": "#3475d3" },
            onClick: _cache[5] || (_cache[5] = (...args) => $options.login && $options.login(...args))
          }, " 立即登录 ")),
          vue.createElementVNode("view", { class: "footView" }, [
            vue.createElementVNode("view", { class: "footViewleft" }, " 手机注册 "),
            vue.createElementVNode("view", { class: "footViewrigth" }, " 忘记密码 ")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-e4e4508d"], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/login/login.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        DetailsDay: "",
        list: {
          "借款期限": "36个月",
          "到期日": "2027-06-21",
          "借款人": "广州市智成毅创商务有限公司",
          "贷款账号": "4400 *** 0700",
          "还款方式": "随借随还",
          "贷款状态": "正常"
        }
      };
    },
    components: {
      NavbarTitleVue
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_NavbarTitleVue = vue.resolveComponent("NavbarTitleVue");
    return vue.openBlock(), vue.createElementBlock("view", { class: "Disbursement" }, [
      vue.createVNode(_component_NavbarTitleVue, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("贷款详情")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "Disbursement-title" }, [
        vue.createElementVNode("view", { class: "title" }, " 可支用额度 "),
        vue.createElementVNode("view", { class: "text" }, " ￥0.00 "),
        !$data.DetailsDay.istrue ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "load"
        }, [
          vue.createElementVNode("view", { class: "load-content" }, [
            vue.createElementVNode("view", { class: "load-title" }, " 年化利率 "),
            vue.createElementVNode("view", { class: "load-money" }, " 3.4% ")
          ]),
          vue.createElementVNode("view", { class: "load-content" }, [
            vue.createElementVNode("view", { class: "load-title" }, " 已用额度(元) "),
            vue.createElementVNode("view", { class: "load-money" }, " 1,600,000.00 ")
          ]),
          vue.createElementVNode("view", { class: "load-content" }, [
            vue.createElementVNode("view", { class: "load-title" }, " 贷款额度(元) "),
            vue.createElementVNode("view", { class: "load-money" }, " 0.00 ")
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", { class: "Expenditure-details" }, [
        vue.createElementVNode("view", { class: "footList" }, [
          vue.createElementVNode("view", {
            class: "footList-li",
            style: { "border-bottom": "1rpx solid #ccc" }
          }, [
            vue.createElementVNode("view", {
              class: "footList-li-left",
              style: { "border-left": "6rpx solid #4d7bd9" }
            }, " 基本信息 ")
          ])
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (index, vlaue) => {
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
                vue.toDisplayString(index),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "footList" }, [
        vue.createElementVNode("view", { class: "footList-li" }, [
          vue.createElementVNode("view", { class: "footList-li-left" }, " 支用明细 "),
          vue.createElementVNode("view", { class: "footList-li-rigth" }, [
            vue.createElementVNode("image", {
              src: _imports_0$3,
              mode: ""
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "footList" }, [
        vue.createElementVNode("view", { class: "footList-li" }, [
          vue.createElementVNode("view", { class: "footList-li-left" }, " 还款明细 "),
          vue.createElementVNode("view", { class: "footList-li-rigth" }, [
            vue.createElementVNode("image", {
              src: _imports_0$3,
              mode: ""
            })
          ])
        ])
      ])
    ]);
  }
  const PagesDisbursementDataliDisbursementDatali = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/UniDemo/建行惠懂你/JanHangDongNi/pages/DisbursementDatali/DisbursementDatali.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/loan/loan", PagesLoanLoan);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/MyAccount/MyAccount", PagesMyAccountMyAccount);
  __definePage("pages/Disbursement/Disbursement", PagesDisbursementDisbursement);
  __definePage("pages/Enterprise/Enterprise", PagesEnterpriseEnterprise);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/DisbursementDatali/DisbursementDatali", PagesDisbursementDataliDisbursementDatali);
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
