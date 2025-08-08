"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [773],
  {
    1394: (e, t, a) => {
      a.d(t, { w: () => n })
      var r = a(8081),
        i = a(2198),
        s = a(2194)
      function n(e) {
        let {
          className: t,
          orientation: a = "horizontal",
          decorative: n = !0,
          ...o
        } = e
        return (0, r.jsx)(i.b, {
          "data-slot": "separator-root",
          decorative: n,
          orientation: a,
          className: (0, s.cn)(
            "shrink-0 bg-border",
            "horizontal" === a ? "h-[1px] w-full" : "h-full w-[1px]",
            t
          ),
          ...o,
        })
      }
    },
    2194: (e, t, a) => {
      a.d(t, { IM: () => n, cn: () => s, n2: () => o })
      var r = a(6522),
        i = a(378)
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        return (0, i.QP)((0, r.$)(t))
      }
      function n(e) {
        return 0 === e.length
          ? ""
          : e
              .split(" ")
              .map((e) => e.charAt(0).toUpperCase())
              .join("")
      }
      function o(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        if ("string" != typeof e || "string" != typeof t)
          throw Error("Both basePathname and currentPathname must be strings")
        return a
          ? e === t
          : t.startsWith(e) && (t.length === e.length || "/" === t[e.length])
      }
    },
    6595: (e, t, a) => {
      a.d(t, { t: () => s })
      var r = a(2149),
        i = a(6701)
      function s() {
        let e = (0, r.useContext)(i.l)
        if (!e)
          throw Error("useSettings must be used within a SettingsProvider")
        return e
      }
    },
    6606: (e, t, a) => {
      a.d(t, { Bc: () => n, ZI: () => l, k$: () => d, m_: () => o })
      var r = a(8081),
        i = a(3392),
        s = a(2194)
      function n(e) {
        let { delayDuration: t = 0, ...a } = e
        return (0, r.jsx)(i.Kq, {
          "data-slot": "tooltip-provider",
          delayDuration: t,
          ...a,
        })
      }
      function o(e) {
        let { ...t } = e
        return (0, r.jsx)(n, {
          children: (0, r.jsx)(i.bL, { "data-slot": "tooltip", ...t }),
        })
      }
      function d(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)(i.l9, {
          "data-slot": "tooltip-trigger",
          className: (0, s.cn)("cursor-pointer", t),
          ...a,
        })
      }
      function l(e) {
        let { className: t, sideOffset: a = 0, ...n } = e
        return (0, r.jsx)(i.UC, {
          "data-slot": "tooltip-content",
          sideOffset: a,
          className: (0, s.cn)(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            t
          ),
          ...n,
        })
      }
    },
    6701: (e, t, a) => {
      a.d(t, { SettingsProvider: () => d, l: () => o })
      var r = a(8081),
        i = a(2149),
        s = a(1436)
      let n = {
          theme: "zinc",
          mode: "system",
          radius: 0.5,
          layout: "vertical",
          locale: "en",
        },
        o = (0, i.createContext)(void 0)
      function d(e) {
        let { locale: t, children: a } = e,
          [d, l, c] = (0, s.A)("settings"),
          [u, b] = (0, i.useState)(null)
        ;(0, i.useEffect)(() => {
          d ? b(JSON.parse(d)) : b({ ...n, locale: t })
        }, [d, t])
        let f = (0, i.useCallback)(
            (e) => {
              ;(l(JSON.stringify(e)), b(e))
            },
            [l]
          ),
          h = (0, i.useCallback)(() => {
            ;(c(), b(n))
          }, [c])
        return u
          ? (0, r.jsx)(o.Provider, {
              value: { settings: u, updateSettings: f, resetSettings: h },
              children: a,
            })
          : null
      }
    },
    9301: (e, t, a) => {
      a.d(t, { $n: () => d, ru: () => o })
      var r = a(8081),
        i = a(3343),
        s = a(3484),
        n = a(2194)
      let o = (0, s.F)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground hover:bg-primary/90",
              destructive:
                "bg-destructive text-destructive-foreground hover:bg-destructive/90",
              outline:
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2",
              sm: "h-8 rounded-md px-3 text-xs",
              lg: "h-10 rounded-md px-8",
              icon: "h-9 w-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      )
      function d(e) {
        let { className: t, variant: a, size: s, asChild: d = !1, ...l } = e,
          c = d ? i.DX : "button"
        return (0, r.jsx)(c, {
          "data-slot": "button",
          className: (0, n.cn)(o({ variant: a, size: s, className: t })),
          ...l,
        })
      }
    },
    9959: (e, t, a) => {
      a.d(t, {
        Bx: () => y,
        Yv: () => z,
        Cn: () => C,
        rQ: () => S,
        jj: () => _,
        Gh: () => k,
        wZ: () => E,
        Uj: () => L,
        FX: () => P,
        q9: () => A,
        SidebarProvider: () => j,
        x2: () => N,
        cL: () => w,
      })
      var r = a(8081),
        i = a(2149),
        s = a(3343),
        n = a(3484),
        o = a(5039),
        d = a(2194),
        l = a(7346),
        c = a(9301)
      a(1394)
      var u = a(8964)
      function b(e) {
        let { ...t } = e
        return (0, r.jsx)(u.bL, { "data-slot": "sheet", ...t })
      }
      function f(e) {
        let { ...t } = e
        return (0, r.jsx)(u.ZL, { "data-slot": "sheet-portal", ...t })
      }
      function h(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)(u.hJ, {
          "data-slot": "sheet-overlay",
          className: (0, d.cn)(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            t
          ),
          ...a,
        })
      }
      let g = (0, n.F)(
        "fixed z-50 gap-4 bg-background p-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
        {
          variants: {
            side: {
              top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
              bottom:
                "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
              left: "inset-y-0 left-0 h-full w-72 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
              right:
                "inset-y-0 right-0 h-full w-72 border-s data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              start:
                "inset-y-0 start-0 h-full w-72 border-e data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left data-[state=closed]:rtl:slide-out-to-right data-[state=open]:rtl:slide-in-from-right sm:max-w-sm",
              end: "inset-y-0 end-0 h-full w-72 border-s data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:rtl:slide-out-to-left data-[state=open]:rtl:slide-in-from-left sm:max-w-sm",
            },
          },
          defaultVariants: { side: "right" },
        }
      )
      function p(e) {
        let { className: t, children: a, side: i = "right", ...s } = e
        return (0, r.jsxs)(f, {
          children: [
            (0, r.jsx)(h, {}),
            (0, r.jsx)(u.UC, {
              "data-slot": "sheet-content",
              className: (0, d.cn)(g({ side: i }), t),
              ...s,
              children: a,
            }),
          ],
        })
      }
      function m(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)(u.hE, {
          "data-slot": "sheet-title",
          className: (0, d.cn)("text-lg font-semibold text-foreground", t),
          ...a,
        })
      }
      var x = a(6606)
      let v = (0, i.createContext)(null)
      function w() {
        let e = (0, i.useContext)(v)
        if (!e) throw Error("useSidebar must be used within a SidebarProvider.")
        return e
      }
      function j(e) {
        let {
            defaultOpen: t = !0,
            open: a,
            onOpenChange: s,
            className: n,
            style: o,
            children: c,
            ...u
          } = e,
          b = (0, l.A)("(max-width: ".concat(1023, "px)")),
          [f, h] = (0, i.useState)(!1),
          [g, p] = (0, i.useState)(t),
          m = null != a ? a : g,
          w = (0, i.useCallback)(
            (e) => {
              let t = "function" == typeof e ? e(m) : e
              ;(s ? s(t) : p(t),
                (document.cookie = ""
                  .concat("sidebar:state", "=")
                  .concat(t, "; path=/; max-age=")
                  .concat(604800)))
            },
            [s, m]
          ),
          j = (0, i.useCallback)(
            () => (b ? h((e) => !e) : w((e) => !e)),
            [b, w, h]
          )
        ;(0, i.useEffect)(() => {
          let e = (e) => {
            "b" === e.key &&
              (e.metaKey || e.ctrlKey) &&
              (e.preventDefault(), j())
          }
          return (
            window.addEventListener("keydown", e),
            () => window.removeEventListener("keydown", e)
          )
        }, [j])
        let y = m ? "expanded" : "collapsed",
          N = (0, i.useMemo)(
            () => ({
              state: y,
              open: m,
              setOpen: w,
              isMobile: b,
              openMobile: f,
              setOpenMobile: h,
              toggleSidebar: j,
            }),
            [y, m, w, b, f, h, j]
          )
        return (0, r.jsx)(v.Provider, {
          value: N,
          children: (0, r.jsx)(x.Bc, {
            delayDuration: 0,
            children: (0, r.jsx)("div", {
              "data-slot": "sidebar-wrapper",
              style: {
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "3rem",
                ...o,
              },
              className: (0, d.cn)(
                "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
                n
              ),
              ...u,
              children: c,
            }),
          }),
        })
      }
      function y(e) {
        let {
            side: t = "left",
            variant: a = "sidebar",
            collapsible: i = "offcanvas",
            className: s,
            children: n,
            ...o
          } = e,
          { isMobile: l, state: c, openMobile: u, setOpenMobile: f } = w()
        return l
          ? (0, r.jsx)(b, {
              open: u,
              onOpenChange: f,
              ...o,
              children: (0, r.jsxs)(p, {
                "data-slot": "sidebar",
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className:
                  "w-(--sidebar-width) bg-sidebar text-sidebar-foreground p-0",
                style: { "--sidebar-width": "18rem" },
                side: t,
                "aria-describedby": void 0,
                children: [
                  (0, r.jsx)(m, {
                    className: "sr-only",
                    children: "Navigation Menu",
                  }),
                  (0, r.jsx)("div", {
                    className: "flex h-full w-full flex-col",
                    children: n,
                  }),
                ],
              }),
            })
          : "none" === i
            ? (0, r.jsx)("div", {
                "data-slot": "sidebar",
                className: (0, d.cn)(
                  "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
                  s
                ),
                ...o,
                children: n,
              })
            : (0, r.jsxs)("div", {
                "data-slot": "sidebar",
                "data-state": c,
                "data-collapsible": "collapsed" === c ? i : "",
                "data-variant": a,
                "data-side": t,
                className: "group peer hidden md:block text-sidebar-foreground",
                children: [
                  (0, r.jsx)("div", {
                    className: (0, d.cn)(
                      "duration-200 relative h-svh w-(--sidebar-width) bg-transparent transition-[width] ease-linear",
                      "group-data-[collapsible=offcanvas]:w-0",
                      "group-data-[side=right]:rotate-180",
                      "floating" === a || "inset" === a
                        ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                        : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: (0, d.cn)(
                      "duration-200 fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] ease-linear md:flex",
                      "left" === t
                        ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                        : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                      "floating" === a || "inset" === a
                        ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                        : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                      s
                    ),
                    ...o,
                    children: (0, r.jsx)("div", {
                      "data-sidebar": "sidebar",
                      className:
                        "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
                      children: n,
                    }),
                  }),
                ],
              })
      }
      function N(e) {
        let { className: t, onClick: a, ...i } = e,
          { toggleSidebar: s } = w()
        return (0, r.jsxs)(c.$n, {
          "data-slot": "sidebar-trigger",
          "data-sidebar": "trigger",
          variant: "ghost",
          size: "icon",
          className: t,
          onClick: (e) => {
            ;(null == a || a(e), s())
          },
          ...i,
          children: [
            (0, r.jsx)(o.A, { className: "h-4 w-4" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Toggle Sidebar",
            }),
          ],
        })
      }
      function k(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("div", {
          "data-slot": "sidebar-header",
          "data-sidebar": "header",
          className: (0, d.cn)("flex flex-col gap-2 p-2", t),
          ...a,
        })
      }
      function z(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("div", {
          "data-slot": "sidebar-content",
          "data-sidebar": "content",
          className: (0, d.cn)(
            "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
            t
          ),
          ...a,
        })
      }
      function C(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("div", {
          "data-slot": "sidebar-group",
          "data-sidebar": "group",
          className: (0, d.cn)("relative flex w-full min-w-0 flex-col p-2", t),
          ...a,
        })
      }
      function _(e) {
        let { className: t, asChild: a = !1, ...i } = e,
          n = a ? s.DX : "div"
        return (0, r.jsx)(n, {
          "data-slot": "sidebar-group-label",
          className: (0, d.cn)(
            "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-sm text-sidebar-foreground/70 outline-hidden ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
            "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
            t
          ),
          ...i,
        })
      }
      function S(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("div", {
          "data-slot": "sidebar-group-content",
          "data-sidebar": "group-content",
          className: (0, d.cn)("w-full text-sm", t),
          ...a,
        })
      }
      function E(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("ul", {
          "data-slot": "sidebar-menu",
          "data-sidebar": "menu",
          className: (0, d.cn)("flex w-full min-w-0 flex-col gap-1", t),
          ...a,
        })
      }
      function P(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("li", {
          "data-slot": "sidebar-menu-item",
          "data-sidebar": "menu-item",
          className: (0, d.cn)("group/menu-item relative", t),
          ...a,
        })
      }
      let D = (0, n.F)(
        "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        {
          variants: {
            variant: {
              default:
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              outline:
                "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
            },
            size: {
              default: "h-8 text-sm",
              sm: "h-7 text-xs",
              lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      )
      function L(e) {
        let {
            asChild: t = !1,
            isActive: a = !1,
            variant: i = "default",
            size: n = "default",
            tooltip: o,
            className: l,
            ...c
          } = e,
          u = t ? s.DX : "button",
          { isMobile: b, state: f } = w(),
          h = (0, r.jsx)(u, {
            "data-slot": "sidebar-menu-button",
            "data-sidebar": "menu-button",
            "data-size": n,
            "data-active": a,
            className: (0, d.cn)(D({ variant: i, size: n }), l),
            ...c,
          })
        return o
          ? ("string" == typeof o && (o = { children: o }),
            (0, r.jsxs)(x.m_, {
              children: [
                (0, r.jsx)(x.k$, { asChild: !0, children: h }),
                (0, r.jsx)(x.ZI, {
                  side: "right",
                  align: "center",
                  hidden: "collapsed" !== f || b,
                  ...o,
                }),
              ],
            }))
          : h
      }
      function A(e) {
        let { className: t, ...a } = e
        return (0, r.jsx)("ul", {
          "data-slot": "sidebar-menu-sub",
          "data-sidebar": "menu-sub",
          className: (0, d.cn)(
            "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-s border-sidebar-border px-2.5 py-0.5",
            "group-data-[collapsible=icon]:hidden",
            t
          ),
          ...a,
        })
      }
    },
  },
])
