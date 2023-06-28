import { m as M, w as On, V as zn, r as ft, S as V, i as W, s as P, e as te, a as L, n as j, d as E, b as Pn, c as D, t as Vn, f as ut, g as dt, h as C, j as Wn, k as Hn, l as R, o as p, p as H, q as h, u as K, v as oe, x as $, y as T, z as I, A as c, B as se, C as ln, D as z, E as ze, F as sn, G as ke, H as re, I as cn, J as fn, K as un, L as dn, M as pn, N as pt, O as Kn, P as Zn, Q as gn, R as $e, T as mn, U as hn, W as Te, X as Ie, Y as Gn, Z as qn } from "./vendor.0c2a39e9.mjs";
import { i as Yn, c as F, k as gt } from "./emotion.c2af8239.mjs";
var os = "-ms-", is = "-moz-", as = "-webkit-", bn = "comm", Cn = "rule", _n = "decl", Jn = "@import", Xn = "@keyframes", Qn = Math.abs, Je = String.fromCharCode, er = Object.assign;
function ls(r, e) {
  return pe(r, 0) ^ 45 ? (((e << 2 ^ pe(r, 0)) << 2 ^ pe(r, 1)) << 2 ^ pe(r, 2)) << 2 ^ pe(r, 3) : 0;
}
function kn(r) {
  return r.trim();
}
function ss(r, e) {
  return (r = e.exec(r)) ? r[0] : r;
}
function Ke(r, e, t) {
  return r.replace(e, t);
}
function tr(r, e) {
  return r.indexOf(e);
}
function pe(r, e) {
  return r.charCodeAt(e) | 0;
}
function we(r, e, t) {
  return r.slice(e, t);
}
function ge(r) {
  return r.length;
}
function Xe(r) {
  return r.length;
}
function Ae(r, e) {
  return e.push(r), r;
}
function cs(r, e) {
  return r.map(e).join("");
}
var Re = 1, Ce = 1, yn = 0, ie = 0, Q = 0, ye = "";
function Me(r, e, t, n, o, l, i) {
  return { value: r, root: e, parent: t, type: n, props: o, children: l, line: Re, column: Ce, length: i, return: "" };
}
function fs(r, e) {
  return er(Me("", null, null, "", null, null, 0), r, { length: -r.length }, e);
}
function nr() {
  return Q;
}
function rr() {
  return Q = ie > 0 ? pe(ye, --ie) : 0, Ce--, Q === 10 && (Ce = 1, Re--), Q;
}
function ce() {
  return Q = ie < yn ? pe(ye, ie++) : 0, Ce++, Q === 10 && (Ce = 1, Re++), Q;
}
function me() {
  return pe(ye, ie);
}
function Fe() {
  return ie;
}
function Ue(r, e) {
  return we(ye, r, e);
}
function Ze(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function or(r) {
  return Re = Ce = 1, yn = ge(ye = r), ie = 0, [];
}
function ir(r) {
  return ye = "", r;
}
function Pe(r) {
  return kn(Ue(ie - 1, Ge(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function ar(r) {
  for (; (Q = me()) && Q < 33; )
    ce();
  return Ze(r) > 2 || Ze(Q) > 3 ? "" : " ";
}
function lr(r, e) {
  for (; --e && ce() && !(Q < 48 || Q > 102 || Q > 57 && Q < 65 || Q > 70 && Q < 97); )
    ;
  return Ue(r, Fe() + (e < 6 && me() == 32 && ce() == 32));
}
function Ge(r) {
  for (; ce(); )
    switch (Q) {
      case r:
        return ie;
      case 34:
      case 39:
        r !== 34 && r !== 39 && Ge(Q);
        break;
      case 40:
        r === 41 && Ge(r);
        break;
      case 92:
        ce();
        break;
    }
  return ie;
}
function sr(r, e) {
  for (; ce() && r + Q !== 47 + 10; )
    if (r + Q === 42 + 42 && me() === 47)
      break;
  return "/*" + Ue(e, ie - 1) + "*" + Je(r === 47 ? r : ce());
}
function cr(r) {
  for (; !Ze(me()); )
    ce();
  return Ue(r, ie);
}
function us(r) {
  return ir(De("", null, null, null, [""], r = or(r), 0, [0], r));
}
function De(r, e, t, n, o, l, i, s, a) {
  for (var f = 0, u = 0, d = i, g = 0, m = 0, k = 0, y = 1, v = 1, _ = 1, b = 0, w = "", U = o, S = l, A = n, B = w; v; )
    switch (k = b, b = ce()) {
      case 40:
        if (k != 108 && pe(B, d - 1) == 58) {
          tr(B += Ke(Pe(b), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        B += Pe(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        B += ar(k);
        break;
      case 92:
        B += lr(Fe() - 1, 7);
        continue;
      case 47:
        switch (me()) {
          case 42:
          case 47:
            Ae(fr(sr(ce(), Fe()), e, t), a);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * y:
        s[f++] = ge(B) * _;
      case 125 * y:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            m > 0 && ge(B) - d && Ae(m > 32 ? ht(B + ";", n, t, d - 1) : ht(Ke(B, " ", "") + ";", n, t, d - 2), a);
            break;
          case 59:
            B += ";";
          default:
            if (Ae(A = mt(B, e, t, f, u, o, s, w, U = [], S = [], d), l), b === 123)
              if (u === 0)
                De(B, e, A, A, U, l, d, s, S);
              else
                switch (g === 99 && pe(B, 3) === 110 ? 100 : g) {
                  case 100:
                  case 109:
                  case 115:
                    De(r, A, A, n && Ae(mt(r, A, A, 0, 0, o, s, w, o, U = [], d), S), o, S, d, s, n ? U : S);
                    break;
                  default:
                    De(B, A, A, A, [""], S, 0, s, S);
                }
        }
        f = u = m = 0, y = _ = 1, w = B = "", d = i;
        break;
      case 58:
        d = 1 + ge(B), m = k;
      default:
        if (y < 1) {
          if (b == 123)
            --y;
          else if (b == 125 && y++ == 0 && rr() == 125)
            continue;
        }
        switch (B += Je(b), b * y) {
          case 38:
            _ = u > 0 ? 1 : (B += "\f", -1);
            break;
          case 44:
            s[f++] = (ge(B) - 1) * _, _ = 1;
            break;
          case 64:
            me() === 45 && (B += Pe(ce())), g = me(), u = d = ge(w = B += cr(Fe())), b++;
            break;
          case 45:
            k === 45 && ge(B) == 2 && (y = 0);
        }
    }
  return l;
}
function mt(r, e, t, n, o, l, i, s, a, f, u) {
  for (var d = o - 1, g = o === 0 ? l : [""], m = Xe(g), k = 0, y = 0, v = 0; k < n; ++k)
    for (var _ = 0, b = we(r, d + 1, d = Qn(y = i[k])), w = r; _ < m; ++_)
      (w = kn(y > 0 ? g[_] + " " + b : Ke(b, /&\f/g, g[_]))) && (a[v++] = w);
  return Me(r, e, t, o === 0 ? Cn : s, a, f, u);
}
function fr(r, e, t) {
  return Me(r, e, t, bn, Je(nr()), we(r, 2, -2), 0);
}
function ht(r, e, t, n) {
  return Me(r, e, t, _n, we(r, 0, n), we(r, n + 1, -1), n);
}
function bt(r, e) {
  for (var t = "", n = Xe(r), o = 0; o < n; o++)
    t += e(r[o], o, r, e) || "";
  return t;
}
function ds(r, e, t, n) {
  switch (r.type) {
    case Jn:
    case _n:
      return r.return = r.return || r.value;
    case bn:
      return "";
    case Xn:
      return r.return = r.value + "{" + bt(r.children, n) + "}";
    case Cn:
      r.value = r.props.join(",");
  }
  return ge(t = bt(r.children, n)) ? r.return = r.value + "{" + t + "}" : "";
}
function ps(r) {
  var e = Xe(r);
  return function(t, n, o, l) {
    for (var i = "", s = 0; s < e; s++)
      i += r[s](t, n, o, l) || "";
    return i;
  };
}
function gs(r) {
  return function(e) {
    e.root || (e = e.return) && r(e);
  };
}
const vn = M.union([
  M.literal("Accounting"),
  M.literal("Banking"),
  M.literal("Commerce"),
  M.literal("Other")
]), ur = M.object({
  sourceType: vn
}), dr = M.array(ur), pr = M.object({
  connected: M.number().optional(),
  disconnected: M.number().optional(),
  uploadedFiles: M.number().optional(),
  maxConnections: M.number().optional(),
  sourceType: vn
}), gr = (r) => {
  const e = On({ kind: "fetching" }), t = () => {
    e.set({ kind: "fetching" }), r().then((n) => {
      const o = {
        Accounting: n.find((l) => l.sourceType === "Accounting"),
        Commerce: n.find((l) => l.sourceType === "Commerce"),
        Banking: n.find((l) => l.sourceType === "Banking"),
        Other: n.find((l) => l.sourceType === "Other")
      };
      e.set({ kind: "fetched", data: o });
    }).catch((n) => {
      e.set({ kind: "error", error: n });
    });
  };
  return t(), { update: t, subscribe: e.subscribe };
}, mr = M.object({
  linkUrl: M.string(),
  connectionId: M.string()
}), hr = M.union([
  M.literal("Success"),
  M.literal("Error"),
  M.literal("InProgress")
]), wn = (r) => {
  const e = ["bytes", "KB", "MB", "GB", "TB"];
  if (r <= 0)
    return "0 byte";
  const t = Math.floor(Math.log(r) / Math.log(1024));
  return Math.round(r / Math.pow(1024, t)) + " " + e[t];
}, br = () => {
  const r = document.cookie.match(/cypress_overridePollInterval=(\d+)/);
  if (r && r[1]) {
    const e = Number.parseInt(r[1]);
    if (Number.isFinite(e))
      return e;
  }
}, Qe = (r, e) => {
  const n = Object.entries(r).map(
    ([o, l]) => [o, e({ key: o, value: l })]
  );
  return Object.fromEntries(n);
}, ue = (r) => r.filter((e) => typeof e == "string").join(" "), Cr = "--color-ui-light", _r = "--color-ui-dark", kr = {
  base: "",
  mid: "-mid",
  dark: "-dark",
  5: "-5",
  10: "-10",
  20: "-20",
  30: "-30",
  40: "-40",
  60: "-60",
  70: "-70"
}, Se = (r) => Qe(
  kr,
  ({ value: e }) => `--color-ui-${r}${e}`
), X = Se("action"), G = Se("interface"), ne = Se("negative"), et = Se("positive"), _e = {
  light: Cr,
  dark: _r
}, xe = Qe(
  _e,
  ({ value: r }) => `var(${r})`
), x = (r) => `var(${r})`, yr = (r) => {
  const e = new zn(r), t = e.shade(20).hexString().toUpperCase(), n = e.shade(40).hexString().toUpperCase(), o = (l) => e.tint(100 - l).hexString().toUpperCase();
  return {
    base: r,
    mid: t,
    dark: n,
    5: o(5),
    10: o(10),
    20: o(20),
    30: o(30),
    40: o(40),
    60: o(60),
    70: o(70)
  };
}, vr = {
  base: "#482DEB",
  mid: "#2F1BA6",
  dark: "#15095D",
  [5]: "#F6F5FE",
  [10]: "#EDEAFD",
  [20]: "#DAD5FB",
  [30]: "#C8C0F9",
  [40]: "#B6ABF7",
  [60]: "#9181F3",
  [70]: "#7F6CF1"
}, $n = {
  base: "#556680",
  mid: "#39465B",
  dark: "#262E3B",
  [5]: "#F7FAFD",
  [10]: "#F0F4FA",
  [20]: "#E4ECF6",
  [30]: "#D7E1EF",
  [40]: "#BBCADD",
  [60]: "#93A5BD",
  [70]: "#8598B2"
}, Tn = {
  base: "#EC0049",
  mid: "#B80039",
  dark: "#750024",
  [5]: "#FEF2F6",
  [10]: "#FDE6ED",
  [20]: "#FBCCDB",
  [30]: "#F9B3C8",
  [40]: "#F799B6",
  [60]: "#F46692",
  [70]: "#F24D80"
}, wr = {
  base: "#008800",
  mid: "#006100",
  dark: "#004D00",
  [5]: "#F2F9F2",
  [10]: "#E6F3E6",
  [20]: "#CCE7CC",
  [30]: "#B3DBB3",
  [40]: "#99CF99",
  [60]: "#66B866",
  [70]: "#4DAC4D"
}, Be = (r, e) => {
  const t = Object.keys(r).map((n) => {
    const o = n;
    return [r[o], e[o]];
  });
  return Object.fromEntries(t);
}, $r = M.object({
  errorMessage: M.string().optional(),
  correlationId: M.string().optional(),
  platformKey: M.string().optional()
}), Tr = M.object({
  statusCode: M.number(),
  correlationId: M.string(),
  error: M.string()
});
class fe {
  constructor(e, t, n, o, l) {
    this.title = e, this.correlationId = t, this.message = n, this.errorCode = o, this.userRecoverable = l;
  }
  name = "CodatError";
  static fromApiError(e, t, n) {
    const o = Tr.safeParse(t), l = "Error";
    return o.success ? new fe(
      l,
      o.data.correlationId,
      o.data.error,
      o.data.statusCode,
      !1
    ) : new fe(
      l,
      n,
      "Unknown error",
      e.status,
      !1
    );
  }
  static fromParsingError(e, t) {
    const n = e.issues[0], { field: o, zodMessage: l } = (() => {
      if (n) {
        const s = n.path.join("."), a = n.message;
        return { field: s, zodMessage: a };
      } else
        return { field: "Unknown", zodMessage: "Unknown" };
    })(), i = `Parsing error on field ${o}: ${l}`;
    return new fe("Error", t, i, void 0, !1);
  }
}
const Ir = (r, e) => r.kind === "fetched" ? { kind: "fetched", data: e(r.data) } : r, Sr = (r) => {
  if (!(r.indexOf(".") < 0))
    return r.split(".").pop();
}, Ar = "Unknown file type", xr = "Unsupported file type", Br = "File is too large", Fr = (r, e, t) => {
  const n = Sr(r.name), o = (() => n === void 0 ? { kind: "error", text: Ar } : e.has(n.toLowerCase()) ? r.size > t ? { kind: "error", text: Br } : { kind: "ready" } : { kind: "error", text: xr })();
  return { file: r, state: o };
}, Dr = (r, e, t, n, o) => [
  ...r,
  ...e.map((l) => Fr(l, t, o))
].slice(0, n), Lr = (r, e) => r.filter((t) => t.file !== e), Er = (r) => r.map(
  (e) => e.state.kind === "ready" ? { ...e, state: { kind: "uploading" } } : e
), Rr = (r) => r.filter((e) => e.state.kind === "ready").map((e) => e.file), Mr = (r) => r.result === "error" ? { kind: "upload-error", text: "Error uploading" } : { kind: "uploaded" }, Ur = (r, e) => r.map(
  (t) => t.file === e.file ? { ...t, state: Mr(e) } : t
), jr = (r) => r.length > 0 && r.every((e) => e.state.kind === "ready" || e.state.kind === "uploaded"), Nr = (r) => r.length > 0 && r.some((e) => e.state.kind === "uploading"), In = (r) => r.length > 0 && r.every((e) => e.state.kind === "uploaded"), qe = (r) => r.length > 0 && r.some((e) => e.state.kind === "upload-error"), Or = (r) => {
  switch (r) {
    case "Accounting":
      return "ukbd";
    case "Banking":
      return "trlg";
    case "Other":
      return "njmc";
    case "Commerce":
      return;
  }
}, zr = (r) => {
  const e = r ? yr(r) : vr;
  return {
    ...Be(X, e),
    ...Be(G, $n),
    ...Be(ne, Tn),
    ...Be(et, wr),
    [_e.light]: "white",
    [_e.dark]: "#1A1B23",
    height: "100%",
    "& *": {
      boxSizing: "border-box"
    }
  };
}, Ve = M.object({
  src: M.string().optional(),
  alt: M.string()
}), Pr = M.object({
  key: M.string(),
  name: M.string(),
  alternativeNames: M.array(M.string()),
  logo: M.object({
    square: M.object({
      image: Ve
    })
  }).optional(),
  logoUrl: M.string(),
  button: M.object({
    default: M.object({
      image: Ve
    }),
    hover: M.object({
      image: Ve
    })
  }).optional()
}), tt = (r, e) => Object.values(r).flatMap((t) => t).find((t) => t.key === e), Vr = (r, e) => tt(r, e)?.name, Ct = M.object({
  title: M.string(),
  body: M.string()
}), We = M.object({
  body: M.string()
}), Wr = M.object({
  clientName: M.string(),
  pageConfiguration: M.object({
    landing: Ct,
    leftPanel: Ct,
    fileUpload: M.object({
      accounting: We,
      banking: We,
      businessDocuments: We
    }).optional(),
    dataAccess: M.object({
      accounting: M.array(M.string()),
      banking: M.array(M.string()),
      commerce: M.array(M.string()),
      termsAndConditions: M.object({
        href: M.string().optional(),
        text: M.string().optional()
      }),
      consentsBody: M.object({
        accounting: M.string(),
        banking: M.string(),
        commerce: M.string()
      })
    })
  }),
  enableFileUpload: M.object({
    accounting: M.boolean(),
    banking: M.boolean(),
    businessDocuments: M.boolean()
  }),
  showPoweredByCodat: M.boolean(),
  colors: M.object({
    primary: M.string().optional()
  }).optional(),
  optionalSourceTypes: M.object({
    accounting: M.boolean(),
    banking: M.boolean(),
    commerce: M.boolean(),
    businessDocuments: M.boolean()
  })
}), Hr = (r, e) => {
  switch (r) {
    case "Accounting":
      return e.pageConfiguration.dataAccess.accounting;
    case "Banking":
      return e.pageConfiguration.dataAccess.banking;
    case "Commerce":
      return e.pageConfiguration.dataAccess.commerce;
    case "Other":
      return;
  }
}, Kr = (r, e) => {
  switch (r) {
    case "Accounting":
      return e.pageConfiguration.dataAccess.consentsBody.accounting;
    case "Banking":
      return e.pageConfiguration.dataAccess.consentsBody.banking;
    case "Commerce":
      return e.pageConfiguration.dataAccess.consentsBody.commerce;
    case "Other":
      return;
  }
}, Zr = (r, e) => {
  switch (r) {
    case "Accounting":
      return e.optionalSourceTypes.accounting;
    case "Banking":
      return e.optionalSourceTypes.banking;
    case "Commerce":
      return e.optionalSourceTypes.commerce;
    case "Other":
      return e.optionalSourceTypes.businessDocuments;
  }
}, _t = (r) => {
  switch (r) {
    case "Accounting":
      return "accounting software";
    case "Banking":
      return "bank account";
    case "Commerce":
      return "commerce software";
    case "Other":
      return "business documents";
  }
}, Gr = (r) => {
  switch (r) {
    case "Accounting":
      return "accounting";
    case "Banking":
      return "bank";
    case "Commerce":
      return "commerce";
    case "Other":
      return "business";
  }
}, Sn = (r) => {
  switch (r) {
    case "Accounting":
      return "accounting documents";
    case "Banking":
      return "bank documents";
    case "Commerce":
      return "files";
    case "Other":
      return "business documents";
  }
}, An = (r, e) => {
  switch (r) {
    case "Accounting":
      return e.enableFileUpload.accounting;
    case "Banking":
      return e.enableFileUpload.banking;
    case "Other":
      return e.enableFileUpload.businessDocuments;
    case "Commerce":
      return !1;
  }
}, qr = M.object({
  connectionId: M.string(),
  token: M.string()
}), Yr = (r) => M.object({
  results: M.array(r)
}), Jr = (r) => r.headers.get("x-correlation-id") ?? void 0, Xr = (r, e, t, n, o) => {
  const l = (U) => `${r}/companies/${e}/connections/${U}/start?uiFlow=true`, i = () => v(
    `companies/${e}/config?link.embedded=true`,
    Wr
  ), s = () => v(
    `companies/${e}/integrations/sourceTypes`,
    dr
  ), a = (U) => v(
    `companies/${e}/displayText?connectionId=${U}`,
    $r
  ), f = () => v(
    `companies/${e}/integrations/sourceTypes`,
    M.array(pr)
  ), u = (U) => _(
    `companies/${e}/connections?link.embedded=true`,
    { platformKey: U },
    mr
  ), d = (U) => v(
    `companies/${e}/integrations?page=1&pageSize=100&sourceType=${U}`,
    Yr(Pr)
  ).then((S) => S.results), g = (U, S) => {
    const A = M.object({ status: hr }), B = () => v(`companies/${e}/connections/${U}/status`, A);
    return ft("InProgress", (J) => {
      const O = setInterval(() => {
        B().then(({ status: q }) => {
          J(q), (q === "Success" || q === "Error") && clearInterval(O);
        }).catch(() => {
          clearInterval(O);
        });
      }, S ?? 5e3);
      return () => {
        clearInterval(O);
      };
    });
  }, m = (U) => _(
    `companies/${e}/connections/files`,
    { platformKey: U },
    qr
  ), k = (U, S) => {
    const A = new FormData();
    return A.append("file", S), b(
      `companies/${e}/connections/${U}/files`,
      A
    ).then((B) => B.ok ? { file: S, result: "success" } : { file: S, result: "error" }).catch(() => ({ file: S, result: "error" }));
  }, y = (U, S) => ft(void 0, (A) => {
    let B = !1;
    m(U).then((N) => {
      const J = N.connectionId;
      S.map(
        (O) => k(J, O).then((q) => {
          A(q), !B && q.result === "success" && (n({ connectionId: J }), B = !0);
        })
      );
    }).catch(() => {
    });
  }), v = (U, S) => w(U, "GET", void 0, S), _ = (U, S, A) => w(U, "POST", S, A), b = (U, S) => fetch(`${r}/${U}`, {
    method: "POST",
    headers: {
      "X-Codat-LinkMode": o
    },
    body: S
  }), w = (U, S, A, B) => fetch(`${r}/${U}`, {
    method: S,
    headers: {
      "X-Codat-LinkMode": o,
      "content-type": "application/json"
    },
    body: A ? JSON.stringify(A) : void 0
  }).then(
    (N) => N.json().then((J) => ({ response: N, body: J })).catch(() => Promise.resolve({ response: N, body: {} }))
  ).then(({ response: N, body: J }) => {
    const O = Jr(N);
    if (N.ok)
      return { body: J, correlationId: O };
    throw fe.fromApiError(
      N,
      J,
      O
    );
  }).then(({ body: N, correlationId: J }) => {
    const O = B.safeParse(N);
    if (O.success)
      return O.data;
    throw fe.fromParsingError(
      O.error,
      J
    );
  }).catch((N) => {
    throw N instanceof fe ? t({
      message: N.message,
      userRecoverable: N.userRecoverable,
      correlationId: N.correlationId,
      errorCode: N.errorCode
    }) : t({
      message: "Unknown error occurred while data fetching",
      userRecoverable: !1
    }), N;
  });
  return {
    connectUrl: l,
    getCompanyConfig: i,
    getSourceTypes: s,
    getDisplayText: a,
    getConnectionCount: f,
    createConnection: u,
    getIntegrations: d,
    pollConnectionStatus: g,
    uploadFiles: y
  };
}, ae = (r) => r / 16 + "rem", le = (r, e) => e / r;
Yn([
  {
    "@font-face": {
      fontFamily: "Axiforma",
      fontWeight: 700,
      fontStyle: "italic",
      src: 'url("https://static.codat.io/public/fonts/Axiforma-BoldItalic.woff2") format("woff2"), url("https://static.codat.io/public/fonts/Axiforma-BoldItalic.woff") format("woff")'
    }
  },
  {
    "@font-face": {
      fontFamily: "Axiforma",
      fontWeight: 700,
      src: 'url("https://static.codat.io/public/fonts/Axiforma-Bold.woff2") format("woff2"), url("https://static.codat.io/public/fonts/Axiforma-Bold.woff") format("woff")'
    }
  },
  {
    "@font-face": {
      fontFamily: "Axiforma",
      fontWeight: 400,
      src: 'url("https://static.codat.io/public/fonts/Axiforma-Regular.woff2") format("woff2"), url("https://static.codat.io/public/fonts/Axiforma-Regular.woff") format("woff")'
    }
  },
  {
    "@font-face": {
      fontFamily: "Axiforma",
      fontWeight: 400,
      fontStyle: "italic",
      src: 'url("https://static.codat.io/public/fonts/Axiforma-Italic.woff2") format("woff2"), url("https://static.codat.io/public/fonts/Axiforma-Italic.woff") format("woff")'
    }
  }
]);
const Qr = {
  fontFamily: "Axiforma, Arial, Helvetica, sans-serif",
  margin: 0,
  whiteSpace: "pre-wrap"
}, eo = {
  fontWeight: 700
}, to = {
  fontWeight: 400
}, no = {
  "heading-xxxl": {
    fontSize: ae(42),
    lineHeight: le(42, 50)
  },
  "heading-xxl": {
    fontSize: ae(33),
    lineHeight: le(33, 40)
  },
  "heading-xl": {
    fontSize: ae(26),
    lineHeight: le(26, 32)
  },
  "heading-lg": {
    fontSize: ae(20),
    lineHeight: le(20, 24)
  },
  "heading-md": {
    fontSize: ae(16),
    lineHeight: le(16, 20)
  },
  "heading-reg": {
    fontSize: ae(14),
    lineHeight: le(14, 21)
  },
  "heading-sm": {
    fontSize: ae(12),
    lineHeight: le(12, 18)
  },
  "body-md": {
    fontSize: ae(16),
    lineHeight: le(16, 28)
  },
  "body-reg": {
    fontSize: ae(14),
    lineHeight: le(14, 24)
  },
  "body-sm": {
    fontSize: ae(12),
    lineHeight: le(12, 20)
  },
  "body-xs": {
    fontSize: ae(10),
    lineHeight: le(10, 16)
  }
}, xn = Qe(
  no,
  ({ key: r, value: e }) => [Qr, r.startsWith("heading") ? eo : to, e].reduce(
    (t, n) => ({ ...t, ...n })
  )
), ro = (r, e) => {
  switch (e) {
    case "action":
      return x(X.base);
    case "interface":
      return x(G.base);
    case "interface-mid":
      return x(G.mid);
    case "interface-dark":
      return x(G.dark);
    case "negative":
      return x(ne.base);
    case "negativeDark":
      return x(ne.dark);
    case "inherit":
      return "inherit";
    case "default":
      return r.startsWith("heading") ? "black" : x(G.base);
  }
}, oo = xn, io = (r, e) => ue([
  F(xn[r]),
  F({ color: ro(r, e) })
]);
function He(r) {
  let e, t, n = [
    { class: r[4] },
    { "data-testid": r[2] },
    { "data-color": r[3] }
  ], o = {};
  for (let l = 0; l < n.length; l += 1)
    o = Pn(o, n[l]);
  return {
    c() {
      e = D(r[1]), t = Vn(r[0]), /-/.test(r[1]) ? ut(e, o) : dt(e, o);
    },
    m(l, i) {
      L(l, e, i), C(e, t);
    },
    p(l, i) {
      i & 1 && Wn(t, l[0]), o = Hn(n, [
        i & 16 && { class: l[4] },
        i & 4 && { "data-testid": l[2] },
        i & 8 && { "data-color": l[3] }
      ]), /-/.test(l[1]) ? ut(e, o) : dt(e, o);
    },
    d(l) {
      l && E(e);
    }
  };
}
function ao(r) {
  let e = r[1], t, n = r[1] && He(r);
  return {
    c() {
      n && n.c(), t = te();
    },
    m(o, l) {
      n && n.m(o, l), L(o, t, l);
    },
    p(o, [l]) {
      o[1] ? e ? P(e, o[1]) ? (n.d(1), n = He(o), n.c(), n.m(t.parentNode, t)) : n.p(o, l) : (n = He(o), n.c(), n.m(t.parentNode, t)) : e && (n.d(1), n = null), e = o[1];
    },
    i: j,
    o: j,
    d(o) {
      o && E(t), n && n.d(o);
    }
  };
}
function lo(r, e, t) {
  let n, { text: o } = e, { as: l } = e, { variant: i } = e, { dataTestId: s = void 0 } = e, { color: a = "default" } = e;
  return r.$$set = (f) => {
    "text" in f && t(0, o = f.text), "as" in f && t(1, l = f.as), "variant" in f && t(5, i = f.variant), "dataTestId" in f && t(2, s = f.dataTestId), "color" in f && t(3, a = f.color);
  }, r.$$.update = () => {
    r.$$.dirty & 40 && t(4, n = io(i, a));
  }, [o, l, s, a, n, i];
}
class Z extends V {
  constructor(e) {
    super(), W(this, e, lo, ao, P, {
      text: 0,
      as: 1,
      variant: 5,
      dataTestId: 2,
      color: 3
    });
  }
}
function kt(r) {
  let e, t, n;
  var o = r[1].component;
  function l(i) {
    return {};
  }
  return o && (e = oe(o, l())), {
    c() {
      e && $(e.$$.fragment), t = te();
    },
    m(i, s) {
      e && T(e, i, s), L(i, t, s), n = !0;
    },
    p(i, s) {
      if (o !== (o = i[1].component)) {
        if (e) {
          H();
          const a = e;
          h(a.$$.fragment, 1, 0, () => {
            I(a, 1);
          }), K();
        }
        o ? (e = oe(o, l()), $(e.$$.fragment), p(e.$$.fragment, 1), T(e, t.parentNode, t)) : e = null;
      }
    },
    i(i) {
      n || (e && p(e.$$.fragment, i), n = !0);
    },
    o(i) {
      e && h(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && E(t), e && I(e, i);
    }
  };
}
function yt(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "span",
      variant: r[2] === "small" ? "heading-sm" : "heading-reg",
      color: "inherit",
      text: r[0],
      dataTestId: "button-text"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 4 && (l.variant = n[2] === "small" ? "heading-sm" : "heading-reg"), o & 1 && (l.text = n[0]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function vt(r) {
  let e, t, n;
  var o = r[1].component;
  function l(i) {
    return {};
  }
  return o && (e = oe(o, l())), {
    c() {
      e && $(e.$$.fragment), t = te();
    },
    m(i, s) {
      e && T(e, i, s), L(i, t, s), n = !0;
    },
    p(i, s) {
      if (o !== (o = i[1].component)) {
        if (e) {
          H();
          const a = e;
          h(a.$$.fragment, 1, 0, () => {
            I(a, 1);
          }), K();
        }
        o ? (e = oe(o, l()), $(e.$$.fragment), p(e.$$.fragment, 1), T(e, t.parentNode, t)) : e = null;
      }
    },
    i(i) {
      n || (e && p(e.$$.fragment, i), n = !0);
    },
    o(i) {
      e && h(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && E(t), e && I(e, i);
    }
  };
}
function so(r) {
  let e, t, n, o, l, i = (r[1]?.display === "left" || r[1]?.display === "hide-label") && kt(r), s = r[1]?.display !== "hide-label" && yt(r), a = r[1]?.display === "right" && vt(r);
  return {
    c() {
      e = R(), i && i.c(), t = R(), s && s.c(), n = R(), a && a.c(), o = te();
    },
    m(f, u) {
      L(f, e, u), i && i.m(f, u), L(f, t, u), s && s.m(f, u), L(f, n, u), a && a.m(f, u), L(f, o, u), l = !0;
    },
    p(f, [u]) {
      f[1]?.display === "left" || f[1]?.display === "hide-label" ? i ? (i.p(f, u), u & 2 && p(i, 1)) : (i = kt(f), i.c(), p(i, 1), i.m(t.parentNode, t)) : i && (H(), h(i, 1, 1, () => {
        i = null;
      }), K()), f[1]?.display !== "hide-label" ? s ? (s.p(f, u), u & 2 && p(s, 1)) : (s = yt(f), s.c(), p(s, 1), s.m(n.parentNode, n)) : s && (H(), h(s, 1, 1, () => {
        s = null;
      }), K()), f[1]?.display === "right" ? a ? (a.p(f, u), u & 2 && p(a, 1)) : (a = vt(f), a.c(), p(a, 1), a.m(o.parentNode, o)) : a && (H(), h(a, 1, 1, () => {
        a = null;
      }), K());
    },
    i(f) {
      l || (p(i), p(s), p(a), l = !0);
    },
    o(f) {
      h(i), h(s), h(a), l = !1;
    },
    d(f) {
      f && E(e), i && i.d(f), f && E(t), s && s.d(f), f && E(n), a && a.d(f), f && E(o);
    }
  };
}
function co(r, e, t) {
  let { label: n } = e, { icon: o } = e, { size: l } = e;
  return r.$$set = (i) => {
    "label" in i && t(0, n = i.label), "icon" in i && t(1, o = i.icon), "size" in i && t(2, l = i.size);
  }, [n, o, l];
}
class Bn extends V {
  constructor(e) {
    super(), W(this, e, co, so, P, { label: 0, icon: 1, size: 2 });
  }
}
const fo = F({
  outline: "none",
  letterSpacing: 0.5,
  textDecoration: "none",
  cursor: "pointer",
  border: "2px solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:focus-visible": {
    outline: "10px",
    outlineColor: x(X[20]),
    outlineStyle: "solid"
  },
  "&:disabled": {
    cursor: "default",
    boxShadow: "none"
  }
}), Y = Se("primary"), uo = {
  action: F({
    [Y.base]: x(X.base),
    [Y.mid]: x(X.mid),
    [Y.dark]: x(X.dark),
    [Y[5]]: x(X[5]),
    [Y[20]]: x(X[20])
  }),
  interface: F({
    [Y.base]: x(G.base),
    [Y.mid]: x(G.mid),
    [Y.dark]: x(G.dark),
    [Y[5]]: x(G[5]),
    [Y[20]]: x(G[20])
  }),
  disabled: F({
    [Y.base]: x(G[40]),
    [Y.mid]: x(G[40]),
    [Y.dark]: x(G[40]),
    [Y[5]]: x(G[40]),
    [Y[20]]: x(G[40])
  })
}, po = {
  regular: F({
    borderRadius: "5px",
    padding: "12px",
    gap: "14px"
  }),
  small: F({
    borderWidth: "1.5px",
    borderRadius: "4px",
    padding: "7px 10px",
    gap: "12px",
    svg: {
      fontSize: "12px"
    }
  })
}, go = {
  interface: {
    secondary: {
      borderColor: x(Y[20])
    }
  }
}, mo = {
  primary: {
    backgroundColor: x(Y.base),
    color: xe.light,
    borderColor: x(Y.base),
    boxShadow: "0px 1px 4px 0px #55668014, 0px 2px 2px 0px #55668014, 0px 1px 2px 0px #55668014",
    "&:hover": {
      backgroundColor: x(Y.mid),
      borderColor: x(Y.mid)
    },
    "&:active": {
      backgroundColor: x(Y.dark),
      borderColor: x(Y.dark)
    }
  },
  secondary: {
    backgroundColor: xe.light,
    color: x(Y.base),
    borderColor: x(Y.base),
    boxShadow: "0px 1px 4px 0px #55668014, 0px 2px 2px 0px #55668014, 0px 1px 2px 0px #55668014",
    "&:hover": {
      backgroundColor: x(Y[5]),
      color: x(Y.mid),
      borderColor: x(Y.mid)
    },
    "&:active": {
      backgroundColor: x(Y[20]),
      color: x(Y.dark),
      borderColor: x(Y.dark)
    }
  },
  tertiary: {
    backgroundColor: xe.light,
    color: x(Y.base),
    borderColor: xe.light,
    "&:hover": {
      backgroundColor: x(Y[5]),
      color: x(Y.mid),
      borderColor: x(Y[5])
    },
    "&:active": {
      backgroundColor: x(Y[20]),
      color: x(Y.dark),
      borderColor: x(Y[20])
    }
  },
  "tertiary-no-background": {
    backgroundColor: "transparent",
    color: x(Y.base),
    borderColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      color: x(Y.mid),
      borderColor: "transparent"
    },
    "&:active": {
      backgroundColor: "transparent",
      color: x(Y.dark),
      borderColor: "transparent"
    }
  }
}, ho = F({
  padding: "8px"
}), bo = F({
  display: "flex",
  fontSize: "1rem",
  justifyContent: "center",
  svg: {
    flexShrink: 0,
    flexGrow: 0
  },
  span: {
    flexShrink: 0,
    flexGrow: 1
  }
}), Co = (r) => {
  if (!!r.hasIcon)
    return r.hideLabel ? ho : bo;
}, _o = (r, e, t, n) => ue([
  fo,
  po[t],
  uo[n.disabled ? "disabled" : e],
  F({ ...mo[r], ...go[e]?.[r] }),
  Co(n)
]);
function ko(r) {
  let e, t, n, o, l;
  return t = new Bn({
    props: {
      size: r[2],
      icon: r[7],
      label: r[0]
    }
  }), {
    c() {
      e = D("button"), $(t.$$.fragment), c(e, "data-testid", r[5]), c(e, "class", r[8]), c(e, "aria-label", r[0]), c(e, "data-variant", r[1]), c(e, "data-color", r[3]), c(e, "data-size", r[2]), e.disabled = r[6];
    },
    m(i, s) {
      L(i, e, s), T(t, e, null), n = !0, o || (l = se(e, "click", function() {
        ln(r[4].onClick) && r[4].onClick.apply(this, arguments);
      }), o = !0);
    },
    p(i, s) {
      r = i;
      const a = {};
      s & 4 && (a.size = r[2]), s & 128 && (a.icon = r[7]), s & 1 && (a.label = r[0]), t.$set(a), (!n || s & 32) && c(e, "data-testid", r[5]), (!n || s & 256) && c(e, "class", r[8]), (!n || s & 1) && c(e, "aria-label", r[0]), (!n || s & 2) && c(e, "data-variant", r[1]), (!n || s & 8) && c(e, "data-color", r[3]), (!n || s & 4) && c(e, "data-size", r[2]), (!n || s & 64) && (e.disabled = r[6]);
    },
    i(i) {
      n || (p(t.$$.fragment, i), n = !0);
    },
    o(i) {
      h(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && E(e), I(t), o = !1, l();
    }
  };
}
function yo(r) {
  let e, t, n, o;
  return t = new Bn({
    props: {
      size: r[2],
      icon: r[7],
      label: r[0]
    }
  }), {
    c() {
      e = D("a"), $(t.$$.fragment), c(e, "href", n = r[4].href), c(e, "target", "_blank"), c(e, "rel", "noreferrer"), c(e, "data-testid", r[5]), c(e, "class", r[8]), c(e, "aria-label", r[0]);
    },
    m(l, i) {
      L(l, e, i), T(t, e, null), o = !0;
    },
    p(l, i) {
      const s = {};
      i & 4 && (s.size = l[2]), i & 128 && (s.icon = l[7]), i & 1 && (s.label = l[0]), t.$set(s), (!o || i & 16 && n !== (n = l[4].href)) && c(e, "href", n), (!o || i & 32) && c(e, "data-testid", l[5]), (!o || i & 256) && c(e, "class", l[8]), (!o || i & 1) && c(e, "aria-label", l[0]);
    },
    i(l) {
      o || (p(t.$$.fragment, l), o = !0);
    },
    o(l) {
      h(t.$$.fragment, l), o = !1;
    },
    d(l) {
      l && E(e), I(t);
    }
  };
}
function vo(r) {
  let e, t, n, o;
  const l = [yo, ko], i = [];
  function s(a, f) {
    return "href" in a[4] ? 0 : 1;
  }
  return e = s(r), t = i[e] = l[e](r), {
    c() {
      t.c(), n = te();
    },
    m(a, f) {
      i[e].m(a, f), L(a, n, f), o = !0;
    },
    p(a, [f]) {
      let u = e;
      e = s(a), e === u ? i[e].p(a, f) : (H(), h(i[u], 1, 1, () => {
        i[u] = null;
      }), K(), t = i[e], t ? t.p(a, f) : (t = i[e] = l[e](a), t.c()), p(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      o || (p(t), o = !0);
    },
    o(a) {
      h(t), o = !1;
    },
    d(a) {
      i[e].d(a), a && E(n);
    }
  };
}
function wo(r, e, t) {
  let n;
  var o;
  let { label: l } = e, { variant: i = "primary" } = e, { size: s = "regular" } = e, { color: a = "action" } = e, { action: f } = e, { dataTestId: u = void 0 } = e, { disabled: d = !1 } = e, { icon: g = void 0 } = e;
  return r.$$set = (m) => {
    "label" in m && t(0, l = m.label), "variant" in m && t(1, i = m.variant), "size" in m && t(2, s = m.size), "color" in m && t(3, a = m.color), "action" in m && t(4, f = m.action), "dataTestId" in m && t(5, u = m.dataTestId), "disabled" in m && t(6, d = m.disabled), "icon" in m && t(7, g = m.icon);
  }, r.$$.update = () => {
    r.$$.dirty & 718 && t(8, n = _o(i, a, s, {
      hasIcon: !!g,
      hideLabel: t(9, o = g?.display === "hide-label") !== null && o !== void 0 ? o : !1,
      disabled: d
    }));
  }, [l, i, s, a, f, u, d, g, n, o];
}
class ee extends V {
  constructor(e) {
    super(), W(this, e, wo, vo, P, {
      label: 0,
      variant: 1,
      size: 2,
      color: 3,
      action: 4,
      dataTestId: 5,
      disabled: 6,
      icon: 7
    });
  }
}
function $o(r) {
  let e, t, n;
  return {
    c() {
      e = z("svg"), t = z("path"), n = z("path"), c(t, "fill-rule", "evenodd"), c(t, "clip-rule", "evenodd"), c(t, "d", "M0.0830078 6.17383C0.0830078 5.75961 0.427749 5.42383 0.853008 5.42383H12.1463C12.5716 5.42383 12.9163 5.75961 12.9163 6.17383C12.9163 6.58804 12.5716 6.92383 12.1463 6.92383H0.853008C0.427749 6.92383 0.0830078 6.58804 0.0830078 6.17383Z"), c(t, "fill", "currentColor"), c(n, "fill-rule", "evenodd"), c(n, "clip-rule", "evenodd"), c(n, "d", "M6.01748 1.1435C6.31818 1.43639 6.31818 1.91127 6.01748 2.20416L1.94195 6.17383L6.01748 10.1435C6.31818 10.4364 6.31818 10.9113 6.01748 11.2042C5.71678 11.4971 5.22924 11.4971 4.92854 11.2042L0.308536 6.70416C0.00783188 6.41126 0.00783188 5.93639 0.308536 5.6435L4.92854 1.1435C5.22924 0.850605 5.71678 0.850605 6.01748 1.1435Z"), c(n, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 13 12"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "arrow-thin-left-icon");
    },
    m(o, l) {
      L(o, e, l), C(e, t), C(e, n);
    },
    p: j,
    i: j,
    o: j,
    d(o) {
      o && E(e);
    }
  };
}
class To extends V {
  constructor(e) {
    super(), W(this, e, null, $o, P, {});
  }
}
function Io(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "d", "M3.33333 5.99997V11.3333M6.33333 5.99997V11.3333M9.66667 5.99997V11.3333M12.6667 5.99997V11.3333M2 12.4L2 12.9333C2 13.3067 2 13.4934 2.07266 13.636C2.13658 13.7614 2.23856 13.8634 2.36401 13.9273C2.50661 14 2.6933 14 3.06667 14H12.9333C13.3067 14 13.4934 14 13.636 13.9273C13.7614 13.8634 13.8634 13.7614 13.9273 13.636C14 13.4934 14 13.3067 14 12.9333V12.4C14 12.0266 14 11.8399 13.9273 11.6973C13.8634 11.5719 13.7614 11.4699 13.636 11.406C13.4934 11.3333 13.3067 11.3333 12.9333 11.3333H3.06667C2.6933 11.3333 2.50661 11.3333 2.36401 11.406C2.23857 11.4699 2.13658 11.5719 2.07266 11.6973C2 11.8399 2 12.0266 2 12.4ZM7.76861 2.05139L2.83527 3.14769C2.53723 3.21392 2.38821 3.24704 2.27698 3.32717C2.17886 3.39786 2.10182 3.4939 2.0541 3.60502C2 3.73099 2 3.88364 2 4.18896L2 4.93331C2 5.30667 2 5.49336 2.07266 5.63597C2.13658 5.76141 2.23856 5.86339 2.36401 5.92731C2.50661 5.99997 2.6933 5.99997 3.06667 5.99997H12.9333C13.3067 5.99997 13.4934 5.99997 13.636 5.92731C13.7614 5.86339 13.8634 5.76141 13.9273 5.63597C14 5.49336 14 5.30667 14 4.93331V4.18896C14 3.88365 14 3.73099 13.9459 3.60502C13.8982 3.4939 13.8211 3.39786 13.723 3.32718C13.6118 3.24704 13.4628 3.21392 13.1647 3.14769L8.23139 2.05139C8.14504 2.0322 8.10187 2.02261 8.05824 2.01878C8.01949 2.01539 7.98051 2.01539 7.94176 2.01878C7.89813 2.02261 7.85496 2.0322 7.76861 2.05139Z"), c(t, "stroke", "currentColor"), c(t, "stroke-width", "1.33333"), c(t, "stroke-linecap", "round"), c(t, "stroke-linejoin", "round"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 16 16"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
class So extends V {
  constructor(e) {
    super(), W(this, e, null, Io, P, {});
  }
}
function Ao(r) {
  let e, t, n, o, l, i;
  return {
    c() {
      e = z("svg"), t = z("path"), n = z("path"), o = z("path"), l = z("path"), i = z("path"), c(t, "fill-rule", "evenodd"), c(t, "clip-rule", "evenodd"), c(t, "d", "M1.81696 5.67273C1.81696 4.94974 2.40306 4.36364 3.12605 4.36364H22.326C23.049 4.36364 23.6351 4.94974 23.6351 5.67273C23.6351 6.39572 23.049 6.98182 22.326 6.98182H3.12605C2.40306 6.98182 1.81696 6.39572 1.81696 5.67273Z"), c(t, "fill", "currentColor"), c(n, "fill-rule", "evenodd"), c(n, "clip-rule", "evenodd"), c(n, "d", "M10.1079 9.16364C10.8309 9.16364 11.417 9.74974 11.417 10.4727V17.4545C11.417 18.1775 10.8309 18.7636 10.1079 18.7636C9.38487 18.7636 8.79877 18.1775 8.79877 17.4545V10.4727C8.79877 9.74974 9.38487 9.16364 10.1079 9.16364Z"), c(n, "fill", "currentColor"), c(o, "fill-rule", "evenodd"), c(o, "clip-rule", "evenodd"), c(o, "d", "M15.3442 9.16364C16.0672 9.16364 16.6533 9.74974 16.6533 10.4727V17.4545C16.6533 18.1775 16.0672 18.7636 15.3442 18.7636C14.6212 18.7636 14.0351 18.1775 14.0351 17.4545V10.4727C14.0351 9.74974 14.6212 9.16364 15.3442 9.16364Z"), c(o, "fill", "currentColor"), c(l, "fill-rule", "evenodd"), c(l, "clip-rule", "evenodd"), c(l, "d", "M4.8715 4.36364C5.59449 4.36364 6.18059 4.94974 6.18059 5.67273V21.3818H19.2715V5.67273C19.2715 4.94974 19.8576 4.36364 20.5806 4.36364C21.3036 4.36364 21.8897 4.94974 21.8897 5.67273V21.8182C21.8897 22.3968 21.6598 22.9518 21.2506 23.361C20.8415 23.7701 20.2865 24 19.7079 24H5.74423C5.16558 24 4.61062 23.7701 4.20145 23.361C3.79228 22.9518 3.56241 22.3968 3.56241 21.8182V5.67273C3.56241 4.94974 4.14851 4.36364 4.8715 4.36364Z"), c(l, "fill", "currentColor"), c(i, "fill-rule", "evenodd"), c(i, "clip-rule", "evenodd"), c(i, "d", "M7.94798 0.894656C8.52081 0.321817 9.29775 0 10.1079 0H15.3442C16.1543 0 16.9313 0.321817 17.5041 0.894656C18.077 1.46749 18.3988 2.24443 18.3988 3.05455V5.67273C18.3988 6.39572 17.8127 6.98182 17.0897 6.98182C16.3667 6.98182 15.7806 6.39572 15.7806 5.67273V3.05455C15.7806 2.93882 15.7346 2.82782 15.6528 2.74599C15.5709 2.66416 15.46 2.61818 15.3442 2.61818H10.1079C9.99213 2.61818 9.88114 2.66416 9.79931 2.74599C9.71747 2.82782 9.6715 2.93882 9.6715 3.05455V5.67273C9.6715 6.39572 9.0854 6.98182 8.36241 6.98182C7.63942 6.98182 7.05332 6.39572 7.05332 5.67273V3.05455C7.05332 2.24443 7.37514 1.46749 7.94798 0.894656Z"), c(i, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 25 24"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "bin-icon");
    },
    m(s, a) {
      L(s, e, a), C(e, t), C(e, n), C(e, o), C(e, l), C(e, i);
    },
    p: j,
    i: j,
    o: j,
    d(s) {
      s && E(e);
    }
  };
}
class xo extends V {
  constructor(e) {
    super(), W(this, e, null, Ao, P, {});
  }
}
function Bo(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "fill-rule", "evenodd"), c(t, "clip-rule", "evenodd"), c(t, "d", "M24.4264 4.39052C24.9471 4.91122 24.9471 5.75544 24.4264 6.27614L10.2041 20.4984C9.68345 21.0191 8.83923 21.0191 8.31853 20.4984L1.20742 13.3873C0.68672 12.8666 0.68672 12.0223 1.20742 11.5016C1.72812 10.9809 2.57234 10.9809 3.09304 11.5016L9.26134 17.6699L22.5408 4.39052C23.0615 3.86983 23.9057 3.86983 24.4264 4.39052Z"), c(t, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 25 24"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "check-icon");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
class Fn extends V {
  constructor(e) {
    super(), W(this, e, null, Bo, P, {});
  }
}
function Fo(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "fill-rule", "evenodd"), c(t, "clip-rule", "evenodd"), c(t, "d", "M3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C10.1205 0.00406613 12.153 0.848227 13.6524 2.34764C15.1518 3.84705 15.9959 5.87952 16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462403 11.1126 0.153721 9.56072C-0.15496 8.00887 0.00346629 6.40034 0.608967 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824ZM8.88006 4.11106C8.88006 3.62014 8.48209 3.22217 7.99117 3.22217C7.50026 3.22217 7.10229 3.62014 7.10229 4.11106V7.96291C7.10229 8.45383 7.50026 8.8518 7.99117 8.8518C8.48209 8.8518 8.88006 8.45383 8.88006 7.96291V4.11106ZM9.17636 10.9259C9.17636 11.5804 8.64573 12.1111 7.99117 12.1111C7.33662 12.1111 6.80599 11.5804 6.80599 10.9259C6.80599 10.2713 7.33662 9.74069 7.99117 9.74069C8.64573 9.74069 9.17636 10.2713 9.17636 10.9259Z"), c(t, "fill", "currentColor"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 16 16"), c(e, "fill", "none"), c(e, "data-testid", "circle-alert-filled");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
class je extends V {
  constructor(e) {
    super(), W(this, e, null, Fo, P, {});
  }
}
function Do(r) {
  let e, t, n, o;
  return {
    c() {
      e = z("svg"), t = z("path"), n = z("path"), o = z("path"), c(t, "clip-rule", "evenodd"), c(t, "d", "M8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"), c(t, "fill", "#B80039"), c(t, "fill-rule", "evenodd"), c(n, "clip-rule", "evenodd"), c(n, "d", "M8 3.55556C8.49092 3.55556 8.88889 3.95352 8.88889 4.44444V8.2963C8.88889 8.78722 8.49092 9.18519 8 9.18519C7.50908 9.18519 7.11111 8.78722 7.11111 8.2963V4.44444C7.11111 3.95352 7.50908 3.55556 8 3.55556Z"), c(n, "fill", "#B80039"), c(n, "fill-rule", "evenodd"), c(o, "d", "M8 12.4444C8.65456 12.4444 9.18519 11.9138 9.18519 11.2593C9.18519 10.6047 8.65456 10.0741 8 10.0741C7.34544 10.0741 6.81482 10.6047 6.81482 11.2593C6.81482 11.9138 7.34544 12.4444 8 12.4444Z"), c(o, "fill", "#B80039"), c(e, "data-testid", "circle-alert-icon"), c(e, "fill", "none"), c(e, "height", "1em"), c(e, "viewBox", "0 0 16 16"), c(e, "width", "1em"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, i) {
      L(l, e, i), C(e, t), C(e, n), C(e, o);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && E(e);
    }
  };
}
class Lo extends V {
  constructor(e) {
    super(), W(this, e, null, Do, P, {});
  }
}
function Eo(r) {
  let e, t, n, o;
  return {
    c() {
      e = z("svg"), t = z("rect"), n = z("path"), o = z("rect"), c(t, "x", "0.5"), c(t, "y", "0.5"), c(t, "width", "17"), c(t, "height", "17"), c(t, "rx", "8.5"), c(t, "fill", "white"), c(n, "d", "M9 1C7.41775 1 5.87103 1.46919 4.55544 2.34824C3.23985 3.22729 2.21447 4.47672 1.60897 5.93853C1.00347 7.40034 0.84504 9.00887 1.15372 10.5607C1.4624 12.1126 2.22433 13.538 3.34315 14.6569C4.46197 15.7757 5.88743 16.5376 7.43928 16.8463C8.99113 17.155 10.5997 16.9965 12.0615 16.391C13.5233 15.7855 14.7727 14.7602 15.6518 13.4446C16.5308 12.129 17 10.5822 17 9C16.9959 6.87952 16.1518 4.84705 14.6524 3.34764C13.153 1.84823 11.1205 1.00407 9 1V1ZM12.8077 7.6L8.3 11.9077C8.18347 12.0173 8.02922 12.0779 7.86923 12.0769C7.79103 12.078 7.71338 12.0637 7.64077 12.0346C7.56815 12.0056 7.50201 11.9624 7.44616 11.9077L5.19231 9.75384C5.1298 9.6993 5.07896 9.63269 5.04285 9.558C5.00673 9.48331 4.9861 9.40209 4.98218 9.31922C4.97826 9.23635 4.99113 9.15354 5.02003 9.07578C5.04893 8.99801 5.09325 8.92689 5.15034 8.86669C5.20742 8.8065 5.27609 8.75846 5.35221 8.72548C5.42833 8.69249 5.51034 8.67524 5.5933 8.67476C5.67626 8.67428 5.75846 8.69058 5.83496 8.72267C5.91146 8.75477 5.98068 8.802 6.03846 8.86154L7.86923 10.6077L11.9615 6.70769C12.0812 6.6033 12.2366 6.5492 12.3952 6.5567C12.5538 6.56421 12.7034 6.63273 12.8126 6.74796C12.9219 6.86318 12.9824 7.01618 12.9815 7.17497C12.9806 7.33376 12.9183 7.48605 12.8077 7.6Z"), c(n, "fill", "currentColor"), c(o, "x", "0.5"), c(o, "y", "0.5"), c(o, "width", "17"), c(o, "height", "17"), c(o, "rx", "8.5"), c(o, "stroke", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 18 18"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, i) {
      L(l, e, i), C(e, t), C(e, n), C(e, o);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && E(e);
    }
  };
}
class nt extends V {
  constructor(e) {
    super(), W(this, e, null, Eo, P, {});
  }
}
function Ro(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "d", "M7.99967 11.3333C7.99967 13.1743 9.49206 14.6667 11.333 14.6667C13.174 14.6667 14.6663 13.1743 14.6663 11.3333C14.6663 9.49238 13.174 8 11.333 8C9.49206 8 7.99967 9.49238 7.99967 11.3333ZM7.99967 11.3333C7.99967 10.5828 8.24773 9.89017 8.66634 9.33301V3.33333M7.99967 11.3333C7.99967 11.8836 8.13299 12.4027 8.36909 12.8601C7.80745 13.3345 6.51024 13.6667 4.99967 13.6667C2.97463 13.6667 1.33301 13.0697 1.33301 12.3333V3.33333M8.66634 3.33333C8.66634 4.06971 7.02472 4.66667 4.99967 4.66667C2.97463 4.66667 1.33301 4.06971 1.33301 3.33333M8.66634 3.33333C8.66634 2.59695 7.02472 2 4.99967 2C2.97463 2 1.33301 2.59695 1.33301 3.33333M1.33301 9.33333C1.33301 10.0697 2.97463 10.6667 4.99967 10.6667C6.45901 10.6667 7.71922 10.3567 8.30943 9.90785M8.66634 6.33333C8.66634 7.06971 7.02472 7.66667 4.99967 7.66667C2.97463 7.66667 1.33301 7.06971 1.33301 6.33333"), c(t, "stroke", "currentColor"), c(t, "stroke-width", "1.33333"), c(t, "stroke-linecap", "round"), c(t, "stroke-linejoin", "round"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 16 16"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "coins-stacked-icon");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
class Mo extends V {
  constructor(e) {
    super(), W(this, e, null, Ro, P, {});
  }
}
function Uo(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "d", "M4.19347 3.37658C4.69557 2.87447 5.50964 2.87447 6.01175 3.37658L12.8169 10.1817L19.622 3.37658C20.1241 2.87447 20.9382 2.87447 21.4403 3.37658C21.9424 3.87868 21.9424 4.69275 21.4403 5.19485L14.6352 12L21.4403 18.8051C21.9424 19.3073 21.9424 20.1213 21.4403 20.6234C20.9382 21.1255 20.1241 21.1255 19.622 20.6234L12.8169 13.8183L6.01175 20.6234C5.50964 21.1255 4.69557 21.1255 4.19347 20.6234C3.69137 20.1213 3.69137 19.3073 4.19347 18.8051L10.9986 12L4.19347 5.19485C3.69137 4.69275 3.69137 3.87868 4.19347 3.37658Z"), c(t, "fill", "currentColor"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "fill", "none"), c(e, "height", "1em"), c(e, "width", "1em"), c(e, "viewBox", "3.82 3 18 18"), c(e, "data-testid", "cross-icon");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
class jo extends V {
  constructor(e) {
    super(), W(this, e, null, Uo, P, {});
  }
}
function No(r) {
  let e, t, n;
  return {
    c() {
      e = z("svg"), t = z("path"), n = z("path"), c(t, "fill-rule", "evenodd"), c(t, "clip-rule", "evenodd"), c(t, "d", "M5.7913 2.66667V21.3333H20.9024V8.10784L15.4612 2.66667H5.7913ZM3.77551 0.650874C4.19225 0.234127 4.75749 0 5.34686 0H16.0135C16.3671 0 16.7063 0.140476 16.9563 0.390524L23.1786 6.61275C23.4286 6.8628 23.5691 7.20193 23.5691 7.55556V21.7778C23.5691 22.3671 23.335 22.9324 22.9182 23.3491C22.5015 23.7659 21.9362 24 21.3469 24H5.34686C4.75749 24 4.19226 23.7659 3.77551 23.3491C3.35876 22.9324 3.12463 22.3671 3.12463 21.7778V2.22222C3.12463 1.63285 3.35876 1.06762 3.77551 0.650874Z"), c(t, "fill", "currentColor"), c(n, "fill-rule", "evenodd"), c(n, "clip-rule", "evenodd"), c(n, "d", "M15.5691 0C16.3055 0 16.9024 0.596954 16.9024 1.33333V6.66667H22.2357C22.9721 6.66667 23.5691 7.26362 23.5691 8C23.5691 8.73638 22.9721 9.33333 22.2357 9.33333H15.5691C14.8327 9.33333 14.2357 8.73638 14.2357 8V1.33333C14.2357 0.596954 14.8327 0 15.5691 0Z"), c(n, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 25 24"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "file-icon");
    },
    m(o, l) {
      L(o, e, l), C(e, t), C(e, n);
    },
    p: j,
    i: j,
    o: j,
    d(o) {
      o && E(e);
    }
  };
}
class Dn extends V {
  constructor(e) {
    super(), W(this, e, null, No, P, {});
  }
}
function Oo(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("path"), c(t, "d", "M21.9791 0H2.74079C2.23056 0 1.74122 0.202689 1.38043 0.563478C1.01964 0.924267 0.816956 1.4136 0.816956 1.92384V8.9819C0.816956 19.7313 9.93112 23.3025 11.7588 23.9037C12.1493 24.0321 12.5707 24.0321 12.9612 23.9037C14.7888 23.3025 23.903 19.7313 23.903 8.9819V1.92384C23.903 1.4136 23.7003 0.924267 23.3395 0.563478C22.9787 0.202689 22.4894 0 21.9791 0ZM18.3118 8.39273L11.2658 15.1262C11.0836 15.2975 10.8425 15.3922 10.5924 15.3907C10.346 15.3916 10.1089 15.2968 9.93112 15.1262L6.4081 11.7594C6.31038 11.6742 6.23092 11.5701 6.17447 11.4533C6.11802 11.3366 6.08577 11.2096 6.07964 11.0801C6.07351 10.9505 6.09364 10.8211 6.13881 10.6995C6.18398 10.578 6.25326 10.4668 6.34249 10.3727C6.43172 10.2786 6.53906 10.2035 6.65805 10.152C6.77703 10.1004 6.90522 10.0735 7.0349 10.0727C7.16457 10.072 7.29306 10.0974 7.41264 10.1476C7.53222 10.1978 7.64042 10.2716 7.73074 10.3647L10.5924 13.0941L16.9892 6.99795C17.1762 6.83477 17.4191 6.75021 17.667 6.76194C17.915 6.77367 18.1488 6.88078 18.3196 7.06089C18.4904 7.241 18.5849 7.48016 18.5835 7.72837C18.582 7.97657 18.4847 8.21462 18.3118 8.39273Z"), c(t, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 25 24"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "shield-icon");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
class zo extends V {
  constructor(e) {
    super(), W(this, e, null, Oo, P, {});
  }
}
function Po(r) {
  let e, t, n, o, l, i;
  return {
    c() {
      e = z("svg"), t = z("g"), n = z("path"), o = z("defs"), l = z("clipPath"), i = z("rect"), c(n, "d", "M1.33301 1.33337H2.20378C2.3678 1.33337 2.4498 1.33337 2.5158 1.36353C2.57395 1.39011 2.62324 1.43286 2.65777 1.48667C2.69696 1.54774 2.70856 1.62892 2.73176 1.79128L3.04729 4.00004M3.04729 4.00004L3.74855 9.15431C3.83755 9.80839 3.88204 10.1354 4.03841 10.3816C4.17619 10.5985 4.37373 10.771 4.60724 10.8783C4.87225 11 5.2023 11 5.86241 11H11.5677C12.196 11 12.5102 11 12.767 10.887C12.9934 10.7873 13.1876 10.6266 13.3279 10.4229C13.487 10.1918 13.5458 9.88315 13.6633 9.26588L14.5457 4.63317C14.5871 4.41591 14.6078 4.30728 14.5778 4.22237C14.5515 4.14789 14.4996 4.08516 14.4314 4.04539C14.3536 4.00004 14.243 4.00004 14.0218 4.00004H3.04729ZM6.66634 14C6.66634 14.3682 6.36786 14.6667 5.99967 14.6667C5.63148 14.6667 5.33301 14.3682 5.33301 14C5.33301 13.6319 5.63148 13.3334 5.99967 13.3334C6.36786 13.3334 6.66634 13.6319 6.66634 14ZM11.9997 14C11.9997 14.3682 11.7012 14.6667 11.333 14.6667C10.9648 14.6667 10.6663 14.3682 10.6663 14C10.6663 13.6319 10.9648 13.3334 11.333 13.3334C11.7012 13.3334 11.9997 13.6319 11.9997 14Z"), c(n, "stroke", "currentColor"), c(n, "stroke-width", "1.33333"), c(n, "stroke-linecap", "round"), c(n, "stroke-linejoin", "round"), c(t, "clip-path", "url(#clip0_6295_125140)"), c(i, "width", "16"), c(i, "height", "16"), c(i, "fill", "white"), c(l, "id", "clip0_6295_125140"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 16 16"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(s, a) {
      L(s, e, a), C(e, t), C(t, n), C(e, o), C(o, l), C(l, i);
    },
    p: j,
    i: j,
    o: j,
    d(s) {
      s && E(e);
    }
  };
}
class Vo extends V {
  constructor(e) {
    super(), W(this, e, null, Po, P, {});
  }
}
function Wo(r) {
  let e, t, n, o, l;
  return {
    c() {
      e = R(), t = z("svg"), n = z("path"), o = z("path"), l = z("path"), c(n, "fill-rule", "evenodd"), c(n, "clip-rule", "evenodd"), c(n, "d", "M14.737 1.44C14.737 0.64471 15.3817 0 16.177 0H23.377C24.1722 0 24.817 0.64471 24.817 1.44V8.64C24.817 9.43529 24.1722 10.08 23.377 10.08C22.5817 10.08 21.937 9.43529 21.937 8.64V2.88H16.177C15.3817 2.88 14.737 2.23529 14.737 1.44Z"), c(n, "fill", "currentColor"), c(o, "fill-rule", "evenodd"), c(o, "clip-rule", "evenodd"), c(o, "d", "M24.3952 0.421766C24.9575 0.984121 24.9575 1.89588 24.3952 2.45823L15.7552 11.0982C15.1928 11.6606 14.2811 11.6606 13.7187 11.0982C13.1564 10.5359 13.1564 9.62412 13.7187 9.06177L22.3587 0.421766C22.9211 -0.140589 23.8328 -0.140589 24.3952 0.421766Z"), c(o, "fill", "currentColor"), c(l, "fill-rule", "evenodd"), c(l, "clip-rule", "evenodd"), c(l, "d", "M3.69696 6.72H10.897C11.6922 6.72 12.337 6.07529 12.337 5.28C12.337 4.48471 11.6922 3.84 10.897 3.84H3.21696C2.58043 3.84 1.96999 4.09286 1.5199 4.54294C1.06981 4.99303 0.816956 5.60348 0.816956 6.24V21.6C0.816956 22.2365 1.06981 22.847 1.5199 23.2971C1.96999 23.7471 2.58044 24 3.21696 24H18.577C19.2135 24 19.8239 23.7471 20.274 23.2971C20.7241 22.847 20.977 22.2365 20.977 21.6V13.92C20.977 13.1247 20.3322 12.48 19.537 12.48C18.7417 12.48 18.097 13.1247 18.097 13.92V21.12H3.69696V6.72Z"), c(l, "fill", "currentColor"), c(t, "width", "1em"), c(t, "height", "1em"), c(t, "viewBox", "0 0 25 24"), c(t, "fill", "none"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "data-testid", "new-window-icon");
    },
    m(i, s) {
      L(i, e, s), L(i, t, s), C(t, n), C(t, o), C(t, l);
    },
    p: j,
    i: j,
    o: j,
    d(i) {
      i && E(e), i && E(t);
    }
  };
}
class Ho extends V {
  constructor(e) {
    super(), W(this, e, null, Wo, P, {});
  }
}
function Ko(r) {
  let e, t, n, o, l;
  return {
    c() {
      e = z("svg"), t = z("path"), n = z("path"), o = z("path"), l = z("path"), c(t, "fill-rule", "evenodd"), c(t, "clip-rule", "evenodd"), c(t, "d", "M13.2237 1.33962C13.6524 1.33962 14 1.6872 14 2.11596V5.22132C14 5.65008 13.6524 5.99766 13.2237 5.99766H10.1183C9.68953 5.99766 9.34195 5.65008 9.34195 5.22132C9.34195 4.79256 9.68953 4.44498 10.1183 4.44498H12.4473V2.11596C12.4473 1.6872 12.7949 1.33962 13.2237 1.33962Z"), c(t, "fill", "currentColor"), c(n, "fill-rule", "evenodd"), c(n, "clip-rule", "evenodd"), c(n, "d", "M7 2.13605C6.35456 2.13605 5.71545 2.2633 5.11924 2.51052C4.52302 2.75773 3.98139 3.12007 3.52533 3.5768C3.22237 3.8802 2.73082 3.88056 2.42742 3.5776C2.12401 3.27464 2.12366 2.78309 2.42661 2.47969C3.02689 1.87854 3.73978 1.40163 4.52453 1.07625C5.30927 0.750858 6.15047 0.583374 7 0.583374C7.84953 0.583374 8.69073 0.750858 9.47547 1.07625C10.2599 1.40151 10.9726 1.87819 11.5727 2.47902L11.5734 2.47969L13.7718 4.67164C14.0754 4.97437 14.0762 5.46592 13.7734 5.76955C13.4707 6.07317 12.9791 6.0739 12.6755 5.77117L10.4759 3.578L10.4747 3.5768C10.0186 3.12007 9.47698 2.75773 8.88076 2.51052C8.28455 2.2633 7.64544 2.13605 7 2.13605Z"), c(n, "fill", "currentColor"), c(o, "fill-rule", "evenodd"), c(o, "clip-rule", "evenodd"), c(o, "d", "M6.77259e-09 8.88316C6.77259e-09 8.4544 0.347579 8.10682 0.77634 8.10682H3.8817C4.31046 8.10682 4.65804 8.4544 4.65804 8.88316C4.65804 9.31192 4.31046 9.6595 3.8817 9.6595H1.55268V11.9885C1.55268 12.4173 1.2051 12.7649 0.77634 12.7649C0.347579 12.7649 6.77259e-09 12.4173 6.77259e-09 11.9885V8.88316Z"), c(o, "fill", "currentColor"), c(l, "fill-rule", "evenodd"), c(l, "clip-rule", "evenodd"), c(l, "d", "M0.226577 8.33502C0.52931 8.03139 1.02086 8.03067 1.32449 8.3334L3.52412 10.5266L3.52533 10.5278C3.98139 10.9845 4.52302 11.3468 5.11924 11.594C5.71545 11.8413 6.35456 11.9685 7 11.9685C7.64544 11.9685 8.28455 11.8413 8.88076 11.594C9.47698 11.3468 10.0186 10.9845 10.4747 10.5278C10.7776 10.2244 11.2692 10.224 11.5726 10.527C11.876 10.8299 11.8763 11.3215 11.5734 11.6249C10.9731 12.226 10.2602 12.7029 9.47547 13.0283C8.69073 13.3537 7.84953 13.5212 7 13.5212C6.15047 13.5212 5.30927 13.3537 4.52453 13.0283C3.74003 12.703 3.02734 12.2263 2.42719 11.6255L2.42662 11.6249L0.228194 9.43293C-0.075432 9.13019 -0.076156 8.63864 0.226577 8.33502Z"), c(l, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 14 14"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, s) {
      L(i, e, s), C(e, t), C(e, n), C(e, o), C(e, l);
    },
    p: j,
    i: j,
    o: j,
    d(i) {
      i && E(e);
    }
  };
}
class Zo extends V {
  constructor(e) {
    super(), W(this, e, null, Ko, P, {});
  }
}
function Go(r) {
  let e, t, n, o;
  return {
    c() {
      e = z("svg"), t = z("path"), n = z("path"), o = z("path"), c(t, "d", "M6.75872 7.49823C7.32108 8.06059 8.23283 8.06059 8.79519 7.49823L12.817 3.47647L16.8387 7.49823C17.4011 8.06059 18.3128 8.06059 18.8752 7.49823C19.4375 6.93588 19.4375 6.02412 18.8752 5.46177L13.8352 0.421766C13.2728 -0.140589 12.3611 -0.140589 11.7987 0.421766L6.75872 5.46177C6.19637 6.02412 6.19637 6.93588 6.75872 7.49823Z"), c(t, "fill", "currentColor"), c(n, "d", "M12.817 16.32C13.6122 16.32 14.257 15.6753 14.257 14.88V1.44C14.257 0.64471 13.6122 1.49012e-08 12.817 1.49012e-08C12.0217 1.49012e-08 11.377 0.64471 11.377 1.44V14.88C11.377 15.6753 12.0217 16.32 12.817 16.32Z"), c(n, "fill", "currentColor"), c(o, "d", "M2.25696 13.44C3.05225 13.44 3.69696 14.0847 3.69696 14.88V21.12H21.937V14.88C21.937 14.0847 22.5817 13.44 23.377 13.44C24.1722 13.44 24.817 14.0847 24.817 14.88V21.6C24.817 22.2365 24.5641 22.847 24.114 23.2971C23.6639 23.7471 23.0535 24 22.417 24H3.21696C2.58044 24 1.96999 23.7471 1.5199 23.2971C1.06981 22.847 0.816956 22.2365 0.816956 21.6V14.88C0.816956 14.0847 1.46167 13.44 2.25696 13.44Z"), c(o, "fill", "currentColor"), c(e, "width", "1em"), c(e, "height", "1em"), c(e, "viewBox", "0 0 25 24"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "data-testid", "upload-icon");
    },
    m(l, i) {
      L(l, e, i), C(e, t), C(e, n), C(e, o);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && E(e);
    }
  };
}
class qo extends V {
  constructor(e) {
    super(), W(this, e, null, Go, P, {});
  }
}
function wt(r) {
  let e, t, n, o, l;
  e = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: r[0].message,
      dataTestId: "error-message"
    }
  });
  let i = r[0]?.correlationId && $t(r), s = r[0]?.errorCode && Tt(r);
  return {
    c() {
      $(e.$$.fragment), t = R(), i && i.c(), n = R(), s && s.c(), o = te();
    },
    m(a, f) {
      T(e, a, f), L(a, t, f), i && i.m(a, f), L(a, n, f), s && s.m(a, f), L(a, o, f), l = !0;
    },
    p(a, f) {
      const u = {};
      f & 1 && (u.text = a[0].message), e.$set(u), a[0]?.correlationId ? i ? (i.p(a, f), f & 1 && p(i, 1)) : (i = $t(a), i.c(), p(i, 1), i.m(n.parentNode, n)) : i && (H(), h(i, 1, 1, () => {
        i = null;
      }), K()), a[0]?.errorCode ? s ? (s.p(a, f), f & 1 && p(s, 1)) : (s = Tt(a), s.c(), p(s, 1), s.m(o.parentNode, o)) : s && (H(), h(s, 1, 1, () => {
        s = null;
      }), K());
    },
    i(a) {
      l || (p(e.$$.fragment, a), p(i), p(s), l = !0);
    },
    o(a) {
      h(e.$$.fragment, a), h(i), h(s), l = !1;
    },
    d(a) {
      I(e, a), a && E(t), i && i.d(a), a && E(n), s && s.d(a), a && E(o);
    }
  };
}
function $t(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: `Correlation ID: ${r[0].correlationId}`,
      dataTestId: "error-correlation-id"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 1 && (l.text = `Correlation ID: ${n[0].correlationId}`), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Tt(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: `Error code: ${r[0].errorCode}`,
      dataTestId: "error-code"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 1 && (l.text = `Error code: ${n[0].errorCode}`), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Yo(r) {
  let e, t, n, o, l, i;
  t = new je({}), o = new Z({
    props: {
      as: "h1",
      variant: "heading-xl",
      text: r[1],
      dataTestId: "error-title",
      color: "interface-dark"
    }
  });
  let s = r[0] instanceof fe && wt(r);
  return {
    c() {
      e = D("div"), $(t.$$.fragment), n = R(), $(o.$$.fragment), l = R(), s && s.c(), c(e, "class", r[2]);
    },
    m(a, f) {
      L(a, e, f), T(t, e, null), C(e, n), T(o, e, null), C(e, l), s && s.m(e, null), i = !0;
    },
    p(a, [f]) {
      a[0] instanceof fe ? s ? (s.p(a, f), f & 1 && p(s, 1)) : (s = wt(a), s.c(), p(s, 1), s.m(e, null)) : s && (H(), h(s, 1, 1, () => {
        s = null;
      }), K());
    },
    i(a) {
      i || (p(t.$$.fragment, a), p(o.$$.fragment, a), p(s), i = !0);
    },
    o(a) {
      h(t.$$.fragment, a), h(o.$$.fragment, a), h(s), i = !1;
    },
    d(a) {
      a && E(e), I(t), I(o), s && s.d();
    }
  };
}
function Jo(r, e, t) {
  let { error: n } = e;
  const o = n?.title || "Something went wrong", l = F({
    display: "grid",
    textAlign: "center",
    rowGap: "1.5rem",
    "& svg": {
      margin: "0 auto",
      fontSize: "48px",
      color: x(ne.base)
    }
  });
  return r.$$set = (i) => {
    "error" in i && t(0, n = i.error);
  }, [n, o, l];
}
class Xo extends V {
  constructor(e) {
    super(), W(this, e, Jo, Yo, P, { error: 0 });
  }
}
const Ne = "--color-background", Le = F({
  opacity: 0,
  pointerEvents: "none"
}), It = F({
  display: "flex",
  columnGap: "8px",
  alignItems: "center",
  padding: "0 8px",
  borderRadius: "4px",
  "&:hover, &:focus-within": {
    backgroundColor: x(Ne)
  }
}), Oe = F({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
}), Qo = F({
  [`.${Le}`]: {
    pointerEvents: "initial"
  },
  "&:hover, &:focus-within": {
    [`.${Le}`]: {
      opacity: 1
    }
  }
}), ei = F({
  [`.${Le}`]: {
    opacity: 1,
    pointerEvents: "initial"
  }
}), ti = F({
  [Ne]: x(ne[10]),
  [`.${Oe}`]: {
    color: x(ne.base)
  }
}), St = F({
  [Ne]: x(G[5]),
  [`.${Oe}`]: {
    color: x(G.base)
  }
}), ni = F({
  [Ne]: x(G[5]),
  [`.${Oe}`]: {
    color: x(X.base)
  }
}), ri = F({
  flexGrow: 1,
  "&, p": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
}), oi = F({
  maxWidth: "50%",
  minWidth: "15%",
  flexShrink: 0,
  textAlign: "right"
});
function ii(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y;
  var v = r[3].icon;
  function _(b) {
    return {};
  }
  return v && (n = oe(v, _())), i = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      dataTestId: "file-item-name",
      text: r[0].file.name
    }
  }), f = new Z({
    props: {
      as: "p",
      variant: "body-xs",
      dataTestId: "file-item-text",
      text: r[3].text,
      color: r[3].typographyColor
    }
  }), g = new ee({
    props: {
      dataTestId: "delete-button",
      icon: {
        component: xo,
        display: "hide-label"
      },
      action: { onClick: r[4] },
      variant: "tertiary-no-background",
      color: "interface",
      label: "delete"
    }
  }), {
    c() {
      e = D("div"), t = D("div"), n && $(n.$$.fragment), o = R(), l = D("div"), $(i.$$.fragment), s = R(), a = D("div"), $(f.$$.fragment), u = R(), d = D("div"), $(g.$$.fragment), c(t, "class", Oe), c(l, "class", ri), c(a, "class", oi), c(d, "class", Le), c(e, "data-testid", r[2]), c(e, "class", m = ue([It, ...r[3].wrapperClass])), c(e, "data-state", k = r[0].state.kind);
    },
    m(b, w) {
      L(b, e, w), C(e, t), n && T(n, t, null), C(e, o), C(e, l), T(i, l, null), C(e, s), C(e, a), T(f, a, null), C(e, u), C(e, d), T(g, d, null), y = !0;
    },
    p(b, [w]) {
      if (v !== (v = b[3].icon)) {
        if (n) {
          H();
          const B = n;
          h(B.$$.fragment, 1, 0, () => {
            I(B, 1);
          }), K();
        }
        v ? (n = oe(v, _()), $(n.$$.fragment), p(n.$$.fragment, 1), T(n, t, null)) : n = null;
      }
      const U = {};
      w & 1 && (U.text = b[0].file.name), i.$set(U);
      const S = {};
      w & 8 && (S.text = b[3].text), w & 8 && (S.color = b[3].typographyColor), f.$set(S);
      const A = {};
      w & 3 && (A.action = { onClick: b[4] }), g.$set(A), (!y || w & 4) && c(e, "data-testid", b[2]), (!y || w & 8 && m !== (m = ue([It, ...b[3].wrapperClass]))) && c(e, "class", m), (!y || w & 1 && k !== (k = b[0].state.kind)) && c(e, "data-state", k);
    },
    i(b) {
      y || (n && p(n.$$.fragment, b), p(i.$$.fragment, b), p(f.$$.fragment, b), p(g.$$.fragment, b), y = !0);
    },
    o(b) {
      n && h(n.$$.fragment, b), h(i.$$.fragment, b), h(f.$$.fragment, b), h(g.$$.fragment, b), y = !1;
    },
    d(b) {
      b && E(e), n && I(n), I(i), I(f), I(g);
    }
  };
}
function ai(r, e, t) {
  let n, { state: o } = e, { onDeleteClick: l } = e, { dataTestId: i = "file-item" } = e;
  const s = () => {
    o.state.kind !== "uploaded" && o.state.kind !== "uploading" && l();
  };
  return r.$$set = (a) => {
    "state" in a && t(0, o = a.state), "onDeleteClick" in a && t(1, l = a.onDeleteClick), "dataTestId" in a && t(2, i = a.dataTestId);
  }, r.$$.update = () => {
    r.$$.dirty & 1 && t(3, n = (() => {
      switch (o.state.kind) {
        case "uploaded":
          return {
            icon: Fn,
            text: "File uploaded",
            typographyColor: "default",
            wrapperClass: [St]
          };
        case "error":
        case "upload-error":
          return {
            icon: je,
            text: o.state.text,
            typographyColor: "negative",
            wrapperClass: [ti, ei]
          };
        case "uploading":
          return {
            icon: rt,
            text: "Uploading...",
            typographyColor: "default",
            wrapperClass: [ni]
          };
        case "ready":
          return {
            icon: Dn,
            text: wn(o.file.size),
            typographyColor: "default",
            wrapperClass: [St, Qo]
          };
      }
    })());
  }, [o, l, i, n, s];
}
class li extends V {
  constructor(e) {
    super(), W(this, e, ai, ii, P, {
      state: 0,
      onDeleteClick: 1,
      dataTestId: 2
    });
  }
}
const si = F({
  height: "100%",
  width: "100%",
  "& label": {
    display: "block",
    height: "100%",
    width: "100%"
  }
}), ci = F({
  margin: 0,
  height: "100%",
  width: "100%"
}), At = F({
  strokeWidth: "1px",
  strokeDasharray: "8",
  rx: "2px",
  x: 1.5,
  y: 1.5,
  width: "calc(100% - 3px)"
}), xt = F({
  stroke: x(G[40]),
  fill: "none"
}), Bt = F({
  fill: x(X[10]),
  stroke: x(X.base)
}), fi = F({
  display: "grid",
  height: "100%",
  width: "100%",
  cursor: "pointer",
  borderRadius: "4px",
  gridTemplate: "1fr / 1fr",
  "&>*": {
    gridArea: "1 / 1 / 1 / 1"
  },
  "&:hover": {
    backgroundColor: x(X[5]),
    "& rect": {
      stroke: x(X.mid)
    }
  },
  "&:focus-visible": {
    outline: `solid 4px ${x(X[40])}`,
    outlineOffset: "-2px",
    "& rect": {
      stroke: x(X.base)
    }
  }
}), ui = F({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  "& > :first-child": {
    color: x(X.base)
  }
});
function di(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y, v, _;
  return u = new Z({
    props: {
      as: "p",
      variant: "heading-reg",
      text: "Choose files"
    }
  }), g = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: "\xA0or drop files here"
    }
  }), {
    c() {
      e = D("div"), t = D("label"), n = D("span"), o = z("svg"), l = z("rect"), a = R(), f = D("div"), $(u.$$.fragment), d = R(), $(g.$$.fragment), m = R(), k = D("input"), c(l, "class", i = ue([At, r[4] ? Bt : xt])), c(l, "height", s = r[2] - 3 + "px"), c(o, "class", ci), c(f, "class", ui), c(n, "class", fi), c(n, "role", "button"), c(n, "aria-controls", "filepicker"), c(n, "tabindex", "0"), c(n, "data-testid", "file-picker-display"), c(t, "for", "filepicker"), c(k, "type", "file"), c(k, "id", "filepicker"), ze(k, "display", "none"), k.multiple = !0, c(k, "accept", r[1]), c(e, "class", si), c(e, "data-testid", r[0]), ze(e, "height", r[2] + "px");
    },
    m(b, w) {
      L(b, e, w), C(e, t), C(t, n), C(n, o), C(o, l), C(n, a), C(n, f), T(u, f, null), C(f, d), T(g, f, null), C(e, m), C(e, k), r[11](k), y = !0, v || (_ = [
        se(n, "keydown", r[5]),
        se(n, "drop", r[8]),
        se(n, "dragenter", r[7](1)),
        se(n, "dragleave", r[7](-1)),
        se(n, "dragover", r[7](0)),
        se(k, "change", r[12])
      ], v = !0);
    },
    p(b, [w]) {
      (!y || w & 16 && i !== (i = ue([At, b[4] ? Bt : xt]))) && c(l, "class", i), (!y || w & 4 && s !== (s = b[2] - 3 + "px")) && c(l, "height", s), (!y || w & 2) && c(k, "accept", b[1]), (!y || w & 1) && c(e, "data-testid", b[0]), w & 4 && ze(e, "height", b[2] + "px");
    },
    i(b) {
      y || (p(u.$$.fragment, b), p(g.$$.fragment, b), y = !0);
    },
    o(b) {
      h(u.$$.fragment, b), h(g.$$.fragment, b), y = !1;
    },
    d(b) {
      b && E(e), I(u), I(g), r[11](null), v = !1, sn(_);
    }
  };
}
function pi(r, e, t) {
  let n, { dataTestId: o = "file-picker" } = e, { onFilePicked: l } = e, { accept: i = void 0 } = e, { height: s } = e, a, f = 0;
  const u = (v) => {
    if (v.code === "Enter" || v.code === "Space")
      if (a)
        a.click();
      else
        throw new Error("Cannot open file picker - no input element found");
  }, d = (v) => {
    var _;
    const b = (_ = v.target) === null || _ === void 0 ? void 0 : _.files;
    b && l(b);
  }, g = (v) => (_) => {
    _.preventDefault(), _.stopPropagation(), v !== 0 && t(10, f += v);
  }, m = (v) => {
    v.dataTransfer && (v.preventDefault(), v.stopPropagation(), l(v.dataTransfer.files), t(10, f = 0));
  };
  function k(v) {
    ke[v ? "unshift" : "push"](() => {
      a = v, t(3, a);
    });
  }
  const y = (v) => d(v);
  return r.$$set = (v) => {
    "dataTestId" in v && t(0, o = v.dataTestId), "onFilePicked" in v && t(9, l = v.onFilePicked), "accept" in v && t(1, i = v.accept), "height" in v && t(2, s = v.height);
  }, r.$$.update = () => {
    r.$$.dirty & 1024 && t(4, n = f > 0);
  }, [
    o,
    i,
    s,
    a,
    n,
    u,
    d,
    g,
    m,
    l,
    f,
    k,
    y
  ];
}
class gi extends V {
  constructor(e) {
    super(), W(this, e, pi, di, P, {
      dataTestId: 0,
      onFilePicked: 9,
      accept: 1,
      height: 2
    });
  }
}
function mi(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "span",
      variant: "heading-sm",
      color: "inherit",
      text: r[0]
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 1 && (l.text = n[0]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function hi(r) {
  let e, t, n;
  return {
    c() {
      e = D("img"), re(e.src, t = r[3].src) || c(e, "src", t), c(e, "alt", n = r[3].alt);
    },
    m(o, l) {
      L(o, e, l);
    },
    p(o, l) {
      l & 8 && !re(e.src, t = o[3].src) && c(e, "src", t), l & 8 && n !== (n = o[3].alt) && c(e, "alt", n);
    },
    i: j,
    o: j,
    d(o) {
      o && E(e);
    }
  };
}
function bi(r) {
  let e, t, n, o;
  const l = [hi, mi], i = [];
  function s(a, f) {
    return a[3] ? 0 : 1;
  }
  return t = s(r), n = i[t] = l[t](r), {
    c() {
      e = D("a"), n.c(), c(e, "data-testid", r[2]), c(e, "target", "_blank"), c(e, "rel", "noreferrer"), c(e, "href", r[1]), c(e, "class", r[4]);
    },
    m(a, f) {
      L(a, e, f), i[t].m(e, null), o = !0;
    },
    p(a, [f]) {
      let u = t;
      t = s(a), t === u ? i[t].p(a, f) : (H(), h(i[u], 1, 1, () => {
        i[u] = null;
      }), K(), n = i[t], n ? n.p(a, f) : (n = i[t] = l[t](a), n.c()), p(n, 1), n.m(e, null)), (!o || f & 4) && c(e, "data-testid", a[2]), (!o || f & 2) && c(e, "href", a[1]);
    },
    i(a) {
      o || (p(n), o = !0);
    },
    o(a) {
      h(n), o = !1;
    },
    d(a) {
      a && E(e), i[t].d();
    }
  };
}
function Ci(r, e, t) {
  let { text: n } = e, { href: o } = e, { dataTestId: l } = e, { imgProps: i = void 0 } = e;
  const s = F({
    display: "inline-block",
    cursor: "pointer",
    textDecoration: "underline",
    color: x(X.base),
    "&:hover": { color: x(X.mid) },
    "&:active": { color: x(X.dark) }
  });
  return r.$$set = (a) => {
    "text" in a && t(0, n = a.text), "href" in a && t(1, o = a.href), "dataTestId" in a && t(2, l = a.dataTestId), "imgProps" in a && t(3, i = a.imgProps);
  }, [n, o, l, i, s];
}
class Ln extends V {
  constructor(e) {
    super(), W(this, e, Ci, bi, P, {
      text: 0,
      href: 1,
      dataTestId: 2,
      imgProps: 3
    });
  }
}
function _i(r) {
  let e, t, n, o;
  return t = new Z({
    props: {
      as: "span",
      variant: "heading-sm",
      text: r[0],
      color: "inherit"
    }
  }), {
    c() {
      e = D("span"), $(t.$$.fragment), c(e, "data-testid", r[1]), c(e, "class", n = ue([r[3], r[2]]));
    },
    m(l, i) {
      L(l, e, i), T(t, e, null), o = !0;
    },
    p(l, [i]) {
      const s = {};
      i & 1 && (s.text = l[0]), t.$set(s), (!o || i & 2) && c(e, "data-testid", l[1]), (!o || i & 4 && n !== (n = ue([l[3], l[2]]))) && c(e, "class", n);
    },
    i(l) {
      o || (p(t.$$.fragment, l), o = !0);
    },
    o(l) {
      h(t.$$.fragment, l), o = !1;
    },
    d(l) {
      l && E(e), I(t);
    }
  };
}
function ki(r, e, t) {
  let n, { label: o } = e, { dataTestId: l = "indicator-label" } = e, { color: i } = e;
  const s = F({
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "2px 6px",
    userSelect: "none",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }), a = F({
    backgroundColor: x(G[10]),
    borderColor: x(G[20]),
    color: x(G.dark)
  }), f = F({
    backgroundColor: x(ne[10]),
    borderColor: x(ne[20]),
    color: x(ne.dark)
  });
  return r.$$set = (u) => {
    "label" in u && t(0, o = u.label), "dataTestId" in u && t(1, l = u.dataTestId), "color" in u && t(4, i = u.color);
  }, r.$$.update = () => {
    r.$$.dirty & 16 && t(2, n = (() => {
      switch (i) {
        case "interface":
          return a;
        case "negative":
          return f;
      }
    })());
  }, [o, l, n, s, i];
}
class En extends V {
  constructor(e) {
    super(), W(this, e, ki, _i, P, { label: 0, dataTestId: 1, color: 4 });
  }
}
function yi(r) {
  let e, t;
  return {
    c() {
      e = z("svg"), t = z("circle"), c(t, "class", r[1]), c(t, "cx", "25"), c(t, "cy", "25"), c(t, "r", "20"), c(t, "fill", "none"), c(t, "stroke", "currentColor"), c(t, "stroke-width", "5"), c(t, "stroke-linecap", "round"), c(e, "viewBox", "0 0 50 50"), c(e, "class", r[0]), c(e, "data-testid", "spinner");
    },
    m(n, o) {
      L(n, e, o), C(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && E(e);
    }
  };
}
function vi(r) {
  const e = gt({
    "0%": {
      strokeDasharray: "1, 150",
      strokeDashoffset: "0"
    },
    "50%": {
      strokeDasharray: "90, 150",
      strokeDashoffset: "-35"
    },
    "100%": {
      strokeDasharray: "90, 150",
      strokeDashoffset: "-124"
    }
  }), t = gt({ "100%": { transform: "rotate(360deg)" } }), n = F({
    width: "1em",
    height: "1em",
    animation: `${t} 2s linear infinite`
  }), o = F({
    animation: `${e} 1.5s ease-in-out infinite`
  });
  return [n, o];
}
class rt extends V {
  constructor(e) {
    super(), W(this, e, vi, yi, P, {});
  }
}
function wi(r) {
  let e, t, n;
  return t = new rt({}), {
    c() {
      e = D("div"), $(t.$$.fragment), c(e, "class", r[0]), c(e, "data-testid", "loading-spinner");
    },
    m(o, l) {
      L(o, e, l), T(t, e, null), n = !0;
    },
    p: j,
    i(o) {
      n || (p(t.$$.fragment, o), n = !0);
    },
    o(o) {
      h(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && E(e), I(t);
    }
  };
}
function $i(r) {
  return [F({
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > svg": {
      color: x(G[40]),
      height: "64px",
      width: "64px"
    }
  })];
}
class Rn extends V {
  constructor(e) {
    super(), W(this, e, $i, wi, P, {});
  }
}
function Ti(r) {
  let e, t, n;
  const o = r[4].default, l = cn(o, r, r[3], null);
  return {
    c() {
      e = D("div"), t = D("div"), l && l.c(), c(t, "class", r[2]), c(e, "data-testid", r[0]), c(e, "class", r[1]);
    },
    m(i, s) {
      L(i, e, s), C(e, t), l && l.m(t, null), n = !0;
    },
    p(i, [s]) {
      l && l.p && (!n || s & 8) && fn(
        l,
        o,
        i,
        i[3],
        n ? dn(o, i[3], s, null) : un(i[3]),
        null
      ), (!n || s & 1) && c(e, "data-testid", i[0]);
    },
    i(i) {
      n || (p(l, i), n = !0);
    },
    o(i) {
      h(l, i), n = !1;
    },
    d(i) {
      i && E(e), l && l.d(i);
    }
  };
}
function Ii(r, e, t) {
  let { $$slots: n = {}, $$scope: o } = e, { dataTestId: l = "overlay" } = e;
  const i = F({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(133, 152, 178, 0.16)",
    display: "flex",
    alignItems: "flex-end",
    borderRadius: "8px"
  }), s = F({
    backgroundColor: x(_e.light),
    borderRadius: "inherit",
    padding: "48px 32px 32px",
    width: "100%",
    boxShadow: "0px 7px 12px 0px rgba(85, 102, 128, 0.12), 0px 5px 24px 0px rgba(85, 102, 128, 0.08), 0px 12px 20px 0px rgba(85, 102, 128, 0.08)"
  });
  return r.$$set = (a) => {
    "dataTestId" in a && t(0, l = a.dataTestId), "$$scope" in a && t(3, o = a.$$scope);
  }, [l, i, s, o, n];
}
class Si extends V {
  constructor(e) {
    super(), W(this, e, Ii, Ti, P, { dataTestId: 0 });
  }
}
function Ai(r) {
  let e, t;
  return e = new Ln({
    props: {
      href: "https://www.codat.io/powered-by-codat/",
      text: "Powered by Codat",
      dataTestId: "powered-by-codat",
      imgProps: {
        src: "https://static.codat.io/public/branding/powered-by-codat-short.svg",
        alt: "Powered by Codat"
      }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
class xi extends V {
  constructor(e) {
    super(), W(this, e, null, Ai, P, {});
  }
}
function Bi(r) {
  let e, t, n, o, l, i, s, a, f;
  const u = r[6].default, d = cn(u, r, r[5], null);
  return {
    c() {
      e = D("div"), t = D("div"), d && d.c(), n = R(), o = D("div"), l = R(), i = D("div"), c(t, "class", r[1]), c(t, "data-testid", "scroll-container"), c(o, "data-testid", "top-shadow"), c(o, "class", r[2]), c(i, "data-testid", "bottom-shadow"), c(i, "class", r[3]), c(e, "class", r[0]);
    },
    m(g, m) {
      L(g, e, m), C(e, t), d && d.m(t, null), C(e, n), C(e, o), C(e, l), C(e, i), s = !0, a || (f = pn(r[4].call(null, t)), a = !0);
    },
    p(g, [m]) {
      d && d.p && (!s || m & 32) && fn(
        d,
        u,
        g,
        g[5],
        s ? dn(u, g[5], m, null) : un(g[5]),
        null
      );
    },
    i(g) {
      s || (p(d, g), s = !0);
    },
    o(g) {
      h(d, g), s = !1;
    },
    d(g) {
      g && E(e), d && d.d(g), a = !1, f();
    }
  };
}
const Ft = "8px", be = 16;
function Fi(r, e, t) {
  let { $$slots: n = {}, $$scope: o } = e;
  const l = F({
    height: "100%",
    width: "100%",
    position: "relative",
    borderRadius: "inherit",
    minHeight: "50px"
  }), i = F({
    height: "100%",
    width: "100%",
    overflowY: "auto",
    position: "absolute",
    "::-webkit-scrollbar": { width: Ft, height: "8px" },
    "::-webkit-scrollbar-track": {
      background: x(G[10]),
      borderRadius: "4px"
    },
    "::-webkit-scrollbar-thumb": {
      background: x(G[30]),
      borderRadius: "4px"
    },
    scrollbarColor: `${x(G[30])} ${x(G[10])}`,
    scrollbarWidth: "thin"
  }), s = {
    borderRadius: 0,
    right: 0,
    paddingRight: "8px"
  }, a = F({
    position: "absolute",
    top: 0,
    right: Ft,
    left: 0,
    bottom: 0,
    pointerEvents: "none",
    borderRadius: "inherit"
  }), f = F(a, Object.assign(
    Object.assign(
      {
        boxShadow: `0px ${1.2 * be}px ${be}px ${-be}px ${x(G[20])} inset`
      },
      s
    ),
    {
      "[at-top='true']~&": { visibility: "hidden" }
    }
  )), u = F(a, Object.assign(
    Object.assign(
      {
        boxShadow: `0px ${-1.2 * be}px ${be}px ${-be}px ${x(G[20])} inset`
      },
      s
    ),
    {
      "[at-bottom='true']~&": { visibility: "hidden" }
    }
  )), d = (g) => {
    const k = () => {
      const v = g.scrollTop < 5;
      g.setAttribute("at-top", v + "");
      const _ = g.scrollTop > g.scrollHeight - g.offsetHeight - 5;
      g.setAttribute("at-bottom", _ + "");
    };
    g.addEventListener("scroll", () => {
      k();
    });
    const y = new ResizeObserver(() => window.requestAnimationFrame(() => {
      k();
    }));
    return y.observe(g), k(), {
      destroy: () => {
        y.unobserve(g);
      }
    };
  };
  return r.$$set = (g) => {
    "$$scope" in g && t(5, o = g.$$scope);
  }, [
    l,
    i,
    f,
    u,
    d,
    o,
    n
  ];
}
class ot extends V {
  constructor(e) {
    super(), W(this, e, Fi, Bi, P, {});
  }
}
function Dt(r) {
  let e, t, n;
  var o = r[2];
  function l(i) {
    return {};
  }
  return o && (t = oe(o, l())), {
    c() {
      e = D("div"), t && $(t.$$.fragment), c(e, "aria-hidden", "true"), c(e, "class", r[5]);
    },
    m(i, s) {
      L(i, e, s), t && T(t, e, null), n = !0;
    },
    p(i, s) {
      if (o !== (o = i[2])) {
        if (t) {
          H();
          const a = t;
          h(a.$$.fragment, 1, 0, () => {
            I(a, 1);
          }), K();
        }
        o ? (t = oe(o, l()), $(t.$$.fragment), p(t.$$.fragment, 1), T(t, e, null)) : t = null;
      }
    },
    i(i) {
      n || (t && p(t.$$.fragment, i), n = !0);
    },
    o(i) {
      t && h(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && E(e), t && I(t);
    }
  };
}
function Di(r) {
  let e, t, n, o, l, i, s = r[2] && Dt(r);
  return {
    c() {
      e = D("div"), t = D("input"), n = R(), s && s.c(), c(t, "class", r[4]), c(t, "placeholder", r[1]), c(e, "class", r[3]);
    },
    m(a, f) {
      L(a, e, f), C(e, t), pt(t, r[0]), C(e, n), s && s.m(e, null), o = !0, l || (i = se(t, "input", r[6]), l = !0);
    },
    p(a, [f]) {
      (!o || f & 2) && c(t, "placeholder", a[1]), f & 1 && t.value !== a[0] && pt(t, a[0]), a[2] ? s ? (s.p(a, f), f & 4 && p(s, 1)) : (s = Dt(a), s.c(), p(s, 1), s.m(e, null)) : s && (H(), h(s, 1, 1, () => {
        s = null;
      }), K());
    },
    i(a) {
      o || (p(s), o = !0);
    },
    o(a) {
      h(s), o = !1;
    },
    d(a) {
      a && E(e), s && s.d(), l = !1, i();
    }
  };
}
function Li(r, e, t) {
  let { placeholder: n } = e, { icon: o = void 0 } = e, { value: l } = e;
  const i = F({
    width: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center"
  }), s = F(Object.assign(
    Object.assign(
      {
        width: "100%",
        height: "100%",
        padding: "12px 16px",
        paddingLeft: o ? "calc(32px + 1em)" : "16px",
        borderRadius: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: x(G[30]),
        outline: "2px solid transparent",
        boxShadow: "0px 1px 4px 0px #55668014, 0px 2px 2px 0px #55668014, 0px 1px 2px 0px #55668014"
      },
      oo["body-reg"]
    ),
    {
      color: x(_e.dark),
      transition: "outline-color 300ms",
      "::placeholder": { color: x(G[60]) },
      "&:focus": { outlineColor: x(X.base) }
    }
  )), a = F({
    position: "absolute",
    left: 16,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    color: x(G.base)
  });
  function f() {
    l = this.value, t(0, l);
  }
  return r.$$set = (u) => {
    "placeholder" in u && t(1, n = u.placeholder), "icon" in u && t(2, o = u.icon), "value" in u && t(0, l = u.value);
  }, [
    l,
    n,
    o,
    i,
    s,
    a,
    f
  ];
}
class Ei extends V {
  constructor(e) {
    super(), W(this, e, Li, Di, P, { placeholder: 1, icon: 2, value: 0 });
  }
}
const Ri = F({
  width: "100%",
  padding: "0 3.5rem",
  backgroundColor: x(G[5]),
  borderRadius: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  rowGap: "1rem",
  "p, h2": {
    color: x(G.base)
  }
}), Mi = F({
  fontSize: "24px",
  color: x(G[70])
});
function Ui(r) {
  let e, t;
  return e = new je({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function ji(r) {
  let e, t, n;
  var o = r[0];
  function l(i) {
    return {};
  }
  return o && (e = oe(o, l())), {
    c() {
      e && $(e.$$.fragment), t = te();
    },
    m(i, s) {
      e && T(e, i, s), L(i, t, s), n = !0;
    },
    p(i, s) {
      if (o !== (o = i[0])) {
        if (e) {
          H();
          const a = e;
          h(a.$$.fragment, 1, 0, () => {
            I(a, 1);
          }), K();
        }
        o ? (e = oe(o, l()), $(e.$$.fragment), p(e.$$.fragment, 1), T(e, t.parentNode, t)) : e = null;
      }
    },
    i(i) {
      n || (e && p(e.$$.fragment, i), n = !0);
    },
    o(i) {
      e && h(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && E(t), e && I(e, i);
    }
  };
}
function Lt(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "p",
      variant: "body-sm",
      dataTestId: "zero-state-description",
      text: r[2]
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 4 && (l.text = n[2]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Et(r) {
  let e, t;
  return e = new ee({
    props: {
      label: r[3].text,
      variant: "secondary",
      color: "interface",
      action: { onClick: r[3].onClick },
      dataTestId: "call-to-action-button"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 8 && (l.label = n[3].text), o & 8 && (l.action = { onClick: n[3].onClick }), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Ni(r) {
  let e, t, n, o, l, i, s, a, f;
  const u = [ji, Ui], d = [];
  function g(y, v) {
    return y[0] ? 0 : 1;
  }
  n = g(r), o = d[n] = u[n](r), i = new Z({
    props: {
      as: "h2",
      variant: "heading-md",
      dataTestId: "zero-state-title",
      text: r[1]
    }
  });
  let m = r[2] && Lt(r), k = r[3] && Et(r);
  return {
    c() {
      e = D("div"), t = D("div"), o.c(), l = R(), $(i.$$.fragment), s = R(), m && m.c(), a = R(), k && k.c(), c(t, "class", Mi), c(e, "class", Ri);
    },
    m(y, v) {
      L(y, e, v), C(e, t), d[n].m(t, null), C(e, l), T(i, e, null), C(e, s), m && m.m(e, null), C(e, a), k && k.m(e, null), f = !0;
    },
    p(y, [v]) {
      let _ = n;
      n = g(y), n === _ ? d[n].p(y, v) : (H(), h(d[_], 1, 1, () => {
        d[_] = null;
      }), K(), o = d[n], o ? o.p(y, v) : (o = d[n] = u[n](y), o.c()), p(o, 1), o.m(t, null));
      const b = {};
      v & 2 && (b.text = y[1]), i.$set(b), y[2] ? m ? (m.p(y, v), v & 4 && p(m, 1)) : (m = Lt(y), m.c(), p(m, 1), m.m(e, a)) : m && (H(), h(m, 1, 1, () => {
        m = null;
      }), K()), y[3] ? k ? (k.p(y, v), v & 8 && p(k, 1)) : (k = Et(y), k.c(), p(k, 1), k.m(e, null)) : k && (H(), h(k, 1, 1, () => {
        k = null;
      }), K());
    },
    i(y) {
      f || (p(o), p(i.$$.fragment, y), p(m), p(k), f = !0);
    },
    o(y) {
      h(o), h(i.$$.fragment, y), h(m), h(k), f = !1;
    },
    d(y) {
      y && E(e), d[n].d(), I(i), m && m.d(), k && k.d();
    }
  };
}
function Oi(r, e, t) {
  let { icon: n = void 0 } = e, { title: o } = e, { description: l = void 0 } = e, { callToAction: i = void 0 } = e;
  return r.$$set = (s) => {
    "icon" in s && t(0, n = s.icon), "title" in s && t(1, o = s.title), "description" in s && t(2, l = s.description), "callToAction" in s && t(3, i = s.callToAction);
  }, [n, o, l, i];
}
class zi extends V {
  constructor(e) {
    super(), W(this, e, Oi, Ni, P, {
      icon: 0,
      title: 1,
      description: 2,
      callToAction: 3
    });
  }
}
const Mn = Symbol(), Pi = (r) => {
  Kn(Mn, r);
}, he = () => {
  const r = Zn(Mn);
  if (r === void 0)
    throw new Error("App context must be initialised before use");
  return r;
}, Vi = {
  "file-upload": !0,
  "landing-page": !1,
  "platform-select": !0,
  connect: !0,
  consent: !0,
  navigation: !1
}, Wi = F({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  rowGap: "2rem",
  height: "100%",
  textAlign: "center"
}), Hi = F({
  display: "grid",
  rowGap: ".5rem"
});
function Ki(r) {
  let e, t, n, o, l, i, s, a, f;
  return o = new Z({
    props: {
      as: "h2",
      variant: "heading-lg",
      text: r[1],
      dataTestId: "connect-title",
      color: "interface-dark"
    }
  }), i = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: r[2],
      dataTestId: "connect-body"
    }
  }), a = new ee({
    props: {
      action: { href: r[0] },
      label: r[3],
      icon: {
        component: Ho,
        display: "right"
      },
      dataTestId: "connect-button"
    }
  }), {
    c() {
      e = R(), t = D("div"), n = D("div"), $(o.$$.fragment), l = R(), $(i.$$.fragment), s = R(), $(a.$$.fragment), c(n, "class", Hi), c(t, "class", Wi);
    },
    m(u, d) {
      L(u, e, d), L(u, t, d), C(t, n), T(o, n, null), C(t, l), T(i, t, null), C(t, s), T(a, t, null), f = !0;
    },
    p: j,
    i(u) {
      f || (p(o.$$.fragment, u), p(i.$$.fragment, u), p(a.$$.fragment, u), f = !0);
    },
    o(u) {
      h(o.$$.fragment, u), h(i.$$.fragment, u), h(a.$$.fragment, u), f = !1;
    },
    d(u) {
      u && E(e), u && E(t), I(o), I(i), I(a);
    }
  };
}
function Zi(r, e, t) {
  var n;
  const o = he();
  let { state: l } = e, { onAction: i } = e;
  const s = o.linkApiService.connectUrl(l.connectionId), a = (n = Vr(o.integrations, l.platformKey)) !== null && n !== void 0 ? n : l.platformKey, f = `Connect to ${a}`, u = `Enter your account details and log in to ${a} in the tab we opened to establish a data connection with ${o.config.clientName}`, d = `Connect to ${a}`;
  window.open(s, "_blank");
  const g = br(), m = o.linkApiService.pollConnectionStatus(l.connectionId, g).subscribe((k) => {
    k === "Success" ? i({ kind: "success" }) : k === "Error" && o.linkApiService.getDisplayText(l.connectionId).then((y) => {
      i({
        kind: "error",
        correlationId: y.correlationId,
        message: y.errorMessage,
        callOnError: !0
      });
    }).catch((y) => {
      const v = y instanceof fe ? y.correlationId : void 0, _ = y instanceof fe ? y.message : void 0;
      i({
        kind: "error",
        correlationId: v,
        message: _,
        callOnError: !1
      });
    });
  });
  return gn(() => {
    m();
  }), r.$$set = (k) => {
    "state" in k && t(4, l = k.state), "onAction" in k && t(5, i = k.onAction);
  }, [s, f, u, d, l, i];
}
class Gi extends V {
  constructor(e) {
    super(), W(this, e, Zi, Ki, P, { state: 4, onAction: 5 });
  }
}
const qi = (r, e, t) => {
  switch (e.kind) {
    case "success":
      return t.callbacks.onConnection({
        connectionId: r.connectionId
      }), {
        kind: "navigation",
        lastConnection: {
          kind: "success",
          sourceType: r.sourceType,
          platformKey: r.platformKey
        }
      };
    case "error":
      return e.callOnError && t.callbacks.onError({
        correlationId: e.correlationId,
        message: e.message,
        userRecoverable: !0
      }), {
        kind: "navigation",
        lastConnection: {
          kind: "error",
          platformKey: r.platformKey,
          correlationId: e.correlationId,
          sourceType: r.sourceType
        }
      };
    case "back":
      return {
        kind: "consent",
        platformKey: r.platformKey,
        sourceType: r.sourceType
      };
  }
}, Yi = F({
  backgroundColor: x(G[5]),
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  margin: 0,
  borderRadius: "8px"
}), Ji = F({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  color: x(G.dark)
}), Xi = F({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  rowGap: "2rem",
  height: "100%"
}), Qi = F({
  display: "grid",
  gridTemplateRows: "auto 1fr ",
  rowGap: "1.5rem"
}), ea = F({
  display: "grid",
  rowGap: ".5rem"
});
function ta(r) {
  let e, t, n, o, l, i, s, a, f, u, d;
  return {
    c() {
      e = R(), t = D("button"), n = D("img"), i = R(), s = D("img"), re(n.src, o = r[0].src) || c(n, "src", o), c(n, "alt", l = r[0].alt), c(n, "class", r[4]), re(s.src, a = r[1].src) || c(s, "src", a), c(s, "alt", f = r[1].alt), c(s, "class", ue([r[4], r[6]])), c(t, "class", r[5]), c(t, "data-testid", r[3]);
    },
    m(g, m) {
      L(g, e, m), L(g, t, m), C(t, n), C(t, i), C(t, s), u || (d = se(t, "click", function() {
        ln(r[2]) && r[2].apply(this, arguments);
      }), u = !0);
    },
    p(g, [m]) {
      r = g, m & 1 && !re(n.src, o = r[0].src) && c(n, "src", o), m & 1 && l !== (l = r[0].alt) && c(n, "alt", l), m & 2 && !re(s.src, a = r[1].src) && c(s, "src", a), m & 2 && f !== (f = r[1].alt) && c(s, "alt", f), m & 8 && c(t, "data-testid", r[3]);
    },
    i: j,
    o: j,
    d(g) {
      g && E(e), g && E(t), u = !1, d();
    }
  };
}
function na(r, e, t) {
  let { defaultImage: n } = e, { hoverImage: o } = e, { onClick: l } = e, { dataTestId: i } = e;
  const s = F({ height: "48px" }), a = F({
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    position: "relative",
    padding: 0,
    margin: "auto"
  }), f = F({
    position: "absolute",
    top: 0,
    left: 0,
    display: "none",
    "button:hover>&": { display: "initial" }
  });
  return r.$$set = (u) => {
    "defaultImage" in u && t(0, n = u.defaultImage), "hoverImage" in u && t(1, o = u.hoverImage), "onClick" in u && t(2, l = u.onClick), "dataTestId" in u && t(3, i = u.dataTestId);
  }, [
    n,
    o,
    l,
    i,
    s,
    a,
    f
  ];
}
class ra extends V {
  constructor(e) {
    super(), W(this, e, na, ta, P, {
      defaultImage: 0,
      hoverImage: 1,
      onClick: 2,
      dataTestId: 3
    });
  }
}
function Rt(r, e, t) {
  const n = r.slice();
  return n[14] = e[t], n;
}
function oa(r) {
  let e, t, n = r[3], o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Mt(Rt(r, n, i));
  const l = (i) => h(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      e = D("ul");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      c(e, "class", Yi), c(e, "data-testid", "consent-data-items");
    },
    m(i, s) {
      L(i, e, s);
      for (let a = 0; a < o.length; a += 1)
        o[a].m(e, null);
      t = !0;
    },
    p(i, s) {
      if (s & 8) {
        n = i[3];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const f = Rt(i, n, a);
          o[a] ? (o[a].p(f, s), p(o[a], 1)) : (o[a] = Mt(f), o[a].c(), p(o[a], 1), o[a].m(e, null));
        }
        for (H(), a = n.length; a < o.length; a += 1)
          l(a);
        K();
      }
    },
    i(i) {
      if (!t) {
        for (let s = 0; s < n.length; s += 1)
          p(o[s]);
        t = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1)
        h(o[s]);
      t = !1;
    },
    d(i) {
      i && E(e), $e(o, i);
    }
  };
}
function Mt(r) {
  let e, t, n, o, l, i;
  return t = new zo({}), o = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: r[14],
      color: "interface-mid"
    }
  }), {
    c() {
      e = D("li"), $(t.$$.fragment), n = R(), $(o.$$.fragment), l = R(), c(e, "class", Ji);
    },
    m(s, a) {
      L(s, e, a), T(t, e, null), C(e, n), T(o, e, null), C(e, l), i = !0;
    },
    p: j,
    i(s) {
      i || (p(t.$$.fragment, s), p(o.$$.fragment, s), i = !0);
    },
    o(s) {
      h(t.$$.fragment, s), h(o.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), I(t), I(o);
    }
  };
}
function ia(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "p",
      variant: "body-sm",
      text: r[5],
      dataTestId: "terms-and-conditions-body"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function aa(r) {
  let e, t;
  return e = new Ln({
    props: {
      href: r[2].href,
      text: r[2].text || r[2].href,
      dataTestId: "terms-and-conditions-link"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function la(r) {
  let e, t;
  return e = new ee({
    props: {
      label: "Next",
      action: { onClick: r[1] },
      dataTestId: "next-button"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function sa(r) {
  let e, t;
  return e = new ra({
    props: {
      onClick: r[1],
      defaultImage: r[0].button.default.image,
      hoverImage: r[0].button.hover.image,
      dataTestId: "next-button"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function ca(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k;
  n = new Z({
    props: {
      as: "h2",
      variant: "heading-lg",
      text: r[6],
      dataTestId: "consent-title",
      color: "interface-dark"
    }
  }), l = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: r[4],
      dataTestId: "consent-body"
    }
  });
  let y = r[3] && oa(r), v = r[5] && ia(r), _ = r[2].href && aa(r);
  const b = [sa, la], w = [];
  function U(S, A) {
    return S[0]?.button?.default.image.src ? 0 : 1;
  }
  return g = U(r), m = w[g] = b[g](r), {
    c() {
      e = D("div"), t = D("div"), $(n.$$.fragment), o = R(), $(l.$$.fragment), i = R(), s = D("div"), y && y.c(), a = R(), f = D("div"), v && v.c(), u = R(), _ && _.c(), d = R(), m.c(), c(t, "class", ea), c(s, "class", Qi), c(e, "class", Xi), c(e, "data-stepkind", "consent");
    },
    m(S, A) {
      L(S, e, A), C(e, t), T(n, t, null), C(t, o), T(l, t, null), C(e, i), C(e, s), y && y.m(s, null), C(s, a), C(s, f), v && v.m(f, null), C(f, u), _ && _.m(f, null), C(e, d), w[g].m(e, null), k = !0;
    },
    p(S, [A]) {
      S[3] && y.p(S, A), S[5] && v.p(S, A), S[2].href && _.p(S, A), m.p(S, A);
    },
    i(S) {
      k || (p(n.$$.fragment, S), p(l.$$.fragment, S), p(y), p(v), p(_), p(m), k = !0);
    },
    o(S) {
      h(n.$$.fragment, S), h(l.$$.fragment, S), h(y), h(v), h(_), h(m), k = !1;
    },
    d(S) {
      S && E(e), I(n), I(l), y && y.d(), v && v.d(), _ && _.d(), w[g].d();
    }
  };
}
function fa(r, e, t) {
  var n, o;
  let { state: l } = e, { onAction: i } = e;
  const s = he(), a = tt(s.integrations, l.platformKey), f = (n = a?.name) !== null && n !== void 0 ? n : l.platformKey, u = () => {
    s.linkApiService.createConnection(l.platformKey).then((_) => {
      i({
        kind: "next",
        connectionId: _.connectionId
      });
    }).catch(() => {
    });
  }, { clientName: d } = s.config, { termsAndConditions: g } = s.config.pageConfiguration.dataAccess, m = (o = Hr(l.sourceType, s.config)) === null || o === void 0 ? void 0 : o.filter((_) => !!_.trim()), k = l.sourceType === "Banking" ? "You will be asked to authorise access to the following data:" : `You will be asked to connect your ${f} account and authorize ${d} access to the following data:`, y = Kr(l.sourceType, s.config), v = l.sourceType === "Banking" ? "Connect your bank account" : `Connect to ${f}`;
  return r.$$set = (_) => {
    "state" in _ && t(7, l = _.state), "onAction" in _ && t(8, i = _.onAction);
  }, [
    a,
    u,
    g,
    m,
    k,
    y,
    v,
    l,
    i
  ];
}
class ua extends V {
  constructor(e) {
    super(), W(this, e, fa, ca, P, { state: 7, onAction: 8 });
  }
}
const da = (r, e) => {
  switch (e.kind) {
    case "next":
      return {
        kind: "connect",
        sourceType: r.sourceType,
        connectionId: e.connectionId,
        platformKey: r.platformKey
      };
    case "back":
      return {
        kind: "platform-select",
        sourceType: r.sourceType
      };
  }
}, pa = (r, e, t, n) => r ? Nr(t) ? {
  label: "Uploading",
  action: () => {
  },
  disabled: !0,
  icon: {
    component: rt,
    display: "left"
  }
} : qe(t) ? {
  label: "Next",
  action: () => {
  },
  disabled: !0,
  icon: void 0
} : In(t) ? {
  label: "Next",
  action: () => {
    e({ kind: "file-upload-complete" });
  },
  disabled: !1,
  icon: void 0
} : {
  label: "Upload files",
  action: n,
  disabled: !jr(t),
  icon: void 0
} : {
  label: "Back",
  action: () => {
    e({ kind: "back" });
  },
  disabled: !1,
  icon: void 0
}, ga = F({
  display: "grid",
  gridTemplateRows: "auto auto 1fr",
  rowGap: "2rem",
  height: "100%"
}), Un = F({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
  height: "100%",
  justifyContent: "end"
}), ma = F({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}), ha = F({
  display: "flex"
});
function Ut(r, e, t) {
  const n = r.slice();
  return n[16] = e[t], n;
}
function ba(r) {
  let e, t;
  return e = new Z({
    props: {
      text: r[8],
      as: "p",
      variant: "body-reg",
      dataTestId: "file-upload-description"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Ca(r) {
  let e, t;
  return e = new Z({
    props: {
      text: "File upload for " + r[3] + " documents is not supported",
      as: "p",
      variant: "body-md",
      color: "negative"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function _a(r) {
  let e, t, n, o, l, i, s;
  return t = new gi({
    props: {
      onFilePicked: r[11],
      height: 140,
      accept: r[7]
    }
  }), o = new Z({
    props: {
      text: "Maximum files: " + Ee + " \u2022 Up to " + wn(r[4]),
      as: "p",
      variant: "body-sm",
      dataTestId: "supported-file-size-text"
    }
  }), i = new Z({
    props: {
      text: "File types: " + r[6],
      as: "p",
      variant: "body-sm",
      dataTestId: "supported-file-formats-text"
    }
  }), {
    c() {
      e = D("div"), $(t.$$.fragment), n = R(), $(o.$$.fragment), l = R(), $(i.$$.fragment), c(e, "class", Un);
    },
    m(a, f) {
      L(a, e, f), T(t, e, null), C(e, n), T(o, e, null), C(e, l), T(i, e, null), s = !0;
    },
    p(a, f) {
      const u = {};
      f & 1 && (u.onFilePicked = a[11]), t.$set(u);
    },
    i(a) {
      s || (p(t.$$.fragment, a), p(o.$$.fragment, a), p(i.$$.fragment, a), s = !0);
    },
    o(a) {
      h(t.$$.fragment, a), h(o.$$.fragment, a), h(i.$$.fragment, a), s = !1;
    },
    d(a) {
      a && E(e), I(t), I(o), I(i);
    }
  };
}
function jt(r) {
  let e, t, n, o, l, i, s, a = qe(r[0]), f, u;
  t = new Z({
    props: {
      as: "p",
      variant: "heading-sm",
      text: "Files \u2022\xA0",
      color: "interface"
    }
  }), o = new Z({
    props: {
      as: "p",
      variant: "body-sm",
      text: `${r[0].length}/${Ee}`
    }
  }), i = new ot({
    props: {
      $$slots: { default: [ka] },
      $$scope: { ctx: r }
    }
  });
  let d = a && Ot();
  return {
    c() {
      e = D("div"), $(t.$$.fragment), n = R(), $(o.$$.fragment), l = R(), $(i.$$.fragment), s = R(), d && d.c(), f = te(), c(e, "class", ha), c(e, "data-testid", "file-list");
    },
    m(g, m) {
      L(g, e, m), T(t, e, null), C(e, n), T(o, e, null), L(g, l, m), T(i, g, m), L(g, s, m), d && d.m(g, m), L(g, f, m), u = !0;
    },
    p(g, m) {
      const k = {};
      m & 1 && (k.text = `${g[0].length}/${Ee}`), o.$set(k);
      const y = {};
      m & 524289 && (y.$$scope = { dirty: m, ctx: g }), i.$set(y), m & 1 && (a = qe(g[0])), a ? d ? m & 1 && p(d, 1) : (d = Ot(), d.c(), p(d, 1), d.m(f.parentNode, f)) : d && (H(), h(d, 1, 1, () => {
        d = null;
      }), K());
    },
    i(g) {
      u || (p(t.$$.fragment, g), p(o.$$.fragment, g), p(i.$$.fragment, g), p(d), u = !0);
    },
    o(g) {
      h(t.$$.fragment, g), h(o.$$.fragment, g), h(i.$$.fragment, g), h(d), u = !1;
    },
    d(g) {
      g && E(e), I(t), I(o), g && E(l), I(i, g), g && E(s), d && d.d(g), g && E(f);
    }
  };
}
function Nt(r) {
  let e, t;
  function n() {
    return r[12](r[16]);
  }
  return e = new li({
    props: {
      state: r[16],
      onDeleteClick: n
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(o, l) {
      T(e, o, l), t = !0;
    },
    p(o, l) {
      r = o;
      const i = {};
      l & 1 && (i.state = r[16]), l & 1 && (i.onDeleteClick = n), e.$set(i);
    },
    i(o) {
      t || (p(e.$$.fragment, o), t = !0);
    },
    o(o) {
      h(e.$$.fragment, o), t = !1;
    },
    d(o) {
      I(e, o);
    }
  };
}
function ka(r) {
  let e, t, n = r[0], o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Nt(Ut(r, n, i));
  const l = (i) => h(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      e = te();
    },
    m(i, s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].m(i, s);
      L(i, e, s), t = !0;
    },
    p(i, s) {
      if (s & 1) {
        n = i[0];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const f = Ut(i, n, a);
          o[a] ? (o[a].p(f, s), p(o[a], 1)) : (o[a] = Nt(f), o[a].c(), p(o[a], 1), o[a].m(e.parentNode, e));
        }
        for (H(), a = n.length; a < o.length; a += 1)
          l(a);
        K();
      }
    },
    i(i) {
      if (!t) {
        for (let s = 0; s < n.length; s += 1)
          p(o[s]);
        t = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1)
        h(o[s]);
      t = !1;
    },
    d(i) {
      $e(o, i), i && E(e);
    }
  };
}
function Ot(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "p",
      variant: "body-sm",
      color: "negative",
      dataTestId: "upload-failed-message",
      text: "There was an issue when uploading some files. Delete these to continue."
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function ya(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g;
  n = new Z({
    props: {
      text: "Upload your " + r[3] + " documents",
      as: "h1",
      variant: "heading-lg",
      dataTestId: "file-upload-title",
      color: "interface-dark"
    }
  });
  let m = r[8] && ba(r);
  const k = [_a, Ca], y = [];
  function v(b, w) {
    return b[1] ? 0 : 1;
  }
  i = v(r), s = y[i] = k[i](r);
  let _ = r[1] && jt(r);
  return d = new ee({
    props: {
      label: r[2].label,
      action: { onClick: r[2].action },
      dataTestId: "file-upload-button",
      disabled: r[2].disabled,
      icon: r[2].icon
    }
  }), {
    c() {
      e = D("div"), t = D("div"), $(n.$$.fragment), o = R(), m && m.c(), l = R(), s.c(), a = R(), f = D("div"), _ && _.c(), u = R(), $(d.$$.fragment), c(t, "class", ma), c(f, "class", Un), c(e, "class", ga), c(e, "data-stepkind", "file-upload");
    },
    m(b, w) {
      L(b, e, w), C(e, t), T(n, t, null), C(t, o), m && m.m(t, null), C(e, l), y[i].m(e, null), C(e, a), C(e, f), _ && _.m(f, null), C(f, u), T(d, f, null), g = !0;
    },
    p(b, [w]) {
      b[8] && m.p(b, w);
      let U = i;
      i = v(b), i === U ? y[i].p(b, w) : (H(), h(y[U], 1, 1, () => {
        y[U] = null;
      }), K(), s = y[i], s ? s.p(b, w) : (s = y[i] = k[i](b), s.c()), p(s, 1), s.m(e, a)), b[1] ? _ ? (_.p(b, w), w & 2 && p(_, 1)) : (_ = jt(b), _.c(), p(_, 1), _.m(f, u)) : _ && (H(), h(_, 1, 1, () => {
        _ = null;
      }), K());
      const S = {};
      w & 4 && (S.label = b[2].label), w & 4 && (S.action = { onClick: b[2].action }), w & 4 && (S.disabled = b[2].disabled), w & 4 && (S.icon = b[2].icon), d.$set(S);
    },
    i(b) {
      g || (p(n.$$.fragment, b), p(m), p(s), p(_), p(d.$$.fragment, b), g = !0);
    },
    o(b) {
      h(n.$$.fragment, b), h(m), h(s), h(_), h(d.$$.fragment, b), g = !1;
    },
    d(b) {
      b && E(e), I(n), m && m.d(), y[i].d(), _ && _.d(), I(d);
    }
  };
}
const Ee = 20;
function va(r, e, t) {
  let n, o, { state: l } = e, { onAction: i } = e;
  const s = he();
  let a = [], f, u = Gr(l.sourceType);
  gn(() => {
    f && f();
  });
  const d = 10 * 1024 * 1024, { allowedFileTypes: g, allowedFilesString: m, accept: k } = (() => {
    const w = [
      "xls",
      "xlsx",
      "xlsb",
      "csv",
      "pdf",
      "doc",
      "docx",
      "ppt",
      "pptx",
      "jpeg",
      "jpg",
      "png"
    ], U = new Set(w), S = w.join(", "), A = w.map((B) => "." + B).join(",");
    return {
      allowedFileTypes: U,
      allowedFilesString: S,
      accept: A
    };
  })(), y = (() => {
    var w, U, S;
    switch (l.sourceType) {
      case "Accounting":
        return (w = s.config.pageConfiguration.fileUpload) === null || w === void 0 ? void 0 : w.accounting.body;
      case "Banking":
        return (U = s.config.pageConfiguration.fileUpload) === null || U === void 0 ? void 0 : U.banking.body;
      case "Other":
        return (S = s.config.pageConfiguration.fileUpload) === null || S === void 0 ? void 0 : S.businessDocuments.body;
      default:
        return;
    }
  })(), v = () => {
    if (n) {
      const w = Rr(a);
      t(0, a = Er(a)), f = s.linkApiService.uploadFiles(n, w).subscribe((U) => {
        U && (t(0, a = Ur(a, U)), In(a) && i({ kind: "file-upload-complete" }));
      });
    }
  }, _ = (w) => {
    t(0, a = Dr(a, Array.from(w), g, Ee, d));
  }, b = (w) => {
    t(0, a = Lr(a, w.file));
  };
  return r.$$set = (w) => {
    "state" in w && t(9, l = w.state), "onAction" in w && t(10, i = w.onAction);
  }, r.$$.update = () => {
    r.$$.dirty & 512 && t(1, n = Or(l.sourceType)), r.$$.dirty & 1027 && t(2, o = pa(n, i, a, v));
  }, [
    a,
    n,
    o,
    u,
    d,
    g,
    m,
    k,
    y,
    l,
    i,
    _,
    b
  ];
}
class wa extends V {
  constructor(e) {
    super(), W(this, e, va, ya, P, { state: 9, onAction: 10 });
  }
}
const $a = (r, e) => {
  switch (e.kind) {
    case "file-upload-complete":
      return {
        kind: "navigation",
        lastConnection: {
          kind: "files-uploaded",
          sourceType: r.sourceType
        }
      };
    case "back":
      switch (r.goBackTo) {
        case "navigation":
          return { kind: "navigation" };
        case "platform-select":
          return {
            kind: "platform-select",
            sourceType: r.sourceType
          };
      }
  }
};
function Ta(r) {
  let e, t, n, o, l, i, s;
  return t = new Z({
    props: {
      as: "h1",
      variant: "heading-xl",
      dataTestId: "landing-title",
      color: "interface-dark",
      text: r[1].config.pageConfiguration.landing.title
    }
  }), o = new Z({
    props: {
      as: "p",
      variant: "body-md",
      dataTestId: "landing-body",
      text: r[1].config.pageConfiguration.landing.body
    }
  }), i = new ee({
    props: {
      dataTestId: "next-button",
      label: "Next",
      action: { onClick: r[4] }
    }
  }), {
    c() {
      e = D("div"), $(t.$$.fragment), n = R(), $(o.$$.fragment), l = R(), $(i.$$.fragment), c(e, "class", r[2]), c(e, "data-stepkind", "landing-page");
    },
    m(a, f) {
      L(a, e, f), T(t, e, null), C(e, n), T(o, e, null), C(e, l), T(i, e, null), s = !0;
    },
    p(a, [f]) {
      const u = {};
      f & 1 && (u.action = { onClick: a[4] }), i.$set(u);
    },
    i(a) {
      s || (p(t.$$.fragment, a), p(o.$$.fragment, a), p(i.$$.fragment, a), s = !0);
    },
    o(a) {
      h(t.$$.fragment, a), h(o.$$.fragment, a), h(i.$$.fragment, a), s = !1;
    },
    d(a) {
      a && E(e), I(t), I(o), I(i);
    }
  };
}
function Ia(r, e, t) {
  const n = he();
  let { state: o } = e, { onAction: l } = e;
  const i = F({
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    rowGap: "2rem",
    height: "100%"
  }), s = () => {
    l({ kind: "next" });
  };
  return r.$$set = (a) => {
    "state" in a && t(3, o = a.state), "onAction" in a && t(0, l = a.onAction);
  }, [l, n, i, o, s];
}
class Sa extends V {
  constructor(e) {
    super(), W(this, e, Ia, Ta, P, { state: 3, onAction: 0 });
  }
}
const Aa = (r, e) => {
  switch (e.kind) {
    case "next":
      return {
        kind: "navigation"
      };
  }
}, it = F({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "32px"
}), at = F({
  position: "relative",
  height: "48px",
  width: "48px",
  borderRadius: "6px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  boxShadow: "0px 1.5px 6px 0px #55668014, 0px 3px 3px 0px #55668014, 0px 1.5px 3px 0px #55668014",
  "& img": {
    height: "48px",
    width: "48px",
    borderRadius: "6px"
  },
  "& svg": {
    height: "24px",
    width: "24px"
  }
}), lt = F({
  height: "24px",
  width: "24px",
  position: "absolute",
  display: "flex",
  top: "0px",
  right: "0px",
  transform: "translate(30%, -30%)",
  borderRadius: "50%",
  border: "1px solid white",
  boxShadow: "0px 1px 4px 0px #55668014, 0px 2px 2px 0px #55668014, 0px 1px 2px 0px #55668014",
  "& svg": {
    height: "100%",
    width: "100%"
  }
}), xa = F({
  "& svg": {
    color: x(ne.base)
  }
}), jn = F({
  "& svg": {
    color: x(et.base)
  }
}), st = F({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  textAlign: "center"
}), ct = F({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingTop: "48px"
});
function Ba(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y, v, _;
  return a = new nt({}), d = new Z({
    props: {
      dataTestId: "success-overlay-title",
      text: `${r[0]} connected`,
      as: "h2",
      variant: "heading-lg",
      color: "interface-dark"
    }
  }), m = new Z({
    props: {
      dataTestId: "success-overlay-description",
      text: `You have successfully connected ${r[0]} to ${r[2]}.`,
      as: "p",
      variant: "body-reg"
    }
  }), v = new ee({
    props: {
      label: "Continue",
      dataTestId: "continue-button",
      action: { onClick: r[3] }
    }
  }), {
    c() {
      e = D("div"), t = D("div"), n = D("img"), i = R(), s = D("div"), $(a.$$.fragment), f = R(), u = D("div"), $(d.$$.fragment), g = R(), $(m.$$.fragment), k = R(), y = D("div"), $(v.$$.fragment), re(n.src, o = r[1]) || c(n, "src", o), c(n, "alt", l = `${r[0]} logo`), c(s, "data-testid", "check-icon"), c(s, "class", r[4]), c(t, "class", at), c(u, "class", st), c(y, "class", ct), c(e, "class", it);
    },
    m(b, w) {
      L(b, e, w), C(e, t), C(t, n), C(t, i), C(t, s), T(a, s, null), C(e, f), C(e, u), T(d, u, null), C(u, g), T(m, u, null), C(e, k), C(e, y), T(v, y, null), _ = !0;
    },
    p(b, [w]) {
      (!_ || w & 2 && !re(n.src, o = b[1])) && c(n, "src", o), (!_ || w & 1 && l !== (l = `${b[0]} logo`)) && c(n, "alt", l);
      const U = {};
      w & 1 && (U.text = `${b[0]} connected`), d.$set(U);
      const S = {};
      w & 5 && (S.text = `You have successfully connected ${b[0]} to ${b[2]}.`), m.$set(S);
      const A = {};
      w & 8 && (A.action = { onClick: b[3] }), v.$set(A);
    },
    i(b) {
      _ || (p(a.$$.fragment, b), p(d.$$.fragment, b), p(m.$$.fragment, b), p(v.$$.fragment, b), _ = !0);
    },
    o(b) {
      h(a.$$.fragment, b), h(d.$$.fragment, b), h(m.$$.fragment, b), h(v.$$.fragment, b), _ = !1;
    },
    d(b) {
      b && E(e), I(a), I(d), I(m), I(v);
    }
  };
}
function Fa(r, e, t) {
  let { platformName: n } = e, { logoSrc: o } = e, { clientName: l } = e, { onClick: i } = e;
  const s = `${lt} ${jn}`;
  return r.$$set = (a) => {
    "platformName" in a && t(0, n = a.platformName), "logoSrc" in a && t(1, o = a.logoSrc), "clientName" in a && t(2, l = a.clientName), "onClick" in a && t(3, i = a.onClick);
  }, [n, o, l, i, s];
}
class Da extends V {
  constructor(e) {
    super(), W(this, e, Fa, Ba, P, {
      platformName: 0,
      logoSrc: 1,
      clientName: 2,
      onClick: 3
    });
  }
}
function zt(r) {
  let e, t;
  return e = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: r[0],
      dataTestId: "error-overlay-correlationId"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 1 && (l.text = n[0]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function La(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y, v, _, b, w, U;
  a = new je({}), d = new Z({
    props: {
      as: "h1",
      variant: "heading-lg",
      text: "Connection error",
      dataTestId: "error-overlay-title",
      color: "interface-dark"
    }
  }), m = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      text: `There has been an error connecting to ${r[1]}`,
      dataTestId: "error-overlay-message"
    }
  });
  let S = r[0] && zt(r);
  return _ = new ee({
    props: {
      label: "Retry connection",
      dataTestId: "retry-connection-button",
      action: { onClick: r[6] },
      variant: "secondary",
      color: "interface"
    }
  }), w = new ee({
    props: {
      label: "Continue",
      dataTestId: "continue-button",
      action: { onClick: r[7] },
      variant: "secondary",
      color: "action"
    }
  }), {
    c() {
      e = D("div"), t = D("div"), n = D("img"), i = R(), s = D("div"), $(a.$$.fragment), f = R(), u = D("div"), $(d.$$.fragment), g = R(), $(m.$$.fragment), k = R(), S && S.c(), y = R(), v = D("div"), $(_.$$.fragment), b = R(), $(w.$$.fragment), re(n.src, o = r[2]) || c(n, "src", o), c(n, "alt", l = `${r[1]} logo`), c(n, "data-testid", "error-overlay-platform-icon"), c(s, "class", r[5]), c(t, "class", at), c(u, "class", st), c(v, "class", ct), c(e, "class", it);
    },
    m(A, B) {
      L(A, e, B), C(e, t), C(t, n), C(t, i), C(t, s), T(a, s, null), C(e, f), C(e, u), T(d, u, null), C(u, g), T(m, u, null), C(u, k), S && S.m(u, null), C(e, y), C(e, v), T(_, v, null), C(v, b), T(w, v, null), U = !0;
    },
    p(A, [B]) {
      (!U || B & 4 && !re(n.src, o = A[2])) && c(n, "src", o), (!U || B & 2 && l !== (l = `${A[1]} logo`)) && c(n, "alt", l);
      const N = {};
      B & 2 && (N.text = `There has been an error connecting to ${A[1]}`), m.$set(N), A[0] ? S ? (S.p(A, B), B & 1 && p(S, 1)) : (S = zt(A), S.c(), p(S, 1), S.m(u, null)) : S && (H(), h(S, 1, 1, () => {
        S = null;
      }), K());
      const J = {};
      B & 8 && (J.action = { onClick: A[6] }), _.$set(J);
      const O = {};
      B & 16 && (O.action = { onClick: A[7] }), w.$set(O);
    },
    i(A) {
      U || (p(a.$$.fragment, A), p(d.$$.fragment, A), p(m.$$.fragment, A), p(S), p(_.$$.fragment, A), p(w.$$.fragment, A), U = !0);
    },
    o(A) {
      h(a.$$.fragment, A), h(d.$$.fragment, A), h(m.$$.fragment, A), h(S), h(_.$$.fragment, A), h(w.$$.fragment, A), U = !1;
    },
    d(A) {
      A && E(e), I(a), I(d), I(m), S && S.d(), I(_), I(w);
    }
  };
}
function Ea(r, e, t) {
  let { correlationId: n } = e, { platformName: o } = e, { logoSrc: l } = e, { onRetryClick: i } = e, { onContinueClick: s } = e;
  const a = `${lt} ${xa}`, f = () => {
    i();
  }, u = () => {
    s();
  };
  return r.$$set = (d) => {
    "correlationId" in d && t(0, n = d.correlationId), "platformName" in d && t(1, o = d.platformName), "logoSrc" in d && t(2, l = d.logoSrc), "onRetryClick" in d && t(3, i = d.onRetryClick), "onContinueClick" in d && t(4, s = d.onContinueClick);
  }, [
    n,
    o,
    l,
    i,
    s,
    a,
    f,
    u
  ];
}
class Ra extends V {
  constructor(e) {
    super(), W(this, e, Ea, La, P, {
      correlationId: 0,
      platformName: 1,
      logoSrc: 2,
      onRetryClick: 3,
      onContinueClick: 4
    });
  }
}
function Ma(r) {
  let e, t;
  return e = new Dn({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Ua(r) {
  let e, t;
  return e = new Vo({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function ja(r) {
  let e, t;
  return e = new So({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Na(r) {
  let e, t;
  return e = new Mo({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Oa(r) {
  let e, t, n, o, l;
  const i = [Na, ja, Ua, Ma], s = [];
  function a(f, u) {
    return f[0] === "Accounting" ? 0 : f[0] === "Banking" ? 1 : f[0] === "Commerce" ? 2 : f[0] === "Other" ? 3 : -1;
  }
  return ~(t = a(r)) && (n = s[t] = i[t](r)), {
    c() {
      e = R(), n && n.c(), o = te();
    },
    m(f, u) {
      L(f, e, u), ~t && s[t].m(f, u), L(f, o, u), l = !0;
    },
    p(f, [u]) {
      let d = t;
      t = a(f), t !== d && (n && (H(), h(s[d], 1, 1, () => {
        s[d] = null;
      }), K()), ~t ? (n = s[t], n || (n = s[t] = i[t](f), n.c()), p(n, 1), n.m(o.parentNode, o)) : n = null);
    },
    i(f) {
      l || (p(n), l = !0);
    },
    o(f) {
      h(n), l = !1;
    },
    d(f) {
      f && E(e), ~t && s[t].d(f), f && E(o);
    }
  };
}
function za(r, e, t) {
  let { sourceType: n } = e;
  return r.$$set = (o) => {
    "sourceType" in o && t(0, n = o.sourceType);
  }, [n];
}
class Nn extends V {
  constructor(e) {
    super(), W(this, e, za, Oa, P, { sourceType: 0 });
  }
}
function Pa(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y, v;
  return o = new Nn({
    props: { sourceType: r[1] }
  }), s = new nt({}), u = new Z({
    props: {
      as: "h2",
      dataTestId: "file-upload-overlay-title",
      text: `${r[1]} files uploaded`,
      variant: "heading-lg"
    }
  }), g = new Z({
    props: {
      as: "p",
      dataTestId: "file-upload-overlay-description",
      text: `You have successfully uploaded ${r[1].toLowerCase()} files. ${r[0]} will be able to view your files.`,
      variant: "body-reg"
    }
  }), y = new ee({
    props: {
      action: { onClick: r[2] },
      dataTestId: "continue-button",
      label: "Continue"
    }
  }), {
    c() {
      e = R(), t = D("div"), n = D("div"), $(o.$$.fragment), l = R(), i = D("div"), $(s.$$.fragment), a = R(), f = D("div"), $(u.$$.fragment), d = R(), $(g.$$.fragment), m = R(), k = D("div"), $(y.$$.fragment), c(i, "class", r[3]), c(i, "data-testid", "check-icon"), c(n, "class", at), c(f, "class", st), c(k, "class", ct), c(t, "class", it);
    },
    m(_, b) {
      L(_, e, b), L(_, t, b), C(t, n), T(o, n, null), C(n, l), C(n, i), T(s, i, null), C(t, a), C(t, f), T(u, f, null), C(f, d), T(g, f, null), C(t, m), C(t, k), T(y, k, null), v = !0;
    },
    p(_, [b]) {
      const w = {};
      b & 2 && (w.sourceType = _[1]), o.$set(w);
      const U = {};
      b & 2 && (U.text = `${_[1]} files uploaded`), u.$set(U);
      const S = {};
      b & 3 && (S.text = `You have successfully uploaded ${_[1].toLowerCase()} files. ${_[0]} will be able to view your files.`), g.$set(S);
      const A = {};
      b & 4 && (A.action = { onClick: _[2] }), y.$set(A);
    },
    i(_) {
      v || (p(o.$$.fragment, _), p(s.$$.fragment, _), p(u.$$.fragment, _), p(g.$$.fragment, _), p(y.$$.fragment, _), v = !0);
    },
    o(_) {
      h(o.$$.fragment, _), h(s.$$.fragment, _), h(u.$$.fragment, _), h(g.$$.fragment, _), h(y.$$.fragment, _), v = !1;
    },
    d(_) {
      _ && E(e), _ && E(t), I(o), I(s), I(u), I(g), I(y);
    }
  };
}
function Va(r, e, t) {
  let { clientName: n } = e, { sourceType: o } = e, { onClick: l } = e;
  const i = `${lt} ${jn}`;
  return r.$$set = (s) => {
    "clientName" in s && t(0, n = s.clientName), "sourceType" in s && t(1, o = s.sourceType), "onClick" in s && t(2, l = s.onClick);
  }, [n, o, l, i];
}
class Wa extends V {
  constructor(e) {
    super(), W(this, e, Va, Pa, P, { clientName: 0, sourceType: 1, onClick: 2 });
  }
}
const Ha = F({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  padding: "1rem",
  gap: "1rem",
  border: "1px solid",
  borderRadius: "8px",
  borderColor: x(G[20])
}), Ka = F({
  position: "relative",
  height: "32px",
  width: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid",
  borderRadius: "4px",
  borderColor: x(G[20]),
  boxShadow: "0px 2px 4px 0px #55668014, 0px 2px 2px 0px #55668014, 0px 1px 2px 0px #55668014",
  color: x(G.mid)
}), Za = F({
  display: "flex",
  alignItems: "center",
  gap: ".75rem",
  height: "32px"
}), Ga = F({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  gap: "12px"
}), qa = F({
  display: "flex",
  gap: ".5rem"
}), Ya = F({
  position: "absolute",
  display: "flex",
  top: "0px",
  right: "0px",
  transform: "translate(50%, -50%)",
  borderRadius: "50%",
  border: "1px solid white",
  boxShadow: "0px 1px 4px 0px #55668014, 0px 2px 2px 0px #55668014, 0px 1px 2px 0px #55668014",
  "& svg": {
    color: x(et.base)
  }
}), Ye = (r) => {
  const { sourceType: e, connectionsCount: t, fileUploadCount: n } = r;
  return e !== "Other" && t > 0 || n > 0;
}, Ja = (r) => {
  switch (r.sourceType) {
    case "Accounting":
      return "Accounting";
    case "Commerce":
      return "Commerce";
    case "Banking":
      return "Banking";
    case "Other":
      return "Business documents";
  }
}, Xa = (r) => {
  const {
    sourceType: e,
    connectionsCount: t,
    fileUploadCount: n,
    fileUploadOnly: o,
    lastConnectionKind: l
  } = r, i = Sn(e), s = (() => {
    switch (e) {
      case "Accounting":
        return "accounting platform";
      case "Banking":
        return "bank account";
      case "Commerce":
        return "commerce platform";
    }
  })();
  if (l === "error" && s)
    return `Try connecting your ${s} again.`;
  if (t >= 1 && s) {
    const a = t > 1 ? "s" : "";
    return `You've connected your ${s}${a}.`;
  } else
    return n ? `You've uploaded your ${i}.` : o || !s ? `Upload your ${i}.` : `Connect your ${s}${e === "Banking" || e === "Commerce" ? "s" : ""}.`;
};
function Pt(r) {
  let e, t, n;
  return t = new nt({}), {
    c() {
      e = D("div"), $(t.$$.fragment), c(e, "data-testid", "check-icon"), c(e, "class", Ya);
    },
    m(o, l) {
      L(o, e, l), T(t, e, null), n = !0;
    },
    p: j,
    i(o) {
      n || (p(t.$$.fragment, o), n = !0);
    },
    o(o) {
      h(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && E(e), I(t);
    }
  };
}
function Qa(r) {
  let e, t;
  return e = new En({
    props: {
      label: "Connection error",
      color: "negative",
      dataTestId: "connection-error-label"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Vt(r) {
  let e, t;
  return e = new En({
    props: {
      label: "Required",
      color: "interface",
      dataTestId: "required-label"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Wt(r) {
  let e, t;
  return e = new ee({
    props: {
      size: "small",
      label: r[5] ? "Upload files" : r[8] == "error" ? "Retry connecting" : "Connect",
      icon: r[8] == "error" ? { component: Zo, display: "left" } : void 0,
      dataTestId: "connect-button",
      variant: r[4] ? "primary" : "secondary",
      color: r[4] ? "action" : "interface",
      action: {
        onClick: r[5] ? r[6].uploadFiles : r[6].connect
      }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Ht(r) {
  let e, t;
  return e = new ee({
    props: {
      size: "small",
      label: "Upload files",
      dataTestId: "file-upload-button",
      variant: "secondary",
      color: "interface",
      action: {
        onClick: r[6].uploadFiles
      }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Kt(r) {
  let e, t;
  return e = new ee({
    props: {
      size: "small",
      label: r[2] > 0 ? "Replace connection" : "Connect",
      dataTestId: "replace-connection-button",
      variant: "secondary",
      color: "interface",
      action: {
        onClick: r[6].connect
      }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 4 && (l.label = n[2] > 0 ? "Replace connection" : "Connect"), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Zt(r) {
  let e, t;
  return e = new ee({
    props: {
      size: "small",
      label: "Add another",
      dataTestId: "add-another-button",
      variant: "secondary",
      color: "interface",
      action: {
        onClick: r[6].connect
      }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function el(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y, v, _, b;
  n = new Nn({
    props: { sourceType: r[3] }
  });
  let w = r[0] && Pt();
  a = new Z({
    props: {
      as: "h2",
      text: r[9],
      variant: "heading-reg",
      dataTestId: "source-type-display-title",
      color: "interface-mid"
    }
  });
  let U = r[8] === "error" && Qa(), S = r[4] && !r[0] && Vt();
  g = new Z({
    props: {
      as: "p",
      text: r[1],
      variant: "body-reg",
      dataTestId: "source-type-display-description"
    }
  });
  let A = !r[0] && Wt(r), B = r[0] && r[7] && r[3] !== "Commerce" && Ht(r), N = r[0] && !r[5] && r[3] === "Accounting" && Kt(r), J = r[0] && !r[5] && (r[3] === "Commerce" || r[3] === "Banking") && Zt(r);
  return {
    c() {
      e = D("div"), t = D("div"), $(n.$$.fragment), o = R(), w && w.c(), l = R(), i = D("div"), s = D("div"), $(a.$$.fragment), f = R(), U && U.c(), u = R(), S && S.c(), d = R(), $(g.$$.fragment), m = R(), k = D("div"), A && A.c(), y = R(), B && B.c(), v = R(), N && N.c(), _ = R(), J && J.c(), c(t, "class", Ka), c(s, "class", Za), c(k, "class", qa), c(i, "class", Ga), c(e, "class", Ha), c(e, "data-testid", "source-type-display"), c(e, "data-sourcetype", r[3]);
    },
    m(O, q) {
      L(O, e, q), C(e, t), T(n, t, null), C(t, o), w && w.m(t, null), C(e, l), C(e, i), C(i, s), T(a, s, null), C(s, f), U && U.m(s, null), C(s, u), S && S.m(s, null), C(i, d), T(g, i, null), C(i, m), C(i, k), A && A.m(k, null), C(k, y), B && B.m(k, null), C(k, v), N && N.m(k, null), C(k, _), J && J.m(k, null), b = !0;
    },
    p(O, [q]) {
      O[0] ? w ? (w.p(O, q), q & 1 && p(w, 1)) : (w = Pt(), w.c(), p(w, 1), w.m(t, null)) : w && (H(), h(w, 1, 1, () => {
        w = null;
      }), K()), O[4] && !O[0] ? S ? q & 1 && p(S, 1) : (S = Vt(), S.c(), p(S, 1), S.m(s, null)) : S && (H(), h(S, 1, 1, () => {
        S = null;
      }), K());
      const de = {};
      q & 2 && (de.text = O[1]), g.$set(de), O[0] ? A && (H(), h(A, 1, 1, () => {
        A = null;
      }), K()) : A ? (A.p(O, q), q & 1 && p(A, 1)) : (A = Wt(O), A.c(), p(A, 1), A.m(k, y)), O[0] && O[7] && O[3] !== "Commerce" ? B ? (B.p(O, q), q & 1 && p(B, 1)) : (B = Ht(O), B.c(), p(B, 1), B.m(k, v)) : B && (H(), h(B, 1, 1, () => {
        B = null;
      }), K()), O[0] && !O[5] && O[3] === "Accounting" ? N ? (N.p(O, q), q & 1 && p(N, 1)) : (N = Kt(O), N.c(), p(N, 1), N.m(k, _)) : N && (H(), h(N, 1, 1, () => {
        N = null;
      }), K()), O[0] && !O[5] && (O[3] === "Commerce" || O[3] === "Banking") ? J ? (J.p(O, q), q & 1 && p(J, 1)) : (J = Zt(O), J.c(), p(J, 1), J.m(k, null)) : J && (H(), h(J, 1, 1, () => {
        J = null;
      }), K());
    },
    i(O) {
      b || (p(n.$$.fragment, O), p(w), p(a.$$.fragment, O), p(U), p(S), p(g.$$.fragment, O), p(A), p(B), p(N), p(J), b = !0);
    },
    o(O) {
      h(n.$$.fragment, O), h(w), h(a.$$.fragment, O), h(U), h(S), h(g.$$.fragment, O), h(A), h(B), h(N), h(J), b = !1;
    },
    d(O) {
      O && E(e), I(n), w && w.d(), I(a), U && U.d(), S && S.d(), I(g), A && A.d(), B && B.d(), N && N.d(), J && J.d();
    }
  };
}
function tl(r, e, t) {
  let n, o, l, { data: i } = e;
  const { sourceType: s, required: a, fileUploadOnly: f, clickHandlers: u, fileUploadEnabled: d, lastConnectionKind: g } = i, m = Ja(i);
  return r.$$set = (k) => {
    "data" in k && t(10, i = k.data);
  }, r.$$.update = () => {
    r.$$.dirty & 1024 && t(2, n = i.connectionsCount), r.$$.dirty & 1024 && t(1, o = Xa(i)), r.$$.dirty & 1024 && t(0, l = Ye(i));
  }, [
    l,
    o,
    n,
    s,
    a,
    f,
    u,
    d,
    g,
    m,
    i
  ];
}
class nl extends V {
  constructor(e) {
    super(), W(this, e, tl, el, P, { data: 10 });
  }
}
const rl = (r, e) => {
  const t = e.connectionCount[r]?.connected ?? 0, n = e.connectionCount[r]?.uploadedFiles ?? 0, o = !Zr(r, e.config), l = An(r, e.config), i = e.integrations[r].length > 0, s = e.navigationLastConnection?.sourceType === r ? e.navigationLastConnection.kind : void 0;
  return {
    sourceType: r,
    connectionsCount: t,
    fileUploadCount: n,
    required: o,
    fileUploadEnabled: l,
    fileUploadOnly: l && !i || r === "Other",
    lastConnectionKind: s,
    clickHandlers: {
      connect: () => {
        e.onConnectClick(r);
      },
      uploadFiles: () => {
        e.onUploadFilesClick(r);
      }
    }
  };
}, ol = (r, e) => {
  const t = new Set(
    r.map(({ sourceType: a }) => a)
  ), o = ["Accounting", "Commerce", "Banking", "Other"].filter((a) => t.has(a)).map(
    (a) => rl(a, e)
  ), l = o.every(
    (a) => !a.required || Ye(a)
  ), i = o.some(
    (a) => Ye(a)
  );
  return { sourceTypes: o, completed: l && i };
};
function il(r) {
  const e = r.slice(), t = e[0].lastConnection.sourceType;
  return e[17] = t, e;
}
function al(r) {
  const e = r.slice(), t = tt(e[4].integrations, e[0].lastConnection.platformKey);
  e[14] = t;
  const n = e[14]?.name ?? e[0].lastConnection.platformKey;
  e[15] = n;
  const o = e[14]?.logo?.square?.image?.src ?? "";
  return e[16] = o, e;
}
function Gt(r, e, t) {
  const n = r.slice();
  return n[18] = e[t], n;
}
function qt(r, e, t) {
  const n = r.slice();
  return n[17] = e[t], n;
}
function ll(r) {
  let e, t;
  return e = new Rn({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function sl(r) {
  let e, t, n, o;
  e = new ot({
    props: {
      $$slots: { default: [cl] },
      $$scope: { ctx: r }
    }
  });
  let l = r[18].data.completed && Jt(r);
  return {
    c() {
      $(e.$$.fragment), t = R(), l && l.c(), n = te();
    },
    m(i, s) {
      T(e, i, s), L(i, t, s), l && l.m(i, s), L(i, n, s), o = !0;
    },
    p(i, s) {
      const a = {};
      s & 8388616 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a), i[18].data.completed ? l ? (l.p(i, s), s & 8 && p(l, 1)) : (l = Jt(i), l.c(), p(l, 1), l.m(n.parentNode, n)) : l && (H(), h(l, 1, 1, () => {
        l = null;
      }), K());
    },
    i(i) {
      o || (p(e.$$.fragment, i), p(l), o = !0);
    },
    o(i) {
      h(e.$$.fragment, i), h(l), o = !1;
    },
    d(i) {
      I(e, i), i && E(t), l && l.d(i), i && E(n);
    }
  };
}
function Yt(r) {
  let e, t;
  return e = new nl({ props: { data: r[17] } }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 8 && (l.data = n[17]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function cl(r) {
  let e, t, n, o, l, i, s;
  t = new Z({
    props: {
      as: "h1",
      variant: "heading-lg",
      dataTestId: "navigation-title",
      text: r[4].config.pageConfiguration.leftPanel.title
    }
  }), o = new Z({
    props: {
      as: "p",
      variant: "body-reg",
      dataTestId: "navigation-body",
      text: r[4].config.pageConfiguration.leftPanel.body
    }
  });
  let a = r[18].data.sourceTypes, f = [];
  for (let d = 0; d < a.length; d += 1)
    f[d] = Yt(qt(r, a, d));
  const u = (d) => h(f[d], 1, 1, () => {
    f[d] = null;
  });
  return {
    c() {
      e = D("div"), $(t.$$.fragment), n = R(), $(o.$$.fragment), l = R(), i = D("div");
      for (let d = 0; d < f.length; d += 1)
        f[d].c();
      c(e, "class", r[8]), c(i, "class", r[7]);
    },
    m(d, g) {
      L(d, e, g), T(t, e, null), C(e, n), T(o, e, null), L(d, l, g), L(d, i, g);
      for (let m = 0; m < f.length; m += 1)
        f[m].m(i, null);
      s = !0;
    },
    p(d, g) {
      if (g & 8) {
        a = d[18].data.sourceTypes;
        let m;
        for (m = 0; m < a.length; m += 1) {
          const k = qt(d, a, m);
          f[m] ? (f[m].p(k, g), p(f[m], 1)) : (f[m] = Yt(k), f[m].c(), p(f[m], 1), f[m].m(i, null));
        }
        for (H(), m = a.length; m < f.length; m += 1)
          u(m);
        K();
      }
    },
    i(d) {
      if (!s) {
        p(t.$$.fragment, d), p(o.$$.fragment, d);
        for (let g = 0; g < a.length; g += 1)
          p(f[g]);
        s = !0;
      }
    },
    o(d) {
      h(t.$$.fragment, d), h(o.$$.fragment, d), f = f.filter(Boolean);
      for (let g = 0; g < f.length; g += 1)
        h(f[g]);
      s = !1;
    },
    d(d) {
      d && E(e), I(t), I(o), d && E(l), d && E(i), $e(f, d);
    }
  };
}
function Jt(r) {
  let e, t;
  return e = new ee({
    props: {
      dataTestId: "complete-button",
      label: "Complete",
      action: { onClick: r[9] }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 2 && (l.action = { onClick: n[9] }), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Xt(r) {
  let e, t, n, o;
  const l = [sl, ll], i = [];
  function s(a, f) {
    return a[18].kind === "fetched" ? 0 : a[18].kind === "fetching" ? 1 : -1;
  }
  return ~(e = s(r)) && (t = i[e] = l[e](r)), {
    c() {
      t && t.c(), n = te();
    },
    m(a, f) {
      ~e && i[e].m(a, f), L(a, n, f), o = !0;
    },
    p(a, f) {
      let u = e;
      e = s(a), e === u ? ~e && i[e].p(a, f) : (t && (H(), h(i[u], 1, 1, () => {
        i[u] = null;
      }), K()), ~e ? (t = i[e], t ? t.p(a, f) : (t = i[e] = l[e](a), t.c()), p(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(a) {
      o || (p(t), o = !0);
    },
    o(a) {
      h(t), o = !1;
    },
    d(a) {
      ~e && i[e].d(a), a && E(n);
    }
  };
}
function Qt(r) {
  let e, t;
  return e = new Si({
    props: {
      $$slots: { default: [gl] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 8388615 && (l.$$scope = { dirty: o, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function fl(r) {
  let e, t, n, o;
  const l = [pl, dl], i = [];
  function s(f, u) {
    return f[0].lastConnection.kind === "success" ? 0 : 1;
  }
  function a(f, u) {
    return u === 1 ? il(f) : f;
  }
  return e = s(r), t = i[e] = l[e](a(r, e)), {
    c() {
      t.c(), n = te();
    },
    m(f, u) {
      i[e].m(f, u), L(f, n, u), o = !0;
    },
    p(f, u) {
      let d = e;
      e = s(f), e === d ? i[e].p(a(f, e), u) : (H(), h(i[d], 1, 1, () => {
        i[d] = null;
      }), K(), t = i[e], t ? t.p(a(f, e), u) : (t = i[e] = l[e](a(f, e)), t.c()), p(t, 1), t.m(n.parentNode, n));
    },
    i(f) {
      o || (p(t), o = !0);
    },
    o(f) {
      h(t), o = !1;
    },
    d(f) {
      i[e].d(f), f && E(n);
    }
  };
}
function ul(r) {
  let e, t;
  return e = new Wa({
    props: {
      sourceType: r[0].lastConnection.sourceType,
      clientName: r[4].config.clientName,
      onClick: r[10]
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 1 && (l.sourceType = n[0].lastConnection.sourceType), o & 4 && (l.onClick = n[10]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function dl(r) {
  let e, t;
  function n() {
    return r[13](r[17]);
  }
  return e = new Ra({
    props: {
      correlationId: r[0].lastConnection.correlationId,
      platformName: r[15],
      logoSrc: r[16],
      onContinueClick: r[12],
      onRetryClick: n
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(o, l) {
      T(e, o, l), t = !0;
    },
    p(o, l) {
      r = o;
      const i = {};
      l & 1 && (i.correlationId = r[0].lastConnection.correlationId), l & 1 && (i.platformName = r[15]), l & 1 && (i.logoSrc = r[16]), l & 4 && (i.onContinueClick = r[12]), l & 3 && (i.onRetryClick = n), e.$set(i);
    },
    i(o) {
      t || (p(e.$$.fragment, o), t = !0);
    },
    o(o) {
      h(e.$$.fragment, o), t = !1;
    },
    d(o) {
      I(e, o);
    }
  };
}
function pl(r) {
  let e, t;
  return e = new Da({
    props: {
      platformName: r[15],
      logoSrc: r[16],
      clientName: r[4].config.clientName,
      onClick: r[11]
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 1 && (l.platformName = n[15]), o & 1 && (l.logoSrc = n[16]), o & 4 && (l.onClick = n[11]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function gl(r) {
  let e, t, n, o;
  const l = [ul, fl], i = [];
  function s(f, u) {
    return f[0].lastConnection.kind === "files-uploaded" ? 0 : 1;
  }
  function a(f, u) {
    return u === 1 ? al(f) : f;
  }
  return e = s(r), t = i[e] = l[e](a(r, e)), {
    c() {
      t.c(), n = te();
    },
    m(f, u) {
      i[e].m(f, u), L(f, n, u), o = !0;
    },
    p(f, u) {
      let d = e;
      e = s(f), e === d ? i[e].p(a(f, e), u) : (H(), h(i[d], 1, 1, () => {
        i[d] = null;
      }), K(), t = i[e], t ? t.p(a(f, e), u) : (t = i[e] = l[e](a(f, e)), t.c()), p(t, 1), t.m(n.parentNode, n));
    },
    i(f) {
      o || (p(t), o = !0);
    },
    o(f) {
      h(t), o = !1;
    },
    d(f) {
      i[e].d(f), f && E(n);
    }
  };
}
function ml(r) {
  let e, t, n, o = [r[3]], l = [];
  for (let a = 0; a < 1; a += 1)
    l[a] = Xt(Gt(r, o, a));
  const i = (a) => h(l[a], 1, 1, () => {
    l[a] = null;
  });
  let s = r[0].lastConnection && !r[2] && Qt(r);
  return {
    c() {
      e = D("div");
      for (let a = 0; a < 1; a += 1)
        l[a].c();
      t = R(), s && s.c(), c(e, "data-stepkind", "navigation"), c(e, "class", r[6]);
    },
    m(a, f) {
      L(a, e, f);
      for (let u = 0; u < 1; u += 1)
        l[u].m(e, null);
      C(e, t), s && s.m(e, null), n = !0;
    },
    p(a, [f]) {
      if (f & 410) {
        o = [a[3]];
        let u;
        for (u = 0; u < 1; u += 1) {
          const d = Gt(a, o, u);
          l[u] ? (l[u].p(d, f), p(l[u], 1)) : (l[u] = Xt(d), l[u].c(), p(l[u], 1), l[u].m(e, t));
        }
        for (H(), u = 1; u < 1; u += 1)
          i(u);
        K();
      }
      a[0].lastConnection && !a[2] ? s ? (s.p(a, f), f & 5 && p(s, 1)) : (s = Qt(a), s.c(), p(s, 1), s.m(e, null)) : s && (H(), h(s, 1, 1, () => {
        s = null;
      }), K());
    },
    i(a) {
      if (!n) {
        for (let f = 0; f < 1; f += 1)
          p(l[f]);
        p(s), n = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let f = 0; f < 1; f += 1)
        h(l[f]);
      h(s), n = !1;
    },
    d(a) {
      a && E(e), $e(l, a), s && s.d();
    }
  };
}
function hl(r, e, t) {
  let n;
  const o = he();
  let { state: l } = e, { onAction: i } = e, s = !1;
  l.lastConnection && o.sourceTypes.connectionCount.update();
  const a = mn(o.sourceTypes.connectionCount, (_) => Ir(_, (b) => ol(o.sourceTypes.enabled, {
    config: o.config,
    integrations: o.integrations,
    navigationLastConnection: l.lastConnection,
    connectionCount: b,
    onConnectClick: (w) => {
      i({ kind: "source-type-selected", sourceType: w });
    },
    onUploadFilesClick: (w) => {
      i({ kind: "file-upload", sourceType: w });
    }
  })));
  hn(r, a, (_) => t(3, n = _));
  const f = F({
    display: "flex",
    flexDirection: "column",
    gap: "48px",
    height: "100%"
  }), u = F({
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }), d = F({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "24px"
  }), g = () => {
    i({ kind: "complete" });
  }, m = () => {
    t(2, s = !0);
  }, k = () => {
    t(2, s = !0);
  }, y = () => {
    t(2, s = !0);
  }, v = (_) => {
    i({ kind: "source-type-selected", sourceType: _ });
  };
  return r.$$set = (_) => {
    "state" in _ && t(0, l = _.state), "onAction" in _ && t(1, i = _.onAction);
  }, [
    l,
    i,
    s,
    n,
    o,
    a,
    f,
    u,
    d,
    g,
    m,
    k,
    y,
    v
  ];
}
class bl extends V {
  constructor(e) {
    super(), W(this, e, hl, ml, P, { state: 0, onAction: 1 });
  }
}
const Cl = (r, e, t) => {
  switch (e.kind) {
    case "complete":
      return t.callbacks.onFinish(), {
        kind: "navigation"
      };
    case "file-upload":
      return {
        kind: "file-upload",
        sourceType: e.sourceType,
        goBackTo: "navigation"
      };
    case "source-type-selected":
      return {
        kind: "platform-select",
        sourceType: e.sourceType
      };
  }
};
function _l(r) {
  let e, t, n, o, l, i, s, a, f, u;
  return o = new Lo({}), s = new Z({
    props: {
      as: "h3",
      color: "negativeDark",
      text: kl,
      variant: "heading-reg"
    }
  }), f = new Z({
    props: {
      as: "p",
      color: "negativeDark",
      text: yl,
      variant: "body-sm"
    }
  }), {
    c() {
      e = R(), t = D("span"), n = D("div"), $(o.$$.fragment), l = R(), i = D("div"), $(s.$$.fragment), a = R(), $(f.$$.fragment), c(n, "class", r[1]), c(t, "class", r[0]), c(t, "data-testid", "linked-warning");
    },
    m(d, g) {
      L(d, e, g), L(d, t, g), C(t, n), T(o, n, null), C(t, l), C(t, i), T(s, i, null), C(i, a), T(f, i, null), u = !0;
    },
    p: j,
    i(d) {
      u || (p(o.$$.fragment, d), p(s.$$.fragment, d), p(f.$$.fragment, d), u = !0);
    },
    o(d) {
      h(o.$$.fragment, d), h(s.$$.fragment, d), h(f.$$.fragment, d), u = !1;
    },
    d(d) {
      d && E(e), d && E(t), I(o), I(s), I(f);
    }
  };
}
const kl = "You\u2019ve already linked an accounting platform", yl = "By proceeding, you\u2019ll replace this connection.";
function vl(r) {
  const e = F({
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "12px",
    userSelect: "none",
    backgroundColor: x(ne[10]),
    borderColor: x(ne[20]),
    color: x(ne.dark),
    display: "grid",
    gridTemplateColumns: "28px auto"
  }), t = F({ padding: "2px" });
  return [e, t];
}
class wl extends V {
  constructor(e) {
    super(), W(this, e, vl, _l, P, {});
  }
}
function en(r, e, t) {
  const n = r.slice();
  return n[9] = e[t].key, n[10] = e[t].name, n[11] = e[t].logo, n[12] = e[t].logoUrl, n;
}
function tn(r) {
  let e, t;
  return e = new Fn({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function nn(r) {
  let e, t, n, o, l, i, s, a, f, u, d;
  l = new Z({
    props: {
      as: "span",
      variant: "body-md",
      text: r[10]
    }
  });
  let g = r[9] === r[0] && tn();
  function m() {
    return r[7](r[9]);
  }
  return {
    c() {
      e = D("button"), t = D("img"), o = R(), $(l.$$.fragment), i = R(), g && g.c(), s = R(), re(t.src, n = r[11]?.square.image.src ?? r[12]) || c(t, "src", n), c(t, "alt", ""), c(t, "class", r[4]), c(e, "class", r[3]), c(e, "data-testid", "integration-item"), c(e, "data-selected", a = r[9] === r[0]), c(e, "tabindex", "-1");
    },
    m(k, y) {
      L(k, e, y), C(e, t), C(e, o), T(l, e, null), C(e, i), g && g.m(e, null), C(e, s), f = !0, u || (d = [
        pn(r[5].call(null, e)),
        se(e, "click", m)
      ], u = !0);
    },
    p(k, y) {
      r = k, (!f || y & 2 && !re(t.src, n = r[11]?.square.image.src ?? r[12])) && c(t, "src", n);
      const v = {};
      y & 2 && (v.text = r[10]), l.$set(v), r[9] === r[0] ? g ? y & 3 && p(g, 1) : (g = tn(), g.c(), p(g, 1), g.m(e, s)) : g && (H(), h(g, 1, 1, () => {
        g = null;
      }), K()), (!f || y & 3 && a !== (a = r[9] === r[0])) && c(e, "data-selected", a);
    },
    i(k) {
      f || (p(l.$$.fragment, k), p(g), f = !0);
    },
    o(k) {
      h(l.$$.fragment, k), h(g), f = !1;
    },
    d(k) {
      k && E(e), I(l), g && g.d(), u = !1, sn(d);
    }
  };
}
function $l(r) {
  let e, t, n, o, l = r[1], i = [];
  for (let a = 0; a < l.length; a += 1)
    i[a] = nn(en(r, l, a));
  const s = (a) => h(i[a], 1, 1, () => {
    i[a] = null;
  });
  return {
    c() {
      e = D("div");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      c(e, "class", r[2]), c(e, "tabindex", "0"), c(e, "role", "listbox");
    },
    m(a, f) {
      L(a, e, f);
      for (let u = 0; u < i.length; u += 1)
        i[u].m(e, null);
      t = !0, n || (o = se(e, "keydown", r[6]), n = !0);
    },
    p(a, f) {
      if (f & 27) {
        l = a[1];
        let u;
        for (u = 0; u < l.length; u += 1) {
          const d = en(a, l, u);
          i[u] ? (i[u].p(d, f), p(i[u], 1)) : (i[u] = nn(d), i[u].c(), p(i[u], 1), i[u].m(e, null));
        }
        for (H(), u = l.length; u < i.length; u += 1)
          s(u);
        K();
      }
    },
    i(a) {
      if (!t) {
        for (let f = 0; f < l.length; f += 1)
          p(i[f]);
        t = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let f = 0; f < i.length; f += 1)
        h(i[f]);
      t = !1;
    },
    d(a) {
      a && E(e), $e(i, a), n = !1, o();
    }
  };
}
function Tl(r) {
  let e, t;
  return e = new ot({
    props: {
      $$slots: { default: [$l] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, [o]) {
      const l = {};
      o & 32771 && (l.$$scope = { dirty: o, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Il(r, e, t) {
  let { selectedPlatformKey: n = void 0 } = e, { integrations: o } = e;
  const l = F({
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    padding: "8px",
    overflow: "hidden",
    "&:focus-visible": {
      outlineColor: x(X.base),
      outlineOffset: "-2px"
    }
  }), i = F({
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    borderRadius: "6px",
    columnGap: "16px",
    alignItems: "center",
    justifyItems: "start",
    padding: "8px",
    paddingRight: "16px",
    cursor: "pointer",
    textAlign: "left",
    "&[data-selected='true']": {
      backgroundColor: x(G[5]),
      borderColor: x(G[20]),
      color: x(X.base),
      span: { color: "inherit" }
    },
    "&:focus-visible": {
      outline: "10px",
      outlineColor: x(X[20]),
      outlineStyle: "solid"
    }
  }), s = F({
    height: "40px",
    width: "40px",
    borderRadius: "4px",
    objectFit: "scale-down"
  });
  let a = [];
  const f = (g) => (a.push(g), {
    destroy() {
      a = a.filter((m) => m !== g);
    }
  }), u = (g) => {
    if (g.key === "ArrowDown" || g.key === "ArrowUp") {
      g.preventDefault();
      const m = a.findIndex((k) => k === document.activeElement);
      if (g.key === "ArrowDown") {
        const k = m === a.length - 1 ? 0 : m + 1;
        a[k].focus();
      } else if (g.key === "ArrowUp") {
        const k = m === 0 || m === -1 ? a.length - 1 : m - 1;
        a[k].focus();
      }
    }
  }, d = (g) => {
    n !== g ? t(0, n = g) : t(0, n = void 0);
  };
  return r.$$set = (g) => {
    "selectedPlatformKey" in g && t(0, n = g.selectedPlatformKey), "integrations" in g && t(1, o = g.integrations);
  }, [
    n,
    o,
    l,
    i,
    s,
    f,
    u,
    d
  ];
}
class Sl extends V {
  constructor(e) {
    super(), W(this, e, Il, Tl, P, { selectedPlatformKey: 0, integrations: 1 });
  }
}
const Al = (r, e) => e.filter((t) => {
  const n = (o) => o.toLowerCase().includes(r.toLowerCase());
  return n(t.name) || t.alternativeNames.some((o) => n(o));
});
function rn(r) {
  let e, t;
  return e = new wl({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function xl(r) {
  let e, t;
  return e = new zi({
    props: {
      title: r[6],
      description: r[2].length > 0 ? "Try a different search term" : void 0,
      callToAction: r[2].length > 0 ? {
        text: "Clear search",
        onClick: r[20]
      } : void 0
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 64 && (l.title = n[6]), o & 4 && (l.description = n[2].length > 0 ? "Try a different search term" : void 0), o & 6 && (l.callToAction = n[2].length > 0 ? {
        text: "Clear search",
        onClick: n[20]
      } : void 0), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Bl(r) {
  let e, t, n, o;
  function l(s) {
    r[19](s);
  }
  let i = {
    integrations: r[9]
  };
  return r[4] !== void 0 && (i.selectedPlatformKey = r[4]), t = new Sl({ props: i }), ke.push(() => Te(t, "selectedPlatformKey", l)), {
    c() {
      e = D("div"), $(t.$$.fragment), c(e, "class", r[16]);
    },
    m(s, a) {
      L(s, e, a), T(t, e, null), o = !0;
    },
    p(s, a) {
      const f = {};
      a & 512 && (f.integrations = s[9]), !n && a & 16 && (n = !0, f.selectedPlatformKey = s[4], Ie(() => n = !1)), t.$set(f);
    },
    i(s) {
      o || (p(t.$$.fragment, s), o = !0);
    },
    o(s) {
      h(t.$$.fragment, s), o = !1;
    },
    d(s) {
      s && E(e), I(t);
    }
  };
}
function on(r) {
  let e, t;
  return e = new ee({
    props: {
      label: r[7],
      icon: { component: qo, display: "left" },
      variant: "secondary",
      action: { onClick: r[21] },
      dataTestId: "file-upload-button"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p(n, o) {
      const l = {};
      o & 128 && (l.label = n[7]), o & 1 && (l.action = { onClick: n[21] }), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Fl(r) {
  let e, t, n, o, l, i, s, a, f, u, d, g, m, k, y;
  t = new Z({
    props: {
      as: "h2",
      variant: "heading-lg",
      text: r[8],
      dataTestId: "platform-select-title",
      color: "interface-dark"
    }
  });
  let v = r[10] && rn();
  function _(B) {
    r[18](B);
  }
  let b = { placeholder: r[5] };
  r[1] !== void 0 && (b.value = r[1]), l = new Ei({ props: b }), ke.push(() => Te(l, "value", _));
  const w = [Bl, xl], U = [];
  function S(B, N) {
    return B[9].length ? 0 : 1;
  }
  a = S(r), f = U[a] = w[a](r);
  let A = r[3] && on(r);
  return m = new ee({
    props: {
      label: "Next",
      action: { onClick: r[22] },
      disabled: !r[4],
      dataTestId: "next-button"
    }
  }), {
    c() {
      e = D("div"), $(t.$$.fragment), n = R(), v && v.c(), o = R(), $(l.$$.fragment), s = R(), f.c(), u = R(), d = D("div"), A && A.c(), g = R(), $(m.$$.fragment), c(d, "class", r[15]), c(e, "class", k = ue([
        r[12],
        r[10] ? r[13] : r[14]
      ])), c(e, "data-stepkind", "platform-select");
    },
    m(B, N) {
      L(B, e, N), T(t, e, null), C(e, n), v && v.m(e, null), C(e, o), T(l, e, null), C(e, s), U[a].m(e, null), C(e, u), C(e, d), A && A.m(d, null), C(d, g), T(m, d, null), y = !0;
    },
    p(B, [N]) {
      const J = {};
      N & 256 && (J.text = B[8]), t.$set(J), B[10] ? v ? N & 1024 && p(v, 1) : (v = rn(), v.c(), p(v, 1), v.m(e, o)) : v && (H(), h(v, 1, 1, () => {
        v = null;
      }), K());
      const O = {};
      N & 32 && (O.placeholder = B[5]), !i && N & 2 && (i = !0, O.value = B[1], Ie(() => i = !1)), l.$set(O);
      let q = a;
      a = S(B), a === q ? U[a].p(B, N) : (H(), h(U[q], 1, 1, () => {
        U[q] = null;
      }), K(), f = U[a], f ? f.p(B, N) : (f = U[a] = w[a](B), f.c()), p(f, 1), f.m(e, u)), B[3] ? A ? (A.p(B, N), N & 8 && p(A, 1)) : (A = on(B), A.c(), p(A, 1), A.m(d, g)) : A && (H(), h(A, 1, 1, () => {
        A = null;
      }), K());
      const de = {};
      N & 17 && (de.action = { onClick: B[22] }), N & 16 && (de.disabled = !B[4]), m.$set(de), (!y || N & 1024 && k !== (k = ue([
        B[12],
        B[10] ? B[13] : B[14]
      ]))) && c(e, "class", k);
    },
    i(B) {
      y || (p(t.$$.fragment, B), p(v), p(l.$$.fragment, B), p(f), p(A), p(m.$$.fragment, B), y = !0);
    },
    o(B) {
      h(t.$$.fragment, B), h(v), h(l.$$.fragment, B), h(f), h(A), h(m.$$.fragment, B), y = !1;
    },
    d(B) {
      B && E(e), I(t), v && v.d(), I(l), U[a].d(), A && A.d(), I(m);
    }
  };
}
function Dl(r, e, t) {
  let n, o, l, i, s, a, f, u, { state: d } = e, { onAction: g } = e, m, k = "";
  const y = he(), v = mn(y.sourceTypes.connectionCount, (q) => {
    var de;
    return d.sourceType == "Accounting" && q.kind == "fetched" && ((de = q.data.Accounting) === null || de === void 0 ? void 0 : de.connected) && q.data.Accounting.connected > 0;
  });
  hn(r, v, (q) => t(10, u = q));
  const _ = F({
    display: "grid",
    rowGap: "16px",
    height: "100%"
  }), b = F({
    gridTemplateRows: "auto auto auto 1fr auto"
  }), w = F({ gridTemplateRows: "auto auto 1fr auto" }), U = F({
    display: "flex",
    flexDirection: "column",
    rowGap: "16px"
  }), S = F({
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: x(G[30]),
    borderRadius: "8px",
    overflow: "hidden"
  });
  function A(q) {
    k = q, t(1, k);
  }
  function B(q) {
    m = q, t(4, m);
  }
  const N = () => {
    t(1, k = "");
  }, J = () => {
    g({
      kind: "file-upload",
      goBackTo: "platform-select"
    });
  }, O = () => {
    m && g({
      kind: "next",
      platformKey: m
    });
  };
  return r.$$set = (q) => {
    "state" in q && t(17, d = q.state), "onAction" in q && t(0, g = q.onAction);
  }, r.$$.update = () => {
    r.$$.dirty & 131072 && t(2, n = y.integrations[d.sourceType]), r.$$.dirty & 6 && t(9, o = Al(k, n)), r.$$.dirty & 131072 && t(8, l = (() => {
      switch (d.sourceType) {
        case "Accounting":
          return "Select your accounting software";
        case "Banking":
          return "Connect your bank account";
        case "Commerce":
          return "Select your commerce software";
        case "Other":
          return "Select your business documents";
      }
    })()), r.$$.dirty & 131072 && t(7, i = `Or upload your ${Sn(d.sourceType)}`), r.$$.dirty & 131072 && t(3, s = An(d.sourceType, y.config)), r.$$.dirty & 131072 && t(6, a = (() => {
      switch (d.sourceType) {
        case "Banking":
          return "No banking platform found";
        default:
          return `No ${_t(d.sourceType)} found`;
      }
    })()), r.$$.dirty & 131072 && t(5, f = `Search ${_t(d.sourceType)}`), r.$$.dirty & 13 && s && n.length === 0 && g({
      kind: "file-upload",
      goBackTo: "navigation"
    });
  }, [
    g,
    k,
    n,
    s,
    m,
    f,
    a,
    i,
    l,
    o,
    u,
    v,
    _,
    b,
    w,
    U,
    S,
    d,
    A,
    B,
    N,
    J,
    O
  ];
}
class Ll extends V {
  constructor(e) {
    super(), W(this, e, Dl, Fl, P, { state: 17, onAction: 0 });
  }
}
const El = (r, e) => {
  switch (e.kind) {
    case "next":
      return {
        kind: "consent",
        sourceType: r.sourceType,
        platformKey: e.platformKey
      };
    case "file-upload":
      return {
        kind: "file-upload",
        sourceType: r.sourceType,
        goBackTo: e.goBackTo
      };
    case "back":
      return {
        kind: "navigation"
      };
  }
}, Rl = {
  "landing-page": {
    reducer: Aa,
    component: Sa
  },
  "platform-select": {
    reducer: El,
    component: Ll
  },
  consent: {
    reducer: da,
    component: ua
  },
  connect: {
    reducer: qi,
    component: Gi
  },
  "file-upload": {
    reducer: $a,
    component: wa
  },
  navigation: {
    reducer: Cl,
    component: bl
  }
};
function Ml(r) {
  let e;
  return {
    c() {
      e = D("div");
    },
    m(t, n) {
      L(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && E(e);
    }
  };
}
function Ul(r) {
  let e, t;
  return e = new ee({
    props: {
      icon: {
        component: To,
        display: "left"
      },
      variant: "tertiary",
      color: "interface",
      label: "Back",
      dataTestId: "back-button",
      action: { onClick: r[7] },
      size: "small"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function jl(r) {
  let e, t;
  return e = new xi({}), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Nl(r) {
  let e, t, n, o, l, i, s, a, f, u, d;
  const g = [Ul, Ml], m = [];
  function k(b, w) {
    return Vi[b[0].kind] ? 0 : 1;
  }
  n = k(r), o = m[n] = g[n](r), i = new ee({
    props: {
      icon: {
        component: jo,
        display: "hide-label"
      },
      variant: "tertiary",
      color: "interface",
      label: "Close",
      dataTestId: "close-button",
      action: { onClick: r[8] },
      size: "small"
    }
  });
  var y = r[1].component;
  function v(b) {
    return {
      props: {
        onAction: b[2],
        state: b[0]
      }
    };
  }
  y && (a = oe(y, v(r)));
  let _ = r[3].config.showPoweredByCodat && jl();
  return {
    c() {
      e = D("div"), t = D("div"), o.c(), l = R(), $(i.$$.fragment), s = R(), a && $(a.$$.fragment), f = R(), u = D("footer"), _ && _.c(), c(t, "class", r[5]), c(u, "class", r[6]), c(e, "class", r[4]);
    },
    m(b, w) {
      L(b, e, w), C(e, t), m[n].m(t, null), C(t, l), T(i, t, null), C(e, s), a && T(a, e, null), C(e, f), C(e, u), _ && _.m(u, null), d = !0;
    },
    p(b, [w]) {
      let U = n;
      n = k(b), n === U ? m[n].p(b, w) : (H(), h(m[U], 1, 1, () => {
        m[U] = null;
      }), K(), o = m[n], o ? o.p(b, w) : (o = m[n] = g[n](b), o.c()), p(o, 1), o.m(t, l));
      const S = {};
      if (w & 1 && (S.state = b[0]), y !== (y = b[1].component)) {
        if (a) {
          H();
          const A = a;
          h(A.$$.fragment, 1, 0, () => {
            I(A, 1);
          }), K();
        }
        y ? (a = oe(y, v(b)), $(a.$$.fragment), p(a.$$.fragment, 1), T(a, e, f)) : a = null;
      } else
        y && a.$set(S);
    },
    i(b) {
      d || (p(o), p(i.$$.fragment, b), a && p(a.$$.fragment, b), p(_), d = !0);
    },
    o(b) {
      h(o), h(i.$$.fragment, b), a && h(a.$$.fragment, b), h(_), d = !1;
    },
    d(b) {
      b && E(e), m[n].d(), I(i), a && I(a), _ && _.d();
    }
  };
}
function Ol(r, e, t) {
  let n, { currentState: o } = e;
  const l = (g) => {
    t(0, o = n.reducer(o, g, i));
  }, i = he(), s = F({
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    height: "100%",
    rowGap: "12px"
  }), a = F({
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-10px",
    width: "calc(100% + 20px)"
  }), f = F({
    display: "flex",
    justifyContent: "center"
  }), u = () => {
    l({ kind: "back" });
  }, d = () => {
    i.callbacks.onClose();
  };
  return r.$$set = (g) => {
    "currentState" in g && t(0, o = g.currentState);
  }, r.$$.update = () => {
    r.$$.dirty & 1 && t(1, n = Rl[o.kind]);
  }, [
    o,
    n,
    l,
    i,
    s,
    a,
    f,
    u,
    d
  ];
}
class zl extends V {
  constructor(e) {
    super(), W(this, e, Ol, Nl, P, { currentState: 0 });
  }
}
function Pl(r) {
  let e, t, n, o;
  function l(s) {
    r[8](s);
  }
  let i = {};
  return r[0] !== void 0 && (i.currentState = r[0]), t = new zl({ props: i }), ke.push(() => Te(t, "currentState", l)), {
    c() {
      e = D("div"), $(t.$$.fragment), c(e, "class", r[1]);
    },
    m(s, a) {
      L(s, e, a), T(t, e, null), o = !0;
    },
    p(s, [a]) {
      const f = {};
      !n && a & 1 && (n = !0, f.currentState = s[0], Ie(() => n = !1)), t.$set(f);
    },
    i(s) {
      o || (p(t.$$.fragment, s), o = !0);
    },
    o(s) {
      h(t.$$.fragment, s), o = !1;
    },
    d(s) {
      s && E(e), I(t);
    }
  };
}
function Vl(r, e, t) {
  var n;
  let { config: o } = e, { enabledSourceTypes: l } = e, { callbacks: i } = e, { linkApiService: s } = e, { companyId: a } = e, { currentState: f } = e, { integrations: u } = e;
  const d = F(zr((n = o.colors) === null || n === void 0 ? void 0 : n.primary));
  Pi({
    config: o,
    sourceTypes: {
      enabled: l,
      connectionCount: gr(() => s.getConnectionCount())
    },
    callbacks: i,
    linkApiService: s,
    companyId: a,
    integrations: u
  });
  function g(m) {
    f = m, t(0, f);
  }
  return r.$$set = (m) => {
    "config" in m && t(2, o = m.config), "enabledSourceTypes" in m && t(3, l = m.enabledSourceTypes), "callbacks" in m && t(4, i = m.callbacks), "linkApiService" in m && t(5, s = m.linkApiService), "companyId" in m && t(6, a = m.companyId), "currentState" in m && t(0, f = m.currentState), "integrations" in m && t(7, u = m.integrations);
  }, [
    f,
    d,
    o,
    l,
    i,
    s,
    a,
    u,
    g
  ];
}
class Wl extends V {
  constructor(e) {
    super(), W(this, e, Vl, Pl, P, {
      config: 2,
      enabledSourceTypes: 3,
      callbacks: 4,
      linkApiService: 5,
      companyId: 6,
      currentState: 0,
      integrations: 7
    });
  }
}
const Hl = (r) => r === "https://auth.codat.io" || r === "https://auth-integration.codat.io" || r === "https://auth-local.codat.io";
function an(r) {
  r[10] = r[16][0], r[11] = r[16][1], r[12] = r[16][2], r[13] = r[16][3], r[14] = r[16][4], r[15] = r[16][5];
}
function Kl(r) {
  let e, t;
  return e = new Xo({ props: { error: r[17] } }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, o) {
      T(e, n, o), t = !0;
    },
    p: j,
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h(e.$$.fragment, n), t = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function Zl(r) {
  an(r);
  let e, t, n;
  function o(i) {
    r[8](i);
  }
  let l = {
    linkApiService: r[3],
    config: r[10],
    enabledSourceTypes: r[11],
    callbacks: r[2],
    companyId: r[1],
    integrations: {
      Accounting: r[12],
      Commerce: r[13],
      Banking: r[14],
      Other: r[15]
    }
  };
  return r[0] !== void 0 && (l.currentState = r[0]), e = new Wl({ props: l }), ke.push(() => Te(e, "currentState", o)), {
    c() {
      $(e.$$.fragment);
    },
    m(i, s) {
      T(e, i, s), n = !0;
    },
    p(i, s) {
      an(i);
      const a = {};
      s & 4 && (a.callbacks = i[2]), s & 2 && (a.companyId = i[1]), !t && s & 1 && (t = !0, a.currentState = i[0], Ie(() => t = !1)), e.$set(a);
    },
    i(i) {
      n || (p(e.$$.fragment, i), n = !0);
    },
    o(i) {
      h(e.$$.fragment, i), n = !1;
    },
    d(i) {
      I(e, i);
    }
  };
}
function Gl(r) {
  let e, t, n;
  return t = new Rn({}), {
    c() {
      e = D("div"), $(t.$$.fragment), c(e, "class", r[6]);
    },
    m(o, l) {
      L(o, e, l), T(t, e, null), n = !0;
    },
    p: j,
    i(o) {
      n || (p(t.$$.fragment, o), n = !0);
    },
    o(o) {
      h(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && E(e), I(t);
    }
  };
}
function ql(r) {
  let e, t, n = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Gl,
    then: Zl,
    catch: Kl,
    value: 16,
    error: 17,
    blocks: [, , ,]
  };
  return Gn(r[4], n), {
    c() {
      e = D("div"), n.block.c(), c(e, "class", r[5]), c(e, "data-testid", "app-wrapper");
    },
    m(o, l) {
      L(o, e, l), n.block.m(e, n.anchor = null), n.mount = () => e, n.anchor = null, t = !0;
    },
    p(o, [l]) {
      r = o, qn(n, r, l);
    },
    i(o) {
      t || (p(n.block), t = !0);
    },
    o(o) {
      for (let l = 0; l < 3; l += 1) {
        const i = n.blocks[l];
        h(i);
      }
      t = !1;
    },
    d(o) {
      o && E(e), n.block.d(), n.token = null, n = null;
    }
  };
}
function Yl(r, e, t) {
  let { baseUrl: n } = e, { companyId: o } = e, { callbacks: l } = e, { currentState: i } = e;
  const s = Hl(window.location.origin) ? "hosted" : "embedded", a = Xr(n, o, l.onError, l.onConnection, s), f = Promise.all([
    a.getCompanyConfig(),
    a.getSourceTypes(),
    a.getIntegrations("Accounting"),
    a.getIntegrations("Commerce"),
    a.getIntegrations("Banking"),
    a.getIntegrations("Other")
  ]), u = F({
    height: "100%",
    borderRadius: "16px",
    padding: "24px 32px",
    backgroundColor: x(_e.light),
    boxShadow: "0 4px 6px #6f749a14,0 1px 11px #6f749a14,0 2px 6px #6f749a14;",
    position: "relative",
    "--color-ui-primary": $n.base,
    "--color-ui-negative": Tn.base,
    "--color-ui-light": "white"
  }), d = F({ display: "flex", height: "100%" });
  function g(m) {
    i = m, t(0, i);
  }
  return r.$$set = (m) => {
    "baseUrl" in m && t(7, n = m.baseUrl), "companyId" in m && t(1, o = m.companyId), "callbacks" in m && t(2, l = m.callbacks), "currentState" in m && t(0, i = m.currentState);
  }, [
    i,
    o,
    l,
    a,
    f,
    u,
    d,
    n,
    g
  ];
}
class Jl extends V {
  constructor(e) {
    super(), W(this, e, Yl, ql, P, {
      baseUrl: 7,
      companyId: 1,
      callbacks: 2,
      currentState: 0
    });
  }
}
const ve = (r, e, t) => {
  const n = typeof r;
  if (n !== t)
    throw new TypeError(
      `CodatLink property ${e} must be a ${t}. Received: ${r} with type ${n}`
    );
}, Xl = (r) => M.string().uuid().safeParse(r).success, Ql = (r, e, t, n, o) => {
  ve(t, "onError", "function");
  try {
    if (ve(r, "companyId", "string"), ve(e, "onConnection", "function"), ve(n, "onClose", "function"), ve(o, "onFinish", "function"), !Xl(r))
      throw new Error(
        `CodatLink property companyId must be a GUID. Received: "${r}"`
      );
  } catch (l) {
    throw t({
      message: l.message,
      userRecoverable: !1
    }), l;
  }
};
function es(r) {
  let e, t, n;
  function o(i) {
    r[7](i);
  }
  let l = {
    baseUrl: r[5],
    companyId: r[0],
    callbacks: {
      onClose: r[1],
      onError: r[2],
      onConnection: r[3],
      onFinish: r[4]
    }
  };
  return r[6] !== void 0 && (l.currentState = r[6]), e = new Jl({ props: l }), ke.push(() => Te(e, "currentState", o)), {
    c() {
      $(e.$$.fragment);
    },
    m(i, s) {
      T(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = {};
      s & 32 && (a.baseUrl = i[5]), s & 1 && (a.companyId = i[0]), s & 30 && (a.callbacks = {
        onClose: i[1],
        onError: i[2],
        onConnection: i[3],
        onFinish: i[4]
      }), !t && s & 64 && (t = !0, a.currentState = i[6], Ie(() => t = !1)), e.$set(a);
    },
    i(i) {
      n || (p(e.$$.fragment, i), n = !0);
    },
    o(i) {
      h(e.$$.fragment, i), n = !1;
    },
    d(i) {
      I(e, i);
    }
  };
}
function ts(r, e, t) {
  let { companyId: n } = e, { onClose: o = () => {
  } } = e, { onError: l = () => {
  } } = e, { onConnection: i = () => {
  } } = e, { onFinish: s = () => {
  } } = e;
  Ql(n, i, l, o, s);
  let { baseUrl: a = "https://link-api.codat.io" } = e, f = { kind: "landing-page" };
  function u(d) {
    f = d, t(6, f);
  }
  return r.$$set = (d) => {
    "companyId" in d && t(0, n = d.companyId), "onClose" in d && t(1, o = d.onClose), "onError" in d && t(2, l = d.onError), "onConnection" in d && t(3, i = d.onConnection), "onFinish" in d && t(4, s = d.onFinish), "baseUrl" in d && t(5, a = d.baseUrl);
  }, [
    n,
    o,
    l,
    i,
    s,
    a,
    f,
    u
  ];
}
class ms extends V {
  constructor(e) {
    super(), W(this, e, ts, es, P, {
      companyId: 0,
      onClose: 1,
      onError: 2,
      onConnection: 3,
      onFinish: 4,
      baseUrl: 5
    });
  }
}
export {
  _n as D,
  Xn as K,
  ms as L,
  os as M,
  Cn as R,
  as as W,
  fs as a,
  ds as b,
  cs as c,
  gs as d,
  us as e,
  pe as f,
  ge as g,
  ls as h,
  tr as i,
  is as j,
  ss as k,
  ir as l,
  ps as m,
  or as n,
  ce as o,
  Je as p,
  me as q,
  Ke as r,
  bt as s,
  Ze as t,
  Pe as u,
  Ue as v,
  ie as w,
  Jl as x
};
