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
          '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span><div id="image-container"><img src="https://via.placeholder.com/1280x384/0000FF"><img src="https://via.placeholder.com/1280x384/FF0000"><img src="https://via.placeholder.com/1280x384/FFFF00"><img src="https://via.placeholder.com/1280x384/00FF00"></div><div class="slide-marker"><span id="slide-marker-0" data-slide-index="0"></span><span id="slide-marker-1" data-slide-index="1"></span><span id="slide-marker-2" data-slide-index="2"></span><span id="slide-marker-3" data-slide-index="3"></span></div>'),
        e
      );
    };
    var i = () => {
      let e = document.createElement("div");
      return (
        (e.innerHTML =
          '<h1>The City Restaurant</h1><div><ul id="nav"><li id="menu">Menu</li><li id="contact">Contact</li></ul></div>'),
        e.appendChild(r()),
        (e.innerHTML += '<div id="pageContent"></div>'),
        e
      );
    };
    var a = e => {
      let t = document.querySelector(".slider-div").offsetWidth;
      document.getElementById(
        "image-container"
      ).style.transform = `translate(-${e * t}px)`;
      let n = document.querySelectorAll(".slide-marker span"),
        r = document.getElementById(`slide-marker-${e}`);
      n.forEach(e => {
        e.style.background = "#ccc";
      }),
        (r.style.background = "#fff");
    };
    var d = e => {
      let t = document.getElementById("nav-btn-left"),
        n = document.getElementById("nav-btn-right"),
        r = e;
      a(r),
        t.addEventListener("click", () => (r < 4 && r > 0 && a((r -= 1)), r)),
        n.addEventListener("click", () => (r < 3 && r >= 0 && a((r += 1)), r)),
        document.querySelectorAll(".slide-marker span").forEach(e => {
          e.addEventListener("click", () => {
            (r = Number(e.dataset.slideIndex)), a(r);
          });
        }),
        setInterval(() => (r < 4 && (a(r), r++), 4 === r && (r = 0), r), 5e3);
    };
    var l = () => {
      let e = document.getElementById("pageContent"),
        t = "",
        n = document.querySelectorAll("#nav li"),
        r = "";
      n.forEach(n => {
        n.addEventListener("click", () => {
          (r = n.id),
            (t =
              "menu" === r
                ? "This is my menu"
                : "contact" === r
                ? "Contact here"
                : ""),
            (e.innerHTML = t);
        });
      });
    };
    document.body.appendChild(i());
    d(0), l();
  }
]);
