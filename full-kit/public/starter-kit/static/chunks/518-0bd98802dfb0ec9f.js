"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [518],
  {
    377: (e, a, t) => {
      t.d(a, {
        OK: () => X,
        bL: () => W,
        VM: () => A,
        lr: () => P,
        LM: () => _,
      })
      var h = t(2149),
        y = t(9108),
        r = t(6248),
        d = t(7218),
        p = t(5362),
        k = t(9284),
        l = t(6228),
        i = t(357),
        n = t(5572),
        c = t(8081),
        o = "ScrollArea",
        [M, s] = (0, d.A)(o),
        [u, v] = M(o),
        m = h.forwardRef((e, a) => {
          let {
              __scopeScrollArea: t,
              type: r = "hover",
              dir: d,
              scrollHideDelay: k = 600,
              ...i
            } = e,
            [n, o] = h.useState(null),
            [M, s] = h.useState(null),
            [v, m] = h.useState(null),
            [x, f] = h.useState(null),
            [g, A] = h.useState(null),
            [w, b] = h.useState(0),
            [C, q] = h.useState(0),
            [z, j] = h.useState(!1),
            [H, S] = h.useState(!1),
            V = (0, p.s)(a, (e) => o(e)),
            L = (0, l.jH)(d)
          return (0, c.jsx)(u, {
            scope: t,
            type: r,
            dir: L,
            scrollHideDelay: k,
            scrollArea: n,
            viewport: M,
            onViewportChange: s,
            content: v,
            onContentChange: m,
            scrollbarX: x,
            onScrollbarXChange: f,
            scrollbarXEnabled: z,
            onScrollbarXEnabledChange: j,
            scrollbarY: g,
            onScrollbarYChange: A,
            scrollbarYEnabled: H,
            onScrollbarYEnabledChange: S,
            onCornerWidthChange: b,
            onCornerHeightChange: q,
            children: (0, c.jsx)(y.sG.div, {
              dir: L,
              ...i,
              ref: V,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": w + "px",
                "--radix-scroll-area-corner-height": C + "px",
                ...e.style,
              },
            }),
          })
        })
      m.displayName = o
      var x = "ScrollAreaViewport",
        f = h.forwardRef((e, a) => {
          let { __scopeScrollArea: t, children: r, nonce: d, ...k } = e,
            l = v(x, t),
            i = h.useRef(null),
            n = (0, p.s)(a, i, l.onViewportChange)
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: d,
              }),
              (0, c.jsx)(y.sG.div, {
                "data-radix-scroll-area-viewport": "",
                ...k,
                ref: n,
                style: {
                  overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
                  overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
                  ...e.style,
                },
                children: (0, c.jsx)("div", {
                  ref: l.onContentChange,
                  style: { minWidth: "100%", display: "table" },
                  children: r,
                }),
              }),
            ],
          })
        })
      f.displayName = x
      var g = "ScrollAreaScrollbar",
        A = h.forwardRef((e, a) => {
          let { forceMount: t, ...y } = e,
            r = v(g, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: d, onScrollbarYEnabledChange: p } = r,
            k = "horizontal" === e.orientation
          return (
            h.useEffect(
              () => (
                k ? d(!0) : p(!0),
                () => {
                  k ? d(!1) : p(!1)
                }
              ),
              [k, d, p]
            ),
            "hover" === r.type
              ? (0, c.jsx)(w, { ...y, ref: a, forceMount: t })
              : "scroll" === r.type
                ? (0, c.jsx)(b, { ...y, ref: a, forceMount: t })
                : "auto" === r.type
                  ? (0, c.jsx)(C, { ...y, ref: a, forceMount: t })
                  : "always" === r.type
                    ? (0, c.jsx)(q, { ...y, ref: a })
                    : null
          )
        })
      A.displayName = g
      var w = h.forwardRef((e, a) => {
          let { forceMount: t, ...y } = e,
            d = v(g, e.__scopeScrollArea),
            [p, k] = h.useState(!1)
          return (
            h.useEffect(() => {
              let e = d.scrollArea,
                a = 0
              if (e) {
                let t = () => {
                    ;(window.clearTimeout(a), k(!0))
                  },
                  h = () => {
                    a = window.setTimeout(() => k(!1), d.scrollHideDelay)
                  }
                return (
                  e.addEventListener("pointerenter", t),
                  e.addEventListener("pointerleave", h),
                  () => {
                    ;(window.clearTimeout(a),
                      e.removeEventListener("pointerenter", t),
                      e.removeEventListener("pointerleave", h))
                  }
                )
              }
            }, [d.scrollArea, d.scrollHideDelay]),
            (0, c.jsx)(r.C, {
              present: t || p,
              children: (0, c.jsx)(C, {
                "data-state": p ? "visible" : "hidden",
                ...y,
                ref: a,
              }),
            })
          )
        }),
        b = h.forwardRef((e, a) => {
          var t
          let { forceMount: y, ...d } = e,
            p = v(g, e.__scopeScrollArea),
            k = "horizontal" === e.orientation,
            l = U(() => o("SCROLL_END"), 100),
            [i, o] =
              ((t = {
                hidden: { SCROLL: "scrolling" },
                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                idle: {
                  HIDE: "hidden",
                  SCROLL: "scrolling",
                  POINTER_ENTER: "interacting",
                },
              }),
              h.useReducer((e, a) => {
                let h = t[e][a]
                return null != h ? h : e
              }, "hidden"))
          return (
            h.useEffect(() => {
              if ("idle" === i) {
                let e = window.setTimeout(() => o("HIDE"), p.scrollHideDelay)
                return () => window.clearTimeout(e)
              }
            }, [i, p.scrollHideDelay, o]),
            h.useEffect(() => {
              let e = p.viewport,
                a = k ? "scrollLeft" : "scrollTop"
              if (e) {
                let t = e[a],
                  h = () => {
                    let h = e[a]
                    ;(t !== h && (o("SCROLL"), l()), (t = h))
                  }
                return (
                  e.addEventListener("scroll", h),
                  () => e.removeEventListener("scroll", h)
                )
              }
            }, [p.viewport, k, o, l]),
            (0, c.jsx)(r.C, {
              present: y || "hidden" !== i,
              children: (0, c.jsx)(q, {
                "data-state": "hidden" === i ? "hidden" : "visible",
                ...d,
                ref: a,
                onPointerEnter: (0, n.m)(e.onPointerEnter, () =>
                  o("POINTER_ENTER")
                ),
                onPointerLeave: (0, n.m)(e.onPointerLeave, () =>
                  o("POINTER_LEAVE")
                ),
              }),
            })
          )
        }),
        C = h.forwardRef((e, a) => {
          let t = v(g, e.__scopeScrollArea),
            { forceMount: y, ...d } = e,
            [p, k] = h.useState(!1),
            l = "horizontal" === e.orientation,
            i = U(() => {
              if (t.viewport) {
                let e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  a = t.viewport.offsetHeight < t.viewport.scrollHeight
                k(l ? e : a)
              }
            }, 10)
          return (
            G(t.viewport, i),
            G(t.content, i),
            (0, c.jsx)(r.C, {
              present: y || p,
              children: (0, c.jsx)(q, {
                "data-state": p ? "visible" : "hidden",
                ...d,
                ref: a,
              }),
            })
          )
        }),
        q = h.forwardRef((e, a) => {
          let { orientation: t = "vertical", ...y } = e,
            r = v(g, e.__scopeScrollArea),
            d = h.useRef(null),
            p = h.useRef(0),
            [k, l] = h.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            i = B(k.viewport, k.content),
            n = {
              ...y,
              sizes: k,
              onSizesChange: l,
              hasThumb: !!(i > 0 && i < 1),
              onThumbChange: (e) => (d.current = e),
              onThumbPointerUp: () => (p.current = 0),
              onThumbPointerDown: (e) => (p.current = e),
            }
          function o(e, a) {
            return (function (e, a, t) {
              let h =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "ltr",
                y = O(t),
                r = a || y / 2,
                d = t.scrollbar.paddingStart + r,
                p = t.scrollbar.size - t.scrollbar.paddingEnd - (y - r),
                k = t.content - t.viewport
              return I([d, p], "ltr" === h ? [0, k] : [-1 * k, 0])(e)
            })(e, p.current, k, a)
          }
          return "horizontal" === t
            ? (0, c.jsx)(z, {
                ...n,
                ref: a,
                onThumbPositionChange: () => {
                  if (r.viewport && d.current) {
                    let e = Z(r.viewport.scrollLeft, k, r.dir)
                    d.current.style.transform = "translate3d(".concat(
                      e,
                      "px, 0, 0)"
                    )
                  }
                },
                onWheelScroll: (e) => {
                  r.viewport && (r.viewport.scrollLeft = e)
                },
                onDragScroll: (e) => {
                  r.viewport && (r.viewport.scrollLeft = o(e, r.dir))
                },
              })
            : "vertical" === t
              ? (0, c.jsx)(j, {
                  ...n,
                  ref: a,
                  onThumbPositionChange: () => {
                    if (r.viewport && d.current) {
                      let e = Z(r.viewport.scrollTop, k)
                      d.current.style.transform = "translate3d(0, ".concat(
                        e,
                        "px, 0)"
                      )
                    }
                  },
                  onWheelScroll: (e) => {
                    r.viewport && (r.viewport.scrollTop = e)
                  },
                  onDragScroll: (e) => {
                    r.viewport && (r.viewport.scrollTop = o(e))
                  },
                })
              : null
        }),
        z = h.forwardRef((e, a) => {
          let { sizes: t, onSizesChange: y, ...r } = e,
            d = v(g, e.__scopeScrollArea),
            [k, l] = h.useState(),
            i = h.useRef(null),
            n = (0, p.s)(a, i, d.onScrollbarXChange)
          return (
            h.useEffect(() => {
              i.current && l(getComputedStyle(i.current))
            }, [i]),
            (0, c.jsx)(V, {
              "data-orientation": "horizontal",
              ...r,
              ref: n,
              sizes: t,
              style: {
                bottom: 0,
                left:
                  "rtl" === d.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                right:
                  "ltr" === d.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": O(t) + "px",
                ...e.style,
              },
              onThumbPointerDown: (a) => e.onThumbPointerDown(a.x),
              onDragScroll: (a) => e.onDragScroll(a.x),
              onWheelScroll: (a, t) => {
                if (d.viewport) {
                  let h = d.viewport.scrollLeft + a.deltaX
                  ;(e.onWheelScroll(h),
                    (function (e, a) {
                      return e > 0 && e < a
                    })(h, t) && a.preventDefault())
                }
              },
              onResize: () => {
                i.current &&
                  d.viewport &&
                  k &&
                  y({
                    content: d.viewport.scrollWidth,
                    viewport: d.viewport.offsetWidth,
                    scrollbar: {
                      size: i.current.clientWidth,
                      paddingStart: E(k.paddingLeft),
                      paddingEnd: E(k.paddingRight),
                    },
                  })
              },
            })
          )
        }),
        j = h.forwardRef((e, a) => {
          let { sizes: t, onSizesChange: y, ...r } = e,
            d = v(g, e.__scopeScrollArea),
            [k, l] = h.useState(),
            i = h.useRef(null),
            n = (0, p.s)(a, i, d.onScrollbarYChange)
          return (
            h.useEffect(() => {
              i.current && l(getComputedStyle(i.current))
            }, [i]),
            (0, c.jsx)(V, {
              "data-orientation": "vertical",
              ...r,
              ref: n,
              sizes: t,
              style: {
                top: 0,
                right: "ltr" === d.dir ? 0 : void 0,
                left: "rtl" === d.dir ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": O(t) + "px",
                ...e.style,
              },
              onThumbPointerDown: (a) => e.onThumbPointerDown(a.y),
              onDragScroll: (a) => e.onDragScroll(a.y),
              onWheelScroll: (a, t) => {
                if (d.viewport) {
                  let h = d.viewport.scrollTop + a.deltaY
                  ;(e.onWheelScroll(h),
                    (function (e, a) {
                      return e > 0 && e < a
                    })(h, t) && a.preventDefault())
                }
              },
              onResize: () => {
                i.current &&
                  d.viewport &&
                  k &&
                  y({
                    content: d.viewport.scrollHeight,
                    viewport: d.viewport.offsetHeight,
                    scrollbar: {
                      size: i.current.clientHeight,
                      paddingStart: E(k.paddingTop),
                      paddingEnd: E(k.paddingBottom),
                    },
                  })
              },
            })
          )
        }),
        [H, S] = M(g),
        V = h.forwardRef((e, a) => {
          let {
              __scopeScrollArea: t,
              sizes: r,
              hasThumb: d,
              onThumbChange: l,
              onThumbPointerUp: i,
              onThumbPointerDown: o,
              onThumbPositionChange: M,
              onDragScroll: s,
              onWheelScroll: u,
              onResize: m,
              ...x
            } = e,
            f = v(g, t),
            [A, w] = h.useState(null),
            b = (0, p.s)(a, (e) => w(e)),
            C = h.useRef(null),
            q = h.useRef(""),
            z = f.viewport,
            j = r.content - r.viewport,
            S = (0, k.c)(u),
            V = (0, k.c)(M),
            L = U(m, 10)
          function P(e) {
            C.current &&
              s({ x: e.clientX - C.current.left, y: e.clientY - C.current.top })
          }
          return (
            h.useEffect(() => {
              let e = (e) => {
                let a = e.target
                ;(null == A ? void 0 : A.contains(a)) && S(e, j)
              }
              return (
                document.addEventListener("wheel", e, { passive: !1 }),
                () => document.removeEventListener("wheel", e, { passive: !1 })
              )
            }, [z, A, j, S]),
            h.useEffect(V, [r, V]),
            G(A, L),
            G(f.content, L),
            (0, c.jsx)(H, {
              scope: t,
              scrollbar: A,
              hasThumb: d,
              onThumbChange: (0, k.c)(l),
              onThumbPointerUp: (0, k.c)(i),
              onThumbPositionChange: V,
              onThumbPointerDown: (0, k.c)(o),
              children: (0, c.jsx)(y.sG.div, {
                ...x,
                ref: b,
                style: { position: "absolute", ...x.style },
                onPointerDown: (0, n.m)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (C.current = A.getBoundingClientRect()),
                    (q.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = "none"),
                    f.viewport && (f.viewport.style.scrollBehavior = "auto"),
                    P(e))
                }),
                onPointerMove: (0, n.m)(e.onPointerMove, P),
                onPointerUp: (0, n.m)(e.onPointerUp, (e) => {
                  let a = e.target
                  ;(a.hasPointerCapture(e.pointerId) &&
                    a.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = q.current),
                    f.viewport && (f.viewport.style.scrollBehavior = ""),
                    (C.current = null))
                }),
              }),
            })
          )
        }),
        L = "ScrollAreaThumb",
        P = h.forwardRef((e, a) => {
          let { forceMount: t, ...h } = e,
            y = S(L, e.__scopeScrollArea)
          return (0, c.jsx)(r.C, {
            present: t || y.hasThumb,
            children: (0, c.jsx)(R, { ref: a, ...h }),
          })
        }),
        R = h.forwardRef((e, a) => {
          let { __scopeScrollArea: t, style: r, ...d } = e,
            k = v(L, t),
            l = S(L, t),
            { onThumbPositionChange: i } = l,
            o = (0, p.s)(a, (e) => l.onThumbChange(e)),
            M = h.useRef(),
            s = U(() => {
              M.current && (M.current(), (M.current = void 0))
            }, 100)
          return (
            h.useEffect(() => {
              let e = k.viewport
              if (e) {
                let a = () => {
                  ;(s(), M.current || ((M.current = N(e, i)), i()))
                }
                return (
                  i(),
                  e.addEventListener("scroll", a),
                  () => e.removeEventListener("scroll", a)
                )
              }
            }, [k.viewport, s, i]),
            (0, c.jsx)(y.sG.div, {
              "data-state": l.hasThumb ? "visible" : "hidden",
              ...d,
              ref: o,
              style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...r,
              },
              onPointerDownCapture: (0, n.m)(e.onPointerDownCapture, (e) => {
                let a = e.target.getBoundingClientRect(),
                  t = e.clientX - a.left,
                  h = e.clientY - a.top
                l.onThumbPointerDown({ x: t, y: h })
              }),
              onPointerUp: (0, n.m)(e.onPointerUp, l.onThumbPointerUp),
            })
          )
        })
      P.displayName = L
      var D = "ScrollAreaCorner",
        T = h.forwardRef((e, a) => {
          let t = v(D, e.__scopeScrollArea),
            h = !!(t.scrollbarX && t.scrollbarY)
          return "scroll" !== t.type && h
            ? (0, c.jsx)(F, { ...e, ref: a })
            : null
        })
      T.displayName = D
      var F = h.forwardRef((e, a) => {
        let { __scopeScrollArea: t, ...r } = e,
          d = v(D, t),
          [p, k] = h.useState(0),
          [l, i] = h.useState(0),
          n = !!(p && l)
        return (
          G(d.scrollbarX, () => {
            var e
            let a =
              (null === (e = d.scrollbarX) || void 0 === e
                ? void 0
                : e.offsetHeight) || 0
            ;(d.onCornerHeightChange(a), i(a))
          }),
          G(d.scrollbarY, () => {
            var e
            let a =
              (null === (e = d.scrollbarY) || void 0 === e
                ? void 0
                : e.offsetWidth) || 0
            ;(d.onCornerWidthChange(a), k(a))
          }),
          n
            ? (0, c.jsx)(y.sG.div, {
                ...r,
                ref: a,
                style: {
                  width: p,
                  height: l,
                  position: "absolute",
                  right: "ltr" === d.dir ? 0 : void 0,
                  left: "rtl" === d.dir ? 0 : void 0,
                  bottom: 0,
                  ...e.style,
                },
              })
            : null
        )
      })
      function E(e) {
        return e ? parseInt(e, 10) : 0
      }
      function B(e, a) {
        let t = e / a
        return isNaN(t) ? 0 : t
      }
      function O(e) {
        let a = B(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd
        return Math.max((e.scrollbar.size - t) * a, 18)
      }
      function Z(e, a) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "ltr",
          h = O(a),
          y = a.scrollbar.paddingStart + a.scrollbar.paddingEnd,
          r = a.scrollbar.size - y,
          d = a.content - a.viewport,
          p = (function (e, [a, t]) {
            return Math.min(t, Math.max(a, e))
          })(e, "ltr" === t ? [0, d] : [-1 * d, 0])
        return I([0, d], [0, r - h])(p)
      }
      function I(e, a) {
        return (t) => {
          if (e[0] === e[1] || a[0] === a[1]) return a[0]
          let h = (a[1] - a[0]) / (e[1] - e[0])
          return a[0] + h * (t - e[0])
        }
      }
      var N = function (e) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {},
          t = { left: e.scrollLeft, top: e.scrollTop },
          h = 0
        return (
          !(function y() {
            let r = { left: e.scrollLeft, top: e.scrollTop },
              d = t.left !== r.left,
              p = t.top !== r.top
            ;((d || p) && a(), (t = r), (h = window.requestAnimationFrame(y)))
          })(),
          () => window.cancelAnimationFrame(h)
        )
      }
      function U(e, a) {
        let t = (0, k.c)(e),
          y = h.useRef(0)
        return (
          h.useEffect(() => () => window.clearTimeout(y.current), []),
          h.useCallback(() => {
            ;(window.clearTimeout(y.current),
              (y.current = window.setTimeout(t, a)))
          }, [t, a])
        )
      }
      function G(e, a) {
        let t = (0, k.c)(a)
        ;(0, i.N)(() => {
          let a = 0
          if (e) {
            let h = new ResizeObserver(() => {
              ;(cancelAnimationFrame(a), (a = window.requestAnimationFrame(t)))
            })
            return (
              h.observe(e),
              () => {
                ;(window.cancelAnimationFrame(a), h.unobserve(e))
              }
            )
          }
        }, [e, t])
      }
      var W = m,
        _ = f,
        X = T
    },
    732: (e, a, t) => {
      t.d(a, {
        G5: () => _,
        Pb: () => G,
        UC: () => N,
        W1: () => O,
        ZL: () => I,
        ZP: () => W,
        bL: () => B,
        l9: () => Z,
        q7: () => U,
      })
      var h = t(2149),
        y = t(6676),
        r = t(6228),
        d = t(5572),
        p = t(5362),
        k = t(7218),
        l = t(6428),
        i = t(5029),
        n = t(7122),
        c = t(9108),
        o = t(5809),
        M = t(8081),
        s = "Menubar",
        [u, v, m] = (0, y.N)(s),
        [x, f] = (0, k.A)(s, [m, n.RG]),
        g = (0, i.UE)(),
        A = (0, n.RG)(),
        [w, b] = x(s),
        C = h.forwardRef((e, a) => {
          let {
              __scopeMenubar: t,
              value: y,
              onValueChange: d,
              defaultValue: p,
              loop: k = !0,
              dir: l,
              ...i
            } = e,
            s = (0, r.jH)(l),
            v = A(t),
            [m = "", x] = (0, o.i)({ prop: y, onChange: d, defaultProp: p }),
            [f, g] = h.useState(null)
          return (0, M.jsx)(w, {
            scope: t,
            value: m,
            onMenuOpen: h.useCallback(
              (e) => {
                ;(x(e), g(e))
              },
              [x]
            ),
            onMenuClose: h.useCallback(() => x(""), [x]),
            onMenuToggle: h.useCallback(
              (e) => {
                ;(x((a) => (a ? "" : e)), g(e))
              },
              [x]
            ),
            dir: s,
            loop: k,
            children: (0, M.jsx)(u.Provider, {
              scope: t,
              children: (0, M.jsx)(u.Slot, {
                scope: t,
                children: (0, M.jsx)(n.bL, {
                  asChild: !0,
                  ...v,
                  orientation: "horizontal",
                  loop: k,
                  dir: s,
                  currentTabStopId: f,
                  onCurrentTabStopIdChange: g,
                  children: (0, M.jsx)(c.sG.div, {
                    role: "menubar",
                    ...i,
                    ref: a,
                  }),
                }),
              }),
            }),
          })
        })
      C.displayName = s
      var q = "MenubarMenu",
        [z, j] = x(q),
        H = (e) => {
          let { __scopeMenubar: a, value: t, ...y } = e,
            r = (0, l.B)(),
            d = t || r || "LEGACY_REACT_AUTO_VALUE",
            p = b(q, a),
            k = g(a),
            n = h.useRef(null),
            c = h.useRef(!1),
            o = p.value === d
          return (
            h.useEffect(() => {
              o || (c.current = !1)
            }, [o]),
            (0, M.jsx)(z, {
              scope: a,
              value: d,
              triggerId: (0, l.B)(),
              triggerRef: n,
              contentId: (0, l.B)(),
              wasKeyboardTriggerOpenRef: c,
              children: (0, M.jsx)(i.bL, {
                ...k,
                open: o,
                onOpenChange: (e) => {
                  e || p.onMenuClose()
                },
                modal: !1,
                dir: p.dir,
                ...y,
              }),
            })
          )
        }
      H.displayName = q
      var S = "MenubarTrigger",
        V = h.forwardRef((e, a) => {
          let { __scopeMenubar: t, disabled: y = !1, ...r } = e,
            k = A(t),
            l = g(t),
            o = b(S, t),
            s = j(S, t),
            v = h.useRef(null),
            m = (0, p.s)(a, v, s.triggerRef),
            [x, f] = h.useState(!1),
            w = o.value === s.value
          return (0, M.jsx)(u.ItemSlot, {
            scope: t,
            value: s.value,
            disabled: y,
            children: (0, M.jsx)(n.q7, {
              asChild: !0,
              ...k,
              focusable: !y,
              tabStopId: s.value,
              children: (0, M.jsx)(i.Mz, {
                asChild: !0,
                ...l,
                children: (0, M.jsx)(c.sG.button, {
                  type: "button",
                  role: "menuitem",
                  id: s.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": w,
                  "aria-controls": w ? s.contentId : void 0,
                  "data-highlighted": x ? "" : void 0,
                  "data-state": w ? "open" : "closed",
                  "data-disabled": y ? "" : void 0,
                  disabled: y,
                  ...r,
                  ref: m,
                  onPointerDown: (0, d.m)(e.onPointerDown, (e) => {
                    y ||
                      0 !== e.button ||
                      !1 !== e.ctrlKey ||
                      (o.onMenuOpen(s.value), w || e.preventDefault())
                  }),
                  onPointerEnter: (0, d.m)(e.onPointerEnter, () => {
                    if (o.value && !w) {
                      var e
                      ;(o.onMenuOpen(s.value),
                        null === (e = v.current) || void 0 === e || e.focus())
                    }
                  }),
                  onKeyDown: (0, d.m)(e.onKeyDown, (e) => {
                    !y &&
                      (["Enter", " "].includes(e.key) &&
                        o.onMenuToggle(s.value),
                      "ArrowDown" === e.key && o.onMenuOpen(s.value),
                      ["Enter", " ", "ArrowDown"].includes(e.key) &&
                        ((s.wasKeyboardTriggerOpenRef.current = !0),
                        e.preventDefault()))
                  }),
                  onFocus: (0, d.m)(e.onFocus, () => f(!0)),
                  onBlur: (0, d.m)(e.onBlur, () => f(!1)),
                }),
              }),
            }),
          })
        })
      V.displayName = S
      var L = (e) => {
        let { __scopeMenubar: a, ...t } = e,
          h = g(a)
        return (0, M.jsx)(i.ZL, { ...h, ...t })
      }
      L.displayName = "MenubarPortal"
      var P = "MenubarContent",
        R = h.forwardRef((e, a) => {
          let { __scopeMenubar: t, align: y = "start", ...r } = e,
            p = g(t),
            k = b(P, t),
            l = j(P, t),
            n = v(t),
            c = h.useRef(!1)
          return (0, M.jsx)(i.UC, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            "data-radix-menubar-content": "",
            ...p,
            ...r,
            ref: a,
            align: y,
            onCloseAutoFocus: (0, d.m)(e.onCloseAutoFocus, (e) => {
              if (!k.value && !c.current) {
                var a
                null === (a = l.triggerRef.current) || void 0 === a || a.focus()
              }
              ;((c.current = !1), e.preventDefault())
            }),
            onFocusOutside: (0, d.m)(e.onFocusOutside, (e) => {
              let a = e.target
              n().some((e) => {
                var t
                return null === (t = e.ref.current) || void 0 === t
                  ? void 0
                  : t.contains(a)
              }) && e.preventDefault()
            }),
            onInteractOutside: (0, d.m)(e.onInteractOutside, () => {
              c.current = !0
            }),
            onEntryFocus: (e) => {
              l.wasKeyboardTriggerOpenRef.current || e.preventDefault()
            },
            onKeyDown: (0, d.m)(
              e.onKeyDown,
              (e) => {
                if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
                  let a = e.target,
                    t = a.hasAttribute("data-radix-menubar-subtrigger"),
                    h =
                      a.closest("[data-radix-menubar-content]") !==
                      e.currentTarget,
                    y = ("rtl" === k.dir ? "ArrowRight" : "ArrowLeft") === e.key
                  if ((!y && t) || (h && y)) return
                  let r = n()
                    .filter((e) => !e.disabled)
                    .map((e) => e.value)
                  y && r.reverse()
                  let d = r.indexOf(l.value),
                    [p] = (r = k.loop
                      ? (function (e, a) {
                          return e.map((t, h) => e[(a + h) % e.length])
                        })(r, d + 1)
                      : r.slice(d + 1))
                  p && k.onMenuOpen(p)
                }
              },
              { checkForDefaultPrevented: !1 }
            ),
            style: {
              ...e.style,
              "--radix-menubar-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-menubar-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-menubar-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-menubar-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-menubar-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          })
        })
      ;((R.displayName = P),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.YJ, { ...y, ...h, ref: a })
        }).displayName = "MenubarGroup"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.JU, { ...y, ...h, ref: a })
        }).displayName = "MenubarLabel"))
      var D = h.forwardRef((e, a) => {
        let { __scopeMenubar: t, ...h } = e,
          y = g(t)
        return (0, M.jsx)(i.q7, { ...y, ...h, ref: a })
      })
      ;((D.displayName = "MenubarItem"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.H_, { ...y, ...h, ref: a })
        }).displayName = "MenubarCheckboxItem"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.z6, { ...y, ...h, ref: a })
        }).displayName = "MenubarRadioGroup"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.hN, { ...y, ...h, ref: a })
        }).displayName = "MenubarRadioItem"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.VF, { ...y, ...h, ref: a })
        }).displayName = "MenubarItemIndicator"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.wv, { ...y, ...h, ref: a })
        }).displayName = "MenubarSeparator"),
        (h.forwardRef((e, a) => {
          let { __scopeMenubar: t, ...h } = e,
            y = g(t)
          return (0, M.jsx)(i.i3, { ...y, ...h, ref: a })
        }).displayName = "MenubarArrow"))
      var T = (e) => {
        let {
            __scopeMenubar: a,
            children: t,
            open: h,
            onOpenChange: y,
            defaultOpen: r,
          } = e,
          d = g(a),
          [p = !1, k] = (0, o.i)({ prop: h, defaultProp: r, onChange: y })
        return (0, M.jsx)(i.Pb, { ...d, open: p, onOpenChange: k, children: t })
      }
      T.displayName = "MenubarSub"
      var F = h.forwardRef((e, a) => {
        let { __scopeMenubar: t, ...h } = e,
          y = g(t)
        return (0, M.jsx)(i.ZP, {
          "data-radix-menubar-subtrigger": "",
          ...y,
          ...h,
          ref: a,
        })
      })
      F.displayName = "MenubarSubTrigger"
      var E = h.forwardRef((e, a) => {
        let { __scopeMenubar: t, ...h } = e,
          y = g(t)
        return (0, M.jsx)(i.G5, {
          ...y,
          "data-radix-menubar-content": "",
          ...h,
          ref: a,
          style: {
            ...e.style,
            "--radix-menubar-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-menubar-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-menubar-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-menubar-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        })
      })
      E.displayName = "MenubarSubContent"
      var B = C,
        O = H,
        Z = V,
        I = L,
        N = R,
        U = D,
        G = T,
        W = F,
        _ = E
    },
    1267: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("RefreshCw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ])
    },
    1688: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("SunMoon", [
        [
          "path",
          { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" },
        ],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
        ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
        ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }],
      ])
    },
    1775: (e, a, t) => {
      t.d(a, {
        JU: () => T,
        UC: () => R,
        VF: () => O,
        YJ: () => D,
        ZL: () => P,
        bL: () => V,
        hN: () => B,
        l9: () => L,
        q7: () => F,
        wv: () => Z,
        z6: () => E,
      })
      var h = t(2149),
        y = t(5572),
        r = t(5362),
        d = t(7218),
        p = t(5809),
        k = t(9108),
        l = t(5029),
        i = t(6428),
        n = t(8081),
        c = "DropdownMenu",
        [o, M] = (0, d.A)(c, [l.UE]),
        s = (0, l.UE)(),
        [u, v] = o(c),
        m = (e) => {
          let {
              __scopeDropdownMenu: a,
              children: t,
              dir: y,
              open: r,
              defaultOpen: d,
              onOpenChange: k,
              modal: c = !0,
            } = e,
            o = s(a),
            M = h.useRef(null),
            [v = !1, m] = (0, p.i)({ prop: r, defaultProp: d, onChange: k })
          return (0, n.jsx)(u, {
            scope: a,
            triggerId: (0, i.B)(),
            triggerRef: M,
            contentId: (0, i.B)(),
            open: v,
            onOpenChange: m,
            onOpenToggle: h.useCallback(() => m((e) => !e), [m]),
            modal: c,
            children: (0, n.jsx)(l.bL, {
              ...o,
              open: v,
              onOpenChange: m,
              dir: y,
              modal: c,
              children: t,
            }),
          })
        }
      m.displayName = c
      var x = "DropdownMenuTrigger",
        f = h.forwardRef((e, a) => {
          let { __scopeDropdownMenu: t, disabled: h = !1, ...d } = e,
            p = v(x, t),
            i = s(t)
          return (0, n.jsx)(l.Mz, {
            asChild: !0,
            ...i,
            children: (0, n.jsx)(k.sG.button, {
              type: "button",
              id: p.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": p.open,
              "aria-controls": p.open ? p.contentId : void 0,
              "data-state": p.open ? "open" : "closed",
              "data-disabled": h ? "" : void 0,
              disabled: h,
              ...d,
              ref: (0, r.t)(a, p.triggerRef),
              onPointerDown: (0, y.m)(e.onPointerDown, (e) => {
                h ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (p.onOpenToggle(), p.open || e.preventDefault())
              }),
              onKeyDown: (0, y.m)(e.onKeyDown, (e) => {
                !h &&
                  (["Enter", " "].includes(e.key) && p.onOpenToggle(),
                  "ArrowDown" === e.key && p.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault())
              }),
            }),
          })
        })
      f.displayName = x
      var g = (e) => {
        let { __scopeDropdownMenu: a, ...t } = e,
          h = s(a)
        return (0, n.jsx)(l.ZL, { ...h, ...t })
      }
      g.displayName = "DropdownMenuPortal"
      var A = "DropdownMenuContent",
        w = h.forwardRef((e, a) => {
          let { __scopeDropdownMenu: t, ...r } = e,
            d = v(A, t),
            p = s(t),
            k = h.useRef(!1)
          return (0, n.jsx)(l.UC, {
            id: d.contentId,
            "aria-labelledby": d.triggerId,
            ...p,
            ...r,
            ref: a,
            onCloseAutoFocus: (0, y.m)(e.onCloseAutoFocus, (e) => {
              var a
              ;(k.current ||
                null === (a = d.triggerRef.current) ||
                void 0 === a ||
                a.focus(),
                (k.current = !1),
                e.preventDefault())
            }),
            onInteractOutside: (0, y.m)(e.onInteractOutside, (e) => {
              let a = e.detail.originalEvent,
                t = 0 === a.button && !0 === a.ctrlKey,
                h = 2 === a.button || t
              ;(!d.modal || h) && (k.current = !0)
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          })
        })
      w.displayName = A
      var b = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.YJ, { ...y, ...h, ref: a })
      })
      b.displayName = "DropdownMenuGroup"
      var C = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.JU, { ...y, ...h, ref: a })
      })
      C.displayName = "DropdownMenuLabel"
      var q = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.q7, { ...y, ...h, ref: a })
      })
      ;((q.displayName = "DropdownMenuItem"),
        (h.forwardRef((e, a) => {
          let { __scopeDropdownMenu: t, ...h } = e,
            y = s(t)
          return (0, n.jsx)(l.H_, { ...y, ...h, ref: a })
        }).displayName = "DropdownMenuCheckboxItem"))
      var z = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.z6, { ...y, ...h, ref: a })
      })
      z.displayName = "DropdownMenuRadioGroup"
      var j = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.hN, { ...y, ...h, ref: a })
      })
      j.displayName = "DropdownMenuRadioItem"
      var H = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.VF, { ...y, ...h, ref: a })
      })
      H.displayName = "DropdownMenuItemIndicator"
      var S = h.forwardRef((e, a) => {
        let { __scopeDropdownMenu: t, ...h } = e,
          y = s(t)
        return (0, n.jsx)(l.wv, { ...y, ...h, ref: a })
      })
      ;((S.displayName = "DropdownMenuSeparator"),
        (h.forwardRef((e, a) => {
          let { __scopeDropdownMenu: t, ...h } = e,
            y = s(t)
          return (0, n.jsx)(l.i3, { ...y, ...h, ref: a })
        }).displayName = "DropdownMenuArrow"),
        (h.forwardRef((e, a) => {
          let { __scopeDropdownMenu: t, ...h } = e,
            y = s(t)
          return (0, n.jsx)(l.ZP, { ...y, ...h, ref: a })
        }).displayName = "DropdownMenuSubTrigger"),
        (h.forwardRef((e, a) => {
          let { __scopeDropdownMenu: t, ...h } = e,
            y = s(t)
          return (0, n.jsx)(l.G5, {
            ...y,
            ...h,
            ref: a,
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          })
        }).displayName = "DropdownMenuSubContent"))
      var V = m,
        L = f,
        P = g,
        R = w,
        D = b,
        T = C,
        F = q,
        E = z,
        B = j,
        O = H,
        Z = S
    },
    1946: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("Dot", [
        ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }],
      ])
    },
    2738: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("LogOut", [
        [
          "path",
          { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" },
        ],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
      ])
    },
    2945: (e, a, t) => {
      ;(Object.defineProperty(a, "__esModule", { value: !0 }),
        !(function (e, a) {
          for (var t in a)
            Object.defineProperty(e, t, { enumerable: !0, get: a[t] })
        })(a, {
          default: function () {
            return k
          },
          getImageProps: function () {
            return p
          },
        }))
      let h = t(4879),
        y = t(4535),
        r = t(2611),
        d = h._(t(149))
      function p(e) {
        let { props: a } = (0, y.getImgProps)(e, {
          defaultLoader: d.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        })
        for (let [e, t] of Object.entries(a)) void 0 === t && delete a[e]
        return { props: a }
      }
      let k = r.Image
    },
    3097: (e, a, t) => {
      t.d(a, { uB: () => ae })
      var h,
        y = /[\\\/_+.#"@\[\(\{&]/,
        r = /[\\\/_+.#"@\[\(\{&]/g,
        d = /[\s-]/,
        p = /[\s-]/g
      function k(e) {
        return e.toLowerCase().replace(p, " ")
      }
      var l = t(2149),
        i = t.t(l, 2)
      function n(e, a, { checkForDefaultPrevented: t = !0 } = {}) {
        return function (h) {
          if ((e?.(h), !1 === t || !h.defaultPrevented)) return a?.(h)
        }
      }
      function c(e, a) {
        if ("function" == typeof e) return e(a)
        null != e && (e.current = a)
      }
      function o(...e) {
        return (a) => {
          let t = !1,
            h = e.map((e) => {
              let h = c(e, a)
              return (t || "function" != typeof h || (t = !0), h)
            })
          if (t)
            return () => {
              for (let a = 0; a < h.length; a++) {
                let t = h[a]
                "function" == typeof t ? t() : c(e[a], null)
              }
            }
        }
      }
      function M(...e) {
        return l.useCallback(o(...e), e)
      }
      var s = t(8081),
        u = globalThis?.document ? l.useLayoutEffect : () => {},
        v = i[" useId ".trim().toString()] || (() => void 0),
        m = 0
      function x(e) {
        let [a, t] = l.useState(v())
        return (
          u(() => {
            e || t((e) => e ?? String(m++))
          }, [e]),
          e || (a ? `radix-${a}` : "")
        )
      }
      function f(e) {
        let a = l.useRef(e)
        return (
          l.useEffect(() => {
            a.current = e
          }),
          l.useMemo(
            () =>
              (...e) =>
                a.current?.(...e),
            []
          )
        )
      }
      var g = t(4632)
      function A(e) {
        let a = (function (e) {
            let a = l.forwardRef((e, a) => {
              let { children: t, ...h } = e
              if (l.isValidElement(t)) {
                var y
                let e, r
                let d =
                    ((y = t),
                    (r =
                      (e = Object.getOwnPropertyDescriptor(
                        y.props,
                        "ref"
                      )?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning)
                      ? y.ref
                      : (r =
                            (e = Object.getOwnPropertyDescriptor(
                              y,
                              "ref"
                            )?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                        ? y.props.ref
                        : y.props.ref || y.ref),
                  p = (function (e, a) {
                    let t = { ...a }
                    for (let h in a) {
                      let y = e[h],
                        r = a[h]
                      ;/^on[A-Z]/.test(h)
                        ? y && r
                          ? (t[h] = (...e) => {
                              ;(r(...e), y(...e))
                            })
                          : y && (t[h] = y)
                        : "style" === h
                          ? (t[h] = { ...y, ...r })
                          : "className" === h &&
                            (t[h] = [y, r].filter(Boolean).join(" "))
                    }
                    return { ...e, ...t }
                  })(h, t.props)
                return (
                  t.type !== l.Fragment && (p.ref = a ? o(a, d) : d),
                  l.cloneElement(t, p)
                )
              }
              return l.Children.count(t) > 1 ? l.Children.only(null) : null
            })
            return ((a.displayName = `${e}.SlotClone`), a)
          })(e),
          t = l.forwardRef((e, t) => {
            let { children: h, ...y } = e,
              r = l.Children.toArray(h),
              d = r.find(b)
            if (d) {
              let e = d.props.children,
                h = r.map((a) =>
                  a !== d
                    ? a
                    : l.Children.count(e) > 1
                      ? l.Children.only(null)
                      : l.isValidElement(e)
                        ? e.props.children
                        : null
                )
              return (0, s.jsx)(a, {
                ...y,
                ref: t,
                children: l.isValidElement(e)
                  ? l.cloneElement(e, void 0, h)
                  : null,
              })
            }
            return (0, s.jsx)(a, { ...y, ref: t, children: h })
          })
        return ((t.displayName = `${e}.Slot`), t)
      }
      var w = Symbol("radix.slottable")
      function b(e) {
        return (
          l.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === w
        )
      }
      var C = [
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
        ].reduce((e, a) => {
          let t = A(`Primitive.${a}`),
            h = l.forwardRef((e, h) => {
              let { asChild: y, ...r } = e
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, s.jsx)(y ? t : a, { ...r, ref: h })
              )
            })
          return ((h.displayName = `Primitive.${a}`), { ...e, [a]: h })
        }, {}),
        q = "dismissableLayer.update",
        z = l.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        j = l.forwardRef((e, a) => {
          var t, y
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: d,
              onPointerDownOutside: p,
              onFocusOutside: k,
              onInteractOutside: i,
              onDismiss: c,
              ...o
            } = e,
            u = l.useContext(z),
            [v, m] = l.useState(null),
            x =
              null !== (y = null == v ? void 0 : v.ownerDocument) &&
              void 0 !== y
                ? y
                : null === (t = globalThis) || void 0 === t
                  ? void 0
                  : t.document,
            [, g] = l.useState({}),
            A = M(a, (e) => m(e)),
            w = Array.from(u.layers),
            [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            j = w.indexOf(b),
            V = v ? w.indexOf(v) : -1,
            L = u.layersWithOutsidePointerEventsDisabled.size > 0,
            P = V >= j,
            R = (function (e) {
              var a
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (a = globalThis) || void 0 === a
                      ? void 0
                      : a.document,
                h = f(e),
                y = l.useRef(!1),
                r = l.useRef(() => {})
              return (
                l.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !y.current) {
                        let a = function () {
                            S("dismissableLayer.pointerDownOutside", h, y, {
                              discrete: !0,
                            })
                          },
                          y = { originalEvent: e }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", r.current),
                            (r.current = a),
                            t.addEventListener("click", r.current, {
                              once: !0,
                            }))
                          : a()
                      } else t.removeEventListener("click", r.current)
                      y.current = !1
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e)
                    }, 0)
                  return () => {
                    ;(window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", r.current))
                  }
                }, [t, h]),
                { onPointerDownCapture: () => (y.current = !0) }
              )
            })((e) => {
              let a = e.target,
                t = [...u.branches].some((e) => e.contains(a))
              !P ||
                t ||
                (null == p || p(e),
                null == i || i(e),
                e.defaultPrevented || null == c || c())
            }, x),
            D = (function (e) {
              var a
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (a = globalThis) || void 0 === a
                      ? void 0
                      : a.document,
                h = f(e),
                y = l.useRef(!1)
              return (
                l.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !y.current &&
                      S(
                        "dismissableLayer.focusOutside",
                        h,
                        { originalEvent: e },
                        { discrete: !1 }
                      )
                  }
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  )
                }, [t, h]),
                {
                  onFocusCapture: () => (y.current = !0),
                  onBlurCapture: () => (y.current = !1),
                }
              )
            })((e) => {
              let a = e.target
              ;[...u.branches].some((e) => e.contains(a)) ||
                (null == k || k(e),
                null == i || i(e),
                e.defaultPrevented || null == c || c())
            }, x)
          return (
            !(function (e, a = globalThis?.document) {
              let t = f(e)
              l.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && t(e)
                }
                return (
                  a.addEventListener("keydown", e, { capture: !0 }),
                  () => a.removeEventListener("keydown", e, { capture: !0 })
                )
              }, [t, a])
            })((e) => {
              V === u.layers.size - 1 &&
                (null == d || d(e),
                !e.defaultPrevented && c && (e.preventDefault(), c()))
            }, x),
            l.useEffect(() => {
              if (v)
                return (
                  r &&
                    (0 === u.layersWithOutsidePointerEventsDisabled.size &&
                      ((h = x.body.style.pointerEvents),
                      (x.body.style.pointerEvents = "none")),
                    u.layersWithOutsidePointerEventsDisabled.add(v)),
                  u.layers.add(v),
                  H(),
                  () => {
                    r &&
                      1 === u.layersWithOutsidePointerEventsDisabled.size &&
                      (x.body.style.pointerEvents = h)
                  }
                )
            }, [v, x, r, u]),
            l.useEffect(
              () => () => {
                v &&
                  (u.layers.delete(v),
                  u.layersWithOutsidePointerEventsDisabled.delete(v),
                  H())
              },
              [v, u]
            ),
            l.useEffect(() => {
              let e = () => g({})
              return (
                document.addEventListener(q, e),
                () => document.removeEventListener(q, e)
              )
            }, []),
            (0, s.jsx)(C.div, {
              ...o,
              ref: A,
              style: {
                pointerEvents: L ? (P ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: n(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: n(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: n(
                e.onPointerDownCapture,
                R.onPointerDownCapture
              ),
            })
          )
        })
      function H() {
        let e = new CustomEvent(q)
        document.dispatchEvent(e)
      }
      function S(e, a, t, h) {
        let { discrete: y } = h,
          r = t.originalEvent.target,
          d = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t })
        if ((a && r.addEventListener(e, a, { once: !0 }), y))
          r && g.flushSync(() => r.dispatchEvent(d))
        else r.dispatchEvent(d)
      }
      ;((j.displayName = "DismissableLayer"),
        (l.forwardRef((e, a) => {
          let t = l.useContext(z),
            h = l.useRef(null),
            y = M(a, h)
          return (
            l.useEffect(() => {
              let e = h.current
              if (e)
                return (
                  t.branches.add(e),
                  () => {
                    t.branches.delete(e)
                  }
                )
            }, [t.branches]),
            (0, s.jsx)(C.div, { ...e, ref: y })
          )
        }).displayName = "DismissableLayerBranch"))
      var V = "focusScope.autoFocusOnMount",
        L = "focusScope.autoFocusOnUnmount",
        P = { bubbles: !1, cancelable: !0 },
        R = l.forwardRef((e, a) => {
          let {
              loop: t = !1,
              trapped: h = !1,
              onMountAutoFocus: y,
              onUnmountAutoFocus: r,
              ...d
            } = e,
            [p, k] = l.useState(null),
            i = f(y),
            n = f(r),
            c = l.useRef(null),
            o = M(a, (e) => k(e)),
            u = l.useRef({
              paused: !1,
              pause() {
                this.paused = !0
              },
              resume() {
                this.paused = !1
              },
            }).current
          ;(l.useEffect(() => {
            if (h) {
              let e = function (e) {
                  if (u.paused || !p) return
                  let a = e.target
                  p.contains(a) ? (c.current = a) : F(c.current, { select: !0 })
                },
                a = function (e) {
                  if (u.paused || !p) return
                  let a = e.relatedTarget
                  null === a || p.contains(a) || F(c.current, { select: !0 })
                }
              ;(document.addEventListener("focusin", e),
                document.addEventListener("focusout", a))
              let t = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let a of e) a.removedNodes.length > 0 && F(p)
              })
              return (
                p && t.observe(p, { childList: !0, subtree: !0 }),
                () => {
                  ;(document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", a),
                    t.disconnect())
                }
              )
            }
          }, [h, p, u.paused]),
            l.useEffect(() => {
              if (p) {
                E.add(u)
                let e = document.activeElement
                if (!p.contains(e)) {
                  let a = new CustomEvent(V, P)
                  ;(p.addEventListener(V, i),
                    p.dispatchEvent(a),
                    a.defaultPrevented ||
                      ((function (e) {
                        let { select: a = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          t = document.activeElement
                        for (let h of e)
                          if (
                            (F(h, { select: a }), document.activeElement !== t)
                          )
                            return
                      })(
                        D(p).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && F(p)))
                }
                return () => {
                  ;(p.removeEventListener(V, i),
                    setTimeout(() => {
                      let a = new CustomEvent(L, P)
                      ;(p.addEventListener(L, n),
                        p.dispatchEvent(a),
                        a.defaultPrevented ||
                          F(null != e ? e : document.body, { select: !0 }),
                        p.removeEventListener(L, n),
                        E.remove(u))
                    }, 0))
                }
              }
            }, [p, i, n, u]))
          let v = l.useCallback(
            (e) => {
              if ((!t && !h) || u.paused) return
              let a = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                y = document.activeElement
              if (a && y) {
                let a = e.currentTarget,
                  [h, r] = (function (e) {
                    let a = D(e)
                    return [T(a, e), T(a.reverse(), e)]
                  })(a)
                h && r
                  ? e.shiftKey || y !== r
                    ? e.shiftKey &&
                      y === h &&
                      (e.preventDefault(), t && F(r, { select: !0 }))
                    : (e.preventDefault(), t && F(h, { select: !0 }))
                  : y === a && e.preventDefault()
              }
            },
            [t, h, u.paused]
          )
          return (0, s.jsx)(C.div, { tabIndex: -1, ...d, ref: o, onKeyDown: v })
        })
      function D(e) {
        let a = [],
          t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let a = "INPUT" === e.tagName && "hidden" === e.type
              return e.disabled || e.hidden || a
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP
            },
          })
        for (; t.nextNode(); ) a.push(t.currentNode)
        return a
      }
      function T(e, a) {
        for (let t of e)
          if (
            !(function (e, a) {
              let { upTo: t } = a
              if ("hidden" === getComputedStyle(e).visibility) return !0
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0
                e = e.parentElement
              }
              return !1
            })(t, { upTo: a })
          )
            return t
      }
      function F(e) {
        let { select: a = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        if (e && e.focus) {
          var t
          let h = document.activeElement
          ;(e.focus({ preventScroll: !0 }),
            e !== h &&
              (t = e) instanceof HTMLInputElement &&
              "select" in t &&
              a &&
              e.select())
        }
      }
      R.displayName = "FocusScope"
      var E = (function () {
        let e = []
        return {
          add(a) {
            let t = e[0]
            ;(a !== t && (null == t || t.pause()), (e = B(e, a)).unshift(a))
          },
          remove(a) {
            var t
            null === (t = (e = B(e, a))[0]) || void 0 === t || t.resume()
          },
        }
      })()
      function B(e, a) {
        let t = [...e],
          h = t.indexOf(a)
        return (-1 !== h && t.splice(h, 1), t)
      }
      var O = l.forwardRef((e, a) => {
        var t, h
        let { container: y, ...r } = e,
          [d, p] = l.useState(!1)
        u(() => p(!0), [])
        let k =
          y ||
          (d &&
            (null === (h = globalThis) || void 0 === h
              ? void 0
              : null === (t = h.document) || void 0 === t
                ? void 0
                : t.body))
        return k ? g.createPortal((0, s.jsx)(C.div, { ...r, ref: a }), k) : null
      })
      O.displayName = "Portal"
      var Z = (e) => {
        let { present: a, children: t } = e,
          h = (function (e) {
            var a, t
            let [h, y] = l.useState(),
              r = l.useRef({}),
              d = l.useRef(e),
              p = l.useRef("none"),
              [k, i] =
                ((a = e ? "mounted" : "unmounted"),
                (t = {
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
                l.useReducer((e, a) => {
                  let h = t[e][a]
                  return null != h ? h : e
                }, a))
            return (
              l.useEffect(() => {
                let e = I(r.current)
                p.current = "mounted" === k ? e : "none"
              }, [k]),
              u(() => {
                let a = r.current,
                  t = d.current
                if (t !== e) {
                  let h = p.current,
                    y = I(a)
                  ;(e
                    ? i("MOUNT")
                    : "none" === y ||
                        (null == a ? void 0 : a.display) === "none"
                      ? i("UNMOUNT")
                      : t && h !== y
                        ? i("ANIMATION_OUT")
                        : i("UNMOUNT"),
                    (d.current = e))
                }
              }, [e, i]),
              u(() => {
                if (h) {
                  var e
                  let a
                  let t =
                      null !== (e = h.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    y = (e) => {
                      let y = I(r.current).includes(e.animationName)
                      if (
                        e.target === h &&
                        y &&
                        (i("ANIMATION_END"), !d.current)
                      ) {
                        let e = h.style.animationFillMode
                        ;((h.style.animationFillMode = "forwards"),
                          (a = t.setTimeout(() => {
                            "forwards" === h.style.animationFillMode &&
                              (h.style.animationFillMode = e)
                          })))
                      }
                    },
                    k = (e) => {
                      e.target === h && (p.current = I(r.current))
                    }
                  return (
                    h.addEventListener("animationstart", k),
                    h.addEventListener("animationcancel", y),
                    h.addEventListener("animationend", y),
                    () => {
                      ;(t.clearTimeout(a),
                        h.removeEventListener("animationstart", k),
                        h.removeEventListener("animationcancel", y),
                        h.removeEventListener("animationend", y))
                    }
                  )
                }
                i("ANIMATION_END")
              }, [h, i]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(k),
                ref: l.useCallback((e) => {
                  ;(e && (r.current = getComputedStyle(e)), y(e))
                }, []),
              }
            )
          })(a),
          y =
            "function" == typeof t
              ? t({ present: h.isPresent })
              : l.Children.only(t),
          r = M(
            h.ref,
            (function (e) {
              var a, t
              let h =
                  null ===
                    (a = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                  void 0 === a
                    ? void 0
                    : a.get,
                y = h && "isReactWarning" in h && h.isReactWarning
              return y
                ? e.ref
                : (y =
                      (h =
                        null ===
                          (t = Object.getOwnPropertyDescriptor(e, "ref")) ||
                        void 0 === t
                          ? void 0
                          : t.get) &&
                      "isReactWarning" in h &&
                      h.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref
            })(y)
          )
        return "function" == typeof t || h.isPresent
          ? l.cloneElement(y, { ref: r })
          : null
      }
      function I(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      Z.displayName = "Presence"
      var N = 0
      function U() {
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
      var G = t(5334),
        W = t(9707),
        _ = t(3098),
        X = (0, t(1224).f)(),
        K = function () {},
        Y = l.forwardRef(function (e, a) {
          var t = l.useRef(null),
            h = l.useState({
              onScrollCapture: K,
              onWheelCapture: K,
              onTouchMoveCapture: K,
            }),
            y = h[0],
            r = h[1],
            d = e.forwardProps,
            p = e.children,
            k = e.className,
            i = e.removeScrollBar,
            n = e.enabled,
            c = e.shards,
            o = e.sideCar,
            M = e.noIsolation,
            s = e.inert,
            u = e.allowPinchZoom,
            v = e.as,
            m = e.gapMode,
            x = (0, G.Tt)(e, [
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
            f = (0, _.S)([t, a]),
            g = (0, G.Cl)((0, G.Cl)({}, x), y)
          return l.createElement(
            l.Fragment,
            null,
            n &&
              l.createElement(o, {
                sideCar: X,
                removeScrollBar: i,
                shards: c,
                noIsolation: M,
                inert: s,
                setCallbacks: r,
                allowPinchZoom: !!u,
                lockRef: t,
                gapMode: m,
              }),
            d
              ? l.cloneElement(
                  l.Children.only(p),
                  (0, G.Cl)((0, G.Cl)({}, g), { ref: f })
                )
              : l.createElement(
                  void 0 === v ? "div" : v,
                  (0, G.Cl)({}, g, { className: k, ref: f }),
                  p
                )
          )
        })
      ;((Y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (Y.classNames = { fullWidth: W.pN, zeroRight: W.Mi }))
      var J = t(5238),
        Q = t(3839),
        $ = t(2827),
        ee = !1
      if ("undefined" != typeof window)
        try {
          var ea = Object.defineProperty({}, "passive", {
            get: function () {
              return ((ee = !0), !0)
            },
          })
          ;(window.addEventListener("test", ea, ea),
            window.removeEventListener("test", ea, ea))
        } catch (e) {
          ee = !1
        }
      var et = !!ee && { passive: !1 },
        eh = function (e, a) {
          if (!(e instanceof Element)) return !1
          var t = window.getComputedStyle(e)
          return (
            "hidden" !== t[a] &&
            (t.overflowY !== t.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== t[a])
          )
        },
        ey = function (e, a) {
          var t = a.ownerDocument,
            h = a
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                h instanceof ShadowRoot &&
                (h = h.host),
              er(e, h))
            ) {
              var y = ed(e, h)
              if (y[1] > y[2]) return !0
            }
            h = h.parentNode
          } while (h && h !== t.body)
          return !1
        },
        er = function (e, a) {
          return "v" === e ? eh(a, "overflowY") : eh(a, "overflowX")
        },
        ed = function (e, a) {
          return "v" === e
            ? [a.scrollTop, a.scrollHeight, a.clientHeight]
            : [a.scrollLeft, a.scrollWidth, a.clientWidth]
        },
        ep = function (e, a, t, h, y) {
          var r,
            d =
              ((r = window.getComputedStyle(a).direction),
              "h" === e && "rtl" === r ? -1 : 1),
            p = d * h,
            k = t.target,
            l = a.contains(k),
            i = !1,
            n = p > 0,
            c = 0,
            o = 0
          do {
            var M = ed(e, k),
              s = M[0],
              u = M[1] - M[2] - d * s
            ;((s || u) && er(e, k) && ((c += u), (o += s)),
              (k = k instanceof ShadowRoot ? k.host : k.parentNode))
          } while (
            (!l && k !== document.body) ||
            (l && (a.contains(k) || a === k))
          )
          return (
            n && ((y && 1 > Math.abs(c)) || (!y && p > c))
              ? (i = !0)
              : !n && ((y && 1 > Math.abs(o)) || (!y && -p > o)) && (i = !0),
            i
          )
        },
        ek = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0]
        },
        el = function (e) {
          return [e.deltaX, e.deltaY]
        },
        ei = function (e) {
          return e && "current" in e ? e.current : e
        },
        en = 0,
        ec = []
      let eo = (0, J.m)(X, function (e) {
        var a = l.useRef([]),
          t = l.useRef([0, 0]),
          h = l.useRef(),
          y = l.useState(en++)[0],
          r = l.useState($.T0)[0],
          d = l.useRef(e)
        ;(l.useEffect(
          function () {
            d.current = e
          },
          [e]
        ),
          l.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(y))
                var a = (0, G.fX)(
                  [e.lockRef.current],
                  (e.shards || []).map(ei),
                  !0
                ).filter(Boolean)
                return (
                  a.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(y))
                  }),
                  function () {
                    ;(document.body.classList.remove(
                      "block-interactivity-".concat(y)
                    ),
                      a.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(y)
                        )
                      }))
                  }
                )
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          ))
        var p = l.useCallback(function (e, a) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !d.current.allowPinchZoom
            var y,
              r = ek(e),
              p = t.current,
              k = "deltaX" in e ? e.deltaX : p[0] - r[0],
              l = "deltaY" in e ? e.deltaY : p[1] - r[1],
              i = e.target,
              n = Math.abs(k) > Math.abs(l) ? "h" : "v"
            if ("touches" in e && "h" === n && "range" === i.type) return !1
            var c = ey(n, i)
            if (!c) return !0
            if (
              (c ? (y = n) : ((y = "v" === n ? "h" : "v"), (c = ey(n, i))), !c)
            )
              return !1
            if (
              (!h.current &&
                "changedTouches" in e &&
                (k || l) &&
                (h.current = y),
              !y)
            )
              return !0
            var o = h.current || y
            return ep(o, a, e, "h" === o ? k : l, !0)
          }, []),
          k = l.useCallback(function (e) {
            if (ec.length && ec[ec.length - 1] === r) {
              var t = "deltaY" in e ? el(e) : ek(e),
                h = a.current.filter(function (a) {
                  var h
                  return (
                    a.name === e.type &&
                    (a.target === e.target || e.target === a.shadowParent) &&
                    (h = a.delta)[0] === t[0] &&
                    h[1] === t[1]
                  )
                })[0]
              if (h && h.should) {
                e.cancelable && e.preventDefault()
                return
              }
              if (!h) {
                var y = (d.current.shards || [])
                  .map(ei)
                  .filter(Boolean)
                  .filter(function (a) {
                    return a.contains(e.target)
                  })
                ;(y.length > 0 ? p(e, y[0]) : !d.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault()
              }
            }
          }, []),
          i = l.useCallback(function (e, t, h, y) {
            var r = {
              name: e,
              delta: t,
              target: h,
              should: y,
              shadowParent: (function (e) {
                for (var a = null; null !== e; )
                  (e instanceof ShadowRoot && ((a = e.host), (e = e.host)),
                    (e = e.parentNode))
                return a
              })(h),
            }
            ;(a.current.push(r),
              setTimeout(function () {
                a.current = a.current.filter(function (e) {
                  return e !== r
                })
              }, 1))
          }, []),
          n = l.useCallback(function (e) {
            ;((t.current = ek(e)), (h.current = void 0))
          }, []),
          c = l.useCallback(function (a) {
            i(a.type, el(a), a.target, p(a, e.lockRef.current))
          }, []),
          o = l.useCallback(function (a) {
            i(a.type, ek(a), a.target, p(a, e.lockRef.current))
          }, [])
        l.useEffect(function () {
          return (
            ec.push(r),
            e.setCallbacks({
              onScrollCapture: c,
              onWheelCapture: c,
              onTouchMoveCapture: o,
            }),
            document.addEventListener("wheel", k, et),
            document.addEventListener("touchmove", k, et),
            document.addEventListener("touchstart", n, et),
            function () {
              ;((ec = ec.filter(function (e) {
                return e !== r
              })),
                document.removeEventListener("wheel", k, et),
                document.removeEventListener("touchmove", k, et),
                document.removeEventListener("touchstart", n, et))
            }
          )
        }, [])
        var M = e.removeScrollBar,
          s = e.inert
        return l.createElement(
          l.Fragment,
          null,
          s
            ? l.createElement(r, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    y,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(y, " {pointer-events: all;}\n"),
              })
            : null,
          M ? l.createElement(Q.jp, { gapMode: e.gapMode }) : null
        )
      })
      var eM = l.forwardRef(function (e, a) {
        return l.createElement(Y, (0, G.Cl)({}, e, { ref: a, sideCar: eo }))
      })
      eM.classNames = Y.classNames
      var es = t(6093),
        eu = "Dialog",
        [ev, em] = (function (e, a = []) {
          let t = [],
            h = () => {
              let a = t.map((e) => l.createContext(e))
              return function (t) {
                let h = t?.[e] || a
                return l.useMemo(
                  () => ({ [`__scope${e}`]: { ...t, [e]: h } }),
                  [t, h]
                )
              }
            }
          return (
            (h.scopeName = e),
            [
              function (a, h) {
                let y = l.createContext(h),
                  r = t.length
                t = [...t, h]
                let d = (a) => {
                  let { scope: t, children: h, ...d } = a,
                    p = t?.[e]?.[r] || y,
                    k = l.useMemo(() => d, Object.values(d))
                  return (0, s.jsx)(p.Provider, { value: k, children: h })
                }
                return (
                  (d.displayName = a + "Provider"),
                  [
                    d,
                    function (t, d) {
                      let p = d?.[e]?.[r] || y,
                        k = l.useContext(p)
                      if (k) return k
                      if (void 0 !== h) return h
                      throw Error(`\`${t}\` must be used within \`${a}\``)
                    },
                  ]
                )
              },
              (function (...e) {
                let a = e[0]
                if (1 === e.length) return a
                let t = () => {
                  let t = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }))
                  return function (e) {
                    let h = t.reduce((a, { useScope: t, scopeName: h }) => {
                      let y = t(e)[`__scope${h}`]
                      return { ...a, ...y }
                    }, {})
                    return l.useMemo(
                      () => ({ [`__scope${a.scopeName}`]: h }),
                      [h]
                    )
                  }
                }
                return ((t.scopeName = a.scopeName), t)
              })(h, ...a),
            ]
          )
        })(eu),
        [ex, ef] = ev(eu),
        eg = (e) => {
          let {
              __scopeDialog: a,
              children: t,
              open: h,
              defaultOpen: y,
              onOpenChange: r,
              modal: d = !0,
            } = e,
            p = l.useRef(null),
            k = l.useRef(null),
            [i = !1, n] = (function ({
              prop: e,
              defaultProp: a,
              onChange: t = () => {},
            }) {
              let [h, y] = (function ({ defaultProp: e, onChange: a }) {
                  let t = l.useState(e),
                    [h] = t,
                    y = l.useRef(h),
                    r = f(a)
                  return (
                    l.useEffect(() => {
                      y.current !== h && (r(h), (y.current = h))
                    }, [h, y, r]),
                    t
                  )
                })({ defaultProp: a, onChange: t }),
                r = void 0 !== e,
                d = r ? e : h,
                p = f(t)
              return [
                d,
                l.useCallback(
                  (a) => {
                    if (r) {
                      let t = "function" == typeof a ? a(e) : a
                      t !== e && p(t)
                    } else y(a)
                  },
                  [r, e, y, p]
                ),
              ]
            })({ prop: h, defaultProp: y, onChange: r })
          return (0, s.jsx)(ex, {
            scope: a,
            triggerRef: p,
            contentRef: k,
            contentId: x(),
            titleId: x(),
            descriptionId: x(),
            open: i,
            onOpenChange: n,
            onOpenToggle: l.useCallback(() => n((e) => !e), [n]),
            modal: d,
            children: t,
          })
        }
      eg.displayName = eu
      var eA = "DialogTrigger"
      l.forwardRef((e, a) => {
        let { __scopeDialog: t, ...h } = e,
          y = ef(eA, t),
          r = M(a, y.triggerRef)
        return (0, s.jsx)(C.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": y.open,
          "aria-controls": y.contentId,
          "data-state": eB(y.open),
          ...h,
          ref: r,
          onClick: n(e.onClick, y.onOpenToggle),
        })
      }).displayName = eA
      var ew = "DialogPortal",
        [eb, eC] = ev(ew, { forceMount: void 0 }),
        eq = (e) => {
          let {
              __scopeDialog: a,
              forceMount: t,
              children: h,
              container: y,
            } = e,
            r = ef(ew, a)
          return (0, s.jsx)(eb, {
            scope: a,
            forceMount: t,
            children: l.Children.map(h, (e) =>
              (0, s.jsx)(Z, {
                present: t || r.open,
                children: (0, s.jsx)(O, {
                  asChild: !0,
                  container: y,
                  children: e,
                }),
              })
            ),
          })
        }
      eq.displayName = ew
      var ez = "DialogOverlay",
        ej = l.forwardRef((e, a) => {
          let t = eC(ez, e.__scopeDialog),
            { forceMount: h = t.forceMount, ...y } = e,
            r = ef(ez, e.__scopeDialog)
          return r.modal
            ? (0, s.jsx)(Z, {
                present: h || r.open,
                children: (0, s.jsx)(eS, { ...y, ref: a }),
              })
            : null
        })
      ej.displayName = ez
      var eH = A("DialogOverlay.RemoveScroll"),
        eS = l.forwardRef((e, a) => {
          let { __scopeDialog: t, ...h } = e,
            y = ef(ez, t)
          return (0, s.jsx)(eM, {
            as: eH,
            allowPinchZoom: !0,
            shards: [y.contentRef],
            children: (0, s.jsx)(C.div, {
              "data-state": eB(y.open),
              ...h,
              ref: a,
              style: { pointerEvents: "auto", ...h.style },
            }),
          })
        }),
        eV = "DialogContent",
        eL = l.forwardRef((e, a) => {
          let t = eC(eV, e.__scopeDialog),
            { forceMount: h = t.forceMount, ...y } = e,
            r = ef(eV, e.__scopeDialog)
          return (0, s.jsx)(Z, {
            present: h || r.open,
            children: r.modal
              ? (0, s.jsx)(eP, { ...y, ref: a })
              : (0, s.jsx)(eR, { ...y, ref: a }),
          })
        })
      eL.displayName = eV
      var eP = l.forwardRef((e, a) => {
          let t = ef(eV, e.__scopeDialog),
            h = l.useRef(null),
            y = M(a, t.contentRef, h)
          return (
            l.useEffect(() => {
              let e = h.current
              if (e) return (0, es.Eq)(e)
            }, []),
            (0, s.jsx)(eD, {
              ...e,
              ref: y,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: n(e.onCloseAutoFocus, (e) => {
                var a
                ;(e.preventDefault(),
                  null === (a = t.triggerRef.current) ||
                    void 0 === a ||
                    a.focus())
              }),
              onPointerDownOutside: n(e.onPointerDownOutside, (e) => {
                let a = e.detail.originalEvent,
                  t = 0 === a.button && !0 === a.ctrlKey
                ;(2 === a.button || t) && e.preventDefault()
              }),
              onFocusOutside: n(e.onFocusOutside, (e) => e.preventDefault()),
            })
          )
        }),
        eR = l.forwardRef((e, a) => {
          let t = ef(eV, e.__scopeDialog),
            h = l.useRef(!1),
            y = l.useRef(!1)
          return (0, s.jsx)(eD, {
            ...e,
            ref: a,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (a) => {
              var r, d
              ;(null === (r = e.onCloseAutoFocus) ||
                void 0 === r ||
                r.call(e, a),
                a.defaultPrevented ||
                  (h.current ||
                    null === (d = t.triggerRef.current) ||
                    void 0 === d ||
                    d.focus(),
                  a.preventDefault()),
                (h.current = !1),
                (y.current = !1))
            },
            onInteractOutside: (a) => {
              var r, d
              ;(null === (r = e.onInteractOutside) ||
                void 0 === r ||
                r.call(e, a),
                a.defaultPrevented ||
                  ((h.current = !0),
                  "pointerdown" !== a.detail.originalEvent.type ||
                    (y.current = !0)))
              let p = a.target
              ;((null === (d = t.triggerRef.current) || void 0 === d
                ? void 0
                : d.contains(p)) && a.preventDefault(),
                "focusin" === a.detail.originalEvent.type &&
                  y.current &&
                  a.preventDefault())
            },
          })
        }),
        eD = l.forwardRef((e, a) => {
          let {
              __scopeDialog: t,
              trapFocus: h,
              onOpenAutoFocus: y,
              onCloseAutoFocus: r,
              ...d
            } = e,
            p = ef(eV, t),
            k = l.useRef(null),
            i = M(a, k)
          return (
            l.useEffect(() => {
              var e, a
              let t = document.querySelectorAll("[data-radix-focus-guard]")
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = t[0]) && void 0 !== e ? e : U()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (a = t[1]) && void 0 !== a ? a : U()
                ),
                N++,
                () => {
                  ;(1 === N &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    N--)
                }
              )
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(R, {
                  asChild: !0,
                  loop: !0,
                  trapped: h,
                  onMountAutoFocus: y,
                  onUnmountAutoFocus: r,
                  children: (0, s.jsx)(j, {
                    role: "dialog",
                    id: p.contentId,
                    "aria-describedby": p.descriptionId,
                    "aria-labelledby": p.titleId,
                    "data-state": eB(p.open),
                    ...d,
                    ref: i,
                    onDismiss: () => p.onOpenChange(!1),
                  }),
                }),
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(eN, { titleId: p.titleId }),
                    (0, s.jsx)(eU, {
                      contentRef: k,
                      descriptionId: p.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          )
        }),
        eT = "DialogTitle"
      l.forwardRef((e, a) => {
        let { __scopeDialog: t, ...h } = e,
          y = ef(eT, t)
        return (0, s.jsx)(C.h2, { id: y.titleId, ...h, ref: a })
      }).displayName = eT
      var eF = "DialogDescription"
      l.forwardRef((e, a) => {
        let { __scopeDialog: t, ...h } = e,
          y = ef(eF, t)
        return (0, s.jsx)(C.p, { id: y.descriptionId, ...h, ref: a })
      }).displayName = eF
      var eE = "DialogClose"
      function eB(e) {
        return e ? "open" : "closed"
      }
      l.forwardRef((e, a) => {
        let { __scopeDialog: t, ...h } = e,
          y = ef(eE, t)
        return (0, s.jsx)(C.button, {
          type: "button",
          ...h,
          ref: a,
          onClick: n(e.onClick, () => y.onOpenChange(!1)),
        })
      }).displayName = eE
      var eO = "DialogTitleWarning",
        [eZ, eI] = (function (e, a) {
          let t = l.createContext(a),
            h = (e) => {
              let { children: a, ...h } = e,
                y = l.useMemo(() => h, Object.values(h))
              return (0, s.jsx)(t.Provider, { value: y, children: a })
            }
          return (
            (h.displayName = e + "Provider"),
            [
              h,
              function (h) {
                let y = l.useContext(t)
                if (y) return y
                if (void 0 !== a) return a
                throw Error(`\`${h}\` must be used within \`${e}\``)
              },
            ]
          )
        })(eO, { contentName: eV, titleName: eT, docsSlug: "dialog" }),
        eN = (e) => {
          let { titleId: a } = e,
            t = eI(eO),
            h = "`"
              .concat(t.contentName, "` requires a `")
              .concat(
                t.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                t.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(t.docsSlug)
          return (
            l.useEffect(() => {
              a && !document.getElementById(a) && console.error(h)
            }, [h, a]),
            null
          )
        },
        eU = (e) => {
          let { contentRef: a, descriptionId: t } = e,
            h = eI("DialogDescriptionWarning"),
            y =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                h.contentName,
                "}."
              )
          return (
            l.useEffect(() => {
              var e
              let h =
                null === (e = a.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby")
              t && h && !document.getElementById(t) && console.warn(y)
            }, [y, a, t]),
            null
          )
        },
        eG = '[cmdk-group=""]',
        eW = '[cmdk-group-items=""]',
        e_ = '[cmdk-item=""]',
        eX = "".concat(e_, ':not([aria-disabled="true"])'),
        eK = "cmdk-item-select",
        eY = "data-value",
        eJ = (e, a, t) =>
          (function (e, a, t) {
            return (function e(a, t, h, k, l, i, n) {
              if (i === t.length) return l === a.length ? 1 : 0.99
              var c = `${l},${i}`
              if (void 0 !== n[c]) return n[c]
              for (
                var o, M, s, u, v = k.charAt(i), m = h.indexOf(v, l), x = 0;
                m >= 0;

              )
                ((o = e(a, t, h, k, m + 1, i + 1, n)) > x &&
                  (m === l
                    ? (o *= 1)
                    : y.test(a.charAt(m - 1))
                      ? ((o *= 0.8),
                        (s = a.slice(l, m - 1).match(r)) &&
                          l > 0 &&
                          (o *= Math.pow(0.999, s.length)))
                      : d.test(a.charAt(m - 1))
                        ? ((o *= 0.9),
                          (u = a.slice(l, m - 1).match(p)) &&
                            l > 0 &&
                            (o *= Math.pow(0.999, u.length)))
                        : ((o *= 0.17), l > 0 && (o *= Math.pow(0.999, m - l))),
                  a.charAt(m) !== t.charAt(i) && (o *= 0.9999)),
                  ((o < 0.1 && h.charAt(m - 1) === k.charAt(i + 1)) ||
                    (k.charAt(i + 1) === k.charAt(i) &&
                      h.charAt(m - 1) !== k.charAt(i))) &&
                    0.1 * (M = e(a, t, h, k, m + 1, i + 2, n)) > o &&
                    (o = 0.1 * M),
                  o > x && (x = o),
                  (m = h.indexOf(v, m + 1)))
              return ((n[c] = x), x)
            })(
              (e = t && t.length > 0 ? `${e + " " + t.join(" ")}` : e),
              a,
              k(e),
              k(a),
              0,
              0,
              {}
            )
          })(e, a, t),
        eQ = l.createContext(void 0),
        e$ = () => l.useContext(eQ),
        e1 = l.createContext(void 0),
        e2 = () => l.useContext(e1),
        e0 = l.createContext(void 0),
        e4 = l.forwardRef((e, a) => {
          let t = ah(() => {
              var a, t
              return {
                search: "",
                value:
                  null != (t = null != (a = e.value) ? a : e.defaultValue)
                    ? t
                    : "",
                selectedItemId: void 0,
                filtered: { count: 0, items: new Map(), groups: new Set() },
              }
            }),
            h = ah(() => new Set()),
            y = ah(() => new Map()),
            r = ah(() => new Map()),
            d = ah(() => new Set()),
            p = aa(e),
            {
              label: k,
              children: i,
              value: n,
              onValueChange: c,
              filter: o,
              shouldFilter: M,
              loop: s,
              disablePointerSelection: u = !1,
              vimBindings: v = !0,
              ...m
            } = e,
            f = x(),
            g = x(),
            A = x(),
            w = l.useRef(null),
            b = ad()
          ;(at(() => {
            if (void 0 !== n) {
              let e = n.trim()
              ;((t.current.value = e), q.emit())
            }
          }, [n]),
            at(() => {
              b(6, L)
            }, []))
          let q = l.useMemo(
              () => ({
                subscribe: (e) => (d.current.add(e), () => d.current.delete(e)),
                snapshot: () => t.current,
                setState: (e, a, h) => {
                  var y, r, d, k
                  if (!Object.is(t.current[e], a)) {
                    if (((t.current[e] = a), "search" === e))
                      (V(), H(), b(1, S))
                    else if ("value" === e) {
                      if (
                        document.activeElement.hasAttribute("cmdk-input") ||
                        document.activeElement.hasAttribute("cmdk-root")
                      ) {
                        let e = document.getElementById(A)
                        e
                          ? e.focus()
                          : null == (y = document.getElementById(f)) ||
                            y.focus()
                      }
                      if (
                        (b(7, () => {
                          var e
                          ;((t.current.selectedItemId =
                            null == (e = P()) ? void 0 : e.id),
                            q.emit())
                        }),
                        h || b(5, L),
                        (null == (r = p.current) ? void 0 : r.value) !== void 0)
                      ) {
                        null == (k = (d = p.current).onValueChange) ||
                          k.call(d, null != a ? a : "")
                        return
                      }
                    }
                    q.emit()
                  }
                },
                emit: () => {
                  d.current.forEach((e) => e())
                },
              }),
              []
            ),
            z = l.useMemo(
              () => ({
                value: (e, a, h) => {
                  var y
                  a !== (null == (y = r.current.get(e)) ? void 0 : y.value) &&
                    (r.current.set(e, { value: a, keywords: h }),
                    t.current.filtered.items.set(e, j(a, h)),
                    b(2, () => {
                      ;(H(), q.emit())
                    }))
                },
                item: (e, a) => (
                  h.current.add(e),
                  a &&
                    (y.current.has(a)
                      ? y.current.get(a).add(e)
                      : y.current.set(a, new Set([e]))),
                  b(3, () => {
                    ;(V(), H(), t.current.value || S(), q.emit())
                  }),
                  () => {
                    ;(r.current.delete(e),
                      h.current.delete(e),
                      t.current.filtered.items.delete(e))
                    let a = P()
                    b(4, () => {
                      ;(V(),
                        (null == a ? void 0 : a.getAttribute("id")) === e &&
                          S(),
                        q.emit())
                    })
                  }
                ),
                group: (e) => (
                  y.current.has(e) || y.current.set(e, new Set()),
                  () => {
                    ;(r.current.delete(e), y.current.delete(e))
                  }
                ),
                filter: () => p.current.shouldFilter,
                label: k || e["aria-label"],
                getDisablePointerSelection: () =>
                  p.current.disablePointerSelection,
                listId: f,
                inputId: A,
                labelId: g,
                listInnerRef: w,
              }),
              []
            )
          function j(e, a) {
            var h, y
            let r =
              null != (y = null == (h = p.current) ? void 0 : h.filter) ? y : eJ
            return e ? r(e, t.current.search, a) : 0
          }
          function H() {
            if (!t.current.search || !1 === p.current.shouldFilter) return
            let e = t.current.filtered.items,
              a = []
            t.current.filtered.groups.forEach((t) => {
              let h = y.current.get(t),
                r = 0
              ;(h.forEach((a) => {
                r = Math.max(e.get(a), r)
              }),
                a.push([t, r]))
            })
            let h = w.current
            ;(R()
              .sort((a, t) => {
                var h, y
                let r = a.getAttribute("id"),
                  d = t.getAttribute("id")
                return (
                  (null != (h = e.get(d)) ? h : 0) -
                  (null != (y = e.get(r)) ? y : 0)
                )
              })
              .forEach((e) => {
                let a = e.closest(eW)
                a
                  ? a.appendChild(
                      e.parentElement === a
                        ? e
                        : e.closest("".concat(eW, " > *"))
                    )
                  : h.appendChild(
                      e.parentElement === h
                        ? e
                        : e.closest("".concat(eW, " > *"))
                    )
              }),
              a
                .sort((e, a) => a[1] - e[1])
                .forEach((e) => {
                  var a
                  let t =
                    null == (a = w.current)
                      ? void 0
                      : a.querySelector(
                          ""
                            .concat(eG, "[")
                            .concat(eY, '="')
                            .concat(encodeURIComponent(e[0]), '"]')
                        )
                  null == t || t.parentElement.appendChild(t)
                }))
          }
          function S() {
            let e = R().find((e) => "true" !== e.getAttribute("aria-disabled")),
              a = null == e ? void 0 : e.getAttribute(eY)
            q.setState("value", a || void 0)
          }
          function V() {
            var e, a, d, k
            if (!t.current.search || !1 === p.current.shouldFilter) {
              t.current.filtered.count = h.current.size
              return
            }
            t.current.filtered.groups = new Set()
            let l = 0
            for (let y of h.current) {
              let h = j(
                null != (a = null == (e = r.current.get(y)) ? void 0 : e.value)
                  ? a
                  : "",
                null !=
                  (k = null == (d = r.current.get(y)) ? void 0 : d.keywords)
                  ? k
                  : []
              )
              ;(t.current.filtered.items.set(y, h), h > 0 && l++)
            }
            for (let [e, a] of y.current)
              for (let h of a)
                if (t.current.filtered.items.get(h) > 0) {
                  t.current.filtered.groups.add(e)
                  break
                }
            t.current.filtered.count = l
          }
          function L() {
            var e, a, t
            let h = P()
            h &&
              ((null == (e = h.parentElement) ? void 0 : e.firstChild) === h &&
                (null ==
                  (t =
                    null == (a = h.closest(eG))
                      ? void 0
                      : a.querySelector('[cmdk-group-heading=""]')) ||
                  t.scrollIntoView({ block: "nearest" })),
              h.scrollIntoView({ block: "nearest" }))
          }
          function P() {
            var e
            return null == (e = w.current)
              ? void 0
              : e.querySelector("".concat(e_, '[aria-selected="true"]'))
          }
          function R() {
            var e
            return Array.from(
              (null == (e = w.current) ? void 0 : e.querySelectorAll(eX)) || []
            )
          }
          function D(e) {
            let a = R()[e]
            a && q.setState("value", a.getAttribute(eY))
          }
          function T(e) {
            var a
            let t = P(),
              h = R(),
              y = h.findIndex((e) => e === t),
              r = h[y + e]
            ;(null != (a = p.current) &&
              a.loop &&
              (r =
                y + e < 0
                  ? h[h.length - 1]
                  : y + e === h.length
                    ? h[0]
                    : h[y + e]),
              r && q.setState("value", r.getAttribute(eY)))
          }
          function F(e) {
            let a = P(),
              t = null == a ? void 0 : a.closest(eG),
              h
            for (; t && !h; )
              h =
                null ==
                (t =
                  e > 0
                    ? (function (e, a) {
                        let t = e.nextElementSibling
                        for (; t; ) {
                          if (t.matches(a)) return t
                          t = t.nextElementSibling
                        }
                      })(t, eG)
                    : (function (e, a) {
                        let t = e.previousElementSibling
                        for (; t; ) {
                          if (t.matches(a)) return t
                          t = t.previousElementSibling
                        }
                      })(t, eG))
                  ? void 0
                  : t.querySelector(eX)
            h ? q.setState("value", h.getAttribute(eY)) : T(e)
          }
          let E = () => D(R().length - 1),
            B = (e) => {
              ;(e.preventDefault(), e.metaKey ? E() : e.altKey ? F(1) : T(1))
            },
            O = (e) => {
              ;(e.preventDefault(), e.metaKey ? D(0) : e.altKey ? F(-1) : T(-1))
            }
          return l.createElement(
            C.div,
            {
              ref: a,
              tabIndex: -1,
              ...m,
              "cmdk-root": "",
              onKeyDown: (e) => {
                var a
                null == (a = m.onKeyDown) || a.call(m, e)
                let t = e.nativeEvent.isComposing || 229 === e.keyCode
                if (!(e.defaultPrevented || t))
                  switch (e.key) {
                    case "n":
                    case "j":
                      v && e.ctrlKey && B(e)
                      break
                    case "ArrowDown":
                      B(e)
                      break
                    case "p":
                    case "k":
                      v && e.ctrlKey && O(e)
                      break
                    case "ArrowUp":
                      O(e)
                      break
                    case "Home":
                      ;(e.preventDefault(), D(0))
                      break
                    case "End":
                      ;(e.preventDefault(), E())
                      break
                    case "Enter": {
                      e.preventDefault()
                      let a = P()
                      if (a) {
                        let e = new Event(eK)
                        a.dispatchEvent(e)
                      }
                    }
                  }
              },
            },
            l.createElement(
              "label",
              {
                "cmdk-label": "",
                htmlFor: z.inputId,
                id: z.labelId,
                style: ak,
              },
              k
            ),
            ap(e, (e) =>
              l.createElement(
                e1.Provider,
                { value: q },
                l.createElement(eQ.Provider, { value: z }, e)
              )
            )
          )
        }),
        e5 = l.forwardRef((e, a) => {
          var t, h
          let y = x(),
            r = l.useRef(null),
            d = l.useContext(e0),
            p = e$(),
            k = aa(e),
            i =
              null != (h = null == (t = k.current) ? void 0 : t.forceMount)
                ? h
                : null == d
                  ? void 0
                  : d.forceMount
          at(() => {
            if (!i) return p.item(y, null == d ? void 0 : d.id)
          }, [i])
          let n = ar(y, r, [e.value, e.children, r], e.keywords),
            c = e2(),
            M = ay((e) => e.value && e.value === n.current),
            s = ay(
              (e) =>
                !!i ||
                !1 === p.filter() ||
                !e.search ||
                e.filtered.items.get(y) > 0
            )
          function u() {
            var e, a
            ;(v(),
              null == (a = (e = k.current).onSelect) || a.call(e, n.current))
          }
          function v() {
            c.setState("value", n.current, !0)
          }
          if (
            (l.useEffect(() => {
              let a = r.current
              if (!(!a || e.disabled))
                return (
                  a.addEventListener(eK, u),
                  () => a.removeEventListener(eK, u)
                )
            }, [s, e.onSelect, e.disabled]),
            !s)
          )
            return null
          let {
            disabled: m,
            value: f,
            onSelect: g,
            forceMount: A,
            keywords: w,
            ...b
          } = e
          return l.createElement(
            C.div,
            {
              ref: o(r, a),
              ...b,
              id: y,
              "cmdk-item": "",
              role: "option",
              "aria-disabled": !!m,
              "aria-selected": !!M,
              "data-disabled": !!m,
              "data-selected": !!M,
              onPointerMove: m || p.getDisablePointerSelection() ? void 0 : v,
              onClick: m ? void 0 : u,
            },
            e.children
          )
        }),
        e3 = l.forwardRef((e, a) => {
          let { heading: t, children: h, forceMount: y, ...r } = e,
            d = x(),
            p = l.useRef(null),
            k = l.useRef(null),
            i = x(),
            n = e$(),
            c = ay(
              (e) =>
                !!y ||
                !1 === n.filter() ||
                !e.search ||
                e.filtered.groups.has(d)
            )
          ;(at(() => n.group(d), []), ar(d, p, [e.value, e.heading, k]))
          let M = l.useMemo(() => ({ id: d, forceMount: y }), [y])
          return l.createElement(
            C.div,
            {
              ref: o(p, a),
              ...r,
              "cmdk-group": "",
              role: "presentation",
              hidden: !c || void 0,
            },
            t &&
              l.createElement(
                "div",
                { ref: k, "cmdk-group-heading": "", "aria-hidden": !0, id: i },
                t
              ),
            ap(e, (e) =>
              l.createElement(
                "div",
                {
                  "cmdk-group-items": "",
                  role: "group",
                  "aria-labelledby": t ? i : void 0,
                },
                l.createElement(e0.Provider, { value: M }, e)
              )
            )
          )
        }),
        e6 = l.forwardRef((e, a) => {
          let { alwaysRender: t, ...h } = e,
            y = l.useRef(null),
            r = ay((e) => !e.search)
          return t || r
            ? l.createElement(C.div, {
                ref: o(y, a),
                ...h,
                "cmdk-separator": "",
                role: "separator",
              })
            : null
        }),
        e8 = l.forwardRef((e, a) => {
          let { onValueChange: t, ...h } = e,
            y = null != e.value,
            r = e2(),
            d = ay((e) => e.search),
            p = ay((e) => e.selectedItemId),
            k = e$()
          return (
            l.useEffect(() => {
              null != e.value && r.setState("search", e.value)
            }, [e.value]),
            l.createElement(C.input, {
              ref: a,
              ...h,
              "cmdk-input": "",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: !1,
              "aria-autocomplete": "list",
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": k.listId,
              "aria-labelledby": k.labelId,
              "aria-activedescendant": p,
              id: k.inputId,
              type: "text",
              value: y ? e.value : d,
              onChange: (e) => {
                ;(y || r.setState("search", e.target.value),
                  null == t || t(e.target.value))
              },
            })
          )
        }),
        e7 = l.forwardRef((e, a) => {
          let { children: t, label: h = "Suggestions", ...y } = e,
            r = l.useRef(null),
            d = l.useRef(null),
            p = ay((e) => e.selectedItemId),
            k = e$()
          return (
            l.useEffect(() => {
              if (d.current && r.current) {
                let e = d.current,
                  a = r.current,
                  t,
                  h = new ResizeObserver(() => {
                    t = requestAnimationFrame(() => {
                      let t = e.offsetHeight
                      a.style.setProperty(
                        "--cmdk-list-height",
                        t.toFixed(1) + "px"
                      )
                    })
                  })
                return (
                  h.observe(e),
                  () => {
                    ;(cancelAnimationFrame(t), h.unobserve(e))
                  }
                )
              }
            }, []),
            l.createElement(
              C.div,
              {
                ref: o(r, a),
                ...y,
                "cmdk-list": "",
                role: "listbox",
                tabIndex: -1,
                "aria-activedescendant": p,
                "aria-label": h,
                id: k.listId,
              },
              ap(e, (e) =>
                l.createElement(
                  "div",
                  { ref: o(d, k.listInnerRef), "cmdk-list-sizer": "" },
                  e
                )
              )
            )
          )
        }),
        e9 = l.forwardRef((e, a) => {
          let {
            open: t,
            onOpenChange: h,
            overlayClassName: y,
            contentClassName: r,
            container: d,
            ...p
          } = e
          return l.createElement(
            eg,
            { open: t, onOpenChange: h },
            l.createElement(
              eq,
              { container: d },
              l.createElement(ej, { "cmdk-overlay": "", className: y }),
              l.createElement(
                eL,
                { "aria-label": e.label, "cmdk-dialog": "", className: r },
                l.createElement(e4, { ref: a, ...p })
              )
            )
          )
        }),
        ae = Object.assign(e4, {
          List: e7,
          Item: e5,
          Input: e8,
          Group: e3,
          Separator: e6,
          Dialog: e9,
          Empty: l.forwardRef((e, a) =>
            ay((e) => 0 === e.filtered.count)
              ? l.createElement(C.div, {
                  ref: a,
                  ...e,
                  "cmdk-empty": "",
                  role: "presentation",
                })
              : null
          ),
          Loading: l.forwardRef((e, a) => {
            let { progress: t, children: h, label: y = "Loading...", ...r } = e
            return l.createElement(
              C.div,
              {
                ref: a,
                ...r,
                "cmdk-loading": "",
                role: "progressbar",
                "aria-valuenow": t,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-label": y,
              },
              ap(e, (e) => l.createElement("div", { "aria-hidden": !0 }, e))
            )
          }),
        })
      function aa(e) {
        let a = l.useRef(e)
        return (
          at(() => {
            a.current = e
          }),
          a
        )
      }
      var at = "undefined" == typeof window ? l.useEffect : l.useLayoutEffect
      function ah(e) {
        let a = l.useRef()
        return (void 0 === a.current && (a.current = e()), a)
      }
      function ay(e) {
        let a = e2(),
          t = () => e(a.snapshot())
        return l.useSyncExternalStore(a.subscribe, t, t)
      }
      function ar(e, a, t) {
        let h =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          y = l.useRef(),
          r = e$()
        return (
          at(() => {
            var d
            let p = (() => {
                var e
                for (let a of t) {
                  if ("string" == typeof a) return a.trim()
                  if ("object" == typeof a && "current" in a)
                    return a.current
                      ? null == (e = a.current.textContent)
                        ? void 0
                        : e.trim()
                      : y.current
                }
              })(),
              k = h.map((e) => e.trim())
            ;(r.value(e, p, k),
              null == (d = a.current) || d.setAttribute(eY, p),
              (y.current = p))
          }),
          y
        )
      }
      var ad = () => {
        let [e, a] = l.useState(),
          t = ah(() => new Map())
        return (
          at(() => {
            ;(t.current.forEach((e) => e()), (t.current = new Map()))
          }, [e]),
          (e, h) => {
            ;(t.current.set(e, h), a({}))
          }
        )
      }
      function ap(e, a) {
        let t,
          { asChild: h, children: y } = e
        return h && l.isValidElement(y)
          ? l.cloneElement(
              "function" == typeof (t = y.type)
                ? t(y.props)
                : "render" in t
                  ? t.render(y.props)
                  : y,
              { ref: y.ref },
              a(y.props.children)
            )
          : a(y)
      }
      var ak = {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
      }
    },
    3391: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ])
    },
    3906: (e, a, t) => {
      ;(t.r(a),
        t.d(a, {
          AArrowDown: () => y,
          AArrowUp: () => r,
          ALargeSmall: () => d,
          Accessibility: () => p,
          Activity: () => k,
          AirVent: () => l,
          Airplay: () => i,
          AlarmClock: () => s,
          AlarmClockCheck: () => n,
          AlarmClockMinus: () => c,
          AlarmClockOff: () => o,
          AlarmClockPlus: () => M,
          AlarmSmoke: () => u,
          Album: () => v,
          AlignCenter: () => f,
          AlignCenterHorizontal: () => m,
          AlignCenterVertical: () => x,
          AlignEndHorizontal: () => g,
          AlignEndVertical: () => A,
          AlignHorizontalDistributeCenter: () => w,
          AlignHorizontalDistributeEnd: () => b,
          AlignHorizontalDistributeStart: () => C,
          AlignHorizontalJustifyCenter: () => q,
          AlignHorizontalJustifyEnd: () => z,
          AlignHorizontalJustifyStart: () => j,
          AlignHorizontalSpaceAround: () => H,
          AlignHorizontalSpaceBetween: () => S,
          AlignJustify: () => V,
          AlignLeft: () => L,
          AlignRight: () => P,
          AlignStartHorizontal: () => R,
          AlignStartVertical: () => D,
          AlignVerticalDistributeCenter: () => T,
          AlignVerticalDistributeEnd: () => F,
          AlignVerticalDistributeStart: () => E,
          AlignVerticalJustifyCenter: () => B,
          AlignVerticalJustifyEnd: () => O,
          AlignVerticalJustifyStart: () => Z,
          AlignVerticalSpaceAround: () => I,
          AlignVerticalSpaceBetween: () => N,
          Ambulance: () => U,
          Ampersand: () => G,
          Ampersands: () => W,
          Amphora: () => _,
          Anchor: () => X,
          Angry: () => K,
          Annoyed: () => Y,
          Antenna: () => J,
          Anvil: () => Q,
          Aperture: () => $,
          AppWindow: () => ea,
          AppWindowMac: () => ee,
          Apple: () => et,
          Archive: () => er,
          ArchiveRestore: () => eh,
          ArchiveX: () => ey,
          Armchair: () => ed,
          ArrowBigDown: () => ek,
          ArrowBigDownDash: () => ep,
          ArrowBigLeft: () => ei,
          ArrowBigLeftDash: () => el,
          ArrowBigRight: () => ec,
          ArrowBigRightDash: () => en,
          ArrowBigUp: () => eM,
          ArrowBigUpDash: () => eo,
          ArrowDown: () => ez,
          ArrowDown01: () => es,
          ArrowDown10: () => eu,
          ArrowDownAZ: () => ev,
          ArrowDownFromLine: () => em,
          ArrowDownLeft: () => ex,
          ArrowDownNarrowWide: () => ef,
          ArrowDownRight: () => eg,
          ArrowDownToDot: () => eA,
          ArrowDownToLine: () => ew,
          ArrowDownUp: () => eb,
          ArrowDownWideNarrow: () => eC,
          ArrowDownZA: () => eq,
          ArrowLeft: () => eV,
          ArrowLeftFromLine: () => ej,
          ArrowLeftRight: () => eH,
          ArrowLeftToLine: () => eS,
          ArrowRight: () => eD,
          ArrowRightFromLine: () => eL,
          ArrowRightLeft: () => eP,
          ArrowRightToLine: () => eR,
          ArrowUp: () => eX,
          ArrowUp01: () => eT,
          ArrowUp10: () => eF,
          ArrowUpAZ: () => eE,
          ArrowUpDown: () => eB,
          ArrowUpFromDot: () => eO,
          ArrowUpFromLine: () => eZ,
          ArrowUpLeft: () => eI,
          ArrowUpNarrowWide: () => eN,
          ArrowUpRight: () => eU,
          ArrowUpToLine: () => eG,
          ArrowUpWideNarrow: () => eW,
          ArrowUpZA: () => e_,
          ArrowsUpFromLine: () => eK,
          Asterisk: () => eY,
          AtSign: () => eJ,
          Atom: () => eQ,
          AudioLines: () => e$,
          AudioWaveform: () => e1,
          Award: () => e2,
          Axe: () => e0,
          Axis3d: () => e4,
          Baby: () => e5,
          Backpack: () => e3,
          Badge: () => ac,
          BadgeAlert: () => e6,
          BadgeCent: () => e8,
          BadgeCheck: () => e7,
          BadgeDollarSign: () => e9,
          BadgeEuro: () => ae,
          BadgeHelp: () => aa,
          BadgeIndianRupee: () => at,
          BadgeInfo: () => ah,
          BadgeJapaneseYen: () => ay,
          BadgeMinus: () => ar,
          BadgePercent: () => ad,
          BadgePlus: () => ap,
          BadgePoundSterling: () => ak,
          BadgeRussianRuble: () => al,
          BadgeSwissFranc: () => ai,
          BadgeX: () => an,
          BaggageClaim: () => ao,
          Ban: () => aM,
          Banana: () => as,
          Bandage: () => au,
          Banknote: () => av,
          Barcode: () => am,
          Baseline: () => ax,
          Bath: () => af,
          Battery: () => aq,
          BatteryCharging: () => ag,
          BatteryFull: () => aA,
          BatteryLow: () => aw,
          BatteryMedium: () => ab,
          BatteryWarning: () => aC,
          Beaker: () => az,
          Bean: () => aH,
          BeanOff: () => aj,
          Bed: () => aL,
          BedDouble: () => aS,
          BedSingle: () => aV,
          Beef: () => aP,
          Beer: () => aD,
          BeerOff: () => aR,
          Bell: () => aI,
          BellDot: () => aT,
          BellElectric: () => aF,
          BellMinus: () => aE,
          BellOff: () => aB,
          BellPlus: () => aO,
          BellRing: () => aZ,
          BetweenHorizontalEnd: () => aN,
          BetweenHorizontalStart: () => aU,
          BetweenVerticalEnd: () => aG,
          BetweenVerticalStart: () => aW,
          BicepsFlexed: () => a_,
          Bike: () => aX,
          Binary: () => aK,
          Binoculars: () => aY,
          Biohazard: () => aJ,
          Bird: () => aQ,
          Bitcoin: () => a$,
          Blend: () => a1,
          Blinds: () => a2,
          Blocks: () => a0,
          Bluetooth: () => a6,
          BluetoothConnected: () => a4,
          BluetoothOff: () => a5,
          BluetoothSearching: () => a3,
          Bold: () => a8,
          Bolt: () => a7,
          Bomb: () => a9,
          Bone: () => te,
          Book: () => tb,
          BookA: () => ta,
          BookAudio: () => tt,
          BookCheck: () => th,
          BookCopy: () => ty,
          BookDashed: () => tr,
          BookDown: () => td,
          BookHeadphones: () => tp,
          BookHeart: () => tk,
          BookImage: () => tl,
          BookKey: () => ti,
          BookLock: () => tn,
          BookMarked: () => tc,
          BookMinus: () => to,
          BookOpen: () => tu,
          BookOpenCheck: () => tM,
          BookOpenText: () => ts,
          BookPlus: () => tv,
          BookText: () => tm,
          BookType: () => tx,
          BookUp: () => tg,
          BookUp2: () => tf,
          BookUser: () => tA,
          BookX: () => tw,
          Bookmark: () => tH,
          BookmarkCheck: () => tC,
          BookmarkMinus: () => tq,
          BookmarkPlus: () => tz,
          BookmarkX: () => tj,
          BoomBox: () => tS,
          Bot: () => tP,
          BotMessageSquare: () => tV,
          BotOff: () => tL,
          Box: () => tD,
          BoxSelect: () => tR,
          Boxes: () => tT,
          Braces: () => tF,
          Brackets: () => tE,
          Brain: () => tZ,
          BrainCircuit: () => tB,
          BrainCog: () => tO,
          BrickWall: () => tI,
          Briefcase: () => tW,
          BriefcaseBusiness: () => tN,
          BriefcaseConveyorBelt: () => tU,
          BriefcaseMedical: () => tG,
          BringToFront: () => t_,
          Brush: () => tX,
          Bug: () => tJ,
          BugOff: () => tK,
          BugPlay: () => tY,
          Building: () => t$,
          Building2: () => tQ,
          Bus: () => t2,
          BusFront: () => t1,
          Cable: () => t4,
          CableCar: () => t0,
          Cake: () => t3,
          CakeSlice: () => t5,
          Calculator: () => t6,
          Calendar: () => hs,
          CalendarArrowDown: () => t8,
          CalendarArrowUp: () => t7,
          CalendarCheck: () => he,
          CalendarCheck2: () => t9,
          CalendarClock: () => ha,
          CalendarCog: () => ht,
          CalendarDays: () => hh,
          CalendarFold: () => hy,
          CalendarHeart: () => hr,
          CalendarMinus: () => hp,
          CalendarMinus2: () => hd,
          CalendarOff: () => hk,
          CalendarPlus: () => hi,
          CalendarPlus2: () => hl,
          CalendarRange: () => hn,
          CalendarSearch: () => hc,
          CalendarX: () => hM,
          CalendarX2: () => ho,
          Camera: () => hv,
          CameraOff: () => hu,
          Candy: () => hf,
          CandyCane: () => hm,
          CandyOff: () => hx,
          Cannabis: () => hg,
          Captions: () => hw,
          CaptionsOff: () => hA,
          Car: () => hq,
          CarFront: () => hb,
          CarTaxiFront: () => hC,
          Caravan: () => hz,
          Carrot: () => hj,
          CaseLower: () => hH,
          CaseSensitive: () => hS,
          CaseUpper: () => hV,
          CassetteTape: () => hL,
          Cast: () => hP,
          Castle: () => hR,
          Cat: () => hD,
          Cctv: () => hT,
          ChartArea: () => hF,
          ChartBar: () => hI,
          ChartBarBig: () => hE,
          ChartBarDecreasing: () => hB,
          ChartBarIncreasing: () => hO,
          ChartBarStacked: () => hZ,
          ChartCandlestick: () => hN,
          ChartColumn: () => hX,
          ChartColumnBig: () => hU,
          ChartColumnDecreasing: () => hG,
          ChartColumnIncreasing: () => hW,
          ChartColumnStacked: () => h_,
          ChartGantt: () => hK,
          ChartLine: () => hY,
          ChartNetwork: () => hJ,
          ChartNoAxesColumn: () => h1,
          ChartNoAxesColumnDecreasing: () => hQ,
          ChartNoAxesColumnIncreasing: () => h$,
          ChartNoAxesCombined: () => h2,
          ChartNoAxesGantt: () => h0,
          ChartPie: () => h4,
          ChartScatter: () => h5,
          ChartSpline: () => h3,
          Check: () => h8,
          CheckCheck: () => h6,
          ChefHat: () => h7,
          Cherry: () => h9,
          ChevronDown: () => ye.A,
          ChevronFirst: () => ya,
          ChevronLast: () => yt,
          ChevronLeft: () => yh,
          ChevronRight: () => yy.A,
          ChevronUp: () => yr,
          ChevronsDown: () => yp,
          ChevronsDownUp: () => yd,
          ChevronsLeft: () => yi,
          ChevronsLeftRight: () => yl,
          ChevronsLeftRightEllipsis: () => yk,
          ChevronsRight: () => yc,
          ChevronsRightLeft: () => yn,
          ChevronsUp: () => yM,
          ChevronsUpDown: () => yo,
          Chrome: () => ys,
          Church: () => yu,
          Cigarette: () => ym,
          CigaretteOff: () => yv,
          Circle: () => y6,
          CircleAlert: () => yx,
          CircleArrowDown: () => yf,
          CircleArrowLeft: () => yg,
          CircleArrowOutDownLeft: () => yA,
          CircleArrowOutDownRight: () => yw,
          CircleArrowOutUpLeft: () => yb,
          CircleArrowOutUpRight: () => yC,
          CircleArrowRight: () => yq,
          CircleArrowUp: () => yz,
          CircleCheck: () => yH,
          CircleCheckBig: () => yj,
          CircleChevronDown: () => yS,
          CircleChevronLeft: () => yV,
          CircleChevronRight: () => yL,
          CircleChevronUp: () => yP,
          CircleDashed: () => yR,
          CircleDivide: () => yD,
          CircleDollarSign: () => yT,
          CircleDot: () => yE,
          CircleDotDashed: () => yF,
          CircleEllipsis: () => yB,
          CircleEqual: () => yO,
          CircleFadingArrowUp: () => yZ,
          CircleFadingPlus: () => yI,
          CircleGauge: () => yN,
          CircleHelp: () => yU,
          CircleMinus: () => yG,
          CircleOff: () => yW,
          CircleParking: () => yX,
          CircleParkingOff: () => y_,
          CirclePause: () => yK,
          CirclePercent: () => yY,
          CirclePlay: () => yJ,
          CirclePlus: () => yQ,
          CirclePower: () => y$,
          CircleSlash: () => y2,
          CircleSlash2: () => y1,
          CircleStop: () => y0,
          CircleUser: () => y5,
          CircleUserRound: () => y4,
          CircleX: () => y3,
          CircuitBoard: () => y8,
          Citrus: () => y7,
          Clapperboard: () => y9,
          Clipboard: () => ri,
          ClipboardCheck: () => re,
          ClipboardCopy: () => ra,
          ClipboardList: () => rt,
          ClipboardMinus: () => rh,
          ClipboardPaste: () => ry,
          ClipboardPen: () => rd,
          ClipboardPenLine: () => rr,
          ClipboardPlus: () => rp,
          ClipboardType: () => rk,
          ClipboardX: () => rl,
          Clock: () => rq,
          Clock1: () => rn,
          Clock10: () => rc,
          Clock11: () => ro,
          Clock12: () => rM,
          Clock2: () => rs,
          Clock3: () => ru,
          Clock4: () => rv,
          Clock5: () => rm,
          Clock6: () => rx,
          Clock7: () => rf,
          Clock8: () => rg,
          Clock9: () => rA,
          ClockAlert: () => rw,
          ClockArrowDown: () => rb,
          ClockArrowUp: () => rC,
          Cloud: () => rI,
          CloudCog: () => rz,
          CloudDownload: () => rj,
          CloudDrizzle: () => rH,
          CloudFog: () => rS,
          CloudHail: () => rV,
          CloudLightning: () => rL,
          CloudMoon: () => rR,
          CloudMoonRain: () => rP,
          CloudOff: () => rD,
          CloudRain: () => rF,
          CloudRainWind: () => rT,
          CloudSnow: () => rE,
          CloudSun: () => rO,
          CloudSunRain: () => rB,
          CloudUpload: () => rZ,
          Cloudy: () => rN,
          Clover: () => rU,
          Club: () => rG,
          Code: () => r_,
          CodeXml: () => rW,
          Codepen: () => rX,
          Codesandbox: () => rK,
          Coffee: () => rY,
          Cog: () => rJ,
          Coins: () => rQ,
          Columns2: () => r$,
          Columns3: () => r1,
          Columns4: () => r2,
          Combine: () => r0,
          Command: () => r4,
          Compass: () => r5,
          Component: () => r3,
          Computer: () => r6,
          ConciergeBell: () => r8,
          Cone: () => r7,
          Construction: () => r9,
          Contact: () => da,
          ContactRound: () => de,
          Container: () => dt,
          Contrast: () => dh,
          Cookie: () => dy,
          CookingPot: () => dr,
          Copy: () => dn,
          CopyCheck: () => dd,
          CopyMinus: () => dp,
          CopyPlus: () => dk,
          CopySlash: () => dl,
          CopyX: () => di,
          Copyleft: () => dc,
          Copyright: () => dM,
          CornerDownLeft: () => ds,
          CornerDownRight: () => du,
          CornerLeftDown: () => dv,
          CornerLeftUp: () => dm,
          CornerRightDown: () => dx,
          CornerRightUp: () => df,
          CornerUpLeft: () => dg,
          CornerUpRight: () => dA,
          Cpu: () => dw,
          CreativeCommons: () => db,
          CreditCard: () => dC,
          Croissant: () => dq,
          Crop: () => dz,
          Cross: () => dj,
          Crosshair: () => dH,
          Crown: () => dS,
          Cuboid: () => dV,
          CupSoda: () => dL,
          Currency: () => dP,
          Cylinder: () => dR,
          Dam: () => dD,
          Database: () => dE,
          DatabaseBackup: () => dT,
          DatabaseZap: () => dF,
          Delete: () => dB,
          Dessert: () => dO,
          Diameter: () => dZ,
          Diamond: () => dG,
          DiamondMinus: () => dI,
          DiamondPercent: () => dN,
          DiamondPlus: () => dU,
          Dice1: () => dW,
          Dice2: () => d_,
          Dice3: () => dX,
          Dice4: () => dK,
          Dice5: () => dY,
          Dice6: () => dJ,
          Dices: () => dQ,
          Diff: () => d$,
          Disc: () => d4,
          Disc2: () => d1,
          Disc3: () => d2,
          DiscAlbum: () => d0,
          Divide: () => d5,
          Dna: () => d6,
          DnaOff: () => d3,
          Dock: () => d8,
          Dog: () => d7,
          DollarSign: () => d9,
          Donut: () => pe,
          DoorClosed: () => pa,
          DoorOpen: () => pt,
          Dot: () => ph.A,
          Download: () => py,
          DraftingCompass: () => pr,
          Drama: () => pd,
          Dribbble: () => pp,
          Drill: () => pk,
          Droplet: () => pl,
          Droplets: () => pi,
          Drum: () => pn,
          Drumstick: () => pc,
          Dumbbell: () => po,
          Ear: () => ps,
          EarOff: () => pM,
          Earth: () => pv,
          EarthLock: () => pu,
          Eclipse: () => pm,
          Egg: () => pg,
          EggFried: () => px,
          EggOff: () => pf,
          Ellipsis: () => pw,
          EllipsisVertical: () => pA,
          Equal: () => pC,
          EqualNot: () => pb,
          Eraser: () => pq,
          EthernetPort: () => pz,
          Euro: () => pj,
          Expand: () => pH,
          ExternalLink: () => pS,
          Eye: () => pL,
          EyeOff: () => pV,
          Facebook: () => pP,
          Factory: () => pR,
          Fan: () => pD,
          FastForward: () => pT,
          Feather: () => pF,
          Fence: () => pE,
          FerrisWheel: () => pB,
          Figma: () => pO,
          File: () => kD,
          FileArchive: () => pZ,
          FileAudio: () => pN,
          FileAudio2: () => pI,
          FileAxis3d: () => pU,
          FileBadge: () => pW,
          FileBadge2: () => pG,
          FileBox: () => p_,
          FileChartColumn: () => pK,
          FileChartColumnIncreasing: () => pX,
          FileChartLine: () => pY,
          FileChartPie: () => pJ,
          FileCheck: () => p$,
          FileCheck2: () => pQ,
          FileClock: () => p1,
          FileCode: () => p0,
          FileCode2: () => p2,
          FileCog: () => p4,
          FileDiff: () => p5,
          FileDigit: () => p3,
          FileDown: () => p6,
          FileHeart: () => p8,
          FileImage: () => p7,
          FileInput: () => p9,
          FileJson: () => ka,
          FileJson2: () => ke,
          FileKey: () => kh,
          FileKey2: () => kt,
          FileLock: () => kr,
          FileLock2: () => ky,
          FileMinus: () => kp,
          FileMinus2: () => kd,
          FileMusic: () => kk,
          FileOutput: () => kl,
          FilePen: () => kn,
          FilePenLine: () => ki,
          FilePlus: () => ko,
          FilePlus2: () => kc,
          FileQuestion: () => kM,
          FileScan: () => ks,
          FileSearch: () => kv,
          FileSearch2: () => ku,
          FileSliders: () => km,
          FileSpreadsheet: () => kx,
          FileStack: () => kf,
          FileSymlink: () => kg,
          FileTerminal: () => kA,
          FileText: () => kw,
          FileType: () => kC,
          FileType2: () => kb,
          FileUp: () => kq,
          FileUser: () => kz,
          FileVideo: () => kH,
          FileVideo2: () => kj,
          FileVolume: () => kV,
          FileVolume2: () => kS,
          FileWarning: () => kL,
          FileX: () => kR,
          FileX2: () => kP,
          Files: () => kT,
          Film: () => kF,
          Filter: () => kB,
          FilterX: () => kE,
          Fingerprint: () => kO,
          FireExtinguisher: () => kZ,
          Fish: () => kU,
          FishOff: () => kI,
          FishSymbol: () => kN,
          Flag: () => kX,
          FlagOff: () => kG,
          FlagTriangleLeft: () => kW,
          FlagTriangleRight: () => k_,
          Flame: () => kY,
          FlameKindling: () => kK,
          Flashlight: () => kQ,
          FlashlightOff: () => kJ,
          FlaskConical: () => k1,
          FlaskConicalOff: () => k$,
          FlaskRound: () => k2,
          FlipHorizontal: () => k4,
          FlipHorizontal2: () => k0,
          FlipVertical: () => k3,
          FlipVertical2: () => k5,
          Flower: () => k8,
          Flower2: () => k6,
          Focus: () => k7,
          FoldHorizontal: () => k9,
          FoldVertical: () => le,
          Folder: () => lS,
          FolderArchive: () => la,
          FolderCheck: () => lt,
          FolderClock: () => lh,
          FolderClosed: () => ly,
          FolderCode: () => lr,
          FolderCog: () => ld,
          FolderDot: () => lp,
          FolderDown: () => lk,
          FolderGit: () => li,
          FolderGit2: () => ll,
          FolderHeart: () => ln,
          FolderInput: () => lc,
          FolderKanban: () => lo,
          FolderKey: () => lM,
          FolderLock: () => ls,
          FolderMinus: () => lu,
          FolderOpen: () => lm,
          FolderOpenDot: () => lv,
          FolderOutput: () => lx,
          FolderPen: () => lf,
          FolderPlus: () => lg,
          FolderRoot: () => lA,
          FolderSearch: () => lb,
          FolderSearch2: () => lw,
          FolderSymlink: () => lC,
          FolderSync: () => lq,
          FolderTree: () => lz,
          FolderUp: () => lj,
          FolderX: () => lH,
          Folders: () => lV,
          Footprints: () => lL,
          Forklift: () => lP,
          Forward: () => lR,
          Frame: () => lD,
          Framer: () => lT,
          Frown: () => lF,
          Fuel: () => lE,
          Fullscreen: () => lB,
          GalleryHorizontal: () => lZ,
          GalleryHorizontalEnd: () => lO,
          GalleryThumbnails: () => lI,
          GalleryVertical: () => lU,
          GalleryVerticalEnd: () => lN,
          Gamepad: () => lW,
          Gamepad2: () => lG,
          Gauge: () => l_,
          Gavel: () => lX,
          Gem: () => lK,
          Ghost: () => lY,
          Gift: () => lJ,
          GitBranch: () => l$,
          GitBranchPlus: () => lQ,
          GitCommitHorizontal: () => l1,
          GitCommitVertical: () => l2,
          GitCompare: () => l4,
          GitCompareArrows: () => l0,
          GitFork: () => l5,
          GitGraph: () => l3,
          GitMerge: () => l6,
          GitPullRequest: () => it,
          GitPullRequestArrow: () => l8,
          GitPullRequestClosed: () => l7,
          GitPullRequestCreate: () => ie,
          GitPullRequestCreateArrow: () => l9,
          GitPullRequestDraft: () => ia,
          Github: () => ih,
          Gitlab: () => iy,
          GlassWater: () => ir,
          Glasses: () => id,
          Globe: () => ik,
          GlobeLock: () => ip,
          Goal: () => il,
          Grab: () => ii,
          GraduationCap: () => ic,
          Grape: () => io,
          Grid2x2: () => iv,
          Grid2x2Check: () => iM,
          Grid2x2Plus: () => is,
          Grid2x2X: () => iu,
          Grid3x3: () => im,
          Grip: () => iA,
          GripHorizontal: () => ix,
          GripVertical: () => ig,
          Group: () => iw,
          Guitar: () => ib,
          Ham: () => iC,
          Hammer: () => iq,
          Hand: () => iL,
          HandCoins: () => iz,
          HandHeart: () => ij,
          HandHelping: () => iH,
          HandMetal: () => iS,
          HandPlatter: () => iV,
          Handshake: () => iP,
          HardDrive: () => iT,
          HardDriveDownload: () => iR,
          HardDriveUpload: () => iD,
          HardHat: () => iF,
          Hash: () => iE,
          Haze: () => iB,
          HdmiPort: () => iO,
          Heading: () => i_,
          Heading1: () => iZ,
          Heading2: () => iI,
          Heading3: () => iN,
          Heading4: () => iU,
          Heading5: () => iG,
          Heading6: () => iW,
          HeadphoneOff: () => iX,
          Headphones: () => iK,
          Headset: () => iY,
          Heart: () => i2,
          HeartCrack: () => iJ,
          HeartHandshake: () => iQ,
          HeartOff: () => i$,
          HeartPulse: () => i1,
          Heater: () => i0,
          Hexagon: () => i4,
          Highlighter: () => i5,
          History: () => i3,
          Hop: () => i8,
          HopOff: () => i6,
          Hospital: () => i7,
          Hotel: () => i9,
          Hourglass: () => ne,
          House: () => nh,
          HousePlug: () => na,
          HousePlus: () => nt,
          IceCreamBowl: () => ny,
          IceCreamCone: () => nr,
          IdCard: () => nd,
          Image: () => no,
          ImageDown: () => np,
          ImageMinus: () => nk,
          ImageOff: () => nl,
          ImagePlay: () => ni,
          ImagePlus: () => nn,
          ImageUp: () => nc,
          Images: () => nM,
          Import: () => ns,
          Inbox: () => nu,
          IndentDecrease: () => nv,
          IndentIncrease: () => nm,
          IndianRupee: () => nx,
          Infinity: () => nf,
          Info: () => ng,
          InspectionPanel: () => nA,
          Instagram: () => nw,
          Italic: () => nb,
          IterationCcw: () => nC,
          IterationCw: () => nq,
          JapaneseYen: () => nz,
          Joystick: () => nj,
          Kanban: () => nH,
          Key: () => nL,
          KeyRound: () => nS,
          KeySquare: () => nV,
          Keyboard: () => nD,
          KeyboardMusic: () => nP,
          KeyboardOff: () => nR,
          Lamp: () => nZ,
          LampCeiling: () => nT,
          LampDesk: () => nF,
          LampFloor: () => nE,
          LampWallDown: () => nB,
          LampWallUp: () => nO,
          LandPlot: () => nI,
          Landmark: () => nN,
          Languages: () => nU,
          Laptop: () => nW,
          LaptopMinimal: () => nG,
          Lasso: () => nX,
          LassoSelect: () => n_,
          Laugh: () => nK,
          Layers: () => nQ,
          Layers2: () => nY,
          Layers3: () => nJ,
          LayoutDashboard: () => n$,
          LayoutGrid: () => n1,
          LayoutList: () => n2,
          LayoutPanelLeft: () => n0,
          LayoutPanelTop: () => n4,
          LayoutTemplate: () => n5,
          Leaf: () => n3,
          LeafyGreen: () => n6,
          Lectern: () => n8,
          LetterText: () => n7,
          Library: () => ce,
          LibraryBig: () => n9,
          LifeBuoy: () => ca,
          Ligature: () => ct,
          Lightbulb: () => cy,
          LightbulbOff: () => ch,
          Link: () => cp,
          Link2: () => cd,
          Link2Off: () => cr,
          Linkedin: () => ck,
          List: () => cb,
          ListCheck: () => cl,
          ListChecks: () => ci,
          ListCollapse: () => cn,
          ListEnd: () => cc,
          ListFilter: () => co,
          ListMinus: () => cM,
          ListMusic: () => cs,
          ListOrdered: () => cu,
          ListPlus: () => cv,
          ListRestart: () => cm,
          ListStart: () => cx,
          ListTodo: () => cf,
          ListTree: () => cg,
          ListVideo: () => cA,
          ListX: () => cw,
          Loader: () => cz,
          LoaderCircle: () => cC,
          LoaderPinwheel: () => cq,
          Locate: () => cS,
          LocateFixed: () => cj,
          LocateOff: () => cH,
          Lock: () => cR,
          LockKeyhole: () => cL,
          LockKeyholeOpen: () => cV,
          LockOpen: () => cP,
          LogIn: () => cD,
          LogOut: () => cT.A,
          Logs: () => cF,
          Lollipop: () => cE,
          Luggage: () => cB,
          Magnet: () => cO,
          Mail: () => cK,
          MailCheck: () => cZ,
          MailMinus: () => cI,
          MailOpen: () => cN,
          MailPlus: () => cU,
          MailQuestion: () => cG,
          MailSearch: () => cW,
          MailWarning: () => c_,
          MailX: () => cX,
          Mailbox: () => cY,
          Mails: () => cJ,
          Map: () => oe,
          MapPin: () => c7,
          MapPinCheck: () => c$,
          MapPinCheckInside: () => cQ,
          MapPinHouse: () => c1,
          MapPinMinus: () => c0,
          MapPinMinusInside: () => c2,
          MapPinOff: () => c4,
          MapPinPlus: () => c3,
          MapPinPlusInside: () => c5,
          MapPinX: () => c8,
          MapPinXInside: () => c6,
          MapPinned: () => c9,
          Martini: () => oa,
          Maximize: () => oh,
          Maximize2: () => ot,
          Medal: () => oy,
          Megaphone: () => od,
          MegaphoneOff: () => or,
          Meh: () => op,
          MemoryStick: () => ok,
          Menu: () => ol,
          Merge: () => oi,
          MessageCircle: () => og,
          MessageCircleCode: () => on,
          MessageCircleDashed: () => oc,
          MessageCircleHeart: () => oo,
          MessageCircleMore: () => oM,
          MessageCircleOff: () => os,
          MessageCirclePlus: () => ou,
          MessageCircleQuestion: () => ov,
          MessageCircleReply: () => om,
          MessageCircleWarning: () => ox,
          MessageCircleX: () => of,
          MessageSquare: () => oF,
          MessageSquareCode: () => oA,
          MessageSquareDashed: () => ow,
          MessageSquareDiff: () => ob,
          MessageSquareDot: () => oC,
          MessageSquareHeart: () => oq,
          MessageSquareLock: () => oz,
          MessageSquareMore: () => oj,
          MessageSquareOff: () => oH,
          MessageSquarePlus: () => oS,
          MessageSquareQuote: () => oV,
          MessageSquareReply: () => oL,
          MessageSquareShare: () => oP,
          MessageSquareText: () => oR,
          MessageSquareWarning: () => oD,
          MessageSquareX: () => oT,
          MessagesSquare: () => oE,
          Mic: () => oZ,
          MicOff: () => oB,
          MicVocal: () => oO,
          Microchip: () => oI,
          Microscope: () => oN,
          Microwave: () => oU,
          Milestone: () => oG,
          Milk: () => o_,
          MilkOff: () => oW,
          Minimize: () => oK,
          Minimize2: () => oX,
          Minus: () => oY,
          Monitor: () => o9,
          MonitorCheck: () => oJ,
          MonitorCog: () => oQ,
          MonitorDot: () => o$,
          MonitorDown: () => o1,
          MonitorOff: () => o2,
          MonitorPause: () => o0,
          MonitorPlay: () => o4,
          MonitorSmartphone: () => o5,
          MonitorSpeaker: () => o3,
          MonitorStop: () => o6,
          MonitorUp: () => o8,
          MonitorX: () => o7,
          Moon: () => Ma,
          MoonStar: () => Me.A,
          Mountain: () => Mh,
          MountainSnow: () => Mt,
          Mouse: () => Ml,
          MouseOff: () => My,
          MousePointer: () => Mk,
          MousePointer2: () => Mr,
          MousePointerBan: () => Md,
          MousePointerClick: () => Mp,
          Move: () => Mw,
          Move3d: () => Mi,
          MoveDiagonal: () => Mc,
          MoveDiagonal2: () => Mn,
          MoveDown: () => Ms,
          MoveDownLeft: () => Mo,
          MoveDownRight: () => MM,
          MoveHorizontal: () => Mu,
          MoveLeft: () => Mv,
          MoveRight: () => Mm,
          MoveUp: () => Mg,
          MoveUpLeft: () => Mx,
          MoveUpRight: () => Mf,
          MoveVertical: () => MA,
          Music: () => Mz,
          Music2: () => Mb,
          Music3: () => MC,
          Music4: () => Mq,
          Navigation: () => MV,
          Navigation2: () => MH,
          Navigation2Off: () => Mj,
          NavigationOff: () => MS,
          Network: () => ML,
          Newspaper: () => MP,
          Nfc: () => MR,
          Notebook: () => ME,
          NotebookPen: () => MD,
          NotebookTabs: () => MT,
          NotebookText: () => MF,
          NotepadText: () => MO,
          NotepadTextDashed: () => MB,
          Nut: () => MI,
          NutOff: () => MZ,
          Octagon: () => M_,
          OctagonAlert: () => MN,
          OctagonMinus: () => MU,
          OctagonPause: () => MG,
          OctagonX: () => MW,
          Omega: () => MX,
          Option: () => MK,
          Orbit: () => MY,
          Origami: () => MJ,
          Package: () => M3,
          Package2: () => MQ,
          PackageCheck: () => M$,
          PackageMinus: () => M1,
          PackageOpen: () => M2,
          PackagePlus: () => M0,
          PackageSearch: () => M4,
          PackageX: () => M5,
          PaintBucket: () => M6,
          PaintRoller: () => M8,
          Paintbrush: () => M9,
          PaintbrushVertical: () => M7,
          Palette: () => se,
          PanelBottom: () => sy,
          PanelBottomClose: () => sa,
          PanelBottomDashed: () => st,
          PanelBottomOpen: () => sh,
          PanelLeft: () => sk.A,
          PanelLeftClose: () => sr,
          PanelLeftDashed: () => sd,
          PanelLeftOpen: () => sp,
          PanelRight: () => sc,
          PanelRightClose: () => sl,
          PanelRightDashed: () => si,
          PanelRightOpen: () => sn,
          PanelTop: () => su,
          PanelTopClose: () => so,
          PanelTopDashed: () => sM,
          PanelTopOpen: () => ss,
          PanelsLeftBottom: () => sv,
          PanelsRightBottom: () => sm,
          PanelsTopLeft: () => sx,
          Paperclip: () => sf,
          Parentheses: () => sg,
          ParkingMeter: () => sA,
          PartyPopper: () => sw,
          Pause: () => sb,
          PawPrint: () => sC,
          PcCase: () => sq,
          Pen: () => sS,
          PenLine: () => sz,
          PenOff: () => sj,
          PenTool: () => sH,
          Pencil: () => sR,
          PencilLine: () => sV,
          PencilOff: () => sL,
          PencilRuler: () => sP,
          Pentagon: () => sD,
          Percent: () => sT,
          PersonStanding: () => sF,
          PhilippinePeso: () => sE,
          Phone: () => sG,
          PhoneCall: () => sB,
          PhoneForwarded: () => sO,
          PhoneIncoming: () => sZ,
          PhoneMissed: () => sI,
          PhoneOff: () => sN,
          PhoneOutgoing: () => sU,
          Pi: () => sW,
          Piano: () => s_,
          Pickaxe: () => sX,
          PictureInPicture: () => sY,
          PictureInPicture2: () => sK,
          PiggyBank: () => sJ,
          Pilcrow: () => s1,
          PilcrowLeft: () => sQ,
          PilcrowRight: () => s$,
          Pill: () => s0,
          PillBottle: () => s2,
          Pin: () => s5,
          PinOff: () => s4,
          Pipette: () => s3,
          Pizza: () => s6,
          Plane: () => s9,
          PlaneLanding: () => s8,
          PlaneTakeoff: () => s7,
          Play: () => ue,
          Plug: () => uh,
          Plug2: () => ua,
          PlugZap: () => ut,
          Plus: () => uy,
          Pocket: () => ud,
          PocketKnife: () => ur,
          Podcast: () => up,
          Pointer: () => ul,
          PointerOff: () => uk,
          Popcorn: () => ui,
          Popsicle: () => un,
          PoundSterling: () => uc,
          Power: () => uM,
          PowerOff: () => uo,
          Presentation: () => us,
          Printer: () => uv,
          PrinterCheck: () => uu,
          Projector: () => um,
          Proportions: () => ux,
          Puzzle: () => uf,
          Pyramid: () => ug,
          QrCode: () => uA,
          Quote: () => uw,
          Rabbit: () => ub,
          Radar: () => uC,
          Radiation: () => uq,
          Radical: () => uz,
          Radio: () => uS,
          RadioReceiver: () => uj,
          RadioTower: () => uH,
          Radius: () => uV,
          RailSymbol: () => uL,
          Rainbow: () => uP,
          Rat: () => uR,
          Ratio: () => uD,
          Receipt: () => uU,
          ReceiptCent: () => uT,
          ReceiptEuro: () => uF,
          ReceiptIndianRupee: () => uE,
          ReceiptJapaneseYen: () => uB,
          ReceiptPoundSterling: () => uO,
          ReceiptRussianRuble: () => uZ,
          ReceiptSwissFranc: () => uI,
          ReceiptText: () => uN,
          RectangleEllipsis: () => uG,
          RectangleHorizontal: () => uW,
          RectangleVertical: () => u_,
          Recycle: () => uX,
          Redo: () => uJ,
          Redo2: () => uK,
          RedoDot: () => uY,
          RefreshCcw: () => u$,
          RefreshCcwDot: () => uQ,
          RefreshCw: () => u2.A,
          RefreshCwOff: () => u1,
          Refrigerator: () => u0,
          Regex: () => u4,
          RemoveFormatting: () => u5,
          Repeat: () => u8,
          Repeat1: () => u3,
          Repeat2: () => u6,
          Replace: () => u9,
          ReplaceAll: () => u7,
          Reply: () => va,
          ReplyAll: () => ve,
          Rewind: () => vt,
          Ribbon: () => vh,
          Rocket: () => vy,
          RockingChair: () => vr,
          RollerCoaster: () => vd,
          Rotate3d: () => vp,
          RotateCcw: () => vl,
          RotateCcwSquare: () => vk,
          RotateCw: () => vn,
          RotateCwSquare: () => vi,
          Route: () => vo,
          RouteOff: () => vc,
          Router: () => vM,
          Rows2: () => vs,
          Rows3: () => vu,
          Rows4: () => vv,
          Rss: () => vm,
          Ruler: () => vx,
          RussianRuble: () => vf,
          Sailboat: () => vg,
          Salad: () => vA,
          Sandwich: () => vw,
          Satellite: () => vC,
          SatelliteDish: () => vb,
          Save: () => vj,
          SaveAll: () => vq,
          SaveOff: () => vz,
          Scale: () => vS,
          Scale3d: () => vH,
          Scaling: () => vV,
          Scan: () => vB,
          ScanBarcode: () => vL,
          ScanEye: () => vP,
          ScanFace: () => vR,
          ScanLine: () => vD,
          ScanQrCode: () => vT,
          ScanSearch: () => vF,
          ScanText: () => vE,
          School: () => vO,
          Scissors: () => vI,
          ScissorsLineDashed: () => vZ,
          ScreenShare: () => vU,
          ScreenShareOff: () => vN,
          Scroll: () => vW,
          ScrollText: () => vG,
          Search: () => vJ.A,
          SearchCheck: () => v_,
          SearchCode: () => vX,
          SearchSlash: () => vK,
          SearchX: () => vY,
          Section: () => vQ,
          Send: () => v2,
          SendHorizontal: () => v$,
          SendToBack: () => v1,
          SeparatorHorizontal: () => v0,
          SeparatorVertical: () => v4,
          Server: () => v8,
          ServerCog: () => v5,
          ServerCrash: () => v3,
          ServerOff: () => v6,
          Settings: () => v9,
          Settings2: () => v7,
          Shapes: () => me,
          Share: () => mt,
          Share2: () => ma,
          Sheet: () => mh,
          Shell: () => my,
          Shield: () => ms,
          ShieldAlert: () => mr,
          ShieldBan: () => md,
          ShieldCheck: () => mp,
          ShieldEllipsis: () => mk,
          ShieldHalf: () => ml,
          ShieldMinus: () => mi,
          ShieldOff: () => mn,
          ShieldPlus: () => mc,
          ShieldQuestion: () => mo,
          ShieldX: () => mM,
          Ship: () => mv,
          ShipWheel: () => mu,
          Shirt: () => mm,
          ShoppingBag: () => mx,
          ShoppingBasket: () => mf,
          ShoppingCart: () => mg,
          Shovel: () => mA,
          ShowerHead: () => mw,
          Shrink: () => mb,
          Shrub: () => mC,
          Shuffle: () => mq,
          Sigma: () => mz,
          Signal: () => mL,
          SignalHigh: () => mj,
          SignalLow: () => mH,
          SignalMedium: () => mS,
          SignalZero: () => mV,
          Signature: () => mP,
          Signpost: () => mD,
          SignpostBig: () => mR,
          Siren: () => mT,
          SkipBack: () => mF,
          SkipForward: () => mE,
          Skull: () => mB,
          Slack: () => mO,
          Slash: () => mZ,
          Slice: () => mI,
          SlidersHorizontal: () => mN,
          SlidersVertical: () => mU,
          Smartphone: () => m_,
          SmartphoneCharging: () => mG,
          SmartphoneNfc: () => mW,
          Smile: () => mK,
          SmilePlus: () => mX,
          Snail: () => mY,
          Snowflake: () => mJ,
          Sofa: () => mQ,
          Soup: () => m$,
          Space: () => m1,
          Spade: () => m2,
          Sparkle: () => m0,
          Sparkles: () => m4,
          Speaker: () => m5,
          Speech: () => m3,
          SpellCheck: () => m8,
          SpellCheck2: () => m6,
          Spline: () => m7,
          Split: () => m9,
          SprayCan: () => xe,
          Sprout: () => xa,
          Square: () => x6,
          SquareActivity: () => xt,
          SquareArrowDown: () => xr,
          SquareArrowDownLeft: () => xh,
          SquareArrowDownRight: () => xy,
          SquareArrowLeft: () => xd,
          SquareArrowOutDownLeft: () => xp,
          SquareArrowOutDownRight: () => xk,
          SquareArrowOutUpLeft: () => xl,
          SquareArrowOutUpRight: () => xi,
          SquareArrowRight: () => xn,
          SquareArrowUp: () => xM,
          SquareArrowUpLeft: () => xc,
          SquareArrowUpRight: () => xo,
          SquareAsterisk: () => xs,
          SquareBottomDashedScissors: () => xu,
          SquareChartGantt: () => xv,
          SquareCheck: () => xx,
          SquareCheckBig: () => xm,
          SquareChevronDown: () => xf,
          SquareChevronLeft: () => xg,
          SquareChevronRight: () => xA,
          SquareChevronUp: () => xw,
          SquareCode: () => xb,
          SquareDashedBottom: () => xq,
          SquareDashedBottomCode: () => xC,
          SquareDashedKanban: () => xz,
          SquareDashedMousePointer: () => xj,
          SquareDivide: () => xH,
          SquareDot: () => xS,
          SquareEqual: () => xV,
          SquareFunction: () => xL,
          SquareKanban: () => xP,
          SquareLibrary: () => xR,
          SquareM: () => xD,
          SquareMenu: () => xT,
          SquareMinus: () => xF,
          SquareMousePointer: () => xE,
          SquareParking: () => xO,
          SquareParkingOff: () => xB,
          SquarePen: () => xZ,
          SquarePercent: () => xI,
          SquarePi: () => xN,
          SquarePilcrow: () => xU,
          SquarePlay: () => xG,
          SquarePlus: () => xW,
          SquarePower: () => x_,
          SquareRadical: () => xX,
          SquareScissors: () => xK,
          SquareSigma: () => xY,
          SquareSlash: () => xJ,
          SquareSplitHorizontal: () => xQ,
          SquareSplitVertical: () => x$,
          SquareSquare: () => x1,
          SquareStack: () => x2,
          SquareTerminal: () => x0,
          SquareUser: () => x5,
          SquareUserRound: () => x4,
          SquareX: () => x3,
          Squircle: () => x8,
          Squirrel: () => x7,
          Stamp: () => x9,
          Star: () => ft,
          StarHalf: () => fe,
          StarOff: () => fa,
          StepBack: () => fh,
          StepForward: () => fy,
          Stethoscope: () => fr,
          Sticker: () => fd,
          StickyNote: () => fp,
          Store: () => fk,
          StretchHorizontal: () => fl,
          StretchVertical: () => fi,
          Strikethrough: () => fn,
          Subscript: () => fc,
          Sun: () => fv.A,
          SunDim: () => fo,
          SunMedium: () => fM,
          SunMoon: () => fs.A,
          SunSnow: () => fu,
          Sunrise: () => fm,
          Sunset: () => fx,
          Superscript: () => ff,
          SwatchBook: () => fg,
          SwissFranc: () => fA,
          SwitchCamera: () => fw,
          Sword: () => fb,
          Swords: () => fC,
          Syringe: () => fq,
          Table: () => fR,
          Table2: () => fz,
          TableCellsMerge: () => fj,
          TableCellsSplit: () => fH,
          TableColumnsSplit: () => fS,
          TableOfContents: () => fV,
          TableProperties: () => fL,
          TableRowsSplit: () => fP,
          Tablet: () => fT,
          TabletSmartphone: () => fD,
          Tablets: () => fF,
          Tag: () => fE,
          Tags: () => fB,
          Tally1: () => fO,
          Tally2: () => fZ,
          Tally3: () => fI,
          Tally4: () => fN,
          Tally5: () => fU,
          Tangent: () => fG,
          Target: () => fW,
          Telescope: () => f_,
          Tent: () => fK,
          TentTree: () => fX,
          Terminal: () => fY,
          TestTube: () => fQ,
          TestTubeDiagonal: () => fJ,
          TestTubes: () => f$,
          Text: () => f3,
          TextCursor: () => f2,
          TextCursorInput: () => f1,
          TextQuote: () => f0,
          TextSearch: () => f4,
          TextSelect: () => f5,
          Theater: () => f6,
          Thermometer: () => f9,
          ThermometerSnowflake: () => f8,
          ThermometerSun: () => f7,
          ThumbsDown: () => ge,
          ThumbsUp: () => ga,
          Ticket: () => gk,
          TicketCheck: () => gt,
          TicketMinus: () => gh,
          TicketPercent: () => gy,
          TicketPlus: () => gr,
          TicketSlash: () => gd,
          TicketX: () => gp,
          Tickets: () => gi,
          TicketsPlane: () => gl,
          Timer: () => go,
          TimerOff: () => gn,
          TimerReset: () => gc,
          ToggleLeft: () => gM,
          ToggleRight: () => gs,
          Tornado: () => gu,
          Torus: () => gv,
          Touchpad: () => gx,
          TouchpadOff: () => gm,
          TowerControl: () => gf,
          ToyBrick: () => gg,
          Tractor: () => gA,
          TrafficCone: () => gw,
          TrainFront: () => gC,
          TrainFrontTunnel: () => gb,
          TrainTrack: () => gq,
          TramFront: () => gz,
          Trash: () => gH,
          Trash2: () => gj,
          TreeDeciduous: () => gS,
          TreePalm: () => gV,
          TreePine: () => gL,
          Trees: () => gP,
          Trello: () => gR,
          TrendingDown: () => gD,
          TrendingUp: () => gF,
          TrendingUpDown: () => gT,
          Triangle: () => gO,
          TriangleAlert: () => gE.A,
          TriangleRight: () => gB,
          Trophy: () => gZ,
          Truck: () => gI,
          Turtle: () => gN,
          Tv: () => gW,
          TvMinimal: () => gG,
          TvMinimalPlay: () => gU,
          Twitch: () => g_,
          Twitter: () => gX,
          Type: () => gY,
          TypeOutline: () => gK,
          Umbrella: () => gQ,
          UmbrellaOff: () => gJ,
          Underline: () => g$,
          Undo: () => g0,
          Undo2: () => g1,
          UndoDot: () => g2,
          UnfoldHorizontal: () => g4,
          UnfoldVertical: () => g5,
          Ungroup: () => g3,
          University: () => g6,
          Unlink: () => g7,
          Unlink2: () => g8,
          Unplug: () => g9,
          Upload: () => Ae,
          Usb: () => Aa,
          User: () => Av.A,
          UserCheck: () => At,
          UserCog: () => Ah.A,
          UserMinus: () => Ay,
          UserPen: () => Ar,
          UserPlus: () => Ad,
          UserRound: () => AM,
          UserRoundCheck: () => Ap,
          UserRoundCog: () => Ak,
          UserRoundMinus: () => Al,
          UserRoundPen: () => Ai,
          UserRoundPlus: () => An,
          UserRoundSearch: () => Ac,
          UserRoundX: () => Ao,
          UserSearch: () => As,
          UserX: () => Au,
          Users: () => Ax,
          UsersRound: () => Am,
          Utensils: () => Ag,
          UtensilsCrossed: () => Af,
          UtilityPole: () => AA,
          Variable: () => Aw,
          Vault: () => Ab,
          Vegan: () => AC,
          VenetianMask: () => Aq,
          Vibrate: () => Aj,
          VibrateOff: () => Az,
          Video: () => AS,
          VideoOff: () => AH,
          Videotape: () => AV,
          View: () => AL,
          Voicemail: () => AP,
          Volume: () => AE,
          Volume1: () => AR,
          Volume2: () => AD,
          VolumeOff: () => AT,
          VolumeX: () => AF,
          Vote: () => AB,
          Wallet: () => AI,
          WalletCards: () => AO,
          WalletMinimal: () => AZ,
          Wallpaper: () => AN,
          Wand: () => AG,
          WandSparkles: () => AU,
          Warehouse: () => AW,
          WashingMachine: () => A_,
          Watch: () => AX,
          Waves: () => AK,
          Waypoints: () => AY,
          Webcam: () => AJ,
          Webhook: () => A$,
          WebhookOff: () => AQ,
          Weight: () => A1,
          Wheat: () => A0,
          WheatOff: () => A2,
          WholeWord: () => A4,
          Wifi: () => A7,
          WifiHigh: () => A5,
          WifiLow: () => A3,
          WifiOff: () => A6,
          WifiZero: () => A8,
          Wind: () => A9,
          Wine: () => wa,
          WineOff: () => we,
          Workflow: () => wt,
          Worm: () => wh,
          WrapText: () => wy,
          Wrench: () => wr,
          X: () => wd.A,
          Youtube: () => wp,
          Zap: () => wl,
          ZapOff: () => wk,
          ZoomIn: () => wi,
          ZoomOut: () => wn,
        }))
      var h = t(9941)
      let y = (0, h.A)("AArrowDown", [
          ["path", { d: "M3.5 13h6", key: "p1my2r" }],
          ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
          ["path", { d: "M18 7v9", key: "pknjwm" }],
          ["path", { d: "m14 12 4 4 4-4", key: "buelq4" }],
        ]),
        r = (0, h.A)("AArrowUp", [
          ["path", { d: "M3.5 13h6", key: "p1my2r" }],
          ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
          ["path", { d: "M18 16V7", key: "ty0viw" }],
          ["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }],
        ]),
        d = (0, h.A)("ALargeSmall", [
          ["path", { d: "M21 14h-5", key: "1vh23k" }],
          ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16", key: "1wh10o" }],
          ["path", { d: "M4.5 13h6", key: "dfilno" }],
          ["path", { d: "m3 16 4.5-9 4.5 9", key: "2dxa0e" }],
        ]),
        p = (0, h.A)("Accessibility", [
          ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
          ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
          ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
          ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
          ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }],
        ]),
        k = (0, h.A)("Activity", [
          [
            "path",
            {
              d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
              key: "169zse",
            },
          ],
        ]),
        l = (0, h.A)("AirVent", [
          [
            "path",
            {
              d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
              key: "larmp2",
            },
          ],
          ["path", { d: "M6 8h12", key: "6g4wlu" }],
          [
            "path",
            {
              d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",
              key: "1bo8pg",
            },
          ],
          ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5", key: "t9h90c" }],
        ]),
        i = (0, h.A)("Airplay", [
          [
            "path",
            {
              d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
              key: "ns4c3b",
            },
          ],
          ["path", { d: "m12 15 5 6H7Z", key: "14qnn2" }],
        ]),
        n = (0, h.A)("AlarmClockCheck", [
          ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
          ["path", { d: "M5 3 2 6", key: "18tl5t" }],
          ["path", { d: "m22 6-3-3", key: "1opdir" }],
          ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
          ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
          ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }],
        ]),
        c = (0, h.A)("AlarmClockMinus", [
          ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
          ["path", { d: "M5 3 2 6", key: "18tl5t" }],
          ["path", { d: "m22 6-3-3", key: "1opdir" }],
          ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
          ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
          ["path", { d: "M9 13h6", key: "1uhe8q" }],
        ]),
        o = (0, h.A)("AlarmClockOff", [
          ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }],
          ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }],
          ["path", { d: "m22 6-3-3", key: "1opdir" }],
          ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M4 4 2 6", key: "1ycko6" }],
        ]),
        M = (0, h.A)("AlarmClockPlus", [
          ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
          ["path", { d: "M5 3 2 6", key: "18tl5t" }],
          ["path", { d: "m22 6-3-3", key: "1opdir" }],
          ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
          ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
          ["path", { d: "M12 10v6", key: "1bos4e" }],
          ["path", { d: "M9 13h6", key: "1uhe8q" }],
        ]),
        s = (0, h.A)("AlarmClock", [
          ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
          ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
          ["path", { d: "M5 3 2 6", key: "18tl5t" }],
          ["path", { d: "m22 6-3-3", key: "1opdir" }],
          ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
          ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
        ]),
        u = (0, h.A)("AlarmSmoke", [
          ["path", { d: "M11 21c0-2.5 2-2.5 2-5", key: "1sicvv" }],
          ["path", { d: "M16 21c0-2.5 2-2.5 2-5", key: "1o3eny" }],
          [
            "path",
            {
              d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",
              key: "1bvca4",
            },
          ],
          [
            "path",
            {
              d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",
              key: "x3qr1j",
            },
          ],
          ["path", { d: "M6 21c0-2.5 2-2.5 2-5", key: "i3w1gp" }],
        ]),
        v = (0, h.A)("Album", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }],
        ]),
        m = (0, h.A)("AlignCenterHorizontal", [
          ["path", { d: "M2 12h20", key: "9i4pu4" }],
          [
            "path",
            { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" },
          ],
          [
            "path",
            { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" },
          ],
          [
            "path",
            { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" },
          ],
          [
            "path",
            { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" },
          ],
        ]),
        x = (0, h.A)("AlignCenterVertical", [
          ["path", { d: "M12 2v20", key: "t6zp3m" }],
          [
            "path",
            { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" },
          ],
          [
            "path",
            { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" },
          ],
          [
            "path",
            { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" },
          ],
          [
            "path",
            { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" },
          ],
        ]),
        f = (0, h.A)("AlignCenter", [
          ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
          ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
          ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }],
        ]),
        g = (0, h.A)("AlignEndHorizontal", [
          [
            "rect",
            {
              width: "6",
              height: "16",
              x: "4",
              y: "2",
              rx: "2",
              key: "z5wdxg",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "9",
              x: "14",
              y: "9",
              rx: "2",
              key: "um7a8w",
            },
          ],
          ["path", { d: "M22 22H2", key: "19qnx5" }],
        ]),
        A = (0, h.A)("AlignEndVertical", [
          [
            "rect",
            {
              width: "16",
              height: "6",
              x: "2",
              y: "4",
              rx: "2",
              key: "10wcwx",
            },
          ],
          [
            "rect",
            {
              width: "9",
              height: "6",
              x: "9",
              y: "14",
              rx: "2",
              key: "4p5bwg",
            },
          ],
          ["path", { d: "M22 22V2", key: "12ipfv" }],
        ]),
        w = (0, h.A)("AlignHorizontalDistributeCenter", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "4",
              y: "5",
              rx: "2",
              key: "1wwnby",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "14",
              y: "7",
              rx: "2",
              key: "1fe6j6",
            },
          ],
          ["path", { d: "M17 22v-5", key: "4b6g73" }],
          ["path", { d: "M17 7V2", key: "hnrr36" }],
          ["path", { d: "M7 22v-3", key: "1r4jpn" }],
          ["path", { d: "M7 5V2", key: "liy1u9" }],
        ]),
        b = (0, h.A)("AlignHorizontalDistributeEnd", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "4",
              y: "5",
              rx: "2",
              key: "1wwnby",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "14",
              y: "7",
              rx: "2",
              key: "1fe6j6",
            },
          ],
          ["path", { d: "M10 2v20", key: "uyc634" }],
          ["path", { d: "M20 2v20", key: "1tx262" }],
        ]),
        C = (0, h.A)("AlignHorizontalDistributeStart", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "4",
              y: "5",
              rx: "2",
              key: "1wwnby",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "14",
              y: "7",
              rx: "2",
              key: "1fe6j6",
            },
          ],
          ["path", { d: "M4 2v20", key: "gtpd5x" }],
          ["path", { d: "M14 2v20", key: "tg6bpw" }],
        ]),
        q = (0, h.A)("AlignHorizontalJustifyCenter", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "2",
              y: "5",
              rx: "2",
              key: "dy24zr",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "16",
              y: "7",
              rx: "2",
              key: "13zkjt",
            },
          ],
          ["path", { d: "M12 2v20", key: "t6zp3m" }],
        ]),
        z = (0, h.A)("AlignHorizontalJustifyEnd", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "2",
              y: "5",
              rx: "2",
              key: "dy24zr",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "12",
              y: "7",
              rx: "2",
              key: "1ht384",
            },
          ],
          ["path", { d: "M22 2v20", key: "40qfg1" }],
        ]),
        j = (0, h.A)("AlignHorizontalJustifyStart", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "6",
              y: "5",
              rx: "2",
              key: "hsirpf",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "16",
              y: "7",
              rx: "2",
              key: "13zkjt",
            },
          ],
          ["path", { d: "M2 2v20", key: "1ivd8o" }],
        ]),
        H = (0, h.A)("AlignHorizontalSpaceAround", [
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "9",
              y: "7",
              rx: "2",
              key: "yn7j0q",
            },
          ],
          ["path", { d: "M4 22V2", key: "tsjzd3" }],
          ["path", { d: "M20 22V2", key: "1bnhr8" }],
        ]),
        S = (0, h.A)("AlignHorizontalSpaceBetween", [
          [
            "rect",
            {
              width: "6",
              height: "14",
              x: "3",
              y: "5",
              rx: "2",
              key: "j77dae",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "15",
              y: "7",
              rx: "2",
              key: "bq30hj",
            },
          ],
          ["path", { d: "M3 2v20", key: "1d2pfg" }],
          ["path", { d: "M21 2v20", key: "p059bm" }],
        ]),
        V = (0, h.A)("AlignJustify", [
          ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
          ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
          ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }],
        ]),
        L = (0, h.A)("AlignLeft", [
          ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
          ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
          ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }],
        ]),
        P = (0, h.A)("AlignRight", [
          ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
          ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
          ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }],
        ]),
        R = (0, h.A)("AlignStartHorizontal", [
          [
            "rect",
            {
              width: "6",
              height: "16",
              x: "4",
              y: "6",
              rx: "2",
              key: "1n4dg1",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "9",
              x: "14",
              y: "6",
              rx: "2",
              key: "17khns",
            },
          ],
          ["path", { d: "M22 2H2", key: "fhrpnj" }],
        ]),
        D = (0, h.A)("AlignStartVertical", [
          [
            "rect",
            {
              width: "9",
              height: "6",
              x: "6",
              y: "14",
              rx: "2",
              key: "lpm2y7",
            },
          ],
          [
            "rect",
            {
              width: "16",
              height: "6",
              x: "6",
              y: "4",
              rx: "2",
              key: "rdj6ps",
            },
          ],
          ["path", { d: "M2 2v20", key: "1ivd8o" }],
        ]),
        T = (0, h.A)("AlignVerticalDistributeCenter", [
          ["path", { d: "M22 17h-3", key: "1lwga1" }],
          ["path", { d: "M22 7h-5", key: "o2endc" }],
          ["path", { d: "M5 17H2", key: "1gx9xc" }],
          ["path", { d: "M7 7H2", key: "6bq26l" }],
          [
            "rect",
            {
              x: "5",
              y: "14",
              width: "14",
              height: "6",
              rx: "2",
              key: "1qrzuf",
            },
          ],
          [
            "rect",
            {
              x: "7",
              y: "4",
              width: "10",
              height: "6",
              rx: "2",
              key: "we8e9z",
            },
          ],
        ]),
        F = (0, h.A)("AlignVerticalDistributeEnd", [
          [
            "rect",
            {
              width: "14",
              height: "6",
              x: "5",
              y: "14",
              rx: "2",
              key: "jmoj9s",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "4",
              rx: "2",
              key: "aza5on",
            },
          ],
          ["path", { d: "M2 20h20", key: "owomy5" }],
          ["path", { d: "M2 10h20", key: "1ir3d8" }],
        ]),
        E = (0, h.A)("AlignVerticalDistributeStart", [
          [
            "rect",
            {
              width: "14",
              height: "6",
              x: "5",
              y: "14",
              rx: "2",
              key: "jmoj9s",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "4",
              rx: "2",
              key: "aza5on",
            },
          ],
          ["path", { d: "M2 14h20", key: "myj16y" }],
          ["path", { d: "M2 4h20", key: "mda7wb" }],
        ]),
        B = (0, h.A)("AlignVerticalJustifyCenter", [
          [
            "rect",
            {
              width: "14",
              height: "6",
              x: "5",
              y: "16",
              rx: "2",
              key: "1i8z2d",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "2",
              rx: "2",
              key: "ypihtt",
            },
          ],
          ["path", { d: "M2 12h20", key: "9i4pu4" }],
        ]),
        O = (0, h.A)("AlignVerticalJustifyEnd", [
          [
            "rect",
            {
              width: "14",
              height: "6",
              x: "5",
              y: "12",
              rx: "2",
              key: "4l4tp2",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "2",
              rx: "2",
              key: "ypihtt",
            },
          ],
          ["path", { d: "M2 22h20", key: "272qi7" }],
        ]),
        Z = (0, h.A)("AlignVerticalJustifyStart", [
          [
            "rect",
            {
              width: "14",
              height: "6",
              x: "5",
              y: "16",
              rx: "2",
              key: "1i8z2d",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "6",
              rx: "2",
              key: "13squh",
            },
          ],
          ["path", { d: "M2 2h20", key: "1ennik" }],
        ]),
        I = (0, h.A)("AlignVerticalSpaceAround", [
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "9",
              rx: "2",
              key: "b1zbii",
            },
          ],
          ["path", { d: "M22 20H2", key: "1p1f7z" }],
          ["path", { d: "M22 4H2", key: "1b7qnq" }],
        ]),
        N = (0, h.A)("AlignVerticalSpaceBetween", [
          [
            "rect",
            {
              width: "14",
              height: "6",
              x: "5",
              y: "15",
              rx: "2",
              key: "1w91an",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "7",
              y: "3",
              rx: "2",
              key: "17wqzy",
            },
          ],
          ["path", { d: "M2 21h20", key: "1nyx9w" }],
          ["path", { d: "M2 3h20", key: "91anmk" }],
        ]),
        U = (0, h.A)("Ambulance", [
          ["path", { d: "M10 10H6", key: "1bsnug" }],
          [
            "path",
            {
              d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
              key: "wrbu53",
            },
          ],
          [
            "path",
            {
              d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
              key: "lrkjwd",
            },
          ],
          ["path", { d: "M8 8v4", key: "1fwk8c" }],
          ["path", { d: "M9 18h6", key: "x1upvd" }],
          ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
          ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
        ]),
        G = (0, h.A)("Ampersand", [
          [
            "path",
            {
              d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
              key: "1o9ehi",
            },
          ],
          ["path", { d: "M16 12h3", key: "4uvgyw" }],
        ]),
        W = (0, h.A)("Ampersands", [
          [
            "path",
            {
              d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
              key: "12lh1k",
            },
          ],
          [
            "path",
            {
              d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
              key: "173c68",
            },
          ],
        ]),
        _ = (0, h.A)("Amphora", [
          [
            "path",
            {
              d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",
              key: "1h8rid",
            },
          ],
          ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68", key: "3ezsi6" }],
          [
            "path",
            {
              d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",
              key: "yt6q09",
            },
          ],
          ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68", key: "8f95yk" }],
          ["path", { d: "M18 22H6", key: "mg6kv4" }],
          ["path", { d: "M9 2h6", key: "1jrp98" }],
        ]),
        X = (0, h.A)("Anchor", [
          ["path", { d: "M12 22V8", key: "qkxhtm" }],
          ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3", key: "1hv3nh" }],
          ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
        ]),
        K = (0, h.A)("Angry", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
          ["path", { d: "M7.5 8 10 9", key: "olxxln" }],
          ["path", { d: "m14 9 2.5-1", key: "1j6cij" }],
          ["path", { d: "M9 10h.01", key: "qbtxuw" }],
          ["path", { d: "M15 10h.01", key: "1qmjsl" }],
        ]),
        Y = (0, h.A)("Annoyed", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M8 15h8", key: "45n4r" }],
          ["path", { d: "M8 9h2", key: "1g203m" }],
          ["path", { d: "M14 9h2", key: "116p9w" }],
        ]),
        J = (0, h.A)("Antenna", [
          ["path", { d: "M2 12 7 2", key: "117k30" }],
          ["path", { d: "m7 12 5-10", key: "1tvx22" }],
          ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
          ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
          ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
          ["path", { d: "M12 16v6", key: "c8a4gj" }],
        ]),
        Q = (0, h.A)("Anvil", [
          [
            "path",
            { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4", key: "1hjpb6" },
          ],
          [
            "path",
            {
              d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",
              key: "1qn45f",
            },
          ],
          ["path", { d: "M9 12v5", key: "3anwtq" }],
          ["path", { d: "M15 12v5", key: "5xh3zn" }],
          [
            "path",
            {
              d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",
              key: "1fi4x8",
            },
          ],
        ]),
        $ = (0, h.A)("Aperture", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m14.31 8 5.74 9.94", key: "1y6ab4" }],
          ["path", { d: "M9.69 8h11.48", key: "1wxppr" }],
          ["path", { d: "m7.38 12 5.74-9.94", key: "1grp0k" }],
          ["path", { d: "M9.69 16 3.95 6.06", key: "libnyf" }],
          ["path", { d: "M14.31 16H2.83", key: "x5fava" }],
          ["path", { d: "m16.62 12-5.74 9.94", key: "1vwawt" }],
        ]),
        ee = (0, h.A)("AppWindowMac", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["path", { d: "M6 8h.01", key: "x9i8wu" }],
          ["path", { d: "M10 8h.01", key: "1r9ogq" }],
          ["path", { d: "M14 8h.01", key: "1primd" }],
        ]),
        ea = (0, h.A)("AppWindow", [
          [
            "rect",
            {
              x: "2",
              y: "4",
              width: "20",
              height: "16",
              rx: "2",
              key: "izxlao",
            },
          ],
          ["path", { d: "M10 4v4", key: "pp8u80" }],
          ["path", { d: "M2 8h20", key: "d11cs7" }],
          ["path", { d: "M6 4v4", key: "1svtjw" }],
        ]),
        et = (0, h.A)("Apple", [
          [
            "path",
            {
              d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
              key: "3s7exb",
            },
          ],
          ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }],
        ]),
        eh = (0, h.A)("ArchiveRestore", [
          [
            "rect",
            {
              width: "20",
              height: "5",
              x: "2",
              y: "3",
              rx: "1",
              key: "1wp1u1",
            },
          ],
          ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
          ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
          ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
          ["path", { d: "M12 12v9", key: "192myk" }],
        ]),
        ey = (0, h.A)("ArchiveX", [
          [
            "rect",
            {
              width: "20",
              height: "5",
              x: "2",
              y: "3",
              rx: "1",
              key: "1wp1u1",
            },
          ],
          [
            "path",
            { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" },
          ],
          ["path", { d: "m9.5 17 5-5", key: "nakeu6" }],
          ["path", { d: "m9.5 12 5 5", key: "1hccrj" }],
        ]),
        er = (0, h.A)("Archive", [
          [
            "rect",
            {
              width: "20",
              height: "5",
              x: "2",
              y: "3",
              rx: "1",
              key: "1wp1u1",
            },
          ],
          [
            "path",
            { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" },
          ],
          ["path", { d: "M10 12h4", key: "a56b0p" }],
        ]),
        ed = (0, h.A)("Armchair", [
          [
            "path",
            { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" },
          ],
          [
            "path",
            {
              d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
              key: "1qyhux",
            },
          ],
          ["path", { d: "M5 18v2", key: "ppbyun" }],
          ["path", { d: "M19 18v2", key: "gy7782" }],
        ]),
        ep = (0, h.A)("ArrowBigDownDash", [
          ["path", { d: "M15 5H9", key: "1tp3ed" }],
          ["path", { d: "M15 9v3h4l-7 7-7-7h4V9z", key: "ncdc4b" }],
        ]),
        ek = (0, h.A)("ArrowBigDown", [
          ["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z", key: "1thax2" }],
        ]),
        el = (0, h.A)("ArrowBigLeftDash", [
          ["path", { d: "M19 15V9", key: "1hci5f" }],
          ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z", key: "16tjna" }],
        ]),
        ei = (0, h.A)("ArrowBigLeft", [
          ["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z", key: "lbrdak" }],
        ]),
        en = (0, h.A)("ArrowBigRightDash", [
          ["path", { d: "M5 9v6", key: "158jrl" }],
          ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z", key: "1sg2xn" }],
        ]),
        ec = (0, h.A)("ArrowBigRight", [
          ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }],
        ]),
        eo = (0, h.A)("ArrowBigUpDash", [
          ["path", { d: "M9 19h6", key: "456am0" }],
          ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z", key: "1r2uve" }],
        ]),
        eM = (0, h.A)("ArrowBigUp", [
          ["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", key: "1x06kx" }],
        ]),
        es = (0, h.A)("ArrowDown01", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 20V4", key: "1yoxec" }],
          [
            "rect",
            {
              x: "15",
              y: "4",
              width: "4",
              height: "6",
              ry: "2",
              key: "1bwicg",
            },
          ],
          ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
          ["path", { d: "M15 20h4", key: "1j968p" }],
        ]),
        eu = (0, h.A)("ArrowDown10", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 20V4", key: "1yoxec" }],
          ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
          ["path", { d: "M15 10h4", key: "id2lce" }],
          [
            "rect",
            {
              x: "15",
              y: "14",
              width: "4",
              height: "6",
              ry: "2",
              key: "33xykx",
            },
          ],
        ]),
        ev = (0, h.A)("ArrowDownAZ", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 20V4", key: "1yoxec" }],
          ["path", { d: "M20 8h-5", key: "1vsyxs" }],
          ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
          ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }],
        ]),
        em = (0, h.A)("ArrowDownFromLine", [
          ["path", { d: "M19 3H5", key: "1236rx" }],
          ["path", { d: "M12 21V7", key: "gj6g52" }],
          ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }],
        ]),
        ex = (0, h.A)("ArrowDownLeft", [
          ["path", { d: "M17 7 7 17", key: "15tmo1" }],
          ["path", { d: "M17 17H7V7", key: "1org7z" }],
        ]),
        ef = (0, h.A)("ArrowDownNarrowWide", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 20V4", key: "1yoxec" }],
          ["path", { d: "M11 4h4", key: "6d7r33" }],
          ["path", { d: "M11 8h7", key: "djye34" }],
          ["path", { d: "M11 12h10", key: "1438ji" }],
        ]),
        eg = (0, h.A)("ArrowDownRight", [
          ["path", { d: "m7 7 10 10", key: "1fmybs" }],
          ["path", { d: "M17 7v10H7", key: "6fjiku" }],
        ]),
        eA = (0, h.A)("ArrowDownToDot", [
          ["path", { d: "M12 2v14", key: "jyx4ut" }],
          ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }],
          ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }],
        ]),
        ew = (0, h.A)("ArrowDownToLine", [
          ["path", { d: "M12 17V3", key: "1cwfxf" }],
          ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
          ["path", { d: "M19 21H5", key: "150jfl" }],
        ]),
        eb = (0, h.A)("ArrowDownUp", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 20V4", key: "1yoxec" }],
          ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
          ["path", { d: "M17 4v16", key: "7dpous" }],
        ]),
        eC = (0, h.A)("ArrowDownWideNarrow", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 20V4", key: "1yoxec" }],
          ["path", { d: "M11 4h10", key: "1w87gc" }],
          ["path", { d: "M11 8h7", key: "djye34" }],
          ["path", { d: "M11 12h4", key: "q8tih4" }],
        ]),
        eq = (0, h.A)("ArrowDownZA", [
          ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
          ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
          ["path", { d: "M20 18h-5", key: "18j1r2" }],
        ]),
        ez = (0, h.A)("ArrowDown", [
          ["path", { d: "M12 5v14", key: "s699le" }],
          ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
        ]),
        ej = (0, h.A)("ArrowLeftFromLine", [
          ["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }],
          ["path", { d: "M3 12h14", key: "13k4hi" }],
          ["path", { d: "M21 19V5", key: "b4bplr" }],
        ]),
        eH = (0, h.A)("ArrowLeftRight", [
          ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
          ["path", { d: "M4 7h16", key: "6tx8e3" }],
          ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
          ["path", { d: "M20 17H4", key: "h6l3hr" }],
        ]),
        eS = (0, h.A)("ArrowLeftToLine", [
          ["path", { d: "M3 19V5", key: "rwsyhb" }],
          ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
          ["path", { d: "M7 12h14", key: "uoisry" }],
        ]),
        eV = (0, h.A)("ArrowLeft", [
          ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
          ["path", { d: "M19 12H5", key: "x3x0zl" }],
        ]),
        eL = (0, h.A)("ArrowRightFromLine", [
          ["path", { d: "M3 5v14", key: "1nt18q" }],
          ["path", { d: "M21 12H7", key: "13ipq5" }],
          ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }],
        ]),
        eP = (0, h.A)("ArrowRightLeft", [
          ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
          ["path", { d: "M20 7H4", key: "zbl0bi" }],
          ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
          ["path", { d: "M4 17h16", key: "g4d7ey" }],
        ]),
        eR = (0, h.A)("ArrowRightToLine", [
          ["path", { d: "M17 12H3", key: "8awo09" }],
          ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
          ["path", { d: "M21 5v14", key: "nzette" }],
        ]),
        eD = (0, h.A)("ArrowRight", [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
        ]),
        eT = (0, h.A)("ArrowUp01", [
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          [
            "rect",
            {
              x: "15",
              y: "4",
              width: "4",
              height: "6",
              ry: "2",
              key: "1bwicg",
            },
          ],
          ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
          ["path", { d: "M15 20h4", key: "1j968p" }],
        ]),
        eF = (0, h.A)("ArrowUp10", [
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
          ["path", { d: "M15 10h4", key: "id2lce" }],
          [
            "rect",
            {
              x: "15",
              y: "14",
              width: "4",
              height: "6",
              ry: "2",
              key: "33xykx",
            },
          ],
        ]),
        eE = (0, h.A)("ArrowUpAZ", [
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          ["path", { d: "M20 8h-5", key: "1vsyxs" }],
          ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
          ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }],
        ]),
        eB = (0, h.A)("ArrowUpDown", [
          ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
          ["path", { d: "M17 20V4", key: "1ejh1v" }],
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
        ]),
        eO = (0, h.A)("ArrowUpFromDot", [
          ["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }],
          ["path", { d: "M12 16V2", key: "ywoabb" }],
          ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }],
        ]),
        eZ = (0, h.A)("ArrowUpFromLine", [
          ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
          ["path", { d: "M12 3v14", key: "7cf3v8" }],
          ["path", { d: "M5 21h14", key: "11awu3" }],
        ]),
        eI = (0, h.A)("ArrowUpLeft", [
          ["path", { d: "M7 17V7h10", key: "11bw93" }],
          ["path", { d: "M17 17 7 7", key: "2786uv" }],
        ]),
        eN = (0, h.A)("ArrowUpNarrowWide", [
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          ["path", { d: "M11 12h4", key: "q8tih4" }],
          ["path", { d: "M11 16h7", key: "uosisv" }],
          ["path", { d: "M11 20h10", key: "jvxblo" }],
        ]),
        eU = (0, h.A)("ArrowUpRight", [
          ["path", { d: "M7 7h10v10", key: "1tivn9" }],
          ["path", { d: "M7 17 17 7", key: "1vkiza" }],
        ]),
        eG = (0, h.A)("ArrowUpToLine", [
          ["path", { d: "M5 3h14", key: "7usisc" }],
          ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
          ["path", { d: "M12 7v14", key: "1akyts" }],
        ]),
        eW = (0, h.A)("ArrowUpWideNarrow", [
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          ["path", { d: "M11 12h10", key: "1438ji" }],
          ["path", { d: "M11 16h7", key: "uosisv" }],
          ["path", { d: "M11 20h4", key: "1krc32" }],
        ]),
        e_ = (0, h.A)("ArrowUpZA", [
          ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
          ["path", { d: "M7 4v16", key: "1glfcx" }],
          ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
          ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
          ["path", { d: "M20 18h-5", key: "18j1r2" }],
        ]),
        eX = (0, h.A)("ArrowUp", [
          ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
          ["path", { d: "M12 19V5", key: "x0mq9r" }],
        ]),
        eK = (0, h.A)("ArrowsUpFromLine", [
          ["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }],
          ["path", { d: "M7 17V3", key: "19qxw1" }],
          ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }],
          ["path", { d: "M17 17V3", key: "o0fmgi" }],
          ["path", { d: "M4 21h16", key: "1h09gz" }],
        ]),
        eY = (0, h.A)("Asterisk", [
          ["path", { d: "M12 6v12", key: "1vza4d" }],
          ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
          ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }],
        ]),
        eJ = (0, h.A)("AtSign", [
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          [
            "path",
            { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" },
          ],
        ]),
        eQ = (0, h.A)("Atom", [
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          [
            "path",
            {
              d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
              key: "1l2ple",
            },
          ],
          [
            "path",
            {
              d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
              key: "1wam0m",
            },
          ],
        ]),
        e$ = (0, h.A)("AudioLines", [
          ["path", { d: "M2 10v3", key: "1fnikh" }],
          ["path", { d: "M6 6v11", key: "11sgs0" }],
          ["path", { d: "M10 3v18", key: "yhl04a" }],
          ["path", { d: "M14 8v7", key: "3a1oy3" }],
          ["path", { d: "M18 5v13", key: "123xd1" }],
          ["path", { d: "M22 10v3", key: "154ddg" }],
        ]),
        e1 = (0, h.A)("AudioWaveform", [
          [
            "path",
            {
              d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
              key: "57tc96",
            },
          ],
        ]),
        e2 = (0, h.A)("Award", [
          [
            "path",
            {
              d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
              key: "1yiouv",
            },
          ],
          ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
        ]),
        e0 = (0, h.A)("Axe", [
          [
            "path",
            { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9", key: "csbz4o" },
          ],
          ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z", key: "113wfo" }],
        ]),
        e4 = (0, h.A)("Axis3d", [
          ["path", { d: "M4 4v16h16", key: "1s015l" }],
          ["path", { d: "m4 20 7-7", key: "17qe9y" }],
        ]),
        e5 = (0, h.A)("Baby", [
          ["path", { d: "M9 12h.01", key: "157uk2" }],
          ["path", { d: "M15 12h.01", key: "1k8ypt" }],
          ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
          [
            "path",
            {
              d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
              key: "5yv0yz",
            },
          ],
        ]),
        e3 = (0, h.A)("Backpack", [
          [
            "path",
            {
              d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
              key: "1ol0lm",
            },
          ],
          ["path", { d: "M8 10h8", key: "c7uz4u" }],
          ["path", { d: "M8 18h8", key: "1no2b1" }],
          [
            "path",
            { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6", key: "1fr6do" },
          ],
          [
            "path",
            { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" },
          ],
        ]),
        e6 = (0, h.A)("BadgeAlert", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
          [
            "line",
            { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" },
          ],
        ]),
        e8 = (0, h.A)("BadgeCent", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "M12 7v10", key: "jspqdw" }],
          ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }],
        ]),
        e7 = (0, h.A)("BadgeCheck", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]),
        e9 = (0, h.A)("BadgeDollarSign", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          [
            "path",
            { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
          ],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
        ]),
        ae = (0, h.A)("BadgeEuro", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "M7 12h5", key: "gblrwe" }],
          ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }],
        ]),
        aa = (0, h.A)("BadgeHelp", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          [
            "path",
            { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" },
          ],
          [
            "line",
            { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" },
          ],
        ]),
        at = (0, h.A)("BadgeIndianRupee", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "M8 8h8", key: "1bis0t" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }],
        ]),
        ah = (0, h.A)("BadgeInfo", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
          ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }],
        ]),
        ay = (0, h.A)("BadgeJapaneseYen", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "m9 8 3 3v7", key: "17yadx" }],
          ["path", { d: "m12 11 3-3", key: "p4cfq1" }],
          ["path", { d: "M9 12h6", key: "1c52cq" }],
          ["path", { d: "M9 16h6", key: "8wimt3" }],
        ]),
        ar = (0, h.A)("BadgeMinus", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
        ]),
        ad = (0, h.A)("BadgePercent", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "M9 9h.01", key: "1q5me6" }],
          ["path", { d: "M15 15h.01", key: "lqbp3k" }],
        ]),
        ap = (0, h.A)("BadgePlus", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
          ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
        ]),
        ak = (0, h.A)("BadgePoundSterling", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "M8 12h4", key: "qz6y1c" }],
          ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }],
          ["path", { d: "M8 16h7", key: "sbedsn" }],
        ]),
        al = (0, h.A)("BadgeRussianRuble", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "M9 16h5", key: "1syiyw" }],
          ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }],
        ]),
        ai = (0, h.A)("BadgeSwissFranc", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "M11 17V8h4", key: "1bfq6y" }],
          ["path", { d: "M11 12h3", key: "2eqnfz" }],
          ["path", { d: "M9 16h4", key: "1skf3a" }],
        ]),
        an = (0, h.A)("BadgeX", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
          ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }],
        ]),
        ac = (0, h.A)("Badge", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
        ]),
        ao = (0, h.A)("BaggageClaim", [
          [
            "path",
            { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" },
          ],
          [
            "path",
            { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" },
          ],
          [
            "rect",
            {
              width: "13",
              height: "8",
              x: "8",
              y: "6",
              rx: "1",
              key: "o6oiis",
            },
          ],
          ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
          ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }],
        ]),
        aM = (0, h.A)("Ban", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }],
        ]),
        as = (0, h.A)("Banana", [
          [
            "path",
            { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" },
          ],
          [
            "path",
            {
              d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
              key: "1y1nbv",
            },
          ],
        ]),
        au = (0, h.A)("Bandage", [
          ["path", { d: "M10 10.01h.01", key: "1e9xi7" }],
          ["path", { d: "M10 14.01h.01", key: "ac23bv" }],
          ["path", { d: "M14 10.01h.01", key: "2wfrvf" }],
          ["path", { d: "M14 14.01h.01", key: "8tw8yn" }],
          ["path", { d: "M18 6v11.5", key: "dkbidh" }],
          ["path", { d: "M6 6v12", key: "vkc79e" }],
          [
            "rect",
            {
              x: "2",
              y: "6",
              width: "20",
              height: "12",
              rx: "2",
              key: "1wpnh2",
            },
          ],
        ]),
        av = (0, h.A)("Banknote", [
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "2",
              key: "9lu3g6",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
          ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }],
        ]),
        am = (0, h.A)("Barcode", [
          ["path", { d: "M3 5v14", key: "1nt18q" }],
          ["path", { d: "M8 5v14", key: "1ybrkv" }],
          ["path", { d: "M12 5v14", key: "s699le" }],
          ["path", { d: "M17 5v14", key: "ycjyhj" }],
          ["path", { d: "M21 5v14", key: "nzette" }],
        ]),
        ax = (0, h.A)("Baseline", [
          ["path", { d: "M4 20h16", key: "14thso" }],
          ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
        ]),
        af = (0, h.A)("Bath", [
          [
            "path",
            {
              d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
              key: "1r8yf5",
            },
          ],
          ["line", { x1: "10", x2: "8", y1: "5", y2: "7", key: "h5g8z4" }],
          ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
          ["line", { x1: "7", x2: "7", y1: "19", y2: "21", key: "16jp00" }],
          ["line", { x1: "17", x2: "17", y1: "19", y2: "21", key: "1pxrnk" }],
        ]),
        ag = (0, h.A)("BatteryCharging", [
          [
            "path",
            { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" },
          ],
          [
            "path",
            { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" },
          ],
          ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
          ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
        ]),
        aA = (0, h.A)("BatteryFull", [
          [
            "rect",
            {
              width: "16",
              height: "10",
              x: "2",
              y: "7",
              rx: "2",
              ry: "2",
              key: "1w10f2",
            },
          ],
          ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
          ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
          ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
          ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }],
        ]),
        aw = (0, h.A)("BatteryLow", [
          [
            "rect",
            {
              width: "16",
              height: "10",
              x: "2",
              y: "7",
              rx: "2",
              ry: "2",
              key: "1w10f2",
            },
          ],
          ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
          ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
        ]),
        ab = (0, h.A)("BatteryMedium", [
          [
            "rect",
            {
              width: "16",
              height: "10",
              x: "2",
              y: "7",
              rx: "2",
              ry: "2",
              key: "1w10f2",
            },
          ],
          ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
          ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
          ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
        ]),
        aC = (0, h.A)("BatteryWarning", [
          ["path", { d: "M10 17h.01", key: "nbq80n" }],
          ["path", { d: "M10 7v6", key: "nne03l" }],
          [
            "path",
            { d: "M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1x5o8m" },
          ],
          ["path", { d: "M22 11v2", key: "1wo06k" }],
          [
            "path",
            { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "1mdjgh" },
          ],
        ]),
        aq = (0, h.A)("Battery", [
          [
            "rect",
            {
              width: "16",
              height: "10",
              x: "2",
              y: "7",
              rx: "2",
              ry: "2",
              key: "1w10f2",
            },
          ],
          ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
        ]),
        az = (0, h.A)("Beaker", [
          ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
          [
            "path",
            { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" },
          ],
          ["path", { d: "M6 14h12", key: "4cwo0f" }],
        ]),
        aj = (0, h.A)("BeanOff", [
          [
            "path",
            {
              d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
              key: "bq3udt",
            },
          ],
          [
            "path",
            {
              d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",
              key: "17ccse",
            },
          ],
          [
            "path",
            {
              d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
              key: "18zqgq",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        aH = (0, h.A)("Bean", [
          [
            "path",
            {
              d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
              key: "1tvzk7",
            },
          ],
          ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }],
        ]),
        aS = (0, h.A)("BedDouble", [
          [
            "path",
            { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" },
          ],
          [
            "path",
            { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" },
          ],
          ["path", { d: "M12 4v6", key: "1dcgq2" }],
          ["path", { d: "M2 18h20", key: "ajqnye" }],
        ]),
        aV = (0, h.A)("BedSingle", [
          [
            "path",
            { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" },
          ],
          [
            "path",
            { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" },
          ],
          ["path", { d: "M3 18h18", key: "1h113x" }],
        ]),
        aL = (0, h.A)("Bed", [
          ["path", { d: "M2 4v16", key: "vw9hq8" }],
          ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
          ["path", { d: "M2 17h20", key: "18nfp3" }],
          ["path", { d: "M6 8v9", key: "1yriud" }],
        ]),
        aP = (0, h.A)("Beef", [
          ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }],
          [
            "path",
            {
              d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",
              key: "o0f6za",
            },
          ],
          [
            "path",
            {
              d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
              key: "k7p6i0",
            },
          ],
        ]),
        aR = (0, h.A)("BeerOff", [
          ["path", { d: "M13 13v5", key: "igwfh0" }],
          ["path", { d: "M17 11.47V8", key: "16yw0g" }],
          ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211", key: "1xbt65" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3", key: "c55o3e" },
          ],
          [
            "path",
            {
              d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",
              key: "1ydug7",
            },
          ],
          [
            "path",
            {
              d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",
              key: "q81o7q",
            },
          ],
          ["path", { d: "M9 14.6V18", key: "20ek98" }],
        ]),
        aD = (0, h.A)("Beer", [
          ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }],
          ["path", { d: "M9 12v6", key: "1u1cab" }],
          ["path", { d: "M13 12v6", key: "1sugkk" }],
          [
            "path",
            {
              d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
              key: "1510fo",
            },
          ],
          [
            "path",
            { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" },
          ],
        ]),
        aT = (0, h.A)("BellDot", [
          [
            "path",
            {
              d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",
              key: "xcehk",
            },
          ],
          ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
          ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }],
        ]),
        aF = (0, h.A)("BellElectric", [
          ["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9", key: "xve1fh" }],
          ["path", { d: "M9 9h.01", key: "1q5me6" }],
          ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
          [
            "rect",
            {
              width: "10",
              height: "6",
              x: "4",
              y: "16",
              rx: "2",
              key: "17f3te",
            },
          ],
          ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6", key: "n7odp6" }],
          ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
        ]),
        aE = (0, h.A)("BellMinus", [
          [
            "path",
            {
              d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",
              key: "eck70s",
            },
          ],
          ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
          ["path", { d: "M15 8h6", key: "8ybuxh" }],
        ]),
        aB = (0, h.A)("BellOff", [
          [
            "path",
            { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" },
          ],
          [
            "path",
            { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" },
          ],
          ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        aO = (0, h.A)("BellPlus", [
          [
            "path",
            {
              d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",
              key: "guizqy",
            },
          ],
          ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
          ["path", { d: "M15 8h6", key: "8ybuxh" }],
          ["path", { d: "M18 5v6", key: "g5ayrv" }],
        ]),
        aZ = (0, h.A)("BellRing", [
          [
            "path",
            { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" },
          ],
          ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
          ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
          ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
        ]),
        aI = (0, h.A)("Bell", [
          [
            "path",
            { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" },
          ],
          ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
        ]),
        aN = (0, h.A)("BetweenHorizontalEnd", [
          [
            "rect",
            {
              width: "13",
              height: "7",
              x: "3",
              y: "3",
              rx: "1",
              key: "11xb64",
            },
          ],
          ["path", { d: "m22 15-3-3 3-3", key: "26chmm" }],
          [
            "rect",
            {
              width: "13",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
              key: "k6ky7n",
            },
          ],
        ]),
        aU = (0, h.A)("BetweenHorizontalStart", [
          [
            "rect",
            {
              width: "13",
              height: "7",
              x: "8",
              y: "3",
              rx: "1",
              key: "pkso9a",
            },
          ],
          ["path", { d: "m2 9 3 3-3 3", key: "1agib5" }],
          [
            "rect",
            {
              width: "13",
              height: "7",
              x: "8",
              y: "14",
              rx: "1",
              key: "1q5fc1",
            },
          ],
        ]),
        aG = (0, h.A)("BetweenVerticalEnd", [
          [
            "rect",
            {
              width: "7",
              height: "13",
              x: "3",
              y: "3",
              rx: "1",
              key: "1fdu0f",
            },
          ],
          ["path", { d: "m9 22 3-3 3 3", key: "17z65a" }],
          [
            "rect",
            {
              width: "7",
              height: "13",
              x: "14",
              y: "3",
              rx: "1",
              key: "1squn4",
            },
          ],
        ]),
        aW = (0, h.A)("BetweenVerticalStart", [
          [
            "rect",
            {
              width: "7",
              height: "13",
              x: "3",
              y: "8",
              rx: "1",
              key: "1fjrkv",
            },
          ],
          ["path", { d: "m15 2-3 3-3-3", key: "1uh6eb" }],
          [
            "rect",
            {
              width: "7",
              height: "13",
              x: "14",
              y: "8",
              rx: "1",
              key: "w3fjg8",
            },
          ],
        ]),
        a_ = (0, h.A)("BicepsFlexed", [
          [
            "path",
            {
              d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",
              key: "1pmlyh",
            },
          ],
          ["path", { d: "M15 14a5 5 0 0 0-7.584 2", key: "5rb254" }],
          [
            "path",
            { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15", key: "kbvsx9" },
          ],
        ]),
        aX = (0, h.A)("Bike", [
          ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
          ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
          ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
          ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }],
        ]),
        aK = (0, h.A)("Binary", [
          [
            "rect",
            {
              x: "14",
              y: "14",
              width: "4",
              height: "6",
              rx: "2",
              key: "p02svl",
            },
          ],
          [
            "rect",
            { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" },
          ],
          ["path", { d: "M6 20h4", key: "1i6q5t" }],
          ["path", { d: "M14 10h4", key: "ru81e7" }],
          ["path", { d: "M6 14h2v6", key: "16z9wg" }],
          ["path", { d: "M14 4h2v6", key: "1idq9u" }],
        ]),
        aY = (0, h.A)("Binoculars", [
          ["path", { d: "M10 10h4", key: "tcdvrf" }],
          [
            "path",
            { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3", key: "3apit1" },
          ],
          [
            "path",
            {
              d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",
              key: "rhpgnw",
            },
          ],
          ["path", { d: "M 22 16 L 2 16", key: "14lkq7" }],
          [
            "path",
            {
              d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",
              key: "104b3k",
            },
          ],
          [
            "path",
            { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3", key: "14fczp" },
          ],
        ]),
        aJ = (0, h.A)("Biohazard", [
          ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
          [
            "path",
            {
              d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",
              key: "17bolr",
            },
          ],
          ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
          [
            "path",
            {
              d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",
              key: "wtwa5u",
            },
          ],
          ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
          [
            "path",
            {
              d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",
              key: "m7qszh",
            },
          ],
          ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
          ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
          ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
          ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }],
        ]),
        aQ = (0, h.A)("Bird", [
          ["path", { d: "M16 7h.01", key: "1kdx03" }],
          [
            "path",
            {
              d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",
              key: "oj1oa8",
            },
          ],
          ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
          ["path", { d: "M10 18v3", key: "1yea0a" }],
          ["path", { d: "M14 17.75V21", key: "1pymcb" }],
          ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }],
        ]),
        a$ = (0, h.A)("Bitcoin", [
          [
            "path",
            {
              d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
              key: "yr8idg",
            },
          ],
        ]),
        a1 = (0, h.A)("Blend", [
          ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
          ["circle", { cx: "15", cy: "15", r: "7", key: "19ennj" }],
        ]),
        a2 = (0, h.A)("Blinds", [
          ["path", { d: "M3 3h18", key: "o7r712" }],
          ["path", { d: "M20 7H8", key: "gd2fo2" }],
          ["path", { d: "M20 11H8", key: "1ynp89" }],
          ["path", { d: "M10 19h10", key: "19hjk5" }],
          ["path", { d: "M8 15h12", key: "1yqzne" }],
          ["path", { d: "M4 3v14", key: "fggqzn" }],
          ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }],
        ]),
        a0 = (0, h.A)("Blocks", [
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "3",
              rx: "1",
              key: "6d4xhi",
            },
          ],
          [
            "path",
            {
              d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
              key: "1fpvtg",
            },
          ],
        ]),
        a4 = (0, h.A)("BluetoothConnected", [
          ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
          ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }],
          ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }],
        ]),
        a5 = (0, h.A)("BluetoothOff", [
          ["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }],
        ]),
        a3 = (0, h.A)("BluetoothSearching", [
          ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
          ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }],
          ["path", { d: "M18 12h.01", key: "yjnet6" }],
        ]),
        a6 = (0, h.A)("Bluetooth", [
          ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
        ]),
        a8 = (0, h.A)("Bold", [
          [
            "path",
            {
              d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
              key: "mg9rjx",
            },
          ],
        ]),
        a7 = (0, h.A)("Bolt", [
          [
            "path",
            {
              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
              key: "yt0hxn",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ]),
        a9 = (0, h.A)("Bomb", [
          ["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }],
          [
            "path",
            {
              d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
              key: "jp4j1b",
            },
          ],
          ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }],
        ]),
        te = (0, h.A)("Bone", [
          [
            "path",
            {
              d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
              key: "w610uw",
            },
          ],
        ]),
        ta = (0, h.A)("BookA", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }],
          ["path", { d: "M9.1 11h5.7", key: "1gkovt" }],
        ]),
        tt = (0, h.A)("BookAudio", [
          ["path", { d: "M12 6v7", key: "1f6ttz" }],
          ["path", { d: "M16 8v3", key: "gejaml" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "M8 8v3", key: "1qzp49" }],
        ]),
        th = (0, h.A)("BookCheck", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }],
        ]),
        ty = (0, h.A)("BookCopy", [
          ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11", key: "spzkk5" }],
          [
            "path",
            {
              d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",
              key: "1wz07i",
            },
          ],
          ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1", key: "16gqf9" }],
        ]),
        tr = (0, h.A)("BookDashed", [
          ["path", { d: "M12 17h2", key: "13u4lk" }],
          ["path", { d: "M12 22h2", key: "kn7ki6" }],
          ["path", { d: "M12 2h2", key: "cvn524" }],
          ["path", { d: "M18 22h1a1 1 0 0 0 1-1", key: "w6gbqz" }],
          ["path", { d: "M18 2h1a1 1 0 0 1 1 1v1", key: "1vpra5" }],
          ["path", { d: "M20 15v2h-2", key: "fph276" }],
          ["path", { d: "M20 8v3", key: "deu0bs" }],
          ["path", { d: "M4 11V9", key: "v3xsx8" }],
          ["path", { d: "M4 19.5V15", key: "6gr39e" }],
          ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8", key: "wywhs9" }],
          ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8", key: "1cu73q" }],
        ]),
        td = (0, h.A)("BookDown", [
          ["path", { d: "M12 13V7", key: "h0r20n" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }],
        ]),
        tp = (0, h.A)("BookHeadphones", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }],
          ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
          ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
        ]),
        tk = (0, h.A)("BookHeart", [
          [
            "path",
            {
              d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",
              key: "1t75a8",
            },
          ],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
        ]),
        tl = (0, h.A)("BookImage", [
          [
            "path",
            { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17", key: "q6ojf0" },
          ],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }],
        ]),
        ti = (0, h.A)("BookKey", [
          ["path", { d: "m19 3 1 1", key: "ze14oc" }],
          ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }],
          [
            "path",
            { d: "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "1ocbpn" },
          ],
          ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14", key: "1gfsgw" }],
          ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }],
        ]),
        tn = (0, h.A)("BookLock", [
          ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }],
          [
            "path",
            { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "1rkj32" },
          ],
          ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }],
          [
            "rect",
            {
              x: "12",
              y: "6",
              width: "8",
              height: "5",
              rx: "1",
              key: "73l30o",
            },
          ],
        ]),
        tc = (0, h.A)("BookMarked", [
          ["path", { d: "M10 2v8l3-3 3 3V2", key: "sqw3rj" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
        ]),
        to = (0, h.A)("BookMinus", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
        ]),
        tM = (0, h.A)("BookOpenCheck", [
          ["path", { d: "M12 21V7", key: "gj6g52" }],
          ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
          [
            "path",
            {
              d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",
              key: "8arnkb",
            },
          ],
        ]),
        ts = (0, h.A)("BookOpenText", [
          ["path", { d: "M12 7v14", key: "1akyts" }],
          ["path", { d: "M16 12h2", key: "7q9ll5" }],
          ["path", { d: "M16 8h2", key: "msurwy" }],
          [
            "path",
            {
              d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
              key: "ruj8y",
            },
          ],
          ["path", { d: "M6 12h2", key: "32wvfc" }],
          ["path", { d: "M6 8h2", key: "30oboj" }],
        ]),
        tu = (0, h.A)("BookOpen", [
          ["path", { d: "M12 7v14", key: "1akyts" }],
          [
            "path",
            {
              d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
              key: "ruj8y",
            },
          ],
        ]),
        tv = (0, h.A)("BookPlus", [
          ["path", { d: "M12 7v6", key: "lw1j43" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
        ]),
        tm = (0, h.A)("BookText", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "M8 11h8", key: "vwpz6n" }],
          ["path", { d: "M8 7h6", key: "1f0q6e" }],
        ]),
        tx = (0, h.A)("BookType", [
          ["path", { d: "M10 13h4", key: "ytezjc" }],
          ["path", { d: "M12 6v7", key: "1f6ttz" }],
          ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
        ]),
        tf = (0, h.A)("BookUp2", [
          ["path", { d: "M12 13V7", key: "h0r20n" }],
          [
            "path",
            {
              d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "161d7n",
            },
          ],
          ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }],
          ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
          ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }],
        ]),
        tg = (0, h.A)("BookUp", [
          ["path", { d: "M12 13V7", key: "h0r20n" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
        ]),
        tA = (0, h.A)("BookUser", [
          ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
        ]),
        tw = (0, h.A)("BookX", [
          ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
          ["path", { d: "m9.5 7 5 5", key: "s45iea" }],
        ]),
        tb = (0, h.A)("Book", [
          [
            "path",
            {
              d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
              key: "k3hazp",
            },
          ],
        ]),
        tC = (0, h.A)("BookmarkCheck", [
          [
            "path",
            {
              d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",
              key: "169p4p",
            },
          ],
          ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
        ]),
        tq = (0, h.A)("BookmarkMinus", [
          [
            "path",
            {
              d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
              key: "1fy3hk",
            },
          ],
          ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }],
        ]),
        tz = (0, h.A)("BookmarkPlus", [
          [
            "path",
            {
              d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
              key: "1fy3hk",
            },
          ],
          ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }],
          ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }],
        ]),
        tj = (0, h.A)("BookmarkX", [
          [
            "path",
            {
              d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",
              key: "169p4p",
            },
          ],
          ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
          ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }],
        ]),
        tH = (0, h.A)("Bookmark", [
          [
            "path",
            {
              d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
              key: "1fy3hk",
            },
          ],
        ]),
        tS = (0, h.A)("BoomBox", [
          [
            "path",
            { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" },
          ],
          ["path", { d: "M8 8v1", key: "xcqmfk" }],
          ["path", { d: "M12 8v1", key: "1rj8u4" }],
          ["path", { d: "M16 8v1", key: "1q12zr" }],
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "9",
              rx: "2",
              key: "igpb89",
            },
          ],
          ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }],
          ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }],
        ]),
        tV = (0, h.A)("BotMessageSquare", [
          ["path", { d: "M12 6V2H8", key: "1155em" }],
          [
            "path",
            {
              d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",
              key: "w2lp3e",
            },
          ],
          ["path", { d: "M2 12h2", key: "1t8f8n" }],
          ["path", { d: "M9 11v2", key: "1ueba0" }],
          ["path", { d: "M15 11v2", key: "i11awn" }],
          ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ]),
        tL = (0, h.A)("BotOff", [
          ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33", key: "7az073" }],
          ["path", { d: "M2 14h2", key: "vft8re" }],
          ["path", { d: "M20 14h2", key: "4cs60a" }],
          ["path", { d: "M22 22 2 2", key: "1r8tn9" }],
          [
            "path",
            {
              d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",
              key: "s09a7a",
            },
          ],
          ["path", { d: "M9 13v2", key: "rq6x2g" }],
          ["path", { d: "M9.67 4H12v2.33", key: "110xot" }],
        ]),
        tP = (0, h.A)("Bot", [
          ["path", { d: "M12 8V4H8", key: "hb8ula" }],
          [
            "rect",
            {
              width: "16",
              height: "12",
              x: "4",
              y: "8",
              rx: "2",
              key: "enze0r",
            },
          ],
          ["path", { d: "M2 14h2", key: "vft8re" }],
          ["path", { d: "M20 14h2", key: "4cs60a" }],
          ["path", { d: "M15 13v2", key: "1xurst" }],
          ["path", { d: "M9 13v2", key: "rq6x2g" }],
        ]),
        tR = (0, h.A)("BoxSelect", [
          ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
          ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
          ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
          ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
          ["path", { d: "M9 3h1", key: "1yesri" }],
          ["path", { d: "M9 21h1", key: "15o7lz" }],
          ["path", { d: "M14 3h1", key: "1ec4yj" }],
          ["path", { d: "M14 21h1", key: "v9vybs" }],
          ["path", { d: "M3 9v1", key: "1r0deq" }],
          ["path", { d: "M21 9v1", key: "mxsmne" }],
          ["path", { d: "M3 14v1", key: "vnatye" }],
          ["path", { d: "M21 14v1", key: "169vum" }],
        ]),
        tD = (0, h.A)("Box", [
          [
            "path",
            {
              d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
              key: "hh9hay",
            },
          ],
          ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
          ["path", { d: "M12 22V12", key: "d0xqtd" }],
        ]),
        tT = (0, h.A)("Boxes", [
          [
            "path",
            {
              d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
              key: "lc1i9w",
            },
          ],
          ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
          ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
          ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
          [
            "path",
            {
              d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
              key: "8zsnat",
            },
          ],
          ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
          ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
          ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
          [
            "path",
            {
              d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
              key: "1xygjf",
            },
          ],
          ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
          ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
          ["path", { d: "M12 13.5V8", key: "1io7kd" }],
        ]),
        tF = (0, h.A)("Braces", [
          [
            "path",
            {
              d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
              key: "ezmyqa",
            },
          ],
          [
            "path",
            {
              d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
              key: "e1hn23",
            },
          ],
        ]),
        tE = (0, h.A)("Brackets", [
          ["path", { d: "M16 3h3v18h-3", key: "1yor1f" }],
          ["path", { d: "M8 21H5V3h3", key: "1qrfwo" }],
        ]),
        tB = (0, h.A)("BrainCircuit", [
          [
            "path",
            {
              d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
              key: "l5xja",
            },
          ],
          ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
          ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
          ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
          ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
          ["path", { d: "M12 13h4", key: "1ku699" }],
          ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
          ["path", { d: "M12 8h8", key: "1lhi5i" }],
          ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
          ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
          ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
          ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
          ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }],
        ]),
        tO = (0, h.A)("BrainCog", [
          [
            "path",
            {
              d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",
              key: "1kgmhc",
            },
          ],
          ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
          ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
          ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
          ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
          ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
          ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["path", { d: "m15.7 10.4-.9.4", key: "ayzo6p" }],
          ["path", { d: "m9.2 13.2-.9.4", key: "1uzb3g" }],
          ["path", { d: "m13.6 15.7-.4-.9", key: "11ifqf" }],
          ["path", { d: "m10.8 9.2-.4-.9", key: "1pmk2v" }],
          ["path", { d: "m15.7 13.5-.9-.4", key: "7ng02m" }],
          ["path", { d: "m9.2 10.9-.9-.4", key: "1x66zd" }],
          ["path", { d: "m10.5 15.7.4-.9", key: "3js94g" }],
          ["path", { d: "m13.1 9.2.4-.9", key: "18n7mc" }],
        ]),
        tZ = (0, h.A)("Brain", [
          [
            "path",
            {
              d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
              key: "l5xja",
            },
          ],
          [
            "path",
            {
              d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
              key: "ep3f8r",
            },
          ],
          [
            "path",
            { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" },
          ],
          ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
          ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
          ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
          ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
          ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
          ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
        ]),
        tI = (0, h.A)("BrickWall", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M12 9v6", key: "199k2o" }],
          ["path", { d: "M16 15v6", key: "8rj2es" }],
          ["path", { d: "M16 3v6", key: "1j6rpj" }],
          ["path", { d: "M3 15h18", key: "5xshup" }],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "M8 15v6", key: "1stoo3" }],
          ["path", { d: "M8 3v6", key: "vlvjmk" }],
        ]),
        tN = (0, h.A)("BriefcaseBusiness", [
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          [
            "path",
            { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" },
          ],
          ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "6",
              rx: "2",
              key: "i6l2r4",
            },
          ],
        ]),
        tU = (0, h.A)("BriefcaseConveyorBelt", [
          ["path", { d: "M10 20v2", key: "1n8e1g" }],
          ["path", { d: "M14 20v2", key: "1lq872" }],
          ["path", { d: "M18 20v2", key: "10uadw" }],
          ["path", { d: "M21 20H3", key: "kdqkdp" }],
          ["path", { d: "M6 20v2", key: "a9bc87" }],
          [
            "path",
            { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12", key: "17n9tx" },
          ],
          [
            "rect",
            {
              x: "4",
              y: "6",
              width: "16",
              height: "10",
              rx: "2",
              key: "1097i5",
            },
          ],
        ]),
        tG = (0, h.A)("BriefcaseMedical", [
          ["path", { d: "M12 11v4", key: "a6ujw6" }],
          ["path", { d: "M14 13h-4", key: "1pl8zg" }],
          [
            "path",
            { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" },
          ],
          ["path", { d: "M18 6v14", key: "1mu4gy" }],
          ["path", { d: "M6 6v14", key: "1s15cj" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "6",
              rx: "2",
              key: "i6l2r4",
            },
          ],
        ]),
        tW = (0, h.A)("Briefcase", [
          [
            "path",
            { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" },
          ],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "6",
              rx: "2",
              key: "i6l2r4",
            },
          ],
        ]),
        t_ = (0, h.A)("BringToFront", [
          [
            "rect",
            { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" },
          ],
          [
            "path",
            {
              d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",
              key: "1ltk23",
            },
          ],
          [
            "path",
            {
              d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",
              key: "1q24h9",
            },
          ],
        ]),
        tX = (0, h.A)("Brush", [
          [
            "path",
            {
              d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
              key: "1styjt",
            },
          ],
          [
            "path",
            {
              d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
              key: "z0l1mu",
            },
          ],
        ]),
        tK = (0, h.A)("BugOff", [
          ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }],
          ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
          ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3", key: "1ou0bd" }],
          ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",
              key: "1njkjs",
            },
          ],
          ["path", { d: "M12 20v-8", key: "i3yub9" }],
          ["path", { d: "M6 13H2", key: "82j7cp" }],
          ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
        ]),
        tY = (0, h.A)("BugPlay", [
          [
            "path",
            {
              d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",
              key: "17shqo",
            },
          ],
          ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
          [
            "path",
            {
              d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",
              key: "1tjixy",
            },
          ],
          ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
          ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
          ["path", { d: "M6 13H2", key: "82j7cp" }],
          ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
          ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
          ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
        ]),
        tJ = (0, h.A)("Bug", [
          ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
          ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
          ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
          [
            "path",
            {
              d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
              key: "xs1cw7",
            },
          ],
          ["path", { d: "M12 20v-9", key: "1qisl0" }],
          ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
          ["path", { d: "M6 13H2", key: "82j7cp" }],
          ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
          ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
          ["path", { d: "M22 13h-4", key: "1jl80f" }],
          ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }],
        ]),
        tQ = (0, h.A)("Building2", [
          [
            "path",
            { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" },
          ],
          [
            "path",
            { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" },
          ],
          [
            "path",
            { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" },
          ],
          ["path", { d: "M10 6h4", key: "1itunk" }],
          ["path", { d: "M10 10h4", key: "tcdvrf" }],
          ["path", { d: "M10 14h4", key: "kelpxr" }],
          ["path", { d: "M10 18h4", key: "1ulq68" }],
        ]),
        t$ = (0, h.A)("Building", [
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              ry: "2",
              key: "76otgf",
            },
          ],
          ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
          ["path", { d: "M8 6h.01", key: "1dz90k" }],
          ["path", { d: "M16 6h.01", key: "1x0f13" }],
          ["path", { d: "M12 6h.01", key: "1vi96p" }],
          ["path", { d: "M12 10h.01", key: "1nrarc" }],
          ["path", { d: "M12 14h.01", key: "1etili" }],
          ["path", { d: "M16 10h.01", key: "1m94wz" }],
          ["path", { d: "M16 14h.01", key: "1gbofw" }],
          ["path", { d: "M8 10h.01", key: "19clt8" }],
          ["path", { d: "M8 14h.01", key: "6423bh" }],
        ]),
        t1 = (0, h.A)("BusFront", [
          ["path", { d: "M4 6 2 7", key: "1mqr15" }],
          ["path", { d: "M10 6h4", key: "1itunk" }],
          ["path", { d: "m22 7-2-1", key: "1umjhc" }],
          [
            "rect",
            {
              width: "16",
              height: "16",
              x: "4",
              y: "3",
              rx: "2",
              key: "1wxw4b",
            },
          ],
          ["path", { d: "M4 11h16", key: "mpoxn0" }],
          ["path", { d: "M8 15h.01", key: "a7atzg" }],
          ["path", { d: "M16 15h.01", key: "rnfrdf" }],
          ["path", { d: "M6 19v2", key: "1loha6" }],
          ["path", { d: "M18 21v-2", key: "sqyl04" }],
        ]),
        t2 = (0, h.A)("Bus", [
          ["path", { d: "M8 6v6", key: "18i7km" }],
          ["path", { d: "M15 6v6", key: "1sg6z9" }],
          ["path", { d: "M2 12h19.6", key: "de5uta" }],
          [
            "path",
            {
              d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
              key: "1wwztk",
            },
          ],
          ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
          ["path", { d: "M9 18h5", key: "lrx6i" }],
          ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }],
        ]),
        t0 = (0, h.A)("CableCar", [
          ["path", { d: "M10 3h.01", key: "lbucoy" }],
          ["path", { d: "M14 2h.01", key: "1k8aa1" }],
          ["path", { d: "m2 9 20-5", key: "1kz0j5" }],
          ["path", { d: "M12 12V6.5", key: "1vbrij" }],
          [
            "rect",
            {
              width: "16",
              height: "10",
              x: "4",
              y: "12",
              rx: "3",
              key: "if91er",
            },
          ],
          ["path", { d: "M9 12v5", key: "3anwtq" }],
          ["path", { d: "M15 12v5", key: "5xh3zn" }],
          ["path", { d: "M4 17h16", key: "g4d7ey" }],
        ]),
        t4 = (0, h.A)("Cable", [
          [
            "path",
            {
              d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",
              key: "10bnsj",
            },
          ],
          [
            "path",
            { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9", key: "1eqmu1" },
          ],
          ["path", { d: "M21 21v-2h-4", key: "14zm7j" }],
          ["path", { d: "M3 5h4V3", key: "z442eg" }],
          [
            "path",
            {
              d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",
              key: "ebdjd7",
            },
          ],
        ]),
        t5 = (0, h.A)("CakeSlice", [
          ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }],
          [
            "path",
            {
              d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",
              key: "xle13f",
            },
          ],
          ["path", { d: "M16 13H3", key: "1wpj08" }],
          ["path", { d: "M16 17H3", key: "3lvfcd" }],
        ]),
        t3 = (0, h.A)("Cake", [
          [
            "path",
            { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" },
          ],
          [
            "path",
            {
              d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
              key: "n2jgmb",
            },
          ],
          ["path", { d: "M2 21h20", key: "1nyx9w" }],
          ["path", { d: "M7 8v3", key: "1qtyvj" }],
          ["path", { d: "M12 8v3", key: "hwp4zt" }],
          ["path", { d: "M17 8v3", key: "1i6e5u" }],
          ["path", { d: "M7 4h.01", key: "1bh4kh" }],
          ["path", { d: "M12 4h.01", key: "1ujb9j" }],
          ["path", { d: "M17 4h.01", key: "1upcoc" }],
        ]),
        t6 = (0, h.A)("Calculator", [
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              key: "1nb95v",
            },
          ],
          ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
          ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
          ["path", { d: "M16 10h.01", key: "1m94wz" }],
          ["path", { d: "M12 10h.01", key: "1nrarc" }],
          ["path", { d: "M8 10h.01", key: "19clt8" }],
          ["path", { d: "M12 14h.01", key: "1etili" }],
          ["path", { d: "M8 14h.01", key: "6423bh" }],
          ["path", { d: "M12 18h.01", key: "mhygvu" }],
          ["path", { d: "M8 18h.01", key: "lrp35t" }],
        ]),
        t8 = (0, h.A)("CalendarArrowDown", [
          ["path", { d: "m14 18 4 4 4-4", key: "1waygx" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "M18 14v8", key: "irew45" }],
          [
            "path",
            {
              d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",
              key: "bse4f3",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
        ]),
        t7 = (0, h.A)("CalendarArrowUp", [
          ["path", { d: "m14 18 4-4 4 4", key: "ftkppy" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "M18 22v-8", key: "su0gjh" }],
          [
            "path",
            {
              d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",
              key: "1exg90",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
        ]),
        t9 = (0, h.A)("CalendarCheck2", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
              key: "bce9hv",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }],
        ]),
        he = (0, h.A)("CalendarCheck", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }],
        ]),
        ha = (0, h.A)("CalendarClock", [
          [
            "path",
            {
              d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
              key: "1osxxc",
            },
          ],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M3 10h5", key: "r794hk" }],
          ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
          ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
        ]),
        ht = (0, h.A)("CalendarCog", [
          ["path", { d: "m15.2 16.9-.9-.4", key: "1r0w5f" }],
          ["path", { d: "m15.2 19.1-.9.4", key: "j188fs" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "m16.9 15.2-.4-.9", key: "699xu" }],
          ["path", { d: "m16.9 20.8-.4.9", key: "dfjc4z" }],
          ["path", { d: "m19.5 14.3-.4.9", key: "1eb35c" }],
          ["path", { d: "m19.5 21.7-.4-.9", key: "1tonu5" }],
          [
            "path",
            {
              d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
              key: "11kmuh",
            },
          ],
          ["path", { d: "m21.7 16.5-.9.4", key: "1knoei" }],
          ["path", { d: "m21.7 19.5-.9-.4", key: "q4dx6b" }],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
        ]),
        hh = (0, h.A)("CalendarDays", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 14h.01", key: "6423bh" }],
          ["path", { d: "M12 14h.01", key: "1etili" }],
          ["path", { d: "M16 14h.01", key: "1gbofw" }],
          ["path", { d: "M8 18h.01", key: "lrp35t" }],
          ["path", { d: "M12 18h.01", key: "mhygvu" }],
          ["path", { d: "M16 18h.01", key: "kzsmim" }],
        ]),
        hy = (0, h.A)("CalendarFold", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",
              key: "kg77oy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4", key: "1gnbqr" }],
        ]),
        hr = (0, h.A)("CalendarHeart", [
          [
            "path",
            {
              d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",
              key: "136lmk",
            },
          ],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
              key: "1t7hil",
            },
          ],
        ]),
        hd = (0, h.A)("CalendarMinus2", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M10 16h4", key: "17e571" }],
        ]),
        hp = (0, h.A)("CalendarMinus", [
          ["path", { d: "M16 19h6", key: "xwg31i" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",
              key: "1scpom",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
        ]),
        hk = (0, h.A)("CalendarOff", [
          [
            "path",
            {
              d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",
              key: "16swn3",
            },
          ],
          ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "M3 10h7", key: "1wap6i" }],
          ["path", { d: "M21 10h-5.5", key: "quycpq" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        hl = (0, h.A)("CalendarPlus2", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M10 16h4", key: "17e571" }],
          ["path", { d: "M12 14v4", key: "1thi36" }],
        ]),
        hi = (0, h.A)("CalendarPlus", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
              key: "3spt84",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M16 19h6", key: "xwg31i" }],
          ["path", { d: "M19 16v6", key: "tddt3s" }],
        ]),
        hn = (0, h.A)("CalendarRange", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M17 14h-6", key: "bkmgh3" }],
          ["path", { d: "M13 18H7", key: "bb0bb7" }],
          ["path", { d: "M7 14h.01", key: "1qa3f1" }],
          ["path", { d: "M17 18h.01", key: "1bdyru" }],
        ]),
        hc = (0, h.A)("CalendarSearch", [
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",
              key: "1jrsq6",
            },
          ],
          ["path", { d: "m22 22-1.875-1.875", key: "13zax7" }],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
        ]),
        ho = (0, h.A)("CalendarX2", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "path",
            {
              d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
              key: "3spt84",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "m17 22 5-5", key: "1k6ppv" }],
          ["path", { d: "m17 17 5 5", key: "p7ous7" }],
        ]),
        hM = (0, h.A)("CalendarX", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
          ["path", { d: "m14 14-4 4", key: "rymu2i" }],
          ["path", { d: "m10 14 4 4", key: "3sz06r" }],
        ]),
        hs = (0, h.A)("Calendar", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "4",
              rx: "2",
              key: "1hopcy",
            },
          ],
          ["path", { d: "M3 10h18", key: "8toen8" }],
        ]),
        hu = (0, h.A)("CameraOff", [
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
          [
            "path",
            { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16", key: "qmtpty" },
          ],
          ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5", key: "1ufyfc" }],
          ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88", key: "11zox6" }],
        ]),
        hv = (0, h.A)("Camera", [
          [
            "path",
            {
              d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
              key: "1tc9qg",
            },
          ],
          ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
        ]),
        hm = (0, h.A)("CandyCane", [
          [
            "path",
            {
              d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
              key: "isaq8g",
            },
          ],
          ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }],
          ["path", { d: "M10.9 4.8 13 9", key: "100a87" }],
          ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }],
          ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }],
        ]),
        hx = (0, h.A)("CandyOff", [
          [
            "path",
            { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1", key: "1ff4ui" },
          ],
          [
            "path",
            {
              d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",
              key: "1sbrv4",
            },
          ],
          ["path", { d: "M14 16.5V14", key: "1maf8j" }],
          ["path", { d: "M14 6.5v1.843", key: "1a6u6t" }],
          ["path", { d: "M10 10v7.5", key: "80pj65" }],
          [
            "path",
            {
              d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",
              key: "11a9mt",
            },
          ],
          [
            "path",
            {
              d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",
              key: "3mjmon",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        hf = (0, h.A)("Candy", [
          [
            "path",
            {
              d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",
              key: "ue6khb",
            },
          ],
          ["path", { d: "M14 6.5v10", key: "5xnk7c" }],
          ["path", { d: "M10 7.5v10", key: "1uew51" }],
          [
            "path",
            {
              d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",
              key: "b9cp6k",
            },
          ],
          [
            "path",
            {
              d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",
              key: "5lney8",
            },
          ],
        ]),
        hg = (0, h.A)("Cannabis", [
          ["path", { d: "M12 22v-4", key: "1utk9m" }],
          [
            "path",
            {
              d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",
              key: "1mezod",
            },
          ],
        ]),
        hA = (0, h.A)("CaptionsOff", [
          ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5", key: "jqtk4d" }],
          ["path", { d: "M17 11h-.5", key: "1961ue" }],
          [
            "path",
            { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2", key: "1keqsi" },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M7 11h4", key: "1o1z6v" }],
          ["path", { d: "M7 15h2.5", key: "1ina1g" }],
        ]),
        hw = (0, h.A)("Captions", [
          [
            "rect",
            {
              width: "18",
              height: "14",
              x: "3",
              y: "5",
              rx: "2",
              ry: "2",
              key: "12ruh7",
            },
          ],
          ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }],
        ]),
        hb = (0, h.A)("CarFront", [
          [
            "path",
            {
              d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",
              key: "1imjwt",
            },
          ],
          ["path", { d: "M7 14h.01", key: "1qa3f1" }],
          ["path", { d: "M17 14h.01", key: "7oqj8z" }],
          [
            "rect",
            {
              width: "18",
              height: "8",
              x: "3",
              y: "10",
              rx: "2",
              key: "a7itu8",
            },
          ],
          ["path", { d: "M5 18v2", key: "ppbyun" }],
          ["path", { d: "M19 18v2", key: "gy7782" }],
        ]),
        hC = (0, h.A)("CarTaxiFront", [
          ["path", { d: "M10 2h4", key: "n1abiw" }],
          [
            "path",
            {
              d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",
              key: "1imjwt",
            },
          ],
          ["path", { d: "M7 14h.01", key: "1qa3f1" }],
          ["path", { d: "M17 14h.01", key: "7oqj8z" }],
          [
            "rect",
            {
              width: "18",
              height: "8",
              x: "3",
              y: "10",
              rx: "2",
              key: "a7itu8",
            },
          ],
          ["path", { d: "M5 18v2", key: "ppbyun" }],
          ["path", { d: "M19 18v2", key: "gy7782" }],
        ]),
        hq = (0, h.A)("Car", [
          [
            "path",
            {
              d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
              key: "5owen",
            },
          ],
          ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
          ["path", { d: "M9 17h6", key: "r8uit2" }],
          ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }],
        ]),
        hz = (0, h.A)("Caravan", [
          [
            "path",
            {
              d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",
              key: "19jm3t",
            },
          ],
          [
            "path",
            { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2", key: "13hakp" },
          ],
          [
            "path",
            {
              d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",
              key: "1crci8",
            },
          ],
          ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }],
        ]),
        hj = (0, h.A)("Carrot", [
          [
            "path",
            {
              d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
              key: "rfqxbe",
            },
          ],
          [
            "path",
            {
              d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",
              key: "6b25w4",
            },
          ],
          [
            "path",
            {
              d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",
              key: "fn65lo",
            },
          ],
        ]),
        hH = (0, h.A)("CaseLower", [
          ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
          ["path", { d: "M10 9v6", key: "17i7lo" }],
          ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
          ["path", { d: "M14 7v8", key: "dl84cr" }],
        ]),
        hS = (0, h.A)("CaseSensitive", [
          ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
          ["path", { d: "M4 13h6", key: "1r9ots" }],
          ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
          ["path", { d: "M21 9v6", key: "anns31" }],
        ]),
        hV = (0, h.A)("CaseUpper", [
          ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
          ["path", { d: "M4 13h6", key: "1r9ots" }],
          [
            "path",
            {
              d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",
              key: "1sqfas",
            },
          ],
        ]),
        hL = (0, h.A)("CassetteTape", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }],
          [
            "path",
            {
              d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",
              key: "l01ucn",
            },
          ],
        ]),
        hP = (0, h.A)("Cast", [
          [
            "path",
            {
              d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
              key: "3zrzxg",
            },
          ],
          ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
          ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
          ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }],
        ]),
        hR = (0, h.A)("Castle", [
          [
            "path",
            {
              d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",
              key: "109fe4",
            },
          ],
          ["path", { d: "M18 11V4H6v7", key: "mon5oj" }],
          [
            "path",
            { d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4", key: "1k4jtn" },
          ],
          ["path", { d: "M22 11V9", key: "3zbp94" }],
          ["path", { d: "M2 11V9", key: "1x5rnq" }],
          ["path", { d: "M6 4V2", key: "1rsq15" }],
          ["path", { d: "M18 4V2", key: "1jsdo1" }],
          ["path", { d: "M10 4V2", key: "75d9ly" }],
          ["path", { d: "M14 4V2", key: "8nj3z6" }],
        ]),
        hD = (0, h.A)("Cat", [
          [
            "path",
            {
              d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
              key: "x6xyqk",
            },
          ],
          ["path", { d: "M8 14v.5", key: "1nzgdb" }],
          ["path", { d: "M16 14v.5", key: "1lajdz" }],
          ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }],
        ]),
        hT = (0, h.A)("Cctv", [
          [
            "path",
            {
              d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",
              key: "ir91b5",
            },
          ],
          [
            "path",
            {
              d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",
              key: "jlp8i1",
            },
          ],
          ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
          ["path", { d: "M2 21v-4", key: "l40lih" }],
          ["path", { d: "M7 9h.01", key: "19b3jx" }],
        ]),
        hF = (0, h.A)("ChartArea", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          [
            "path",
            {
              d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
              key: "q0gr47",
            },
          ],
        ]),
        hE = (0, h.A)("ChartBarBig", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          [
            "rect",
            {
              x: "7",
              y: "13",
              width: "9",
              height: "4",
              rx: "1",
              key: "1iip1u",
            },
          ],
          [
            "rect",
            {
              x: "7",
              y: "5",
              width: "12",
              height: "4",
              rx: "1",
              key: "1anskk",
            },
          ],
        ]),
        hB = (0, h.A)("ChartBarDecreasing", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M7 11h8", key: "1feolt" }],
          ["path", { d: "M7 16h3", key: "ur6vzw" }],
          ["path", { d: "M7 6h12", key: "sz5b0d" }],
        ]),
        hO = (0, h.A)("ChartBarIncreasing", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M7 11h8", key: "1feolt" }],
          ["path", { d: "M7 16h12", key: "wsnu98" }],
          ["path", { d: "M7 6h3", key: "w9rmul" }],
        ]),
        hZ = (0, h.A)("ChartBarStacked", [
          ["path", { d: "M11 13v4", key: "vyy2rb" }],
          ["path", { d: "M15 5v4", key: "1gx88a" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          [
            "rect",
            {
              x: "7",
              y: "13",
              width: "9",
              height: "4",
              rx: "1",
              key: "1iip1u",
            },
          ],
          [
            "rect",
            {
              x: "7",
              y: "5",
              width: "12",
              height: "4",
              rx: "1",
              key: "1anskk",
            },
          ],
        ]),
        hI = (0, h.A)("ChartBar", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M7 16h8", key: "srdodz" }],
          ["path", { d: "M7 11h12", key: "127s9w" }],
          ["path", { d: "M7 6h3", key: "w9rmul" }],
        ]),
        hN = (0, h.A)("ChartCandlestick", [
          ["path", { d: "M9 5v4", key: "14uxtq" }],
          [
            "rect",
            { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" },
          ],
          ["path", { d: "M9 15v2", key: "r5rk32" }],
          ["path", { d: "M17 3v2", key: "1l2re6" }],
          [
            "rect",
            {
              width: "4",
              height: "8",
              x: "15",
              y: "5",
              rx: "1",
              key: "z38je5",
            },
          ],
          ["path", { d: "M17 13v3", key: "5l0wba" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ]),
        hU = (0, h.A)("ChartColumnBig", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          [
            "rect",
            {
              x: "15",
              y: "5",
              width: "4",
              height: "12",
              rx: "1",
              key: "q8uenq",
            },
          ],
          [
            "rect",
            { x: "7", y: "8", width: "4", height: "9", rx: "1", key: "sr5ea" },
          ],
        ]),
        hG = (0, h.A)("ChartColumnDecreasing", [
          ["path", { d: "M13 17V9", key: "1fwyjl" }],
          ["path", { d: "M18 17v-3", key: "1sqioe" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M8 17V5", key: "1wzmnc" }],
        ]),
        hW = (0, h.A)("ChartColumnIncreasing", [
          ["path", { d: "M13 17V9", key: "1fwyjl" }],
          ["path", { d: "M18 17V5", key: "sfb6ij" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M8 17v-3", key: "17ska0" }],
        ]),
        h_ = (0, h.A)("ChartColumnStacked", [
          ["path", { d: "M11 13H7", key: "t0o9gq" }],
          ["path", { d: "M19 9h-4", key: "rera1j" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          [
            "rect",
            {
              x: "15",
              y: "5",
              width: "4",
              height: "12",
              rx: "1",
              key: "q8uenq",
            },
          ],
          [
            "rect",
            { x: "7", y: "8", width: "4", height: "9", rx: "1", key: "sr5ea" },
          ],
        ]),
        hX = (0, h.A)("ChartColumn", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M18 17V9", key: "2bz60n" }],
          ["path", { d: "M13 17V5", key: "1frdt8" }],
          ["path", { d: "M8 17v-3", key: "17ska0" }],
        ]),
        hK = (0, h.A)("ChartGantt", [
          ["path", { d: "M10 6h8", key: "zvc2xc" }],
          ["path", { d: "M12 16h6", key: "yi5mkt" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M8 11h7", key: "wz2hg0" }],
        ]),
        hY = (0, h.A)("ChartLine", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }],
        ]),
        hJ = (0, h.A)("ChartNetwork", [
          ["path", { d: "m13.11 7.664 1.78 2.672", key: "go2gg9" }],
          ["path", { d: "m14.162 12.788-3.324 1.424", key: "11x848" }],
          ["path", { d: "m20 4-6.06 1.515", key: "1wxxh7" }],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["circle", { cx: "12", cy: "6", r: "2", key: "1jj5th" }],
          ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }],
          ["circle", { cx: "9", cy: "15", r: "2", key: "lf2ghp" }],
        ]),
        hQ = (0, h.A)("ChartNoAxesColumnDecreasing", [
          ["path", { d: "M12 20V10", key: "g8npz5" }],
          ["path", { d: "M18 20v-4", key: "8uic4z" }],
          ["path", { d: "M6 20V4", key: "1w1bmo" }],
        ]),
        h$ = (0, h.A)("ChartNoAxesColumnIncreasing", [
          ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
          ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
          ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }],
        ]),
        h1 = (0, h.A)("ChartNoAxesColumn", [
          ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
          ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
          ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }],
        ]),
        h2 = (0, h.A)("ChartNoAxesCombined", [
          ["path", { d: "M12 16v5", key: "zza2cw" }],
          ["path", { d: "M16 14v7", key: "1g90b9" }],
          ["path", { d: "M20 10v11", key: "1iqoj0" }],
          [
            "path",
            {
              d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
              key: "1fw8x9",
            },
          ],
          ["path", { d: "M4 18v3", key: "1yp0dc" }],
          ["path", { d: "M8 14v7", key: "n3cwzv" }],
        ]),
        h0 = (0, h.A)("ChartNoAxesGantt", [
          ["path", { d: "M8 6h10", key: "9lnwnk" }],
          ["path", { d: "M6 12h9", key: "1g9pqf" }],
          ["path", { d: "M11 18h7", key: "c8dzvl" }],
        ]),
        h4 = (0, h.A)("ChartPie", [
          [
            "path",
            {
              d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
              key: "pzmjnu",
            },
          ],
          ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
        ]),
        h5 = (0, h.A)("ChartScatter", [
          [
            "circle",
            {
              cx: "7.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "kqv944",
            },
          ],
          [
            "circle",
            {
              cx: "18.5",
              cy: "5.5",
              r: ".5",
              fill: "currentColor",
              key: "lysivs",
            },
          ],
          [
            "circle",
            {
              cx: "11.5",
              cy: "11.5",
              r: ".5",
              fill: "currentColor",
              key: "byv1b8",
            },
          ],
          [
            "circle",
            {
              cx: "7.5",
              cy: "16.5",
              r: ".5",
              fill: "currentColor",
              key: "nkw3mc",
            },
          ],
          [
            "circle",
            {
              cx: "17.5",
              cy: "14.5",
              r: ".5",
              fill: "currentColor",
              key: "1gjh6j",
            },
          ],
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ]),
        h3 = (0, h.A)("ChartSpline", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          [
            "path",
            {
              d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",
              key: "lw07rv",
            },
          ],
        ]),
        h6 = (0, h.A)("CheckCheck", [
          ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
          ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
        ]),
        h8 = (0, h.A)("Check", [
          ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
        ]),
        h7 = (0, h.A)("ChefHat", [
          [
            "path",
            {
              d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
              key: "1qvrer",
            },
          ],
          ["path", { d: "M6 17h12", key: "1jwigz" }],
        ]),
        h9 = (0, h.A)("Cherry", [
          [
            "path",
            {
              d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
              key: "cvxqlc",
            },
          ],
          [
            "path",
            {
              d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
              key: "1ostrc",
            },
          ],
          [
            "path",
            {
              d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
              key: "hqx58h",
            },
          ],
          [
            "path",
            {
              d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",
              key: "eykp1o",
            },
          ],
        ])
      var ye = t(5501)
      let ya = (0, h.A)("ChevronFirst", [
          ["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }],
          ["path", { d: "M7 6v12", key: "1p53r6" }],
        ]),
        yt = (0, h.A)("ChevronLast", [
          ["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }],
          ["path", { d: "M17 6v12", key: "1o0aio" }],
        ]),
        yh = (0, h.A)("ChevronLeft", [
          ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
        ])
      var yy = t(9557)
      let yr = (0, h.A)("ChevronUp", [
          ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
        ]),
        yd = (0, h.A)("ChevronsDownUp", [
          ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
          ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }],
        ]),
        yp = (0, h.A)("ChevronsDown", [
          ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
          ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }],
        ]),
        yk = (0, h.A)("ChevronsLeftRightEllipsis", [
          ["path", { d: "m18 8 4 4-4 4", key: "1ak13k" }],
          ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
          ["path", { d: "M8 12h.01", key: "czm47f" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M16 12h.01", key: "1l6xoz" }],
        ]),
        yl = (0, h.A)("ChevronsLeftRight", [
          ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
          ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }],
        ]),
        yi = (0, h.A)("ChevronsLeft", [
          ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
          ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }],
        ]),
        yn = (0, h.A)("ChevronsRightLeft", [
          ["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }],
          ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }],
        ]),
        yc = (0, h.A)("ChevronsRight", [
          ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
          ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }],
        ]),
        yo = (0, h.A)("ChevronsUpDown", [
          ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
          ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
        ]),
        yM = (0, h.A)("ChevronsUp", [
          ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
          ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }],
        ]),
        ys = (0, h.A)("Chrome", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
          [
            "line",
            { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" },
          ],
          [
            "line",
            { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" },
          ],
        ]),
        yu = (0, h.A)("Church", [
          ["path", { d: "M10 9h4", key: "u4k05v" }],
          ["path", { d: "M12 7v5", key: "ma6bk" }],
          ["path", { d: "M14 22v-4a2 2 0 0 0-4 0v4", key: "1pdhuj" }],
          [
            "path",
            {
              d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",
              key: "1rkokr",
            },
          ],
          [
            "path",
            {
              d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",
              key: "1w6esw",
            },
          ],
        ]),
        yv = (0, h.A)("CigaretteOff", [
          [
            "path",
            { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13", key: "1gdiyg" },
          ],
          ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866", key: "166zjj" },
          ],
          ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }],
          ["path", { d: "M7 12v4", key: "jqww69" }],
        ]),
        ym = (0, h.A)("Cigarette", [
          [
            "path",
            { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14", key: "1mb5g1" },
          ],
          ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
          [
            "path",
            { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1", key: "1yl5r7" },
          ],
          ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }],
          ["path", { d: "M7 12v4", key: "jqww69" }],
        ]),
        yx = (0, h.A)("CircleAlert", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
          [
            "line",
            { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" },
          ],
        ]),
        yf = (0, h.A)("CircleArrowDown", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
          ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }],
        ]),
        yg = (0, h.A)("CircleArrowLeft", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M16 12H8", key: "1fr5h0" }],
          ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
        ]),
        yA = (0, h.A)("CircleArrowOutDownLeft", [
          ["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }],
          ["path", { d: "m2 22 10-10", key: "28ilpk" }],
          ["path", { d: "M8 22H2v-6", key: "sulq54" }],
        ]),
        yw = (0, h.A)("CircleArrowOutDownRight", [
          ["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }],
          ["path", { d: "M22 22 12 12", key: "131aw7" }],
          ["path", { d: "M22 16v6h-6", key: "1gvm70" }],
        ]),
        yb = (0, h.A)("CircleArrowOutUpLeft", [
          ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
          ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
          ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }],
        ]),
        yC = (0, h.A)("CircleArrowOutUpRight", [
          ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
          ["path", { d: "M22 2 12 12", key: "yg2myt" }],
          ["path", { d: "M16 2h6v6", key: "zan5cs" }],
        ]),
        yq = (0, h.A)("CircleArrowRight", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
        ]),
        yz = (0, h.A)("CircleArrowUp", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
          ["path", { d: "M12 16V8", key: "1sbj14" }],
        ]),
        yj = (0, h.A)("CircleCheckBig", [
          ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
          ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
        ]),
        yH = (0, h.A)("CircleCheck", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]),
        yS = (0, h.A)("CircleChevronDown", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }],
        ]),
        yV = (0, h.A)("CircleChevronLeft", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }],
        ]),
        yL = (0, h.A)("CircleChevronRight", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }],
        ]),
        yP = (0, h.A)("CircleChevronUp", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }],
        ]),
        yR = (0, h.A)("CircleDashed", [
          ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
          ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
          ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
          ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
          ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
          ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
          ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
          ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }],
        ]),
        yD = (0, h.A)("CircleDivide", [
          ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
          ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        yT = (0, h.A)("CircleDollarSign", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
          ],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
        ]),
        yF = (0, h.A)("CircleDotDashed", [
          ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
          ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
          ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
          [
            "path",
            { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" },
          ],
          ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
          ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
          ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
          ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ]),
        yE = (0, h.A)("CircleDot", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ]),
        yB = (0, h.A)("CircleEllipsis", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M17 12h.01", key: "1m0b6t" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M7 12h.01", key: "eqddd0" }],
        ]),
        yO = (0, h.A)("CircleEqual", [
          ["path", { d: "M7 10h10", key: "1101jm" }],
          ["path", { d: "M7 14h10", key: "1mhdw3" }],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        yZ = (0, h.A)("CircleFadingArrowUp", [
          ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
          ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
          ["path", { d: "M12 16V8", key: "1sbj14" }],
          ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
          ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
          ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
          ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }],
        ]),
        yI = (0, h.A)("CircleFadingPlus", [
          ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
          ["path", { d: "M16 12H8", key: "1fr5h0" }],
          ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
          ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
          ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
          ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }],
        ]),
        yN = (0, h.A)("CircleGauge", [
          ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
          ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
        ]),
        yU = (0, h.A)("CircleHelp", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" },
          ],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
        ]),
        yG = (0, h.A)("CircleMinus", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
        ]),
        yW = (0, h.A)("CircleOff", [
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
          ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }],
        ]),
        y_ = (0, h.A)("CircleParkingOff", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m5 5 14 14", key: "11anup" }],
          ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
          ["path", { d: "M9 17v-2.34", key: "a9qo08" }],
        ]),
        yX = (0, h.A)("CircleParking", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }],
        ]),
        yK = (0, h.A)("CirclePause", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
          ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }],
        ]),
        yY = (0, h.A)("CirclePercent", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "M9 9h.01", key: "1q5me6" }],
          ["path", { d: "M15 15h.01", key: "lqbp3k" }],
        ]),
        yJ = (0, h.A)("CirclePlay", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
        ]),
        yQ = (0, h.A)("CirclePlus", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
        ]),
        y$ = (0, h.A)("CirclePower", [
          ["path", { d: "M12 7v4", key: "xawao1" }],
          ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005", key: "1pek45" }],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        y1 = (0, h.A)("CircleSlash2", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
        ]),
        y2 = (0, h.A)("CircleSlash", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
        ]),
        y0 = (0, h.A)("CircleStop", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "rect",
            { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" },
          ],
        ]),
        y4 = (0, h.A)("CircleUserRound", [
          ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
          ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        y5 = (0, h.A)("CircleUser", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          [
            "path",
            {
              d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
              key: "154egf",
            },
          ],
        ]),
        y3 = (0, h.A)("CircleX", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "m9 9 6 6", key: "z0biqf" }],
        ]),
        y6 = (0, h.A)("Circle", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        y8 = (0, h.A)("CircuitBoard", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
          ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }],
        ]),
        y7 = (0, h.A)("Citrus", [
          [
            "path",
            {
              d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
              key: "4ite01",
            },
          ],
          ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
          ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
          ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }],
        ]),
        y9 = (0, h.A)("Clapperboard", [
          [
            "path",
            {
              d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
              key: "1tn4o7",
            },
          ],
          ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
          ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
          [
            "path",
            { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" },
          ],
        ]),
        re = (0, h.A)("ClipboardCheck", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
        ]),
        ra = (0, h.A)("ClipboardCopy", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
              key: "4jdomd",
            },
          ],
          ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
          ["path", { d: "M21 14H11", key: "1bme5i" }],
          ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }],
        ]),
        rt = (0, h.A)("ClipboardList", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "M12 11h4", key: "1jrz19" }],
          ["path", { d: "M12 16h4", key: "n85exb" }],
          ["path", { d: "M8 11h.01", key: "1dfujw" }],
          ["path", { d: "M8 16h.01", key: "18s6g9" }],
        ]),
        rh = (0, h.A)("ClipboardMinus", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "M9 14h6", key: "159ibu" }],
        ]),
        ry = (0, h.A)("ClipboardPaste", [
          [
            "path",
            {
              d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",
              key: "1pp7kr",
            },
          ],
          [
            "path",
            {
              d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
              key: "2ik1ml",
            },
          ],
          ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }],
        ]),
        rr = (0, h.A)("ClipboardPenLine", [
          [
            "rect",
            { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" },
          ],
          [
            "path",
            {
              d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",
              key: "1but9f",
            },
          ],
          ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }],
          ["path", { d: "M8 18h1", key: "13wk12" }],
          [
            "path",
            {
              d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "2t3380",
            },
          ],
        ]),
        rd = (0, h.A)("ClipboardPen", [
          [
            "rect",
            { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" },
          ],
          [
            "path",
            { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" },
          ],
          ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }],
          [
            "path",
            {
              d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "1y4qbx",
            },
          ],
        ]),
        rp = (0, h.A)("ClipboardPlus", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "M9 14h6", key: "159ibu" }],
          ["path", { d: "M12 17v-6", key: "1y8rbf" }],
        ]),
        rk = (0, h.A)("ClipboardType", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }],
          ["path", { d: "M11 17h2", key: "12w5me" }],
          ["path", { d: "M12 11v6", key: "1bwqyc" }],
        ]),
        rl = (0, h.A)("ClipboardX", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
          ["path", { d: "m15 11-6 6", key: "1toa9n" }],
          ["path", { d: "m9 11 6 6", key: "wlibny" }],
        ]),
        ri = (0, h.A)("Clipboard", [
          [
            "rect",
            {
              width: "8",
              height: "4",
              x: "8",
              y: "2",
              rx: "1",
              ry: "1",
              key: "tgr4d6",
            },
          ],
          [
            "path",
            {
              d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
              key: "116196",
            },
          ],
        ]),
        rn = (0, h.A)("Clock1", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 14.5 8", key: "12zbmj" }],
        ]),
        rc = (0, h.A)("Clock10", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 8 10", key: "atfzqc" }],
        ]),
        ro = (0, h.A)("Clock11", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 9.5 8", key: "l5bg6f" }],
        ]),
        rM = (0, h.A)("Clock12", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12", key: "1fub01" }],
        ]),
        rs = (0, h.A)("Clock2", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 16 10", key: "1g230d" }],
        ]),
        ru = (0, h.A)("Clock3", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
        ]),
        rv = (0, h.A)("Clock4", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
        ]),
        rm = (0, h.A)("Clock5", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 14.5 16", key: "1pcbox" }],
        ]),
        rx = (0, h.A)("Clock6", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 12 16.5", key: "hb2qv6" }],
        ]),
        rf = (0, h.A)("Clock7", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 9.5 16", key: "ka3394" }],
        ]),
        rg = (0, h.A)("Clock8", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 8 14", key: "tmc9b4" }],
        ]),
        rA = (0, h.A)("Clock9", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 7.5 12", key: "1k60p0" }],
        ]),
        rw = (0, h.A)("ClockAlert", [
          ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
          ["path", { d: "M16 21.16a10 10 0 1 1 5-13.516", key: "cxo92l" }],
          ["path", { d: "M20 11.5v6", key: "2ei3xq" }],
          ["path", { d: "M20 21.5h.01", key: "1r2dzp" }],
        ]),
        rb = (0, h.A)("ClockArrowDown", [
          [
            "path",
            { d: "M12.338 21.994A10 10 0 1 1 21.925 13.227", key: "1i7shu" },
          ],
          ["path", { d: "M12 6v6l2 1", key: "19cm8n" }],
          ["path", { d: "m14 18 4 4 4-4", key: "1waygx" }],
          ["path", { d: "M18 14v8", key: "irew45" }],
        ]),
        rC = (0, h.A)("ClockArrowUp", [
          [
            "path",
            { d: "M13.228 21.925A10 10 0 1 1 21.994 12.338", key: "1fzlyi" },
          ],
          ["path", { d: "M12 6v6l1.562.781", key: "1ujuk9" }],
          ["path", { d: "m14 18 4-4 4 4", key: "ftkppy" }],
          ["path", { d: "M18 22v-8", key: "su0gjh" }],
        ]),
        rq = (0, h.A)("Clock", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
        ]),
        rz = (0, h.A)("CloudCog", [
          ["circle", { cx: "12", cy: "17", r: "3", key: "1spfwm" }],
          [
            "path",
            {
              d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",
              key: "zaobp",
            },
          ],
          ["path", { d: "m15.7 18.4-.9-.3", key: "4qxpbn" }],
          ["path", { d: "m9.2 15.9-.9-.3", key: "17q7o2" }],
          ["path", { d: "m10.6 20.7.3-.9", key: "1pf4s2" }],
          ["path", { d: "m13.1 14.2.3-.9", key: "1mnuqm" }],
          ["path", { d: "m13.6 20.7-.4-1", key: "1jpd1m" }],
          ["path", { d: "m10.8 14.3-.4-1", key: "17ugyy" }],
          ["path", { d: "m8.3 18.6 1-.4", key: "s42vdx" }],
          ["path", { d: "m14.7 15.8 1-.4", key: "2wizun" }],
        ]),
        rj = (0, h.A)("CloudDownload", [
          ["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }],
          ["path", { d: "m12 21 4-4", key: "1lfcce" }],
          [
            "path",
            {
              d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
              key: "ui1hmy",
            },
          ],
        ]),
        rH = (0, h.A)("CloudDrizzle", [
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "M8 19v1", key: "1dk2by" }],
          ["path", { d: "M8 14v1", key: "84yxot" }],
          ["path", { d: "M16 19v1", key: "v220m7" }],
          ["path", { d: "M16 14v1", key: "g12gj6" }],
          ["path", { d: "M12 21v1", key: "q8vafk" }],
          ["path", { d: "M12 16v1", key: "1mx6rx" }],
        ]),
        rS = (0, h.A)("CloudFog", [
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "M16 17H7", key: "pygtm1" }],
          ["path", { d: "M17 21H9", key: "1u2q02" }],
        ]),
        rV = (0, h.A)("CloudHail", [
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "M16 14v2", key: "a1is7l" }],
          ["path", { d: "M8 14v2", key: "1e9m6t" }],
          ["path", { d: "M16 20h.01", key: "xwek51" }],
          ["path", { d: "M8 20h.01", key: "1vjney" }],
          ["path", { d: "M12 16v2", key: "z66u1j" }],
          ["path", { d: "M12 22h.01", key: "1urd7a" }],
        ]),
        rL = (0, h.A)("CloudLightning", [
          [
            "path",
            {
              d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
              key: "1cez44",
            },
          ],
          ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }],
        ]),
        rP = (0, h.A)("CloudMoonRain", [
          [
            "path",
            {
              d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",
              key: "erj67n",
            },
          ],
          ["path", { d: "M11 20v2", key: "174qtz" }],
          [
            "path",
            { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" },
          ],
          ["path", { d: "M7 19v2", key: "12npes" }],
        ]),
        rR = (0, h.A)("CloudMoon", [
          [
            "path",
            {
              d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",
              key: "erj67n",
            },
          ],
          [
            "path",
            { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z", key: "p44pc9" },
          ],
        ]),
        rD = (0, h.A)("CloudOff", [
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
              key: "yfwify",
            },
          ],
          [
            "path",
            {
              d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
              key: "jlfiyv",
            },
          ],
        ]),
        rT = (0, h.A)("CloudRainWind", [
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }],
          ["path", { d: "m9 13-3 7", key: "500co5" }],
          ["path", { d: "m17 13-3 7", key: "8t2fiy" }],
        ]),
        rF = (0, h.A)("CloudRain", [
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "M16 14v6", key: "1j4efv" }],
          ["path", { d: "M8 14v6", key: "17c4r9" }],
          ["path", { d: "M12 16v6", key: "c8a4gj" }],
        ]),
        rE = (0, h.A)("CloudSnow", [
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "M8 15h.01", key: "a7atzg" }],
          ["path", { d: "M8 19h.01", key: "puxtts" }],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
          ["path", { d: "M12 21h.01", key: "h35vbk" }],
          ["path", { d: "M16 15h.01", key: "rnfrdf" }],
          ["path", { d: "M16 19h.01", key: "1vcnzz" }],
        ]),
        rB = (0, h.A)("CloudSunRain", [
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
          ["path", { d: "M20 12h2", key: "1q8mjw" }],
          ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
          ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
          [
            "path",
            { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" },
          ],
          ["path", { d: "M11 20v2", key: "174qtz" }],
          ["path", { d: "M7 19v2", key: "12npes" }],
        ]),
        rO = (0, h.A)("CloudSun", [
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
          ["path", { d: "M20 12h2", key: "1q8mjw" }],
          ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
          ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
          [
            "path",
            { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" },
          ],
        ]),
        rZ = (0, h.A)("CloudUpload", [
          ["path", { d: "M12 13v8", key: "1l5pq0" }],
          [
            "path",
            {
              d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
              key: "1pljnt",
            },
          ],
          ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }],
        ]),
        rI = (0, h.A)("Cloud", [
          [
            "path",
            {
              d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
              key: "p7xjir",
            },
          ],
        ]),
        rN = (0, h.A)("Cloudy", [
          [
            "path",
            {
              d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
              key: "gqqjvc",
            },
          ],
          [
            "path",
            {
              d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",
              key: "1p2s76",
            },
          ],
        ]),
        rU = (0, h.A)("Clover", [
          ["path", { d: "M16.17 7.83 2 22", key: "t58vo8" }],
          [
            "path",
            {
              d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",
              key: "17k36q",
            },
          ],
          ["path", { d: "m7.83 7.83 8.34 8.34", key: "1d7sxk" }],
        ]),
        rG = (0, h.A)("Club", [
          [
            "path",
            {
              d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
              key: "27yuqz",
            },
          ],
          ["path", { d: "M12 17.66L12 22", key: "ogfahf" }],
        ]),
        rW = (0, h.A)("CodeXml", [
          ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
          ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
          ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
        ]),
        r_ = (0, h.A)("Code", [
          ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
          ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
        ]),
        rX = (0, h.A)("Codepen", [
          [
            "polygon",
            {
              points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
              key: "srzb37",
            },
          ],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }],
          ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }],
          ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }],
        ]),
        rK = (0, h.A)("Codesandbox", [
          [
            "path",
            {
              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
              key: "yt0hxn",
            },
          ],
          ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
          ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
          ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
          [
            "polyline",
            { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" },
          ],
          [
            "line",
            { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" },
          ],
        ]),
        rY = (0, h.A)("Coffee", [
          ["path", { d: "M10 2v2", key: "7u0qdc" }],
          ["path", { d: "M14 2v2", key: "6buw04" }],
          [
            "path",
            {
              d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
              key: "pwadti",
            },
          ],
          ["path", { d: "M6 2v2", key: "colzsn" }],
        ]),
        rJ = (0, h.A)("Cog", [
          [
            "path",
            { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" },
          ],
          ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "M12 22v-2", key: "1osdcq" }],
          ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
          ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
          ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
          ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
          ["path", { d: "M14 12h8", key: "4f43i9" }],
          ["path", { d: "M2 12h2", key: "1t8f8n" }],
          ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
          ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
          ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
          ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
        ]),
        rQ = (0, h.A)("Coins", [
          ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
          ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
          ["path", { d: "M7 6h1v4", key: "1obek4" }],
          ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
        ]),
        r$ = (0, h.A)("Columns2", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M12 3v18", key: "108xh3" }],
        ]),
        r1 = (0, h.A)("Columns3", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
          ["path", { d: "M15 3v18", key: "14nvp0" }],
        ]),
        r2 = (0, h.A)("Columns4", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7.5 3v18", key: "w0wo6v" }],
          ["path", { d: "M12 3v18", key: "108xh3" }],
          ["path", { d: "M16.5 3v18", key: "10tjh1" }],
        ]),
        r0 = (0, h.A)("Combine", [
          ["path", { d: "M10 18H5a3 3 0 0 1-3-3v-1", key: "ru65g8" }],
          ["path", { d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2", key: "e30een" }],
          ["path", { d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2", key: "2ahx8o" }],
          ["path", { d: "m7 21 3-3-3-3", key: "127cv2" }],
          [
            "rect",
            {
              x: "14",
              y: "14",
              width: "8",
              height: "8",
              rx: "2",
              key: "1b0bso",
            },
          ],
          [
            "rect",
            { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" },
          ],
        ]),
        r4 = (0, h.A)("Command", [
          [
            "path",
            {
              d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
              key: "11bfej",
            },
          ],
        ]),
        r5 = (0, h.A)("Compass", [
          [
            "path",
            {
              d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
              key: "9ktpf1",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        r3 = (0, h.A)("Component", [
          [
            "path",
            { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z", key: "1kciei" },
          ],
          ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z", key: "1ome0g" }],
          [
            "path",
            { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z", key: "vbupec" },
          ],
          [
            "path",
            { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z", key: "16csic" },
          ],
        ]),
        r6 = (0, h.A)("Computer", [
          [
            "rect",
            {
              width: "14",
              height: "8",
              x: "5",
              y: "2",
              rx: "2",
              key: "wc9tft",
            },
          ],
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "14",
              rx: "2",
              key: "w68u3i",
            },
          ],
          ["path", { d: "M6 18h2", key: "rwmk9e" }],
          ["path", { d: "M12 18h6", key: "aqd8w3" }],
        ]),
        r8 = (0, h.A)("ConciergeBell", [
          [
            "path",
            {
              d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",
              key: "1pvr1r",
            },
          ],
          ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
          ["path", { d: "M12 4v4", key: "1bq03y" }],
          ["path", { d: "M10 4h4", key: "1xpv9s" }],
        ]),
        r7 = (0, h.A)("Cone", [
          [
            "path",
            {
              d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",
              key: "53pte7",
            },
          ],
          ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }],
        ]),
        r9 = (0, h.A)("Construction", [
          [
            "rect",
            {
              x: "2",
              y: "6",
              width: "20",
              height: "8",
              rx: "1",
              key: "1estib",
            },
          ],
          ["path", { d: "M17 14v7", key: "7m2elx" }],
          ["path", { d: "M7 14v7", key: "1cm7wv" }],
          ["path", { d: "M17 3v3", key: "1v4jwn" }],
          ["path", { d: "M7 3v3", key: "7o6guu" }],
          ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
          ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
          ["path", { d: "m8 6 8 8", key: "hl96qh" }],
        ]),
        de = (0, h.A)("ContactRound", [
          ["path", { d: "M16 2v2", key: "scm5qe" }],
          ["path", { d: "M17.915 22a6 6 0 0 0-12 0", key: "suqz9p" }],
          ["path", { d: "M8 2v2", key: "pbkmx" }],
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          [
            "rect",
            {
              x: "3",
              y: "4",
              width: "18",
              height: "18",
              rx: "2",
              key: "12vinp",
            },
          ],
        ]),
        da = (0, h.A)("Contact", [
          ["path", { d: "M16 2v2", key: "scm5qe" }],
          [
            "path",
            { d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1waht3" },
          ],
          ["path", { d: "M8 2v2", key: "pbkmx" }],
          ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
          [
            "rect",
            {
              x: "3",
              y: "4",
              width: "18",
              height: "18",
              rx: "2",
              key: "12vinp",
            },
          ],
        ]),
        dt = (0, h.A)("Container", [
          [
            "path",
            {
              d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
              key: "1t2lqe",
            },
          ],
          ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
          ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
          ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
          ["path", { d: "M18 17.5V9.4", key: "11uown" }],
        ]),
        dh = (0, h.A)("Contrast", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }],
        ]),
        dy = (0, h.A)("Cookie", [
          [
            "path",
            {
              d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
              key: "laymnq",
            },
          ],
          ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
          ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
          ["path", { d: "M12 12v.01", key: "u5ubse" }],
          ["path", { d: "M11 17v.01", key: "1hyl5a" }],
          ["path", { d: "M7 14v.01", key: "uct60s" }],
        ]),
        dr = (0, h.A)("CookingPot", [
          ["path", { d: "M2 12h20", key: "9i4pu4" }],
          [
            "path",
            { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" },
          ],
          ["path", { d: "m4 8 16-4", key: "16g0ng" }],
          [
            "path",
            {
              d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
              key: "12cejc",
            },
          ],
        ]),
        dd = (0, h.A)("CopyCheck", [
          ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        dp = (0, h.A)("CopyMinus", [
          ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        dk = (0, h.A)("CopyPlus", [
          ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
          ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        dl = (0, h.A)("CopySlash", [
          ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        di = (0, h.A)("CopyX", [
          ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
          ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        dn = (0, h.A)("Copy", [
          [
            "rect",
            {
              width: "14",
              height: "14",
              x: "8",
              y: "8",
              rx: "2",
              ry: "2",
              key: "17jyea",
            },
          ],
          [
            "path",
            {
              d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
              key: "zix9uf",
            },
          ],
        ]),
        dc = (0, h.A)("Copyleft", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }],
        ]),
        dM = (0, h.A)("Copyright", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }],
        ]),
        ds = (0, h.A)("CornerDownLeft", [
          ["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }],
          ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
        ]),
        du = (0, h.A)("CornerDownRight", [
          ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
          ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }],
        ]),
        dv = (0, h.A)("CornerLeftDown", [
          ["polyline", { points: "14 15 9 20 4 15", key: "nkc4i" }],
          ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }],
        ]),
        dm = (0, h.A)("CornerLeftUp", [
          ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
          ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }],
        ]),
        dx = (0, h.A)("CornerRightDown", [
          ["polyline", { points: "10 15 15 20 20 15", key: "axus6l" }],
          ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }],
        ]),
        df = (0, h.A)("CornerRightUp", [
          ["polyline", { points: "10 9 15 4 20 9", key: "1lr6px" }],
          ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }],
        ]),
        dg = (0, h.A)("CornerUpLeft", [
          ["polyline", { points: "9 14 4 9 9 4", key: "881910" }],
          ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
        ]),
        dA = (0, h.A)("CornerUpRight", [
          ["polyline", { points: "15 14 20 9 15 4", key: "1tbx3s" }],
          ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }],
        ]),
        dw = (0, h.A)("Cpu", [
          [
            "rect",
            {
              width: "16",
              height: "16",
              x: "4",
              y: "4",
              rx: "2",
              key: "14l7u7",
            },
          ],
          [
            "rect",
            { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" },
          ],
          ["path", { d: "M15 2v2", key: "13l42r" }],
          ["path", { d: "M15 20v2", key: "15mkzm" }],
          ["path", { d: "M2 15h2", key: "1gxd5l" }],
          ["path", { d: "M2 9h2", key: "1bbxkp" }],
          ["path", { d: "M20 15h2", key: "19e6y8" }],
          ["path", { d: "M20 9h2", key: "19tzq7" }],
          ["path", { d: "M9 2v2", key: "165o2o" }],
          ["path", { d: "M9 20v2", key: "i2bqo8" }],
        ]),
        db = (0, h.A)("CreativeCommons", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            {
              d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",
              key: "1ss3eq",
            },
          ],
          [
            "path",
            {
              d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",
              key: "1od56t",
            },
          ],
        ]),
        dC = (0, h.A)("CreditCard", [
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "5",
              rx: "2",
              key: "ynyp8z",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
        ]),
        dq = (0, h.A)("Croissant", [
          [
            "path",
            {
              d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
              key: "1ozxlb",
            },
          ],
          [
            "path",
            {
              d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
              key: "ffuyb5",
            },
          ],
          [
            "path",
            { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4", key: "osnpzi" },
          ],
          [
            "path",
            {
              d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
              key: "1vubaw",
            },
          ],
          [
            "path",
            { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5", key: "wxr772" },
          ],
        ]),
        dz = (0, h.A)("Crop", [
          ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
          ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }],
        ]),
        dj = (0, h.A)("Cross", [
          [
            "path",
            {
              d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
              key: "1t5g7j",
            },
          ],
        ]),
        dH = (0, h.A)("Crosshair", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
          ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
          ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }],
        ]),
        dS = (0, h.A)("Crown", [
          [
            "path",
            {
              d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
              key: "1vdc57",
            },
          ],
          ["path", { d: "M5 21h14", key: "11awu3" }],
        ]),
        dV = (0, h.A)("Cuboid", [
          [
            "path",
            {
              d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
              key: "1u2ovd",
            },
          ],
          ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }],
          ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }],
        ]),
        dL = (0, h.A)("CupSoda", [
          [
            "path",
            {
              d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
              key: "8166m8",
            },
          ],
          ["path", { d: "M5 8h14", key: "pcz4l3" }],
          [
            "path",
            {
              d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
              key: "yjz344",
            },
          ],
          ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }],
        ]),
        dP = (0, h.A)("Currency", [
          ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
          ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }],
          ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }],
          ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }],
          ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }],
        ]),
        dR = (0, h.A)("Cylinder", [
          ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
          ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }],
        ]),
        dD = (0, h.A)("Dam", [
          [
            "path",
            {
              d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
              key: "157kva",
            },
          ],
          [
            "path",
            {
              d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
              key: "d7q6m6",
            },
          ],
          ["path", { d: "M2 10h4", key: "l0bgd4" }],
          ["path", { d: "M2 14h4", key: "1gsvsf" }],
          ["path", { d: "M2 18h4", key: "1bu2t1" }],
          ["path", { d: "M2 6h4", key: "aawbzj" }],
          [
            "path",
            {
              d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",
              key: "pr6s65",
            },
          ],
        ]),
        dT = (0, h.A)("DatabaseBackup", [
          ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
          ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
          ["path", { d: "M21 9.3V5", key: "6k6cib" }],
          ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
          ["path", { d: "M12 12v4h4", key: "1bxaet" }],
          [
            "path",
            {
              d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
              key: "1f4ei9",
            },
          ],
        ]),
        dF = (0, h.A)("DatabaseZap", [
          ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
          ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }],
          ["path", { d: "M21 5V8", key: "1marbg" }],
          ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }],
          ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }],
        ]),
        dE = (0, h.A)("Database", [
          ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
          ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
          ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
        ]),
        dB = (0, h.A)("Delete", [
          [
            "path",
            {
              d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
              key: "1yo7s0",
            },
          ],
          ["path", { d: "m12 9 6 6", key: "anjzzh" }],
          ["path", { d: "m18 9-6 6", key: "1fp51s" }],
        ]),
        dO = (0, h.A)("Dessert", [
          ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
          [
            "path",
            {
              d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
              key: "lfo06j",
            },
          ],
          ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0", key: "12xarc" }],
        ]),
        dZ = (0, h.A)("Diameter", [
          ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
          ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
          ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }],
          ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }],
          ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }],
        ]),
        dI = (0, h.A)("DiamondMinus", [
          [
            "path",
            {
              d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
              key: "1ey20j",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
        ]),
        dN = (0, h.A)("DiamondPercent", [
          [
            "path",
            {
              d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
              key: "1tpxz2",
            },
          ],
          ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }],
          ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
          ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }],
        ]),
        dU = (0, h.A)("DiamondPlus", [
          ["path", { d: "M12 8v8", key: "napkw2" }],
          [
            "path",
            {
              d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
              key: "1ey20j",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
        ]),
        dG = (0, h.A)("Diamond", [
          [
            "path",
            {
              d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
              key: "1f1r0c",
            },
          ],
        ]),
        dW = (0, h.A)("Dice1", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
        ]),
        d_ = (0, h.A)("Dice2", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "M15 9h.01", key: "x1ddxp" }],
          ["path", { d: "M9 15h.01", key: "fzyn71" }],
        ]),
        dX = (0, h.A)("Dice3", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "M16 8h.01", key: "cr5u4v" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M8 16h.01", key: "18s6g9" }],
        ]),
        dK = (0, h.A)("Dice4", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "M16 8h.01", key: "cr5u4v" }],
          ["path", { d: "M8 8h.01", key: "1e4136" }],
          ["path", { d: "M8 16h.01", key: "18s6g9" }],
          ["path", { d: "M16 16h.01", key: "1f9h7w" }],
        ]),
        dY = (0, h.A)("Dice5", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "M16 8h.01", key: "cr5u4v" }],
          ["path", { d: "M8 8h.01", key: "1e4136" }],
          ["path", { d: "M8 16h.01", key: "18s6g9" }],
          ["path", { d: "M16 16h.01", key: "1f9h7w" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
        ]),
        dJ = (0, h.A)("Dice6", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "M16 8h.01", key: "cr5u4v" }],
          ["path", { d: "M16 12h.01", key: "1l6xoz" }],
          ["path", { d: "M16 16h.01", key: "1f9h7w" }],
          ["path", { d: "M8 8h.01", key: "1e4136" }],
          ["path", { d: "M8 12h.01", key: "czm47f" }],
          ["path", { d: "M8 16h.01", key: "18s6g9" }],
        ]),
        dQ = (0, h.A)("Dices", [
          [
            "rect",
            {
              width: "12",
              height: "12",
              x: "2",
              y: "10",
              rx: "2",
              ry: "2",
              key: "6agr2n",
            },
          ],
          [
            "path",
            {
              d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
              key: "1o487t",
            },
          ],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          ["path", { d: "M10 14h.01", key: "ssrbsk" }],
          ["path", { d: "M15 6h.01", key: "cblpky" }],
          ["path", { d: "M18 9h.01", key: "2061c0" }],
        ]),
        d$ = (0, h.A)("Diff", [
          ["path", { d: "M12 3v14", key: "7cf3v8" }],
          ["path", { d: "M5 10h14", key: "elsbfy" }],
          ["path", { d: "M5 21h14", key: "11awu3" }],
        ]),
        d1 = (0, h.A)("Disc2", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
        ]),
        d2 = (0, h.A)("Disc3", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
          ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }],
        ]),
        d0 = (0, h.A)("DiscAlbum", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
        ]),
        d4 = (0, h.A)("Disc", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ]),
        d5 = (0, h.A)("Divide", [
          ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
          ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
          ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }],
        ]),
        d3 = (0, h.A)("DnaOff", [
          [
            "path",
            { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8", key: "1bivrr" },
          ],
          ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
          ["path", { d: "M2 15c3.333-3 6.667-3 10-3", key: "nxix30" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
          [
            "path",
            { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1", key: "18cutr" },
          ],
          ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
          ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
          ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
          [
            "path",
            { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16", key: "rlvei3" },
          ],
        ]),
        d6 = (0, h.A)("Dna", [
          ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
          ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
          [
            "path",
            { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" },
          ],
          ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
          ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
          ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
          ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
          ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
          ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
          ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
          [
            "path",
            { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" },
          ],
        ]),
        d8 = (0, h.A)("Dock", [
          ["path", { d: "M2 8h20", key: "d11cs7" }],
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["path", { d: "M6 16h12", key: "u522kt" }],
        ]),
        d7 = (0, h.A)("Dog", [
          ["path", { d: "M11.25 16.25h1.5L12 17z", key: "w7jh35" }],
          ["path", { d: "M16 14v.5", key: "1lajdz" }],
          [
            "path",
            {
              d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
              key: "u7s9ue",
            },
          ],
          ["path", { d: "M8 14v.5", key: "1nzgdb" }],
          [
            "path",
            {
              d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
              key: "v8hric",
            },
          ],
        ]),
        d9 = (0, h.A)("DollarSign", [
          ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
          [
            "path",
            {
              d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
              key: "1b0p4s",
            },
          ],
        ]),
        pe = (0, h.A)("Donut", [
          [
            "path",
            {
              d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
              key: "19sr3x",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]),
        pa = (0, h.A)("DoorClosed", [
          [
            "path",
            { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" },
          ],
          ["path", { d: "M2 20h20", key: "owomy5" }],
          ["path", { d: "M14 12v.01", key: "xfcn54" }],
        ]),
        pt = (0, h.A)("DoorOpen", [
          ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
          ["path", { d: "M2 20h3", key: "1gaodv" }],
          ["path", { d: "M13 20h9", key: "s90cdi" }],
          ["path", { d: "M10 12v.01", key: "vx6srw" }],
          [
            "path",
            {
              d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
              key: "199qr4",
            },
          ],
        ])
      var ph = t(1946)
      let py = (0, h.A)("Download", [
          [
            "path",
            { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
          ],
          ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
          ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
        ]),
        pr = (0, h.A)("DraftingCompass", [
          ["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }],
          ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0", key: "ppmlo4" }],
          ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }],
          ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }],
          ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }],
        ]),
        pd = (0, h.A)("Drama", [
          ["path", { d: "M10 11h.01", key: "d2at3l" }],
          ["path", { d: "M14 6h.01", key: "k028ub" }],
          ["path", { d: "M18 6h.01", key: "1v4wsw" }],
          ["path", { d: "M6.5 13.1h.01", key: "1748ia" }],
          [
            "path",
            {
              d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",
              key: "172yzv",
            },
          ],
          ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }],
          [
            "path",
            {
              d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
              key: "rqjl8i",
            },
          ],
          ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }],
        ]),
        pp = (0, h.A)("Dribbble", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" },
          ],
          [
            "path",
            { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" },
          ],
          ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }],
        ]),
        pk = (0, h.A)("Drill", [
          [
            "path",
            {
              d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",
              key: "b6nnkj",
            },
          ],
          ["path", { d: "M18 6h4", key: "66u95g" }],
          [
            "path",
            { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3", key: "105ega" },
          ],
          ["path", { d: "m5 10-2 8", key: "xt2lic" }],
          ["path", { d: "M12 10v3c0 .6-.4 1-1 1H8", key: "mwpjnk" }],
          ["path", { d: "m7 18 2-8", key: "1bzku2" }],
          [
            "path",
            {
              d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",
              key: "117add",
            },
          ],
        ]),
        pl = (0, h.A)("Droplet", [
          [
            "path",
            {
              d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
              key: "c7niix",
            },
          ],
        ]),
        pi = (0, h.A)("Droplets", [
          [
            "path",
            {
              d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
              key: "1ptgy4",
            },
          ],
          [
            "path",
            {
              d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
              key: "1sl1rz",
            },
          ],
        ]),
        pn = (0, h.A)("Drum", [
          ["path", { d: "m2 2 8 8", key: "1v6059" }],
          ["path", { d: "m22 2-8 8", key: "173r8a" }],
          ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }],
          ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }],
          ["path", { d: "M12 14v8", key: "1tn2tj" }],
          ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }],
          ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }],
        ]),
        pc = (0, h.A)("Drumstick", [
          [
            "path",
            {
              d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",
              key: "1dtqwm",
            },
          ],
          [
            "path",
            {
              d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",
              key: "1oq1fw",
            },
          ],
        ]),
        po = (0, h.A)("Dumbbell", [
          ["path", { d: "M14.4 14.4 9.6 9.6", key: "ic80wn" }],
          [
            "path",
            {
              d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",
              key: "nnl7wr",
            },
          ],
          ["path", { d: "m21.5 21.5-1.4-1.4", key: "1f1ice" }],
          ["path", { d: "M3.9 3.9 2.5 2.5", key: "1evmna" }],
          [
            "path",
            {
              d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",
              key: "yhosts",
            },
          ],
        ]),
        pM = (0, h.A)("EarOff", [
          [
            "path",
            {
              d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",
              key: "1qngmn",
            },
          ],
          ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }],
          [
            "path",
            {
              d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",
              key: "g10hsz",
            },
          ],
          [
            "path",
            {
              d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",
              key: "ygzou7",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        ps = (0, h.A)("Ear", [
          [
            "path",
            {
              d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
              key: "1dfaln",
            },
          ],
          [
            "path",
            { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" },
          ],
        ]),
        pu = (0, h.A)("EarthLock", [
          ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3", key: "w732o8" }],
          [
            "path",
            {
              d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
              key: "f02343",
            },
          ],
          ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
          ["path", { d: "M12 2a10 10 0 1 0 9.54 13", key: "zjsr6q" }],
          ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
          [
            "rect",
            {
              width: "8",
              height: "5",
              x: "14",
              y: "6",
              rx: "1",
              key: "1fmf51",
            },
          ],
        ]),
        pv = (0, h.A)("Earth", [
          ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
          [
            "path",
            {
              d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
              key: "1tzkfa",
            },
          ],
          [
            "path",
            {
              d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
              key: "14pb5j",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        pm = (0, h.A)("Eclipse", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 2a7 7 0 1 0 10 10", key: "1yuj32" }],
        ]),
        px = (0, h.A)("EggFried", [
          ["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }],
          [
            "path",
            {
              d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
              key: "165ef9",
            },
          ],
        ]),
        pf = (0, h.A)("EggOff", [
          [
            "path",
            {
              d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",
              key: "6et380",
            },
          ],
          [
            "path",
            {
              d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",
              key: "gcdc3f",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        pg = (0, h.A)("Egg", [
          [
            "path",
            {
              d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
              key: "1c39pg",
            },
          ],
        ]),
        pA = (0, h.A)("EllipsisVertical", [
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
          ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
        ]),
        pw = (0, h.A)("Ellipsis", [
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
          ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
        ]),
        pb = (0, h.A)("EqualNot", [
          ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
          ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
          ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
        ]),
        pC = (0, h.A)("Equal", [
          ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
          ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
        ]),
        pq = (0, h.A)("Eraser", [
          [
            "path",
            {
              d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
              key: "182aya",
            },
          ],
          ["path", { d: "M22 21H7", key: "t4ddhn" }],
          ["path", { d: "m5 11 9 9", key: "1mo9qw" }],
        ]),
        pz = (0, h.A)("EthernetPort", [
          [
            "path",
            {
              d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",
              key: "rbahqx",
            },
          ],
          ["path", { d: "M6 8v1", key: "1636ez" }],
          ["path", { d: "M10 8v1", key: "1talb4" }],
          ["path", { d: "M14 8v1", key: "1rsfgr" }],
          ["path", { d: "M18 8v1", key: "gnkwox" }],
        ]),
        pj = (0, h.A)("Euro", [
          ["path", { d: "M4 10h12", key: "1y6xl8" }],
          ["path", { d: "M4 14h9", key: "1loblj" }],
          [
            "path",
            {
              d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
              key: "1j6lzo",
            },
          ],
        ]),
        pH = (0, h.A)("Expand", [
          ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
          ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
          ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
          ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }],
        ]),
        pS = (0, h.A)("ExternalLink", [
          ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
          ["path", { d: "M10 14 21 3", key: "gplh6r" }],
          [
            "path",
            {
              d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
              key: "a6xqqp",
            },
          ],
        ]),
        pV = (0, h.A)("EyeOff", [
          [
            "path",
            {
              d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
              key: "ct8e1f",
            },
          ],
          [
            "path",
            { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" },
          ],
          [
            "path",
            {
              d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
              key: "13bj9a",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        pL = (0, h.A)("Eye", [
          [
            "path",
            {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
              key: "1nclc0",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]),
        pP = (0, h.A)("Facebook", [
          [
            "path",
            {
              d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              key: "1jg4f8",
            },
          ],
        ]),
        pR = (0, h.A)("Factory", [
          [
            "path",
            {
              d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "159hny",
            },
          ],
          ["path", { d: "M17 18h1", key: "uldtlt" }],
          ["path", { d: "M12 18h1", key: "s9uhes" }],
          ["path", { d: "M7 18h1", key: "1neino" }],
        ]),
        pD = (0, h.A)("Fan", [
          [
            "path",
            {
              d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
              key: "484a7f",
            },
          ],
          ["path", { d: "M12 12v.01", key: "u5ubse" }],
        ]),
        pT = (0, h.A)("FastForward", [
          ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
          ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }],
        ]),
        pF = (0, h.A)("Feather", [
          [
            "path",
            {
              d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",
              key: "18jl4k",
            },
          ],
          ["path", { d: "M16 8 2 22", key: "vp34q" }],
          ["path", { d: "M17.5 15H9", key: "1oz8nu" }],
        ]),
        pE = (0, h.A)("Fence", [
          [
            "path",
            { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "1n2rgs" },
          ],
          ["path", { d: "M6 8h4", key: "utf9t1" }],
          ["path", { d: "M6 18h4", key: "12yh4b" }],
          [
            "path",
            {
              d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
              key: "3ha7mj",
            },
          ],
          ["path", { d: "M14 8h4", key: "1r8wg2" }],
          ["path", { d: "M14 18h4", key: "1t3kbu" }],
          [
            "path",
            {
              d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
              key: "dfd4e2",
            },
          ],
        ]),
        pB = (0, h.A)("FerrisWheel", [
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
          ["path", { d: "M12 2v4", key: "3427ic" }],
          ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }],
          ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }],
          ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }],
          ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }],
          ["path", { d: "m9 22 3-8 3 8", key: "wees03" }],
          ["path", { d: "M8 22h8", key: "rmew8v" }],
          ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }],
        ]),
        pO = (0, h.A)("Figma", [
          [
            "path",
            {
              d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
              key: "1340ok",
            },
          ],
          ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
          [
            "path",
            {
              d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
              key: "1oz8n2",
            },
          ],
          [
            "path",
            {
              d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
              key: "1ff65i",
            },
          ],
          [
            "path",
            {
              d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
              key: "pdip6e",
            },
          ],
        ]),
        pZ = (0, h.A)("FileArchive", [
          ["path", { d: "M10 12v-1", key: "v7bkov" }],
          ["path", { d: "M10 18v-2", key: "1cjy8d" }],
          ["path", { d: "M10 7V6", key: "dljcrl" }],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",
              key: "gkbcor",
            },
          ],
          ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }],
        ]),
        pI = (0, h.A)("FileAudio2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",
              key: "17k7jt",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["circle", { cx: "3", cy: "17", r: "1", key: "vo6nti" }],
          ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3", key: "1ggdre" }],
          ["circle", { cx: "9", cy: "17", r: "1", key: "bc1fq4" }],
        ]),
        pN = (0, h.A)("FileAudio", [
          [
            "path",
            {
              d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
              key: "rslqgf",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",
              key: "9f7x3i",
            },
          ],
        ]),
        pU = (0, h.A)("FileAxis3d", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m8 18 4-4", key: "12zab0" }],
          ["path", { d: "M8 10v8h8", key: "tlaukw" }],
        ]),
        pG = (0, h.A)("FileBadge2", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5", key: "14xlky" }],
        ]),
        pW = (0, h.A)("FileBadge", [
          [
            "path",
            {
              d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
              key: "12ixgl",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "u0c8gj" }],
          ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5", key: "5gm2nr" }],
        ]),
        p_ = (0, h.A)("FileBox", [
          [
            "path",
            {
              d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "16lz6z",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",
              key: "99pj1s",
            },
          ],
          ["path", { d: "M7 17v5", key: "1yj1jh" }],
          ["path", { d: "M11.7 14.2 7 17l-4.7-2.8", key: "1yk8tc" }],
        ]),
        pX = (0, h.A)("FileChartColumnIncreasing", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M8 18v-2", key: "qcmpov" }],
          ["path", { d: "M12 18v-4", key: "q1q25u" }],
          ["path", { d: "M16 18v-6", key: "15y0np" }],
        ]),
        pK = (0, h.A)("FileChartColumn", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M8 18v-1", key: "zg0ygc" }],
          ["path", { d: "M12 18v-6", key: "17g6i2" }],
          ["path", { d: "M16 18v-3", key: "j5jt4h" }],
        ]),
        pY = (0, h.A)("FileChartLine", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }],
        ]),
        pJ = (0, h.A)("FileChartPie", [
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",
              key: "13ddob",
            },
          ],
          ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475", key: "s6vs5t" }],
          [
            "path",
            {
              d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",
              key: "1dl6s6",
            },
          ],
        ]),
        pQ = (0, h.A)("FileCheck2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }],
        ]),
        p$ = (0, h.A)("FileCheck", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }],
        ]),
        p1 = (0, h.A)("FileClock", [
          [
            "path",
            {
              d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
              key: "37hlfg",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }],
          ["path", { d: "M9.5 17.5 8 16.25V14", key: "1o80t2" }],
        ]),
        p2 = (0, h.A)("FileCode2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }],
          ["path", { d: "m9 18 3-3-3-3", key: "112psh" }],
        ]),
        p0 = (0, h.A)("FileCode", [
          ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
          ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
              key: "1mlx9k",
            },
          ],
        ]),
        p4 = (0, h.A)("FileCog", [
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m3.2 12.9-.9-.4", key: "1i3dj5" }],
          ["path", { d: "m3.2 15.1-.9.4", key: "1fvgj0" }],
          [
            "path",
            {
              d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",
              key: "1yo3oz",
            },
          ],
          ["path", { d: "m4.9 11.2-.4-.9", key: "otmhb9" }],
          ["path", { d: "m4.9 16.8-.4.9", key: "1b8z07" }],
          ["path", { d: "m7.5 10.3-.4.9", key: "11k65u" }],
          ["path", { d: "m7.5 17.7-.4-.9", key: "431x55" }],
          ["path", { d: "m9.7 12.5-.9.4", key: "87sjan" }],
          ["path", { d: "m9.7 15.5-.9-.4", key: "khqm91" }],
          ["circle", { cx: "6", cy: "14", r: "3", key: "a1xfv6" }],
        ]),
        p5 = (0, h.A)("FileDiff", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
          ["path", { d: "M12 13V7", key: "h0r20n" }],
          ["path", { d: "M9 17h6", key: "r8uit2" }],
        ]),
        p3 = (0, h.A)("FileDigit", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "rect",
            {
              width: "4",
              height: "6",
              x: "2",
              y: "12",
              rx: "2",
              key: "jm304g",
            },
          ],
          ["path", { d: "M10 12h2v6", key: "12zw74" }],
          ["path", { d: "M10 18h4", key: "1ulq68" }],
        ]),
        p6 = (0, h.A)("FileDown", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M12 18v-6", key: "17g6i2" }],
          ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
        ]),
        p8 = (0, h.A)("FileHeart", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",
              key: "17k7jt",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
              key: "1c1fso",
            },
          ],
        ]),
        p7 = (0, h.A)("FileImage", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
          [
            "path",
            {
              d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",
              key: "wt3hpn",
            },
          ],
        ]),
        p9 = (0, h.A)("FileInput", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M2 15h10", key: "jfw4w8" }],
          ["path", { d: "m9 18 3-3-3-3", key: "112psh" }],
        ]),
        ke = (0, h.A)("FileJson2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
              key: "fq0c9t",
            },
          ],
          [
            "path",
            {
              d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
              key: "4gibmv",
            },
          ],
        ]),
        ka = (0, h.A)("FileJson", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
              key: "1oajmo",
            },
          ],
          [
            "path",
            {
              d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
              key: "mpwhp6",
            },
          ],
        ]),
        kt = (0, h.A)("FileKey2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",
              key: "rc0qvx",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
          ["path", { d: "m10 10-4.5 4.5", key: "7fwrp6" }],
          ["path", { d: "m9 11 1 1", key: "wa6s5q" }],
        ]),
        kh = (0, h.A)("FileKey", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["circle", { cx: "10", cy: "16", r: "2", key: "4ckbqe" }],
          ["path", { d: "m16 10-4.5 4.5", key: "7p3ebg" }],
          ["path", { d: "m15 11 1 1", key: "1bsyx3" }],
        ]),
        ky = (0, h.A)("FileLock2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",
              key: "jmtmu2",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "rect",
            {
              width: "8",
              height: "5",
              x: "2",
              y: "13",
              rx: "1",
              key: "10y5wo",
            },
          ],
          ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2", key: "1pdxzg" }],
        ]),
        kr = (0, h.A)("FileLock", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          [
            "rect",
            {
              width: "8",
              height: "6",
              x: "8",
              y: "12",
              rx: "1",
              key: "3yr8at",
            },
          ],
          ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2", key: "j4i8d" }],
        ]),
        kd = (0, h.A)("FileMinus2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M3 15h6", key: "4e2qda" }],
        ]),
        kp = (0, h.A)("FileMinus", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M9 15h6", key: "cctwl0" }],
        ]),
        kk = (0, h.A)("FileMusic", [
          ["circle", { cx: "14", cy: "16", r: "2", key: "1bzzi3" }],
          ["circle", { cx: "6", cy: "18", r: "2", key: "1fncim" }],
          [
            "path",
            {
              d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",
              key: "skc018",
            },
          ],
          ["path", { d: "M8 18v-7.7L16 9v7", key: "1oie6o" }],
        ]),
        kl = (0, h.A)("FileOutput", [
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2", key: "1vk7w2" }],
          [
            "path",
            {
              d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",
              key: "1jink5",
            },
          ],
          ["path", { d: "m5 11-3 3", key: "1dgrs4" }],
          ["path", { d: "m5 17-3-3h10", key: "1mvvaf" }],
        ]),
        ki = (0, h.A)("FilePenLine", [
          [
            "path",
            {
              d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",
              key: "142zxg",
            },
          ],
          [
            "path",
            {
              d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "2t3380",
            },
          ],
          ["path", { d: "M8 18h1", key: "13wk12" }],
        ]),
        kn = (0, h.A)("FilePen", [
          [
            "path",
            {
              d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",
              key: "1couwa",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "1y4qbx",
            },
          ],
        ]),
        kc = (0, h.A)("FilePlus2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M3 15h6", key: "4e2qda" }],
          ["path", { d: "M6 12v6", key: "1u72j0" }],
        ]),
        ko = (0, h.A)("FilePlus", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M9 15h6", key: "cctwl0" }],
          ["path", { d: "M12 18v-6", key: "17g6i2" }],
        ]),
        kM = (0, h.A)("FileQuestion", [
          ["path", { d: "M12 17h.01", key: "p32p05" }],
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
              key: "1mlx9k",
            },
          ],
          ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
        ]),
        ks = (0, h.A)("FileScan", [
          [
            "path",
            {
              d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",
              key: "1rdf37",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }],
          ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }],
          ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }],
          ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }],
        ]),
        ku = (0, h.A)("FileSearch2", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
          ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }],
        ]),
        kv = (0, h.A)("FileSearch", [
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
              key: "ms7g94",
            },
          ],
          ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }],
          ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }],
        ]),
        km = (0, h.A)("FileSliders", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "M10 11v2", key: "1s651w" }],
          ["path", { d: "M8 17h8", key: "wh5c61" }],
          ["path", { d: "M14 16v2", key: "12fp5e" }],
        ]),
        kx = (0, h.A)("FileSpreadsheet", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M8 13h2", key: "yr2amv" }],
          ["path", { d: "M14 13h2", key: "un5t4a" }],
          ["path", { d: "M8 17h2", key: "2yhykz" }],
          ["path", { d: "M14 17h2", key: "10kma7" }],
        ]),
        kf = (0, h.A)("FileStack", [
          ["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2", key: "9rb54x" }],
          [
            "path",
            {
              d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",
              key: "1059l0",
            },
          ],
          [
            "path",
            { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" },
          ],
          [
            "path",
            { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" },
          ],
        ]),
        kg = (0, h.A)("FileSymlink", [
          ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
              key: "50q2rw",
            },
          ],
        ]),
        kA = (0, h.A)("FileTerminal", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
          ["path", { d: "M12 18h4", key: "1wd2n7" }],
        ]),
        kw = (0, h.A)("FileText", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M10 9H8", key: "b1mrlr" }],
          ["path", { d: "M16 13H8", key: "t4e002" }],
          ["path", { d: "M16 17H8", key: "z1uh3a" }],
        ]),
        kb = (0, h.A)("FileType2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M2 13v-1h6v1", key: "1dh9dg" }],
          ["path", { d: "M5 12v6", key: "150t9c" }],
          ["path", { d: "M4 18h2", key: "1xrofg" }],
        ]),
        kC = (0, h.A)("FileType", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M9 13v-1h6v1", key: "1bb014" }],
          ["path", { d: "M12 12v6", key: "3ahymv" }],
          ["path", { d: "M11 18h2", key: "12mj7e" }],
        ]),
        kq = (0, h.A)("FileUp", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M12 12v6", key: "3ahymv" }],
          ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }],
        ]),
        kz = (0, h.A)("FileUser", [
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M15 18a3 3 0 1 0-6 0", key: "16awa0" }],
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
              key: "1mlx9k",
            },
          ],
          ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
        ]),
        kj = (0, h.A)("FileVideo2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "rect",
            {
              width: "8",
              height: "6",
              x: "2",
              y: "12",
              rx: "1",
              key: "1a6c1e",
            },
          ],
          ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5", key: "t7cp39" }],
        ]),
        kH = (0, h.A)("FileVideo", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }],
        ]),
        kS = (0, h.A)("FileVolume2", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "M8 15h.01", key: "a7atzg" }],
          ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3", key: "1fccat" }],
          ["path", { d: "M15 12a5 5 0 0 1 0 6", key: "ps46cm" }],
        ]),
        kV = (0, h.A)("FileVolume", [
          ["path", { d: "M11 11a5 5 0 0 1 0 6", key: "193qb2" }],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          [
            "path",
            {
              d: "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",
              key: "ifyjnl",
            },
          ],
          [
            "path",
            {
              d: "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",
              key: "mk8rxu",
            },
          ],
        ]),
        kL = (0, h.A)("FileWarning", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M12 9v4", key: "juzpu7" }],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
        ]),
        kP = (0, h.A)("FileX2", [
          [
            "path",
            {
              d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
              key: "1pf5j1",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m8 12.5-5 5", key: "b853mi" }],
          ["path", { d: "m3 12.5 5 5", key: "1qls4r" }],
        ]),
        kR = (0, h.A)("FileX", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
          ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }],
          ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }],
        ]),
        kD = (0, h.A)("File", [
          [
            "path",
            {
              d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
              key: "1rqfz7",
            },
          ],
          ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ]),
        kT = (0, h.A)("Files", [
          ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
          [
            "path",
            {
              d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
              key: "18t6ie",
            },
          ],
          [
            "path",
            { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" },
          ],
        ]),
        kF = (0, h.A)("Film", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7 3v18", key: "bbkbws" }],
          ["path", { d: "M3 7.5h4", key: "zfgn84" }],
          ["path", { d: "M3 12h18", key: "1i2n21" }],
          ["path", { d: "M3 16.5h4", key: "1230mu" }],
          ["path", { d: "M17 3v18", key: "in4fa5" }],
          ["path", { d: "M17 7.5h4", key: "myr1c1" }],
          ["path", { d: "M17 16.5h4", key: "go4c1d" }],
        ]),
        kE = (0, h.A)("FilterX", [
          [
            "path",
            { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055", key: "1fi1da" },
          ],
          ["path", { d: "m22 3-5 5", key: "12jva0" }],
          ["path", { d: "m17 3 5 5", key: "k36vhe" }],
        ]),
        kB = (0, h.A)("Filter", [
          [
            "polygon",
            {
              points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
              key: "1yg77f",
            },
          ],
        ]),
        kO = (0, h.A)("Fingerprint", [
          [
            "path",
            { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" },
          ],
          ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
          ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
          ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
          ["path", { d: "M2 16h.01", key: "1gqxmh" }],
          ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
          [
            "path",
            { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" },
          ],
          ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
          ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }],
        ]),
        kZ = (0, h.A)("FireExtinguisher", [
          [
            "path",
            { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5", key: "sqyvz" },
          ],
          ["path", { d: "M9 18h8", key: "i7pszb" }],
          ["path", { d: "M18 3h-3", key: "7idoqj" }],
          ["path", { d: "M11 3a6 6 0 0 0-6 6v11", key: "1v5je3" }],
          ["path", { d: "M5 13h4", key: "svpcxo" }],
          [
            "path",
            {
              d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",
              key: "vsjego",
            },
          ],
        ]),
        kI = (0, h.A)("FishOff", [
          [
            "path",
            {
              d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
              key: "1j1hse",
            },
          ],
          [
            "path",
            {
              d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
              key: "1q46z8",
            },
          ],
          [
            "path",
            {
              d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
              key: "1407gh",
            },
          ],
        ]),
        kN = (0, h.A)("FishSymbol", [
          ["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }],
        ]),
        kU = (0, h.A)("Fish", [
          [
            "path",
            {
              d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
              key: "15baut",
            },
          ],
          ["path", { d: "M18 12v.5", key: "18hhni" }],
          ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
          [
            "path",
            {
              d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
              key: "l9di03",
            },
          ],
          [
            "path",
            {
              d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
              key: "1kjonw",
            },
          ],
          [
            "path",
            {
              d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",
              key: "1zlm23",
            },
          ],
        ]),
        kG = (0, h.A)("FlagOff", [
          ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11", key: "9rwyz9" }],
          ["path", { d: "M4 22V4", key: "1plyxx" }],
          ["path", { d: "M4 15s1-1 4-1 5 2 8 2", key: "1myooe" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        kW = (0, h.A)("FlagTriangleLeft", [
          ["path", { d: "M17 22V2L7 7l10 5", key: "1rmf0r" }],
        ]),
        k_ = (0, h.A)("FlagTriangleRight", [
          ["path", { d: "M7 22V2l10 5-10 5", key: "17n18y" }],
        ]),
        kX = (0, h.A)("Flag", [
          [
            "path",
            {
              d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
              key: "i9b6wo",
            },
          ],
          ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
        ]),
        kK = (0, h.A)("FlameKindling", [
          [
            "path",
            {
              d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
              key: "1ir223",
            },
          ],
          ["path", { d: "m5 22 14-4", key: "1brv4h" }],
          ["path", { d: "m5 18 14 4", key: "lgyyje" }],
        ]),
        kY = (0, h.A)("Flame", [
          [
            "path",
            {
              d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
              key: "96xj49",
            },
          ],
        ]),
        kJ = (0, h.A)("FlashlightOff", [
          [
            "path",
            {
              d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",
              key: "1r120k",
            },
          ],
          ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1", key: "dz1920" }],
          ["line", { x1: "11", x2: "18", y1: "6", y2: "6", key: "bi1vpe" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        kQ = (0, h.A)("Flashlight", [
          [
            "path",
            {
              d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
              key: "1orkel",
            },
          ],
          ["line", { x1: "6", x2: "18", y1: "6", y2: "6", key: "1z11jq" }],
          ["line", { x1: "12", x2: "12", y1: "12", y2: "12", key: "1f4yc1" }],
        ]),
        k$ = (0, h.A)("FlaskConicalOff", [
          [
            "path",
            {
              d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",
              key: "59ek9y",
            },
          ],
          ["path", { d: "M10 2v2.343", key: "15t272" }],
          ["path", { d: "M14 2v6.343", key: "sxr80q" }],
          ["path", { d: "M8.5 2h7", key: "csnxdl" }],
          ["path", { d: "M7 16h9", key: "t5njau" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        k1 = (0, h.A)("FlaskConical", [
          [
            "path",
            {
              d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
              key: "pzvekw",
            },
          ],
          ["path", { d: "M8.5 2h7", key: "csnxdl" }],
          ["path", { d: "M7 16h10", key: "wp8him" }],
        ]),
        k2 = (0, h.A)("FlaskRound", [
          ["path", { d: "M10 2v7.31", key: "5d1hyh" }],
          ["path", { d: "M14 9.3V1.99", key: "14k4l0" }],
          ["path", { d: "M8.5 2h7", key: "csnxdl" }],
          ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0", key: "1r8fvy" }],
          ["path", { d: "M5.52 16h12.96", key: "46hh1i" }],
        ]),
        k0 = (0, h.A)("FlipHorizontal2", [
          ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
          ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
          ["path", { d: "M12 20v2", key: "1lh1kg" }],
          ["path", { d: "M12 14v2", key: "8jcxud" }],
          ["path", { d: "M12 8v2", key: "1woqiv" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
        ]),
        k4 = (0, h.A)("FlipHorizontal", [
          [
            "path",
            { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" },
          ],
          [
            "path",
            { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" },
          ],
          ["path", { d: "M12 20v2", key: "1lh1kg" }],
          ["path", { d: "M12 14v2", key: "8jcxud" }],
          ["path", { d: "M12 8v2", key: "1woqiv" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
        ]),
        k5 = (0, h.A)("FlipVertical2", [
          ["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }],
          ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }],
          ["path", { d: "M4 12H2", key: "rhcxmi" }],
          ["path", { d: "M10 12H8", key: "s88cx1" }],
          ["path", { d: "M16 12h-2", key: "10asgb" }],
          ["path", { d: "M22 12h-2", key: "14jgyd" }],
        ]),
        k3 = (0, h.A)("FlipVertical", [
          [
            "path",
            { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" },
          ],
          [
            "path",
            { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" },
          ],
          ["path", { d: "M4 12H2", key: "rhcxmi" }],
          ["path", { d: "M10 12H8", key: "s88cx1" }],
          ["path", { d: "M16 12h-2", key: "10asgb" }],
          ["path", { d: "M22 12h-2", key: "14jgyd" }],
        ]),
        k6 = (0, h.A)("Flower2", [
          [
            "path",
            {
              d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
              key: "3pnvol",
            },
          ],
          ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
          ["path", { d: "M12 10v12", key: "6ubwww" }],
          [
            "path",
            { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" },
          ],
          [
            "path",
            {
              d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
              key: "ufn41s",
            },
          ],
        ]),
        k8 = (0, h.A)("Flower", [
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          [
            "path",
            {
              d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
              key: "14wa3c",
            },
          ],
          ["path", { d: "M12 7.5V9", key: "1oy5b0" }],
          ["path", { d: "M7.5 12H9", key: "eltsq1" }],
          ["path", { d: "M16.5 12H15", key: "vk5kw4" }],
          ["path", { d: "M12 16.5V15", key: "k7eayi" }],
          ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }],
          ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }],
          ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }],
          ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }],
        ]),
        k7 = (0, h.A)("Focus", [
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
        ]),
        k9 = (0, h.A)("FoldHorizontal", [
          ["path", { d: "M2 12h6", key: "1wqiqv" }],
          ["path", { d: "M22 12h-6", key: "1eg9hc" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "M12 8v2", key: "1woqiv" }],
          ["path", { d: "M12 14v2", key: "8jcxud" }],
          ["path", { d: "M12 20v2", key: "1lh1kg" }],
          ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }],
          ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }],
        ]),
        le = (0, h.A)("FoldVertical", [
          ["path", { d: "M12 22v-6", key: "6o8u61" }],
          ["path", { d: "M12 8V2", key: "1wkif3" }],
          ["path", { d: "M4 12H2", key: "rhcxmi" }],
          ["path", { d: "M10 12H8", key: "s88cx1" }],
          ["path", { d: "M16 12h-2", key: "10asgb" }],
          ["path", { d: "M22 12h-2", key: "14jgyd" }],
          ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }],
          ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }],
        ]),
        la = (0, h.A)("FolderArchive", [
          ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
          [
            "path",
            {
              d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
              key: "1jj40k",
            },
          ],
          ["path", { d: "M15 11v-1", key: "cntcp" }],
          ["path", { d: "M15 17v-2", key: "1279jj" }],
        ]),
        lt = (0, h.A)("FolderCheck", [
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }],
        ]),
        lh = (0, h.A)("FolderClock", [
          ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
          [
            "path",
            {
              d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
              key: "1urifu",
            },
          ],
          ["path", { d: "M16 14v2l1 1", key: "xth2jh" }],
        ]),
        ly = (0, h.A)("FolderClosed", [
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "M2 10h20", key: "1ir3d8" }],
        ]),
        lr = (0, h.A)("FolderCode", [
          ["path", { d: "M10 10.5 8 13l2 2.5", key: "m4t9c1" }],
          ["path", { d: "m14 10.5 2 2.5-2 2.5", key: "14w2eb" }],
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",
              key: "1u1bxd",
            },
          ],
        ]),
        ld = (0, h.A)("FolderCog", [
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          [
            "path",
            {
              d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",
              key: "1k8050",
            },
          ],
          ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }],
          ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }],
          ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }],
          ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }],
          ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }],
          ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }],
          ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }],
          ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }],
        ]),
        lp = (0, h.A)("FolderDot", [
          [
            "path",
            {
              d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
              key: "1fr9dc",
            },
          ],
          ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }],
        ]),
        lk = (0, h.A)("FolderDown", [
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "M12 10v6", key: "1bos4e" }],
          ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }],
        ]),
        ll = (0, h.A)("FolderGit2", [
          [
            "path",
            {
              d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
              key: "1w6njk",
            },
          ],
          ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
          ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8", key: "pkpw2h" }],
          ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }],
        ]),
        li = (0, h.A)("FolderGit", [
          ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "M14 13h3", key: "1dgedf" }],
          ["path", { d: "M7 13h3", key: "1pygq7" }],
        ]),
        ln = (0, h.A)("FolderHeart", [
          [
            "path",
            {
              d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",
              key: "6hud8k",
            },
          ],
          [
            "path",
            {
              d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",
              key: "wpff58",
            },
          ],
        ]),
        lc = (0, h.A)("FolderInput", [
          [
            "path",
            {
              d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
              key: "fm4g5t",
            },
          ],
          ["path", { d: "M2 13h10", key: "pgb2dq" }],
          ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }],
        ]),
        lo = (0, h.A)("FolderKanban", [
          [
            "path",
            {
              d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
              key: "1fr9dc",
            },
          ],
          ["path", { d: "M8 10v4", key: "tgpxqk" }],
          ["path", { d: "M12 10v2", key: "hh53o1" }],
          ["path", { d: "M16 10v6", key: "1d6xys" }],
        ]),
        lM = (0, h.A)("FolderKey", [
          ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
          [
            "path",
            {
              d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
              key: "3hgo9p",
            },
          ],
          ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }],
          ["path", { d: "m21 15 1 1", key: "1ejcpy" }],
        ]),
        ls = (0, h.A)("FolderLock", [
          [
            "rect",
            {
              width: "8",
              height: "5",
              x: "14",
              y: "17",
              rx: "1",
              key: "19aais",
            },
          ],
          [
            "path",
            {
              d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
              key: "1w6v7t",
            },
          ],
          ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }],
        ]),
        lu = (0, h.A)("FolderMinus", [
          ["path", { d: "M9 13h6", key: "1uhe8q" }],
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
        ]),
        lv = (0, h.A)("FolderOpenDot", [
          [
            "path",
            {
              d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
              key: "1nmvlm",
            },
          ],
          ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }],
        ]),
        lm = (0, h.A)("FolderOpen", [
          [
            "path",
            {
              d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
              key: "usdka0",
            },
          ],
        ]),
        lx = (0, h.A)("FolderOutput", [
          [
            "path",
            {
              d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",
              key: "1yk7aj",
            },
          ],
          ["path", { d: "M2 13h10", key: "pgb2dq" }],
          ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }],
        ]),
        lf = (0, h.A)("FolderPen", [
          [
            "path",
            {
              d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
              key: "a8xqs0",
            },
          ],
          [
            "path",
            {
              d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "1saktj",
            },
          ],
        ]),
        lg = (0, h.A)("FolderPlus", [
          ["path", { d: "M12 10v6", key: "1bos4e" }],
          ["path", { d: "M9 13h6", key: "1uhe8q" }],
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
        ]),
        lA = (0, h.A)("FolderRoot", [
          [
            "path",
            {
              d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
              key: "1fr9dc",
            },
          ],
          ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
          ["path", { d: "M12 15v5", key: "11xva1" }],
        ]),
        lw = (0, h.A)("FolderSearch2", [
          ["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }],
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }],
        ]),
        lb = (0, h.A)("FolderSearch", [
          [
            "path",
            {
              d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
              key: "1bw5m7",
            },
          ],
          ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }],
          ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
        ]),
        lC = (0, h.A)("FolderSymlink", [
          [
            "path",
            {
              d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
              key: "x1c07l",
            },
          ],
          ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }],
        ]),
        lq = (0, h.A)("FolderSync", [
          [
            "path",
            {
              d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
              key: "1dkoa9",
            },
          ],
          ["path", { d: "M12 10v4h4", key: "1czhmt" }],
          ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "lvuxfi" }],
          ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
          ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "14ync0" }],
        ]),
        lz = (0, h.A)("FolderTree", [
          [
            "path",
            {
              d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
              key: "hod4my",
            },
          ],
          [
            "path",
            {
              d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
              key: "w4yl2u",
            },
          ],
          ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
          ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }],
        ]),
        lj = (0, h.A)("FolderUp", [
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "M12 10v6", key: "1bos4e" }],
          ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }],
        ]),
        lH = (0, h.A)("FolderX", [
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
          ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
          ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }],
        ]),
        lS = (0, h.A)("Folder", [
          [
            "path",
            {
              d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
              key: "1kt360",
            },
          ],
        ]),
        lV = (0, h.A)("Folders", [
          [
            "path",
            {
              d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",
              key: "4u7rpt",
            },
          ],
          ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14", key: "1eicx1" }],
        ]),
        lL = (0, h.A)("Footprints", [
          [
            "path",
            {
              d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
              key: "1dudjm",
            },
          ],
          [
            "path",
            {
              d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
              key: "l2t8xc",
            },
          ],
          ["path", { d: "M16 17h4", key: "1dejxt" }],
          ["path", { d: "M4 13h4", key: "1bwh8b" }],
        ]),
        lP = (0, h.A)("Forklift", [
          ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }],
          ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }],
          ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
          [
            "path",
            {
              d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",
              key: "13bk1p",
            },
          ],
        ]),
        lR = (0, h.A)("Forward", [
          ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
          ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }],
        ]),
        lD = (0, h.A)("Frame", [
          ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
          ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
          ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
          ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
        ]),
        lT = (0, h.A)("Framer", [
          [
            "path",
            { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" },
          ],
        ]),
        lF = (0, h.A)("Frown", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
          ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
          ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
        ]),
        lE = (0, h.A)("Fuel", [
          ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
          ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
          [
            "path",
            { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" },
          ],
          [
            "path",
            {
              d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
              key: "7cu91f",
            },
          ],
        ]),
        lB = (0, h.A)("Fullscreen", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          [
            "rect",
            {
              width: "10",
              height: "8",
              x: "7",
              y: "8",
              rx: "1",
              key: "vys8me",
            },
          ],
        ]),
        lO = (0, h.A)("GalleryHorizontalEnd", [
          ["path", { d: "M2 7v10", key: "a2pl2d" }],
          ["path", { d: "M6 5v14", key: "1kq3d7" }],
          [
            "rect",
            {
              width: "12",
              height: "18",
              x: "10",
              y: "3",
              rx: "2",
              key: "13i7bc",
            },
          ],
        ]),
        lZ = (0, h.A)("GalleryHorizontal", [
          ["path", { d: "M2 3v18", key: "pzttux" }],
          [
            "rect",
            {
              width: "12",
              height: "18",
              x: "6",
              y: "3",
              rx: "2",
              key: "btr8bg",
            },
          ],
          ["path", { d: "M22 3v18", key: "6jf3v" }],
        ]),
        lI = (0, h.A)("GalleryThumbnails", [
          [
            "rect",
            {
              width: "18",
              height: "14",
              x: "3",
              y: "3",
              rx: "2",
              key: "74y24f",
            },
          ],
          ["path", { d: "M4 21h1", key: "16zlid" }],
          ["path", { d: "M9 21h1", key: "15o7lz" }],
          ["path", { d: "M14 21h1", key: "v9vybs" }],
          ["path", { d: "M19 21h1", key: "edywat" }],
        ]),
        lN = (0, h.A)("GalleryVerticalEnd", [
          ["path", { d: "M7 2h10", key: "nczekb" }],
          ["path", { d: "M5 6h14", key: "u2x4p" }],
          [
            "rect",
            {
              width: "18",
              height: "12",
              x: "3",
              y: "10",
              rx: "2",
              key: "l0tzu3",
            },
          ],
        ]),
        lU = (0, h.A)("GalleryVertical", [
          ["path", { d: "M3 2h18", key: "15qxfx" }],
          [
            "rect",
            {
              width: "18",
              height: "12",
              x: "3",
              y: "6",
              rx: "2",
              key: "1439r6",
            },
          ],
          ["path", { d: "M3 22h18", key: "8prr45" }],
        ]),
        lG = (0, h.A)("Gamepad2", [
          ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
          ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
          [
            "line",
            { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" },
          ],
          [
            "line",
            { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" },
          ],
          [
            "path",
            {
              d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
              key: "mfqc10",
            },
          ],
        ]),
        lW = (0, h.A)("Gamepad", [
          ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
          ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
          [
            "line",
            { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" },
          ],
          ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "2",
              key: "9lu3g6",
            },
          ],
        ]),
        l_ = (0, h.A)("Gauge", [
          ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
          ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
        ]),
        lX = (0, h.A)("Gavel", [
          [
            "path",
            { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" },
          ],
          ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
          ["path", { d: "m8 8 6-6", key: "18bi4p" }],
          ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
          ["path", { d: "m21 11-8-8", key: "z4y7zo" }],
        ]),
        lK = (0, h.A)("Gem", [
          ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
          ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
          ["path", { d: "M2 9h20", key: "16fsjt" }],
        ]),
        lY = (0, h.A)("Ghost", [
          ["path", { d: "M9 10h.01", key: "qbtxuw" }],
          ["path", { d: "M15 10h.01", key: "1qmjsl" }],
          [
            "path",
            {
              d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
              key: "uwwb07",
            },
          ],
        ]),
        lJ = (0, h.A)("Gift", [
          [
            "rect",
            { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" },
          ],
          ["path", { d: "M12 8v13", key: "1c76mn" }],
          [
            "path",
            { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" },
          ],
          [
            "path",
            {
              d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
              key: "1ihvrl",
            },
          ],
        ]),
        lQ = (0, h.A)("GitBranchPlus", [
          ["path", { d: "M6 3v12", key: "qpgusn" }],
          ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
          ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
          ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
          ["path", { d: "M18 15v6", key: "9wciyi" }],
          ["path", { d: "M21 18h-6", key: "139f0c" }],
        ]),
        l$ = (0, h.A)("GitBranch", [
          ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
          ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
          ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
          ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
        ]),
        l1 = (0, h.A)("GitCommitHorizontal", [
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
          ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }],
        ]),
        l2 = (0, h.A)("GitCommitVertical", [
          ["path", { d: "M12 3v6", key: "1holv5" }],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["path", { d: "M12 15v6", key: "a9ows0" }],
        ]),
        l0 = (0, h.A)("GitCompareArrows", [
          ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
          ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
          ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
          ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
          ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
          ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }],
        ]),
        l4 = (0, h.A)("GitCompare", [
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
          ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }],
        ]),
        l5 = (0, h.A)("GitFork", [
          ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
          [
            "path",
            { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" },
          ],
          ["path", { d: "M12 12v3", key: "158kv8" }],
        ]),
        l3 = (0, h.A)("GitGraph", [
          ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
          ["path", { d: "M5 9v6", key: "158jrl" }],
          ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }],
          ["path", { d: "M12 3v18", key: "108xh3" }],
          ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
          ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }],
        ]),
        l6 = (0, h.A)("GitMerge", [
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }],
        ]),
        l8 = (0, h.A)("GitPullRequestArrow", [
          ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
          ["path", { d: "M5 9v12", key: "ih889a" }],
          ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
          ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
          ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
        ]),
        l7 = (0, h.A)("GitPullRequestClosed", [
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M6 9v12", key: "1sc30k" }],
          ["path", { d: "m21 3-6 6", key: "16nqsk" }],
          ["path", { d: "m21 9-6-6", key: "9j17rh" }],
          ["path", { d: "M18 11.5V15", key: "65xf6f" }],
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
        ]),
        l9 = (0, h.A)("GitPullRequestCreateArrow", [
          ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
          ["path", { d: "M5 9v12", key: "ih889a" }],
          ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
          ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
          ["path", { d: "M19 15v6", key: "10aioa" }],
          ["path", { d: "M22 18h-6", key: "1d5gi5" }],
        ]),
        ie = (0, h.A)("GitPullRequestCreate", [
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M6 9v12", key: "1sc30k" }],
          ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }],
          ["path", { d: "M18 15v6", key: "9wciyi" }],
          ["path", { d: "M21 18h-6", key: "139f0c" }],
        ]),
        ia = (0, h.A)("GitPullRequestDraft", [
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M18 6V5", key: "1oao2s" }],
          ["path", { d: "M18 11v-1", key: "11c8tz" }],
          ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }],
        ]),
        it = (0, h.A)("GitPullRequest", [
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
          ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }],
        ]),
        ih = (0, h.A)("Github", [
          [
            "path",
            {
              d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
              key: "tonef",
            },
          ],
          ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
        ]),
        iy = (0, h.A)("Gitlab", [
          [
            "path",
            {
              d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
              key: "148pdi",
            },
          ],
        ]),
        ir = (0, h.A)("GlassWater", [
          [
            "path",
            {
              d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",
              key: "48rfw3",
            },
          ],
          ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }],
        ]),
        id = (0, h.A)("Glasses", [
          ["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }],
          ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }],
          ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }],
          ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }],
          ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }],
        ]),
        ip = (0, h.A)("GlobeLock", [
          [
            "path",
            {
              d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
              key: "qkt0x6",
            },
          ],
          ["path", { d: "M2 12h8.5", key: "ovaggd" }],
          ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
          [
            "rect",
            {
              width: "8",
              height: "5",
              x: "14",
              y: "6",
              rx: "1",
              key: "1fmf51",
            },
          ],
        ]),
        ik = (0, h.A)("Globe", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            {
              d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
              key: "13o1zl",
            },
          ],
          ["path", { d: "M2 12h20", key: "9i4pu4" }],
        ]),
        il = (0, h.A)("Goal", [
          ["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }],
          ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29", key: "1c0wjv" }],
          ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02", key: "gb1g7m" }],
        ]),
        ii = (0, h.A)("Grab", [
          [
            "path",
            { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4", key: "edstyy" },
          ],
          [
            "path",
            { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "19wdwo" },
          ],
          [
            "path",
            { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5", key: "1lugqo" },
          ],
          ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1hbeus" }],
          [
            "path",
            {
              d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
              key: "1etffm",
            },
          ],
        ]),
        ic = (0, h.A)("GraduationCap", [
          [
            "path",
            {
              d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
              key: "j76jl0",
            },
          ],
          ["path", { d: "M22 10v6", key: "1lu8f3" }],
          ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
        ]),
        io = (0, h.A)("Grape", [
          ["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }],
          ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }],
          ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }],
          ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }],
          ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }],
          ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }],
          ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }],
          ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }],
          ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }],
        ]),
        iM = (0, h.A)("Grid2x2Check", [
          [
            "path",
            {
              d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
              key: "11za1p",
            },
          ],
          ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
        ]),
        is = (0, h.A)("Grid2x2Plus", [
          [
            "path",
            {
              d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
              key: "11za1p",
            },
          ],
          ["path", { d: "M16 19h6", key: "xwg31i" }],
          ["path", { d: "M19 22v-6", key: "qhmiwi" }],
        ]),
        iu = (0, h.A)("Grid2x2X", [
          [
            "path",
            {
              d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
              key: "11za1p",
            },
          ],
          ["path", { d: "m16 16 5 5", key: "8tpb07" }],
          ["path", { d: "m16 21 5-5", key: "193jll" }],
        ]),
        iv = (0, h.A)("Grid2x2", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 12h18", key: "1i2n21" }],
          ["path", { d: "M12 3v18", key: "108xh3" }],
        ]),
        im = (0, h.A)("Grid3x3", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "M3 15h18", key: "5xshup" }],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
          ["path", { d: "M15 3v18", key: "14nvp0" }],
        ]),
        ix = (0, h.A)("GripHorizontal", [
          ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
          ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
          ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
          ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
          ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
          ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }],
        ]),
        ig = (0, h.A)("GripVertical", [
          ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
          ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
          ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
          ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
          ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
          ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
        ]),
        iA = (0, h.A)("Grip", [
          ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
          ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
          ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
          ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
          ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
          ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
          ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }],
        ]),
        iw = (0, h.A)("Group", [
          ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
          ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
          ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
          ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
          [
            "rect",
            { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "5",
              x: "10",
              y: "12",
              rx: "1",
              key: "1qlmkx",
            },
          ],
        ]),
        ib = (0, h.A)("Guitar", [
          ["path", { d: "m11.9 12.1 4.514-4.514", key: "109xqo" }],
          [
            "path",
            {
              d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",
              key: "txyc8t",
            },
          ],
          ["path", { d: "m6 16 2 2", key: "16qmzd" }],
          [
            "path",
            {
              d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z",
              key: "1u8q3z",
            },
          ],
          [
            "circle",
            {
              cx: "11.5",
              cy: "12.5",
              r: ".5",
              fill: "currentColor",
              key: "16onso",
            },
          ],
        ]),
        iC = (0, h.A)("Ham", [
          [
            "path",
            {
              d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",
              key: "1k1t7q",
            },
          ],
          [
            "path",
            {
              d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",
              key: "153t1g",
            },
          ],
          [
            "path",
            {
              d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",
              key: "gzrt0n",
            },
          ],
          ["path", { d: "m8.5 16.5-1-1", key: "otr954" }],
        ]),
        iq = (0, h.A)("Hammer", [
          [
            "path",
            { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" },
          ],
          ["path", { d: "m18 15 4-4", key: "16gjal" }],
          [
            "path",
            {
              d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
              key: "b7pghm",
            },
          ],
        ]),
        iz = (0, h.A)("HandCoins", [
          [
            "path",
            {
              d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",
              key: "geh8rc",
            },
          ],
          [
            "path",
            {
              d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
              key: "1fto5m",
            },
          ],
          ["path", { d: "m2 16 6 6", key: "1pfhp9" }],
          ["circle", { cx: "16", cy: "9", r: "2.9", key: "1n0dlu" }],
          ["circle", { cx: "6", cy: "5", r: "3", key: "151irh" }],
        ]),
        ij = (0, h.A)("HandHeart", [
          [
            "path",
            {
              d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
              key: "1ifwr1",
            },
          ],
          [
            "path",
            {
              d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
              key: "17abbs",
            },
          ],
          ["path", { d: "m2 15 6 6", key: "10dquu" }],
          [
            "path",
            {
              d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",
              key: "1h3036",
            },
          ],
        ]),
        iH = (0, h.A)("HandHelping", [
          [
            "path",
            {
              d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",
              key: "1j4xps",
            },
          ],
          [
            "path",
            {
              d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
              key: "uospg8",
            },
          ],
          ["path", { d: "m2 13 6 6", key: "16e5sb" }],
        ]),
        iS = (0, h.A)("HandMetal", [
          [
            "path",
            { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4", key: "wc6myp" },
          ],
          ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }],
          ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }],
          [
            "path",
            {
              d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
              key: "t1skq1",
            },
          ],
        ]),
        iV = (0, h.A)("HandPlatter", [
          ["path", { d: "M12 3V2", key: "ar7q03" }],
          ["path", { d: "M5 10a7.1 7.1 0 0 1 14 0", key: "1t9y3n" }],
          ["path", { d: "M4 10h16", key: "img6z1" }],
          ["path", { d: "M2 14h12a2 2 0 1 1 0 4h-2", key: "loyjft" }],
          [
            "path",
            {
              d: "m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",
              key: "1rixiy",
            },
          ],
          ["path", { d: "M5 14v7H2", key: "3mujks" }],
        ]),
        iL = (0, h.A)("Hand", [
          [
            "path",
            { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" },
          ],
          [
            "path",
            { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" },
          ],
          [
            "path",
            { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" },
          ],
          [
            "path",
            {
              d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
              key: "1s1gnw",
            },
          ],
        ]),
        iP = (0, h.A)("Handshake", [
          ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
          [
            "path",
            {
              d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
              key: "9pr0kb",
            },
          ],
          ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
          ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
          ["path", { d: "M3 4h8", key: "1ep09j" }],
        ]),
        iR = (0, h.A)("HardDriveDownload", [
          ["path", { d: "M12 2v8", key: "1q4o3n" }],
          ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "14",
              rx: "2",
              key: "w68u3i",
            },
          ],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          ["path", { d: "M10 18h.01", key: "h775k" }],
        ]),
        iD = (0, h.A)("HardDriveUpload", [
          ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
          ["path", { d: "M12 2v8", key: "1q4o3n" }],
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "14",
              rx: "2",
              key: "w68u3i",
            },
          ],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          ["path", { d: "M10 18h.01", key: "h775k" }],
        ]),
        iT = (0, h.A)("HardDrive", [
          ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
          [
            "path",
            {
              d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
              key: "oot6mr",
            },
          ],
          ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
          [
            "line",
            { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" },
          ],
        ]),
        iF = (0, h.A)("HardHat", [
          [
            "path",
            {
              d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
              key: "1dej2m",
            },
          ],
          [
            "path",
            { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" },
          ],
          ["path", { d: "M4 15v-3a6 6 0 0 1 6-6", key: "9ciidu" }],
          ["path", { d: "M14 6a6 6 0 0 1 6 6v3", key: "1hnv84" }],
        ]),
        iE = (0, h.A)("Hash", [
          ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
          ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
          ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
          ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
        ]),
        iB = (0, h.A)("Haze", [
          ["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }],
          ["path", { d: "M2 13h2", key: "13gyu8" }],
          ["path", { d: "M20 13h2", key: "16rner" }],
          ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }],
          ["path", { d: "M22 17H2", key: "1gtaj3" }],
          ["path", { d: "M22 21H2", key: "1gy6en" }],
          ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }],
          ["path", { d: "M12 5V2.5", key: "1vytko" }],
        ]),
        iO = (0, h.A)("HdmiPort", [
          [
            "path",
            {
              d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
              key: "2128wb",
            },
          ],
          ["path", { d: "M7.5 12h9", key: "1t0ckc" }],
        ]),
        iZ = (0, h.A)("Heading1", [
          ["path", { d: "M4 12h8", key: "17cfdx" }],
          ["path", { d: "M4 18V6", key: "1rz3zl" }],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
          ["path", { d: "m17 12 3-2v8", key: "1hhhft" }],
        ]),
        iI = (0, h.A)("Heading2", [
          ["path", { d: "M4 12h8", key: "17cfdx" }],
          ["path", { d: "M4 18V6", key: "1rz3zl" }],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
          [
            "path",
            { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" },
          ],
        ]),
        iN = (0, h.A)("Heading3", [
          ["path", { d: "M4 12h8", key: "17cfdx" }],
          ["path", { d: "M4 18V6", key: "1rz3zl" }],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
          [
            "path",
            {
              d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",
              key: "68ncm8",
            },
          ],
          [
            "path",
            { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" },
          ],
        ]),
        iU = (0, h.A)("Heading4", [
          ["path", { d: "M4 12h8", key: "17cfdx" }],
          ["path", { d: "M4 18V6", key: "1rz3zl" }],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
          ["path", { d: "M17 10v4h4", key: "13sv97" }],
          ["path", { d: "M21 10v8", key: "1kdml4" }],
        ]),
        iG = (0, h.A)("Heading5", [
          ["path", { d: "M4 12h8", key: "17cfdx" }],
          ["path", { d: "M4 18V6", key: "1rz3zl" }],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
          ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
          [
            "path",
            {
              d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",
              key: "2nebdn",
            },
          ],
        ]),
        iW = (0, h.A)("Heading6", [
          ["path", { d: "M4 12h8", key: "17cfdx" }],
          ["path", { d: "M4 18V6", key: "1rz3zl" }],
          ["path", { d: "M12 18V6", key: "zqpxq5" }],
          ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
          ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }],
        ]),
        i_ = (0, h.A)("Heading", [
          ["path", { d: "M6 12h12", key: "8npq4p" }],
          ["path", { d: "M6 20V4", key: "1w1bmo" }],
          ["path", { d: "M18 20V4", key: "o2hl4u" }],
        ]),
        iX = (0, h.A)("HeadphoneOff", [
          ["path", { d: "M21 14h-1.343", key: "1jdnxi" }],
          ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343", key: "6kipu2" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",
              key: "9x50f4",
            },
          ],
          [
            "path",
            {
              d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",
              key: "1bkxnm",
            },
          ],
        ]),
        iK = (0, h.A)("Headphones", [
          [
            "path",
            {
              d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
              key: "1xhozi",
            },
          ],
        ]),
        iY = (0, h.A)("Headset", [
          [
            "path",
            {
              d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
              key: "12oyoe",
            },
          ],
          ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }],
        ]),
        iJ = (0, h.A)("HeartCrack", [
          [
            "path",
            {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              key: "c3ymky",
            },
          ],
          ["path", { d: "m12 13-1-1 2-2-3-3 2-2", key: "xjdxli" }],
        ]),
        iQ = (0, h.A)("HeartHandshake", [
          [
            "path",
            {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              key: "c3ymky",
            },
          ],
          [
            "path",
            {
              d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
              key: "4oyue0",
            },
          ],
          ["path", { d: "m18 15-2-2", key: "60u0ii" }],
          ["path", { d: "m15 18-2-2", key: "6p76be" }],
        ]),
        i$ = (0, h.A)("HeartOff", [
          ["line", { x1: "2", y1: "2", x2: "22", y2: "22", key: "1w4vcy" }],
          [
            "path",
            {
              d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",
              key: "3mpagl",
            },
          ],
          [
            "path",
            {
              d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
              key: "1gh3v3",
            },
          ],
        ]),
        i1 = (0, h.A)("HeartPulse", [
          [
            "path",
            {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              key: "c3ymky",
            },
          ],
          [
            "path",
            { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" },
          ],
        ]),
        i2 = (0, h.A)("Heart", [
          [
            "path",
            {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              key: "c3ymky",
            },
          ],
        ]),
        i0 = (0, h.A)("Heater", [
          ["path", { d: "M11 8c2-3-2-3 0-6", key: "1ldv5m" }],
          ["path", { d: "M15.5 8c2-3-2-3 0-6", key: "1otqoz" }],
          ["path", { d: "M6 10h.01", key: "1lbq93" }],
          ["path", { d: "M6 14h.01", key: "zudwn7" }],
          ["path", { d: "M10 16v-4", key: "1c25yv" }],
          ["path", { d: "M14 16v-4", key: "1dkbt8" }],
          ["path", { d: "M18 16v-4", key: "1yg9me" }],
          [
            "path",
            {
              d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",
              key: "1ubg90",
            },
          ],
          ["path", { d: "M5 20v2", key: "1abpe8" }],
          ["path", { d: "M19 20v2", key: "kqn6ft" }],
        ]),
        i4 = (0, h.A)("Hexagon", [
          [
            "path",
            {
              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
              key: "yt0hxn",
            },
          ],
        ]),
        i5 = (0, h.A)("Highlighter", [
          ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
          [
            "path",
            {
              d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
              key: "14a9rk",
            },
          ],
        ]),
        i3 = (0, h.A)("History", [
          [
            "path",
            {
              d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
              key: "1357e3",
            },
          ],
          ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
          ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
        ]),
        i6 = (0, h.A)("HopOff", [
          [
            "path",
            {
              d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",
              key: "qyzcap",
            },
          ],
          [
            "path",
            {
              d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",
              key: "y078lb",
            },
          ],
          [
            "path",
            {
              d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",
              key: "1utre3",
            },
          ],
          [
            "path",
            {
              d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",
              key: "17o9hm",
            },
          ],
          [
            "path",
            {
              d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",
              key: "1d1n4p",
            },
          ],
          [
            "path",
            {
              d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",
              key: "9uv3tt",
            },
          ],
          [
            "path",
            {
              d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",
              key: "1292wz",
            },
          ],
          [
            "path",
            {
              d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",
              key: "7ozu9p",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        i8 = (0, h.A)("Hop", [
          [
            "path",
            {
              d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",
              key: "18lxf1",
            },
          ],
          [
            "path",
            {
              d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",
              key: "vtfxrw",
            },
          ],
          [
            "path",
            {
              d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",
              key: "13hl71",
            },
          ],
          [
            "path",
            {
              d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",
              key: "1sl8oj",
            },
          ],
          [
            "path",
            {
              d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",
              key: "19c6kt",
            },
          ],
          [
            "path",
            {
              d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",
              key: "85ghs3",
            },
          ],
          ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1", key: "x087yj" }],
          [
            "path",
            {
              d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",
              key: "11xdqo",
            },
          ],
        ]),
        i7 = (0, h.A)("Hospital", [
          ["path", { d: "M12 6v4", key: "16clxf" }],
          ["path", { d: "M14 14h-4", key: "esezmu" }],
          ["path", { d: "M14 18h-4", key: "16mqa2" }],
          ["path", { d: "M14 8h-4", key: "z8ypaz" }],
          [
            "path",
            {
              d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
              key: "b1k337",
            },
          ],
          [
            "path",
            { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18", key: "16g51d" },
          ],
        ]),
        i9 = (0, h.A)("Hotel", [
          ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
          ["path", { d: "M12 11h.01", key: "z322tv" }],
          ["path", { d: "M12 7h.01", key: "1ivr5q" }],
          ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
          ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
          ["path", { d: "M16 11h.01", key: "xkw8gn" }],
          ["path", { d: "M16 7h.01", key: "1kdx03" }],
          ["path", { d: "M8 11h.01", key: "1dfujw" }],
          ["path", { d: "M8 7h.01", key: "1vti4s" }],
          [
            "rect",
            {
              x: "4",
              y: "2",
              width: "16",
              height: "20",
              rx: "2",
              key: "1uxh74",
            },
          ],
        ]),
        ne = (0, h.A)("Hourglass", [
          ["path", { d: "M5 22h14", key: "ehvnwv" }],
          ["path", { d: "M5 2h14", key: "pdyrp9" }],
          [
            "path",
            {
              d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
              key: "1d314k",
            },
          ],
          [
            "path",
            {
              d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
              key: "1vvvr6",
            },
          ],
        ]),
        na = (0, h.A)("HousePlug", [
          ["path", { d: "M10 12V8.964", key: "1vll13" }],
          ["path", { d: "M14 12V8.964", key: "1x3qvg" }],
          [
            "path",
            {
              d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",
              key: "ppykja",
            },
          ],
          [
            "path",
            {
              d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",
              key: "1gvg2z",
            },
          ],
        ]),
        nt = (0, h.A)("HousePlus", [
          [
            "path",
            {
              d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354",
              key: "5phn05",
            },
          ],
          [
            "path",
            { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
          ],
          ["path", { d: "M15 6h6", key: "1jlkvy" }],
          ["path", { d: "M18 3v6", key: "x1uolp" }],
        ]),
        nh = (0, h.A)("House", [
          [
            "path",
            { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
          ],
          [
            "path",
            {
              d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              key: "1d0kgt",
            },
          ],
        ]),
        ny = (0, h.A)("IceCreamBowl", [
          [
            "path",
            {
              d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
              key: "1uxfcu",
            },
          ],
          ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }],
          ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }],
        ]),
        nr = (0, h.A)("IceCreamCone", [
          [
            "path",
            { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" },
          ],
          ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }],
          ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }],
        ]),
        nd = (0, h.A)("IdCard", [
          ["path", { d: "M16 10h2", key: "8sgtl7" }],
          ["path", { d: "M16 14h2", key: "epxaof" }],
          ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
          ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
          [
            "rect",
            {
              x: "2",
              y: "5",
              width: "20",
              height: "14",
              rx: "2",
              key: "qneu4z",
            },
          ],
        ]),
        np = (0, h.A)("ImageDown", [
          [
            "path",
            {
              d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
              key: "9csbqa",
            },
          ],
          ["path", { d: "m14 19 3 3v-5.5", key: "9ldu5r" }],
          ["path", { d: "m17 22 3-3", key: "1nkfve" }],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ]),
        nk = (0, h.A)("ImageMinus", [
          [
            "path",
            {
              d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
              key: "m87ecr",
            },
          ],
          ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
        ]),
        nl = (0, h.A)("ImageOff", [
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
          ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
          [
            "line",
            { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" },
          ],
          ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
          [
            "path",
            {
              d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
              key: "mmje98",
            },
          ],
          ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
        ]),
        ni = (0, h.A)("ImagePlay", [
          ["path", { d: "m11 16-5 5", key: "j5f7ct" }],
          [
            "path",
            {
              d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",
              key: "7s81lt",
            },
          ],
          [
            "path",
            {
              d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",
              key: "1omb6s",
            },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ]),
        nn = (0, h.A)("ImagePlus", [
          ["path", { d: "M16 5h6", key: "1vod17" }],
          ["path", { d: "M19 2v6", key: "4bpg5p" }],
          [
            "path",
            {
              d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
              key: "1ue2ih",
            },
          ],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ]),
        nc = (0, h.A)("ImageUp", [
          [
            "path",
            {
              d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
              key: "9csbqa",
            },
          ],
          ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }],
          ["path", { d: "M17 22v-5.5", key: "1aa6fl" }],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
        ]),
        no = (0, h.A)("Image", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
        ]),
        nM = (0, h.A)("Images", [
          ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
          [
            "path",
            {
              d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",
              key: "nf6bnh",
            },
          ],
          ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
          [
            "rect",
            {
              width: "16",
              height: "16",
              x: "6",
              y: "2",
              rx: "2",
              key: "12espp",
            },
          ],
        ]),
        ns = (0, h.A)("Import", [
          ["path", { d: "M12 3v12", key: "1x0j5s" }],
          ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
          [
            "path",
            {
              d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
              key: "1ywtjm",
            },
          ],
        ]),
        nu = (0, h.A)("Inbox", [
          [
            "polyline",
            { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" },
          ],
          [
            "path",
            {
              d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
              key: "oot6mr",
            },
          ],
        ]),
        nv = (0, h.A)("IndentDecrease", [
          ["polyline", { points: "7 8 3 12 7 16", key: "2j60jr" }],
          ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
          ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
          ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }],
        ]),
        nm = (0, h.A)("IndentIncrease", [
          ["polyline", { points: "3 8 7 12 3 16", key: "f3rxhf" }],
          ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
          ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
          ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }],
        ]),
        nx = (0, h.A)("IndianRupee", [
          ["path", { d: "M6 3h12", key: "ggurg9" }],
          ["path", { d: "M6 8h12", key: "6g4wlu" }],
          ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
          ["path", { d: "M6 13h3", key: "wdp6ag" }],
          ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }],
        ]),
        nf = (0, h.A)("Infinity", [
          [
            "path",
            {
              d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
              key: "1z0uae",
            },
          ],
        ]),
        ng = (0, h.A)("Info", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 16v-4", key: "1dtifu" }],
          ["path", { d: "M12 8h.01", key: "e9boi3" }],
        ]),
        nA = (0, h.A)("InspectionPanel", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7 7h.01", key: "7u93v4" }],
          ["path", { d: "M17 7h.01", key: "14a9sn" }],
          ["path", { d: "M7 17h.01", key: "19xn7k" }],
          ["path", { d: "M17 17h.01", key: "1sd3ek" }],
        ]),
        nw = (0, h.A)("Instagram", [
          [
            "rect",
            {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "5",
              ry: "5",
              key: "2e1cvw",
            },
          ],
          [
            "path",
            {
              d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
              key: "9exkf1",
            },
          ],
          [
            "line",
            { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" },
          ],
        ]),
        nb = (0, h.A)("Italic", [
          ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
          ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
          ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }],
        ]),
        nC = (0, h.A)("IterationCcw", [
          [
            "path",
            {
              d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",
              key: "4znkd0",
            },
          ],
          ["polyline", { points: "16 14 20 18 16 22", key: "11njsm" }],
        ]),
        nq = (0, h.A)("IterationCw", [
          [
            "path",
            { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4", key: "tuf4su" },
          ],
          ["polyline", { points: "8 22 4 18 8 14", key: "evkj9s" }],
        ]),
        nz = (0, h.A)("JapaneseYen", [
          ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }],
          ["path", { d: "M6 15h12", key: "1hwgt5" }],
          ["path", { d: "M6 11h12", key: "wf4gp6" }],
        ]),
        nj = (0, h.A)("Joystick", [
          [
            "path",
            {
              d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
              key: "jg2n2t",
            },
          ],
          ["path", { d: "M6 15v-2", key: "gd6mvg" }],
          ["path", { d: "M12 15V9", key: "8c7uyn" }],
          ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }],
        ]),
        nH = (0, h.A)("Kanban", [
          ["path", { d: "M6 5v11", key: "mdvv1e" }],
          ["path", { d: "M12 5v6", key: "14ar3b" }],
          ["path", { d: "M18 5v14", key: "7ji314" }],
        ]),
        nS = (0, h.A)("KeyRound", [
          [
            "path",
            {
              d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
              key: "1s6t7t",
            },
          ],
          [
            "circle",
            {
              cx: "16.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "w0ekpg",
            },
          ],
        ]),
        nV = (0, h.A)("KeySquare", [
          [
            "path",
            {
              d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",
              key: "165ttr",
            },
          ],
          ["path", { d: "m14 7 3 3", key: "1r5n42" }],
          [
            "path",
            {
              d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",
              key: "1ubxi2",
            },
          ],
        ]),
        nL = (0, h.A)("Key", [
          [
            "path",
            {
              d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
              key: "g0fldk",
            },
          ],
          ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
          ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
        ]),
        nP = (0, h.A)("KeyboardMusic", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["path", { d: "M6 8h4", key: "utf9t1" }],
          ["path", { d: "M14 8h.01", key: "1primd" }],
          ["path", { d: "M18 8h.01", key: "emo2bl" }],
          ["path", { d: "M2 12h20", key: "9i4pu4" }],
          ["path", { d: "M6 12v4", key: "dy92yo" }],
          ["path", { d: "M10 12v4", key: "1fxnav" }],
          ["path", { d: "M14 12v4", key: "1hft58" }],
          ["path", { d: "M18 12v4", key: "tjjnbz" }],
        ]),
        nR = (0, h.A)("KeyboardOff", [
          ["path", { d: "M 20 4 A2 2 0 0 1 22 6", key: "1g1fkt" }],
          ["path", { d: "M 22 6 L 22 16.41", key: "1qjg3w" }],
          ["path", { d: "M 7 16 L 16 16", key: "n0yqwb" }],
          ["path", { d: "M 9.69 4 L 20 4", key: "kbpcgx" }],
          ["path", { d: "M14 8h.01", key: "1primd" }],
          ["path", { d: "M18 8h.01", key: "emo2bl" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2", key: "s23sx2" },
          ],
          ["path", { d: "M6 8h.01", key: "x9i8wu" }],
          ["path", { d: "M8 12h.01", key: "czm47f" }],
        ]),
        nD = (0, h.A)("Keyboard", [
          ["path", { d: "M10 8h.01", key: "1r9ogq" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M14 8h.01", key: "1primd" }],
          ["path", { d: "M16 12h.01", key: "1l6xoz" }],
          ["path", { d: "M18 8h.01", key: "emo2bl" }],
          ["path", { d: "M6 8h.01", key: "x9i8wu" }],
          ["path", { d: "M7 16h10", key: "wp8him" }],
          ["path", { d: "M8 12h.01", key: "czm47f" }],
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
        ]),
        nT = (0, h.A)("LampCeiling", [
          ["path", { d: "M12 2v5", key: "nd4vlx" }],
          ["path", { d: "M6 7h12l4 9H2l4-9Z", key: "123d64" }],
          ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0", key: "1061mw" }],
        ]),
        nF = (0, h.A)("LampDesk", [
          ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z", key: "1b0msb" }],
          ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z", key: "1uemms" }],
          ["path", { d: "M9.5 6.5 4 12l3 6", key: "1bx08v" }],
          [
            "path",
            { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z", key: "wap775" },
          ],
        ]),
        nE = (0, h.A)("LampFloor", [
          ["path", { d: "M9 2h6l3 7H6l3-7Z", key: "wcx6mj" }],
          ["path", { d: "M12 9v13", key: "3n1su1" }],
          ["path", { d: "M9 22h6", key: "1rlq3v" }],
        ]),
        nB = (0, h.A)("LampWallDown", [
          ["path", { d: "M11 13h6l3 7H8l3-7Z", key: "9n3qlo" }],
          ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8", key: "1hu4hb" }],
          [
            "path",
            { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z", key: "s053bc" },
          ],
        ]),
        nO = (0, h.A)("LampWallUp", [
          ["path", { d: "M11 4h6l3 7H8l3-7Z", key: "11x1ee" }],
          ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8", key: "eutp5o" }],
          [
            "path",
            { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z", key: "1iuthr" },
          ],
        ]),
        nZ = (0, h.A)("Lamp", [
          ["path", { d: "M8 2h8l4 10H4L8 2Z", key: "9dma5w" }],
          ["path", { d: "M12 12v6", key: "3ahymv" }],
          [
            "path",
            { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z", key: "mwf4oh" },
          ],
        ]),
        nI = (0, h.A)("LandPlot", [
          ["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }],
          [
            "path",
            {
              d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
              key: "ek95tt",
            },
          ],
          ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }],
          ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }],
        ]),
        nN = (0, h.A)("Landmark", [
          ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
          ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
          ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
          ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
          ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
          ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
        ]),
        nU = (0, h.A)("Languages", [
          ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
          ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
          ["path", { d: "M2 5h12", key: "or177f" }],
          ["path", { d: "M7 2h1", key: "1t2jsx" }],
          ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
          ["path", { d: "M14 18h6", key: "1m8k6r" }],
        ]),
        nG = (0, h.A)("LaptopMinimal", [
          [
            "rect",
            {
              width: "18",
              height: "12",
              x: "3",
              y: "4",
              rx: "2",
              ry: "2",
              key: "1qhy41",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }],
        ]),
        nW = (0, h.A)("Laptop", [
          [
            "path",
            {
              d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
              key: "tarvll",
            },
          ],
        ]),
        n_ = (0, h.A)("LassoSelect", [
          ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
          ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }],
          [
            "path",
            {
              d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
              key: "gt5e1w",
            },
          ],
          ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
          [
            "path",
            {
              d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",
              key: "72q637",
            },
          ],
        ]),
        nX = (0, h.A)("Lasso", [
          ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
          [
            "path",
            {
              d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
              key: "146dds",
            },
          ],
          ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
        ]),
        nK = (0, h.A)("Laugh", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" },
          ],
          ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
          ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
        ]),
        nY = (0, h.A)("Layers2", [
          [
            "path",
            {
              d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",
              key: "1cuww1",
            },
          ],
          [
            "path",
            {
              d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",
              key: "pdlvxu",
            },
          ],
        ]),
        nJ = (0, h.A)("Layers3", [
          [
            "path",
            {
              d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
              key: "8b97xw",
            },
          ],
          [
            "path",
            {
              d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
              key: "1e5n1m",
            },
          ],
          [
            "path",
            {
              d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
              key: "1iwflc",
            },
          ],
        ]),
        nQ = (0, h.A)("Layers", [
          [
            "path",
            {
              d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
              key: "8b97xw",
            },
          ],
          [
            "path",
            {
              d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
              key: "dd6zsq",
            },
          ],
          [
            "path",
            {
              d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
              key: "ep9fru",
            },
          ],
        ]),
        n$ = (0, h.A)("LayoutDashboard", [
          [
            "rect",
            { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "5",
              x: "14",
              y: "3",
              rx: "1",
              key: "16une8",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "9",
              x: "14",
              y: "12",
              rx: "1",
              key: "1hutg5",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "5",
              x: "3",
              y: "16",
              rx: "1",
              key: "ldoo1y",
            },
          ],
        ]),
        n1 = (0, h.A)("LayoutGrid", [
          [
            "rect",
            { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "3",
              rx: "1",
              key: "6d4xhi",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "14",
              rx: "1",
              key: "nxv5o0",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
              key: "1bb6yr",
            },
          ],
        ]),
        n2 = (0, h.A)("LayoutList", [
          [
            "rect",
            { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
              key: "1bb6yr",
            },
          ],
          ["path", { d: "M14 4h7", key: "3xa0d5" }],
          ["path", { d: "M14 9h7", key: "1icrd9" }],
          ["path", { d: "M14 15h7", key: "1mj8o2" }],
          ["path", { d: "M14 20h7", key: "11slyb" }],
        ]),
        n0 = (0, h.A)("LayoutPanelLeft", [
          [
            "rect",
            { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "3",
              rx: "1",
              key: "6d4xhi",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "14",
              rx: "1",
              key: "nxv5o0",
            },
          ],
        ]),
        n4 = (0, h.A)("LayoutPanelTop", [
          [
            "rect",
            {
              width: "18",
              height: "7",
              x: "3",
              y: "3",
              rx: "1",
              key: "f1a2em",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
              key: "1bb6yr",
            },
          ],
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "14",
              rx: "1",
              key: "nxv5o0",
            },
          ],
        ]),
        n5 = (0, h.A)("LayoutTemplate", [
          [
            "rect",
            {
              width: "18",
              height: "7",
              x: "3",
              y: "3",
              rx: "1",
              key: "f1a2em",
            },
          ],
          [
            "rect",
            {
              width: "9",
              height: "7",
              x: "3",
              y: "14",
              rx: "1",
              key: "jqznyg",
            },
          ],
          [
            "rect",
            {
              width: "5",
              height: "7",
              x: "16",
              y: "14",
              rx: "1",
              key: "q5h2i8",
            },
          ],
        ]),
        n3 = (0, h.A)("Leaf", [
          [
            "path",
            {
              d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
              key: "nnexq3",
            },
          ],
          [
            "path",
            {
              d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
              key: "mt58a7",
            },
          ],
        ]),
        n6 = (0, h.A)("LeafyGreen", [
          [
            "path",
            {
              d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
              key: "1134nt",
            },
          ],
          ["path", { d: "M2 22 17 7", key: "1q7jp2" }],
        ]),
        n8 = (0, h.A)("Lectern", [
          [
            "path",
            {
              d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",
              key: "13jjxg",
            },
          ],
          ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3", key: "1550fe" }],
          [
            "rect",
            {
              width: "8",
              height: "12",
              x: "8",
              y: "10",
              rx: "1",
              key: "qmu8b6",
            },
          ],
        ]),
        n7 = (0, h.A)("LetterText", [
          ["path", { d: "M15 12h6", key: "upa0zy" }],
          ["path", { d: "M15 6h6", key: "1jlkvy" }],
          [
            "path",
            { d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13", key: "blevx4" },
          ],
          ["path", { d: "M3 18h18", key: "1h113x" }],
          ["path", { d: "M4 11h6", key: "olkgv1" }],
        ]),
        n9 = (0, h.A)("LibraryBig", [
          [
            "rect",
            {
              width: "8",
              height: "18",
              x: "3",
              y: "3",
              rx: "1",
              key: "oynpb5",
            },
          ],
          ["path", { d: "M7 3v18", key: "bbkbws" }],
          [
            "path",
            {
              d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
              key: "1qboyk",
            },
          ],
        ]),
        ce = (0, h.A)("Library", [
          ["path", { d: "m16 6 4 14", key: "ji33uf" }],
          ["path", { d: "M12 6v14", key: "1n7gus" }],
          ["path", { d: "M8 8v12", key: "1gg7y9" }],
          ["path", { d: "M4 4v16", key: "6qkkli" }],
        ]),
        ca = (0, h.A)("LifeBuoy", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
          ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
          ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
          ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ]),
        ct = (0, h.A)("Ligature", [
          [
            "path",
            { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2", key: "1rtphz" },
          ],
          ["path", { d: "M6 12h4", key: "a4o3ry" }],
          ["path", { d: "M14 12h2v8", key: "c1fccl" }],
          ["path", { d: "M6 20h4", key: "1i6q5t" }],
          ["path", { d: "M14 20h4", key: "lzx1xo" }],
        ]),
        ch = (0, h.A)("LightbulbOff", [
          [
            "path",
            {
              d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",
              key: "1fkcox",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",
              key: "10m8kw",
            },
          ],
          ["path", { d: "M9 18h6", key: "x1upvd" }],
          ["path", { d: "M10 22h4", key: "ceow96" }],
        ]),
        cy = (0, h.A)("Lightbulb", [
          [
            "path",
            {
              d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
              key: "1gvzjb",
            },
          ],
          ["path", { d: "M9 18h6", key: "x1upvd" }],
          ["path", { d: "M10 22h4", key: "ceow96" }],
        ]),
        cr = (0, h.A)("Link2Off", [
          ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
          ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
          ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        cd = (0, h.A)("Link2", [
          ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
          ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
          ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
        ]),
        cp = (0, h.A)("Link", [
          [
            "path",
            {
              d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
              key: "1cjeqo",
            },
          ],
          [
            "path",
            {
              d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
              key: "19qd67",
            },
          ],
        ]),
        ck = (0, h.A)("Linkedin", [
          [
            "path",
            {
              d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
              key: "c2jq9f",
            },
          ],
          ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
          ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
        ]),
        cl = (0, h.A)("ListCheck", [
          ["path", { d: "M11 18H3", key: "n3j2dh" }],
          ["path", { d: "m15 18 2 2 4-4", key: "1szwhi" }],
          ["path", { d: "M16 12H3", key: "1a2rj7" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
        ]),
        ci = (0, h.A)("ListChecks", [
          ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
          ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
          ["path", { d: "M13 6h8", key: "15sg57" }],
          ["path", { d: "M13 12h8", key: "h98zly" }],
          ["path", { d: "M13 18h8", key: "oe0vm4" }],
        ]),
        cn = (0, h.A)("ListCollapse", [
          ["path", { d: "m3 10 2.5-2.5L3 5", key: "i6eama" }],
          ["path", { d: "m3 19 2.5-2.5L3 14", key: "w2gmor" }],
          ["path", { d: "M10 6h11", key: "c7qv1k" }],
          ["path", { d: "M10 12h11", key: "6m4ad9" }],
          ["path", { d: "M10 18h11", key: "11hvi2" }],
        ]),
        cc = (0, h.A)("ListEnd", [
          ["path", { d: "M16 12H3", key: "1a2rj7" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M10 18H3", key: "13769t" }],
          ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5", key: "ilrcs8" }],
          ["path", { d: "m16 16-2 2 2 2", key: "kkc6pm" }],
        ]),
        co = (0, h.A)("ListFilter", [
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          ["path", { d: "M7 12h10", key: "b7w52i" }],
          ["path", { d: "M10 18h4", key: "1ulq68" }],
        ]),
        cM = (0, h.A)("ListMinus", [
          ["path", { d: "M11 12H3", key: "51ecnj" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M16 18H3", key: "12xzn7" }],
          ["path", { d: "M21 12h-6", key: "bt1uis" }],
        ]),
        cs = (0, h.A)("ListMusic", [
          ["path", { d: "M21 15V6", key: "h1cx4g" }],
          [
            "path",
            {
              d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
              key: "8saifv",
            },
          ],
          ["path", { d: "M12 12H3", key: "18klou" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M12 18H3", key: "11ftsu" }],
        ]),
        cu = (0, h.A)("ListOrdered", [
          ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
          ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
          ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
          ["path", { d: "M4 6h1v4", key: "cnovpq" }],
          ["path", { d: "M4 10h2", key: "16xx2s" }],
          ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }],
        ]),
        cv = (0, h.A)("ListPlus", [
          ["path", { d: "M11 12H3", key: "51ecnj" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M16 18H3", key: "12xzn7" }],
          ["path", { d: "M18 9v6", key: "1twb98" }],
          ["path", { d: "M21 12h-6", key: "bt1uis" }],
        ]),
        cm = (0, h.A)("ListRestart", [
          ["path", { d: "M21 6H3", key: "1jwq7v" }],
          ["path", { d: "M7 12H3", key: "13ou7f" }],
          ["path", { d: "M7 18H3", key: "1sijw9" }],
          [
            "path",
            {
              d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
              key: "qth677",
            },
          ],
          ["path", { d: "M11 10v4h4", key: "172dkj" }],
        ]),
        cx = (0, h.A)("ListStart", [
          ["path", { d: "M16 12H3", key: "1a2rj7" }],
          ["path", { d: "M16 18H3", key: "12xzn7" }],
          ["path", { d: "M10 6H3", key: "lf8lx7" }],
          ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
          ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }],
        ]),
        cf = (0, h.A)("ListTodo", [
          [
            "rect",
            { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" },
          ],
          ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
          ["path", { d: "M13 6h8", key: "15sg57" }],
          ["path", { d: "M13 12h8", key: "h98zly" }],
          ["path", { d: "M13 18h8", key: "oe0vm4" }],
        ]),
        cg = (0, h.A)("ListTree", [
          ["path", { d: "M21 12h-8", key: "1bmf0i" }],
          ["path", { d: "M21 6H8", key: "1pqkrb" }],
          ["path", { d: "M21 18h-8", key: "1tm79t" }],
          ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3", key: "1ywdgy" }],
          ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3", key: "2wc746" }],
        ]),
        cA = (0, h.A)("ListVideo", [
          ["path", { d: "M12 12H3", key: "18klou" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M12 18H3", key: "11ftsu" }],
          ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }],
        ]),
        cw = (0, h.A)("ListX", [
          ["path", { d: "M11 12H3", key: "51ecnj" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M16 18H3", key: "12xzn7" }],
          ["path", { d: "m19 10-4 4", key: "1tz659" }],
          ["path", { d: "m15 10 4 4", key: "1n7nei" }],
        ]),
        cb = (0, h.A)("List", [
          ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
          ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
          ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
          ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
          ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
          ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }],
        ]),
        cC = (0, h.A)("LoaderCircle", [
          ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
        ]),
        cq = (0, h.A)("LoaderPinwheel", [
          [
            "path",
            { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0", key: "1lzz15" },
          ],
          [
            "path",
            { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6", key: "1gnrpi" },
          ],
          [
            "path",
            { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6", key: "u9yy5q" },
          ],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]),
        cz = (0, h.A)("Loader", [
          ["path", { d: "M12 2v4", key: "3427ic" }],
          ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
          ["path", { d: "M18 12h4", key: "wj9ykh" }],
          ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
          ["path", { d: "M12 18v4", key: "jadmvz" }],
          ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
          ["path", { d: "M2 12h4", key: "j09sii" }],
          ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
        ]),
        cj = (0, h.A)("LocateFixed", [
          ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
          ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
          ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
          ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]),
        cH = (0, h.A)("LocateOff", [
          ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
          ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
          ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
          [
            "path",
            {
              d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
              key: "1oh7ia",
            },
          ],
          [
            "path",
            {
              d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
              key: "3qdecy",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        cS = (0, h.A)("Locate", [
          ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
          ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
          ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
          ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
        ]),
        cV = (0, h.A)("LockKeyholeOpen", [
          ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
          [
            "rect",
            {
              width: "18",
              height: "12",
              x: "3",
              y: "10",
              rx: "2",
              key: "l0tzu3",
            },
          ],
          ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }],
        ]),
        cL = (0, h.A)("LockKeyhole", [
          ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
          [
            "rect",
            {
              x: "3",
              y: "10",
              width: "18",
              height: "12",
              rx: "2",
              key: "6s8ecr",
            },
          ],
          ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }],
        ]),
        cP = (0, h.A)("LockOpen", [
          [
            "rect",
            {
              width: "18",
              height: "11",
              x: "3",
              y: "11",
              rx: "2",
              ry: "2",
              key: "1w4ew1",
            },
          ],
          ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
        ]),
        cR = (0, h.A)("Lock", [
          [
            "rect",
            {
              width: "18",
              height: "11",
              x: "3",
              y: "11",
              rx: "2",
              ry: "2",
              key: "1w4ew1",
            },
          ],
          ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
        ]),
        cD = (0, h.A)("LogIn", [
          [
            "path",
            { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" },
          ],
          ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
          ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
        ])
      var cT = t(2738)
      let cF = (0, h.A)("Logs", [
          ["path", { d: "M13 12h8", key: "h98zly" }],
          ["path", { d: "M13 18h8", key: "oe0vm4" }],
          ["path", { d: "M13 6h8", key: "15sg57" }],
          ["path", { d: "M3 12h1", key: "lp3yf2" }],
          ["path", { d: "M3 18h1", key: "1eiwyy" }],
          ["path", { d: "M3 6h1", key: "rgxa97" }],
          ["path", { d: "M8 12h1", key: "1con00" }],
          ["path", { d: "M8 18h1", key: "13wk12" }],
          ["path", { d: "M8 6h1", key: "tn6mkg" }],
        ]),
        cE = (0, h.A)("Lollipop", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
          [
            "path",
            {
              d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",
              key: "107gwy",
            },
          ],
        ]),
        cB = (0, h.A)("Luggage", [
          [
            "path",
            {
              d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
              key: "1m57jg",
            },
          ],
          [
            "path",
            { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" },
          ],
          ["path", { d: "M10 20h4", key: "ni2waw" }],
          ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
          ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }],
        ]),
        cO = (0, h.A)("Magnet", [
          [
            "path",
            {
              d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
              key: "1i3lhw",
            },
          ],
          ["path", { d: "m5 8 4 4", key: "j6kj7e" }],
          ["path", { d: "m12 15 4 4", key: "lnac28" }],
        ]),
        cZ = (0, h.A)("MailCheck", [
          [
            "path",
            {
              d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
              key: "12jkf8",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
        ]),
        cI = (0, h.A)("MailMinus", [
          [
            "path",
            {
              d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
              key: "fuxbkv",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          ["path", { d: "M16 19h6", key: "xwg31i" }],
        ]),
        cN = (0, h.A)("MailOpen", [
          [
            "path",
            {
              d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
              key: "1jhwl8",
            },
          ],
          [
            "path",
            { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" },
          ],
        ]),
        cU = (0, h.A)("MailPlus", [
          [
            "path",
            {
              d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
              key: "12jkf8",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          ["path", { d: "M19 16v6", key: "tddt3s" }],
          ["path", { d: "M16 19h6", key: "xwg31i" }],
        ]),
        cG = (0, h.A)("MailQuestion", [
          [
            "path",
            {
              d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
              key: "e61zoh",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          [
            "path",
            {
              d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
              key: "7z9rxb",
            },
          ],
          ["path", { d: "M20 22v.01", key: "12bgn6" }],
        ]),
        cW = (0, h.A)("MailSearch", [
          [
            "path",
            {
              d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
              key: "w80f2v",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "8lzu5m" }],
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }],
        ]),
        c_ = (0, h.A)("MailWarning", [
          [
            "path",
            {
              d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
              key: "e61zoh",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          ["path", { d: "M20 14v4", key: "1hm744" }],
          ["path", { d: "M20 22v.01", key: "12bgn6" }],
        ]),
        cX = (0, h.A)("MailX", [
          [
            "path",
            {
              d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",
              key: "1j9vog",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
          ["path", { d: "m17 17 4 4", key: "1b3523" }],
          ["path", { d: "m21 17-4 4", key: "uinynz" }],
        ]),
        cK = (0, h.A)("Mail", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
        ]),
        cY = (0, h.A)("Mailbox", [
          [
            "path",
            {
              d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
              key: "1lbycx",
            },
          ],
          ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }],
          [
            "path",
            { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2", key: "15i455" },
          ],
          ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }],
        ]),
        cJ = (0, h.A)("Mails", [
          [
            "rect",
            {
              width: "16",
              height: "13",
              x: "6",
              y: "4",
              rx: "2",
              key: "1drq3f",
            },
          ],
          [
            "path",
            { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7", key: "xn252p" },
          ],
          ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14", key: "n13cji" }],
        ]),
        cQ = (0, h.A)("MapPinCheckInside", [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
        ]),
        c$ = (0, h.A)("MapPinCheck", [
          [
            "path",
            {
              d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",
              key: "1dq61d",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ["path", { d: "m16 18 2 2 4-4", key: "1mkfmb" }],
        ]),
        c1 = (0, h.A)("MapPinHouse", [
          [
            "path",
            {
              d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",
              key: "1p1rcz",
            },
          ],
          [
            "path",
            {
              d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",
              key: "mcbcs9",
            },
          ],
          ["path", { d: "M18 22v-3", key: "1t1ugv" }],
          ["circle", { cx: "10", cy: "10", r: "3", key: "1ns7v1" }],
        ]),
        c2 = (0, h.A)("MapPinMinusInside", [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
        ]),
        c0 = (0, h.A)("MapPinMinus", [
          [
            "path",
            {
              d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
              key: "11uxia",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ["path", { d: "M16 18h6", key: "987eiv" }],
        ]),
        c4 = (0, h.A)("MapPinOff", [
          ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16", key: "1d4wjd" }],
          [
            "path",
            {
              d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",
              key: "12yil7",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",
              key: "lhrkcz",
            },
          ],
          ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74", key: "13wojd" }],
        ]),
        c5 = (0, h.A)("MapPinPlusInside", [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          ["path", { d: "M12 7v6", key: "lw1j43" }],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
        ]),
        c3 = (0, h.A)("MapPinPlus", [
          [
            "path",
            {
              d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
              key: "fcdtly",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ["path", { d: "M16 18h6", key: "987eiv" }],
          ["path", { d: "M19 15v6", key: "10aioa" }],
        ]),
        c6 = (0, h.A)("MapPinXInside", [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
          ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }],
        ]),
        c8 = (0, h.A)("MapPinX", [
          [
            "path",
            {
              d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",
              key: "y0ewhp",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ["path", { d: "m21.5 15.5-5 5", key: "11iqnx" }],
          ["path", { d: "m21.5 20.5-5-5", key: "1bylgx" }],
        ]),
        c7 = (0, h.A)("MapPin", [
          [
            "path",
            {
              d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
              key: "1r0f0z",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
        ]),
        c9 = (0, h.A)("MapPinned", [
          [
            "path",
            {
              d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
              key: "11u0oz",
            },
          ],
          ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
          [
            "path",
            {
              d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
              key: "q8zwxj",
            },
          ],
        ]),
        oe = (0, h.A)("Map", [
          [
            "path",
            {
              d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
              key: "169xi5",
            },
          ],
          ["path", { d: "M15 5.764v15", key: "1pn4in" }],
          ["path", { d: "M9 3.236v15", key: "1uimfh" }],
        ]),
        oa = (0, h.A)("Martini", [
          ["path", { d: "M8 22h8", key: "rmew8v" }],
          ["path", { d: "M12 11v11", key: "ur9y6a" }],
          ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }],
        ]),
        ot = (0, h.A)("Maximize2", [
          ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
          ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
          ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
          ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
        ]),
        oh = (0, h.A)("Maximize", [
          ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
          ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
          ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
          ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
        ]),
        oy = (0, h.A)("Medal", [
          [
            "path",
            {
              d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
              key: "143lza",
            },
          ],
          ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
          ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
          ["path", { d: "M8 7h8", key: "i86dvs" }],
          ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
          ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }],
        ]),
        or = (0, h.A)("MegaphoneOff", [
          ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14", key: "3429n" }],
          ["path", { d: "M21 15.34V6l-7.31 2.03", key: "4o1dh8" }],
          ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        od = (0, h.A)("Megaphone", [
          ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
          ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
        ]),
        op = (0, h.A)("Meh", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }],
          ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
          ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
        ]),
        ok = (0, h.A)("MemoryStick", [
          ["path", { d: "M6 19v-3", key: "1nvgqn" }],
          ["path", { d: "M10 19v-3", key: "iu8nkm" }],
          ["path", { d: "M14 19v-3", key: "kcehxu" }],
          ["path", { d: "M18 19v-3", key: "1vh91z" }],
          ["path", { d: "M8 11V9", key: "63erz4" }],
          ["path", { d: "M16 11V9", key: "fru6f3" }],
          ["path", { d: "M12 11V9", key: "ha00sb" }],
          ["path", { d: "M2 15h20", key: "16ne18" }],
          [
            "path",
            {
              d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
              key: "lhddv3",
            },
          ],
        ]),
        ol = (0, h.A)("Menu", [
          ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
          ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
          ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
        ]),
        oi = (0, h.A)("Merge", [
          ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
          [
            "path",
            { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" },
          ],
          ["path", { d: "m20 22-5-5", key: "1m27yz" }],
        ]),
        on = (0, h.A)("MessageCircleCode", [
          ["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }],
          ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }],
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z", key: "k85zhp" }],
        ]),
        oc = (0, h.A)("MessageCircleDashed", [
          [
            "path",
            { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1", key: "16ll65" },
          ],
          ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1", key: "1nq77a" }],
          [
            "path",
            { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5", key: "1sf7wn" },
          ],
          [
            "path",
            { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1", key: "x1hs5g" },
          ],
          [
            "path",
            { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1", key: "19m18z" },
          ],
          ["path", { d: "M3.5 17.5 2 22l4.5-1.5", key: "1f36qi" }],
          [
            "path",
            { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5", key: "1vz3ju" },
          ],
          ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1", key: "19f9do" }],
        ]),
        oo = (0, h.A)("MessageCircleHeart", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          [
            "path",
            {
              d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",
              key: "43lnbm",
            },
          ],
        ]),
        oM = (0, h.A)("MessageCircleMore", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          ["path", { d: "M8 12h.01", key: "czm47f" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M16 12h.01", key: "1l6xoz" }],
        ]),
        os = (0, h.A)("MessageCircleOff", [
          ["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5", key: "1iebmn" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",
              key: "1ov8ce",
            },
          ],
        ]),
        ou = (0, h.A)("MessageCirclePlus", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
        ]),
        ov = (0, h.A)("MessageCircleQuestion", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          [
            "path",
            { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" },
          ],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
        ]),
        om = (0, h.A)("MessageCircleReply", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
          ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1", key: "1gheu4" }],
        ]),
        ox = (0, h.A)("MessageCircleWarning", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          ["path", { d: "M12 8v4", key: "1got3b" }],
          ["path", { d: "M12 16h.01", key: "1drbdi" }],
        ]),
        of = (0, h.A)("MessageCircleX", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "m9 9 6 6", key: "z0biqf" }],
        ]),
        og = (0, h.A)("MessageCircle", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
        ]),
        oA = (0, h.A)("MessageSquareCode", [
          ["path", { d: "M10 7.5 8 10l2 2.5", key: "xb17xw" }],
          ["path", { d: "m14 7.5 2 2.5-2 2.5", key: "5rap1v" }],
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
        ]),
        ow = (0, h.A)("MessageSquareDashed", [
          ["path", { d: "M10 17H7l-4 4v-7", key: "1r71xu" }],
          ["path", { d: "M14 17h1", key: "nufu4t" }],
          ["path", { d: "M14 3h1", key: "1ec4yj" }],
          ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
          ["path", { d: "M21 14v1a2 2 0 0 1-2 2", key: "29akq3" }],
          ["path", { d: "M21 9v1", key: "mxsmne" }],
          ["path", { d: "M3 9v1", key: "1r0deq" }],
          ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
          ["path", { d: "M9 3h1", key: "1yesri" }],
        ]),
        ob = (0, h.A)("MessageSquareDiff", [
          [
            "path",
            {
              d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
              key: "1xuzuj",
            },
          ],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
          ["path", { d: "M12 7v6", key: "lw1j43" }],
          ["path", { d: "M9 17h6", key: "r8uit2" }],
        ]),
        oC = (0, h.A)("MessageSquareDot", [
          [
            "path",
            {
              d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",
              key: "uodpkb",
            },
          ],
          ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
        ]),
        oq = (0, h.A)("MessageSquareHeart", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          [
            "path",
            {
              d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",
              key: "1blaws",
            },
          ],
        ]),
        oz = (0, h.A)("MessageSquareLock", [
          ["path", { d: "M19 15v-2a2 2 0 1 0-4 0v2", key: "h3d1vz" }],
          [
            "path",
            {
              d: "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",
              key: "xsnnhn",
            },
          ],
          [
            "rect",
            {
              x: "13",
              y: "15",
              width: "8",
              height: "5",
              rx: "1",
              key: "1ccwuk",
            },
          ],
        ]),
        oj = (0, h.A)("MessageSquareMore", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "M8 10h.01", key: "19clt8" }],
          ["path", { d: "M12 10h.01", key: "1nrarc" }],
          ["path", { d: "M16 10h.01", key: "1m94wz" }],
        ]),
        oH = (0, h.A)("MessageSquareOff", [
          ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10", key: "pwpm4a" },
          ],
        ]),
        oS = (0, h.A)("MessageSquarePlus", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "M12 7v6", key: "lw1j43" }],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
        ]),
        oV = (0, h.A)("MessageSquareQuote", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8", key: "1jfesj" }],
          ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2", key: "1dq9mh" }],
        ]),
        oL = (0, h.A)("MessageSquareReply", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "m10 7-3 3 3 3", key: "1eugdv" }],
          ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7", key: "ernfh3" }],
        ]),
        oP = (0, h.A)("MessageSquareShare", [
          [
            "path",
            {
              d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",
              key: "tqtdkg",
            },
          ],
          ["path", { d: "M16 3h5v5", key: "1806ms" }],
          ["path", { d: "m16 8 5-5", key: "15mbrl" }],
        ]),
        oR = (0, h.A)("MessageSquareText", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "M13 8H7", key: "14i4kc" }],
          ["path", { d: "M17 12H7", key: "16if0g" }],
        ]),
        oD = (0, h.A)("MessageSquareWarning", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "M12 7v2", key: "stiyo7" }],
          ["path", { d: "M12 13h.01", key: "y0uutt" }],
        ]),
        oT = (0, h.A)("MessageSquareX", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
          ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
          ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }],
        ]),
        oF = (0, h.A)("MessageSquare", [
          [
            "path",
            {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              key: "1lielz",
            },
          ],
        ]),
        oE = (0, h.A)("MessagesSquare", [
          [
            "path",
            {
              d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
              key: "p1xzt8",
            },
          ],
          [
            "path",
            {
              d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
              key: "1cx29u",
            },
          ],
        ]),
        oB = (0, h.A)("MicOff", [
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
          [
            "path",
            { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" },
          ],
          ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
          ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
          ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
          ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
        ]),
        oO = (0, h.A)("MicVocal", [
          [
            "path",
            {
              d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
              key: "80a601",
            },
          ],
          [
            "path",
            {
              d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
              key: "j0ngtp",
            },
          ],
          ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }],
        ]),
        oZ = (0, h.A)("Mic", [
          [
            "path",
            {
              d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
              key: "131961",
            },
          ],
          ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
          ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
        ]),
        oI = (0, h.A)("Microchip", [
          ["path", { d: "M18 12h2", key: "quuxs7" }],
          ["path", { d: "M18 16h2", key: "zsn3lv" }],
          ["path", { d: "M18 20h2", key: "9x5y9y" }],
          ["path", { d: "M18 4h2", key: "1luxfb" }],
          ["path", { d: "M18 8h2", key: "nxqzg" }],
          ["path", { d: "M4 12h2", key: "1ltxp0" }],
          ["path", { d: "M4 16h2", key: "8a5zha" }],
          ["path", { d: "M4 20h2", key: "27dk57" }],
          ["path", { d: "M4 4h2", key: "10groj" }],
          ["path", { d: "M4 8h2", key: "18vq6w" }],
          [
            "path",
            {
              d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",
              key: "1681fp",
            },
          ],
        ]),
        oN = (0, h.A)("Microscope", [
          ["path", { d: "M6 18h8", key: "1borvv" }],
          ["path", { d: "M3 22h18", key: "8prr45" }],
          ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
          ["path", { d: "M9 14h2", key: "197e7h" }],
          [
            "path",
            { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" },
          ],
          [
            "path",
            { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" },
          ],
        ]),
        oU = (0, h.A)("Microwave", [
          [
            "rect",
            {
              width: "20",
              height: "15",
              x: "2",
              y: "4",
              rx: "2",
              key: "2no95f",
            },
          ],
          [
            "rect",
            { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" },
          ],
          ["path", { d: "M18 8v7", key: "o5zi4n" }],
          ["path", { d: "M6 19v2", key: "1loha6" }],
          ["path", { d: "M18 19v2", key: "1dawf0" }],
        ]),
        oG = (0, h.A)("Milestone", [
          ["path", { d: "M12 13v8", key: "1l5pq0" }],
          ["path", { d: "M12 3v3", key: "1n5kay" }],
          [
            "path",
            {
              d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",
              key: "1btarq",
            },
          ],
        ]),
        oW = (0, h.A)("MilkOff", [
          ["path", { d: "M8 2h8", key: "1ssgc1" }],
          [
            "path",
            {
              d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
              key: "y0ejgx",
            },
          ],
          [
            "path",
            {
              d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",
              key: "iaxqsy",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        o_ = (0, h.A)("Milk", [
          ["path", { d: "M8 2h8", key: "1ssgc1" }],
          [
            "path",
            {
              d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
              key: "qtp12x",
            },
          ],
          [
            "path",
            {
              d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
              key: "ygeh44",
            },
          ],
        ]),
        oX = (0, h.A)("Minimize2", [
          ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
          ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
          ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
          ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
        ]),
        oK = (0, h.A)("Minimize", [
          ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
          ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
          ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
          ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }],
        ]),
        oY = (0, h.A)("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]),
        oJ = (0, h.A)("MonitorCheck", [
          ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
        ]),
        oQ = (0, h.A)("MonitorCog", [
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "m15.2 4.9-.9-.4", key: "12wd2u" }],
          ["path", { d: "m15.2 7.1-.9.4", key: "1r2vl7" }],
          ["path", { d: "m16.9 3.2-.4-.9", key: "3zbo91" }],
          ["path", { d: "m16.9 8.8-.4.9", key: "1qr2dn" }],
          ["path", { d: "m19.5 2.3-.4.9", key: "1rjrkq" }],
          ["path", { d: "m19.5 9.7-.4-.9", key: "heryx5" }],
          ["path", { d: "m21.7 4.5-.9.4", key: "17fqt1" }],
          ["path", { d: "m21.7 7.5-.9-.4", key: "14zyni" }],
          [
            "path",
            {
              d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
              key: "1tnzv8",
            },
          ],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
        ]),
        o$ = (0, h.A)("MonitorDot", [
          ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
          [
            "path",
            {
              d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
              key: "1fet9y",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
        ]),
        o1 = (0, h.A)("MonitorDown", [
          ["path", { d: "M12 13V7", key: "h0r20n" }],
          ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
        ]),
        o2 = (0, h.A)("MonitorOff", [
          [
            "path",
            { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2", key: "k0q8oc" },
          ],
          ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9", key: "cp1ac0" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        o0 = (0, h.A)("MonitorPause", [
          ["path", { d: "M10 13V7", key: "1u13u9" }],
          ["path", { d: "M14 13V7", key: "1vj9om" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
        ]),
        o4 = (0, h.A)("MonitorPlay", [
          [
            "path",
            {
              d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
              key: "1pctta",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          [
            "rect",
            {
              x: "2",
              y: "3",
              width: "20",
              height: "14",
              rx: "2",
              key: "x3v2xh",
            },
          ],
        ]),
        o5 = (0, h.A)("MonitorSmartphone", [
          [
            "path",
            {
              d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
              key: "10dyio",
            },
          ],
          ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
          ["path", { d: "M7 19h5", key: "qswx4l" }],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "16",
              y: "12",
              rx: "2",
              key: "1egngj",
            },
          ],
        ]),
        o3 = (0, h.A)("MonitorSpeaker", [
          ["path", { d: "M5.5 20H8", key: "1k40s5" }],
          ["path", { d: "M17 9h.01", key: "1j24nn" }],
          [
            "rect",
            {
              width: "10",
              height: "16",
              x: "12",
              y: "4",
              rx: "2",
              key: "ixliua",
            },
          ],
          [
            "path",
            { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" },
          ],
          ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }],
        ]),
        o6 = (0, h.A)("MonitorStop", [
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          [
            "rect",
            {
              x: "2",
              y: "3",
              width: "20",
              height: "14",
              rx: "2",
              key: "x3v2xh",
            },
          ],
          [
            "rect",
            { x: "9", y: "7", width: "6", height: "6", rx: "1", key: "5m2oou" },
          ],
        ]),
        o8 = (0, h.A)("MonitorUp", [
          ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
          ["path", { d: "M12 13V7", key: "h0r20n" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
        ]),
        o7 = (0, h.A)("MonitorX", [
          ["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }],
          ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
        ]),
        o9 = (0, h.A)("Monitor", [
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
          ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
        ])
      var Me = t(5205)
      let Ma = (0, h.A)("Moon", [
          ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
        ]),
        Mt = (0, h.A)("MountainSnow", [
          ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
          [
            "path",
            {
              d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",
              key: "1pvmmp",
            },
          ],
        ]),
        Mh = (0, h.A)("Mountain", [
          ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
        ]),
        My = (0, h.A)("MouseOff", [
          ["path", { d: "M12 6v.343", key: "1gyhex" }],
          [
            "path",
            {
              d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",
              key: "ukzz01",
            },
          ],
          ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902", key: "104jy9" }],
          ["path", { d: "M22 22 2 2", key: "1r8tn9" }],
        ]),
        Mr = (0, h.A)("MousePointer2", [
          [
            "path",
            {
              d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
              key: "edeuup",
            },
          ],
        ]),
        Md = (0, h.A)("MousePointerBan", [
          [
            "path",
            {
              d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",
              key: "11pp1i",
            },
          ],
          ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
          ["path", { d: "m11.8 11.8 8.4 8.4", key: "oogvdj" }],
        ]),
        Mp = (0, h.A)("MousePointerClick", [
          ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
          ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
          ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
          ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
          [
            "path",
            {
              d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
              key: "s0h3yz",
            },
          ],
        ]),
        Mk = (0, h.A)("MousePointer", [
          ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
          [
            "path",
            {
              d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
              key: "277e5u",
            },
          ],
        ]),
        Ml = (0, h.A)("Mouse", [
          [
            "rect",
            {
              x: "5",
              y: "2",
              width: "14",
              height: "20",
              rx: "7",
              key: "11ol66",
            },
          ],
          ["path", { d: "M12 6v4", key: "16clxf" }],
        ]),
        Mi = (0, h.A)("Move3d", [
          ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
          ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
          ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
          ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }],
        ]),
        Mn = (0, h.A)("MoveDiagonal2", [
          ["polyline", { points: "5 11 5 5 11 5", key: "ncfzxk" }],
          ["polyline", { points: "19 13 19 19 13 19", key: "1mk7hk" }],
          ["line", { x1: "5", x2: "19", y1: "5", y2: "19", key: "mcyte3" }],
        ]),
        Mc = (0, h.A)("MoveDiagonal", [
          ["polyline", { points: "13 5 19 5 19 11", key: "11219e" }],
          ["polyline", { points: "11 19 5 19 5 13", key: "sfq3wq" }],
          ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
        ]),
        Mo = (0, h.A)("MoveDownLeft", [
          ["path", { d: "M11 19H5V13", key: "1akmht" }],
          ["path", { d: "M19 5L5 19", key: "72u4yj" }],
        ]),
        MM = (0, h.A)("MoveDownRight", [
          ["path", { d: "M19 13V19H13", key: "10vkzq" }],
          ["path", { d: "M5 5L19 19", key: "5zm2fv" }],
        ]),
        Ms = (0, h.A)("MoveDown", [
          ["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }],
          ["path", { d: "M12 2V22", key: "r89rzk" }],
        ]),
        Mu = (0, h.A)("MoveHorizontal", [
          ["polyline", { points: "18 8 22 12 18 16", key: "1hqrds" }],
          ["polyline", { points: "6 8 2 12 6 16", key: "f0ernq" }],
          ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
        ]),
        Mv = (0, h.A)("MoveLeft", [
          ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
          ["path", { d: "M2 12H22", key: "1m8cig" }],
        ]),
        Mm = (0, h.A)("MoveRight", [
          ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
          ["path", { d: "M2 12H22", key: "1m8cig" }],
        ]),
        Mx = (0, h.A)("MoveUpLeft", [
          ["path", { d: "M5 11V5H11", key: "3q78g9" }],
          ["path", { d: "M5 5L19 19", key: "5zm2fv" }],
        ]),
        Mf = (0, h.A)("MoveUpRight", [
          ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
          ["path", { d: "M19 5L5 19", key: "72u4yj" }],
        ]),
        Mg = (0, h.A)("MoveUp", [
          ["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }],
          ["path", { d: "M12 2V22", key: "r89rzk" }],
        ]),
        MA = (0, h.A)("MoveVertical", [
          ["polyline", { points: "8 18 12 22 16 18", key: "1uutw3" }],
          ["polyline", { points: "8 6 12 2 16 6", key: "d60sxy" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        ]),
        Mw = (0, h.A)("Move", [
          ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
          ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
          ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
          ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
          ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
        ]),
        Mb = (0, h.A)("Music2", [
          ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
          ["path", { d: "M12 18V2l7 4", key: "g04rme" }],
        ]),
        MC = (0, h.A)("Music3", [
          ["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }],
          ["path", { d: "M16 18V2", key: "40x2m5" }],
        ]),
        Mq = (0, h.A)("Music4", [
          ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
          ["path", { d: "m9 9 12-2", key: "1e64n2" }],
          ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
          ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
        ]),
        Mz = (0, h.A)("Music", [
          ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
          ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
          ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
        ]),
        Mj = (0, h.A)("Navigation2Off", [
          ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }],
          ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        MH = (0, h.A)("Navigation2", [
          ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }],
        ]),
        MS = (0, h.A)("NavigationOff", [
          ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }],
          ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        MV = (0, h.A)("Navigation", [
          ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
        ]),
        ML = (0, h.A)("Network", [
          [
            "rect",
            {
              x: "16",
              y: "16",
              width: "6",
              height: "6",
              rx: "1",
              key: "4q2zg0",
            },
          ],
          [
            "rect",
            {
              x: "2",
              y: "16",
              width: "6",
              height: "6",
              rx: "1",
              key: "8cvhb9",
            },
          ],
          [
            "rect",
            { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" },
          ],
          [
            "path",
            { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" },
          ],
          ["path", { d: "M12 12V8", key: "2874zd" }],
        ]),
        MP = (0, h.A)("Newspaper", [
          [
            "path",
            {
              d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
              key: "7pis2x",
            },
          ],
          ["path", { d: "M18 14h-8", key: "sponae" }],
          ["path", { d: "M15 18h-5", key: "95g1m2" }],
          ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }],
        ]),
        MR = (0, h.A)("Nfc", [
          ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
          [
            "path",
            { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" },
          ],
          [
            "path",
            { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" },
          ],
          ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }],
        ]),
        MD = (0, h.A)("NotebookPen", [
          [
            "path",
            {
              d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
              key: "re6nr2",
            },
          ],
          ["path", { d: "M2 6h4", key: "aawbzj" }],
          ["path", { d: "M2 10h4", key: "l0bgd4" }],
          ["path", { d: "M2 14h4", key: "1gsvsf" }],
          ["path", { d: "M2 18h4", key: "1bu2t1" }],
          [
            "path",
            {
              d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "pqwjuv",
            },
          ],
        ]),
        MT = (0, h.A)("NotebookTabs", [
          ["path", { d: "M2 6h4", key: "aawbzj" }],
          ["path", { d: "M2 10h4", key: "l0bgd4" }],
          ["path", { d: "M2 14h4", key: "1gsvsf" }],
          ["path", { d: "M2 18h4", key: "1bu2t1" }],
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              key: "1nb95v",
            },
          ],
          ["path", { d: "M15 2v20", key: "dcj49h" }],
          ["path", { d: "M15 7h5", key: "1xj5lc" }],
          ["path", { d: "M15 12h5", key: "w5shd9" }],
          ["path", { d: "M15 17h5", key: "1qaofu" }],
        ]),
        MF = (0, h.A)("NotebookText", [
          ["path", { d: "M2 6h4", key: "aawbzj" }],
          ["path", { d: "M2 10h4", key: "l0bgd4" }],
          ["path", { d: "M2 14h4", key: "1gsvsf" }],
          ["path", { d: "M2 18h4", key: "1bu2t1" }],
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              key: "1nb95v",
            },
          ],
          ["path", { d: "M9.5 8h5", key: "11mslq" }],
          ["path", { d: "M9.5 12H16", key: "ktog6x" }],
          ["path", { d: "M9.5 16H14", key: "p1seyn" }],
        ]),
        ME = (0, h.A)("Notebook", [
          ["path", { d: "M2 6h4", key: "aawbzj" }],
          ["path", { d: "M2 10h4", key: "l0bgd4" }],
          ["path", { d: "M2 14h4", key: "1gsvsf" }],
          ["path", { d: "M2 18h4", key: "1bu2t1" }],
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              key: "1nb95v",
            },
          ],
          ["path", { d: "M16 2v20", key: "rotuqe" }],
        ]),
        MB = (0, h.A)("NotepadTextDashed", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M12 2v4", key: "3427ic" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "j91f56" }],
          ["path", { d: "M20 12v2", key: "w8o0tu" }],
          ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1", key: "1c9ggx" }],
          ["path", { d: "M13 22h-2", key: "191ugt" }],
          ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2", key: "1rt9px" }],
          ["path", { d: "M4 14v-2", key: "1v0sqh" }],
          ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2", key: "1mwabg" }],
          ["path", { d: "M8 10h6", key: "3oa6kw" }],
          ["path", { d: "M8 14h8", key: "1fgep2" }],
          ["path", { d: "M8 18h5", key: "17enja" }],
        ]),
        MO = (0, h.A)("NotepadText", [
          ["path", { d: "M8 2v4", key: "1cmpym" }],
          ["path", { d: "M12 2v4", key: "3427ic" }],
          ["path", { d: "M16 2v4", key: "4m81vk" }],
          [
            "rect",
            {
              width: "16",
              height: "18",
              x: "4",
              y: "4",
              rx: "2",
              key: "1u9h20",
            },
          ],
          ["path", { d: "M8 10h6", key: "3oa6kw" }],
          ["path", { d: "M8 14h8", key: "1fgep2" }],
          ["path", { d: "M8 18h5", key: "17enja" }],
        ]),
        MZ = (0, h.A)("NutOff", [
          ["path", { d: "M12 4V2", key: "1k5q1u" }],
          [
            "path",
            {
              d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
              key: "1xcvy9",
            },
          ],
          ["path", { d: "M19 10v3.343", key: "163tfc" }],
          [
            "path",
            {
              d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
              key: "17914v",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        MI = (0, h.A)("Nut", [
          ["path", { d: "M12 4V2", key: "1k5q1u" }],
          [
            "path",
            {
              d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
              key: "1tgyif",
            },
          ],
          [
            "path",
            {
              d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
              key: "tnsqj",
            },
          ],
        ]),
        MN = (0, h.A)("OctagonAlert", [
          ["path", { d: "M12 16h.01", key: "1drbdi" }],
          ["path", { d: "M12 8v4", key: "1got3b" }],
          [
            "path",
            {
              d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
              key: "1fd625",
            },
          ],
        ]),
        MU = (0, h.A)("OctagonMinus", [
          [
            "path",
            {
              d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
              key: "2d38gg",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
        ]),
        MG = (0, h.A)("OctagonPause", [
          ["path", { d: "M10 15V9", key: "1lckn7" }],
          ["path", { d: "M14 15V9", key: "1muqhk" }],
          [
            "path",
            {
              d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
              key: "2d38gg",
            },
          ],
        ]),
        MW = (0, h.A)("OctagonX", [
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          [
            "path",
            {
              d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
              key: "2d38gg",
            },
          ],
          ["path", { d: "m9 9 6 6", key: "z0biqf" }],
        ]),
        M_ = (0, h.A)("Octagon", [
          [
            "path",
            {
              d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
              key: "2d38gg",
            },
          ],
        ]),
        MX = (0, h.A)("Omega", [
          [
            "path",
            {
              d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",
              key: "1x94xo",
            },
          ],
        ]),
        MK = (0, h.A)("Option", [
          ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
          ["path", { d: "M14 3h7", key: "16f0ms" }],
        ]),
        MY = (0, h.A)("Orbit", [
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
          ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
          ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416", key: "eohfx2" }],
          ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416", key: "19pvbm" }],
        ]),
        MJ = (0, h.A)("Origami", [
          [
            "path",
            {
              d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",
              key: "1bx4vc",
            },
          ],
          [
            "path",
            {
              d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",
              key: "1h3km6",
            },
          ],
          [
            "path",
            {
              d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",
              key: "1hj4wg",
            },
          ],
        ]),
        MQ = (0, h.A)("Package2", [
          [
            "path",
            { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" },
          ],
          [
            "path",
            {
              d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",
              key: "19h2x1",
            },
          ],
          ["path", { d: "M12 3v6", key: "1holv5" }],
        ]),
        M$ = (0, h.A)("PackageCheck", [
          ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
          [
            "path",
            {
              d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
              key: "e7tb2h",
            },
          ],
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
          ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
        ]),
        M1 = (0, h.A)("PackageMinus", [
          ["path", { d: "M16 16h6", key: "100bgy" }],
          [
            "path",
            {
              d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
              key: "e7tb2h",
            },
          ],
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
          ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
        ]),
        M2 = (0, h.A)("PackageOpen", [
          ["path", { d: "M12 22v-9", key: "x3hkom" }],
          [
            "path",
            {
              d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
              key: "2ntwy6",
            },
          ],
          [
            "path",
            {
              d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
              key: "1pmm1c",
            },
          ],
          [
            "path",
            {
              d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
              key: "12ttoo",
            },
          ],
        ]),
        M0 = (0, h.A)("PackagePlus", [
          ["path", { d: "M16 16h6", key: "100bgy" }],
          ["path", { d: "M19 13v6", key: "85cyf1" }],
          [
            "path",
            {
              d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
              key: "e7tb2h",
            },
          ],
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
          ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
        ]),
        M4 = (0, h.A)("PackageSearch", [
          [
            "path",
            {
              d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
              key: "e7tb2h",
            },
          ],
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
          ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
          ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
          ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }],
        ]),
        M5 = (0, h.A)("PackageX", [
          [
            "path",
            {
              d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
              key: "e7tb2h",
            },
          ],
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
          ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
          ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
          ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }],
        ]),
        M3 = (0, h.A)("Package", [
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
          [
            "path",
            {
              d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
              key: "hh9hay",
            },
          ],
          ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
          ["path", { d: "M12 22V12", key: "d0xqtd" }],
        ]),
        M6 = (0, h.A)("PaintBucket", [
          [
            "path",
            {
              d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",
              key: "irua1i",
            },
          ],
          ["path", { d: "m5 2 5 5", key: "1lls2c" }],
          ["path", { d: "M2 13h15", key: "1hkzvu" }],
          [
            "path",
            {
              d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",
              key: "xk76lq",
            },
          ],
        ]),
        M8 = (0, h.A)("PaintRoller", [
          [
            "rect",
            {
              width: "16",
              height: "6",
              x: "2",
              y: "2",
              rx: "2",
              key: "jcyz7m",
            },
          ],
          [
            "path",
            {
              d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
              key: "1b9h7c",
            },
          ],
          [
            "rect",
            {
              width: "4",
              height: "6",
              x: "8",
              y: "16",
              rx: "1",
              key: "d6e7yl",
            },
          ],
        ]),
        M7 = (0, h.A)("PaintbrushVertical", [
          ["path", { d: "M10 2v2", key: "7u0qdc" }],
          ["path", { d: "M14 2v4", key: "qmzblu" }],
          [
            "path",
            { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z", key: "ycvu00" },
          ],
          [
            "path",
            {
              d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",
              key: "iw4wnp",
            },
          ],
        ]),
        M9 = (0, h.A)("Paintbrush", [
          ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
          [
            "path",
            {
              d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
              key: "18tc5c",
            },
          ],
          [
            "path",
            {
              d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
              key: "ytzfxy",
            },
          ],
        ]),
        se = (0, h.A)("Palette", [
          [
            "circle",
            {
              cx: "13.5",
              cy: "6.5",
              r: ".5",
              fill: "currentColor",
              key: "1okk4w",
            },
          ],
          [
            "circle",
            {
              cx: "17.5",
              cy: "10.5",
              r: ".5",
              fill: "currentColor",
              key: "f64h9f",
            },
          ],
          [
            "circle",
            {
              cx: "8.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "fotxhn",
            },
          ],
          [
            "circle",
            {
              cx: "6.5",
              cy: "12.5",
              r: ".5",
              fill: "currentColor",
              key: "qy21gx",
            },
          ],
          [
            "path",
            {
              d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
              key: "12rzf8",
            },
          ],
        ]),
        sa = (0, h.A)("PanelBottomClose", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 15h18", key: "5xshup" }],
          ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }],
        ]),
        st = (0, h.A)("PanelBottomDashed", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M14 15h1", key: "171nev" }],
          ["path", { d: "M19 15h2", key: "1vnucp" }],
          ["path", { d: "M3 15h2", key: "8bym0q" }],
          ["path", { d: "M9 15h1", key: "1tg3ks" }],
        ]),
        sh = (0, h.A)("PanelBottomOpen", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 15h18", key: "5xshup" }],
          ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
        ]),
        sy = (0, h.A)("PanelBottom", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 15h18", key: "5xshup" }],
        ]),
        sr = (0, h.A)("PanelLeftClose", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
          ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }],
        ]),
        sd = (0, h.A)("PanelLeftDashed", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 14v1", key: "askpd8" }],
          ["path", { d: "M9 19v2", key: "16tejx" }],
          ["path", { d: "M9 3v2", key: "1noubl" }],
          ["path", { d: "M9 9v1", key: "19ebxg" }],
        ]),
        sp = (0, h.A)("PanelLeftOpen", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
          ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }],
        ])
      var sk = t(5039)
      let sl = (0, h.A)("PanelRightClose", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M15 3v18", key: "14nvp0" }],
          ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }],
        ]),
        si = (0, h.A)("PanelRightDashed", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M15 14v1", key: "ilsfch" }],
          ["path", { d: "M15 19v2", key: "1fst2f" }],
          ["path", { d: "M15 3v2", key: "z204g4" }],
          ["path", { d: "M15 9v1", key: "z2a8b1" }],
        ]),
        sn = (0, h.A)("PanelRightOpen", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M15 3v18", key: "14nvp0" }],
          ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
        ]),
        sc = (0, h.A)("PanelRight", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M15 3v18", key: "14nvp0" }],
        ]),
        so = (0, h.A)("PanelTopClose", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }],
        ]),
        sM = (0, h.A)("PanelTopDashed", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M14 9h1", key: "l0svgy" }],
          ["path", { d: "M19 9h2", key: "te2zfg" }],
          ["path", { d: "M3 9h2", key: "1h4ldw" }],
          ["path", { d: "M9 9h1", key: "15jzuz" }],
        ]),
        ss = (0, h.A)("PanelTopOpen", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }],
        ]),
        su = (0, h.A)("PanelTop", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9h18", key: "1pudct" }],
        ]),
        sv = (0, h.A)("PanelsLeftBottom", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
          ["path", { d: "M9 15h12", key: "5ijen5" }],
        ]),
        sm = (0, h.A)("PanelsRightBottom", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 15h12", key: "1wkqb3" }],
          ["path", { d: "M15 3v18", key: "14nvp0" }],
        ]),
        sx = (0, h.A)("PanelsTopLeft", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "M9 21V9", key: "1oto5p" }],
        ]),
        sf = (0, h.A)("Paperclip", [
          [
            "path",
            {
              d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
              key: "1u3ebp",
            },
          ],
        ]),
        sg = (0, h.A)("Parentheses", [
          ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
          ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
        ]),
        sA = (0, h.A)("ParkingMeter", [
          ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }],
          ["path", { d: "M12 12v3", key: "158kv8" }],
          ["path", { d: "M11 15h2", key: "199qp6" }],
          [
            "path",
            {
              d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",
              key: "1l50wn",
            },
          ],
          ["path", { d: "M12 19v3", key: "npa21l" }],
        ]),
        sw = (0, h.A)("PartyPopper", [
          ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
          ["path", { d: "M4 3h.01", key: "1vcuye" }],
          ["path", { d: "M22 8h.01", key: "1mrtc2" }],
          ["path", { d: "M15 2h.01", key: "1cjtqr" }],
          ["path", { d: "M22 20h.01", key: "1mrys2" }],
          [
            "path",
            {
              d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
              key: "hbicv8",
            },
          ],
          [
            "path",
            {
              d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
              key: "1i94pl",
            },
          ],
          [
            "path",
            {
              d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
              key: "1cofks",
            },
          ],
          [
            "path",
            {
              d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
              key: "4kbmks",
            },
          ],
        ]),
        sb = (0, h.A)("Pause", [
          [
            "rect",
            {
              x: "14",
              y: "4",
              width: "4",
              height: "16",
              rx: "1",
              key: "zuxfzm",
            },
          ],
          [
            "rect",
            {
              x: "6",
              y: "4",
              width: "4",
              height: "16",
              rx: "1",
              key: "1okwgv",
            },
          ],
        ]),
        sC = (0, h.A)("PawPrint", [
          ["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }],
          ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }],
          ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
          [
            "path",
            {
              d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
              key: "1ydw1z",
            },
          ],
        ]),
        sq = (0, h.A)("PcCase", [
          [
            "rect",
            {
              width: "14",
              height: "20",
              x: "5",
              y: "2",
              rx: "2",
              key: "1uq1d7",
            },
          ],
          ["path", { d: "M15 14h.01", key: "1kp3bh" }],
          ["path", { d: "M9 6h6", key: "dgm16u" }],
          ["path", { d: "M9 10h6", key: "9gxzsh" }],
        ]),
        sz = (0, h.A)("PenLine", [
          ["path", { d: "M12 20h9", key: "t2du7b" }],
          [
            "path",
            {
              d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
              key: "1ykcvy",
            },
          ],
        ]),
        sj = (0, h.A)("PenOff", [
          [
            "path",
            {
              d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
              key: "bjo8r8",
            },
          ],
          [
            "path",
            {
              d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",
              key: "16h5ne",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        sH = (0, h.A)("PenTool", [
          [
            "path",
            {
              d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
              key: "nt11vn",
            },
          ],
          [
            "path",
            {
              d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
              key: "15qc1e",
            },
          ],
          ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
          ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }],
        ]),
        sS = (0, h.A)("Pen", [
          [
            "path",
            {
              d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
              key: "1a8usu",
            },
          ],
        ]),
        sV = (0, h.A)("PencilLine", [
          ["path", { d: "M12 20h9", key: "t2du7b" }],
          [
            "path",
            {
              d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
              key: "1ykcvy",
            },
          ],
          ["path", { d: "m15 5 3 3", key: "1w25hb" }],
        ]),
        sL = (0, h.A)("PencilOff", [
          [
            "path",
            {
              d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
              key: "bjo8r8",
            },
          ],
          [
            "path",
            {
              d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",
              key: "16h5ne",
            },
          ],
          ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        sP = (0, h.A)("PencilRuler", [
          [
            "path",
            {
              d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",
              key: "orapub",
            },
          ],
          ["path", { d: "m8 6 2-2", key: "115y1s" }],
          ["path", { d: "m18 16 2-2", key: "ee94s4" }],
          [
            "path",
            {
              d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
              key: "cfq27r",
            },
          ],
          [
            "path",
            {
              d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
              key: "1a8usu",
            },
          ],
          ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
        ]),
        sR = (0, h.A)("Pencil", [
          [
            "path",
            {
              d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
              key: "1a8usu",
            },
          ],
          ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
        ]),
        sD = (0, h.A)("Pentagon", [
          [
            "path",
            {
              d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",
              key: "2hea0t",
            },
          ],
        ]),
        sT = (0, h.A)("Percent", [
          ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
          ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
          ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }],
        ]),
        sF = (0, h.A)("PersonStanding", [
          ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
          ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
          ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
          ["path", { d: "M12 10v4", key: "1kjpxc" }],
        ]),
        sE = (0, h.A)("PhilippinePeso", [
          ["path", { d: "M20 11H4", key: "6ut86h" }],
          ["path", { d: "M20 7H4", key: "zbl0bi" }],
          [
            "path",
            { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7", key: "1ana5r" },
          ],
        ]),
        sB = (0, h.A)("PhoneCall", [
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
          ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
          ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }],
        ]),
        sO = (0, h.A)("PhoneForwarded", [
          ["polyline", { points: "18 2 22 6 18 10", key: "6vjanh" }],
          ["line", { x1: "14", x2: "22", y1: "6", y2: "6", key: "1jsywh" }],
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
        ]),
        sZ = (0, h.A)("PhoneIncoming", [
          ["polyline", { points: "16 2 16 8 22 8", key: "1ygljm" }],
          ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
        ]),
        sI = (0, h.A)("PhoneMissed", [
          ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
          ["line", { x1: "16", x2: "22", y1: "2", y2: "8", key: "13zxdn" }],
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
        ]),
        sN = (0, h.A)("PhoneOff", [
          [
            "path",
            {
              d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
              key: "z86iuo",
            },
          ],
          ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }],
        ]),
        sU = (0, h.A)("PhoneOutgoing", [
          ["polyline", { points: "22 8 22 2 16 2", key: "1g204g" }],
          ["line", { x1: "16", x2: "22", y1: "8", y2: "2", key: "1ggias" }],
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
        ]),
        sG = (0, h.A)("Phone", [
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
        ]),
        sW = (0, h.A)("Pi", [
          ["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }],
          ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }],
          ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }],
        ]),
        s_ = (0, h.A)("Piano", [
          [
            "path",
            {
              d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
              key: "lag0yf",
            },
          ],
          ["path", { d: "M2 14h20", key: "myj16y" }],
          ["path", { d: "M6 14v4", key: "9ng0ue" }],
          ["path", { d: "M10 14v4", key: "1v8uk5" }],
          ["path", { d: "M14 14v4", key: "1tqops" }],
          ["path", { d: "M18 14v4", key: "18uqwm" }],
        ]),
        sX = (0, h.A)("Pickaxe", [
          [
            "path",
            {
              d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",
              key: "we99rg",
            },
          ],
          [
            "path",
            {
              d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",
              key: "1w6hck",
            },
          ],
          [
            "path",
            {
              d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",
              key: "15hgfx",
            },
          ],
          [
            "path",
            {
              d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",
              key: "452b4h",
            },
          ],
        ]),
        sK = (0, h.A)("PictureInPicture2", [
          [
            "path",
            {
              d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",
              key: "daa4of",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "7",
              x: "12",
              y: "13",
              rx: "2",
              key: "1nb8gs",
            },
          ],
        ]),
        sY = (0, h.A)("PictureInPicture", [
          [
            "path",
            {
              d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",
              key: "bcd8fb",
            },
          ],
          [
            "rect",
            {
              width: "10",
              height: "7",
              x: "12",
              y: "13.5",
              ry: "2",
              key: "136fx3",
            },
          ],
        ]),
        sJ = (0, h.A)("PiggyBank", [
          [
            "path",
            {
              d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",
              key: "1ivx2i",
            },
          ],
          ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1", key: "nm575m" }],
          ["path", { d: "M16 11h.01", key: "xkw8gn" }],
        ]),
        sQ = (0, h.A)("PilcrowLeft", [
          ["path", { d: "M14 3v11", key: "mlfb7b" }],
          ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9", key: "1ulc19" }],
          ["path", { d: "M18 3v11", key: "1phi0r" }],
          ["path", { d: "M22 18H2l4-4", key: "yt65j9" }],
          ["path", { d: "m6 22-4-4", key: "6jgyf5" }],
        ]),
        s$ = (0, h.A)("PilcrowRight", [
          ["path", { d: "M10 3v11", key: "o3l5kj" }],
          ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8", key: "1wb1nc" }],
          ["path", { d: "M14 3v11", key: "mlfb7b" }],
          ["path", { d: "m18 14 4 4H2", key: "4r8io1" }],
          ["path", { d: "m22 18-4 4", key: "1hjjrd" }],
        ]),
        s1 = (0, h.A)("Pilcrow", [
          ["path", { d: "M13 4v16", key: "8vvj80" }],
          ["path", { d: "M17 4v16", key: "7dpous" }],
          ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }],
        ]),
        s2 = (0, h.A)("PillBottle", [
          [
            "path",
            { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4", key: "17ldeb" },
          ],
          [
            "path",
            { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7", key: "nc37y6" },
          ],
          [
            "rect",
            {
              width: "16",
              height: "5",
              x: "4",
              y: "2",
              rx: "1",
              key: "3jeezo",
            },
          ],
        ]),
        s0 = (0, h.A)("Pill", [
          [
            "path",
            {
              d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
              key: "wa1lgi",
            },
          ],
          ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }],
        ]),
        s4 = (0, h.A)("PinOff", [
          ["path", { d: "M12 17v5", key: "bb1du9" }],
          [
            "path",
            { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
              key: "c9qhm2",
            },
          ],
        ]),
        s5 = (0, h.A)("Pin", [
          ["path", { d: "M12 17v5", key: "bb1du9" }],
          [
            "path",
            {
              d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
              key: "1nkz8b",
            },
          ],
        ]),
        s3 = (0, h.A)("Pipette", [
          ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
          ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
          [
            "path",
            {
              d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
              key: "196du1",
            },
          ],
        ]),
        s6 = (0, h.A)("Pizza", [
          ["path", { d: "M15 11h.01", key: "rns66s" }],
          ["path", { d: "M11 15h.01", key: "k85uqc" }],
          ["path", { d: "M16 16h.01", key: "1f9h7w" }],
          ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
          [
            "path",
            { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" },
          ],
        ]),
        s8 = (0, h.A)("PlaneLanding", [
          ["path", { d: "M2 22h20", key: "272qi7" }],
          [
            "path",
            {
              d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
              key: "1ma21e",
            },
          ],
        ]),
        s7 = (0, h.A)("PlaneTakeoff", [
          ["path", { d: "M2 22h20", key: "272qi7" }],
          [
            "path",
            {
              d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
              key: "fkigj9",
            },
          ],
        ]),
        s9 = (0, h.A)("Plane", [
          [
            "path",
            {
              d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
              key: "1v9wt8",
            },
          ],
        ]),
        ue = (0, h.A)("Play", [
          ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
        ]),
        ua = (0, h.A)("Plug2", [
          ["path", { d: "M9 2v6", key: "17ngun" }],
          ["path", { d: "M15 2v6", key: "s7yy2p" }],
          ["path", { d: "M12 17v5", key: "bb1du9" }],
          ["path", { d: "M5 8h14", key: "pcz4l3" }],
          ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z", key: "wtfw2c" }],
        ]),
        ut = (0, h.A)("PlugZap", [
          [
            "path",
            {
              d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
              key: "goz73y",
            },
          ],
          ["path", { d: "m2 22 3-3", key: "19mgm9" }],
          ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
          ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
          ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }],
        ]),
        uh = (0, h.A)("Plug", [
          ["path", { d: "M12 22v-5", key: "1ega77" }],
          ["path", { d: "M9 8V2", key: "14iosj" }],
          ["path", { d: "M15 8V2", key: "18g5xt" }],
          [
            "path",
            { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" },
          ],
        ]),
        uy = (0, h.A)("Plus", [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "M12 5v14", key: "s699le" }],
        ]),
        ur = (0, h.A)("PocketKnife", [
          [
            "path",
            {
              d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",
              key: "19w3oe",
            },
          ],
          ["path", { d: "M18 6h.01", key: "1v4wsw" }],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          [
            "path",
            {
              d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",
              key: "6fykxj",
            },
          ],
          ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }],
        ]),
        ud = (0, h.A)("Pocket", [
          [
            "path",
            {
              d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
              key: "1mz881",
            },
          ],
          ["polyline", { points: "8 10 12 14 16 10", key: "w4mbv5" }],
        ]),
        up = (0, h.A)("Podcast", [
          ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0", key: "d71mpg" }],
          ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
          ["circle", { cx: "12", cy: "11", r: "1", key: "1gvufo" }],
          [
            "path",
            { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z", key: "za5kbj" },
          ],
        ]),
        uk = (0, h.A)("PointerOff", [
          ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957", key: "jsi14n" }],
          ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295", key: "hirc7f" }],
          [
            "path",
            {
              d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",
              key: "1jxb2e",
            },
          ],
          [
            "path",
            {
              d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
              key: "10r7hm",
            },
          ],
          ["path", { d: "M6 6v8", key: "tv5xkp" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        ul = (0, h.A)("Pointer", [
          ["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
          [
            "path",
            { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1agjmk" },
          ],
          [
            "path",
            { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1", key: "wdbh2u" },
          ],
          [
            "path",
            { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10", key: "1ibuk9" },
          ],
          [
            "path",
            {
              d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
              key: "g6ys72",
            },
          ],
        ]),
        ui = (0, h.A)("Popcorn", [
          [
            "path",
            {
              d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
              key: "10td1f",
            },
          ],
          ["path", { d: "M10 22 9 8", key: "yjptiv" }],
          ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
          [
            "path",
            {
              d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
              key: "1qo33t",
            },
          ],
        ]),
        un = (0, h.A)("Popsicle", [
          [
            "path",
            {
              d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
              key: "1o68ps",
            },
          ],
          ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }],
        ]),
        uc = (0, h.A)("PoundSterling", [
          ["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }],
          ["path", { d: "M10 7v14", key: "18tmcs" }],
          ["path", { d: "M6 21h12", key: "4dkmi1" }],
          ["path", { d: "M6 13h10", key: "ybwr4a" }],
        ]),
        uo = (0, h.A)("PowerOff", [
          ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
          ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
          ["path", { d: "M12 2v4", key: "3427ic" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        uM = (0, h.A)("Power", [
          ["path", { d: "M12 2v10", key: "mnfbl" }],
          ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
        ]),
        us = (0, h.A)("Presentation", [
          ["path", { d: "M2 3h20", key: "91anmk" }],
          [
            "path",
            { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" },
          ],
          ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }],
        ]),
        uu = (0, h.A)("PrinterCheck", [
          [
            "path",
            {
              d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",
              key: "qeb09x",
            },
          ],
          ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
          [
            "path",
            {
              d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",
              key: "1md90i",
            },
          ],
          [
            "path",
            { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" },
          ],
        ]),
        uv = (0, h.A)("Printer", [
          [
            "path",
            {
              d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
              key: "143wyd",
            },
          ],
          [
            "path",
            { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" },
          ],
          [
            "rect",
            {
              x: "6",
              y: "14",
              width: "12",
              height: "8",
              rx: "1",
              key: "1ue0tg",
            },
          ],
        ]),
        um = (0, h.A)("Projector", [
          ["path", { d: "M5 7 3 5", key: "1yys58" }],
          ["path", { d: "M9 6V3", key: "1ptz9u" }],
          ["path", { d: "m13 7 2-2", key: "1w3vmq" }],
          ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }],
          [
            "path",
            {
              d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
              key: "2frwzc",
            },
          ],
          ["path", { d: "M16 16h2", key: "dnq2od" }],
        ]),
        ux = (0, h.A)("Proportions", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["path", { d: "M12 9v11", key: "1fnkrn" }],
          ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9", key: "11z3ex" }],
        ]),
        uf = (0, h.A)("Puzzle", [
          [
            "path",
            {
              d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
              key: "i0oyt7",
            },
          ],
        ]),
        ug = (0, h.A)("Pyramid", [
          [
            "path",
            {
              d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
              key: "aenxs0",
            },
          ],
          ["path", { d: "M12 2v20", key: "t6zp3m" }],
        ]),
        uA = (0, h.A)("QrCode", [
          [
            "rect",
            { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" },
          ],
          [
            "rect",
            {
              width: "5",
              height: "5",
              x: "16",
              y: "3",
              rx: "1",
              key: "1v8r4q",
            },
          ],
          [
            "rect",
            {
              width: "5",
              height: "5",
              x: "3",
              y: "16",
              rx: "1",
              key: "1x03jg",
            },
          ],
          ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
          ["path", { d: "M21 21v.01", key: "ents32" }],
          ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
          ["path", { d: "M3 12h.01", key: "nlz23k" }],
          ["path", { d: "M12 3h.01", key: "n36tog" }],
          ["path", { d: "M12 16v.01", key: "133mhm" }],
          ["path", { d: "M16 12h1", key: "1slzba" }],
          ["path", { d: "M21 12v.01", key: "1lwtk9" }],
          ["path", { d: "M12 21v-1", key: "1880an" }],
        ]),
        uw = (0, h.A)("Quote", [
          [
            "path",
            {
              d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
              key: "rib7q0",
            },
          ],
          [
            "path",
            {
              d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
              key: "1ymkrd",
            },
          ],
        ]),
        ub = (0, h.A)("Rabbit", [
          ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
          ["path", { d: "M18 12h.01", key: "yjnet6" }],
          [
            "path",
            {
              d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
              key: "ue9ozu",
            },
          ],
          ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
          ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }],
        ]),
        uC = (0, h.A)("Radar", [
          ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
          ["path", { d: "M4 6h.01", key: "oypzma" }],
          ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
          ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
          ["path", { d: "M12 18h.01", key: "mhygvu" }],
          ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
          ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }],
        ]),
        uq = (0, h.A)("Radiation", [
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          [
            "path",
            {
              d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",
              key: "wy49g3",
            },
          ],
          [
            "path",
            {
              d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",
              key: "vklnvr",
            },
          ],
          [
            "path",
            {
              d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",
              key: "wkdf1o",
            },
          ],
        ]),
        uz = (0, h.A)("Radical", [
          [
            "path",
            {
              d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",
              key: "1mqj8i",
            },
          ],
        ]),
        uj = (0, h.A)("RadioReceiver", [
          ["path", { d: "M5 16v2", key: "g5qcv5" }],
          ["path", { d: "M19 16v2", key: "1gbaio" }],
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "8",
              rx: "2",
              key: "vjsjur",
            },
          ],
          ["path", { d: "M18 12h.01", key: "yjnet6" }],
        ]),
        uH = (0, h.A)("RadioTower", [
          ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
          ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
          ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
          ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
          ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
          ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
          ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }],
        ]),
        uS = (0, h.A)("Radio", [
          ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
          ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
          ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
          ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }],
        ]),
        uV = (0, h.A)("Radius", [
          ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }],
          ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
          ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ]),
        uL = (0, h.A)("RailSymbol", [
          ["path", { d: "M5 15h14", key: "m0yey3" }],
          ["path", { d: "M5 9h14", key: "7tsvo6" }],
          ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }],
        ]),
        uP = (0, h.A)("Rainbow", [
          ["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }],
          ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }],
          ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }],
        ]),
        uR = (0, h.A)("Rat", [
          [
            "path",
            {
              d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4",
              key: "1wq71c",
            },
          ],
          [
            "path",
            {
              d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",
              key: "1crdmb",
            },
          ],
          ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5", key: "1ol3lk" }],
          ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }],
          ["path", { d: "M16 9h.01", key: "1bdo4e" }],
        ]),
        uD = (0, h.A)("Ratio", [
          [
            "rect",
            {
              width: "12",
              height: "20",
              x: "6",
              y: "2",
              rx: "2",
              key: "1oxtiu",
            },
          ],
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "2",
              key: "9lu3g6",
            },
          ],
        ]),
        uT = (0, h.A)("ReceiptCent", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M12 6.5v11", key: "ecfhkf" }],
          ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }],
        ]),
        uF = (0, h.A)("ReceiptEuro", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M8 12h5", key: "1g6qi8" }],
          ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2", key: "b2px4r" }],
        ]),
        uE = (0, h.A)("ReceiptIndianRupee", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M8 7h8", key: "i86dvs" }],
          ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8", key: "grpkl4" }],
          ["path", { d: "M8 11h8", key: "vwpz6n" }],
        ]),
        uB = (0, h.A)("ReceiptJapaneseYen", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "m12 10 3-3", key: "1mc12w" }],
          ["path", { d: "m9 7 3 3v7.5", key: "39i0xv" }],
          ["path", { d: "M9 11h6", key: "1fldmi" }],
          ["path", { d: "M9 15h6", key: "cctwl0" }],
        ]),
        uO = (0, h.A)("ReceiptPoundSterling", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M8 13h5", key: "1k9z8w" }],
          ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0", key: "1dzgp0" }],
          ["path", { d: "M8 17h7", key: "8mjdqu" }],
        ]),
        uZ = (0, h.A)("ReceiptRussianRuble", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M8 15h5", key: "vxg57a" }],
          ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10", key: "1usi5u" }],
        ]),
        uI = (0, h.A)("ReceiptSwissFranc", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M10 17V7h5", key: "k7jq18" }],
          ["path", { d: "M10 11h4", key: "1i0mka" }],
          ["path", { d: "M8 15h5", key: "vxg57a" }],
        ]),
        uN = (0, h.A)("ReceiptText", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          ["path", { d: "M14 8H8", key: "1l3xfs" }],
          ["path", { d: "M16 12H8", key: "1fr5h0" }],
          ["path", { d: "M13 16H8", key: "wsln4y" }],
        ]),
        uU = (0, h.A)("Receipt", [
          [
            "path",
            {
              d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
              key: "q3az6g",
            },
          ],
          [
            "path",
            { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
          ],
          ["path", { d: "M12 17.5v-11", key: "1jc1ny" }],
        ]),
        uG = (0, h.A)("RectangleEllipsis", [
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "2",
              key: "9lu3g6",
            },
          ],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M17 12h.01", key: "1m0b6t" }],
          ["path", { d: "M7 12h.01", key: "eqddd0" }],
        ]),
        uW = (0, h.A)("RectangleHorizontal", [
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "2",
              key: "9lu3g6",
            },
          ],
        ]),
        u_ = (0, h.A)("RectangleVertical", [
          [
            "rect",
            {
              width: "12",
              height: "20",
              x: "6",
              y: "2",
              rx: "2",
              key: "1oxtiu",
            },
          ],
        ]),
        uX = (0, h.A)("Recycle", [
          [
            "path",
            {
              d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
              key: "x6z5xu",
            },
          ],
          [
            "path",
            {
              d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
              key: "1x4zh5",
            },
          ],
          ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
          ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
          [
            "path",
            {
              d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
              key: "9tzpgr",
            },
          ],
          [
            "path",
            { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" },
          ],
        ]),
        uK = (0, h.A)("Redo2", [
          ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
          [
            "path",
            {
              d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
              key: "6uklza",
            },
          ],
        ]),
        uY = (0, h.A)("RedoDot", [
          ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
          ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
          [
            "path",
            { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" },
          ],
        ]),
        uJ = (0, h.A)("Redo", [
          ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
          [
            "path",
            { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" },
          ],
        ]),
        uQ = (0, h.A)("RefreshCcwDot", [
          ["path", { d: "M3 2v6h6", key: "18ldww" }],
          ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8", key: "1pbrqz" }],
          ["path", { d: "M21 22v-6h-6", key: "usdfbe" }],
          ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7", key: "1hosoe" }],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ]),
        u$ = (0, h.A)("RefreshCcw", [
          [
            "path",
            {
              d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
              key: "14sxne",
            },
          ],
          ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
          [
            "path",
            {
              d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
              key: "1hlbsb",
            },
          ],
          ["path", { d: "M16 16h5v5", key: "ccwih5" }],
        ]),
        u1 = (0, h.A)("RefreshCwOff", [
          [
            "path",
            {
              d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",
              key: "1krf6h",
            },
          ],
          ["path", { d: "M8 16H3v5", key: "1cv678" }],
          ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }],
          [
            "path",
            {
              d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",
              key: "19q130",
            },
          ],
          ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }],
          ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
          ["path", { d: "M22 22 2 2", key: "1r8tn9" }],
        ])
      var u2 = t(1267)
      let u0 = (0, h.A)("Refrigerator", [
          [
            "path",
            {
              d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
              key: "fpq118",
            },
          ],
          ["path", { d: "M5 10h14", key: "elsbfy" }],
          ["path", { d: "M15 7v6", key: "1nx30x" }],
        ]),
        u4 = (0, h.A)("Regex", [
          ["path", { d: "M17 3v10", key: "15fgeh" }],
          ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
          ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
          [
            "path",
            {
              d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",
              key: "swwfx4",
            },
          ],
        ]),
        u5 = (0, h.A)("RemoveFormatting", [
          ["path", { d: "M4 7V4h16v3", key: "9msm58" }],
          ["path", { d: "M5 20h6", key: "1h6pxn" }],
          ["path", { d: "M13 4 8 20", key: "kqq6aj" }],
          ["path", { d: "m15 15 5 5", key: "me55sn" }],
          ["path", { d: "m20 15-5 5", key: "11p7ol" }],
        ]),
        u3 = (0, h.A)("Repeat1", [
          ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
          ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
          ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
          ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
          ["path", { d: "M11 10h1v4", key: "70cz1p" }],
        ]),
        u6 = (0, h.A)("Repeat2", [
          ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
          ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
          ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
          ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }],
        ]),
        u8 = (0, h.A)("Repeat", [
          ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
          ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
          ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
          ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
        ]),
        u7 = (0, h.A)("ReplaceAll", [
          [
            "path",
            { d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2", key: "1yyzbs" },
          ],
          ["path", { d: "M14 4a2 2 0 0 1 2-2", key: "1w2hp7" }],
          ["path", { d: "M16 10a2 2 0 0 1-2-2", key: "shjach" }],
          [
            "path",
            { d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2", key: "zfj4xr" },
          ],
          ["path", { d: "M20 2a2 2 0 0 1 2 2", key: "188mtx" }],
          ["path", { d: "M22 8a2 2 0 0 1-2 2", key: "ddf4tu" }],
          ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
          ["path", { d: "M6 10V5a 3 3 0 0 1 3-3h1", key: "1ageje" }],
          [
            "rect",
            {
              x: "2",
              y: "14",
              width: "8",
              height: "8",
              rx: "2",
              key: "4rksxw",
            },
          ],
        ]),
        u9 = (0, h.A)("Replace", [
          ["path", { d: "M14 4a2 2 0 0 1 2-2", key: "1w2hp7" }],
          ["path", { d: "M16 10a2 2 0 0 1-2-2", key: "shjach" }],
          ["path", { d: "M20 2a2 2 0 0 1 2 2", key: "188mtx" }],
          ["path", { d: "M22 8a2 2 0 0 1-2 2", key: "ddf4tu" }],
          ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
          ["path", { d: "M6 10V5a3 3 0 0 1 3-3h1", key: "3y3t5z" }],
          [
            "rect",
            {
              x: "2",
              y: "14",
              width: "8",
              height: "8",
              rx: "2",
              key: "4rksxw",
            },
          ],
        ]),
        ve = (0, h.A)("ReplyAll", [
          ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
          ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
          ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }],
        ]),
        va = (0, h.A)("Reply", [
          ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
          ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
        ]),
        vt = (0, h.A)("Rewind", [
          ["polygon", { points: "11 19 2 12 11 5 11 19", key: "14yba5" }],
          ["polygon", { points: "22 19 13 12 22 5 22 19", key: "1pi1cj" }],
        ]),
        vh = (0, h.A)("Ribbon", [
          [
            "path",
            {
              d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",
              key: "1rnhq3",
            },
          ],
          ["path", { d: "m12 18 2.57-3.5", key: "116vt7" }],
          ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009", key: "10dq0b" }],
          ["path", { d: "M9.35 14.53 12 11.22", key: "tdsyp2" }],
          [
            "path",
            {
              d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",
              key: "nmifey",
            },
          ],
        ]),
        vy = (0, h.A)("Rocket", [
          [
            "path",
            {
              d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
              key: "m3kijz",
            },
          ],
          [
            "path",
            {
              d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
              key: "1fmvmk",
            },
          ],
          [
            "path",
            { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" },
          ],
          [
            "path",
            { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" },
          ],
        ]),
        vr = (0, h.A)("RockingChair", [
          ["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }],
          [
            "line",
            { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" },
          ],
          [
            "line",
            { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" },
          ],
          ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }],
        ]),
        vd = (0, h.A)("RollerCoaster", [
          ["path", { d: "M6 19V5", key: "1r845m" }],
          ["path", { d: "M10 19V6.8", key: "9j2tfs" }],
          ["path", { d: "M14 19v-7.8", key: "10s8qv" }],
          ["path", { d: "M18 5v4", key: "1tajlv" }],
          ["path", { d: "M18 19v-6", key: "ielfq3" }],
          ["path", { d: "M22 19V9", key: "158nzp" }],
          [
            "path",
            {
              d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",
              key: "1930oh",
            },
          ],
        ]),
        vp = (0, h.A)("Rotate3d", [
          [
            "path",
            {
              d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
              key: "10n0gc",
            },
          ],
          [
            "path",
            { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" },
          ],
          [
            "path",
            {
              d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
              key: "1lxi77",
            },
          ],
        ]),
        vk = (0, h.A)("RotateCcwSquare", [
          ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6", key: "19z8uc" }],
          ["path", { d: "m15 2-3 3 3 3", key: "177bxs" }],
          [
            "path",
            {
              d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",
              key: "d36hnl",
            },
          ],
        ]),
        vl = (0, h.A)("RotateCcw", [
          [
            "path",
            {
              d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
              key: "1357e3",
            },
          ],
          ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
        ]),
        vi = (0, h.A)("RotateCwSquare", [
          ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3", key: "l96uqu" }],
          ["path", { d: "m9 8 3-3-3-3", key: "1gzgc3" }],
          [
            "path",
            {
              d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
              key: "1w2k5h",
            },
          ],
        ]),
        vn = (0, h.A)("RotateCw", [
          [
            "path",
            {
              d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
              key: "1p45f6",
            },
          ],
          ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        ]),
        vc = (0, h.A)("RouteOff", [
          ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
          ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }],
          ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }],
          ["path", { d: "M15 5h-4.3", key: "6537je" }],
          ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
        ]),
        vo = (0, h.A)("Route", [
          ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
          [
            "path",
            {
              d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
              key: "1d8sl",
            },
          ],
          ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
        ]),
        vM = (0, h.A)("Router", [
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "14",
              rx: "2",
              key: "w68u3i",
            },
          ],
          ["path", { d: "M6.01 18H6", key: "19vcac" }],
          ["path", { d: "M10.01 18H10", key: "uamcmx" }],
          ["path", { d: "M15 10v4", key: "qjz1xs" }],
          ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
          ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }],
        ]),
        vs = (0, h.A)("Rows2", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 12h18", key: "1i2n21" }],
        ]),
        vu = (0, h.A)("Rows3", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M21 9H3", key: "1338ky" }],
          ["path", { d: "M21 15H3", key: "9uk58r" }],
        ]),
        vv = (0, h.A)("Rows4", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M21 7.5H3", key: "1hm9pq" }],
          ["path", { d: "M21 12H3", key: "2avoz0" }],
          ["path", { d: "M21 16.5H3", key: "n7jzkj" }],
        ]),
        vm = (0, h.A)("Rss", [
          ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
          ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
          ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }],
        ]),
        vx = (0, h.A)("Ruler", [
          [
            "path",
            {
              d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
              key: "icamh8",
            },
          ],
          ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
          ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
          ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
          ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }],
        ]),
        vf = (0, h.A)("RussianRuble", [
          ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }],
          ["path", { d: "M6 15h8", key: "1y8f6l" }],
        ]),
        vg = (0, h.A)("Sailboat", [
          [
            "path",
            { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z", key: "1404fh" },
          ],
          ["path", { d: "M21 14 10 2 3 14h18Z", key: "1nzg7v" }],
          ["path", { d: "M10 2v16", key: "1labyt" }],
        ]),
        vA = (0, h.A)("Salad", [
          ["path", { d: "M7 21h10", key: "1b0cd5" }],
          [
            "path",
            { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" },
          ],
          [
            "path",
            {
              d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
              key: "10xrj0",
            },
          ],
          ["path", { d: "m13 12 4-4", key: "1hckqy" }],
          [
            "path",
            {
              d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",
              key: "1p4srx",
            },
          ],
        ]),
        vw = (0, h.A)("Sandwich", [
          [
            "path",
            { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3", key: "34v9d7" },
          ],
          [
            "path",
            {
              d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",
              key: "1k5vfb",
            },
          ],
          [
            "path",
            { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z", key: "1oe7l6" },
          ],
          [
            "path",
            {
              d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",
              key: "1ts2ri",
            },
          ],
        ]),
        vb = (0, h.A)("SatelliteDish", [
          ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }],
          ["path", { d: "m9 15 3-3", key: "88sc13" }],
          ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }],
          ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }],
        ]),
        vC = (0, h.A)("Satellite", [
          ["path", { d: "M13 7 9 3 5 7l4 4", key: "vyckw6" }],
          ["path", { d: "m17 11 4 4-4 4-4-4", key: "rchckc" }],
          ["path", { d: "m8 12 4 4 6-6-4-4Z", key: "1sshf7" }],
          ["path", { d: "m16 8 3-3", key: "x428zp" }],
          ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }],
        ]),
        vq = (0, h.A)("SaveAll", [
          ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5", key: "1xspal" }],
          [
            "path",
            { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6", key: "1ra60u" },
          ],
          ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
          [
            "path",
            {
              d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",
              key: "1yve0x",
            },
          ],
        ]),
        vz = (0, h.A)("SaveOff", [
          ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7", key: "h8g396" }],
          ["path", { d: "M14 8h1", key: "1lfen6" }],
          ["path", { d: "M17 21v-4", key: "1yknxs" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",
              key: "1t4vdl",
            },
          ],
          ["path", { d: "M29.5 11.5s5 5 4 5", key: "zzn4i6" }],
          [
            "path",
            {
              d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",
              key: "24cby9",
            },
          ],
        ]),
        vj = (0, h.A)("Save", [
          [
            "path",
            {
              d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
              key: "1c8476",
            },
          ],
          [
            "path",
            { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" },
          ],
          ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
        ]),
        vH = (0, h.A)("Scale3d", [
          ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
          ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
          ["path", { d: "M5 7v12h12", key: "vtaa4r" }],
          ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
        ]),
        vS = (0, h.A)("Scale", [
          [
            "path",
            {
              d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
              key: "7g6ntu",
            },
          ],
          [
            "path",
            {
              d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
              key: "ijws7r",
            },
          ],
          ["path", { d: "M7 21h10", key: "1b0cd5" }],
          ["path", { d: "M12 3v18", key: "108xh3" }],
          ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
        ]),
        vV = (0, h.A)("Scaling", [
          [
            "path",
            {
              d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
              key: "1m0v6g",
            },
          ],
          ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
          ["path", { d: "M16 3h5v5", key: "1806ms" }],
          ["path", { d: "M21 3 9 15", key: "15kdhq" }],
        ]),
        vL = (0, h.A)("ScanBarcode", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          ["path", { d: "M8 7v10", key: "23sfjj" }],
          ["path", { d: "M12 7v10", key: "jspqdw" }],
          ["path", { d: "M17 7v10", key: "578dap" }],
        ]),
        vP = (0, h.A)("ScanEye", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          [
            "path",
            {
              d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
              key: "11ak4c",
            },
          ],
        ]),
        vR = (0, h.A)("ScanFace", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
          ["path", { d: "M9 9h.01", key: "1q5me6" }],
          ["path", { d: "M15 9h.01", key: "x1ddxp" }],
        ]),
        vD = (0, h.A)("ScanLine", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          ["path", { d: "M7 12h10", key: "b7w52i" }],
        ]),
        vT = (0, h.A)("ScanQrCode", [
          ["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4", key: "uk4fdo" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M17 8V7", key: "q2g9wo" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M7 17h.01", key: "19xn7k" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          [
            "rect",
            { x: "7", y: "7", width: "5", height: "5", rx: "1", key: "m9kyts" },
          ],
        ]),
        vF = (0, h.A)("ScanSearch", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }],
        ]),
        vE = (0, h.A)("ScanText", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
          ["path", { d: "M7 8h8", key: "1jbsf9" }],
          ["path", { d: "M7 12h10", key: "b7w52i" }],
          ["path", { d: "M7 16h6", key: "1vyc9m" }],
        ]),
        vB = (0, h.A)("Scan", [
          ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
          ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
          ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
          ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
        ]),
        vO = (0, h.A)("School", [
          ["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4", key: "hhkicm" }],
          [
            "path",
            {
              d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",
              key: "1vwozw",
            },
          ],
          ["path", { d: "M18 5v17", key: "1sw6gf" }],
          ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
          ["path", { d: "M6 5v17", key: "1xfsm0" }],
          ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
        ]),
        vZ = (0, h.A)("ScissorsLineDashed", [
          ["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }],
          ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }],
          ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }],
          ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
          ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }],
          ["path", { d: "M16 12h-2", key: "10asgb" }],
          ["path", { d: "M22 12h-2", key: "14jgyd" }],
        ]),
        vI = (0, h.A)("Scissors", [
          ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
          ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
          ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
          ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
          ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
        ]),
        vN = (0, h.A)("ScreenShareOff", [
          [
            "path",
            {
              d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
              key: "i8wdob",
            },
          ],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "m22 3-5 5", key: "12jva0" }],
          ["path", { d: "m17 3 5 5", key: "k36vhe" }],
        ]),
        vU = (0, h.A)("ScreenShare", [
          [
            "path",
            {
              d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
              key: "i8wdob",
            },
          ],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
          ["path", { d: "m17 8 5-5", key: "fqif7o" }],
          ["path", { d: "M17 3h5v5", key: "1o3tu8" }],
        ]),
        vG = (0, h.A)("ScrollText", [
          ["path", { d: "M15 12h-5", key: "r7krc0" }],
          ["path", { d: "M15 8h-5", key: "1khuty" }],
          ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
          [
            "path",
            {
              d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
              key: "1ph1d7",
            },
          ],
        ]),
        vW = (0, h.A)("Scroll", [
          ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
          [
            "path",
            {
              d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
              key: "1ph1d7",
            },
          ],
        ]),
        v_ = (0, h.A)("SearchCheck", [
          ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ]),
        vX = (0, h.A)("SearchCode", [
          ["path", { d: "m13 13.5 2-2.5-2-2.5", key: "1rvxrh" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
          ["path", { d: "M9 8.5 7 11l2 2.5", key: "6ffwbx" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ]),
        vK = (0, h.A)("SearchSlash", [
          ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ]),
        vY = (0, h.A)("SearchX", [
          ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
          ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ])
      var vJ = t(9479)
      let vQ = (0, h.A)("Section", [
          [
            "path",
            {
              d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",
              key: "vqan6v",
            },
          ],
          [
            "path",
            {
              d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",
              key: "wdjd8o",
            },
          ],
        ]),
        v$ = (0, h.A)("SendHorizontal", [
          [
            "path",
            {
              d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
              key: "117uat",
            },
          ],
          ["path", { d: "M6 12h16", key: "s4cdu5" }],
        ]),
        v1 = (0, h.A)("SendToBack", [
          [
            "rect",
            {
              x: "14",
              y: "14",
              width: "8",
              height: "8",
              rx: "2",
              key: "1b0bso",
            },
          ],
          [
            "rect",
            { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" },
          ],
          ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }],
          ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }],
        ]),
        v2 = (0, h.A)("Send", [
          [
            "path",
            {
              d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
              key: "1ffxy3",
            },
          ],
          ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
        ]),
        v0 = (0, h.A)("SeparatorHorizontal", [
          ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
          ["polyline", { points: "8 8 12 4 16 8", key: "zo8t4w" }],
          ["polyline", { points: "16 16 12 20 8 16", key: "1oyrid" }],
        ]),
        v4 = (0, h.A)("SeparatorVertical", [
          ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }],
          ["polyline", { points: "8 8 4 12 8 16", key: "bnfmv4" }],
          ["polyline", { points: "16 16 20 12 16 8", key: "u90052" }],
        ]),
        v5 = (0, h.A)("ServerCog", [
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          [
            "path",
            {
              d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
              key: "tn8das",
            },
          ],
          [
            "path",
            {
              d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
              key: "1g2pve",
            },
          ],
          ["path", { d: "M6 6h.01", key: "1utrut" }],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          ["path", { d: "m15.7 13.4-.9-.3", key: "1jwmzr" }],
          ["path", { d: "m9.2 10.9-.9-.3", key: "qapnim" }],
          ["path", { d: "m10.6 15.7.3-.9", key: "quwk0k" }],
          ["path", { d: "m13.6 15.7-.4-1", key: "cb9xp7" }],
          ["path", { d: "m10.8 9.3-.4-1", key: "1uaiz5" }],
          ["path", { d: "m8.3 13.6 1-.4", key: "s6srou" }],
          ["path", { d: "m14.7 10.8 1-.4", key: "4d31cq" }],
          ["path", { d: "m13.4 8.3-.3.9", key: "1bm987" }],
        ]),
        v3 = (0, h.A)("ServerCrash", [
          [
            "path",
            {
              d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
              key: "4b9dqc",
            },
          ],
          [
            "path",
            {
              d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
              key: "22nnkd",
            },
          ],
          ["path", { d: "M6 6h.01", key: "1utrut" }],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }],
        ]),
        v6 = (0, h.A)("ServerOff", [
          [
            "path",
            { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" },
          ],
          [
            "path",
            {
              d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",
              key: "1hjrv1",
            },
          ],
          ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }],
          [
            "path",
            {
              d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",
              key: "161ggg",
            },
          ],
          ["path", { d: "M6 18h.01", key: "uhywen" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        v8 = (0, h.A)("Server", [
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "2",
              rx: "2",
              ry: "2",
              key: "ngkwjq",
            },
          ],
          [
            "rect",
            {
              width: "20",
              height: "8",
              x: "2",
              y: "14",
              rx: "2",
              ry: "2",
              key: "iecqi9",
            },
          ],
          ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
          ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
        ]),
        v7 = (0, h.A)("Settings2", [
          ["path", { d: "M20 7h-9", key: "3s1dr2" }],
          ["path", { d: "M14 17H5", key: "gfn3mx" }],
          ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
          ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
        ]),
        v9 = (0, h.A)("Settings", [
          [
            "path",
            {
              d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
              key: "1qme2f",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]),
        me = (0, h.A)("Shapes", [
          [
            "path",
            {
              d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
              key: "1bo67w",
            },
          ],
          [
            "rect",
            {
              x: "3",
              y: "14",
              width: "7",
              height: "7",
              rx: "1",
              key: "1bkyp8",
            },
          ],
          ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }],
        ]),
        ma = (0, h.A)("Share2", [
          ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
          ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
          ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
          [
            "line",
            {
              x1: "8.59",
              x2: "15.42",
              y1: "13.51",
              y2: "17.49",
              key: "47mynk",
            },
          ],
          [
            "line",
            { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
          ],
        ]),
        mt = (0, h.A)("Share", [
          [
            "path",
            { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" },
          ],
          ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }],
        ]),
        mh = (0, h.A)("Sheet", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
          ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
          ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
          ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }],
        ]),
        my = (0, h.A)("Shell", [
          [
            "path",
            {
              d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
              key: "1cn552",
            },
          ],
        ]),
        mr = (0, h.A)("ShieldAlert", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M12 8v4", key: "1got3b" }],
          ["path", { d: "M12 16h.01", key: "1drbdi" }],
        ]),
        md = (0, h.A)("ShieldBan", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "m4.243 5.21 14.39 12.472", key: "1c9a7c" }],
        ]),
        mp = (0, h.A)("ShieldCheck", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]),
        mk = (0, h.A)("ShieldEllipsis", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M8 12h.01", key: "czm47f" }],
          ["path", { d: "M12 12h.01", key: "1mp3jc" }],
          ["path", { d: "M16 12h.01", key: "1l6xoz" }],
        ]),
        ml = (0, h.A)("ShieldHalf", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M12 22V2", key: "zs6s6o" }],
        ]),
        mi = (0, h.A)("ShieldMinus", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M9 12h6", key: "1c52cq" }],
        ]),
        mn = (0, h.A)("ShieldOff", [
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
              key: "1jlk70",
            },
          ],
          [
            "path",
            {
              d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
              key: "18rp1v",
            },
          ],
        ]),
        mc = (0, h.A)("ShieldPlus", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M9 12h6", key: "1c52cq" }],
          ["path", { d: "M12 9v6", key: "199k2o" }],
        ]),
        mo = (0, h.A)("ShieldQuestion", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
        ]),
        mM = (0, h.A)("ShieldX", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
          ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }],
        ]),
        ms = (0, h.A)("Shield", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
        ]),
        mu = (0, h.A)("ShipWheel", [
          ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
          ["path", { d: "M12 2v7.5", key: "1e5rl5" }],
          ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }],
          ["path", { d: "M22 12h-7.5", key: "le1719" }],
          ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }],
          ["path", { d: "M12 14.5V22", key: "dgcmos" }],
          ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }],
          ["path", { d: "M9.5 12H2", key: "r7bup8" }],
          ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }],
          ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }],
        ]),
        mv = (0, h.A)("Ship", [
          [
            "path",
            {
              d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
              key: "iegodh",
            },
          ],
          [
            "path",
            {
              d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",
              key: "fp8vka",
            },
          ],
          [
            "path",
            { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" },
          ],
          ["path", { d: "M12 10v4", key: "1kjpxc" }],
          ["path", { d: "M12 2v3", key: "qbqxhf" }],
        ]),
        mm = (0, h.A)("Shirt", [
          [
            "path",
            {
              d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
              key: "1wgbhj",
            },
          ],
        ]),
        mx = (0, h.A)("ShoppingBag", [
          [
            "path",
            {
              d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
              key: "hou9p0",
            },
          ],
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
        ]),
        mf = (0, h.A)("ShoppingBasket", [
          ["path", { d: "m15 11-1 9", key: "5wnq3a" }],
          ["path", { d: "m19 11-4-7", key: "cnml18" }],
          ["path", { d: "M2 11h20", key: "3eubbj" }],
          [
            "path",
            {
              d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
              key: "yiazzp",
            },
          ],
          ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
          ["path", { d: "m5 11 4-7", key: "116ra9" }],
          ["path", { d: "m9 11 1 9", key: "1ojof7" }],
        ]),
        mg = (0, h.A)("ShoppingCart", [
          ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
          ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
          [
            "path",
            {
              d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
              key: "9zh506",
            },
          ],
        ]),
        mA = (0, h.A)("Shovel", [
          ["path", { d: "M2 22v-5l5-5 5 5-5 5z", key: "1fh25c" }],
          ["path", { d: "M9.5 14.5 16 8", key: "1smz5x" }],
          [
            "path",
            {
              d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",
              key: "1q8uv5",
            },
          ],
        ]),
        mw = (0, h.A)("ShowerHead", [
          ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
          ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
          ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
          ["path", { d: "M14 17v.01", key: "eokfpp" }],
          ["path", { d: "M10 16v.01", key: "14uyyl" }],
          ["path", { d: "M13 13v.01", key: "1v1k97" }],
          ["path", { d: "M16 10v.01", key: "5169yg" }],
          ["path", { d: "M11 20v.01", key: "cj92p8" }],
          ["path", { d: "M17 14v.01", key: "11cswd" }],
          ["path", { d: "M20 11v.01", key: "19e0od" }],
        ]),
        mb = (0, h.A)("Shrink", [
          ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }],
          ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }],
          ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }],
          ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }],
        ]),
        mC = (0, h.A)("Shrub", [
          ["path", { d: "M12 22v-7l-2-2", key: "eqv9mc" }],
          [
            "path",
            {
              d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",
              key: "ubcgy",
            },
          ],
          ["path", { d: "m14 14-2 2", key: "847xa2" }],
        ]),
        mq = (0, h.A)("Shuffle", [
          [
            "path",
            {
              d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",
              key: "1wmou1",
            },
          ],
          ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
          ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
          [
            "path",
            { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" },
          ],
          ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
        ]),
        mz = (0, h.A)("Sigma", [
          [
            "path",
            {
              d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
              key: "wuwx1p",
            },
          ],
        ]),
        mj = (0, h.A)("SignalHigh", [
          ["path", { d: "M2 20h.01", key: "4haj6o" }],
          ["path", { d: "M7 20v-4", key: "j294jx" }],
          ["path", { d: "M12 20v-8", key: "i3yub9" }],
          ["path", { d: "M17 20V8", key: "1tkaf5" }],
        ]),
        mH = (0, h.A)("SignalLow", [
          ["path", { d: "M2 20h.01", key: "4haj6o" }],
          ["path", { d: "M7 20v-4", key: "j294jx" }],
        ]),
        mS = (0, h.A)("SignalMedium", [
          ["path", { d: "M2 20h.01", key: "4haj6o" }],
          ["path", { d: "M7 20v-4", key: "j294jx" }],
          ["path", { d: "M12 20v-8", key: "i3yub9" }],
        ]),
        mV = (0, h.A)("SignalZero", [
          ["path", { d: "M2 20h.01", key: "4haj6o" }],
        ]),
        mL = (0, h.A)("Signal", [
          ["path", { d: "M2 20h.01", key: "4haj6o" }],
          ["path", { d: "M7 20v-4", key: "j294jx" }],
          ["path", { d: "M12 20v-8", key: "i3yub9" }],
          ["path", { d: "M17 20V8", key: "1tkaf5" }],
          ["path", { d: "M22 4v16", key: "sih9yq" }],
        ]),
        mP = (0, h.A)("Signature", [
          [
            "path",
            {
              d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
              key: "y32ogt",
            },
          ],
          ["path", { d: "M3 21h18", key: "itz85i" }],
        ]),
        mR = (0, h.A)("SignpostBig", [
          ["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }],
          ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }],
          ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }],
          ["path", { d: "M8 22h8", key: "rmew8v" }],
        ]),
        mD = (0, h.A)("Signpost", [
          ["path", { d: "M12 13v8", key: "1l5pq0" }],
          ["path", { d: "M12 3v3", key: "1n5kay" }],
          [
            "path",
            {
              d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",
              key: "gqqp9m",
            },
          ],
        ]),
        mT = (0, h.A)("Siren", [
          ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
          [
            "path",
            {
              d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
              key: "1b4s83",
            },
          ],
          ["path", { d: "M21 12h1", key: "jtio3y" }],
          ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
          ["path", { d: "M2 12h1", key: "1uaihz" }],
          ["path", { d: "M12 2v1", key: "11qlp1" }],
          ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
          ["path", { d: "M12 12v6", key: "3ahymv" }],
        ]),
        mF = (0, h.A)("SkipBack", [
          ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
          ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }],
        ]),
        mE = (0, h.A)("SkipForward", [
          ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
          ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }],
        ]),
        mB = (0, h.A)("Skull", [
          ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
          [
            "path",
            {
              d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
              key: "1o5pge",
            },
          ],
          ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
          ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
        ]),
        mO = (0, h.A)("Slack", [
          [
            "rect",
            {
              width: "3",
              height: "8",
              x: "13",
              y: "2",
              rx: "1.5",
              key: "diqz80",
            },
          ],
          ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
          [
            "rect",
            {
              width: "3",
              height: "8",
              x: "8",
              y: "14",
              rx: "1.5",
              key: "hqg7r1",
            },
          ],
          ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
          [
            "rect",
            {
              width: "8",
              height: "3",
              x: "14",
              y: "13",
              rx: "1.5",
              key: "1kmz0a",
            },
          ],
          [
            "path",
            { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" },
          ],
          [
            "rect",
            {
              width: "8",
              height: "3",
              x: "2",
              y: "8",
              rx: "1.5",
              key: "1omvl4",
            },
          ],
          ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }],
        ]),
        mZ = (0, h.A)("Slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]),
        mI = (0, h.A)("Slice", [
          ["path", { d: "m8 14-6 6h9v-3", key: "zo3j9a" }],
          [
            "path",
            {
              d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",
              key: "1dzx0j",
            },
          ],
        ]),
        mN = (0, h.A)("SlidersHorizontal", [
          ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
          ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
          ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
          ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
          ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
          ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
          ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
          ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
          ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
        ]),
        mU = (0, h.A)("SlidersVertical", [
          ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
          ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
          ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
          ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
          ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
          ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
          ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
          ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }],
        ]),
        mG = (0, h.A)("SmartphoneCharging", [
          [
            "rect",
            {
              width: "14",
              height: "20",
              x: "5",
              y: "2",
              rx: "2",
              ry: "2",
              key: "1yt0o3",
            },
          ],
          ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }],
        ]),
        mW = (0, h.A)("SmartphoneNfc", [
          [
            "rect",
            {
              width: "7",
              height: "12",
              x: "2",
              y: "6",
              rx: "1",
              key: "5nje8w",
            },
          ],
          ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }],
          [
            "path",
            { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" },
          ],
          [
            "path",
            { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" },
          ],
        ]),
        m_ = (0, h.A)("Smartphone", [
          [
            "rect",
            {
              width: "14",
              height: "20",
              x: "5",
              y: "2",
              rx: "2",
              ry: "2",
              key: "1yt0o3",
            },
          ],
          ["path", { d: "M12 18h.01", key: "mhygvu" }],
        ]),
        mX = (0, h.A)("SmilePlus", [
          ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
          ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
          ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
          ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
          ["path", { d: "M16 5h6", key: "1vod17" }],
          ["path", { d: "M19 2v6", key: "4bpg5p" }],
        ]),
        mK = (0, h.A)("Smile", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
          ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
          ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
        ]),
        mY = (0, h.A)("Snail", [
          [
            "path",
            {
              d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",
              key: "hneq2s",
            },
          ],
          ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }],
          [
            "path",
            { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" },
          ],
          ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }],
          ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }],
        ]),
        mJ = (0, h.A)("Snowflake", [
          ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
          ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
          ["path", { d: "m20 16-4-4 4-4", key: "rquw4f" }],
          ["path", { d: "m4 8 4 4-4 4", key: "12s3z9" }],
          ["path", { d: "m16 4-4 4-4-4", key: "1tumq1" }],
          ["path", { d: "m8 20 4-4 4 4", key: "9p200w" }],
        ]),
        mQ = (0, h.A)("Sofa", [
          [
            "path",
            { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" },
          ],
          [
            "path",
            {
              d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
              key: "xacw8m",
            },
          ],
          ["path", { d: "M4 18v2", key: "jwo5n2" }],
          ["path", { d: "M20 18v2", key: "1ar1qi" }],
          ["path", { d: "M12 4v9", key: "oqhhn3" }],
        ]),
        m$ = (0, h.A)("Soup", [
          [
            "path",
            { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" },
          ],
          ["path", { d: "M7 21h10", key: "1b0cd5" }],
          ["path", { d: "M19.5 12 22 6", key: "shfsr5" }],
          [
            "path",
            {
              d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
              key: "rpc6vp",
            },
          ],
          [
            "path",
            {
              d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
              key: "1lf63m",
            },
          ],
          [
            "path",
            {
              d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",
              key: "97tijn",
            },
          ],
        ]),
        m1 = (0, h.A)("Space", [
          [
            "path",
            { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" },
          ],
        ]),
        m2 = (0, h.A)("Spade", [
          [
            "path",
            {
              d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",
              key: "40bo9n",
            },
          ],
          ["path", { d: "M12 18v4", key: "jadmvz" }],
        ]),
        m0 = (0, h.A)("Sparkle", [
          [
            "path",
            {
              d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
              key: "4pj2yx",
            },
          ],
        ]),
        m4 = (0, h.A)("Sparkles", [
          [
            "path",
            {
              d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
              key: "4pj2yx",
            },
          ],
          ["path", { d: "M20 3v4", key: "1olli1" }],
          ["path", { d: "M22 5h-4", key: "1gvqau" }],
          ["path", { d: "M4 17v2", key: "vumght" }],
          ["path", { d: "M5 18H3", key: "zchphs" }],
        ]),
        m5 = (0, h.A)("Speaker", [
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              key: "1nb95v",
            },
          ],
          ["path", { d: "M12 6h.01", key: "1vi96p" }],
          ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
          ["path", { d: "M12 14h.01", key: "1etili" }],
        ]),
        m3 = (0, h.A)("Speech", [
          [
            "path",
            {
              d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
              key: "11atix",
            },
          ],
          [
            "path",
            { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" },
          ],
          ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }],
        ]),
        m6 = (0, h.A)("SpellCheck2", [
          ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          [
            "path",
            {
              d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
              key: "8mdmtu",
            },
          ],
        ]),
        m8 = (0, h.A)("SpellCheck", [
          ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }],
        ]),
        m7 = (0, h.A)("Spline", [
          ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
          ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
          ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }],
        ]),
        m9 = (0, h.A)("Split", [
          ["path", { d: "M16 3h5v5", key: "1806ms" }],
          ["path", { d: "M8 3H3v5", key: "15dfkv" }],
          [
            "path",
            { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" },
          ],
          ["path", { d: "m15 9 6-6", key: "ko1vev" }],
        ]),
        xe = (0, h.A)("SprayCan", [
          ["path", { d: "M3 3h.01", key: "159qn6" }],
          ["path", { d: "M7 5h.01", key: "1hq22a" }],
          ["path", { d: "M11 7h.01", key: "1osv80" }],
          ["path", { d: "M3 7h.01", key: "1xzrh3" }],
          ["path", { d: "M7 9h.01", key: "19b3jx" }],
          ["path", { d: "M3 11h.01", key: "1eifu7" }],
          ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }],
          [
            "path",
            {
              d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",
              key: "aib6hk",
            },
          ],
          ["path", { d: "m13 14 8-2", key: "1d7bmk" }],
          ["path", { d: "m13 19 8-2", key: "1y2vml" }],
        ]),
        xa = (0, h.A)("Sprout", [
          ["path", { d: "M7 20h10", key: "e6iznv" }],
          ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
          [
            "path",
            {
              d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
              key: "9gtqwd",
            },
          ],
          [
            "path",
            {
              d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
              key: "bkxnd2",
            },
          ],
        ]),
        xt = (0, h.A)("SquareActivity", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }],
        ]),
        xh = (0, h.A)("SquareArrowDownLeft", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m16 8-8 8", key: "166keh" }],
          ["path", { d: "M16 16H8V8", key: "1w2ppm" }],
        ]),
        xy = (0, h.A)("SquareArrowDownRight", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m8 8 8 8", key: "1imecy" }],
          ["path", { d: "M16 8v8H8", key: "1lbpgo" }],
        ]),
        xr = (0, h.A)("SquareArrowDown", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M12 8v8", key: "napkw2" }],
          ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }],
        ]),
        xd = (0, h.A)("SquareArrowLeft", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
          ["path", { d: "M16 12H8", key: "1fr5h0" }],
        ]),
        xp = (0, h.A)("SquareArrowOutDownLeft", [
          [
            "path",
            {
              d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",
              key: "14qz4y",
            },
          ],
          ["path", { d: "m3 21 9-9", key: "1jfql5" }],
          ["path", { d: "M9 21H3v-6", key: "wtvkvv" }],
        ]),
        xk = (0, h.A)("SquareArrowOutDownRight", [
          [
            "path",
            {
              d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
              key: "14rsvq",
            },
          ],
          ["path", { d: "m21 21-9-9", key: "1et2py" }],
          ["path", { d: "M21 15v6h-6", key: "1jko0i" }],
        ]),
        xl = (0, h.A)("SquareArrowOutUpLeft", [
          [
            "path",
            {
              d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",
              key: "14mv1t",
            },
          ],
          ["path", { d: "m3 3 9 9", key: "rks13r" }],
          ["path", { d: "M3 9V3h6", key: "ira0h2" }],
        ]),
        xi = (0, h.A)("SquareArrowOutUpRight", [
          [
            "path",
            {
              d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
              key: "y09zxi",
            },
          ],
          ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
          ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ]),
        xn = (0, h.A)("SquareArrowRight", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
        ]),
        xc = (0, h.A)("SquareArrowUpLeft", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 16V8h8", key: "19xb1h" }],
          ["path", { d: "M16 16 8 8", key: "1qdy8n" }],
        ]),
        xo = (0, h.A)("SquareArrowUpRight", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 8h8v8", key: "b65dnt" }],
          ["path", { d: "m8 16 8-8", key: "13b9ih" }],
        ]),
        xM = (0, h.A)("SquareArrowUp", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
          ["path", { d: "M12 16V8", key: "1sbj14" }],
        ]),
        xs = (0, h.A)("SquareAsterisk", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M12 8v8", key: "napkw2" }],
          ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
          ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }],
        ]),
        xu = (0, h.A)("SquareBottomDashedScissors", [
          [
            "path",
            {
              d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",
              key: "1vzg26",
            },
          ],
          ["path", { d: "M10 22H8", key: "euku7a" }],
          ["path", { d: "M16 22h-2", key: "18d249" }],
          ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
          ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
          ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
          ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
          ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }],
        ]),
        xv = (0, h.A)("SquareChartGantt", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 8h7", key: "kbo1nt" }],
          ["path", { d: "M8 12h6", key: "ikassy" }],
          ["path", { d: "M11 16h5", key: "oq65wt" }],
        ]),
        xm = (0, h.A)("SquareCheckBig", [
          [
            "path",
            {
              d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
              key: "1uzm8b",
            },
          ],
          ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
        ]),
        xx = (0, h.A)("SquareCheck", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]),
        xf = (0, h.A)("SquareChevronDown", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }],
        ]),
        xg = (0, h.A)("SquareChevronLeft", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }],
        ]),
        xA = (0, h.A)("SquareChevronRight", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }],
        ]),
        xw = (0, h.A)("SquareChevronUp", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }],
        ]),
        xb = (0, h.A)("SquareCode", [
          ["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }],
          ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
        ]),
        xC = (0, h.A)("SquareDashedBottomCode", [
          ["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }],
          ["path", { d: "M14 21h1", key: "v9vybs" }],
          ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }],
          [
            "path",
            {
              d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
              key: "as5y1o",
            },
          ],
          ["path", { d: "M9 21h1", key: "15o7lz" }],
        ]),
        xq = (0, h.A)("SquareDashedBottom", [
          [
            "path",
            {
              d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
              key: "as5y1o",
            },
          ],
          ["path", { d: "M9 21h1", key: "15o7lz" }],
          ["path", { d: "M14 21h1", key: "v9vybs" }],
        ]),
        xz = (0, h.A)("SquareDashedKanban", [
          ["path", { d: "M8 7v7", key: "1x2jlm" }],
          ["path", { d: "M12 7v4", key: "xawao1" }],
          ["path", { d: "M16 7v9", key: "1hp2iy" }],
          ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
          ["path", { d: "M9 3h1", key: "1yesri" }],
          ["path", { d: "M14 3h1", key: "1ec4yj" }],
          ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
          ["path", { d: "M21 9v1", key: "mxsmne" }],
          ["path", { d: "M21 14v1", key: "169vum" }],
          ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
          ["path", { d: "M14 21h1", key: "v9vybs" }],
          ["path", { d: "M9 21h1", key: "15o7lz" }],
          ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
          ["path", { d: "M3 14v1", key: "vnatye" }],
          ["path", { d: "M3 9v1", key: "1r0deq" }],
        ]),
        xj = (0, h.A)("SquareDashedMousePointer", [
          [
            "path",
            {
              d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
              key: "xwnzip",
            },
          ],
          ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
          ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
          ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
          ["path", { d: "M9 3h1", key: "1yesri" }],
          ["path", { d: "M9 21h2", key: "1qve2z" }],
          ["path", { d: "M14 3h1", key: "1ec4yj" }],
          ["path", { d: "M3 9v1", key: "1r0deq" }],
          ["path", { d: "M21 9v2", key: "p14lih" }],
          ["path", { d: "M3 14v1", key: "vnatye" }],
        ]),
        xH = (0, h.A)("SquareDivide", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
          ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
        ]),
        xS = (0, h.A)("SquareDot", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ]),
        xV = (0, h.A)("SquareEqual", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7 10h10", key: "1101jm" }],
          ["path", { d: "M7 14h10", key: "1mhdw3" }],
        ]),
        xL = (0, h.A)("SquareFunction", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          [
            "path",
            { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" },
          ],
          ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }],
        ]),
        xP = (0, h.A)("SquareKanban", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 7v7", key: "1x2jlm" }],
          ["path", { d: "M12 7v4", key: "xawao1" }],
          ["path", { d: "M16 7v9", key: "1hp2iy" }],
        ]),
        xR = (0, h.A)("SquareLibrary", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7 7v10", key: "d5nglc" }],
          ["path", { d: "M11 7v10", key: "pptsnr" }],
          ["path", { d: "m15 7 2 10", key: "1m7qm5" }],
        ]),
        xD = (0, h.A)("SquareM", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 16V8l4 4 4-4v8", key: "141u4e" }],
        ]),
        xT = (0, h.A)("SquareMenu", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7 8h10", key: "1jw688" }],
          ["path", { d: "M7 12h10", key: "b7w52i" }],
          ["path", { d: "M7 16h10", key: "wp8him" }],
        ]),
        xF = (0, h.A)("SquareMinus", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
        ]),
        xE = (0, h.A)("SquareMousePointer", [
          [
            "path",
            {
              d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
              key: "xwnzip",
            },
          ],
          [
            "path",
            {
              d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
              key: "14rsvq",
            },
          ],
        ]),
        xB = (0, h.A)("SquareParkingOff", [
          [
            "path",
            {
              d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",
              key: "9l1ft6",
            },
          ],
          ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
          ["path", { d: "M9 17v-2.3", key: "1jxgo2" }],
        ]),
        xO = (0, h.A)("SquareParking", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }],
        ]),
        xZ = (0, h.A)("SquarePen", [
          [
            "path",
            {
              d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
              key: "1m0v6g",
            },
          ],
          [
            "path",
            {
              d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
              key: "ohrbg2",
            },
          ],
        ]),
        xI = (0, h.A)("SquarePercent", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "M9 9h.01", key: "1q5me6" }],
          ["path", { d: "M15 15h.01", key: "lqbp3k" }],
        ]),
        xN = (0, h.A)("SquarePi", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M7 7h10", key: "udp07y" }],
          ["path", { d: "M10 7v10", key: "i1d9ee" }],
          ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }],
        ]),
        xU = (0, h.A)("SquarePilcrow", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }],
          ["path", { d: "M12 7v10", key: "jspqdw" }],
          ["path", { d: "M16 7v10", key: "lavkr4" }],
        ]),
        xG = (0, h.A)("SquarePlay", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }],
        ]),
        xW = (0, h.A)("SquarePlus", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
        ]),
        x_ = (0, h.A)("SquarePower", [
          ["path", { d: "M12 7v4", key: "xawao1" }],
          ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005", key: "1pek45" }],
          [
            "rect",
            {
              x: "3",
              y: "3",
              width: "18",
              height: "18",
              rx: "2",
              key: "h1oib",
            },
          ],
        ]),
        xX = (0, h.A)("SquareRadical", [
          ["path", { d: "M7 12h2l2 5 2-10h4", key: "1fxv6h" }],
          [
            "rect",
            {
              x: "3",
              y: "3",
              width: "18",
              height: "18",
              rx: "2",
              key: "h1oib",
            },
          ],
        ]),
        xK = (0, h.A)("SquareScissors", [
          [
            "rect",
            {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "2",
              key: "1btzen",
            },
          ],
          ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
          ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
          ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
          ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
          ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }],
        ]),
        xY = (0, h.A)("SquareSigma", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }],
        ]),
        xJ = (0, h.A)("SquareSlash", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
        ]),
        xQ = (0, h.A)("SquareSplitHorizontal", [
          [
            "path",
            { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" },
          ],
          [
            "path",
            { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" },
          ],
          ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
        ]),
        x$ = (0, h.A)("SquareSplitVertical", [
          ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }],
          [
            "path",
            { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" },
          ],
          ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ]),
        x1 = (0, h.A)("SquareSquare", [
          [
            "rect",
            {
              x: "3",
              y: "3",
              width: "18",
              height: "18",
              rx: "2",
              key: "h1oib",
            },
          ],
          [
            "rect",
            { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
          ],
        ]),
        x2 = (0, h.A)("SquareStack", [
          [
            "path",
            {
              d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
              key: "4i38lg",
            },
          ],
          [
            "path",
            {
              d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
              key: "mlte4a",
            },
          ],
          [
            "rect",
            {
              width: "8",
              height: "8",
              x: "14",
              y: "14",
              rx: "2",
              key: "1fa9i4",
            },
          ],
        ]),
        x0 = (0, h.A)("SquareTerminal", [
          ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
          ["path", { d: "M11 13h4", key: "1p7l4v" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
        ]),
        x4 = (0, h.A)("SquareUserRound", [
          ["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }],
          ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
        ]),
        x5 = (0, h.A)("SquareUser", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          [
            "path",
            { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" },
          ],
        ]),
        x3 = (0, h.A)("SquareX", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "m9 9 6 6", key: "z0biqf" }],
        ]),
        x6 = (0, h.A)("Square", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
        ]),
        x8 = (0, h.A)("Squircle", [
          [
            "path",
            {
              d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",
              key: "garfkc",
            },
          ],
        ]),
        x7 = (0, h.A)("Squirrel", [
          ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }],
          [
            "path",
            {
              d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",
              key: "oh0fg0",
            },
          ],
          ["path", { d: "M18 13h.01", key: "9veqaj" }],
          [
            "path",
            {
              d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
              key: "980v8a",
            },
          ],
        ]),
        x9 = (0, h.A)("Stamp", [
          ["path", { d: "M5 22h14", key: "ehvnwv" }],
          [
            "path",
            {
              d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",
              key: "1sy9ra",
            },
          ],
          [
            "path",
            {
              d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",
              key: "cnxgux",
            },
          ],
        ]),
        fe = (0, h.A)("StarHalf", [
          [
            "path",
            { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2", key: "nare05" },
          ],
        ]),
        fa = (0, h.A)("StarOff", [
          [
            "path",
            {
              d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",
              key: "16m0ql",
            },
          ],
          [
            "path",
            {
              d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",
              key: "1vt8nq",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        ft = (0, h.A)("Star", [
          [
            "polygon",
            {
              points:
                "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
              key: "8f66p6",
            },
          ],
        ]),
        fh = (0, h.A)("StepBack", [
          ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
          ["polygon", { points: "14,20 4,12 14,4", key: "ypakod" }],
        ]),
        fy = (0, h.A)("StepForward", [
          ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
          ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }],
        ]),
        fr = (0, h.A)("Stethoscope", [
          ["path", { d: "M11 2v2", key: "1539x4" }],
          ["path", { d: "M5 2v2", key: "1yf1q8" }],
          [
            "path",
            {
              d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
              key: "rb5t3r",
            },
          ],
          ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
          ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
        ]),
        fd = (0, h.A)("Sticker", [
          [
            "path",
            {
              d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
              key: "1wis1t",
            },
          ],
          ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4", key: "36rjfy" }],
          ["path", { d: "M8 13h.01", key: "1sbv64" }],
          ["path", { d: "M16 13h.01", key: "wip0gl" }],
          ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }],
        ]),
        fp = (0, h.A)("StickyNote", [
          [
            "path",
            {
              d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",
              key: "qazsjp",
            },
          ],
          ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }],
        ]),
        fk = (0, h.A)("Store", [
          [
            "path",
            {
              d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
              key: "ztvudi",
            },
          ],
          [
            "path",
            { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" },
          ],
          [
            "path",
            { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" },
          ],
          ["path", { d: "M2 7h20", key: "1fcdvo" }],
          [
            "path",
            {
              d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
              key: "6c3vgh",
            },
          ],
        ]),
        fl = (0, h.A)("StretchHorizontal", [
          [
            "rect",
            {
              width: "20",
              height: "6",
              x: "2",
              y: "4",
              rx: "2",
              key: "qdearl",
            },
          ],
          [
            "rect",
            {
              width: "20",
              height: "6",
              x: "2",
              y: "14",
              rx: "2",
              key: "1xrn6j",
            },
          ],
        ]),
        fi = (0, h.A)("StretchVertical", [
          [
            "rect",
            {
              width: "6",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              key: "19qu7m",
            },
          ],
          [
            "rect",
            {
              width: "6",
              height: "20",
              x: "14",
              y: "2",
              rx: "2",
              key: "24v0nk",
            },
          ],
        ]),
        fn = (0, h.A)("Strikethrough", [
          ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
          ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
          ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ]),
        fc = (0, h.A)("Subscript", [
          ["path", { d: "m4 5 8 8", key: "1eunvl" }],
          ["path", { d: "m12 5-8 8", key: "1ah0jp" }],
          [
            "path",
            {
              d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
              key: "e8ta8j",
            },
          ],
        ]),
        fo = (0, h.A)("SunDim", [
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          ["path", { d: "M12 4h.01", key: "1ujb9j" }],
          ["path", { d: "M20 12h.01", key: "1ykeid" }],
          ["path", { d: "M12 20h.01", key: "zekei9" }],
          ["path", { d: "M4 12h.01", key: "158zrr" }],
          ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
          ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
          ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
          ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }],
        ]),
        fM = (0, h.A)("SunMedium", [
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          ["path", { d: "M12 3v1", key: "1asbbs" }],
          ["path", { d: "M12 20v1", key: "1wcdkc" }],
          ["path", { d: "M3 12h1", key: "lp3yf2" }],
          ["path", { d: "M20 12h1", key: "1vloll" }],
          ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
          ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
          ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
          ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }],
        ])
      var fs = t(1688)
      let fu = (0, h.A)("SunSnow", [
        ["path", { d: "M10 9a3 3 0 1 0 0 6", key: "6zmtdl" }],
        ["path", { d: "M2 12h1", key: "1uaihz" }],
        ["path", { d: "M14 21V3", key: "1llu3z" }],
        ["path", { d: "M10 4V3", key: "pkzwkn" }],
        ["path", { d: "M10 21v-1", key: "1u8rkd" }],
        ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }],
        ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }],
        ["path", { d: "M14 12h8", key: "4f43i9" }],
        ["path", { d: "m17 4-3 3", key: "15jcng" }],
        ["path", { d: "m14 17 3 3", key: "6tlq38" }],
        ["path", { d: "m21 15-3-3 3-3", key: "1nlnje" }],
      ])
      var fv = t(3391)
      let fm = (0, h.A)("Sunrise", [
          ["path", { d: "M12 2v8", key: "1q4o3n" }],
          ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
          ["path", { d: "M2 18h2", key: "j10viu" }],
          ["path", { d: "M20 18h2", key: "wocana" }],
          ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
          ["path", { d: "M22 22H2", key: "19qnx5" }],
          ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
          ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
        ]),
        fx = (0, h.A)("Sunset", [
          ["path", { d: "M12 10V2", key: "16sf7g" }],
          ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
          ["path", { d: "M2 18h2", key: "j10viu" }],
          ["path", { d: "M20 18h2", key: "wocana" }],
          ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
          ["path", { d: "M22 22H2", key: "19qnx5" }],
          ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
          ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
        ]),
        ff = (0, h.A)("Superscript", [
          ["path", { d: "m4 19 8-8", key: "hr47gm" }],
          ["path", { d: "m12 19-8-8", key: "1dhhmo" }],
          [
            "path",
            {
              d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
              key: "1dfcux",
            },
          ],
        ]),
        fg = (0, h.A)("SwatchBook", [
          [
            "path",
            {
              d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",
              key: "1ldrpk",
            },
          ],
          [
            "path",
            { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7", key: "11i5po" },
          ],
          ["path", { d: "M 7 17h.01", key: "1euzgo" }],
          [
            "path",
            {
              d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",
              key: "o2gii7",
            },
          ],
        ]),
        fA = (0, h.A)("SwissFranc", [
          ["path", { d: "M10 21V3h8", key: "br2l0g" }],
          ["path", { d: "M6 16h9", key: "2py0wn" }],
          ["path", { d: "M10 9.5h7", key: "13dmhz" }],
        ]),
        fw = (0, h.A)("SwitchCamera", [
          [
            "path",
            { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" },
          ],
          [
            "path",
            { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }],
          ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }],
        ]),
        fb = (0, h.A)("Sword", [
          [
            "polyline",
            { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" },
          ],
          ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
          ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
          ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
        ]),
        fC = (0, h.A)("Swords", [
          [
            "polyline",
            { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" },
          ],
          ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
          ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
          ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
          [
            "polyline",
            { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" },
          ],
          ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
          ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
          ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }],
        ]),
        fq = (0, h.A)("Syringe", [
          ["path", { d: "m18 2 4 4", key: "22kx64" }],
          ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
          [
            "path",
            {
              d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
              key: "1exhtz",
            },
          ],
          ["path", { d: "m9 11 4 4", key: "rovt3i" }],
          ["path", { d: "m5 19-3 3", key: "59f2uf" }],
          ["path", { d: "m14 4 6 6", key: "yqp9t2" }],
        ]),
        fz = (0, h.A)("Table2", [
          [
            "path",
            {
              d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
              key: "gugj83",
            },
          ],
        ]),
        fj = (0, h.A)("TableCellsMerge", [
          ["path", { d: "M12 21v-6", key: "lihzve" }],
          ["path", { d: "M12 9V3", key: "da5inc" }],
          ["path", { d: "M3 15h18", key: "5xshup" }],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
        ]),
        fH = (0, h.A)("TableCellsSplit", [
          ["path", { d: "M12 15V9", key: "8c7uyn" }],
          ["path", { d: "M3 15h18", key: "5xshup" }],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
        ]),
        fS = (0, h.A)("TableColumnsSplit", [
          ["path", { d: "M14 14v2", key: "w2a1xv" }],
          ["path", { d: "M14 20v2", key: "1lq872" }],
          ["path", { d: "M14 2v2", key: "6buw04" }],
          ["path", { d: "M14 8v2", key: "i67w9a" }],
          ["path", { d: "M2 15h8", key: "82wtch" }],
          [
            "path",
            { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2", key: "up0l64" },
          ],
          ["path", { d: "M2 9h8", key: "yelfik" }],
          ["path", { d: "M22 15h-4", key: "1es58f" }],
          [
            "path",
            { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2", key: "pdjoqf" },
          ],
          ["path", { d: "M22 9h-4", key: "1luja7" }],
          ["path", { d: "M5 3v18", key: "14hmio" }],
        ]),
        fV = (0, h.A)("TableOfContents", [
          ["path", { d: "M16 12H3", key: "1a2rj7" }],
          ["path", { d: "M16 18H3", key: "12xzn7" }],
          ["path", { d: "M16 6H3", key: "1wxfjs" }],
          ["path", { d: "M21 12h.01", key: "msek7k" }],
          ["path", { d: "M21 18h.01", key: "1e8rq1" }],
          ["path", { d: "M21 6h.01", key: "1koanj" }],
        ]),
        fL = (0, h.A)("TableProperties", [
          ["path", { d: "M15 3v18", key: "14nvp0" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M21 9H3", key: "1338ky" }],
          ["path", { d: "M21 15H3", key: "9uk58r" }],
        ]),
        fP = (0, h.A)("TableRowsSplit", [
          ["path", { d: "M14 10h2", key: "1lstlu" }],
          ["path", { d: "M15 22v-8", key: "1fwwgm" }],
          ["path", { d: "M15 2v4", key: "1044rn" }],
          ["path", { d: "M2 10h2", key: "1r8dkt" }],
          ["path", { d: "M20 10h2", key: "1ug425" }],
          ["path", { d: "M3 19h18", key: "awlh7x" }],
          [
            "path",
            {
              d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",
              key: "ibqhof",
            },
          ],
          [
            "path",
            { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2", key: "1uenja" },
          ],
          ["path", { d: "M8 10h2", key: "66od0" }],
          ["path", { d: "M9 22v-8", key: "fmnu31" }],
          ["path", { d: "M9 2v4", key: "j1yeou" }],
        ]),
        fR = (0, h.A)("Table", [
          ["path", { d: "M12 3v18", key: "108xh3" }],
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "M3 15h18", key: "5xshup" }],
        ]),
        fD = (0, h.A)("TabletSmartphone", [
          [
            "rect",
            {
              width: "10",
              height: "14",
              x: "3",
              y: "8",
              rx: "2",
              key: "1vrsiq",
            },
          ],
          [
            "path",
            {
              d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",
              key: "1j4zmg",
            },
          ],
          ["path", { d: "M8 18h.01", key: "lrp35t" }],
        ]),
        fT = (0, h.A)("Tablet", [
          [
            "rect",
            {
              width: "16",
              height: "20",
              x: "4",
              y: "2",
              rx: "2",
              ry: "2",
              key: "76otgf",
            },
          ],
          [
            "line",
            { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" },
          ],
        ]),
        fF = (0, h.A)("Tablets", [
          ["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }],
          ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }],
          ["path", { d: "M12 17h10", key: "ls21zv" }],
          ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }],
        ]),
        fE = (0, h.A)("Tag", [
          [
            "path",
            {
              d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
              key: "vktsd0",
            },
          ],
          [
            "circle",
            {
              cx: "7.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "kqv944",
            },
          ],
        ]),
        fB = (0, h.A)("Tags", [
          [
            "path",
            { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" },
          ],
          [
            "path",
            {
              d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
              key: "135mg7",
            },
          ],
          [
            "circle",
            {
              cx: "6.5",
              cy: "9.5",
              r: ".5",
              fill: "currentColor",
              key: "5pm5xn",
            },
          ],
        ]),
        fO = (0, h.A)("Tally1", [["path", { d: "M4 4v16", key: "6qkkli" }]]),
        fZ = (0, h.A)("Tally2", [
          ["path", { d: "M4 4v16", key: "6qkkli" }],
          ["path", { d: "M9 4v16", key: "81ygyz" }],
        ]),
        fI = (0, h.A)("Tally3", [
          ["path", { d: "M4 4v16", key: "6qkkli" }],
          ["path", { d: "M9 4v16", key: "81ygyz" }],
          ["path", { d: "M14 4v16", key: "12vmem" }],
        ]),
        fN = (0, h.A)("Tally4", [
          ["path", { d: "M4 4v16", key: "6qkkli" }],
          ["path", { d: "M9 4v16", key: "81ygyz" }],
          ["path", { d: "M14 4v16", key: "12vmem" }],
          ["path", { d: "M19 4v16", key: "8ij5ei" }],
        ]),
        fU = (0, h.A)("Tally5", [
          ["path", { d: "M4 4v16", key: "6qkkli" }],
          ["path", { d: "M9 4v16", key: "81ygyz" }],
          ["path", { d: "M14 4v16", key: "12vmem" }],
          ["path", { d: "M19 4v16", key: "8ij5ei" }],
          ["path", { d: "M22 6 2 18", key: "h9moai" }],
        ]),
        fG = (0, h.A)("Tangent", [
          ["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }],
          ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }],
          ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }],
          ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }],
        ]),
        fW = (0, h.A)("Target", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ]),
        f_ = (0, h.A)("Telescope", [
          [
            "path",
            {
              d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
              key: "k4qptu",
            },
          ],
          ["path", { d: "m13.56 11.747 4.332-.924", key: "19l80z" }],
          ["path", { d: "m16 21-3.105-6.21", key: "7oh9d" }],
          [
            "path",
            {
              d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
              key: "m7xp4m",
            },
          ],
          ["path", { d: "m6.158 8.633 1.114 4.456", key: "74o979" }],
          ["path", { d: "m8 21 3.105-6.21", key: "1fvxut" }],
          ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
        ]),
        fX = (0, h.A)("TentTree", [
          ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
          ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }],
          ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }],
          ["path", { d: "M17 14V2", key: "8ymqnk" }],
          ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }],
          ["path", { d: "M8 14v8", key: "1ghmqk" }],
          ["path", { d: "m9 14 5 8", key: "13pgi6" }],
        ]),
        fK = (0, h.A)("Tent", [
          ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
          ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
          ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
          ["path", { d: "M2 21h20", key: "1nyx9w" }],
        ]),
        fY = (0, h.A)("Terminal", [
          ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
          ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
        ]),
        fJ = (0, h.A)("TestTubeDiagonal", [
          [
            "path",
            {
              d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",
              key: "1ub6xw",
            },
          ],
          ["path", { d: "m16 2 6 6", key: "1gw87d" }],
          ["path", { d: "M12 16H4", key: "1cjfip" }],
        ]),
        fQ = (0, h.A)("TestTube", [
          [
            "path",
            {
              d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",
              key: "125lnx",
            },
          ],
          ["path", { d: "M8.5 2h7", key: "csnxdl" }],
          ["path", { d: "M14.5 16h-5", key: "1ox875" }],
        ]),
        f$ = (0, h.A)("TestTubes", [
          [
            "path",
            {
              d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",
              key: "1hjrqt",
            },
          ],
          [
            "path",
            {
              d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",
              key: "16lc8n",
            },
          ],
          ["path", { d: "M3 2h7", key: "7s29d5" }],
          ["path", { d: "M14 2h7", key: "7sicin" }],
          ["path", { d: "M9 16H4", key: "1bfye3" }],
          ["path", { d: "M20 16h-5", key: "ddnjpe" }],
        ]),
        f1 = (0, h.A)("TextCursorInput", [
          [
            "path",
            { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1", key: "18xjzo" },
          ],
          [
            "path",
            { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5", key: "fj48gi" },
          ],
          [
            "path",
            { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" },
          ],
          [
            "path",
            { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" },
          ],
          ["path", { d: "M9 7v10", key: "1vc8ob" }],
        ]),
        f2 = (0, h.A)("TextCursor", [
          [
            "path",
            { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" },
          ],
          ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }],
          ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }],
        ]),
        f0 = (0, h.A)("TextQuote", [
          ["path", { d: "M17 6H3", key: "16j9eg" }],
          ["path", { d: "M21 12H8", key: "scolzb" }],
          ["path", { d: "M21 18H8", key: "1wfozv" }],
          ["path", { d: "M3 12v6", key: "fv4c87" }],
        ]),
        f4 = (0, h.A)("TextSearch", [
          ["path", { d: "M21 6H3", key: "1jwq7v" }],
          ["path", { d: "M10 12H3", key: "1ulcyk" }],
          ["path", { d: "M10 18H3", key: "13769t" }],
          ["circle", { cx: "17", cy: "15", r: "3", key: "1upz2a" }],
          ["path", { d: "m21 19-1.9-1.9", key: "dwi7p8" }],
        ]),
        f5 = (0, h.A)("TextSelect", [
          ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
          ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
          ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
          ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
          ["path", { d: "M9 3h1", key: "1yesri" }],
          ["path", { d: "M9 21h1", key: "15o7lz" }],
          ["path", { d: "M14 3h1", key: "1ec4yj" }],
          ["path", { d: "M14 21h1", key: "v9vybs" }],
          ["path", { d: "M3 9v1", key: "1r0deq" }],
          ["path", { d: "M21 9v1", key: "mxsmne" }],
          ["path", { d: "M3 14v1", key: "vnatye" }],
          ["path", { d: "M21 14v1", key: "169vum" }],
          ["line", { x1: "7", x2: "15", y1: "8", y2: "8", key: "1758g8" }],
          ["line", { x1: "7", x2: "17", y1: "12", y2: "12", key: "197423" }],
          ["line", { x1: "7", x2: "13", y1: "16", y2: "16", key: "37cgm6" }],
        ]),
        f3 = (0, h.A)("Text", [
          ["path", { d: "M17 6.1H3", key: "wptmhv" }],
          ["path", { d: "M21 12.1H3", key: "1j38uz" }],
          ["path", { d: "M15.1 18H3", key: "1nb16a" }],
        ]),
        f6 = (0, h.A)("Theater", [
          ["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }],
          ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }],
          ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }],
          ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }],
          ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }],
          ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }],
          ["path", { d: "M8 15h8", key: "45n4r" }],
          [
            "path",
            { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" },
          ],
          [
            "path",
            { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" },
          ],
        ]),
        f8 = (0, h.A)("ThermometerSnowflake", [
          ["path", { d: "M2 12h10", key: "19562f" }],
          ["path", { d: "M9 4v16", key: "81ygyz" }],
          ["path", { d: "m3 9 3 3-3 3", key: "1sas0l" }],
          ["path", { d: "M12 6 9 9 6 6", key: "pfrgxu" }],
          ["path", { d: "m6 18 3-3 1.5 1.5", key: "1e277p" }],
          [
            "path",
            { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" },
          ],
        ]),
        f7 = (0, h.A)("ThermometerSun", [
          ["path", { d: "M12 9a4 4 0 0 0-2 7.5", key: "1jvsq6" }],
          ["path", { d: "M12 3v2", key: "1w22ol" }],
          ["path", { d: "m6.6 18.4-1.4 1.4", key: "w2yidj" }],
          [
            "path",
            { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" },
          ],
          ["path", { d: "M4 13H2", key: "118le4" }],
          ["path", { d: "M6.34 7.34 4.93 5.93", key: "1brd51" }],
        ]),
        f9 = (0, h.A)("Thermometer", [
          [
            "path",
            { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" },
          ],
        ]),
        ge = (0, h.A)("ThumbsDown", [
          ["path", { d: "M17 14V2", key: "8ymqnk" }],
          [
            "path",
            {
              d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
              key: "m61m77",
            },
          ],
        ]),
        ga = (0, h.A)("ThumbsUp", [
          ["path", { d: "M7 10v12", key: "1qc93n" }],
          [
            "path",
            {
              d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
              key: "emmmcr",
            },
          ],
        ]),
        gt = (0, h.A)("TicketCheck", [
          [
            "path",
            {
              d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "qn84l0",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]),
        gh = (0, h.A)("TicketMinus", [
          [
            "path",
            {
              d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "qn84l0",
            },
          ],
          ["path", { d: "M9 12h6", key: "1c52cq" }],
        ]),
        gy = (0, h.A)("TicketPercent", [
          [
            "path",
            {
              d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "1l48ns",
            },
          ],
          ["path", { d: "M9 9h.01", key: "1q5me6" }],
          ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
          ["path", { d: "M15 15h.01", key: "lqbp3k" }],
        ]),
        gr = (0, h.A)("TicketPlus", [
          [
            "path",
            {
              d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "qn84l0",
            },
          ],
          ["path", { d: "M9 12h6", key: "1c52cq" }],
          ["path", { d: "M12 9v6", key: "199k2o" }],
        ]),
        gd = (0, h.A)("TicketSlash", [
          [
            "path",
            {
              d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "qn84l0",
            },
          ],
          ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }],
        ]),
        gp = (0, h.A)("TicketX", [
          [
            "path",
            {
              d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "qn84l0",
            },
          ],
          ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }],
          ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }],
        ]),
        gk = (0, h.A)("Ticket", [
          [
            "path",
            {
              d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
              key: "qn84l0",
            },
          ],
          ["path", { d: "M13 5v2", key: "dyzc3o" }],
          ["path", { d: "M13 17v2", key: "1ont0d" }],
          ["path", { d: "M13 11v2", key: "1wjjxi" }],
        ]),
        gl = (0, h.A)("TicketsPlane", [
          [
            "path",
            { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12", key: "16muxl" },
          ],
          ["path", { d: "m12 13.5 3.75.5", key: "1i9qhk" }],
          [
            "path",
            {
              d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",
              key: "12lg5p",
            },
          ],
          ["path", { d: "M6 10V8", key: "1y41hn" }],
          ["path", { d: "M6 14v1", key: "cao2tf" }],
          ["path", { d: "M6 19v2", key: "1loha6" }],
          [
            "rect",
            {
              x: "2",
              y: "8",
              width: "20",
              height: "13",
              rx: "2",
              key: "p3bz5l",
            },
          ],
        ]),
        gi = (0, h.A)("Tickets", [
          [
            "path",
            {
              d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",
              key: "12lg5p",
            },
          ],
          ["path", { d: "M6 10V8", key: "1y41hn" }],
          ["path", { d: "M6 14v1", key: "cao2tf" }],
          ["path", { d: "M6 19v2", key: "1loha6" }],
          [
            "rect",
            {
              x: "2",
              y: "8",
              width: "20",
              height: "13",
              rx: "2",
              key: "p3bz5l",
            },
          ],
        ]),
        gn = (0, h.A)("TimerOff", [
          ["path", { d: "M10 2h4", key: "n1abiw" }],
          [
            "path",
            { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" },
          ],
          [
            "path",
            { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M12 12v-2", key: "fwoke6" }],
        ]),
        gc = (0, h.A)("TimerReset", [
          ["path", { d: "M10 2h4", key: "n1abiw" }],
          ["path", { d: "M12 14v-4", key: "1evpnu" }],
          [
            "path",
            { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" },
          ],
          ["path", { d: "M9 17H4v5", key: "8t5av" }],
        ]),
        go = (0, h.A)("Timer", [
          ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
          ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
          ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
        ]),
        gM = (0, h.A)("ToggleLeft", [
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "6",
              ry: "6",
              key: "f2vt7d",
            },
          ],
          ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }],
        ]),
        gs = (0, h.A)("ToggleRight", [
          [
            "rect",
            {
              width: "20",
              height: "12",
              x: "2",
              y: "6",
              rx: "6",
              ry: "6",
              key: "f2vt7d",
            },
          ],
          ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }],
        ]),
        gu = (0, h.A)("Tornado", [
          ["path", { d: "M21 4H3", key: "1hwok0" }],
          ["path", { d: "M18 8H6", key: "41n648" }],
          ["path", { d: "M19 12H9", key: "1g4lpz" }],
          ["path", { d: "M16 16h-6", key: "1j5d54" }],
          ["path", { d: "M11 20H9", key: "39obr8" }],
        ]),
        gv = (0, h.A)("Torus", [
          ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }],
          [
            "ellipse",
            { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" },
          ],
        ]),
        gm = (0, h.A)("TouchpadOff", [
          [
            "path",
            { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16", key: "lnt0bk" },
          ],
          ["path", { d: "M2 14h12", key: "d8icqz" }],
          ["path", { d: "M22 14h-2", key: "jrx26d" }],
          ["path", { d: "M12 20v-6", key: "1rm09r" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10", key: "11y8e4" }],
        ]),
        gx = (0, h.A)("Touchpad", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["path", { d: "M2 14h20", key: "myj16y" }],
          ["path", { d: "M12 20v-6", key: "1rm09r" }],
        ]),
        gf = (0, h.A)("TowerControl", [
          [
            "path",
            {
              d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",
              key: "1pledb",
            },
          ],
          ["path", { d: "M8 13v9", key: "hmv0ci" }],
          ["path", { d: "M16 22v-9", key: "ylnf1u" }],
          ["path", { d: "m9 6 1 7", key: "dpdgam" }],
          ["path", { d: "m15 6-1 7", key: "ls7zgu" }],
          ["path", { d: "M12 6V2", key: "1pj48d" }],
          ["path", { d: "M13 2h-2", key: "mj6ths" }],
        ]),
        gg = (0, h.A)("ToyBrick", [
          [
            "rect",
            {
              width: "18",
              height: "12",
              x: "3",
              y: "8",
              rx: "1",
              key: "158fvp",
            },
          ],
          [
            "path",
            { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" },
          ],
          [
            "path",
            { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" },
          ],
        ]),
        gA = (0, h.A)("Tractor", [
          [
            "path",
            {
              d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",
              key: "she1j9",
            },
          ],
          ["path", { d: "M16 18h-5", key: "bq60fd" }],
          ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573", key: "1kv8ia" }],
          [
            "path",
            { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246", key: "1q1ert" },
          ],
          ["path", { d: "M4 11V4", key: "9ft8pt" }],
          ["path", { d: "M7 15h.01", key: "k5ht0j" }],
          ["path", { d: "M8 10.1V4", key: "1jgyzo" }],
          ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }],
          ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }],
        ]),
        gw = (0, h.A)("TrafficCone", [
          ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0", key: "flyxqv" }],
          [
            "path",
            {
              d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",
              key: "1nlxxg",
            },
          ],
          [
            "path",
            {
              d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",
              key: "vz7x1l",
            },
          ],
          [
            "path",
            {
              d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",
              key: "1xfzlw",
            },
          ],
        ]),
        gb = (0, h.A)("TrainFrontTunnel", [
          ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }],
          ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }],
          ["path", { d: "M10 15h.01", key: "44in9x" }],
          ["path", { d: "M14 15h.01", key: "5mohn5" }],
          [
            "path",
            {
              d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",
              key: "hckbmu",
            },
          ],
          ["path", { d: "m9 19-2 3", key: "iij7hm" }],
          ["path", { d: "m15 19 2 3", key: "npx8sa" }],
        ]),
        gC = (0, h.A)("TrainFront", [
          ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
          ["path", { d: "m9 15-1-1", key: "1yrq24" }],
          ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
          [
            "path",
            {
              d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",
              key: "1p0hjs",
            },
          ],
          ["path", { d: "m8 19-2 3", key: "13i0xs" }],
          ["path", { d: "m16 19 2 3", key: "xo31yx" }],
        ]),
        gq = (0, h.A)("TrainTrack", [
          ["path", { d: "M2 17 17 2", key: "18b09t" }],
          ["path", { d: "m2 14 8 8", key: "1gv9hu" }],
          ["path", { d: "m5 11 8 8", key: "189pqp" }],
          ["path", { d: "m8 8 8 8", key: "1imecy" }],
          ["path", { d: "m11 5 8 8", key: "ummqn6" }],
          ["path", { d: "m14 2 8 8", key: "1vk7dn" }],
          ["path", { d: "M7 22 22 7", key: "15mb1i" }],
        ]),
        gz = (0, h.A)("TramFront", [
          [
            "rect",
            {
              width: "16",
              height: "16",
              x: "4",
              y: "3",
              rx: "2",
              key: "1wxw4b",
            },
          ],
          ["path", { d: "M4 11h16", key: "mpoxn0" }],
          ["path", { d: "M12 3v8", key: "1h2ygw" }],
          ["path", { d: "m8 19-2 3", key: "13i0xs" }],
          ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
          ["path", { d: "M8 15h.01", key: "a7atzg" }],
          ["path", { d: "M16 15h.01", key: "rnfrdf" }],
        ]),
        gj = (0, h.A)("Trash2", [
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          [
            "path",
            { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" },
          ],
          ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
          ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
          ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
        ]),
        gH = (0, h.A)("Trash", [
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          [
            "path",
            { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" },
          ],
          ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ]),
        gS = (0, h.A)("TreeDeciduous", [
          [
            "path",
            {
              d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
              key: "oadzkq",
            },
          ],
          ["path", { d: "M12 19v3", key: "npa21l" }],
        ]),
        gV = (0, h.A)("TreePalm", [
          [
            "path",
            {
              d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
              key: "foxbe7",
            },
          ],
          [
            "path",
            {
              d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
              key: "18arnh",
            },
          ],
          [
            "path",
            {
              d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",
              key: "ywahnh",
            },
          ],
          [
            "path",
            {
              d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
              key: "ft0feo",
            },
          ],
        ]),
        gL = (0, h.A)("TreePine", [
          [
            "path",
            {
              d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
              key: "cpyugq",
            },
          ],
          ["path", { d: "M12 22v-3", key: "kmzjlo" }],
        ]),
        gP = (0, h.A)("Trees", [
          [
            "path",
            {
              d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
              key: "1l6gj6",
            },
          ],
          ["path", { d: "M7 16v6", key: "1a82de" }],
          ["path", { d: "M13 19v3", key: "13sx9i" }],
          [
            "path",
            {
              d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
              key: "1sj9kv",
            },
          ],
        ]),
        gR = (0, h.A)("Trello", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }],
          ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }],
        ]),
        gD = (0, h.A)("TrendingDown", [
          [
            "polyline",
            { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" },
          ],
          ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
        ]),
        gT = (0, h.A)("TrendingUpDown", [
          ["path", { d: "M14.828 14.828 21 21", key: "ar5fw7" }],
          ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
          ["path", { d: "m21 3-9 9-4-4-6 6", key: "1h02xo" }],
          ["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
        ]),
        gF = (0, h.A)("TrendingUp", [
          [
            "polyline",
            { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" },
          ],
          ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
        ])
      var gE = t(5524)
      let gB = (0, h.A)("TriangleRight", [
          [
            "path",
            {
              d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
              key: "183wce",
            },
          ],
        ]),
        gO = (0, h.A)("Triangle", [
          [
            "path",
            {
              d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
              key: "14u9p9",
            },
          ],
        ]),
        gZ = (0, h.A)("Trophy", [
          ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
          ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
          ["path", { d: "M4 22h16", key: "57wxv0" }],
          [
            "path",
            {
              d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
              key: "1nw9bq",
            },
          ],
          [
            "path",
            {
              d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
              key: "1np0yb",
            },
          ],
          ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
        ]),
        gI = (0, h.A)("Truck", [
          [
            "path",
            {
              d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
              key: "wrbu53",
            },
          ],
          ["path", { d: "M15 18H9", key: "1lyqi6" }],
          [
            "path",
            {
              d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
              key: "lysw3i",
            },
          ],
          ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
          ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
        ]),
        gN = (0, h.A)("Turtle", [
          [
            "path",
            {
              d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
              key: "1lbbv7",
            },
          ],
          ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
          ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
          ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }],
        ]),
        gU = (0, h.A)("TvMinimalPlay", [
          [
            "path",
            {
              d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
              key: "1pctta",
            },
          ],
          ["path", { d: "M7 21h10", key: "1b0cd5" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
        ]),
        gG = (0, h.A)("TvMinimal", [
          ["path", { d: "M7 21h10", key: "1b0cd5" }],
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
        ]),
        gW = (0, h.A)("Tv", [
          [
            "rect",
            {
              width: "20",
              height: "15",
              x: "2",
              y: "7",
              rx: "2",
              ry: "2",
              key: "10ag99",
            },
          ],
          ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }],
        ]),
        g_ = (0, h.A)("Twitch", [
          [
            "path",
            { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" },
          ],
        ]),
        gX = (0, h.A)("Twitter", [
          [
            "path",
            {
              d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
              key: "pff0z6",
            },
          ],
        ]),
        gK = (0, h.A)("TypeOutline", [
          [
            "path",
            {
              d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",
              key: "1reda3",
            },
          ],
        ]),
        gY = (0, h.A)("Type", [
          ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
          ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
          ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
        ]),
        gJ = (0, h.A)("UmbrellaOff", [
          ["path", { d: "M12 2v1", key: "11qlp1" }],
          [
            "path",
            {
              d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",
              key: "eki10q",
            },
          ],
          ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455", key: "n2ayka" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        gQ = (0, h.A)("Umbrella", [
          ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z", key: "1teyop" }],
          ["path", { d: "M12 12v8a2 2 0 0 0 4 0", key: "ulpmoc" }],
          ["path", { d: "M12 2v1", key: "11qlp1" }],
        ]),
        g$ = (0, h.A)("Underline", [
          ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
          ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }],
        ]),
        g1 = (0, h.A)("Undo2", [
          ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
          [
            "path",
            {
              d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
              key: "f3b9sd",
            },
          ],
        ]),
        g2 = (0, h.A)("UndoDot", [
          ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
          ["path", { d: "M3 7v6h6", key: "1v2h90" }],
          [
            "path",
            { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" },
          ],
        ]),
        g0 = (0, h.A)("Undo", [
          ["path", { d: "M3 7v6h6", key: "1v2h90" }],
          [
            "path",
            { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" },
          ],
        ]),
        g4 = (0, h.A)("UnfoldHorizontal", [
          ["path", { d: "M16 12h6", key: "15xry1" }],
          ["path", { d: "M8 12H2", key: "1jqql6" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "M12 8v2", key: "1woqiv" }],
          ["path", { d: "M12 14v2", key: "8jcxud" }],
          ["path", { d: "M12 20v2", key: "1lh1kg" }],
          ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
          ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
        ]),
        g5 = (0, h.A)("UnfoldVertical", [
          ["path", { d: "M12 22v-6", key: "6o8u61" }],
          ["path", { d: "M12 8V2", key: "1wkif3" }],
          ["path", { d: "M4 12H2", key: "rhcxmi" }],
          ["path", { d: "M10 12H8", key: "s88cx1" }],
          ["path", { d: "M16 12h-2", key: "10asgb" }],
          ["path", { d: "M22 12h-2", key: "14jgyd" }],
          ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
          ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }],
        ]),
        g3 = (0, h.A)("Ungroup", [
          [
            "rect",
            { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" },
          ],
          [
            "rect",
            {
              width: "8",
              height: "6",
              x: "11",
              y: "14",
              rx: "1",
              key: "4tytwb",
            },
          ],
        ]),
        g6 = (0, h.A)("University", [
          ["circle", { cx: "12", cy: "10", r: "1", key: "1gnqs8" }],
          [
            "path",
            {
              d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
              key: "1qj5sn",
            },
          ],
          ["path", { d: "M6 17v.01", key: "roodi6" }],
          ["path", { d: "M6 13v.01", key: "67c122" }],
          ["path", { d: "M18 17v.01", key: "12ktxm" }],
          ["path", { d: "M18 13v.01", key: "tn1rt1" }],
          [
            "path",
            { d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5", key: "11g7fi" },
          ],
        ]),
        g8 = (0, h.A)("Unlink2", [
          [
            "path",
            {
              d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",
              key: "1re2ne",
            },
          ],
        ]),
        g7 = (0, h.A)("Unlink", [
          [
            "path",
            {
              d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
              key: "yqzxt4",
            },
          ],
          [
            "path",
            {
              d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
              key: "4qinb0",
            },
          ],
          ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
          ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
          ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
          ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }],
        ]),
        g9 = (0, h.A)("Unplug", [
          ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
          ["path", { d: "m2 22 3-3", key: "19mgm9" }],
          [
            "path",
            {
              d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
              key: "goz73y",
            },
          ],
          ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
          ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
          [
            "path",
            {
              d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
              key: "1snsnr",
            },
          ],
        ]),
        Ae = (0, h.A)("Upload", [
          [
            "path",
            { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
          ],
          ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
          ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
        ]),
        Aa = (0, h.A)("Usb", [
          ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
          ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
          ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
          ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
          ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
          ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
          ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }],
        ]),
        At = (0, h.A)("UserCheck", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
        ])
      var Ah = t(6762)
      let Ay = (0, h.A)("UserMinus", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
        ]),
        Ar = (0, h.A)("UserPen", [
          ["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2", key: "15lzij" }],
          [
            "path",
            {
              d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "1817ys",
            },
          ],
          ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
        ]),
        Ad = (0, h.A)("UserPlus", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
          ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
        ]),
        Ap = (0, h.A)("UserRoundCheck", [
          ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
        ]),
        Ak = (0, h.A)("UserRoundCog", [
          ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["path", { d: "m19.5 14.3-.4.9", key: "1eb35c" }],
          ["path", { d: "m16.9 20.8-.4.9", key: "dfjc4z" }],
          ["path", { d: "m21.7 19.5-.9-.4", key: "q4dx6b" }],
          ["path", { d: "m15.2 16.9-.9-.4", key: "1r0w5f" }],
          ["path", { d: "m21.7 16.5-.9.4", key: "1knoei" }],
          ["path", { d: "m15.2 19.1-.9.4", key: "j188fs" }],
          ["path", { d: "m19.5 21.7-.4-.9", key: "1tonu5" }],
          ["path", { d: "m16.9 15.2-.4-.9", key: "699xu" }],
        ]),
        Al = (0, h.A)("UserRoundMinus", [
          ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          ["path", { d: "M22 19h-6", key: "vcuq98" }],
        ]),
        Ai = (0, h.A)("UserRoundPen", [
          ["path", { d: "M2 21a8 8 0 0 1 10.821-7.487", key: "1c8h7z" }],
          [
            "path",
            {
              d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
              key: "1817ys",
            },
          ],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
        ]),
        An = (0, h.A)("UserRoundPlus", [
          ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          ["path", { d: "M19 16v6", key: "tddt3s" }],
          ["path", { d: "M22 19h-6", key: "vcuq98" }],
        ]),
        Ac = (0, h.A)("UserRoundSearch", [
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
          ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
          ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }],
        ]),
        Ao = (0, h.A)("UserRoundX", [
          ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          ["path", { d: "m17 17 5 5", key: "p7ous7" }],
          ["path", { d: "m22 17-5 5", key: "gqnmv0" }],
        ]),
        AM = (0, h.A)("UserRound", [
          ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
          ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
        ]),
        As = (0, h.A)("UserSearch", [
          ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
          ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }],
          ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
          ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }],
        ]),
        Au = (0, h.A)("UserX", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
          ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }],
        ])
      var Av = t(5984)
      let Am = (0, h.A)("UsersRound", [
          ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
          ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
          [
            "path",
            { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" },
          ],
        ]),
        Ax = (0, h.A)("Users", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
          ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
        ]),
        Af = (0, h.A)("UtensilsCrossed", [
          [
            "path",
            {
              d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
              key: "n7qcjb",
            },
          ],
          [
            "path",
            {
              d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
              key: "d0u48b",
            },
          ],
          ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
          ["path", { d: "m19 5-7 7", key: "194lzd" }],
        ]),
        Ag = (0, h.A)("Utensils", [
          [
            "path",
            { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" },
          ],
          ["path", { d: "M7 2v20", key: "1473qp" }],
          [
            "path",
            {
              d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
              key: "j28e5",
            },
          ],
        ]),
        AA = (0, h.A)("UtilityPole", [
          ["path", { d: "M12 2v20", key: "t6zp3m" }],
          ["path", { d: "M2 5h20", key: "1fs1ex" }],
          ["path", { d: "M3 3v2", key: "9imdir" }],
          ["path", { d: "M7 3v2", key: "n0os7" }],
          ["path", { d: "M17 3v2", key: "1l2re6" }],
          ["path", { d: "M21 3v2", key: "1duuac" }],
          ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }],
        ]),
        Aw = (0, h.A)("Variable", [
          ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
          ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
          ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
          ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }],
        ]),
        Ab = (0, h.A)("Vault", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          [
            "circle",
            {
              cx: "7.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "kqv944",
            },
          ],
          ["path", { d: "m7.9 7.9 2.7 2.7", key: "hpeyl3" }],
          [
            "circle",
            {
              cx: "16.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "w0ekpg",
            },
          ],
          ["path", { d: "m13.4 10.6 2.7-2.7", key: "264c1n" }],
          [
            "circle",
            {
              cx: "7.5",
              cy: "16.5",
              r: ".5",
              fill: "currentColor",
              key: "nkw3mc",
            },
          ],
          ["path", { d: "m7.9 16.1 2.7-2.7", key: "p81g5e" }],
          [
            "circle",
            {
              cx: "16.5",
              cy: "16.5",
              r: ".5",
              fill: "currentColor",
              key: "fubopw",
            },
          ],
          ["path", { d: "m13.4 13.4 2.7 2.7", key: "abhel3" }],
          ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
        ]),
        AC = (0, h.A)("Vegan", [
          [
            "path",
            {
              d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",
              key: "qiv7li",
            },
          ],
          ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6", key: "n7eohy" }],
          ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3", key: "1dion0" }],
        ]),
        Aq = (0, h.A)("VenetianMask", [
          [
            "path",
            {
              d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
              key: "1g6z3j",
            },
          ],
          ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z", key: "c2lwnf" }],
          ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z", key: "njd9zo" }],
        ]),
        Az = (0, h.A)("VibrateOff", [
          ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
          ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
          [
            "path",
            { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" },
          ],
          ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        Aj = (0, h.A)("Vibrate", [
          ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
          ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
          [
            "rect",
            {
              width: "8",
              height: "14",
              x: "8",
              y: "5",
              rx: "1",
              key: "1oyrl4",
            },
          ],
        ]),
        AH = (0, h.A)("VideoOff", [
          [
            "path",
            {
              d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",
              key: "w8jjjt",
            },
          ],
          [
            "path",
            {
              d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
              key: "1xawa7",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        AS = (0, h.A)("Video", [
          [
            "path",
            {
              d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
              key: "ftymec",
            },
          ],
          [
            "rect",
            {
              x: "2",
              y: "6",
              width: "14",
              height: "12",
              rx: "2",
              key: "158x01",
            },
          ],
        ]),
        AV = (0, h.A)("Videotape", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          ["path", { d: "M2 8h20", key: "d11cs7" }],
          ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }],
        ]),
        AL = (0, h.A)("View", [
          [
            "path",
            { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" },
          ],
          [
            "path",
            { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" },
          ],
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          [
            "path",
            {
              d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
              key: "11ak4c",
            },
          ],
        ]),
        AP = (0, h.A)("Voicemail", [
          ["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }],
          ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }],
          ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }],
        ]),
        AR = (0, h.A)("Volume1", [
          [
            "path",
            {
              d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
              key: "uqj9uw",
            },
          ],
          ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
        ]),
        AD = (0, h.A)("Volume2", [
          [
            "path",
            {
              d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
              key: "uqj9uw",
            },
          ],
          ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
          ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
        ]),
        AT = (0, h.A)("VolumeOff", [
          ["path", { d: "M16 9a5 5 0 0 1 .95 2.293", key: "1fgyg8" }],
          ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96", key: "l3zxae" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
          [
            "path",
            {
              d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
              key: "1gbwow",
            },
          ],
          [
            "path",
            { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686", key: "s2je0y" },
          ],
        ]),
        AF = (0, h.A)("VolumeX", [
          [
            "path",
            {
              d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
              key: "uqj9uw",
            },
          ],
          ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
          ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
        ]),
        AE = (0, h.A)("Volume", [
          [
            "path",
            {
              d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
              key: "uqj9uw",
            },
          ],
        ]),
        AB = (0, h.A)("Vote", [
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
          [
            "path",
            { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" },
          ],
          ["path", { d: "M22 19H2", key: "nuriw5" }],
        ]),
        AO = (0, h.A)("WalletCards", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
          [
            "path",
            {
              d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
              key: "1dpki6",
            },
          ],
        ]),
        AZ = (0, h.A)("WalletMinimal", [
          ["path", { d: "M17 14h.01", key: "7oqj8z" }],
          [
            "path",
            {
              d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
              key: "u1rqew",
            },
          ],
        ]),
        AI = (0, h.A)("Wallet", [
          [
            "path",
            {
              d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
              key: "18etb6",
            },
          ],
          [
            "path",
            { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
          ],
        ]),
        AN = (0, h.A)("Wallpaper", [
          ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
          [
            "path",
            {
              d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
              key: "69xh40",
            },
          ],
          ["path", { d: "M8 21h8", key: "1ev6f3" }],
          ["path", { d: "M12 17v4", key: "1riwvh" }],
        ]),
        AU = (0, h.A)("WandSparkles", [
          [
            "path",
            {
              d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
              key: "ul74o6",
            },
          ],
          ["path", { d: "m14 7 3 3", key: "1r5n42" }],
          ["path", { d: "M5 6v4", key: "ilb8ba" }],
          ["path", { d: "M19 14v4", key: "blhpug" }],
          ["path", { d: "M10 2v2", key: "7u0qdc" }],
          ["path", { d: "M7 8H3", key: "zfb6yr" }],
          ["path", { d: "M21 16h-4", key: "1cnmox" }],
          ["path", { d: "M11 3H9", key: "1obp7u" }],
        ]),
        AG = (0, h.A)("Wand", [
          ["path", { d: "M15 4V2", key: "z1p9b7" }],
          ["path", { d: "M15 16v-2", key: "px0unx" }],
          ["path", { d: "M8 9h2", key: "1g203m" }],
          ["path", { d: "M20 9h2", key: "19tzq7" }],
          ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
          ["path", { d: "M15 9h.01", key: "x1ddxp" }],
          ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
          ["path", { d: "m3 21 9-9", key: "1jfql5" }],
          ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }],
        ]),
        AW = (0, h.A)("Warehouse", [
          [
            "path",
            {
              d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
              key: "gksnxg",
            },
          ],
          ["path", { d: "M6 18h12", key: "9pbo8z" }],
          ["path", { d: "M6 14h12", key: "4cwo0f" }],
          [
            "rect",
            { width: "12", height: "12", x: "6", y: "10", key: "apd30q" },
          ],
        ]),
        A_ = (0, h.A)("WashingMachine", [
          ["path", { d: "M3 6h3", key: "155dbl" }],
          ["path", { d: "M17 6h.01", key: "e2y6kg" }],
          [
            "rect",
            {
              width: "18",
              height: "20",
              x: "3",
              y: "2",
              rx: "2",
              key: "od3kk9",
            },
          ],
          ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }],
          [
            "path",
            { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" },
          ],
        ]),
        AX = (0, h.A)("Watch", [
          ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
          ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
          [
            "path",
            {
              d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
              key: "18k57s",
            },
          ],
          [
            "path",
            {
              d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
              key: "16ny36",
            },
          ],
        ]),
        AK = (0, h.A)("Waves", [
          [
            "path",
            {
              d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
              key: "knzxuh",
            },
          ],
          [
            "path",
            {
              d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
              key: "2jd2cc",
            },
          ],
          [
            "path",
            {
              d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
              key: "rd2r6e",
            },
          ],
        ]),
        AY = (0, h.A)("Waypoints", [
          ["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }],
          ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }],
          ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }],
          ["path", { d: "M7 12h10", key: "b7w52i" }],
          ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }],
          ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }],
          ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }],
        ]),
        AJ = (0, h.A)("Webcam", [
          ["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ["path", { d: "M7 22h10", key: "10w4w3" }],
          ["path", { d: "M12 22v-4", key: "1utk9m" }],
        ]),
        AQ = (0, h.A)("WebhookOff", [
          [
            "path",
            {
              d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",
              key: "1tvl6x",
            },
          ],
          ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66", key: "q04jfq" }],
          [
            "path",
            { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05", key: "azowf0" },
          ],
          ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7", key: "5joiws" }],
          ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414", key: "cangb8" }],
          ["path", { d: "m12 6 .6 1", key: "tpjl1n" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        A$ = (0, h.A)("Webhook", [
          [
            "path",
            {
              d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
              key: "q3hayz",
            },
          ],
          [
            "path",
            {
              d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
              key: "1go1hn",
            },
          ],
          [
            "path",
            {
              d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
              key: "qlwsc0",
            },
          ],
        ]),
        A1 = (0, h.A)("Weight", [
          ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
          [
            "path",
            {
              d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
              key: "56o5sh",
            },
          ],
        ]),
        A2 = (0, h.A)("WheatOff", [
          ["path", { d: "m2 22 10-10", key: "28ilpk" }],
          ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }],
          [
            "path",
            {
              d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
              key: "1rdhi6",
            },
          ],
          [
            "path",
            {
              d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",
              key: "4wz8re",
            },
          ],
          [
            "path",
            {
              d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",
              key: "rves66",
            },
          ],
          [
            "path",
            { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" },
          ],
          [
            "path",
            {
              d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
              key: "tc8ph9",
            },
          ],
          [
            "path",
            {
              d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
              key: "ak46r",
            },
          ],
          [
            "path",
            {
              d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
              key: "1tw520",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        A0 = (0, h.A)("Wheat", [
          ["path", { d: "M2 22 16 8", key: "60hf96" }],
          [
            "path",
            {
              d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
              key: "1rdhi6",
            },
          ],
          [
            "path",
            {
              d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
              key: "1sdzmb",
            },
          ],
          [
            "path",
            {
              d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
              key: "eoatbi",
            },
          ],
          [
            "path",
            { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" },
          ],
          [
            "path",
            {
              d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
              key: "tc8ph9",
            },
          ],
          [
            "path",
            {
              d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
              key: "2m8kc5",
            },
          ],
          [
            "path",
            {
              d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
              key: "vex3ng",
            },
          ],
        ]),
        A4 = (0, h.A)("WholeWord", [
          ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
          ["path", { d: "M10 9v6", key: "17i7lo" }],
          ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
          ["path", { d: "M14 7v8", key: "dl84cr" }],
          [
            "path",
            { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" },
          ],
        ]),
        A5 = (0, h.A)("WifiHigh", [
          ["path", { d: "M12 20h.01", key: "zekei9" }],
          ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
          ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
        ]),
        A3 = (0, h.A)("WifiLow", [
          ["path", { d: "M12 20h.01", key: "zekei9" }],
          ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
        ]),
        A6 = (0, h.A)("WifiOff", [
          ["path", { d: "M12 20h.01", key: "zekei9" }],
          ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
          ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
          ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
          ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
          ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        A8 = (0, h.A)("WifiZero", [
          ["path", { d: "M12 20h.01", key: "zekei9" }],
        ]),
        A7 = (0, h.A)("Wifi", [
          ["path", { d: "M12 20h.01", key: "zekei9" }],
          ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
          ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
          ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
        ]),
        A9 = (0, h.A)("Wind", [
          ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
          ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
          ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }],
        ]),
        we = (0, h.A)("WineOff", [
          ["path", { d: "M8 22h8", key: "rmew8v" }],
          ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }],
          ["path", { d: "M12 15v7", key: "t2xh3l" }],
          [
            "path",
            {
              d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
              key: "1ymjlu",
            },
          ],
          ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
        ]),
        wa = (0, h.A)("Wine", [
          ["path", { d: "M8 22h8", key: "rmew8v" }],
          ["path", { d: "M7 10h10", key: "1101jm" }],
          ["path", { d: "M12 15v7", key: "t2xh3l" }],
          [
            "path",
            {
              d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",
              key: "10ffi3",
            },
          ],
        ]),
        wt = (0, h.A)("Workflow", [
          [
            "rect",
            { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" },
          ],
          ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
          [
            "rect",
            {
              width: "8",
              height: "8",
              x: "13",
              y: "13",
              rx: "2",
              key: "1cgmvn",
            },
          ],
        ]),
        wh = (0, h.A)("Worm", [
          ["path", { d: "m19 12-1.5 3", key: "9bcu4o" }],
          ["path", { d: "M19.63 18.81 22 20", key: "121v98" }],
          [
            "path",
            {
              d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",
              key: "1tij6q",
            },
          ],
        ]),
        wy = (0, h.A)("WrapText", [
          ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
          ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4", key: "1cl7v7" }],
          ["polyline", { points: "16 16 14 18 16 20", key: "1jznyi" }],
          ["line", { x1: "3", x2: "10", y1: "18", y2: "18", key: "1h33wv" }],
        ]),
        wr = (0, h.A)("Wrench", [
          [
            "path",
            {
              d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
              key: "cbrjhi",
            },
          ],
        ])
      var wd = t(4457)
      let wp = (0, h.A)("Youtube", [
          [
            "path",
            {
              d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
              key: "1q2vi4",
            },
          ],
          ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
        ]),
        wk = (0, h.A)("ZapOff", [
          [
            "path",
            {
              d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",
              key: "193nxd",
            },
          ],
          [
            "path",
            {
              d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",
              key: "27a7lr",
            },
          ],
          [
            "path",
            {
              d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",
              key: "1e0qe9",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        wl = (0, h.A)("Zap", [
          [
            "path",
            {
              d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
              key: "1xq2db",
            },
          ],
        ]),
        wi = (0, h.A)("ZoomIn", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          [
            "line",
            { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" },
          ],
          ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
          ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
        ]),
        wn = (0, h.A)("ZoomOut", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          [
            "line",
            { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" },
          ],
          ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
        ])
    },
    5029: (e, a, t) => {
      t.d(a, {
        Mz: () => ag,
        i3: () => aL,
        H_: () => az,
        UC: () => aw,
        YJ: () => ab,
        q7: () => aq,
        VF: () => aS,
        JU: () => aC,
        ZL: () => aA,
        z6: () => aj,
        hN: () => aH,
        bL: () => af,
        wv: () => aV,
        Pb: () => aP,
        G5: () => aD,
        ZP: () => aR,
        UE: () => eP,
      })
      var h = t(2149),
        y = t(5572),
        r = t(6676),
        d = t(5362),
        p = t(7218),
        k = t(6228),
        l = t(6504),
        i = 0
      function n() {
        let e = document.createElement("span")
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        )
      }
      var c = t(9108),
        o = t(9284),
        M = t(8081),
        s = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        v = { bubbles: !1, cancelable: !0 },
        m = h.forwardRef((e, a) => {
          let {
              loop: t = !1,
              trapped: y = !1,
              onMountAutoFocus: r,
              onUnmountAutoFocus: p,
              ...k
            } = e,
            [l, i] = h.useState(null),
            n = (0, o.c)(r),
            m = (0, o.c)(p),
            w = h.useRef(null),
            b = (0, d.s)(a, (e) => i(e)),
            C = h.useRef({
              paused: !1,
              pause() {
                this.paused = !0
              },
              resume() {
                this.paused = !1
              },
            }).current
          ;(h.useEffect(() => {
            if (y) {
              let e = function (e) {
                  if (C.paused || !l) return
                  let a = e.target
                  l.contains(a) ? (w.current = a) : g(w.current, { select: !0 })
                },
                a = function (e) {
                  if (C.paused || !l) return
                  let a = e.relatedTarget
                  null === a || l.contains(a) || g(w.current, { select: !0 })
                }
              ;(document.addEventListener("focusin", e),
                document.addEventListener("focusout", a))
              let t = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let a of e) a.removedNodes.length > 0 && g(l)
              })
              return (
                l && t.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  ;(document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", a),
                    t.disconnect())
                }
              )
            }
          }, [y, l, C.paused]),
            h.useEffect(() => {
              if (l) {
                A.add(C)
                let e = document.activeElement
                if (!l.contains(e)) {
                  let a = new CustomEvent(s, v)
                  ;(l.addEventListener(s, n),
                    l.dispatchEvent(a),
                    a.defaultPrevented ||
                      ((function (e) {
                        let { select: a = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          t = document.activeElement
                        for (let h of e)
                          if (
                            (g(h, { select: a }), document.activeElement !== t)
                          )
                            return
                      })(
                        x(l).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && g(l)))
                }
                return () => {
                  ;(l.removeEventListener(s, n),
                    setTimeout(() => {
                      let a = new CustomEvent(u, v)
                      ;(l.addEventListener(u, m),
                        l.dispatchEvent(a),
                        a.defaultPrevented ||
                          g(null != e ? e : document.body, { select: !0 }),
                        l.removeEventListener(u, m),
                        A.remove(C))
                    }, 0))
                }
              }
            }, [l, n, m, C]))
          let q = h.useCallback(
            (e) => {
              if ((!t && !y) || C.paused) return
              let a = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                h = document.activeElement
              if (a && h) {
                let a = e.currentTarget,
                  [y, r] = (function (e) {
                    let a = x(e)
                    return [f(a, e), f(a.reverse(), e)]
                  })(a)
                y && r
                  ? e.shiftKey || h !== r
                    ? e.shiftKey &&
                      h === y &&
                      (e.preventDefault(), t && g(r, { select: !0 }))
                    : (e.preventDefault(), t && g(y, { select: !0 }))
                  : h === a && e.preventDefault()
              }
            },
            [t, y, C.paused]
          )
          return (0, M.jsx)(c.sG.div, {
            tabIndex: -1,
            ...k,
            ref: b,
            onKeyDown: q,
          })
        })
      function x(e) {
        let a = [],
          t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let a = "INPUT" === e.tagName && "hidden" === e.type
              return e.disabled || e.hidden || a
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP
            },
          })
        for (; t.nextNode(); ) a.push(t.currentNode)
        return a
      }
      function f(e, a) {
        for (let t of e)
          if (
            !(function (e, a) {
              let { upTo: t } = a
              if ("hidden" === getComputedStyle(e).visibility) return !0
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0
                e = e.parentElement
              }
              return !1
            })(t, { upTo: a })
          )
            return t
      }
      function g(e) {
        let { select: a = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        if (e && e.focus) {
          var t
          let h = document.activeElement
          ;(e.focus({ preventScroll: !0 }),
            e !== h &&
              (t = e) instanceof HTMLInputElement &&
              "select" in t &&
              a &&
              e.select())
        }
      }
      m.displayName = "FocusScope"
      var A = (function () {
        let e = []
        return {
          add(a) {
            let t = e[0]
            ;(a !== t && (null == t || t.pause()), (e = w(e, a)).unshift(a))
          },
          remove(a) {
            var t
            null === (t = (e = w(e, a))[0]) || void 0 === t || t.resume()
          },
        }
      })()
      function w(e, a) {
        let t = [...e],
          h = t.indexOf(a)
        return (-1 !== h && t.splice(h, 1), t)
      }
      var b = t(6428),
        C = t(4148),
        q = t(5923),
        z = h.forwardRef((e, a) => {
          let { children: t, width: h = 10, height: y = 5, ...r } = e
          return (0, M.jsx)(c.sG.svg, {
            ...r,
            ref: a,
            width: h,
            height: y,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? t
              : (0, M.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          })
        })
      z.displayName = "Arrow"
      var j = t(357),
        H = t(2799),
        S = "Popper",
        [V, L] = (0, p.A)(S),
        [P, R] = V(S),
        D = (e) => {
          let { __scopePopper: a, children: t } = e,
            [y, r] = h.useState(null)
          return (0, M.jsx)(P, {
            scope: a,
            anchor: y,
            onAnchorChange: r,
            children: t,
          })
        }
      D.displayName = S
      var T = "PopperAnchor",
        F = h.forwardRef((e, a) => {
          let { __scopePopper: t, virtualRef: y, ...r } = e,
            p = R(T, t),
            k = h.useRef(null),
            l = (0, d.s)(a, k)
          return (
            h.useEffect(() => {
              p.onAnchorChange((null == y ? void 0 : y.current) || k.current)
            }),
            y ? null : (0, M.jsx)(c.sG.div, { ...r, ref: l })
          )
        })
      F.displayName = T
      var E = "PopperContent",
        [B, O] = V(E),
        Z = h.forwardRef((e, a) => {
          var t, y, r, p, k, l, i, n
          let {
              __scopePopper: s,
              side: u = "bottom",
              sideOffset: v = 0,
              align: m = "center",
              alignOffset: x = 0,
              arrowPadding: f = 0,
              avoidCollisions: g = !0,
              collisionBoundary: A = [],
              collisionPadding: w = 0,
              sticky: b = "partial",
              hideWhenDetached: z = !1,
              updatePositionStrategy: S = "optimized",
              onPlaced: V,
              ...L
            } = e,
            P = R(E, s),
            [D, T] = h.useState(null),
            F = (0, d.s)(a, (e) => T(e)),
            [O, Z] = h.useState(null),
            I = (0, H.X)(O),
            N =
              null !== (i = null == I ? void 0 : I.width) && void 0 !== i
                ? i
                : 0,
            U =
              null !== (n = null == I ? void 0 : I.height) && void 0 !== n
                ? n
                : 0,
            X =
              "number" == typeof w
                ? w
                : { top: 0, right: 0, bottom: 0, left: 0, ...w },
            K = Array.isArray(A) ? A : [A],
            Y = K.length > 0,
            J = { padding: X, boundary: K.filter(G), altBoundary: Y },
            {
              refs: Q,
              floatingStyles: $,
              placement: ee,
              isPositioned: ea,
              middlewareData: et,
            } = (0, C.we)({
              strategy: "fixed",
              placement: u + ("center" !== m ? "-" + m : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
                  a[t] = arguments[t]
                return (0, q.ll)(...a, { animationFrame: "always" === S })
              },
              elements: { reference: P.anchor },
              middleware: [
                (0, C.cY)({ mainAxis: v + U, alignmentAxis: x }),
                g &&
                  (0, C.BN)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === b ? (0, C.ER)() : void 0,
                    ...J,
                  }),
                g && (0, C.UU)({ ...J }),
                (0, C.Ej)({
                  ...J,
                  apply: (e) => {
                    let {
                        elements: a,
                        rects: t,
                        availableWidth: h,
                        availableHeight: y,
                      } = e,
                      { width: r, height: d } = t.reference,
                      p = a.floating.style
                    ;(p.setProperty(
                      "--radix-popper-available-width",
                      "".concat(h, "px")
                    ),
                      p.setProperty(
                        "--radix-popper-available-height",
                        "".concat(y, "px")
                      ),
                      p.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(r, "px")
                      ),
                      p.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(d, "px")
                      ))
                  },
                }),
                O && (0, C.UE)({ element: O, padding: f }),
                W({ arrowWidth: N, arrowHeight: U }),
                z && (0, C.jD)({ strategy: "referenceHidden", ...J }),
              ],
            }),
            [eh, ey] = _(ee),
            er = (0, o.c)(V)
          ;(0, j.N)(() => {
            ea && (null == er || er())
          }, [ea, er])
          let ed = null === (t = et.arrow) || void 0 === t ? void 0 : t.x,
            ep = null === (y = et.arrow) || void 0 === y ? void 0 : y.y,
            ek =
              (null === (r = et.arrow) || void 0 === r
                ? void 0
                : r.centerOffset) !== 0,
            [el, ei] = h.useState()
          return (
            (0, j.N)(() => {
              D && ei(window.getComputedStyle(D).zIndex)
            }, [D]),
            (0, M.jsx)("div", {
              ref: Q.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...$,
                transform: ea ? $.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: el,
                "--radix-popper-transform-origin": [
                  null === (p = et.transformOrigin) || void 0 === p
                    ? void 0
                    : p.x,
                  null === (k = et.transformOrigin) || void 0 === k
                    ? void 0
                    : k.y,
                ].join(" "),
                ...((null === (l = et.hide) || void 0 === l
                  ? void 0
                  : l.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, M.jsx)(B, {
                scope: s,
                placedSide: eh,
                onArrowChange: Z,
                arrowX: ed,
                arrowY: ep,
                shouldHideArrow: ek,
                children: (0, M.jsx)(c.sG.div, {
                  "data-side": eh,
                  "data-align": ey,
                  ...L,
                  ref: F,
                  style: { ...L.style, animation: ea ? void 0 : "none" },
                }),
              }),
            })
          )
        })
      Z.displayName = E
      var I = "PopperArrow",
        N = { top: "bottom", right: "left", bottom: "top", left: "right" },
        U = h.forwardRef(function (e, a) {
          let { __scopePopper: t, ...h } = e,
            y = O(I, t),
            r = N[y.placedSide]
          return (0, M.jsx)("span", {
            ref: y.onArrowChange,
            style: {
              position: "absolute",
              left: y.arrowX,
              top: y.arrowY,
              [r]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[y.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[y.placedSide],
              visibility: y.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, M.jsx)(z, {
              ...h,
              ref: a,
              style: { ...h.style, display: "block" },
            }),
          })
        })
      function G(e) {
        return null !== e
      }
      U.displayName = I
      var W = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(a) {
          var t, h, y, r, d
          let { placement: p, rects: k, middlewareData: l } = a,
            i =
              (null === (t = l.arrow) || void 0 === t
                ? void 0
                : t.centerOffset) !== 0,
            n = i ? 0 : e.arrowWidth,
            c = i ? 0 : e.arrowHeight,
            [o, M] = _(p),
            s = { start: "0%", center: "50%", end: "100%" }[M],
            u =
              (null !==
                (r = null === (h = l.arrow) || void 0 === h ? void 0 : h.x) &&
              void 0 !== r
                ? r
                : 0) +
              n / 2,
            v =
              (null !==
                (d = null === (y = l.arrow) || void 0 === y ? void 0 : y.y) &&
              void 0 !== d
                ? d
                : 0) +
              c / 2,
            m = "",
            x = ""
          return (
            "bottom" === o
              ? ((m = i ? s : "".concat(u, "px")), (x = "".concat(-c, "px")))
              : "top" === o
                ? ((m = i ? s : "".concat(u, "px")),
                  (x = "".concat(k.floating.height + c, "px")))
                : "right" === o
                  ? ((m = "".concat(-c, "px")),
                    (x = i ? s : "".concat(v, "px")))
                  : "left" === o &&
                    ((m = "".concat(k.floating.width + c, "px")),
                    (x = i ? s : "".concat(v, "px"))),
            { data: { x: m, y: x } }
          )
        },
      })
      function _(e) {
        let [a, t = "center"] = e.split("-")
        return [a, t]
      }
      var X = t(6757),
        K = t(6248),
        Y = t(7122),
        J = t(4408),
        Q = t(6093),
        $ = t(5334),
        ee = t(9707),
        ea = t(3098),
        et = (0, t(1224).f)(),
        eh = function () {},
        ey = h.forwardRef(function (e, a) {
          var t = h.useRef(null),
            y = h.useState({
              onScrollCapture: eh,
              onWheelCapture: eh,
              onTouchMoveCapture: eh,
            }),
            r = y[0],
            d = y[1],
            p = e.forwardProps,
            k = e.children,
            l = e.className,
            i = e.removeScrollBar,
            n = e.enabled,
            c = e.shards,
            o = e.sideCar,
            M = e.noIsolation,
            s = e.inert,
            u = e.allowPinchZoom,
            v = e.as,
            m = e.gapMode,
            x = (0, $.Tt)(e, [
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
            f = (0, ea.S)([t, a]),
            g = (0, $.Cl)((0, $.Cl)({}, x), r)
          return h.createElement(
            h.Fragment,
            null,
            n &&
              h.createElement(o, {
                sideCar: et,
                removeScrollBar: i,
                shards: c,
                noIsolation: M,
                inert: s,
                setCallbacks: d,
                allowPinchZoom: !!u,
                lockRef: t,
                gapMode: m,
              }),
            p
              ? h.cloneElement(
                  h.Children.only(k),
                  (0, $.Cl)((0, $.Cl)({}, g), { ref: f })
                )
              : h.createElement(
                  void 0 === v ? "div" : v,
                  (0, $.Cl)({}, g, { className: l, ref: f }),
                  k
                )
          )
        })
      ;((ey.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (ey.classNames = { fullWidth: ee.pN, zeroRight: ee.Mi }))
      var er = t(5238),
        ed = t(3839),
        ep = t(2827),
        ek = !1
      if ("undefined" != typeof window)
        try {
          var el = Object.defineProperty({}, "passive", {
            get: function () {
              return ((ek = !0), !0)
            },
          })
          ;(window.addEventListener("test", el, el),
            window.removeEventListener("test", el, el))
        } catch (e) {
          ek = !1
        }
      var ei = !!ek && { passive: !1 },
        en = function (e, a) {
          var t = window.getComputedStyle(e)
          return (
            "hidden" !== t[a] &&
            (t.overflowY !== t.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== t[a])
          )
        },
        ec = function (e, a) {
          var t = a.ownerDocument,
            h = a
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                h instanceof ShadowRoot &&
                (h = h.host),
              eo(e, h))
            ) {
              var y = eM(e, h)
              if (y[1] > y[2]) return !0
            }
            h = h.parentNode
          } while (h && h !== t.body)
          return !1
        },
        eo = function (e, a) {
          return "v" === e ? en(a, "overflowY") : en(a, "overflowX")
        },
        eM = function (e, a) {
          return "v" === e
            ? [a.scrollTop, a.scrollHeight, a.clientHeight]
            : [a.scrollLeft, a.scrollWidth, a.clientWidth]
        },
        es = function (e, a, t, h, y) {
          var r,
            d =
              ((r = window.getComputedStyle(a).direction),
              "h" === e && "rtl" === r ? -1 : 1),
            p = d * h,
            k = t.target,
            l = a.contains(k),
            i = !1,
            n = p > 0,
            c = 0,
            o = 0
          do {
            var M = eM(e, k),
              s = M[0],
              u = M[1] - M[2] - d * s
            ;((s || u) && eo(e, k) && ((c += u), (o += s)),
              (k = k instanceof ShadowRoot ? k.host : k.parentNode))
          } while (
            (!l && k !== document.body) ||
            (l && (a.contains(k) || a === k))
          )
          return (
            n && ((y && 1 > Math.abs(c)) || (!y && p > c))
              ? (i = !0)
              : !n && ((y && 1 > Math.abs(o)) || (!y && -p > o)) && (i = !0),
            i
          )
        },
        eu = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0]
        },
        ev = function (e) {
          return [e.deltaX, e.deltaY]
        },
        em = function (e) {
          return e && "current" in e ? e.current : e
        },
        ex = 0,
        ef = []
      let eg = (0, er.m)(et, function (e) {
        var a = h.useRef([]),
          t = h.useRef([0, 0]),
          y = h.useRef(),
          r = h.useState(ex++)[0],
          d = h.useState(ep.T0)[0],
          p = h.useRef(e)
        ;(h.useEffect(
          function () {
            p.current = e
          },
          [e]
        ),
          h.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(r))
                var a = (0, $.fX)(
                  [e.lockRef.current],
                  (e.shards || []).map(em),
                  !0
                ).filter(Boolean)
                return (
                  a.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(r))
                  }),
                  function () {
                    ;(document.body.classList.remove(
                      "block-interactivity-".concat(r)
                    ),
                      a.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(r)
                        )
                      }))
                  }
                )
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          ))
        var k = h.useCallback(function (e, a) {
            if ("touches" in e && 2 === e.touches.length)
              return !p.current.allowPinchZoom
            var h,
              r = eu(e),
              d = t.current,
              k = "deltaX" in e ? e.deltaX : d[0] - r[0],
              l = "deltaY" in e ? e.deltaY : d[1] - r[1],
              i = e.target,
              n = Math.abs(k) > Math.abs(l) ? "h" : "v"
            if ("touches" in e && "h" === n && "range" === i.type) return !1
            var c = ec(n, i)
            if (!c) return !0
            if (
              (c ? (h = n) : ((h = "v" === n ? "h" : "v"), (c = ec(n, i))), !c)
            )
              return !1
            if (
              (!y.current &&
                "changedTouches" in e &&
                (k || l) &&
                (y.current = h),
              !h)
            )
              return !0
            var o = y.current || h
            return es(o, a, e, "h" === o ? k : l, !0)
          }, []),
          l = h.useCallback(function (e) {
            if (ef.length && ef[ef.length - 1] === d) {
              var t = "deltaY" in e ? ev(e) : eu(e),
                h = a.current.filter(function (a) {
                  var h
                  return (
                    a.name === e.type &&
                    (a.target === e.target || e.target === a.shadowParent) &&
                    (h = a.delta)[0] === t[0] &&
                    h[1] === t[1]
                  )
                })[0]
              if (h && h.should) {
                e.cancelable && e.preventDefault()
                return
              }
              if (!h) {
                var y = (p.current.shards || [])
                  .map(em)
                  .filter(Boolean)
                  .filter(function (a) {
                    return a.contains(e.target)
                  })
                ;(y.length > 0 ? k(e, y[0]) : !p.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault()
              }
            }
          }, []),
          i = h.useCallback(function (e, t, h, y) {
            var r = {
              name: e,
              delta: t,
              target: h,
              should: y,
              shadowParent: (function (e) {
                for (var a = null; null !== e; )
                  (e instanceof ShadowRoot && ((a = e.host), (e = e.host)),
                    (e = e.parentNode))
                return a
              })(h),
            }
            ;(a.current.push(r),
              setTimeout(function () {
                a.current = a.current.filter(function (e) {
                  return e !== r
                })
              }, 1))
          }, []),
          n = h.useCallback(function (e) {
            ;((t.current = eu(e)), (y.current = void 0))
          }, []),
          c = h.useCallback(function (a) {
            i(a.type, ev(a), a.target, k(a, e.lockRef.current))
          }, []),
          o = h.useCallback(function (a) {
            i(a.type, eu(a), a.target, k(a, e.lockRef.current))
          }, [])
        h.useEffect(function () {
          return (
            ef.push(d),
            e.setCallbacks({
              onScrollCapture: c,
              onWheelCapture: c,
              onTouchMoveCapture: o,
            }),
            document.addEventListener("wheel", l, ei),
            document.addEventListener("touchmove", l, ei),
            document.addEventListener("touchstart", n, ei),
            function () {
              ;((ef = ef.filter(function (e) {
                return e !== d
              })),
                document.removeEventListener("wheel", l, ei),
                document.removeEventListener("touchmove", l, ei),
                document.removeEventListener("touchstart", n, ei))
            }
          )
        }, [])
        var M = e.removeScrollBar,
          s = e.inert
        return h.createElement(
          h.Fragment,
          null,
          s
            ? h.createElement(d, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    r,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(r, " {pointer-events: all;}\n"),
              })
            : null,
          M ? h.createElement(ed.jp, { gapMode: e.gapMode }) : null
        )
      })
      var eA = h.forwardRef(function (e, a) {
        return h.createElement(ey, (0, $.Cl)({}, e, { ref: a, sideCar: eg }))
      })
      eA.classNames = ey.classNames
      var ew = ["Enter", " "],
        eb = ["ArrowUp", "PageDown", "End"],
        eC = ["ArrowDown", "PageUp", "Home", ...eb],
        eq = { ltr: [...ew, "ArrowRight"], rtl: [...ew, "ArrowLeft"] },
        ez = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        ej = "Menu",
        [eH, eS, eV] = (0, r.N)(ej),
        [eL, eP] = (0, p.A)(ej, [eV, L, Y.RG]),
        eR = L(),
        eD = (0, Y.RG)(),
        [eT, eF] = eL(ej),
        [eE, eB] = eL(ej),
        eO = (e) => {
          let {
              __scopeMenu: a,
              open: t = !1,
              children: y,
              dir: r,
              onOpenChange: d,
              modal: p = !0,
            } = e,
            l = eR(a),
            [i, n] = h.useState(null),
            c = h.useRef(!1),
            s = (0, o.c)(d),
            u = (0, k.jH)(r)
          return (
            h.useEffect(() => {
              let e = () => {
                  ;((c.current = !0),
                    document.addEventListener("pointerdown", a, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", a, {
                      capture: !0,
                      once: !0,
                    }))
                },
                a = () => (c.current = !1)
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  ;(document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", a, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", a, {
                      capture: !0,
                    }))
                }
              )
            }, []),
            (0, M.jsx)(D, {
              ...l,
              children: (0, M.jsx)(eT, {
                scope: a,
                open: t,
                onOpenChange: s,
                content: i,
                onContentChange: n,
                children: (0, M.jsx)(eE, {
                  scope: a,
                  onClose: h.useCallback(() => s(!1), [s]),
                  isUsingKeyboardRef: c,
                  dir: u,
                  modal: p,
                  children: y,
                }),
              }),
            })
          )
        }
      eO.displayName = ej
      var eZ = h.forwardRef((e, a) => {
        let { __scopeMenu: t, ...h } = e,
          y = eR(t)
        return (0, M.jsx)(F, { ...y, ...h, ref: a })
      })
      eZ.displayName = "MenuAnchor"
      var eI = "MenuPortal",
        [eN, eU] = eL(eI, { forceMount: void 0 }),
        eG = (e) => {
          let { __scopeMenu: a, forceMount: t, children: h, container: y } = e,
            r = eF(eI, a)
          return (0, M.jsx)(eN, {
            scope: a,
            forceMount: t,
            children: (0, M.jsx)(K.C, {
              present: t || r.open,
              children: (0, M.jsx)(X.Z, {
                asChild: !0,
                container: y,
                children: h,
              }),
            }),
          })
        }
      eG.displayName = eI
      var eW = "MenuContent",
        [e_, eX] = eL(eW),
        eK = h.forwardRef((e, a) => {
          let t = eU(eW, e.__scopeMenu),
            { forceMount: h = t.forceMount, ...y } = e,
            r = eF(eW, e.__scopeMenu),
            d = eB(eW, e.__scopeMenu)
          return (0, M.jsx)(eH.Provider, {
            scope: e.__scopeMenu,
            children: (0, M.jsx)(K.C, {
              present: h || r.open,
              children: (0, M.jsx)(eH.Slot, {
                scope: e.__scopeMenu,
                children: d.modal
                  ? (0, M.jsx)(eY, { ...y, ref: a })
                  : (0, M.jsx)(eJ, { ...y, ref: a }),
              }),
            }),
          })
        }),
        eY = h.forwardRef((e, a) => {
          let t = eF(eW, e.__scopeMenu),
            r = h.useRef(null),
            p = (0, d.s)(a, r)
          return (
            h.useEffect(() => {
              let e = r.current
              if (e) return (0, Q.Eq)(e)
            }, []),
            (0, M.jsx)(eQ, {
              ...e,
              ref: p,
              trapFocus: t.open,
              disableOutsidePointerEvents: t.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, y.m)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 }
              ),
              onDismiss: () => t.onOpenChange(!1),
            })
          )
        }),
        eJ = h.forwardRef((e, a) => {
          let t = eF(eW, e.__scopeMenu)
          return (0, M.jsx)(eQ, {
            ...e,
            ref: a,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => t.onOpenChange(!1),
          })
        }),
        eQ = h.forwardRef((e, a) => {
          let {
              __scopeMenu: t,
              loop: r = !1,
              trapFocus: p,
              onOpenAutoFocus: k,
              onCloseAutoFocus: c,
              disableOutsidePointerEvents: o,
              onEntryFocus: s,
              onEscapeKeyDown: u,
              onPointerDownOutside: v,
              onFocusOutside: x,
              onInteractOutside: f,
              onDismiss: g,
              disableOutsideScroll: A,
              ...w
            } = e,
            b = eF(eW, t),
            C = eB(eW, t),
            q = eR(t),
            z = eD(t),
            j = eS(t),
            [H, S] = h.useState(null),
            V = h.useRef(null),
            L = (0, d.s)(a, V, b.onContentChange),
            P = h.useRef(0),
            R = h.useRef(""),
            D = h.useRef(0),
            T = h.useRef(null),
            F = h.useRef("right"),
            E = h.useRef(0),
            B = A ? eA : h.Fragment,
            O = A ? { as: J.DX, allowPinchZoom: !0 } : void 0,
            I = (e) => {
              var a, t
              let h = R.current + e,
                y = j().filter((e) => !e.disabled),
                r = document.activeElement,
                d =
                  null === (a = y.find((e) => e.ref.current === r)) ||
                  void 0 === a
                    ? void 0
                    : a.textValue,
                p = (function (e, a, t) {
                  var h
                  let y =
                      a.length > 1 && Array.from(a).every((e) => e === a[0])
                        ? a[0]
                        : a,
                    r =
                      ((h = Math.max(t ? e.indexOf(t) : -1, 0)),
                      e.map((a, t) => e[(h + t) % e.length]))
                  1 === y.length && (r = r.filter((e) => e !== t))
                  let d = r.find((e) =>
                    e.toLowerCase().startsWith(y.toLowerCase())
                  )
                  return d !== t ? d : void 0
                })(
                  y.map((e) => e.textValue),
                  h,
                  d
                ),
                k =
                  null === (t = y.find((e) => e.textValue === p)) ||
                  void 0 === t
                    ? void 0
                    : t.ref.current
              ;(!(function e(a) {
                ;((R.current = a),
                  window.clearTimeout(P.current),
                  "" !== a && (P.current = window.setTimeout(() => e(""), 1e3)))
              })(h),
                k && setTimeout(() => k.focus()))
            }
          ;(h.useEffect(() => () => window.clearTimeout(P.current), []),
            h.useEffect(() => {
              var e, a
              let t = document.querySelectorAll("[data-radix-focus-guard]")
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = t[0]) && void 0 !== e ? e : n()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (a = t[1]) && void 0 !== a ? a : n()
                ),
                i++,
                () => {
                  ;(1 === i &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    i--)
                }
              )
            }, []))
          let N = h.useCallback((e) => {
            var a, t
            return (
              F.current ===
                (null === (a = T.current) || void 0 === a ? void 0 : a.side) &&
              (function (e, a) {
                return (
                  !!a &&
                  (function (e, a) {
                    let { x: t, y: h } = e,
                      y = !1
                    for (let e = 0, r = a.length - 1; e < a.length; r = e++) {
                      let d = a[e].x,
                        p = a[e].y,
                        k = a[r].x,
                        l = a[r].y
                      p > h != l > h &&
                        t < ((k - d) * (h - p)) / (l - p) + d &&
                        (y = !y)
                    }
                    return y
                  })({ x: e.clientX, y: e.clientY }, a)
                )
              })(e, null === (t = T.current) || void 0 === t ? void 0 : t.area)
            )
          }, [])
          return (0, M.jsx)(e_, {
            scope: t,
            searchRef: R,
            onItemEnter: h.useCallback(
              (e) => {
                N(e) && e.preventDefault()
              },
              [N]
            ),
            onItemLeave: h.useCallback(
              (e) => {
                var a
                N(e) ||
                  (null === (a = V.current) || void 0 === a || a.focus(),
                  S(null))
              },
              [N]
            ),
            onTriggerLeave: h.useCallback(
              (e) => {
                N(e) && e.preventDefault()
              },
              [N]
            ),
            pointerGraceTimerRef: D,
            onPointerGraceIntentChange: h.useCallback((e) => {
              T.current = e
            }, []),
            children: (0, M.jsx)(B, {
              ...O,
              children: (0, M.jsx)(m, {
                asChild: !0,
                trapped: p,
                onMountAutoFocus: (0, y.m)(k, (e) => {
                  var a
                  ;(e.preventDefault(),
                    null === (a = V.current) ||
                      void 0 === a ||
                      a.focus({ preventScroll: !0 }))
                }),
                onUnmountAutoFocus: c,
                children: (0, M.jsx)(l.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: o,
                  onEscapeKeyDown: u,
                  onPointerDownOutside: v,
                  onFocusOutside: x,
                  onInteractOutside: f,
                  onDismiss: g,
                  children: (0, M.jsx)(Y.bL, {
                    asChild: !0,
                    ...z,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: H,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: (0, y.m)(s, (e) => {
                      C.isUsingKeyboardRef.current || e.preventDefault()
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, M.jsx)(Z, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": au(b.open),
                      "data-radix-menu-content": "",
                      dir: C.dir,
                      ...q,
                      ...w,
                      ref: L,
                      style: { outline: "none", ...w.style },
                      onKeyDown: (0, y.m)(w.onKeyDown, (e) => {
                        let a =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          t = e.ctrlKey || e.altKey || e.metaKey,
                          h = 1 === e.key.length
                        a &&
                          ("Tab" === e.key && e.preventDefault(),
                          !t && h && I(e.key))
                        let y = V.current
                        if (e.target !== y || !eC.includes(e.key)) return
                        e.preventDefault()
                        let r = j()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current)
                        ;(eb.includes(e.key) && r.reverse(),
                          (function (e) {
                            let a = document.activeElement
                            for (let t of e)
                              if (
                                t === a ||
                                (t.focus(), document.activeElement !== a)
                              )
                                return
                          })(r))
                      }),
                      onBlur: (0, y.m)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(P.current), (R.current = ""))
                      }),
                      onPointerMove: (0, y.m)(
                        e.onPointerMove,
                        ax((e) => {
                          let a = e.target,
                            t = E.current !== e.clientX
                          e.currentTarget.contains(a) &&
                            t &&
                            ((F.current =
                              e.clientX > E.current ? "right" : "left"),
                            (E.current = e.clientX))
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          })
        })
      eK.displayName = eW
      var e$ = h.forwardRef((e, a) => {
        let { __scopeMenu: t, ...h } = e
        return (0, M.jsx)(c.sG.div, { role: "group", ...h, ref: a })
      })
      e$.displayName = "MenuGroup"
      var e1 = h.forwardRef((e, a) => {
        let { __scopeMenu: t, ...h } = e
        return (0, M.jsx)(c.sG.div, { ...h, ref: a })
      })
      e1.displayName = "MenuLabel"
      var e2 = "MenuItem",
        e0 = "menu.itemSelect",
        e4 = h.forwardRef((e, a) => {
          let { disabled: t = !1, onSelect: r, ...p } = e,
            k = h.useRef(null),
            l = eB(e2, e.__scopeMenu),
            i = eX(e2, e.__scopeMenu),
            n = (0, d.s)(a, k),
            o = h.useRef(!1)
          return (0, M.jsx)(e5, {
            ...p,
            ref: n,
            disabled: t,
            onClick: (0, y.m)(e.onClick, () => {
              let e = k.current
              if (!t && e) {
                let a = new CustomEvent(e0, { bubbles: !0, cancelable: !0 })
                ;(e.addEventListener(e0, (e) => (null == r ? void 0 : r(e)), {
                  once: !0,
                }),
                  (0, c.hO)(e, a),
                  a.defaultPrevented ? (o.current = !1) : l.onClose())
              }
            }),
            onPointerDown: (a) => {
              var t
              ;(null === (t = e.onPointerDown) || void 0 === t || t.call(e, a),
                (o.current = !0))
            },
            onPointerUp: (0, y.m)(e.onPointerUp, (e) => {
              var a
              o.current ||
                null === (a = e.currentTarget) ||
                void 0 === a ||
                a.click()
            }),
            onKeyDown: (0, y.m)(e.onKeyDown, (e) => {
              let a = "" !== i.searchRef.current
              !t &&
                (!a || " " !== e.key) &&
                ew.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault())
            }),
          })
        })
      e4.displayName = e2
      var e5 = h.forwardRef((e, a) => {
          let { __scopeMenu: t, disabled: r = !1, textValue: p, ...k } = e,
            l = eX(e2, t),
            i = eD(t),
            n = h.useRef(null),
            o = (0, d.s)(a, n),
            [s, u] = h.useState(!1),
            [v, m] = h.useState("")
          return (
            h.useEffect(() => {
              let e = n.current
              if (e) {
                var a
                m(
                  (null !== (a = e.textContent) && void 0 !== a ? a : "").trim()
                )
              }
            }, [k.children]),
            (0, M.jsx)(eH.ItemSlot, {
              scope: t,
              disabled: r,
              textValue: null != p ? p : v,
              children: (0, M.jsx)(Y.q7, {
                asChild: !0,
                ...i,
                focusable: !r,
                children: (0, M.jsx)(c.sG.div, {
                  role: "menuitem",
                  "data-highlighted": s ? "" : void 0,
                  "aria-disabled": r || void 0,
                  "data-disabled": r ? "" : void 0,
                  ...k,
                  ref: o,
                  onPointerMove: (0, y.m)(
                    e.onPointerMove,
                    ax((e) => {
                      r
                        ? l.onItemLeave(e)
                        : (l.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }))
                    })
                  ),
                  onPointerLeave: (0, y.m)(
                    e.onPointerLeave,
                    ax((e) => l.onItemLeave(e))
                  ),
                  onFocus: (0, y.m)(e.onFocus, () => u(!0)),
                  onBlur: (0, y.m)(e.onBlur, () => u(!1)),
                }),
              }),
            })
          )
        }),
        e3 = h.forwardRef((e, a) => {
          let { checked: t = !1, onCheckedChange: h, ...r } = e
          return (0, M.jsx)(ah, {
            scope: e.__scopeMenu,
            checked: t,
            children: (0, M.jsx)(e4, {
              role: "menuitemcheckbox",
              "aria-checked": av(t) ? "mixed" : t,
              ...r,
              ref: a,
              "data-state": am(t),
              onSelect: (0, y.m)(
                r.onSelect,
                () => (null == h ? void 0 : h(!!av(t) || !t)),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          })
        })
      e3.displayName = "MenuCheckboxItem"
      var e6 = "MenuRadioGroup",
        [e8, e7] = eL(e6, { value: void 0, onValueChange: () => {} }),
        e9 = h.forwardRef((e, a) => {
          let { value: t, onValueChange: h, ...y } = e,
            r = (0, o.c)(h)
          return (0, M.jsx)(e8, {
            scope: e.__scopeMenu,
            value: t,
            onValueChange: r,
            children: (0, M.jsx)(e$, { ...y, ref: a }),
          })
        })
      e9.displayName = e6
      var ae = "MenuRadioItem",
        aa = h.forwardRef((e, a) => {
          let { value: t, ...h } = e,
            r = e7(ae, e.__scopeMenu),
            d = t === r.value
          return (0, M.jsx)(ah, {
            scope: e.__scopeMenu,
            checked: d,
            children: (0, M.jsx)(e4, {
              role: "menuitemradio",
              "aria-checked": d,
              ...h,
              ref: a,
              "data-state": am(d),
              onSelect: (0, y.m)(
                h.onSelect,
                () => {
                  var e
                  return null === (e = r.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(r, t)
                },
                { checkForDefaultPrevented: !1 }
              ),
            }),
          })
        })
      aa.displayName = ae
      var at = "MenuItemIndicator",
        [ah, ay] = eL(at, { checked: !1 }),
        ar = h.forwardRef((e, a) => {
          let { __scopeMenu: t, forceMount: h, ...y } = e,
            r = ay(at, t)
          return (0, M.jsx)(K.C, {
            present: h || av(r.checked) || !0 === r.checked,
            children: (0, M.jsx)(c.sG.span, {
              ...y,
              ref: a,
              "data-state": am(r.checked),
            }),
          })
        })
      ar.displayName = at
      var ad = h.forwardRef((e, a) => {
        let { __scopeMenu: t, ...h } = e
        return (0, M.jsx)(c.sG.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...h,
          ref: a,
        })
      })
      ad.displayName = "MenuSeparator"
      var ap = h.forwardRef((e, a) => {
        let { __scopeMenu: t, ...h } = e,
          y = eR(t)
        return (0, M.jsx)(U, { ...y, ...h, ref: a })
      })
      ap.displayName = "MenuArrow"
      var ak = "MenuSub",
        [al, ai] = eL(ak),
        an = (e) => {
          let {
              __scopeMenu: a,
              children: t,
              open: y = !1,
              onOpenChange: r,
            } = e,
            d = eF(ak, a),
            p = eR(a),
            [k, l] = h.useState(null),
            [i, n] = h.useState(null),
            c = (0, o.c)(r)
          return (
            h.useEffect(
              () => (!1 === d.open && c(!1), () => c(!1)),
              [d.open, c]
            ),
            (0, M.jsx)(D, {
              ...p,
              children: (0, M.jsx)(eT, {
                scope: a,
                open: y,
                onOpenChange: c,
                content: i,
                onContentChange: n,
                children: (0, M.jsx)(al, {
                  scope: a,
                  contentId: (0, b.B)(),
                  triggerId: (0, b.B)(),
                  trigger: k,
                  onTriggerChange: l,
                  children: t,
                }),
              }),
            })
          )
        }
      an.displayName = ak
      var ac = "MenuSubTrigger",
        ao = h.forwardRef((e, a) => {
          let t = eF(ac, e.__scopeMenu),
            r = eB(ac, e.__scopeMenu),
            p = ai(ac, e.__scopeMenu),
            k = eX(ac, e.__scopeMenu),
            l = h.useRef(null),
            { pointerGraceTimerRef: i, onPointerGraceIntentChange: n } = k,
            c = { __scopeMenu: e.__scopeMenu },
            o = h.useCallback(() => {
              ;(l.current && window.clearTimeout(l.current), (l.current = null))
            }, [])
          return (
            h.useEffect(() => o, [o]),
            h.useEffect(() => {
              let e = i.current
              return () => {
                ;(window.clearTimeout(e), n(null))
              }
            }, [i, n]),
            (0, M.jsx)(eZ, {
              asChild: !0,
              ...c,
              children: (0, M.jsx)(e5, {
                id: p.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": t.open,
                "aria-controls": p.contentId,
                "data-state": au(t.open),
                ...e,
                ref: (0, d.t)(a, p.onTriggerChange),
                onClick: (a) => {
                  var h
                  ;(null === (h = e.onClick) || void 0 === h || h.call(e, a),
                    e.disabled ||
                      a.defaultPrevented ||
                      (a.currentTarget.focus(), t.open || t.onOpenChange(!0)))
                },
                onPointerMove: (0, y.m)(
                  e.onPointerMove,
                  ax((a) => {
                    ;(k.onItemEnter(a),
                      a.defaultPrevented ||
                        e.disabled ||
                        t.open ||
                        l.current ||
                        (k.onPointerGraceIntentChange(null),
                        (l.current = window.setTimeout(() => {
                          ;(t.onOpenChange(!0), o())
                        }, 100))))
                  })
                ),
                onPointerLeave: (0, y.m)(
                  e.onPointerLeave,
                  ax((e) => {
                    var a, h
                    o()
                    let y =
                      null === (a = t.content) || void 0 === a
                        ? void 0
                        : a.getBoundingClientRect()
                    if (y) {
                      let a =
                          null === (h = t.content) || void 0 === h
                            ? void 0
                            : h.dataset.side,
                        r = "right" === a,
                        d = y[r ? "left" : "right"],
                        p = y[r ? "right" : "left"]
                      ;(k.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (r ? -5 : 5), y: e.clientY },
                          { x: d, y: y.top },
                          { x: p, y: y.top },
                          { x: p, y: y.bottom },
                          { x: d, y: y.bottom },
                        ],
                        side: a,
                      }),
                        window.clearTimeout(i.current),
                        (i.current = window.setTimeout(
                          () => k.onPointerGraceIntentChange(null),
                          300
                        )))
                    } else {
                      if ((k.onTriggerLeave(e), e.defaultPrevented)) return
                      k.onPointerGraceIntentChange(null)
                    }
                  })
                ),
                onKeyDown: (0, y.m)(e.onKeyDown, (a) => {
                  let h = "" !== k.searchRef.current
                  if (
                    !e.disabled &&
                    (!h || " " !== a.key) &&
                    eq[r.dir].includes(a.key)
                  ) {
                    var y
                    ;(t.onOpenChange(!0),
                      null === (y = t.content) || void 0 === y || y.focus(),
                      a.preventDefault())
                  }
                }),
              }),
            })
          )
        })
      ao.displayName = ac
      var aM = "MenuSubContent",
        as = h.forwardRef((e, a) => {
          let t = eU(eW, e.__scopeMenu),
            { forceMount: r = t.forceMount, ...p } = e,
            k = eF(eW, e.__scopeMenu),
            l = eB(eW, e.__scopeMenu),
            i = ai(aM, e.__scopeMenu),
            n = h.useRef(null),
            c = (0, d.s)(a, n)
          return (0, M.jsx)(eH.Provider, {
            scope: e.__scopeMenu,
            children: (0, M.jsx)(K.C, {
              present: r || k.open,
              children: (0, M.jsx)(eH.Slot, {
                scope: e.__scopeMenu,
                children: (0, M.jsx)(eQ, {
                  id: i.contentId,
                  "aria-labelledby": i.triggerId,
                  ...p,
                  ref: c,
                  align: "start",
                  side: "rtl" === l.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var a
                    ;(l.isUsingKeyboardRef.current &&
                      (null === (a = n.current) || void 0 === a || a.focus()),
                      e.preventDefault())
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, y.m)(e.onFocusOutside, (e) => {
                    e.target !== i.trigger && k.onOpenChange(!1)
                  }),
                  onEscapeKeyDown: (0, y.m)(e.onEscapeKeyDown, (e) => {
                    ;(l.onClose(), e.preventDefault())
                  }),
                  onKeyDown: (0, y.m)(e.onKeyDown, (e) => {
                    let a = e.currentTarget.contains(e.target),
                      t = ez[l.dir].includes(e.key)
                    if (a && t) {
                      var h
                      ;(k.onOpenChange(!1),
                        null === (h = i.trigger) || void 0 === h || h.focus(),
                        e.preventDefault())
                    }
                  }),
                }),
              }),
            }),
          })
        })
      function au(e) {
        return e ? "open" : "closed"
      }
      function av(e) {
        return "indeterminate" === e
      }
      function am(e) {
        return av(e) ? "indeterminate" : e ? "checked" : "unchecked"
      }
      function ax(e) {
        return (a) => ("mouse" === a.pointerType ? e(a) : void 0)
      }
      as.displayName = aM
      var af = eO,
        ag = eZ,
        aA = eG,
        aw = eK,
        ab = e$,
        aC = e1,
        aq = e4,
        az = e3,
        aj = e9,
        aH = aa,
        aS = ar,
        aV = ad,
        aL = ap,
        aP = an,
        aR = ao,
        aD = as
    },
    5186: (e, a, t) => {
      t.d(a, { default: () => y.a })
      var h = t(2945),
        y = t.n(h)
    },
    5205: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("MoonStar", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9", key: "4ay0iu" }],
        ["path", { d: "M20 3v4", key: "1olli1" }],
        ["path", { d: "M22 5h-4", key: "1gvqau" }],
      ])
    },
    5501: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ])
    },
    5524: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("TriangleAlert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ])
    },
    5984: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("User", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ])
    },
    6228: (e, a, t) => {
      t.d(a, { jH: () => r })
      var h = t(2149)
      t(8081)
      var y = h.createContext(void 0)
      function r(e) {
        let a = h.useContext(y)
        return e || a || "ltr"
      }
    },
    6762: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("UserCog", [
        ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
        ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
        ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
        ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
        ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
        ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
        ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
        ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
        ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }],
      ])
    },
    7122: (e, a, t) => {
      t.d(a, { RG: () => g, bL: () => S, q7: () => V })
      var h = t(2149),
        y = t(5572),
        r = t(6676),
        d = t(5362),
        p = t(7218),
        k = t(6428),
        l = t(9108),
        i = t(9284),
        n = t(5809),
        c = t(6228),
        o = t(8081),
        M = "rovingFocusGroup.onEntryFocus",
        s = { bubbles: !1, cancelable: !0 },
        u = "RovingFocusGroup",
        [v, m, x] = (0, r.N)(u),
        [f, g] = (0, p.A)(u, [x]),
        [A, w] = f(u),
        b = h.forwardRef((e, a) =>
          (0, o.jsx)(v.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, o.jsx)(v.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, o.jsx)(C, { ...e, ref: a }),
            }),
          })
        )
      b.displayName = u
      var C = h.forwardRef((e, a) => {
          let {
              __scopeRovingFocusGroup: t,
              orientation: r,
              loop: p = !1,
              dir: k,
              currentTabStopId: u,
              defaultCurrentTabStopId: v,
              onCurrentTabStopIdChange: x,
              onEntryFocus: f,
              preventScrollOnEntryFocus: g = !1,
              ...w
            } = e,
            b = h.useRef(null),
            C = (0, d.s)(a, b),
            q = (0, c.jH)(k),
            [z = null, j] = (0, n.i)({ prop: u, defaultProp: v, onChange: x }),
            [S, V] = h.useState(!1),
            L = (0, i.c)(f),
            P = m(t),
            R = h.useRef(!1),
            [D, T] = h.useState(0)
          return (
            h.useEffect(() => {
              let e = b.current
              if (e)
                return (
                  e.addEventListener(M, L),
                  () => e.removeEventListener(M, L)
                )
            }, [L]),
            (0, o.jsx)(A, {
              scope: t,
              orientation: r,
              dir: q,
              loop: p,
              currentTabStopId: z,
              onItemFocus: h.useCallback((e) => j(e), [j]),
              onItemShiftTab: h.useCallback(() => V(!0), []),
              onFocusableItemAdd: h.useCallback(() => T((e) => e + 1), []),
              onFocusableItemRemove: h.useCallback(() => T((e) => e - 1), []),
              children: (0, o.jsx)(l.sG.div, {
                tabIndex: S || 0 === D ? -1 : 0,
                "data-orientation": r,
                ...w,
                ref: C,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, y.m)(e.onMouseDown, () => {
                  R.current = !0
                }),
                onFocus: (0, y.m)(e.onFocus, (e) => {
                  let a = !R.current
                  if (e.target === e.currentTarget && a && !S) {
                    let a = new CustomEvent(M, s)
                    if (
                      (e.currentTarget.dispatchEvent(a), !a.defaultPrevented)
                    ) {
                      let e = P().filter((e) => e.focusable)
                      H(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === z),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        g
                      )
                    }
                  }
                  R.current = !1
                }),
                onBlur: (0, y.m)(e.onBlur, () => V(!1)),
              }),
            })
          )
        }),
        q = "RovingFocusGroupItem",
        z = h.forwardRef((e, a) => {
          let {
              __scopeRovingFocusGroup: t,
              focusable: r = !0,
              active: d = !1,
              tabStopId: p,
              ...i
            } = e,
            n = (0, k.B)(),
            c = p || n,
            M = w(q, t),
            s = M.currentTabStopId === c,
            u = m(t),
            { onFocusableItemAdd: x, onFocusableItemRemove: f } = M
          return (
            h.useEffect(() => {
              if (r) return (x(), () => f())
            }, [r, x, f]),
            (0, o.jsx)(v.ItemSlot, {
              scope: t,
              id: c,
              focusable: r,
              active: d,
              children: (0, o.jsx)(l.sG.span, {
                tabIndex: s ? 0 : -1,
                "data-orientation": M.orientation,
                ...i,
                ref: a,
                onMouseDown: (0, y.m)(e.onMouseDown, (e) => {
                  r ? M.onItemFocus(c) : e.preventDefault()
                }),
                onFocus: (0, y.m)(e.onFocus, () => M.onItemFocus(c)),
                onKeyDown: (0, y.m)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    M.onItemShiftTab()
                    return
                  }
                  if (e.target !== e.currentTarget) return
                  let a = (function (e, a, t) {
                    var h
                    let y =
                      ((h = e.key),
                      "rtl" !== t
                        ? h
                        : "ArrowLeft" === h
                          ? "ArrowRight"
                          : "ArrowRight" === h
                            ? "ArrowLeft"
                            : h)
                    if (
                      !(
                        "vertical" === a &&
                        ["ArrowLeft", "ArrowRight"].includes(y)
                      ) &&
                      !(
                        "horizontal" === a &&
                        ["ArrowUp", "ArrowDown"].includes(y)
                      )
                    )
                      return j[y]
                  })(e, M.orientation, M.dir)
                  if (void 0 !== a) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return
                    e.preventDefault()
                    let t = u()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current)
                    if ("last" === a) t.reverse()
                    else if ("prev" === a || "next" === a) {
                      "prev" === a && t.reverse()
                      let h = t.indexOf(e.currentTarget)
                      t = M.loop
                        ? (function (e, a) {
                            return e.map((t, h) => e[(a + h) % e.length])
                          })(t, h + 1)
                        : t.slice(h + 1)
                    }
                    setTimeout(() => H(t))
                  }
                }),
              }),
            })
          )
        })
      z.displayName = q
      var j = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      }
      function H(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = document.activeElement
        for (let h of e)
          if (
            h === t ||
            (h.focus({ preventScroll: a }), document.activeElement !== t)
          )
            return
      }
      var S = b,
        V = z
    },
    7261: (e, a, t) => {
      t.d(a, { H4: () => g, _V: () => f, bL: () => x })
      var h = t(2149),
        y = t(7218),
        r = t(9284),
        d = t(357),
        p = t(9108),
        k = t(8081),
        l = "Avatar",
        [i, n] = (0, y.A)(l),
        [c, o] = i(l),
        M = h.forwardRef((e, a) => {
          let { __scopeAvatar: t, ...y } = e,
            [r, d] = h.useState("idle")
          return (0, k.jsx)(c, {
            scope: t,
            imageLoadingStatus: r,
            onImageLoadingStatusChange: d,
            children: (0, k.jsx)(p.sG.span, { ...y, ref: a }),
          })
        })
      M.displayName = l
      var s = "AvatarImage",
        u = h.forwardRef((e, a) => {
          let {
              __scopeAvatar: t,
              src: y,
              onLoadingStatusChange: l = () => {},
              ...i
            } = e,
            n = o(s, t),
            c = (function (e) {
              let [a, t] = h.useState("idle")
              return (
                (0, d.N)(() => {
                  if (!e) {
                    t("error")
                    return
                  }
                  let a = !0,
                    h = new window.Image(),
                    y = (e) => () => {
                      a && t(e)
                    }
                  return (
                    t("loading"),
                    (h.onload = y("loaded")),
                    (h.onerror = y("error")),
                    (h.src = e),
                    () => {
                      a = !1
                    }
                  )
                }, [e]),
                a
              )
            })(y),
            M = (0, r.c)((e) => {
              ;(l(e), n.onImageLoadingStatusChange(e))
            })
          return (
            (0, d.N)(() => {
              "idle" !== c && M(c)
            }, [c, M]),
            "loaded" === c
              ? (0, k.jsx)(p.sG.img, { ...i, ref: a, src: y })
              : null
          )
        })
      u.displayName = s
      var v = "AvatarFallback",
        m = h.forwardRef((e, a) => {
          let { __scopeAvatar: t, delayMs: y, ...r } = e,
            d = o(v, t),
            [l, i] = h.useState(void 0 === y)
          return (
            h.useEffect(() => {
              if (void 0 !== y) {
                let e = window.setTimeout(() => i(!0), y)
                return () => window.clearTimeout(e)
              }
            }, [y]),
            l && "loaded" !== d.imageLoadingStatus
              ? (0, k.jsx)(p.sG.span, { ...r, ref: a })
              : null
          )
        })
      m.displayName = v
      var x = M,
        f = u,
        g = m
    },
    8721: (e, a, t) => {
      t.d(a, { Ke: () => A, R6: () => f, bL: () => C })
      var h = t(2149),
        y = t(5572),
        r = t(7218),
        d = t(5809),
        p = t(357),
        k = t(5362),
        l = t(9108),
        i = t(6248),
        n = t(6428),
        c = t(8081),
        o = "Collapsible",
        [M, s] = (0, r.A)(o),
        [u, v] = M(o),
        m = h.forwardRef((e, a) => {
          let {
              __scopeCollapsible: t,
              open: y,
              defaultOpen: r,
              disabled: p,
              onOpenChange: k,
              ...i
            } = e,
            [o = !1, M] = (0, d.i)({ prop: y, defaultProp: r, onChange: k })
          return (0, c.jsx)(u, {
            scope: t,
            disabled: p,
            contentId: (0, n.B)(),
            open: o,
            onOpenToggle: h.useCallback(() => M((e) => !e), [M]),
            children: (0, c.jsx)(l.sG.div, {
              "data-state": b(o),
              "data-disabled": p ? "" : void 0,
              ...i,
              ref: a,
            }),
          })
        })
      m.displayName = o
      var x = "CollapsibleTrigger",
        f = h.forwardRef((e, a) => {
          let { __scopeCollapsible: t, ...h } = e,
            r = v(x, t)
          return (0, c.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": b(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...h,
            ref: a,
            onClick: (0, y.m)(e.onClick, r.onOpenToggle),
          })
        })
      f.displayName = x
      var g = "CollapsibleContent",
        A = h.forwardRef((e, a) => {
          let { forceMount: t, ...h } = e,
            y = v(g, e.__scopeCollapsible)
          return (0, c.jsx)(i.C, {
            present: t || y.open,
            children: (e) => {
              let { present: t } = e
              return (0, c.jsx)(w, { ...h, ref: a, present: t })
            },
          })
        })
      A.displayName = g
      var w = h.forwardRef((e, a) => {
        let { __scopeCollapsible: t, present: y, children: r, ...d } = e,
          i = v(g, t),
          [n, o] = h.useState(y),
          M = h.useRef(null),
          s = (0, k.s)(a, M),
          u = h.useRef(0),
          m = u.current,
          x = h.useRef(0),
          f = x.current,
          A = i.open || n,
          w = h.useRef(A),
          C = h.useRef()
        return (
          h.useEffect(() => {
            let e = requestAnimationFrame(() => (w.current = !1))
            return () => cancelAnimationFrame(e)
          }, []),
          (0, p.N)(() => {
            let e = M.current
            if (e) {
              ;((C.current = C.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none"))
              let a = e.getBoundingClientRect()
              ;((u.current = a.height),
                (x.current = a.width),
                w.current ||
                  ((e.style.transitionDuration = C.current.transitionDuration),
                  (e.style.animationName = C.current.animationName)),
                o(y))
            }
          }, [i.open, y]),
          (0, c.jsx)(l.sG.div, {
            "data-state": b(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            id: i.contentId,
            hidden: !A,
            ...d,
            ref: s,
            style: {
              "--radix-collapsible-content-height": m
                ? "".concat(m, "px")
                : void 0,
              "--radix-collapsible-content-width": f
                ? "".concat(f, "px")
                : void 0,
              ...e.style,
            },
            children: A && r,
          })
        )
      })
      function b(e) {
        return e ? "open" : "closed"
      }
      var C = m
    },
    9479: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ])
    },
    9557: (e, a, t) => {
      t.d(a, { A: () => h })
      let h = (0, t(9941).A)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ])
    },
    9651: (e, a, t) => {
      var h = t(4571)
      ;(t.o(h, "usePathname") &&
        t.d(a, {
          usePathname: function () {
            return h.usePathname
          },
        }),
        t.o(h, "useRouter") &&
          t.d(a, {
            useRouter: function () {
              return h.useRouter
            },
          }))
    },
  },
])
