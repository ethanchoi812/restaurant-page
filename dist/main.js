!(function(n) {
  var e = {};
  function t(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return n[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function(n, e, r) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
    }),
    (t.r = function(n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (t.t = function(n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var i in n)
          t.d(
            r,
            i,
            function(e) {
              return n[e];
            }.bind(null, i)
          );
      return r;
    }),
    (t.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return t.d(e, "a", e), e;
    }),
    (t.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = ""),
    t((t.s = 8));
})([
  function(n, e, t) {
    n.exports = t.p + "10d9f2f792370c75f53f7cc445a81fff.jpg";
  },
  function(n, e, t) {
    n.exports = t.p + "e404153ed17f9fb2d09ebc690de838d4.jpg";
  },
  function(n, e, t) {
    n.exports = t.p + "86e82613c23470b0ce346da63ea91b65.jpg";
  },
  function(n, e, t) {
    n.exports = t.p + "04bcd4fecfb9775300bd935c889e3090.jpg";
  },
  function(n, e, t) {
    var r = t(5);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var i = { insert: "head", singleton: !1 };
    t(7)(r, i);
    r.locals && (n.exports = r.locals);
  },
  function(n, e, t) {
    (n.exports = t(6)(!1)).push([
      n.i,
      '.main {\n  margin: 0;\n  font-family: "EB Garamond", serif;\n}\n\nh1 {\n  text-align: center;\n}\n\n#nav li {\n  display: inline;\n  margin-right: 25px;\n}\n\n.slider-div {\n  position: relative;\n  overflow-x: hidden;\n  height: 50%;\n  width: 100%;\n}\n\n.nav-btn {\n  background: rgb(0, 0, 0, 0.4);\n  color: #ccc;\n  font-size: 60px;\n  padding: 5px 8px;\n  position: absolute;\n  top: 40%;\n  z-index: 99;\n}\n\n#image-container {\n  position: relative;\n  overflow-x: hidden;\n  width: 400%;\n  transition: transform 1s;\n}\n\nimg {\n  display: inline-block;\n  width: 25%;\n}\n\n#nav-btn-right {\n  right: 0;\n}\n\n.slide-marker {\n  position: absolute;\n  bottom: 5%;\n  left: 40%;\n}\n\n.slide-marker span {\n  background: #ccc;\n  display: inline-block;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  margin-right: 15px;\n  padding: 10px;\n}\n\n#pageContent {\n  padding: 20px 30px;\n}\n',
      ""
    ]);
  },
  function(n, e, t) {
    "use strict";
    n.exports = function(n) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var t = (function(n, e) {
              var t = n[1] || "",
                r = n[3];
              if (!r) return t;
              if (e && "function" == typeof btoa) {
                var i =
                    ((o = r),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(c, " */")),
                  a = r.sources.map(function(n) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(n, " */");
                  });
                return [t]
                  .concat(a)
                  .concat([i])
                  .join("\n");
              }
              var o, s, c;
              return [t].join("\n");
            })(e, n);
            return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
          }).join("");
        }),
        (e.i = function(n, t) {
          "string" == typeof n && (n = [[null, n, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var a = this[i][0];
            null != a && (r[a] = !0);
          }
          for (var o = 0; o < n.length; o++) {
            var s = n[o];
            (null != s[0] && r[s[0]]) ||
              (t && !s[2]
                ? (s[2] = t)
                : t && (s[2] = "(".concat(s[2], ") and (").concat(t, ")")),
              e.push(s));
          }
        }),
        e
      );
    };
  },
  function(n, e, t) {
    "use strict";
    var r,
      i = {},
      a = function() {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      o = (function() {
        var n = {};
        return function(e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            n[e] = t;
          }
          return n[e];
        };
      })();
    function s(n, e) {
      for (var t = [], r = {}, i = 0; i < n.length; i++) {
        var a = n[i],
          o = e.base ? a[0] + e.base : a[0],
          s = { css: a[1], media: a[2], sourceMap: a[3] };
        r[o] ? r[o].parts.push(s) : t.push((r[o] = { id: o, parts: [s] }));
      }
      return t;
    }
    function c(n, e) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t],
          a = i[r.id],
          o = 0;
        if (a) {
          for (a.refs++; o < a.parts.length; o++) a.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) a.parts.push(m(r.parts[o], e));
        } else {
          for (var s = []; o < r.parts.length; o++) s.push(m(r.parts[o], e));
          i[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function d(n) {
      var e = document.createElement("style");
      if (void 0 === n.attributes.nonce) {
        var r = t.nc;
        r && (n.attributes.nonce = r);
      }
      if (
        (Object.keys(n.attributes).forEach(function(t) {
          e.setAttribute(t, n.attributes[t]);
        }),
        "function" == typeof n.insert)
      )
        n.insert(e);
      else {
        var i = o(n.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(e);
      }
      return e;
    }
    var l,
      u =
        ((l = []),
        function(n, e) {
          return (l[n] = e), l.filter(Boolean).join("\n");
        });
    function f(n, e, t, r) {
      var i = t ? "" : r.css;
      if (n.styleSheet) n.styleSheet.cssText = u(e, i);
      else {
        var a = document.createTextNode(i),
          o = n.childNodes;
        o[e] && n.removeChild(o[e]),
          o.length ? n.insertBefore(a, o[e]) : n.appendChild(a);
      }
    }
    var p = null,
      v = 0;
    function m(n, e) {
      var t, r, i;
      if (e.singleton) {
        var a = v++;
        (t = p || (p = d(e))),
          (r = f.bind(null, t, a, !1)),
          (i = f.bind(null, t, a, !0));
      } else
        (t = d(e)),
          (r = function(n, e, t) {
            var r = t.css,
              i = t.media,
              a = t.sourceMap;
            if (
              (i && n.setAttribute("media", i),
              a &&
                btoa &&
                (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                  " */"
                )),
              n.styleSheet)
            )
              n.styleSheet.cssText = r;
            else {
              for (; n.firstChild; ) n.removeChild(n.firstChild);
              n.appendChild(document.createTextNode(r));
            }
          }.bind(null, t, e)),
          (i = function() {
            !(function(n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(t);
          });
      return (
        r(n),
        function(e) {
          if (e) {
            if (
              e.css === n.css &&
              e.media === n.media &&
              e.sourceMap === n.sourceMap
            )
              return;
            r((n = e));
          } else i();
        }
      );
    }
    n.exports = function(n, e) {
      ((e = e || {}).attributes =
        "object" == typeof e.attributes ? e.attributes : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a());
      var t = s(n, e);
      return (
        c(t, e),
        function(n) {
          for (var r = [], a = 0; a < t.length; a++) {
            var o = t[a],
              d = i[o.id];
            d && (d.refs--, r.push(d));
          }
          n && c(s(n, e), e);
          for (var l = 0; l < r.length; l++) {
            var u = r[l];
            if (0 === u.refs) {
              for (var f = 0; f < u.parts.length; f++) u.parts[f]();
              delete i[u.id];
            }
          }
        }
      );
    };
  },
  function(n, e, t) {
    "use strict";
    t.r(e);
    t(4);
    var r = t(0),
      i = t.n(r),
      a = t(1),
      o = t.n(a),
      s = t(2),
      c = t.n(s),
      d = t(3),
      l = t.n(d);
    const u = n => {
      let e = new Image();
      return (e.src = n), e;
    };
    var f = () => {
      const n = u(i.a),
        e = u(o.a),
        t = u(c.a),
        r = u(l.a);
      let a = document.createElement("div");
      a.setAttribute("id", "image-container"),
        (a.innerHTML = n.outerHTML + e.outerHTML + t.outerHTML + r.outerHTML);
      let s = document.createElement("div");
      s.className = "slider-div";
      (s.innerHTML +=
        '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span>'),
        s.appendChild(a);
      return (
        (s.innerHTML +=
          '<div class="slide-marker"><span id="slide-marker-0" data-slide-index="0"></span><span id="slide-marker-1" data-slide-index="1"></span><span id="slide-marker-2" data-slide-index="2"></span><span id="slide-marker-3" data-slide-index="3"></span></div>'),
        s
      );
    };
    var p = () => {
      let n = document.createElement("div");
      n.classList.add("main");
      return (
        (n.innerHTML =
          '<h1>The City Restaurant</h1><div><ul id="nav"><li id="menu">Menu</li><li id="contact">Contact</li></ul></div>'),
        n.appendChild(f()),
        (n.innerHTML += '<div id="pageContent"></div>'),
        n
      );
    };
    var v = n => {
      let e = document.querySelector(".slider-div").offsetWidth;
      document.getElementById(
        "image-container"
      ).style.transform = `translate(-${n * e}px)`;
      let t = document.querySelectorAll(".slide-marker span"),
        r = document.getElementById(`slide-marker-${n}`);
      t.forEach(n => {
        n.style.background = "#ccc";
      }),
        (r.style.background = "#fff");
    };
    var m = n => {
      let e,
        t = document.getElementById("nav-btn-left"),
        r = document.getElementById("nav-btn-right"),
        i = n;
      const a = () => {
          e = setInterval(
            () => (i < 4 && (v(i), i++), 4 === i && (i = 0), i),
            4e3
          );
        },
        o = () => {
          clearInterval(e);
        };
      v(i),
        a(),
        t.addEventListener(
          "click",
          () => (o(), i < 4 && i > 0 && v((i -= 1)), a(), i)
        ),
        r.addEventListener(
          "click",
          () => (o(), i < 3 && i >= 0 && v((i += 1)), a(), i)
        ),
        document.querySelectorAll(".slide-marker span").forEach(n => {
          n.addEventListener("click", () => {
            o(), (i = Number(n.dataset.slideIndex)), v(i), a();
          });
        });
    };
    var h = () => {
      let n,
        e = document.getElementById("pageContent"),
        t = "Restaurant menu";
      (e.innerHTML = t),
        document.querySelectorAll("#nav li").forEach(e => {
          e.addEventListener("click", () => {
            (n = e.id), r(n);
          });
        });
      const r = n => {
        "menu" === n
          ? (t = "Restaurant menu")
          : "contact" === n && (t = "Contact here"),
          (e.innerHTML = t);
      };
    };
    document.body.appendChild(p());
    m(0), h();
  }
]);
