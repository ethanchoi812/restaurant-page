!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = () => {
      let e = document.createElement("div");
      e.className = "slider-div";
      return (
        (e.innerHTML =
          '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span><div id="image-container"><img id="slide-1" src="https://via.placeholder.com/1280x384/0000FF"><img id="slide-2" src="https://via.placeholder.com/1280x384/FF0000"><img id="slide-3" src="https://via.placeholder.com/1280x384/FFFF00"><img id="slide-4" src="https://via.placeholder.com/1280x384/00FF00"></div><div class="slide-marker"><span id="slide-marker-0"></span><span id="slide-marker-1"></span><span id="slide-marker-2"></span><span id="slide-marker-3"></span></div>'),
        e
      );
    };
    var i = () => {
      let e = document.createElement("div");
      return (
        (e.innerHTML =
          '<h1>The City Restaurant</h1><div><ul id="nav"><li id="menu">Menu</li><li id="contact">Contact</li></ul></div>'),
        e.appendChild(r()),
        e
      );
    };
    var d = e => {
      document.querySelectorAll(".slide-marker span").forEach(e => {
        e.style.background = "#ccc";
      }),
        (document.getElementById(`slide-marker-${e}`).style.background =
          "#fff");
    };
    var a = () => {
      let e = document.querySelector(".slider-div"),
        t = document.getElementById("image-container"),
        n = document.getElementById("nav-btn-left"),
        r = document.getElementById("nav-btn-right"),
        i = 0;
      d(i),
        n.addEventListener("click", () => {
          let n = e.offsetWidth;
          return (
            i < 4 &&
              i > 0 &&
              ((i -= 1), (t.style.transform = `translate(-${i * n}px)`), d(i)),
            i
          );
        }),
        r.addEventListener("click", () => {
          let n = e.offsetWidth;
          return (
            i < 3 &&
              ((i += 1), (t.style.transform = `translate(-${i * n}px)`), d(i)),
            i
          );
        });
    };
    document.body.appendChild(i());
    const l = document.createElement("div");
    let c = document.getElementById("menu"),
      o = document.getElementById("contact");
    function s(e) {
      let t;
      return (
        (t =
          "menu" === e
            ? "This is my menu"
            : "contact" === e
            ? "Contact here"
            : ""),
        (l.innerHTML = t),
        l
      );
    }
    (c.onclick = function(e) {
      s("menu");
    }),
      (o.onclick = function(e) {
        s("contact");
      }),
      document.body.appendChild(l),
      a();
  }
]);
