/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function() {
   "use strict";
   function t(t, e) {
       return e = {
           exports: {}
       },
       t(e, e.exports),
       e.exports
   }
   window.tram = function(t) {
       function e(t, e) {
           return (new B.Bare).init(t, e)
       }
       function n(t) {
           return t.replace(/[A-Z]/g, function(t) {
               return "-" + t.toLowerCase()
           })
       }
       function i(t) {
           var e = parseInt(t.slice(1), 16);
           return [e >> 16 & 255, e >> 8 & 255, 255 & e]
       }
       function r(t, e, n) {
           return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
       }
       function o() {}
       function a(t, e) {
           c("Type warning: Expected: [" + t + "] Got: [" + typeof e + "] " + e)
       }
       function s(t, e, n) {
           c("Units do not match [" + t + "]: " + e + ", " + n)
       }
       function u(t, e, n) {
           if (void 0 !== e && (n = e),
           void 0 === t)
               return n;
           var i = n;
           return V.test(t) || !K.test(t) ? i = parseInt(t, 10) : K.test(t) && (i = 1e3 * parseFloat(t)),
           0 > i && (i = 0),
           i === i ? i : n
       }
       function c(t) {
           U.debug && window && window.console.warn(t)
       }
       function l(t) {
           for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
               var r = t[e];
               r && i.push(r)
           }
           return i
       }
       var f = function(t, e, n) {
           function i(t) {
               return "object" == typeof t
           }
           function r(t) {
               return "function" == typeof t
           }
           function o() {}
           function a(s, u) {
               function c() {
                   var t = new l;
                   return r(t.init) && t.init.apply(t, arguments),
                   t
               }
               function l() {}
               u === n && (u = s,
               s = Object),
               c.Bare = l;
               var f, h = o[t] = s[t], d = l[t] = c[t] = new o;
               return d.constructor = c,
               c.mixin = function(e) {
                   return l[t] = c[t] = a(c, e)[t],
                   c
               }
               ,
               c.open = function(t) {
                   if (f = {},
                   r(t) ? f = t.call(c, d, h, c, s) : i(t) && (f = t),
                   i(f))
                       for (var n in f)
                           e.call(f, n) && (d[n] = f[n]);
                   return r(d.init) || (d.init = s),
                   c
               }
               ,
               c.open(u)
           }
           return a
       }("prototype", {}.hasOwnProperty)
         , h = {
           ease: ["ease", function(t, e, n, i) {
               var r = (t /= i) * t
                 , o = r * t;
               return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
           }
           ],
           "ease-in": ["ease-in", function(t, e, n, i) {
               var r = (t /= i) * t
                 , o = r * t;
               return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
           }
           ],
           "ease-out": ["ease-out", function(t, e, n, i) {
               var r = (t /= i) * t
                 , o = r * t;
               return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
           }
           ],
           "ease-in-out": ["ease-in-out", function(t, e, n, i) {
               var r = (t /= i) * t
                 , o = r * t;
               return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
           }
           ],
           linear: ["linear", function(t, e, n, i) {
               return n * t / i + e
           }
           ],
           "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, i) {
               return n * (t /= i) * t + e
           }
           ],
           "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, i) {
               return -n * (t /= i) * (t - 2) + e
           }
           ],
           "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, i) {
               return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
           }
           ],
           "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, i) {
               return n * (t /= i) * t * t + e
           }
           ],
           "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, i) {
               return n * ((t = t / i - 1) * t * t + 1) + e
           }
           ],
           "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, i) {
               return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
           }
           ],
           "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, i) {
               return n * (t /= i) * t * t * t + e
           }
           ],
           "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, i) {
               return -n * ((t = t / i - 1) * t * t * t - 1) + e
           }
           ],
           "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, i) {
               return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
           }
           ],
           "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, i) {
               return n * (t /= i) * t * t * t * t + e
           }
           ],
           "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, i) {
               return n * ((t = t / i - 1) * t * t * t * t + 1) + e
           }
           ],
           "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, i) {
               return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
           }
           ],
           "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, i) {
               return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
           }
           ],
           "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, i) {
               return n * Math.sin(t / i * (Math.PI / 2)) + e
           }
           ],
           "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, i) {
               return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
           }
           ],
           "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, i) {
               return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
           }
           ],
           "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, i) {
               return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
           }
           ],
           "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, i) {
               return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
           }
           ],
           "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, i) {
               return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
           }
           ],
           "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, i) {
               return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
           }
           ],
           "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, i) {
               return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
           }
           ],
           "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, i, r) {
               return void 0 === r && (r = 1.70158),
               n * (t /= i) * t * ((r + 1) * t - r) + e
           }
           ],
           "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, i, r) {
               return void 0 === r && (r = 1.70158),
               n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
           }
           ],
           "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, i, r) {
               return void 0 === r && (r = 1.70158),
               (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
           }
           ]
       }
         , d = {
           "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
           "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
           "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
       }
         , p = document
         , v = window
         , m = "bkwld-tram"
         , w = /[\-\.0-9]/g
         , g = /[A-Z]/
         , b = "number"
         , y = /^(rgb|#)/
         , x = /(em|cm|mm|in|pt|pc|px)$/
         , _ = /(em|cm|mm|in|pt|pc|px|%)$/
         , k = /(deg|rad|turn)$/
         , T = "unitless"
         , E = /(all|none) 0s ease 0s/
         , O = /^(width|height)$/
         , j = " "
         , z = p.createElement("a")
         , A = ["Webkit", "Moz", "O", "ms"]
         , q = ["-webkit-", "-moz-", "-o-", "-ms-"]
         , $ = function(t) {
           if (t in z.style)
               return {
                   dom: t,
                   css: t
               };
           var e, n, i = "", r = t.split("-");
           for (e = 0; e < r.length; e++)
               i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
           for (e = 0; e < A.length; e++)
               if ((n = A[e] + i)in z.style)
                   return {
                       dom: n,
                       css: q[e] + t
                   }
       }
         , M = e.support = {
           bind: Function.prototype.bind,
           transform: $("transform"),
           transition: $("transition"),
           backface: $("backface-visibility"),
           timing: $("transition-timing-function")
       };
       if (M.transition) {
           var D = M.timing.dom;
           if (z.style[D] = h["ease-in-back"][0],
           !z.style[D])
               for (var L in d)
                   h[L][0] = d[L]
       }
       var S = e.frame = function() {
           var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
           return t && M.bind ? t.bind(v) : function(t) {
               v.setTimeout(t, 16)
           }
       }()
         , C = e.now = function() {
           var t = v.performance
             , e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
           return e && M.bind ? e.bind(t) : Date.now || function() {
               return +new Date
           }
       }()
         , R = f(function(e) {
           function i(t, e) {
               var n = l(("" + t).split(j))
                 , i = n[0];
               e = e || {};
               var r = Q[i];
               if (!r)
                   return c("Unsupported property: " + i);
               if (!e.weak || !this.props[i]) {
                   var o = r[0]
                     , a = this.props[i];
                   return a || (a = this.props[i] = new o.Bare),
                   a.init(this.$el, n, r, e),
                   a
               }
           }
           function r(t, e, n) {
               if (t) {
                   var r = typeof t;
                   if (e || (this.timer && this.timer.destroy(),
                   this.queue = [],
                   this.active = !1),
                   "number" == r && e)
                       return this.timer = new X({
                           duration: t,
                           context: this,
                           complete: s
                       }),
                       void (this.active = !0);
                   if ("string" == r && e) {
                       switch (t) {
                       case "hide":
                           p.call(this);
                           break;
                       case "stop":
                           f.call(this);
                           break;
                       case "redraw":
                           v.call(this);
                           break;
                       default:
                           i.call(this, t, n && n[1])
                       }
                       return s.call(this)
                   }
                   if ("function" == r)
                       return void t.call(this, this);
                   if ("object" == r) {
                       var o = 0;
                       y.call(this, t, function(t, e) {
                           t.span > o && (o = t.span),
                           t.stop(),
                           t.animate(e)
                       }, function(t) {
                           "wait"in t && (o = u(t.wait, 0))
                       }),
                       b.call(this),
                       o > 0 && (this.timer = new X({
                           duration: o,
                           context: this
                       }),
                       this.active = !0,
                       e && (this.timer.complete = s));
                       var a = this
                         , c = !1
                         , l = {};
                       S(function() {
                           y.call(a, t, function(t) {
                               t.active && (c = !0,
                               l[t.name] = t.nextStyle)
                           }),
                           c && a.$el.css(l)
                       })
                   }
               }
           }
           function o(t) {
               t = u(t, 0),
               this.active ? this.queue.push({
                   options: t
               }) : (this.timer = new X({
                   duration: t,
                   context: this,
                   complete: s
               }),
               this.active = !0)
           }
           function a(t) {
               return this.active ? (this.queue.push({
                   options: t,
                   args: arguments
               }),
               void (this.timer.complete = s)) : c("No active transition timer. Use start() or wait() before then().")
           }
           function s() {
               if (this.timer && this.timer.destroy(),
               this.active = !1,
               this.queue.length) {
                   var t = this.queue.shift();
                   r.call(this, t.options, !0, t.args)
               }
           }
           function f(t) {
               this.timer && this.timer.destroy(),
               this.queue = [],
               this.active = !1;
               var e;
               "string" == typeof t ? (e = {},
               e[t] = 1) : e = "object" == typeof t && null != t ? t : this.props,
               y.call(this, e, x),
               b.call(this)
           }
           function h(t) {
               f.call(this, t),
               y.call(this, t, _, k)
           }
           function d(t) {
               "string" != typeof t && (t = "block"),
               this.el.style.display = t
           }
           function p() {
               f.call(this),
               this.el.style.display = "none"
           }
           function v() {
               this.el.offsetHeight
           }
           function w() {
               f.call(this),
               t.removeData(this.el, m),
               this.$el = this.el = null
           }
           function b() {
               var t, e, n = [];
               this.upstream && n.push(this.upstream);
               for (t in this.props)
                   (e = this.props[t]).active && n.push(e.string);
               n = n.join(","),
               this.style !== n && (this.style = n,
               this.el.style[M.transition.dom] = n)
           }
           function y(t, e, r) {
               var o, a, s, u, c = e !== x, l = {};
               for (o in t)
                   s = t[o],
                   o in J ? (l.transform || (l.transform = {}),
                   l.transform[o] = s) : (g.test(o) && (o = n(o)),
                   o in Q ? l[o] = s : (u || (u = {}),
                   u[o] = s));
               for (o in l) {
                   if (s = l[o],
                   !(a = this.props[o])) {
                       if (!c)
                           continue;
                       a = i.call(this, o)
                   }
                   e.call(this, a, s)
               }
               r && u && r.call(this, u)
           }
           function x(t) {
               t.stop()
           }
           function _(t, e) {
               t.set(e)
           }
           function k(t) {
               this.$el.css(t)
           }
           function T(t, n) {
               e[t] = function() {
                   return this.children ? O.call(this, n, arguments) : (this.el && n.apply(this, arguments),
                   this)
               }
           }
           function O(t, e) {
               var n, i = this.children.length;
               for (n = 0; i > n; n++)
                   t.apply(this.children[n], e);
               return this
           }
           e.init = function(e) {
               if (this.$el = t(e),
               this.el = this.$el[0],
               this.props = {},
               this.queue = [],
               this.style = "",
               this.active = !1,
               U.keepInherited && !U.fallback) {
                   var n = G(this.el, "transition");
                   n && !E.test(n) && (this.upstream = n)
               }
               M.backface && U.hideBackface && Y(this.el, M.backface.css, "hidden")
           }
           ,
           T("add", i),
           T("start", r),
           T("wait", o),
           T("then", a),
           T("next", s),
           T("stop", f),
           T("set", h),
           T("show", d),
           T("hide", p),
           T("redraw", v),
           T("destroy", w)
       })
         , B = f(R, function(e) {
           function n(e, n) {
               var i = t.data(e, m) || t.data(e, m, new R.Bare);
               return i.el || i.init(e),
               n ? i.start(n) : i
           }
           e.init = function(e, i) {
               var r = t(e);
               if (!r.length)
                   return this;
               if (1 === r.length)
                   return n(r[0], i);
               var o = [];
               return r.each(function(t, e) {
                   o.push(n(e, i))
               }),
               this.children = o,
               this
           }
       })
         , F = f(function(t) {
           function e() {
               var t = this.get();
               this.update("auto");
               var e = this.get();
               return this.update(t),
               e
           }
           function n(t, e, n) {
               return void 0 !== e && (n = e),
               t in h ? t : n
           }
           function i(t) {
               var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
               return (e ? r(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
           }
           var o = {
               duration: 500,
               ease: "ease",
               delay: 0
           };
           t.init = function(t, e, i, r) {
               this.$el = t,
               this.el = t[0];
               var a = e[0];
               i[2] && (a = i[2]),
               Z[a] && (a = Z[a]),
               this.name = a,
               this.type = i[1],
               this.duration = u(e[1], this.duration, o.duration),
               this.ease = n(e[2], this.ease, o.ease),
               this.delay = u(e[3], this.delay, o.delay),
               this.span = this.duration + this.delay,
               this.active = !1,
               this.nextStyle = null,
               this.auto = O.test(this.name),
               this.unit = r.unit || this.unit || U.defaultUnit,
               this.angle = r.angle || this.angle || U.defaultAngle,
               U.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition,
               this.string = this.name + j + this.duration + "ms" + ("ease" != this.ease ? j + h[this.ease][0] : "") + (this.delay ? j + this.delay + "ms" : ""))
           }
           ,
           t.set = function(t) {
               t = this.convert(t, this.type),
               this.update(t),
               this.redraw()
           }
           ,
           t.transition = function(t) {
               this.active = !0,
               t = this.convert(t, this.type),
               this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()),
               this.redraw()),
               "auto" == t && (t = e.call(this))),
               this.nextStyle = t
           }
           ,
           t.fallback = function(t) {
               var n = this.el.style[this.name] || this.convert(this.get(), this.type);
               t = this.convert(t, this.type),
               this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)),
               "auto" == t && (t = e.call(this))),
               this.tween = new P({
                   from: n,
                   to: t,
                   duration: this.duration,
                   delay: this.delay,
                   ease: this.ease,
                   update: this.update,
                   context: this
               })
           }
           ,
           t.get = function() {
               return G(this.el, this.name)
           }
           ,
           t.update = function(t) {
               Y(this.el, this.name, t)
           }
           ,
           t.stop = function() {
               (this.active || this.nextStyle) && (this.active = !1,
               this.nextStyle = null,
               Y(this.el, this.name, this.get()));
               var t = this.tween;
               t && t.context && t.destroy()
           }
           ,
           t.convert = function(t, e) {
               if ("auto" == t && this.auto)
                   return t;
               var n, r = "number" == typeof t, o = "string" == typeof t;
               switch (e) {
               case b:
                   if (r)
                       return t;
                   if (o && "" === t.replace(w, ""))
                       return +t;
                   n = "number(unitless)";
                   break;
               case y:
                   if (o) {
                       if ("" === t && this.original)
                           return this.original;
                       if (e.test(t))
                           return "#" == t.charAt(0) && 7 == t.length ? t : i(t)
                   }
                   n = "hex or rgb string";
                   break;
               case x:
                   if (r)
                       return t + this.unit;
                   if (o && e.test(t))
                       return t;
                   n = "number(px) or string(unit)";
                   break;
               case _:
                   if (r)
                       return t + this.unit;
                   if (o && e.test(t))
                       return t;
                   n = "number(px) or string(unit or %)";
                   break;
               case k:
                   if (r)
                       return t + this.angle;
                   if (o && e.test(t))
                       return t;
                   n = "number(deg) or string(angle)";
                   break;
               case T:
                   if (r)
                       return t;
                   if (o && _.test(t))
                       return t;
                   n = "number(unitless) or string(unit or %)"
               }
               return a(n, t),
               t
           }
           ,
           t.redraw = function() {
               this.el.offsetHeight
           }
       })
         , I = f(F, function(t, e) {
           t.init = function() {
               e.init.apply(this, arguments),
               this.original || (this.original = this.convert(this.get(), y))
           }
       })
         , N = f(F, function(t, e) {
           t.init = function() {
               e.init.apply(this, arguments),
               this.animate = this.fallback
           }
           ,
           t.get = function() {
               return this.$el[this.name]()
           }
           ,
           t.update = function(t) {
               this.$el[this.name](t)
           }
       })
         , H = f(F, function(t, e) {
           function n(t, e) {
               var n, i, r, o, a;
               for (n in t)
                   o = J[n],
                   r = o[0],
                   i = o[1] || n,
                   a = this.convert(t[n], r),
                   e.call(this, i, a, r)
           }
           t.init = function() {
               e.init.apply(this, arguments),
               this.current || (this.current = {},
               J.perspective && U.perspective && (this.current.perspective = U.perspective,
               Y(this.el, this.name, this.style(this.current)),
               this.redraw()))
           }
           ,
           t.set = function(t) {
               n.call(this, t, function(t, e) {
                   this.current[t] = e
               }),
               Y(this.el, this.name, this.style(this.current)),
               this.redraw()
           }
           ,
           t.transition = function(t) {
               var e = this.values(t);
               this.tween = new W({
                   current: this.current,
                   values: e,
                   duration: this.duration,
                   delay: this.delay,
                   ease: this.ease
               });
               var n, i = {};
               for (n in this.current)
                   i[n] = n in e ? e[n] : this.current[n];
               this.active = !0,
               this.nextStyle = this.style(i)
           }
           ,
           t.fallback = function(t) {
               var e = this.values(t);
               this.tween = new W({
                   current: this.current,
                   values: e,
                   duration: this.duration,
                   delay: this.delay,
                   ease: this.ease,
                   update: this.update,
                   context: this
               })
           }
           ,
           t.update = function() {
               Y(this.el, this.name, this.style(this.current))
           }
           ,
           t.style = function(t) {
               var e, n = "";
               for (e in t)
                   n += e + "(" + t[e] + ") ";
               return n
           }
           ,
           t.values = function(t) {
               var e, i = {};
               return n.call(this, t, function(t, n, r) {
                   i[t] = n,
                   void 0 === this.current[t] && (e = 0,
                   ~t.indexOf("scale") && (e = 1),
                   this.current[t] = this.convert(e, r))
               }),
               i
           }
       })
         , P = f(function(e) {
           function n(t) {
               1 === d.push(t) && S(a)
           }
           function a() {
               var t, e, n, i = d.length;
               if (i)
                   for (S(a),
                   e = C(),
                   t = i; t--; )
                       (n = d[t]) && n.render(e)
           }
           function u(e) {
               var n, i = t.inArray(e, d);
               i >= 0 && (n = d.slice(i + 1),
               d.length = i,
               n.length && (d = d.concat(n)))
           }
           function c(t) {
               return Math.round(t * p) / p
           }
           function l(t, e, n) {
               return r(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
           }
           var f = {
               ease: h.ease[1],
               from: 0,
               to: 1
           };
           e.init = function(t) {
               this.duration = t.duration || 0,
               this.delay = t.delay || 0;
               var e = t.ease || f.ease;
               h[e] && (e = h[e][1]),
               "function" != typeof e && (e = f.ease),
               this.ease = e,
               this.update = t.update || o,
               this.complete = t.complete || o,
               this.context = t.context || this,
               this.name = t.name;
               var n = t.from
                 , i = t.to;
               void 0 === n && (n = f.from),
               void 0 === i && (i = f.to),
               this.unit = t.unit || "",
               "number" == typeof n && "number" == typeof i ? (this.begin = n,
               this.change = i - n) : this.format(i, n),
               this.value = this.begin + this.unit,
               this.start = C(),
               !1 !== t.autoplay && this.play()
           }
           ,
           e.play = function() {
               this.active || (this.start || (this.start = C()),
               this.active = !0,
               n(this))
           }
           ,
           e.stop = function() {
               this.active && (this.active = !1,
               u(this))
           }
           ,
           e.render = function(t) {
               var e, n = t - this.start;
               if (this.delay) {
                   if (n <= this.delay)
                       return;
                   n -= this.delay
               }
               if (n < this.duration) {
                   var i = this.ease(n, 0, 1, this.duration);
                   return e = this.startRGB ? l(this.startRGB, this.endRGB, i) : c(this.begin + i * this.change),
                   this.value = e + this.unit,
                   void this.update.call(this.context, this.value)
               }
               e = this.endHex || this.begin + this.change,
               this.value = e + this.unit,
               this.update.call(this.context, this.value),
               this.complete.call(this.context),
               this.destroy()
           }
           ,
           e.format = function(t, e) {
               if (e += "",
               "#" == (t += "").charAt(0))
                   return this.startRGB = i(e),
                   this.endRGB = i(t),
                   this.endHex = t,
                   this.begin = 0,
                   void (this.change = 1);
               if (!this.unit) {
                   var n = e.replace(w, "");
                   n !== t.replace(w, "") && s("tween", e, t),
                   this.unit = n
               }
               e = parseFloat(e),
               t = parseFloat(t),
               this.begin = this.value = e,
               this.change = t - e
           }
           ,
           e.destroy = function() {
               this.stop(),
               this.context = null,
               this.ease = this.update = this.complete = o
           }
           ;
           var d = []
             , p = 1e3
       })
         , X = f(P, function(t) {
           t.init = function(t) {
               this.duration = t.duration || 0,
               this.complete = t.complete || o,
               this.context = t.context,
               this.play()
           }
           ,
           t.render = function(t) {
               t - this.start < this.duration || (this.complete.call(this.context),
               this.destroy())
           }
       })
         , W = f(P, function(t, e) {
           t.init = function(t) {
               this.context = t.context,
               this.update = t.update,
               this.tweens = [],
               this.current = t.current;
               var e, n;
               for (e in t.values)
                   n = t.values[e],
                   this.current[e] !== n && this.tweens.push(new P({
                       name: e,
                       from: this.current[e],
                       to: n,
                       duration: t.duration,
                       delay: t.delay,
                       ease: t.ease,
                       autoplay: !1
                   }));
               this.play()
           }
           ,
           t.render = function(t) {
               var e, n, i = !1;
               for (e = this.tweens.length; e--; )
                   (n = this.tweens[e]).context && (n.render(t),
                   this.current[n.name] = n.value,
                   i = !0);
               return i ? void (this.update && this.update.call(this.context)) : this.destroy()
           }
           ,
           t.destroy = function() {
               if (e.destroy.call(this),
               this.tweens) {
                   var t;
                   for (t = this.tweens.length; t--; )
                       this.tweens[t].destroy();
                   this.tweens = null,
                   this.current = null
               }
           }
       })
         , U = e.config = {
           debug: !1,
           defaultUnit: "px",
           defaultAngle: "deg",
           keepInherited: !1,
           hideBackface: !1,
           perspective: "",
           fallback: !M.transition,
           agentTests: []
       };
       e.fallback = function(t) {
           if (!M.transition)
               return U.fallback = !0;
           U.agentTests.push("(" + t + ")");
           var e = new RegExp(U.agentTests.join("|"),"i");
           U.fallback = e.test(navigator.userAgent)
       }
       ,
       e.fallback("6.0.[2-5] Safari"),
       e.tween = function(t) {
           return new P(t)
       }
       ,
       e.delay = function(t, e, n) {
           return new X({
               complete: e,
               duration: t,
               context: n
           })
       }
       ,
       t.fn.tram = function(t) {
           return e.call(null, this, t)
       }
       ;
       var Y = t.style
         , G = t.css
         , Z = {
           transform: M.transform && M.transform.css
       }
         , Q = {
           color: [I, y],
           background: [I, y, "background-color"],
           "outline-color": [I, y],
           "border-color": [I, y],
           "border-top-color": [I, y],
           "border-right-color": [I, y],
           "border-bottom-color": [I, y],
           "border-left-color": [I, y],
           "border-width": [F, x],
           "border-top-width": [F, x],
           "border-right-width": [F, x],
           "border-bottom-width": [F, x],
           "border-left-width": [F, x],
           "border-spacing": [F, x],
           "letter-spacing": [F, x],
           margin: [F, x],
           "margin-top": [F, x],
           "margin-right": [F, x],
           "margin-bottom": [F, x],
           "margin-left": [F, x],
           padding: [F, x],
           "padding-top": [F, x],
           "padding-right": [F, x],
           "padding-bottom": [F, x],
           "padding-left": [F, x],
           "outline-width": [F, x],
           opacity: [F, b],
           top: [F, _],
           right: [F, _],
           bottom: [F, _],
           left: [F, _],
           "font-size": [F, _],
           "text-indent": [F, _],
           "word-spacing": [F, _],
           width: [F, _],
           "min-width": [F, _],
           "max-width": [F, _],
           height: [F, _],
           "min-height": [F, _],
           "max-height": [F, _],
           "line-height": [F, T],
           "scroll-top": [N, b, "scrollTop"],
           "scroll-left": [N, b, "scrollLeft"]
       }
         , J = {};
       M.transform && (Q.transform = [H],
       J = {
           x: [_, "translateX"],
           y: [_, "translateY"],
           rotate: [k],
           rotateX: [k],
           rotateY: [k],
           scale: [b],
           scaleX: [b],
           scaleY: [b],
           skew: [k],
           skewX: [k],
           skewY: [k]
       }),
       M.transform && M.backface && (J.z = [_, "translateZ"],
       J.rotateZ = [k],
       J.scaleZ = [b],
       J.perspective = [x]);
       var V = /ms/
         , K = /s|\./;
       return t.tram = e
   }(window.jQuery);
   var e = {}
     , n = t(function(t) {
       var n = window.$
         , i = e && n.tram;
       /*!
  * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
  * _.each
  * _.map
  * _.find
  * _.filter
  * _.any
  * _.contains
  * _.delay
  * _.defer
  * _.throttle (webflow)
  * _.debounce
  * _.keys
  * _.has
  * _.now
  *
  * http://underscorejs.org
  * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  * Underscore may be freely distributed under the MIT license.
  * @license MIT
  */
       t.exports = function() {
           var t = {};
           t.VERSION = "1.6.0-Webflow";
           var e = {}
             , n = Array.prototype
             , r = Object.prototype
             , o = Function.prototype
             , a = (n.push,
           n.slice)
             , s = (n.concat,
           r.toString,
           r.hasOwnProperty)
             , u = n.forEach
             , c = n.map
             , l = (n.reduce,
           n.reduceRight,
           n.filter)
             , f = (n.every,
           n.some)
             , h = n.indexOf
             , d = (n.lastIndexOf,
           Array.isArray,
           Object.keys)
             , p = (o.bind,
           t.each = t.forEach = function(n, i, r) {
               if (null == n)
                   return n;
               if (u && n.forEach === u)
                   n.forEach(i, r);
               else if (n.length === +n.length) {
                   for (var o = 0, a = n.length; o < a; o++)
                       if (i.call(r, n[o], o, n) === e)
                           return
               } else
                   for (var s = t.keys(n), o = 0, a = s.length; o < a; o++)
                       if (i.call(r, n[s[o]], s[o], n) === e)
                           return;
               return n
           }
           );
           t.map = t.collect = function(t, e, n) {
               var i = [];
               return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function(t, r, o) {
                   i.push(e.call(n, t, r, o))
               }),
               i)
           }
           ,
           t.find = t.detect = function(t, e, n) {
               var i;
               return v(t, function(t, r, o) {
                   if (e.call(n, t, r, o))
                       return i = t,
                       !0
               }),
               i
           }
           ,
           t.filter = t.select = function(t, e, n) {
               var i = [];
               return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function(t, r, o) {
                   e.call(n, t, r, o) && i.push(t)
               }),
               i)
           }
           ;
           var v = t.some = t.any = function(n, i, r) {
               i || (i = t.identity);
               var o = !1;
               return null == n ? o : f && n.some === f ? n.some(i, r) : (p(n, function(t, n, a) {
                   if (o || (o = i.call(r, t, n, a)))
                       return e
               }),
               !!o)
           }
           ;
           t.contains = t.include = function(t, e) {
               return null != t && (h && t.indexOf === h ? -1 != t.indexOf(e) : v(t, function(t) {
                   return t === e
               }))
           }
           ,
           t.delay = function(t, e) {
               var n = a.call(arguments, 2);
               return setTimeout(function() {
                   return t.apply(null, n)
               }, e)
           }
           ,
           t.defer = function(e) {
               return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
           }
           ,
           t.throttle = function(t) {
               var e, n, r;
               return function() {
                   e || (e = !0,
                   n = arguments,
                   r = this,
                   i.frame(function() {
                       e = !1,
                       t.apply(r, n)
                   }))
               }
           }
           ,
           t.debounce = function(e, n, i) {
               var r, o, a, s, u, c = function() {
                   var l = t.now() - s;
                   l < n ? r = setTimeout(c, n - l) : (r = null,
                   i || (u = e.apply(a, o),
                   a = o = null))
               };
               return function() {
                   a = this,
                   o = arguments,
                   s = t.now();
                   var l = i && !r;
                   return r || (r = setTimeout(c, n)),
                   l && (u = e.apply(a, o),
                   a = o = null),
                   u
               }
           }
           ,
           t.defaults = function(e) {
               if (!t.isObject(e))
                   return e;
               for (var n = 1, i = arguments.length; n < i; n++) {
                   var r = arguments[n];
                   for (var o in r)
                       void 0 === e[o] && (e[o] = r[o])
               }
               return e
           }
           ,
           t.keys = function(e) {
               if (!t.isObject(e))
                   return [];
               if (d)
                   return d(e);
               var n = [];
               for (var i in e)
                   t.has(e, i) && n.push(i);
               return n
           }
           ,
           t.has = function(t, e) {
               return s.call(t, e)
           }
           ,
           t.isObject = function(t) {
               return t === Object(t)
           }
           ,
           t.now = Date.now || function() {
               return (new Date).getTime()
           }
           ,
           t.templateSettings = {
               evaluate: /<%([\s\S]+?)%>/g,
               interpolate: /<%=([\s\S]+?)%>/g,
               escape: /<%-([\s\S]+?)%>/g
           };
           var m = /(.)^/
             , w = {
               "'": "'",
               "\\": "\\",
               "\r": "r",
               "\n": "n",
               "\u2028": "u2028",
               "\u2029": "u2029"
           }
             , g = /\\|'|\r|\n|\u2028|\u2029/g
             , b = function(t) {
               return "\\" + w[t]
           };
           return t.template = function(e, n, i) {
               !n && i && (n = i),
               n = t.defaults({}, n, t.templateSettings);
               var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g")
                 , o = 0
                 , a = "__p+='";
               e.replace(r, function(t, n, i, r, s) {
                   return a += e.slice(o, s).replace(g, b),
                   o = s + t.length,
                   n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"),
                   t
               }),
               a += "';\n",
               n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
               a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
               try {
                   var s = new Function(n.variable || "obj","_",a)
               } catch (t) {
                   throw t.source = a,
                   t
               }
               var u = function(e) {
                   return s.call(this, e, t)
               }
                 , c = n.variable || "obj";
               return u.source = "function(" + c + "){\n" + a + "}",
               u
           }
           ,
           t
       }()
   })
     , i = n && "object" == typeof n && "default"in n ? n.default : n
     , r = t(function(t) {
       function n(t) {
           f.env() && (g(t.design) && m.on("__wf_design", t.design),
           g(t.preview) && m.on("__wf_preview", t.preview)),
           g(t.destroy) && m.on("__wf_destroy", t.destroy),
           t.ready && g(t.ready) && r(t)
       }
       function r(t) {
           x ? t.ready() : b.contains(d, t.ready) || d.push(t.ready)
       }
       function o(t) {
           g(t.design) && m.off("__wf_design", t.design),
           g(t.preview) && m.off("__wf_preview", t.preview),
           g(t.destroy) && m.off("__wf_destroy", t.destroy),
           t.ready && g(t.ready) && a(t)
       }
       function a(t) {
           d = b.filter(d, function(e) {
               return e !== t.ready
           })
       }
       function s(t, e) {
           var n = []
             , i = {};
           return i.up = b.throttle(function(t) {
               b.each(n, function(e) {
                   e(t)
               })
           }),
           t && e && t.on(e, i.up),
           i.on = function(t) {
               "function" == typeof t && (b.contains(n, t) || n.push(t))
           }
           ,
           i.off = function(t) {
               n = arguments.length ? b.filter(n, function(e) {
                   return e !== t
               }) : []
           }
           ,
           i
       }
       function u(t) {
           g(t) && t()
       }
       function c() {
           _ = !1,
           b.each(h, n)
       }
       function l() {
           q && (q.reject(),
           m.off("load", q.resolve)),
           q = new v.Deferred,
           m.on("load", q.resolve)
       }
       var f = {}
         , h = {}
         , d = []
         , p = window.Webflow || []
         , v = window.jQuery
         , m = v(window)
         , w = v(document)
         , g = v.isFunction
         , b = f._ = i
         , y = e && v.tram
         , x = !1
         , _ = !1;
       y.config.hideBackface = !1,
       y.config.keepInherited = !0,
       f.define = function(t, e, i) {
           h[t] && o(h[t]);
           var r = h[t] = e(v, b, i) || {};
           return n(r),
           r
       }
       ,
       f.require = function(t) {
           return h[t]
       }
       ,
       f.push = function(t) {
           x ? g(t) && t() : p.push(t)
       }
       ,
       f.env = function(t) {
           var e = window.__wf_design
             , n = void 0 !== e;
           return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
       }
       ;
       var k = navigator.userAgent.toLowerCase()
         , T = navigator.appVersion.toLowerCase()
         , E = f.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
         , O = f.env.chrome = /chrome/.test(k) && /Google/.test(navigator.vendor) && parseInt(T.match(/chrome\/(\d+)\./)[1], 10)
         , j = f.env.ios = /(ipod|iphone|ipad)/.test(k);
       f.env.safari = /safari/.test(k) && !O && !j;
       var z;
       E && w.on("touchstart mousedown", function(t) {
           z = t.target
       }),
       f.validClick = E ? function(t) {
           return t === z || v.contains(t, z)
       }
       : function() {
           return !0
       }
       ;
       var A = "resize.webflow orientationchange.webflow load.webflow";
       f.resize = s(m, A),
       f.scroll = s(m, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"),
       f.redraw = s(),
       f.location = function(t) {
           window.location = t
       }
       ,
       f.env() && (f.location = function(t) {
           window.dispatchEvent(new CustomEvent("__wf_location",{
               detail: t
           }))
       }
       ),
       f.ready = function() {
           x = !0,
           _ ? c() : b.each(d, u),
           b.each(p, u),
           f.resize.up()
       }
       ;
       var q;
       f.load = function(t) {
           q.then(t)
       }
       ,
       f.destroy = function(t) {
           t = t || {},
           _ = !0,
           m.triggerHandler("__wf_destroy"),
           null != t.domready && (x = t.domready),
           b.each(h, o),
           f.resize.off(),
           f.scroll.off(),
           f.redraw.off(),
           d = [],
           p = [],
           "pending" === q.state() && l()
       }
       ,
       v(f.ready),
       l(),
       t.exports = window.Webflow = f
   })
     , o = r && "object" == typeof r && "default"in r ? r.default : r
     , a = (t(function(t) {
       var e = o;
       e.define("brand", t.exports = function(t) {
           function n() {
               var e = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                 , n = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({
                   marginRight: "8px",
                   width: "16px"
               })
                 , i = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");
               return e.append(n, i),
               e[0]
           }
           function i() {
               var t = s.children(u)
                 , n = t.length && t.get(0) === r
                 , i = e.env("editor");
               n ? i && t.remove() : (t.length && t.remove(),
               i || s.append(r))
           }
           var r, o = {}, a = t("html"), s = t("body"), u = ".w-webflow-badge", c = window.location, l = /PhantomJS/i.test(navigator.userAgent);
           return o.ready = function() {
               var t = a.attr("data-wf-status")
                 , e = a.attr("data-wf-domain") || "";
               /\.webflow\.io$/i.test(e) && c.hostname !== e && (t = !0),
               t && !l && (r = r || n(),
               i(),
               setTimeout(i, 500))
           }
           ,
           o
       }
       )
   }),
   t(function(t) {
       var e = o;
       e.define("edit", t.exports = function(t, n, i) {
           function r() {
               f || /\?edit/.test(v.hash) && w()
           }
           function o() {
               f = !0,
               window.WebflowEditor = !0,
               d.off(m, r),
               t.ajax({
                   url: l("https://editor-api.webflow.com/api/editor/view"),
                   data: {
                       siteId: p.attr("data-wf-site")
                   },
                   xhrFields: {
                       withCredentials: !0
                   },
                   dataType: "json",
                   crossDomain: !0,
                   success: a
               })
           }
           function a(t) {
               t ? s(c(t.scriptPath), function() {
                   window.WebflowEditor(t)
               }) : console.error("Could not load editor data")
           }
           function s(e, n) {
               t.ajax({
                   type: "GET",
                   url: e,
                   dataType: "script",
                   cache: !0
               }).then(n, u)
           }
           function u(t, e, n) {
               throw console.error("Could not load editor script: " + e),
               n
           }
           function c(t) {
               return t.indexOf("//") >= 0 ? t : l("https://editor-api.webflow.com" + t)
           }
           function l(t) {
               return t.replace(/([^:])\/\//g, "$1/")
           }
           if (i = i || {},
           (e.env("test") || e.env("frame")) && !i.fixture)
               return {
                   exit: 1
               };
           var f, h = {}, d = t(window), p = t(document.documentElement), v = document.location, m = "hashchange", w = i.load || o, g = !1;
           try {
               g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
           } catch (t) {}
           return g ? w() : v.search ? (/[?&](edit)(?:[=&?]|$)/.test(v.search) || /\?edit$/.test(v.href)) && w() : d.on(m, r).triggerHandler(m),
           h
       }
       )
   }),
   t(function(t) {
       /*!
  * jQuery-ajaxTransport-XDomainRequest - v1.0.3
  * 2014-12-16 WEBFLOW - Removed UMD wrapper
  * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
  * Copyright (c) 2014 Jason Moon (@JSONMOON)
  * @license MIT (/blob/master/LICENSE.txt)
  */
       t.exports = function(t) {
           if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
               var e = /^https?:\/\//i
                 , n = /^get|post$/i
                 , i = new RegExp("^" + location.protocol,"i");
               t.ajaxTransport("* text html xml json", function(r, o, a) {
                   if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
                       var s = null;
                       return {
                           send: function(e, n) {
                               var i = ""
                                 , a = (o.dataType || "").toLowerCase();
                               s = new XDomainRequest,
                               /^\d+$/.test(o.timeout) && (s.timeout = o.timeout),
                               s.ontimeout = function() {
                                   n(500, "timeout")
                               }
                               ,
                               s.onload = function() {
                                   var e = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType
                                     , i = {
                                       code: 200,
                                       message: "success"
                                   }
                                     , r = {
                                       text: s.responseText
                                   };
                                   try {
                                       if ("html" === a || /text\/html/i.test(s.contentType))
                                           r.html = s.responseText;
                                       else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType))
                                           try {
                                               r.json = t.parseJSON(s.responseText)
                                           } catch (t) {
                                               i.code = 500,
                                               i.message = "parseerror"
                                           }
                                       else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                           var o = new ActiveXObject("Microsoft.XMLDOM");
                                           o.async = !1;
                                           try {
                                               o.loadXML(s.responseText)
                                           } catch (t) {
                                               o = void 0
                                           }
                                           if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length)
                                               throw i.code = 500,
                                               i.message = "parseerror",
                                               "Invalid XML: " + s.responseText;
                                           r.xml = o
                                       }
                                   } catch (t) {
                                       throw t
                                   } finally {
                                       n(i.code, i.message, r, e)
                                   }
                               }
                               ,
                               s.onprogress = function() {}
                               ,
                               s.onerror = function() {
                                   n(500, "error", {
                                       text: s.responseText
                                   })
                               }
                               ,
                               o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)),
                               s.open(r.type, r.url),
                               s.send(i)
                           },
                           abort: function() {
                               s && s.abort()
                           }
                       }
                   }
               })
           }
       }(window.jQuery)
   }),
   t(function(t) {
       var e = o;
       e.define("forms", t.exports = function(t, n) {
           function i() {
               v = t("html").attr("data-wf-site"),
               (p = t(x + " form")).length && p.each(r)
           }
           function r(e, n) {
               var i = t(n)
                 , r = t.data(n, x);
               r || (r = t.data(n, x, {
                   form: i
               })),
               a(r);
               var o = i.closest("div.w-form");
               r.done = o.find("> .w-form-done"),
               r.fail = o.find("> .w-form-fail");
               var s = r.action = i.attr("action");
               r.handler = null,
               r.redirect = i.attr("data-redirect"),
               O.test(s) ? r.handler = f : s || (v ? r.handler = l : j())
           }
           function o() {
               m = !0,
               g.on("submit", x + " form", function(e) {
                   var n = t.data(this, x);
                   n.handler && (n.evt = e,
                   n.handler(n))
               })
           }
           function a(t) {
               var e = t.btn = t.form.find(':input[type="submit"]');
               t.wait = t.btn.attr("data-wait") || null,
               t.success = !1,
               e.prop("disabled", !1),
               t.label && e.val(t.label)
           }
           function s(t) {
               var e = t.btn
                 , n = t.wait;
               e.prop("disabled", !0),
               n && (t.label = e.val(),
               e.val(n))
           }
           function u(e, n) {
               var i = null;
               return n = n || {},
               e.find(':input:not([type="submit"])').each(function(r, o) {
                   var a = t(o)
                     , s = a.attr("type")
                     , u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1)
                     , l = a.val();
                   if ("checkbox" === s && (l = a.is(":checked")),
                   "radio" === s) {
                       if (null === n[u] || "string" == typeof n[u])
                           return;
                       l = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                   }
                   "string" == typeof l && (l = t.trim(l)),
                   n[u] = l,
                   i = i || c(a, s, u, l)
               }),
               i
           }
           function c(t, e, n, i) {
               var r = null;
               return "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") && (i ? (_.test(n) || _.test(t.attr("type"))) && (k.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n),
               r
           }
           function l(n) {
               a(n);
               var i = n.form
                 , r = {
                   name: i.attr("data-name") || i.attr("name") || "Untitled Form",
                   source: b.href,
                   test: e.env(),
                   fields: {},
                   dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(i.html())
               };
               d(n);
               var o = u(i, r.fields);
               if (o)
                   return T(o);
               if (s(n),
               v) {
                   var c = "https://webflow.com/api/v1/form/" + v;
                   y && c.indexOf("https://webflow.com") >= 0 && (c = c.replace("https://webflow.com", "http://formdata.webflow.com")),
                   t.ajax({
                       url: c,
                       type: "POST",
                       data: r,
                       dataType: "json",
                       crossDomain: !0
                   }).done(function() {
                       n.success = !0,
                       h(n)
                   }).fail(function() {
                       h(n)
                   })
               } else
                   h(n)
           }
           function f(e) {
               a(e);
               var i = e.form
                 , r = {};
               if (!/^https/.test(b.href) || /^https/.test(e.action)) {
                   d(e);
                   var o = u(i, r);
                   if (o)
                       return T(o);
                   s(e);
                   var c;
                   n.each(r, function(t, e) {
                       _.test(e) && (r.EMAIL = t),
                       /^((full[ _-]?)?name)$/i.test(e) && (c = t),
                       /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t),
                       /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                   }),
                   c && !r.FNAME && (c = c.split(" "),
                   r.FNAME = c[0],
                   r.LNAME = r.LNAME || c[1]);
                   var l = e.action.replace("/post?", "/post-json?") + "&c=?"
                     , f = l.indexOf("u=") + 2;
                   f = l.substring(f, l.indexOf("&", f));
                   var p = l.indexOf("id=") + 3;
                   p = l.substring(p, l.indexOf("&", p)),
                   r["b_" + f + "_" + p] = "",
                   t.ajax({
                       url: l,
                       data: r,
                       dataType: "jsonp"
                   }).done(function(t) {
                       e.success = "success" === t.result || /already/.test(t.msg),
                       e.success || console.info("MailChimp error: " + t.msg),
                       h(e)
                   }).fail(function() {
                       h(e)
                   })
               } else
                   i.attr("method", "post")
           }
           function h(t) {
               var n = t.form
                 , i = t.redirect
                 , r = t.success;
               r && i ? e.location(i) : (t.done.toggle(r),
               t.fail.toggle(!r),
               n.toggle(!r),
               a(t))
           }
           function d(t) {
               t.evt && t.evt.preventDefault(),
               t.evt = null
           }
           var p, v, m, w = {}, g = t(document), b = window.location, y = window.XDomainRequest && !window.atob, x = ".w-form", _ = /e(-)?mail/i, k = /^\S+@\S+$/, T = window.alert, E = e.env(), O = /list-manage[1-9]?.com/i, j = n.debounce(function() {
               T("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
           }, 100);
           return w.ready = w.design = w.preview = function() {
               i(),
               E || m || o()
           }
           ,
           w
       }
       )
   }),
   t(function(t) {
       var e = window.jQuery
         , n = {}
         , i = []
         , r = {
           reset: function(t, e) {
               e.__wf_intro = null
           },
           intro: function(t, i) {
               i.__wf_intro || (i.__wf_intro = !0,
               e(i).triggerHandler(n.types.INTRO))
           },
           outro: function(t, i) {
               i.__wf_intro && (i.__wf_intro = null,
               e(i).triggerHandler(n.types.OUTRO))
           }
       };
       n.triggers = {},
       n.types = {
           INTRO: "w-ix-intro.w-ix",
           OUTRO: "w-ix-outro.w-ix"
       },
       n.init = function() {
           for (var t = i.length, o = 0; o < t; o++) {
               var a = i[o];
               a[0](0, a[1])
           }
           i = [],
           e.extend(n.triggers, r)
       }
       ,
       n.async = function() {
           for (var t in r) {
               var e = r[t];
               r.hasOwnProperty(t) && (n.triggers[t] = function(t, n) {
                   i.push([e, n])
               }
               )
           }
       }
       ,
       n.async(),
       t.exports = n
   }))
     , s = a && "object" == typeof a && "default"in a ? a.default : a;
   t(function(t) {
       var e = o
         , n = s;
       e.define("ix", t.exports = function(t, i) {
           function r(t) {
               t && (z = {},
               i.each(t, function(t) {
                   z[t.slug] = t.value
               }),
               o())
           }
           function o() {
               var i = t("[data-ix]");
               i.length && (i.each(u),
               i.each(a),
               A.length && (e.scroll.on(c),
               setTimeout(c, 1)),
               q.length && e.load(l),
               $.length && setTimeout(f, M),
               n.init(),
               e.redraw.up())
           }
           function a(r, o) {
               var a = t(o)
                 , u = a.attr("data-ix")
                 , c = z[u];
               if (c) {
                   var l = c.triggers;
                   l && (b.style(a, c.style),
                   i.each(l, function(t) {
                       function i() {
                           h(t, a, {
                               group: "A"
                           })
                       }
                       function r() {
                           h(t, a, {
                               group: "B"
                           })
                       }
                       var o = {}
                         , u = t.type
                         , c = t.stepsB && t.stepsB.length;
                       if ("load" !== u) {
                           if ("click" === u)
                               return a.on("click" + x, function(n) {
                                   e.validClick(n.currentTarget) && ("#" === a.attr("href") && n.preventDefault(),
                                   h(t, a, {
                                       group: o.clicked ? "B" : "A"
                                   }),
                                   c && (o.clicked = !o.clicked))
                               }),
                               void (j = j.add(a));
                           if ("hover" === u)
                               return a.on("mouseenter" + x, i),
                               a.on("mouseleave" + x, r),
                               void (j = j.add(a));
                           if ("scroll" !== u) {
                               var l = D[u];
                               if (l) {
                                   var f = a.closest(l);
                                   return f.on(n.types.INTRO, i).on(n.types.OUTRO, r),
                                   void (j = j.add(f))
                               }
                           } else
                               A.push({
                                   el: a,
                                   trigger: t,
                                   state: {
                                       active: !1
                                   },
                                   offsetTop: s(t.offsetTop),
                                   offsetBot: s(t.offsetBot)
                               })
                       } else
                           t.preload && !T ? q.push(i) : $.push(i)
                   }))
               }
           }
           function s(t) {
               if (!t)
                   return 0;
               t = String(t);
               var e = parseInt(t, 10);
               return e !== e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999),
               e)
           }
           function u(e, n) {
               t(n).off(x)
           }
           function c() {
               for (var t = y.scrollTop(), e = y.height(), n = A.length, i = 0; i < n; i++) {
                   var r = A[i]
                     , o = r.el
                     , a = r.trigger
                     , s = a.stepsB && a.stepsB.length
                     , u = r.state
                     , c = o.offset().top
                     , l = o.outerHeight()
                     , f = r.offsetTop
                     , d = r.offsetBot;
                   f < 1 && f > 0 && (f *= e),
                   d < 1 && d > 0 && (d *= e);
                   var p = c + l - f >= t && c + d <= t + e;
                   p !== u.active && ((!1 !== p || s) && (u.active = p,
                   h(a, o, {
                       group: p ? "A" : "B"
                   })))
               }
           }
           function l() {
               for (var t = q.length, e = 0; e < t; e++)
                   q[e]()
           }
           function f() {
               for (var t = $.length, e = 0; e < t; e++)
                   $[e]()
           }
           function h(e, n, i, r) {
               function o() {
                   if (c)
                       return h(e, n, i, !0);
                   "auto" === v.width && p.set({
                       width: "auto"
                   }),
                   "auto" === v.height && p.set({
                       height: "auto"
                   }),
                   a && a()
               }
               var a = (i = i || {}).done
                 , s = e.preserve3d;
               if (!w || i.force) {
                   var u = i.group || "A"
                     , c = e["loop" + u]
                     , l = e["steps" + u];
                   if (l && l.length) {
                       if (l.length < 2 && (c = !1),
                       !r) {
                           var f = e.selector;
                           f && (n = e.descend ? n.find(f) : e.siblings ? n.siblings(f) : t(f),
                           T && n.attr("data-ix-affect", 1)),
                           E && n.addClass("w-ix-emptyfix"),
                           s && n.css("transform-style", "preserve-3d")
                       }
                       for (var p = _(n), v = {
                           omit3d: !s
                       }, m = 0; m < l.length; m++)
                           d(p, l[m], v);
                       v.start ? p.then(o) : o()
                   }
               }
           }
           function d(t, n, i) {
               var r = "add"
                 , o = "start";
               i.start && (r = o = "then");
               var a = n.transition;
               if (a) {
                   a = a.split(",");
                   for (var s = 0; s < a.length; s++) {
                       var u = a[s];
                       t[r](u)
                   }
               }
               var c = m(n, i) || {};
               if (null != c.width && (i.width = c.width),
               null != c.height && (i.height = c.height),
               null == a) {
                   i.start ? t.then(function() {
                       var n = this.queue;
                       this.set(c),
                       c.display && (t.redraw(),
                       e.redraw.up()),
                       this.queue = n,
                       this.next()
                   }) : (t.set(c),
                   c.display && (t.redraw(),
                   e.redraw.up()));
                   var l = c.wait;
                   null != l && (t.wait(l),
                   i.start = !0)
               } else {
                   if (c.display) {
                       var f = c.display;
                       delete c.display,
                       i.start ? t.then(function() {
                           var t = this.queue;
                           this.set({
                               display: f
                           }).redraw(),
                           e.redraw.up(),
                           this.queue = t,
                           this.next()
                       }) : (t.set({
                           display: f
                       }).redraw(),
                       e.redraw.up())
                   }
                   t[o](c),
                   i.start = !0
               }
           }
           function p(e, n) {
               var i = _(e);
               if (!t.isEmptyObject(n)) {
                   e.css("transition", "");
                   var r = e.css("transition");
                   r === O && (r = i.upstream = null),
                   i.upstream = O,
                   i.set(m(n)),
                   i.upstream = r
               }
           }
           function v(t, e) {
               _(t).set(m(e))
           }
           function m(t, e) {
               var n = e && e.omit3d
                 , i = {}
                 , r = !1;
               for (var o in t)
                   "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (i[o] = t[o],
                   r = !0);
               return r ? i : null
           }
           var w, g, b = {}, y = t(window), x = ".w-ix", _ = t.tram, k = e.env, T = k(), E = k.chrome && k.chrome < 35, O = "none 0s ease 0s", j = t(), z = {}, A = [], q = [], $ = [], M = 1, D = {
               tabs: ".w-tab-link, .w-tab-pane",
               dropdown: ".w-dropdown",
               slider: ".w-slide",
               navbar: ".w-nav"
           };
           return b.init = function(t) {
               setTimeout(function() {
                   r(t)
               }, 1)
           }
           ,
           b.preview = function() {
               w = !1,
               M = 100,
               setTimeout(function() {
                   r(window.__wf_ix)
               }, 1)
           }
           ,
           b.design = function() {
               w = !0,
               b.destroy()
           }
           ,
           b.destroy = function() {
               g = !0,
               j.each(u),
               e.scroll.off(c),
               n.async(),
               A = [],
               q = [],
               $ = []
           }
           ,
           b.ready = function() {
               if (T)
                   return k("design") ? b.design() : b.preview();
               z && g && (g = !1,
               o())
           }
           ,
           b.run = h,
           b.style = T ? p : v,
           b
       }
       )
   }),
   t(function(t) {
       var e = o;
       e.define("links", t.exports = function(t, n) {
           function i() {
               s = h && e.env("design"),
               c = e.env("slug") || d.pathname || "",
               e.scroll.off(o),
               u = [];
               for (var t = document.links, n = 0; n < t.length; ++n)
                   r(t[n]);
               u.length && (e.scroll.on(o),
               o())
           }
           function r(e) {
               var n = s && e.getAttribute("href-disabled") || e.getAttribute("href");
               if (p.href = n,
               !(n.indexOf(":") >= 0)) {
                   var i = t(e);
                   if (0 === n.indexOf("#") && m.test(n)) {
                       var r = t(n);
                       r.length && u.push({
                           link: i,
                           sec: r,
                           active: !1
                       })
                   } else if ("#" !== n) {
                       var o = p.href === d.href || n === c || w.test(n) && g.test(c);
                       a(i, v, o)
                   }
               }
           }
           function o() {
               var t = f.scrollTop()
                 , e = f.height();
               n.each(u, function(n) {
                   var i = n.link
                     , r = n.sec
                     , o = r.offset().top
                     , u = r.outerHeight()
                     , c = .5 * e
                     , l = r.is(":visible") && o + u - c >= t && o + c <= t + e;
                   n.active !== l && (n.active = l,
                   a(i, v, l),
                   s && (i[0].__wf_current = l))
               })
           }
           function a(t, e, n) {
               var i = t.hasClass(e);
               n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
           }
           var s, u, c, l = {}, f = t(window), h = e.env(), d = window.location, p = document.createElement("a"), v = "w--current", m = /^#[a-zA-Z][\w:.-]*$/, w = /index\.(html|php)$/, g = /\/$/;
           return l.ready = l.design = l.preview = i,
           l
       }
       )
   }),
   t(function(t) {
       var e = o
         , n = s;
       e.define("navbar", t.exports = function(t, i) {
           function r() {
               E = q && e.env("design"),
               k = t(document.body),
               (T = A.find(M)).length && (T.each(u),
               o(),
               a())
           }
           function o() {
               e.resize.off(s)
           }
           function a() {
               e.resize.on(s)
           }
           function s() {
               T.each(g)
           }
           function u(e, n) {
               var i = t(n)
                 , r = t.data(n, M);
               r || (r = t.data(n, M, {
                   open: !1,
                   el: i,
                   config: {}
               })),
               r.menu = i.find(".w-nav-menu"),
               r.links = r.menu.find(".w-nav-link"),
               r.dropdowns = r.menu.find(".w-dropdown"),
               r.button = i.find(".w-nav-button"),
               r.container = i.find(".w-container"),
               r.outside = w(r),
               r.el.off(M),
               r.button.off(M),
               r.menu.off(M),
               h(r),
               E ? (l(r),
               r.el.on("setting" + M, d(r))) : (f(r),
               r.button.on("tap" + M, v(r)),
               r.menu.on("click" + M, "a", m(r))),
               g(e, n)
           }
           function c(e, n) {
               var i = t.data(n, M);
               i && (l(i),
               t.removeData(n, M))
           }
           function l(t) {
               t.overlay && (_(t, !0),
               t.overlay.remove(),
               t.overlay = null)
           }
           function f(e) {
               e.overlay || (e.overlay = t($).appendTo(e.el),
               e.parent = e.menu.parent(),
               _(e, !0))
           }
           function h(t) {
               var e = {}
                 , n = t.config || {}
                 , r = e.animation = t.el.attr("data-animation") || "default";
               e.animOver = /^over/.test(r),
               e.animDirect = /left$/.test(r) ? -1 : 1,
               n.animation !== r && t.open && i.defer(p, t),
               e.easing = t.el.attr("data-easing") || "ease",
               e.easing2 = t.el.attr("data-easing2") || "ease";
               var o = t.el.attr("data-duration");
               e.duration = null != o ? Number(o) : 400,
               e.docHeight = t.el.attr("data-doc-height"),
               t.config = e
           }
           function d(t) {
               return function(e, n) {
                   n = n || {};
                   var r = z.width();
                   h(t),
                   !0 === n.open && y(t, !0),
                   !1 === n.open && _(t, !0),
                   t.open && i.defer(function() {
                       r !== z.width() && p(t)
                   })
               }
           }
           function p(t) {
               t.open && (_(t, !0),
               y(t, !0))
           }
           function v(t) {
               return i.debounce(function() {
                   t.open ? _(t) : y(t)
               })
           }
           function m(n) {
               return function(i) {
                   var r = t(this).attr("href");
                   e.validClick(i.currentTarget) ? r && 0 === r.indexOf("#") && n.open && _(n) : i.preventDefault()
               }
           }
           function w(e) {
               return e.outside && A.off("tap" + M, e.outside),
               i.debounce(function(n) {
                   if (e.open) {
                       var i = t(n.target).closest(".w-nav-menu");
                       e.menu.is(i) || _(e)
                   }
               })
           }
           function g(e, n) {
               var i = t.data(n, M)
                 , r = i.collapsed = "none" !== i.button.css("display");
               if (!i.open || r || E || _(i, !0),
               i.container.length) {
                   var o = b(i);
                   i.links.each(o),
                   i.dropdowns.each(o)
               }
               i.open && x(i)
           }
           function b(e) {
               var n = e.container.css(B);
               return "none" === n && (n = ""),
               function(e, i) {
                   (i = t(i)).css(B, ""),
                   "none" === i.css(B) && i.css(B, n)
               }
           }
           function y(t, n) {
               if (!t.open) {
                   t.open = !0,
                   t.menu.addClass(L),
                   t.links.addClass(S),
                   t.button.addClass(D);
                   var i = t.config;
                   "none" !== i.animation && j.support.transform || (n = !0);
                   var r = x(t)
                     , o = t.menu.outerHeight(!0)
                     , a = t.menu.outerWidth(!0)
                     , s = t.el.height()
                     , u = t.el[0];
                   if (g(0, u),
                   C.intro(0, u),
                   e.redraw.up(),
                   E || A.on("tap" + M, t.outside),
                   !n) {
                       var c = "transform " + i.duration + "ms " + i.easing;
                       if (t.overlay && (R = t.menu.prev(),
                       t.overlay.show().append(t.menu)),
                       i.animOver)
                           return j(t.menu).add(c).set({
                               x: i.animDirect * a,
                               height: r
                           }).start({
                               x: 0
                           }),
                           void (t.overlay && t.overlay.width(a));
                       var l = s + o;
                       j(t.menu).add(c).set({
                           y: -l
                       }).start({
                           y: 0
                       })
                   }
               }
           }
           function x(t) {
               var e = t.config
                 , n = e.docHeight ? A.height() : k.height();
               return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()),
               t.overlay && t.overlay.height(n),
               n
           }
           function _(t, e) {
               function n() {
                   t.menu.height(""),
                   j(t.menu).set({
                       x: 0,
                       y: 0
                   }),
                   t.menu.removeClass(L),
                   t.links.removeClass(S),
                   t.overlay && t.overlay.children().length && (R.length ? t.menu.insertAfter(R) : t.menu.prependTo(t.parent),
                   t.overlay.attr("style", "").hide()),
                   t.el.triggerHandler("w-close")
               }
               if (t.open) {
                   t.open = !1,
                   t.button.removeClass(D);
                   var i = t.config;
                   if (("none" === i.animation || !j.support.transform || i.duration <= 0) && (e = !0),
                   C.outro(0, t.el[0]),
                   A.off("tap" + M, t.outside),
                   e)
                       return j(t.menu).stop(),
                       void n();
                   var r = "transform " + i.duration + "ms " + i.easing2
                     , o = t.menu.outerHeight(!0)
                     , a = t.menu.outerWidth(!0)
                     , s = t.el.height();
                   if (i.animOver)
                       j(t.menu).add(r).start({
                           x: a * i.animDirect
                       }).then(n);
                   else {
                       var u = s + o;
                       j(t.menu).add(r).start({
                           y: -u
                       }).then(n)
                   }
               }
           }
           var k, T, E, O = {}, j = t.tram, z = t(window), A = t(document), q = e.env(), $ = '<div class="w-nav-overlay" data-wf-ignore />', M = ".w-nav", D = "w--open", L = "w--nav-menu-open", S = "w--nav-link-open", C = n.triggers, R = t();
           O.ready = O.design = O.preview = r,
           O.destroy = function() {
               R = t(),
               o(),
               T && T.length && T.each(c)
           }
           ;
           var B = "max-width";
           return O
       }
       )
   }),
   t(function(t) {
       var e = o;
       e.define("scroll", t.exports = function(t) {
           function n() {
               c.hash && i(c.hash.substring(1));
               var n = c.href.split("#")[0];
               s.on("click", "a", function(r) {
                   if (!(e.env("design") || window.$.mobile && t(r.currentTarget).hasClass("ui-link")))
                       if ("#" !== this.getAttribute("href")) {
                           var o = this.href.split("#")
                             , a = o[0] === n ? o[1] : null;
                           a && i(a, r)
                       } else
                           r.preventDefault()
               })
           }
           function i(n, i) {
               if (f.test(n)) {
                   var o = t("#" + n);
                   if (o.length) {
                       i && (i.preventDefault(),
                       i.stopPropagation()),
                       c.hash === n || !l || !l.pushState || e.env.chrome && "file:" === c.protocol || (l.state && l.state.hash) !== n && l.pushState({
                           hash: n
                       }, "", "#" + n);
                       var a = e.env("editor") ? ".w-editor-body" : "body"
                         , s = t("header, " + a + " > .header, " + a + " > .w-nav:not([data-no-scroll])")
                         , h = "fixed" === s.css("position") ? s.outerHeight() : 0;
                       u.setTimeout(function() {
                           r(o, h)
                       }, i ? 0 : 300)
                   }
               }
           }
           function r(e, n) {
               var i = t(u).scrollTop()
                 , r = e.offset().top - n;
               if ("mid" === e.data("scroll")) {
                   var a = t(u).height() - n
                     , s = e.outerHeight();
                   s < a && (r -= Math.round((a - s) / 2))
               }
               var c = 1;
               t("body").add(e).each(function() {
                   var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                   !isNaN(e) && (0 === e || e > 0) && (c = e)
               }),
               Date.now || (Date.now = function() {
                   return (new Date).getTime()
               }
               );
               var l = Date.now()
                 , f = u.requestAnimationFrame || u.mozRequestAnimationFrame || u.webkitRequestAnimationFrame || function(t) {
                   u.setTimeout(t, 15)
               }
                 , h = (472.143 * Math.log(Math.abs(i - r) + 125) - 2e3) * c
                 , d = function() {
                   var t = Date.now() - l;
                   u.scroll(0, o(i, r, t, h)),
                   t <= h && f(d)
               };
               d()
           }
           function o(t, e, n, i) {
               return n > i ? e : t + (e - t) * a(n / i)
           }
           function a(t) {
               return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
           }
           var s = t(document)
             , u = window
             , c = u.location
             , l = function() {
               try {
                   return Boolean(u.frameElement)
               } catch (t) {
                   return !0
               }
           }() ? null : u.history
             , f = /^[a-zA-Z0-9][\w:.-]*$/;
           return {
               ready: n
           }
       }
       )
   }),
   t(function(t) {
       o.define("touch", t.exports = function(t) {
           function e(t) {
               function e(t) {
                   var e = t.touches;
                   e && e.length > 1 || (f = !0,
                   h = !1,
                   e ? (d = !0,
                   u = e[0].clientX,
                   c = e[0].clientY) : (u = t.clientX,
                   c = t.clientY),
                   l = u)
               }
               function i(t) {
                   if (f) {
                       if (d && "mousemove" === t.type)
                           return t.preventDefault(),
                           void t.stopPropagation();
                       var e = t.touches
                         , i = e ? e[0].clientX : t.clientX
                         , r = e ? e[0].clientY : t.clientY
                         , s = i - l;
                       l = i,
                       Math.abs(s) > p && o && "" === String(o()) && (n("swipe", t, {
                           direction: s > 0 ? "right" : "left"
                       }),
                       a()),
                       (Math.abs(i - u) > 10 || Math.abs(r - c) > 10) && (h = !0)
                   }
               }
               function r(t) {
                   if (f) {
                       if (f = !1,
                       d && "mouseup" === t.type)
                           return t.preventDefault(),
                           t.stopPropagation(),
                           void (d = !1);
                       h || n("tap", t)
                   }
               }
               function a() {
                   f = !1
               }
               function s() {
                   t.removeEventListener("touchstart", e, !1),
                   t.removeEventListener("touchmove", i, !1),
                   t.removeEventListener("touchend", r, !1),
                   t.removeEventListener("touchcancel", a, !1),
                   t.removeEventListener("mousedown", e, !1),
                   t.removeEventListener("mousemove", i, !1),
                   t.removeEventListener("mouseup", r, !1),
                   t.removeEventListener("mouseout", a, !1),
                   t = null
               }
               var u, c, l, f = !1, h = !1, d = !1, p = Math.min(Math.round(.04 * window.innerWidth), 40);
               t.addEventListener("touchstart", e, !1),
               t.addEventListener("touchmove", i, !1),
               t.addEventListener("touchend", r, !1),
               t.addEventListener("touchcancel", a, !1),
               t.addEventListener("mousedown", e, !1),
               t.addEventListener("mousemove", i, !1),
               t.addEventListener("mouseup", r, !1),
               t.addEventListener("mouseout", a, !1),
               this.destroy = s
           }
           function n(e, n, i) {
               var r = t.Event(e, {
                   originalEvent: n
               });
               t(n.target).trigger(r, i)
           }
           var i = {}
             , r = !document.addEventListener
             , o = window.getSelection;
           return r && (t.event.special.tap = {
               bindType: "click",
               delegateType: "click"
           }),
           i.init = function(n) {
               return r ? null : (n = "string" == typeof n ? t(n).get(0) : n,
               n ? new e(n) : null)
           }
           ,
           i.instance = i.init(document),
           i
       }
       )
   })
}();
/**
* ----------------------------------------------------------------------
* Webflow: Interactions: Init
*/
Webflow.require('ix').init([{
   "slug": "fadein",
   "name": "Fadein",
   "value": {
       "style": {
           "opacity": 0,
           "x": "0px",
           "y": "100px",
           "z": "0px"
       },
       "triggers": [{
           "type": "load",
           "preload": true,
           "loopA": true,
           "stepsA": [{
               "opacity": 1,
               "transition": "transform 3500ms ease 0, opacity 1500ms linear 0",
               "x": "5px",
               "y": "5px",
               "z": "0px"
           }, {
               "opacity": 1,
               "transition": "transform 3500ms ease-in 0, opacity 1500ms linear 0",
               "x": "-5px",
               "y": "-5px",
               "z": "0px"
           }],
           "stepsB": []
       }]
   }
}, {
   "slug": "fadein-2",
   "name": "Fadein 2",
   "value": {
       "style": {
           "opacity": 0
       },
       "triggers": [{
           "type": "load",
           "preload": true,
           "stepsA": [{
               "wait": "250ms"
           }, {
               "opacity": 1,
               "transition": "transform 1500ms ease 0, opacity 1500ms linear 0"
           }],
           "stepsB": []
       }]
   }
}, {
   "slug": "fade-in-on-scroll",
   "name": "Fade in on scroll",
   "value": {
       "style": {
           "opacity": 0
       },
       "triggers": [{
           "type": "scroll",
           "stepsA": [{
               "opacity": 1,
               "transition": "opacity 750ms ease 0"
           }],
           "stepsB": []
       }]
   }
}, {
   "slug": "fade-in-on-scroll-2",
   "name": "Fade in on scroll 2",
   "value": {
       "style": {
           "opacity": 0
       },
       "triggers": [{
           "type": "scroll",
           "offsetBot": "25%",
           "stepsA": [{
               "opacity": 1,
               "transition": "opacity 750ms ease 0"
           }],
           "stepsB": []
       }]
   }
}, {
   "slug": "fade-in-on-scroll-3",
   "name": "Fade in on scroll 3",
   "value": {
       "style": {
           "opacity": 0
       },
       "triggers": [{
           "type": "scroll",
           "stepsA": [{
               "wait": "250ms"
           }, {
               "opacity": 1,
               "transition": "opacity 750ms ease 0"
           }],
           "stepsB": []
       }]
   }
}, {
   "slug": "fade-in-on-scroll-4",
   "name": "Fade in on scroll 4",
   "value": {
       "style": {
           "opacity": 0
       },
       "triggers": [{
           "type": "scroll",
           "stepsA": [{
               "wait": "500ms"
           }, {
               "opacity": 1,
               "transition": "opacity 750ms ease 0"
           }],
           "stepsB": []
       }]
   }
}, {
   "slug": "on-load-0px",
   "name": "On load 0px",
   "value": {
       "style": {
           "height": "0px"
       },
       "triggers": []
   }
}, {
   "slug": "expand-container",
   "name": "Expand container",
   "value": {
       "style": {},
       "triggers": [{
           "type": "hover",
           "selector": ".expanding-container",
           "descend": true,
           "stepsA": [{
               "height": "auto",
               "transition": "height 500ms ease-in-out-back 0"
           }],
           "stepsB": [{
               "height": "0px",
               "transition": "height 200 ease 0"
           }]
       }]
   }
}]);
