import { m as Z, R as U, c as Y, K as J, s as $, a as w, r as d, D as Q, b as X, d as _, e as ee, h as re, f as x, W as c, M as l, g as P, i as T, j as v, k as te, l as ne, n as se, o as L, t as F, p as ae, q as k, u as ie, v as ce, w as z } from "./link-sdk.1f812786.mjs";
function oe(r) {
  if (r.sheet)
    return r.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === r)
      return document.styleSheets[e];
}
function fe(r) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", r.key), r.nonce !== void 0 && e.setAttribute("nonce", r.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var ue = /* @__PURE__ */ function() {
  function r(t) {
    var n = this;
    this._insertTag = function(a) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, s), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var e = r.prototype;
  return e.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, e.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(fe(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = oe(a);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, r;
}();
function de(r) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = r(t)), e[t];
  };
}
var he = function(e, t, n) {
  for (var a = 0, s = 0; a = s, s = k(), a === 38 && s === 12 && (t[n] = 1), !F(s); )
    L();
  return ce(e, z);
}, le = function(e, t) {
  var n = -1, a = 44;
  do
    switch (F(a)) {
      case 0:
        a === 38 && k() === 12 && (t[n] = 1), e[n] += he(z - 1, t, n);
        break;
      case 2:
        e[n] += ie(a);
        break;
      case 4:
        if (a === 44) {
          e[++n] = k() === 58 ? "&\f" : "", t[n] = e[n].length;
          break;
        }
      default:
        e[n] += ae(a);
    }
  while (a = L());
  return e;
}, me = function(e, t) {
  return ne(le(se(e), t));
}, N = /* @__PURE__ */ new WeakMap(), pe = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var t = e.value, n = e.parent, a = e.column === n.column && e.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !N.get(n)) && !a) {
      N.set(e, !0);
      for (var s = [], i = me(t, s), u = n.props, f = 0, h = 0; f < i.length; f++)
        for (var o = 0; o < u.length; o++, h++)
          e.props[h] = s[f] ? i[f].replace(/&\f/g, u[o]) : u[o] + " " + i[f];
    }
  }
}, ye = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function D(r, e) {
  switch (re(r, e)) {
    case 5103:
      return c + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return c + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return c + r + v + r + l + r + r;
    case 6828:
    case 4268:
      return c + r + l + r + r;
    case 6165:
      return c + r + l + "flex-" + r + r;
    case 5187:
      return c + r + d(r, /(\w+).+(:[^]+)/, c + "box-$1$2" + l + "flex-$1$2") + r;
    case 5443:
      return c + r + l + "flex-item-" + d(r, /flex-|-self/, "") + r;
    case 4675:
      return c + r + l + "flex-line-pack" + d(r, /align-content|flex-|-self/, "") + r;
    case 5548:
      return c + r + l + d(r, "shrink", "negative") + r;
    case 5292:
      return c + r + l + d(r, "basis", "preferred-size") + r;
    case 6060:
      return c + "box-" + d(r, "-grow", "") + c + r + l + d(r, "grow", "positive") + r;
    case 4554:
      return c + d(r, /([^-])(transform)/g, "$1" + c + "$2") + r;
    case 6187:
      return d(d(d(r, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return d(r, /(image-set\([^]*)/, c + "$1$`$1");
    case 4968:
      return d(d(r, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + l + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + r + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return d(r, /(.+)-inline(.+)/, c + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (P(r) - 1 - e > 6)
        switch (x(r, e + 1)) {
          case 109:
            if (x(r, e + 4) !== 45)
              break;
          case 102:
            return d(r, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + v + (x(r, e + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~T(r, "stretch") ? D(d(r, "stretch", "fill-available"), e) + r : r;
        }
      break;
    case 4949:
      if (x(r, e + 1) !== 115)
        break;
    case 6444:
      switch (x(r, P(r) - 3 - (~T(r, "!important") && 10))) {
        case 107:
          return d(r, ":", ":" + c) + r;
        case 101:
          return d(r, /(.+:)([^;!]+)(;|!.+)?/, "$1" + c + (x(r, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + l + "$2box$3") + r;
      }
      break;
    case 5936:
      switch (x(r, e + 11)) {
        case 114:
          return c + r + l + d(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return c + r + l + d(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return c + r + l + d(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return c + r + l + r + r;
  }
  return r;
}
var be = function(e, t, n, a) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Q:
        e.return = D(e.value, e.length);
        break;
      case J:
        return $([w(e, {
          value: d(e.value, "@", "@" + c)
        })], a);
      case U:
        if (e.length)
          return Y(e.props, function(s) {
            switch (te(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return $([w(e, {
                  props: [d(s, /:(read-\w+)/, ":" + v + "$1")]
                })], a);
              case "::placeholder":
                return $([w(e, {
                  props: [d(s, /:(plac\w+)/, ":" + c + "input-$1")]
                }), w(e, {
                  props: [d(s, /:(plac\w+)/, ":" + v + "$1")]
                }), w(e, {
                  props: [d(s, /:(plac\w+)/, l + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, ge = [be], xe = function(e) {
  var t = e.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var b = p.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var a = e.stylisPlugins || ge, s = {}, i, u = [];
  i = e.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(p) {
      for (var b = p.getAttribute("data-emotion").split(" "), g = 1; g < b.length; g++)
        s[b[g]] = !0;
      u.push(p);
    }
  );
  var f, h = [pe, ye];
  {
    var o, m = [X, _(function(p) {
      o.insert(p);
    })], C = Z(h.concat(a, m)), q = function(b) {
      return $(ee(b), C);
    };
    f = function(b, g, B, H) {
      o = B, q(b ? b + "{" + g.styles + "}" : g.styles), H && (A.inserted[g.name] = !0);
    };
  }
  var A = {
    key: t,
    sheet: new ue({
      key: t,
      container: i,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: s,
    registered: {},
    insert: f
  };
  return A.sheet.hydrate(u), A;
};
function we(r) {
  for (var e = 0, t, n = 0, a = r.length; a >= 4; ++n, a -= 4)
    t = r.charCodeAt(n) & 255 | (r.charCodeAt(++n) & 255) << 8 | (r.charCodeAt(++n) & 255) << 16 | (r.charCodeAt(++n) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, e = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      e ^= (r.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (r.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= r.charCodeAt(n) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Se = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ce = /[A-Z]|^ms/g, $e = /_EMO_([^_]+?)_([^]*?)_EMO_/g, K = function(e) {
  return e.charCodeAt(1) === 45;
}, G = function(e) {
  return e != null && typeof e != "boolean";
}, E = /* @__PURE__ */ de(function(r) {
  return K(r) ? r : r.replace(Ce, "-$&").toLowerCase();
}), M = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace($e, function(n, a, s) {
          return y = {
            name: a,
            styles: s,
            next: y
          }, a;
        });
  }
  return Se[e] !== 1 && !K(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function S(r, e, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return y = {
          name: t.name,
          styles: t.styles,
          next: y
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            y = {
              name: n.name,
              styles: n.styles,
              next: y
            }, n = n.next;
        var a = t.styles + ";";
        return a;
      }
      return ve(r, e, t);
    }
    case "function": {
      if (r !== void 0) {
        var s = y, i = t(r);
        return y = s, S(r, e, i);
      }
      break;
    }
  }
  if (e == null)
    return t;
  var u = e[t];
  return u !== void 0 ? u : t;
}
function ve(r, e, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += S(r, e, t[a]) + ";";
  else
    for (var s in t) {
      var i = t[s];
      if (typeof i != "object")
        e != null && e[i] !== void 0 ? n += s + "{" + e[i] + "}" : G(i) && (n += E(s) + ":" + M(s, i) + ";");
      else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0))
        for (var u = 0; u < i.length; u++)
          G(i[u]) && (n += E(s) + ":" + M(s, i[u]) + ";");
      else {
        var f = S(r, e, i);
        switch (s) {
          case "animation":
          case "animationName": {
            n += E(s) + ":" + f + ";";
            break;
          }
          default:
            n += s + "{" + f + "}";
        }
      }
    }
  return n;
}
var I = /label:\s*([^\s;\n{]+)\s*(;|$)/g, y, R = function(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, s = "";
  y = void 0;
  var i = e[0];
  i == null || i.raw === void 0 ? (a = !1, s += S(n, t, i)) : s += i[0];
  for (var u = 1; u < e.length; u++)
    s += S(n, t, e[u]), a && (s += i[u]);
  I.lastIndex = 0;
  for (var f = "", h; (h = I.exec(s)) !== null; )
    f += "-" + h[1];
  var o = we(s) + f;
  return {
    name: o,
    styles: s,
    next: y
  };
}, Ae = !0;
function V(r, e, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    r[a] !== void 0 ? e.push(r[a] + ";") : n += a + " ";
  }), n;
}
var Ee = function(e, t, n) {
  var a = e.key + "-" + t.name;
  (n === !1 || Ae === !1) && e.registered[a] === void 0 && (e.registered[a] = t.styles);
}, Re = function(e, t, n) {
  Ee(e, t, n);
  var a = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var s = t;
    do
      e.insert(t === s ? "." + a : "", s, e.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function W(r, e) {
  if (r.inserted[e.name] === void 0)
    return r.insert("", e, r.sheet, !0);
}
function j(r, e, t) {
  var n = [], a = V(r, n, t);
  return n.length < 2 ? t : a + e(n);
}
var ke = function(e) {
  var t = xe(e);
  t.sheet.speedy = function(u) {
    this.isSpeedy = u;
  }, t.compat = !0;
  var n = function() {
    for (var f = arguments.length, h = new Array(f), o = 0; o < f; o++)
      h[o] = arguments[o];
    var m = R(h, t.registered, void 0);
    return Re(t, m, !1), t.key + "-" + m.name;
  }, a = function() {
    for (var f = arguments.length, h = new Array(f), o = 0; o < f; o++)
      h[o] = arguments[o];
    var m = R(h, t.registered), C = "animation-" + m.name;
    return W(t, {
      name: m.name,
      styles: "@keyframes " + C + "{" + m.styles + "}"
    }), C;
  }, s = function() {
    for (var f = arguments.length, h = new Array(f), o = 0; o < f; o++)
      h[o] = arguments[o];
    var m = R(h, t.registered);
    W(t, m);
  }, i = function() {
    for (var f = arguments.length, h = new Array(f), o = 0; o < f; o++)
      h[o] = arguments[o];
    return j(t.registered, n, Oe(h));
  };
  return {
    css: n,
    cx: i,
    injectGlobal: s,
    keyframes: a,
    hydrate: function(f) {
      f.forEach(function(h) {
        t.inserted[h] = !0;
      });
    },
    flush: function() {
      t.registered = {}, t.inserted = {}, t.sheet.flush();
    },
    sheet: t.sheet,
    cache: t,
    getRegisteredStyles: V.bind(null, t.registered),
    merge: j.bind(null, t.registered, n)
  };
}, Oe = function r(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var a = e[n];
    if (a != null) {
      var s = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            s = r(a);
          else {
            s = "";
            for (var i in a)
              a[i] && i && (s && (s += " "), s += i);
          }
          break;
        }
        default:
          s = a;
      }
      s && (t && (t += " "), t += s);
    }
  }
  return t;
}, O = ke({
  key: "css"
}), Te = O.injectGlobal, Ne = O.keyframes, Ge = O.css;
export {
  Ge as c,
  Te as i,
  Ne as k
};
