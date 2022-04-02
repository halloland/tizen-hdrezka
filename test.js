(function (e, t) {
  var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1",
    f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim,
    b = function (e, t) {
      return new b.fn.init(e, t, r)
    }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/,
    E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi,
    L = function (e, t) {
      return t.toUpperCase()
    }, H = function (e) {
      (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
    }, q = function () {
      o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
    };
  b.fn = b.prototype = {
    jquery: p, constructor: b, init: function (e, n, r) {
      var i, a;
      if (!e) return this;
      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (i[1]) {
          if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this
        }
        if (a = o.getElementById(i[2]), a && a.parentNode) {
          if (a.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = a
        }
        return this.context = o, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
    }, selector: "", length: 0, size: function () {
      return this.length
    }, toArray: function () {
      return h.call(this)
    }, get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
      var t = b.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
      return b.each(this, e, t)
    }, ready: function (e) {
      return b.ready.promise().done(e), this
    }, slice: function () {
      return this.pushStack(h.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
      return this.pushStack(b.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: d, sort: [].sort, splice: [].splice
  }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
    var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
    return s
  }, b.extend({
    noConflict: function (t) {
      return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? b.readyWait++ : b.ready(!0)
    }, ready: function (e) {
      if (e === !0 ? !--b.readyWait : !b.isReady) {
        if (!o.body) return setTimeout(b.ready);
        b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
      }
    }, isFunction: function (e) {
      return "function" === b.type(e)
    }, isArray: Array.isArray || function (e) {
      return "array" === b.type(e)
    }, isWindow: function (e) {
      return null != e && e == e.window
    }, isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
      if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
      try {
        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      var r;
      for (r in e) ;
      return r === t || y.call(e, r)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, error: function (e) {
      throw Error(e)
    }, parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e), i = !n && [];
      return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
    }, parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
    }, parseXML: function (n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
      } catch (o) {
        r = t
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
      t && b.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t)
      })(t)
    }, camelCase: function (e) {
      return e.replace(j, "ms-").replace(D, L)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
      var r, i = 0, o = e.length, a = M(e);
      if (n) {
        if (a) {
          for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
        } else for (i in e) if (r = t.apply(e[i], n), r === !1) break
      } else if (a) {
        for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
      } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
      return e
    }, trim: v && !v.call("\ufeff\u00a0") ? function (e) {
      return null == e ? "" : v.call(e)
    } : function (e) {
      return null == e ? "" : (e + "").replace(T, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
    }, inArray: function (e, t, n) {
      var r;
      if (t) {
        if (g) return g.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
      }
      return -1
    }, merge: function (e, n) {
      var r = n.length, i = e.length, o = 0;
      if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++];
      return e.length = i, e
    }, grep: function (e, t, n) {
      var r, i = [], o = 0, a = e.length;
      for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i
    }, map: function (e, t, n) {
      var r, i = 0, o = e.length, a = M(e), s = [];
      if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
      return f.apply([], s)
    }, guid: 1, proxy: function (e, n) {
      var r, i, o;
      return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () {
        return e.apply(n || this, r.concat(h.call(arguments)))
      }, i.guid = e.guid = e.guid || b.guid++, i) : t
    }, access: function (e, n, r, i, o, a, s) {
      var u = 0, l = e.length, c = null == r;
      if ("object" === b.type(r)) {
        o = !0;
        for (u in r) b.access(e, n, u, r[u], !0, a, s)
      } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
        return c.call(b(e), n)
      })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
      return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
    }, now: function () {
      return (new Date).getTime()
    }
  }), b.ready.promise = function (t) {
    if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1); else {
      o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
      var r = !1;
      try {
        r = null == e.frameElement && o.documentElement
      } catch (i) {
      }
      r && r.doScroll && function a() {
        if (!b.isReady) {
          try {
            r.doScroll("left")
          } catch (e) {
            return setTimeout(a, 50)
          }
          q(), b.ready()
        }
      }()
    }
    return n.promise(t)
  }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase()
  });

  function M(e) {
    var t = e.length, n = b.type(e);
    return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  r = b(o);
  var _ = {};

  function F(e) {
    var t = _[e] = {};
    return b.each(e.match(w) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  b.Callbacks = function (e) {
    e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
    var n, r, i, o, a, s, u = [], l = !e.once && [], c = function (t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        r = !1;
        break
      }
      n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
    }, p = {
      add: function () {
        if (u) {
          var t = u.length;
          (function i(t) {
            b.each(t, function (t, n) {
              var r = b.type(n);
              "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
            })
          })(arguments), n ? o = u.length : r && (s = t, c(r))
        }
        return this
      }, remove: function () {
        return u && b.each(arguments, function (e, t) {
          var r;
          while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
        }), this
      }, has: function (e) {
        return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
      }, empty: function () {
        return u = [], this
      }, disable: function () {
        return u = l = r = t, this
      }, disabled: function () {
        return !u
      }, lock: function () {
        return l = t, r || p.disable(), this
      }, locked: function () {
        return !l
      }, fireWith: function (e, t) {
        return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
      }, fire: function () {
        return p.fireWith(this, arguments), this
      }, fired: function () {
        return !!i
      }
    };
    return p
  }, b.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]],
        n = "pending", r = {
          state: function () {
            return n
          }, always: function () {
            return i.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return b.Deferred(function (n) {
              b.each(t, function (t, o) {
                var a = o[0], s = b.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? b.extend(e, r) : r
          }
        }, i = {};
      return r.pipe = r.then, b.each(t, function (e, o) {
        var a = o[2], s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = a.fireWith
      }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
      var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
        o = 1 === i ? e : b.Deferred(), a = function (e, t, n) {
          return function (r) {
            t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
          }
        }, s, u, l;
      if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
      return i || o.resolveWith(l, n), o.promise()
    }
  }), b.support = function () {
    var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
    if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
    s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
      getSetAttribute: "t" !== d.className,
      leadingWhitespace: 3 === d.firstChild.nodeType,
      tbody: !d.getElementsByTagName("tbody").length,
      htmlSerialize: !!d.getElementsByTagName("link").length,
      style: /top/.test(r.getAttribute("style")),
      hrefNormalized: "/a" === r.getAttribute("href"),
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !!r.style.cssFloat,
      checkOn: !!a.value,
      optSelected: l.selected,
      enctype: !!o.createElement("form").enctype,
      html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
      boxModel: "CSS1Compat" === o.compatMode,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
    try {
      delete d.test
    } catch (h) {
      t.deleteExpando = !1
    }
    a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1
    }), d.cloneNode(!0).click());
    for (f in {
      submit: !0,
      change: !0,
      focusin: !0
    }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
      var n, r, a,
        s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        u = o.getElementsByTagName("body")[0];
      u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
    }), n = s = u = l = r = a = null, t
  }();
  var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g;

  function P(e, n, r, i) {
    if (b.acceptData(e)) {
      var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s;
      if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
    }
  }

  function R(e, t, n) {
    if (b.acceptData(e)) {
      var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando;
      if (s[u]) {
        if (t && (o = n ? s[u] : s[u].data)) {
          b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
          for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
          if (!(n ? $ : b.isEmptyObject)(o)) return
        }
        (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
      }
    }
  }

  b.extend({
    cache: {},
    expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
    noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
    hasData: function (e) {
      return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
    },
    data: function (e, t, n) {
      return P(e, t, n)
    },
    removeData: function (e, t) {
      return R(e, t)
    },
    _data: function (e, t, n) {
      return P(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return R(e, t, !0)
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t
    }
  }), b.fn.extend({
    data: function (e, n) {
      var r, i, o = this[0], a = 0, s = null;
      if (e === t) {
        if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
          for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
          b._data(o, "parsedAttrs", !0)
        }
        return s
      }
      return "object" == typeof e ? this.each(function () {
        b.data(this, e)
      }) : b.access(this, function (n) {
        return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
          b.data(this, e, n)
        }), t)
      }, null, n, arguments.length > 1, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        b.removeData(this, e)
      })
    }
  });

  function W(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(B, "-$1").toLowerCase();
      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
        } catch (o) {
        }
        b.data(e, n, r)
      } else r = t
    }
    return r
  }

  function $(e) {
    var t;
    for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  b.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function () {
        b.dequeue(e, t)
      };
      "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return b._data(e, n) || b._data(e, n, {
        empty: b.Callbacks("once memory").add(function () {
          b._removeData(e, t + "queue"), b._removeData(e, n)
        })
      })
    }
  }), b.fn.extend({
    queue: function (e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = b.queue(this, e, n);
        b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        b.dequeue(this, e)
      })
    }, delay: function (e, t) {
      return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r)
        }
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, n) {
      var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function () {
        --i || o.resolveWith(a, [a])
      };
      "string" != typeof e && (n = e, e = t), e = e || "fx";
      while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
      return u(), o.promise(n)
    }
  });
  var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i,
    J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
  b.fn.extend({
    attr: function (e, t) {
      return b.access(this, b.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e)
      })
    }, prop: function (e, t) {
      return b.access(this, b.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return e = b.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e]
        } catch (n) {
        }
      })
    }, addClass: function (e) {
      var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).addClass(e.call(this, t, this.className))
      });
      if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
        o = 0;
        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
        n.className = b.trim(r)
      }
      return this
    }, removeClass: function (e) {
      var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).removeClass(e.call(this, t, this.className))
      });
      if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
        o = 0;
        while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
        n.className = e ? b.trim(r) : ""
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e, r = "boolean" == typeof t;
      return b.isFunction(e) ? this.each(function (n) {
        b(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function () {
        if ("string" === n) {
          var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
          while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
        } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
      })
    }, hasClass: function (e) {
      var t = " " + e + " ", n = 0, r = this.length;
      for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
      return !1
    }, val: function (e) {
      var n, r, i, o = this[0];
      {
        if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
          var o, a = b(this);
          1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
            return null == e ? "" : e + ""
          })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
        });
        if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
      }
    }
  }), b.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text
        }
      }, select: {
        get: function (e) {
          var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [],
            s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0;
          for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
            if (t = b(n).val(), o) return t;
            a.push(t)
          }
          return a
        }, set: function (e, t) {
          var n = b.makeArray(t);
          return b(e).find("option").each(function () {
            this.selected = b.inArray(b(this).val(), n) >= 0
          }), n.length || (e.selectedIndex = -1), n
        }
      }
    },
    attr: function (e, n, r) {
      var o, a, s, u = e.nodeType;
      if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(w);
      if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function (e, n, r) {
      var i, o, a, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
        }
      }
    }
  }), z = {
    get: function (e, n) {
      var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n),
        o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
      return o && o.value !== !1 ? n.toLowerCase() : t
    }, set: function (e, t, n) {
      return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, K && Q || (b.attrHooks.value = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
    }, set: function (e, n, r) {
      return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
    }
  }), Q || (I = b.valHooks.button = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
    }, set: function (e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }
  }, b.attrHooks.contenteditable = {
    get: I.get, set: function (e, t, n) {
      I.set(e, "" === t ? !1 : t, n)
    }
  }, b.each(["width", "height"], function (e, n) {
    b.attrHooks[n] = b.extend(b.attrHooks[n], {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t
      }
    })
  })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
    b.attrHooks[n] = b.extend(b.attrHooks[n], {
      get: function (e) {
        var r = e.getAttribute(n, 2);
        return null == r ? t : r
      }
    })
  }), b.each(["href", "src"], function (e, t) {
    b.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4)
      }
    }
  })), b.support.style || (b.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || t
    }, set: function (e, t) {
      return e.style.cssText = t + ""
    }
  }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = {
      get: function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      }
    }
  }), b.each(["radio", "checkbox"], function () {
    b.valHooks[this] = b.extend(b.valHooks[this], {
      set: function (e, n) {
        return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
      }
    })
  });
  var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
    return !0
  }

  function ot() {
    return !1
  }

  b.event = {
    global: {},
    add: function (e, n, r, o, a) {
      var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
        }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
        while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
          type: g,
          origType: y,
          data: o,
          handler: r,
          guid: r.guid,
          selector: a,
          needsContext: a && b.expr.match.needsContext.test(a),
          namespace: m.join(".")
        }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
        e = null
      }
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
      if (m && (c = m.events)) {
        t = (t || "").match(w) || [""], l = t.length;
        while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
          p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
          while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
          u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
        } else for (d in c) b.event.remove(e, d + t[l], n, r, !0);
        b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
      }
    },
    trigger: function (n, r, i, a) {
      var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n,
        m = y.call(n, "namespace") ? n.namespace.split(".") : [];
      if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!a && !p.noBubble && !b.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
          f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
        }
        d = 0;
        while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
        if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
          f = i[u], f && (i[u] = null), b.event.triggered = g;
          try {
            i[g]()
          } catch (v) {
          }
          b.event.triggered = t, f && (i[u] = f)
        }
        return n.result
      }
    },
    dispatch: function (e) {
      e = b.event.fix(e);
      var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [],
        c = b.event.special[e.type] || {};
      if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = b.event.handlers.call(this, e, l), n = 0;
        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;
          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, n) {
      var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
      if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
        o.length && s.push({ elem: l, handlers: o })
      }
      return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s
    },
    fix: function (e) {
      if (e[b.expando]) return e;
      var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
      while (t--) n = r[t], e[n] = a[n];
      return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, n) {
        var r, i, a, s = n.button, u = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
      }
    },
    special: {
      load: { noBubble: !0 }, click: {
        trigger: function () {
          return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
        }
      }, focus: {
        trigger: function () {
          if (this !== o.activeElement && this.focus) try {
            return this.focus(), !1
          } catch (e) {
          }
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === o.activeElement && this.blur ? (this.blur(), !1) : t
        }, delegateType: "focusout"
      }, beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = b.extend(new b.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
      r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, b.removeEvent = o.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
  }, b.Event = function (e, n) {
    return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
  }, b.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = it, this.stopPropagation()
    }
  }, b.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
    b.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), b.support.submitBubbles || (b.event.special.submit = {
    setup: function () {
      return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
        r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0
        }), b._data(r, "submitBubbles", !0))
      }), t)
    }, postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
      return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
    }
  }), b.support.changeBubbles || (b.event.special.change = {
    setup: function () {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), b.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
      })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
        }), b._data(t, "changeBubbles", !0))
      }), t)
    }, handle: function (e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
      return b.event.remove(this, "._change"), !Z.test(this.nodeName)
    }
  }), b.support.focusinBubbles || b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = 0, r = function (e) {
      b.event.simulate(t, e.target, b.event.fix(e), !0)
    };
    b.event.special[t] = {
      setup: function () {
        0 === n++ && o.addEventListener(e, r, !0)
      }, teardown: function () {
        0 === --n && o.removeEventListener(e, r, !0)
      }
    }
  }), b.fn.extend({
    on: function (e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);
        for (a in e) this.on(a, n, r, e[a], o);
        return this
      }
      if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this;
      return 1 === o && (s = i, i = function (e) {
        return b().off(e), s.apply(this, arguments)
      }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
        b.event.add(this, e, i, r, n)
      })
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this
      }
      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        b.event.remove(this, e, r, n)
      })
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }, trigger: function (e, t) {
      return this.each(function () {
        b.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, n) {
      var r = this[0];
      return r ? b.event.trigger(e, n, r, !0) : t
    }
  }), function (e, t) {
    var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0,
      C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice,
      M = D.indexOf || function (e) {
        var t = 0, n = this.length;
        for (; n > t; t++) if (this[t] === e) return t;
        return -1
      }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"),
      B = "([*^$|!~]?=)",
      P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
      R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
      W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"),
      I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
        ID: RegExp("^#(" + F + ")"),
        CLASS: RegExp("^\\.(" + F + ")"),
        NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
        TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
        ATTR: RegExp("^" + P),
        PSEUDO: RegExp("^" + R),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
        needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
      }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g,
      Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
      tt = function (e, t) {
        var n = "0x" + t - 65536;
        return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
      };
    try {
      q.call(w.documentElement.childNodes, 0)[0].nodeType
    } catch (nt) {
      q = function (e) {
        var t, n = [];
        while (t = this[e++]) n.push(t);
        return n
      }
    }

    function rt(e) {
      return Y.test(e + "")
    }

    function it() {
      var e, t = [];
      return e = function (n, r) {
        return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
      }
    }

    function ot(e) {
      return e[x] = !0, e
    }

    function at(e) {
      var t = p.createElement("div");
      try {
        return e(t)
      } catch (n) {
        return !1
      } finally {
        t = null
      }
    }

    function st(e, t, n, r) {
      var i, o, a, s, u, l, f, g, m, v;
      if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (!d && !r) {
        if (i = J.exec(e)) if (a = i[1]) {
          if (9 === s) {
            if (o = t.getElementById(a), !o || !o.parentNode) return n;
            if (o.id === a) return n.push(o), n
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
        } else {
          if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
          if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
        }
        if (T.qsa && !h.test(e)) {
          if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
            while (u--) l[u] = g + dt(l[u]);
            m = V.test(e) && t.parentNode || t, v = l.join(",")
          }
          if (v) try {
            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
          } catch (b) {
          } finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return wt(e.replace(W, "$1"), t, n, r)
    }

    a = st.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    }, c = st.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w;
      return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), T.attributes = at(function (e) {
        e.innerHTML = "<select></select>";
        var t = typeof e.lastChild.getAttribute("multiple");
        return "boolean" !== t && "string" !== t
      }), T.getByClassName = at(function (e) {
        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
      }), T.getByName = at(function (e) {
        e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
        var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
        return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
      }), i.attrHandle = at(function (e) {
        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
      }) ? {} : {
        href: function (e) {
          return e.getAttribute("href", 2)
        }, type: function (e) {
          return e.getAttribute("type")
        }
      }, T.getIdNotName ? (i.find.ID = function (e, t) {
        if (typeof t.getElementById !== A && !d) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(et, tt);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (i.find.ID = function (e, n) {
        if (typeof n.getElementById !== A && !d) {
          var r = n.getElementById(e);
          return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(et, tt);
        return function (e) {
          var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), i.find.TAG = T.tagNameNoComments ? function (e, n) {
        return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, i.find.NAME = T.getByName && function (e, n) {
        return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
      }, i.find.CLASS = T.getByClassName && function (e, n) {
        return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
      }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
      }), at(function (e) {
        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
      })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
        T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
      }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1
      }, v = f.compareDocumentPosition ? function (e, t) {
        var r;
        return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
      } : function (e, t) {
        var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
        if (e === t) return u = !0, 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
        if (o === a) return ut(e, t);
        r = e;
        while (r = r.parentNode) s.unshift(r);
        r = t;
        while (r = r.parentNode) l.unshift(r);
        while (s[i] === l[i]) i++;
        return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
      }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
    }, st.matches = function (e, t) {
      return st(e, null, null, t)
    }, st.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
        var n = m.call(e, t);
        if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (r) {
      }
      return st(t, p, null, [e]).length > 0
    }, st.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t)
    }, st.attr = function (e, t) {
      var n;
      return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
    }, st.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e)
    }, st.uniqueSort = function (e) {
      var t, n = [], r = 1, i = 0;
      if (u = !T.detectDuplicates, e.sort(v), u) {
        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
        while (i--) e.splice(n[i], 1)
      }
      return e
    };

    function ut(e, t) {
      var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1
    }

    function lt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function ct(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function pt(e) {
      return ot(function (t) {
        return t = +t, ot(function (n, r) {
          var i, o = e([], n.length, t), a = o.length;
          while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    o = st.getText = function (e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else for (; t = e[r]; r++) n += o(t);
      return n
    }, i = st.selectors = {
      cacheLength: 50,
      createPseudo: ot,
      match: U,
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[5] && e[2];
          return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          return "*" === e ? function () {
            return !0
          } : (e = e.replace(et, tt).toLowerCase(), function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e
          })
        }, CLASS: function (e) {
          var t = k[e + " "];
          return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
          })
        }, ATTR: function (e, t, n) {
          return function (r) {
            var i = st.attr(r, e);
            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
          }
        }, CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode
          } : function (t, n, u) {
            var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
              y = s && t.nodeName.toLowerCase(), v = !u && !s;
            if (m) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                  c[e] = [N, d, f];
                  break
                }
              } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
              return f -= i, f === r || 0 === f % r && f / r >= 0
            }
          }
        }, PSEUDO: function (e, t) {
          var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
          return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
            var i, o = r(e, t), a = o.length;
            while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
          }) : function (e) {
            return r(e, 0, n)
          }) : r
        }
      },
      pseudos: {
        not: ot(function (e) {
          var t = [], n = [], r = s(e.replace(W, "$1"));
          return r[x] ? ot(function (e, t, n, i) {
            var o, a = r(e, null, i, []), s = e.length;
            while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop()
          }
        }), has: ot(function (e) {
          return function (t) {
            return st(e, t).length > 0
          }
        }), contains: ot(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
          }
        }), lang: ot(function (e) {
          return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) {
            var n;
            do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === f
        }, focus: function (e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return e.disabled === !1
        }, disabled: function (e) {
          return e.disabled === !0
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0
        }, parent: function (e) {
          return !i.pseudos.empty(e)
        }, header: function (e) {
          return Q.test(e.nodeName)
        }, input: function (e) {
          return G.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first: pt(function () {
          return [0]
        }), last: pt(function (e, t) {
          return [t - 1]
        }), eq: pt(function (e, t, n) {
          return [0 > n ? n + t : n]
        }), even: pt(function (e, t) {
          var n = 0;
          for (; t > n; n += 2) e.push(n);
          return e
        }), odd: pt(function (e, t) {
          var n = 1;
          for (; t > n; n += 2) e.push(n);
          return e
        }), lt: pt(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; --r >= 0;) e.push(r);
          return e
        }), gt: pt(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; t > ++r;) e.push(r);
          return e
        })
      }
    };
    for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[n] = lt(n);
    for (n in { submit: !0, reset: !0 }) i.pseudos[n] = ct(n);

    function ft(e, t) {
      var n, r, o, a, s, u, l, c = E[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = i.preFilter;
      while (s) {
        (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(W, " ")
        }), s = s.slice(n.length));
        for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
          value: n,
          type: a,
          matches: r
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
    }

    function dt(e) {
      var t = 0, n = e.length, r = "";
      for (; n > t; t++) r += e[t].value;
      return r
    }

    function ht(e, t, n) {
      var i = t.dir, o = n && "parentNode" === i, a = C++;
      return t.first ? function (t, n, r) {
        while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r)
      } : function (t, n, s) {
        var u, l, c, p = N + " " + a;
        if (s) {
          while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
        } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
          if ((u = l[1]) === !0 || u === r) return u === !0
        } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
      }
    }

    function gt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function mt(e, t, n, r, i) {
      var o, a = [], s = 0, u = e.length, l = null != t;
      for (; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      return a
    }

    function yt(e, t, n, r, i, o) {
      return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
        var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []),
          m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
        if (n && n(m, y, s, u), r) {
          l = mt(y, d), r(l, [], s, u), c = l.length;
          while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;
              while (c--) (p = y[c]) && l.push(m[c] = p);
              i(null, y = [], l, u)
            }
            c = y.length;
            while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
          }
        } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
      })
    }

    function vt(e) {
      var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0,
        c = ht(function (e) {
          return e === t
        }, s, !0), p = ht(function (e) {
          return M.call(t, e) > -1
        }, s, !0), f = [function (e, n, r) {
          return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
        }];
      for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)]; else {
        if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
          for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break;
          return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
        }
        f.push(n)
      }
      return gt(f)
    }

    function bt(e, t) {
      var n = 0, o = t.length > 0, a = e.length > 0, s = function (s, u, c, f, d) {
        var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l,
          C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1;
        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
          if (a && h) {
            g = 0;
            while (m = e[g++]) if (m(h, u, c)) {
              f.push(h);
              break
            }
            w && (N = k, r = ++n)
          }
          o && ((h = !m && h) && v--, s && x.push(h))
        }
        if (v += b, o && b !== v) {
          g = 0;
          while (m = t[g++]) m(x, y, u, c);
          if (s) {
            if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f));
            y = mt(y)
          }
          H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
        }
        return w && (N = k, l = T), x
      };
      return o ? ot(s) : s
    }

    s = st.compile = function (e, t) {
      var n, r = [], i = [], o = S[e + " "];
      if (!o) {
        t || (t = ft(e)), n = t.length;
        while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
        o = S(e, bt(i, r))
      }
      return o
    };

    function xt(e, t, n) {
      var r = 0, i = t.length;
      for (; i > r; r++) st(e, t[r], n);
      return n
    }

    function wt(e, t, n, r) {
      var o, a, u, l, c, p = ft(e);
      if (!r && 1 === p.length) {
        if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
          if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
          e = e.slice(a.shift().value.length)
        }
        o = U.needsContext.test(e) ? 0 : a.length;
        while (o--) {
          if (u = a[o], i.relative[l = u.type]) break;
          if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
            if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
            break
          }
        }
      }
      return s(e, p)(r, t, d, n, V.test(e)), n
    }

    i.pseudos.nth = i.pseudos.eq;

    function Tt() {
    }

    i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
  }(e);
  var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext,
    ct = { children: !0, contents: !0, next: !0, prev: !0 };
  b.fn.extend({
    find: function (e) {
      var t, n, r, i = this.length;
      if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
        for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0
      }));
      for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
      return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
    }, has: function (e) {
      var t, n = b(e, this), r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0
      })
    }, not: function (e) {
      return this.pushStack(ft(this, e, !1))
    }, filter: function (e) {
      return this.pushStack(ft(this, e, !0))
    }, is: function (e) {
      return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
    }, closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
      for (; i > r; r++) {
        n = this[r];
        while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
          if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
            o.push(n);
            break
          }
          n = n.parentNode
        }
      }
      return this.pushStack(o.length > 1 ? b.unique(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n);
      return this.pushStack(b.unique(r))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), b.fn.andSelf = b.fn.addBack;

  function pt(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  b.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return b.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return b.dir(e, "parentNode", n)
    }, next: function (e) {
      return pt(e, "nextSibling")
    }, prev: function (e) {
      return pt(e, "previousSibling")
    }, nextAll: function (e) {
      return b.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return b.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return b.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return b.dir(e, "previousSibling", n)
    }, siblings: function (e) {
      return b.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return b.sibling(e.firstChild)
    }, contents: function (e) {
      return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
    }
  }, function (e, t) {
    b.fn[e] = function (n, r) {
      var i = b.map(this, t, n);
      return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
    }
  }), b.extend({
    filter: function (e, t, n) {
      return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
    }, dir: function (e, n, r) {
      var i = [], o = e[n];
      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
      return i
    }, sibling: function (e, t) {
      var n = [];
      for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });

  function ft(e, t, n) {
    if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
      var i = !!t.call(e, r, e);
      return i === n
    });
    if (t.nodeType) return b.grep(e, function (e) {
      return e === t === n
    });
    if ("string" == typeof t) {
      var r = b.grep(e, function (e) {
        return 1 === e.nodeType
      });
      if (ut.test(t)) return b.filter(t, r, !n);
      t = b.filter(t, r)
    }
    return b.grep(e, function (e) {
      return b.inArray(e, t) >= 0 === n
    })
  }

  function dt(e) {
    var t = ht.split("|"), n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n
  }

  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/,
    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i,
    wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i,
    Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, jt = dt(o), Dt = jt.appendChild(o.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
    text: function (e) {
      return b.access(this, function (e) {
        return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
      }, null, e, arguments.length)
    }, wrapAll: function (e) {
      if (b.isFunction(e)) return this.each(function (t) {
        b(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;
          while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    }, wrapInner: function (e) {
      return b.isFunction(e) ? this.each(function (t) {
        b(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = b(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = b.isFunction(e);
      return this.each(function (n) {
        b(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
      }).end()
    }, append: function () {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
      })
    }, prepend: function () {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
      })
    }, before: function () {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, remove: function (e, t) {
      var n, r = 0;
      for (; null != (n = this[r]); r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
      return this
    }, empty: function () {
      var e, t = 0;
      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && b.cleanData(Ot(e, !1));
        while (e.firstChild) e.removeChild(e.firstChild);
        e.options && b.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    }, clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return b.clone(this, e, t)
      })
    }, html: function (e) {
      return b.access(this, function (e) {
        var n = this[0] || {}, r = 0, i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
        if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");
          try {
            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
            n = 0
          } catch (o) {
          }
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function (e) {
      var t = b.isFunction(e);
      return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
        var t = this.nextSibling, n = this.parentNode;
        n && (b(this).remove(), n.insertBefore(e, t))
      })
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (e, n, r) {
      e = f.apply([], e);
      var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
      if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
        var o = d.eq(i);
        m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
      });
      if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
        for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
        if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
          url: o.src,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
        }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
        l = i = null
      }
      return this
    }
  });

  function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
  }

  function Ht(e) {
    var t = e.getAttributeNode("type");
    return e.type = (t && t.specified) + "/" + e.type, e
  }

  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function Mt(e, t) {
    var n, r = 0;
    for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
  }

  function _t(e, t) {
    if (1 === t.nodeType && b.hasData(e)) {
      var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
      }
      a.data && (a.data = b.extend({}, a.data))
    }
  }

  function Ft(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
        i = b._data(t);
        for (r in i.events) b.removeEvent(t, r, i.handle);
        t.removeAttribute(b.expando)
      }
      "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }

  b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    b.fn[e] = function (e) {
      var n, r = 0, i = [], o = b(e), a = o.length - 1;
      for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
      return this.pushStack(i)
    }
  });

  function Ot(e, n) {
    var r, o, a = 0,
      s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
    if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
    return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
  }

  function Bt(e) {
    Nt.test(e.type) && (e.defaultChecked = e.checked)
  }

  b.extend({
    clone: function (e, t, n) {
      var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
      if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
      if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]); else _t(e, o);
      return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
    }, buildFragment: function (e, t, n, r) {
      var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
      for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
        s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
        while (i--) s = s.lastChild;
        if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
          o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
          while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
        }
        b.merge(d, s.childNodes), s.textContent = "";
        while (s.firstChild) s.removeChild(s.firstChild);
        s = f.lastChild
      } else d.push(t.createTextNode(o));
      s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
      while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
        i = 0;
        while (o = s[i++]) kt.test(o.type || "") && n.push(o)
      }
      return s = null, f
    }, cleanData: function (e, t) {
      var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
      for (; null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
        if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
        l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
      }
    }
  });
  var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"),
    Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = { BODY: "block" },
    Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 },
    Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
    while (i--) if (t = en[i] + n, t in e) return t;
    return r
  }

  function nn(e, t) {
    return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
  }

  function rn(e, t) {
    var n, r, i, o = [], a = 0, s = e.length;
    for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
    for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    return e
  }

  b.fn.extend({
    css: function (e, n) {
      return b.access(this, function (e, n, r) {
        var i, o, a = {}, s = 0;
        if (b.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
          return a
        }
        return r !== t ? b.style(e, n, r) : b.css(e, n)
      }, e, n, arguments.length > 1)
    }, show: function () {
      return rn(this, !0)
    }, hide: function () {
      return rn(this)
    }, toggle: function (e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : nn(this)) ? b(this).show() : b(this).hide()
      })
    }
  }), b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Wt(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { "float": b.support.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, a, s, u = b.camelCase(n), l = e.style;
        if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
        if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          l[n] = r
        } catch (c) {
        }
      }
    },
    css: function (e, n, r, i) {
      var o, a, s, u = b.camelCase(n);
      return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
    },
    swap: function (e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i
    }
  }), e.getComputedStyle ? (Rt = function (t) {
    return e.getComputedStyle(t, null)
  }, Wt = function (e, n, r) {
    var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
    return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
  }) : o.documentElement.currentStyle && (Rt = function (e) {
    return e.currentStyle
  }, Wt = function (e, n, r) {
    var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style;
    return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
  });

  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
    for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
    return a
  }

  function sn(e, t, n) {
    var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e),
      a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
  }

  function un(e) {
    var t = o, n = Gt[e];
    return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
  }

  function ln(e, t) {
    var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
    return n.remove(), r
  }

  b.each(["height", "width"], function (e, n) {
    b.cssHooks[n] = {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
          return sn(e, n, i)
        }) : sn(e, n, i) : t
      }, set: function (e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), b.support.opacity || (b.cssHooks.opacity = {
    get: function (e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
      var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
    }
  }), b(function () {
    b.support.reliableMarginRight || (b.cssHooks.marginRight = {
      get: function (e, n) {
        return n ? b.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t
      }
    }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
      b.cssHooks[n] = {
        get: function (e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
        }
      }
    })
  }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
  }, b.expr.filters.visible = function (e) {
    return !b.expr.filters.hidden(e)
  }), b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    b.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
        for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, Ut.test(e) || (b.cssHooks[e + t].set = on)
  });
  var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i,
    hn = /^(?:input|select|textarea|keygen)/i;
  b.fn.extend({
    serialize: function () {
      return b.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = b.prop(this, "elements");
        return e ? b.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
      }).map(function (e, t) {
        var n = b(this).val();
        return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
          return { name: t.name, value: e.replace(fn, "\r\n") }
        }) : { name: t.name, value: n.replace(fn, "\r\n") }
      }).get()
    }
  }), b.param = function (e, n) {
    var r, i = [], o = function (e, t) {
      t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
      o(this.name, this.value)
    }); else for (r in e) gn(r, e[r], n, o);
    return i.join("&").replace(cn, "+")
  };

  function gn(e, t, n, r) {
    var i;
    if (b.isArray(t)) b.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
  }

  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    b.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), b.fn.hover = function (e, t) {
    return this.mouseenter(e).mouseleave(t || e)
  };
  var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//,
    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
  try {
    yn = a.href
  } catch (Ln) {
    yn = o.createElement("a"), yn.href = "", yn = yn.href
  }
  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0, o = t.toLowerCase().match(w) || [];
      if (b.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function qn(e, n, r, i) {
    var o = {}, a = e === jn;

    function s(u) {
      var l;
      return o[u] = !0, b.each(e[u] || [], function (e, u) {
        var c = u(n, r, i);
        return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
      }), l
    }

    return s(n.dataTypes[0]) || !o["*"] && s("*")
  }

  function Mn(e, n) {
    var r, i, o = b.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && b.extend(!0, e, r), e
  }

  b.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i, o, a, s = this, u = e.indexOf(" ");
    return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function (e) {
      o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e])
    }), this
  }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    b.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), b.each(["get", "post"], function (e, n) {
    b[n] = function (e, r, i, o) {
      return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      })
    }
  }), b.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: "GET",
      isLocal: Nn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: { xml: "responseXML", text: "responseText" },
      converters: { "* text": e.String, "text html": !0, "text json": b.parseJSON, "text xml": b.parseXML },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function (e, t) {
      return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function (e, n) {
      "object" == typeof e && (n = e, e = t), n = n || {};
      var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p,
        d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"),
        m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!c) {
                c = {};
                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
              }
              t = c[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return 2 === x ? a : null
          }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || (e = v[n] = v[n] || e, y[e] = t), this
          }, overrideMimeType: function (e) {
            return x || (p.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]);
            return this
          }, abort: function (e) {
            var t = e || T;
            return l && l.abort(t), k(0, t), this
          }
        };
      if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
      u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
      for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
      if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
      T = "abort";
      for (i in { success: 1, error: 1, complete: 1 }) N[i](p[i]);
      if (l = qn(jn, p, n, N)) {
        N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          N.abort("timeout")
        }, p.timeout));
        try {
          x = 1, l.send(y, k)
        } catch (C) {
          if (!(2 > x)) throw C;
          k(-1, C)
        }
      } else k(-1, "No Transport");

      function k(e, n, r, i) {
        var c, y, v, w, T, C = n;
        2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
      }

      return N
    },
    getScript: function (e, n) {
      return b.get(e, t, n, "script")
    },
    getJSON: function (e, t, n) {
      return b.get(e, t, n, "json")
    }
  });

  function _n(e, n, r) {
    var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
    for (s in c) s in r && (n[c[s]] = r[s]);
    while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    if (o) for (s in u) if (u[s] && u[s].test(o)) {
      l.unshift(s);
      break
    }
    if (l[0] in r) a = l[0]; else {
      for (s in r) {
        if (!l[0] || e.converters[s + " " + l[0]]) {
          a = s;
          break
        }
        i || (i = s)
      }
      a = a || i
    }
    return a ? (a !== l[0] && l.unshift(a), r[a]) : t
  }

  function Fn(e, t) {
    var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
    for (; r = u[++s];) if ("*" !== r) {
      if ("*" !== l && l !== r) {
        if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
          i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
          break
        }
        if (i !== !0) if (i && e["throws"]) t = i(t); else try {
          t = i(t)
        } catch (c) {
          return { state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r }
        }
      }
      l = r
    }
    return { state: "success", data: t }
  }

  b.ajaxSetup({
    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (e) {
        return b.globalEval(e), e
      }
    }
  }), b.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), b.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n, r = o.head || b("head")[0] || o.documentElement;
      return {
        send: function (t, i) {
          n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
          }, r.insertBefore(n, r.firstChild)
        }, abort: function () {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var On = [], Bn = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = On.pop() || b.expando + "_" + vn++;
      return this[e] = !0, e
    }
  }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o, a, s,
      u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
    return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || b.error(o + " was not called"), s[0]
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
    }), "script") : t
  });
  var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
    var e;
    for (e in Pn) Pn[e](t, !0)
  };

  function In() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {
    }
  }

  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {
    }
  }

  b.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn()
  } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) {
    if (!n.crossDomain || b.support.cors) {
      var r;
      return {
        send: function (i, o) {
          var a, s, u = n.xhr();
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (s in i) u.setRequestHeader(s, i[s])
          } catch (l) {
          }
          u.send(n.hasContent && n.data || null), r = function (e, i) {
            var s, l, c, p;
            try {
              if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else {
                p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                try {
                  c = u.statusText
                } catch (f) {
                  c = ""
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
              }
            } catch (d) {
              i || o(-1, d)
            }
            p && o(s, c, p, l)
          }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
        }, abort: function () {
          r && r(t, !0)
        }
      }
    }
  });
  var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/,
    Gn = [nr], Qn = {
      "*": [function (e, t) {
        var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
        if (o) {
          if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
            s = b.css(i.elem, e, !0) || n || 1;
            do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
          }
          i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
        }
        return i
      }]
    };

  function Kn() {
    return setTimeout(function () {
      Xn = t
    }), Xn = b.now()
  }

  function Zn(e, t) {
    b.each(t, function (t, n) {
      var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length;
      for (; o > i; i++) if (r[i].call(e, t, n)) return
    })
  }

  function er(e, t, n) {
    var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function () {
      delete u.elem
    }), u = function () {
      if (i) return !1;
      var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0,
        u = l.tweens.length;
      for (; u > a; a++) l.tweens[a].run(o);
      return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
    }, l = s.promise({
      elem: e,
      props: b.extend({}, t),
      opts: b.extend(!0, { specialEasing: {} }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Xn || Kn(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r
      },
      stop: function (t) {
        var n = 0, r = t ? l.tweens.length : 0;
        if (i) return this;
        for (i = !0; r > n; n++) l.tweens[n].run(1);
        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
      }
    }), c = l.props;
    for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r;
    return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function tr(e, t) {
    var n, r, i, o, a;
    for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
      n = a.expand(n), delete e[r];
      for (i in n) i in e || (e[i] = n[i], t[i] = o)
    } else t[r] = o
  }

  b.Animation = b.extend(er, {
    tweener: function (e, t) {
      b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n, r = 0, i = e.length;
      for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
    }, prefilter: function (e, t) {
      t ? Gn.unshift(e) : Gn.push(e)
    }
  });

  function nr(e, t, n) {
    var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
    n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
      c.unqueued || p()
    }), c.unqueued++, f.always(function () {
      f.always(function () {
        c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
    }));
    for (i in t) if (a = t[i], Vn.exec(a)) {
      if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
      g.push(i)
    }
    if (o = g.length) {
      s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
        b(e).hide()
      }), f.done(function () {
        var t;
        b._removeData(e, "fxshow");
        for (t in h) b.style(e, t, h[t])
      });
      for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i)
  }

  b.Tween = rr, rr.prototype = {
    constructor: rr, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      }, set: function (e) {
        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, b.each(["toggle", "show", "hide"], function (e, t) {
    var n = b.fn[t];
    b.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
    }
  }), b.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r)
    }, animate: function (e, t, n, r) {
      var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function () {
        var t = er(this, b.extend({}, e), o);
        a.finish = function () {
          t.stop(!0)
        }, (i || b._data(this, "finish")) && t.stop(!0)
      };
      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    }, stop: function (e, n, r) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(r)
      };
      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this);
        if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        (t || !r) && b.dequeue(this, e)
      })
    }, finish: function (e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
        for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  });

  function ir(e, t) {
    var n, r = { height: e }, i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  b.each({
    slideDown: ir("show"),
    slideUp: ir("hide"),
    slideToggle: ir("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function (e, t) {
    b.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), b.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? b.extend({}, e) : {
      complete: n || !n && t || b.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !b.isFunction(t) && t
    };
    return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
    }, r
  }, b.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
    var e, n = b.timers, r = 0;
    for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    n.length || b.fx.stop(), Xn = t
  }, b.fx.timer = function (e) {
    e() && b.timers.push(e) && b.fx.start()
  }, b.fx.interval = 13, b.fx.start = function () {
    Un || (Un = setInterval(b.fx.tick, b.fx.interval))
  }, b.fx.stop = function () {
    clearInterval(Un), Un = null
  }, b.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
    return b.grep(b.timers, function (t) {
      return e === t.elem
    }).length
  }), b.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      b.offset.setOffset(this, e, t)
    });
    var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument;
    if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o
  }, b.offset = {
    setOffset: function (e, t, n) {
      var r = b.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"),
        u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f;
      u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
    }
  }, b.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = { top: 0, left: 0 }, r = this[0];
        return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - b.css(r, "marginTop", !0),
          left: t.left - n.left - b.css(r, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent || o.documentElement;
        while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
        return e || o.documentElement
      })
    }
  }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
    var r = /Y/.test(n);
    b.fn[e] = function (i) {
      return b.access(this, function (e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
      }, e, i, arguments.length, null)
    }
  });

  function or(e) {
    return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }

  b.each({ Height: "height", Width: "width" }, function (e, n) {
    b.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) {
      b.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
        return b.access(this, function (n, r, i) {
          var o;
          return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
        }, n, a ? i : t, a, null)
      }
    })
  }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
    return b
  })
})(window);
var swfobject = function () {
  var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
    q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document,
    t = navigator, T = !1, U = [h], o = [], N = [], I = [], l, Q, E, B, J = !1, a = !1, n, G, m = !0, M = function () {
      var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah),
        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, X = !+"\v1",
        ag = [0, 0, 0], ab = null;
      if (typeof t.plugins != D && typeof t.plugins[S] == r) {
        ab = t.plugins[S].description;
        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
          T = !0;
          X = !1;
          ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
          ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
          ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
          ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
        }
      } else {
        if (typeof O.ActiveXObject != D) {
          try {
            var ad = new ActiveXObject(W);
            if (ad) {
              ab = ad.GetVariable("$version");
              if (ab) {
                X = !0;
                ab = ab.split(" ")[1].split(",");
                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
              }
            }
          } catch (Z) {
          }
        }
      }
      return { w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac }
    }(), k = function () {
      if (!M.w3) {
        return
      }
      if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
        f()
      }
      if (!J) {
        if (typeof j.addEventListener != D) {
          j.addEventListener("DOMContentLoaded", f, !1)
        }
        if (M.ie && M.win) {
          j.attachEvent(x, function () {
            if (j.readyState == "complete") {
              j.detachEvent(x, arguments.callee);
              f()
            }
          });
          if (O == top) {
            (function () {
              if (J) {
                return
              }
              try {
                j.documentElement.doScroll("left")
              } catch (X) {
                setTimeout(arguments.callee, 0);
                return
              }
              f()
            })()
          }
        }
        if (M.wk) {
          (function () {
            if (J) {
              return
            }
            if (!/loaded|complete/.test(j.readyState)) {
              setTimeout(arguments.callee, 0);
              return
            }
            f()
          })()
        }
        s(f)
      }
    }();

  function f() {
    if (J) {
      return
    }
    try {
      var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
      Z.parentNode.removeChild(Z)
    } catch (aa) {
      return
    }
    J = !0;
    var X = U.length;
    for (var Y = 0; Y < X; Y++) {
      U[Y]()
    }
  }

  function K(X) {
    if (J) {
      X()
    } else {
      U[U.length] = X
    }
  }

  function s(Y) {
    if (typeof O.addEventListener != D) {
      O.addEventListener("load", Y, !1)
    } else {
      if (typeof j.addEventListener != D) {
        j.addEventListener("load", Y, !1)
      } else {
        if (typeof O.attachEvent != D) {
          i(O, "onload", Y)
        } else {
          if (typeof O.onload == "function") {
            var X = O.onload;
            O.onload = function () {
              X();
              Y()
            }
          } else {
            O.onload = Y
          }
        }
      }
    }
  }

  function h() {
    if (T) {
      V()
    } else {
      H()
    }
  }

  function V() {
    var X = j.getElementsByTagName("body")[0];
    var aa = C(r);
    aa.setAttribute("type", q);
    var Z = X.appendChild(aa);
    if (Z) {
      var Y = 0;
      (function () {
        if (typeof Z.GetVariable != D) {
          var ab = Z.GetVariable("$version");
          if (ab) {
            ab = ab.split(" ")[1].split(",");
            M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
          }
        } else {
          if (Y < 10) {
            Y++;
            setTimeout(arguments.callee, 10);
            return
          }
        }
        X.removeChild(aa);
        Z = null;
        H()
      })()
    } else {
      H()
    }
  }

  function H() {
    var ag = o.length;
    if (ag > 0) {
      for (var af = 0; af < ag; af++) {
        var Y = o[af].id;
        var ab = o[af].callbackFn;
        var aa = { success: !1, id: Y };
        if (M.pv[0] > 0) {
          var ae = c(Y);
          if (ae) {
            if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
              w(Y, !0);
              if (ab) {
                aa.success = !0;
                aa.ref = z(Y);
                ab(aa)
              }
            } else {
              if (o[af].expressInstall && A()) {
                var ai = {};
                ai.data = o[af].expressInstall;
                ai.width = ae.getAttribute("width") || "0";
                ai.height = ae.getAttribute("height") || "0";
                if (ae.getAttribute("class")) {
                  ai.styleclass = ae.getAttribute("class")
                }
                if (ae.getAttribute("align")) {
                  ai.align = ae.getAttribute("align")
                }
                var ah = {};
                var X = ae.getElementsByTagName("param");
                var ac = X.length;
                for (var ad = 0; ad < ac; ad++) {
                  if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                    ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                  }
                }
                P(ai, ah, Y, ab)
              } else {
                p(ae);
                if (ab) {
                  ab(aa)
                }
              }
            }
          }
        } else {
          w(Y, !0);
          if (ab) {
            var Z = z(Y);
            if (Z && typeof Z.SetVariable != D) {
              aa.success = !0;
              aa.ref = Z
            }
            ab(aa)
          }
        }
      }
    }
  }

  function z(aa) {
    var X = null;
    var Y = c(aa);
    if (Y && Y.nodeName == "OBJECT") {
      if (typeof Y.SetVariable != D) {
        X = Y
      } else {
        var Z = Y.getElementsByTagName(r)[0];
        if (Z) {
          X = Z
        }
      }
    }
    return X
  }

  function A() {
    return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
  }

  function P(aa, ab, X, Z) {
    a = !0;
    E = Z || null;
    B = { success: !1, id: X };
    var ae = c(X);
    if (ae) {
      if (ae.nodeName == "OBJECT") {
        l = g(ae);
        Q = null
      } else {
        l = ae;
        Q = X
      }
      aa.id = R;
      if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
        aa.width = "310"
      }
      if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
        aa.height = "137"
      }
      j.title = j.title.slice(0, 47) + " - Flash Player Installation";
      var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
      if (typeof ab.flashvars != D) {
        ab.flashvars += "&" + ac
      } else {
        ab.flashvars = ac
      }
      if (M.ie && M.win && ae.readyState != 4) {
        var Y = C("div");
        X += "SWFObjectNew";
        Y.setAttribute("id", X);
        ae.parentNode.insertBefore(Y, ae);
        ae.style.display = "none";
        (function () {
          if (ae.readyState == 4) {
            ae.parentNode.removeChild(ae)
          } else {
            setTimeout(arguments.callee, 10)
          }
        })()
      }
      u(aa, ab, X)
    }
  }

  function p(Y) {
    if (M.ie && M.win && Y.readyState != 4) {
      var X = C("div");
      Y.parentNode.insertBefore(X, Y);
      X.parentNode.replaceChild(g(Y), X);
      Y.style.display = "none";
      (function () {
        if (Y.readyState == 4) {
          Y.parentNode.removeChild(Y)
        } else {
          setTimeout(arguments.callee, 10)
        }
      })()
    } else {
      Y.parentNode.replaceChild(g(Y), Y)
    }
  }

  function g(ab) {
    var aa = C("div");
    if (M.win && M.ie) {
      aa.innerHTML = ab.innerHTML
    } else {
      var Y = ab.getElementsByTagName(r)[0];
      if (Y) {
        var ad = Y.childNodes;
        if (ad) {
          var X = ad.length;
          for (var Z = 0; Z < X; Z++) {
            if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
              aa.appendChild(ad[Z].cloneNode(!0))
            }
          }
        }
      }
    }
    return aa
  }

  function u(ai, ag, Y) {
    var X, aa = c(Y);
    if (M.wk && M.wk < 312) {
      return X
    }
    if (aa) {
      if (typeof ai.id == D) {
        ai.id = Y
      }
      if (M.ie && M.win) {
        var ah = "";
        for (var ae in ai) {
          if (ai[ae] != Object.prototype[ae]) {
            if (ae.toLowerCase() == "data") {
              ag.movie = ai[ae]
            } else {
              if (ae.toLowerCase() == "styleclass") {
                ah += " class=\"" + ai[ae] + "\""
              } else {
                if (ae.toLowerCase() != "classid") {
                  ah += " " + ae + "=\"" + ai[ae] + "\""
                }
              }
            }
          }
        }
        var af = "";
        for (var ad in ag) {
          if (ag[ad] != Object.prototype[ad]) {
            af += "<param name=\"" + ad + "\" value=\"" + ag[ad] + "\" />"
          }
        }
        aa.outerHTML = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"" + ah + ">" + af + "</object>";
        N[N.length] = ai.id;
        X = c(ai.id)
      } else {
        var Z = C(r);
        Z.setAttribute("type", q);
        for (var ac in ai) {
          if (ai[ac] != Object.prototype[ac]) {
            if (ac.toLowerCase() == "styleclass") {
              Z.setAttribute("class", ai[ac])
            } else {
              if (ac.toLowerCase() != "classid") {
                Z.setAttribute(ac, ai[ac])
              }
            }
          }
        }
        for (var ab in ag) {
          if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
            e(Z, ab, ag[ab])
          }
        }
        aa.parentNode.replaceChild(Z, aa);
        X = Z
      }
    }
    return X
  }

  function e(Z, X, Y) {
    var aa = C("param");
    aa.setAttribute("name", X);
    aa.setAttribute("value", Y);
    Z.appendChild(aa)
  }

  function y(Y) {
    var X = c(Y);
    if (X && X.nodeName == "OBJECT") {
      if (M.ie && M.win) {
        X.style.display = "none";
        (function () {
          if (X.readyState == 4) {
            b(Y)
          } else {
            setTimeout(arguments.callee, 10)
          }
        })()
      } else {
        X.parentNode.removeChild(X)
      }
    }
  }

  function b(Z) {
    var Y = c(Z);
    if (Y) {
      for (var X in Y) {
        if (typeof Y[X] == "function") {
          Y[X] = null
        }
      }
      Y.parentNode.removeChild(Y)
    }
  }

  function c(Z) {
    var X = null;
    try {
      X = j.getElementById(Z)
    } catch (Y) {
    }
    return X
  }

  function C(X) {
    return j.createElement(X)
  }

  function i(Z, X, Y) {
    Z.attachEvent(X, Y);
    I[I.length] = [Z, X, Y]
  }

  function F(Z) {
    var Y = M.pv, X = Z.split(".");
    X[0] = parseInt(X[0], 10);
    X[1] = parseInt(X[1], 10) || 0;
    X[2] = parseInt(X[2], 10) || 0;
    return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : !1
  }

  function v(ac, Y, ad, ab) {
    if (M.ie && M.mac) {
      return
    }
    var aa = j.getElementsByTagName("head")[0];
    if (!aa) {
      return
    }
    var X = (ad && typeof ad == "string") ? ad : "screen";
    if (ab) {
      n = null;
      G = null
    }
    if (!n || G != X) {
      var Z = C("style");
      Z.setAttribute("type", "text/css");
      Z.setAttribute("media", X);
      n = aa.appendChild(Z);
      if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
        n = j.styleSheets[j.styleSheets.length - 1]
      }
      G = X
    }
    if (M.ie && M.win) {
      if (n && typeof n.addRule == r) {
        n.addRule(ac, Y)
      }
    } else {
      if (n && typeof j.createTextNode != D) {
        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
      }
    }
  }

  function w(Z, X) {
    if (!m) {
      return
    }
    var Y = X ? "visible" : "hidden";
    if (J && c(Z)) {
      c(Z).style.visibility = Y
    } else {
      v("#" + Z, "visibility:" + Y)
    }
  }

  function L(Y) {
    var Z = /[\\\"<>\.;]/;
    var X = Z.exec(Y) != null;
    return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
  }

  var d = function () {
    if (M.ie && M.win) {
      window.attachEvent("onunload", function () {
        var ac = I.length;
        for (var ab = 0; ab < ac; ab++) {
          I[ab][0].detachEvent(I[ab][1], I[ab][2])
        }
        var Z = N.length;
        for (var aa = 0; aa < Z; aa++) {
          y(N[aa])
        }
        for (var Y in M) {
          M[Y] = null
        }
        M = null;
        for (var X in swfobject) {
          swfobject[X] = null
        }
        swfobject = null
      })
    }
  }();
  return {
    registerObject: function (ab, X, aa, Z) {
      if (M.w3 && ab && X) {
        var Y = {};
        Y.id = ab;
        Y.swfVersion = X;
        Y.expressInstall = aa;
        Y.callbackFn = Z;
        o[o.length] = Y;
        w(ab, !1)
      } else {
        if (Z) {
          Z({ success: !1, id: ab })
        }
      }
    }, getObjectById: function (X) {
      if (M.w3) {
        return z(X)
      }
    }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
      var X = { success: !1, id: ah };
      if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
        w(ah, !1);
        K(function () {
          ae += "";
          ag += "";
          var aj = {};
          if (af && typeof af === r) {
            for (var al in af) {
              aj[al] = af[al]
            }
          }
          aj.data = ab;
          aj.width = ae;
          aj.height = ag;
          var am = {};
          if (ad && typeof ad === r) {
            for (var ak in ad) {
              am[ak] = ad[ak]
            }
          }
          if (Z && typeof Z === r) {
            for (var ai in Z) {
              if (typeof am.flashvars != D) {
                am.flashvars += "&" + ai + "=" + Z[ai]
              } else {
                am.flashvars = ai + "=" + Z[ai]
              }
            }
          }
          if (F(Y)) {
            var an = u(aj, am, ah);
            if (aj.id == ah) {
              w(ah, !0)
            }
            X.success = !0;
            X.ref = an
          } else {
            if (aa && A()) {
              aj.data = aa;
              P(aj, am, ah, ac);
              return
            } else {
              w(ah, !0)
            }
          }
          if (ac) {
            ac(X)
          }
        })
      } else {
        if (ac) {
          ac(X)
        }
      }
    }, switchOffAutoHideShow: function () {
      m = !1
    }, ua: M, getFlashPlayerVersion: function () {
      return { major: M.pv[0], minor: M.pv[1], release: M.pv[2] }
    }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
      if (M.w3) {
        return u(Z, Y, X)
      } else {
        return undefined
      }
    }, showExpressInstall: function (Z, aa, X, Y) {
      if (M.w3 && A()) {
        P(Z, aa, X, Y)
      }
    }, removeSWF: function (X) {
      if (M.w3) {
        y(X)
      }
    }, createCSS: function (aa, Z, Y, X) {
      if (M.w3) {
        v(aa, Z, Y, X)
      }
    }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
      var Z = j.location.search || j.location.hash;
      if (Z) {
        if (/\?/.test(Z)) {
          Z = Z.split("?")[1]
        }
        if (aa == null) {
          return L(Z)
        }
        var Y = Z.split("&");
        for (var X = 0; X < Y.length; X++) {
          if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
            return L(Y[X].substring((Y[X].indexOf("=") + 1)))
          }
        }
      }
      return ""
    }, expressInstallCallback: function () {
      if (a) {
        var X = c(R);
        if (X && l) {
          X.parentNode.replaceChild(l, X);
          if (Q) {
            w(Q, !0);
            if (M.ie && M.win) {
              l.style.display = "block"
            }
          }
          if (E) {
            E(B)
          }
        }
        a = !1
      }
    }
  }
}();
window.define || (window.define = function (c) {
  try {
    delete window.define
  } catch (g) {
    window.define = void 0
  }
  window.when = c()
}, window.define.amd = {});
(function (c) {
  c || (c = window.console = {
    log: function (c, a, b, d, h) {
    }, info: function (c, a, b, d, h) {
    }, warn: function (c, a, b, d, h) {
    }, error: function (c, a, b, d, h) {
    }
  });
  Function.prototype.bind || (Function.prototype.bind = function (c) {
    var a = this, b = Array.prototype.slice.call(arguments, 1);
    return function () {
      return a.apply(c, Array.prototype.concat.apply(b, arguments))
    }
  });
  "object" === typeof c.log && (c.log = Function.prototype.call.bind(c.log, c), c.info = Function.prototype.call.bind(c.info, c), c.warn = Function.prototype.call.bind(c.warn, c), c.error = Function.prototype.call.bind(c.error, c));
  "group" in c || (c.group = function (g) {
    c.info("\n--- " + g + " ---\n")
  });
  "groupEnd" in c || (c.groupEnd = function () {
    c.log("\n")
  });
  "time" in c || function () {
    var g = {};
    c.time = function (a) {
      g[a] = (new Date).getTime()
    };
    c.timeEnd = function (a) {
      var b = (new Date).getTime();
      c.info(a + ": " + (a in g ? b - g[a] : 0) + "ms")
    }
  }()
})(window.console);
(function (c) {
  c(function (c) {
    function a(a, b, e, c) {
      return (a instanceof d ? a : h(a)).then(b, e, c)
    }

    function b(a) {
      return new d(a, B.PromiseStatus && B.PromiseStatus())
    }

    function d(a, b) {
      function d(a) {
        if (m) {
          var c = m;
          m = w;
          p(function () {
            q = e(l, a);
            b && A(q, b);
            f(c, q)
          })
        }
      }

      function c(a) {
        d(new k(a))
      }

      function h(a) {
        if (m) {
          var b = m;
          p(function () {
            f(b, new z(a))
          })
        }
      }

      var l, q, m = [];
      l = this;
      this._status = b;
      this.inspect = function () {
        return q ? q.inspect() : { state: "pending" }
      };
      this._when = function (a, b, e, d, c) {
        function f(h) {
          h._when(a, b, e, d, c)
        }

        m ? m.push(f) : p(function () {
          f(q)
        })
      };
      try {
        a(d, c, h)
      } catch (n) {
        c(n)
      }
    }

    function h(a) {
      return b(function (b) {
        b(a)
      })
    }

    function f(a, b) {
      for (var e = 0; e < a.length; e++) a[e](b)
    }

    function e(a, b) {
      if (b === a) return new k(new TypeError);
      if (b instanceof d) return b;
      try {
        var e = b === Object(b) && b.then;
        return "function" === typeof e ? l(e, b) : new t(b)
      } catch (c) {
        return new k(c)
      }
    }

    function l(a, e) {
      return b(function (b, d) {
        G(a, e, b, d)
      })
    }

    function t(a) {
      this.value = a
    }

    function k(a) {
      this.value = a
    }

    function z(a) {
      this.value = a
    }

    function A(a, b) {
      a.then(function () {
        b.fulfilled()
      }, function (a) {
        b.rejected(a)
      })
    }

    function q(a) {
      return a && "function" === typeof a.then
    }

    function m(e, d, c, f, h) {
      return a(e, function (e) {
        return b(function (b, c, f) {
          function h(a) {
            n(a)
          }

          function A(a) {
            k(a)
          }

          var l, q, D, m, k, n, t, g;
          t = e.length >>> 0;
          l = Math.max(0, Math.min(d, t));
          D = [];
          q = t - l + 1;
          m = [];
          if (l) {
            n = function (a) {
              m.push(a);
              --q || (k = n = s, c(m))
            };
            k = function (a) {
              D.push(a);
              --l || (k = n = s, b(D))
            };
            for (g = 0; g < t; ++g) g in e && a(e[g], A, h, f)
          } else b(D)
        }).then(c, f, h)
      })
    }

    function n(a, b, e, d) {
      return u(a, s).then(b, e, d)
    }

    function u(b, e, c) {
      return a(b, function (b) {
        return new d(function (d, f, h) {
          function A(b, q) {
            a(b, e, c).then(function (a) {
              l[q] = a;
              --k || d(l)
            }, f, h)
          }

          var l, q, k, m;
          k = q = b.length >>> 0;
          l = [];
          if (k) for (m = 0; m < q; m++) m in b ? A(b[m], m) : --k; else d(l)
        })
      })
    }

    function y(a) {
      return { state: "fulfilled", value: a }
    }

    function x(a) {
      return { state: "rejected", reason: a }
    }

    function p(a) {
      1 === E.push(a) && C(v)
    }

    function v() {
      f(E);
      E = []
    }

    function s(a) {
      return a
    }

    function K(a) {
      "function" === typeof B.reportUnhandled ? B.reportUnhandled() : p(function () {
        throw a
      });
      throw a
    }

    a.promise = b;
    a.resolve = h;
    a.reject = function (b) {
      return a(b, function (a) {
        return new k(a)
      })
    };
    a.defer = function () {
      var a, e, d;
      a = { promise: w, resolve: w, reject: w, notify: w, resolver: { resolve: w, reject: w, notify: w } };
      a.promise = e = b(function (b, c, f) {
        a.resolve = a.resolver.resolve = function (a) {
          if (d) return h(a);
          d = !0;
          b(a);
          return e
        };
        a.reject = a.resolver.reject = function (a) {
          if (d) return h(new k(a));
          d = !0;
          c(a);
          return e
        };
        a.notify = a.resolver.notify = function (a) {
          f(a);
          return a
        }
      });
      return a
    };
    a.join = function () {
      return u(arguments, s)
    };
    a.all = n;
    a.map = function (a, b) {
      return u(a, b)
    };
    a.reduce = function (b, e) {
      var d = G(H, arguments, 1);
      return a(b, function (b) {
        var c;
        c = b.length;
        d[0] = function (b, d, f) {
          return a(b, function (b) {
            return a(d, function (a) {
              return e(b, a, f, c)
            })
          })
        };
        return I.apply(b, d)
      })
    };
    a.settle = function (a) {
      return u(a, y, x)
    };
    a.any = function (a, b, e, d) {
      return m(a, 1, function (a) {
        return b ? b(a[0]) : a[0]
      }, e, d)
    };
    a.some = m;
    a.isPromise = q;
    a.isPromiseLike = q;
    r = d.prototype;
    r.then = function (a, b, e) {
      var c = this;
      return new d(function (d, f, h) {
        c._when(d, h, a, b, e)
      }, this._status && this._status.observed())
    };
    r["catch"] = r.otherwise = function (a) {
      return this.then(w, a)
    };
    r["finally"] = r.ensure = function (a) {
      function b() {
        return h(a())
      }

      return "function" === typeof a ? this.then(b, b).yield(this) : this
    };
    r.done = function (a, b) {
      this.then(a, b)["catch"](K)
    };
    r.yield = function (a) {
      return this.then(function () {
        return a
      })
    };
    r.tap = function (a) {
      return this.then(a).yield(this)
    };
    r.spread = function (a) {
      return this.then(function (b) {
        return n(b, function (b) {
          return a.apply(w, b)
        })
      })
    };
    r.always = function (a, b) {
      return this.then(a, a, b)
    };
    F = Object.create || function (a) {
      function b() {
      }

      b.prototype = a;
      return new b
    };
    t.prototype = F(r);
    t.prototype.inspect = function () {
      return y(this.value)
    };
    t.prototype._when = function (a, b, e) {
      try {
        a("function" === typeof e ? e(this.value) : this.value)
      } catch (d) {
        a(new k(d))
      }
    };
    k.prototype = F(r);
    k.prototype.inspect = function () {
      return x(this.value)
    };
    k.prototype._when = function (a, b, e, d) {
      try {
        a("function" === typeof d ? d(this.value) : this)
      } catch (c) {
        a(new k(c))
      }
    };
    z.prototype = F(r);
    z.prototype._when = function (a, b, e, d, c) {
      try {
        b("function" === typeof c ? c(this.value) : this.value)
      } catch (f) {
        b(f)
      }
    };
    var r, F, I, H, G, C, E, B, J, w;
    E = [];
    B = "undefined" !== typeof console ? console : a;
    if ("object" === typeof process && process.nextTick) C = process.nextTick; else if (r = "function" === typeof MutationObserver && MutationObserver || "function" === typeof WebKitMutationObserver && WebKitMutationObserver) C = function (a, b, e) {
      var d = a.createElement("div");
      (new b(e)).observe(d, { attributes: !0 });
      return function () {
        d.setAttribute("x", "x")
      }
    }(document, r, v); else try {
      C = c("vertx").runOnLoop || c("vertx").runOnContext
    } catch (L) {
      J = setTimeout, C = function (a) {
        J(a, 0)
      }
    }
    c = Function.prototype;
    r = c.call;
    G = c.bind ? r.bind(r) : function (a, b) {
      return a.apply(b, H.call(arguments, 2))
    };
    c = [];
    H = c.slice;
    I = c.reduce || function (a) {
      var b, e, d, c, f;
      f = 0;
      b = Object(this);
      c = b.length >>> 0;
      e = arguments;
      if (1 >= e.length) for (; ;) {
        if (f in b) {
          d = b[f++];
          break
        }
        if (++f >= c) throw new TypeError
      } else d = e[1];
      for (; f < c; ++f) f in b && (d = a(d, b[f], f, b));
      return d
    };
    return a
  })
})("function" === typeof define && define.amd ? define : function (c) {
  module.exports = c(require)
});
var CryptoJS = CryptoJS || function (c, g) {
  var a = {}, b = a.lib = {}, d = b.Base = function () {
    function a() {
    }

    return {
      extend: function (b) {
        a.prototype = this;
        var e = new a;
        b && e.mixIn(b);
        e.hasOwnProperty("init") || (e.init = function () {
          e.$super.init.apply(this, arguments)
        });
        e.init.prototype = e;
        e.$super = this;
        return e
      }, create: function () {
        var a = this.extend();
        a.init.apply(a, arguments);
        return a
      }, init: function () {
      }, mixIn: function (a) {
        for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
        a.hasOwnProperty("toString") && (this.toString = a.toString)
      }, clone: function () {
        return this.init.prototype.extend(this)
      }
    }
  }(), h = b.WordArray = d.extend({
    init: function (a, b) {
      a = this.words = a || [];
      this.sigBytes = b != g ? b : 4 * a.length
    }, toString: function (a) {
      return (a || e).stringify(this)
    }, concat: function (a) {
      var b = this.words, e = a.words, d = this.sigBytes;
      a = a.sigBytes;
      this.clamp();
      if (d % 4) for (var c = 0; c < a; c++) b[d + c >>> 2] |= (e[c >>> 2] >>> 24 - 8 * (c % 4) & 255) << 24 - 8 * ((d + c) % 4); else if (65535 < e.length) for (c = 0; c < a; c += 4) b[d + c >>> 2] = e[c >>> 2]; else b.push.apply(b, e);
      this.sigBytes += a;
      return this
    }, clamp: function () {
      var a = this.words, b = this.sigBytes;
      a[b >>> 2] &= 4294967295 << 32 - 8 * (b % 4);
      a.length = c.ceil(b / 4)
    }, clone: function () {
      var a = d.clone.call(this);
      a.words = this.words.slice(0);
      return a
    }, random: function (a) {
      for (var b = [], e = 0; e < a; e += 4) b.push(4294967296 * c.random() | 0);
      return new h.init(b, a)
    }
  }), f = a.enc = {}, e = f.Hex = {
    stringify: function (a) {
      var b = a.words;
      a = a.sigBytes;
      for (var e = [], d = 0; d < a; d++) {
        var c = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
        e.push((c >>> 4).toString(16));
        e.push((c & 15).toString(16))
      }
      return e.join("")
    }, parse: function (a) {
      for (var b = a.length, e = [], d = 0; d < b; d += 2) e[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
      return new h.init(e, b / 2)
    }
  }, l = f.Latin1 = {
    stringify: function (a) {
      var b = a.words;
      a = a.sigBytes;
      for (var e = [], d = 0; d < a; d++) e.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
      return e.join("")
    }, parse: function (a) {
      for (var b = a.length, e = [], d = 0; d < b; d++) e[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
      return new h.init(e, b)
    }
  }, t = f.Utf8 = {
    stringify: function (a) {
      try {
        return decodeURIComponent(escape(l.stringify(a)))
      } catch (b) {
        throw Error("Malformed UTF-8 data")
      }
    }, parse: function (a) {
      return l.parse(unescape(encodeURIComponent(a)))
    }
  }, k = b.BufferedBlockAlgorithm = d.extend({
    reset: function () {
      this._data = new h.init;
      this._nDataBytes = 0
    }, _append: function (a) {
      "string" == typeof a && (a = t.parse(a));
      this._data.concat(a);
      this._nDataBytes += a.sigBytes
    }, _process: function (a) {
      var b = this._data, e = b.words, d = b.sigBytes, f = this.blockSize, l = d / (4 * f),
        l = a ? c.ceil(l) : c.max((l | 0) - this._minBufferSize, 0);
      a = l * f;
      d = c.min(4 * a, d);
      if (a) {
        for (var k = 0; k < a; k += f) this._doProcessBlock(e, k);
        k = e.splice(0, a);
        b.sigBytes -= d
      }
      return new h.init(k, d)
    }, clone: function () {
      var a = d.clone.call(this);
      a._data = this._data.clone();
      return a
    }, _minBufferSize: 0
  });
  b.Hasher = k.extend({
    cfg: d.extend(), init: function (a) {
      this.cfg = this.cfg.extend(a);
      this.reset()
    }, reset: function () {
      k.reset.call(this);
      this._doReset()
    }, update: function (a) {
      this._append(a);
      this._process();
      return this
    }, finalize: function (a) {
      a && this._append(a);
      return this._doFinalize()
    }, blockSize: 16, _createHelper: function (a) {
      return function (b, e) {
        return (new a.init(e)).finalize(b)
      }
    }, _createHmacHelper: function (a) {
      return function (b, e) {
        return (new z.HMAC.init(a, e)).finalize(b)
      }
    }
  });
  var z = a.algo = {};
  return a
}(Math);
(function () {
  var c = CryptoJS, g = c.lib.WordArray;
  c.enc.Base64 = {
    stringify: function (a) {
      var b = a.words, d = a.sigBytes, c = this._map;
      a.clamp();
      a = [];
      for (var f = 0; f < d; f += 3) for (var e = (b[f >>> 2] >>> 24 - 8 * (f % 4) & 255) << 16 | (b[f + 1 >>> 2] >>> 24 - 8 * ((f + 1) % 4) & 255) << 8 | b[f + 2 >>> 2] >>> 24 - 8 * ((f + 2) % 4) & 255, l = 0; 4 > l && f + 0.75 * l < d; l++) a.push(c.charAt(e >>> 6 * (3 - l) & 63));
      if (b = c.charAt(64)) for (; a.length % 4;) a.push(b);
      return a.join("")
    }, parse: function (a) {
      var b = a.length, d = this._map, c = d.charAt(64);
      c && (c = a.indexOf(c), -1 != c && (b = c));
      for (var c = [], f = 0, e = 0; e < b; e++) if (e % 4) {
        var l = d.indexOf(a.charAt(e - 1)) << 2 * (e % 4), t = d.indexOf(a.charAt(e)) >>> 6 - 2 * (e % 4);
        c[f >>> 2] |= (l | t) << 24 - 8 * (f % 4);
        f++
      }
      return g.create(c, f)
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  }
})();
(function () {
  var c = CryptoJS, g = c.enc.Utf8;
  c.algo.HMAC = c.lib.Base.extend({
    init: function (a, b) {
      a = this._hasher = new a.init;
      "string" == typeof b && (b = g.parse(b));
      var d = a.blockSize, c = 4 * d;
      b.sigBytes > c && (b = a.finalize(b));
      b.clamp();
      for (var f = this._oKey = b.clone(), e = this._iKey = b.clone(), l = f.words, t = e.words, k = 0; k < d; k++) l[k] ^= 1549556828, t[k] ^= 909522486;
      f.sigBytes = e.sigBytes = c;
      this.reset()
    }, reset: function () {
      var a = this._hasher;
      a.reset();
      a.update(this._iKey)
    }, update: function (a) {
      this._hasher.update(a);
      return this
    }, finalize: function (a) {
      var b = this._hasher;
      a = b.finalize(a);
      b.reset();
      return b.finalize(this._oKey.clone().concat(a))
    }
  })
})();
(function (c) {
  var g = CryptoJS, a = g.lib, b = a.WordArray, d = a.Hasher, a = g.algo, h = [], f = [];
  (function () {
    function a(b) {
      for (var e = c.sqrt(b), d = 2; d <= e; d++) if (!(b % d)) return !1;
      return !0
    }

    function b(a) {
      return 4294967296 * (a - (a | 0)) | 0
    }

    for (var e = 2, d = 0; 64 > d;) a(e) && (8 > d && (h[d] = b(c.pow(e, 0.5))), f[d] = b(c.pow(e, 1 / 3)), d++), e++
  })();
  var e = [], a = a.SHA256 = d.extend({
    _doReset: function () {
      this._hash = new b.init(h.slice(0))
    }, _doProcessBlock: function (a, b) {
      for (var d = this._hash.words, c = d[0], h = d[1], g = d[2], m = d[3], n = d[4], u = d[5], y = d[6], x = d[7], p = 0; 64 > p; p++) {
        if (16 > p) e[p] = a[b + p] | 0; else {
          var v = e[p - 15], s = e[p - 2];
          e[p] = ((v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3) + e[p - 7] + ((s << 15 | s >>> 17) ^ (s << 13 | s >>> 19) ^ s >>> 10) + e[p - 16]
        }
        v = x + ((n << 26 | n >>> 6) ^ (n << 21 | n >>> 11) ^ (n << 7 | n >>> 25)) + (n & u ^ ~n & y) + f[p] + e[p];
        s = ((c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22)) + (c & h ^ c & g ^ h & g);
        x = y;
        y = u;
        u = n;
        n = m + v | 0;
        m = g;
        g = h;
        h = c;
        c = v + s | 0
      }
      d[0] = d[0] + c | 0;
      d[1] = d[1] + h | 0;
      d[2] = d[2] + g | 0;
      d[3] = d[3] + m | 0;
      d[4] = d[4] + n | 0;
      d[5] = d[5] + u | 0;
      d[6] = d[6] + y | 0;
      d[7] = d[7] + x | 0
    }, _doFinalize: function () {
      var a = this._data, b = a.words, d = 8 * this._nDataBytes, e = 8 * a.sigBytes;
      b[e >>> 5] |= 128 << 24 - e % 32;
      b[(e + 64 >>> 9 << 4) + 14] = c.floor(d / 4294967296);
      b[(e + 64 >>> 9 << 4) + 15] = d;
      a.sigBytes = 4 * b.length;
      this._process();
      return this._hash
    }, clone: function () {
      var a = d.clone.call(this);
      a._hash = this._hash.clone();
      return a
    }
  });
  g.SHA256 = d._createHelper(a);
  g.HmacSHA256 = d._createHmacHelper(a)
})(Math);
(function () {
  var c = CryptoJS, g = c.lib, a = g.Base, b = g.WordArray, g = c.algo, d = g.HMAC, h = g.PBKDF2 = a.extend({
    cfg: a.extend({ keySize: 4, hasher: g.SHA1, iterations: 1 }), init: function (a) {
      this.cfg = this.cfg.extend(a)
    }, compute: function (a, e) {
      for (var c = this.cfg, h = d.create(c.hasher, a), g = b.create(), z = b.create([1]), A = g.words, q = z.words, m = c.keySize, c = c.iterations; A.length < m;) {
        var n = h.update(e).finalize(z);
        h.reset();
        for (var u = n.words, y = u.length, x = n, p = 1; p < c; p++) {
          x = h.finalize(x);
          h.reset();
          for (var v = x.words, s = 0; s < y; s++) u[s] ^= v[s]
        }
        g.concat(n);
        q[0]++
      }
      g.sigBytes = 4 * m;
      return g
    }
  });
  c.PBKDF2 = function (a, b, d) {
    return h.create(d).compute(a, b)
  }
})();
var AUTOBAHNJS_VERSION = "0.8.2", global = this;
(function (c, g) {
  "function" === typeof define && define.amd ? define(["when"], function (a) {
    return c.ab = g(c, a)
  }) : "undefined" !== typeof exports ? "undefined" != typeof module && module.exports && (exports = module.exports = g(c, c.when)) : c.ab = g(c, c.when)
})(global, function (c, g) {
  var a = { _version: AUTOBAHNJS_VERSION };
  (function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
      if (null === this) throw new TypeError;
      var d = Object(this), c = d.length >>> 0;
      if (0 === c) return -1;
      var f = 0;
      0 < arguments.length && (f = Number(arguments[1]), f !== f ? f = 0 : 0 !== f && (Infinity !== f && -Infinity !== f) && (f = (0 < f || -1) * Math.floor(Math.abs(f))));
      if (f >= c) return -1;
      for (f = 0 <= f ? f : Math.max(c - Math.abs(f), 0); f < c; f++) if (f in d && d[f] === a) return f;
      return -1
    });
    Array.prototype.forEach || (Array.prototype.forEach = function (a, d) {
      var c, f;
      if (null === this) throw new TypeError(" this is null or not defined");
      var e = Object(this), l = e.length >>> 0;
      if ("[object Function]" !== {}.toString.call(a)) throw new TypeError(a + " is not a function");
      d && (c = d);
      for (f = 0; f < l;) {
        var g;
        f in e && (g = e[f], a.call(c, g, f, e));
        f++
      }
    })
  })();
  a._sliceUserAgent = function (a, d, c) {
    var f = [], e = navigator.userAgent;
    a = e.indexOf(a);
    d = e.indexOf(d, a);
    0 > d && (d = e.length);
    c = e.slice(a, d).split(c);
    e = c[1].split(".");
    for (d = 0; d < e.length; ++d) f.push(parseInt(e[d], 10));
    return { name: c[0], version: f }
  };
  a.getBrowser = function () {
    var b = navigator.userAgent;
    return -1 < b.indexOf("Chrome") ? a._sliceUserAgent("Chrome", " ", "/") : -1 < b.indexOf("Safari") ? a._sliceUserAgent("Safari", " ", "/") : -1 < b.indexOf("Firefox") ? a._sliceUserAgent("Firefox", " ", "/") : -1 < b.indexOf("MSIE") ? a._sliceUserAgent("MSIE", ";", " ") : null
  };
  a.getServerUrl = function (a, d) {
    return "file:" === c.location.protocol ? d ? d : "ws://127.0.0.1/ws" : ("https:" === c.location.protocol ? "wss://" : "ws://") + c.location.hostname + ("" !== c.location.port ? ":" + c.location.port : "") + "/" + (a ? a : "ws")
  };
  a.browserNotSupportedMessage = "Browser does not support WebSockets (RFC6455)";
  a.deriveKey = function (a, d) {
    return d && d.salt ? CryptoJS.PBKDF2(a, d.salt, {
      keySize: (d.keylen || 32) / 4,
      iterations: d.iterations || 1E4,
      hasher: CryptoJS.algo.SHA256
    }).toString(CryptoJS.enc.Base64) : a
  };
  a._idchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  a._idlen = 16;
  a._subprotocol = "wamp";
  a._newid = function () {
    for (var b = "", d = 0; d < a._idlen; d += 1) b += a._idchars.charAt(Math.floor(Math.random() * a._idchars.length));
    return b
  };
  a._newidFast = function () {
    return Math.random().toString(36)
  };
  a.log = function () {
    if (1 < arguments.length) {
      console.group("Log Item");
      for (var a = 0; a < arguments.length; a += 1) console.log(arguments[a]);
      console.groupEnd()
    } else console.log(arguments[0])
  };
  a._debugrpc = !1;
  a._debugpubsub = !1;
  a._debugws = !1;
  a._debugconnect = !1;
  a.debug = function (b, d, h) {
    if ("console" in c) a._debugrpc = b, a._debugpubsub = b, a._debugws = d, a._debugconnect = h; else throw"browser does not support console object"
  };
  a.version = function () {
    return a._version
  };
  a.PrefixMap = function () {
    this._index = {};
    this._rindex = {}
  };
  a.PrefixMap.prototype.get = function (a) {
    return this._index[a]
  };
  a.PrefixMap.prototype.set = function (a, d) {
    this._index[a] = d;
    this._rindex[d] = a
  };
  a.PrefixMap.prototype.setDefault = function (a) {
    this._index[""] = a;
    this._rindex[a] = ""
  };
  a.PrefixMap.prototype.remove = function (a) {
    var d = this._index[a];
    d && (delete this._index[a], delete this._rindex[d])
  };
  a.PrefixMap.prototype.resolve = function (a, d) {
    var c = a.indexOf(":");
    if (0 <= c) {
      var f = a.substring(0, c);
      if (this._index[f]) return this._index[f] + a.substring(c + 1)
    }
    return !0 === d ? a : null
  };
  a.PrefixMap.prototype.shrink = function (a, d) {
    for (var c = a.length; 0 < c; c -= 1) {
      var f = a.substring(0, c);
      if (f = this._rindex[f]) return f + ":" + a.substring(c)
    }
    return !0 === d ? a : null
  };
  a._MESSAGE_TYPEID_WELCOME = 0;
  a._MESSAGE_TYPEID_PREFIX = 1;
  a._MESSAGE_TYPEID_CALL = 2;
  a._MESSAGE_TYPEID_CALL_RESULT = 3;
  a._MESSAGE_TYPEID_CALL_ERROR = 4;
  a._MESSAGE_TYPEID_SUBSCRIBE = 5;
  a._MESSAGE_TYPEID_UNSUBSCRIBE = 6;
  a._MESSAGE_TYPEID_PUBLISH = 7;
  a._MESSAGE_TYPEID_EVENT = 8;
  a.CONNECTION_CLOSED = 0;
  a.CONNECTION_LOST = 1;
  a.CONNECTION_RETRIES_EXCEEDED = 2;
  a.CONNECTION_UNREACHABLE = 3;
  a.CONNECTION_UNSUPPORTED = 4;
  a.CONNECTION_UNREACHABLE_SCHEDULED_RECONNECT = 5;
  a.CONNECTION_LOST_SCHEDULED_RECONNECT = 6;
  a.Deferred = g.defer;
  a._construct = function (a, d) {
    return "WebSocket" in c ? d ? new WebSocket(a, d) : new WebSocket(a) : "MozWebSocket" in c ? d ? new MozWebSocket(a, d) : new MozWebSocket(a) : null
  };
  a.Session = function (b, d, c, f) {
    var e = this;
    e._wsuri = b;
    e._options = f;
    e._websocket_onopen = d;
    e._websocket_onclose = c;
    e._websocket = null;
    e._websocket_connected = !1;
    e._session_id = null;
    e._wamp_version = null;
    e._server = null;
    e._calls = {};
    e._subscriptions = {};
    e._prefixes = new a.PrefixMap;
    e._txcnt = 0;
    e._rxcnt = 0;
    e._websocket = e._options && e._options.skipSubprotocolAnnounce ? a._construct(e._wsuri) : a._construct(e._wsuri, [a._subprotocol]);
    if (!e._websocket) {
      if (void 0 !== c) {
        c(a.CONNECTION_UNSUPPORTED);
        return
      }
      throw a.browserNotSupportedMessage
    }
    e._websocket.onmessage = function (b) {
      a._debugws && (e._rxcnt += 1, console.group("WS Receive"), console.info(e._wsuri + "  [" + e._session_id + "]"), console.log(e._rxcnt), console.log(b.data), console.groupEnd());
      b = JSON.parse(b.data);
      if (b[1] in e._calls) {
        if (b[0] === a._MESSAGE_TYPEID_CALL_RESULT) {
          var d = e._calls[b[1]], c = b[2];
          if (a._debugrpc && void 0 !== d._ab_callobj) {
            console.group("WAMP Call", d._ab_callobj[2]);
            console.timeEnd(d._ab_tid);
            console.group("Arguments");
            for (var f = 3; f < d._ab_callobj.length; f += 1) {
              var h = d._ab_callobj[f];
              if (void 0 !== h) console.log(h); else break
            }
            console.groupEnd();
            console.group("Result");
            console.log(c);
            console.groupEnd();
            console.groupEnd()
          }
          d.resolve(c)
        } else if (b[0] === a._MESSAGE_TYPEID_CALL_ERROR) {
          d = e._calls[b[1]];
          c = b[2];
          f = b[3];
          h = b[4];
          if (a._debugrpc && void 0 !== d._ab_callobj) {
            console.group("WAMP Call", d._ab_callobj[2]);
            console.timeEnd(d._ab_tid);
            console.group("Arguments");
            for (var g = 3; g < d._ab_callobj.length; g += 1) {
              var m = d._ab_callobj[g];
              if (void 0 !== m) console.log(m); else break
            }
            console.groupEnd();
            console.group("Error");
            console.log(c);
            console.log(f);
            void 0 !== h && console.log(h);
            console.groupEnd();
            console.groupEnd()
          }
          void 0 !== h ? d.reject({ uri: c, desc: f, detail: h }) : d.reject({ uri: c, desc: f })
        }
        delete e._calls[b[1]]
      } else if (b[0] === a._MESSAGE_TYPEID_EVENT) {
        if (d = e._prefixes.resolve(b[1], !0), d in e._subscriptions) {
          var n = b[1], u = b[2];
          a._debugpubsub && (console.group("WAMP Event"), console.info(e._wsuri + "  [" + e._session_id + "]"), console.log(n), console.log(u), console.groupEnd());
          e._subscriptions[d].forEach(function (a) {
            a(n, u)
          })
        }
      } else if (b[0] === a._MESSAGE_TYPEID_WELCOME) if (null === e._session_id) {
        e._session_id = b[1];
        e._wamp_version = b[2];
        e._server = b[3];
        if (a._debugrpc || a._debugpubsub) console.group("WAMP Welcome"), console.info(e._wsuri + "  [" + e._session_id + "]"), console.log(e._wamp_version), console.log(e._server), console.groupEnd();
        null !== e._websocket_onopen && e._websocket_onopen()
      } else throw"protocol error (welcome message received more than once)"
    };
    e._websocket.onopen = function (b) {
      if (e._websocket.protocol !== a._subprotocol) if ("undefined" === typeof e._websocket.protocol) a._debugws && (console.group("WS Warning"), console.info(e._wsuri), console.log("WebSocket object has no protocol attribute: WAMP subprotocol check skipped!"), console.groupEnd()); else if (e._options && e._options.skipSubprotocolCheck) a._debugws && (console.group("WS Warning"), console.info(e._wsuri), console.log("Server does not speak WAMP, but subprotocol check disabled by option!"), console.log(e._websocket.protocol), console.groupEnd()); else throw e._websocket.close(1E3, "server does not speak WAMP"), "server does not speak WAMP (but '" + e._websocket.protocol + "' !)";
      a._debugws && (console.group("WAMP Connect"), console.info(e._wsuri), console.log(e._websocket.protocol), console.groupEnd());
      e._websocket_connected = !0
    };
    e._websocket.onerror = function (a) {
    };
    e._websocket.onclose = function (b) {
      a._debugws && (e._websocket_connected ? console.log("Autobahn connection to " + e._wsuri + " lost (code " + b.code + ", reason '" + b.reason + "', wasClean " + b.wasClean + ").") : console.log("Autobahn could not connect to " + e._wsuri + " (code " + b.code + ", reason '" + b.reason + "', wasClean " + b.wasClean + ")."));
      void 0 !== e._websocket_onclose && (e._websocket_connected ? b.wasClean ? e._websocket_onclose(a.CONNECTION_CLOSED, "WS-" + b.code + ": " + b.reason) : e._websocket_onclose(a.CONNECTION_LOST) : e._websocket_onclose(a.CONNECTION_UNREACHABLE));
      e._websocket_connected = !1;
      e._wsuri = null;
      e._websocket_onopen = null;
      e._websocket_onclose = null;
      e._websocket = null
    };
    e.log = function () {
      e._options && "sessionIdent" in e._options ? console.group("WAMP Session '" + e._options.sessionIdent + "' [" + e._session_id + "]") : console.group("WAMP Session [" + e._session_id + "]");
      for (var a = 0; a < arguments.length; ++a) console.log(arguments[a]);
      console.groupEnd()
    }
  };
  a.Session.prototype._send = function (b) {
    if (!this._websocket_connected) throw"Autobahn not connected";
    switch (!0) {
      case c.Prototype && "undefined" === typeof top.root.__prototype_deleted:
      case "function" === typeof b.toJSON:
        b = b.toJSON();
        break;
      default:
        b = JSON.stringify(b)
    }
    this._websocket.send(b);
    this._txcnt += 1;
    a._debugws && (console.group("WS Send"), console.info(this._wsuri + "  [" + this._session_id + "]"), console.log(this._txcnt), console.log(b), console.groupEnd())
  };
  a.Session.prototype.close = function () {
    this._websocket_connected && this._websocket.close()
  };
  a.Session.prototype.sessionid = function () {
    return this._session_id
  };
  a.Session.prototype.wsuri = function () {
    return this._wsuri
  };
  a.Session.prototype.shrink = function (a, d) {
    void 0 === d && (d = !0);
    return this._prefixes.shrink(a, d)
  };
  a.Session.prototype.resolve = function (a, d) {
    void 0 === d && (d = !0);
    return this._prefixes.resolve(a, d)
  };
  a.Session.prototype.prefix = function (b, d) {
    this._prefixes.set(b, d);
    if (a._debugrpc || a._debugpubsub) console.group("WAMP Prefix"), console.info(this._wsuri + "  [" + this._session_id + "]"), console.log(b), console.log(d), console.groupEnd();
    this._send([a._MESSAGE_TYPEID_PREFIX, b, d])
  };
  a.Session.prototype.call = function () {
    for (var b = new a.Deferred, d; !(d = a._newidFast(), !(d in this._calls));) ;
    this._calls[d] = b;
    for (var c = this._prefixes.shrink(arguments[0], !0), c = [a._MESSAGE_TYPEID_CALL, d, c], f = 1; f < arguments.length; f += 1) c.push(arguments[f]);
    this._send(c);
    a._debugrpc && (b._ab_callobj = c, b._ab_tid = this._wsuri + "  [" + this._session_id + "][" + d + "]", console.time(b._ab_tid), console.info());
    return b.promise.then ? b.promise : b
  };
  a.Session.prototype.subscribe = function (b, d) {
    var c = this._prefixes.resolve(b, !0);
    c in this._subscriptions || (a._debugpubsub && (console.group("WAMP Subscribe"), console.info(this._wsuri + "  [" + this._session_id + "]"), console.log(b), console.log(d), console.groupEnd()), this._send([a._MESSAGE_TYPEID_SUBSCRIBE, b]), this._subscriptions[c] = []);
    if (-1 === this._subscriptions[c].indexOf(d)) this._subscriptions[c].push(d); else throw"callback " + d + " already subscribed for topic " + c
  };
  a.Session.prototype.unsubscribe = function (b, d) {
    var c = this._prefixes.resolve(b, !0);
    if (c in this._subscriptions) {
      var f;
      if (void 0 !== d) {
        var e = this._subscriptions[c].indexOf(d);
        if (-1 !== e) f = d, this._subscriptions[c].splice(e, 1); else throw"no callback " + d + " subscribed on topic " + c
      } else f = this._subscriptions[c].slice(), this._subscriptions[c] = [];
      0 === this._subscriptions[c].length && (delete this._subscriptions[c], a._debugpubsub && (console.group("WAMP Unsubscribe"), console.info(this._wsuri + "  [" + this._session_id + "]"), console.log(b), console.log(f), console.groupEnd()), this._send([a._MESSAGE_TYPEID_UNSUBSCRIBE, b]))
    } else throw"not subscribed to topic " + c
  };
  a.Session.prototype.publish = function () {
    var b = arguments[0], d = arguments[1], c = null, f = null, e = null, g = null;
    if (3 < arguments.length) {
      if (!(arguments[2] instanceof Array)) throw"invalid argument type(s)";
      if (!(arguments[3] instanceof Array)) throw"invalid argument type(s)";
      f = arguments[2];
      e = arguments[3];
      g = [a._MESSAGE_TYPEID_PUBLISH, b, d, f, e]
    } else if (2 < arguments.length) if ("boolean" === typeof arguments[2]) c = arguments[2], g = [a._MESSAGE_TYPEID_PUBLISH, b, d, c]; else if (arguments[2] instanceof Array) f = arguments[2], g = [a._MESSAGE_TYPEID_PUBLISH, b, d, f]; else throw"invalid argument type(s)"; else g = [a._MESSAGE_TYPEID_PUBLISH, b, d];
    a._debugpubsub && (console.group("WAMP Publish"), console.info(this._wsuri + "  [" + this._session_id + "]"), console.log(b), console.log(d), null !== c ? console.log(c) : null !== f && (console.log(f), null !== e && console.log(e)), console.groupEnd());
    this._send(g)
  };
  a.Session.prototype.authreq = function (a, d) {
    return this.call("http://api.wamp.ws/procedure#authreq", a, d)
  };
  a.Session.prototype.authsign = function (a, d) {
    d || (d = "");
    return CryptoJS.HmacSHA256(a, d).toString(CryptoJS.enc.Base64)
  };
  a.Session.prototype.auth = function (a) {
    return this.call("http://api.wamp.ws/procedure#auth", a)
  };
  a._connect = function (b) {
    var d = new a.Session(b.wsuri, function () {
      b.connects += 1;
      b.retryCount = 0;
      b.onConnect(d)
    }, function (d, f) {
      var e = null;
      switch (d) {
        case a.CONNECTION_CLOSED:
          b.onHangup(d, "Connection was closed properly [" + f + "]");
          break;
        case a.CONNECTION_UNSUPPORTED:
          b.onHangup(d, "Browser does not support WebSocket.");
          break;
        case a.CONNECTION_UNREACHABLE:
          b.retryCount += 1;
          if (0 === b.connects) b.onHangup(d, "Connection could not be established."); else if (b.retryCount <= b.options.maxRetries) (e = b.onHangup(a.CONNECTION_UNREACHABLE_SCHEDULED_RECONNECT, "Connection unreachable - scheduled reconnect to occur in " + b.options.retryDelay / 1E3 + " second(s) - attempt " + b.retryCount + " of " + b.options.maxRetries + ".", {
            delay: b.options.retryDelay,
            retries: b.retryCount,
            maxretries: b.options.maxRetries
          })) ? (a._debugconnect && console.log("Connection unreachable - retrying stopped by app"), b.onHangup(a.CONNECTION_RETRIES_EXCEEDED, "Number of connection retries exceeded.")) : (a._debugconnect && console.log("Connection unreachable - retrying (" + b.retryCount + ") .."), c.setTimeout(function () {
            a._connect(b)
          }, b.options.retryDelay)); else b.onHangup(a.CONNECTION_RETRIES_EXCEEDED, "Number of connection retries exceeded.");
          break;
        case a.CONNECTION_LOST:
          b.retryCount += 1;
          if (b.retryCount <= b.options.maxRetries) (e = b.onHangup(a.CONNECTION_LOST_SCHEDULED_RECONNECT, "Connection lost - scheduled " + b.retryCount + "th reconnect to occur in " + b.options.retryDelay / 1E3 + " second(s).", {
            delay: b.options.retryDelay,
            retries: b.retryCount,
            maxretries: b.options.maxRetries
          })) ? (a._debugconnect && console.log("Connection lost - retrying stopped by app"), b.onHangup(a.CONNECTION_RETRIES_EXCEEDED, "Connection lost.")) : (a._debugconnect && console.log("Connection lost - retrying (" + b.retryCount + ") .."), c.setTimeout(function () {
            a._connect(b)
          }, b.options.retryDelay)); else b.onHangup(a.CONNECTION_RETRIES_EXCEEDED, "Connection lost.");
          break;
        default:
          throw"unhandled close code in ab._connect"
      }
    }, b.options)
  };
  a.connect = function (b, d, c, f) {
    var e = {};
    e.wsuri = b;
    e.options = f ? f : {};
    void 0 === e.options.retryDelay && (e.options.retryDelay = 5E3);
    void 0 === e.options.maxRetries && (e.options.maxRetries = 10);
    void 0 === e.options.skipSubprotocolCheck && (e.options.skipSubprotocolCheck = !1);
    void 0 === e.options.skipSubprotocolAnnounce && (e.options.skipSubprotocolAnnounce = !1);
    if (d) e.onConnect = d; else throw"onConnect handler required!";
    e.onHangup = c ? c : function (b, d, c) {
      a._debugconnect && console.log(b, d, c)
    };
    e.connects = 0;
    e.retryCount = 0;
    a._connect(e)
  };
  a.launch = function (b, d, c) {
    a.connect(b.wsuri, function (c) {
      !b.appkey || "" === b.appkey ? c.authreq().then(function () {
        c.auth().then(function (b) {
          d ? d(c) : a._debugconnect && c.log("Session opened.")
        }, c.log)
      }, c.log) : c.authreq(b.appkey, b.appextra).then(function (e) {
        var g = null;
        "function" === typeof b.appsecret ? g = b.appsecret(e) : (g = a.deriveKey(b.appsecret, JSON.parse(e).authextra), g = c.authsign(e, g));
        c.auth(g).then(function (b) {
          d ? d(c) : a._debugconnect && c.log("Session opened.")
        }, c.log)
      }, c.log)
    }, function (b, d, g) {
      c ? c(b, d, g) : a._debugconnect && a.log("Session closed.", b, d, g)
    }, b.sessionConfig)
  };
  return a
});
ab._UA_FIREFOX = /.*Firefox\/([0-9+]*).*/;
ab._UA_CHROME = /.*Chrome\/([0-9+]*).*/;
ab._UA_CHROMEFRAME = /.*chromeframe\/([0-9]*).*/;
ab._UA_WEBKIT = /.*AppleWebKit\/([0-9+.]*)w*.*/;
ab._UA_WEBOS = /.*webOS\/([0-9+.]*)w*.*/;
ab._matchRegex = function (c, g) {
  var a = g.exec(c);
  return a ? a[1] : a
};
ab.lookupWsSupport = function () {
  var c = navigator.userAgent;
  if (-1 < c.indexOf("MSIE")) {
    if (-1 < c.indexOf("MSIE 10")) return [!0, !0, !0];
    if (-1 < c.indexOf("chromeframe")) {
      var g = parseInt(ab._matchRegex(c, ab._UA_CHROMEFRAME));
      return 14 <= g ? [!0, !1, !0] : [!1, !1, !1]
    }
    if (-1 < c.indexOf("MSIE 8") || -1 < c.indexOf("MSIE 9")) return [!0, !0, !0]
  } else {
    if (-1 < c.indexOf("Firefox")) {
      if (g = parseInt(ab._matchRegex(c, ab._UA_FIREFOX))) {
        if (7 <= g) return [!0, !1, !0];
        if (3 <= g) return [!0, !0, !0]
      }
      return [!1, !1, !0]
    }
    if (-1 < c.indexOf("Safari") && -1 == c.indexOf("Chrome")) {
      if (g = ab._matchRegex(c, ab._UA_WEBKIT)) return -1 < c.indexOf("Windows") && "534+" == g || -1 < c.indexOf("Macintosh") && (g = g.replace("+", "").split("."), 535 == parseInt(g[0]) && 24 <= parseInt(g[1]) || 535 < parseInt(g[0])) ? [!0, !1, !0] : -1 < c.indexOf("webOS") ? (g = ab._matchRegex(c, ab._UA_WEBOS).split("."), 2 == parseInt(g[0]) ? [!1, !0, !0] : [!1, !1, !1]) : [!0, !0, !0]
    } else if (-1 < c.indexOf("Chrome")) {
      if (g = parseInt(ab._matchRegex(c, ab._UA_CHROME))) return 14 <= g ? [!0, !1, !0] : 4 <= g ? [!0, !0, !0] : [!1, !1, !0]
    } else if (-1 < c.indexOf("Android")) {
      if (-1 < c.indexOf("Firefox") || -1 < c.indexOf("CrMo")) return [!0, !1, !0];
      if (-1 < c.indexOf("Opera")) return [!1, !1, !0];
      if (-1 < c.indexOf("CrMo")) return [!0, !0, !0]
    } else if (-1 < c.indexOf("iPhone") || -1 < c.indexOf("iPad") || -1 < c.indexOf("iPod")) return [!1, !1, !0]
  }
  return [!1, !1, !1]
};
(function () {
  (function (root, factory) {
    if (typeof define === "function" && define.amd) {
      return define(function () {
        return factory()
      })
    } else if (typeof exports === "object") {
      return module.exports = factory()
    } else {
      return root.ifvisible = factory()
    }
  })(this, function () {
    var addEvent, customEvent, doc, fireEvent, hidden, idleStartedTime, idleTime, ie, ifvisible, init, initialized,
      status, trackIdleStatus, visibilityChange;
    ifvisible = {};
    doc = document;
    initialized = !1;
    status = "active";
    idleTime = 60000;
    idleStartedTime = !1;
    customEvent = (function () {
      var S4, addCustomEvent, cgid, fireCustomEvent, guid, listeners, removeCustomEvent;
      S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      };
      guid = function () {
        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
      };
      listeners = {};
      cgid = "__ceGUID";
      addCustomEvent = function (obj, event, callback) {
        obj[cgid] = undefined;
        if (!obj[cgid]) {
          obj[cgid] = "ifvisible.object.event.identifier"
        }
        if (!listeners[obj[cgid]]) {
          listeners[obj[cgid]] = {}
        }
        if (!listeners[obj[cgid]][event]) {
          listeners[obj[cgid]][event] = []
        }
        return listeners[obj[cgid]][event].push(callback)
      };
      fireCustomEvent = function (obj, event, memo) {
        var ev, j, len, ref, results;
        if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
          ref = listeners[obj[cgid]][event];
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            ev = ref[j];
            results.push(ev(memo || {}))
          }
          return results
        }
      };
      removeCustomEvent = function (obj, event, callback) {
        var cl, i, j, len, ref;
        if (callback) {
          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
            ref = listeners[obj[cgid]][event];
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
              cl = ref[i];
              if (cl === callback) {
                listeners[obj[cgid]][event].splice(i, 1);
                return cl
              }
            }
          }
        } else {
          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
            return delete listeners[obj[cgid]][event]
          }
        }
      };
      return { add: addCustomEvent, remove: removeCustomEvent, fire: fireCustomEvent }
    })();
    addEvent = (function () {
      var setListener;
      setListener = !1;
      return function (el, ev, fn) {
        if (!setListener) {
          if (el.addEventListener) {
            setListener = function (el, ev, fn) {
              return el.addEventListener(ev, fn, !1)
            }
          } else if (el.attachEvent) {
            setListener = function (el, ev, fn) {
              return el.attachEvent("on" + ev, fn, !1)
            }
          } else {
            setListener = function (el, ev, fn) {
              return el["on" + ev] = fn
            }
          }
        }
        return setListener(el, ev, fn)
      }
    })();
    fireEvent = function (element, event) {
      var evt;
      if (doc.createEventObject) {
        return element.fireEvent("on" + event, evt)
      } else {
        evt = doc.createEvent("HTMLEvents");
        evt.initEvent(event, !0, !0);
        return !element.dispatchEvent(evt)
      }
    };
    ie = (function () {
      var all, check, div, undef, v;
      undef = void 0;
      v = 3;
      div = doc.createElement("div");
      all = div.getElementsByTagName("i");
      check = function () {
        return (div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->", all[0])
      };
      while (check()) {
        continue
      }
      if (v > 4) {
        return v
      } else {
        return undef
      }
    })();
    hidden = !1;
    visibilityChange = void 0;
    if (typeof doc.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange"
    } else if (typeof doc.mozHidden !== "undefined") {
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange"
    } else if (typeof doc.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange"
    } else if (typeof doc.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange"
    }
    trackIdleStatus = function () {
      var timer, wakeUp;
      timer = !1;
      wakeUp = function () {
        if (status !== "active") {
          return ifvisible.wakeup()
        }
        clearTimeout(timer);
        idleStartedTime = +(new Date());
        return timer = setTimeout(function () {
          if (status === "active") {
            return ifvisible.idle()
          }
        }, idleTime)
      };
      wakeUp();
      addEvent(doc, "mousemove", wakeUp);
      addEvent(doc, "keyup", wakeUp);
      addEvent(window, "scroll", wakeUp);
      ifvisible.focus(wakeUp);
      return ifvisible.wakeup(wakeUp)
    };
    init = function () {
      var blur;
      if (initialized) {
        return !0
      }
      if (hidden === !1) {
        blur = "blur";
        if (ie < 9) {
          blur = "focusout"
        }
        addEvent(window, blur, function () {
          return ifvisible.blur()
        });
        addEvent(window, "focus", function () {
          return ifvisible.focus()
        })
      } else {
        addEvent(doc, visibilityChange, function () {
          if (doc[hidden]) {
            return ifvisible.blur()
          } else {
            return ifvisible.focus()
          }
        }, !1)
      }
      initialized = !0;
      return trackIdleStatus()
    };
    ifvisible = {
      setIdleDuration: function (seconds) {
        return idleTime = seconds * 1000
      }, getIdleDuration: function () {
        return idleTime
      }, getIdleInfo: function () {
        var now, res;
        now = +(new Date());
        res = {};
        if (status === "idle") {
          res.isIdle = !0;
          res.idleFor = now - idleStartedTime;
          res.timeLeft = 0;
          res.timeLeftPer = 100
        } else {
          res.isIdle = !1;
          res.idleFor = now - idleStartedTime;
          res.timeLeft = (idleStartedTime + idleTime) - now;
          res.timeLeftPer = (100 - (res.timeLeft * 100 / idleTime)).toFixed(2)
        }
        return res
      }, focus: function (callback) {
        if (typeof callback === "function") {
          this.on("focus", callback)
        } else {
          status = "active";
          customEvent.fire(this, "focus");
          customEvent.fire(this, "wakeup");
          customEvent.fire(this, "statusChanged", { status: status })
        }
        return this
      }, blur: function (callback) {
        if (typeof callback === "function") {
          this.on("blur", callback)
        } else {
          status = "hidden";
          customEvent.fire(this, "blur");
          customEvent.fire(this, "idle");
          customEvent.fire(this, "statusChanged", { status: status })
        }
        return this
      }, idle: function (callback) {
        if (typeof callback === "function") {
          this.on("idle", callback)
        } else {
          status = "idle";
          customEvent.fire(this, "idle");
          customEvent.fire(this, "statusChanged", { status: status })
        }
        return this
      }, wakeup: function (callback) {
        if (typeof callback === "function") {
          this.on("wakeup", callback)
        } else {
          status = "active";
          customEvent.fire(this, "wakeup");
          customEvent.fire(this, "statusChanged", { status: status })
        }
        return this
      }, on: function (name, callback) {
        init();
        customEvent.add(this, name, callback);
        return this
      }, off: function (name, callback) {
        init();
        customEvent.remove(this, name, callback);
        return this
      }, onEvery: function (seconds, callback) {
        var paused, t;
        init();
        paused = !1;
        if (callback) {
          t = setInterval(function () {
            if (status === "active" && paused === !1) {
              return callback()
            }
          }, seconds * 1000)
        }
        return {
          stop: function () {
            return clearInterval(t)
          }, pause: function () {
            return paused = !0
          }, resume: function () {
            return paused = !1
          }, code: t, callback: callback
        }
      }, now: function (check) {
        init();
        return status === (check || "active")
      }
    };
    return ifvisible
  })
}).call(this);
(function ($, window, document) {
  var pluginName = "tooltipster", defaults = {
    animation: "fade",
    arrow: !0,
    arrowColor: "",
    autoClose: !0,
    content: null,
    contentAsHTML: !1,
    contentCloning: !0,
    debug: !0,
    delay: 200,
    minWidth: 0,
    maxWidth: null,
    functionInit: function (origin, content) {
    },
    functionBefore: function (origin, continueTooltip) {
      continueTooltip()
    },
    functionReady: function (origin, tooltip) {
    },
    functionAfter: function (origin) {
    },
    hideOnClick: !1,
    icon: "(?)",
    iconCloning: !0,
    iconDesktop: !1,
    iconTouch: !1,
    iconTheme: "tooltipster-icon",
    interactive: !1,
    interactiveTolerance: 350,
    multiple: !1,
    offsetX: 0,
    offsetY: 0,
    onlyOne: !1,
    position: "top",
    positionTracker: !1,
    positionTrackerCallback: function (origin) {
      if (this.option("trigger") == "hover" && this.option("autoClose")) {
        this.hide()
      }
    },
    restoration: "current",
    speed: 350,
    timer: 0,
    theme: "tooltipster-default",
    touchDevices: !0,
    trigger: "hover",
    updateAnimation: !0
  };

  function Plugin(element, options) {
    this.bodyOverflowX;
    this.callbacks = { hide: [], show: [] };
    this.checkInterval = null;
    this.Content;
    this.$el = $(element);
    this.$elProxy;
    this.elProxyPosition;
    this.enabled = !0;
    this.options = $.extend({}, defaults, options);
    this.mouseIsOverProxy = !1;
    this.namespace = "tooltipster-" + Math.round(Math.random() * 100000);
    this.Status = "hidden";
    this.timerHide = null;
    this.timerShow = null;
    this.$tooltip;
    this.options.iconTheme = this.options.iconTheme.replace(".", "");
    this.options.theme = this.options.theme.replace(".", "");
    this._init()
  }

  Plugin.prototype = {
    _init: function () {
      var self = this;
      if (document.querySelector) {
        var initialTitle = null;
        if (self.$el.data("tooltipster-initialTitle") === undefined) {
          initialTitle = self.$el.attr("title");
          if (initialTitle === undefined) initialTitle = null;
          self.$el.data("tooltipster-initialTitle", initialTitle)
        }
        if (self.options.content !== null) {
          self._content_set(self.options.content)
        } else {
          self._content_set(initialTitle)
        }
        var c = self.options.functionInit.call(self.$el, self.$el, self.Content);
        if (typeof c !== "undefined") self._content_set(c);
        self.$el.removeAttr("title").addClass("tooltipstered");
        if ((!deviceHasTouchCapability && self.options.iconDesktop) || (deviceHasTouchCapability && self.options.iconTouch)) {
          if (typeof self.options.icon === "string") {
            self.$elProxy = $("<span class=\"" + self.options.iconTheme + "\"></span>");
            self.$elProxy.text(self.options.icon)
          } else {
            if (self.options.iconCloning) self.$elProxy = self.options.icon.clone(!0); else self.$elProxy = self.options.icon
          }
          self.$elProxy.insertAfter(self.$el)
        } else {
          self.$elProxy = self.$el
        }
        if (self.options.trigger == "hover") {
          self.$elProxy.on("mouseenter." + self.namespace, function () {
            if (!deviceIsPureTouch() || self.options.touchDevices) {
              self.mouseIsOverProxy = !0;
              self._show()
            }
          }).on("mouseleave." + self.namespace, function () {
            if (!deviceIsPureTouch() || self.options.touchDevices) {
              self.mouseIsOverProxy = !1
            }
          });
          if (deviceHasTouchCapability && self.options.touchDevices) {
            self.$elProxy.on("touchstart." + self.namespace, function () {
              self._showNow()
            })
          }
        } else if (self.options.trigger == "click") {
          self.$elProxy.on("click." + self.namespace, function () {
            if (!deviceIsPureTouch() || self.options.touchDevices) {
              self._show()
            }
          })
        }
      }
    }, _show: function () {
      var self = this;
      if (self.Status != "shown" && self.Status != "appearing") {
        if (self.options.delay) {
          self.timerShow = setTimeout(function () {
            if (self.options.trigger == "click" || (self.options.trigger == "hover" && self.mouseIsOverProxy)) {
              self._showNow()
            }
          }, self.options.delay)
        } else self._showNow()
      }
    }, _showNow: function (callback) {
      var self = this;
      self.options.functionBefore.call(self.$el, self.$el, function () {
        if (self.enabled && self.Content !== null) {
          if (callback) self.callbacks.show.push(callback);
          self.callbacks.hide = [];
          clearTimeout(self.timerShow);
          self.timerShow = null;
          clearTimeout(self.timerHide);
          self.timerHide = null;
          if (self.options.onlyOne) {
            $(".tooltipstered").not(self.$el).each(function (i, el) {
              var $el = $(el), nss = $el.data("tooltipster-ns");
              $.each(nss, function (i, ns) {
                var instance = $el.data(ns), s = instance.status(), ac = instance.option("autoClose");
                if (s !== "hidden" && s !== "disappearing" && ac) {
                  instance.hide()
                }
              })
            })
          }
          var finish = function () {
            self.Status = "shown";
            $.each(self.callbacks.show, function (i, c) {
              c.call(self.$el)
            });
            self.callbacks.show = []
          };
          if (self.Status !== "hidden") {
            var extraTime = 0;
            if (self.Status === "disappearing") {
              self.Status = "appearing";
              if (supportsTransitions()) {
                self.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + self.options.animation + "-show");
                if (self.options.speed > 0) self.$tooltip.delay(self.options.speed);
                self.$tooltip.queue(finish)
              } else {
                self.$tooltip.stop().fadeIn(finish)
              }
            } else if (self.Status === "shown") {
              finish()
            }
          } else {
            self.Status = "appearing";
            var extraTime = self.options.speed;
            self.bodyOverflowX = $("body").css("overflow-x");
            $("body").css("overflow-x", "hidden");
            var animation = "tooltipster-" + self.options.animation,
              animationSpeed = "-webkit-transition-duration: " + self.options.speed + "ms; -webkit-animation-duration: " + self.options.speed + "ms; -moz-transition-duration: " + self.options.speed + "ms; -moz-animation-duration: " + self.options.speed + "ms; -o-transition-duration: " + self.options.speed + "ms; -o-animation-duration: " + self.options.speed + "ms; -ms-transition-duration: " + self.options.speed + "ms; -ms-animation-duration: " + self.options.speed + "ms; transition-duration: " + self.options.speed + "ms; animation-duration: " + self.options.speed + "ms;",
              minWidth = self.options.minWidth ? "min-width:" + Math.round(self.options.minWidth) + "px;" : "",
              maxWidth = self.options.maxWidth ? "max-width:" + Math.round(self.options.maxWidth) + "px;" : "",
              pointerEvents = self.options.interactive ? "pointer-events: auto;" : "";
            self.$tooltip = $("<div class=\"tooltipster-base " + self.options.theme + "\" style=\"" + minWidth + " " + maxWidth + " " + pointerEvents + " " + animationSpeed + "\"><div class=\"tooltipster-content\"></div></div>");
            if (supportsTransitions()) self.$tooltip.addClass(animation);
            self._content_insert();
            self.$tooltip.appendTo("body");
            self.reposition();
            self.options.functionReady.call(self.$el, self.$el, self.$tooltip);
            if (supportsTransitions()) {
              self.$tooltip.addClass(animation + "-show");
              if (self.options.speed > 0) self.$tooltip.delay(self.options.speed);
              self.$tooltip.queue(finish)
            } else {
              self.$tooltip.css("display", "none").fadeIn(self.options.speed, finish)
            }
            self._interval_set();
            $(window).on("scroll." + self.namespace + " resize." + self.namespace, function () {
              self.reposition()
            });
            if (self.options.autoClose) {
              $("body").off("." + self.namespace);
              if (self.options.trigger == "hover") {
                if (deviceHasTouchCapability) {
                  setTimeout(function () {
                    $("body").on("touchstart." + self.namespace, function () {
                      self.hide()
                    })
                  }, 0)
                }
                if (self.options.interactive) {
                  if (deviceHasTouchCapability) {
                    self.$tooltip.on("touchstart." + self.namespace, function (event) {
                      event.stopPropagation()
                    })
                  }
                  var tolerance = null;
                  self.$elProxy.add(self.$tooltip).on("mouseleave." + self.namespace + "-autoClose", function () {
                    clearTimeout(tolerance);
                    tolerance = setTimeout(function () {
                      self.hide()
                    }, self.options.interactiveTolerance)
                  }).on("mouseenter." + self.namespace + "-autoClose", function () {
                    clearTimeout(tolerance)
                  })
                } else {
                  self.$elProxy.on("mouseleave." + self.namespace + "-autoClose", function () {
                    self.hide()
                  })
                }
                if (self.options.hideOnClick) {
                  self.$elProxy.on("click." + self.namespace + "-autoClose", function () {
                    self.hide()
                  })
                }
              } else if (self.options.trigger == "click") {
                setTimeout(function () {
                  $("body").on("click." + self.namespace + " touchstart." + self.namespace, function () {
                    self.hide()
                  })
                }, 0);
                if (self.options.interactive) {
                  self.$tooltip.on("click." + self.namespace + " touchstart." + self.namespace, function (event) {
                    event.stopPropagation()
                  })
                }
              }
            }
          }
          if (self.options.timer > 0) {
            self.timerHide = setTimeout(function () {
              self.timerHide = null;
              self.hide()
            }, self.options.timer + extraTime)
          }
        }
      })
    }, _interval_set: function () {
      var self = this;
      self.checkInterval = setInterval(function () {
        if ($("body").find(self.$el).length === 0 || $("body").find(self.$elProxy).length === 0 || self.Status == "hidden" || $("body").find(self.$tooltip).length === 0) {
          if (self.Status == "shown" || self.Status == "appearing") self.hide();
          self._interval_cancel()
        } else {
          if (self.options.positionTracker) {
            var p = self._repositionInfo(self.$elProxy), identical = !1;
            if (areEqual(p.dimension, self.elProxyPosition.dimension)) {
              if (self.$elProxy.css("position") === "fixed") {
                if (areEqual(p.position, self.elProxyPosition.position)) identical = !0
              } else {
                if (areEqual(p.offset, self.elProxyPosition.offset)) identical = !0
              }
            }
            if (!identical) {
              self.reposition();
              self.options.positionTrackerCallback.call(self, self.$el)
            }
          }
        }
      }, 200)
    }, _interval_cancel: function () {
      clearInterval(this.checkInterval);
      this.checkInterval = null
    }, _content_set: function (content) {
      if (typeof content === "object" && content !== null && this.options.contentCloning) {
        content = content.clone(!0)
      }
      this.Content = content
    }, _content_insert: function () {
      var self = this, $d = this.$tooltip.find(".tooltipster-content");
      if (typeof self.Content === "string" && !self.options.contentAsHTML) {
        $d.text(self.Content)
      } else {
        $d.empty().append(self.Content)
      }
    }, _update: function (content) {
      var self = this;
      self._content_set(content);
      if (self.Content !== null) {
        if (self.Status !== "hidden") {
          self._content_insert();
          self.reposition();
          if (self.options.updateAnimation) {
            if (supportsTransitions()) {
              self.$tooltip.css({
                "width": "",
                "-webkit-transition": "all " + self.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + self.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + self.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + self.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "transition": "all " + self.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
              }).addClass("tooltipster-content-changing");
              setTimeout(function () {
                if (self.Status != "hidden") {
                  self.$tooltip.removeClass("tooltipster-content-changing");
                  setTimeout(function () {
                    if (self.Status !== "hidden") {
                      self.$tooltip.css({
                        "-webkit-transition": self.options.speed + "ms",
                        "-moz-transition": self.options.speed + "ms",
                        "-o-transition": self.options.speed + "ms",
                        "-ms-transition": self.options.speed + "ms",
                        "transition": self.options.speed + "ms"
                      })
                    }
                  }, self.options.speed)
                }
              }, self.options.speed)
            } else {
              self.$tooltip.fadeTo(self.options.speed, 0.5, function () {
                if (self.Status != "hidden") {
                  self.$tooltip.fadeTo(self.options.speed, 1)
                }
              })
            }
          }
        }
      } else {
        self.hide()
      }
    }, _repositionInfo: function ($el) {
      return {
        dimension: { height: $el.outerHeight(!1), width: $el.outerWidth(!1) },
        offset: $el.offset(),
        position: { left: parseInt($el.css("left")), top: parseInt($el.css("top")) }
      }
    }, hide: function (callback) {
      var self = this;
      if (callback) self.callbacks.hide.push(callback);
      self.callbacks.show = [];
      clearTimeout(self.timerShow);
      self.timerShow = null;
      clearTimeout(self.timerHide);
      self.timerHide = null;
      var finishCallbacks = function () {
        $.each(self.callbacks.hide, function (i, c) {
          c.call(self.$el)
        });
        self.callbacks.hide = []
      };
      if (self.Status == "shown" || self.Status == "appearing") {
        self.Status = "disappearing";
        var finish = function () {
          self.Status = "hidden";
          if (typeof self.Content == "object" && self.Content !== null) {
            self.Content.detach()
          }
          self.$tooltip.remove();
          self.$tooltip = null;
          $(window).off("." + self.namespace);
          $("body").off("." + self.namespace).css("overflow-x", self.bodyOverflowX);
          $("body").off("." + self.namespace);
          self.$elProxy.off("." + self.namespace + "-autoClose");
          self.options.functionAfter.call(self.$el, self.$el);
          finishCallbacks()
        };
        if (supportsTransitions()) {
          self.$tooltip.clearQueue().removeClass("tooltipster-" + self.options.animation + "-show").addClass("tooltipster-dying");
          if (self.options.speed > 0) self.$tooltip.delay(self.options.speed);
          self.$tooltip.queue(finish)
        } else {
          self.$tooltip.stop().fadeOut(self.options.speed, finish)
        }
      } else if (self.Status == "hidden") {
        finishCallbacks()
      }
      return self
    }, show: function (callback) {
      this._showNow(callback);
      return this
    }, update: function (c) {
      return this.content(c)
    }, content: function (c) {
      if (typeof c === "undefined") {
        return this.Content
      } else {
        this._update(c);
        return this
      }
    }, reposition: function () {
      var self = this;
      if ($("body").find(self.$tooltip).length !== 0) {
        self.$tooltip.css("width", "");
        self.elProxyPosition = self._repositionInfo(self.$elProxy);
        var arrowReposition = null, windowWidth = $(window).width(), proxy = self.elProxyPosition,
          tooltipWidth = self.$tooltip.outerWidth(!1), tooltipInnerWidth = self.$tooltip.innerWidth() + 1,
          tooltipHeight = self.$tooltip.outerHeight(!1);
        if (self.$elProxy.is("area")) {
          var areaShape = self.$elProxy.attr("shape"), mapName = self.$elProxy.parent().attr("name"),
            map = $("img[usemap=\"#" + mapName + "\"]"), mapOffsetLeft = map.offset().left,
            mapOffsetTop = map.offset().top,
            areaMeasurements = self.$elProxy.attr("coords") !== undefined ? self.$elProxy.attr("coords").split(",") : undefined;
          if (areaShape == "circle") {
            var areaLeft = parseInt(areaMeasurements[0]), areaTop = parseInt(areaMeasurements[1]),
              areaWidth = parseInt(areaMeasurements[2]);
            proxy.dimension.height = areaWidth * 2;
            proxy.dimension.width = areaWidth * 2;
            proxy.offset.top = mapOffsetTop + areaTop - areaWidth;
            proxy.offset.left = mapOffsetLeft + areaLeft - areaWidth
          } else if (areaShape == "rect") {
            var areaLeft = parseInt(areaMeasurements[0]), areaTop = parseInt(areaMeasurements[1]),
              areaRight = parseInt(areaMeasurements[2]), areaBottom = parseInt(areaMeasurements[3]);
            proxy.dimension.height = areaBottom - areaTop;
            proxy.dimension.width = areaRight - areaLeft;
            proxy.offset.top = mapOffsetTop + areaTop;
            proxy.offset.left = mapOffsetLeft + areaLeft
          } else if (areaShape == "poly") {
            var areaXs = [], areaYs = [], areaSmallestX = 0, areaSmallestY = 0, areaGreatestX = 0, areaGreatestY = 0,
              arrayAlternate = "even";
            for (var i = 0; i < areaMeasurements.length; i++) {
              var areaNumber = parseInt(areaMeasurements[i]);
              if (arrayAlternate == "even") {
                if (areaNumber > areaGreatestX) {
                  areaGreatestX = areaNumber;
                  if (i === 0) {
                    areaSmallestX = areaGreatestX
                  }
                }
                if (areaNumber < areaSmallestX) {
                  areaSmallestX = areaNumber
                }
                arrayAlternate = "odd"
              } else {
                if (areaNumber > areaGreatestY) {
                  areaGreatestY = areaNumber;
                  if (i == 1) {
                    areaSmallestY = areaGreatestY
                  }
                }
                if (areaNumber < areaSmallestY) {
                  areaSmallestY = areaNumber
                }
                arrayAlternate = "even"
              }
            }
            proxy.dimension.height = areaGreatestY - areaSmallestY;
            proxy.dimension.width = areaGreatestX - areaSmallestX;
            proxy.offset.top = mapOffsetTop + areaSmallestY;
            proxy.offset.left = mapOffsetLeft + areaSmallestX
          } else {
            proxy.dimension.height = map.outerHeight(!1);
            proxy.dimension.width = map.outerWidth(!1);
            proxy.offset.top = mapOffsetTop;
            proxy.offset.left = mapOffsetLeft
          }
        }
        var myLeft = 0, myLeftMirror = 0, myTop = 0, offsetY = parseInt(self.options.offsetY),
          offsetX = parseInt(self.options.offsetX), practicalPosition = self.options.position;

        function dontGoOffScreenX() {
          var windowLeft = $(window).scrollLeft();
          if ((myLeft - windowLeft) < 0) {
            arrowReposition = myLeft - windowLeft;
            myLeft = windowLeft
          }
          if (((myLeft + tooltipWidth) - windowLeft) > windowWidth) {
            arrowReposition = myLeft - ((windowWidth + windowLeft) - tooltipWidth);
            myLeft = (windowWidth + windowLeft) - tooltipWidth
          }
        }

        function dontGoOffScreenY(switchTo, switchFrom) {
          if (((proxy.offset.top - $(window).scrollTop() - tooltipHeight - offsetY - 12) < 0) && (switchFrom.indexOf("top") > -1)) {
            practicalPosition = switchTo
          }
          if (((proxy.offset.top + proxy.dimension.height + tooltipHeight + 12 + offsetY) > ($(window).scrollTop() + $(window).height())) && (switchFrom.indexOf("bottom") > -1)) {
            practicalPosition = switchTo;
            myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12
          }
        }

        if (practicalPosition == "top" || practicalPosition == "top_always") {
          var leftDifference = (proxy.offset.left + tooltipWidth) - (proxy.offset.left + proxy.dimension.width);
          myLeft = (proxy.offset.left + offsetX) - (leftDifference / 2);
          myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
          dontGoOffScreenX();
          if (practicalPosition == "top") {
            dontGoOffScreenY("bottom", "top")
          }
          practicalPosition = "top"
        }
        if (practicalPosition == "top-left") {
          myLeft = proxy.offset.left + offsetX;
          myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
          dontGoOffScreenX();
          dontGoOffScreenY("bottom-left", "top-left")
        }
        if (practicalPosition == "top-right") {
          myLeft = (proxy.offset.left + proxy.dimension.width + offsetX) - tooltipWidth;
          myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
          dontGoOffScreenX();
          dontGoOffScreenY("bottom-right", "top-right")
        }
        if (practicalPosition == "bottom") {
          var leftDifference = (proxy.offset.left + tooltipWidth) - (proxy.offset.left + proxy.dimension.width);
          myLeft = proxy.offset.left - (leftDifference / 2) + offsetX;
          myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
          dontGoOffScreenX();
          dontGoOffScreenY("top", "bottom")
        }
        if (practicalPosition == "bottom-left") {
          myLeft = proxy.offset.left + offsetX;
          myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
          dontGoOffScreenX();
          dontGoOffScreenY("top-left", "bottom-left")
        }
        if (practicalPosition == "bottom-right") {
          myLeft = (proxy.offset.left + proxy.dimension.width + offsetX) - tooltipWidth;
          myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
          dontGoOffScreenX();
          dontGoOffScreenY("top-right", "bottom-right")
        }
        if (practicalPosition == "left") {
          myLeft = proxy.offset.left - offsetX - tooltipWidth - 12;
          myLeftMirror = proxy.offset.left + offsetX + proxy.dimension.width + 12;
          var topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
          myTop = proxy.offset.top - (topDifference / 2) - offsetY;
          if ((myLeft < 0) && ((myLeftMirror + tooltipWidth) > windowWidth)) {
            var borderWidth = parseFloat(self.$tooltip.css("border-width")) * 2,
              newWidth = (tooltipWidth + myLeft) - borderWidth;
            self.$tooltip.css("width", newWidth + "px");
            tooltipHeight = self.$tooltip.outerHeight(!1);
            myLeft = proxy.offset.left - offsetX - newWidth - 12 - borderWidth;
            topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
            myTop = proxy.offset.top - (topDifference / 2) - offsetY
          } else if (myLeft < 0) {
            myLeft = proxy.offset.left + offsetX + proxy.dimension.width + 12;
            arrowReposition = "left"
          }
        }
        if (practicalPosition == "right") {
          myLeft = proxy.offset.left + offsetX + proxy.dimension.width + 12;
          myLeftMirror = proxy.offset.left - offsetX - tooltipWidth - 12;
          var topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
          myTop = proxy.offset.top - (topDifference / 2) - offsetY;
          if (((myLeft + tooltipWidth) > windowWidth) && (myLeftMirror < 0)) {
            var borderWidth = parseFloat(self.$tooltip.css("border-width")) * 2,
              newWidth = (windowWidth - myLeft) - borderWidth;
            self.$tooltip.css("width", newWidth + "px");
            tooltipHeight = self.$tooltip.outerHeight(!1);
            topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
            myTop = proxy.offset.top - (topDifference / 2) - offsetY
          } else if ((myLeft + tooltipWidth) > windowWidth) {
            myLeft = proxy.offset.left - offsetX - tooltipWidth - 12;
            arrowReposition = "right"
          }
        }
        if (self.options.arrow) {
          var arrowClass = "tooltipster-arrow-" + practicalPosition;
          if (self.options.arrowColor.length < 1) {
            var arrowColor = self.$tooltip.css("background-color")
          } else {
            var arrowColor = self.options.arrowColor
          }
          if (!arrowReposition) {
            arrowReposition = ""
          } else if (arrowReposition == "left") {
            arrowClass = "tooltipster-arrow-right";
            arrowReposition = ""
          } else if (arrowReposition == "right") {
            arrowClass = "tooltipster-arrow-left";
            arrowReposition = ""
          } else {
            arrowReposition = "left:" + Math.round(arrowReposition) + "px;"
          }
          if ((practicalPosition == "top") || (practicalPosition == "top-left") || (practicalPosition == "top-right")) {
            var tooltipBorderWidth = parseFloat(self.$tooltip.css("border-bottom-width")),
              tooltipBorderColor = self.$tooltip.css("border-bottom-color")
          } else if ((practicalPosition == "bottom") || (practicalPosition == "bottom-left") || (practicalPosition == "bottom-right")) {
            var tooltipBorderWidth = parseFloat(self.$tooltip.css("border-top-width")),
              tooltipBorderColor = self.$tooltip.css("border-top-color")
          } else if (practicalPosition == "left") {
            var tooltipBorderWidth = parseFloat(self.$tooltip.css("border-right-width")),
              tooltipBorderColor = self.$tooltip.css("border-right-color")
          } else if (practicalPosition == "right") {
            var tooltipBorderWidth = parseFloat(self.$tooltip.css("border-left-width")),
              tooltipBorderColor = self.$tooltip.css("border-left-color")
          } else {
            var tooltipBorderWidth = parseFloat(self.$tooltip.css("border-bottom-width")),
              tooltipBorderColor = self.$tooltip.css("border-bottom-color")
          }
          if (tooltipBorderWidth > 1) {
            tooltipBorderWidth++
          }
          var arrowBorder = "";
          if (tooltipBorderWidth !== 0) {
            var arrowBorderSize = "", arrowBorderColor = "border-color: " + tooltipBorderColor + ";";
            if (arrowClass.indexOf("bottom") !== -1) {
              arrowBorderSize = "margin-top: -" + Math.round(tooltipBorderWidth) + "px;"
            } else if (arrowClass.indexOf("top") !== -1) {
              arrowBorderSize = "margin-bottom: -" + Math.round(tooltipBorderWidth) + "px;"
            } else if (arrowClass.indexOf("left") !== -1) {
              arrowBorderSize = "margin-right: -" + Math.round(tooltipBorderWidth) + "px;"
            } else if (arrowClass.indexOf("right") !== -1) {
              arrowBorderSize = "margin-left: -" + Math.round(tooltipBorderWidth) + "px;"
            }
            arrowBorder = "<span class=\"tooltipster-arrow-border\" style=\"" + arrowBorderSize + " " + arrowBorderColor + ";\"></span>"
          }
          self.$tooltip.find(".tooltipster-arrow").remove();
          var arrowConstruct = "<div class=\"" + arrowClass + " tooltipster-arrow\" style=\"" + arrowReposition + "\">" + arrowBorder + "<span style=\"border-color:" + arrowColor + ";\"></span></div>";
          self.$tooltip.append(arrowConstruct)
        }
        self.$tooltip.css({ "top": Math.round(myTop) + "px", "left": Math.round(myLeft) + "px" })
      }
      return self
    }, enable: function () {
      this.enabled = !0;
      return this
    }, disable: function () {
      this.hide();
      this.enabled = !1;
      return this
    }, destroy: function () {
      var self = this;
      self.hide();
      if (self.$el[0] !== self.$elProxy[0]) {
        self.$elProxy.remove()
      }
      self.$el.removeData(self.namespace).off("." + self.namespace);
      var ns = self.$el.data("tooltipster-ns");
      if (ns.length === 1) {
        var title = null;
        if (self.options.restoration === "previous") {
          title = self.$el.data("tooltipster-initialTitle")
        } else if (self.options.restoration === "current") {
          title = (typeof self.Content === "string") ? self.Content : $("<div></div>").append(self.Content).html()
        }
        if (title) {
          self.$el.attr("title", title)
        }
        self.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
      } else {
        ns = $.grep(ns, function (el, i) {
          return el !== self.namespace
        });
        self.$el.data("tooltipster-ns", ns)
      }
      return self
    }, elementIcon: function () {
      return (this.$el[0] !== this.$elProxy[0]) ? this.$elProxy[0] : undefined
    }, elementTooltip: function () {
      return this.$tooltip ? this.$tooltip[0] : undefined
    }, option: function (o, val) {
      if (typeof val == "undefined") return this.options[o]; else {
        this.options[o] = val;
        return this
      }
    }, status: function () {
      return this.Status
    }
  };
  $.fn[pluginName] = function () {
    var args = arguments;
    if (this.length === 0) {
      if (typeof args[0] === "string") {
        var methodIsStatic = !0;
        switch (args[0]) {
          case "setDefaults":
            $.extend(defaults, args[1]);
            break;
          default:
            methodIsStatic = !1;
            break
        }
        if (methodIsStatic) return !0; else return this
      } else {
        return this
      }
    } else {
      if (typeof args[0] === "string") {
        var v = "#*$~&";
        this.each(function () {
          var ns = $(this).data("tooltipster-ns"), self = ns ? $(this).data(ns[0]) : null;
          if (self) {
            if (typeof self[args[0]] === "function") {
              var resp = self[args[0]](args[1], args[2])
            } else {
              throw new Error("Unknown method .tooltipster(\"" + args[0] + "\")")
            }
            if (resp !== self) {
              v = resp;
              return !1
            }
          } else {
            throw new Error("You called Tooltipster's \"" + args[0] + "\" method on an uninitialized element")
          }
        });
        return (v !== "#*$~&") ? v : this
      } else {
        var instances = [], multipleIsSet = args[0] && typeof args[0].multiple !== "undefined",
          multiple = (multipleIsSet && args[0].multiple) || (!multipleIsSet && defaults.multiple),
          debugIsSet = args[0] && typeof args[0].debug !== "undefined",
          debug = (debugIsSet && args[0].debug) || (!debugIsSet && defaults.debug);
        this.each(function () {
          var go = !1, ns = $(this).data("tooltipster-ns"), instance = null;
          if (!ns) {
            go = !0
          } else if (multiple) {
            go = !0
          } else if (debug) {
            console.log("Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the \"multiple\" option to attach more tooltips.")
          }
          if (go) {
            instance = new Plugin(this, args[0]);
            if (!ns) ns = [];
            ns.push(instance.namespace);
            $(this).data("tooltipster-ns", ns)
            $(this).data(instance.namespace, instance)
          }
          instances.push(instance)
        });
        if (multiple) return instances; else return this
      }
    }
  };

  function areEqual(a, b) {
    var same = !0;
    $.each(a, function (i, el) {
      if (typeof b[i] === "undefined" || a[i] !== b[i]) {
        same = !1;
        return !1
      }
    });
    return same
  }

  var deviceHasTouchCapability = !!("ontouchstart" in window);
  var deviceHasMouse = !1;
  $("body").one("mousemove", function () {
    deviceHasMouse = !0
  });

  function deviceIsPureTouch() {
    return (!deviceHasMouse && deviceHasTouchCapability)
  }

  function supportsTransitions() {
    var b = document.body || document.documentElement, s = b.style, p = "transition";
    if (typeof s[p] == "string") {
      return !0
    }
    v = ["Moz", "Webkit", "Khtml", "O", "ms"], p = p.charAt(0).toUpperCase() + p.substr(1);
    for (var i = 0; i < v.length; i++) {
      if (typeof s[v[i] + p] == "string") {
        return !0
      }
    }
    return !1
  }
})(jQuery, window, document);
(function ($, window, document, undefined) {
  "use strict";
  var cssTransitionSupport = function () {
      var s = document.body || document.documentElement, s = s.style;
      if (s.WebkitTransition == "") return "-webkit-";
      if (s.MozTransition == "") return "-moz-";
      if (s.OTransition == "") return "-o-";
      if (s.transition == "") return "";
      return !1
    }, isCssTransitionSupport = cssTransitionSupport() === !1 ? !1 : !0,
    cssTransitionTranslateX = function (element, positionX, speed) {
      var options = {}, prefix = cssTransitionSupport();
      options[prefix + "transform"] = "translateX(" + positionX + ")";
      options[prefix + "transition"] = prefix + "transform " + speed + "s linear";
      element.css(options)
    }, hasTouch = ("ontouchstart" in window),
    hasPointers = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, wasTouched = function (event) {
      if (hasTouch)
        return !0;
      if (!hasPointers || typeof event === "undefined" || typeof event.pointerType === "undefined")
        return !1;
      if (typeof event.MSPOINTER_TYPE_MOUSE !== "undefined") {
        if (event.MSPOINTER_TYPE_MOUSE != event.pointerType)
          return !0
      } else if (event.pointerType != "mouse")
        return !0;
      return !1
    };
  $.fn.imageLightbox = function (options) {
    var options = $.extend({
        selector: "id=\"imagelightbox\"",
        allowedTypes: "png|jpg|jpeg|gif",
        animationSpeed: 250,
        preloadNext: !0,
        enableKeyboard: !0,
        quitOnEnd: !1,
        quitOnImgClick: !1,
        quitOnDocClick: !0,
        onStart: !1,
        onEnd: !1,
        onLoadStart: !1,
        onLoadEnd: !1
      }, options), targets = $([]), target = $(), image = $(), imageWidth = 0, imageHeight = 0, swipeDiff = 0,
      inProgress = !1, isTargetValid = function (element) {
        return $(element).prop("tagName").toLowerCase() == "a" && (new RegExp("\.(" + options.allowedTypes + ")$", "i")).test($(element).attr("href"))
      }, setImage = function () {
        if (!image.length) return !0;
        var screenWidth = $(window).width() * 0.8, screenHeight = $(window).height() * 0.9, tmpImage = new Image();
        tmpImage.src = image.attr("src");
        tmpImage.onload = function () {
          imageWidth = tmpImage.width;
          imageHeight = tmpImage.height;
          if (imageWidth > screenWidth || imageHeight > screenHeight) {
            var ratio = imageWidth / imageHeight > screenWidth / screenHeight ? imageWidth / screenWidth : imageHeight / screenHeight;
            imageWidth /= ratio;
            imageHeight /= ratio
          }
          image.css({
            "width": imageWidth + "px",
            "height": imageHeight + "px",
            "top": ($(window).height() - imageHeight - 46) / 2 + "px",
            "left": ($(window).width() - imageWidth) / 2 + "px"
          })
        }
      }, loadImage = function (direction) {
        if (inProgress) return !1;
        direction = typeof direction === "undefined" ? !1 : direction == "left" ? 1 : -1;
        if (image.length) {
          if (direction !== !1 && (targets.length < 2 || (options.quitOnEnd === !0 && ((direction === -1 && targets.index(target) == 0) || (direction === 1 && targets.index(target) == targets.length - 1))))) {
            quitLightbox();
            return !1
          }
          var params = { "opacity": 0 };
          if (isCssTransitionSupport) cssTransitionTranslateX(image, (100 * direction) - swipeDiff + "px", options.animationSpeed / 1000); else params.left = parseInt(image.css("left")) + 100 * direction + "px";
          image.animate(params, options.animationSpeed, function () {
            removeImage()
          });
          swipeDiff = 0
        }
        inProgress = !0;
        if (options.onLoadStart !== !1) options.onLoadStart();
        setTimeout(function () {
          image = $("<img " + options.selector + " />").attr("src", target.attr("href")).load(function () {
            image.appendTo("body");
            setImage();
            var params = { "opacity": 1 };
            image.css("opacity", 0);
            if (isCssTransitionSupport) {
              cssTransitionTranslateX(image, -100 * direction + "px", 0);
              setTimeout(function () {
                cssTransitionTranslateX(image, 0 + "px", options.animationSpeed / 1000)
              }, 50)
            } else {
              var imagePosLeft = parseInt(image.css("left"));
              params.left = imagePosLeft + "px";
              image.css("left", imagePosLeft - 100 * direction + "px")
            }
            image.animate(params, options.animationSpeed, function () {
              inProgress = !1;
              if (options.onLoadEnd !== !1) options.onLoadEnd()
            });
            if (options.preloadNext) {
              var nextTarget = targets.eq(targets.index(target) + 1);
              if (!nextTarget.length) nextTarget = targets.eq(0);
              $("<img />").attr("src", nextTarget.attr("href")).load()
            }
          }).error(function () {
            if (options.onLoadEnd !== !1) options.onLoadEnd()
          })
          var swipeStart = 0, swipeEnd = 0, imagePosLeft = 0;
          image.on(hasPointers ? "pointerup MSPointerUp" : "click", function (e) {
            e.preventDefault();
            if (options.quitOnImgClick) {
              quitLightbox();
              return !1
            }
            if (wasTouched(e.originalEvent)) return !0;
            var posX = (e.pageX || e.originalEvent.pageX) - e.target.offsetLeft;
            target = targets.eq(targets.index(target) - (imageWidth / 2 > posX ? 1 : -1));
            if (!target.length) target = targets.eq(imageWidth / 2 > posX ? targets.length : 0);
            loadImage(imageWidth / 2 > posX ? "left" : "right")
          }).on("touchstart pointerdown MSPointerDown", function (e) {
            if (!wasTouched(e.originalEvent) || options.quitOnImgClick) return !0;
            if (isCssTransitionSupport) imagePosLeft = parseInt(image.css("left"));
            swipeStart = e.originalEvent.pageX || e.originalEvent.touches[0].pageX
          }).on("touchmove pointermove MSPointerMove", function (e) {
            if (!wasTouched(e.originalEvent) || options.quitOnImgClick) return !0;
            e.preventDefault();
            swipeEnd = e.originalEvent.pageX || e.originalEvent.touches[0].pageX;
            swipeDiff = swipeStart - swipeEnd;
            if (isCssTransitionSupport) cssTransitionTranslateX(image, -swipeDiff + "px", 0); else image.css("left", imagePosLeft - swipeDiff + "px")
          }).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", function (e) {
            if (!wasTouched(e.originalEvent) || options.quitOnImgClick) return !0;
            if (Math.abs(swipeDiff) > 50) {
              target = targets.eq(targets.index(target) - (swipeDiff < 0 ? 1 : -1));
              if (!target.length) target = targets.eq(swipeDiff < 0 ? targets.length : 0);
              loadImage(swipeDiff > 0 ? "right" : "left")
            } else {
              if (isCssTransitionSupport) cssTransitionTranslateX(image, 0 + "px", options.animationSpeed / 1000); else image.animate({ "left": imagePosLeft + "px" }, options.animationSpeed / 2)
            }
          })
        }, options.animationSpeed + 100)
      }, removeImage = function () {
        if (!image.length) return !1;
        image.remove();
        image = $()
      }, quitLightbox = function () {
        if (!image.length) return !1;
        image.animate({ "opacity": 0 }, options.animationSpeed, function () {
          removeImage();
          inProgress = !1;
          if (options.onEnd !== !1) options.onEnd()
        })
      };
    $(window).on("resize", setImage);
    if (options.quitOnDocClick) {
      $(document).on(hasTouch ? "touchend" : "click", function (e) {
        if (image.length && !$(e.target).is(image)) quitLightbox()
      })
    }
    if (options.enableKeyboard) {
      $(document).on("keyup", function (e) {
        if (!image.length) return !0;
        e.preventDefault();
        if (e.keyCode == 27) quitLightbox();
        if (e.keyCode == 37 || e.keyCode == 39) {
          target = targets.eq(targets.index(target) - (e.keyCode == 37 ? 1 : -1));
          if (!target.length) target = targets.eq(e.keyCode == 37 ? targets.length : 0);
          loadImage(e.keyCode == 37 ? "left" : "right")
        }
      })
    }
    $(document).on("click", this.selector, function (e) {
      if (!isTargetValid(this)) return !0;
      e.preventDefault();
      if (inProgress) return !1;
      inProgress = !1;
      if (options.onStart !== !1) options.onStart();
      target = $(this);
      loadImage()
    });
    this.each(function () {
      if (!isTargetValid(this)) return !0;
      targets = targets.add($(this))
    });
    this.switchImageLightbox = function (index) {
      var tmpTarget = targets.eq(index);
      if (tmpTarget.length) {
        var currentIndex = targets.index(target);
        target = tmpTarget;
        loadImage(index < currentIndex ? "left" : "right")
      }
      return this
    };
    this.quitImageLightbox = function () {
      quitLightbox();
      return this
    };
    return this
  }
})(jQuery, window, document);
(function ($) {
  var uuid = 0;
  $.fn.upload = function (url, data, callback, type) {
    var self = this, inputs, checkbox, checked, iframeName = "jquery_upload" + ++uuid,
      iframe = $("<iframe name=\"" + iframeName + "\" style=\"position:absolute;top:-9999px\" />").appendTo("body"),
      form = "<form target=\"" + iframeName + "\" method=\"post\" enctype=\"multipart/form-data\" />";
    if ($.isFunction(data)) {
      type = callback;
      callback = data;
      data = {}
    }
    checkbox = $("input:checkbox", this);
    checked = $("input:checked", this);
    form = self.wrapAll(form).parent("form").attr("action", url);
    checkbox.removeAttr("checked");
    checked.attr("checked", !0);
    inputs = createInputs(data);
    inputs = inputs ? $(inputs).appendTo(form) : null;
    form.submit(function () {
      iframe.load(function () {
        var data = handleData(this, type), checked = $("input:checked", self);
        form.after(self).remove();
        checkbox.removeAttr("checked");
        checked.attr("checked", !0);
        if (inputs) {
          inputs.remove()
        }
        setTimeout(function () {
          iframe.remove();
          if (type === "script") {
            $.globalEval(data)
          }
          if (callback) {
            callback.call(self, data)
          }
        }, 0)
      })
    }).submit();
    return this
  };

  function createInputs(data) {
    return $.map(param(data), function (param) {
      var e = $(document.createElement("input"));
      e.attr("type", "hidden");
      e.attr("name", param.name);
      e.attr("value", param.value);
      return e
    })
  }

  function param(data) {
    if ($.isArray(data)) {
      return data
    }
    var params = [];

    function add(name, value) {
      params.push({ name: name, value: value })
    }

    if (typeof data === "object") {
      $.each(data, function (name) {
        if ($.isArray(this)) {
          $.each(this, function () {
            add(name, this)
          })
        } else {
          add(name, $.isFunction(this) ? this() : this)
        }
      })
    } else if (typeof data === "string") {
      $.each(data.split("&"), function () {
        var param = $.map(this.split("="), function (v) {
          return decodeURIComponent(v.replace(/\+/g, " "))
        });
        add(param[0], param[1])
      })
    }
    return params
  }

  function handleData(iframe, type) {
    var data, contents = $(iframe).contents().get(0);
    if ($.isXMLDoc(contents) || contents.XMLDocument) {
      return contents.XMLDocument || contents
    }
    data = $(contents).find("body").text();
    switch (type) {
      case "xml":
        data = parseXml(data);
        break;
      case "json":
        data = $.parseJSON(data);
        break
    }
    return data
  }

  function parseXml(text) {
    if (window.DOMParser) {
      return new DOMParser().parseFromString(text, "application/xml")
    } else {
      var xml = new ActiveXObject("Microsoft.XMLDOM");
      xml.async = !1;
      xml.loadXML(text);
      return xml
    }
  }
})(jQuery);
(function ($) {
  $.Jcrop = function (obj, opt) {
    var obj = obj, opt = opt;
    if (typeof (obj) !== "object") obj = $(obj)[0];
    if (typeof (opt) !== "object") opt = {};
    if (!("trackDocument" in opt)) {
      opt.trackDocument = sof.browser.msie ? !1 : !0;
      if (sof.browser.msie && sof.browser.version.split(".")[0] == "8")
        opt.trackDocument = !0
    }
    if (!("keySupport" in opt))
      opt.keySupport = sof.browser.msie ? !1 : !0;
    var defaults = {
      trackDocument: !1,
      baseClass: "jcrop",
      addClass: null,
      bgColor: "black",
      bgOpacity: .6,
      borderOpacity: .4,
      handleOpacity: .5,
      handlePad: 5,
      handleSize: 9,
      handleOffset: 5,
      edgeMargin: 14,
      aspectRatio: 0,
      keySupport: !0,
      cornerHandles: !0,
      sideHandles: !0,
      drawBorders: !0,
      dragEdges: !0,
      boxWidth: 0,
      boxHeight: 0,
      boundary: 8,
      animationDelay: 20,
      swingSpeed: 3,
      allowSelect: !0,
      allowMove: !0,
      allowResize: !0,
      minSelect: [0, 0],
      maxSize: [0, 0],
      minSize: [0, 0],
      onChange: function () {
      },
      onSelect: function () {
      },
      onLoad: function () {
      }
    };
    var options = defaults;
    setOptions(opt);
    var $origimg = $(obj);
    var $img = $origimg.clone().removeAttr("id").css({ position: "absolute" });
    $img.width($origimg.width());
    $img.height($origimg.height());
    $origimg.after($img).hide();
    presize($img, options.boxWidth, options.boxHeight);
    var boundx = $img.width(), boundy = $img.height(),
      $div = $("<div />").width(boundx).height(boundy).addClass(cssClass("holder")).css({
        position: "relative",
        backgroundColor: options.bgColor
      }).insertAfter($origimg).append($img);
    if (options.addClass) $div.addClass(options.addClass);
    var $img2 = $("<img />").attr("src", $img.attr("src")).css("position", "absolute").width(boundx).height(boundy);
    var $img_holder = $("<div />").width(pct(100)).height(pct(100)).css({
      zIndex: 310,
      position: "absolute",
      overflow: "hidden"
    }).append($img2);
    var $hdl_holder = $("<div />").width(pct(100)).height(pct(100)).css("zIndex", 320);
    var $sel = $("<div />").css({
      position: "absolute",
      zIndex: 300
    }).insertBefore($img).append($img_holder, $hdl_holder);
    var bound = options.boundary;
    var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
      position: "absolute",
      top: px(-bound),
      left: px(-bound),
      zIndex: 290
    }).mousedown(newSelection);
    var xlimit, ylimit, xmin, ymin;
    var xscale, yscale, enabled = !0;
    var docOffset = getPos($img), btndown, lastcurs, dimmed, animating, shift_down;
    var Coords = function () {
      var x1 = 0, y1 = 0, x2 = 0, y2 = 0, ox, oy;

      function setPressed(pos) {
        var pos = rebound(pos);
        x2 = x1 = pos[0];
        y2 = y1 = pos[1]
      };

      function setCurrent(pos) {
        var pos = rebound(pos);
        ox = pos[0] - x2;
        oy = pos[1] - y2;
        x2 = pos[0];
        y2 = pos[1]
      };

      function getOffset() {
        return [ox, oy]
      };

      function moveOffset(offset) {
        var ox = offset[0], oy = offset[1];
        if (0 > x1 + ox) ox -= ox + x1;
        if (0 > y1 + oy) oy -= oy + y1;
        if (boundy < y2 + oy) oy += boundy - (y2 + oy);
        if (boundx < x2 + ox) ox += boundx - (x2 + ox);
        x1 += ox;
        x2 += ox;
        y1 += oy;
        y2 += oy
      };

      function getCorner(ord) {
        var c = getFixed();
        switch (ord) {
          case "ne":
            return [c.x2, c.y];
          case "nw":
            return [c.x, c.y];
          case "se":
            return [c.x2, c.y2];
          case "sw":
            return [c.x, c.y2]
        }
      };

      function getFixed() {
        if (!options.aspectRatio) return getRect();
        var aspect = options.aspectRatio, min_x = options.minSize[0] / xscale, min_y = options.minSize[1] / yscale,
          max_x = options.maxSize[0] / xscale, max_y = options.maxSize[1] / yscale, rw = x2 - x1, rh = y2 - y1,
          rwa = Math.abs(rw), rha = Math.abs(rh), real_ratio = rwa / rha, xx, yy;
        if (max_x == 0) {
          max_x = boundx * 10
        }
        if (max_y == 0) {
          max_y = boundy * 10
        }
        if (real_ratio < aspect) {
          yy = y2;
          w = rha * aspect;
          xx = rw < 0 ? x1 - w : w + x1;
          if (xx < 0) {
            xx = 0;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1
          } else if (xx > boundx) {
            xx = boundx;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1
          }
        } else {
          xx = x2;
          h = rwa / aspect;
          yy = rh < 0 ? y1 - h : y1 + h;
          if (yy < 0) {
            yy = 0;
            w = Math.abs((yy - y1) * aspect);
            xx = rw < 0 ? x1 - w : w + x1
          } else if (yy > boundy) {
            yy = boundy;
            w = Math.abs(yy - y1) * aspect;
            xx = rw < 0 ? x1 - w : w + x1
          }
        }
        if (xx > x1) {
          if (xx - x1 < min_x) {
            xx = x1 + min_x
          } else if (xx - x1 > max_x) {
            xx = x1 + max_x
          }
          if (yy > y1) {
            yy = y1 + (xx - x1) / aspect
          } else {
            yy = y1 - (xx - x1) / aspect
          }
        } else if (xx < x1) {
          if (x1 - xx < min_x) {
            xx = x1 - min_x
          } else if (x1 - xx > max_x) {
            xx = x1 - max_x
          }
          if (yy > y1) {
            yy = y1 + (x1 - xx) / aspect
          } else {
            yy = y1 - (x1 - xx) / aspect
          }
        }
        if (xx < 0) {
          x1 -= xx;
          xx = 0
        } else if (xx > boundx) {
          x1 -= xx - boundx;
          xx = boundx
        }
        if (yy < 0) {
          y1 -= yy;
          yy = 0
        } else if (yy > boundy) {
          y1 -= yy - boundy;
          yy = boundy
        }
        return last = makeObj(flipCoords(x1, y1, xx, yy))
      };

      function rebound(p) {
        if (p[0] < 0) p[0] = 0;
        if (p[1] < 0) p[1] = 0;
        if (p[0] > boundx) p[0] = boundx;
        if (p[1] > boundy) p[1] = boundy;
        return [p[0], p[1]]
      };

      function flipCoords(x1, y1, x2, y2) {
        var xa = x1, xb = x2, ya = y1, yb = y2;
        if (x2 < x1) {
          xa = x2;
          xb = x1
        }
        if (y2 < y1) {
          ya = y2;
          yb = y1
        }
        return [Math.round(xa), Math.round(ya), Math.round(xb), Math.round(yb)]
      };

      function getRect() {
        var xsize = x2 - x1;
        var ysize = y2 - y1;
        if (xlimit && (Math.abs(xsize) > xlimit))
          x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
        if (ylimit && (Math.abs(ysize) > ylimit))
          y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
        if (ymin && (Math.abs(ysize) < ymin))
          y2 = (ysize > 0) ? (y1 + ymin) : (y1 - ymin);
        if (xmin && (Math.abs(xsize) < xmin))
          x2 = (xsize > 0) ? (x1 + xmin) : (x1 - xmin);
        if (x1 < 0) {
          x2 -= x1;
          x1 -= x1
        }
        if (y1 < 0) {
          y2 -= y1;
          y1 -= y1
        }
        if (x2 < 0) {
          x1 -= x2;
          x2 -= x2
        }
        if (y2 < 0) {
          y1 -= y2;
          y2 -= y2
        }
        if (x2 > boundx) {
          var delta = x2 - boundx;
          x1 -= delta;
          x2 -= delta
        }
        if (y2 > boundy) {
          var delta = y2 - boundy;
          y1 -= delta;
          y2 -= delta
        }
        if (x1 > boundx) {
          var delta = x1 - boundy;
          y2 -= delta;
          y1 -= delta
        }
        if (y1 > boundy) {
          var delta = y1 - boundy;
          y2 -= delta;
          y1 -= delta
        }
        return makeObj(flipCoords(x1, y1, x2, y2))
      };

      function makeObj(a) {
        return { x: a[0], y: a[1], x2: a[2], y2: a[3], w: a[2] - a[0], h: a[3] - a[1] }
      };
      return {
        flipCoords: flipCoords,
        setPressed: setPressed,
        setCurrent: setCurrent,
        getOffset: getOffset,
        moveOffset: moveOffset,
        getCorner: getCorner,
        getFixed: getFixed
      }
    }();
    var Selection = function () {
      var start, end, dragmode, awake, hdep = 370;
      var borders = {};
      var handle = {};
      var seehandles = !1;
      var hhs = options.handleOffset;
      if (options.drawBorders) {
        borders = {
          top: insertBorder("hline").css("top", sof.browser.msie ? px(-1) : px(0)),
          bottom: insertBorder("hline"),
          left: insertBorder("vline"),
          right: insertBorder("vline")
        }
      }
      if (options.dragEdges) {
        handle.t = insertDragbar("n");
        handle.b = insertDragbar("s");
        handle.r = insertDragbar("e");
        handle.l = insertDragbar("w")
      }
      options.sideHandles && createHandles(["n", "s", "e", "w"]);
      options.cornerHandles && createHandles(["sw", "nw", "ne", "se"]);

      function insertBorder(type) {
        var jq = $("<div />").css({ position: "absolute", opacity: options.borderOpacity }).addClass(cssClass(type));
        $img_holder.append(jq);
        return jq
      };

      function dragDiv(ord, zi) {
        var jq = $("<div />").mousedown(createDragger(ord)).css({
          cursor: ord + "-resize",
          position: "absolute",
          zIndex: zi
        });
        $hdl_holder.append(jq);
        return jq
      };

      function insertHandle(ord) {
        return dragDiv(ord, hdep++).css({
          top: px(-hhs + 1),
          left: px(-hhs + 1),
          opacity: options.handleOpacity
        }).addClass(cssClass("handle"))
      };

      function insertDragbar(ord) {
        var s = options.handleSize, o = hhs, h = s, w = s, t = o, l = o;
        switch (ord) {
          case "n":
          case "s":
            w = pct(100);
            break;
          case "e":
          case "w":
            h = pct(100);
            break
        }
        return dragDiv(ord, hdep++).width(w).height(h).css({ top: px(-t + 1), left: px(-l + 1) })
      };

      function createHandles(li) {
        for (i in li) handle[li[i]] = insertHandle(li[i])
      };

      function moveHandles(c) {
        var midvert = Math.round((c.h / 2) - hhs), midhoriz = Math.round((c.w / 2) - hhs), north = west = -hhs + 1,
          east = c.w - hhs, south = c.h - hhs, x, y;
        "e" in handle && handle.e.css({
          top: px(midvert),
          left: px(east)
        }) && handle.w.css({ top: px(midvert) }) && handle.s.css({
          top: px(south),
          left: px(midhoriz)
        }) && handle.n.css({ left: px(midhoriz) });
        "ne" in handle && handle.ne.css({ left: px(east) }) && handle.se.css({
          top: px(south),
          left: px(east)
        }) && handle.sw.css({ top: px(south) });
        "b" in handle && handle.b.css({ top: px(south) }) && handle.r.css({ left: px(east) })
      };

      function moveto(x, y) {
        $img2.css({ top: px(-y), left: px(-x) });
        $sel.css({ top: px(y), left: px(x) })
      };

      function resize(w, h) {
        $sel.width(w).height(h)
      };

      function refresh() {
        var c = Coords.getFixed();
        Coords.setPressed([c.x, c.y]);
        Coords.setCurrent([c.x2, c.y2]);
        updateVisible()
      };

      function updateVisible() {
        if (awake) return update()
      };

      function update() {
        var c = Coords.getFixed();
        resize(c.w, c.h);
        moveto(c.x, c.y);
        options.drawBorders && borders.right.css({ left: px(c.w - 1) }) && borders.bottom.css({ top: px(c.h - 1) });
        seehandles && moveHandles(c);
        awake || show();
        options.onChange(unscale(c))
      };

      function show() {
        $sel.show();
        $img.css("opacity", options.bgOpacity);
        awake = !0
      };

      function release() {
        disableHandles();
        $sel.hide();
        $img.css("opacity", 1);
        awake = !1
      };

      function showHandles() {
        if (seehandles) {
          moveHandles(Coords.getFixed());
          $hdl_holder.show()
        }
      };

      function enableHandles() {
        seehandles = !0;
        if (options.allowResize) {
          moveHandles(Coords.getFixed());
          $hdl_holder.show();
          return !0
        }
      };

      function disableHandles() {
        seehandles = !1;
        $hdl_holder.hide()
      };

      function animMode(v) {
        (animating = v) ? disableHandles() : enableHandles()
      };

      function done() {
        animMode(!1);
        refresh();
        options.onLoad(unscale(Coords.getFixed()))
      };var $track = newTracker().mousedown(createDragger("move")).css({
        cursor: "move",
        position: "absolute",
        zIndex: 360
      })
      $img_holder.append($track);
      disableHandles();
      return {
        updateVisible: updateVisible,
        update: update,
        release: release,
        refresh: refresh,
        setCursor: function (cursor) {
          $track.css("cursor", cursor)
        },
        enableHandles: enableHandles,
        enableOnly: function () {
          seehandles = !0
        },
        showHandles: showHandles,
        disableHandles: disableHandles,
        animMode: animMode,
        done: done
      }
    }();
    var Tracker = function () {
      var onMove = function () {
      }, onDone = function () {
      }, trackDoc = options.trackDocument;
      if (!trackDoc) {
        $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp)
      }

      function toFront() {
        $trk.css({ zIndex: 450 });
        if (trackDoc) {
          $(document).mousemove(trackMove).mouseup(trackUp)
        }
      }

      function toBack() {
        $trk.css({ zIndex: 290 });
        if (trackDoc) {
          $(document).unbind("mousemove", trackMove).unbind("mouseup", trackUp)
        }
      }

      function trackMove(e) {
        onMove(mouseAbs(e))
      };

      function trackUp(e) {
        e.preventDefault();
        e.stopPropagation();
        if (btndown) {
          btndown = !1;
          onDone(mouseAbs(e));
          options.onSelect(unscale(Coords.getFixed()));
          toBack();
          onMove = function () {
          };
          onDone = function () {
          }
        }
        return !1
      };

      function activateHandlers(move, done) {
        btndown = !0;
        onMove = move;
        onDone = done;
        toFront();
        return !1
      };

      function setCursor(t) {
        $trk.css("cursor", t)
      };$img.before($trk);
      return { activateHandlers: activateHandlers, setCursor: setCursor }
    }();
    var KeyManager = function () {
      var $keymgr = $("<input type=\"radio\" />").css({
          position: "absolute",
          left: "-30px"
        }).keypress(parseKey).blur(onBlur),
        $keywrap = $("<div />").css({ position: "absolute", overflow: "hidden" }).append($keymgr);

      function watchKeys() {
        if (options.keySupport) {
          $keymgr.show();
          $keymgr.focus()
        }
      };

      function onBlur(e) {
        $keymgr.hide()
      };

      function doNudge(e, x, y) {
        if (options.allowMove) {
          Coords.moveOffset([x, y]);
          Selection.updateVisible()
        }
        ;e.preventDefault();
        e.stopPropagation()
      };

      function parseKey(e) {
        if (e.ctrlKey) return !0;
        shift_down = e.shiftKey ? !0 : !1;
        var nudge = shift_down ? 10 : 1;
        switch (e.keyCode) {
          case 37:
            doNudge(e, -nudge, 0);
            break;
          case 39:
            doNudge(e, nudge, 0);
            break;
          case 38:
            doNudge(e, 0, -nudge);
            break;
          case 40:
            doNudge(e, 0, nudge);
            break;
          case 27:
            Selection.release();
            break;
          case 9:
            return !0
        }
        return nothing(e)
      };
      if (options.keySupport) $keywrap.insertBefore($img);
      return { watchKeys: watchKeys }
    }();

    function px(n) {
      return "" + parseInt(n) + "px"
    };

    function pct(n) {
      return "" + parseInt(n) + "%"
    };

    function cssClass(cl) {
      return options.baseClass + "-" + cl
    };

    function getPos(obj) {
      var pos = $(obj).offset();
      return [pos.left, pos.top]
    };

    function mouseAbs(e) {
      return [(e.pageX - docOffset[0]), (e.pageY - docOffset[1])]
    };

    function myCursor(type) {
      if (type != lastcurs) {
        Tracker.setCursor(type);
        lastcurs = type
      }
    };

    function startDragMode(mode, pos) {
      docOffset = getPos($img);
      Tracker.setCursor(mode == "move" ? mode : mode + "-resize");
      if (mode == "move")
        return Tracker.activateHandlers(createMover(pos), doneSelect);
      var fc = Coords.getFixed();
      var opp = oppLockCorner(mode);
      var opc = Coords.getCorner(oppLockCorner(opp));
      Coords.setPressed(Coords.getCorner(opp));
      Coords.setCurrent(opc);
      Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect)
    };

    function dragmodeHandler(mode, f) {
      return function (pos) {
        if (!options.aspectRatio) switch (mode) {
          case "e":
            pos[1] = f.y2;
            break;
          case "w":
            pos[1] = f.y2;
            break;
          case "n":
            pos[0] = f.x2;
            break;
          case "s":
            pos[0] = f.x2;
            break
        }
        else switch (mode) {
          case "e":
            pos[1] = f.y + 1;
            break;
          case "w":
            pos[1] = f.y + 1;
            break;
          case "n":
            pos[0] = f.x + 1;
            break;
          case "s":
            pos[0] = f.x + 1;
            break
        }
        Coords.setCurrent(pos);
        Selection.update()
      }
    };

    function createMover(pos) {
      var lloc = pos;
      KeyManager.watchKeys();
      return function (pos) {
        Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
        lloc = pos;
        Selection.update()
      }
    };

    function oppLockCorner(ord) {
      switch (ord) {
        case "n":
          return "sw";
        case "s":
          return "nw";
        case "e":
          return "nw";
        case "w":
          return "ne";
        case "ne":
          return "sw";
        case "nw":
          return "se";
        case "se":
          return "nw";
        case "sw":
          return "ne"
      }
    };

    function createDragger(ord) {
      return function (e) {
        if (options.disabled) return !1;
        if ((ord == "move") && !options.allowMove) return !1;
        btndown = !0;
        startDragMode(ord, mouseAbs(e));
        e.stopPropagation();
        e.preventDefault();
        return !1
      }
    };

    function presize($obj, w, h) {
      var nw = $obj.width(), nh = $obj.height();
      if ((nw > w) && w > 0) {
        nw = w;
        nh = (w / $obj.width()) * $obj.height()
      }
      if ((nh > h) && h > 0) {
        nh = h;
        nw = (h / $obj.height()) * $obj.width()
      }
      xscale = $obj.width() / nw;
      yscale = $obj.height() / nh;
      $obj.width(nw).height(nh)
    };

    function unscale(c) {
      return {
        x: parseInt(c.x * xscale),
        y: parseInt(c.y * yscale),
        x2: parseInt(c.x2 * xscale),
        y2: parseInt(c.y2 * yscale),
        w: parseInt(c.w * xscale),
        h: parseInt(c.h * yscale)
      }
    };

    function doneSelect(pos) {
      var c = Coords.getFixed();
      if (c.w > options.minSelect[0] && c.h > options.minSelect[1]) {
        Selection.enableHandles();
        Selection.done()
      } else {
        Selection.release()
      }
      Tracker.setCursor(options.allowSelect ? "crosshair" : "default")
    };

    function newSelection(e) {
      if (options.disabled) return !1;
      if (!options.allowSelect) return !1;
      btndown = !0;
      docOffset = getPos($img);
      Selection.disableHandles();
      myCursor("crosshair");
      var pos = mouseAbs(e);
      Coords.setPressed(pos);
      Tracker.activateHandlers(selectDrag, doneSelect);
      KeyManager.watchKeys();
      Selection.update();
      e.stopPropagation();
      e.preventDefault();
      return !1
    };

    function selectDrag(pos) {
      Coords.setCurrent(pos);
      Selection.update()
    };

    function newTracker() {
      var trk = $("<div></div>").addClass(cssClass("tracker"));
      sof.browser.msie && trk.css({ opacity: 0, backgroundColor: "white" });
      return trk
    };

    function animateTo(a) {
      var x1 = a[0] / xscale, y1 = a[1] / yscale, x2 = a[2] / xscale, y2 = a[3] / yscale;
      if (animating) return;
      var animto = Coords.flipCoords(x1, y1, x2, y2);
      var c = Coords.getFixed();
      var animat = initcr = [c.x, c.y, c.x2, c.y2];
      var interv = options.animationDelay;
      var x = animat[0];
      var y = animat[1];
      var x2 = animat[2];
      var y2 = animat[3];
      var ix1 = animto[0] - initcr[0];
      var iy1 = animto[1] - initcr[1];
      var ix2 = animto[2] - initcr[2];
      var iy2 = animto[3] - initcr[3];
      var pcent = 0;
      var velocity = options.swingSpeed;
      Selection.animMode(!0);
      var animator = function () {
        return function () {
          pcent += (100 - pcent) / velocity;
          animat[0] = x + ((pcent / 100) * ix1);
          animat[1] = y + ((pcent / 100) * iy1);
          animat[2] = x2 + ((pcent / 100) * ix2);
          animat[3] = y2 + ((pcent / 100) * iy2);
          if (pcent < 100) animateStart(); else Selection.done();
          if (pcent >= 99.8) pcent = 100;
          setSelectRaw(animat)
        }
      }();

      function animateStart() {
        window.setTimeout(animator, interv)
      };animateStart()
    };

    function setSelect(rect) {
      setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale])
    };

    function setSelectRaw(l) {
      Coords.setPressed([l[0], l[1]]);
      Coords.setCurrent([l[2], l[3]]);
      Selection.update()
    };

    function setOptions(opt) {
      if (typeof (opt) != "object") opt = {};
      options = $.extend(options, opt);
      if (typeof (options.onChange) !== "function")
        options.onChange = function () {
        };
      if (typeof (options.onSelect) !== "function")
        options.onSelect = function () {
        };
      if (typeof (options.onLoad) !== "function")
        options.onLoad = function () {
        }
    };

    function tellSelect() {
      return unscale(Coords.getFixed())
    };

    function tellScaled() {
      return Coords.getFixed()
    };

    function setOptionsNew(opt) {
      setOptions(opt);
      interfaceUpdate()
    };

    function disableCrop() {
      options.disabled = !0;
      Selection.disableHandles();
      Selection.setCursor("default");
      Tracker.setCursor("default")
    };

    function enableCrop() {
      options.disabled = !1;
      interfaceUpdate()
    };

    function cancelCrop() {
      Selection.done();
      Tracker.activateHandlers(null, null)
    };

    function destroy() {
      $div.remove();
      $origimg.show()
    };

    function interfaceUpdate(alt) {
      options.allowResize ? alt ? Selection.enableOnly() : Selection.enableHandles() : Selection.disableHandles();
      Tracker.setCursor(options.allowSelect ? "crosshair" : "default");
      Selection.setCursor(options.allowMove ? "move" : "default");
      $div.css("backgroundColor", options.bgColor);
      if ("setSelect" in options) {
        setSelect(opt.setSelect);
        Selection.done();
        delete (options.setSelect)
      }
      if ("trueSize" in options) {
        xscale = options.trueSize[0] / boundx;
        yscale = options.trueSize[1] / boundy
      }
      xlimit = options.maxSize[0] || 0;
      ylimit = options.maxSize[1] || 0;
      xmin = options.minSize[0] || 0;
      ymin = options.minSize[1] || 0;
      if ("outerImage" in options) {
        $img.attr("src", options.outerImage);
        delete (options.outerImage)
      }
      Selection.refresh()
    };$hdl_holder.hide();
    interfaceUpdate(!0);
    var api = {
      animateTo: animateTo,
      setSelect: setSelect,
      setOptions: setOptionsNew,
      tellSelect: tellSelect,
      tellScaled: tellScaled,
      disable: disableCrop,
      enable: enableCrop,
      cancel: cancelCrop,
      focus: KeyManager.watchKeys,
      getBounds: function () {
        return [boundx * xscale, boundy * yscale]
      },
      getWidgetSize: function () {
        return [boundx, boundy]
      },
      release: Selection.release,
      destroy: destroy
    };
    $origimg.data("Jcrop", api);
    return api
  };
  $.fn.Jcrop = function (options) {
    function attachWhenDone(from) {
      var loadsrc = options.useImg || from.src;
      var img = new Image();
      img.onload = function () {
        $.Jcrop(from, options)
      };
      img.src = loadsrc
    };
    if (typeof (options) !== "object") options = {};
    this.each(function () {
      if ($(this).data("Jcrop")) {
        if (options == "api") return $(this).data("Jcrop"); else $(this).data("Jcrop").setOptions(options)
      } else attachWhenDone(this)
    });
    return this
  }
})(jQuery);
(function ($) {
  "use strict";
  var supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
  $.fn.dad = function (opts) {
    var _this = this;
    var defaults = {
      target: ">div",
      draggable: !1,
      placeholder: "",
      callback: !1,
      endCallback: !1,
      containerClass: "dad-container",
      childrenClass: "dads-children",
      cloneClass: "dads-children-clone",
      active: !0,
      drag_holder_offset: { x: 0, y: 0, width: 10, height: 10 }
    };
    var options = $.extend({}, defaults, opts);
    $(this).each(function () {
      var active = options.active;
      var $daddy = $(this);
      var childrenClass = options.childrenClass;
      var cloneClass = options.cloneClass;
      var jQclass = "." + childrenClass;
      var $target = $daddy.find(options.target);
      var placeholder = options.placeholder;
      var callback = options.callback;
      var endCallback = options.endCallback;
      var dragClass = "dad-draggable-area";
      var holderClass = "dads-children-placeholder";
      var mouse = {
        x: 0,
        y: 0,
        target: !1,
        clone: !1,
        placeholder: !1,
        cloneoffset: { x: 0, y: 0, },
        updatePosition: function (e) {
          this.x = e.pageX;
          this.y = e.pageY
        },
        move: function (e) {
          this.updatePosition(e);
          if (this.clone !== !1 && _this.target !== !1) {
            this.clone.css({ left: this.x - this.cloneoffset.x, top: this.y - this.cloneoffset.y, })
          }
        },
      };
      $(window).on("mousemove touchmove", function (e) {
        var ev = e;
        if (mouse.clone !== !1 && mouse.target !== !1) e.preventDefault();
        if (supportsTouch && e.type == "touchmove") {
          ev = e.originalEvent.touches[0];
          var mouseTarget = document.elementFromPoint(ev.clientX, ev.clientY);
          $(mouseTarget).trigger("touchenter")
        }
        mouse.move(ev)
      });
      $daddy.addClass(options.containerClass);
      if (!$daddy.hasClass("dad-active") && active === !0) {
        $daddy.addClass("dad-active")
      }
      ;_this.addDropzone = function (selector, func) {
        $(selector).on("mouseenter touchenter", function () {
          if (mouse.target !== !1) {
            mouse.placeholder.css({ display: "none" });
            mouse.target.css({ display: "none" });
            $(this).addClass("active")
          }
        }).on("mouseup touchend", function () {
          if (mouse.target != !1) {
            mouse.placeholder.css({ display: "block" });
            mouse.target.css({ display: "block" });
            func(mouse.target);
            dadEnd()
          }
          ;$(this).removeClass("active")
        }).on("mouseleave touchleave", function () {
          if (mouse.target !== !1) {
            mouse.placeholder.css({ display: "block" });
            mouse.target.css({ display: "block" })
          }
          $(this).removeClass("active")
        })
      };
      _this.getPosition = function () {
        var positionArray = [];
        $(this).find(jQclass).each(function () {
          positionArray[$(this).attr("data-dad-id")] = parseInt($(this).attr("data-dad-position"))
        });
        return positionArray
      };
      _this.activate = function () {
        active = !0;
        if (!$daddy.hasClass("dad-active")) {
          $daddy.addClass("dad-active")
        }
        return _this
      };
      _this.deactivate = function () {
        active = !1;
        $daddy.removeClass("dad-active");
        return _this
      };
      $daddy.on("DOMNodeInserted", function (e) {
        var $thisTarget = $(e.target);
        if (!$thisTarget.hasClass(childrenClass) && !$thisTarget.hasClass(holderClass)) {
          $thisTarget.addClass(childrenClass)
        }
      });
      $(document).on("mouseup touchend", function () {
        dadEnd()
      });
      var order = 1;
      $target.addClass(childrenClass).each(function () {
        if ($(this).data("dad-id") == undefined) {
          $(this).attr("data-dad-id", order)
        }
        $(this).attr("data-dad-position", order);
        order++
      });

      function updatePosition(e) {
        var order = 1;
        e.find(jQclass).each(function () {
          $(this).attr("data-dad-position", order);
          order++
        })
      }

      function dadEnd() {
        if (mouse.target != !1 && mouse.clone != !1) {
          if (callback != !1) {
            callback(mouse.target)
          }
          var appear = mouse.target;
          var desappear = mouse.clone;
          var holder = mouse.placeholder;
          var bLeft = 0;
          var bTop = 0;
          if ($.contains($daddy[0], mouse.target[0])) {
            mouse.clone.animate({
              top: mouse.target.offset().top - $daddy.offset().top - bTop,
              left: mouse.target.offset().left - $daddy.offset().left - bLeft,
            }, 300, function () {
              appear.css({ visibility: "visible", }).removeClass("active");
              desappear.remove();
              if (endCallback != !1) {
                endCallback()
              }
            })
          } else {
            mouse.clone.fadeOut(300, function () {
              desappear.remove();
              if (endCallback != !1) {
                endCallback()
              }
            })
          }
          holder.remove();
          mouse.clone = !1;
          mouse.placeholder = !1;
          mouse.target = !1;
          updatePosition($daddy)
        }
        $("html, body").removeClass("dad-noSelect")
      }

      function dadUpdate(obj) {
        if (mouse.target !== !1 && mouse.clone !== !1) {
          var $origin = $("<span style=\"display:none\"></span>");
          var $newplace = $("<span style=\"display:none\"></span>");
          if (obj.prevAll().hasClass("active")) {
            obj.after($newplace)
          } else {
            obj.before($newplace)
          }
          mouse.target.before($origin);
          $newplace.before(mouse.target);
          mouse.placeholder.css({
            top: mouse.target.offset().top - $daddy.offset().top - options.drag_holder_offset.y,
            left: mouse.target.offset().left - $daddy.offset().left - options.drag_holder_offset.x,
            width: mouse.target.outerWidth() - options.drag_holder_offset.width,
            height: mouse.target.outerHeight() - options.drag_holder_offset.height
          });
          $origin.remove();
          $newplace.remove()
        }
      }

      var jq = (options.draggable !== !1) ? options.draggable : jQclass;
      $daddy.find(jq).addClass(dragClass);
      $daddy.on("mousedown touchstart", jq, function (e) {
        if (e.type == "touchstart") {
          mouse.updatePosition(e.originalEvent.touches[0])
        }
        if (mouse.target == !1 && active == !0 && (e.which == 1 || e.type == "touchstart")) {
          var $self = $(this);
          if (options.draggable !== !1) {
            mouse.target = $daddy.find(jQclass).has(this)
          } else {
            mouse.target = $self
          }
          mouse.clone = mouse.target.clone();
          mouse.target.css({ visibility: "hidden" }).addClass("active");
          mouse.clone.addClass(cloneClass);
          $daddy.append(mouse.clone);
          var $placeholder = $("<div></div>");
          mouse.placeholder = $placeholder;
          mouse.placeholder.addClass(holderClass);
          mouse.placeholder.css({
            top: mouse.target.offset().top - $daddy.offset().top - options.drag_holder_offset.y,
            left: mouse.target.offset().left - $daddy.offset().left - options.drag_holder_offset.x,
            width: mouse.target.outerWidth() - options.drag_holder_offset.width,
            height: mouse.target.outerHeight() - options.drag_holder_offset.height,
            lineHeight: mouse.target.height() - 18 + "px",
            textAlign: "center"
          }).text(placeholder);
          $daddy.append(mouse.placeholder);
          var bLeft = Math.floor(parseFloat($daddy.css("border-left-width")));
          var bTop = Math.floor(parseFloat($daddy.css("border-top-width")));
          var difx = mouse.x - mouse.target.offset().left + $daddy.offset().left + bLeft;
          var dify = mouse.y - mouse.target.offset().top + $daddy.offset().top + bTop;
          mouse.cloneoffset.x = difx;
          mouse.cloneoffset.y = dify;
          mouse.clone.removeClass(childrenClass).css({
            position: "absolute",
            top: mouse.y - mouse.cloneoffset.y,
            left: mouse.x - mouse.cloneoffset.x,
          });
          $("html,body").addClass("dad-noSelect")
        }
      });
      $daddy.on("mouseenter touchenter", jQclass, function () {
        dadUpdate($(this))
      })
    });
    return this
  }
})(jQuery);
(function ($) {
  "use strict";

  function MultipleSelect($el, options) {
    var that = this, name = $el.attr("name") || options.name || ""
    var originalParentStyle = $el.parent().attr("style") || "";
    $el.parent().hide();
    var elWidth = $el.css("width");
    $el.parent().show().attr("style", originalParentStyle);
    if (elWidth == "0px") {
      elWidth = $el.outerWidth() + 20
    }
    this.$el = $el.hide();
    this.options = options;
    this.$parent = $("<div" + $.map(["class", "title"], function (att) {
      var attValue = that.$el.attr(att) || "";
      attValue = (att === "class" ? ("ms-parent" + (attValue ? " " : "")) : "") + attValue;
      return attValue ? (" " + att + "=\"" + attValue + "\"") : ""
    }).join("") + " />");
    this.$choice = $("<button type=\"button\" class=\"ms-choice\"><span class=\"placeholder\">" + options.placeholder + "</span><div></div></button>");
    this.$drop = $("<div class=\"ms-drop " + options.position + "\"></div>");
    this.$el.after(this.$parent);
    this.$parent.append(this.$choice);
    this.$parent.append(this.$drop);
    if (this.$el.prop("disabled")) {
      this.$choice.addClass("disabled")
    }
    this.$parent.css("width", options.width || elWidth);
    if (!this.options.keepOpen) {
      $("body").click(function (e) {
        if ($(e.target)[0] === that.$choice[0] || $(e.target).parents(".ms-choice")[0] === that.$choice[0]) {
          return
        }
        if (($(e.target)[0] === that.$drop[0] || $(e.target).parents(".ms-drop")[0] !== that.$drop[0]) && that.options.isOpen) {
          that.close()
        }
      })
    }
    this.selectAllName = "name=\"selectAll" + name + "\"";
    this.selectGroupName = "name=\"selectGroup" + name + "\"";
    this.selectItemName = "name=\"selectItem" + name + "\""
  }

  MultipleSelect.prototype = {
    constructor: MultipleSelect, init: function () {
      var that = this;
      this.$drop.empty();
      if (this.options.filter) {
        this.$drop.append("<div class=\"ms-search\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitilize=\"off\" spellcheck=\"false\" /></div>")
      }
      var ul = $("<ul></ul>");
      if (this.options.selectAll && !this.options.single) {
        ul.append("<li class=\"ms-select-all\">" + "<label>" + "<input type=\"checkbox\" " + this.selectAllName + " /> " + this.options.selectAllDelimiter[0] + this.options.selectAllText + this.options.selectAllDelimiter[1] + "</label>" + "</li>")
      }
      $.each(this.$el.children(), function (i, elm) {
        ul.append(that.optionToHtml(i, elm))
      });
      ul.append("<li class=\"ms-no-results\">" + this.options.noMatchesFound + "</li>");
      this.$drop.append(ul);
      this.$drop.find("ul").css("max-height", this.options.maxHeight + "px");
      this.$drop.find(".multiple").css("width", this.options.multipleWidth + "px");
      this.$searchInput = this.$drop.find(".ms-search input");
      this.$selectAll = this.$drop.find("input[" + this.selectAllName + "]");
      this.$selectGroups = this.$drop.find("input[" + this.selectGroupName + "]");
      this.$selectItems = this.$drop.find("input[" + this.selectItemName + "]:enabled");
      this.$disableItems = this.$drop.find("input[" + this.selectItemName + "]:disabled");
      this.$noResults = this.$drop.find(".ms-no-results");
      this.events();
      this.updateSelectAll(!0);
      this.update(!0);
      if (this.options.isOpen) {
        this.open()
      }
    }, optionToHtml: function (i, elm, group, groupDisabled) {
      var that = this, $elm = $(elm), html = [], multiple = this.options.multiple,
        optAttributesToCopy = ["class", "title"], clss = $.map(optAttributesToCopy, function (att, i) {
          var isMultiple = att === "class" && multiple;
          var attValue = $elm.attr(att) || "";
          return (isMultiple || attValue) ? (" " + att + "=\"" + (isMultiple ? ("multiple" + (attValue ? " " : "")) : "") + attValue + "\"") : ""
        }).join(""), disabled, type = this.options.single ? "radio" : "checkbox";
      if ($elm.is("option")) {
        var value = $elm.val(), text = that.options.textTemplate($elm),
          selected = (that.$el.attr("multiple") != undefined) ? $elm.prop("selected") : ($elm.attr("selected") == "selected"),
          style = this.options.styler(value) ? " style=\"" + this.options.styler(value) + "\"" : "";
        disabled = groupDisabled || $elm.prop("disabled");
        if ((this.options.blockSeparator > "") && (this.options.blockSeparator == $elm.val())) {
          html.push("<li" + clss + style + ">", "<label class=\"" + this.options.blockSeparator + (disabled ? "disabled" : "") + "\">", text, "</label>", "</li>")
        } else {
          html.push("<li" + clss + style + ">", "<label" + (disabled ? " class=\"disabled\"" : "") + ">", "<input type=\"" + type + "\" " + this.selectItemName + " value=\"" + value + "\"" + (selected ? " checked=\"checked\"" : "") + (disabled ? " disabled=\"disabled\"" : "") + (group ? " data-group=\"" + group + "\"" : "") + "/> ", text, "</label>", "</li>")
        }
      } else if (!group && $elm.is("optgroup")) {
        var _group = "group_" + i, label = $elm.attr("label");
        disabled = $elm.prop("disabled");
        html.push("<li class=\"group\">", "<label class=\"optgroup" + (disabled ? " disabled" : "") + "\" data-group=\"" + _group + "\">", (this.options.hideOptgroupCheckboxes ? "" : "<input type=\"checkbox\" " + this.selectGroupName + (disabled ? " disabled=\"disabled\"" : "") + " /> "), label, "</label>", "</li>");
        $.each($elm.children(), function (i, elm) {
          html.push(that.optionToHtml(i, elm, _group, disabled))
        })
      }
      return html.join("")
    }, events: function () {
      var that = this;

      function toggleOpen(e) {
        e.preventDefault();
        that[that.options.isOpen ? "close" : "open"]()
      }

      var label = this.$el.parent().closest("label")[0] || $("label[for=" + this.$el.attr("id").split(":").join("\\:") + "]")[0];
      if (label) {
        $(label).off("click").on("click", function (e) {
          if (e.target.nodeName.toLowerCase() !== "label" || e.target !== this) {
            return
          }
          toggleOpen(e);
          if (!that.options.filter || !that.options.isOpen) {
            that.focus()
          }
          e.stopPropagation()
        })
      }
      this.$choice.off("click").on("click", toggleOpen).off("focus").on("focus", this.options.onFocus).off("blur").on("blur", this.options.onBlur);
      this.$parent.off("keydown").on("keydown", function (e) {
        switch (e.which) {
          case 27:
            that.close();
            that.$choice.focus();
            break
        }
      });
      this.$searchInput.off("keydown").on("keydown", function (e) {
        if (e.keyCode === 9 && e.shiftKey) {
          that.close()
        }
      }).off("keyup").on("keyup", function (e) {
        if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which == 32) && that.$searchInput.val()) {
          that.$selectAll.click();
          that.close();
          that.focus();
          return
        }
        that.filter()
      });
      this.$selectAll.off("click").on("click", function () {
        var checked = $(this).prop("checked"), $items = that.$selectItems.filter(":visible");
        if ($items.length === that.$selectItems.length) {
          that[checked ? "checkAll" : "uncheckAll"]()
        } else {
          that.$selectGroups.prop("checked", checked);
          $items.prop("checked", checked);
          that.options[checked ? "onCheckAll" : "onUncheckAll"]();
          that.update()
        }
      });
      this.$selectGroups.off("click").on("click", function () {
        var group = $(this).parent().attr("data-group"), $items = that.$selectItems.filter(":visible"),
          $children = $items.filter("[data-group=\"" + group + "\"]"),
          checked = $children.length !== $children.filter(":checked").length;
        $children.prop("checked", checked);
        that.updateSelectAll();
        that.update();
        that.options.onOptgroupClick({ label: $(this).parent().text(), checked: checked, children: $children.get() })
      });
      this.$selectItems.off("click").on("click", function () {
        that.updateSelectAll();
        that.update();
        that.updateOptGroupSelect();
        that.options.onClick({
          label: $(this).parent().text(),
          value: $(this).val(),
          checked: $(this).prop("checked")
        });
        if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
          that.close()
        }
      })
    }, open: function () {
      if (this.$choice.hasClass("disabled")) {
        return
      }
      this.options.isOpen = !0;
      this.$choice.find(">div").addClass("open");
      this.$drop.show();
      this.$selectAll.parent().show();
      this.$noResults.hide();
      if (this.$el.children().length === 0) {
        this.$selectAll.parent().hide();
        this.$noResults.show()
      }
      if (this.options.container) {
        var offset = this.$drop.offset();
        this.$drop.appendTo($(this.options.container));
        this.$drop.offset({ top: offset.top, left: offset.left })
      }
      if (this.options.filter) {
        this.$searchInput.val("");
        this.$searchInput.focus();
        this.filter()
      }
      this.options.onOpen()
    }, close: function () {
      this.options.isOpen = !1;
      this.$choice.find(">div").removeClass("open");
      this.$drop.hide();
      if (this.options.container) {
        this.$parent.append(this.$drop);
        this.$drop.css({ "top": "auto", "left": "auto" })
      }
      this.options.onClose()
    }, update: function (isInit) {
      var selects = this.getSelects(), $span = this.$choice.find(">span");
      if (selects.length === 0) {
        $span.addClass("placeholder").html(this.options.placeholder)
      } else if (this.options.countSelected && selects.length < this.options.minimumCountSelected) {
        $span.removeClass("placeholder").text((this.options.displayValues ? selects : this.getSelects("text")).join(this.options.delimiter))
      } else if (this.options.allSelected && selects.length === this.$selectItems.length + this.$disableItems.length) {
        $span.removeClass("placeholder").html(this.options.allSelected)
      } else if ((this.options.countSelected || this.options.etcaetera) && selects.length > this.options.minimumCountSelected) {
        if (this.options.etcaetera) {
          $span.removeClass("placeholder").text((this.options.displayValues ? selects : this.getSelects("text").slice(0, this.options.minimumCountSelected)).join(this.options.delimiter) + "...")
        } else {
          $span.removeClass("placeholder").html(this.options.countSelected.replace("#", selects.length).replace("%", this.$selectItems.length + this.$disableItems.length))
        }
      } else {
        $span.removeClass("placeholder").text((this.options.displayValues ? selects : this.getSelects("text")).join(this.options.delimiter))
      }
      if (this.options.addTitle)
        $span.prop("title", this.getSelects("text"));
      this.$el.val(this.getSelects());
      this.$drop.find("li").removeClass("selected");
      this.$drop.find("input[" + this.selectItemName + "]:checked").each(function () {
        $(this).parents("li").first().addClass("selected")
      });
      if (!isInit) {
        this.$el.trigger("change")
      }
    }, updateSelectAll: function (Init) {
      var $items = this.$selectItems;
      if (!Init) {
        $items = $items.filter(":visible")
      }
      this.$selectAll.prop("checked", $items.length && $items.length === $items.filter(":checked").length);
      if (this.$selectAll.prop("checked")) {
        this.options.onCheckAll()
      }
    }, updateOptGroupSelect: function () {
      var $items = this.$selectItems.filter(":visible");
      $.each(this.$selectGroups, function (i, val) {
        var group = $(val).parent().attr("data-group"), $children = $items.filter("[data-group=\"" + group + "\"]");
        $(val).prop("checked", $children.length && $children.length === $children.filter(":checked").length)
      })
    }, getSelects: function (type) {
      var that = this, texts = [], values = [];
      this.$drop.find("input[" + this.selectItemName + "]:checked").each(function () {
        texts.push($(this).parents("li").first().text());
        values.push($(this).val())
      });
      if (type === "text" && this.$selectGroups.length) {
        texts = [];
        this.$selectGroups.each(function () {
          var html = [], text = $.trim($(this).parent().text()), group = $(this).parent().data("group"),
            $children = that.$drop.find("[" + that.selectItemName + "][data-group=\"" + group + "\"]"),
            $selected = $children.filter(":checked");
          if ($selected.length === 0) {
            return
          }
          html.push("[");
          html.push(text);
          if ($children.length > $selected.length) {
            var list = [];
            $selected.each(function () {
              list.push($(this).parent().text())
            });
            html.push(": " + list.join(", "))
          }
          html.push("]");
          texts.push(html.join(""))
        })
      }
      return type === "text" ? texts : values
    }, setSelects: function (values) {
      var that = this;
      this.$selectItems.prop("checked", !1);
      $.each(values, function (i, value) {
        that.$selectItems.filter("[value=\"" + value + "\"]").prop("checked", !0)
      });
      this.$selectAll.prop("checked", this.$selectItems.length === this.$selectItems.filter(":checked").length);
      this.update()
    }, enable: function () {
      this.$choice.removeClass("disabled")
    }, disable: function () {
      this.$choice.addClass("disabled")
    }, checkAll: function () {
      this.$selectItems.prop("checked", !0);
      this.$selectGroups.prop("checked", !0);
      this.$selectAll.prop("checked", !0);
      this.update();
      this.options.onCheckAll()
    }, uncheckAll: function () {
      this.$selectItems.prop("checked", !1);
      this.$selectGroups.prop("checked", !1);
      this.$selectAll.prop("checked", !1);
      this.update();
      this.options.onUncheckAll()
    }, focus: function () {
      this.$choice.focus();
      this.options.onFocus()
    }, blur: function () {
      this.$choice.blur();
      this.options.onBlur()
    }, refresh: function () {
      console.log("refresh");
      this.init()
    }, filter: function () {
      var that = this, text = $.trim(this.$searchInput.val()).toLowerCase();
      if (text.length === 0) {
        this.$selectItems.parent().show();
        this.$disableItems.parent().show();
        this.$selectGroups.parent().show()
      } else {
        this.$selectItems.each(function () {
          var $parent = $(this).parent();
          $parent[$parent.text().toLowerCase().indexOf(text) < 0 ? "hide" : "show"]()
        });
        this.$disableItems.parent().hide();
        this.$selectGroups.each(function () {
          var $parent = $(this).parent();
          var group = $parent.attr("data-group"), $items = that.$selectItems.filter(":visible");
          $parent[$items.filter("[data-group=\"" + group + "\"]").length === 0 ? "hide" : "show"]()
        });
        if (this.$selectItems.filter(":visible").length) {
          this.$selectAll.parent().show();
          this.$noResults.hide()
        } else {
          this.$selectAll.parent().hide();
          this.$noResults.show()
        }
      }
      this.updateOptGroupSelect();
      this.updateSelectAll()
    }
  };
  $.fn.multipleSelect = function () {
    var option = arguments[0], args = arguments, value,
      allowedMethods = ["getSelects", "setSelects", "enable", "disable", "checkAll", "uncheckAll", "focus", "blur", "refresh", "close"];
    this.each(function () {
      var $this = $(this), data = $this.data("multipleSelect"),
        options = $.extend({}, $.fn.multipleSelect.defaults, $this.data(), typeof option === "object" && option);
      if (!data) {
        data = new MultipleSelect($this, options);
        $this.data("multipleSelect", data)
      }
      if (typeof option === "string") {
        if ($.inArray(option, allowedMethods) < 0) {
          throw "Unknown method: " + option
        }
        value = data[option](args[1])
      } else {
        data.init();
        if (args[1]) {
          value = data[args[1]].apply(data, [].slice.call(args, 2))
        }
      }
    });
    return value ? value : this
  };
  $.fn.multipleSelect.defaults = {
    name: "",
    isOpen: !1,
    placeholder: "",
    selectAll: !0,
    selectAllText: "Выбрать все",
    selectAllDelimiter: ["[", "]"],
    allSelected: "Все выбрано",
    minimumCountSelected: 3,
    countSelected: "# из % выбрано",
    noMatchesFound: "Ничего не найдено",
    multiple: !1,
    multipleWidth: 80,
    single: !1,
    filter: !1,
    width: undefined,
    maxHeight: 250,
    container: null,
    position: "bottom",
    keepOpen: !1,
    blockSeparator: "",
    displayValues: !1,
    delimiter: ", ",
    addTitle: !1,
    styler: function () {
      return !1
    },
    textTemplate: function ($elm) {
      return $elm.text()
    },
    onOpen: function () {
      return !1
    },
    onClose: function () {
      return !1
    },
    onCheckAll: function () {
      return !1
    },
    onUncheckAll: function () {
      return !1
    },
    onFocus: function () {
      return !1
    },
    onBlur: function () {
      return !1
    },
    onOptgroupClick: function () {
      return !1
    },
    onClick: function () {
      return !1
    }
  }
})(jQuery);
(function ($) {
  "use strict";
  $.fn.selectOrDie = function (method) {
    var $defaults = {
      customID: null,
      customClass: "",
      placeholder: null,
      placeholderOption: !1,
      prefix: null,
      cycle: !1,
      stripEmpty: !1,
      links: !1,
      linksExternal: !1,
      size: 0,
      tabIndex: 0,
      onChange: $.noop
    }, $_settings = {}, $_sodKeysWhenClosed = !1, $_sodFilterTimeout, $_sodViewportTimeout;
    var _private = {
      initSoD: function (options) {
        $_settings = $.extend({}, $defaults, options);
        return this.each(function () {
          if (!$(this).parent().hasClass("sod_select")) {
            var $select = $(this),
              $settingsId = $select.data("custom-id") ? $select.data("custom-id") : $_settings.customID,
              $settingsClass = $select.data("custom-class") ? $select.data("custom-class") : $_settings.customClass,
              $settingsPrefix = $select.data("prefix") ? $select.data("prefix") : $_settings.prefix,
              $settingsPlaceholder = $select.data("placeholder") ? $select.data("placeholder") : $_settings.placeholder,
              $settingsPlaceholderOption = $select.data("placeholder-option") ? $select.data("placeholder-option") : $_settings.placeholderOption,
              $settingsCycle = $select.data("cycle") ? $select.data("cycle") : $_settings.cycle,
              $settingsLinks = $select.data("links") ? $select.data("links") : $_settings.links,
              $settingsLinksExternal = $select.data("links-external") ? $select.data("links-external") : $_settings.linksExternal,
              $settingsSize = parseInt($select.data("size")) ? $select.data("size") : $_settings.size,
              $settingsTabIndex = parseInt($select.data("tabindex")) ? $select.data("tabindex") : ($_settings.tabIndex ? $_settings.tabIndex : ($select.attr("tabindex") ? $select.attr("tabindex") : $_settings.tabIndex)),
              $settingsStripEmpty = $select.data("strip-empty") ? $select.data("strip-empty") : $_settings.stripEmpty,
              $selectTitle = $select.prop("title") ? $select.prop("title") : null,
              $selectDisabled = $select.is(":disabled") ? " disabled" : "", $sodPrefix = "", $sodHtml = "",
              $sodHeight = 0, $sod, $sodListWrapper, $sodList;
            if ($settingsPrefix) {
              $sodPrefix = "<span class=\"sod_prefix\">" + $settingsPrefix + "</span> "
            }
            if ($settingsPlaceholder && !$settingsPrefix) {
              $sodHtml += "<span class=\"sod_label sod_placeholder\">" + $settingsPlaceholder + "</span>"
            } else {
              $sodHtml += "<span class=\"sod_label\">" + $sodPrefix + "</span>"
            }
            $sod = $("<span/>", {
              id: $settingsId,
              "class": "sod_select " + $settingsClass + $selectDisabled,
              title: $selectTitle,
              tabindex: $settingsTabIndex,
              html: $sodHtml,
              "data-cycle": $settingsCycle,
              "data-links": $settingsLinks,
              "data-links-external": $settingsLinksExternal,
              "data-placeholder": $settingsPlaceholder,
              "data-placeholder-option": $settingsPlaceholderOption,
              "data-prefix": $settingsPrefix,
              "data-filter": ""
            }).insertAfter(this);
            if (_private.isTouch()) {
              $sod.addClass("touch")
            }
            $sodListWrapper = $("<span/>", { "class": "sod_list_wrapper" }).appendTo($sod);
            $sodList = $("<span/>", { "class": "sod_list" }).appendTo($sodListWrapper);
            $("option, optgroup", $select).each(function (i) {
              var $this = $(this);
              if ($settingsStripEmpty && !$.trim($this.text())) {
                $this.remove()
              } else if (i === 0 && $settingsPlaceholderOption && !$sodPrefix)
                _private.populateSoD($this, $sodList, $sod, !0); else {
                _private.populateSoD($this, $sodList, $sod, !1)
              }
            });
            if ($settingsSize) {
              $sodListWrapper.show();
              $(".sod_option:lt(" + $settingsSize + ")", $sodList).each(function () {
                $sodHeight += $(this).outerHeight()
              });
              $sodListWrapper.removeAttr("style");
              $sodList.css({ "max-height": $sodHeight })
            }
            $select.appendTo($sod);
            $sod.on("focusin", _private.focusSod).on("click", _private.triggerSod).on("click", ".sod_option", _private.optionClick).on("mousemove", ".sod_option", _private.optionHover).on("keydown", _private.keyboardUse);
            $select.on("change", _private.selectChange);
            $(document).on("click", "label[for='" + $select.attr("id") + "']", function (e) {
              e.preventDefault();
              $sod.focus()
            })
          } else {
            console.log("Select or Die: It looks like the SoD already exists")
          }
        })
      }, populateSoD: function ($option, $sodList, $sod, $isPlaceholder) {
        var $sodPlaceholder = $sod.data("placeholder"), $sodPlaceholderOption = $sod.data("placeholder-option"),
          $sodPrefix = $sod.data("prefix"), $sodLabel = $sod.find(".sod_label"), $optionParent = $option.parent(),
          $optionText = $option.text(), $optionValue = $option.val(),
          $optionCustomId = $option.data("custom-id") ? $option.data("custom-id") : null,
          $optionCustomClass = $option.data("custom-class") ? $option.data("custom-class") : "",
          $optionIsDisabled = $option.is(":disabled") ? " disabled " : "",
          $optionIsSelected = $option.is(":selected") ? " selected active " : "",
          $optionLink = $option.data("link") ? " link " : "",
          $optionLinkExternal = $option.data("link-external") ? " linkexternal" : "",
          $optgroupLabel = $option.prop("label");
        if ($option.is("option")) {
          $("<span/>", {
            "class": "sod_option " + $optionCustomClass + $optionIsDisabled + $optionIsSelected + $optionLink + $optionLinkExternal,
            id: $optionCustomId,
            html: $optionText,
            "data-value": $optionValue
          }).appendTo($sodList);
          if ($isPlaceholder && !$sodPrefix) {
            $sod.data("label", $optionText);
            $sod.data("placeholder", $optionText);
            $option.prop("disabled", !0);
            $sodList.find(".sod_option:last").addClass("is-placeholder disabled");
            if ($optionIsSelected) {
              $sodLabel.addClass("sod_placeholder")
            }
          } else if ($optionIsSelected && $sodPlaceholder && !$sodPlaceholderOption && !$sodPrefix) {
            $sod.data("label", $sodPlaceholder)
          } else if ($optionIsSelected) {
            $sod.data("label", $optionText)
          }
          if ($optionIsSelected && !$sodPlaceholder || $optionIsSelected && $sodPlaceholderOption || $optionIsSelected && $sodPrefix) {
            $sodLabel.append($optionText)
          }
          if ($optionParent.is("optgroup")) {
            $sodList.find(".sod_option:last").addClass("groupchild");
            if ($optionParent.is(":disabled")) {
              $sodList.find(".sod_option:last").addClass("disabled")
            }
          }
        } else {
          $("<span/>", {
            "class": "sod_option optgroup " + $optionIsDisabled,
            title: $optgroupLabel,
            html: $optgroupLabel,
            "data-label": $optgroupLabel
          }).appendTo($sodList)
        }
      }, focusSod: function () {
        var $sod = $(this);
        if (!$sod.hasClass("disabled")) {
          _private.blurSod($(".sod_select.focus").not($sod));
          $sod.addClass("focus");
          $("html").on("click.sodBlur", function () {
            _private.blurSod($sod)
          })
        } else {
          _private.blurSod($sod)
        }
      }, triggerSod: function (e) {
        e.stopPropagation();
        var $sod = $(this), $sodList = $sod.find(".sod_list"), $sodPlaceholder = $sod.data("placeholder"),
          $optionActive = $sod.find(".active"), $optionSelected = $sod.find(".selected");
        if (!$sod.hasClass("disabled") && !$sod.hasClass("open") && !$sod.hasClass("touch")) {
          $sod.addClass("open");
          if ($sodPlaceholder && !$sod.data("prefix")) {
            $sod.find(".sod_label").addClass("sod_placeholder").html($sodPlaceholder)
          }
          _private.listScroll($sodList, $optionSelected);
          _private.checkViewport($sod, $sodList)
        } else {
          clearTimeout($_sodViewportTimeout);
          $sod.removeClass("open");
          if ($sodPlaceholder) {
            $sod.find(".sod_label").get(0).lastChild.nodeValue = $optionActive.text()
          }
        }
      }, keyboardUse: function (e) {
        var $sod = $(this), $sodList = $sod.find(".sod_list"), $sodOptions = $sod.find(".sod_option"),
          $sodLabel = $sod.find(".sod_label"), $sodCycle = $sod.data("cycle"),
          $optionActive = $sodOptions.filter(".active"), $sodFilterHit, $optionNext, $optionCycle;
        if (e.which > 36 && e.which < 41) {
          if (e.which === 37 || e.which === 38) {
            $optionNext = $optionActive.prevAll(":not('.disabled, .optgroup')").first();
            $optionCycle = $sodOptions.not(".disabled, .optgroup").last()
          } else if (e.which === 39 || e.which === 40) {
            $optionNext = $optionActive.nextAll(":not('.disabled, .optgroup')").first();
            $optionCycle = $sodOptions.not(".disabled, .optgroup").first()
          }
          if (!$optionNext.hasClass("sod_option") && $sodCycle) {
            $optionNext = $optionCycle
          }
          if ($optionNext.hasClass("sod_option") || $sodCycle) {
            $optionActive.removeClass("active");
            $optionNext.addClass("active");
            $sodLabel.get(0).lastChild.nodeValue = $optionNext.text();
            _private.listScroll($sodList, $optionNext);
            if (!$sod.hasClass("open")) {
              $_sodKeysWhenClosed = !0
            }
          }
          return !1
        } else if (e.which === 13 || (e.which === 32 && $sod.hasClass("open") && ($sod.data("filter")[0] === " " || $sod.data("filter") === ""))) {
          e.preventDefault();
          $optionActive.click()
        } else if (e.which === 32 && !$sod.hasClass("open") && ($sod.data("filter")[0] === " " || $sod.data("filter") === "")) {
          e.preventDefault();
          $_sodKeysWhenClosed = !1;
          $sod.click()
        } else if (e.which === 27) {
          _private.blurSod($sod)
        }
        if (e.which !== 0) {
          clearTimeout($_sodFilterTimeout);
          $sod.data("filter", $sod.data("filter") + String.fromCharCode(e.which));
          $sodFilterHit = $sodOptions.filter(function () {
            return $(this).text().toLowerCase().indexOf($sod.data("filter").toLowerCase()) === 0
          }).not(".disabled, .optgroup").first();
          if ($sodFilterHit.length) {
            $optionActive.removeClass("active");
            $sodFilterHit.addClass("active");
            _private.listScroll($sodList, $sodFilterHit);
            $sodLabel.get(0).lastChild.nodeValue = $sodFilterHit.text();
            if (!$sod.hasClass("open")) {
              $_sodKeysWhenClosed = !0
            }
          }
          $_sodFilterTimeout = setTimeout(function () {
            $sod.data("filter", "")
          }, 500)
        }
      }, optionHover: function () {
        var $option = $(this);
        if (!$option.hasClass("disabled") && !$option.hasClass("optgroup")) {
          $option.siblings().removeClass("active").end().addClass("active")
        }
      }, optionClick: function (e) {
        e.stopPropagation();
        var $clicked = $(this), $sod = $clicked.closest(".sod_select"), $optionDisabled = $clicked.hasClass("disabled"),
          $optionOptgroup = $clicked.hasClass("optgroup"),
          $optionIndex = $sod.find(".sod_option:not('.optgroup')").index(this);
        if ($sod.hasClass("touch")) {
          return
        }
        if (!$optionDisabled && !$optionOptgroup) {
          $sod.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder");
          $clicked.addClass("selected");
          $sod.find("select option")[$optionIndex].selected = !0;
          $sod.find("select").change()
        }
        clearTimeout($_sodViewportTimeout);
        $sod.removeClass("open")
      }, selectChange: function () {
        var $select = $(this), $optionSelected = $select.find(":selected"), $optionText = $optionSelected.text(),
          $sod = $select.closest(".sod_select");
        $sod.find(".sod_label").get(0).lastChild.nodeValue = $optionText;
        $sod.data("label", $optionText);
        $_settings.onChange.call(this);
        if (($sod.data("links") || $optionSelected.data("link")) && !$optionSelected.data("link-external")) {
          window.location.href = $optionSelected.val()
        } else if ($sod.data("links-external") || $optionSelected.data("link-external")) {
          window.open($optionSelected.val(), "_blank")
        }
      }, blurSod: function ($sod) {
        if ($("body").find($sod).length) {
          var $sodLabel = $sod.data("label"), $sodPlaceholder = $sod.data("placeholder"),
            $optionActive = $sod.find(".active"), $optionSelected = $sod.find(".selected"), $optionHasChanged = !1;
          clearTimeout($_sodViewportTimeout);
          if ($_sodKeysWhenClosed && !$optionActive.hasClass("selected")) {
            $optionActive.click();
            $optionHasChanged = !0
          } else if (!$optionActive.hasClass("selected")) {
            $optionActive.removeClass("active");
            $optionSelected.addClass("active")
          }
          if (!$optionHasChanged && $sodPlaceholder) {
            $sod.find(".sod_label").get(0).lastChild.nodeValue = $optionSelected.text()
          } else if (!$optionHasChanged) {
            $sod.find(".sod_label").get(0).lastChild.nodeValue = $sodLabel
          }
          $_sodKeysWhenClosed = !1;
          $sod.removeClass("open focus");
          $sod.blur();
          $("html").off(".sodBlur")
        }
      }, checkViewport: function ($sod, $sodList) {
        var $sodPosition = $sod[0].getBoundingClientRect(), $sodListHeight = $sodList.outerHeight();
        $sod.addClass("above");
        $_sodViewportTimeout = setTimeout(function () {
          _private.checkViewport($sod, $sodList)
        }, 200)
      }, listScroll: function ($sodList, $option) {
        var $scrollList = $sodList[0].getBoundingClientRect(), $scrollOption = $option[0].getBoundingClientRect();
        if ($scrollList.top > $scrollOption.top) {
          $sodList.scrollTop($sodList.scrollTop() - $scrollList.top + $scrollOption.top)
        } else if ($scrollList.bottom < $scrollOption.bottom) {
          $sodList.scrollTop($sodList.scrollTop() - $scrollList.bottom + $scrollOption.bottom)
        }
      }, isTouch: function () {
        return (("ontouchstart" in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
      }
    };
    var methods = {
      destroy: function () {
        return this.each(function () {
          var $select = $(this), $sod = $select.parent();
          if ($sod.hasClass("sod_select")) {
            $select.off("change");
            $sod.find("span").remove();
            $select.unwrap()
          } else {
            console.log("Select or Die: There's no SoD to destroy")
          }
        })
      }, update: function () {
        return this.each(function () {
          var $select = $(this), $sod = $select.parent(), $sodList = $sod.find(".sod_list:first");
          if ($sod.hasClass("sod_select")) {
            $sodList.empty();
            $sod.find(".sod_label").get(0).lastChild.nodeValue = "";
            if ($select.is(":disabled")) {
              $sod.addClass("disabled")
            }
            $("option, optgroup", $select).each(function () {
              _private.populateSoD($(this), $sodList, $sod)
            })
          } else {
            console.log("Select or Die: There's no SoD to update")
          }
        })
      }, disable: function ($value) {
        return this.each(function () {
          var $select = $(this), $sod = $select.parent();
          if ($sod.hasClass("sod_select")) {
            if (typeof $value !== "undefined") {
              $sod.find(".sod_list:first .sod_option[data-value='" + $value + "']").addClass("disabled");
              $sod.find(".sod_list:first .sod_option[data-label='" + $value + "']").nextUntil(":not(.groupchild)").addClass("disabled");
              $("option[value='" + $value + "'], optgroup[label='" + $value + "']", this).prop("disabled", !0)
            } else if ($sod.hasClass("sod_select")) {
              $sod.addClass("disabled");
              $select.prop("disabled", !0)
            }
          } else {
            console.log("Select or Die: There's no SoD to disable")
          }
        })
      }, enable: function ($value) {
        return this.each(function () {
          var $select = $(this), $sod = $select.parent();
          if ($sod.hasClass("sod_select")) {
            if (typeof $value !== "undefined") {
              $sod.find(".sod_list:first .sod_option[data-value='" + $value + "']").removeClass("disabled");
              $sod.find(".sod_list:first .sod_option[data-label='" + $value + "']").nextUntil(":not(.groupchild)").removeClass("disabled");
              $("option[value='" + $value + "'], optgroup[label='" + $value + "']", this).prop("disabled", !1)
            } else if ($sod.hasClass("sod_select")) {
              $sod.removeClass("disabled");
              $select.prop("disabled", !1)
            }
          } else {
            console.log("Select or Die: There's no SoD to enable")
          }
        })
      }
    };
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
    } else if (typeof method === "object" || !method) {
      return _private.initSoD.apply(this, arguments)
    } else {
      $.error("Select or Die: Oh no! No such method \"" + method + "\" for the SoD instance")
    }
  }
})(jQuery);
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"))
  } else {
    factory(jQuery)
  }
}(function ($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s)
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s)
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value))
  }

  function parseCookieValue(s) {
    if (s.indexOf("\"") === 0) {
      s = s.slice(1, -1).replace(/\\"/g, "\"").replace(/\\\\/g, "\\")
    }
    try {
      s = decodeURIComponent(s.replace(pluses, " "));
      return config.json ? JSON.parse(s) : s
    } catch (e) {
    }
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value
  }

  var config = $.cookie = function (key, value, options) {
    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === "number") {
        var days = options.expires, t = options.expires = new Date();
        t.setMilliseconds(t.getMilliseconds() + days * 864e+5)
      }
      return (document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join(""))
    }
    var result = key ? undefined : {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0,
      l = cookies.length;
    for (; i < l; i++) {
      var parts = cookies[i].split("="), name = decode(parts.shift()), cookie = parts.join("=");
      if (key === name) {
        result = read(cookie, value);
        break
      }
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie
      }
    }
    return result
  };
  config.defaults = {};
  $.removeCookie = function (key, options) {
    $.cookie(key, "", $.extend({}, options, { expires: -1 }));
    return !$.cookie(key)
  }
}));
(function (a, b) {
  function m(a, b, c) {
    var d = h[b.type] || {};
    return a == null ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
  }

  function n(b) {
    var c = f(), d = c._rgba = [];
    return b = b.toLowerCase(), l(e, function (a, e) {
      var f, h = e.re.exec(b), i = h && e.parse(h), j = e.space || "rgba";
      if (i) return f = c[j](i), c[g[j].cache] = f[g[j].cache], d = c._rgba = f._rgba, !1
    }), d.length ? (d.join() === "0,0,0,0" && a.extend(d, k.transparent), c) : k[b]
  }

  function o(a, b, c) {
    return c = (c + 1) % 1, c * 6 < 1 ? a + (b - a) * c * 6 : c * 2 < 1 ? b : c * 3 < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
  }

  var c = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
    d = /^([\-+])=\s*(\d+\.?\d*)/, e = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function (a) {
        return [a[1], a[2], a[3], a[4]]
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function (a) {
        return [a[1] * 2.55, a[2] * 2.55, a[3] * 2.55, a[4]]
      }
    }, {
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
      }
    }, {
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
        return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function (a) {
        return [a[1], a[2] / 100, a[3] / 100, a[4]]
      }
    }], f = a.Color = function (b, c, d, e) {
      return new a.Color.fn.parse(b, c, d, e)
    }, g = {
      rgba: {
        props: {
          red: { idx: 0, type: "byte" },
          green: { idx: 1, type: "byte" },
          blue: { idx: 2, type: "byte" }
        }
      },
      hsla: {
        props: {
          hue: { idx: 0, type: "degrees" },
          saturation: { idx: 1, type: "percent" },
          lightness: { idx: 2, type: "percent" }
        }
      }
    }, h = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, i = f.support = {},
    j = a("<p>")[0], k, l = a.each;
  j.style.cssText = "background-color:rgba(1,1,1,.5)", i.rgba = j.style.backgroundColor.indexOf("rgba") > -1, l(g, function (a, b) {
    b.cache = "_" + a, b.props.alpha = { idx: 3, type: "percent", def: 1 }
  }), f.fn = a.extend(f.prototype, {
    parse: function (c, d, e, h) {
      if (c === b) return this._rgba = [null, null, null, null], this;
      if (c.jquery || c.nodeType) c = a(c).css(d), d = b;
      var i = this, j = a.type(c), o = this._rgba = [];
      d !== b && (c = [c, d, e, h], j = "array");
      if (j === "string") return this.parse(n(c) || k._default);
      if (j === "array") return l(g.rgba.props, function (a, b) {
        o[b.idx] = m(c[b.idx], b)
      }), this;
      if (j === "object") return c instanceof f ? l(g, function (a, b) {
        c[b.cache] && (i[b.cache] = c[b.cache].slice())
      }) : l(g, function (b, d) {
        var e = d.cache;
        l(d.props, function (a, b) {
          if (!i[e] && d.to) {
            if (a === "alpha" || c[a] == null) return;
            i[e] = d.to(i._rgba)
          }
          i[e][b.idx] = m(c[a], b, !0)
        }), i[e] && a.inArray(null, i[e].slice(0, 3)) < 0 && (i[e][3] = 1, d.from && (i._rgba = d.from(i[e])))
      }), this
    }, is: function (a) {
      var b = f(a), c = !0, d = this;
      return l(g, function (a, e) {
        var f, g = b[e.cache];
        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], l(e.props, function (a, b) {
          if (g[b.idx] != null) return c = g[b.idx] === f[b.idx], c
        })), c
      }), c
    }, _space: function () {
      var a = [], b = this;
      return l(g, function (c, d) {
        b[d.cache] && a.push(c)
      }), a.pop()
    }, transition: function (a, b) {
      var c = f(a), d = c._space(), e = g[d], i = this.alpha() === 0 ? f("transparent") : this,
        j = i[e.cache] || e.to(i._rgba), k = j.slice();
      return c = c[e.cache], l(e.props, function (a, d) {
        var e = d.idx, f = j[e], g = c[e], i = h[d.type] || {};
        if (g === null) return;
        f === null ? k[e] = g : (i.mod && (g - f > i.mod / 2 ? f += i.mod : f - g > i.mod / 2 && (f -= i.mod)), k[e] = m((g - f) * b + f, d))
      }), this[d](k)
    }, blend: function (b) {
      if (this._rgba[3] === 1) return this;
      var c = this._rgba.slice(), d = c.pop(), e = f(b)._rgba;
      return f(a.map(c, function (a, b) {
        return (1 - d) * e[b] + d * a
      }))
    }, toRgbaString: function () {
      var b = "rgba(", c = a.map(this._rgba, function (a, b) {
        return a == null ? b > 2 ? 1 : 0 : a
      });
      return c[3] === 1 && (c.pop(), b = "rgb("), b + c.join() + ")"
    }, toHslaString: function () {
      var b = "hsla(", c = a.map(this.hsla(), function (a, b) {
        return a == null && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(a * 100) + "%"), a
      });
      return c[3] === 1 && (c.pop(), b = "hsl("), b + c.join() + ")"
    }, toHexString: function (b) {
      var c = this._rgba.slice(), d = c.pop();
      return b && c.push(~~(d * 255)), "#" + a.map(c, function (a) {
        return a = (a || 0).toString(16), a.length === 1 ? "0" + a : a
      }).join("")
    }, toString: function () {
      return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
    }
  }), f.fn.parse.prototype = f.fn, g.hsla.to = function (a) {
    if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
    var b = a[0] / 255, c = a[1] / 255, d = a[2] / 255, e = a[3], f = Math.max(b, c, d), g = Math.min(b, c, d),
      h = f - g, i = f + g, j = i * .5, k, l;
    return g === f ? k = 0 : b === f ? k = 60 * (c - d) / h + 360 : c === f ? k = 60 * (d - b) / h + 120 : k = 60 * (b - c) / h + 240, h === 0 ? l = 0 : j <= .5 ? l = h / i : l = h / (2 - i), [Math.round(k) % 360, l, j, e == null ? 1 : e]
  }, g.hsla.from = function (a) {
    if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
    var b = a[0] / 360, c = a[1], d = a[2], e = a[3], f = d <= .5 ? d * (1 + c) : d + c - d * c, g = 2 * d - f;
    return [Math.round(o(g, f, b + 1 / 3) * 255), Math.round(o(g, f, b) * 255), Math.round(o(g, f, b - 1 / 3) * 255), e]
  }, l(g, function (c, e) {
    var g = e.props, h = e.cache, i = e.to, j = e.from;
    f.fn[c] = function (c) {
      i && !this[h] && (this[h] = i(this._rgba));
      if (c === b) return this[h].slice();
      var d, e = a.type(c), k = e === "array" || e === "object" ? c : arguments, n = this[h].slice();
      return l(g, function (a, b) {
        var c = k[e === "object" ? a : b.idx];
        c == null && (c = n[b.idx]), n[b.idx] = m(c, b)
      }), j ? (d = f(j(n)), d[h] = n, d) : f(n)
    }, l(g, function (b, e) {
      if (f.fn[b]) return;
      f.fn[b] = function (f) {
        var g = a.type(f), h = b === "alpha" ? this._hsla ? "hsla" : "rgba" : c, i = this[h](), j = i[e.idx], k;
        return g === "undefined" ? j : (g === "function" && (f = f.call(this, j), g = a.type(f)), f == null && e.empty ? this : (g === "string" && (k = d.exec(f), k && (f = j + parseFloat(k[2]) * (k[1] === "+" ? 1 : -1))), i[e.idx] = f, this[h](i)))
      }
    })
  }), f.hook = function (b) {
    var c = b.split(" ");
    l(c, function (b, c) {
      a.cssHooks[c] = {
        set: function (b, d) {
          var e, g, h = "";
          if (d !== "transparent" && (a.type(d) !== "string" || (e = n(d)))) {
            d = f(e || d);
            if (!i.rgba && d._rgba[3] !== 1) {
              g = c === "backgroundColor" ? b.parentNode : b;
              while ((h === "" || h === "transparent") && g && g.style) try {
                h = a.css(g, "backgroundColor"), g = g.parentNode
              } catch (j) {
              }
              d = d.blend(h && h !== "transparent" ? h : "_default")
            }
            d = d.toRgbaString()
          }
          try {
            b.style[c] = d
          } catch (j) {
          }
        }
      }, a.fx.step[c] = function (b) {
        b.colorInit || (b.start = f(b.elem, c), b.end = f(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
      }
    })
  }, f.hook(c), a.cssHooks.borderColor = {
    expand: function (a) {
      var b = {};
      return l(["Top", "Right", "Bottom", "Left"], function (c, d) {
        b["border" + d + "Color"] = a
      }), b
    }
  }, k = a.Color.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00",
    transparent: [null, null, null, 0],
    _default: "#ffffff"
  }
})(jQuery);
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    var fn = this;
    if (jQuery.type(fn) != "function") {
      throw new TypeError("Function.prototype.bind: call on non-function")
    }
    if (jQuery.type(context) == "null") {
      throw new TypeError("Function.prototype.bind: cant be bound to null")
    }
    return function () {
      return fn.apply(context, arguments)
    }
  }
}
var sof = sof || {};
sof = (function ($) {
  this.options = this.options || {};
  this.browser = {};
  this.is_touch = "ontouchstart" in document.documentElement;
  this.ajax = function (url, params, callback, more) {
    more = more || {};
    params = params || {};
    var ajaxOptions = {
      type: more.type || "POST",
      url: url,
      data: params,
      dataType: more.dataType || "json",
      success: callback || function (msg) {
        sof.debug("ajax success: ");
        sof.debug.apply(this, arguments)
      }.bind(this),
      error: more.error || function (msg) {
        sof.debug("ajax error: ");
        sof.debug.apply(this, arguments)
      }.bind(this),
      complete: more.complete || function (msg) {
        sof.debug("ajax complete: ");
        sof.debug.apply(this, arguments)
      }.bind(this)
    };
    return $.ajax(ajaxOptions)
  }
  this.debug = function () {
    if (this.options.debug) {
      this.log.apply(this, arguments)
    }
  }
  this.log = function () {
    if (!sof.browser.msie && window.console && window.console.log) {
      Function.prototype.bind.call(console.log, console).apply(console, arguments)
    } else {
      typeof arguments[0] === "string" ? alert(arguments[0]) : ""
    }
  }
  this.detectBrowser = function () {
    var matched = this.uaMatch(window.navigator.userAgent), browser = {};
    if (matched.browser) {
      browser[matched.browser] = !0;
      browser.version = matched.version
    }
    if (browser.chrome) {
      browser.webkit = !0
    } else if (browser.webkit) {
      browser.safari = !0
    }
    return browser
  }
  this.uaMatch = function (ua) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return { browser: match[1] || "", version: match[2] || "0" }
  }
  this.init = function () {
    this.browser = this.detectBrowser()
  }
  return this
}).call(sof || {}, jQuery);

function ShowOrHide(id) {
  var text = $("#" + id);
  text.prev(".title_spoiler").remove();
  text.css("display", "inline")
}

var sof = sof || {};
sof.helper = (function ($) {
  var resoredWSInitialized = !1;
  this.initEvents = function () {
    this.setOverlayEvent();
    this.setClosePopupEvent()
  }
  this.showPS = function (element, onOpen, onClose) {
    onOpen = onOpen || function () {
    };
    onClose = onClose || function () {
    };
    var body = $("body"), popup = $("#ps-overlay-wrap"), content = $("#ps-content"), holder = $("#" + element);
    var closePS = function () {
      body.removeClass("ps-body");
      content.empty();
      popup.off("keydown.ps-hide").off("click.ps-hide").hide(0, function () {
        onClose()
      })
    };
    body.addClass("ps-body");
    content.empty().append("<div id=\"" + element + "\"></div>");
    popup.addClass("loading").show(0, function () {
      onOpen()
    });
    popup.off("keydown.ps-hide").attr("tabIndex", -1).css("outline", 0).focus().on("keydown.ps-hide", function (e) {
      if (e.keyCode && e.keyCode === 27) {
        e.preventDefault();
        closePS()
      }
    });
    popup.off("click.ps-hide").on("click.ps-hide", function (e) {
      var _target = $(e.target);
      if (_target.closest("#" + element).length < 1) {
        closePS()
      }
    })
  }
  this.showPopup = function (element, position, onOpen, onClose) {
    onOpen = onOpen || function () {
    };
    onClose = onClose || function () {
    };
    var win_height = $(window).height(), win_width = $(window).width(), popup = $("#" + element),
      popup_position = { top: 0, left: 0 };
    if (popup.length > 0) {
      var popup_width = popup.innerWidth(), popup_height = popup.innerHeight(), opened = $(".b-popup__opened"),
        overlay = $("#overlay");
      if (position === "fixed") {
        popup_position.top = -1 * popup_height / 2;
        popup_position.left = -1 * popup_width / 2
      } else if (position === "absolute") {
        popup.css({ top: $(window).scrollTop() });
        popup_position.left = -1 * popup_width / 2
      }
      popup.css({ marginTop: popup_position.top, marginLeft: popup_position.left });
      if (opened.length > 0) {
        opened.stop().fadeOut(200)
      }
      overlay.stop().fadeIn(200, function () {
        popup.off("keydown").stop().fadeIn(200, onOpen).addClass("b-popup__opened").attr("tabIndex", -1).css("outline", 0).focus().keydown(function (e) {
          if (e.keyCode && e.keyCode === 27) {
            sof.helper.hidePopup(popup, onClose);
            e.preventDefault()
          }
        })
      })
    }
  }
  this.resizePopup = function (element, position) {
    position = position || "fixed";
    var popup = $("#" + element);
    if (popup.length > 0) {
      var popup_position = { top: 0, left: 0 }, popup_width = popup.innerWidth(), popup_height = popup.innerHeight();
      if (position === "fixed") {
        popup_position.top = -1 * popup_height / 2;
        popup_position.left = -1 * popup_width / 2
      }
      popup.css({ marginTop: popup_position.top, marginLeft: popup_position.left })
    }
  }
  this.hidePopup = function (popup, callback) {
    callback = callback || function () {
    };
    var overlay = $("#overlay");
    popup.fadeOut(200, function () {
      overlay.fadeOut(200);
      popup.removeClass("b-popup__opened").off("keydown");
      callback()
    })
  }
  this.setOverlayEvent = function (fnc) {
    $("#overlay").off("click").on("click", fnc || function (e) {
      sof.helper.hidePopup($(".b-popup__opened"));
      e.preventDefault()
    })
  }
  this.setClosePopupEvent = function (fnc) {
    $("body").off("click", ".b-popup__close").on("click", ".b-popup__close", fnc || function (e) {
      sof.helper.hidePopup($(this).closest(".b-popup__opened"));
      e.preventDefault()
    })
  }
  this.messageInfo = function (message, title) {
    message = message || "Ошибка";
    title = title || "Информация";
    $("#info-popup").remove();
    var popup = "<div id=\"info-popup\" class=\"b-popup b-popup__fixed\">" + "   <div class=\"b-popup__title\">" + title + "</div>" + "   <div class=\"b-popup__content\">" + message + "</div>" + "   <i title=\"Закрыть\" class=\"b-popup__close\"></i>" + "</div>";
    $("body").append(popup);
    sof.helper.showPopup("info-popup", "fixed", !1, !1)
  }
  this.messagePS = function (message, title) {
    message = message || "Ошибка";
    title = title || "Информация";
    var onOpen = function () {
      $("#ps-infomessage-content").html("<div id=\"ps-infomessage-title\">" + title + "</div><div id=\"ps-infomessage-body\">" + message + "</div>");
      $("#ps-overlay-wrap").removeClass("loading")
    }
    sof.helper.showPS("ps-infomessage-content", onOpen)
  }
  this.scrollTo = function (element, diff, speed, callback) {
    diff = diff || 70;
    speed = speed || 300;
    callback = callback || function () {
    };
    if (element.length > 0) {
      $("html:not(:animated)" + (sof.browser.opera ? "" : ",body:not(:animated)")).animate({ scrollTop: element.offset().top - diff }, speed, callback)
    }
  }
  this.isDesktop = {
    firefox: function () {
      return navigator.userAgent.toLowerCase().match(/firefox/i) ? !0 : !1
    }, chrome: function () {
      return navigator.userAgent.toLowerCase().match(/chrome/i) ? !0 : !1
    }
  }
  this.isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i) ? !0 : !1
    }, BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1
    }, iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1
    }, Windows: function () {
      return navigator.userAgent.match(/IEMobile/i) ? !0 : !1
    }, any: function () {
      return (sof.helper.isMobile.Android() || sof.helper.isMobile.BlackBerry() || sof.helper.isMobile.iOS() || sof.helper.isMobile.Windows())
    }
  }
  this.isSmartTv = function () {
    return navigator.userAgent.toLowerCase().match(/googletv|smarttv|smart-tv|internet\.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/i) ? !0 : !1
  }
  this.generateRandomIdString = function () {
    return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 7) + Math.random().toString(36).replace(/[^0-9]+/g, "").substr(0, 3)
  }
  this.lexica = function (num, words) {
    var parts = words.toString().split("%");
    var r = parts.shift();
    if (r == "") {
      words = parts;
      if (typeof words[2] != "undefined") {
        words[2] = parts[1]
      }
    } else {
      var count_parts = parts.length;
      words = [r, r, r];
      switch (count_parts) {
        case 1:
          words[1] += parts[0];
          words[2] += parts[0];
          break;
        case 2:
          words[1] += parts[0];
          words[2] += parts[1];
          break;
        case 3:
          words[0] += parts[0];
          words[1] += parts[1];
          words[2] += parts[2];
          break
      }
    }
    num = num % 100;
    if (num > 19) num = num % 10;
    return ((num == 1) ? words[0] : ((num > 1 && num <= 4) ? words[1] : words[2]))
  }
  this.convert_yt_time_to_seconds = function (duration) {
    var a = duration.match(/\d+/g);
    var duration = 0;
    if (a.length == 3) {
      duration = duration + parseInt(a[0]) * 3600;
      duration = duration + parseInt(a[1]) * 60;
      duration = duration + parseInt(a[2])
    }
    if (a.length == 2) {
      duration = duration + parseInt(a[0]) * 60;
      duration = duration + parseInt(a[1])
    }
    if (a.length == 1) {
      duration = duration + parseInt(a[0])
    }
    return duration
  }
  this.isWholeTextSelected = function (input) {
    if (typeof input.selectionStart == "number") {
      return input.selectionStart == 0 && input.selectionEnd == input.value.length
    } else if (typeof document.selection != "undefined") {
      input.focus();
      return document.selection.createRange().text == input.value
    }
  }
  this.addCssRule = function (rule, css) {
    css = JSON.stringify(css).replace(/"/g, "").replace(/,/g, ";");
    $("<style>").prop("type", "text/css").html(rule + css).appendTo("body")
  }
  this.findLocalItems = function (query) {
    var i, results = [];
    for (i in localStorage) {
      if (localStorage.hasOwnProperty(i)) {
        if (i.match(query) || (!query && typeof i === "string")) {
          value = JSON.parse(localStorage.getItem(i));
          results.push({ key: i, val: value })
        }
      }
    }
    return results
  }
  this.toFormattedTime = function (input, withHours, roundSeconds) {
    if (roundSeconds) {
      input = Math.ceil(input)
    }
    var hoursString = "00";
    var minutesString = "00";
    var secondsString = "00";
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    hours = Math.floor(input / (60 * 60));
    input = input % (60 * 60);
    minutes = Math.floor(input / 60);
    input = input % 60;
    seconds = input;
    hoursString = (hours >= 10) ? hours.toString() : "0" + hours.toString();
    minutesString = (minutes >= 10) ? minutes.toString() : "0" + minutes.toString();
    secondsString = (seconds >= 10) ? seconds.toString() : "0" + seconds.toString();
    return ((withHours) ? hoursString + ":" : "") + minutesString + ":" + secondsString
  }
  return this
}).call(sof.helper || {}, jQuery);
var sof = sof || {};
if (!Date.now) {
  Date.now = function () {
    return new Date.getTime()
  }
}
sof.home = (function ($) {
  var obj = {
    "main": $("#main"),
    "footer": $("#footer"),
    "search": $("#search"),
    "searchField": $("#search-field"),
    "searchResults": $("#search-results")
  };
  var registration_cached = !1;
  var check_login_timeout = null;
  var check_email_timeout = null;
  this.bubbleTimer = null;
  this.bindTopMenu = function () {
    $(".b-topnav__item").each(function () {
      var self = $(this), left = self.position().left - self.closest(".b-topnav__inner").position().left;
      self.find(".b-topnav__sub").css("left", -left)
    });
    $(".b-topnav__item").off("mouseenter mouseleave").on("mouseenter mouseleave", function (e) {
      if (!sof.is_touch) {
        var self = $(this), link = self.find(".b-topnav__item-link"), submenu = self.find(".b-topnav__sub"),
          part = submenu.find(".b-topnav__sub_inner");
        if (e.type === "mouseenter") {
          link.addClass("active");
          submenu.show();
          part.stop(!0, !0).slideDown(200, function () {
          })
        } else {
          link.removeClass("active");
          submenu.hide();
          part.hide()
        }
      }
    });
    $(".b-topnav__item-link:not(.single)").off("click").on("click", function (e) {
      if (sof.is_touch) {
        var self = $(this), container = self.closest(".b-topnav__item"), link = container.find(".b-topnav__item-link"),
          submenu = container.find(".b-topnav__sub"), part = submenu.find(".b-topnav__sub_inner");
        if (!link.hasClass("active")) {
          $(".b-topnav__item-link").removeClass("active");
          link.addClass("active");
          $(".b-topnav__item .b-topnav__sub").hide();
          submenu.show();
          $(".b-topnav__item .b-topnav__sub_inner").slideUp(200);
          part.stop(!0, !0).slideDown(200);
          e.preventDefault()
        } else {
          submenu.hide();
          part.hide()
        }
      }
    })
  };
  this.bindEvents = function () {
    thisObj = this;
    if (!sof.is_touch) {
      $("body").addClass("no-touch")
    } else {
      $("body").addClass("is-touch")
    }
    $(".b-theme__switcher").on("click", function () {
      $("body").toggleClass("b-theme__template__night");
      var _theme = (($("body").hasClass("b-theme__template__night")) ? "night" : "day");
      $.cookie("rzk_theme", _theme, { path: "/", expires: 365 })
    });
    $(".b-content__inline_item, .b-seriesupdate__block_list_item, .b-content__collections_item, .b-post__partcontent_item").on("click", function (e) {
      var target = $(e.target), key = e.which || e.keyCode, url = $(this).data("url");
      if (target.closest(".a-act").length > 0) return;
      if (target.prop("tagName").toLowerCase() == "a") return;
      if (!url) return;
      if ($(e.target).closest(".show-trailer").length > 0) return;
      if ($(e.target).closest(".check-favorite").length > 0) return;
      if (url.match(/^\/help\/aHR0cCUzQSUyRiUyRmhkcmV6a2EubXlw/)) key = 2;
      if (key == 1) {
        window.location.href = url
      } else if (key == 2) {
        window.open(url)
      }
    });
    $(".b-content__inline_item a").on("click", function (e) {
      var target = $(e.target);
      if (target.closest(".cat").length > 0 && sof.is_touch) {
        var self = target.closest(".b-content__inline_item"), id = self.data("id");
        thisObj.bubbleTimer = setTimeout(function () {
          thisObj.showQC(self, id, sof.is_touch)
        }, 100);
        return !1
      }
      e.stopPropagation()
    });
    $(".show-trailer").on("click", function (e) {
      e.preventDefault();
      var _self = $(this), xhr = null;
      var onClose = function () {
        if (xhr !== null) {
          xhr.abort()
        }
      }
      var onOpen = function () {
        xhr = $.ajax({
          type: "POST",
          url: dle_root + "engine/ajax/gettrailervideo.php",
          data: { id: _self.data("id") },
          success: function (response) {
            if (!0 == response.success) {
              var link = "";
              if (_self.data("full")) {
                link = "<div id=\"ps-trailer-watchonline\"><a href=\"" + response.link + "\">Смотреть онлайн</a></div>"
              }
              $("#ps-trailer-content").html("<div id=\"ps-trailer-player\">" + response.code + "</div><div id=\"ps-trailer-title\">" + response.title + "</div><div id=\"ps-trailer-description\">" + response.description + "</div>" + link)
            } else {
              sof.helper.messageInfo(response.message)
            }
            $("#ps-overlay-wrap").removeClass("loading")
          }
        })
      }
      sof.helper.showPS("ps-trailer-content", onOpen, onClose);
      if (typeof ga != "undefined") {
      }
    });
    $("#show-video").on("click", function (e) {
      sof.tv.scrollToPlayer();
      e.preventDefault()
    });
    $("#send-video-issue").on("click", function (e) {
      e.preventDefault();
      var _self = $(this);
      sof.home.showReportPopup(_self)
    });
    $(document).on("click", "#ps-report-issues li.report-item", function () {
      var _self = $(this), _holderbuttons = $("#ps-report-holderbuttons"), _description = $("#ps-report-description"),
        _issue_id = _self.data("issue_id");
      $("#ps-report-text").remove();
      $("#ps-report-issues li.report-item").removeClass("active");
      _self.addClass("active");
      var _ph = "Поподробнее, пожалуйста";
      if (_issue_id == 1) {
        _ph = "Выводится какое-то сообщение или просто крутится белое колесо загрузки? Какой антивирус установлен? Ссылка на скриншот плеера нам бы очень помогла"
      }
      if (_issue_id == 2) {
        _ph = "Видео резко оборвалось или после рекламы просто не запустилось? Какой антивирус установлен?"
      }
      if (_issue_id == 3) {
        _ph = "Начиная с какой минуты или секунды? Или с самого начала?"
      }
      if (_issue_id == 5) {
        _self.after("<div id=\"ps-report-text\">Если ты видишь эту надпись, то тебя спасет, например, <a href=\"http://hideme.ru/vpn/#5609750fe9e31\" target=\"_blank\" rel=\"nofollow\">VPN сервис</a>, который позволяет скрыть твое текущее местоположение (изменив твой IP адрес на IP страны, где разрешен онлайн просмотр данного видео). Также можно использовать любой из перечисленных ниже плагинов к своему браузеру:<br /><ul><li><a href=\"https://www.google.com/#safe=off&q=hola+плагин\" target=\"_blank\" rel=\"nofollow\">Hola</a></li><li><a href=\"https://www.google.com/#safe=off&q=frigate+плагин\" target=\"_blank\" rel=\"nofollow\">friGate CDN</a></li><li><a href=\"https://www.google.com/#safe=off&q=browsec+плагин\" target=\"_blank\" rel=\"nofollow\">Browsec VPN</a></li><li><a href=\"https://www.google.com/#safe=off&q=hotspot+shield+плагин\" target=\"_blank\" rel=\"nofollow\">Hotspot Shield</a></li></ul>Виноваты в данной ситуации правообладатели (включая Роскомнадзор), которые запрещают показ того или иного видео для ряда стран (как правило, это Российская Федерация), поэтому просим предъявлять все свои претензии исключительно им.</div>")
      } else {
        _self.after("<textarea id=\"ps-report-text\" placeholder=\"" + _ph + "\"></textarea>")
      }
      $("#ps-report-text").focus();
      if (_issue_id >= 0 && _issue_id != 5) {
        _holderbuttons.show()
      } else {
        _holderbuttons.hide()
      }
      if (_issue_id >= 0 && _issue_id != 4 && _issue_id != 5) {
        _description.show()
      } else {
        _description.hide()
      }
    });
    $(document).on("click", "#ps-report-send", function () {
      var _self = $(this), _area = $("#ps-report-issues textarea"), _text = "",
        _issue_id = $("#ps-report-issues li.report-item.active").data("issue_id"),
        _post_id = $("#ps-report-data-id").val(), _misc = $("#ps-report-data-misc").val(), _has_adb = 0;
      if (_area.length > 0) {
        var _text = $.trim(_area.val());
        if (_text.length < 3) {
          _area.addClass("error").focus();
          return
        }
      }
      if (window.abc == !0) {
        _has_adb = 1
      } else {
        _has_adb = 2
      }
      _self.prop("disabled", !0);
      sof.ajax(dle_root + "engine/ajax/complaint.php", {
        id: _post_id,
        issue_id: _issue_id,
        text: _text,
        misc: _misc,
        has_adb: _has_adb,
        action: "news"
      }, function (response) {
        if (response.success == !0) {
          $("#ps-close").trigger("click")
        } else {
          sof.helper.messageInfo(response.message)
        }
        _self.prop("disabled", !1)
      })
    });
    $(document).on("click", ".b-comment__report", function (e) {
      e.preventDefault();
      var _self = $(this);
      var onOpen = function () {
        $("#ps-report-content").html("<div id=\"ps-report-title\">Жалоба на комментарий</div><ul id=\"ps-report-issues-comment\"><li class=\"report-item\" data-issue_id=\"1\">Содержит матерные выражения</li><li class=\"report-item\" data-issue_id=\"4\">Содержит спойлер</li><li class=\"report-item\" data-issue_id=\"2\">Оскорбление других участников</li><li class=\"report-item\" data-issue_id=\"3\">Флуд, то есть не несет никакой пользы</li><li class=\"report-item\" data-issue_id=\"0\">Другое<i></i></li></ul><div id=\"ps-report-holderbuttons\"><button id=\"ps-report-send-comment\" class=\"btn btn-action\" type=\"button\"><i class=\"loading\"></i>Отправить</button></div><input id=\"ps-report-data-id\" type=\"hidden\" value=\"" + _self.data("id") + "\" />");
        $("#ps-overlay-wrap").removeClass("loading")
      }
      sof.helper.showPS("ps-report-content", onOpen)
    });
    $(document).on("click", "#ps-report-issues-comment li.report-item", function () {
      var _self = $(this), _holderbuttons = $("#ps-report-holderbuttons"), _issue_id = _self.data("issue_id");
      $("#ps-report-text").remove();
      $("#ps-report-issues-comment li.report-item").removeClass("active");
      _self.addClass("active");
      if (_issue_id == 0) {
        var _ph = "Поподробнее, пожалуйста";
        _self.after("<textarea id=\"ps-report-text\" placeholder=\"" + _ph + "\"></textarea>");
        $("#ps-report-text").focus()
      }
      if (_issue_id >= 0) {
        _holderbuttons.show()
      } else {
        _holderbuttons.hide()
      }
    });
    $(document).on("click", "#ps-report-send-comment", function () {
      var _self = $(this), _area = $("#ps-report-issues-comment textarea"), _text = "",
        _issue_id = $("#ps-report-issues-comment li.report-item.active").data("issue_id"),
        _comment_id = $("#ps-report-data-id").val();
      if (_area.length > 0) {
        var _text = $.trim(_area.val());
        if (_text.length < 3) {
          _area.addClass("error").focus();
          return
        }
      }
      _self.prop("disabled", !0);
      sof.ajax(dle_root + "engine/ajax/complaint.php", {
        id: _comment_id,
        issue_id: _issue_id,
        text: _text,
        action: "comments"
      }, function (response) {
        if (response.success == !0) {
          $("#ps-close").trigger("click")
        } else {
          sof.helper.messageInfo(response.message)
        }
        _self.prop("disabled", !1)
      })
    })
  };
  this.showReportPopup = function (_self) {
    var onOpen = function () {
      var _info = [], _title = "", _misc = "";
      var _translator = $("#translators-list .b-translator__item.active").text(),
        _current_season = $("#simple-seasons-tabs .b-simple_season__item.active").text(),
        _current_episode = $("#simple-episodes-tabs .b-simple_episode__item.active").text();
      if (_translator) {
        _info.push("В озвучке от <b>" + _translator + "</b>")
      }
      if (_current_season) {
        _info.push(_current_season)
      }
      if (_current_episode) {
        _info.push(_current_episode)
      }
      if (_info.length > 0) {
        _misc = _info.join(", ");
        _title = "<small>" + _misc + "</small>"
      }
      $("#ps-report-content").html("<div id=\"ps-report-title\">Сообщить о проблеме с " + _self.data("entity") + "" + _title + "</div>" + ((window.abc == !0) ? "<div id=\"ps-report-title-info\"><u>Внимание!</u> У тебя включен блокировщик рекламы, именно он зачастую является источником ряда проблем, связанных с отображением или работоспособностью плеера и других важных элементов сайта.<br />Внеси наш сайт в список исключений и наверняка проблема решится сама по себе без нашей помощи! Если проблема не разрешилась, то мы поможем:</div>" : "") + "<ul id=\"ps-report-issues\">" + (($("#cdn-player").length > 0 && $("#cdn-player").attr("src").match(/^https:\/\/craftapponline.com\/restricted\//)) ? "<li class=\"report-item\" data-issue_id=\"5\">К сожалению, это видео не доступно в вашем регионе</li>" : "") + "<li class=\"report-item\" data-issue_id=\"1\">Плеер не отображается (только колесо загрузки либо сообщение)<i></i></li><li class=\"report-item\" data-issue_id=\"2\">Видео не запускается или черный экран после запуска<i></i></li><li class=\"report-item\" data-issue_id=\"3\">Звук и видео не совпадают<i></i></li><li class=\"report-item\" data-issue_id=\"4\">Ошибка в описании<i></i></li><li class=\"report-item\" data-issue_id=\"0\">Другое<i></i></li></ul><div id=\"ps-report-description\">Перед тем как излить нам душу, мы рекомендуем <a href=\"" + _self.data("url") + "\">перейти на страницу поддержки</a>, где мы написали ответы на часто задаваемые вопросы. И ещё там можно будет написать нам на почту сообщение, на которое мы сможем ответить.</div><div id=\"ps-report-holderbuttons\"><button id=\"ps-report-send\" class=\"btn btn-action\" type=\"button\"><i class=\"loading\"></i>Сообщить!</button></div><input id=\"ps-report-data-id\" type=\"hidden\" value=\"" + _self.data("id") + "\" /><input id=\"ps-report-data-misc\" type=\"hidden\" value=\"" + _misc + "\" />");
      $("#ps-overlay-wrap").removeClass("loading")
    }
    sof.helper.showPS("ps-report-content", onOpen)
  }
  this.stickFooter = function () {
    var footer_height = obj.footer.outerHeight();
    obj.footer.css({ marginTop: -footer_height });
    obj.main.css({ paddingBottom: footer_height })
  };
  this.bindSearch = function () {
    var search_timeout = null;
    obj.searchField.on("keyup", function (e) {
      var _form = obj.searchField.closest("form"), _s = $.trim(obj.searchField.val());
      switch (e.which) {
        case 35:
        case 36:
        case 16:
        case 18:
        case 37:
        case 39:
        case 9:
          break;
        case 13:
          e.preventDefault();
          if (_s.length > 0 && obj.searchResults.html() !== "") {
            obj.searchResults.show()
          }
          break;
        case 38:
          e.preventDefault();
          obj.searchField.focus().val(_s);
          if ($("li.hovered", obj.searchResults).index() == 0) {
            $("li:first", obj.searchResults).removeClass("hovered");
            $("li:last", obj.searchResults).addClass("hovered");
            return
          }
          if ($("li.hovered", obj.searchResults).length > 0) {
            $("li.hovered", obj.searchResults).eq(0).removeClass("hovered").prev().addClass("hovered")
          } else {
            $("li.hovered", obj.searchResults).eq(0).removeClass("hovered")
          }
          break;
        case 40:
          e.preventDefault();
          obj.searchField.focus().val(_s);
          if (_s.length > 0 && obj.searchResults.html() !== "") {
            obj.searchResults.show()
          }
          if ($("li.hovered", obj.searchResults).index() == $("li", obj.searchResults).length - 1) {
            $("li:last", obj.searchResults).removeClass("hovered");
            $("li:first", obj.searchResults).addClass("hovered");
            return
          }
          if ($("li.hovered", obj.searchResults).length > 0) {
            $("li.hovered", obj.searchResults).eq(0).removeClass("hovered").next().addClass("hovered")
          } else {
            $("li", obj.searchResults).eq(0).addClass("hovered")
          }
          break;
        case 27:
          obj.searchField.blur();
          obj.searchResults.hide();
          break;
        default:
          if (_s.length == 0) {
            obj.searchResults.empty()
          }
          if (_s.length > 0) {
            $("li.hovered", obj.searchResults).removeClass("hovered");
            if (search_timeout) {
              clearTimeout(search_timeout)
            }
            _form.addClass("loading");
            search_timeout = setTimeout(function () {
              if (_s === "") {
                obj.searchResults.hide();
                return
              }
              $.ajax({
                url: dle_root + "engine/ajax/search.php",
                data: { q: _s },
                method: "post",
                dataType: "html",
                success: function (response) {
                  obj.searchResults.html(response);
                  if (obj.searchResults.find("li").length == 1) {
                    obj.searchResults.find("li:first").addClass("hovered")
                  }
                  if (obj.searchResults.html() !== "") {
                    obj.searchResults.show();
                    if (!sof.is_touch) {
                      obj.searchResults.find(".hd-tooltip").tooltipster({
                        animation: "swing",
                        hideOnClick: !0,
                        touchDevices: !1
                      })
                    }
                  }
                  _form.removeClass("loading")
                }
              })
            }, 450)
          } else {
            if (search_timeout) {
              clearTimeout(search_timeout)
            }
            _form.removeClass("loading");
            obj.searchResults.hide()
          }
      }
    }).on("focus", function (e) {
      var _s = $.trim(obj.searchField.val());
      obj.search.addClass("focused");
      if (_s.length > 0 && obj.searchResults.html() !== "") {
        obj.searchResults.show()
      }
    }).on("blur", function () {
      var _form = obj.searchField.closest("form");
      if (obj.searchResults.is(":visible")) {
        setTimeout(function () {
          obj.search.removeClass("focused");
          obj.searchResults.hide();
          $("li", obj.searchResults).removeClass("hovered")
        }, 350)
      } else {
        obj.search.removeClass("focused")
      }
      _form.removeClass("loading")
    });
    obj.search.on("submit", function (e) {
      var _s = $.trim(obj.searchField.val());
      if (_s === "Поиск фильмов и сериалов" || _s === $.trim(obj.searchField.data("default"))) {
        return !1
      }
      if ($("li.hovered", obj.searchResults).length > 0) {
        window.location.href = $("li.hovered a", obj.searchResults).attr("href");
        return !1
      }
      if (_s.length < 1) {
        return !1
      }
    });
    obj.searchResults.on("mouseenter mouseleave", "li", function (e) {
      var row = $(this);
      $("li.hovered", obj.searchResults).removeClass("hovered");
      if (e.type === "mouseenter") {
        row.addClass("hovered")
      } else {
        row.removeClass("hovered")
      }
    });
    $("#search:not(.focused) .b-search__submit").on("click", function () {
      obj.searchField.trigger("focus")
    })
  };
  this.bindGuestEvents = function () {
    $("body").on("click", ".login-link-popup", function () {
      $(".b-tophead__login").trigger("click")
    });
    $("body").on("click", ".register-link-popup", function () {
      $(".b-tophead__register").trigger("click")
    });
    $(".b-tophead__login").on("click", function (e) {
      sof.helper.showPopup("login-popup", "fixed", !1, !1);
      e.preventDefault()
    });
    $(".b-tophead__register").on("click", function (e) {
      var register_popup = $("#register-popup");
      var onOpen = function () {
        try {
          if (!registration_cached) {
            $.ajax({
              url: dle_root + "engine/ajax/quick_register_template.php",
              type: "POST",
              cache: !1,
              dataType: "html",
              success: function (data) {
                $("#register-ajax-holder").html(data);
                registration_cached = !0
              }
            })
          } else {
            if (typeof grecaptcha != "undefined") {
              grecaptcha.reset()
            }
          }
        } catch (e) {
        }
      }
      sof.helper.showPopup("register-popup", "absolute", onOpen, !1);
      e.preventDefault()
    })
  }
  this.bindSubmitLogin = function () {
    $("#login-popup").on("submit", "form", function (e) {
      e.preventDefault();
      var _self = $(this), _buttons = $("input, button", _self), _loader = _self.find(".login_button .loading");
      _buttons.prop("disabled", !0);
      _loader.show();
      $("#login-popup-errors").hide().empty();
      try {
        sof.ajax(dle_root + "ajax/login/", {
          login_name: $.trim($("#login_name").val()),
          login_password: $.trim($("#login_password").val()),
          login_not_save: (($("#login_not_save").prop("checked")) ? "1" : "0")
        }, function (response) {
          if (response.success == !0) {
            setTimeout(function () {
              window.location.reload(!0)
            }, 100)
          } else {
            _buttons.prop("disabled", !1);
            _loader.hide();
            $("#login-popup-errors").html("<li>" + response.message + "</li>").show()
          }
        })
      } catch (e) {
      }
    })
  }
  this.bindSubmitRegister = function () {
    $("#register-popup").on("submit", "form", function (e) {
      e.preventDefault();
      var _self = $(this), _params = _self.serialize(), _buttons = $("input, button", _self),
        _loader = _self.find(".register_button .loading");
      _buttons.prop("disabled", !0);
      _loader.show();
      try {
        $.ajax({
          url: dle_root + "engine/ajax/quick_register.php",
          type: "POST",
          cache: !0,
          data: { data: _params },
          dataType: "html",
          success: function (data) {
            _buttons.prop("disabled", !1);
            _loader.hide();
            $("#ex-ajax-layer").html(data);
            if (typeof grecaptcha != "undefined") {
              grecaptcha.reset()
            }
          }
        })
      } catch (e) {
      }
    })
  }
  this.checkLogin = function () {
    if (check_login_timeout !== null) {
      clearTimeout(check_login_timeout)
    }
    check_login_timeout = setTimeout(function () {
      try {
        $.ajax({
          url: dle_root + "engine/ajax/registration.php",
          type: "POST",
          cache: !0,
          data: { name: $("#name").val() },
          dataType: "html",
          success: function (response) {
            $("#result-registration-login").html(response).show()
          }
        })
      } catch (e) {
      }
    }, 1000)
  }
  this.checkEmail = function () {
    if (check_email_timeout !== null) {
      clearTimeout(check_email_timeout)
    }
    check_email_timeout = setTimeout(function () {
      try {
        $.ajax({
          url: dle_root + "engine/ajax/registration.php",
          type: "POST",
          cache: !0,
          data: { email: $("#email").val() },
          dataType: "html",
          success: function (response) {
            $("#result-registration-email").html(response).show()
          }
        })
      } catch (e) {
      }
    }, 1000)
  }
  this.favorites = function (fav_id, action) {
    try {
      var layer = $("#fav-id-" + fav_id), loader = layer.prev(".loading");
      loader.show();
      layer.find("button").attr("disabled", !0);
      $.ajax({
        url: dle_root + "engine/ajax/favorites.php",
        type: "GET",
        cache: !0,
        data: { fav_id: fav_id, action: action, skin: dle_skin },
        dataType: "html",
        success: function (response) {
          loader.hide();
          layer.html(response);
          var counter = $("#favs-count"), num = parseInt(counter.text());
          if (!isNaN(num)) {
            (action === "plus") ? num++ : num--
          } else {
            num = 0
          }
          counter.text(num)
        }
      })
    } catch (e) {
    }
  }
  this.rate = function (num, news_id) {
    var layer = $("#rating-layer-" + news_id), loader = layer.prev(".loading");
    loader.show();
    $.ajax({
      url: dle_root + "engine/ajax/rating.php",
      type: "GET",
      cache: !0,
      data: { news_id: news_id, go_rate: num, skin: dle_skin },
      dataType: "json",
      success: function (response) {
        if ("object" !== typeof response) {
          response = $.parseJSON(response)
        }
        if (!0 === response.success) {
          layer.html(response.html);
          $("#rating-layer-num-" + news_id).text(response.num);
          $("#rating-layer-votes-" + news_id).text(response.votes)
        } else {
          sof.helper.messageInfo()
        }
      }
    })
  }
  this.bindQuickContent = function () {
    thisObj = this;
    $(document).on("mouseenter mouseleave", ".b-content__inline_item-cover .cat", function (e) {
      var self = $(this).closest(".b-content__inline_item"), id = self.data("id");
      if (e.type === "mouseenter" && !sof.is_touch) {
        thisObj.bubbleTimer = setTimeout(function () {
          thisObj.showQC(self, id)
        }, 100)
      } else if (e.type === "mouseleave") {
        setTimeout(function () {
          if (!self.hasClass("active")) {
            clearTimeout(thisObj.bubbleTimer);
            thisObj.bubbleTimer = null;
            thisObj.hideQC()
          }
        }, 100)
      }
    })
  };
  this.startLoadingQC = function (container) {
    container.find(".cat").addClass("loading").find(".b-category-icon, .b-category-bestrating").hide()
  }
  this.stopLoadingQC = function (container) {
    container.find(".cat").removeClass("loading").find(".b-category-icon, .b-category-bestrating").show()
  }
  this.showQC = function (container, id, is_touch) {
    thisObj = this;
    var bubble = $("#bubble-content-" + id), data;
    if (bubble.length > 0) {
      data = thisObj.getPositionQC(bubble, container);
      bubble.css({
        top: data.top,
        left: data.left
      }).removeClass("left right").addClass(data.side).stop(!0, !0).fadeIn(200)
    } else {
      thisObj.startLoadingQC(container);
      is_touch = is_touch || 0;
      is_touch = 1;
      try {
        thisObj.hideQC();
        $.ajax({
          url: dle_root + "engine/ajax/quick_content.php",
          data: { id: id, is_touch: is_touch },
          type: "POST",
          cache: !1,
          dataType: "html"
        }).always(function (response) {
          var html = $("<div id=\"bubble-content-" + id + "\" class=\"b-content__bubble\"><div class=\"b-content__bubble_content\">" + response + "</div>" + "<i class=\"arrow\"><i></i></i></div>");
          $("body").append(html);
          data = thisObj.getPositionQC(html, container);
          html.css({ top: data.top, left: data.left }).addClass(data.side);
          if (null !== thisObj.bubbleTimer) {
            html.stop(!0, !0).fadeIn(200, function () {
              thisObj.stopLoadingQC(container)
            })
          } else {
            thisObj.stopLoadingQC(container)
          }
          html.off("mouseenter mouseleave").on("mouseenter", function () {
            container.addClass("active")
          }).on("mouseleave", function () {
            container.removeClass("active");
            clearTimeout(thisObj.bubbleTimer);
            thisObj.bubbleTimer = null;
            thisObj.hideQC()
          })
        })
      } catch (e) {
      }
    }
  };
  this.hideQC = function (id) {
    if (undefined == id) {
      $(".b-content__bubble").fadeOut(100);
      return
    }
    var bubble = $("#bubble-content-" + id);
    bubble.fadeOut(100)
  };
  this.getPositionQC = function (bubble, container) {
    var container_position = container.offset(), container_width = container.innerWidth(),
      bubble_width = bubble.innerWidth(), stylesheet = { top: container_position.top - 10, left: 0, side: "left" };
    if (container_position.left + container_width + bubble_width > $(window).width()) {
      stylesheet.left = container_position.left + container_width - bubble_width - 42;
      stylesheet.side = "right"
    } else {
      stylesheet.left = container_position.left + container_width
    }
    return stylesheet
  }
  return this
}).call(sof.home || {}, jQuery);
var sof = sof || {};
sof.gallery = (function () {
  var pub = {};
  pub.initEvents = function () {
    var gallery_group = "a[data-imagelightbox=\"gallery\"]";
    var instance_gallery = $(gallery_group).imageLightbox({
      onStart: function () {
        overlayOn();
        closeButtonOn(instance_gallery);
        arrowsOn(instance_gallery, gallery_group)
      }, onEnd: function () {
        overlayOff();
        captionOff();
        closeButtonOff();
        arrowsOff();
        activityIndicatorOff()
      }, onLoadStart: function () {
        captionOff();
        activityIndicatorOn()
      }, onLoadEnd: function () {
        captionOn();
        activityIndicatorOff();
        $(".imagelightbox-arrow").css("display", "block")
      }
    });
    var cover = "a[data-imagelightbox=\"cover\"]";
    var instance_cover = $(cover).imageLightbox({
      onStart: function () {
        overlayOn();
        closeButtonOn(instance_cover)
      }, onEnd: function () {
        overlayOff();
        captionOff();
        closeButtonOff();
        activityIndicatorOff()
      }, onLoadStart: function () {
        captionOff();
        activityIndicatorOn()
      }, onLoadEnd: function () {
        captionOn();
        activityIndicatorOff();
        $(".imagelightbox-arrow").css("display", "block")
      }
    })
  }
  var activityIndicatorOn = function () {
    $("<div id=\"imagelightbox-loading\"><div></div></div>").appendTo("body")
  }
  var activityIndicatorOff = function () {
    $("#imagelightbox-loading").remove()
  }
  var overlayOn = function () {
    $("<div id=\"imagelightbox-overlay\"></div>").appendTo("body")
  }
  var overlayOff = function () {
    $("#imagelightbox-overlay").remove()
  }
  var closeButtonOn = function (instance) {
    $("<button type=\"button\" id=\"imagelightbox-close\" title=\"Закрыть\"></button>").appendTo("body").on("click touchend", function () {
      $(this).remove();
      instance.quitImageLightbox();
      return !1
    })
  }
  var closeButtonOff = function () {
    $("#imagelightbox-close").remove()
  }
  var captionOn = function () {
    var descr_item = $("a[href=\"" + $("#imagelightbox").attr("src") + "\"] img");
    var description = (descr_item.data("caption-title")) ? descr_item.data("caption-title") : descr_item.attr("title");
    if (typeof description != "undefined" && description.length > 0) {
      $("<div id=\"imagelightbox-caption\">" + description + "</div>").appendTo("body")
    }
  }
  var captionOff = function () {
    $("#imagelightbox-caption").remove()
  }
  var navigationOn = function (instance, selector) {
    var images = $(selector);
    if (images.length) {
      var nav = $("<div id=\"imagelightbox-nav\"></div>");
      for (var i = 0; i < images.length; i++)
        nav.append("<button type=\"button\"></button>");
      nav.appendTo("body");
      nav.on("click touchend", function () {
        return !1
      });
      var navItems = nav.find("button");
      navItems.on("click touchend", function () {
        var $this = $(this);
        if (images.eq($this.index()).attr("href") != $("#imagelightbox").attr("src"))
          instance.switchImageLightbox($this.index());
        navItems.removeClass("active");
        navItems.eq($this.index()).addClass("active");
        return !1
      }).on("touchend", function () {
        return !1
      })
    }
  }
  var navigationUpdate = function (selector) {
    var items = $("#imagelightbox-nav button");
    items.removeClass("active");
    items.eq($(selector).filter("[href=\"" + $("#imagelightbox").attr("src") + "\"]").index(selector)).addClass("active")
  }
  var navigationOff = function () {
    $("#imagelightbox-nav").remove()
  }
  var arrowsOn = function (instance, selector) {
    if ($(selector).length <= 1) return;
    var $arrows = $("<button type=\"button\" class=\"imagelightbox-arrow imagelightbox-arrow-left\"></button><button type=\"button\" class=\"imagelightbox-arrow imagelightbox-arrow-right\"></button>");
    $arrows.appendTo("body");
    $arrows.on("click touchend", function (e) {
      e.preventDefault();
      var $this = $(this), $target = $(selector + "[href=\"" + $("#imagelightbox").attr("src") + "\"]"),
        index = $target.index(selector);
      if ($this.hasClass("imagelightbox-arrow-left")) {
        index = index - 1;
        if (!$(selector).eq(index).length)
          index = $(selector).length
      } else {
        index = index + 1;
        if (!$(selector).eq(index).length)
          index = 0
      }
      instance.switchImageLightbox(index);
      return !1
    })
  }
  var arrowsOff = function () {
    $(".imagelightbox-arrow").remove()
  }
  return pub
}());
var sof = sof || {};
sof.pages = (function () {
  var pub = {};
  var cuInited = !1;
  var imageProperties = {}, crop_sizes = {};
  pub.initEvents = function () {
    bindEvents();
    bindFavoritesEvents();
    bindSavesEvents();
    bindScrollEvents();
    bindCropEvents();
    bindCLEvents();
    bindPasswordsUsage();
    if (window.location.hostname == "hdrezka.nl") {
      var _doc_text = "<div style=\"background: #ffffff; position: fixed; top: 0; left: 0; height: 100%; text-align: center; width: 100%; z-index: 999999;\">" + "<div style=\"padding: 150px 20px 0;\">" + "<h1 class=\"b-post__title\">Наш сайт доступен <u>только</u> по адресу <a href=\"http://rezka.ag/\" onclick=\"window.location.href='http://r'+'ezka'+'.a'+'g'+ window.location.pathname; return false;\">REZKA.<b style=\"font-size: 48px !important;\">AG</b></a></h1>" + "<div style=\"font-size:16px; padding: 10px 0;\"><b>И наш <u>официальный сайт</u> теперь невозможно найти в поисковых системах <b style=\"color:#4285f4;\">G</b>oogle и <b style=\"color:#ff0002;\">Я</b>ндекс!</b></div>" + "<div style=\"font-size:18px; padding: 10px 0;\"><b>Для получения актуального зеркала сайта отправьте письмо на <a href=\"mailto:mirror@hdrezka.org\">mirror@hdrezka<span>.org</span></a> и вам автоматически придет письмо с актуальным зеркалом.</b></div>" + "<div style=\"font-size:20px; padding: 10px 0;\">Пожалуйста, не ищите нас в поисковых системах, и всегда заходите <u>только</u> по адресу <a href=\"http://rezka.ag/\" style=\"font-weight: bold;\" onclick=\"window.location.href='http://r'+'ezka'+'.a'+'g'+ window.location.pathname; return false;\">REZKA.<b style=\"font-size: 24px !important;\">AG</b></a></div>" + "<div style=\"font-size:22px; line-height: 22px; padding: 10px 0;\">Сейчас в поисковых системах очень <b style=\"color:#ff0000;\">много мошенников</b>, которые пользуются нашим именем. <b style=\"color:#ff0000;\">Сайты мошенников</b> наносят вред вашему устройству и <b style=\"color:#ff0000;font-size: 26px;\">воруют деньги с вашего счета</b>.</div>" + "<div style=\"padding: 10px 0;\"><b>Будьте <b style=\"color:#ff0000;\">ВНИМАТЕЛЬНЫ</b> и <b style=\"color:#ff0000;\">ОСТОРОЖНЫ</b>!</b></div>" + "<div style=\"font-size: 20px; font-weight: bold; padding: 10px 0;\">Подписывайтесь на нашу группу в <a href=\"https://vk.com/hdrezka\" target=\"_blank\">VK</a> и <a href=\"https://twitter.com/hdrezka\" target=\"_blank\">Twitter</a><br />У нас скоро будут для вас <b style=\"color:#ff0000;\">важные новости</b>!</div>" + "</div>";
      $("body").append(_doc_text)
    }
  }
  var func_d = "drbv" + sof.helper.generateRandomIdString();
  window[func_d] = function () {
    if (!sof.helper.isMobile.any()) {
      var adblock_image_prefix = "chrome";
      if (sof.helper.isDesktop.firefox()) {
        adblock_image_prefix = "firefox"
      }
      $("#player").html("<div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"background: #ee0000;\"><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"color: #fff; font-family: Arial,serif; font-size: 15px; font-weight: bold; padding: 10px; text-align: left;\"><span id=\"" + sof.helper.generateRandomIdString() + "\" style=\"font-size: 17px;\">Внимание!</span> Если Вы видите это сообщение, значит у Вас включен Adblock* для этого ресурса. Мы прикладываем много усилий, чтобы радовать наших посетителей новинками и своевременной подачей новых серий в отличном качестве. Мы активно вкладываем средства для развития нашего проекта. А единственным источником дохода были и есть рекламные материалы.<br />Отключив Adblock*, Вы поможете нам развиваться, а Вы тем самым получите качественный сервис, который способен составить конкуренцию всем существующим онлайн-кинотеатрам. Спасибо!</div><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"color: #fff; font-family: Arial,serif; font-size: 17px; font-weight: bold; text-align: center;\"><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"padding: 0 10px 10px;\">Чтобы отключить Adblock необходимо нажать на иконку расширения в панели браузера и выбрать «Отключить для этого сайта» либо «Не запускать на страницах этого домена»</div><img src=\"" + dle_root + "i/adblock-" + adblock_image_prefix + ".png\" alt=\"Adblock screenshot\" /><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"font-size: 12px; line-height: 12px; padding: 10px;\">Если после выбора не появляется диалоговое окно для подтверждения, то поднимитесь в самый верх страницы и обнаружите его там</div><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"font-size: 12px; line-height: 12px; padding: 0 10px 10px; text-align: left;\">* Помимо Adblock (расширение для браузера) могут срабатывать сторонние программы, установленные на Вашем устройстве, которые также блокируют показ рекламы. Например, Adguard либо антивирус Kaspersky Internet Security с включенным компонентом \"Анти-Баннер\" и прочие.</div></div>");
      $(".b-post__rating_table").remove()
    }
  }
  var bindAdBlock = function () {
    if (typeof fuckAdBlock === "undefined") {
      window[func_d]()
    } else {
      fuckAdBlock.onDetected(window[func_d])
    }
  }
  var bindFavoritesEvents = function () {
    var dnd = $(".b-favorites_content__cats_list").dad({
      draggable: ".draggable", drag_holder_offset: { x: 1, y: 0, width: 0, height: 0 }, endCallback: function () {
        var _items = [], _loader = $("#user-favorites-holder .loader");
        $(".b-favorites_content__cats_list_item:not(.dads-children-clone)").each(function () {
          _items.push($(this).data("cat_id"))
        });
        _loader.show();
        sof.ajax(dle_root + "ajax/favorites/", { cats: _items, action: "sort_cats" }, function (response) {
          if (response.success == !1) {
            alert(response.message)
          }
          _loader.hide()
        })
      }
    });
    var addFavSumitButtonObj = $("#addcat-fav-addbt");
    var addFavButtonObj = $(".b-sideactions__fav .add-favorite");
    addFavSumitButtonObj.on("click", function (e) {
      e.preventDefault();
      $("#addcat-fav-form").trigger("submit")
    });
    addFavButtonObj.on("click", function (e) {
      $("#user-favorites-holder").show()
    });
    $("#addcat-fav-close").on("click", function (e) {
      $("#user-favorites-holder").hide()
    });
    $("#addcat-fav-add a").on("click", function (e) {
      $("#addcat-fav-add").hide();
      $("#addcat-fav-form").show();
      $("#addcat-fav-name").focus()
    });
    $("#addcat-fav-form").on("submit", function (e) {
      var _self = $(this), _section = _self.data("section"), _errors_holder = _self.find(".errors"),
        _loader = $("#user-favorites-holder").find(".loader"), _fav_name_field = $("#addcat-fav-name"),
        _fav_name = $.trim(_fav_name_field.val());
      if (_fav_name !== "") {
        var _buttons = _self.find("input,button");
        _buttons.prop("disabled", !0);
        _errors_holder.hide();
        _loader.show();
        sof.ajax(dle_root + "ajax/favorites/", { name: _fav_name, action: "add_cat" }, function (response) {
          if (response.success == !0) {
            _fav_name_field.val("");
            if (_section == "favorites") {
              var _item = pub.buildFavoritesCatItem(response);
              if (_item) {
                if ($(".b-favorites_content__cats_nolist").length > 0) {
                  $(".b-favorites_content__cats_nolist").replaceWith("<div class=\"b-favorites_content__cats_list dad-draggable\"></div>")
                }
                $(".b-favorites_content__cats_list").prepend(_item)
              }
              $("#addcat-fav-add").show();
              $("#addcat-fav-form").hide();
              _loader.hide()
            } else {
              $("#user-favorites-holder").find(".empty-info").remove();
              $("#user-favorites-list .start-info").show().after("<div class=\"hd-label-row\"><input type=\"checkbox\" id=\"user-fav-check-" + response.id + "\" class=\"user-fav-check\" value=\"" + response.id + "\" /><label for=\"user-fav-check-" + response.id + "\">" + response.name + "<small>(<b>0</b>)</small></label>");
              $("#user-fav-check-" + response.id).trigger("click")
            }
          } else {
            _errors_holder.html(response.message).show();
            _fav_name_field.focus();
            _loader.hide()
          }
          addFavSumitButtonObj.blur();
          _buttons.prop("disabled", !1)
        })
      } else {
        _errors_holder.html("Необходимо указать название нового раздела").show();
        _fav_name_field.focus();
        addFavSumitButtonObj.blur()
      }
      return !1
    });
    $("#user-favorites-holder").on("change", ".user-fav-check", function (e) {
      var _self = $(this), _loader = $("#user-favorites-holder").find(".loader"),
        _counter_obj = _self.closest(".hd-label-row").find("b"), _counter_num = parseInt(_counter_obj.text()),
        _post_id = $("#user-favorites-holder").data("post_id"), _prop = _self.prop("checked");
      _loader.show();
      sof.ajax(dle_root + "ajax/favorites/", {
        post_id: _post_id,
        cat_id: _self.val(),
        action: "add_post"
      }, function (response) {
        if (response.success == !0) {
          if (_prop) {
            _counter_obj.text((_counter_num + 1))
          } else {
            _counter_obj.text((_counter_num - 1))
          }
          var _fav_len = $("#user-favorites-holder .user-fav-check:checked").length;
          if (_fav_len > 0) {
            addFavButtonObj.removeClass("btn-helper").addClass("btn-primary").text("Находится в закладках (в " + _fav_len + " " + ((_fav_len > 1) ? "разделах" : "разделе") + ")")
          } else {
            addFavButtonObj.removeClass("btn-primary").addClass("btn-helper").text("Добавить к себе в коллекцию...")
          }
        } else {
          alert(response.message);
          _self.prop("checked", !1)
        }
        _loader.hide()
      })
    });
    $(".b-favorites_content__sidebar").on("click", ".edit-cat", function () {
      showEditFavoriteCatPopup($(this))
    });
    $(".check-favorite input").on("click", function () {
      var _self = $(this), _total = $(".check-favorite input:checked:not(:disabled)").length,
        _cat_holder = $(".b-favorites_content__cats_list_link.active").closest(".b-favorites_content__cats_list_item"),
        _cat_id = _cat_holder.data("cat_id");
      if (_total > 0) {
        var _edit_holder = $("#favcat-edit-" + _cat_id);
        if (_edit_holder.length > 0) {
          _edit_holder.find("b").text(_total)
        } else {
          _cat_holder.append("<div id=\"favcat-edit-" + _cat_id + "\" class=\"b-favorites_content__cats_edit_holder\"><button class=\"btn btn-attention btn-mini remove-items\" type=\"button\" data-cat_id=\"" + _cat_id + "\">Удалить (<b class=\"fb-2\">" + _total + "</b>)</button><button class=\"btn btn-action btn-mini move-items\" type=\"button\" data-cat_id=\"" + _cat_id + "\">Перенести (<b class=\"fb-3\">" + _total + "</b>)</button></div>")
        }
      } else {
        $("#favcat-edit-" + _cat_id).remove()
      }
    });
    $(".b-favorites_content__cats_list_item").on("click", ".remove-items", function () {
      var _self = $(this), _cat_id = _self.data("cat_id"), _items_ids = [];
      _items_ids = $(".check-favorite input:checked:not(:disabled)").map(function () {
        return this.value
      }).toArray();
      if (_items_ids.length > 0) {
        var result = confirm("Удалить выбранные (" + _items_ids.length + ") закладки из раздела «" + $("#favorite-cat-" + _cat_id + " .name").text() + "»?");
        if (!0 == result) {
          _self.prop("disabled", !0);
          sof.ajax(dle_root + "ajax/favorites/", {
            items: _items_ids,
            cat_id: _cat_id,
            action: "remove_items"
          }, function (response) {
            if (response.success == !0) {
              var _cat_obj = $("#favorite-cat-" + _cat_id + " b.fb-1"),
                _sum_num = parseInt(_cat_obj.text()) - parseInt(_items_ids.length);
              _cat_obj.text(_sum_num);
              $(".check-favorite input:checked:not(:disabled)").closest(".b-content__inline_item").remove();
              $("#favcat-edit-" + _cat_id).remove()
            } else {
              alert(response.message)
            }
            _self.prop("disabled", !1)
          })
        }
      }
    });
    $(".b-favorites_content__cats_list_item").on("click", ".move-items", function () {
      var _self = $(this), _cat_id = _self.data("cat_id"), _items_ids = [];
      _items_ids = $(".check-favorite input:checked:not(:disabled)").map(function () {
        return this.value
      }).toArray();
      if (_items_ids.length > 0) {
        showMoveFavoritesPopup(_self)
      }
    })
  }
  var showMoveFavoritesPopup = function (el) {
    var _self = el.closest(".b-favorites_content__cats_list_item");
    var onOpen = function () {
      var _current_favs_number = parseInt(_self.find("b.fb-1").text()),
        _current_cats_number = $(".b-favorites_content__cats_list .b-favorites_content__cats_list_item").length,
        _cat_id = _self.data("cat_id"), _items_ids = [], _total = 0;
      _items_ids = $(".check-favorite input:checked:not(:disabled)").map(function () {
        return this.value
      }).toArray();
      _total = _items_ids.length;
      $("#ps-favorites-content").html("<div id=\"ps-favorites-title\">Перенос закладок из раздела &laquo;<span id=\"ps-favorites-title-name\">" + _self.find(".name").text() + "</span>&raquo;</div><ul id=\"ps-favorites-case\">" + ((_current_cats_number > 1) ? "<li id=\"ps-favorites-case-1\">перенести выбранные (" + _total + ") закладки в раздел: <select id=\"ps-favorites-select-cat\" name=\"\"><option value=\"0\">выбрать раздел</option>" + buildFavoritesCats(_cat_id) + "</select><button class=\"btn btn-action btn-mini select-cat-save\" type=\"submit\" data-cat_id=\"" + _cat_id + "\"><i class=\"loading\"></i>Перенести</button></li>" : "<li>Необходимо создать как минимум еще один раздел для закладок</li>") + "</ul>");
      $("#ps-overlay-wrap").removeClass("loading");
      $("#ps-favorites-select-cat").on("change", function () {
        var _self = $(this), _cat_id = _self.val();
        if (_cat_id > 0) {
          $("#ps-favorites-content .select-cat-save").show()
        } else {
          $("#ps-favorites-content .select-cat-save").hide()
        }
      });
      $("#ps-favorites-content .select-cat-save").on("click", function () {
        var _self = $(this), _from_cat_id = _self.data("cat_id"), _to_cat_id = $("#ps-favorites-select-cat").val(),
          _loader = _self.find(".loading");
        if (_to_cat_id > 0) {
          var result = confirm("Перенести выбранные (" + _total + ") закладки из «" + $("#favorite-cat-" + _from_cat_id + " .name").text() + "» в раздел «" + $("#favorite-cat-" + _to_cat_id + " .name").text() + "»?");
          if (!0 == result) {
            _self.prop("disabled", !0);
            _loader.show();
            sof.ajax(dle_root + "ajax/favorites/", {
              from_cat_id: _from_cat_id,
              to_cat_id: _to_cat_id,
              items: _items_ids,
              action: "change_items_cat"
            }, function (response) {
              if (response.success == !0) {
                var _from_cat_obj = $("#favorite-cat-" + _from_cat_id + " b.fb-1"),
                  _to_cat_obj = $("#favorite-cat-" + _to_cat_id + " b.fb-1");
                var _from_sum_num = parseInt(_from_cat_obj.text()) - _total,
                  _to_sum_num = parseInt(_to_cat_obj.text()) + parseInt(response.moved);
                _from_cat_obj.text(_from_sum_num);
                _to_cat_obj.text(_to_sum_num);
                $(".check-favorite input:checked:not(:disabled)").closest(".b-content__inline_item").remove();
                $("#favcat-edit-" + _cat_id).remove();
                $("#ps-close").trigger("click");
                if ($(".b-content__inline_items .b-content__inline_item").length == 0 && $(".b-navigation").length > 0) {
                  window.location = "/favorites/" + _from_cat_id + "/"
                }
              } else {
                alert(response.message)
              }
              _loader.hide();
              _self.prop("disabled", !1)
            })
          }
        }
      })
    }
    var onClose = function () {
    }
    sof.helper.showPS("ps-favorites-content", onOpen, onClose)
  }
  var showEditFavoriteCatPopup = function (el) {
    var _self = el.closest(".b-favorites_content__cats_list_item");
    var onOpen = function () {
      var _current_favs_number = parseInt(_self.find("b.fb-1").text()),
        _current_cats_number = $(".b-favorites_content__cats_list .b-favorites_content__cats_list_item").length,
        _cat_id = _self.data("cat_id");
      $("#ps-favorites-content").html("<div id=\"ps-favorites-title\">Редактирование раздела &laquo;<span id=\"ps-favorites-title-name\">" + _self.find(".name").text() + "</span>&raquo;</div><ul id=\"ps-favorites-case\"><li id=\"ps-favorites-case-1\"><form class=\"change-name-form\" name=\"\" method=\"post\" action=\"\" data-cat_id=\"" + _cat_id + "\"><span class=\"change-name-link\">изменить название раздела</span><input type=\"text\" class=\"change-name-field\" value=\"\" /><button class=\"btn btn-action btn-small change-name-save\" type=\"submit\"><i class=\"loading\"></i>Сохранить</button><div class=\"errors\"></div></form></li>" + ((_current_favs_number > 0 && _current_cats_number > 1) ? "<li id=\"ps-favorites-case-2\">перенести все закладки из указанного раздела в другой: <select id=\"ps-favorites-select-cat\" name=\"\"><option value=\"0\">выбрать раздел</option>" + buildFavoritesCats(_cat_id) + "</select><button class=\"btn btn-action btn-mini select-cat-save\" type=\"submit\" data-cat_id=\"" + _cat_id + "\"><i class=\"loading\"></i>Перенести</button></li>" : "") + "</ul><div id=\"ps-favorites-holderbuttons\"><button id=\"ps-favorites-remove\" class=\"btn btn-attention btn-small remove-cat\" type=\"button\" data-cat_id=\"" + _cat_id + "\"><i class=\"loading\"></i>Удалить раздел</button></div>");
      $("#ps-overlay-wrap").removeClass("loading");
      $("#ps-favorites-content .change-name-field").val(_self.find(".name").text());
      $("#ps-favorites-content .change-name-link").on("click", function () {
        $(this).hide();
        $("#ps-favorites-content .change-name-save").show();
        $("#ps-favorites-content .change-name-field").show().focus()
      });
      $("#ps-favorites-select-cat").on("change", function () {
        var _self = $(this), _cat_id = _self.val();
        if (_cat_id > 0) {
          $("#ps-favorites-content .select-cat-save").show()
        } else {
          $("#ps-favorites-content .select-cat-save").hide()
        }
      });
      $("#ps-favorites-content .select-cat-save").on("click", function () {
        var _self = $(this), _from_cat_id = _self.data("cat_id"), _to_cat_id = $("#ps-favorites-select-cat").val(),
          _loader = _self.find(".loading");
        if (_to_cat_id > 0) {
          var result = confirm("Перенести все закладки из «" + $("#favorite-cat-" + _from_cat_id + " .name").text() + "» в раздел «" + $("#favorite-cat-" + _to_cat_id + " .name").text() + "»?");
          if (!0 == result) {
            _self.prop("disabled", !0);
            _loader.show();
            sof.ajax(dle_root + "ajax/favorites/", {
              from_cat_id: _from_cat_id,
              to_cat_id: _to_cat_id,
              action: "move_to_cat"
            }, function (response) {
              if (response.success == !0) {
                var _from_cat_obj = $("#favorite-cat-" + _from_cat_id + " b.fb-1"),
                  _to_cat_obj = $("#favorite-cat-" + _to_cat_id + " b.fb-1");
                var _sum_num = parseInt(response.added) + parseInt(_to_cat_obj.text());
                _from_cat_obj.text(0);
                _to_cat_obj.text(_sum_num);
                $("#ps-favorites-case-2").hide();
                $(".b-content__inline_items .b-content__inline_item").remove();
                window.location = "/favorites/" + _to_cat_id + "/"
              } else {
                alert(response.message)
              }
              _loader.hide();
              _self.prop("disabled", !1)
            })
          }
        }
      });
      $("#ps-favorites-remove").on("click", function () {
        var _self = $(this), _cat_id = _self.data("cat_id"), _loader = _self.find(".loading"),
          _items_num = parseInt($("#favorite-cat-" + _cat_id + " b.fb-1").text()), result = !0;
        if (_items_num > 0) {
          result = confirm("Внимание! Текущий раздел содержит закладки. Все равно удалить раздел «" + $("#favorite-cat-" + _cat_id + " .name").text() + "» вместе с закладками?")
        }
        if (result == !0) {
          _self.prop("disabled", !0);
          _loader.show();
          sof.ajax(dle_root + "ajax/favorites/", { cat_id: _cat_id, action: "remove_cat" }, function (response) {
            if (response.success == !0) {
              $("#favorite-cat-" + _cat_id).remove();
              $("#favorites-content-holder-" + _cat_id + " .b-content__inline_item").remove();
              if ($(".b-favorites_content__cats_list .b-favorites_content__cats_list_item").length < 1) {
                $(".b-favorites_content__cats_list").replaceWith("<div class=\"b-favorites_content__cats_nolist\"><span class=\"title\">В закладках ещё ничего нет</span> Создавать новые разделы для закладок и добавлять в них видео можно на самой странице с фильмом, сериалом, аниме или мультфильмом!</div>")
              }
              $("#ps-close").trigger("click");
              window.location = "/favorites/"
            } else {
              alert(response.message)
            }
            _loader.hide();
            _self.prop("disabled", !1)
          })
        }
      });
      $("#ps-favorites-content .change-name-form").on("submit", function () {
        var _self = $(this), _errors_holder = _self.find(".errors"), _loader = _self.find(".loading"),
          _fav_name_field = $("#ps-favorites-content .change-name-field"), _fav_name = $.trim(_fav_name_field.val());
        if (_fav_name !== "") {
          var _buttons = _self.find("input,button"), _cat_id = _self.data("cat_id");
          _buttons.prop("disabled", !0);
          _errors_holder.hide();
          _loader.show();
          sof.ajax(dle_root + "ajax/favorites/", {
            name: _fav_name,
            cat_id: _cat_id,
            action: "change_cat_name"
          }, function (response) {
            if (response.success == !0) {
              $("#ps-favorites-title-name").text(_fav_name);
              $("#favorite-cat-" + _cat_id + " .name").text(_fav_name);
              $("#ps-favorites-content .change-name-save").hide();
              $("#ps-favorites-content .change-name-field").hide();
              $("#ps-favorites-content .change-name-link").show()
            } else {
              _errors_holder.html(response.message).show();
              _fav_name_field.focus()
            }
            _loader.hide();
            _buttons.prop("disabled", !1)
          })
        } else {
          _errors_holder.html("Необходимо указать новое название для раздела").show();
          _fav_name_field.focus()
        }
        return !1
      })
    }
    var onClose = function () {
    }
    sof.helper.showPS("ps-favorites-content", onOpen, onClose)
  }
  pub.buildFavoritesCatItem = function (item) {
    if (item.id > 0) {
      return "<div id=\"favorite-cat-" + item.id + "\" class=\"b-favorites_content__cats_list_item clearfix\" data-cat_id=\"" + item.id + "\"><span class=\"draggable dad-draggable-area\"><b>•<br />•<br />•</b></span><a class=\"b-favorites_content__cats_list_link\" href=\"/favorites/" + item.id + "/\" rel=\"nofollow\"><span class=\"name\">" + item.name + "</span> <span class=\"num-holder\">(<b class=\"fb-1\">0</b>)</span></a><span class=\"edit-cat\"></span></div>"
    }
    return !1
  }
  var buildFavoritesCats = function (_current_cat_id) {
    var _items = $(".b-favorites_content__cats_list_item"), _list = "";
    if (_items.length > 0) {
      $.each(_items, function () {
        var _self = $(this), _cat_id = _self.data("cat_id");
        if (_cat_id != _current_cat_id) {
          _list += "<option value=\"" + _cat_id + "\">" + _self.find(".name").text() + " (" + _self.find("b.fb-1").text() + ")</option>"
        }
      })
    }
    return _list
  }
  var bindScrollEvents = function () {
  }
  var bindSavesEvents = function () {
    if (!sof.is_touch) {
      $("#videosaves-list").on("mouseenter mouseleave", ".b-videosaves__list_item", function (e) {
        var controls_bar = $(this).find(".controls-holder");
        if (e.type === "mouseenter") {
          controls_bar.addClass("showing")
        } else {
          controls_bar.removeClass("showing")
        }
      })
    } else {
      $(".b-videosaves__list_item .controls-holder").addClass("showing")
    }
    $(".b-videosaves__list_item .delete").on("click", function () {
      var _self = $(this), _id = _self.data("id");
      var result = confirm("Удалить сохранение?");
      if (!0 == result) {
        $.post(dle_root + "engine/ajax/cdn_saves_remove.php", { id: _id }, function (response) {
          if (!0 === response.success) {
            $("#videosave-" + _id).slideUp(200);
            sof.tv.changeCounter("minus")
          } else {
            sof.helper.messageInfo(response.message)
          }
        })
      }
    });
    $(".b-videosaves__list_item .view").on("click", function () {
      var _self = $(this), _holder = _self.closest(".controls-holder"),
        _row = _self.closest(".b-videosaves__list_item"), _id = _self.data("id"), text_watch = _self.data("text-watch"),
        text_unwatch = _self.data("text-unwatch");
      var result_text = "Отметить как просмотренный и не отображать уведомления о выходе новых серий?";
      if (_self.hasClass("watched")) {
        result_text = "Отметить как не просмотренный и отображать уведомления о выходе новых серий?"
      }
      var result = confirm(result_text);
      if (!0 == result) {
        _self.addClass("loading");
        _holder.addClass("showing");
        $.post(dle_root + "engine/ajax/cdn_saves_view.php", { id: _id }, function (response) {
          _self.removeClass("loading");
          if (!0 === response.success) {
            if (!_self.hasClass("watched")) {
              _self.addClass("watched").attr("title", text_unwatch);
              _row.addClass("watched-row").find(".info-holder").hide()
            } else {
              _self.removeClass("watched").attr("title", text_watch);
              _row.removeClass("watched-row").find(".info-holder").show()
            }
          } else {
            sof.helper.messageInfo(response.message)
          }
        })
      } else {
        _self.removeClass("loading")
      }
    })
  }
  var bindEvents = function () {
    $(".b-topnav__findbest_select select").selectOrDie();
    $(".b-topnav__findbest_block .btn").on("click", function (e) {
      var _self = $(this), _block_id = _self.data("block_id"), _holder = $("#find-best-block-" + _block_id),
        year = $(".select-year", _holder).val();
      var url = $(".select-category", _holder).val();
      if (year > 0) {
        url += year + "/"
      }
      window.location.href = url
    });
    $(".b-seriesupdate__block_date.collapsible").on("click", function () {
      var _self = $(this), act = $(this).find(".act"),
        block = act.closest(".b-seriesupdate__block").find(".b-seriesupdate__block_list"), current_state = act.text(),
        collapse_state = act.data("text-collapse"), expand_state = act.data("text-expand");
      if (current_state == expand_state) {
        _self.addClass("expandable");
        act.text(collapse_state);
        block.stop(!0, !0).slideDown(200)
      } else {
        _self.removeClass("expandable");
        act.text(expand_state);
        block.slideUp(200)
      }
    });
    $(".b-post__schedule_block_title").on("click", function () {
      var _self = $(this).find(".act"), block = _self.closest(".b-post__schedule_block").find(".b-post__schedule_list"),
        current_state = _self.text(), collapse_state = _self.data("text-collapse"),
        expand_state = _self.data("text-expand");
      if (current_state == expand_state) {
        _self.text(collapse_state);
        $(".load-more", block).hide();
        $("tr:hidden", block).not(".admin-schedule-row").show();
        block.stop(!0, !0).slideDown(200)
      } else {
        _self.text(expand_state);
        block.slideUp(200)
      }
    });
    $(".b-post__schedule_table .load-more").on("click", function () {
      var _self = $(this);
      _self.hide();
      _self.closest(".b-post__schedule_table").find("tr:hidden").not(".admin-schedule-row").show()
    });
    $(".b-post__schedule_table .watch-episode-action").on("click", function () {
      var _self = $(this), id = _self.data("id"), text_watch = _self.data("text-watch"),
        text_unwatch = _self.data("text-unwatch");
      _self.addClass("loading");
      $.post(dle_root + "engine/ajax/schedule_watched.php", { id: id }, function (response) {
        if (!0 === response.success) {
          if (!_self.hasClass("watched")) {
            _self.addClass("watched").attr("title", text_unwatch)
          } else {
            _self.removeClass("watched").attr("title", text_watch)
          }
        } else if (response.message == "need_auth") {
          $(".b-tophead__login").trigger("click")
        } else {
          sof.helper.messageInfo(response.message)
        }
        _self.removeClass("loading")
      })
    });
    $(".b-post__schedule_more").on("click", function () {
      var _self = $(this), block = $(".b-post__schedule_block_hidden");
      _self.hide();
      $(".load-more", block).hide();
      $("tr:hidden", block).not(".admin-schedule-row").show();
      block.show()
    });
    $(".subject-notice-q .btn").on("click", function () {
      var _self = $(this);
      if (_self.hasClass("btn-action")) {
        $(".subject-notice-q").text("Спасибо!")
      } else {
        $(".subject-notice-q").hide();
        $(".subject-2-hidden").show();
        $("#message").focus()
      }
      $.post(dle_root + "engine/ajax/feedback_subject_usage.php", {
        useful: _self.data("useful"),
        subject_id: _self.data("subject_id"),
        post_id: _self.data("post_id")
      })
    });
    $(".show-help-form").on("click", function () {
      $(".subject-notice-q").hide();
      $(".subject-2-hidden").show();
      $("#message").focus()
    });
    $("#comments-list-button").on("click", function (e) {
      e.preventDefault();
      var _self = $(this);
      if (_self.data("open") == 1) {
        $("#comments-0").trigger("focus")
      }
      sof.helper.scrollTo($("#addcomment-title"), 100)
    });
    $("#noa-btns .btn").on("click", function () {
      var _self = $(this);
      if ($("#noa-btns .btn").hasClass("disabled")) return;
      $("#noa-btns .btn").addClass("disabled");
      $.post(dle_root + "engine/ajax/noadvert_usage.php", { useful: _self.data("useful") }, function (response) {
        if (response.success == !0) {
          $("#noa-btns").hide();
          $("#noa-message").html(response.message).show()
        } else {
          sof.helper.messageInfo(response.message);
          $("#noa-btns .btn").removeClass("disabled")
        }
      })
    });
    $(".b-person__career_more").on("click", function () {
      var _self = $(this), _items = _self.prev(".b-sidelist").find(".b-content__inline_item.is_hidden");
      _items.removeClass("is_hidden");
      _self.hide()
    });
    $(".b-person__gallery_show").on("click", function () {
      $(".b-person__gallery_list a:first").trigger("click")
    });
    $("#genres-list").multipleSelect({ selectAll: !1 });
    $(".b-tophead-dropdown, .b-tophead__subscribe-dropdown").on(((sof.is_touch) ? "click" : "mouseenter mouseleave"), function (e) {
      var _self = $(this), _list = _self.find("ul"), _type = e.type;
      if (_type === "click") {
        _type = (!_self.hasClass("hovered")) ? "mouseenter" : "mouseleave"
      }
      switch (_type) {
        case "mouseenter":
          _self.addClass("hovered");
          _list.show();
          break;
        case "mouseleave":
          _self.removeClass("hovered");
          _list.hide();
          break
      }
    });
    var adbissues_time = 0, adbissues_interval = null;
    if ($("#player").height() < 10 && ($("#videoplayer").html() != "" || $("#youtubeplayer").html() != "") && window.ab == !0) {
      adbissues_interval = setInterval(function () {
        adbissues_time++;
        if (adbissues_time >= 3) {
          var adblock_image_prefix = "ch";
          if (sof.helper.isDesktop.firefox()) {
            adblock_image_prefix = "ff"
          }
          $("#player").css("padding-top", 0);
          $("#e654e12").before("<div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"background: #ee0000;\"><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"color: #fff; font-family: Arial,serif; font-size: 15px; font-weight: bold; padding: 10px; text-align: left;\"><span id=\"" + sof.helper.generateRandomIdString() + "\" style=\"font-size: 17px;\">Внимание!</span> Если Вы видите это сообщение, значит у Вас включен Adblock* для этого ресурса, и сайт работает некорректно. Мы прикладываем много усилий, чтобы радовать наших посетителей новинками и своевременной подачей новых серий в отличном качестве. Мы активно вкладываем средства для развития нашего проекта. А единственным источником дохода были и есть рекламные материалы.<br />Отключив Adblock*, Вы поможете нам развиваться, и Вы тем самым получите качественный сервис, который способен составить конкуренцию всем существующим онлайн-кинотеатрам. Спасибо!</div><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"color: #fff; font-family: Arial,serif; font-size: 17px; font-weight: bold; text-align: center;\"><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"padding: 0 10px 10px;\">Чтобы отключить Adblock необходимо нажать на иконку расширения в панели браузера и выбрать «Отключить для этого сайта» либо «Не запускать на страницах этого домена»</div><img src=\"" + dle_root + "i/2ab-" + adblock_image_prefix + ".png\" alt=\"Adblock screenshot\" /><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"font-size: 12px; line-height: 12px; padding: 10px;\">Если после выбора не появляется диалоговое окно для подтверждения, то поднимитесь в самый верх страницы и обнаружите его там</div><div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"font-size: 12px; line-height: 12px; padding: 0 10px 10px; text-align: left;\">* Помимо Adblock (расширение для браузера) могут срабатывать сторонние программы, установленные на Вашем устройстве, которые также блокируют показ рекламы. Например, Adguard либо антивирус Kaspersky Internet Security с включенным компонентом \"Анти-Баннер\" и прочие.</div></div>");
          if (adbissues_interval !== null) {
            clearInterval(adbissues_interval)
          }
        }
      }, 1000)
    }
    if (window.ab == !0 && $(".b-post__support_holder").length > 0) {
      $("<div id=\"" + sof.helper.generateRandomIdString() + "\" style=\"color: #fff; font-size: 12px; line-height: 18px; padding: 10px 10px 0 10px; text-align: center;\"><b>Внимание!</b> Мы обнаружили блокировщик рекламы, поэтому видео будет доступно только в 360p качестве<br /><a href=\"/help/aHR0cCUzQSUyRiUyRnJ1Lndpa2lob3cuY29tJTJGJUQwJUJFJUQxJTgyJUQwJUJBJUQwJUJCJUQxJThFJUQxJTg3JUQwJUI4JUQxJTgyJUQxJThDLUFkYmxvY2s=/\" target=\"_blank\" style=\"color: #fff; text-decoration: underline;\">Как отключить Adblock</a></div>").insertBefore(".b-post__support_holder")
    }
    if (!sof.is_touch) {
      sof.pages.setPersonsPopup();
      $(".hd-tooltip").tooltipster({ animation: "swing", hideOnClick: !0, touchDevices: !1 })
    }
    $(".hd-tooltip-custom").tooltipster({
      functionInit: function (instance, content) {
        var _options = $(instance).attr("data-attrs");
        if (_options) {
          _options = $.parseJSON(_options);
          setTimeout(function () {
            $.each(_options, function (name, option) {
              instance.tooltipster("option", name, option)
            })
          }, 10)
        }
      }
    })
  }
  pub.setPersonsPopup = function () {
    $(".person-name-item").tooltipster({
      animation: "fade",
      delay: 50,
      hideOnClick: !0,
      contentAsHTML: !0,
      interactive: !0,
      content: "<i class=\"b-tt_popup__loader\"></i>",
      updateAnimation: !1,
      onlyOne: !0,
      position: "top_always",
      offsetY: -7,
      functionBefore: function (origin, continueTooltip) {
        var _id = origin.data("id"), _pid = origin.data("pid");
        if (_id > 0) {
          continueTooltip();
          if (origin.data("ajax") !== "cached") {
            sof.ajax(dle_root + "ajax/person_info/", { id: _id, pid: _pid }, function (response) {
              var content = "";
              if (response.success == !0) {
                origin.tooltipster("content", sof.pages.buildPersonInfo(response.person)).data("ajax", "cached")
              } else {
                origin.tooltipster("content", response.message)
              }
            });
            origin.data("ajax", "cached")
          }
          origin.addClass("showing-content")
        }
      },
      functionAfter: function (origin) {
        origin.removeClass("showing-content")
      }
    })
  }
  pub.buildPersonInfo = function (person) {
    var html = "";
    html += "<div class=\"b-person__popup\">";
    html += "   <div class=\"b-person__popup_name\"><a href=\"" + person.link + "\" rel=\"nofollow\">" + person.name + "</a>" + ((person.edit_link != null) ? " <a href=\"" + person.edit_link + "\" target=\"_blank\"><span class=\"b-post-edit\"></span></a>" : "") + "</div>";
    if (person.namealt != "") {
      html += "   <div class=\"b-person__popup_namealt\">" + person.name_alt + "</div>"
    }
    html += "   <div class=\"b-person__popup_inner\" style=\"padding-left: " + (22 + person.width) + "px;\">";
    html += "       <div class=\"b-person__popup_holder_photo\" style=\"margin-left: -" + (22 + person.width) + "px;\"><a class=\"photo-link\" href=\"" + person.link + "\" rel=\"nofollow\"><span class=\"b-person__popup_photo\"><img src=\"" + person.photo + "\" height=\"" + person.height + "\" width=\"" + person.width + "\" alt=\"\" /></span><i class=\"overlay\"></i></a></div>";
    html += "       <div class=\"b-person__popup_holder_content\">";
    html += "           <table class=\"b-person__popup_content\">";
    if (person.careers != "") {
      html += "               <tr><td class=\"t\">Карьера:</td><td class=\"v\">" + person.careers + "</td></tr>"
    }
    if (person.birthday != null) {
      html += "               <tr><td class=\"t\">Дата рождения:</td><td class=\"v\">" + person.birthday + ((person.age != null) ? " (" + person.age + ")" : "") + "</td></tr>"
    }
    if (person.birthplace != "") {
      html += "               <tr><td class=\"t\">Место рождения:</td><td class=\"v\">" + person.birthplace + "</td></tr>"
    }
    if (person.deathday != null) {
      html += "               <tr><td class=\"t\">Дата смерти:</td><td class=\"v\">" + person.deathday + ((person.agefull != null) ? " (в возрасте " + person.agefull + ")" : "") + "</td></tr>"
    }
    if (person.deathplace != "") {
      html += "               <tr><td class=\"t\">Место смерти:</td><td class=\"v\">" + person.deathplace + "</td></tr>"
    }
    if (person.person_height != "") {
      html += "               <tr><td class=\"t\">Рост:</td><td class=\"v\">" + person.person_height + "</td></tr>"
    }
    if (person.stats != "" || person.photos_count > 0) {
      person.stats_string = (person.stats != "") ? "На сайте ещё <a href=\"" + person.link + "\" rel=\"nofollow\">" + person.stats + "</a>" + ((person.gender > 0) ? " с " + ((person.gender == 2) ? "её" : "его") + " участием" : "") : "";
      person.photos_string = (person.photos_count > 0) ? "<a href=\"" + person.link + "\" rel=\"nofollow\">" + person.photos_count + " " + sof.helper.lexica(person.photos_count, "фотографи%я%и%й") + "</a> " + ((person.gender > 0) ? " с " + ((person.gender == 2) ? "ней" : "ним") : "") : "";
      if (person.stats != "" && person.photos_count > 0) {
        person.photos_string = ", а также " + person.photos_string
      } else if (person.stats == "" && person.photos_count > 0) {
        person.photos_string = "На сайте " + person.photos_string
      }
      html += "               <tr><td colspan=\"2\" class=\"stats\">" + person.stats_string + person.photos_string + "</td></tr>"
    }
    html += "           </table>"
    html += "       </div>";
    html += "   </div>";
    html += "</div>";
    return html
  }
  var bindSidebarSlideEvents = function () {
    if ($(".b-content__main").length > 0 && $(".b-content__sidebar").length > 0) {
      $(window).on("scroll.sidebar", function () {
        sidebarHandler()
      })
    }
  }
  var sidebarHandler = function () {
    var content = $(".b-content__main"), sidebar = $(".b-content__sidebar"), ch = content.height(),
      sh = sidebar.height(), c_top = content.offset().top, wh = $(window).height(), top = $(window).scrollTop(), mt = 0;
    if (wh > sh) {
      if ((top + sh) >= (c_top + ch)) {
        mt = ch - sh;
        sidebar.css("margin-top", mt);
        return
      }
      if (top >= c_top) {
        mt = top - c_top;
        sidebar.css("margin-top", mt);
        return
      } else {
        sidebar.css("margin-top", mt)
      }
      return
    }
    if (ch > sh) {
      if ((top + wh) >= (ch + c_top)) {
        mt = ch - sh;
        sidebar.css("margin-top", mt);
        return
      }
      if ((top + wh) >= (sh + c_top)) {
        mt = (top + wh) - (sh + c_top);
        sidebar.css("margin-top", mt);
        return
      }
    }
    sidebar.css("margin-top", mt)
  }
  pub.initNewestSlider = function (is_mobile) {
    var animated_slider = !1, slider = $("#newest-slider"), list = $("#newest-slider-content"),
      count = list.find(".b-content__inline_item").length, total = count / 8, position = 1;
    if (count == 32) {
      var first_items = $(".b-content__inline_item:lt(8)", list).clone();
      var last_items = $(".b-content__inline_item", list).slice(-8).clone();
      first_items.appendTo(list);
      last_items.prependTo(list);
      list.css({ marginLeft: "-100%", width: "999999em" })
    } else {
      $("#newest-slider .cntrl.prev").animate({ opacity: 0, left: -50 }, 250);
      $("#newest-slider .cntrl.next").animate({ opacity: 0, right: -50 }, 250)
    }

    function slideTo(to) {
      if (to == "next") {
        position++
      } else {
        position--
      }
      list.stop(!0, !0).animate({ marginLeft: -100 * position + "%" }, 400, function () {
        if (position > total) {
          position = 1;
          list.css({ marginLeft: "-100%" })
        } else if (position <= 0) {
          position = total;
          list.css({ marginLeft: -100 * total + "%" })
        }
      })
    }

    $(".cntrl", slider).off("click").on("click", function () {
      var _self = $(this), _to = _self.data("to");
      slideTo(_to)
    });
    $(".b-newest_slider__title span").off("click").on("click", function () {
      var _self = $(this), _id = _self.data("id");
      if (!_self.hasClass("active") && animated_slider == !1) {
        animated_slider = !0;
        $(".b-newest_slider__title span").removeClass("active");
        _self.addClass("active");
        if (_id > 0) {
          $(".b-newest_slider__title .show-all").show()
        } else {
          $(".b-newest_slider__title .show-all").hide()
        }
        $.cookie("newest_tab", _id, { path: "/", expires: 30 });
        var holder = $("#newest-slider-holder"), content = $("#newest-slider-content"), h = content.outerHeight(),
          w = content.width();
        content.css({ width: w });
        holder.animate({ height: h }, 250);
        $("#newest-slider .cntrl.prev").animate({ opacity: 0, left: -50 }, 250);
        $("#newest-slider .cntrl.next").animate({ opacity: 0, right: -50 }, 250);
        content.find(".b-content__inline_item").slice(position * 8, (position + 1) * 8).each(function (i) {
          $(this).delay(25 * i).animate({ marginTop: (h + 20) }, 250)
        }).promise().done(function () {
          content.hide();
          sof.ajax(dle_root + "engine/ajax/get_newest_slider_content.php", { id: _id }, function (response) {
            var html = $(response);
            content.html(html);
            content = $("#newest-slider-content");
            var items = content.find(".b-content__inline_item"), h_h = content.outerHeight();
            holder.animate({ height: h_h }, 250);
            content.css({ marginLeft: 0 });
            items.css({ marginTop: -1 * h_h });
            if (_id > 0) {
              list.removeClass("cat-visible")
            } else {
              list.addClass("cat-visible")
            }
            content.show();
            items.slice(0, 8).each(function (i) {
              $(this).delay(25 * i).animate({ marginTop: 0 }, 250)
            }).promise().done(function () {
              items.css({ marginTop: 0 });
              if (items.length == 32) {
                $("#newest-slider .cntrl.prev").animate({ opacity: 1, left: 20 }, 250);
                $("#newest-slider .cntrl.next").animate({ opacity: 1, right: 20 }, 250)
              }
              sof.pages.initNewestSlider(is_mobile)
            })
          }, { dataType: "html" })
        })
      }
    })
  }
  pub.initMainSlider = function (is_mobile) {
    is_mobile = is_mobile || !1;
    var slider = $("#main-slider"), content = $(".b-hotslider__content"), x = 0, mx = 0, diff, default_position = 0,
      motion_ratio = 15, motion_timeout = null;

    function motion() {
      if (null !== motion_timeout) {
        clearInterval(motion_timeout)
      }
      motion_timeout = setInterval(function () {
        x += (mx - x) / motion_ratio;
        slider.scrollLeft(x * diff)
      }, 26)
    }

    function center() {
      if (null !== motion_timeout) {
        clearInterval(motion_timeout)
      }
      motion_timeout = setInterval(function () {
        diff = (content.width() / slider.width()) - 1;
        mx = slider.width() / 2;
        x += (mx - x) / motion_ratio;
        slider.scrollLeft(x * diff);
        if (Math.round(x * diff) == Math.round(default_position)) {
          slider.scrollLeft(default_position);
          clearInterval(motion_timeout)
        }
      }, 26)
    }

    content.css({ position: "static", left: 0, marginLeft: 0 });
    diff = (content.width() / slider.width()) - 1;
    mx = slider.width() / 2;
    x += (mx - x);
    default_position = x * diff;
    if (is_mobile) {
      slider.css({ "overflow-x": "scroll", "-webkit-overflow-scrolling": "touch" });
      slider.scrollLeft(default_position);
      return
    }
    slider.scrollLeft(default_position);
    slider.on("mousemove", function (e) {
      mx = e.pageX - slider.offset().left
    }).on("mouseenter mouseleave", function (e) {
      return e.type === "mouseenter" ? motion() : center()
    });
    $(window).on("resize", center);
    var resized_slider = null;
    resized_slider = setInterval(function () {
      if ($("#skin_link").length > 0) {
        center();
        clearInterval(resized_slider)
      }
    }, 1000)
  }
  var bindCropEvents = function () {
    $("#choose-avatar").change(function () {
      var _self = $(this), id = _self.data("user_id");
      _self.upload(dle_root + "engine/ajax/upload_avatar.php?user_id=" + id + "&method=put", function (response) {
        if (response.success === !0) {
          response.id = id;
          response.path = "/" + response.url;
          initCropEvent(response);
          showCropPopup()
        } else {
          alert(response.message)
        }
      }, "json");
      _self.val("")
    });
    $("#crop-avatar-button").on("click", function () {
      var _self = $(this), id = _self.data("user_id"), _loader = $("#crop-avatar-overlay");
      _self.prop("disabled", !0);
      _loader.show();
      sof.ajax(dle_root + "engine/ajax/upload_avatar.php?user_id=" + id + "&method=post", sof.pages.getCropCoords(), function (response) {
        if (response.success == !0) {
          $("<img />").on("load", function () {
            $("#avatar-profile").html(this)
          }).attr({
            src: "/" + response.small + "?" + Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000,
            width: 60,
            height: 60
          });
          sof.helper.hidePopup($("#crop-popup"))
        } else {
          alert(response.message)
        }
        _self.prop("disabled", !1);
        _loader.hide()
      })
    })
  }
  var initCropEvent = function (response) {
    crop_sizes.small = { rx: 60, ry: 60 };
    imageProperties.width = response.imageOriginalWidth;
    imageProperties.height = response.imageOriginalHeight;
    imageProperties.scaledWidth = 525;
    if (imageProperties.width < imageProperties.scaledWidth) {
      imageProperties.scaledWidth = imageProperties.width
    }
    imageProperties.scaledHeight = imageProperties.scaledWidth * response.imageOriginalHeight / response.imageOriginalWidth;
    $("#crop-tempfile").val(response.url);
    $("<img />").load(function () {
      $(this).hide();
      $("#crop-source").html(this);
      $(this).fadeIn().Jcrop({
        onChange: showCropPreview,
        onSelect: showCropPreview,
        onSelect: updateCropCoords,
        onLoad: updateCropCoords,
        baseClass: "b-crop",
        aspectRatio: 1,
        sideHandles: !1,
        minSize: [60, 60],
        setSelect: [0, 0, 60, 60]
      });
      var image_small = $("<img />").attr({ id: "img-crop-preview-small", src: response.path });
      $("#crop-preview-small").html(image_small)
    }).attr({ src: response.path, width: imageProperties.scaledWidth, height: imageProperties.scaledHeight })
  }
  var showCropPreview = function (coords) {
    if (parseInt(coords.w) > 0) {
      var rx, ry;
      rx = crop_sizes.small.rx / coords.w;
      ry = crop_sizes.small.ry / coords.h;
      $("#img-crop-preview-small").css({
        width: Math.round(rx * imageProperties.scaledWidth),
        height: Math.round(ry * imageProperties.scaledHeight),
        marginLeft: Math.round(rx * coords.x) * -1,
        marginTop: Math.round(ry * coords.y) * -1
      })
    }
  }
  var updateCropCoords = function (coords) {
    $("#crop-x").val(coords.x);
    $("#crop-y").val(coords.y);
    $("#crop-w").val(imageProperties.scaledWidth);
    $("#crop-h").val(imageProperties.scaledHeight);
    $("#crop-tw-small").val($("#img-crop-preview-small").width());
    $("#crop-th-small").val($("#img-crop-preview-small").height())
  }
  pub.getCropCoords = function () {
    return {
      x1: parseInt($("#crop-x").val()),
      y1: parseInt($("#crop-y").val()),
      width: parseInt($("#crop-w").val()),
      height: parseInt($("#crop-h").val()),
      twidth_small: parseInt($("#crop-tw-small").val()),
      theight_small: parseInt($("#crop-th-small").val()),
      tempfile: $("#crop-tempfile").val()
    }
  }
  var showCropPopup = function () {
    var popup = $("#crop-popup"), content_holder = $(".b-popup__content", popup);
    var onClose = function () {
    }
    var onOpen = function () {
    }
    sof.helper.showPopup("crop-popup", "absolute", onOpen, onClose)
  }
  var bindCLEvents = function () {
    $("#change-post-link.not-copied").on("click", function () {
      var _self = $(this);
      if (_self.hasClass("disabled")) return;
      _self.addClass("disabled");
      $("#change-post-link").text("...");
      sof.ajax(dle_root + "engine/ajax/change_post_link.php", { id: _self.data("id") }, function (response) {
        if (response.success == !0) {
          var timeout_copy = null;
          _self.removeClass("not-copied").hide();
          var copy_link = $("#copy-post-link");
          copy_link.attr("data-clipboard-text", response.link);
          var client = new ZeroClipboard(copy_link);
          client.on("ready", function (readyEvent) {
            copy_link.show();
            client.on("aftercopy", function (event) {
              copy_link.text("Done!");
              if (timeout_copy != null) {
                clearTimeout(timeout_copy)
              }
              timeout_copy = setTimeout(function () {
                copy_link.text("Copy").trigger("blur")
              }, 2000)
            })
          })
        } else {
          alert("Error")
        }
        _self.removeClass("disabled")
      })
    })
  }
  var bindPasswordsUsage = function () {
    $(".usage_password").on("paste", function (event) {
      var _self = $(this), real_field = $("#" + _self.data("realtype"));
      var star = "*", hidn, text, long, char;
      var clip = undefined;
      if (sof.helper.isWholeTextSelected(_self[0]) == !0) {
        _self.val("");
        real_field.val("")
      }
      event.preventDefault();
      hidn = real_field.val();
      if (window.clipboardData && window.clipboardData.getData) {
        clip = window.clipboardData.getData("Text")
      } else {
        var clipboardData = (event.originalEvent || event).clipboardData;
        if (clipboardData && clipboardData.getData) {
          clip = clipboardData.getData("text/plain")
        }
      }
      hidn = hidn + clip;
      real_field.val(hidn);
      long = hidn.length - 1;
      char = hidn.substr(long, 1);
      text = star.repeat(long) + char;
      _self.val(text)
    });
    $(".usage_password").on("keypress", function (event) {
      var _self = $(this), real_field = $("#" + _self.data("realtype"));
      var star = "*", hidn, text, long, char;
      if (sof.helper.isWholeTextSelected(_self[0]) == !0) {
        _self.val("");
        real_field.val("")
      }
      if (event.which == 8) return;
      if (event.which == 10) return;
      if (event.which == 13) return;
      if (event.which == 35) return;
      if (event.which == 46) return;
      event.preventDefault();
      hidn = real_field.val();
      char = String.fromCharCode(event.which);
      hidn = hidn + char;
      real_field.val(hidn);
      long = hidn.length - 1;
      char = hidn.substr(long, 1);
      text = star.repeat(long) + char;
      _self.val(text)
    });
    $(".usage_password").on("keyup", function (event) {
      var _self = $(this), real_field = $("#" + _self.data("realtype"));
      var star = "*", hidn, text, long, char;
      if (event.which != 8 && event.which != 46) return;
      if (sof.helper.isWholeTextSelected(_self[0]) == !0) {
        _self.val("");
        real_field.val("");
        return
      }
      event.preventDefault();
      hidn = real_field.val();
      long = hidn.length - 1;
      if (long >= 0) {
        hidn = hidn.substr(0, long);
        real_field.val(hidn)
      }
      long = hidn.length;
      if (long >= 0) {
        text = star.repeat(long)
      }
      _self.val(text)
    });
    $(".usage_password").on("blur", function (event) {
      var _self = $(this), real_field = $("#" + _self.data("realtype"));
      var star = "*", hidn, text, long, char;
      event.preventDefault();
      hidn = real_field.val();
      long = hidn.length;
      if (long >= 0) {
        text = star.repeat(long)
      }
      _self.val(text)
    })
  }
  return pub
}());
var sof = sof || {};
sof.tv = (function () {
  var pub = {}, itemId = 0, isLogged = !1, isTv = !1, isMultiPl = !1, fileUrl = "", isYoutube = !1, has_link = !1,
    player_obj = null, images_folder = dle_root + "templates/" + dle_skin + "/images/", isWatched = !1, obj = {};
  var cdnItemId = 0, cdnPlayer = null, cdnTranslatorId = 0, cdnSeason = 1, cdnEpisode = 1, cdnUrl = null,
    cdnSaves = null, cdnSavesStatus = null, cdnSavesTimeout = null, cdnAutoSavesStatus = null,
    cdnAutoSavesInterval = null, cdnSendSaveTimeout = null, cdnCurrentTimeValue = 0, cdnDurationTimeValue = 0,
    cdnNextEpisodeSuccess = !1, cdnPlayerActiveEvent = null, cdnCurrentParentHost = "rezka.ag";
  var showBannerTimeout = null;
  var metricsSent = null, metricsSentCount = 0, metricsTime = 0, metricsSrc = "mp4";
  pub.initWatchingEvents = function (id) {
    itemId = id || 0;
    sof.tv.sendWatching();
    $(".show-player-immediately").on("click", function () {
      var _self = $(this), _id = _self.data("id");
      if (!_self.hasClass("active")) {
        $("#videoplayer").find("iframe").remove();
        $(".show-player-immediately").addClass("active");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_movie/?t=" + t, { id: _id }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            $("#videoplayer").html(response.player)
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
        }, {
          error: function (msg) {
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.showAjaxError(null)
          }
        })
      }
    })
  }
  pub.initEvents = function (id, is_logged, is_tv, is_multi_pl, has_link, file_link, is_youtube, web_host) {
    itemId = id || 0;
    isLogged = is_logged || !1;
    isTv = is_tv || !1;
    isMultiPl = is_multi_pl || !1;
    hasLink = has_link || !1;
    fileUrl = file_link || "";
    isYoutube = is_youtube || !1;
    if (web_host) {
      cdnCurrentParentHost = web_host
    }
    bindEvents();
    bindAllEvents();
    if (isYoutube) {
      $("#ownplayer").hide();
      $("#youtubeplayer").html(fileUrl).show();
      var match = window.location.hash.match(/t:(\d+)-s:(\d+)-e:(\d+)/i);
      if (match !== null) {
        var _season = $(".b-simple_season__item.active").data("tab_id"),
          _episode = $(".b-simple_episode__item.active").data("episode_id");
        var _item_season = $(".b-simple_season__item[data-tab_id=\"" + match[2] + "\"]"),
          _item_episode = $("#simple-episodes-list-" + match[2]).find(".b-simple_episode__item[data-episode_id=\"" + match[3] + "\"]");
        if (_season != match[2] || _episode != match[3]) {
          if ($("#simple-episodes-list-" + match[2] + " .b-simple_episode__item.active").length < 1) {
            $(".b-simple_episodes__list").slideUp(400);
            $("#simple-episodes-list-" + match[2]).slideDown(400)
          }
          $(".b-simple_season__item").removeClass("active");
          _item_season.addClass("active");
          _item_episode.trigger("click")
        }
      }
    } else {
      var _selected = $("#simple-episodes-tabs .b-simple_episode__item.active"),
        _current_season = _selected.data("season_id"), _current_episode = _selected.data("episode_id");
      if (!_current_season || !_current_episode) {
        $("#simple-episodes-tabs .b-simple_episode__item:first").trigger("click");
        $("#simple-seasons-tabs .b-simple_season__item:first").trigger("click")
      }
    }
    checkHashContinue();
    if (isTv == 1) {
      cdnItemId = id;
      sof.tv.setAutosaveEvents()
    }
  }
  var bindEvents = function () {
    $("#simple-seasons-tabs .b-simple_season__item").on("click", function () {
      var _self = $(this), _tab_id = _self.data("tab_id");
      if (!_self.hasClass("active")) {
        var _episode_item = $("#simple-episodes-list-" + _tab_id + " li:first");
        $(".b-simple_season__item").removeClass("active");
        _self.addClass("active");
        $(".b-simple_episode__item").removeClass("active");
        $(".b-simple_episodes__list").slideUp(400);
        $("#simple-episodes-list-" + _tab_id).slideDown(400);
        _episode_item.trigger("click");
        if ($("#ctrl_links").val() > 0) {
          window.location.hash = "t:0-s:" + _episode_item.data("season_id") + "-e:" + _episode_item.data("episode_id")
        }
      }
    });
    $(".b-simple_episode__item").on("click", function () {
      var _self = $(this);
      if (!_self.hasClass("active")) {
        $(".b-simple_episode__item").removeClass("active");
        _self.addClass("active");
        getVideoPlayer(_self.data("id"), _self.data("season_id"), _self.data("episode_id"), _self.data("youtube"))
      }
    })
  }
  var bindAllEvents = function () {
    if (($.cookie("tg_block_theboys_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"the_boys\"]").length > 0) || ($.cookie("tg_block_general_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"general\"]").length > 0)) {
      $("#tg-info-block-exclusive").show()
    }
    $("#tg-info-block-exclusive-close").on("click", function () {
      var _entity = $(this).data("entity");
      if (_entity == "the_boys") {
        $.cookie("tg_block_theboys_closed", 1, { path: "/", expires: 30 })
      } else if (_entity == "general") {
        $.cookie("tg_block_general_closed", 1, { path: "/", expires: 30 })
      }
      $("#tg-info-block-exclusive").hide()
    });
    $("#tg-info-block-exclusive-close").on("mouseenter mouseleave", function (e) {
      var _img = $(this).closest(".tg-info-block_inner").find(".tg-info-block-img");
      if (e.type === "mouseenter") {
        _img.addClass("close")
      } else {
        _img.removeClass("close")
      }
    });
    $("#tg-info-block-exclusive .tg-info-block_holder").on("mouseenter mouseleave", function (e) {
      var _img = $(this).find(".tg-info-block-img");
      if (e.type === "mouseenter") {
        _img.addClass("hover")
      } else {
        _img.removeClass("hover")
      }
    })
  }
  var checkHLSsupport = function () {
    var a = document.createElement("video");
    return !!(a.canPlayType && a.canPlayType("vnd.apple.mpegurl").replace(/^no$/, ""))
  }
  pub.changeCounter = function (action) {
    var counter = $("#saves-count"), num = parseInt(counter.text());
    if (!isNaN(num)) {
      (action === "plus") ? num++ : num--
    } else {
      num = 0
    }
    counter.text(num)
  }
  pub.sendWatching = function () {
    if (isWatched) return;
    if (Math.random() < .5) return;
    var time = 60000, now = new Date().getHours();
    if (now >= 18 && now <= 23) {
      return
    }
    if (now >= 16 && now < 18) {
      time = 300000
    } else if ((now >= 18 && now < 20) || (now >= 0 && now <= 1)) {
      time = 600000
    } else if (now >= 20 && now <= 23) {
      time = 1800000
    }
    var t = new Date().getTime();
    $.post(dle_root + "ajax/send_watching/?t=" + t, {
      action: "add",
      id: itemId,
      translator_id: cdnTranslatorId
    }, function (response) {
      if (!0 === response.success) {
        isWatched = !0
      }
    })
  }
  pub.updateWatching = function (id) {
    var t = new Date().getTime();
    $.post(dle_root + "ajax/send_watching/?t=" + t, { action: "update", id: id }, function (response) {
      if (!0 === response.success) {
      }
    })
  }
  var checkHashContinue = function () {
    var hash = window.location.hash.replace(/\//g, ""), hashName = hash.substring(1, hash.length);
    if (hashName === "continue") {
      sof.tv.scrollToPlayer("player")
    }
  }
  var getVideoPlayer = function (id, season, episode, is_youtube, callback) {
    callback = callback || function () {
    };
    $("#youtubeplayer").empty().addClass("loading");
    try {
      var t = new Date().getTime();
      $.ajax({
        url: dle_root + "ajax/get_f_video/?t=" + t,
        type: "POST",
        data: { id: id, season: season, episode: episode, youtube: is_youtube },
        cache: !1,
        dataType: "text",
        success: function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (!0 !== response.success) {
            sof.helper.messageInfo(response.message)
          } else {
            if (is_youtube) {
              $("#ownplayer").hide();
              $("#youtubeplayer").html(response.link).show().removeClass("loading");
              if ($("#ctrl_links").val() > 0) {
                window.location.hash = "t:0-s:" + season + "-e:" + episode
              }
            } else {
              pub.showAjaxError(null)
            }
          }
        }
      })
    } catch (e) {
    }
  }
  pub.scrollToPlayer = function (id) {
    var player_obj;
    if (id) {
      player_obj = $("#" + id).not(":hidden")
    } else {
      player_obj = $("#miscplayer").not(":hidden")
    }
    if (player_obj.length == 0) {
      player_obj = $("#ownplayer").not(":hidden")
    }
    if (player_obj.length == 0) {
      player_obj = $("#youtubeplayer").not(":hidden")
    }
    if (player_obj.length == 0) {
      player_obj = $("#player").not(":hidden")
    }
    if (player_obj.length > 0) {
      $("html:not(:animated)" + (sof.browser.opera ? "" : ",body:not(:animated)")).animate({ scrollTop: player_obj.offset().top - 150 }, 300)
    }
  }
  pub.loadingCDNPlayer = function () {
    $("#cdnplayer-preloader").addClass("loading").show();
    pub.cdnStopSave()
  }
  pub.buildCDNPlayer = function (event) {
    if (CDNPlayerInfo !== null) {
      var params = {};
      if ($("#" + CDNPlayerInfo.id).length < 1) {
        $("#cdnplayer-container").html("<div id=\"" + CDNPlayerInfo.id + "\" class=\"b-player__container_cdn\" style=\"height: 360px; margin: 0 auto; width: 640px;\"></div>")
      }
      params.id = CDNPlayerInfo.id;
      params.cuid = getPlayerCUID();
      params.file = CDNPlayerInfo.streams;
      if (CDNPlayerInfo.subtitle) {
        params.subtitle = CDNPlayerInfo.subtitle
      }
      if (CDNPlayerInfo.thumbnails) {
        params.thumbnails = CDNPlayerInfo.thumbnails
      }
      try {
        if (localStorage.getItem("pljsquality") === null) {
          params.default_quality = CDNPlayerInfo.default_quality
        }
        if (localStorage.getItem("pljsvolume_updated") === null) {
          localStorage.setItem("pljsvolume", 1);
          localStorage.setItem("pljsvolume_updated", 1)
        }
      } catch (e) {
      }
      params.ready = PlayerReady();
      if (CDNPlayerInfo.preroll) {
        params.preroll = CDNPlayerInfo.preroll
      }
      if (CDNPlayerInfo.midroll) {
        params.midroll = CDNPlayerInfo.midroll
      }
      if (CDNPlayerInfo.hlsconfig) {
        params.hlsconfig = CDNPlayerInfo.hlsconfig
      }
      if (CDNPlayerInfo.hlsdebug) {
        params.hlsdebug = CDNPlayerInfo.hlsdebug
      }
      if (CDNPlayerInfo.debug) {
        params.debug = CDNPlayerInfo.debug
      }
      if (typeof CDNPlayer == "undefined") {
        CDNPlayer = new Playerjs(params)
      } else {
        if (CDNPlayerInfo.streams) {
          if (CDNPlayerInfo.preroll) {
            if (CDNPlayer.api("vastnow") == !0) {
              CDNPlayer.api("update:vast", 0)
            } else {
              CDNPlayer.api("update:vast", 1)
            }
          }
          CDNPlayer.api("file", CDNPlayerInfo.streams);
          CDNPlayer.api("cuid", getPlayerCUID());
          if (CDNPlayerInfo.subtitle) {
            CDNPlayer.api("subtitle", CDNPlayerInfo.subtitle)
          }
          if (CDNPlayerInfo.thumbnails) {
            CDNPlayer.api("thumbnails", CDNPlayerInfo.thumbnails)
          }
          if (event == "autoplay") {
            CDNPlayer.api("play")
          }
        }
        $("#user-network-issues").hide().empty()
      }
      $("#cdnplayer-preloader").hide().removeClass("loading")
    }
  }
  var prepareNextEpisode = function () {
    cdnNextEpisodeSuccess = !1;
    if (CDNPlayerInfo.autoswitch == 1) {
      var _current_season = $(".b-simple_seasons__list .b-simple_season__item.active"),
        _current_episode = $(".b-simple_episodes__list .b-simple_episode__item.active"), _next_episode = null,
        _season = null, _episode = null;
      if (_current_episode.length > 0) {
        _next_episode = _current_episode.next(".b-simple_episode__item");
        if (_next_episode.length > 0) {
          if (_next_episode.data("season_id")) {
            _season = _next_episode.data("season_id")
          }
          if (_next_episode.data("episode_id")) {
            _episode = _next_episode.data("episode_id")
          }
        }
      }
      if (_season !== null && _episode !== null) {
        $("#oframecdnplayer").append("<div id=\"play-next-episode-loader\"></div");
        $("#oframecdnplayer").append("<div id=\"play-next-episode\" class=\"b-player__next_episode_holder\"><div class=\"b-player__next_episode_info\"><span class=\"inner\"><span class=\"title\">Следующее</span><span class=\"cont\">" + ((_current_season.length > 0) ? _current_season.text() : "") + " " + _next_episode.text() + "</span></span></div><div class=\"b-player__next_episode_loader\" onclick=\"sof.tv.playNextEpisode(" + _season + ", " + _episode + ");\"><div class=\"c100 center p0\"><span>&nbsp;</span><div class=\"slice\"><div class=\"bar\"></div><div class=\"fill\"></div></div></div></div><div class=\"b-player__next_episode_cancel\"><span onclick=\"sof.tv.cancelNextEpisode();\">Отменить</span></div></div>");
        $("head").append("<style id=\"player-ne-fix-styles\" type=\"text/css\">#cdnplayer_control_timeline pjsdiv[style*=\"background-image: url\"] {display: none !important;}</style>");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
          id: cdnItemId,
          translator_id: cdnTranslatorId,
          season: _season,
          episode: _episode,
          favs: $("#ctrl_favs").val(),
          action: "get_stream"
        }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            cdnNextEpisodeSuccess = !0;
            CDNPlayerInfo.streams = response.url;
            CDNPlayerInfo.default_quality = response.quality;
            CDNPlayerInfo.subtitle = response.subtitle;
            CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
            CDNPlayerInfo.subtitle_def = response.subtitle_def;
            CDNPlayerInfo.thumbnails = response.thumbnails;
            $("#play-next-episode-loader").addClass("done");
            $("#play-next-episode").fadeIn(600);
            var i = 0;
            var si = null;
            si = setInterval(function () {
              i++;
              $("#play-next-episode").find(".c100").removeClass("p" + (i - 1) * 10).addClass("p" + i * 10);
              if (i > 10) {
                if (si !== null) {
                  clearInterval(si);
                  sof.tv.playNextEpisode(_season, _episode)
                }
              }
            }, 1000)
          } else {
            sof.helper.messagePS(response.message, "Ошибка");
            sof.tv.cancelNextEpisode()
          }
        }, {
          error: function (msg) {
            pub.showAjaxError(null);
            sof.tv.cancelNextEpisode()
          }
        })
      }
    }
  }
  pub.playNextEpisode = function (season, episode) {
    $("#play-next-episode").remove();
    $("#play-next-episode-loader").remove();
    $("#player-ne-fix-styles").remove();
    if (cdnNextEpisodeSuccess == !0) {
      cdnNextEpisodeSuccess = !1;
      $("#simple-seasons-tabs .b-simple_season__item.active").removeClass("active");
      $("#simple-episodes-tabs .b-simple_episode__item.active").removeClass("active");
      $("#simple-seasons-tabs .b-simple_season__item[data-tab_id=\"" + season + "\"]").addClass("active");
      $("#simple-episodes-tabs .b-simple_episode__item[data-season_id=\"" + season + "\"][data-episode_id=\"" + episode + "\"]").addClass("active");
      $(".b-simple_episodes__list").hide();
      $("#simple-episodes-list-" + season).stop(!0).show();
      pub.buildCDNPlayer("autoplay");
      if ($("#ctrl_links").val() > 0) {
        window.location.hash = "t:" + cdnTranslatorId + "-s:" + season + "-e:" + episode
      }
      pub.cdnStopSave()
    }
  }
  pub.cancelNextEpisode = function () {
    $("#play-next-episode").remove();
    $("#play-next-episode-loader").remove();
    $("#player-ne-fix-styles").remove();
    cdnNextEpisodeSuccess = !1
  }
  var getPlayerCUID = function () {
    return cdnItemId + "-" + cdnTranslatorId + "-" + cdnSeason + "-" + cdnEpisode
  }
  var PlayerReady = function () {
    $("#cdnplayer").show()
  }
  PlayerjsEvents = function (event, id, info) {
    if (event == "init") {
      if (CDNPlayer.api("adblock")) {
        window.abc = !0
      }
      if (CDNPlayerInfo.subtitle && CDNPlayerInfo.subtitle_lns && CDNPlayerInfo.subtitle_def) {
        var cc = document.getElementById("cdnplayer_control_cc_icon0"), cl = "none", arr, ln = "";
        try {
          ln = localStorage.getItem("pljssubtitle");
          if (ln !== null) {
            ln = ((CDNPlayerInfo.subtitle_lns[ln] !== undefined) ? CDNPlayerInfo.subtitle_lns[ln] : CDNPlayerInfo.subtitle_def)
          } else {
            ln = CDNPlayerInfo.subtitle_def
          }
        } catch (e) {
        }
        ;
        if (ln == "") {
          arr = cc.className.split(" ");
          if (arr.indexOf(cl) == -1) {
            cc.className += " " + cl
          }
        } else {
          cc.className = cc.className.replace(/\bnone\b/g, "")
        }
        cc.setAttribute("data-content", ln)
      }
    }
    if (event == "subtitle") {
      if (CDNPlayerInfo.subtitle && CDNPlayerInfo.subtitle_lns && CDNPlayerInfo.subtitle_def) {
        var cc = document.getElementById("cdnplayer_control_cc_icon0"), cl = "none", arr,
          ln = ((CDNPlayerInfo.subtitle_lns[info] !== undefined) ? CDNPlayerInfo.subtitle_lns[info] : "");
        if (ln == "") {
          arr = cc.className.split(" ");
          if (arr.indexOf(cl) == -1) {
            cc.className += " " + cl
          }
        } else {
          cc.className = cc.className.replace(/\bnone\b/g, "")
        }
        cc.setAttribute("data-content", ln)
      }
    }
    if (event == "play") {
      sof.tv.cancelNextEpisode();
      if (($.cookie("tg_block_theboys_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"the_boys\"]").length > 0) || ($.cookie("tg_block_general_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"general\"]").length > 0)) {
        $("#tg-info-block-exclusive").hide()
      }
    }
    if (event == "play" || event == "pause" || event == "seek" || event == "end") {
      pub.cdnAutoSaveListener(event);
      if (CDNPlayer.api("adblock")) {
        window.abc = !0
      }
    }
    if (event == "pause") {
      if (($.cookie("tg_block_theboys_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"the_boys\"]").length > 0) || ($.cookie("tg_block_general_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"general\"]").length > 0)) {
        $("#tg-info-block-exclusive").show()
      }
    }
    if (event == "finish") {
      prepareNextEpisode();
      if (($.cookie("tg_block_theboys_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"the_boys\"]").length > 0) || ($.cookie("tg_block_general_closed") != 1 && $("#tg-info-block-exclusive[data-entity=\"general\"]").length > 0)) {
        $("#tg-info-block-exclusive").hide()
      }
    }
    if (event == "new") {
      pub.cdnStopSave()
    }
    if (event == "time") {
      metricsTime = info;
      cdnCurrentTimeValue = info;
      cdnDurationTimeValue = CDNPlayer.api("duration")
    }
    if (event == "reload") {
      try {
        var list_qualities = CDNPlayer.api("qualities"),
          current_quality_index = $.inArray(CDNPlayer.api("quality"), list_qualities),
          lower_quality = list_qualities[current_quality_index - 1],
          network_issues_message = "<b style=\"color: #f00;\">Внимание!</b> Обнаружены проблемы с вашим интернет подключением.<br />";
        if (typeof lower_quality != "undefined") {
          network_issues_message += "Рекомендуем понизить качество воспроизведения с текущего <b>" + list_qualities[current_quality_index] + "</b> до <b>" + lower_quality + "</b>!<br /><br />";
          var arrs = {}, dls = {};
          if (CDNPlayerInfo.streams) {
            arrs = CDNPlayerInfo.streams.split(",");
            if (arrs.length > 0) {
              $.each(arrs, function (k, v) {
                var strs = {}, qa = {};
                if (v.search(/ or /i) != -1) {
                  strs = v.split(" or ")
                } else {
                  strs[1] = v
                }
                qa = strs[1].match(/(\d+)\.mp4/i);
                if (qa && qa[1] > 240) {
                  dls[qa[1]] = strs[1]
                }
              })
            }
          }
          if (!$.isEmptyObject(dls)) {
            var links = [];
            $.each(dls, function (k, v) {
              links.push("<a href=\"" + v + "\" target=\"_blank\"><b>" + k + "p</b></a>")
            });
            network_issues_message += "Либо смотрите по прямой ссылке (без рекламы): " + links.join(" &bull; ") + "<br />"
          }
        }
        network_issues_message += "<div class=\"b-player__network_issues_recommendations\"><b style=\"font-size: 22px;\">Рекомендации:</b><br />" + "<div style=\"padding-top: 5px; padding-bottom: 10px;\"><b style=\"font-size: 15px;\">1. Проверьте стабильность интернет-подключения у вашего провайдера и вашего роутера в первую очередь.</b><br />" + "<i>Помните, что высокая скорость не имеет ничего общего со <u>стабильностью</u> подключения!</i></div>" + "<div style=\"padding-bottom: 10px;\"><b style=\"font-size: 15px;\">2. Если вы используете VPN, то рекомендуем его отключить на время просмотра.</b><br />" + "<i>Получите персональное зеркало, написав на почту <b style=\"font-style: normal;\"><a href=\"mailto:mirror@hdrezka.org\">mirror@hdrezka.org</a></b> со своей личной почты, и заходите на него без VPN!</i></div>" + "<div style=\"padding-bottom: 10px;\"><b style=\"font-size: 15px;\">3. Если вы смотрите на мобильном устройстве в нашем HD качестве, то всегда выбирайте качество не выше 720p. Рекомендуется 480p для бюджетных мобильных устройств.</b><br />" + "<i>Youtube со своим 1080p качеством сравнимо с нашим 720p, поверьте!</i></div>" + "<div style=\"padding-bottom: 0;\"><b style=\"font-size: 15px;\">4. Если вы транслируете видеопоток на телевизор с помощью технологий Chromecast или AirPlay, используя при этом мобильное устройство, то обратите внимание на п.2 и на производительность вашего мобильного устройства.</b><br />" + "<i>Настоятельно рекомендуем проверить возможности вашего роутера передавать по Wi-Fi сети большие объемы данных, сохраняя при этом стабильность подключения. Бюджетные роутеры не будут справляться с передачей видеопотока 1080p и 1080p Ultra, особенно если к одной Wi-Fi сети подключено несколько устройств!</i><br /><br />" + "Все представленые у нас видеоматериалы доступны в очень высоком качестве, и не стоит даже сравнивать наше качество с Youtube (его 1080p сравнимо с нашим 720p).<br />" + "Выбирайте качество воспроизведения из целесообразности, а не по его названию!</div></div>";
        $("#user-network-issues").html(network_issues_message).show();
        metricsSentCount++;
        if (metricsSent === null && metricsSentCount == 3) {
          metricsSent = !0;
          if (typeof CDNPlayer.api("hls") != "undefined") {
            metricsSrc = "hls"
          }
          _paq.push(["trackEvent", "Player", "Critical Issue", CDNPlayerInfo.geo_ip + "(" + CDNPlayerInfo.geo_iso + ")-" + metricsSrc + "-" + list_qualities[current_quality_index] + "-" + metricsTime + "-" + cdnItemId + "-(" + cdnTranslatorId + "-" + cdnSeason + "-" + cdnEpisode + ")"]);
          ym(30584052, "reachGoal", "player_issue", {
            quality: list_qualities[current_quality_index],
            source: metricsSrc,
            translator_id: cdnTranslatorId,
            season: cdnSeason,
            episode: cdnSeason
          })
        }
      } catch (e) {
      }
    }
    cdnPlayerActiveEvent = event
  }
  maybeneedtorestart = function (url) {
    var url = CDNPlayerInfo.maybeneedtorestart + "/point/?method=video_link&xl=" + btoa(btoa(url));
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, !1);
    xmlHttp.send(null);
    var u = atob(atob(xmlHttp.responseText));
    return u
  }
  pub.showAjaxError = function (text) {
    text = text || null;
    if (text === null) {
      text = "Не удалось получить данные о видео.<br />Пожалуйста, повторите попытку" + ((window.abc == !0) ? ", и обязательно <b><u>отключите</u></b> блокировщик рекламы" : "") + "!<br /><br />Если ошибка возникает повторно, то просим сообщить нам об этом на почту:<br /><a href=\"mailto:support@hdrezka.org\" style=\"font-weight: bold;\">support@hdrezka.org</a>"
    }
    sof.helper.messagePS(text, "Ошибка")
  }
  pub.initCDNMoviesEvents = function (id, translator_id, web_host, is_logged, player_info) {
    cdnItemId = id || 0;
    cdnTranslatorId = translator_id || 0;
    cdnSeason = 0;
    cdnEpisode = 0;
    isLogged = is_logged || !1;
    CDNPlayerInfo = player_info || null;
    bindAllEvents();
    pub.loadingCDNPlayer();
    if (web_host) {
      cdnCurrentParentHost = web_host
    }
    checkHashContinue();
    pub.buildCDNPlayer();
    $("#translators-list").on("click", ".b-translator__item", function () {
      var _self = $(this), _translator_id = _self.data("translator_id"), _is_ads = _self.data("ads"),
        _is_camrip = _self.data("camrip"), _is_director = _self.data("director"),
        _autoswitch = _self.data("autoswitch"), _url = _self.data("cdn_url"), _quality = _self.data("cdn_quality");
      if (!_self.hasClass("active") && !_self.hasClass("disabled")) {
        cdnTranslatorId = _translator_id;
        pub.loadingCDNPlayer();
        $(".b-translator__item").removeClass("active").addClass("disabled");
        _self.addClass("active");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
          id: cdnItemId,
          translator_id: cdnTranslatorId,
          is_camrip: _is_camrip,
          is_ads: _is_ads,
          is_director: _is_director,
          favs: $("#ctrl_favs").val(),
          action: "get_movie"
        }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            CDNPlayerInfo.streams = response.url;
            CDNPlayerInfo.default_quality = response.quality;
            CDNPlayerInfo.subtitle = response.subtitle;
            CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
            CDNPlayerInfo.subtitle_def = response.subtitle_def;
            CDNPlayerInfo.thumbnails = response.thumbnails;
            pub.buildCDNPlayer()
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
          $(".b-translator__item").removeClass("disabled")
        }, {
          error: function (msg) {
            $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            _self.removeClass("active");
            _current_translator.addClass("active");
            pub.showAjaxError(null)
          }
        });
        pub.cdnStopSave()
      }
    });
    var match = null;
    if (!isLogged) {
      try {
        var saves_match = localStorage.getItem("rzk-" + cdnItemId);
        if (saves_match !== null) {
          var rzkmatch = JSON.parse(saves_match);
          match = {};
          match[1] = rzkmatch.t;
          match[2] = rzkmatch.s;
          match[3] = rzkmatch.e
        }
      } catch (e) {
        match = null
      }
    }
    if (match !== null) {
      cdnTranslatorId = match[1];
      var _tr_count = $(".b-translator__item").length;
      var _item_translator = $(".b-translator__item[data-translator_id=\"" + cdnTranslatorId + "\"]:first");
      if (_item_translator.length < 1 && _tr_count > 0) {
        return !1
      }
      if (_item_translator.hasClass("active") || _tr_count == 0) {
        return !1
      }
      $(".b-translator__item[data-translator_id=\"" + cdnTranslatorId + "\"]").trigger("click")
    }
  }
  pub.initCDNSeriesEvents = function (id, translator_id, season_id, episode_id, url, web_host, is_logged, player_info, callback) {
    cdnItemId = id || 0;
    cdnTranslatorId = translator_id || 0;
    cdnSeason = season_id || 0;
    cdnEpisode = episode_id || 0;
    cdnUrl = url || null;
    isLogged = is_logged || !1;
    CDNPlayerInfo = player_info || null;
    callback = callback || function () {
    };
    bindAllEvents();
    pub.loadingCDNPlayer();
    if (web_host) {
      cdnCurrentParentHost = web_host
    }
    checkHashContinue();
    pub.buildCDNPlayer();
    $("#player").off("click.player_season").on("click.player_season", ".b-simple_season__item", function () {
      var _self = $(this), _autoswitch = _self.data("autoswitch"), _season = _self.data("tab_id"),
        _episode_obj = $("#simple-episodes-list-" + _season).find(".b-simple_episode__item:first"),
        _episode = _episode_obj.data("episode_id");
      if (!_self.hasClass("active") && !_self.hasClass("disabled")) {
        pub.loadingCDNPlayer();
        $(".b-simple_season__item, .b-simple_episode__item").addClass("disabled");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
          id: cdnItemId,
          translator_id: cdnTranslatorId,
          season: _season,
          episode: _episode,
          favs: $("#ctrl_favs").val(),
          action: "get_stream"
        }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("active");
            _self.addClass("active");
            _episode_obj.addClass("active");
            cdnSeason = _season;
            cdnEpisode = _episode;
            CDNPlayerInfo.streams = response.url;
            CDNPlayerInfo.default_quality = response.quality;
            CDNPlayerInfo.subtitle = response.subtitle;
            CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
            CDNPlayerInfo.subtitle_def = response.subtitle_def;
            CDNPlayerInfo.thumbnails = response.thumbnails;
            $(".b-simple_episodes__list").hide();
            $("#simple-episodes-list-" + _season).show();
            pub.buildCDNPlayer();
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.cdnStopSave();
            if ($("#ctrl_links").val() > 0) {
              window.location.hash = "t:" + cdnTranslatorId + "-s:" + cdnSeason + "-e:" + cdnEpisode
            }
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
        }, {
          error: function (msg) {
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.showAjaxError(null)
          }
        })
      }
    });
    $("#player").off("click.player_episode").on("click.player_episode", ".b-simple_episode__item", function () {
      var _self = $(this), _autoswitch = _self.data("autoswitch"), _season = _self.data("season_id"),
        _episode = _self.data("episode_id");
      if (!_self.hasClass("active") && !_self.hasClass("disabled")) {
        pub.loadingCDNPlayer();
        $(".b-simple_season__item, .b-simple_episode__item").addClass("disabled");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
          id: cdnItemId,
          translator_id: cdnTranslatorId,
          season: _season,
          episode: _episode,
          favs: $("#ctrl_favs").val(),
          action: "get_stream"
        }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            $(".b-simple_episode__item").removeClass("active");
            _self.addClass("active");
            cdnSeason = _season;
            cdnEpisode = _episode;
            CDNPlayerInfo.streams = response.url;
            CDNPlayerInfo.default_quality = response.quality;
            CDNPlayerInfo.subtitle = response.subtitle;
            CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
            CDNPlayerInfo.subtitle_def = response.subtitle_def;
            CDNPlayerInfo.thumbnails = response.thumbnails;
            pub.buildCDNPlayer();
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.cdnStopSave();
            if ($("#ctrl_links").val() > 0) {
              window.location.hash = "t:" + cdnTranslatorId + "-s:" + cdnSeason + "-e:" + cdnEpisode
            }
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
        }, {
          error: function (msg) {
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.showAjaxError(null)
          }
        })
      }
    });
    $("#translators-list").off("click.player_translator").on("click.player_translator", ".b-translator__item", function () {
      var _self = $(this), _current_translator = $(".b-translator__item.active"),
        translator_id = _self.data("translator_id");
      if (!_self.hasClass("active") && !_self.hasClass("disabled")) {
        pub.loadingCDNPlayer();
        cdnTranslatorId = translator_id;
        _current_translator.removeClass("active");
        $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").addClass("disabled");
        _self.addClass("active");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
          id: cdnItemId,
          translator_id: cdnTranslatorId,
          favs: $("#ctrl_favs").val(),
          action: "get_episodes"
        }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            if (response.seasons != !1) {
              $("#simple-seasons-tabs").html(response.seasons)
            }
            $("#simple-episodes-tabs").html(response.episodes);
            var fstitem = $("#simple-episodes-tabs .b-simple_episode__item:first");
            cdnSeason = fstitem.data("season_id");
            cdnEpisode = fstitem.data("episode_id");
            CDNPlayerInfo.streams = response.url;
            CDNPlayerInfo.default_quality = response.quality;
            CDNPlayerInfo.subtitle = response.subtitle;
            CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
            CDNPlayerInfo.subtitle_def = response.subtitle_def;
            CDNPlayerInfo.thumbnails = response.thumbnails;
            pub.buildCDNPlayer();
            if ($("#ctrl_links").val() > 0) {
              window.location.hash = "t:" + cdnTranslatorId + "-s:" + cdnSeason + "-e:" + cdnEpisode
            }
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
          $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").removeClass("disabled")
        }, {
          error: function (msg) {
            $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            _self.removeClass("active");
            _current_translator.addClass("active");
            pub.showAjaxError(null)
          }
        });
        pub.cdnStopSave()
      }
    });
    var match = window.location.hash.match(/t:(\d+)-s:(\d+)-e:(\d+)/i);
    if (!isLogged && match === null) {
      try {
        var saves_match = localStorage.getItem("rzk-" + cdnItemId);
        if (saves_match !== null) {
          var rzkmatch = JSON.parse(saves_match);
          match = {};
          match[1] = rzkmatch.t;
          match[2] = rzkmatch.s;
          match[3] = rzkmatch.e
        }
      } catch (e) {
        match = null
      }
    }
    if (match !== null) {
      var t = new Date().getTime();
      var _tr_count = $(".b-translator__item").length;
      var _item_translator = $(".b-translator__item[data-translator_id=\"" + match[1] + "\"]:first");
      if ((_item_translator.length < 1 && _tr_count > 0) || (_tr_count == 0 && cdnTranslatorId != match[1])) {
        return !1
      }
      cdnTranslatorId = match[1];
      cdnSeason = match[2];
      cdnEpisode = match[3];
      if (_item_translator.hasClass("active") || _tr_count == 0) {
        var _item_season = $(".b-simple_season__item[data-tab_id=\"" + cdnSeason + "\"]"),
          _item_episode = $("#simple-episodes-list-" + cdnSeason).find(".b-simple_episode__item[data-episode_id=\"" + cdnEpisode + "\"]"),
          _autoswitch = _item_season.data("autoswitch");
        if (_item_season.length < 1 || _item_episode.length < 1) {
          var fstitem = $("#simple-episodes-tabs .b-simple_episode__item:first");
          cdnSeason = fstitem.data("season_id");
          cdnEpisode = fstitem.data("episode_id");
          _item_season = $(".b-simple_season__item[data-tab_id=\"" + cdnSeason + "\"]");
          _item_episode = $("#simple-episodes-list-" + cdnSeason).find(".b-simple_episode__item[data-episode_id=\"" + cdnEpisode + "\"]");
          _autoswitch = _item_season.data("autoswitch")
        }
        pub.loadingCDNPlayer();
        $(".b-simple_season__item, .b-simple_episode__item").addClass("disabled");
        var t = new Date().getTime();
        sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
          id: cdnItemId,
          translator_id: cdnTranslatorId,
          season: cdnSeason,
          episode: cdnEpisode,
          favs: $("#ctrl_favs").val(),
          action: "get_stream"
        }, function (response) {
          if ("object" !== typeof response) {
            response = $.parseJSON(response)
          }
          if (response.success == !0) {
            $(".b-simple_season__item").removeClass("active");
            $(".b-simple_episode__item").removeClass("active");
            _item_season.addClass("active");
            _item_episode.addClass("active");
            $(".b-simple_episodes__list").hide();
            $("#simple-episodes-list-" + cdnSeason).show();
            CDNPlayerInfo.streams = response.url;
            CDNPlayerInfo.default_quality = response.quality;
            CDNPlayerInfo.subtitle = response.subtitle;
            CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
            CDNPlayerInfo.subtitle_def = response.subtitle_def;
            CDNPlayerInfo.thumbnails = response.thumbnails;
            pub.buildCDNPlayer();
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.cdnStopSave()
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
        }, {
          error: function (msg) {
            $(".b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
            pub.showAjaxError(null)
          }
        });
        return !1
      }
      pub.loadingCDNPlayer();
      var _current_translator = $(".b-translator__item.active");
      _current_translator.removeClass("active");
      $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").addClass("disabled");
      _item_translator.addClass("active");
      sof.ajax(dle_root + "ajax/get_cdn_series/?t=" + t, {
        id: cdnItemId,
        translator_id: cdnTranslatorId,
        season: cdnSeason,
        episode: cdnEpisode,
        favs: $("#ctrl_favs").val(),
        action: "get_episodes"
      }, function (response) {
        if ("object" !== typeof response) {
          response = $.parseJSON(response)
        }
        if (response.success == !0) {
          if (response.seasons != !1) {
            $("#simple-seasons-tabs").html(response.seasons)
          }
          $("#simple-episodes-tabs").html(response.episodes);
          var _item_season = $(".b-simple_season__item[data-tab_id=\"" + cdnSeason + "\"]"),
            _item_episode = $("#simple-episodes-list-" + cdnSeason).find(".b-simple_episode__item[data-episode_id=\"" + cdnEpisode + "\"]"),
            _autoswitch = _item_season.data("autoswitch");
          if (_item_season.length > 0 && _item_episode.length > 0) {
            if ($("#simple-episodes-list-" + cdnSeason + " .b-simple_episode__item.active").length < 1) {
              $(".b-simple_episodes__list").hide();
              $("#simple-episodes-list-" + cdnSeason).show()
            }
            $(".b-simple_season__item").removeClass("active");
            $(".b-simple_episode__item").removeClass("active");
            _item_season.addClass("active");
            _item_episode.addClass("active");
            _season = _item_episode.data("season_id");
            _episode = _item_episode.data("episode_id")
          } else {
            var fstitem = $("#simple-episodes-tabs .b-simple_episode__item:first");
            _season = fstitem.data("season_id");
            _episode = fstitem.data("episode_id")
          }
          cdnSeason = _season;
          cdnEpisode = _episode;
          CDNPlayerInfo.streams = response.url;
          CDNPlayerInfo.default_quality = response.quality;
          CDNPlayerInfo.subtitle = response.subtitle;
          CDNPlayerInfo.subtitle_lns = response.subtitle_lns;
          CDNPlayerInfo.subtitle_def = response.subtitle_def;
          CDNPlayerInfo.thumbnails = response.thumbnails;
          pub.buildCDNPlayer();
          $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").removeClass("disabled")
        } else {
          pub.buildCDNPlayer();
          if ($(".b-translator__item.active").length > 0) {
            cdnTranslatorId = $(".b-translator__item.active").data("translator_id")
          }
          cdnSeason = $(".b-simple_episode__item.active").data("season_id");
          cdnEpisode = $(".b-simple_episode__item.active").data("episode_id");
          $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").removeClass("disabled")
        }
      }, {
        error: function (msg) {
          $(".b-translator__item, .b-simple_season__item, .b-simple_episode__item").removeClass("disabled");
          _item_translator.removeClass("active");
          _current_translator.addClass("active");
          pub.showAjaxError(null)
        }
      });
      pub.cdnStopSave()
    }
    sof.tv.setAutosaveEvents()
  }
  pub.setAutosaveEvents = function () {
    if ($("#cdnplayer-container").length > 0) {
      return
    }
    $("#videoplayer, #youtubeplayer, #cdnplayer-container").off("mouseenter.player_save mouseleave.player_save").on("mouseenter.player_save mouseleave.player_save", function (e) {
      if (e.type == "mouseenter") {
        var _self = $(this), _item = $("#simple-episodes-tabs .b-simple_episode__item.active");
        cdnSaves = {
          post_id: cdnItemId,
          translator_id: cdnTranslatorId,
          season: _item.data("season_id"),
          episode: _item.data("episode_id")
        };
        cdnSavesStatus = !0
      } else {
        cdnSavesStatus = null
      }
    });
    $(window).off("blur.player_save").on("blur.player_save", function () {
      if (null != cdnSavesTimeout) {
        clearTimeout(cdnSavesTimeout)
      }
      if (null != cdnSaves) {
        cdnSavesTimeout = setTimeout(function () {
          if (isLogged) {
            var t = new Date().getTime();
            $.post(dle_root + "ajax/send_save/?t=" + t, cdnSaves, function (response) {
              if (!0 == response.success) {
                pub.changeCounter(response.iterator)
              }
              clearTimeout(cdnSavesTimeout)
            })
          }
          pub.sendWatchingRG()
        }, 150000)
      }
    })
  }
  pub.cdnAutoSaveListener = function (event) {
    if (null != cdnAutoSavesInterval) {
      clearInterval(cdnAutoSavesInterval)
    }
    if (event == "play") {
      if (cdnSendSaveTimeout !== null) {
        clearTimeout(cdnSendSaveTimeout)
      }
      cdnSendSaveTimeout = setTimeout(function () {
        cdnSendSaveTimeout = null;
        if (isLogged) {
          pub.cdnSendSave()
        }
        pub.cdnSetLocalSave();
        if (cdnAutoSavesStatus == null && cdnDurationTimeValue == 0) {
          cdnAutoSavesStatus = !0;
          pub.sendWatchingRG();
          if (cdnTranslatorId == 111) {
            var t = new Date().getTime();
            $.post(dle_root + "ajax/send_stats/?t=" + t, { id: cdnItemId }, function (response) {
              if (!0 == response.success) {
              }
            })
          }
        }
      }, 1000)
    }
    return
  }
  pub.cdnSetLocalSave = function () {
    localStorage.setItem("rzk-" + cdnItemId, JSON.stringify({ t: cdnTranslatorId, s: cdnSeason, e: cdnEpisode }))
  }
  pub.cdnSendSave = function () {
    if (isLogged) {
      var _item = $("#simple-episodes-tabs .b-simple_episode__item.active");
      cdnSaves = {
        post_id: cdnItemId,
        translator_id: cdnTranslatorId,
        season: ((_item.length > 0) ? _item.data("season_id") : 0),
        episode: ((_item.length > 0) ? _item.data("episode_id") : 0),
        current_time: cdnCurrentTimeValue,
        duration: cdnDurationTimeValue
      };
      var t = new Date().getTime();
      $.post(dle_root + "ajax/send_save/?t=" + t, cdnSaves, function (response) {
        if (!0 == response.success) {
          pub.changeCounter(response.iterator)
        }
      })
    }
  }
  pub.cdnStopSave = function () {
    if (null != cdnAutoSavesInterval) {
      clearInterval(cdnAutoSavesInterval)
    }
    cdnAutoSavesStatus = null;
    cdnCurrentTimeValue = 0;
    cdnDurationTimeValue = 0
  }
  pub.sendWatchingRG = function () {
    if (cdnTranslatorId > 0) {
      var t = new Date().getTime();
      $.post(dle_root + "ajax/send_watching/?t=" + t, {
        action: "update_rg",
        id: cdnItemId,
        translator_id: cdnTranslatorId
      }, function (response) {
        if (!0 === response.success) {
        }
      })
    }
  }
  return pub
}());
var sof = sof || {};
sof.comments = (function () {
  var pub = {}, lastCommentsUpdatesId = 0, lastCommentsUpdatesInterval = null;
  pub.initEvents = function () {
    bindEvents();
    bindLikeEvents();
    bindYoutubeEvents()
  }
  var bindEvents = function () {
    setCommentsExpandEvents(0);
    $(".b-content__main").on("click", ".addcomment-success-box i", function () {
      var _self = $(this);
      _self.closest(".addcomment-success-box").hide()
    });
    $(".b-content__main").off("submit").on("submit", ".comments-form", function () {
      var _form = $(this), _form_id = _form.data("id"), _form_parent_id = _form.data("parent_id"),
        _form_indent = _form.data("indent"), _replyto_id = _form.data("replyto_id"),
        _submit_btn = _form.find("button[type=\"submit\"]"), _loader = _form.find(".b-addcomment__actions .loading");
      if (!_submit_btn.prop("disabled")) {
        _submit_btn.prop("disabled", !0);
        _loader.show();
        var data = {
          name: $("#comment-name-" + _form_id).val(),
          mail: $("#comment-email-" + _form_id).val(),
          comments: $("#comments-" + _form_id).val(),
          post_id: $("#post_id").val(),
          type: $("#type_id").val(),
          parent: _form_parent_id,
          replyto_id: _replyto_id,
          sec_code: $("#sec-code").val(),
          question_answer: $("#question-answer").val(),
          g_recaptcha_response: ((typeof grecaptcha != "undefined") ? grecaptcha.getResponse() : ""),
          is_admin: $("#is-admin-checkbox-" + _form_id + ":checked").val(),
          has_adb: ((window.abc == !1) ? $("#has_adb").val() : 1)
        };
        sof.ajax(dle_root + "ajax/add_comment/", data, function (response) {
          if (response.success == !0) {
            var html = $("<li id=\"comments-tree-item-" + response.comment_id + "\" class=\"comments-tree-item\" data-id=\"" + response.comment_id + "\" data-indent=\"" + _form_indent + "\">" + response.message + "</li>");
            html.hide();
            if (_form_parent_id == 0) {
              if ($("#hd-comments-list > .comments-tree-list:first").length < 1) {
                html.wrap("<ol class=\"comments-tree-list\"></ol>");
                $("#hd-comments-list").append(html.parent())
              } else {
                $("#hd-comments-list > .comments-tree-list:first").prepend(html)
              }
            } else {
              if ($("#comments-tree-item-" + _form_parent_id).find(".comments-tree-list").length < 1) {
                html.wrap("<ol class=\"comments-tree-list\"></ol>");
                $("#comments-tree-item-" + _form_parent_id).append(html.parent())
              } else {
                $("#comments-tree-item-" + _form_parent_id + " > .comments-tree-list:first").append(html)
              }
              _form.remove()
            }
            if (_form.find(".addcomment-success-box").length > 0) {
              _form.find(".addcomment-success-box").show()
            } else {
              _form.find(".addcomment-layer").prepend("<div class=\"addcomment-success-box\"><span>Комментарий успешно добавлен<br /><i>Закрыть</i></span></div>")
            }
            _form.find(".addcomment-more").hide();
            _form.find(".bb-panel").hide();
            $("#comments-" + _form_id).removeClass("expanded");
            setCommentsExpandEvents(_form_id);
            $("#comments-tree-item-" + response.comment_id).slideDown(400);
            $("#comments-tree-item-" + response.comment_id + " > div:not(:animated)").addClass("now-added").animate({ backgroundColor: "transparent" }, 2000, function () {
              $(this).removeClass("now-added").removeAttr("style")
            });
            $("#comments-" + _form_id).val("");
            if (typeof grecaptcha != "undefined") {
              grecaptcha.reset()
            }
          } else {
            if (response.on_moderation === !0) {
              sof.helper.messagePS(response.message, "Комментарий успешно добавлен");
              if (_form.find(".addcomment-success-box").length > 0) {
                _form.find(".addcomment-success-box").show()
              } else {
                _form.find(".addcomment-layer").prepend("<div class=\"addcomment-success-box\"><span>Комментарий успешно добавлен, и он находится на модерации</span></div>")
              }
              _form.find(".addcomment-more").hide();
              _form.find(".bb-panel").hide();
              $("#comments-" + _form_id).removeClass("expanded");
              setCommentsExpandEvents(_form_id);
              $("#comments-" + _form_id).val("")
            } else {
              var html = "Возникла неизвестная ошибка";
              if ($.isArray(response.message)) {
                html = "<ul class=\"simple-list\">";
                $.each(response.message, function (k, v) {
                  html += "<li>" + v + "</li>"
                });
                html += "</ul>"
              }
              sof.helper.messagePS(html, "Ошибка")
            }
          }
          _submit_btn.prop("disabled", !1);
          _loader.hide()
        })
      }
      return !1
    });
    $("#hd-comments-list").on("click", ".share-link", function (e) {
      e.preventDefault();
      $("#comments-tree-item-" + $(this).data("id") + " > div:not(:animated)").addClass("now-added").animate({ backgroundColor: "transparent" }, 2000, function () {
        $(this).removeClass("now-added").removeAttr("style")
      })
    });
    $(document).on("click", "#ps-agreement-link-spoilerbutton", function () {
      sof.home.showReportPopup($("#send-video-issue"));
      return !1
    });
    if (!sof.is_touch) {
      $("#hd-comments-list").on("mouseenter mouseleave", ".b-comment", function (e) {
        var _self = $(this).closest(".comments-tree-item");
        var _parent_comments = _self.find(".comments-tree-list"), _answ = $(this).find(".b-comment__answers_ctrl");
        if (e.type === "mouseenter") {
          if ($(".comments-tree-list > .comments-tree-item", _self).length > 0) {
            _self.addClass("highlight current")
          }
          _parent_comments.addClass("highlight parent")
        } else {
          _self.removeClass("highlight current");
          _parent_comments.removeClass("highlight parent")
        }
      });
      $("#hd-comments-list").on("click", ".b-comment__answers_ctrl", function (e) {
        var _self = $(this), _comments = _self.closest(".comments-tree-item").find(".comments-tree-list");
        if (_self.data("show") == 1) {
          _self.text("показать ответы");
          _self.data("show", 0);
          _comments.stop(!0, !0).slideUp(200)
        } else {
          _self.text("скрыть ответы");
          _self.data("show", 1);
          _comments.slideDown(200)
        }
      })
    }
    if (window.abc == !0) {
      $("#has_adb").val("1")
    } else {
      $("#has_adb").val("2")
    }
  }
  var buildReplyForm = function (id, indent) {
    var html = $("#comments-form").clone();
    html.prop("id", "comments-form-" + id).data({ "id": id, "parent_id": id, "replyto_id": id });
    html.find("#addcomment-layer-0").prop("id", "addcomment-layer-" + id);
    html.find("label[for=\"comments-0\"]").prop("for", "comments-" + id);
    html.find("label[for=\"comment-name-0\"]").prop("for", "comment-name-" + id);
    html.find("label[for=\"comment-email-0\"]").prop("for", "comment-email-" + id);
    html.find("label[for=\"question-answer-0\"]").prop("for", "question-answer-" + id);
    html.find("label[for=\"sec-code-0\"]").prop("for", "sec-code-" + id);
    html.find("label[for=\"is-admin-checkbox-0\"]").prop("for", "is-admin-checkbox-" + id);
    html.find("textarea[id=\"comments-0\"]").prop("placeholder", "Написать комментарий");
    html.find("textarea[id=\"comments-0\"]").prop("id", "comments-" + id);
    html.find("input[id=\"comment-name-0\"]").prop("id", "comment-name-" + id);
    html.find("input[id=\"comment-email-0\"]").prop("id", "comment-email-" + id);
    html.find("input[id=\"question-answer-0\"]").prop("id", "question-answer-" + id);
    html.find("input[id=\"sec-code-0\"]").prop("id", "sec-code-" + id);
    html.find("input[id=\"is-admin-checkbox-0\"]").prop("id", "is-admin-checkbox-" + id);
    html.find("button[type=\"submit\"]").addClass("btn-small").text("Отправить");
    html.find(".b-comment__attention_rules, .addcomment-success-box").remove();
    if ($("#addcomment-layer-" + id).length < 1) {
      var comment_holder;
      if (indent < 5) {
        comment_holder = $("#comments-tree-item-" + id);
        html.data("indent", (indent + 1))
      } else {
        comment_holder = $("#comments-tree-item-" + id).closest(".comments-tree-item:not(#comments-tree-item-" + id + ")");
        html.data({ "parent_id": comment_holder.data("id"), "indent": 5 })
      }
      comment_holder.append(html)
    }
  }
  pub.appendComment = function (response, reply_to) {
    var _indent = 0;
    if ($("#comments-tree-item-" + response.comment_id).length > 0) return;
    if (reply_to > 0 && $("#comments-tree-item-" + reply_to).length < 1) return;
    if (reply_to > 0) {
      _indent = $("#comments-tree-item-" + reply_to).data("indent") + 1;
      if (_indent > 5) {
        _indent = 5
      }
    }
    var html = $("<li id=\"comments-tree-item-" + response.comment_id + "\" class=\"comments-tree-item\" data-id=\"" + response.comment_id + "\" data-indent=\"" + _indent + "\">" + response.message + "</li>");
    html.hide();
    if (reply_to == 0) {
      if ($("#hd-comments-list > .comments-tree-list:first").length < 1) {
        html.wrap("<ol class=\"comments-tree-list\"></ol>");
        $("#hd-comments-list").append(html.parent())
      } else {
        $("#hd-comments-list > .comments-tree-list:first").prepend(html)
      }
    } else {
      if ($("#comments-tree-item-" + reply_to).find(".comments-tree-list").length < 1) {
        html.wrap("<ol class=\"comments-tree-list\"></ol>");
        if ($("#comments-tree-item-" + reply_to).find("#comments-form-" + reply_to).length < 1) {
          $("#comments-tree-item-" + reply_to).append(html.parent())
        } else {
          html.parent().insertBefore("#comments-form-" + reply_to)
        }
      } else {
        $("#comments-tree-item-" + reply_to + " > .comments-tree-list:first").append(html)
      }
    }
    sof.comments.setLikesPopup("#comment-id-" + response.comment_id + " .b-comment__like_it");
    $("#comments-tree-item-" + response.comment_id).slideDown(400);
    $("#comments-tree-item-" + response.comment_id + " > div:not(:animated)").addClass("now-added").animate({ backgroundColor: "transparent" }, 2000, function () {
      $(this).removeClass("now-added").removeAttr("style")
    })
  }
  pub.getCommentsUpdatesRequest = function (post_id, type, update_id, callback) {
    callback = callback || function () {
    };
    var t = new Date().getTime(), _user_token = $("#member_user_token").val();
    sof.ajax(dle_root + "ajax/get_comments_updates/" + t + "/", {
      post_id: post_id,
      type: type,
      token: _user_token,
      update_id: update_id
    }, function (response) {
      sof.comments.buildCommentsUpdates(post_id, type, response);
      if (response.success == !0) {
        lastCommentsUpdatesId = response.last_update_id;
        if (response.next_update_id > 0) {
          lastCommentsUpdatesId = response.next_update_id;
          sof.comments.getCommentsUpdatesRequest(post_id, type, lastCommentsUpdatesId, callback)
        } else {
          callback(response)
        }
      } else {
        callback(response)
      }
    }, {
      error: function (msg) {
        sof.comments.stopWSComments()
      }
    })
  }
  pub.buildCommentsUpdates = function (post_id, type, response) {
    if (response.success == !0) {
      if (response.type == "comment") {
        switch (response.action) {
          case "add":
            if ($("#comment-id-" + response.comment_id + " .on_moderation").length > 0) {
              var _item = $("#comment-id-" + response.comment_id);
              _item.find(".b-comment").removeClass("on_moderation");
              _item.find(".publish-holder").remove()
            }
            sof.comments.appendComment(response, response.reply_to);
            if (type == 0) {
              sof.comments.updatePostCommentsCount(1)
            }
            break;
          case "delete":
            if ($("#comments-tree-item-" + response.comment_id).length > 0) {
              $("#comments-tree-item-" + response.comment_id).hide(400, function () {
                $(this).remove()
              })
            }
            if (type == 0) {
              sof.comments.updatePostCommentsCount(-1)
            }
            break;
          case "update":
            if ($("#comments-tree-item-" + response.comment_id).length > 0) {
              $("#comment-id-" + response.comment_id).replaceWith(response.message);
              $("#comments-tree-item-" + response.comment_id + " > div:not(:animated)").addClass("now-added").animate({ backgroundColor: "transparent" }, 2000, function () {
                $(this).removeClass("now-added").removeAttr("style")
              })
            }
            break
        }
      } else if (response.type == "like") {
        switch (response.action) {
          case "add":
          case "delete":
            if ($("#comments-tree-item-" + response.comment_id).length > 0) {
              var _user_id = parseInt($("#member_user_id").val()),
                _like_holder = $("#comment-id-" + response.comment_id + " .b-comment__like_it"),
                _count_holder = $("#comment-id-" + response.comment_id + " .b-comment__likes_count").show().find("i");
              _like_holder.prop("title", "").data({ "likes_num": response.count, "ajax": "" });
              if (response.count > 0) {
                _count_holder.addClass("positive").text(response.count)
              } else {
                _count_holder.removeClass("positive").text(0).closest(".b-comment__likes_count").hide()
              }
              if (_user_id > 0 && response.user_id == _user_id) {
                _like_holder.addClass("disabled")
              }
              sof.comments.setLikesPopup("#comment-id-" + response.comment_id + " .b-comment__like_it")
            }
            break
        }
      }
    }
  }
  pub.getCommentsUpdates = function (post_id, type, callback) {
    callback = callback || function () {
    };
    sof.comments.getCommentsUpdatesRequest(post_id, type, lastCommentsUpdatesId, function (response) {
      callback()
    })
  }
  pub.initWSComments = function (host, post_id, type, last_update_id, last_update_interval) {
    if (last_update_interval === null) {
      return !1
    }
    lastCommentsUpdatesId = last_update_id;
    astCommentsUpdatesInterval = null;
    lastCommentsUpdatesInterval = setInterval(function () {
      sof.comments.getCommentsUpdates(post_id, type)
    }, last_update_interval);
    ifvisible.setIdleDuration(last_update_interval / 1000);
    ifvisible.idle(function () {
      if (lastCommentsUpdatesInterval !== null) {
        clearInterval(lastCommentsUpdatesInterval)
      }
    });
    ifvisible.wakeup(function () {
      sof.comments.getCommentsUpdates(post_id, type, function () {
        lastCommentsUpdatesInterval = setInterval(function () {
          sof.comments.getCommentsUpdates(post_id, type)
        }, last_update_interval)
      })
    })
  }
  pub.stopWSComments = function () {
    if (lastCommentsUpdatesInterval !== null) {
      clearInterval(lastCommentsUpdatesInterval)
    }
    ifvisible.off("idle");
    ifvisible.off("wakeup")
  }
  pub.updatePostCommentsCount = function (diff) {
    var _obj = $("#comments-list-button em"), _val = 0;
    if (_obj.length > 0) {
      _val = parseInt(_obj.text())
    }
    if (_val == 0 && diff > 0) {
      $("#comments-list-button").html("Отзывы (<em>1</em>)");
      return
    } else if (_val <= 1 && diff < 0) {
      $("#comments-list-button").text("Добавить отзыв");
      return
    }
    _obj.text((_val + diff))
  }
  var setCommentsExpandEvents = function (id) {
    $("#comments-" + id).off("focus").on("focus", function () {
      if ($.cookie("allowed_comments") != 1) {
        sof.helper.messagePS("<div class=\"ps-agreement-content\">В отзывах (или комментариях) категорически <b>ЗАПРЕЩЕНО</b>:<ul class=\"simple-list\"><li>разжигание межнациональной розни или действий, направленных на возбуждение национальной, расовой вражды, унижение национального достоинства, а также высказывания об исключительности, превосходстве либо неполноценности пользователей по признаку их отношения к национальной принадлежности или политических взглядов;</li><li>оскорбление других участников сайта, включая администрацию сайта (и даже самого себя);</li><li>мат, в любом его виде (имеется ввиду сокращения, вырезание букв: звездочки, точки и тому подобное);</li><li>раскрытие важных сюжетных линий - <a href=\"https://ru.wikipedia.org/wiki/Спойлер_(художественные_произведения)\" target=\"_blank\">спойлеры</a> (подобный текст берется под <b>[spoiler][/spoiler]</b> соответствующей кнопкой <b>SPOILER!</b>, которая находится над полем ввода комментария);</li><li>оставлять односоставные фразы, не имеющие смысловой нагрузки;</li><li>любые вопросы, связанные с датой выхода новых серий к произведению либо датой выхода самого произведения при наличии такой информации на странице с произведением;</li><li>любые ссылки на сторонние ресурсы;</li><li>упоминание каких либо сторонних ресурсов;</li><li>любые проблемы личного характера, связанные с воспроизведением либо отображением (для этого есть соответствующая <a href=\"javascript:void(0)\" id=\"ps-agreement-link-spoilerbutton\">кнопка</a> под плеером).</li></ul><div class=\"ps-agreement-link\"><a href=\"/comments-rules.html\" target=\"_blank\">Постоянная ссылка</a> на данные правила от 11 апреля 2016 года</div><div class=\"ps-agreement-buttons\"><button type=\"button\" class=\"btn btn-action btn-small\" onclick=\"sof.comments.acceptCommentsAgreements();\">Принимаю данные правила</button></div></div>", "Внимание!");
        return !1
      }
      var self = $(this);
      self.addClass("expanded").off("focus");
      $("#addcomment-layer-" + id + " .addcomment-more").slideDown(400);
      $("#addcomment-layer-" + id + " .bb-panel").slideDown(400)
    })
  }
  pub.acceptCommentsAgreements = function () {
    $.cookie("allowed_comments", 1, { path: "/", expires: 30 });
    $("#ps-close").trigger("click")
  }
  var bindLikeEvents = function () {
    $("#hd-comments-list, #dle-comments-list").on("click", ".b-comment__like_it", function () {
      var _self = $(this), _id = _self.data("comment_id");
      if (_self.hasClass("guest")) {
        $(".b-tophead__login").trigger("click");
        return
      }
      if (_self.hasClass("self-disabled") || _self.hasClass("loading")) return;
      _self.addClass("loading");
      $.ajax({
        url: dle_root + "engine/ajax/comments_like.php",
        data: { id: _id },
        method: "get",
        dataType: "json",
        success: function (response) {
          if (response.success === !0) {
            var _count_holder = $("#comment-id-" + _id + " .b-comment__likes_count"),
              _count_text = _count_holder.find("i");
            _self.addClass("disabled").prop("title", "");
            $("#comment-id-" + _id + " .b-comment__like_it").data({ "likes_num": response.count, "ajax": "" });
            _count_text.text(response.count);
            if (response.count > 0) {
              _count_text.addClass("positive");
              _count_holder.show()
            } else {
              _count_text.removeClass("positive");
              _count_holder.hide()
            }
            if (response.type == "minus") {
              _self.removeClass("disabled")
            }
            setTimeout(function () {
              sof.comments.getLikesContent(_self, "update")
            }, 10)
          } else {
            sof.helper.messagePS(response.message, "Ошибка")
          }
          _self.removeClass("loading")
        }
      })
    })
  }
  var moveCursorToEnd = function (el) {
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length
    } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      var range = el.createTextRange();
      range.collapse(!1);
      range.select()
    }
  }
  var insertBB = function (ibTag, ibClsTag, isSingle, from_obj) {
    var uagent = navigator.userAgent.toLowerCase();
    var is_ie = uagent.indexOf("msie") >= 0 ? !0 : !1;
    var isClose = !1;
    var obj_ta = $(from_obj).closest(".addcomment-layer").find("textarea[name=\"comments\"]");
    obj_ta = obj_ta[0];
    obj_ta.focus();
    if (is_ie) {
      if (obj_ta.isTextEdit) {
        var sel = document.selection;
        var rng = ie_range_cache ? ie_range_cache : sel.createRange();
        rng.colapse;
        if ((sel.type == "Text" || sel.type == "None") && rng != null) {
          if (ibClsTag != "" && rng.text.length > 0) {
            ibTag += rng.text + ibClsTag
          } else if (isSingle) {
            ibTag += rng.text + ibClsTag
          }
          rng.text = ibTag
        }
      } else {
        obj_ta.value += ibTag + ibClsTag
      }
      rng.select();
      ie_range_cache = null
    } else if (obj_ta.selectionEnd != null) {
      var ss = obj_ta.selectionStart;
      var st = obj_ta.scrollTop;
      var es = obj_ta.selectionEnd;
      var start = (obj_ta.value).substring(0, ss);
      var middle = (obj_ta.value).substring(ss, es);
      var end = (obj_ta.value).substring(es, obj_ta.textLength);
      if (!isSingle) middle = "";
      if (obj_ta.selectionEnd - obj_ta.selectionStart > 0) {
        middle = ibTag + middle + ibClsTag
      } else {
        middle = ibTag + middle + ibClsTag
      }
      obj_ta.value = start + middle + end;
      var cpos = ss + (middle.length);
      obj_ta.selectionStart = cpos;
      obj_ta.selectionEnd = cpos;
      obj_ta.scrollTop = st
    } else {
      obj_ta.value += ibTag + ibClsTag
    }
    return isClose
  }
  pub.quoteUser = function (name, id, indent) {
    if ($("#comments-form").length < 1) return;
    if (id > 0) {
      $("form[id^=\"comments-form-\"]").not("#comments-form-" + id).remove();
      indent = parseInt(indent);
      var live_indent = parseInt($("#comments-tree-item-" + id).data("indent"));
      if (live_indent > indent) {
        indent = live_indent
      }
      if (indent > 5) {
        indent = 5
      }
      buildReplyForm(id, indent);
      setCommentsExpandEvents(id);
      var field = $("#comments-" + id), offset_top = parseInt($("#top-nav.fixed").outerHeight(!0));
      field.trigger("focus");
      if (indent >= 5) {
        var val = $.trim(field.val());
        if (val == "") {
          field.val(val + "[b]" + name + "[/b], ")
        } else {
          field.val(val + "\n[b]" + name + "[/b], ")
        }
        moveCursorToEnd(field[0])
      }
      sof.helper.scrollTo($("#comments-form-" + id), offset_top)
    }
  }
  pub.bb = function (tag, el) {
    insertBB("[" + tag + "]", "[/" + tag + "]", !0, el)
  }
  pub.deleteComment = function (id, hash, type, area) {
    type = type || 0;
    var confirmed = confirm("Удалить комментарий?");
    if (confirmed) {
      $.get(dle_root + "engine/ajax/deletecomments.php", {
        id: id,
        dle_allow_hash: hash,
        type: type,
        area: area
      }, function (response) {
        if (response.success == !0) {
          if (response.parent == !0) {
            $("#comment-id-" + response.comment_id).addClass("b-comment__removed").html("Комментарий был удален")
          } else {
            if ($("#comments-tree-item-" + response.comment_id).length > 0) {
              $("#comments-tree-item-" + response.comment_id).hide(400, function () {
                $(this).remove()
              })
            } else {
              $("#comment-id-" + response.comment_id).hide(400, function () {
                $(this).remove()
              })
            }
          }
        } else {
          if (response.parent_id > 0 && response.link != "") {
            sof.helper.messagePS(response.message, "Ошибка")
          }
        }
      })
    }
    return !1
  }
  pub.publishComment = function (id, hash) {
    var confirmed = confirm("Опубликовать комментарий?");
    if (confirmed) {
      $.get(dle_root + "engine/ajax/publishcomments.php", { id: id, dle_allow_hash: hash }, function (response) {
        if (response.success == !0) {
          var _item = $("#comment-id-" + id);
          _item.find(".b-comment").removeClass("on_moderation");
          _item.find(".publish-holder").remove()
        } else {
          sof.helper.messagePS(response.message, "Ошибка")
        }
      })
    }
    return !1
  }
  pub.loadComments = function (id, page, scroll, type, comment_id, callback) {
    page = page || 1;
    scroll = scroll || !1;
    type = type || 0;
    comment_id = comment_id || 0;
    callback = callback || function () {
    };
    if (!id) return;
    var list = $("#hd-comments-list"), navigation = $("#hd-comments-navigation");
    list.empty().addClass("loading");
    navigation.css("visibility", "hidden");
    var t = new Date().getTime();
    $.ajax({
      url: dle_root + "ajax/get_comments/?t=" + t,
      data: { news_id: id, cstart: page, type: type, comment_id: comment_id, skin: dle_skin },
      method: "get",
      dataType: "json",
      success: function (response) {
        list.removeClass("loading").html(response.comments);
        if (!scroll) {
          sof.helper.scrollTo(list)
        }
        navigation.html(response.navigation).css("visibility", "visible");
        sof.comments.setLikesPopup();
        if (!sof.is_touch) {
          sof.comments.setTooltips()
        }
        callback(response.last_update_id)
      }
    })
  }
  pub.setTooltips = function () {
    $("#hd-comments-list .hd-tooltip").tooltipster({ animation: "swing", hideOnClick: !0, touchDevices: !1 })
  }
  pub.setLikesPopup = function (_selector) {
    if (!_selector) {
      _selector = ".show-likes-comment"
    }
    $(_selector).tooltipster({
      animation: "fade",
      hideOnClick: !0,
      contentAsHTML: !0,
      interactive: !0,
      content: "<i class=\"b-tt_popup__loader\"></i>",
      updateAnimation: !1,
      onlyOne: !0,
      position: "top_always",
      offsetY: -4,
      debug: !1,
      functionBefore: function (origin, continueTooltip) {
        if (origin.data("likes_num") > 0) {
          continueTooltip();
          if (origin.data("ajax") !== "cached") {
            sof.comments.getLikesContent(origin);
            origin.data("ajax", "cached")
          }
        }
      },
      functionAfter: function (origin) {
      }
    })
  }
  pub.getLikesContent = function (origin, action, callback) {
    callback = callback || function () {
    };
    action = action || "none";
    if (action == "update") {
      origin.tooltipster("content", "<i class=\"b-tt_popup__loader\"></i>");
      origin.tooltipster("show");
      return
    }
    sof.ajax(dle_root + "ajax/comments_likes/", { comment_id: origin.data("comment_id") }, function (response) {
      var content = "";
      if (response.success == !0) {
        if (response.message == "") {
          response.message = "Все данные куда-то пропали :("
        }
        origin.tooltipster("content", response.message).data("ajax", "cached")
      } else {
        origin.tooltipster("content", response.message)
      }
    });
    origin.data("ajax", "cached")
  }
  var bindYoutubeEvents = function () {
    $("#hd-comments-list, #dle-comments-list").on("click", ".youtu-link", function (e) {
      $("#trailer-popup").remove();
      var html = "<div id=\"trailer-popup\" class=\"b-popup b-popup__fixed\"><div class=\"b-popup__content\"></div><i title=\"Закрыть\" class=\"b-popup__close\"></i></div>";
      $("body").append(html);
      var _self = $(this), popup = $("#trailer-popup"), content_holder = $(".b-popup__content", popup);
      var onClose = function () {
        content_holder.html("")
      }
      var onOpen = function () {
        content_holder.html(buildYoutubePlayer(_self.data("youtube-id")))
      }
      sof.helper.setOverlayEvent(function () {
        onClose();
        sof.helper.hidePopup(popup);
        sof.helper.setOverlayEvent()
      });
      sof.helper.setClosePopupEvent(function () {
        onClose();
        sof.helper.hidePopup(popup);
        sof.helper.setOverlayEvent()
      });
      sof.helper.showPopup("trailer-popup", "fixed", onOpen, onClose);
      e.preventDefault()
    })
  }
  var buildYoutubePlayer = function (id) {
    var _yt = id.split("?"), _url = [];
    if (_yt.length > 1) {
      var _params_yt = _yt[1].split("&");
      _params_yt.filter(function (v, k) {
        if (v.match(/^t\=/)) {
          v = "start=" + sof.helper.convert_yt_time_to_seconds(v.replace(/^t\=/, ""))
        }
        _url.push(v)
      })
    }
    _url = _yt[0] + "?" + ((_url.length > 0) ? _url.join("&") + "&" : "") + "iv_load_policy=3&hd=1&rel=0&showinfo=0&autoplay=1";
    return "<iframe width=\"640\" height=\"360\" src=\"//www.youtube.com/embed/" + _url + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"background: transparent; position: relative;\"></iframe>"
  }
  return pub
}());
var sof = sof || {};
sof.profile = (function () {
  var pub = {};
  pub.initProfileEvents = function () {
    bindProfileEvents()
  }
  pub.initContinueEvents = function () {
    bindContinueEvents()
  }
  var bindProfileEvents = function () {
    $("#vk-rp-link-1, #vk-rp-accept-1").on("click", function (e) {
      $("#vk-rp-holder-1").hide();
      $(".vk-rp-row-1, .b-user__settings_holder_save").show()
    })
  }
  var bindContinueEvents = function () {
    $(".b-completed__watch__list_item_controls-dropdown").on("click", function (e) {
      e.stopPropagation();
      var _self = $(this), _list = _self.next(".b-completed__watch__list_item_controls-dropdown_list");
      _list.toggle();
      $("#wrapper").off("click.dropdown_controls", {
        _self: _self,
        _list: _list
      }, closeContinueControlsList).on("click.dropdown_controls", {
        trigger: _list,
        _list: _list
      }, closeContinueControlsList)
    })
  }
  var closeContinueControlsList = function (e) {
    var _self = e.data._self, _list = e.data._list;
    if (!$(e.target).closest(_list).is(_list)) {
      _list.hide();
      $("#wrapper").off("click.dropdown_controls", { _self: _self, _list: _list }, closeContinueControlsList)
    }
  }
  return pub
}());
$(function () {
  sof.init();
  sof.helper.initEvents();
  sof.home.stickFooter();
  sof.home.bindEvents();
  sof.home.bindSearch();
  sof.home.bindTopMenu();
  sof.home.bindGuestEvents();
  sof.home.bindSubmitLogin();
  sof.home.bindSubmitRegister();
  sof.home.bindQuickContent();
  sof.gallery.initEvents();
  sof.pages.initEvents();
  sof.comments.initEvents()
})
