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
      '.main {\n  margin: 0;\n  font-family: "EB Garamond", serif;\n}\n\nh1 {\n  text-align: center;\n}\n\n#nav li {\n  display: inline;\n  margin-right: 25px;\n}\n\n.slider-div {\n  position: relative;\n  overflow-x: hidden;\n  height: 50%;\n  width: 100%;\n}\n\n.nav-btn {\n  background: rgb(0, 0, 0, 0.4);\n  color: #ccc;\n  font-size: 60px;\n  padding: 5px 8px;\n  position: absolute;\n  top: 40%;\n  z-index: 99;\n}\n\n#image-container {\n  position: relative;\n  overflow-x: hidden;\n  width: 400%;\n  transition: transform 1s;\n}\n\nimg {\n  display: inline-block;\n  width: 25%;\n}\n\n#nav-btn-right {\n  right: 0;\n}\n\n.slide-marker {\n  position: absolute;\n  bottom: 5%;\n  left: 40%;\n}\n\n.slide-marker span {\n  background: #ccc;\n  display: inline-block;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  margin-right: 15px;\n  padding: 10px;\n}\n\n.section {\n  padding: 30px 20px;\n}\n\n/* Form */\n\n.contact-form form {\n  margin: 0 auto;\n  width: 40%;\n}\n\n.form-field {\n  margin-bottom: 25px;\n}\n\n.form-field input[type="text"],\n.form-field input[type="email"],\n.form-field textarea {\n  padding: 8px 10px;\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.form-field textarea {\n  height: 60px;\n}\n\n.form-submit input[type="submit"] {\n  font-family: "EB Garamond", serif;\n  font-size: 18px;\n  background: #eee;\n  border: none;\n  border-radius: 5px;\n  padding: 12px 20px;\n}\n\n.form-submit input[type="submit"]:hover {\n  background: #ccc;\n}\n\n.has-error {\n  border-color: #ff0000;\n}\n\n.error-msg {\n  color: #ff0000;\n}\n',
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
                    (d = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(d, " */")),
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
              var o, s, d;
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
    function d(n, e) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t],
          a = i[r.id],
          o = 0;
        if (a) {
          for (a.refs++; o < a.parts.length; o++) a.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) a.parts.push(b(r.parts[o], e));
        } else {
          for (var s = []; o < r.parts.length; o++) s.push(b(r.parts[o], e));
          i[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function c(n) {
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
    function p(n, e, t) {
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
    }
    var m = null,
      v = 0;
    function b(n, e) {
      var t, r, i;
      if (e.singleton) {
        var a = v++;
        (t = m || (m = c(e))),
          (r = f.bind(null, t, a, !1)),
          (i = f.bind(null, t, a, !0));
      } else
        (t = c(e)),
          (r = p.bind(null, t, e)),
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
        d(t, e),
        function(n) {
          for (var r = [], a = 0; a < t.length; a++) {
            var o = t[a],
              c = i[o.id];
            c && (c.refs--, r.push(c));
          }
          n && d(s(n, e), e);
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
      d = t.n(s),
      c = t(3),
      l = t.n(c),
      u = function(n) {
        var e = new Image();
        return (e.src = n), e;
      },
      f = function() {
        var n = u(i.a),
          e = u(o.a),
          t = u(d.a),
          r = u(l.a),
          a = document.createElement("div");
        a.setAttribute("id", "image-container"),
          (a.innerHTML = n.outerHTML + e.outerHTML + t.outerHTML + r.outerHTML);
        var s = document.createElement("div");
        s.className = "slider-div";
        (s.innerHTML +=
          '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span>'),
          s.appendChild(a);
        return (
          (s.innerHTML +=
            '<div class="slide-marker"><span id="slide-marker-0" data-slide-index="0"></span><span id="slide-marker-1" data-slide-index="1"></span><span id="slide-marker-2" data-slide-index="2"></span><span id="slide-marker-3" data-slide-index="3"></span></div>'),
          s
        );
      },
      p = function() {
        var n = document.createElement("div");
        return (
          n.classList.add("section", "menu"),
          (n.innerHTML += "<div>Restaurant menu</div>"),
          n
        );
      },
      m = function() {
        var n = document.createElement("div");
        return (
          n.classList.add("section", "contact-form"),
          (n.style.display = "none"),
          (n.innerHTML +=
            '<form novalidate><div class="form-field"><label for="name">Name</label><input id="name" type="text" name="name" required></div><div class="form-field"><label for="email">Email</label><input id="email" type="email" name="email" required></div><div class="form-field"><label for="message">Your Message</label><textarea required></textarea></div><div class="form-submit"><input id="submit-btn" type="submit" value="Send"></div></form>'),
          n
        );
      },
      v = function() {
        var n = document.createElement("div");
        n.classList.add("main");
        return (
          (n.innerHTML =
            '<h1>The City Restaurant</h1><div>\n    <ul id="nav">\n    <li id="menu">Menu</li>\n    <li id="contact-form">Contact</li>\n    </ul>\n    </div>'),
          n.appendChild(f()),
          n.appendChild(p()),
          n.appendChild(m()),
          n
        );
      },
      b = function() {
        var n,
          e = document.querySelectorAll("#nav li"),
          t = document.querySelectorAll(".section");
        e.forEach(function(e) {
          e.addEventListener("click", function() {
            (n = e.id), r(n);
          });
        });
        var r = function(n) {
          t.forEach(function(e) {
            e.classList.contains(n)
              ? (e.style.display = "block")
              : (e.style.display = "none");
          });
        };
      },
      h = function(n) {
        var e = document.querySelector(".slider-div").offsetWidth;
        document.getElementById(
          "image-container"
        ).style.transform = "translate(-".concat(n * e, "px)");
        var t = document.querySelectorAll(".slide-marker span"),
          r = document.getElementById("slide-marker-".concat(n));
        t.forEach(function(n) {
          n.style.background = "#ccc";
        }),
          (r.style.background = "#fff");
      },
      g = function(n) {
        var e,
          t = document.getElementById("nav-btn-left"),
          r = document.getElementById("nav-btn-right"),
          i = n,
          a = function() {
            e = setInterval(function() {
              return i < 4 && (h(i), i++), 4 === i && (i = 0), i;
            }, 4e3);
          },
          o = function() {
            clearInterval(e);
          };
        h(i),
          a(),
          t.addEventListener("click", function() {
            return o(), i < 4 && i > 0 && h((i -= 1)), a(), i;
          }),
          r.addEventListener("click", function() {
            return o(), i < 3 && i >= 0 && h((i += 1)), a(), i;
          }),
          document.querySelectorAll(".slide-marker span").forEach(function(n) {
            n.addEventListener("click", function() {
              o(), (i = Number(n.dataset.slideIndex)), h(i), a();
            });
          });
      },
      y = function() {
        var n = [],
          e = document.querySelectorAll(
            ".form-field input, .form-field textarea"
          ),
          t = document.querySelector('.form-field input[type="email"]'),
          r = document.querySelector("form"),
          i = function(e) {
            if (e.validity.valueMissing) {
              a(e, "This field is required!"), n.push[!1];
            }
            e.validity.valueMissing || o(e);
          };
        r.addEventListener("submit", function() {
          if (
            (event.preventDefault(),
            e.forEach(function(n) {
              return i(n);
            }),
            n.includes(!1))
          )
            return !1;
        }),
          e.forEach(function(n) {
            n.addEventListener("blur", function(e) {
              i(n);
            });
          }),
          t.addEventListener("blur", function(e) {
            "" !== t.value &&
              (function(e) {
                if (e.validity.typeMismatch) {
                  a(e, "Please use valid email address"), n.push(!1);
                }
                e.validity.typeMismatch || o(e);
              })(t);
          });
        var a = function(n, e) {
            n.classList.add("has-error");
            var t = document.createElement("span");
            t.classList.add("error-msg"),
              (t.innerHTML = e),
              n.nextElementSibling || n.parentNode.appendChild(t);
          },
          o = function(n) {
            var e = n.parentNode.querySelector(".error-msg");
            e && n.parentNode.removeChild(e), n.classList.remove("has-error");
          };
      };
    document.body.appendChild(v());
    g(0), y(), b();
  }
]);
