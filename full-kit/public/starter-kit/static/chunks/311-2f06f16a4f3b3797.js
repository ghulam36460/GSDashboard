;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [311],
  {
    90: (e, t, n) => {
      "use strict"
      n.d(t, { Z: () => u })
      var r = n(2149),
        o = n(4632),
        i = n(9106),
        l = n(357),
        a = n(8081),
        u = r.forwardRef((e, t) => {
          var n, u
          let { container: s, ...c } = e,
            [d, f] = r.useState(!1)
          ;(0, l.N)(() => f(!0), [])
          let p =
            s ||
            (d &&
              (null === (u = globalThis) || void 0 === u
                ? void 0
                : null === (n = u.document) || void 0 === n
                  ? void 0
                  : n.body))
          return p
            ? o.createPortal((0, a.jsx)(i.sG.div, { ...c, ref: t }), p)
            : null
        })
      u.displayName = "Portal"
    },
    357: (e, t, n) => {
      "use strict"
      n.d(t, { N: () => o })
      var r = n(2149),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    493: (e, t, n) => {
      "use strict"
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r)
        }
      }
      n.d(t, { m: () => r })
    },
    1224: (e, t, n) => {
      "use strict"
      n.d(t, { f: () => i })
      var r = n(5334)
      function o(e) {
        return e
      }
      function i(e) {
        void 0 === e && (e = {})
        var t,
          n,
          i,
          l,
          a =
            ((t = null),
            void 0 === n && (n = o),
            (i = []),
            (l = !1),
            {
              read: function () {
                if (l)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  )
                return i.length ? i[i.length - 1] : null
              },
              useMedium: function (e) {
                var t = n(e, l)
                return (
                  i.push(t),
                  function () {
                    i = i.filter(function (e) {
                      return e !== t
                    })
                  }
                )
              },
              assignSyncMedium: function (e) {
                for (l = !0; i.length; ) {
                  var t = i
                  ;((i = []), t.forEach(e))
                }
                i = {
                  push: function (t) {
                    return e(t)
                  },
                  filter: function () {
                    return i
                  },
                }
              },
              assignMedium: function (e) {
                l = !0
                var t = []
                if (i.length) {
                  var n = i
                  ;((i = []), n.forEach(e), (t = i))
                }
                var r = function () {
                    var n = t
                    ;((t = []), n.forEach(e))
                  },
                  o = function () {
                    return Promise.resolve().then(r)
                  }
                ;(o(),
                  (i = {
                    push: function (e) {
                      ;(t.push(e), o())
                    },
                    filter: function (e) {
                      return ((t = t.filter(e)), i)
                    },
                  }))
              },
            })
        return ((a.options = (0, r.Cl)({ async: !0, ssr: !1 }, e)), a)
      }
    },
    1436: (e, t, n) => {
      "use strict"
      n.d(t, { A: () => l })
      var r = n(2149),
        o = n(4537),
        i = n.n(o)
      let l = function (e) {
        var t = (0, r.useState)(function () {
            return i().get(e) || null
          }),
          n = t[0],
          o = t[1]
        return [
          n,
          (0, r.useCallback)(
            function (t, n) {
              ;(i().set(e, t, n), o(t))
            },
            [e]
          ),
          (0, r.useCallback)(
            function () {
              ;(i().remove(e), o(null))
            },
            [e]
          ),
        ]
      }
    },
    2198: (e, t, n) => {
      "use strict"
      n.d(t, { b: () => s })
      var r = n(2149),
        o = n(9106),
        i = n(8081),
        l = "horizontal",
        a = ["horizontal", "vertical"],
        u = r.forwardRef((e, t) => {
          var n
          let { decorative: r, orientation: u = l, ...s } = e,
            c = ((n = u), a.includes(n)) ? u : l
          return (0, i.jsx)(o.sG.div, {
            "data-orientation": c,
            ...(r
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === c ? c : void 0,
                  role: "separator",
                }),
            ...s,
            ref: t,
          })
        })
      u.displayName = "Separator"
      var s = u
    },
    2799: (e, t, n) => {
      "use strict"
      n.d(t, { X: () => i })
      var r = n(2149),
        o = n(357)
      function i(e) {
        let [t, n] = r.useState(void 0)
        return (
          (0, o.N)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight })
              let t = new ResizeObserver((t) => {
                let r, o
                if (!Array.isArray(t) || !t.length) return
                let i = t[0]
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e
                  ;((r = t.inlineSize), (o = t.blockSize))
                } else ((r = e.offsetWidth), (o = e.offsetHeight))
                n({ width: r, height: o })
              })
              return (t.observe(e, { box: "border-box" }), () => t.unobserve(e))
            }
            n(void 0)
          }, [e]),
          t
        )
      }
    },
    2827: (e, t, n) => {
      "use strict"
      n.d(t, { T0: () => a })
      var r,
        o = n(2149),
        i = function () {
          var e = 0,
            t = null
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null
                  var e = document.createElement("style")
                  e.type = "text/css"
                  var t = r || n.nc
                  return (t && e.setAttribute("nonce", t), e)
                })())
              ) {
                var i, l
                ;((i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l))
              }
              e++
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null))
            },
          }
        },
        l = function () {
          var e = i()
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove()
                  }
                )
              },
              [t && n]
            )
          }
        },
        a = function () {
          var e = l()
          return function (t) {
            return (e(t.styles, t.dynamic), null)
          }
        }
    },
    3098: (e, t, n) => {
      "use strict"
      n.d(t, { S: () => a })
      var r = n(2149)
      function o(e, t) {
        return ("function" == typeof e ? e(t) : e && (e.current = t), e)
      }
      var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        l = new WeakMap()
      function a(e, t) {
        var n,
          a,
          u,
          s =
            ((n = t || null),
            (a = function (t) {
              return e.forEach(function (e) {
                return o(e, t)
              })
            }),
            ((u = (0, r.useState)(function () {
              return {
                value: n,
                callback: a,
                facade: {
                  get current() {
                    return u.value
                  },
                  set current(value) {
                    var e = u.value
                    e !== value && ((u.value = value), u.callback(value, e))
                  },
                },
              }
            })[0]).callback = a),
            u.facade)
        return (
          i(
            function () {
              var t = l.get(s)
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  i = s.current
                ;(n.forEach(function (e) {
                  r.has(e) || o(e, null)
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, i)
                  }))
              }
              l.set(s, e)
            },
            [e]
          ),
          s
        )
      }
    },
    3392: (e, t, n) => {
      "use strict"
      n.d(t, { UC: () => ed, Kq: () => eu, bL: () => es, l9: () => ec })
      var r = n(2149),
        o = n(493),
        i = n(1606),
        l = n(7260),
        a = n(8180),
        u = n(6428),
        s = n(4148),
        c = n(5923),
        d = n(9106),
        f = n(8081),
        p = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e
          return (0, f.jsx)(d.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, f.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          })
        })
      p.displayName = "Arrow"
      var v = n(9284),
        m = n(357),
        h = n(2799),
        g = "Popper",
        [y, w] = (0, l.A)(g),
        [b, x] = y(g),
        E = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null)
          return (0, f.jsx)(b, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          })
        }
      E.displayName = g
      var C = "PopperAnchor",
        R = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...l } = e,
            a = x(C, n),
            u = r.useRef(null),
            s = (0, i.s)(t, u)
          return (
            r.useEffect(() => {
              a.onAnchorChange((null == o ? void 0 : o.current) || u.current)
            }),
            o ? null : (0, f.jsx)(d.sG.div, { ...l, ref: s })
          )
        })
      R.displayName = C
      var N = "PopperContent",
        [T, O] = y(N),
        A = r.forwardRef((e, t) => {
          var n, o, l, a, u, p, g, y
          let {
              __scopePopper: w,
              side: b = "bottom",
              sideOffset: E = 0,
              align: C = "center",
              alignOffset: R = 0,
              arrowPadding: O = 0,
              avoidCollisions: A = !0,
              collisionBoundary: S = [],
              collisionPadding: L = 0,
              sticky: P = "partial",
              hideWhenDetached: k = !1,
              updatePositionStrategy: I = "optimized",
              onPlaced: W,
              ...F
            } = e,
            _ = x(N, w),
            [B, U] = r.useState(null),
            H = (0, i.s)(t, (e) => U(e)),
            [z, X] = r.useState(null),
            G = (0, h.X)(z),
            V =
              null !== (g = null == G ? void 0 : G.width) && void 0 !== g
                ? g
                : 0,
            Y =
              null !== (y = null == G ? void 0 : G.height) && void 0 !== y
                ? y
                : 0,
            $ =
              "number" == typeof L
                ? L
                : { top: 0, right: 0, bottom: 0, left: 0, ...L },
            q = Array.isArray(S) ? S : [S],
            K = q.length > 0,
            Z = { padding: $, boundary: q.filter(D), altBoundary: K },
            {
              refs: J,
              floatingStyles: Q,
              placement: ee,
              isPositioned: et,
              middlewareData: en,
            } = (0, s.we)({
              strategy: "fixed",
              placement: b + ("center" !== C ? "-" + C : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n]
                return (0, c.ll)(...t, { animationFrame: "always" === I })
              },
              elements: { reference: _.anchor },
              middleware: [
                (0, s.cY)({ mainAxis: E + Y, alignmentAxis: R }),
                A &&
                  (0, s.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === P ? (0, s.ER)() : void 0,
                    ...Z,
                  }),
                A && (0, s.UU)({ ...Z }),
                (0, s.Ej)({
                  ...Z,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style
                    ;(a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px")
                      ))
                  },
                }),
                z && (0, s.UE)({ element: z, padding: O }),
                M({ arrowWidth: V, arrowHeight: Y }),
                k && (0, s.jD)({ strategy: "referenceHidden", ...Z }),
              ],
            }),
            [er, eo] = j(ee),
            ei = (0, v.c)(W)
          ;(0, m.N)(() => {
            et && (null == ei || ei())
          }, [et, ei])
          let el = null === (n = en.arrow) || void 0 === n ? void 0 : n.x,
            ea = null === (o = en.arrow) || void 0 === o ? void 0 : o.y,
            eu =
              (null === (l = en.arrow) || void 0 === l
                ? void 0
                : l.centerOffset) !== 0,
            [es, ec] = r.useState()
          return (
            (0, m.N)(() => {
              B && ec(window.getComputedStyle(B).zIndex)
            }, [B]),
            (0, f.jsx)("div", {
              ref: J.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Q,
                transform: et ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: es,
                "--radix-popper-transform-origin": [
                  null === (a = en.transformOrigin) || void 0 === a
                    ? void 0
                    : a.x,
                  null === (u = en.transformOrigin) || void 0 === u
                    ? void 0
                    : u.y,
                ].join(" "),
                ...((null === (p = en.hide) || void 0 === p
                  ? void 0
                  : p.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, f.jsx)(T, {
                scope: w,
                placedSide: er,
                onArrowChange: X,
                arrowX: el,
                arrowY: ea,
                shouldHideArrow: eu,
                children: (0, f.jsx)(d.sG.div, {
                  "data-side": er,
                  "data-align": eo,
                  ...F,
                  ref: H,
                  style: { ...F.style, animation: et ? void 0 : "none" },
                }),
              }),
            })
          )
        })
      A.displayName = N
      var S = "PopperArrow",
        L = { top: "bottom", right: "left", bottom: "top", left: "right" },
        P = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = O(S, n),
            i = L[o.placedSide]
          return (0, f.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, f.jsx)(p, {
              ...r,
              ref: t,
              style: { ...r.style, display: "block" },
            }),
          })
        })
      function D(e) {
        return null !== e
      }
      P.displayName = S
      var M = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l
          let { placement: a, rects: u, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, v] = j(a),
            m = { start: "0%", center: "50%", end: "100%" }[v],
            h =
              (null !==
                (i = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            g =
              (null !==
                (l = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            y = "",
            w = ""
          return (
            "bottom" === p
              ? ((y = c ? m : "".concat(h, "px")), (w = "".concat(-f, "px")))
              : "top" === p
                ? ((y = c ? m : "".concat(h, "px")),
                  (w = "".concat(u.floating.height + f, "px")))
                : "right" === p
                  ? ((y = "".concat(-f, "px")),
                    (w = c ? m : "".concat(g, "px")))
                  : "left" === p &&
                    ((y = "".concat(u.floating.width + f, "px")),
                    (w = c ? m : "".concat(g, "px"))),
            { data: { x: y, y: w } }
          )
        },
      })
      function j(e) {
        let [t, n = "center"] = e.split("-")
        return [t, n]
      }
      n(90)
      var k = n(4146),
        I = n(3343),
        W = n(5809),
        F = r.forwardRef((e, t) =>
          (0, f.jsx)(d.sG.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        )
      F.displayName = "VisuallyHidden"
      var [_, B] = (0, l.A)("Tooltip", [w]),
        U = w(),
        H = "TooltipProvider",
        z = "tooltip.open",
        [X, G] = _(H),
        V = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            [a, u] = r.useState(!0),
            s = r.useRef(!1),
            c = r.useRef(0)
          return (
            r.useEffect(() => {
              let e = c.current
              return () => window.clearTimeout(e)
            }, []),
            (0, f.jsx)(X, {
              scope: t,
              isOpenDelayed: a,
              delayDuration: n,
              onOpen: r.useCallback(() => {
                ;(window.clearTimeout(c.current), u(!1))
              }, []),
              onClose: r.useCallback(() => {
                ;(window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => u(!0), o)))
              }, [o]),
              isPointerInTransitRef: s,
              onPointerInTransitChange: r.useCallback((e) => {
                s.current = e
              }, []),
              disableHoverableContent: i,
              children: l,
            })
          )
        }
      V.displayName = H
      var Y = "Tooltip",
        [$, q] = _(Y),
        K = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: o,
              defaultOpen: i = !1,
              onOpenChange: l,
              disableHoverableContent: a,
              delayDuration: s,
            } = e,
            c = G(Y, e.__scopeTooltip),
            d = U(t),
            [p, v] = r.useState(null),
            m = (0, u.B)(),
            h = r.useRef(0),
            g = null != a ? a : c.disableHoverableContent,
            y = null != s ? s : c.delayDuration,
            w = r.useRef(!1),
            [b = !1, x] = (0, W.i)({
              prop: o,
              defaultProp: i,
              onChange: (e) => {
                ;(e
                  ? (c.onOpen(), document.dispatchEvent(new CustomEvent(z)))
                  : c.onClose(),
                  null == l || l(e))
              },
            }),
            C = r.useMemo(
              () =>
                b ? (w.current ? "delayed-open" : "instant-open") : "closed",
              [b]
            ),
            R = r.useCallback(() => {
              ;(window.clearTimeout(h.current),
                (h.current = 0),
                (w.current = !1),
                x(!0))
            }, [x]),
            N = r.useCallback(() => {
              ;(window.clearTimeout(h.current), (h.current = 0), x(!1))
            }, [x]),
            T = r.useCallback(() => {
              ;(window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => {
                  ;((w.current = !0), x(!0), (h.current = 0))
                }, y)))
            }, [y, x])
          return (
            r.useEffect(
              () => () => {
                h.current && (window.clearTimeout(h.current), (h.current = 0))
              },
              []
            ),
            (0, f.jsx)(E, {
              ...d,
              children: (0, f.jsx)($, {
                scope: t,
                contentId: m,
                open: b,
                stateAttribute: C,
                trigger: p,
                onTriggerChange: v,
                onTriggerEnter: r.useCallback(() => {
                  c.isOpenDelayed ? T() : R()
                }, [c.isOpenDelayed, T, R]),
                onTriggerLeave: r.useCallback(() => {
                  g ? N() : (window.clearTimeout(h.current), (h.current = 0))
                }, [N, g]),
                onOpen: R,
                onClose: N,
                disableHoverableContent: g,
                children: n,
              }),
            })
          )
        }
      K.displayName = Y
      var Z = "TooltipTrigger",
        J = r.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...l } = e,
            a = q(Z, n),
            u = G(Z, n),
            s = U(n),
            c = r.useRef(null),
            p = (0, i.s)(t, c, a.onTriggerChange),
            v = r.useRef(!1),
            m = r.useRef(!1),
            h = r.useCallback(() => (v.current = !1), [])
          return (
            r.useEffect(
              () => () => document.removeEventListener("pointerup", h),
              [h]
            ),
            (0, f.jsx)(R, {
              asChild: !0,
              ...s,
              children: (0, f.jsx)(d.sG.button, {
                "aria-describedby": a.open ? a.contentId : void 0,
                "data-state": a.stateAttribute,
                ...l,
                ref: p,
                onPointerMove: (0, o.m)(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    m.current ||
                    u.isPointerInTransitRef.current ||
                    (a.onTriggerEnter(), (m.current = !0))
                }),
                onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                  ;(a.onTriggerLeave(), (m.current = !1))
                }),
                onPointerDown: (0, o.m)(e.onPointerDown, () => {
                  ;((v.current = !0),
                    document.addEventListener("pointerup", h, { once: !0 }))
                }),
                onFocus: (0, o.m)(e.onFocus, () => {
                  v.current || a.onOpen()
                }),
                onBlur: (0, o.m)(e.onBlur, a.onClose),
                onClick: (0, o.m)(e.onClick, a.onClose),
              }),
            })
          )
        })
      J.displayName = Z
      var [Q, ee] = _("TooltipPortal", { forceMount: void 0 }),
        et = "TooltipContent",
        en = r.forwardRef((e, t) => {
          let n = ee(et, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            l = q(et, e.__scopeTooltip)
          return (0, f.jsx)(k.C, {
            present: r || l.open,
            children: l.disableHoverableContent
              ? (0, f.jsx)(el, { side: o, ...i, ref: t })
              : (0, f.jsx)(er, { side: o, ...i, ref: t }),
          })
        }),
        er = r.forwardRef((e, t) => {
          let n = q(et, e.__scopeTooltip),
            o = G(et, e.__scopeTooltip),
            l = r.useRef(null),
            a = (0, i.s)(t, l),
            [u, s] = r.useState(null),
            { trigger: c, onClose: d } = n,
            p = l.current,
            { onPointerInTransitChange: v } = o,
            m = r.useCallback(() => {
              ;(s(null), v(!1))
            }, [v]),
            h = r.useCallback(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x)
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left"
                      case o:
                        return "right"
                      case n:
                        return "top"
                      case r:
                        return "bottom"
                      default:
                        throw Error("unreachable")
                    }
                  })(r, n.getBoundingClientRect())
                ;(s(
                  (function (e) {
                    let t = e.slice()
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : +!!(e.y > t.y)
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice()
                        let t = []
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n]
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2]
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop()
                            else break
                          }
                          t.push(r)
                        }
                        t.pop()
                        let n = []
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t]
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2]
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop()
                            else break
                          }
                          n.push(r)
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n)
                      })(t)
                    )
                  })([
                    ...(function (e, t) {
                      let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        r = []
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          )
                          break
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          )
                          break
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          )
                          break
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          )
                      }
                      return r
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ]
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  v(!0))
              },
              [v]
            )
          return (
            r.useEffect(() => () => m(), [m]),
            r.useEffect(() => {
              if (c && p) {
                let e = (e) => h(e, p),
                  t = (e) => h(e, c)
                return (
                  c.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    ;(c.removeEventListener("pointerleave", e),
                      p.removeEventListener("pointerleave", t))
                  }
                )
              }
            }, [c, p, h, m]),
            r.useEffect(() => {
              if (u) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e].x,
                          a = t[e].y,
                          u = t[i].x,
                          s = t[i].y
                        a > r != s > r &&
                          n < ((u - l) * (r - a)) / (s - a) + l &&
                          (o = !o)
                      }
                      return o
                    })(n, u)
                  r ? m() : o && (m(), d())
                }
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                )
              }
            }, [c, p, u, d, m]),
            (0, f.jsx)(el, { ...e, ref: a })
          )
        }),
        [eo, ei] = _(Y, { isInside: !1 }),
        el = r.forwardRef((e, t) => {
          let {
              __scopeTooltip: n,
              children: o,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              ...s
            } = e,
            c = q(et, n),
            d = U(n),
            { onClose: p } = c
          return (
            r.useEffect(
              () => (
                document.addEventListener(z, p),
                () => document.removeEventListener(z, p)
              ),
              [p]
            ),
            r.useEffect(() => {
              if (c.trigger) {
                let e = (e) => {
                  let t = e.target
                  ;(null == t ? void 0 : t.contains(c.trigger)) && p()
                }
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                )
              }
            }, [c.trigger, p]),
            (0, f.jsx)(a.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: p,
              children: (0, f.jsxs)(A, {
                "data-state": c.stateAttribute,
                ...d,
                ...s,
                ref: t,
                style: {
                  ...s.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, f.jsx)(I.xV, { children: o }),
                  (0, f.jsx)(eo, {
                    scope: n,
                    isInside: !0,
                    children: (0, f.jsx)(F, {
                      id: c.contentId,
                      role: "tooltip",
                      children: i || o,
                    }),
                  }),
                ],
              }),
            })
          )
        })
      en.displayName = et
      var ea = "TooltipArrow"
      r.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
          o = U(n)
        return ei(ea, n).isInside ? null : (0, f.jsx)(P, { ...o, ...r, ref: t })
      }).displayName = ea
      var eu = V,
        es = K,
        ec = J,
        ed = en
    },
    3839: (e, t, n) => {
      "use strict"
      n.d(t, { jp: () => m })
      var r = n(2149),
        o = n(2827),
        i = n(9707),
        l = { left: 0, top: 0, right: 0, gap: 0 },
        a = function (e) {
          return parseInt(e || "", 10) || 0
        },
        u = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"]
          return [a(n), a(r), a(o)]
        },
        s = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return l
          var t = u(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          }
        },
        c = (0, o.T0)(),
        d = "data-scroll-locked",
        f = function (e, t, n, r) {
          var o = e.left,
            l = e.top,
            a = e.right,
            u = e.gap
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(i.E9, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(l, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i.Mi, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pN, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.Mi, " .")
              .concat(i.Mi, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pN, " .")
              .concat(i.pN, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(i.xi, ": ")
              .concat(u, "px;\n  }\n")
          )
        },
        p = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10)
          return isFinite(e) ? e : 0
        },
        v = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(d, (p() + 1).toString()),
              function () {
                var e = p() - 1
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString())
              }
            )
          }, [])
        },
        m = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            i = void 0 === o ? "margin" : o
          v()
          var l = r.useMemo(
            function () {
              return s(i)
            },
            [i]
          )
          return r.createElement(c, {
            styles: f(l, !t, i, n ? "" : "!important"),
          })
        }
    },
    4146: (e, t, n) => {
      "use strict"
      n.d(t, { C: () => l })
      var r = n(2149),
        o = n(1606),
        i = n(357),
        l = (e) => {
          let { present: t, children: n } = e,
            l = (function (e) {
              var t, n
              let [o, l] = r.useState(),
                u = r.useRef({}),
                s = r.useRef(e),
                c = r.useRef("none"),
                [d, f] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t]
                    return null != r ? r : e
                  }, t))
              return (
                r.useEffect(() => {
                  let e = a(u.current)
                  c.current = "mounted" === d ? e : "none"
                }, [d]),
                (0, i.N)(() => {
                  let t = u.current,
                    n = s.current
                  if (n !== e) {
                    let r = c.current,
                      o = a(t)
                    ;(e
                      ? f("MOUNT")
                      : "none" === o ||
                          (null == t ? void 0 : t.display) === "none"
                        ? f("UNMOUNT")
                        : n && r !== o
                          ? f("ANIMATION_OUT")
                          : f("UNMOUNT"),
                      (s.current = e))
                  }
                }, [e, f]),
                (0, i.N)(() => {
                  if (o) {
                    var e
                    let t
                    let n =
                        null !== (e = o.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      r = (e) => {
                        let r = a(u.current).includes(e.animationName)
                        if (
                          e.target === o &&
                          r &&
                          (f("ANIMATION_END"), !s.current)
                        ) {
                          let e = o.style.animationFillMode
                          ;((o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e)
                            })))
                        }
                      },
                      i = (e) => {
                        e.target === o && (c.current = a(u.current))
                      }
                    return (
                      o.addEventListener("animationstart", i),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        ;(n.clearTimeout(t),
                          o.removeEventListener("animationstart", i),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r))
                      }
                    )
                  }
                  f("ANIMATION_END")
                }, [o, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    ;(e && (u.current = getComputedStyle(e)), l(e))
                  }, []),
                }
              )
            })(t),
            u =
              "function" == typeof n
                ? n({ present: l.isPresent })
                : r.Children.only(n),
            s = (0, o.s)(
              l.ref,
              (function (e) {
                var t, n
                let r =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning
                return o
                  ? e.ref
                  : (o =
                        (r =
                          null ===
                            (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                          void 0 === n
                            ? void 0
                            : n.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref
              })(u)
            )
          return "function" == typeof n || l.isPresent
            ? r.cloneElement(u, { ref: s })
            : null
        }
      function a(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      l.displayName = "Presence"
    },
    4148: (e, t, n) => {
      "use strict"
      n.d(t, {
        BN: () => v,
        ER: () => m,
        Ej: () => g,
        UE: () => w,
        UU: () => h,
        cY: () => p,
        jD: () => y,
        we: () => d,
      })
      var r = n(5923),
        o = n(2149),
        i = n(4632),
        l = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect
      function a(e, t) {
        let n, r, o
        if (e === t) return !0
        if (typeof e != typeof t) return !1
        if ("function" == typeof e && e.toString() === t.toString()) return !0
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1
            for (r = n; 0 != r--; ) if (!a(e[r], t[r])) return !1
            return !0
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1
          for (r = n; 0 != r--; ) {
            let n = o[r]
            if (("_owner" !== n || !e.$$typeof) && !a(e[n], t[n])) return !1
          }
          return !0
        }
        return e != e && t != t
      }
      function u(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }
      function s(e, t) {
        let n = u(e)
        return Math.round(t * n) / n
      }
      function c(e) {
        let t = o.useRef(e)
        return (
          l(() => {
            t.current = e
          }),
          t
        )
      }
      function d(e) {
        void 0 === e && (e = {})
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: d = [],
            platform: f,
            elements: { reference: p, floating: v } = {},
            transform: m = !0,
            whileElementsMounted: h,
            open: g,
          } = e,
          [y, w] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [b, x] = o.useState(d)
        a(b, d) || x(d)
        let [E, C] = o.useState(null),
          [R, N] = o.useState(null),
          T = o.useCallback((e) => {
            e !== L.current && ((L.current = e), C(e))
          }, []),
          O = o.useCallback((e) => {
            e !== P.current && ((P.current = e), N(e))
          }, []),
          A = p || E,
          S = v || R,
          L = o.useRef(null),
          P = o.useRef(null),
          D = o.useRef(y),
          M = null != h,
          j = c(h),
          k = c(f),
          I = c(g),
          W = o.useCallback(() => {
            if (!L.current || !P.current) return
            let e = { placement: t, strategy: n, middleware: b }
            ;(k.current && (e.platform = k.current),
              (0, r.rD)(L.current, P.current, e).then((e) => {
                let t = { ...e, isPositioned: !1 !== I.current }
                F.current &&
                  !a(D.current, t) &&
                  ((D.current = t),
                  i.flushSync(() => {
                    w(t)
                  }))
              }))
          }, [b, t, n, k, I])
        l(() => {
          !1 === g &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1),
            w((e) => ({ ...e, isPositioned: !1 })))
        }, [g])
        let F = o.useRef(!1)
        ;(l(
          () => (
            (F.current = !0),
            () => {
              F.current = !1
            }
          ),
          []
        ),
          l(() => {
            if ((A && (L.current = A), S && (P.current = S), A && S)) {
              if (j.current) return j.current(A, S, W)
              W()
            }
          }, [A, S, W, j, M]))
        let _ = o.useMemo(
            () => ({
              reference: L,
              floating: P,
              setReference: T,
              setFloating: O,
            }),
            [T, O]
          ),
          B = o.useMemo(() => ({ reference: A, floating: S }), [A, S]),
          U = o.useMemo(() => {
            let e = { position: n, left: 0, top: 0 }
            if (!B.floating) return e
            let t = s(B.floating, y.x),
              r = s(B.floating, y.y)
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(u(B.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r }
          }, [n, m, B.floating, y.x, y.y])
        return o.useMemo(
          () => ({ ...y, update: W, refs: _, elements: B, floatingStyles: U }),
          [y, W, _, B, U]
        )
      }
      let f = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: o } = "function" == typeof e ? e(t) : e
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? (0, r.UE)({ element: n.current, padding: o }).fn(t)
                : {}
              : n
                ? (0, r.UE)({ element: n, padding: o }).fn(t)
                : {}
          },
        }),
        p = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.ER)(e), options: [e, t] }),
        h = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] }),
        y = (e, t) => ({ ...(0, r.jD)(e), options: [e, t] }),
        w = (e, t) => ({ ...f(e), options: [e, t] })
    },
    4408: (e, t, n) => {
      "use strict"
      n.d(t, { DX: () => l })
      var r = n(2149),
        o = n(5362),
        i = n(8081),
        l = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            l = r.Children.toArray(n),
            u = l.find(s)
          if (u) {
            let e = u.props.children,
              n = l.map((t) =>
                t !== u
                  ? t
                  : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null
              )
            return (0, i.jsx)(a, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            })
          }
          return (0, i.jsx)(a, { ...o, ref: t, children: n })
        })
      l.displayName = "Slot"
      var a = r.forwardRef((e, t) => {
        let { children: n, ...i } = e
        if (r.isValidElement(n)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning
            return n
              ? e.ref
              : (n =
                    (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                    "isReactWarning" in t &&
                    t.isReactWarning)
                ? e.props.ref
                : e.props.ref || e.ref
          })(n)
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t }
              for (let r in t) {
                let o = e[r],
                  i = t[r]
                ;/^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        ;(i(...e), o(...e))
                      })
                    : o && (n[r] = o)
                  : "style" === r
                    ? (n[r] = { ...o, ...i })
                    : "className" === r &&
                      (n[r] = [o, i].filter(Boolean).join(" "))
              }
              return { ...e, ...n }
            })(i, n.props),
            ref: t ? (0, o.t)(t, e) : e,
          })
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null
      })
      a.displayName = "SlotClone"
      var u = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e })
      function s(e) {
        return r.isValidElement(e) && e.type === u
      }
    },
    4457: (e, t, n) => {
      "use strict"
      n.d(t, { A: () => r })
      let r = (0, n(9941).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ])
    },
    4537: (e, t, n) => {
      var r, o
      !(function (i) {
        var l
        ;(void 0 !==
          (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) &&
          (e.exports = o),
          (e.exports = i()))
      })(function () {
        function e() {
          for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) t[r] = n[r]
          }
          return t
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return (function n(r) {
          function o() {}
          function i(t, n, i) {
            if ("undefined" != typeof document) {
              ;("number" ==
                typeof (i = e({ path: "/" }, o.defaults, i)).expires &&
                (i.expires = new Date(new Date() * 1 + 864e5 * i.expires)),
                (i.expires = i.expires ? i.expires.toUTCString() : ""))
              try {
                var l = JSON.stringify(n)
                ;/^[\{\[]/.test(l) && (n = l)
              } catch (e) {}
              ;((n = r.write
                ? r.write(n, t)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape)))
              var a = ""
              for (var u in i) {
                if (i[u])
                  ((a += "; " + u),
                    !0 !== i[u] && (a += "=" + i[u].split(";")[0]))
              }
              return (document.cookie = t + "=" + n + a)
            }
          }
          function l(e, n) {
            if ("undefined" != typeof document) {
              for (
                var o = {},
                  i = document.cookie ? document.cookie.split("; ") : [],
                  l = 0;
                l < i.length;
                l++
              ) {
                var a = i[l].split("="),
                  u = a.slice(1).join("=")
                n || '"' !== u.charAt(0) || (u = u.slice(1, -1))
                try {
                  var s = t(a[0])
                  if (((u = (r.read || r)(u, s) || t(u)), n))
                    try {
                      u = JSON.parse(u)
                    } catch (e) {}
                  if (((o[s] = u), e === s)) break
                } catch (e) {}
              }
              return e ? o[e] : o
            }
          }
          return (
            (o.set = i),
            (o.get = function (e) {
              return l(e, !1)
            }),
            (o.getJSON = function (e) {
              return l(e, !0)
            }),
            (o.remove = function (t, n) {
              i(t, "", e(n, { expires: -1 }))
            }),
            (o.defaults = {}),
            (o.withConverter = n),
            o
          )
        })(function () {})
      })
    },
    5039: (e, t, n) => {
      "use strict"
      n.d(t, { A: () => r })
      let r = (0, n(9941).A)("PanelLeft", [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
      ])
    },
    5238: (e, t, n) => {
      "use strict"
      n.d(t, { m: () => l })
      var r = n(5334),
        o = n(2149),
        i = function (e) {
          var t = e.sideCar,
            n = (0, r.Tt)(e, ["sideCar"])
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            )
          var i = t.read()
          if (!i) throw Error("Sidecar medium not found")
          return o.createElement(i, (0, r.Cl)({}, n))
        }
      function l(e, t) {
        return (e.useMedium(t), i)
      }
      i.isSideCarExport = !0
    },
    5334: (e, t, n) => {
      "use strict"
      n.d(t, { Cl: () => r, Tt: () => o, fX: () => i })
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }).apply(this, arguments)
      }
      function o(e, t) {
        var n = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r])
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]])
        return n
      }
      Object.create
      function i(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
        return e.concat(r || Array.prototype.slice.call(t))
      }
      ;(Object.create, "function" == typeof SuppressedError && SuppressedError)
    },
    5362: (e, t, n) => {
      "use strict"
      n.d(t, { s: () => i, t: () => o })
      var r = n(2149)
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
      }
      function i(...e) {
        return r.useCallback(o(...e), e)
      }
    },
    5572: (e, t, n) => {
      "use strict"
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r)
        }
      }
      n.d(t, { m: () => r })
    },
    5809: (e, t, n) => {
      "use strict"
      n.d(t, { i: () => i })
      var r = n(2149),
        o = n(9284)
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [i] = n,
              l = r.useRef(i),
              a = (0, o.c)(t)
            return (
              r.useEffect(() => {
                l.current !== i && (a(i), (l.current = i))
              }, [i, l, a]),
              n
            )
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          u = a ? e : i,
          s = (0, o.c)(n)
        return [
          u,
          r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t
                n !== e && s(n)
              } else l(t)
            },
            [a, e, l, s]
          ),
        ]
      }
    },
    5923: (e, t, n) => {
      "use strict"
      n.d(t, {
        UE: () => ef,
        ll: () => el,
        rD: () => ev,
        UU: () => es,
        jD: () => ed,
        ER: () => ep,
        cY: () => ea,
        BN: () => eu,
        Ej: () => ec,
      })
      let r = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        l = Math.round,
        a = Math.floor,
        u = (e) => ({ x: e, y: e }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" },
        c = { start: "end", end: "start" }
      function d(e, t) {
        return "function" == typeof e ? e(t) : e
      }
      function f(e) {
        return e.split("-")[0]
      }
      function p(e) {
        return e.split("-")[1]
      }
      function v(e) {
        return "x" === e ? "y" : "x"
      }
      function m(e) {
        return "y" === e ? "height" : "width"
      }
      function h(e) {
        return ["top", "bottom"].includes(f(e)) ? "y" : "x"
      }
      function g(e) {
        return e.replace(/start|end/g, (e) => c[e])
      }
      function y(e) {
        return e.replace(/left|right|bottom|top/g, (e) => s[e])
      }
      function w(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e }
      }
      function b(e) {
        let { x: t, y: n, width: r, height: o } = e
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        }
      }
      function x(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = h(t),
          a = v(h(t)),
          u = m(a),
          s = f(t),
          c = "y" === l,
          d = o.x + o.width / 2 - i.width / 2,
          g = o.y + o.height / 2 - i.height / 2,
          y = o[u] / 2 - i[u] / 2
        switch (s) {
          case "top":
            r = { x: d, y: o.y - i.height }
            break
          case "bottom":
            r = { x: d, y: o.y + o.height }
            break
          case "right":
            r = { x: o.x + o.width, y: g }
            break
          case "left":
            r = { x: o.x - i.width, y: g }
            break
          default:
            r = { x: o.x, y: o.y }
        }
        switch (p(t)) {
          case "start":
            r[a] -= y * (n && c ? -1 : 1)
            break
          case "end":
            r[a] += y * (n && c ? -1 : 1)
        }
        return r
      }
      let E = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = x(s, r, u),
          f = r,
          p = {},
          v = 0
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: m } = a[n],
            {
              x: h,
              y: g,
              data: y,
              reset: w,
            } = await m({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            })
          ;((c = null != h ? h : c),
            (d = null != g ? g : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              v <= 50 &&
              (v++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (s =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: c, y: d } = x(s, f, u))),
              (n = -1)))
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p }
      }
      async function C(e, t) {
        var n
        void 0 === t && (t = {})
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: v = 0,
          } = d(t, e),
          m = w(v),
          h = a[p ? ("floating" === f ? "reference" : "floating") : f],
          g = b(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: u,
            })
          ),
          y =
            "floating" === f
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          x = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          E = ((await (null == i.isElement ? void 0 : i.isElement(x))) &&
            (await (null == i.getScale ? void 0 : i.getScale(x)))) || {
            x: 1,
            y: 1,
          },
          C = b(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: y,
                  offsetParent: x,
                  strategy: u,
                })
              : y
          )
        return {
          top: (g.top - C.top + m.top) / E.y,
          bottom: (C.bottom - g.bottom + m.bottom) / E.y,
          left: (g.left - C.left + m.left) / E.x,
          right: (C.right - g.right + m.right) / E.x,
        }
      }
      function R(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        }
      }
      function N(e) {
        return r.some((t) => e[t] >= 0)
      }
      async function T(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = f(n),
          a = p(n),
          u = "y" === h(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          c = i && u ? -1 : 1,
          v = d(t, e),
          {
            mainAxis: m,
            crossAxis: g,
            alignmentAxis: y,
          } = "number" == typeof v
            ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: v.mainAxis || 0,
                crossAxis: v.crossAxis || 0,
                alignmentAxis: v.alignmentAxis,
              }
        return (
          a && "number" == typeof y && (g = "end" === a ? -1 * y : y),
          u ? { x: g * c, y: m * s } : { x: m * s, y: g * c }
        )
      }
      function O() {
        return "undefined" != typeof window
      }
      function A(e) {
        return P(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }
      function S(e) {
        var t
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        )
      }
      function L(e) {
        var t
        return null ==
          (t = (P(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement
      }
      function P(e) {
        return !!O() && (e instanceof Node || e instanceof S(e).Node)
      }
      function D(e) {
        return !!O() && (e instanceof Element || e instanceof S(e).Element)
      }
      function M(e) {
        return (
          !!O() && (e instanceof HTMLElement || e instanceof S(e).HTMLElement)
        )
      }
      function j(e) {
        return (
          !!O() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof S(e).ShadowRoot)
        )
      }
      function k(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = B(e)
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        )
      }
      function I(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      function W(e) {
        let t = F(),
          n = D(e) ? B(e) : e
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        )
      }
      function F() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        )
      }
      function _(e) {
        return ["html", "body", "#document"].includes(A(e))
      }
      function B(e) {
        return S(e).getComputedStyle(e)
      }
      function U(e) {
        return D(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
      }
      function H(e) {
        if ("html" === A(e)) return e
        let t = e.assignedSlot || e.parentNode || (j(e) && e.host) || L(e)
        return j(t) ? t.host : t
      }
      function z(e, t, n) {
        var r
        ;(void 0 === t && (t = []), void 0 === n && (n = !0))
        let o = (function e(t) {
            let n = H(t)
            return _(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : M(n) && k(n)
                ? n
                : e(n)
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = S(o)
        if (i) {
          let e = X(l)
          return t.concat(
            l,
            l.visualViewport || [],
            k(o) ? o : [],
            e && n ? z(e) : []
          )
        }
        return t.concat(o, z(o, [], n))
      }
      function X(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null
      }
      function G(e) {
        let t = B(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = M(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          u = l(n) !== i || l(r) !== a
        return (u && ((n = i), (r = a)), { width: n, height: r, $: u })
      }
      function V(e) {
        return D(e) ? e : e.contextElement
      }
      function Y(e) {
        let t = V(e)
        if (!M(t)) return u(1)
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = G(t),
          a = (i ? l(n.width) : n.width) / r,
          s = (i ? l(n.height) : n.height) / o
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: a, y: s }
        )
      }
      let $ = u(0)
      function q(e) {
        let t = S(e)
        return F() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : $
      }
      function K(e, t, n, r) {
        var o
        ;(void 0 === t && (t = !1), void 0 === n && (n = !1))
        let i = e.getBoundingClientRect(),
          l = V(e),
          a = u(1)
        t && (r ? D(r) && (a = Y(r)) : (a = Y(e)))
        let s = (void 0 === (o = n) && (o = !1), r && (!o || r === S(l)) && o)
            ? q(l)
            : u(0),
          c = (i.left + s.x) / a.x,
          d = (i.top + s.y) / a.y,
          f = i.width / a.x,
          p = i.height / a.y
        if (l) {
          let e = S(l),
            t = r && D(r) ? S(r) : r,
            n = e,
            o = X(n)
          for (; o && r && t !== n; ) {
            let e = Y(o),
              t = o.getBoundingClientRect(),
              r = B(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y
            ;((c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (p *= e.y),
              (c += i),
              (d += l),
              (o = X((n = S(o)))))
          }
        }
        return b({ width: f, height: p, x: c, y: d })
      }
      function Z(e, t) {
        let n = U(e).scrollLeft
        return t ? t.left + n : K(L(e)).left + n
      }
      function J(e, t, n) {
        void 0 === n && (n = !1)
        let r = e.getBoundingClientRect()
        return {
          x: r.left + t.scrollLeft - (n ? 0 : Z(e, r)),
          y: r.top + t.scrollTop,
        }
      }
      function Q(e, t, n) {
        let r
        if ("viewport" === t)
          r = (function (e, t) {
            let n = S(e),
              r = L(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0
            if (o) {
              ;((i = o.width), (l = o.height))
              let e = F()
              ;(!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop))
            }
            return { width: i, height: l, x: a, y: u }
          })(e, n)
        else if ("document" === t)
          r = (function (e) {
            let t = L(e),
              n = U(e),
              r = e.ownerDocument.body,
              o = i(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              l = i(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + Z(e),
              u = -n.scrollTop
            return (
              "rtl" === B(r).direction &&
                (a += i(t.clientWidth, r.clientWidth) - o),
              { width: o, height: l, x: a, y: u }
            )
          })(L(e))
        else if (D(t))
          r = (function (e, t) {
            let n = K(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = M(e) ? Y(e) : u(1),
              l = e.clientWidth * i.x,
              a = e.clientHeight * i.y
            return { width: l, height: a, x: o * i.x, y: r * i.y }
          })(t, n)
        else {
          let n = q(e)
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height }
        }
        return b(r)
      }
      function ee(e) {
        return "static" === B(e).position
      }
      function et(e, t) {
        if (!M(e) || "fixed" === B(e).position) return null
        if (t) return t(e)
        let n = e.offsetParent
        return (L(e) === n && (n = n.ownerDocument.body), n)
      }
      function en(e, t) {
        let n = S(e)
        if (I(e)) return n
        if (!M(e)) {
          let t = H(e)
          for (; t && !_(t); ) {
            if (D(t) && !ee(t)) return t
            t = H(t)
          }
          return n
        }
        let r = et(e, t)
        for (; r && ["table", "td", "th"].includes(A(r)) && ee(r); )
          r = et(r, t)
        return r && _(r) && ee(r) && !W(r)
          ? n
          : r ||
              (function (e) {
                let t = H(e)
                for (; M(t) && !_(t); ) {
                  if (W(t)) return t
                  if (I(t)) break
                  t = H(t)
                }
                return null
              })(e) ||
              n
      }
      let er = async function (e) {
          let t = this.getOffsetParent || en,
            n = this.getDimensions,
            r = await n(e.floating)
          return {
            reference: (function (e, t, n) {
              let r = M(t),
                o = L(t),
                i = "fixed" === n,
                l = K(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                s = u(0)
              if (r || (!r && !i)) {
                if ((("body" !== A(t) || k(o)) && (a = U(t)), r)) {
                  let e = K(t, !0, i, t)
                  ;((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop))
                } else o && (s.x = Z(o))
              }
              let c = !o || r || i ? u(0) : J(o, a)
              return {
                x: l.left + a.scrollLeft - s.x - c.x,
                y: l.top + a.scrollTop - s.y - c.y,
                width: l.width,
                height: l.height,
              }
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          }
        },
        eo = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = L(r),
              a = !!t && I(t.floating)
            if (r === l || (a && i)) return n
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = u(1),
              d = u(0),
              f = M(r)
            if (
              (f || (!f && !i)) &&
              (("body" !== A(r) || k(l)) && (s = U(r)), M(r))
            ) {
              let e = K(r)
              ;((c = Y(r)),
                (d.x = e.x + r.clientLeft),
                (d.y = e.y + r.clientTop))
            }
            let p = !l || f || i ? u(0) : J(l, s, !0)
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - s.scrollLeft * c.x + d.x + p.x,
              y: n.y * c.y - s.scrollTop * c.y + d.y + p.y,
            }
          },
          getDocumentElement: L,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: l } = e,
              a = [
                ...("clippingAncestors" === n
                  ? I(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e)
                        if (n) return n
                        let r = z(e, [], !1).filter(
                            (e) => D(e) && "body" !== A(e)
                          ),
                          o = null,
                          i = "fixed" === B(e).position,
                          l = i ? H(e) : e
                        for (; D(l) && !_(l); ) {
                          let t = B(l),
                            n = W(l)
                          ;(n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (k(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = H(t)
                                      return (
                                        !(r === n || !D(r) || _(r)) &&
                                        ("fixed" === B(r).position || e(r, n))
                                      )
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = H(l)))
                        }
                        return (t.set(e, r), r)
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              u = a[0],
              s = a.reduce(
                (e, n) => {
                  let r = Q(t, n, l)
                  return (
                    (e.top = i(r.top, e.top)),
                    (e.right = o(r.right, e.right)),
                    (e.bottom = o(r.bottom, e.bottom)),
                    (e.left = i(r.left, e.left)),
                    e
                  )
                },
                Q(t, u, l)
              )
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            }
          },
          getOffsetParent: en,
          getElementRects: er,
          getClientRects: function (e) {
            return Array.from(e.getClientRects())
          },
          getDimensions: function (e) {
            let { width: t, height: n } = G(e)
            return { width: t, height: n }
          },
          getScale: Y,
          isElement: D,
          isRTL: function (e) {
            return "rtl" === B(e).direction
          },
        }
      function ei(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        )
      }
      function el(e, t, n, r) {
        let l
        void 0 === r && (r = {})
        let {
            ancestorScroll: u = !0,
            ancestorResize: s = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: d = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = r,
          p = V(e),
          v = u || s ? [...(p ? z(p) : []), ...z(t)] : []
        v.forEach((e) => {
          ;(u && e.addEventListener("scroll", n, { passive: !0 }),
            s && e.addEventListener("resize", n))
        })
        let m =
            p && d
              ? (function (e, t) {
                  let n,
                    r = null,
                    l = L(e)
                  function u() {
                    var e
                    ;(clearTimeout(n),
                      null == (e = r) || e.disconnect(),
                      (r = null))
                  }
                  return (
                    !(function s(c, d) {
                      ;(void 0 === c && (c = !1), void 0 === d && (d = 1), u())
                      let f = e.getBoundingClientRect(),
                        { left: p, top: v, width: m, height: h } = f
                      if ((c || t(), !m || !h)) return
                      let g = a(v),
                        y = a(l.clientWidth - (p + m)),
                        w = {
                          rootMargin:
                            -g +
                            "px " +
                            -y +
                            "px " +
                            -a(l.clientHeight - (v + h)) +
                            "px " +
                            -a(p) +
                            "px",
                          threshold: i(0, o(1, d)) || 1,
                        },
                        b = !0
                      function x(t) {
                        let r = t[0].intersectionRatio
                        if (r !== d) {
                          if (!b) return s()
                          r
                            ? s(!1, r)
                            : (n = setTimeout(() => {
                                s(!1, 1e-7)
                              }, 1e3))
                        }
                        ;(1 !== r || ei(f, e.getBoundingClientRect()) || s(),
                          (b = !1))
                      }
                      try {
                        r = new IntersectionObserver(x, {
                          ...w,
                          root: l.ownerDocument,
                        })
                      } catch (e) {
                        r = new IntersectionObserver(x, w)
                      }
                      r.observe(e)
                    })(!0),
                    u
                  )
                })(p, n)
              : null,
          h = -1,
          g = null
        c &&
          ((g = new ResizeObserver((e) => {
            let [r] = e
            ;(r &&
              r.target === p &&
              g &&
              (g.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                var e
                null == (e = g) || e.observe(t)
              }))),
              n())
          })),
          p && !f && g.observe(p),
          g.observe(t))
        let y = f ? K(e) : null
        return (
          f &&
            (function t() {
              let r = K(e)
              ;(y && !ei(y, r) && n(), (y = r), (l = requestAnimationFrame(t)))
            })(),
          n(),
          () => {
            var e
            ;(v.forEach((e) => {
              ;(u && e.removeEventListener("scroll", n),
                s && e.removeEventListener("resize", n))
            }),
              null == m || m(),
              null == (e = g) || e.disconnect(),
              (g = null),
              f && cancelAnimationFrame(l))
          }
        )
      }
      let ea = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r
                let { x: o, y: i, placement: l, middlewareData: a } = t,
                  u = await T(t, e)
                return l === (null == (n = a.offset) ? void 0 : n.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } }
              },
            }
          )
        },
        eu = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: r, placement: l } = t,
                  {
                    mainAxis: a = !0,
                    crossAxis: u = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e
                        return { x: t, y: n }
                      },
                    },
                    ...c
                  } = d(e, t),
                  p = { x: n, y: r },
                  m = await C(t, c),
                  g = h(f(l)),
                  y = v(g),
                  w = p[y],
                  b = p[g]
                if (a) {
                  let e = "y" === y ? "top" : "left",
                    t = "y" === y ? "bottom" : "right",
                    n = w + m[e],
                    r = w - m[t]
                  w = i(n, o(w, r))
                }
                if (u) {
                  let e = "y" === g ? "top" : "left",
                    t = "y" === g ? "bottom" : "right",
                    n = b + m[e],
                    r = b - m[t]
                  b = i(n, o(b, r))
                }
                let x = s.fn({ ...t, [y]: w, [g]: b })
                return {
                  ...x,
                  data: { x: x.x - n, y: x.y - r, enabled: { [y]: a, [g]: u } },
                }
              },
            }
          )
        },
        es = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, r, o, i, l
                let {
                    placement: a,
                    middlewareData: u,
                    rects: s,
                    initialPlacement: c,
                    platform: w,
                    elements: b,
                  } = t,
                  {
                    mainAxis: x = !0,
                    crossAxis: E = !0,
                    fallbackPlacements: R,
                    fallbackStrategy: N = "bestFit",
                    fallbackAxisSideDirection: T = "none",
                    flipAlignment: O = !0,
                    ...A
                  } = d(e, t)
                if (null != (n = u.arrow) && n.alignmentOffset) return {}
                let S = f(a),
                  L = h(c),
                  P = f(c) === c,
                  D = await (null == w.isRTL ? void 0 : w.isRTL(b.floating)),
                  M =
                    R ||
                    (P || !O
                      ? [y(c)]
                      : (function (e) {
                          let t = y(e)
                          return [g(e), t, g(t)]
                        })(c)),
                  j = "none" !== T
                !R &&
                  j &&
                  M.push(
                    ...(function (e, t, n, r) {
                      let o = p(e),
                        i = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"]
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r
                              return t ? r : o
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"]
                            default:
                              return []
                          }
                        })(f(e), "start" === n, r)
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(g)))),
                        i
                      )
                    })(c, O, T, D)
                  )
                let k = [c, ...M],
                  I = await C(t, A),
                  W = [],
                  F = (null == (r = u.flip) ? void 0 : r.overflows) || []
                if ((x && W.push(I[S]), E)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1)
                    let r = p(e),
                      o = v(h(e)),
                      i = m(o),
                      l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top"
                    return (
                      t.reference[i] > t.floating[i] && (l = y(l)),
                      [l, y(l)]
                    )
                  })(a, s, D)
                  W.push(I[e[0]], I[e[1]])
                }
                if (
                  ((F = [...F, { placement: a, overflows: W }]),
                  !W.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = k[e]
                  if (t)
                    return {
                      data: { index: e, overflows: F },
                      reset: { placement: t },
                    }
                  let n =
                    null ==
                    (i = F.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : i.placement
                  if (!n)
                    switch (N) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = F.filter((e) => {
                            if (j) {
                              let t = h(e.placement)
                              return t === L || "y" === t
                            }
                            return !0
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0]
                        e && (n = e)
                        break
                      }
                      case "initialPlacement":
                        n = c
                    }
                  if (a !== n) return { reset: { placement: n } }
                }
                return {}
              },
            }
          )
        },
        ec = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                var n, r
                let l, a
                let { placement: u, rects: s, platform: c, elements: v } = t,
                  { apply: m = () => {}, ...g } = d(e, t),
                  y = await C(t, g),
                  w = f(u),
                  b = p(u),
                  x = "y" === h(u),
                  { width: E, height: R } = s.floating
                "top" === w || "bottom" === w
                  ? ((l = w),
                    (a =
                      b ===
                      ((await (null == c.isRTL ? void 0 : c.isRTL(v.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((a = w), (l = "end" === b ? "top" : "bottom"))
                let N = R - y.top - y.bottom,
                  T = E - y.left - y.right,
                  O = o(R - y[l], N),
                  A = o(E - y[a], T),
                  S = !t.middlewareData.shift,
                  L = O,
                  P = A
                if (
                  (null != (n = t.middlewareData.shift) &&
                    n.enabled.x &&
                    (P = T),
                  null != (r = t.middlewareData.shift) &&
                    r.enabled.y &&
                    (L = N),
                  S && !b)
                ) {
                  let e = i(y.left, 0),
                    t = i(y.right, 0),
                    n = i(y.top, 0),
                    r = i(y.bottom, 0)
                  x
                    ? (P =
                        E -
                        2 * (0 !== e || 0 !== t ? e + t : i(y.left, y.right)))
                    : (L =
                        R -
                        2 * (0 !== n || 0 !== r ? n + r : i(y.top, y.bottom)))
                }
                await m({ ...t, availableWidth: P, availableHeight: L })
                let D = await c.getDimensions(v.floating)
                return E !== D.width || R !== D.height
                  ? { reset: { rects: !0 } }
                  : {}
              },
            }
          )
        },
        ed = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "hide",
              options: e,
              async fn(t) {
                let { rects: n } = t,
                  { strategy: r = "referenceHidden", ...o } = d(e, t)
                switch (r) {
                  case "referenceHidden": {
                    let e = R(
                      await C(t, { ...o, elementContext: "reference" }),
                      n.reference
                    )
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: N(e),
                      },
                    }
                  }
                  case "escaped": {
                    let e = R(await C(t, { ...o, altBoundary: !0 }), n.floating)
                    return { data: { escapedOffsets: e, escaped: N(e) } }
                  }
                  default:
                    return {}
                }
              },
            }
          )
        },
        ef = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: l,
                rects: a,
                platform: u,
                elements: s,
                middlewareData: c,
              } = t,
              { element: f, padding: g = 0 } = d(e, t) || {}
            if (null == f) return {}
            let y = w(g),
              b = { x: n, y: r },
              x = v(h(l)),
              E = m(x),
              C = await u.getDimensions(f),
              R = "y" === x,
              N = R ? "clientHeight" : "clientWidth",
              T = a.reference[E] + a.reference[x] - b[x] - a.floating[E],
              O = b[x] - a.reference[x],
              A = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(f)),
              S = A ? A[N] : 0
            ;(S && (await (null == u.isElement ? void 0 : u.isElement(A)))) ||
              (S = s.floating[N] || a.floating[E])
            let L = S / 2 - C[E] / 2 - 1,
              P = o(y[R ? "top" : "left"], L),
              D = o(y[R ? "bottom" : "right"], L),
              M = S - C[E] - D,
              j = S / 2 - C[E] / 2 + (T / 2 - O / 2),
              k = i(P, o(j, M)),
              I =
                !c.arrow &&
                null != p(l) &&
                j !== k &&
                a.reference[E] / 2 - (j < P ? P : D) - C[E] / 2 < 0,
              W = I ? (j < P ? j - P : j - M) : 0
            return {
              [x]: b[x] + W,
              data: {
                [x]: k,
                centerOffset: j - k - W,
                ...(I && { alignmentOffset: W }),
              },
              reset: I,
            }
          },
        }),
        ep = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: l,
                  } = t,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: s = !0,
                  } = d(e, t),
                  c = { x: n, y: r },
                  p = h(o),
                  m = v(p),
                  g = c[m],
                  y = c[p],
                  w = d(a, t),
                  b =
                    "number" == typeof w
                      ? { mainAxis: w, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...w }
                if (u) {
                  let e = "y" === m ? "height" : "width",
                    t = i.reference[m] - i.floating[e] + b.mainAxis,
                    n = i.reference[m] + i.reference[e] - b.mainAxis
                  g < t ? (g = t) : g > n && (g = n)
                }
                if (s) {
                  var x, E
                  let e = "y" === m ? "width" : "height",
                    t = ["top", "left"].includes(f(o)),
                    n =
                      i.reference[p] -
                      i.floating[e] +
                      ((t && (null == (x = l.offset) ? void 0 : x[p])) || 0) +
                      (t ? 0 : b.crossAxis),
                    r =
                      i.reference[p] +
                      i.reference[e] +
                      (t ? 0 : (null == (E = l.offset) ? void 0 : E[p]) || 0) -
                      (t ? b.crossAxis : 0)
                  y < n ? (y = n) : y > r && (y = r)
                }
                return { [m]: g, [p]: y }
              },
            }
          )
        },
        ev = (e, t, n) => {
          let r = new Map(),
            o = { platform: eo, ...n },
            i = { ...o.platform, _c: r }
          return E(e, t, { ...o, platform: i })
        }
    },
    6093: (e, t, n) => {
      "use strict"
      n.d(t, { Eq: () => c })
      var r = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body
        },
        o = new WeakMap(),
        i = new WeakMap(),
        l = {},
        a = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode))
        },
        s = function (e, t, n, r) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e
              var n = u(e)
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null)
            })
            .filter(function (e) {
              return !!e
            })
          l[n] || (l[n] = new WeakMap())
          var c = l[n],
            d = [],
            f = new Set(),
            p = new Set(s),
            v = function (e) {
              !(!e || f.has(e)) && (f.add(e), v(e.parentNode))
            }
          s.forEach(v)
          var m = function (e) {
            !(!e || p.has(e)) &&
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e)
                else
                  try {
                    var t = e.getAttribute(r),
                      l = null !== t && "false" !== t,
                      a = (o.get(e) || 0) + 1,
                      u = (c.get(e) || 0) + 1
                    ;(o.set(e, a),
                      c.set(e, u),
                      d.push(e),
                      1 === a && l && i.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      l || e.setAttribute(r, "true"))
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t)
                  }
              })
          }
          return (
            m(t),
            f.clear(),
            a++,
            function () {
              ;(d.forEach(function (e) {
                var t = o.get(e) - 1,
                  l = c.get(e) - 1
                ;(o.set(e, t),
                  c.set(e, l),
                  t || (i.has(e) || e.removeAttribute(r), i.delete(e)),
                  l || e.removeAttribute(n))
              }),
                --a ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (i = new WeakMap()),
                  (l = {})))
            }
          )
        },
        c = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden")
          var o = Array.from(Array.isArray(e) ? e : [e]),
            i = t || r(e)
          return i
            ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))),
              s(o, i, n, "aria-hidden"))
            : function () {
                return null
              }
        }
    },
    6248: (e, t, n) => {
      "use strict"
      n.d(t, { C: () => a })
      var r = n(2149),
        o = n(4632),
        i = n(5362),
        l = n(357),
        a = (e) => {
          let { present: t, children: n } = e,
            a = (function (e) {
              var t, n
              let [i, a] = r.useState(),
                s = r.useRef({}),
                c = r.useRef(e),
                d = r.useRef("none"),
                [f, p] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t]
                    return null != r ? r : e
                  }, t))
              return (
                r.useEffect(() => {
                  let e = u(s.current)
                  d.current = "mounted" === f ? e : "none"
                }, [f]),
                (0, l.N)(() => {
                  let t = s.current,
                    n = c.current
                  if (n !== e) {
                    let r = d.current,
                      o = u(t)
                    ;(e
                      ? p("MOUNT")
                      : "none" === o ||
                          (null == t ? void 0 : t.display) === "none"
                        ? p("UNMOUNT")
                        : n && r !== o
                          ? p("ANIMATION_OUT")
                          : p("UNMOUNT"),
                      (c.current = e))
                  }
                }, [e, p]),
                (0, l.N)(() => {
                  if (i) {
                    let e = (e) => {
                        let t = u(s.current).includes(e.animationName)
                        e.target === i &&
                          t &&
                          o.flushSync(() => p("ANIMATION_END"))
                      },
                      t = (e) => {
                        e.target === i && (d.current = u(s.current))
                      }
                    return (
                      i.addEventListener("animationstart", t),
                      i.addEventListener("animationcancel", e),
                      i.addEventListener("animationend", e),
                      () => {
                        ;(i.removeEventListener("animationstart", t),
                          i.removeEventListener("animationcancel", e),
                          i.removeEventListener("animationend", e))
                      }
                    )
                  }
                  p("ANIMATION_END")
                }, [i, p]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    ;(e && (s.current = getComputedStyle(e)), a(e))
                  }, []),
                }
              )
            })(t),
            s =
              "function" == typeof n
                ? n({ present: a.isPresent })
                : r.Children.only(n),
            c = (0, i.s)(
              a.ref,
              (function (e) {
                var t, n
                let r =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning
                return o
                  ? e.ref
                  : (o =
                        (r =
                          null ===
                            (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                          void 0 === n
                            ? void 0
                            : n.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref
              })(s)
            )
          return "function" == typeof n || a.isPresent
            ? r.cloneElement(s, { ref: c })
            : null
        }
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      a.displayName = "Presence"
    },
    6428: (e, t, n) => {
      "use strict"
      n.d(t, { B: () => u })
      var r,
        o = n(2149),
        i = n(357),
        l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0
      function u(e) {
        let [t, n] = o.useState(l())
        return (
          (0, i.N)(() => {
            e || n((e) => e ?? String(a++))
          }, [e]),
          e || (t ? `radix-${t}` : "")
        )
      }
    },
    6504: (e, t, n) => {
      "use strict"
      n.d(t, { bL: () => g, lg: () => y, qW: () => p })
      var r,
        o = n(2149),
        i = n(5572),
        l = n(9108),
        a = n(5362),
        u = n(9284),
        s = n(6967),
        c = n(8081),
        d = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = o.forwardRef((e, t) => {
          var n, p
          let {
              disableOutsidePointerEvents: v = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: y,
              onFocusOutside: w,
              onInteractOutside: b,
              onDismiss: x,
              ...E
            } = e,
            C = o.useContext(f),
            [R, N] = o.useState(null),
            T =
              null !== (p = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== p
                ? p
                : null === (n = globalThis) || void 0 === n
                  ? void 0
                  : n.document,
            [, O] = o.useState({}),
            A = (0, a.s)(t, (e) => N(e)),
            S = Array.from(C.layers),
            [L] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            P = S.indexOf(L),
            D = R ? S.indexOf(R) : -1,
            M = C.layersWithOutsidePointerEventsDisabled.size > 0,
            j = D >= P,
            k = (function (e) {
              var t
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.c)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {})
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            h("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            })
                          },
                          o = { originalEvent: e }
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t()
                      } else n.removeEventListener("click", l.current)
                      i.current = !1
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e)
                    }, 0)
                  return () => {
                    ;(window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current))
                  }
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              )
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t))
              !j ||
                n ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == x || x())
            }, T),
            I = (function (e) {
              var t
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.c)(e),
                i = o.useRef(!1)
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      h(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      )
                  }
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  )
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              )
            })((e) => {
              let t = e.target
              ;[...C.branches].some((e) => e.contains(t)) ||
                (null == w || w(e),
                null == b || b(e),
                e.defaultPrevented || null == x || x())
            }, T)
          return (
            (0, s.U)((e) => {
              D === C.layers.size - 1 &&
                (null == g || g(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()))
            }, T),
            o.useEffect(() => {
              if (R)
                return (
                  v &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(R)),
                  C.layers.add(R),
                  m(),
                  () => {
                    v &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r)
                  }
                )
            }, [R, T, v, C]),
            o.useEffect(
              () => () => {
                R &&
                  (C.layers.delete(R),
                  C.layersWithOutsidePointerEventsDisabled.delete(R),
                  m())
              },
              [R, C]
            ),
            o.useEffect(() => {
              let e = () => O({})
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              )
            }, []),
            (0, c.jsx)(l.sG.div, {
              ...E,
              ref: A,
              style: {
                pointerEvents: M ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.m)(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: (0, i.m)(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: (0, i.m)(
                e.onPointerDownCapture,
                k.onPointerDownCapture
              ),
            })
          )
        })
      p.displayName = "DismissableLayer"
      var v = o.forwardRef((e, t) => {
        let n = o.useContext(f),
          r = o.useRef(null),
          i = (0, a.s)(t, r)
        return (
          o.useEffect(() => {
            let e = r.current
            if (e)
              return (
                n.branches.add(e),
                () => {
                  n.branches.delete(e)
                }
              )
          }, [n.branches]),
          (0, c.jsx)(l.sG.div, { ...e, ref: i })
        )
      })
      function m() {
        let e = new CustomEvent(d)
        document.dispatchEvent(e)
      }
      function h(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
        ;(t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, l.hO)(i, a) : i.dispatchEvent(a))
      }
      v.displayName = "DismissableLayerBranch"
      var g = p,
        y = v
    },
    6676: (e, t, n) => {
      "use strict"
      n.d(t, { N: () => u })
      var r = n(2149),
        o = n(7218),
        i = n(5362),
        l = n(4408),
        a = n(8081)
      function u(e) {
        let t = e + "CollectionProvider",
          [n, u] = (0, o.A)(t),
          [s, c] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: n } = e,
              o = r.useRef(null),
              i = r.useRef(new Map()).current
            return (0, a.jsx)(s, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n,
            })
          }
        d.displayName = t
        let f = e + "CollectionSlot",
          p = r.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = c(f, n),
              u = (0, i.s)(t, o.collectionRef)
            return (0, a.jsx)(l.DX, { ref: u, children: r })
          })
        p.displayName = f
        let v = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          h = r.forwardRef((e, t) => {
            let { scope: n, children: o, ...u } = e,
              s = r.useRef(null),
              d = (0, i.s)(t, s),
              f = c(v, n)
            return (
              r.useEffect(
                () => (
                  f.itemMap.set(s, { ref: s, ...u }),
                  () => void f.itemMap.delete(s)
                )
              ),
              (0, a.jsx)(l.DX, { [m]: "", ref: d, children: o })
            )
          })
        return (
          (h.displayName = v),
          [
            { Provider: d, Slot: p, ItemSlot: h },
            function (t) {
              let n = c(e + "CollectionConsumer", t)
              return r.useCallback(() => {
                let e = n.collectionRef.current
                if (!e) return []
                let t = Array.from(e.querySelectorAll("[".concat(m, "]")))
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                )
              }, [n.collectionRef, n.itemMap])
            },
            u,
          ]
        )
      }
    },
    6757: (e, t, n) => {
      "use strict"
      n.d(t, { Z: () => u })
      var r = n(2149),
        o = n(4632),
        i = n(9108),
        l = n(357),
        a = n(8081),
        u = r.forwardRef((e, t) => {
          var n, u
          let { container: s, ...c } = e,
            [d, f] = r.useState(!1)
          ;(0, l.N)(() => f(!0), [])
          let p =
            s ||
            (d &&
              (null === (u = globalThis) || void 0 === u
                ? void 0
                : null === (n = u.document) || void 0 === n
                  ? void 0
                  : n.body))
          return p
            ? o.createPortal((0, a.jsx)(i.sG.div, { ...c, ref: t }), p)
            : null
        })
      u.displayName = "Portal"
    },
    6967: (e, t, n) => {
      "use strict"
      n.d(t, { U: () => i })
      var r = n(2149),
        o = n(9284)
      function i(e, t = globalThis?.document) {
        let n = (0, o.c)(e)
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e)
          }
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          )
        }, [n, t])
      }
    },
    7218: (e, t, n) => {
      "use strict"
      n.d(t, { A: () => i })
      var r = n(2149),
        o = n(8081)
      function i(e, t = []) {
        let n = [],
          l = () => {
            let t = n.map((e) => r.createContext(e))
            return function (n) {
              let o = n?.[e] || t
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              )
            }
          }
        return (
          (l.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                a = n.length
              function u(t) {
                let { scope: n, children: i, ...u } = t,
                  s = n?.[e][a] || l,
                  c = r.useMemo(() => u, Object.values(u))
                return (0, o.jsx)(s.Provider, { value: c, children: i })
              }
              return (
                (n = [...n, i]),
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e][a] || l,
                      s = r.useContext(u)
                    if (s) return s
                    if (void 0 !== i) return i
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                  },
                ]
              )
            },
            (function (...e) {
              let t = e[0]
              if (1 === e.length) return t
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }))
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`]
                    return { ...t, ...o }
                  }, {})
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  )
                }
              }
              return ((n.scopeName = t.scopeName), n)
            })(l, ...t),
          ]
        )
      }
    },
    7260: (e, t, n) => {
      "use strict"
      n.d(t, { A: () => l, q: () => i })
      var r = n(2149),
        o = n(8081)
      function i(e, t) {
        let n = r.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              l = r.useMemo(() => i, Object.values(i))
            return (0, o.jsx)(n.Provider, { value: l, children: t })
          }
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n)
              if (i) return i
              if (void 0 !== t) return t
              throw Error(`\`${o}\` must be used within \`${e}\``)
            },
          ]
        )
      }
      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e))
            return function (n) {
              let o = n?.[e] || t
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              )
            }
          }
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                a = n.length
              n = [...n, i]
              let u = (t) => {
                let { scope: n, children: i, ...u } = t,
                  s = n?.[e]?.[a] || l,
                  c = r.useMemo(() => u, Object.values(u))
                return (0, o.jsx)(s.Provider, { value: c, children: i })
              }
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[a] || l,
                      s = r.useContext(u)
                    if (s) return s
                    if (void 0 !== i) return i
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                  },
                ]
              )
            },
            (function (...e) {
              let t = e[0]
              if (1 === e.length) return t
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }))
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`]
                    return { ...t, ...o }
                  }, {})
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  )
                }
              }
              return ((n.scopeName = t.scopeName), n)
            })(i, ...t),
          ]
        )
      }
    },
    7346: (e, t, n) => {
      "use strict"
      n.d(t, { A: () => i })
      var r = n(2149),
        o = "undefined" != typeof window
      let i = function (e, t) {
        var n = (0, r.useState)(
            void 0 !== t ? t : !!o && window.matchMedia(e).matches
          ),
          i = n[0],
          l = n[1]
        return (
          (0, r.useEffect)(
            function () {
              var t = !0,
                n = window.matchMedia(e),
                r = function () {
                  t && l(!!n.matches)
                }
              return (
                n.addEventListener("change", r),
                l(n.matches),
                function () {
                  ;((t = !1), n.removeEventListener("change", r))
                }
              )
            },
            [e]
          ),
          i
        )
      }
    },
    8180: (e, t, n) => {
      "use strict"
      n.d(t, { qW: () => p })
      var r,
        o = n(2149),
        i = n(493),
        l = n(9106),
        a = n(1606),
        u = n(9284),
        s = n(6967),
        c = n(8081),
        d = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        p = o.forwardRef((e, t) => {
          var n, p
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: y,
              onFocusOutside: w,
              onInteractOutside: b,
              onDismiss: x,
              ...E
            } = e,
            C = o.useContext(f),
            [R, N] = o.useState(null),
            T =
              null !== (p = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== p
                ? p
                : null === (n = globalThis) || void 0 === n
                  ? void 0
                  : n.document,
            [, O] = o.useState({}),
            A = (0, a.s)(t, (e) => N(e)),
            S = Array.from(C.layers),
            [L] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            P = S.indexOf(L),
            D = R ? S.indexOf(R) : -1,
            M = C.layersWithOutsidePointerEventsDisabled.size > 0,
            j = D >= P,
            k = (function (e) {
              var t
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.c)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {})
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            })
                          },
                          o = { originalEvent: e }
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t()
                      } else n.removeEventListener("click", l.current)
                      i.current = !1
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e)
                    }, 0)
                  return () => {
                    ;(window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current))
                  }
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              )
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t))
              !j ||
                n ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == x || x())
            }, T),
            I = (function (e) {
              var t
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.c)(e),
                i = o.useRef(!1)
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      )
                  }
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  )
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              )
            })((e) => {
              let t = e.target
              ;[...C.branches].some((e) => e.contains(t)) ||
                (null == w || w(e),
                null == b || b(e),
                e.defaultPrevented || null == x || x())
            }, T)
          return (
            (0, s.U)((e) => {
              D === C.layers.size - 1 &&
                (null == g || g(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()))
            }, T),
            o.useEffect(() => {
              if (R)
                return (
                  h &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(R)),
                  C.layers.add(R),
                  v(),
                  () => {
                    h &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r)
                  }
                )
            }, [R, T, h, C]),
            o.useEffect(
              () => () => {
                R &&
                  (C.layers.delete(R),
                  C.layersWithOutsidePointerEventsDisabled.delete(R),
                  v())
              },
              [R, C]
            ),
            o.useEffect(() => {
              let e = () => O({})
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              )
            }, []),
            (0, c.jsx)(l.sG.div, {
              ...E,
              ref: A,
              style: {
                pointerEvents: M ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.m)(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: (0, i.m)(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: (0, i.m)(
                e.onPointerDownCapture,
                k.onPointerDownCapture
              ),
            })
          )
        })
      function v() {
        let e = new CustomEvent(d)
        document.dispatchEvent(e)
      }
      function m(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
        ;(t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, l.hO)(i, a) : i.dispatchEvent(a))
      }
      ;((p.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(f),
            r = o.useRef(null),
            i = (0, a.s)(t, r)
          return (
            o.useEffect(() => {
              let e = r.current
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e)
                  }
                )
            }, [n.branches]),
            (0, c.jsx)(l.sG.div, { ...e, ref: i })
          )
        }).displayName = "DismissableLayerBranch"))
    },
    8964: (e, t, n) => {
      "use strict"
      n.d(t, {
        bm: () => eM,
        UC: () => eP,
        hJ: () => eL,
        ZL: () => eS,
        bL: () => eA,
        hE: () => eD,
      })
      var r = n(2149),
        o = n(493),
        i = n(1606),
        l = n(7260),
        a = n(6428),
        u = n(5809),
        s = n(8180),
        c = n(9106),
        d = n(9284),
        f = n(8081),
        p = "focusScope.autoFocusOnMount",
        v = "focusScope.autoFocusOnUnmount",
        m = { bubbles: !1, cancelable: !0 },
        h = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: o = !1,
              onMountAutoFocus: l,
              onUnmountAutoFocus: a,
              ...u
            } = e,
            [s, h] = r.useState(null),
            x = (0, d.c)(l),
            E = (0, d.c)(a),
            C = r.useRef(null),
            R = (0, i.s)(t, (e) => h(e)),
            N = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0
              },
              resume() {
                this.paused = !1
              },
            }).current
          ;(r.useEffect(() => {
            if (o) {
              let e = function (e) {
                  if (N.paused || !s) return
                  let t = e.target
                  s.contains(t) ? (C.current = t) : w(C.current, { select: !0 })
                },
                t = function (e) {
                  if (N.paused || !s) return
                  let t = e.relatedTarget
                  null === t || s.contains(t) || w(C.current, { select: !0 })
                }
              ;(document.addEventListener("focusin", e),
                document.addEventListener("focusout", t))
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && w(s)
              })
              return (
                s && n.observe(s, { childList: !0, subtree: !0 }),
                () => {
                  ;(document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect())
                }
              )
            }
          }, [o, s, N.paused]),
            r.useEffect(() => {
              if (s) {
                b.add(N)
                let e = document.activeElement
                if (!s.contains(e)) {
                  let t = new CustomEvent(p, m)
                  ;(s.addEventListener(p, x),
                    s.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement
                        for (let r of e)
                          if (
                            (w(r, { select: t }), document.activeElement !== n)
                          )
                            return
                      })(
                        g(s).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && w(s)))
                }
                return () => {
                  ;(s.removeEventListener(p, x),
                    setTimeout(() => {
                      let t = new CustomEvent(v, m)
                      ;(s.addEventListener(v, E),
                        s.dispatchEvent(t),
                        t.defaultPrevented ||
                          w(null != e ? e : document.body, { select: !0 }),
                        s.removeEventListener(v, E),
                        b.remove(N))
                    }, 0))
                }
              }
            }, [s, x, E, N]))
          let T = r.useCallback(
            (e) => {
              if ((!n && !o) || N.paused) return
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement
              if (t && r) {
                let t = e.currentTarget,
                  [o, i] = (function (e) {
                    let t = g(e)
                    return [y(t, e), y(t.reverse(), e)]
                  })(t)
                o && i
                  ? e.shiftKey || r !== i
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && w(i, { select: !0 }))
                    : (e.preventDefault(), n && w(o, { select: !0 }))
                  : r === t && e.preventDefault()
              }
            },
            [n, o, N.paused]
          )
          return (0, f.jsx)(c.sG.div, {
            tabIndex: -1,
            ...u,
            ref: R,
            onKeyDown: T,
          })
        })
      function g(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP
            },
          })
        for (; n.nextNode(); ) t.push(n.currentNode)
        return t
      }
      function y(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t
              if ("hidden" === getComputedStyle(e).visibility) return !0
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0
                e = e.parentElement
              }
              return !1
            })(n, { upTo: t })
          )
            return n
      }
      function w(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        if (e && e.focus) {
          var n
          let r = document.activeElement
          ;(e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select())
        }
      }
      h.displayName = "FocusScope"
      var b = (function () {
        let e = []
        return {
          add(t) {
            let n = e[0]
            ;(t !== n && (null == n || n.pause()), (e = x(e, t)).unshift(t))
          },
          remove(t) {
            var n
            null === (n = (e = x(e, t))[0]) || void 0 === n || n.resume()
          },
        }
      })()
      function x(e, t) {
        let n = [...e],
          r = n.indexOf(t)
        return (-1 !== r && n.splice(r, 1), n)
      }
      var E = n(90),
        C = n(4146),
        R = 0
      function N() {
        let e = document.createElement("span")
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        )
      }
      var T = n(5334),
        O = n(9707),
        A = n(3098),
        S = (0, n(1224).f)(),
        L = function () {},
        P = r.forwardRef(function (e, t) {
          var n = r.useRef(null),
            o = r.useState({
              onScrollCapture: L,
              onWheelCapture: L,
              onTouchMoveCapture: L,
            }),
            i = o[0],
            l = o[1],
            a = e.forwardProps,
            u = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            w = (0, T.Tt)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            b = (0, A.S)([n, t]),
            x = (0, T.Cl)((0, T.Cl)({}, w), i)
          return r.createElement(
            r.Fragment,
            null,
            d &&
              r.createElement(p, {
                sideCar: S,
                removeScrollBar: c,
                shards: f,
                noIsolation: v,
                inert: m,
                setCallbacks: l,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: y,
              }),
            a
              ? r.cloneElement(
                  r.Children.only(u),
                  (0, T.Cl)((0, T.Cl)({}, x), { ref: b })
                )
              : r.createElement(
                  void 0 === g ? "div" : g,
                  (0, T.Cl)({}, x, { className: s, ref: b }),
                  u
                )
          )
        })
      ;((P.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (P.classNames = { fullWidth: O.pN, zeroRight: O.Mi }))
      var D = n(5238),
        M = n(3839),
        j = n(2827),
        k = !1
      if ("undefined" != typeof window)
        try {
          var I = Object.defineProperty({}, "passive", {
            get: function () {
              return ((k = !0), !0)
            },
          })
          ;(window.addEventListener("test", I, I),
            window.removeEventListener("test", I, I))
        } catch (e) {
          k = !1
        }
      var W = !!k && { passive: !1 },
        F = function (e, t) {
          if (!(e instanceof Element)) return !1
          var n = window.getComputedStyle(e)
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          )
        },
        _ = function (e, t) {
          var n = t.ownerDocument,
            r = t
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              B(e, r))
            ) {
              var o = U(e, r)
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body)
          return !1
        },
        B = function (e, t) {
          return "v" === e ? F(t, "overflowY") : F(t, "overflowX")
        },
        U = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        H = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = a > 0,
            f = 0,
            p = 0
          do {
            var v = U(e, u),
              m = v[0],
              h = v[1] - v[2] - l * m
            ;((m || h) && B(e, u) && ((f += h), (p += m)),
              (u = u instanceof ShadowRoot ? u.host : u.parentNode))
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          )
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (c = !0),
            c
          )
        },
        z = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0]
        },
        X = function (e) {
          return [e.deltaX, e.deltaY]
        },
        G = function (e) {
          return e && "current" in e ? e.current : e
        },
        V = 0,
        Y = []
      let $ = (0, D.m)(S, function (e) {
        var t = r.useRef([]),
          n = r.useRef([0, 0]),
          o = r.useRef(),
          i = r.useState(V++)[0],
          l = r.useState(j.T0)[0],
          a = r.useRef(e)
        ;(r.useEffect(
          function () {
            a.current = e
          },
          [e]
        ),
          r.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(i))
                var t = (0, T.fX)(
                  [e.lockRef.current],
                  (e.shards || []).map(G),
                  !0
                ).filter(Boolean)
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(i))
                  }),
                  function () {
                    ;(document.body.classList.remove(
                      "block-interactivity-".concat(i)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(i)
                        )
                      }))
                  }
                )
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          ))
        var u = r.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !a.current.allowPinchZoom
            var r,
              i = z(e),
              l = n.current,
              u = "deltaX" in e ? e.deltaX : l[0] - i[0],
              s = "deltaY" in e ? e.deltaY : l[1] - i[1],
              c = e.target,
              d = Math.abs(u) > Math.abs(s) ? "h" : "v"
            if ("touches" in e && "h" === d && "range" === c.type) return !1
            var f = _(d, c)
            if (!f) return !0
            if (
              (f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = _(d, c))), !f)
            )
              return !1
            if (
              (!o.current &&
                "changedTouches" in e &&
                (u || s) &&
                (o.current = r),
              !r)
            )
              return !0
            var p = o.current || r
            return H(p, t, e, "h" === p ? u : s, !0)
          }, []),
          s = r.useCallback(function (e) {
            if (Y.length && Y[Y.length - 1] === l) {
              var n = "deltaY" in e ? X(e) : z(e),
                r = t.current.filter(function (t) {
                  var r
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (r = t.delta)[0] === n[0] &&
                    r[1] === n[1]
                  )
                })[0]
              if (r && r.should) {
                e.cancelable && e.preventDefault()
                return
              }
              if (!r) {
                var o = (a.current.shards || [])
                  .map(G)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target)
                  })
                ;(o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault()
              }
            }
          }, []),
          c = r.useCallback(function (e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode))
                return t
              })(r),
            }
            ;(t.current.push(i),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== i
                })
              }, 1))
          }, []),
          d = r.useCallback(function (e) {
            ;((n.current = z(e)), (o.current = void 0))
          }, []),
          f = r.useCallback(function (t) {
            c(t.type, X(t), t.target, u(t, e.lockRef.current))
          }, []),
          p = r.useCallback(function (t) {
            c(t.type, z(t), t.target, u(t, e.lockRef.current))
          }, [])
        r.useEffect(function () {
          return (
            Y.push(l),
            e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: p,
            }),
            document.addEventListener("wheel", s, W),
            document.addEventListener("touchmove", s, W),
            document.addEventListener("touchstart", d, W),
            function () {
              ;((Y = Y.filter(function (e) {
                return e !== l
              })),
                document.removeEventListener("wheel", s, W),
                document.removeEventListener("touchmove", s, W),
                document.removeEventListener("touchstart", d, W))
            }
          )
        }, [])
        var v = e.removeScrollBar,
          m = e.inert
        return r.createElement(
          r.Fragment,
          null,
          m
            ? r.createElement(l, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    i,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(i, " {pointer-events: all;}\n"),
              })
            : null,
          v ? r.createElement(M.jp, { gapMode: e.gapMode }) : null
        )
      })
      var q = r.forwardRef(function (e, t) {
        return r.createElement(P, (0, T.Cl)({}, e, { ref: t, sideCar: $ }))
      })
      q.classNames = P.classNames
      var K = n(6093),
        Z = n(3343),
        J = "Dialog",
        [Q, ee] = (0, l.A)(J),
        [et, en] = Q(J),
        er = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              modal: s = !0,
            } = e,
            c = r.useRef(null),
            d = r.useRef(null),
            [p = !1, v] = (0, u.i)({ prop: o, defaultProp: i, onChange: l })
          return (0, f.jsx)(et, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: r.useCallback(() => v((e) => !e), [v]),
            modal: s,
            children: n,
          })
        }
      er.displayName = J
      var eo = "DialogTrigger"
      r.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          l = en(eo, n),
          a = (0, i.s)(t, l.triggerRef)
        return (0, f.jsx)(c.sG.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": l.open,
          "aria-controls": l.contentId,
          "data-state": eE(l.open),
          ...r,
          ref: a,
          onClick: (0, o.m)(e.onClick, l.onOpenToggle),
        })
      }).displayName = eo
      var ei = "DialogPortal",
        [el, ea] = Q(ei, { forceMount: void 0 }),
        eu = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: i,
            } = e,
            l = en(ei, t)
          return (0, f.jsx)(el, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, f.jsx)(C.C, {
                present: n || l.open,
                children: (0, f.jsx)(E.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              })
            ),
          })
        }
      eu.displayName = ei
      var es = "DialogOverlay",
        ec = r.forwardRef((e, t) => {
          let n = ea(es, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = en(es, e.__scopeDialog)
          return i.modal
            ? (0, f.jsx)(C.C, {
                present: r || i.open,
                children: (0, f.jsx)(ed, { ...o, ref: t }),
              })
            : null
        })
      ec.displayName = es
      var ed = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = en(es, n)
          return (0, f.jsx)(q, {
            as: Z.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, f.jsx)(c.sG.div, {
              "data-state": eE(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          })
        }),
        ef = "DialogContent",
        ep = r.forwardRef((e, t) => {
          let n = ea(ef, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = en(ef, e.__scopeDialog)
          return (0, f.jsx)(C.C, {
            present: r || i.open,
            children: i.modal
              ? (0, f.jsx)(ev, { ...o, ref: t })
              : (0, f.jsx)(em, { ...o, ref: t }),
          })
        })
      ep.displayName = ef
      var ev = r.forwardRef((e, t) => {
          let n = en(ef, e.__scopeDialog),
            l = r.useRef(null),
            a = (0, i.s)(t, n.contentRef, l)
          return (
            r.useEffect(() => {
              let e = l.current
              if (e) return (0, K.Eq)(e)
            }, []),
            (0, f.jsx)(eh, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t
                ;(e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus())
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey
                ;(2 === t.button || n) && e.preventDefault()
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          )
        }),
        em = r.forwardRef((e, t) => {
          let n = en(ef, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1)
          return (0, f.jsx)(eh, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var r, l
              ;(null === (r = e.onCloseAutoFocus) ||
                void 0 === r ||
                r.call(e, t),
                t.defaultPrevented ||
                  (o.current ||
                    null === (l = n.triggerRef.current) ||
                    void 0 === l ||
                    l.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1))
            },
            onInteractOutside: (t) => {
              var r, l
              ;(null === (r = e.onInteractOutside) ||
                void 0 === r ||
                r.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0)))
              let a = t.target
              ;((null === (l = n.triggerRef.current) || void 0 === l
                ? void 0
                : l.contains(a)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault())
            },
          })
        }),
        eh = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: l,
              onCloseAutoFocus: a,
              ...u
            } = e,
            c = en(ef, n),
            d = r.useRef(null),
            p = (0, i.s)(t, d)
          return (
            r.useEffect(() => {
              var e, t
              let n = document.querySelectorAll("[data-radix-focus-guard]")
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : N()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : N()
                ),
                R++,
                () => {
                  ;(1 === R &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    R--)
                }
              )
            }, []),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(h, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: a,
                  children: (0, f.jsx)(s.qW, {
                    role: "dialog",
                    id: c.contentId,
                    "aria-describedby": c.descriptionId,
                    "aria-labelledby": c.titleId,
                    "data-state": eE(c.open),
                    ...u,
                    ref: p,
                    onDismiss: () => c.onOpenChange(!1),
                  }),
                }),
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)(eT, { titleId: c.titleId }),
                    (0, f.jsx)(eO, {
                      contentRef: d,
                      descriptionId: c.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          )
        }),
        eg = "DialogTitle",
        ey = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = en(eg, n)
          return (0, f.jsx)(c.sG.h2, { id: o.titleId, ...r, ref: t })
        })
      ey.displayName = eg
      var ew = "DialogDescription"
      r.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = en(ew, n)
        return (0, f.jsx)(c.sG.p, { id: o.descriptionId, ...r, ref: t })
      }).displayName = ew
      var eb = "DialogClose",
        ex = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = en(eb, n)
          return (0, f.jsx)(c.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          })
        })
      function eE(e) {
        return e ? "open" : "closed"
      }
      ex.displayName = eb
      var eC = "DialogTitleWarning",
        [eR, eN] = (0, l.q)(eC, {
          contentName: ef,
          titleName: eg,
          docsSlug: "dialog",
        }),
        eT = (e) => {
          let { titleId: t } = e,
            n = eN(eC),
            o = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug)
          return (
            r.useEffect(() => {
              t && !document.getElementById(t) && console.error(o)
            }, [o, t]),
            null
          )
        },
        eO = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            o = eN("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              )
          return (
            r.useEffect(() => {
              var e
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby")
              n && r && !document.getElementById(n) && console.warn(i)
            }, [i, t, n]),
            null
          )
        },
        eA = er,
        eS = eu,
        eL = ec,
        eP = ep,
        eD = ey,
        eM = ex
    },
    9106: (e, t, n) => {
      "use strict"
      n.d(t, { hO: () => u, sG: () => a })
      var r = n(2149),
        o = n(4632),
        i = n(3343),
        l = n(8081),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? i.DX : t
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...o, ref: n })
            )
          })
          return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n })
        }, {})
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    9108: (e, t, n) => {
      "use strict"
      n.d(t, { hO: () => u, sG: () => a })
      var r = n(2149),
        o = n(4632),
        i = n(4408),
        l = n(8081),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? i.DX : t
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...o, ref: n })
            )
          })
          return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n })
        }, {})
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    9284: (e, t, n) => {
      "use strict"
      n.d(t, { c: () => o })
      var r = n(2149)
      function o(e) {
        let t = r.useRef(e)
        return (
          r.useEffect(() => {
            t.current = e
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        )
      }
    },
    9707: (e, t, n) => {
      "use strict"
      n.d(t, { E9: () => i, Mi: () => r, pN: () => o, xi: () => l })
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        l = "--removed-body-scroll-bar-size"
    },
  },
])
