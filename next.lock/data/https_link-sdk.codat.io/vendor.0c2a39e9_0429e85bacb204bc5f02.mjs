function N() {
}
function Rt(t, e) {
  for (const r in e)
    t[r] = e[r];
  return t;
}
function Ot(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function dt(t) {
  return t();
}
function rt() {
  return /* @__PURE__ */ Object.create(null);
}
function re(t) {
  t.forEach(dt);
}
function Le(t) {
  return typeof t == "function";
}
function Ct(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let we;
function Vn(t, e) {
  return we || (we = document.createElement("a")), we.href = e, t === we.href;
}
function It(t) {
  return Object.keys(t).length === 0;
}
function ft(t, ...e) {
  if (t == null)
    return N;
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function Dn(t, e, r) {
  t.$$.on_destroy.push(ft(e, r));
}
function Ln(t, e, r, n) {
  if (t) {
    const s = ht(t, e, r, n);
    return t[0](s);
  }
}
function ht(t, e, r, n) {
  return t[1] && n ? Rt(r.ctx.slice(), t[1](n(e))) : r.ctx;
}
function zn(t, e, r, n) {
  if (t[2] && n) {
    const s = t[2](n(r));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const a = [], i = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < i; o += 1)
        a[o] = e.dirty[o] | s[o];
      return a;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Un(t, e, r, n, s, a) {
  if (s) {
    const i = ht(e, r, n, a);
    t.p(i, s);
  }
}
function Bn(t) {
  if (t.ctx.length > 32) {
    const e = [], r = t.ctx.length / 32;
    for (let n = 0; n < r; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function qn(t) {
  return t && Le(t.destroy) ? t.destroy : N;
}
function Wn(t, e) {
  t.appendChild(e);
}
function Hn(t, e, r) {
  t.insertBefore(e, r || null);
}
function jt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Fn(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function Gn(t) {
  return document.createElement(t);
}
function Jn(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function pt(t) {
  return document.createTextNode(t);
}
function Yn() {
  return pt(" ");
}
function Xn() {
  return pt("");
}
function Qn(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function mt(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function Kn(t, e) {
  const r = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : r[n] && r[n].set ? t[n] = e[n] : mt(t, n, e[n]);
}
function es(t, e) {
  Object.keys(e).forEach((r) => {
    Mt(t, r, e[r]);
  });
}
function Mt(t, e, r) {
  e in t ? t[e] = typeof t[e] == "boolean" && r === "" ? !0 : r : mt(t, e, r);
}
function At(t) {
  return Array.from(t.childNodes);
}
function ts(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function rs(t, e) {
  t.value = e ?? "";
}
function ns(t, e, r, n) {
  r === null ? t.style.removeProperty(e) : t.style.setProperty(e, r, n ? "important" : "");
}
function ss(t, e) {
  return new t(e);
}
let ae;
function I(t) {
  ae = t;
}
function ze() {
  if (!ae)
    throw new Error("Function called outside component initialization");
  return ae;
}
function as(t) {
  ze().$$.on_destroy.push(t);
}
function is(t, e) {
  return ze().$$.context.set(t, e), e;
}
function os(t) {
  return ze().$$.context.get(t);
}
const J = [], nt = [], Te = [], qe = [], Pt = Promise.resolve();
let We = !1;
function Vt() {
  We || (We = !0, Pt.then(Xe));
}
function He(t) {
  Te.push(t);
}
function cs(t) {
  qe.push(t);
}
const Be = /* @__PURE__ */ new Set();
let F = 0;
function Xe() {
  if (F !== 0)
    return;
  const t = ae;
  do {
    try {
      for (; F < J.length; ) {
        const e = J[F];
        F++, I(e), Dt(e.$$);
      }
    } catch (e) {
      throw J.length = 0, F = 0, e;
    }
    for (I(null), J.length = 0, F = 0; nt.length; )
      nt.pop()();
    for (let e = 0; e < Te.length; e += 1) {
      const r = Te[e];
      Be.has(r) || (Be.add(r), r());
    }
    Te.length = 0;
  } while (J.length);
  for (; qe.length; )
    qe.pop()();
  We = !1, Be.clear(), I(t);
}
function Dt(t) {
  if (t.fragment !== null) {
    t.update(), re(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(He);
  }
}
const Ze = /* @__PURE__ */ new Set();
let U;
function Lt() {
  U = {
    r: 0,
    c: [],
    p: U
  };
}
function zt() {
  U.r || re(U.c), U = U.p;
}
function gt(t, e) {
  t && t.i && (Ze.delete(t), t.i(e));
}
function Ut(t, e, r, n) {
  if (t && t.o) {
    if (Ze.has(t))
      return;
    Ze.add(t), U.c.push(() => {
      Ze.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function us(t, e) {
  const r = e.token = {};
  function n(s, a, i, o) {
    if (e.token !== r)
      return;
    e.resolved = o;
    let u = e.ctx;
    i !== void 0 && (u = u.slice(), u[i] = o);
    const c = s && (e.current = s)(u);
    let h = !1;
    e.block && (e.blocks ? e.blocks.forEach((b, w) => {
      w !== a && b && (Lt(), Ut(b, 1, 1, () => {
        e.blocks[w] === b && (e.blocks[w] = null);
      }), zt());
    }) : e.block.d(1), c.c(), gt(c, 1), c.m(e.mount(), e.anchor), h = !0), e.block = c, e.blocks && (e.blocks[a] = c), h && Xe();
  }
  if (Ot(t)) {
    const s = ze();
    if (t.then((a) => {
      I(s), n(e.then, 1, e.value, a), I(null);
    }, (a) => {
      if (I(s), n(e.catch, 2, e.error, a), I(null), !e.hasCatch)
        throw a;
    }), e.current !== e.pending)
      return n(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return n(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function ls(t, e, r) {
  const n = e.slice(), { resolved: s } = t;
  t.current === t.then && (n[t.value] = s), t.current === t.catch && (n[t.error] = s), t.block.p(n, r);
}
function ds(t, e) {
  const r = {}, n = {}, s = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const i = t[a], o = e[a];
    if (o) {
      for (const u in i)
        u in o || (n[u] = 1);
      for (const u in o)
        s[u] || (r[u] = o[u], s[u] = 1);
      t[a] = o;
    } else
      for (const u in i)
        s[u] = 1;
  }
  for (const i in n)
    i in r || (r[i] = void 0);
  return r;
}
function fs(t, e, r) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = r, r(t.$$.ctx[n]));
}
function hs(t) {
  t && t.c();
}
function Bt(t, e, r, n) {
  const { fragment: s, after_update: a } = t.$$;
  s && s.m(e, r), n || He(() => {
    const i = t.$$.on_mount.map(dt).filter(Le);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : re(i), t.$$.on_mount = [];
  }), a.forEach(He);
}
function qt(t, e) {
  const r = t.$$;
  r.fragment !== null && (re(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Wt(t, e) {
  t.$$.dirty[0] === -1 && (J.push(t), Vt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ps(t, e, r, n, s, a, i, o = [-1]) {
  const u = ae;
  I(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: N,
    not_equal: s,
    bound: rt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: rt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(c.root);
  let h = !1;
  if (c.ctx = r ? r(t, e.props || {}, (b, w, ...T) => {
    const z = T.length ? T[0] : w;
    return c.ctx && s(c.ctx[b], c.ctx[b] = z) && (!c.skip_bound && c.bound[b] && c.bound[b](z), h && Wt(t, b)), w;
  }) : [], c.update(), h = !0, re(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = At(e.target);
      c.fragment && c.fragment.l(b), b.forEach(jt);
    } else
      c.fragment && c.fragment.c();
    e.intro && gt(t.$$.fragment), Bt(t, e.target, e.anchor, e.customElement), Xe();
  }
  I(u);
}
class ms {
  $destroy() {
    qt(this, 1), this.$destroy = N;
  }
  $on(e, r) {
    if (!Le(r))
      return N;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const s = n.indexOf(r);
      s !== -1 && n.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !It(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const G = [];
function Ht(t, e) {
  return {
    subscribe: Ft(t, e).subscribe
  };
}
function Ft(t, e = N) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (Ct(t, o) && (t = o, r)) {
      const u = !G.length;
      for (const c of n)
        c[1](), G.push(c, t);
      if (u) {
        for (let c = 0; c < G.length; c += 2)
          G[c][0](G[c + 1]);
        G.length = 0;
      }
    }
  }
  function a(o) {
    s(o(t));
  }
  function i(o, u = N) {
    const c = [o, u];
    return n.add(c), n.size === 1 && (r = e(s) || N), o(t), () => {
      n.delete(c), n.size === 0 && (r(), r = null);
    };
  }
  return { set: s, update: a, subscribe: i };
}
function gs(t, e, r) {
  const n = !Array.isArray(t), s = n ? [t] : t, a = e.length < 2;
  return Ht(r, (i) => {
    let o = !1;
    const u = [];
    let c = 0, h = N;
    const b = () => {
      if (c)
        return;
      h();
      const T = e(n ? u[0] : u, i);
      a ? i(T) : h = Le(T) ? T : N;
    }, w = s.map((T, z) => ft(T, (xe) => {
      u[z] = xe, c &= ~(1 << z), o && b();
    }, () => {
      c |= 1 << z;
    }));
    return o = !0, b(), function() {
      re(w), h();
    };
  });
}
var v;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const a = {};
    for (const i of s)
      a[i] = i;
    return a;
  }, t.getValidEnumValues = (s) => {
    const a = t.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), i = {};
    for (const o of a)
      i[o] = s[o];
    return t.objectValues(i);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(a) {
    return s[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
    return a;
  }, t.find = (s, a) => {
    for (const i of s)
      if (a(i))
        return i;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, a = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(v || (v = {}));
const d = v.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), V = (t) => {
  switch (typeof t) {
    case "undefined":
      return d.undefined;
    case "string":
      return d.string;
    case "number":
      return isNaN(t) ? d.nan : d.number;
    case "boolean":
      return d.boolean;
    case "function":
      return d.function;
    case "bigint":
      return d.bigint;
    case "symbol":
      return d.symbol;
    case "object":
      return Array.isArray(t) ? d.array : t === null ? d.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? d.promise : typeof Map < "u" && t instanceof Map ? d.map : typeof Set < "u" && t instanceof Set ? d.set : typeof Date < "u" && t instanceof Date ? d.date : d.object;
    default:
      return d.unknown;
  }
}, l = v.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Gt = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class j extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(a) {
      return a.message;
    }, n = { _errors: [] }, s = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          n._errors.push(r(i));
        else {
          let o = n, u = 0;
          for (; u < i.path.length; ) {
            const c = i.path[u];
            u === i.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(r(i))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, v.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
j.create = (t) => new j(t);
const ie = (t, e) => {
  let r;
  switch (t.code) {
    case l.invalid_type:
      t.received === d.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case l.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, v.jsonStringifyReplacer)}`;
      break;
    case l.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${v.joinValues(t.keys, ", ")}`;
      break;
    case l.invalid_union:
      r = "Invalid input";
      break;
    case l.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${v.joinValues(t.options)}`;
      break;
    case l.invalid_enum_value:
      r = `Invalid enum value. Expected ${v.joinValues(t.options)}, received '${t.received}'`;
      break;
    case l.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case l.invalid_return_type:
      r = "Invalid function return type";
      break;
    case l.invalid_date:
      r = "Invalid date";
      break;
    case l.invalid_string:
      typeof t.validation == "object" ? "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : v.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case l.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(t.minimum)}` : r = "Invalid input";
      break;
    case l.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(t.maximum)}` : r = "Invalid input";
      break;
    case l.custom:
      r = "Invalid input";
      break;
    case l.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case l.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case l.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, v.assertNever(t);
  }
  return { message: r };
};
let yt = ie;
function Jt(t) {
  yt = t;
}
function Re() {
  return yt;
}
const Oe = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, a = [...r, ...s.path || []], i = {
    ...s,
    path: a
  };
  let o = "";
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(i, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: a,
    message: s.message || o
  };
}, Yt = [];
function f(t, e) {
  const r = Oe({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Re(),
      ie
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class $ {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return m;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r)
      n.push({
        key: await s.key,
        value: await s.value
      });
    return $.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return m;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), (typeof i.value < "u" || s.alwaysSet) && (n[a.value] = i.value);
    }
    return { status: e.value, value: n };
  }
}
const m = Object.freeze({
  status: "aborted"
}), _t = (t) => ({ status: "dirty", value: t }), k = (t) => ({ status: "valid", value: t }), Fe = (t) => t.status === "aborted", Ge = (t) => t.status === "dirty", Ce = (t) => t.status === "valid", Ie = (t) => typeof Promise < "u" && t instanceof Promise;
var _;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e?.message;
})(_ || (_ = {}));
class O {
  constructor(e, r, n, s) {
    this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._path.concat(this._key);
  }
}
const st = (t, e) => {
  if (Ce(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return { success: !1, error: new j(t.common.issues) };
};
function g(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: s };
}
class y {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return V(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: V(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new $(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: V(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Ie(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = r?.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r?.errorMap
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: V(e)
    }, a = this._parseSync({ data: e, path: s.path, parent: s });
    return st(s, a);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r?.errorMap,
        async: !0
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: V(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), a = await (Ie(s) ? s : Promise.resolve(s));
    return st(n, a);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, a) => {
      const i = e(s), o = () => a.addIssue({
        code: l.custom,
        ...n(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((u) => u ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new E({
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return M.create(this, this._def);
  }
  nullable() {
    return H.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Z.create(this, this._def);
  }
  promise() {
    return te.create(this, this._def);
  }
  or(e) {
    return de.create([this, e], this._def);
  }
  and(e) {
    return fe.create(this, e, this._def);
  }
  transform(e) {
    return new E({
      ...g(this._def),
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ye({
      ...g(this._def),
      innerType: this,
      defaultValue: r,
      typeName: p.ZodDefault
    });
  }
  brand() {
    return new bt({
      typeName: p.ZodBranded,
      type: this,
      ...g(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ve({
      ...g(this._def),
      innerType: this,
      catchValue: r,
      typeName: p.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return be.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Xt = /^c[^\s-]{8,}$/i, Qt = /^[a-z][a-z0-9]*$/, Kt = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, er = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/, tr = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
class A extends y {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: l.invalid_string,
      ..._.errToObj(n)
    }), this.nonempty = (e) => this.min(1, _.errToObj(e)), this.trim = () => new A({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== d.string) {
      const a = this._getOrReturnCtx(e);
      return f(
        a,
        {
          code: l.invalid_type,
          expected: d.string,
          received: a.parsedType
        }
      ), m;
    }
    const n = new $();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s = this._getOrReturnCtx(e, s), f(s, {
          code: l.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s = this._getOrReturnCtx(e, s), f(s, {
          code: l.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (s = this._getOrReturnCtx(e, s), i ? f(s, {
          code: l.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && f(s, {
          code: l.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        er.test(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
          validation: "email",
          code: l.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        Kt.test(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
          validation: "uuid",
          code: l.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        Xt.test(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
          validation: "cuid",
          code: l.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        Qt.test(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
          validation: "cuid2",
          code: l.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), f(s, {
            validation: "url",
            code: l.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
          validation: "regex",
          code: l.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), f(s, {
          code: l.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), f(s, {
          code: l.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? tr(a).test(e.data) || (s = this._getOrReturnCtx(e, s), f(s, {
          code: l.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : v.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new A({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ..._.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ..._.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ..._.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ..._.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ..._.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: (r = e?.offset) !== null && r !== void 0 ? r : !1,
      ..._.errToObj(e?.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ..._.errToObj(r)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ..._.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ..._.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ..._.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ..._.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ..._.errToObj(r)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
A.create = (t) => {
  var e;
  return new A({
    checks: [],
    typeName: p.ZodString,
    coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
    ...g(t)
  });
};
function rr(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, a = parseInt(t.toFixed(s).replace(".", "")), i = parseInt(e.toFixed(s).replace(".", ""));
  return a % i / Math.pow(10, s);
}
class D extends y {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== d.number) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: l.invalid_type,
        expected: d.number,
        received: a.parsedType
      }), m;
    }
    let n;
    const s = new $();
    for (const a of this._def.checks)
      a.kind === "int" ? v.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
        code: l.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), f(n, {
        code: l.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), f(n, {
        code: l.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? rr(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), f(n, {
        code: l.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), f(n, {
        code: l.not_finite,
        message: a.message
      }), s.dirty()) : v.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, _.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, _.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, _.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, _.toString(r));
  }
  setLimit(e, r, n, s) {
    return new D({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: _.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new D({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: _.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: _.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && v.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
D.create = (t) => new D({
  checks: [],
  typeName: p.ZodNumber,
  coerce: t?.coerce || !1,
  ...g(t)
});
class oe extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== d.bigint) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.bigint,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
oe.create = (t) => {
  var e;
  return new oe({
    typeName: p.ZodBigInt,
    coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
    ...g(t)
  });
};
class ce extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = Boolean(e.data)), this._getType(e) !== d.boolean) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.boolean,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
ce.create = (t) => new ce({
  typeName: p.ZodBoolean,
  coerce: t?.coerce || !1,
  ...g(t)
});
class q extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== d.date) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: l.invalid_type,
        expected: d.date,
        received: a.parsedType
      }), m;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return f(a, {
        code: l.invalid_date
      }), m;
    }
    const n = new $();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), f(s, {
        code: l.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), f(s, {
        code: l.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : v.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new q({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: _.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: _.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
q.create = (t) => new q({
  checks: [],
  coerce: t?.coerce || !1,
  typeName: p.ZodDate,
  ...g(t)
});
class je extends y {
  _parse(e) {
    if (this._getType(e) !== d.symbol) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.symbol,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
je.create = (t) => new je({
  typeName: p.ZodSymbol,
  ...g(t)
});
class ue extends y {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.undefined,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
ue.create = (t) => new ue({
  typeName: p.ZodUndefined,
  ...g(t)
});
class le extends y {
  _parse(e) {
    if (this._getType(e) !== d.null) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.null,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
le.create = (t) => new le({
  typeName: p.ZodNull,
  ...g(t)
});
class ee extends y {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return k(e.data);
  }
}
ee.create = (t) => new ee({
  typeName: p.ZodAny,
  ...g(t)
});
class B extends y {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return k(e.data);
  }
}
B.create = (t) => new B({
  typeName: p.ZodUnknown,
  ...g(t)
});
class P extends y {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return f(r, {
      code: l.invalid_type,
      expected: d.never,
      received: r.parsedType
    }), m;
  }
}
P.create = (t) => new P({
  typeName: p.ZodNever,
  ...g(t)
});
class Me extends y {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.void,
        received: n.parsedType
      }), m;
    }
    return k(e.data);
  }
}
Me.create = (t) => new Me({
  typeName: p.ZodVoid,
  ...g(t)
});
class Z extends y {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== d.array)
      return f(r, {
        code: l.invalid_type,
        expected: d.array,
        received: r.parsedType
      }), m;
    if (s.exactLength !== null) {
      const i = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (i || o) && (f(r, {
        code: i ? l.too_big : l.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (f(r, {
      code: l.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (f(r, {
      code: l.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, o) => s.type._parseAsync(new O(r, i, r.path, o)))).then((i) => $.mergeArray(n, i));
    const a = [...r.data].map((i, o) => s.type._parseSync(new O(r, i, r.path, o)));
    return $.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Z({
      ...this._def,
      minLength: { value: e, message: _.toString(r) }
    });
  }
  max(e, r) {
    return new Z({
      ...this._def,
      maxLength: { value: e, message: _.toString(r) }
    });
  }
  length(e, r) {
    return new Z({
      ...this._def,
      exactLength: { value: e, message: _.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Z.create = (t, e) => new Z({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: p.ZodArray,
  ...g(e)
});
var Ae;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
  });
})(Ae || (Ae = {}));
function Y(t) {
  if (t instanceof x) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = M.create(Y(n));
    }
    return new x({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Z ? Z.create(Y(t.element)) : t instanceof M ? M.create(Y(t.unwrap())) : t instanceof H ? H.create(Y(t.unwrap())) : t instanceof C ? C.create(t.items.map((e) => Y(e))) : t;
}
class x extends y {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = v.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== d.object) {
      const c = this._getOrReturnCtx(e);
      return f(c, {
        code: l.invalid_type,
        expected: d.object,
        received: c.parsedType
      }), m;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof P && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        i.includes(c) || o.push(c);
    const u = [];
    for (const c of i) {
      const h = a[c], b = s.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: h._parse(new O(s, b, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof P) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const h of o)
          u.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: s.data[h] }
          });
      else if (c === "strict")
        o.length > 0 && (f(s, {
          code: l.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const h of o) {
        const b = s.data[h];
        u.push({
          key: { status: "valid", value: h },
          value: c._parse(
            new O(s, b, s.path, h)
          ),
          alwaysSet: h in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const h of u) {
        const b = await h.key;
        c.push({
          key: b,
          value: await h.value,
          alwaysSet: h.alwaysSet
        });
      }
      return c;
    }).then((c) => $.mergeObjectSync(n, c)) : $.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return _.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, a, i, o;
          const u = (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, r, n).message) !== null && i !== void 0 ? i : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = _.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new x({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new x({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new x({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new x({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => Ae.mergeShapes(this._def.shape(), e._def.shape()),
      typeName: p.ZodObject
    });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new x({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return v.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return v.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  deepPartial() {
    return Y(this);
  }
  partial(e) {
    const r = {};
    return v.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return v.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof M; )
          a = a._def.innerType;
        r[n] = a;
      }
    }), new x({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return vt(v.objectKeys(this.shape));
  }
}
x.create = (t, e) => new x({
  shape: () => t,
  unknownKeys: "strip",
  catchall: P.create(),
  typeName: p.ZodObject,
  ...g(e)
});
x.strictCreate = (t, e) => new x({
  shape: () => t,
  unknownKeys: "strict",
  catchall: P.create(),
  typeName: p.ZodObject,
  ...g(e)
});
x.lazycreate = (t, e) => new x({
  shape: t,
  unknownKeys: "strip",
  catchall: P.create(),
  typeName: p.ZodObject,
  ...g(e)
});
class de extends y {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new j(o.ctx.common.issues));
      return f(r, {
        code: l.invalid_union,
        unionErrors: i
      }), m;
    }
    if (r.common.async)
      return Promise.all(n.map(async (a) => {
        const i = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let a;
      const i = [];
      for (const u of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, h = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !a && (a = { result: h, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((u) => new j(u));
      return f(r, {
        code: l.invalid_union,
        unionErrors: o
      }), m;
    }
  }
  get options() {
    return this._def.options;
  }
}
de.create = (t, e) => new de({
  options: t,
  typeName: p.ZodUnion,
  ...g(e)
});
const Ee = (t) => t instanceof pe ? Ee(t.schema) : t instanceof E ? Ee(t.innerType()) : t instanceof me ? [t.value] : t instanceof L ? t.options : t instanceof ge ? Object.keys(t.enum) : t instanceof ye ? Ee(t._def.innerType) : t instanceof ue ? [void 0] : t instanceof le ? [null] : null;
class Ue extends y {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== d.object)
      return f(r, {
        code: l.invalid_type,
        expected: d.object,
        received: r.parsedType
      }), m;
    const n = this.discriminator, s = r.data[n], a = this.optionsMap.get(s);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (f(r, {
      code: l.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), m);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const a of r) {
      const i = Ee(a.shape[e]);
      if (!i)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, a);
      }
    }
    return new Ue({
      typeName: p.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...g(n)
    });
  }
}
function Je(t, e) {
  const r = V(t), n = V(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === d.object && n === d.object) {
    const s = v.objectKeys(e), a = v.objectKeys(t).filter((o) => s.indexOf(o) !== -1), i = { ...t, ...e };
    for (const o of a) {
      const u = Je(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      i[o] = u.data;
    }
    return { valid: !0, data: i };
  } else if (r === d.array && n === d.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], o = e[a], u = Je(i, o);
      if (!u.valid)
        return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else
    return r === d.date && n === d.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class fe extends y {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (a, i) => {
      if (Fe(a) || Fe(i))
        return m;
      const o = Je(a.value, i.value);
      return o.valid ? ((Ge(a) || Ge(i)) && r.dirty(), { status: r.value, value: o.data }) : (f(n, {
        code: l.invalid_intersection_types
      }), m);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
fe.create = (t, e, r) => new fe({
  left: t,
  right: e,
  typeName: p.ZodIntersection,
  ...g(r)
});
class C extends y {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== d.array)
      return f(n, {
        code: l.invalid_type,
        expected: d.array,
        received: n.parsedType
      }), m;
    if (n.data.length < this._def.items.length)
      return f(n, {
        code: l.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), m;
    !this._def.rest && n.data.length > this._def.items.length && (f(n, {
      code: l.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...n.data].map((i, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new O(n, i, n.path, o)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(a).then((i) => $.mergeArray(r, i)) : $.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new C({
      ...this._def,
      rest: e
    });
  }
}
C.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new C({
    items: t,
    typeName: p.ZodTuple,
    rest: null,
    ...g(e)
  });
};
class he extends y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== d.object)
      return f(n, {
        code: l.invalid_type,
        expected: d.object,
        received: n.parsedType
      }), m;
    const s = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: a._parse(new O(n, o, n.path, o)),
        value: i._parse(new O(n, n.data[o], n.path, o))
      });
    return n.common.async ? $.mergeObjectAsync(r, s) : $.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof y ? new he({
      keyType: e,
      valueType: r,
      typeName: p.ZodRecord,
      ...g(n)
    }) : new he({
      keyType: A.create(),
      valueType: e,
      typeName: p.ZodRecord,
      ...g(r)
    });
  }
}
class Pe extends y {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== d.map)
      return f(n, {
        code: l.invalid_type,
        expected: d.map,
        received: n.parsedType
      }), m;
    const s = this._def.keyType, a = this._def.valueType, i = [...n.data.entries()].map(([o, u], c) => ({
      key: s._parse(new O(n, o, n.path, [c, "key"])),
      value: a._parse(new O(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of i) {
          const c = await u.key, h = await u.value;
          if (c.status === "aborted" || h.status === "aborted")
            return m;
          (c.status === "dirty" || h.status === "dirty") && r.dirty(), o.set(c.value, h.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of i) {
        const c = u.key, h = u.value;
        if (c.status === "aborted" || h.status === "aborted")
          return m;
        (c.status === "dirty" || h.status === "dirty") && r.dirty(), o.set(c.value, h.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Pe.create = (t, e, r) => new Pe({
  valueType: e,
  keyType: t,
  typeName: p.ZodMap,
  ...g(r)
});
class W extends y {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== d.set)
      return f(n, {
        code: l.invalid_type,
        expected: d.set,
        received: n.parsedType
      }), m;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (f(n, {
      code: l.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (f(n, {
      code: l.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function i(u) {
      const c = /* @__PURE__ */ new Set();
      for (const h of u) {
        if (h.status === "aborted")
          return m;
        h.status === "dirty" && r.dirty(), c.add(h.value);
      }
      return { status: r.value, value: c };
    }
    const o = [...n.data.values()].map((u, c) => a._parse(new O(n, u, n.path, c)));
    return n.common.async ? Promise.all(o).then((u) => i(u)) : i(o);
  }
  min(e, r) {
    return new W({
      ...this._def,
      minSize: { value: e, message: _.toString(r) }
    });
  }
  max(e, r) {
    return new W({
      ...this._def,
      maxSize: { value: e, message: _.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
W.create = (t, e) => new W({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: p.ZodSet,
  ...g(e)
});
class X extends y {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== d.function)
      return f(r, {
        code: l.invalid_type,
        expected: d.function,
        received: r.parsedType
      }), m;
    function n(o, u) {
      return Oe({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Re(),
          ie
        ].filter((c) => !!c),
        issueData: {
          code: l.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function s(o, u) {
      return Oe({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Re(),
          ie
        ].filter((c) => !!c),
        issueData: {
          code: l.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, i = r.data;
    return this._def.returns instanceof te ? k(async (...o) => {
      const u = new j([]), c = await this._def.args.parseAsync(o, a).catch((w) => {
        throw u.addIssue(n(o, w)), u;
      }), h = await i(...c);
      return await this._def.returns._def.type.parseAsync(h, a).catch((w) => {
        throw u.addIssue(s(h, w)), u;
      });
    }) : k((...o) => {
      const u = this._def.args.safeParse(o, a);
      if (!u.success)
        throw new j([n(o, u.error)]);
      const c = i(...u.data), h = this._def.returns.safeParse(c, a);
      if (!h.success)
        throw new j([s(c, h.error)]);
      return h.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new X({
      ...this._def,
      args: C.create(e).rest(B.create())
    });
  }
  returns(e) {
    return new X({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new X({
      args: e || C.create([]).rest(B.create()),
      returns: r || B.create(),
      typeName: p.ZodFunction,
      ...g(n)
    });
  }
}
class pe extends y {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
pe.create = (t, e) => new pe({
  getter: t,
  typeName: p.ZodLazy,
  ...g(e)
});
class me extends y {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return f(r, {
        received: r.data,
        code: l.invalid_literal,
        expected: this._def.value
      }), m;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
me.create = (t, e) => new me({
  value: t,
  typeName: p.ZodLiteral,
  ...g(e)
});
function vt(t, e) {
  return new L({
    values: t,
    typeName: p.ZodEnum,
    ...g(e)
  });
}
class L extends y {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return f(r, {
        expected: v.joinValues(n),
        received: r.parsedType,
        code: l.invalid_type
      }), m;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return f(r, {
        received: r.data,
        code: l.invalid_enum_value,
        options: n
      }), m;
    }
    return k(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e) {
    return L.create(e);
  }
  exclude(e) {
    return L.create(this.options.filter((r) => !e.includes(r)));
  }
}
L.create = vt;
class ge extends y {
  _parse(e) {
    const r = v.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== d.string && n.parsedType !== d.number) {
      const s = v.objectValues(r);
      return f(n, {
        expected: v.joinValues(s),
        received: n.parsedType,
        code: l.invalid_type
      }), m;
    }
    if (r.indexOf(e.data) === -1) {
      const s = v.objectValues(r);
      return f(n, {
        received: n.data,
        code: l.invalid_enum_value,
        options: s
      }), m;
    }
    return k(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ge.create = (t, e) => new ge({
  values: t,
  typeName: p.ZodNativeEnum,
  ...g(e)
});
class te extends y {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== d.promise && r.common.async === !1)
      return f(r, {
        code: l.invalid_type,
        expected: d.promise,
        received: r.parsedType
      }), m;
    const n = r.parsedType === d.promise ? r.data : Promise.resolve(r.data);
    return k(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
te.create = (t, e) => new te({
  type: t,
  typeName: p.ZodPromise,
  ...g(e)
});
class E extends y {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === p.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null;
    if (s.type === "preprocess") {
      const i = s.transform(n.data);
      return n.common.async ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: i,
        path: n.path,
        parent: n
      });
    }
    const a = {
      addIssue: (i) => {
        f(n, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "refinement") {
      const i = (o) => {
        const u = s.refinement(o, a);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? m : (o.status === "dirty" && r.dirty(), i(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? m : (o.status === "dirty" && r.dirty(), i(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Ce(i))
          return i;
        const o = s.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => Ce(i) ? Promise.resolve(s.transform(i.value, a)).then((o) => ({ status: r.value, value: o })) : i);
    v.assertNever(s);
  }
}
E.create = (t, e, r) => new E({
  schema: t,
  typeName: p.ZodEffects,
  effect: e,
  ...g(r)
});
E.createWithPreprocess = (t, e, r) => new E({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: p.ZodEffects,
  ...g(r)
});
class M extends y {
  _parse(e) {
    return this._getType(e) === d.undefined ? k(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
M.create = (t, e) => new M({
  innerType: t,
  typeName: p.ZodOptional,
  ...g(e)
});
class H extends y {
  _parse(e) {
    return this._getType(e) === d.null ? k(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
H.create = (t, e) => new H({
  innerType: t,
  typeName: p.ZodNullable,
  ...g(e)
});
class ye extends y {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === d.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ye.create = (t, e) => new ye({
  innerType: t,
  typeName: p.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...g(e)
});
class Ve extends y {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r,
        common: {
          ...r.common,
          issues: []
        }
      }
    });
    return Ie(n) ? n.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue()
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue()
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ve.create = (t, e) => new Ve({
  innerType: t,
  typeName: p.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...g(e)
});
class De extends y {
  _parse(e) {
    if (this._getType(e) !== d.nan) {
      const n = this._getOrReturnCtx(e);
      return f(n, {
        code: l.invalid_type,
        expected: d.nan,
        received: n.parsedType
      }), m;
    }
    return { status: "valid", value: e.data };
  }
}
De.create = (t) => new De({
  typeName: p.ZodNaN,
  ...g(t)
});
const nr = Symbol("zod_brand");
class bt extends y {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class be extends y {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? m : a.status === "dirty" ? (r.dirty(), _t(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? m : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new be({
      in: e,
      out: r,
      typeName: p.ZodPipeline
    });
  }
}
const xt = (t, e = {}, r) => t ? ee.create().superRefine((n, s) => {
  if (!t(n)) {
    const a = typeof e == "function" ? e(n) : e, i = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...i, fatal: r });
  }
}) : ee.create(), sr = {
  object: x.lazycreate
};
var p;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(p || (p = {}));
const ar = (t, e = {
  message: `Input not instance of ${t.name}`
}) => xt((r) => r instanceof t, e, !0), wt = A.create, kt = D.create, ir = De.create, or = oe.create, $t = ce.create, cr = q.create, ur = je.create, lr = ue.create, dr = le.create, fr = ee.create, hr = B.create, pr = P.create, mr = Me.create, gr = Z.create, yr = x.create, _r = x.strictCreate, vr = de.create, br = Ue.create, xr = fe.create, wr = C.create, kr = he.create, $r = Pe.create, Tr = W.create, Zr = X.create, Er = pe.create, Nr = me.create, Sr = L.create, Rr = ge.create, Or = te.create, at = E.create, Cr = M.create, Ir = H.create, jr = E.createWithPreprocess, Mr = be.create, Ar = () => wt().optional(), Pr = () => kt().optional(), Vr = () => $t().optional(), Dr = {
  string: (t) => A.create({ ...t, coerce: !0 }),
  number: (t) => D.create({ ...t, coerce: !0 }),
  boolean: (t) => ce.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => oe.create({ ...t, coerce: !0 }),
  date: (t) => q.create({ ...t, coerce: !0 })
}, Lr = m;
var ys = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ie,
  setErrorMap: Jt,
  getErrorMap: Re,
  makeIssue: Oe,
  EMPTY_PATH: Yt,
  addIssueToContext: f,
  ParseStatus: $,
  INVALID: m,
  DIRTY: _t,
  OK: k,
  isAborted: Fe,
  isDirty: Ge,
  isValid: Ce,
  isAsync: Ie,
  get util() {
    return v;
  },
  ZodParsedType: d,
  getParsedType: V,
  ZodType: y,
  ZodString: A,
  ZodNumber: D,
  ZodBigInt: oe,
  ZodBoolean: ce,
  ZodDate: q,
  ZodSymbol: je,
  ZodUndefined: ue,
  ZodNull: le,
  ZodAny: ee,
  ZodUnknown: B,
  ZodNever: P,
  ZodVoid: Me,
  ZodArray: Z,
  get objectUtil() {
    return Ae;
  },
  ZodObject: x,
  ZodUnion: de,
  ZodDiscriminatedUnion: Ue,
  ZodIntersection: fe,
  ZodTuple: C,
  ZodRecord: he,
  ZodMap: Pe,
  ZodSet: W,
  ZodFunction: X,
  ZodLazy: pe,
  ZodLiteral: me,
  ZodEnum: L,
  ZodNativeEnum: ge,
  ZodPromise: te,
  ZodEffects: E,
  ZodTransformer: E,
  ZodOptional: M,
  ZodNullable: H,
  ZodDefault: ye,
  ZodCatch: Ve,
  ZodNaN: De,
  BRAND: nr,
  ZodBranded: bt,
  ZodPipeline: be,
  custom: xt,
  Schema: y,
  ZodSchema: y,
  late: sr,
  get ZodFirstPartyTypeKind() {
    return p;
  },
  coerce: Dr,
  any: fr,
  array: gr,
  bigint: or,
  boolean: $t,
  date: cr,
  discriminatedUnion: br,
  effect: at,
  enum: Sr,
  function: Zr,
  instanceof: ar,
  intersection: xr,
  lazy: Er,
  literal: Nr,
  map: $r,
  nan: ir,
  nativeEnum: Rr,
  never: pr,
  null: dr,
  nullable: Ir,
  number: kt,
  object: yr,
  oboolean: Vr,
  onumber: Pr,
  optional: Cr,
  ostring: Ar,
  pipeline: Mr,
  preprocess: jr,
  promise: Or,
  record: kr,
  set: Tr,
  strictObject: _r,
  string: wt,
  symbol: ur,
  transformer: at,
  tuple: wr,
  undefined: lr,
  union: vr,
  unknown: hr,
  void: mr,
  NEVER: Lr,
  ZodIssueCode: l,
  quotelessJson: Gt,
  ZodError: j
}), Tt = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
const _e = "a-f\\d", zr = `#?[${_e}]{3}[${_e}]?`, Ur = `#?[${_e}]{6}([${_e}]{2})?`, Br = new RegExp(`[^#${_e}]`, "gi"), qr = new RegExp(`^${zr}$|^${Ur}$`, "i");
var Zt = (t, e = {}) => {
  if (typeof t != "string" || Br.test(t) || !qr.test(t))
    throw new TypeError("Expected a valid hex string");
  t = t.replace(/^#/, "");
  let r = 1;
  t.length === 8 && (r = Number.parseInt(t.slice(6, 8), 16) / 255, t = t.slice(0, 6)), t.length === 4 && (r = Number.parseInt(t.slice(3, 4).repeat(2), 16) / 255, t = t.slice(0, 3)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
  const n = Number.parseInt(t, 16), s = n >> 16, a = n >> 8 & 255, i = n & 255, o = typeof e.alpha == "number" ? e.alpha : r;
  if (e.format === "array")
    return [s, a, i, o];
  if (e.format === "css") {
    const u = o === 1 ? "" : ` / ${Number((o * 100).toFixed(2))}%`;
    return `rgb(${s} ${a} ${i}${u})`;
  }
  return { red: s, green: a, blue: i, alpha: o };
};
const Wr = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;
var Hr = new RegExp(Wr, "i");
const Qe = "-?\\d*(?:\\.\\d+)", Q = `(${Qe}?)`, S = `(${Qe}?%)`, ne = `(${Qe}?%?)`, Fr = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${S}\\s*,
    \\s*${S}\\s*
    (?:,\\s*${ne}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var Gr = new RegExp(Fr);
const Jr = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${S}
    \\s+${S}
    \\s*(?:\\s*\\/\\s*${ne}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var Yr = new RegExp(Jr);
const Xr = `^
  rgba?\\(
    \\s*${Q}\\s*,
    \\s*${Q}\\s*,
    \\s*${Q}\\s*
    (?:,\\s*${ne}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var Qr = new RegExp(Xr);
const Kr = `^
  rgba?\\(
    \\s*${S}\\s*,
    \\s*${S}\\s*,
    \\s*${S}\\s*
    (?:,\\s*${ne}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var en = new RegExp(Kr);
const tn = `^
  rgba?\\(
    \\s*${Q}
    \\s+${Q}
    \\s+${Q}
    \\s*(?:\\s*\\/\\s*${ne}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
var rn = new RegExp(tn);
const nn = `^
  rgba?\\(
    \\s*${S}
    \\s+${S}
    \\s+${S}
    \\s*(?:\\s*\\/\\s*${ne}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
var sn = new RegExp(nn);
const an = /^transparent$/;
var on = new RegExp(an, "i");
const Ke = (t, e, r) => Math.min(Math.max(e, t), r), cn = (t) => {
  let e = t;
  return typeof e != "number" && (e = e.endsWith("%") ? parseFloat(e) * 255 / 100 : parseFloat(e)), Ke(Math.round(e), 0, 255);
}, it = (t) => Ke(parseFloat(t), 0, 100);
function Et(t) {
  let e = t;
  return typeof e != "number" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), Ke(e, 0, 1);
}
function un(t) {
  const [e, r, n, s] = Zt(t, { format: "array" });
  return Ne([null, e, r, n, s]);
}
function ln([, t, e, r, n = 1]) {
  let s = t;
  return s.endsWith("turn") ? s = parseFloat(s) * 360 / 1 : s.endsWith("rad") ? s = Math.round(parseFloat(s) * 180 / Math.PI) : s = parseFloat(s), {
    type: "hsl",
    values: [s, it(e), it(r)],
    alpha: Et(n === null ? 1 : n)
  };
}
function Ne([, t, e, r, n = 1]) {
  return {
    type: "rgb",
    values: [t, e, r].map(cn),
    alpha: Et(n === null ? 1 : n)
  };
}
/**
 * parse-css-color
 * @version v0.1.2
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */
const dn = (t) => {
  if (typeof t != "string")
    return null;
  const e = Hr.exec(t);
  if (e)
    return un(e[0]);
  const r = Yr.exec(t) || Gr.exec(t);
  if (r)
    return ln(r);
  const n = rn.exec(t) || sn.exec(t) || Qr.exec(t) || en.exec(t);
  if (n)
    return Ne(n);
  if (on.exec(t))
    return Ne([null, 0, 0, 0, 0]);
  const s = Tt[t.toLowerCase()];
  return s ? Ne([null, s[0], s[1], s[2], 1]) : null;
};
function fn(t) {
  var e = t[0] / 360, r = t[1] / 100, n = t[2] / 100, s, a, i, o, u;
  if (r == 0)
    return u = n * 255, [u, u, u];
  n < 0.5 ? a = n * (1 + r) : a = n + r - n * r, s = 2 * n - a, o = [0, 0, 0];
  for (var c = 0; c < 3; c++)
    i = e + 1 / 3 * -(c - 1), i < 0 && i++, i > 1 && i--, 6 * i < 1 ? u = s + (a - s) * 6 * i : 2 * i < 1 ? u = a : 3 * i < 2 ? u = s + (a - s) * (2 / 3 - i) * 6 : u = s, o[c] = u * 255;
  return o;
}
var Nt = fn;
function hn(t, e, r) {
  return Math.min(Math.max(t, e), r);
}
var pn = hn, mn = pn;
function ke(t) {
  var e = Math.round(mn(t, 0, 255)), r = e.toString(16);
  return r.length == 1 ? "0" + r : r;
}
function gn(t) {
  var e = t.length === 4 ? ke(t[3] * 255) : "";
  return "#" + ke(t[0]) + ke(t[1]) + ke(t[2]) + e;
}
var Ye = gn;
function yn(t) {
  var e = t[0] / 255, r = t[1] / 255, n = t[2] / 255, s = Math.min(e, r, n), a = Math.max(e, r, n), i = a - s, o, u, c;
  return a == s ? o = 0 : e == a ? o = (r - n) / i : r == a ? o = 2 + (n - e) / i : n == a && (o = 4 + (e - r) / i), o = Math.min(o * 60, 360), o < 0 && (o += 360), c = (s + a) / 2, a == s ? u = 0 : c <= 0.5 ? u = i / (a + s) : u = i / (2 - a - s), [o, u * 100, c * 100];
}
var _n = yn;
/**
 * mix-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */
function ot(t) {
  const e = dn(t);
  return e === null ? null : (e.type === "hsl" && (e.values = Nt(e.values)), e);
}
function ct(t, e, r = 50) {
  const n = ot(t), s = ot(e);
  if (!n || !s)
    return null;
  const a = Math.min(Math.max(0, r), 100) / 100, i = a * 2 - 1, o = n.alpha - s.alpha, u = ((i * o === -1 ? i : (i + o) / (1 + i * o)) + 1) / 2, c = 1 - u, [h, b, w] = n.values.map((z, xe) => Math.round(n.values[xe] * u + s.values[xe] * c)), T = parseFloat((n.alpha * a + s.alpha * (1 - a)).toFixed(8));
  return {
    hex: Ye([h, b, w]),
    hexa: Ye([h, b, w, T]),
    rgba: [h, b, w, T],
    hsla: [..._n([h, b, w]).map(Math.round), T]
  };
}
const vn = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;
var bn = new RegExp(vn, "i");
const et = "-?\\d*(?:\\.\\d+)", K = `(${et}?)`, R = `(${et}?%)`, se = `(${et}?%?)`, xn = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${R}\\s*,
    \\s*${R}\\s*
    (?:,\\s*${se}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var wn = new RegExp(xn);
const kn = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${R}
    \\s+${R}
    \\s*(?:\\s*\\/\\s*${se}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var $n = new RegExp(kn);
const Tn = `^
  rgba?\\(
    \\s*${K}\\s*,
    \\s*${K}\\s*,
    \\s*${K}\\s*
    (?:,\\s*${se}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var Zn = new RegExp(Tn);
const En = `^
  rgba?\\(
    \\s*${R}\\s*,
    \\s*${R}\\s*,
    \\s*${R}\\s*
    (?:,\\s*${se}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var Nn = new RegExp(En);
const Sn = `^
  rgba?\\(
    \\s*${K}
    \\s+${K}
    \\s+${K}
    \\s*(?:\\s*\\/\\s*${se}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
var Rn = new RegExp(Sn);
const On = `^
  rgba?\\(
    \\s*${R}
    \\s+${R}
    \\s+${R}
    \\s*(?:\\s*\\/\\s*${se}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
var Cn = new RegExp(On);
const In = /^transparent$/;
var jn = new RegExp(In, "i");
const tt = (t, e, r) => Math.min(Math.max(e, t), r), Mn = (t) => {
  let e = t;
  return typeof e != "number" && (e = e.endsWith("%") ? parseFloat(e) * 255 / 100 : parseFloat(e)), tt(Math.round(e), 0, 255);
}, ut = (t) => tt(parseFloat(t), 0, 100);
function St(t) {
  let e = t;
  return typeof e != "number" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), tt(e, 0, 1);
}
function An(t) {
  const [e, r, n, s] = Zt(t, { format: "array" });
  return Se([null, e, r, n, s]);
}
function Pn([, t, e, r, n = 1]) {
  let s = t;
  return s.endsWith("turn") ? s = parseFloat(s) * 360 / 1 : s.endsWith("rad") ? s = Math.round(parseFloat(s) * 180 / Math.PI) : s = parseFloat(s), {
    type: "hsl",
    values: [s, ut(e), ut(r)],
    alpha: St(n === null ? 1 : n)
  };
}
function Se([, t, e, r, n = 1]) {
  return {
    type: "rgb",
    values: [t, e, r].map(Mn),
    alpha: St(n === null ? 1 : n)
  };
}
/**
 * parse-css-color
 * @version v0.2.0
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */
const lt = (t) => {
  if (typeof t != "string")
    return null;
  const e = bn.exec(t);
  if (e)
    return An(e[0]);
  const r = $n.exec(t) || wn.exec(t);
  if (r)
    return Pn(r);
  const n = Rn.exec(t) || Cn.exec(t) || Zn.exec(t) || Nn.exec(t);
  if (n)
    return Se(n);
  if (jn.exec(t))
    return Se([null, 0, 0, 0, 0]);
  const s = Tt[t.toLowerCase()];
  return s ? Se([null, s[0], s[1], s[2], 1]) : null;
};
/**
 * values.js - Get the tints and shades of a color
 * @version v2.1.1
 * @link http://noeldelgado.github.io/values.js/
 * @license MIT
 */
const $e = (t, e) => t === null || isNaN(t) || typeof t == "string" ? e : t;
class ve {
  constructor(e = "#000", r = "base", n = 0) {
    [this.rgb, this.alpha, this.type, this.weight] = [[0, 0, 0], 1, r, n];
    const s = e === null ? "#000" : e;
    if (typeof s != "string")
      throw new TypeError(`Input should be a string: ${s}`);
    const a = lt(s);
    if (!a)
      throw new Error(`Unable to parse color from string: ${s}`);
    return this[`_setFrom${a.type.toUpperCase()}`]([...a.values, a.alpha]);
  }
  get hex() {
    return this.hexString().replace(/^#/, "");
  }
  setColor(e) {
    const r = lt(e);
    return r ? this[`_setFrom${r.type.toUpperCase()}`]([...r.values, r.alpha]) : null;
  }
  tint(e, r = $e(e, 50)) {
    return new ve(`rgb(${ct("#fff", this.rgbString(), r).rgba})`, "tint", r);
  }
  shade(e, r = $e(e, 50)) {
    return new ve(`rgb(${ct("#000", this.rgbString(), r).rgba})`, "shade", r);
  }
  tints(e, r = $e(e, 10)) {
    return Array.from({ length: 100 / r }, (n, s) => this.tint((s + 1) * r));
  }
  shades(e, r = $e(e, 10)) {
    return Array.from({ length: 100 / r }, (n, s) => this.shade((s + 1) * r));
  }
  all(e = 10) {
    return [...this.tints(e).reverse(), Object.assign(this), ...this.shades(e)];
  }
  hexString() {
    return Ye(this.alpha >= 1 ? this.rgb : [...this.rgb, this.alpha]);
  }
  rgbString() {
    const e = (this.alpha >= 1 ? this.rgb : [...this.rgb, this.alpha]).join(", ");
    return `${this.alpha >= 1 ? "rgb" : "rgba"}(${e})`;
  }
  getBrightness() {
    return Math.round(this.rgb.reduce((e, r) => e + r) / (255 * 3) * 100);
  }
  _setFromRGB([e, r, n, s]) {
    return [this.rgb, this.alpha] = [[e, r, n], s], this;
  }
  _setFromHSL([e, r, n, s]) {
    return [this.rgb, this.alpha] = [Nt([e, r, n]).map(Math.round), s], this;
  }
}
ve.VERSION = "v2.1.1";
const _s = ve;
export {
  mt as A,
  Qn as B,
  Le as C,
  Jn as D,
  ns as E,
  re as F,
  nt as G,
  Vn as H,
  Ln as I,
  Un as J,
  Bn as K,
  zn as L,
  qn as M,
  rs as N,
  is as O,
  os as P,
  as as Q,
  Fn as R,
  ms as S,
  gs as T,
  Dn as U,
  _s as V,
  fs as W,
  cs as X,
  us as Y,
  ls as Z,
  Hn as a,
  Rt as b,
  Gn as c,
  jt as d,
  Xn as e,
  es as f,
  Kn as g,
  Wn as h,
  ps as i,
  ts as j,
  ds as k,
  Yn as l,
  ys as m,
  N as n,
  gt as o,
  Lt as p,
  Ut as q,
  Ht as r,
  Ct as s,
  pt as t,
  zt as u,
  ss as v,
  Ft as w,
  hs as x,
  Bt as y,
  qt as z
};
