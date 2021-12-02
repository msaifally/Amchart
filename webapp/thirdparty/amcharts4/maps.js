/**
 * @license
 * Copyright (c) 2018 amCharts (Antanas Marcelionis, Martynas Majeris)
 *
 * This sofware is provided under multiple licenses. Please see below for
 * links to appropriate usage.
 *
 * Free amCharts linkware license. Details and conditions:
 * https://github.com/amcharts/amcharts4/blob/master/LICENSE
 *
 * One of the amCharts commercial licenses. Details and pricing:
 * https://www.amcharts.com/online-store/
 * https://www.amcharts.com/online-store/licenses-explained/
 *
 * If in doubt, contact amCharts at contact@amcharts.com
 *
 * PLEASE DO NOT REMOVE THIS COPYRIGHT NOTICE.
 * @hidden
 */
am4internal_webpackJsonp(["cc1e"], {
	QJ7E: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = {};
		n.d(i, "geoArea", function () {
			return Et
		}), n.d(i, "geoBounds", function () {
			return he
		}), n.d(i, "geoCentroid", function () {
			return Me
		}), n.d(i, "geoCircle", function () {
			return De
		}), n.d(i, "geoClipAntimeridian", function () {
			return Ze
		}), n.d(i, "geoClipCircle", function () {
			return qe
		}), n.d(i, "geoClipExtent", function () {
			return en
		}), n.d(i, "geoClipRectangle", function () {
			return Je
		}), n.d(i, "geoContains", function () {
			return bn
		}), n.d(i, "geoDistance", function () {
			return ln
		}), n.d(i, "geoGraticule", function () {
			return Sn
		}), n.d(i, "geoGraticule10", function () {
			return Mn
		}), n.d(i, "geoInterpolate", function () {
			return Ln
		}), n.d(i, "geoLength", function () {
			return un
		}), n.d(i, "geoPath", function () {
			return wi
		}), n.d(i, "geoAlbers", function () {
			return Zi
		}), n.d(i, "geoAlbersUsa", function () {
			return qi
		}), n.d(i, "geoAzimuthalEqualArea", function () {
			return Ji
		}), n.d(i, "geoAzimuthalEqualAreaRaw", function () {
			return Ui
		}), n.d(i, "geoAzimuthalEquidistant", function () {
			return Qi
		}), n.d(i, "geoAzimuthalEquidistantRaw", function () {
			return Ki
		}), n.d(i, "geoConicConformal", function () {
			return rr
		}), n.d(i, "geoConicConformalRaw", function () {
			return ir
		}), n.d(i, "geoConicEqualArea", function () {
			return Wi
		}), n.d(i, "geoConicEqualAreaRaw", function () {
			return Hi
		}), n.d(i, "geoConicEquidistant", function () {
			return sr
		}), n.d(i, "geoConicEquidistantRaw", function () {
			return ur
		}), n.d(i, "geoEqualEarth", function () {
			return gr
		}), n.d(i, "geoEqualEarthRaw", function () {
			return dr
		}), n.d(i, "geoEquirectangular", function () {
			return ar
		}), n.d(i, "geoEquirectangularRaw", function () {
			return or
		}), n.d(i, "geoGnomonic", function () {
			return mr
		}), n.d(i, "geoGnomonicRaw", function () {
			return vr
		}), n.d(i, "geoIdentity", function () {
			return yr
		}), n.d(i, "geoProjection", function () {
			return ki
		}), n.d(i, "geoProjectionMutator", function () {
			return Fi
		}), n.d(i, "geoMercator", function () {
			return tr
		}), n.d(i, "geoMercatorRaw", function () {
			return $i
		}), n.d(i, "geoNaturalEarth1", function () {
			return Pr
		}), n.d(i, "geoNaturalEarth1Raw", function () {
			return br
		}), n.d(i, "geoOrthographic", function () {
			return Sr
		}), n.d(i, "geoOrthographicRaw", function () {
			return _r
		}), n.d(i, "geoStereographic", function () {
			return xr
		}), n.d(i, "geoStereographicRaw", function () {
			return Mr
		}), n.d(i, "geoTransverseMercator", function () {
			return wr
		}), n.d(i, "geoTransverseMercatorRaw", function () {
			return jr
		}), n.d(i, "geoRotation", function () {
			return Ie
		}), n.d(i, "geoStream", function () {
			return ht
		}), n.d(i, "geoTransform", function () {
			return Oi
		});
		var r = {};
		n.d(r, "normalizePoint", function () {
			return ao
		}), n.d(r, "normalizeMultiline", function () {
			return uo
		}), n.d(r, "wrapAngleTo180", function () {
			return so
		}), n.d(r, "geoToPoint", function () {
			return co
		});
		var o = {};
		n.d(o, "Mercator", function () {
			return Vo
		}), n.d(o, "Miller", function () {
			return Ru
		}), n.d(o, "Eckert6", function () {
			return ku
		}), n.d(o, "Orthographic", function () {
			return Fu
		}), n.d(o, "Stereographic", function () {
			return Bu
		}), n.d(o, "Albers", function () {
			return Hu
		}), n.d(o, "AlbersUsa", function () {
			return Wu
		}), n.d(o, "NaturalEarth1", function () {
			return Zu
		}), n.d(o, "AzimuthalEqualArea", function () {
			return qu
		}), n.d(o, "EqualEarth", function () {
			return Xu
		}), n.d(o, "Projection", function () {
			return Qr
		});
		var a = {};
		n.d(a, "LegendDataItem", function () {
			return u.b
		}), n.d(a, "Legend", function () {
			return u.a
		}), n.d(a, "LegendSettings", function () {
			return u.c
		}), n.d(a, "HeatLegend", function () {
			return s.a
		}), n.d(a, "MapChartDataItem", function () {
			return xo
		}), n.d(a, "MapChart", function () {
			return jo
		}), n.d(a, "MapSeriesDataItem", function () {
			return Or
		}), n.d(a, "MapSeries", function () {
			return Lr
		}), n.d(a, "MapObject", function () {
			return Er
		}), n.d(a, "MapPolygon", function () {
			return qr
		}), n.d(a, "MapImage", function () {
			return Ir
		}), n.d(a, "MapLine", function () {
			return mo
		}), n.d(a, "MapLineObject", function () {
			return lo
		}), n.d(a, "MapSpline", function () {
			return Oo
		}), n.d(a, "MapArc", function () {
			return Co
		}), n.d(a, "Graticule", function () {
			return Po
		}), n.d(a, "MapPolygonSeriesDataItem", function () {
			return Jr
		}), n.d(a, "MapPolygonSeries", function () {
			return Kr
		}), n.d(a, "MapLineSeriesDataItem", function () {
			return yo
		}), n.d(a, "MapLineSeries", function () {
			return bo
		}), n.d(a, "MapSplineSeriesDataItem", function () {
			return Eo
		}), n.d(a, "MapSplineSeries", function () {
			return Io
		}), n.d(a, "MapImageSeriesDataItem", function () {
			return ho
		}), n.d(a, "MapImageSeries", function () {
			return po
		}), n.d(a, "MapArcSeriesDataItem", function () {
			return To
		}), n.d(a, "MapArcSeries", function () {
			return Go
		}), n.d(a, "GraticuleSeriesDataItem", function () {
			return _o
		}), n.d(a, "GraticuleSeries", function () {
			return So
		}), n.d(a, "multiPolygonToGeo", function () {
			return zr
		}), n.d(a, "multiLineToGeo", function () {
			return Vr
		}), n.d(a, "multiPointToGeo", function () {
			return Ar
		}), n.d(a, "pointToGeo", function () {
			return kr
		}), n.d(a, "multiGeoPolygonToMultipolygon", function () {
			return Hr
		}), n.d(a, "getBackground", function () {
			return Zr
		}), n.d(a, "multiGeoLineToMultiLine", function () {
			return Br
		}), n.d(a, "multiGeoToPoint", function () {
			return Rr
		}), n.d(a, "getCircle", function () {
			return Wr
		}), n.d(a, "ZoomControl", function () {
			return zo
		}), n.d(a, "SmallMap", function () {
			return no
		}), n.d(a, "Projection", function () {
			return Qr
		}), n.d(a, "projections", function () {
			return o
		}), n.d(a, "geo", function () {
			return r
		}), n.d(a, "d3geo", function () {
			return i
		});
		var u = n("uWmK"),
			s = n("2OXf"),
			c = n("m4/l"),
			l = n("2I/e"),
			h = n("hD5A"),
			p = n("MIZb"),
			f = n("aM7D"),
			d = n("aCit"),
			g = n("Mtpk"),
			v = n("Gg2j"),
			m = function (t, e) {
				return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
			},
			y = function (t) {
				var e = t,
					n = t;

				function i(t, e, i, r) {
					for (null == i && (i = 0), null == r && (r = t.length); i < r;) {
						var o = i + r >>> 1;
						n(t[o], e) < 0 ? i = o + 1 : r = o
					}
					return i
				}
				return 1 === t.length && (e = function (e, n) {
					return t(e) - n
				}, n = function (t) {
					return function (e, n) {
						return m(t(e), n)
					}
				}(t)), {
					left: i,
					center: function (t, n, r, o) {
						null == r && (r = 0), null == o && (o = t.length);
						var a = i(t, n, r, o - 1);
						return a > r && e(t[a - 1], n) > -e(t[a], n) ? a - 1 : a
					},
					right: function (t, e, i, r) {
						for (null == i && (i = 0), null == r && (r = t.length); i < r;) {
							var o = i + r >>> 1;
							n(t[o], e) > 0 ? r = o : i = o + 1
						}
						return i
					}
				}
			};
		var b = function (t) {
			return null === t ? NaN : +t
		};
		var P = y(m);
		P.right, P.left, y(b).center;

		function _(t, e) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
			}
		}
		var S = function () {
			function t() {
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this._partials = new Float64Array(32), this._n = 0
			}
			return function (t, e, n) {
				e && _(t.prototype, e), n && _(t, n)
			}(t, [{
				key: "add",
				value: function (t) {
					for (var e = this._partials, n = 0, i = 0; i < this._n && i < 32; i++) {
						var r = e[i],
							o = t + r,
							a = Math.abs(t) < Math.abs(r) ? t - (o - r) : r - (o - t);
						a && (e[n++] = a), t = o
					}
					return e[n] = t, this._n = n + 1, this
				}
			}, {
				key: "valueOf",
				value: function () {
					var t, e, n, i = this._partials,
						r = this._n,
						o = 0;
					if (r > 0) {
						for (o = i[--r]; r > 0 && (t = o, !(n = (e = i[--r]) - ((o = t + e) - t))););
						r > 0 && (n < 0 && i[r - 1] < 0 || n > 0 && i[r - 1] > 0) && (e = 2 * n) == (t = o + e) - o && (o = t)
					}
					return o
				}
			}]), t
		}();
		var M = Array.prototype;
		M.slice, M.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
		var x = regeneratorRuntime.mark(O);

		function j(t, e) {
			var n;
			if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
				if (Array.isArray(t) || (n = function (t, e) {
						if (!t) return;
						if ("string" == typeof t) return w(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === n && t.constructor && (n = t.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(t);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
					}(t)) || e && t && "number" == typeof t.length) {
					n && (t = n);
					var i = 0,
						r = function () {};
					return {
						s: r,
						n: function () {
							return i >= t.length ? {
								done: !0
							} : {
								done: !1,
								value: t[i++]
							}
						},
						e: function (t) {
							throw t
						},
						f: r
					}
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				)
			}
			var o, a = !0,
				u = !1;
			return {
				s: function () {
					n = t[Symbol.iterator]()
				},
				n: function () {
					var t = n.next();
					return a = t.done, t
				},
				e: function (t) {
					u = !0, o = t
				},
				f: function () {
					try {
						a || null == n.return || n.return()
					} finally {
						if (u) throw o
					}
				}
			}
		}

		function w(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
			return i
		}

		function O(t) {
			var e, n, i;
			return regeneratorRuntime.wrap(function (r) {
				for (;;) switch (r.prev = r.next) {
				case 0:
					e = j(t), r.prev = 1, e.s();
				case 3:
					if ((n = e.n()).done) {
						r.next = 8;
						break
					}
					return i = n.value, r.delegateYield(i, "t0", 6);
				case 6:
					r.next = 3;
					break;
				case 8:
					r.next = 13;
					break;
				case 10:
					r.prev = 10, r.t1 = r.catch(1), e.e(r.t1);
				case 13:
					return r.prev = 13, e.f(), r.finish(13);
				case 16:
				case "end":
					return r.stop()
				}
			}, x, null, [
				[1, 10, 13, 16]
			])
		}

		function L(t) {
			return Array.from(O(t))
		}
		var C = function (t, e, n) {
			t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
			for (var i = -1, r = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(r); ++i < r;) o[i] = t + i * n;
			return o
		};
		Math.random;
		var E = 1e-6,
			I = 1e-12,
			T = Math.PI,
			G = T / 2,
			D = T / 4,
			N = 2 * T,
			z = 180 / T,
			V = T / 180,
			A = Math.abs,
			R = Math.atan,
			k = Math.atan2,
			F = Math.cos,
			B = Math.ceil,
			H = Math.exp,
			W = (Math.floor, Math.hypot),
			Z = Math.log,
			q = Math.pow,
			X = Math.sin,
			Y = Math.sign || function (t) {
				return t > 0 ? 1 : t < 0 ? -1 : 0
			},
			U = Math.sqrt,
			J = Math.tan;

		function K(t) {
			return t > 1 ? 0 : t < -1 ? T : Math.acos(t)
		}

		function Q(t) {
			return t > 1 ? G : t < -1 ? -G : Math.asin(t)
		}

		function $(t) {
			return (t = X(t / 2)) * t
		}

		function tt() {}

		function et(t, e) {
			t && it.hasOwnProperty(t.type) && it[t.type](t, e)
		}
		var nt = {
				Feature: function (t, e) {
					et(t.geometry, e)
				},
				FeatureCollection: function (t, e) {
					for (var n = t.features, i = -1, r = n.length; ++i < r;) et(n[i].geometry, e)
				}
			},
			it = {
				Sphere: function (t, e) {
					e.sphere()
				},
				Point: function (t, e) {
					t = t.coordinates, e.point(t[0], t[1], t[2])
				},
				MultiPoint: function (t, e) {
					for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) t = n[i], e.point(t[0], t[1], t[2])
				},
				LineString: function (t, e) {
					rt(t.coordinates, e, 0)
				},
				MultiLineString: function (t, e) {
					for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) rt(n[i], e, 0)
				},
				Polygon: function (t, e) {
					ot(t.coordinates, e)
				},
				MultiPolygon: function (t, e) {
					for (var n = t.coordinates, i = -1, r = n.length; ++i < r;) ot(n[i], e)
				},
				GeometryCollection: function (t, e) {
					for (var n = t.geometries, i = -1, r = n.length; ++i < r;) et(n[i], e)
				}
			};

		function rt(t, e, n) {
			var i, r = -1,
				o = t.length - n;
			for (e.lineStart(); ++r < o;) i = t[r], e.point(i[0], i[1], i[2]);
			e.lineEnd()
		}

		function ot(t, e) {
			var n = -1,
				i = t.length;
			for (e.polygonStart(); ++n < i;) rt(t[n], e, 1);
			e.polygonEnd()
		}
		var at, ut, st, ct, lt, ht = function (t, e) {
				t && nt.hasOwnProperty(t.type) ? nt[t.type](t, e) : et(t, e)
			},
			pt = new S,
			ft = new S,
			dt = {
				point: tt,
				lineStart: tt,
				lineEnd: tt,
				polygonStart: function () {
					pt = new S, dt.lineStart = gt, dt.lineEnd = vt
				},
				polygonEnd: function () {
					var t = +pt;
					ft.add(t < 0 ? N + t : t), this.lineStart = this.lineEnd = this.point = tt
				},
				sphere: function () {
					ft.add(N)
				}
			};

		function gt() {
			dt.point = mt
		}

		function vt() {
			yt(at, ut)
		}

		function mt(t, e) {
			dt.point = yt, at = t, ut = e, st = t *= V, ct = F(e = (e *= V) / 2 + D), lt = X(e)
		}

		function yt(t, e) {
			e = (e *= V) / 2 + D;
			var n = (t *= V) - st,
				i = n >= 0 ? 1 : -1,
				r = i * n,
				o = F(e),
				a = X(e),
				u = lt * a,
				s = ct * o + u * F(r),
				c = u * i * X(r);
			pt.add(k(c, s)), st = t, ct = o, lt = a
		}
		var bt, Pt, _t, St, Mt, xt, jt, wt, Ot, Lt, Ct, Et = function (t) {
			return ft = new S, ht(t, dt), 2 * ft
		};

		function It(t) {
			return [k(t[1], t[0]), Q(t[2])]
		}

		function Tt(t) {
			var e = t[0],
				n = t[1],
				i = F(n);
			return [i * F(e), i * X(e), X(n)]
		}

		function Gt(t, e) {
			return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
		}

		function Dt(t, e) {
			return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
		}

		function Nt(t, e) {
			t[0] += e[0], t[1] += e[1], t[2] += e[2]
		}

		function zt(t, e) {
			return [t[0] * e, t[1] * e, t[2] * e]
		}

		function Vt(t) {
			var e = U(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
			t[0] /= e, t[1] /= e, t[2] /= e
		}
		var At = {
			point: Rt,
			lineStart: Ft,
			lineEnd: Bt,
			polygonStart: function () {
				At.point = Ht, At.lineStart = Wt, At.lineEnd = Zt, Ot = new S, dt.polygonStart()
			},
			polygonEnd: function () {
				dt.polygonEnd(), At.point = Rt, At.lineStart = Ft, At.lineEnd = Bt, pt < 0 ? (bt = -(_t = 180), Pt = -(St = 90)) : Ot > E ? St =
					90 : Ot < -E && (Pt = -90), Ct[0] = bt, Ct[1] = _t
			},
			sphere: function () {
				bt = -(_t = 180), Pt = -(St = 90)
			}
		};

		function Rt(t, e) {
			Lt.push(Ct = [bt = t, _t = t]), e < Pt && (Pt = e), e > St && (St = e)
		}

		function kt(t, e) {
			var n = Tt([t * V, e * V]);
			if (wt) {
				var i = Dt(wt, n),
					r = Dt([i[1], -i[0], 0], i);
				Vt(r), r = It(r);
				var o, a = t - Mt,
					u = a > 0 ? 1 : -1,
					s = r[0] * z * u,
					c = A(a) > 180;
				c ^ (u * Mt < s && s < u * t) ? (o = r[1] * z) > St && (St = o) : c ^ (u * Mt < (s = (s + 360) % 360 - 180) && s < u * t) ? (o = -r[
						1] * z) < Pt && (Pt = o) : (e < Pt && (Pt = e), e > St && (St = e)), c ? t < Mt ? qt(bt, t) > qt(bt, _t) && (_t = t) : qt(t, _t) >
					qt(bt, _t) && (bt = t) : _t >= bt ? (t < bt && (bt = t), t > _t && (_t = t)) : t > Mt ? qt(bt, t) > qt(bt, _t) && (_t = t) : qt(t,
						_t) > qt(bt, _t) && (bt = t)
			} else Lt.push(Ct = [bt = t, _t = t]);
			e < Pt && (Pt = e), e > St && (St = e), wt = n, Mt = t
		}

		function Ft() {
			At.point = kt
		}

		function Bt() {
			Ct[0] = bt, Ct[1] = _t, At.point = Rt, wt = null
		}

		function Ht(t, e) {
			if (wt) {
				var n = t - Mt;
				Ot.add(A(n) > 180 ? n + (n > 0 ? 360 : -360) : n)
			} else xt = t, jt = e;
			dt.point(t, e), kt(t, e)
		}

		function Wt() {
			dt.lineStart()
		}

		function Zt() {
			Ht(xt, jt), dt.lineEnd(), A(Ot) > E && (bt = -(_t = 180)), Ct[0] = bt, Ct[1] = _t, wt = null
		}

		function qt(t, e) {
			return (e -= t) < 0 ? e + 360 : e
		}

		function Xt(t, e) {
			return t[0] - e[0]
		}

		function Yt(t, e) {
			return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
		}
		var Ut, Jt, Kt, Qt, $t, te, ee, ne, ie, re, oe, ae, ue, se, ce, le, he = function (t) {
				var e, n, i, r, o, a, u;
				if (St = _t = -(bt = Pt = 1 / 0), Lt = [], ht(t, At), n = Lt.length) {
					for (Lt.sort(Xt), e = 1, o = [i = Lt[0]]; e < n; ++e) Yt(i, (r = Lt[e])[0]) || Yt(i, r[1]) ? (qt(i[0], r[1]) > qt(i[0], i[1]) && (i[
						1] = r[1]), qt(r[0], i[1]) > qt(i[0], i[1]) && (i[0] = r[0])) : o.push(i = r);
					for (a = -1 / 0, e = 0, i = o[n = o.length - 1]; e <= n; i = r, ++e) r = o[e], (u = qt(i[1], r[0])) > a && (a = u, bt = r[0], _t =
						i[1])
				}
				return Lt = Ct = null, bt === 1 / 0 || Pt === 1 / 0 ? [
					[NaN, NaN],
					[NaN, NaN]
				] : [
					[bt, Pt],
					[_t, St]
				]
			},
			pe = {
				sphere: tt,
				point: fe,
				lineStart: ge,
				lineEnd: ye,
				polygonStart: function () {
					pe.lineStart = be, pe.lineEnd = Pe
				},
				polygonEnd: function () {
					pe.lineStart = ge, pe.lineEnd = ye
				}
			};

		function fe(t, e) {
			t *= V;
			var n = F(e *= V);
			de(n * F(t), n * X(t), X(e))
		}

		function de(t, e, n) {
			Kt += (t - Kt) / ++Ut, Qt += (e - Qt) / Ut, $t += (n - $t) / Ut
		}

		function ge() {
			pe.point = ve
		}

		function ve(t, e) {
			t *= V;
			var n = F(e *= V);
			se = n * F(t), ce = n * X(t), le = X(e), pe.point = me, de(se, ce, le)
		}

		function me(t, e) {
			t *= V;
			var n = F(e *= V),
				i = n * F(t),
				r = n * X(t),
				o = X(e),
				a = k(U((a = ce * o - le * r) * a + (a = le * i - se * o) * a + (a = se * r - ce * i) * a), se * i + ce * r + le * o);
			Jt += a, te += a * (se + (se = i)), ee += a * (ce + (ce = r)), ne += a * (le + (le = o)), de(se, ce, le)
		}

		function ye() {
			pe.point = fe
		}

		function be() {
			pe.point = _e
		}

		function Pe() {
			Se(ae, ue), pe.point = fe
		}

		function _e(t, e) {
			ae = t, ue = e, t *= V, e *= V, pe.point = Se;
			var n = F(e);
			se = n * F(t), ce = n * X(t), le = X(e), de(se, ce, le)
		}

		function Se(t, e) {
			t *= V;
			var n = F(e *= V),
				i = n * F(t),
				r = n * X(t),
				o = X(e),
				a = ce * o - le * r,
				u = le * i - se * o,
				s = se * r - ce * i,
				c = W(a, u, s),
				l = Q(c),
				h = c && -l / c;
			ie.add(h * a), re.add(h * u), oe.add(h * s), Jt += l, te += l * (se + (se = i)), ee += l * (ce + (ce = r)), ne += l * (le + (le = o)),
				de(se, ce, le)
		}
		var Me = function (t) {
				Ut = Jt = Kt = Qt = $t = te = ee = ne = 0, ie = new S, re = new S, oe = new S, ht(t, pe);
				var e = +ie,
					n = +re,
					i = +oe,
					r = W(e, n, i);
				return r < I && (e = te, n = ee, i = ne, Jt < E && (e = Kt, n = Qt, i = $t), (r = W(e, n, i)) < I) ? [NaN, NaN] : [k(n, e) * z, Q(i /
					r) * z]
			},
			xe = function (t) {
				return function () {
					return t
				}
			},
			je = function (t, e) {
				function n(n, i) {
					return n = t(n, i), e(n[0], n[1])
				}
				return t.invert && e.invert && (n.invert = function (n, i) {
					return (n = e.invert(n, i)) && t.invert(n[0], n[1])
				}), n
			};

		function we(t, e) {
			return [A(t) > T ? t + Math.round(-t / N) * N : t, e]
		}

		function Oe(t, e, n) {
			return (t %= N) ? e || n ? je(Ce(t), Ee(e, n)) : Ce(t) : e || n ? Ee(e, n) : we
		}

		function Le(t) {
			return function (e, n) {
				return [(e += t) > T ? e - N : e < -T ? e + N : e, n]
			}
		}

		function Ce(t) {
			var e = Le(t);
			return e.invert = Le(-t), e
		}

		function Ee(t, e) {
			var n = F(t),
				i = X(t),
				r = F(e),
				o = X(e);

			function a(t, e) {
				var a = F(e),
					u = F(t) * a,
					s = X(t) * a,
					c = X(e),
					l = c * n + u * i;
				return [k(s * r - l * o, u * n - c * i), Q(l * r + s * o)]
			}
			return a.invert = function (t, e) {
				var a = F(e),
					u = F(t) * a,
					s = X(t) * a,
					c = X(e),
					l = c * r - s * o;
				return [k(s * r + c * o, u * n + l * i), Q(l * n - u * i)]
			}, a
		}
		we.invert = we;
		var Ie = function (t) {
			function e(e) {
				return (e = t(e[0] * V, e[1] * V))[0] *= z, e[1] *= z, e
			}
			return t = Oe(t[0] * V, t[1] * V, t.length > 2 ? t[2] * V : 0), e.invert = function (e) {
				return (e = t.invert(e[0] * V, e[1] * V))[0] *= z, e[1] *= z, e
			}, e
		};

		function Te(t, e, n, i, r, o) {
			if (n) {
				var a = F(e),
					u = X(e),
					s = i * n;
				null == r ? (r = e + i * N, o = e - s / 2) : (r = Ge(a, r), o = Ge(a, o), (i > 0 ? r < o : r > o) && (r += i * N));
				for (var c, l = r; i > 0 ? l > o : l < o; l -= s) c = It([a, -u * F(l), -u * X(l)]), t.point(c[0], c[1])
			}
		}

		function Ge(t, e) {
			(e = Tt(e))[0] -= t, Vt(e);
			var n = K(-e[1]);
			return ((-e[2] < 0 ? -n : n) + N - E) % N
		}
		var De = function () {
				var t, e, n = xe([0, 0]),
					i = xe(90),
					r = xe(6),
					o = {
						point: function (n, i) {
							t.push(n = e(n, i)), n[0] *= z, n[1] *= z
						}
					};

				function a() {
					var a = n.apply(this, arguments),
						u = i.apply(this, arguments) * V,
						s = r.apply(this, arguments) * V;
					return t = [], e = Oe(-a[0] * V, -a[1] * V, 0).invert, Te(o, u, s, 1), a = {
						type: "Polygon",
						coordinates: [t]
					}, t = e = null, a
				}
				return a.center = function (t) {
					return arguments.length ? (n = "function" == typeof t ? t : xe([+t[0], +t[1]]), a) : n
				}, a.radius = function (t) {
					return arguments.length ? (i = "function" == typeof t ? t : xe(+t), a) : i
				}, a.precision = function (t) {
					return arguments.length ? (r = "function" == typeof t ? t : xe(+t), a) : r
				}, a
			},
			Ne = function () {
				var t, e = [];
				return {
					point: function (e, n, i) {
						t.push([e, n, i])
					},
					lineStart: function () {
						e.push(t = [])
					},
					lineEnd: tt,
					rejoin: function () {
						e.length > 1 && e.push(e.pop().concat(e.shift()))
					},
					result: function () {
						var n = e;
						return e = [], t = null, n
					}
				}
			},
			ze = function (t, e) {
				return A(t[0] - e[0]) < E && A(t[1] - e[1]) < E
			};

		function Ve(t, e, n, i) {
			this.x = t, this.z = e, this.o = n, this.e = i, this.v = !1, this.n = this.p = null
		}
		var Ae = function (t, e, n, i, r) {
			var o, a, u = [],
				s = [];
			if (t.forEach(function (t) {
					if (!((e = t.length - 1) <= 0)) {
						var e, n, i = t[0],
							a = t[e];
						if (ze(i, a)) {
							if (!i[2] && !a[2]) {
								for (r.lineStart(), o = 0; o < e; ++o) r.point((i = t[o])[0], i[1]);
								return void r.lineEnd()
							}
							a[0] += 2 * E
						}
						u.push(n = new Ve(i, t, null, !0)), s.push(n.o = new Ve(i, null, n, !1)), u.push(n = new Ve(a, t, null, !1)), s.push(n.o = new Ve(
							a, null, n, !0))
					}
				}), u.length) {
				for (s.sort(e), Re(u), Re(s), o = 0, a = s.length; o < a; ++o) s[o].e = n = !n;
				for (var c, l, h = u[0];;) {
					for (var p = h, f = !0; p.v;)
						if ((p = p.n) === h) return;
					c = p.z, r.lineStart();
					do {
						if (p.v = p.o.v = !0, p.e) {
							if (f)
								for (o = 0, a = c.length; o < a; ++o) r.point((l = c[o])[0], l[1]);
							else i(p.x, p.n.x, 1, r);
							p = p.n
						} else {
							if (f)
								for (c = p.p.z, o = c.length - 1; o >= 0; --o) r.point((l = c[o])[0], l[1]);
							else i(p.x, p.p.x, -1, r);
							p = p.p
						}
						c = (p = p.o).z, f = !f
					} while (!p.v);
					r.lineEnd()
				}
			}
		};

		function Re(t) {
			if (e = t.length) {
				for (var e, n, i = 0, r = t[0]; ++i < e;) r.n = n = t[i], n.p = r, r = n;
				r.n = n = t[0], n.p = r
			}
		}

		function ke(t) {
			return A(t[0]) <= T ? t[0] : Y(t[0]) * ((A(t[0]) + T) % N - T)
		}
		var Fe = function (t, e) {
				var n = ke(e),
					i = e[1],
					r = X(i),
					o = [X(n), -F(n), 0],
					a = 0,
					u = 0,
					s = new S;
				1 === r ? i = G + E : -1 === r && (i = -G - E);
				for (var c = 0, l = t.length; c < l; ++c)
					if (p = (h = t[c]).length)
						for (var h, p, f = h[p - 1], d = ke(f), g = f[1] / 2 + D, v = X(g), m = F(g), y = 0; y < p; ++y, d = P, v = M, m = x, f = b) {
							var b = h[y],
								P = ke(b),
								_ = b[1] / 2 + D,
								M = X(_),
								x = F(_),
								j = P - d,
								w = j >= 0 ? 1 : -1,
								O = w * j,
								L = O > T,
								C = v * M;
							if (s.add(k(C * w * X(O), m * x + C * F(O))), a += L ? j + w * N : j, L ^ d >= n ^ P >= n) {
								var z = Dt(Tt(f), Tt(b));
								Vt(z);
								var V = Dt(o, z);
								Vt(V);
								var A = (L ^ j >= 0 ? -1 : 1) * Q(V[2]);
								(i > A || i === A && (z[0] || z[1])) && (u += L ^ j >= 0 ? 1 : -1)
							}
						}
				return (a < -E || a < E && s < -I) ^ 1 & u
			},
			Be = function (t, e, n, i) {
				return function (r) {
					var o, a, u, s = e(r),
						c = Ne(),
						l = e(c),
						h = !1,
						p = {
							point: f,
							lineStart: g,
							lineEnd: v,
							polygonStart: function () {
								p.point = m, p.lineStart = y, p.lineEnd = b, a = [], o = []
							},
							polygonEnd: function () {
								p.point = f, p.lineStart = g, p.lineEnd = v, a = L(a);
								var t = Fe(o, i);
								a.length ? (h || (r.polygonStart(), h = !0), Ae(a, We, t, n, r)) : t && (h || (r.polygonStart(), h = !0), r.lineStart(), n(
									null, null, 1, r), r.lineEnd()), h && (r.polygonEnd(), h = !1), a = o = null
							},
							sphere: function () {
								r.polygonStart(), r.lineStart(), n(null, null, 1, r), r.lineEnd(), r.polygonEnd()
							}
						};

					function f(e, n) {
						t(e, n) && r.point(e, n)
					}

					function d(t, e) {
						s.point(t, e)
					}

					function g() {
						p.point = d, s.lineStart()
					}

					function v() {
						p.point = f, s.lineEnd()
					}

					function m(t, e) {
						u.push([t, e]), l.point(t, e)
					}

					function y() {
						l.lineStart(), u = []
					}

					function b() {
						m(u[0][0], u[0][1]), l.lineEnd();
						var t, e, n, i, s = l.clean(),
							p = c.result(),
							f = p.length;
						if (u.pop(), o.push(u), u = null, f)
							if (1 & s) {
								if ((e = (n = p[0]).length - 1) > 0) {
									for (h || (r.polygonStart(), h = !0), r.lineStart(), t = 0; t < e; ++t) r.point((i = n[t])[0], i[1]);
									r.lineEnd()
								}
							} else f > 1 && 2 & s && p.push(p.pop().concat(p.shift())), a.push(p.filter(He))
					}
					return p
				}
			};

		function He(t) {
			return t.length > 1
		}

		function We(t, e) {
			return ((t = t.x)[0] < 0 ? t[1] - G - E : G - t[1]) - ((e = e.x)[0] < 0 ? e[1] - G - E : G - e[1])
		}
		var Ze = Be(function () {
			return !0
		}, function (t) {
			var e, n = NaN,
				i = NaN,
				r = NaN;
			return {
				lineStart: function () {
					t.lineStart(), e = 1
				},
				point: function (o, a) {
					var u = o > 0 ? T : -T,
						s = A(o - n);
					A(s - T) < E ? (t.point(n, i = (i + a) / 2 > 0 ? G : -G), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(u, i), t.point(o, i),
						e = 0) : r !== u && s >= T && (A(n - r) < E && (n -= r * E), A(o - u) < E && (o -= u * E), i = function (t, e, n, i) {
						var r, o, a = X(t - n);
						return A(a) > E ? R((X(e) * (o = F(i)) * X(n) - X(i) * (r = F(e)) * X(t)) / (r * o * a)) : (e + i) / 2
					}(n, i, o, a), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(u, i), e = 0), t.point(n = o, i = a), r = u
				},
				lineEnd: function () {
					t.lineEnd(), n = i = NaN
				},
				clean: function () {
					return 2 - e
				}
			}
		}, function (t, e, n, i) {
			var r;
			if (null == t) r = n * G, i.point(-T, r), i.point(0, r), i.point(T, r), i.point(T, 0), i.point(T, -r), i.point(0, -r), i.point(-T, -
				r), i.point(-T, 0), i.point(-T, r);
			else if (A(t[0] - e[0]) > E) {
				var o = t[0] < e[0] ? T : -T;
				r = n * o / 2, i.point(-o, r), i.point(0, r), i.point(o, r)
			} else i.point(e[0], e[1])
		}, [-T, -G]);
		var qe = function (t) {
				var e = F(t),
					n = 6 * V,
					i = e > 0,
					r = A(e) > E;

				function o(t, n) {
					return F(t) * F(n) > e
				}

				function a(t, n, i) {
					var r = [1, 0, 0],
						o = Dt(Tt(t), Tt(n)),
						a = Gt(o, o),
						u = o[0],
						s = a - u * u;
					if (!s) return !i && t;
					var c = e * a / s,
						l = -e * u / s,
						h = Dt(r, o),
						p = zt(r, c);
					Nt(p, zt(o, l));
					var f = h,
						d = Gt(p, f),
						g = Gt(f, f),
						v = d * d - g * (Gt(p, p) - 1);
					if (!(v < 0)) {
						var m = U(v),
							y = zt(f, (-d - m) / g);
						if (Nt(y, p), y = It(y), !i) return y;
						var b, P = t[0],
							_ = n[0],
							S = t[1],
							M = n[1];
						_ < P && (b = P, P = _, _ = b);
						var x = _ - P,
							j = A(x - T) < E;
						if (!j && M < S && (b = S, S = M, M = b), j || x < E ? j ? S + M > 0 ^ y[1] < (A(y[0] - P) < E ? S : M) : S <= y[1] && y[1] <= M :
							x > T ^ (P <= y[0] && y[0] <= _)) {
							var w = zt(f, (-d + m) / g);
							return Nt(w, p), [y, It(w)]
						}
					}
				}

				function u(e, n) {
					var r = i ? t : T - t,
						o = 0;
					return e < -r ? o |= 1 : e > r && (o |= 2), n < -r ? o |= 4 : n > r && (o |= 8), o
				}
				return Be(o, function (t) {
					var e, n, s, c, l;
					return {
						lineStart: function () {
							c = s = !1, l = 1
						},
						point: function (h, p) {
							var f, d = [h, p],
								g = o(h, p),
								v = i ? g ? 0 : u(h, p) : g ? u(h + (h < 0 ? T : -T), p) : 0;
							if (!e && (c = s = g) && t.lineStart(), g !== s && (!(f = a(e, d)) || ze(e, f) || ze(d, f)) && (d[2] = 1), g !== s) l = 0, g ?
								(t.lineStart(), f = a(d, e), t.point(f[0], f[1])) : (f = a(e, d), t.point(f[0], f[1], 2), t.lineEnd()), e = f;
							else if (r && e && i ^ g) {
								var m;
								v & n || !(m = a(d, e, !0)) || (l = 0, i ? (t.lineStart(), t.point(m[0][0], m[0][1]), t.point(m[1][0], m[1][1]), t.lineEnd()) :
									(t.point(m[1][0], m[1][1]), t.lineEnd(), t.lineStart(), t.point(m[0][0], m[0][1], 3)))
							}!g || e && ze(e, d) || t.point(d[0], d[1]), e = d, s = g, n = v
						},
						lineEnd: function () {
							s && t.lineEnd(), e = null
						},
						clean: function () {
							return l | (c && s) << 1
						}
					}
				}, function (e, i, r, o) {
					Te(o, t, n, r, e, i)
				}, i ? [0, -t] : [-T, t - T])
			},
			Xe = function (t, e, n, i, r, o) {
				var a, u = t[0],
					s = t[1],
					c = 0,
					l = 1,
					h = e[0] - u,
					p = e[1] - s;
				if (a = n - u, h || !(a > 0)) {
					if (a /= h, h < 0) {
						if (a < c) return;
						a < l && (l = a)
					} else if (h > 0) {
						if (a > l) return;
						a > c && (c = a)
					}
					if (a = r - u, h || !(a < 0)) {
						if (a /= h, h < 0) {
							if (a > l) return;
							a > c && (c = a)
						} else if (h > 0) {
							if (a < c) return;
							a < l && (l = a)
						}
						if (a = i - s, p || !(a > 0)) {
							if (a /= p, p < 0) {
								if (a < c) return;
								a < l && (l = a)
							} else if (p > 0) {
								if (a > l) return;
								a > c && (c = a)
							}
							if (a = o - s, p || !(a < 0)) {
								if (a /= p, p < 0) {
									if (a > l) return;
									a > c && (c = a)
								} else if (p > 0) {
									if (a < c) return;
									a < l && (l = a)
								}
								return c > 0 && (t[0] = u + c * h, t[1] = s + c * p), l < 1 && (e[0] = u + l * h, e[1] = s + l * p), !0
							}
						}
					}
				}
			},
			Ye = 1e9,
			Ue = -Ye;

		function Je(t, e, n, i) {
			function r(r, o) {
				return t <= r && r <= n && e <= o && o <= i
			}

			function o(r, o, u, c) {
				var l = 0,
					h = 0;
				if (null == r || (l = a(r, u)) !== (h = a(o, u)) || s(r, o) < 0 ^ u > 0)
					do {
						c.point(0 === l || 3 === l ? t : n, l > 1 ? i : e)
					} while ((l = (l + u + 4) % 4) !== h);
				else c.point(o[0], o[1])
			}

			function a(i, r) {
				return A(i[0] - t) < E ? r > 0 ? 0 : 3 : A(i[0] - n) < E ? r > 0 ? 2 : 1 : A(i[1] - e) < E ? r > 0 ? 1 : 0 : r > 0 ? 3 : 2
			}

			function u(t, e) {
				return s(t.x, e.x)
			}

			function s(t, e) {
				var n = a(t, 1),
					i = a(e, 1);
				return n !== i ? n - i : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
			}
			return function (a) {
				var s, c, l, h, p, f, d, g, v, m, y, b = a,
					P = Ne(),
					_ = {
						point: S,
						lineStart: function () {
							_.point = M, c && c.push(l = []);
							m = !0, v = !1, d = g = NaN
						},
						lineEnd: function () {
							s && (M(h, p), f && v && P.rejoin(), s.push(P.result()));
							_.point = S, v && b.lineEnd()
						},
						polygonStart: function () {
							b = P, s = [], c = [], y = !0
						},
						polygonEnd: function () {
							var e = function () {
									for (var e = 0, n = 0, r = c.length; n < r; ++n)
										for (var o, a, u = c[n], s = 1, l = u.length, h = u[0], p = h[0], f = h[1]; s < l; ++s) o = p, a = f, h = u[s], p = h[0], f =
											h[1], a <= i ? f > i && (p - o) * (i - a) > (f - a) * (t - o) && ++e : f <= i && (p - o) * (i - a) < (f - a) * (t - o) &&
											--e;
									return e
								}(),
								n = y && e,
								r = (s = L(s)).length;
							(n || r) && (a.polygonStart(), n && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), r && Ae(s, u, e, o, a), a.polygonEnd());
							b = a, s = c = l = null
						}
					};

				function S(t, e) {
					r(t, e) && b.point(t, e)
				}

				function M(o, a) {
					var u = r(o, a);
					if (c && l.push([o, a]), m) h = o, p = a, f = u, m = !1, u && (b.lineStart(), b.point(o, a));
					else if (u && v) b.point(o, a);
					else {
						var s = [d = Math.max(Ue, Math.min(Ye, d)), g = Math.max(Ue, Math.min(Ye, g))],
							P = [o = Math.max(Ue, Math.min(Ye, o)), a = Math.max(Ue, Math.min(Ye, a))];
						Xe(s, P, t, e, n, i) ? (v || (b.lineStart(), b.point(s[0], s[1])), b.point(P[0], P[1]), u || b.lineEnd(), y = !1) : u && (b.lineStart(),
							b.point(o, a), y = !1)
					}
					d = o, g = a, v = u
				}
				return _
			}
		}
		var Ke, Qe, $e, tn, en = function () {
				var t, e, n, i = 0,
					r = 0,
					o = 960,
					a = 500;
				return n = {
					stream: function (n) {
						return t && e === n ? t : t = Je(i, r, o, a)(e = n)
					},
					extent: function (u) {
						return arguments.length ? (i = +u[0][0], r = +u[0][1], o = +u[1][0], a = +u[1][1], t = e = null, n) : [
							[i, r],
							[o, a]
						]
					}
				}
			},
			nn = {
				sphere: tt,
				point: tt,
				lineStart: function () {
					nn.point = on, nn.lineEnd = rn
				},
				lineEnd: tt,
				polygonStart: tt,
				polygonEnd: tt
			};

		function rn() {
			nn.point = nn.lineEnd = tt
		}

		function on(t, e) {
			Qe = t *= V, $e = X(e *= V), tn = F(e), nn.point = an
		}

		function an(t, e) {
			t *= V;
			var n = X(e *= V),
				i = F(e),
				r = A(t - Qe),
				o = F(r),
				a = i * X(r),
				u = tn * n - $e * i * o,
				s = $e * n + tn * i * o;
			Ke.add(k(U(a * a + u * u), s)), Qe = t, $e = n, tn = i
		}
		var un = function (t) {
				return Ke = new S, ht(t, nn), +Ke
			},
			sn = [null, null],
			cn = {
				type: "LineString",
				coordinates: sn
			},
			ln = function (t, e) {
				return sn[0] = t, sn[1] = e, un(cn)
			},
			hn = {
				Feature: function (t, e) {
					return fn(t.geometry, e)
				},
				FeatureCollection: function (t, e) {
					for (var n = t.features, i = -1, r = n.length; ++i < r;)
						if (fn(n[i].geometry, e)) return !0;
					return !1
				}
			},
			pn = {
				Sphere: function () {
					return !0
				},
				Point: function (t, e) {
					return dn(t.coordinates, e)
				},
				MultiPoint: function (t, e) {
					for (var n = t.coordinates, i = -1, r = n.length; ++i < r;)
						if (dn(n[i], e)) return !0;
					return !1
				},
				LineString: function (t, e) {
					return gn(t.coordinates, e)
				},
				MultiLineString: function (t, e) {
					for (var n = t.coordinates, i = -1, r = n.length; ++i < r;)
						if (gn(n[i], e)) return !0;
					return !1
				},
				Polygon: function (t, e) {
					return vn(t.coordinates, e)
				},
				MultiPolygon: function (t, e) {
					for (var n = t.coordinates, i = -1, r = n.length; ++i < r;)
						if (vn(n[i], e)) return !0;
					return !1
				},
				GeometryCollection: function (t, e) {
					for (var n = t.geometries, i = -1, r = n.length; ++i < r;)
						if (fn(n[i], e)) return !0;
					return !1
				}
			};

		function fn(t, e) {
			return !(!t || !pn.hasOwnProperty(t.type)) && pn[t.type](t, e)
		}

		function dn(t, e) {
			return 0 === ln(t, e)
		}

		function gn(t, e) {
			for (var n, i, r, o = 0, a = t.length; o < a; o++) {
				if (0 === (i = ln(t[o], e))) return !0;
				if (o > 0 && (r = ln(t[o], t[o - 1])) > 0 && n <= r && i <= r && (n + i - r) * (1 - Math.pow((n - i) / r, 2)) < I * r) return !0;
				n = i
			}
			return !1
		}

		function vn(t, e) {
			return !!Fe(t.map(mn), yn(e))
		}

		function mn(t) {
			return (t = t.map(yn)).pop(), t
		}

		function yn(t) {
			return [t[0] * V, t[1] * V]
		}
		var bn = function (t, e) {
			return (t && hn.hasOwnProperty(t.type) ? hn[t.type] : fn)(t, e)
		};

		function Pn(t, e, n) {
			var i = C(t, e - E, n).concat(e);
			return function (t) {
				return i.map(function (e) {
					return [t, e]
				})
			}
		}

		function _n(t, e, n) {
			var i = C(t, e - E, n).concat(e);
			return function (t) {
				return i.map(function (e) {
					return [e, t]
				})
			}
		}

		function Sn() {
			var t, e, n, i, r, o, a, u, s, c, l, h, p = 10,
				f = p,
				d = 90,
				g = 360,
				v = 2.5;

			function m() {
				return {
					type: "MultiLineString",
					coordinates: y()
				}
			}

			function y() {
				return C(B(i / d) * d, n, d).map(l).concat(C(B(u / g) * g, a, g).map(h)).concat(C(B(e / p) * p, t, p).filter(function (t) {
					return A(t % d) > E
				}).map(s)).concat(C(B(o / f) * f, r, f).filter(function (t) {
					return A(t % g) > E
				}).map(c))
			}
			return m.lines = function () {
				return y().map(function (t) {
					return {
						type: "LineString",
						coordinates: t
					}
				})
			}, m.outline = function () {
				return {
					type: "Polygon",
					coordinates: [l(i).concat(h(a).slice(1), l(n).reverse().slice(1), h(u).reverse().slice(1))]
				}
			}, m.extent = function (t) {
				return arguments.length ? m.extentMajor(t).extentMinor(t) : m.extentMinor()
			}, m.extentMajor = function (t) {
				return arguments.length ? (i = +t[0][0], n = +t[1][0], u = +t[0][1], a = +t[1][1], i > n && (t = i, i = n, n = t), u > a && (t = u,
					u = a, a = t), m.precision(v)) : [
					[i, u],
					[n, a]
				]
			}, m.extentMinor = function (n) {
				return arguments.length ? (e = +n[0][0], t = +n[1][0], o = +n[0][1], r = +n[1][1], e > t && (n = e, e = t, t = n), o > r && (n = o,
					o = r, r = n), m.precision(v)) : [
					[e, o],
					[t, r]
				]
			}, m.step = function (t) {
				return arguments.length ? m.stepMajor(t).stepMinor(t) : m.stepMinor()
			}, m.stepMajor = function (t) {
				return arguments.length ? (d = +t[0], g = +t[1], m) : [d, g]
			}, m.stepMinor = function (t) {
				return arguments.length ? (p = +t[0], f = +t[1], m) : [p, f]
			}, m.precision = function (p) {
				return arguments.length ? (v = +p, s = Pn(o, r, 90), c = _n(e, t, v), l = Pn(u, a, 90), h = _n(i, n, v), m) : v
			}, m.extentMajor([
				[-180, -90 + E],
				[180, 90 - E]
			]).extentMinor([
				[-180, -80 - E],
				[180, 80 + E]
			])
		}

		function Mn() {
			return Sn()()
		}
		var xn, jn, wn, On, Ln = function (t, e) {
				var n = t[0] * V,
					i = t[1] * V,
					r = e[0] * V,
					o = e[1] * V,
					a = F(i),
					u = X(i),
					s = F(o),
					c = X(o),
					l = a * F(n),
					h = a * X(n),
					p = s * F(r),
					f = s * X(r),
					d = 2 * Q(U($(o - i) + a * s * $(r - n))),
					g = X(d),
					v = d ? function (t) {
						var e = X(t *= d) / g,
							n = X(d - t) / g,
							i = n * l + e * p,
							r = n * h + e * f,
							o = n * u + e * c;
						return [k(r, i) * z, k(o, U(i * i + r * r)) * z]
					} : function () {
						return [n * z, i * z]
					};
				return v.distance = d, v
			},
			Cn = function (t) {
				return t
			},
			En = new S,
			In = new S,
			Tn = {
				point: tt,
				lineStart: tt,
				lineEnd: tt,
				polygonStart: function () {
					Tn.lineStart = Gn, Tn.lineEnd = zn
				},
				polygonEnd: function () {
					Tn.lineStart = Tn.lineEnd = Tn.point = tt, En.add(A(In)), In = new S
				},
				result: function () {
					var t = En / 2;
					return En = new S, t
				}
			};

		function Gn() {
			Tn.point = Dn
		}

		function Dn(t, e) {
			Tn.point = Nn, xn = wn = t, jn = On = e
		}

		function Nn(t, e) {
			In.add(On * t - wn * e), wn = t, On = e
		}

		function zn() {
			Nn(xn, jn)
		}
		var Vn = Tn,
			An = 1 / 0,
			Rn = An,
			kn = -An,
			Fn = kn;
		var Bn, Hn, Wn, Zn, qn = {
				point: function (t, e) {
					t < An && (An = t);
					t > kn && (kn = t);
					e < Rn && (Rn = e);
					e > Fn && (Fn = e)
				},
				lineStart: tt,
				lineEnd: tt,
				polygonStart: tt,
				polygonEnd: tt,
				result: function () {
					var t = [
						[An, Rn],
						[kn, Fn]
					];
					return kn = Fn = -(Rn = An = 1 / 0), t
				}
			},
			Xn = 0,
			Yn = 0,
			Un = 0,
			Jn = 0,
			Kn = 0,
			Qn = 0,
			$n = 0,
			ti = 0,
			ei = 0,
			ni = {
				point: ii,
				lineStart: ri,
				lineEnd: ui,
				polygonStart: function () {
					ni.lineStart = si, ni.lineEnd = ci
				},
				polygonEnd: function () {
					ni.point = ii, ni.lineStart = ri, ni.lineEnd = ui
				},
				result: function () {
					var t = ei ? [$n / ei, ti / ei] : Qn ? [Jn / Qn, Kn / Qn] : Un ? [Xn / Un, Yn / Un] : [NaN, NaN];
					return Xn = Yn = Un = Jn = Kn = Qn = $n = ti = ei = 0, t
				}
			};

		function ii(t, e) {
			Xn += t, Yn += e, ++Un
		}

		function ri() {
			ni.point = oi
		}

		function oi(t, e) {
			ni.point = ai, ii(Wn = t, Zn = e)
		}

		function ai(t, e) {
			var n = t - Wn,
				i = e - Zn,
				r = U(n * n + i * i);
			Jn += r * (Wn + t) / 2, Kn += r * (Zn + e) / 2, Qn += r, ii(Wn = t, Zn = e)
		}

		function ui() {
			ni.point = ii
		}

		function si() {
			ni.point = li
		}

		function ci() {
			hi(Bn, Hn)
		}

		function li(t, e) {
			ni.point = hi, ii(Bn = Wn = t, Hn = Zn = e)
		}

		function hi(t, e) {
			var n = t - Wn,
				i = e - Zn,
				r = U(n * n + i * i);
			Jn += r * (Wn + t) / 2, Kn += r * (Zn + e) / 2, Qn += r, $n += (r = Zn * t - Wn * e) * (Wn + t), ti += r * (Zn + e), ei += 3 * r, ii(
				Wn = t, Zn = e)
		}
		var pi = ni;

		function fi(t) {
			this._context = t
		}
		fi.prototype = {
			_radius: 4.5,
			pointRadius: function (t) {
				return this._radius = t, this
			},
			polygonStart: function () {
				this._line = 0
			},
			polygonEnd: function () {
				this._line = NaN
			},
			lineStart: function () {
				this._point = 0
			},
			lineEnd: function () {
				0 === this._line && this._context.closePath(), this._point = NaN
			},
			point: function (t, e) {
				switch (this._point) {
				case 0:
					this._context.moveTo(t, e), this._point = 1;
					break;
				case 1:
					this._context.lineTo(t, e);
					break;
				default:
					this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, N)
				}
			},
			result: tt
		};
		var di, gi, vi, mi, yi, bi = new S,
			Pi = {
				point: tt,
				lineStart: function () {
					Pi.point = _i
				},
				lineEnd: function () {
					di && Si(gi, vi), Pi.point = tt
				},
				polygonStart: function () {
					di = !0
				},
				polygonEnd: function () {
					di = null
				},
				result: function () {
					var t = +bi;
					return bi = new S, t
				}
			};

		function _i(t, e) {
			Pi.point = Si, gi = mi = t, vi = yi = e
		}

		function Si(t, e) {
			mi -= t, yi -= e, bi.add(U(mi * mi + yi * yi)), mi = t, yi = e
		}
		var Mi = Pi;

		function xi() {
			this._string = []
		}

		function ji(t) {
			return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
		}
		xi.prototype = {
			_radius: 4.5,
			_circle: ji(4.5),
			pointRadius: function (t) {
				return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
			},
			polygonStart: function () {
				this._line = 0
			},
			polygonEnd: function () {
				this._line = NaN
			},
			lineStart: function () {
				this._point = 0
			},
			lineEnd: function () {
				0 === this._line && this._string.push("Z"), this._point = NaN
			},
			point: function (t, e) {
				switch (this._point) {
				case 0:
					this._string.push("M", t, ",", e), this._point = 1;
					break;
				case 1:
					this._string.push("L", t, ",", e);
					break;
				default:
					null == this._circle && (this._circle = ji(this._radius)), this._string.push("M", t, ",", e, this._circle)
				}
			},
			result: function () {
				if (this._string.length) {
					var t = this._string.join("");
					return this._string = [], t
				}
				return null
			}
		};
		var wi = function (t, e) {
				var n, i, r = 4.5;

				function o(t) {
					return t && ("function" == typeof r && i.pointRadius(+r.apply(this, arguments)), ht(t, n(i))), i.result()
				}
				return o.area = function (t) {
					return ht(t, n(Vn)), Vn.result()
				}, o.measure = function (t) {
					return ht(t, n(Mi)), Mi.result()
				}, o.bounds = function (t) {
					return ht(t, n(qn)), qn.result()
				}, o.centroid = function (t) {
					return ht(t, n(pi)), pi.result()
				}, o.projection = function (e) {
					return arguments.length ? (n = null == e ? (t = null, Cn) : (t = e).stream, o) : t
				}, o.context = function (t) {
					return arguments.length ? (i = null == t ? (e = null, new xi) : new fi(e = t), "function" != typeof r && i.pointRadius(r), o) : e
				}, o.pointRadius = function (t) {
					return arguments.length ? (r = "function" == typeof t ? t : (i.pointRadius(+t), +t), o) : r
				}, o.projection(t).context(e)
			},
			Oi = function (t) {
				return {
					stream: Li(t)
				}
			};

		function Li(t) {
			return function (e) {
				var n = new Ci;
				for (var i in t) n[i] = t[i];
				return n.stream = e, n
			}
		}

		function Ci() {}

		function Ei(t, e, n) {
			var i = t.clipExtent && t.clipExtent();
			return t.scale(150).translate([0, 0]), null != i && t.clipExtent(null), ht(n, t.stream(qn)), e(qn.result()), null != i && t.clipExtent(
				i), t
		}

		function Ii(t, e, n) {
			return Ei(t, function (n) {
				var i = e[1][0] - e[0][0],
					r = e[1][1] - e[0][1],
					o = Math.min(i / (n[1][0] - n[0][0]), r / (n[1][1] - n[0][1])),
					a = +e[0][0] + (i - o * (n[1][0] + n[0][0])) / 2,
					u = +e[0][1] + (r - o * (n[1][1] + n[0][1])) / 2;
				t.scale(150 * o).translate([a, u])
			}, n)
		}

		function Ti(t, e, n) {
			return Ii(t, [
				[0, 0], e
			], n)
		}

		function Gi(t, e, n) {
			return Ei(t, function (n) {
				var i = +e,
					r = i / (n[1][0] - n[0][0]),
					o = (i - r * (n[1][0] + n[0][0])) / 2,
					a = -r * n[0][1];
				t.scale(150 * r).translate([o, a])
			}, n)
		}

		function Di(t, e, n) {
			return Ei(t, function (n) {
				var i = +e,
					r = i / (n[1][1] - n[0][1]),
					o = -r * n[0][0],
					a = (i - r * (n[1][1] + n[0][1])) / 2;
				t.scale(150 * r).translate([o, a])
			}, n)
		}
		Ci.prototype = {
			constructor: Ci,
			point: function (t, e) {
				this.stream.point(t, e)
			},
			sphere: function () {
				this.stream.sphere()
			},
			lineStart: function () {
				this.stream.lineStart()
			},
			lineEnd: function () {
				this.stream.lineEnd()
			},
			polygonStart: function () {
				this.stream.polygonStart()
			},
			polygonEnd: function () {
				this.stream.polygonEnd()
			}
		};
		var Ni = 16,
			zi = F(30 * V),
			Vi = function (t, e) {
				return +e ? function (t, e) {
					function n(i, r, o, a, u, s, c, l, h, p, f, d, g, v) {
						var m = c - i,
							y = l - r,
							b = m * m + y * y;
						if (b > 4 * e && g--) {
							var P = a + p,
								_ = u + f,
								S = s + d,
								M = U(P * P + _ * _ + S * S),
								x = Q(S /= M),
								j = A(A(S) - 1) < E || A(o - h) < E ? (o + h) / 2 : k(_, P),
								w = t(j, x),
								O = w[0],
								L = w[1],
								C = O - i,
								I = L - r,
								T = y * C - m * I;
							(T * T / b > e || A((m * C + y * I) / b - .5) > .3 || a * p + u * f + s * d < zi) && (n(i, r, o, a, u, s, O, L, j, P /= M, _ /=
								M, S, g, v), v.point(O, L), n(O, L, j, P, _, S, c, l, h, p, f, d, g, v))
						}
					}
					return function (e) {
						var i, r, o, a, u, s, c, l, h, p, f, d, g = {
							point: v,
							lineStart: m,
							lineEnd: b,
							polygonStart: function () {
								e.polygonStart(), g.lineStart = P
							},
							polygonEnd: function () {
								e.polygonEnd(), g.lineStart = m
							}
						};

						function v(n, i) {
							n = t(n, i), e.point(n[0], n[1])
						}

						function m() {
							l = NaN, g.point = y, e.lineStart()
						}

						function y(i, r) {
							var o = Tt([i, r]),
								a = t(i, r);
							n(l, h, c, p, f, d, l = a[0], h = a[1], c = i, p = o[0], f = o[1], d = o[2], Ni, e), e.point(l, h)
						}

						function b() {
							g.point = v, e.lineEnd()
						}

						function P() {
							m(), g.point = _, g.lineEnd = S
						}

						function _(t, e) {
							y(i = t, e), r = l, o = h, a = p, u = f, s = d, g.point = y
						}

						function S() {
							n(l, h, c, p, f, d, r, o, i, a, u, s, Ni, e), g.lineEnd = b, b()
						}
						return g
					}
				}(t, e) : function (t) {
					return Li({
						point: function (e, n) {
							e = t(e, n), this.stream.point(e[0], e[1])
						}
					})
				}(t)
			};
		var Ai = Li({
			point: function (t, e) {
				this.stream.point(t * V, e * V)
			}
		});

		function Ri(t, e, n, i, r, o) {
			if (!o) return function (t, e, n, i, r) {
				function o(o, a) {
					return [e + t * (o *= i), n - t * (a *= r)]
				}
				return o.invert = function (o, a) {
					return [(o - e) / t * i, (n - a) / t * r]
				}, o
			}(t, e, n, i, r);
			var a = F(o),
				u = X(o),
				s = a * t,
				c = u * t,
				l = a / t,
				h = u / t,
				p = (u * n - a * e) / t,
				f = (u * e + a * n) / t;

			function d(t, o) {
				return [s * (t *= i) - c * (o *= r) + e, n - c * t - s * o]
			}
			return d.invert = function (t, e) {
				return [i * (l * t - h * e + p), r * (f - h * t - l * e)]
			}, d
		}

		function ki(t) {
			return Fi(function () {
				return t
			})()
		}

		function Fi(t) {
			var e, n, i, r, o, a, u, s, c, l, h = 150,
				p = 480,
				f = 250,
				d = 0,
				g = 0,
				v = 0,
				m = 0,
				y = 0,
				b = 0,
				P = 1,
				_ = 1,
				S = null,
				M = Ze,
				x = null,
				j = Cn,
				w = .5;

			function O(t) {
				return s(t[0] * V, t[1] * V)
			}

			function L(t) {
				return (t = s.invert(t[0], t[1])) && [t[0] * z, t[1] * z]
			}

			function C() {
				var t = Ri(h, 0, 0, P, _, b).apply(null, e(d, g)),
					i = Ri(h, p - t[0], f - t[1], P, _, b);
				return n = Oe(v, m, y), u = je(e, i), s = je(n, u), a = Vi(u, w), E()
			}

			function E() {
				return c = l = null, O
			}
			return O.stream = function (t) {
					return c && l === t ? c : c = Ai(function (t) {
						return Li({
							point: function (e, n) {
								var i = t(e, n);
								return this.stream.point(i[0], i[1])
							}
						})
					}(n)(M(a(j(l = t)))))
				}, O.preclip = function (t) {
					return arguments.length ? (M = t, S = void 0, E()) : M
				}, O.postclip = function (t) {
					return arguments.length ? (j = t, x = i = r = o = null, E()) : j
				}, O.clipAngle = function (t) {
					return arguments.length ? (M = +t ? qe(S = t * V) : (S = null, Ze), E()) : S * z
				}, O.clipExtent = function (t) {
					return arguments.length ? (j = null == t ? (x = i = r = o = null, Cn) : Je(x = +t[0][0], i = +t[0][1], r = +t[1][0], o = +t[1][1]),
						E()) : null == x ? null : [
						[x, i],
						[r, o]
					]
				}, O.scale = function (t) {
					return arguments.length ? (h = +t, C()) : h
				}, O.translate = function (t) {
					return arguments.length ? (p = +t[0], f = +t[1], C()) : [p, f]
				}, O.center = function (t) {
					return arguments.length ? (d = t[0] % 360 * V, g = t[1] % 360 * V, C()) : [d * z, g * z]
				}, O.rotate = function (t) {
					return arguments.length ? (v = t[0] % 360 * V, m = t[1] % 360 * V, y = t.length > 2 ? t[2] % 360 * V : 0, C()) : [v * z, m * z, y *
						z
					]
				}, O.angle = function (t) {
					return arguments.length ? (b = t % 360 * V, C()) : b * z
				}, O.reflectX = function (t) {
					return arguments.length ? (P = t ? -1 : 1, C()) : P < 0
				}, O.reflectY = function (t) {
					return arguments.length ? (_ = t ? -1 : 1, C()) : _ < 0
				}, O.precision = function (t) {
					return arguments.length ? (a = Vi(u, w = t * t), E()) : U(w)
				}, O.fitExtent = function (t, e) {
					return Ii(O, t, e)
				}, O.fitSize = function (t, e) {
					return Ti(O, t, e)
				}, O.fitWidth = function (t, e) {
					return Gi(O, t, e)
				}, O.fitHeight = function (t, e) {
					return Di(O, t, e)
				},
				function () {
					return e = t.apply(this, arguments), O.invert = e.invert && L, C()
				}
		}

		function Bi(t) {
			var e = 0,
				n = T / 3,
				i = Fi(t),
				r = i(e, n);
			return r.parallels = function (t) {
				return arguments.length ? i(e = t[0] * V, n = t[1] * V) : [e * z, n * z]
			}, r
		}

		function Hi(t, e) {
			var n = X(t),
				i = (n + X(e)) / 2;
			if (A(i) < E) return function (t) {
				var e = F(t);

				function n(t, n) {
					return [t * e, X(n) / e]
				}
				return n.invert = function (t, n) {
					return [t / e, Q(n * e)]
				}, n
			}(t);
			var r = 1 + n * (2 * i - n),
				o = U(r) / i;

			function a(t, e) {
				var n = U(r - 2 * i * X(e)) / i;
				return [n * X(t *= i), o - n * F(t)]
			}
			return a.invert = function (t, e) {
				var n = o - e,
					a = k(t, A(n)) * Y(n);
				return n * i < 0 && (a -= T * Y(t) * Y(n)), [a / i, Q((r - (t * t + n * n) * i * i) / (2 * i))]
			}, a
		}
		var Wi = function () {
				return Bi(Hi).scale(155.424).center([0, 33.6442])
			},
			Zi = function () {
				return Wi().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
			};
		var qi = function () {
			var t, e, n, i, r, o, a = Zi(),
				u = Wi().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
				s = Wi().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
				c = {
					point: function (t, e) {
						o = [t, e]
					}
				};

			function l(t) {
				var e = t[0],
					a = t[1];
				return o = null, n.point(e, a), o || (i.point(e, a), o) || (r.point(e, a), o)
			}

			function h() {
				return t = e = null, l
			}
			return l.invert = function (t) {
				var e = a.scale(),
					n = a.translate(),
					i = (t[0] - n[0]) / e,
					r = (t[1] - n[1]) / e;
				return (r >= .12 && r < .234 && i >= -.425 && i < -.214 ? u : r >= .166 && r < .234 && i >= -.214 && i < -.115 ? s : a).invert(t)
			}, l.stream = function (n) {
				return t && e === n ? t : t = function (t) {
					var e = t.length;
					return {
						point: function (n, i) {
							for (var r = -1; ++r < e;) t[r].point(n, i)
						},
						sphere: function () {
							for (var n = -1; ++n < e;) t[n].sphere()
						},
						lineStart: function () {
							for (var n = -1; ++n < e;) t[n].lineStart()
						},
						lineEnd: function () {
							for (var n = -1; ++n < e;) t[n].lineEnd()
						},
						polygonStart: function () {
							for (var n = -1; ++n < e;) t[n].polygonStart()
						},
						polygonEnd: function () {
							for (var n = -1; ++n < e;) t[n].polygonEnd()
						}
					}
				}([a.stream(e = n), u.stream(n), s.stream(n)])
			}, l.precision = function (t) {
				return arguments.length ? (a.precision(t), u.precision(t), s.precision(t), h()) : a.precision()
			}, l.scale = function (t) {
				return arguments.length ? (a.scale(t), u.scale(.35 * t), s.scale(t), l.translate(a.translate())) : a.scale()
			}, l.translate = function (t) {
				if (!arguments.length) return a.translate();
				var e = a.scale(),
					o = +t[0],
					l = +t[1];
				return n = a.translate(t).clipExtent([
					[o - .455 * e, l - .238 * e],
					[o + .455 * e, l + .238 * e]
				]).stream(c), i = u.translate([o - .307 * e, l + .201 * e]).clipExtent([
					[o - .425 * e + E, l + .12 * e + E],
					[o - .214 * e - E, l + .234 * e - E]
				]).stream(c), r = s.translate([o - .205 * e, l + .212 * e]).clipExtent([
					[o - .214 * e + E, l + .166 * e + E],
					[o - .115 * e - E, l + .234 * e - E]
				]).stream(c), h()
			}, l.fitExtent = function (t, e) {
				return Ii(l, t, e)
			}, l.fitSize = function (t, e) {
				return Ti(l, t, e)
			}, l.fitWidth = function (t, e) {
				return Gi(l, t, e)
			}, l.fitHeight = function (t, e) {
				return Di(l, t, e)
			}, l.scale(1070)
		};

		function Xi(t) {
			return function (e, n) {
				var i = F(e),
					r = F(n),
					o = t(i * r);
				return o === 1 / 0 ? [2, 0] : [o * r * X(e), o * X(n)]
			}
		}

		function Yi(t) {
			return function (e, n) {
				var i = U(e * e + n * n),
					r = t(i),
					o = X(r),
					a = F(r);
				return [k(e * o, i * a), Q(i && n * o / i)]
			}
		}
		var Ui = Xi(function (t) {
			return U(2 / (1 + t))
		});
		Ui.invert = Yi(function (t) {
			return 2 * Q(t / 2)
		});
		var Ji = function () {
				return ki(Ui).scale(124.75).clipAngle(179.999)
			},
			Ki = Xi(function (t) {
				return (t = K(t)) && t / X(t)
			});
		Ki.invert = Yi(function (t) {
			return t
		});
		var Qi = function () {
			return ki(Ki).scale(79.4188).clipAngle(179.999)
		};

		function $i(t, e) {
			return [t, Z(J((G + e) / 2))]
		}
		$i.invert = function (t, e) {
			return [t, 2 * R(H(e)) - G]
		};
		var tr = function () {
			return er($i).scale(961 / N)
		};

		function er(t) {
			var e, n, i, r = ki(t),
				o = r.center,
				a = r.scale,
				u = r.translate,
				s = r.clipExtent,
				c = null;

			function l() {
				var o = T * a(),
					u = r(Ie(r.rotate()).invert([0, 0]));
				return s(null == c ? [
					[u[0] - o, u[1] - o],
					[u[0] + o, u[1] + o]
				] : t === $i ? [
					[Math.max(u[0] - o, c), e],
					[Math.min(u[0] + o, n), i]
				] : [
					[c, Math.max(u[1] - o, e)],
					[n, Math.min(u[1] + o, i)]
				])
			}
			return r.scale = function (t) {
				return arguments.length ? (a(t), l()) : a()
			}, r.translate = function (t) {
				return arguments.length ? (u(t), l()) : u()
			}, r.center = function (t) {
				return arguments.length ? (o(t), l()) : o()
			}, r.clipExtent = function (t) {
				return arguments.length ? (null == t ? c = e = n = i = null : (c = +t[0][0], e = +t[0][1], n = +t[1][0], i = +t[1][1]), l()) : null ==
					c ? null : [
						[c, e],
						[n, i]
					]
			}, l()
		}

		function nr(t) {
			return J((G + t) / 2)
		}

		function ir(t, e) {
			var n = F(t),
				i = t === e ? X(t) : Z(n / F(e)) / Z(nr(e) / nr(t)),
				r = n * q(nr(t), i) / i;
			if (!i) return $i;

			function o(t, e) {
				r > 0 ? e < -G + E && (e = -G + E) : e > G - E && (e = G - E);
				var n = r / q(nr(e), i);
				return [n * X(i * t), r - n * F(i * t)]
			}
			return o.invert = function (t, e) {
				var n = r - e,
					o = Y(i) * U(t * t + n * n),
					a = k(t, A(n)) * Y(n);
				return n * i < 0 && (a -= T * Y(t) * Y(n)), [a / i, 2 * R(q(r / o, 1 / i)) - G]
			}, o
		}
		var rr = function () {
			return Bi(ir).scale(109.5).parallels([30, 30])
		};

		function or(t, e) {
			return [t, e]
		}
		or.invert = or;
		var ar = function () {
			return ki(or).scale(152.63)
		};

		function ur(t, e) {
			var n = F(t),
				i = t === e ? X(t) : (n - F(e)) / (e - t),
				r = n / i + t;
			if (A(i) < E) return or;

			function o(t, e) {
				var n = r - e,
					o = i * t;
				return [n * X(o), r - n * F(o)]
			}
			return o.invert = function (t, e) {
				var n = r - e,
					o = k(t, A(n)) * Y(n);
				return n * i < 0 && (o -= T * Y(t) * Y(n)), [o / i, r - Y(i) * U(t * t + n * n)]
			}, o
		}
		var sr = function () {
				return Bi(ur).scale(131.154).center([0, 13.9389])
			},
			cr = 1.340264,
			lr = -.081106,
			hr = 893e-6,
			pr = .003796,
			fr = U(3) / 2;

		function dr(t, e) {
			var n = Q(fr * X(e)),
				i = n * n,
				r = i * i * i;
			return [t * F(n) / (fr * (cr + 3 * lr * i + r * (7 * hr + 9 * pr * i))), n * (cr + lr * i + r * (hr + pr * i))]
		}
		dr.invert = function (t, e) {
			for (var n, i = e, r = i * i, o = r * r * r, a = 0; a < 12 && (o = (r = (i -= n = (i * (cr + lr * r + o * (hr + pr * r)) - e) / (cr +
					3 * lr * r + o * (7 * hr + 9 * pr * r))) * i) * r * r, !(A(n) < I)); ++a);
			return [fr * t * (cr + 3 * lr * r + o * (7 * hr + 9 * pr * r)) / F(i), Q(X(i) / fr)]
		};
		var gr = function () {
			return ki(dr).scale(177.158)
		};

		function vr(t, e) {
			var n = F(e),
				i = F(t) * n;
			return [n * X(t) / i, X(e) / i]
		}
		vr.invert = Yi(R);
		var mr = function () {
				return ki(vr).scale(144.049).clipAngle(60)
			},
			yr = function () {
				var t, e, n, i, r, o, a, u = 1,
					s = 0,
					c = 0,
					l = 1,
					h = 1,
					p = 0,
					f = null,
					d = 1,
					g = 1,
					v = Li({
						point: function (t, e) {
							var n = b([t, e]);
							this.stream.point(n[0], n[1])
						}
					}),
					m = Cn;

				function y() {
					return d = u * l, g = u * h, o = a = null, b
				}

				function b(n) {
					var i = n[0] * d,
						r = n[1] * g;
					if (p) {
						var o = r * t - i * e;
						i = i * t + r * e, r = o
					}
					return [i + s, r + c]
				}
				return b.invert = function (n) {
					var i = n[0] - s,
						r = n[1] - c;
					if (p) {
						var o = r * t + i * e;
						i = i * t - r * e, r = o
					}
					return [i / d, r / g]
				}, b.stream = function (t) {
					return o && a === t ? o : o = v(m(a = t))
				}, b.postclip = function (t) {
					return arguments.length ? (m = t, f = n = i = r = null, y()) : m
				}, b.clipExtent = function (t) {
					return arguments.length ? (m = null == t ? (f = n = i = r = null, Cn) : Je(f = +t[0][0], n = +t[0][1], i = +t[1][0], r = +t[1][1]),
						y()) : null == f ? null : [
						[f, n],
						[i, r]
					]
				}, b.scale = function (t) {
					return arguments.length ? (u = +t, y()) : u
				}, b.translate = function (t) {
					return arguments.length ? (s = +t[0], c = +t[1], y()) : [s, c]
				}, b.angle = function (n) {
					return arguments.length ? (e = X(p = n % 360 * V), t = F(p), y()) : p * z
				}, b.reflectX = function (t) {
					return arguments.length ? (l = t ? -1 : 1, y()) : l < 0
				}, b.reflectY = function (t) {
					return arguments.length ? (h = t ? -1 : 1, y()) : h < 0
				}, b.fitExtent = function (t, e) {
					return Ii(b, t, e)
				}, b.fitSize = function (t, e) {
					return Ti(b, t, e)
				}, b.fitWidth = function (t, e) {
					return Gi(b, t, e)
				}, b.fitHeight = function (t, e) {
					return Di(b, t, e)
				}, b
			};

		function br(t, e) {
			var n = e * e,
				i = n * n;
			return [t * (.8707 - .131979 * n + i * (i * (.003971 * n - .001529 * i) - .013791)), e * (1.007226 + n * (.015085 + i * (.028874 * n -
				.044475 - .005916 * i)))]
		}
		br.invert = function (t, e) {
			var n, i = e,
				r = 25;
			do {
				var o = i * i,
					a = o * o;
				i -= n = (i * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - e) / (1.007226 + o * (.045255 + a * (.259866 *
					o - .311325 - .005916 * 11 * a)))
			} while (A(n) > E && --r > 0);
			return [t / (.8707 + (o = i * i) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), i]
		};
		var Pr = function () {
			return ki(br).scale(175.295)
		};

		function _r(t, e) {
			return [F(e) * X(t), X(e)]
		}
		_r.invert = Yi(Q);
		var Sr = function () {
			return ki(_r).scale(249.5).clipAngle(90 + E)
		};

		function Mr(t, e) {
			var n = F(e),
				i = 1 + F(t) * n;
			return [n * X(t) / i, X(e) / i]
		}
		Mr.invert = Yi(function (t) {
			return 2 * R(t)
		});
		var xr = function () {
			return ki(Mr).scale(250).clipAngle(142)
		};

		function jr(t, e) {
			return [Z(J((G + e) / 2)), -t]
		}
		jr.invert = function (t, e) {
			return [-e, 2 * R(H(t)) - G]
		};
		var wr = function () {
				var t = er(jr),
					e = t.center,
					n = t.rotate;
				return t.center = function (t) {
					return arguments.length ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
				}, t.rotate = function (t) {
					return arguments.length ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
				}, n([0, 0, 90]).scale(159.155)
			},
			Or = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapSeriesDataItem", e.values.value = {}, e.applyTheme(), e
				}
				return Object(c.c)(e, t), Object.defineProperty(e.prototype, "value", {
					get: function () {
						return this.values.value.value
					},
					set: function (t) {
						this.setValue("value", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "zoomLevel", {
					get: function () {
						return this.properties.zoomLevel
					},
					set: function (t) {
						this.setProperty("zoomLevel", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "zoomGeoPoint", {
					get: function () {
						return this.properties.zoomGeoPoint
					},
					set: function (t) {
						this.setProperty("zoomGeoPoint", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "east", {
					get: function () {
						return this._east
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "west", {
					get: function () {
						return this._west
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "south", {
					get: function () {
						return this._south
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "north", {
					get: function () {
						return this._north
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.updateExtremes = function () {
					var t = this.getFeature().geometry;
					if (t) {
						var e = he(t),
							n = e[0][0],
							i = e[0][1],
							r = e[1][1],
							o = e[1][0],
							a = !1;
						r != this.north && (this._north = v.round(r, 6), a = !0), i != this.south && (this._south = v.round(i, 6), a = !0), o != this.east &&
							(this._east = v.round(o, 6), a = !0), n != this.west && (this._west = v.round(n, 6), a = !0), this._east < this._west && (this._east =
								180, this._west = -180), a && this.component.invalidateDataItems()
					}
				}, e.prototype.getFeature = function () {
					return {}
				}, e
			}(f.b),
			Lr = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapSeries", e.isMeasured = !1, e.nonScalingStroke = !0, e.dataFields.value = "value", e.ignoreBounds = !1, e.tooltip &&
						(e.tooltip.showInViewport = !0), e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new Or
				}, e.prototype.checkInclude = function (t, e, n) {
					if (t) {
						if (0 == t.length) return !1;
						if (-1 == t.indexOf(n)) return !1
					}
					return !(e && e.length > 0 && -1 != e.indexOf(n))
				}, Object.defineProperty(e.prototype, "useGeodata", {
					get: function () {
						return this.getPropertyValue("useGeodata")
					},
					set: function (t) {
						this.setPropertyValue("useGeodata", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "include", {
					get: function () {
						return this.getPropertyValue("include")
					},
					set: function (t) {
						this.setPropertyValue("include", t) && this.processIncExc()
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.processIncExc = function () {
					this.invalidateData()
				}, Object.defineProperty(e.prototype, "ignoreBounds", {
					get: function () {
						return this.getPropertyValue("ignoreBounds")
					},
					set: function (t) {
						this.setPropertyValue("ignoreBounds", t) && this.chart && this.chart.updateExtremes()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "exclude", {
					get: function () {
						return this.getPropertyValue("exclude")
					},
					set: function (t) {
						this.setPropertyValue("exclude", t) && this.processIncExc()
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.handleObjectAdded = function (t) {
					var e = t.newValue;
					e.parent = this, e.series = this, e.strokeWidth = e.strokeWidth
				}, Object.defineProperty(e.prototype, "geodata", {
					get: function () {
						return this._geodata
					},
					set: function (t) {
						if (t != this._geodata) {
							this._geodata = t, this.reverseGeodata && this.chart.processReverseGeodata(this._geodata);
							for (var e = this.data.length - 1; e >= 0; e--) 1 == this.data[e].madeFromGeoData && this.data.splice(e, 1);
							this.disposeData(), this.invalidateData()
						}
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "reverseGeodata", {
					get: function () {
						return this.getPropertyValue("reverseGeodata")
					},
					set: function (t) {
						this.setPropertyValue("reverseGeodata", t) && this._geodata && this.chart.processReverseGeodata(this._geodata)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "geodataSource", {
					get: function () {
						return this._dataSources.geodata || this.getDataSource("geodata"), this._dataSources.geodata
					},
					set: function (t) {
						var e = this;
						this._dataSources.geodata && this.removeDispose(this._dataSources.geodata), this._dataSources.geodata = t, this._dataSources.geodata
							.component = this, this.events.on("inited", function () {
								e.loadData("geodata")
							}, void 0, !1), this.setDataSourceEvents(t, "geodata")
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.getFeatures = function () {}, e.prototype.validateDataItems = function () {
					t.prototype.validateDataItems.call(this), this.updateExtremes()
				}, e.prototype.updateExtremes = function () {
					var t, e, n, i;
					this.dataItems.each(function (r) {
						(r.north > t || !g.isNumber(t)) && (t = r.north), (r.south < e || !g.isNumber(e)) && (e = r.south), (r.west < i || !g.isNumber(
							i)) && (i = r.west), (r.east > n || !g.isNumber(n)) && (n = r.east)
					}), this._mapObjects && this._mapObjects.each(function (r) {
						(r.north > t || !g.isNumber(t)) && (t = r.north), (r.south < e || !g.isNumber(e)) && (e = r.south), (r.west < i || !g.isNumber(
							i)) && (i = r.west), (r.east > n || !g.isNumber(n)) && (n = r.east)
					}), this.north == t && this.east == n && this.south == e && this.west == i || (this._north = t, this._east = n, this._west = i,
						this._south = e, this.dispatch("geoBoundsChanged"), this.ignoreBounds || this.chart.updateExtremes())
				}, Object.defineProperty(e.prototype, "north", {
					get: function () {
						return g.isNumber(this._northDefined) ? this._northDefined : this._north
					},
					set: function (t) {
						this._northDefined = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "south", {
					get: function () {
						return g.isNumber(this._southDefined) ? this._southDefined : this._south
					},
					set: function (t) {
						this._southDefined = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "west", {
					get: function () {
						return g.isNumber(this._westDefined) ? this._westDefined : this._west
					},
					set: function (t) {
						this._westDefined = t
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "east", {
					get: function () {
						return g.isNumber(this._eastDefined) ? this._eastDefined : this._east
					},
					set: function (t) {
						this._eastDefined = t
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.processConfig = function (e) {
					if (g.hasValue(e.geodata) && g.isString(e.geodata)) {
						var n = e.geodata;
						if (g.hasValue(window["am4geodata_" + e.geodata])) e.geodata = window["am4geodata_" + e.geodata];
						else try {
							e.geodata = JSON.parse(e.geodata)
						} catch (t) {
							throw Error("MapChart error: Geodata `" + n + "` is not loaded or is incorrect.")
						}
					}
					t.prototype.processConfig.call(this, e)
				}, e.prototype.asIs = function (e) {
					return "geodata" == e || t.prototype.asIs.call(this, e)
				}, e.prototype.updateTooltipBounds = function () {
					this.tooltip && this.topParent && this.tooltip.setBounds({
						x: 10,
						y: 10,
						width: this.topParent.maxWidth - 20,
						height: this.topParent.maxHeight - 20
					})
				}, e
			}(f.a);
		d.c.registeredClasses.MapSeries = Lr, d.c.registeredClasses.MapSeriesDataItem = Or;
		var Cr = n("C6dT"),
			Er = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapObject", e.isMeasured = !1, e.layout = "none", e.clickable = !0, e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.validate = function () {
					this.series && this.series.itemReaderText && (this.readerTitle = this.series.itemReaderText), t.prototype.validate.call(this)
				}, e.prototype.updateExtremes = function () {
					var t = this.getFeature();
					if (t) {
						var e = t.geometry;
						if (e) {
							var n = he(e),
								i = n[0][0],
								r = n[0][1],
								o = n[1][1],
								a = n[1][0],
								u = !1;
							o != this.north && (this._north = v.round(o, 8), u = !0), r != this.south && (this._south = v.round(r), u = !0), a != this.east &&
								(this._east = v.round(a), u = !0), i != this.west && (this._west = v.round(i), u = !0), u && (this.dispatch("geoBoundsChanged"),
									this.series && this.series.invalidateDataItems())
						}
					}
				}, e.prototype.getFeature = function () {
					return {}
				}, Object.defineProperty(e.prototype, "east", {
					get: function () {
						return g.isNumber(this._east) ? this._east : this.dataItem ? this.dataItem.east : void 0
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "west", {
					get: function () {
						return g.isNumber(this._west) ? this._west : this.dataItem ? this.dataItem.west : void 0
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "south", {
					get: function () {
						return g.isNumber(this._south) ? this._south : this.dataItem ? this.dataItem.south : void 0
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "north", {
					get: function () {
						return g.isNumber(this._north) ? this._north : this.dataItem ? this.dataItem.north : void 0
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.showTooltip = function (e) {
					var n = t.prototype.showTooltip.call(this, e);
					return n && "always" == this.showTooltipOn && !this.series.chart.events.has("mappositionchanged", this.handleTooltipMove, this) &&
						this.addDisposer(this.series.chart.events.on("mappositionchanged", this.handleTooltipMove, this)), n
				}, e.prototype.handleTooltipMove = function (t) {
					this.tooltip.isHidden || this.showTooltip()
				}, e.prototype.setDataItem = function (e) {
					t.prototype.setDataItem.call(this, e), this.applyAccessibility()
				}, e
			}(Cr.a);
		d.c.registeredClasses.MapObject = Er;
		var Ir = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.className = "MapImage", e.applyTheme(), e
			}
			return Object(c.c)(e, t), Object.defineProperty(e.prototype, "latitude", {
				get: function () {
					var t = this.getPropertyValue("latitude");
					return !g.isNumber(t) && this.dataItem && this.dataItem.geoPoint && (t = this.dataItem.geoPoint.latitude), t
				},
				set: function (t) {
					this.setPropertyValue("latitude", t, !1, !0), this.updateExtremes()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "longitude", {
				get: function () {
					var t = this.getPropertyValue("longitude");
					return !g.isNumber(t) && this.dataItem && this.dataItem.geoPoint && (t = this.dataItem.geoPoint.longitude), t
				},
				set: function (t) {
					this.setPropertyValue("longitude", t, !1, !0), this.updateExtremes()
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.validatePosition = function () {
				if (g.isNumber(this.latitude) && g.isNumber(this.longitude)) {
					var e = this.series.chart.projection.d3Projection([this.longitude, this.latitude]),
						n = this.series.chart.projection.d3Path({
							type: "Point",
							coordinates: [this.longitude, this.latitude]
						});
					this.__disabled = !n, this.moveTo({
						x: e[0],
						y: e[1]
					})
				}
				t.prototype.validatePosition.call(this)
			}, e.prototype.getFeature = function () {
				return {
					type: "Feature",
					geometry: {
						type: "Point",
						coordinates: [this.longitude, this.latitude]
					}
				}
			}, e
		}(Er);
		d.c.registeredClasses.MapImage = Ir;
		var Tr = n("R6wv"),
			Gr = n("o+vr"),
			Dr = n.n(Gr),
			Nr = n("hJ5i");

		function zr(t) {
			return Nr.map(t, function (t) {
				var e = t[0],
					n = t[1],
					i = [];
				return e && i.push(Ar(e)), n && i.push(Ar(n)), i
			})
		}

		function Vr(t) {
			return Nr.map(t, function (t) {
				return Ar(t)
			})
		}

		function Ar(t) {
			return Nr.map(t, function (t) {
				return kr(t)
			})
		}

		function Rr(t) {
			return Nr.map(t, Fr)
		}

		function kr(t) {
			return {
				longitude: t[0],
				latitude: t[1]
			}
		}

		function Fr(t) {
			return [t.longitude, t.latitude]
		}

		function Br(t) {
			return Nr.map(t, function (t) {
				return Nr.map(t, Fr)
			})
		}

		function Hr(t) {
			return Nr.map(t, function (t) {
				var e = t[0],
					n = t[1],
					i = [];
				return e && i.push(Rr(e)), n && i.push(Rr(n)), i
			})
		}

		function Wr(t, e, n) {
			return [De().center([t, e]).radius(n)().coordinates]
		}

		function Zr(t, e, n, i) {
			var r = []; - 180 == i && (i = -179.9999), -90 == n && (n = -89.9999), 90 == t && (t = 89.9999), 180 == e && (e = 179.9999);
			for (var o = Math.min(90, (e - i) / Math.ceil((e - i) / 90)), a = (t - n) / Math.ceil((t - n) / 90), u = i; u < e; u += o) {
				var s = [];
				r.push([s]), u + o > e && (o = e - u);
				for (var c = u; c <= u + o; c += 5) s.push([c, t]);
				for (var l = t; l >= n; l -= a) s.push([u + o, l]);
				for (c = u + o; c >= u; c -= 5) s.push([c, n]);
				for (l = n; l <= t; l += a) s.push([u, l])
			}
			return r
		}
		var qr = function (t) {
			function e() {
				var e = t.call(this) || this;
				e.className = "MapPolygon", e.polygon = e.createChild(Tr.a), e.polygon.shouldClone = !1, e.polygon.applyOnClones = !0, e.setPropertyValue(
					"precision", .5);
				var n = new p.a;
				return e.fill = n.getFor("secondaryButton"), e.stroke = n.getFor("secondaryButtonStroke"), e.strokeOpacity = 1, e.tooltipPosition =
					"pointer", e.nonScalingStroke = !0, e.applyTheme(), e
			}
			return Object(c.c)(e, t), e.prototype.getFeature = function () {
				if (this.multiPolygon && this.multiPolygon.length > 0) return {
					type: "Feature",
					geometry: {
						type: "MultiPolygon",
						coordinates: this.multiPolygon
					}
				}
			}, Object.defineProperty(e.prototype, "multiGeoPolygon", {
				get: function () {
					var t = this.getPropertyValue("multiGeoPolygon");
					return !t && this.dataItem && (t = this.dataItem.multiGeoPolygon), t
				},
				set: function (t) {
					this.setPropertyValue("multiGeoPolygon", t, !0), this.multiPolygon = Hr(t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "multiPolygon", {
				get: function () {
					var t = this.getPropertyValue("multiPolygon");
					return !t && this.dataItem && (t = this.dataItem.multiPolygon), t
				},
				set: function (t) {
					this.setPropertyValue("multiPolygon", t) && (this.updateExtremes(), this.invalidate())
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.validate = function () {
				if (this.series) {
					var e = this.series.chart.projection,
						n = e.d3Path;
					if (this.multiPolygon) {
						if (this.series) {
							var i = {
								type: "MultiPolygon",
								coordinates: this.multiPolygon
							};
							e.d3Projection.precision(this.precision), this.polygon.path = n(i)
						}
						if (this.series.calculateVisualCenter) {
							var r = 0,
								o = this.multiPolygon[0];
							if (this.multiPolygon.length > 1)
								for (var a = 0; a < this.multiPolygon.length; a++) {
									var u = this.multiPolygon[a],
										s = Et({
											type: "Polygon",
											coordinates: u
										});
									s > r && (o = u, r = s)
								}
							var c = Dr()(o);
							this._visualLongitude = c[0], this._visualLatitude = c[1]
						} else this._visualLongitude = this.longitude, this._visualLatitude = this.latitude
					}
				}
				t.prototype.validate.call(this)
			}, e.prototype.measureElement = function () {}, Object.defineProperty(e.prototype, "latitude", {
				get: function () {
					return this.north + (this.south - this.north) / 2
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "longitude", {
				get: function () {
					return this.east + (this.west - this.east) / 2
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "visualLatitude", {
				get: function () {
					var t = this.getPropertyValue("visualLatitude");
					return g.isNumber(t) ? t : this._adapterO ? this._adapterO.apply("visualLatitude", this._visualLatitude) : this._visualLatitude
				},
				set: function (t) {
					this.setPropertyValue("visualLatitude", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "visualLongitude", {
				get: function () {
					var t = this.getPropertyValue("visualLongitude");
					return g.isNumber(t) ? t : this._adapterO ? this._adapterO.apply("visualLongitude", this._visualLongitude) : this._visualLongitude
				},
				set: function (t) {
					this.setPropertyValue("visualLongitude", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "pixelWidth", {
				get: function () {
					return this.polygon.pixelWidth
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "pixelHeight", {
				get: function () {
					return this.polygon.pixelHeight
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.copyFrom = function (e) {
				t.prototype.copyFrom.call(this, e), this.polygon.copyFrom(e.polygon)
			}, e.prototype.updateExtremes = function () {
				t.prototype.updateExtremes.call(this)
			}, Object.defineProperty(e.prototype, "boxArea", {
				get: function () {
					return (this.north - this.south) * (this.east - this.west)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.getTooltipX = function () {
				return this.series.chart.projection.convert({
					longitude: this.visualLongitude,
					latitude: this.visualLatitude
				}).x
			}, e.prototype.getTooltipY = function () {
				return this.series.chart.projection.convert({
					longitude: this.visualLongitude,
					latitude: this.visualLatitude
				}).y
			}, Object.defineProperty(e.prototype, "precision", {
				get: function () {
					return this.getPropertyValue("precision")
				},
				set: function (t) {
					this.setPropertyValue("precision", t, !0)
				},
				enumerable: !0,
				configurable: !0
			}), e
		}(Er);
		d.c.registeredClasses.MapPolygon = qr;
		var Xr = n("vMqJ"),
			Yr = n("v9UT"),
			Ur = n("Wglt"),
			Jr = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapPolygonSeriesDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.getFeature = function () {
					if (this.multiPolygon && this.multiPolygon.length > 0) return {
						type: "Feature",
						geometry: {
							type: "MultiPolygon",
							coordinates: this.multiPolygon
						}
					}
				}, Object.defineProperty(e.prototype, "mapPolygon", {
					get: function () {
						var t = this;
						if (!this._mapPolygon) {
							var e = this.component.mapPolygons.create();
							this._mapPolygon = e, this.addSprite(e), this._disposers.push(new h.b(function () {
								t.component && t.component.mapPolygons.removeValue(e)
							})), this.mapObject = e
						}
						return this._mapPolygon
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "polygon", {
					get: function () {
						return this._polygon
					},
					set: function (t) {
						this._polygon = t, this.multiPolygon = [t]
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "multiPolygon", {
					get: function () {
						return this._multiPolygon
					},
					set: function (t) {
						this._multiPolygon = t, this.updateExtremes()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "geoPolygon", {
					get: function () {
						return this._geoPolygon
					},
					set: function (t) {
						this._geoPolygon = t, this.multiGeoPolygon = [t]
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "multiGeoPolygon", {
					get: function () {
						return this._multiGeoPolygon
					},
					set: function (t) {
						this._multiGeoPolygon = t, this.multiPolygon = Hr(t)
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(Or),
			Kr = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.calculateVisualCenter = !1, e.className = "MapPolygonSeries", e.dataFields.multiPolygon = "multiPolygon", e.dataFields.polygon =
						"polygon", e.dataFields.geoPolygon = "geoPolygon", e.dataFields.multiGeoPolygon = "multiGeoPolygon", e.setPropertyValue(
							"sortPolygonsBy", "area"), e.setPropertyValue("sortPolygonsReversed", !1), e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new Jr
				}, e.prototype.processIncExc = function () {
					this.mapPolygons.clear(), t.prototype.processIncExc.call(this)
				}, e.prototype.validateData = function () {
					if (this.useGeodata || this.geodata) {
						var e = this._dataSources.geodata ? void 0 : this.chart.geodata;
						if (this.geodata && (e = this.geodata), e) {
							var n = void 0;
							if ("FeatureCollection" == e.type ? n = e.features : "Feature" == e.type ? n = [e] : -1 != ["Point", "LineString", "Polygon",
									"MultiPoint", "MultiLineString", "MultiPolygon"
								].indexOf(e.type) ? n = [{
									geometry: e
								}] : console.log("nothing found in geoJSON"), n)
								for (var i = function (t, e) {
										var i = n[t],
											o = i.geometry;
										if (o) {
											var a = o.type,
												u = i.id;
											if (r.chart.geodataNames && r.chart.geodataNames[u] && (i.properties.name = r.chart.geodataNames[u]), "Polygon" == a ||
												"MultiPolygon" == a) {
												if (!r.checkInclude(r.include, r.exclude, u)) return "continue";
												var s = o.coordinates;
												s && "Polygon" == a && (s = [s]);
												var c = Nr.find(r.data, function (t, e) {
													return t.id == u
												});
												c ? c.multiPolygon || (c.multiPolygon = s) : (c = {
													multiPolygon: s,
													id: u,
													madeFromGeoData: !0
												}, r.data.push(c)), Yr.softCopyProperties(i.properties, c)
											}
										}
									}, r = this, o = 0, a = n.length; o < a; o++) i(o)
						}
					}
					t.prototype.validateData.call(this)
				}, e.prototype.validate = function () {
					if (t.prototype.validate.call(this), this.dataItems.each(function (t) {
							Yr.used(t.mapPolygon)
						}), "none" != this.sortPolygonsBy) {
						var e = this.sortPolygonsBy,
							n = this.sortPolygonsReversed;
						this.mapPolygons.sort(function (t, i) {
							var r = "",
								o = "",
								a = -1,
								u = 1;
							switch (e) {
							case "area":
								r = t.boxArea, o = i.boxArea, a = -1, u = 1;
								break;
							case "name":
								r = t.dataItem.dataContext.name || "", o = i.dataItem.dataContext.name || "", a = 1, u = -1;
								break;
							case "id":
								r = t.dataItem.dataContext.id || "", o = i.dataItem.dataContext.id || "", a = 1, u = -1;
								break;
							case "latitude":
								r = n ? t.south : t.north, o = n ? i.south : i.north, a = -1, u = 1;
								break;
							case "longitude":
								r = n ? t.east : t.west, o = n ? i.east : i.west, a = 1, u = -1
							}
							return r < o ? n ? u : a : r > o ? n ? a : u : 0
						}), this.mapPolygons.each(function (t, e) {
							t.validate(), t.zIndex || t.propertyFields.zIndex || (t.zIndex = 1e6 - e)
						})
					}
				}, Object.defineProperty(e.prototype, "mapPolygons", {
					get: function () {
						if (!this._mapPolygons) {
							var t = new qr,
								e = new Xr.e(t);
							this._disposers.push(new Xr.c(e)), this._disposers.push(e.template), e.template.focusable = !0, e.events.on("inserted", this.handleObjectAdded,
								this, !1), this._mapPolygons = e, this._mapObjects = e
						}
						return this._mapPolygons
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.getPolygonById = function (t) {
					return Ur.find(this.mapPolygons.iterator(), function (e) {
						return e.dataItem.dataContext.id == t
					})
				}, e.prototype.copyFrom = function (e) {
					this.mapPolygons.template.copyFrom(e.mapPolygons.template), t.prototype.copyFrom.call(this, e)
				}, e.prototype.getFeatures = function () {
					var t = this,
						e = [];
					return this.dataItems.each(function (t) {
						var n = t.getFeature();
						n && e.push(n)
					}), this.mapPolygons.each(function (n) {
						if (-1 == t.dataItems.indexOf(n._dataItem)) {
							var i = n.getFeature();
							i && e.push(i)
						}
					}), e
				}, Object.defineProperty(e.prototype, "sortPolygonsBy", {
					get: function () {
						return this.getPropertyValue("sortPolygonsBy")
					},
					set: function (t) {
						this.setPropertyValue("sortPolygonsBy", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "sortPolygonsReversed", {
					get: function () {
						return this.getPropertyValue("sortPolygonsReversed")
					},
					set: function (t) {
						this.setPropertyValue("sortPolygonsReversed", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(Lr);
		d.c.registeredClasses.MapPolygonSeries = Kr, d.c.registeredClasses.MapPolygonSeriesDataItem = Jr;
		var Qr = function () {
			function t() {
				this.d3Projection = ar()
			}
			return Object.defineProperty(t.prototype, "d3Projection", {
				get: function () {
					return this._d3Projection
				},
				set: function (t) {
					this._d3Projection = t, t.precision(.1), this._d3Path = wi().projection(t), this.chart && this.chart.invalidateProjection()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "d3Path", {
				get: function () {
					return this._d3Path
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "scale", {
				get: function () {
					return this.d3Projection.scale() / 100
				},
				enumerable: !0,
				configurable: !0
			}), t.prototype.convert = function (t) {
				var e = this.d3Projection([t.longitude, t.latitude]);
				if (e) return {
					x: e[0],
					y: e[1]
				}
			}, t.prototype.invert = function (t) {
				var e = this.d3Projection.invert([t.x, t.y]);
				if (e) return {
					longitude: e[0],
					latitude: e[1]
				}
			}, t.prototype.project = function (t, e) {
				return this.convert({
					longitude: t * v.DEGREES,
					latitude: e * v.DEGREES
				})
			}, t.prototype.unproject = function (t, e) {
				return this.invert({
					x: t,
					y: e
				})
			}, t.prototype.rotate = function (t, e, n, i) {
				var r = e * v.RADIANS,
					o = n * v.RADIANS;
				i *= v.RADIANS;
				var a = t.longitude * v.RADIANS + r,
					u = t.latitude * v.RADIANS,
					s = Math.cos(o),
					c = Math.sin(o),
					l = Math.cos(i),
					h = Math.sin(i),
					p = Math.cos(u),
					f = Math.cos(a) * p,
					d = Math.sin(a) * p,
					g = Math.sin(u),
					m = g * s + f * c;
				return {
					longitude: v.DEGREES * Math.atan2(d * l - m * h, f * s - g * c),
					latitude: v.DEGREES * Math.asin(m * l + d * h)
				}
			}, t.prototype.unrotate = function (t, e, n, i) {
				var r = e * v.RADIANS,
					o = n * v.RADIANS;
				i *= v.RADIANS;
				var a = t.longitude * v.RADIANS - r,
					u = t.latitude * v.RADIANS,
					s = Math.cos(o),
					c = Math.sin(o),
					l = Math.cos(i),
					h = Math.sin(i),
					p = Math.cos(u),
					f = Math.cos(a) * p,
					d = Math.sin(a) * p,
					g = Math.sin(u),
					m = g * l - d * h;
				return {
					longitude: v.DEGREES * Math.atan2(d * l + g * h, f * s + m * c),
					latitude: v.DEGREES * Math.asin(m * s - f * c)
				}
			}, t.prototype.intermediatePoint = function (t, e, n) {
				var i = Ln([t.longitude, t.latitude], [e.longitude, e.latitude])(n);
				return {
					longitude: i[0],
					latitude: i[1]
				}
			}, t.prototype.multiDistance = function (t) {
				for (var e = 0, n = 0; n < t.length; n++) {
					var i = t[n];
					if (i.length > 1)
						for (var r = 1; r < i.length; r++) {
							var o = i[r - 1],
								a = i[r];
							e += this.distance(o, a)
						}
				}
				return e
			}, t.prototype.distance = function (t, e) {
				return ln([t.longitude, t.latitude], [e.longitude, e.latitude])
			}, t.prototype.positionToPoint = function (t, e) {
				if (t) {
					var n = this.positionToGeoPoint(t, e),
						i = this.positionToGeoPoint(t, e - .01),
						r = this.positionToGeoPoint(t, e + .01);
					if (i && r) {
						var o = this.convert(n),
							a = this.convert(i),
							u = this.convert(r);
						return {
							x: o.x,
							y: o.y,
							angle: v.getAngle(a, u)
						}
					}
				}
				return {
					x: 0,
					y: 0,
					angle: 0
				}
			}, t.prototype.positionToGeoPoint = function (t, e) {
				if (t) {
					for (var n = this.multiDistance(t), i = 0, r = 0, o = 0, a = void 0, u = void 0, s = 0; s < t.length; s++) {
						var c = t[s];
						if (c.length > 1) {
							for (var l = 1; l < c.length; l++)
								if (a = c[l - 1], u = c[l], r = i / n, o = (i += this.distance(a, u)) / n, r <= e && o > e) {
									s = t.length;
									break
								}
						} else 1 == c.length && (a = c[0], u = c[0], r = 0, o = 1)
					}
					if (a && u) {
						var h = (e - r) / (o - r);
						return this.intermediatePoint(a, u, h)
					}
				}
				return {
					longitude: 0,
					latitude: 0
				}
			}, t
		}();
		d.c.registeredClasses.Projection = Qr;
		var $r = n("FzPm"),
			to = n("GtDR"),
			eo = n("8ZqG"),
			no = function (t) {
				function e() {
					var e = t.call(this) || this;
					e._chart = new h.d, e.className = "SmallMap", e.align = "left", e.valign = "bottom", e.percentHeight = 20, e.percentWidth = 20, e.margin(
						5, 5, 5, 5);
					var n = new p.a;
					e.background.fillOpacity = .9, e.background.fill = n.getFor("background"), e.events.on("hit", e.moveToPosition, e, !1), e.events.on(
						"maxsizechanged", e.updateMapSize, e, !1), e.seriesContainer = e.createChild(Cr.a), e.seriesContainer.shouldClone = !1;
					var i = e.createChild(to.a);
					return i.shouldClone = !1, i.stroke = n.getFor("alternativeBackground"), i.strokeWidth = 1, i.strokeOpacity = .5, i.fill = Object(
							eo.c)(), i.verticalCenter = "middle", i.horizontalCenter = "middle", i.isMeasured = !1, i.visible = !1, e.rectangle = i, e._disposers
						.push(e._chart), e.applyTheme(), e
				}
				return Object(c.c)(e, t), Object.defineProperty(e.prototype, "series", {
					get: function () {
						return this._series || (this._series = new Xr.b, this._series.events.on("inserted", this.handleSeriesAdded, this, !1), this._series
							.events.on("removed", this.handleSeriesRemoved, this, !1)), this._series
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.handleSeriesAdded = function (t) {
					var e = t.newValue;
					if (this.chart.series.contains(e)) {
						var n = e.clone();
						this._series.removeValue(e), this._series.push(n), e = n, this.chart.dataUsers.push(n)
					}
					e.chart = this.chart, e.parent = this.seriesContainer, e.interactionsEnabled = !1, e.events.on("inited", this.updateMapSize, this, !
						1), e.hidden = !1
				}, e.prototype.handleSeriesRemoved = function (t) {
					this.invalidate()
				}, e.prototype.moveToPosition = function (t) {
					var e = Yr.spritePointToSprite(t.spritePoint, this, this.seriesContainer),
						n = this.chart.seriesPointToGeo(e);
					this.chart.zoomToGeoPoint(n, this.chart.zoomLevel, !0)
				}, Object.defineProperty(e.prototype, "chart", {
					get: function () {
						return this._chart.get()
					},
					set: function (t) {
						this.chart != t && this._chart.set(t, new h.c([t.events.on("mappositionchanged", this.updateRectangle, this, !1), t.events.on(
							"scaleratiochanged", this.updateMapSize, this, !1)]))
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.updateRectangle = function () {
					var t = this.chart,
						e = t.zoomLevel,
						n = this.rectangle;
					n.width = this.pixelWidth / e, n.height = this.pixelHeight / e;
					var i = Math.min(this.percentWidth, this.percentHeight) / 100,
						r = t.seriesContainer;
					n.x = Math.ceil(-r.pixelX * i / e) + this.seriesContainer.pixelX, n.y = Math.ceil(-r.pixelY * i / e) + this.seriesContainer.pixelY,
						n.validate()
				}, e.prototype.updateMapSize = function () {
					if (this.chart) {
						var t = this.chart.scaleRatio * Math.min(this.percentWidth, this.percentHeight) / 100;
						this.seriesContainer.scale = t;
						var e = {
							width: 0,
							height: 0,
							x: 0,
							y: 0
						};
						try {
							e = this.seriesContainer.group.node.getBBox()
						} catch (t) {}
						e.width > 0 && (this.rectangle.visible = !0), this.seriesContainer.x = this.pixelWidth / 2 - e.x * t - e.width / 2 * t, this.seriesContainer
							.y = this.pixelHeight / 2 - e.y * t - e.height / 2 * t, this.updateRectangle(), this.afterDraw()
					}
				}, e.prototype.afterDraw = function () {
					t.prototype.afterDraw.call(this), this.rectangle.maskRectangle = {
						x: -1,
						y: -1,
						width: Math.ceil(this.pixelWidth + 2),
						height: Math.ceil(this.pixelHeight + 2)
					}
				}, e.prototype.processConfig = function (e) {
					if (e && g.hasValue(e.series) && g.isArray(e.series))
						for (var n = 0, i = e.series.length; n < i; n++) {
							var r = e.series[n];
							g.hasValue(r) && g.isString(r) && this.map.hasKey(r) && (e.series[n] = this.map.getKey(r))
						}
					t.prototype.processConfig.call(this, e)
				}, e
			}(Cr.a);
		d.c.registeredClasses.SmallMap = no;
		var io = n("WYhe"),
			ro = n("Q4nc"),
			oo = n("0FpR");

		function ao(t) {
			var e = so(t.longitude),
				n = Math.asin(Math.sin(t.latitude * v.RADIANS)) * v.DEGREES,
				i = so(t.latitude);
			return Math.abs(i) > 90 && (e = so(e + 180)), t.longitude = e, t.latitude = n, t
		}

		function uo(t) {
			return Nr.each(t, function (t) {
				Nr.each(t, function (t) {
					ao(t)
				})
			}), t
		}

		function so(t) {
			return (t %= 360) > 180 && (t -= 360), t < -180 && (t += 360), t
		}

		function co(t) {
			return {
				x: t.longitude,
				y: t.latitude
			}
		}
		var lo = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.adjustRotation = !0, e.className = "MapLineObject", e.isMeasured = !1, e.layout = "none", e.applyTheme(), e
			}
			return Object(c.c)(e, t), e.prototype.validatePosition = function () {
				var e = this.mapLine;
				if (e) {
					var n = e.positionToPoint(this.position);
					if (this.x = n.x, this.y = n.y, this.adjustRotation && (this.rotation = n.angle), this.mapLine.dataItem) {
						var i = this.mapLine.dataItem.component;
						this.scale = 1 / i.scale
					}
					if (e.shortestDistance) {
						var r = this.mapLine.series.chart.projection,
							o = r.positionToGeoPoint(e.multiGeoLine, this.position),
							a = r.d3Path({
								type: "Point",
								coordinates: [o.longitude, o.latitude]
							});
						this.__disabled = !a
					}
				}
				t.prototype.validatePosition.call(this)
			}, Object.defineProperty(e.prototype, "position", {
				get: function () {
					return this.getPropertyValue("position")
				},
				set: function (t) {
					this.setPropertyValue("position", t, !1, !0)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "adjustRotation", {
				get: function () {
					return this.getPropertyValue("adjustRotation")
				},
				set: function (t) {
					this.setPropertyValue("adjustRotation", t, !1, !0)
				},
				enumerable: !0,
				configurable: !0
			}), e
		}(Cr.a);
		d.c.registeredClasses.MapLineObject = lo;
		var ho = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapImageSeriesDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.getFeature = function () {
					return {
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: this.point
						}
					}
				}, Object.defineProperty(e.prototype, "mapImage", {
					get: function () {
						var t = this;
						if (!this._mapImage) {
							var e = this.component.mapImages.create();
							this.addSprite(e), this._mapImage = e, this._disposers.push(e), this._disposers.push(new h.b(function () {
								t.component && t.component.mapImages.removeValue(e)
							})), this.mapObject = e
						}
						return this._mapImage
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "point", {
					get: function () {
						return this._point
					},
					set: function (t) {
						this._point = t, this._geoPoint = kr(t), this.updateExtremes()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "multiPoint", {
					get: function () {
						return [this._point]
					},
					set: function (t) {
						this._point = t[0], this._geoPoint = kr(this._point), this.updateExtremes()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "geoPoint", {
					get: function () {
						return this._geoPoint
					},
					set: function (t) {
						this._geoPoint = t, this.point = [t.longitude, t.latitude]
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(Or),
			po = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapImageSeries", e.dataFields.multiPoint = "multiPoint", e.dataFields.point = "point", e.dataFields.geoPoint =
						"geoPoint", e.dataFields.multiGeoPoint = "multiGeoPoint", e.ignoreBounds = !0, e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new ho
				}, e.prototype.validateData = function () {
					var e = this;
					if (this.data.length > 0 && 0 == this._parseDataFrom && this.mapImages.clear(), this.useGeodata && (this.useGeodata || this.geodata)) {
						var n = this.chart.geodata,
							i = void 0;
						if ("FeatureCollection" == n.type ? i = n.features : "Feature" == n.type ? i = [n] : -1 != ["Point", "LineString", "Polygon",
								"MultiPoint", "MultiLineString", "MultiPolygon"
							].indexOf(n.type) ? i = [{
								geometry: n
							}] : console.log("nothing found in geoJSON"), i)
							for (var r = function (t, e) {
									var n = i[t],
										r = n.geometry;
									if (r) {
										var a = r.type,
											u = n.id;
										if ("Point" == a || "MultiPoint" == a) {
											if (!o.checkInclude(o.include, o.exclude, u)) return "continue";
											var s = r.coordinates;
											"Point" == a && (s = [s]);
											var c = Nr.find(o.data, function (t, e) {
												return t.id == u
											});
											c ? c.multiPoint || (c.multiPoint = s) : (c = {
												multiPoint: s,
												id: u,
												madeFromGeoData: !0
											}, o.data.push(c)), Yr.softCopyProperties(n.properties, c)
										}
									}
								}, o = this, a = 0, u = i.length; a < u; a++) r(a)
					}
					t.prototype.validateData.call(this), Ur.each(this.dataItems.iterator(), function (t) {
						var n = t.mapImage;
						n.isDisposed() || (e.mapImages.moveValue(n), g.isNumber(n.latitude) && g.isNumber(n.latitude) && (t.geoPoint = {
							latitude: n.latitude,
							longitude: n.longitude
						}))
					})
				}, Object.defineProperty(e.prototype, "mapImages", {
					get: function () {
						if (!this._mapImages) {
							var t = new Ir,
								e = new Xr.e(t);
							this._disposers.push(new Xr.c(e)), this._disposers.push(e.template), e.template.focusable = !0, e.events.on("inserted", this.handleObjectAdded,
								this, !1), this._mapImages = e, this._mapObjects = e
						}
						return this._mapImages
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.validateDataElement = function (e) {
					t.prototype.validateDataElement.call(this, e), e.mapImage.invalidate()
				}, e.prototype.validate = function () {
					t.prototype.validate.call(this), Ur.each(this.mapImages.iterator(), function (t) {
						t.validatePosition()
					})
				}, e.prototype.copyFrom = function (e) {
					this.mapImages.template.copyFrom(e.mapImages.template), t.prototype.copyFrom.call(this, e)
				}, e.prototype.getFeatures = function () {
					var t = this,
						e = [];
					return this.dataItems.each(function (t) {
						var n = t.getFeature();
						n && e.push(n)
					}), this.mapImages.each(function (n) {
						if (-1 == t.dataItems.indexOf(n._dataItem)) {
							var i = n.getFeature();
							i && e.push(i)
						}
					}), e
				}, e.prototype.getImageById = function (t) {
					return Ur.find(this.mapImages.iterator(), function (e) {
						var n = e.dataItem.dataContext;
						if (e.id == t || n && n.id == t) return !0
					})
				}, e
			}(Lr);
		d.c.registeredClasses.MapImageSeries = po, d.c.registeredClasses.MapImageSeriesDataItem = ho;
		var fo = n("Rnbi"),
			go = n("jfaP"),
			vo = n("tjMS"),
			mo = function (t) {
				function e() {
					var e = t.call(this) || this;
					e._imageListeners = {}, e.className = "MapLine", e.createLine(), e.line.stroke = Object(eo.c)(), e.line.parent = e, e.strokeOpacity =
						1, e.setPropertyValue("precision", .1);
					var n = new p.a;
					return e.stroke = n.getFor("grid"), e.shortestDistance = !0, e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createLine = function () {
					this.line = new go.a
				}, e.prototype.positionToPoint = function (t) {
					return this.shortestDistance ? this.series.chart.projection.positionToPoint(this.multiGeoLine, t) : this.line ? this.line.positionToPoint(
						t) : {
						x: 0,
						y: 0,
						angle: 0
					}
				}, Object.defineProperty(e.prototype, "multiGeoLine", {
					get: function () {
						var t = this.getPropertyValue("multiGeoLine");
						return !t && this.dataItem && this.dataItem.multiGeoLine && (t = this.dataItem.multiGeoLine), t
					},
					set: function (t) {
						if (t && t.length > 0) {
							this.setPropertyValue("multiGeoLine", uo(t), !0);
							var e = Br(t);
							this.setPropertyValue("multiLine", e), this.updateExtremes()
						}
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "multiLine", {
					get: function () {
						var t = this.getPropertyValue("multiLine");
						return !t && this.dataItem && this.dataItem.multiLine && (t = this.dataItem.multiLine), t
					},
					set: function (t) {
						this.setPropertyValue("multiLine", t), this.multiGeoLine = Vr(t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "imagesToConnect", {
					get: function () {
						return this.getPropertyValue("imagesToConnect")
					},
					set: function (t) {
						var e = this;
						if (this.setPropertyValue("imagesToConnect", t, !0), this.handleImagesToConnect(), this.series) {
							var n = this.series.chart;
							n && n.series.each(function (t) {
								t instanceof po && (t.isReady() || e._disposers.push(t.events.on("ready", e.handleImagesToConnect, e, !1)))
							})
						}
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.handleImagesToConnect = function () {
					var t, e, n = this;
					if (this.imagesToConnect) {
						var i = [],
							r = [i],
							o = function (t) {
								if (g.isString(t)) {
									var e = a.series.chart;
									e && e.series.each(function (e) {
										if (e instanceof po) {
											var n = e.getImageById(t);
											n && (t = n)
										}
									})
								}
								if (t instanceof Ir && (i.push({
										longitude: t.longitude,
										latitude: t.latitude
									}), !a._imageListeners[t.uid])) {
									var r = t.events.on("propertychanged", function (t) {
										"longitude" != t.property && "latitude" != t.property || (n.handleImagesToConnect(), n.invalidate())
									}, a, !1);
									a._imageListeners[t.uid] = r, a._disposers.push(r)
								}
							},
							a = this;
						try {
							for (var u = Object(c.g)(this.imagesToConnect), s = u.next(); !s.done; s = u.next()) {
								o(s.value)
							}
						} catch (e) {
							t = {
								error: e
							}
						} finally {
							try {
								s && !s.done && (e = u.return) && e.call(u)
							} finally {
								if (t) throw t.error
							}
						}
						this.multiGeoLine = r
					}
				}, e.prototype.validate = function () {
					var e = this.series.chart;
					if (this.multiLine) {
						if (this.shortestDistance) e.projection.d3Projection.precision(this.precision), this.line.path = e.projection.d3Path(this.getFeature());
						else {
							for (var n = [], i = 0, r = this.multiLine.length; i < r; i++) {
								for (var o = this.multiLine[i], a = [], u = 0, s = o.length; u < s; u++) {
									var c = o[u],
										l = this.series.chart.projection.convert({
											longitude: c[0],
											latitude: c[1]
										});
									a.push(l)
								}
								n.push(a)
							}
							this.line.segments = n
						}
						this._arrow && this._arrow.validatePosition(), Ur.each(this.lineObjects.iterator(), function (t) {
							t.validatePosition()
						}), this.handleGlobalScale()
					} else this.imagesToConnect && this.handleImagesToConnect();
					t.prototype.validate.call(this)
				}, e.prototype.getFeature = function () {
					if (this.multiLine && this.multiLine.length > 0 && this.multiLine[0] && this.multiLine[0].length > 0) return {
						type: "Feature",
						geometry: {
							type: "MultiLineString",
							coordinates: this.multiLine
						}
					}
				}, e.prototype.measureElement = function () {}, Object.defineProperty(e.prototype, "shortestDistance", {
					get: function () {
						return this.getPropertyValue("shortestDistance")
					},
					set: function (t) {
						this.setPropertyValue("shortestDistance", t, !0)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "lineObjects", {
					get: function () {
						return this._lineObjects || (this._lineObjects = new Xr.e(new lo), this._lineObjects.events.on("inserted", this.handleLineObjectAdded,
							this, !1), this._disposers.push(new Xr.c(this._lineObjects)), this._disposers.push(this._lineObjects.template)), this._lineObjects
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.handleLineObjectAdded = function (t) {
					var e = t.newValue;
					e.mapLine = this, e.shouldClone = !1, e.parent = this
				}, Object.defineProperty(e.prototype, "arrow", {
					get: function () {
						if (!this._arrow) {
							var t = this.createChild(lo);
							t.shouldClone = !1, t.width = 8, t.height = 10, t.mapLine = this, t.position = .5;
							var e = t.createChild(fo.a);
							e.fillOpacity = 1, e.width = Object(vo.c)(100), e.height = Object(vo.c)(100), e.rotation = 90, e.horizontalCenter = "middle",
								e.verticalCenter = "middle", this._arrow = t
						}
						return this._arrow
					},
					set: function (t) {
						this._arrow = t, t.mapLine = this, t.parent = this
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.copyFrom = function (e) {
					t.prototype.copyFrom.call(this, e), this.line.copyFrom(e.line), this.lineObjects.copyFrom(e.lineObjects), e._arrow && (this.arrow =
						e.arrow.clone())
				}, Object.defineProperty(e.prototype, "latitude", {
					get: function () {
						return this.north + (this.south - this.north) / 2
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "longitude", {
					get: function () {
						return this.east + (this.west - this.east) / 2
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.getTooltipX = function () {
					var t = this.getPropertyValue("tooltipX");
					return t instanceof vo.a || (t = Object(vo.c)(50)), t instanceof vo.a ? this.positionToPoint(t.value).x : 0
				}, e.prototype.getTooltipY = function () {
					var t = this.getPropertyValue("tooltipY");
					return t instanceof vo.a || (t = Object(vo.c)(50)), t instanceof vo.a ? this.positionToPoint(t.value).y : 0
				}, Object.defineProperty(e.prototype, "precision", {
					get: function () {
						return this.getPropertyValue("precision")
					},
					set: function (t) {
						this.setPropertyValue("precision", t, !0)
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(Er);
		d.c.registeredClasses.MapLine = mo;
		var yo = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapLineSeriesDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.getFeature = function () {
					if (this.multiLine && this.multiLine.length > 0) return {
						type: "Feature",
						geometry: {
							type: "MultiLineString",
							coordinates: this.multiLine
						}
					}
				}, Object.defineProperty(e.prototype, "mapLine", {
					get: function () {
						var t = this;
						if (!this._mapLine) {
							var e = this.component.mapLines.create();
							this._mapLine = e, this.addSprite(e), this._disposers.push(e), this._disposers.push(new h.b(function () {
								t.component && t.component.mapLines.removeValue(e)
							})), this.mapObject = e
						}
						return this._mapLine
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "line", {
					get: function () {
						return this._line
					},
					set: function (t) {
						this._line = t, this.multiLine = [t]
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "multiLine", {
					get: function () {
						return this._multiLine
					},
					set: function (t) {
						this._multiLine = t, this._multiGeoLine = Vr(t), this.updateExtremes()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "geoLine", {
					get: function () {
						return this._geoLine
					},
					set: function (t) {
						this._geoLine = t, this.multiLine = Br([t])
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "multiGeoLine", {
					get: function () {
						return this._multiGeoLine
					},
					set: function (t) {
						this._multiGeoLine = t, this.multiLine = Br(t)
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(Or),
			bo = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapLineSeries", e.dataFields.multiLine = "multiLine", e.dataFields.line = "line", e.dataFields.geoLine =
						"geoLine", e.dataFields.multiGeoLine = "multiGeoLine", e.ignoreBounds = !0, e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new yo
				}, e.prototype.validateData = function () {
					if (this.useGeodata || this.geodata) {
						var e = this.chart.geodata;
						if (e) {
							var n = void 0;
							if ("FeatureCollection" == e.type ? n = e.features : "Feature" == e.type ? n = [e] : -1 != ["Point", "LineString", "Polygon",
									"MultiPoint", "MultiLineString", "MultiPolygon"
								].indexOf(e.type) ? n = [{
									geometry: e
								}] : console.log("nothing found in geoJSON"), n)
								for (var i = function (t, e) {
										var i = n[t],
											o = i.geometry;
										if (o) {
											var a = o.type,
												u = i.id;
											if ("LineString" == a || "MultiLineString" == a) {
												if (!r.checkInclude(r.include, r.exclude, u)) return "continue";
												var s = o.coordinates,
													c = Nr.find(r.data, function (t, e) {
														return t.id == u
													});
												"LineString" == a && (s = [s]), c ? c.multiLine || (c.multiLine = s) : (c = {
													multiLine: s,
													id: u,
													madeFromGeoData: !0
												}, r.data.push(c)), Yr.softCopyProperties(i.properties, c)
											}
										}
									}, r = this, o = 0, a = n.length; o < a; o++) i(o)
						}
					}
					t.prototype.validateData.call(this)
				}, Object.defineProperty(e.prototype, "mapLines", {
					get: function () {
						if (!this._mapLines) {
							var t = this.createLine(),
								e = new Xr.e(t);
							this._disposers.push(new Xr.c(e)), this._disposers.push(e.template), e.events.on("inserted", this.handleObjectAdded, this, !1),
								this._mapLines = e, this._mapObjects = e
						}
						return this._mapLines
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.createLine = function () {
					return new mo
				}, e.prototype.validate = function () {
					this.dataItems.each(function (t) {
						Yr.used(t.mapLine)
					}), t.prototype.validate.call(this), this.mapLines.each(function (t) {
						t.validate()
					})
				}, e.prototype.copyFrom = function (e) {
					this.mapLines.template.copyFrom(e.mapLines.template), t.prototype.copyFrom.call(this, e)
				}, e.prototype.getFeatures = function () {
					var t = this,
						e = [];
					return this.dataItems.each(function (t) {
						var n = t.getFeature();
						n && e.push(n)
					}), this.mapLines.each(function (n) {
						if (-1 == t.dataItems.indexOf(n._dataItem)) {
							var i = n.getFeature();
							i && e.push(i)
						}
					}), e
				}, e.prototype.getLineById = function (t) {
					return Ur.find(this.mapLines.iterator(), function (e) {
						return e.dataItem.dataContext.id == t
					})
				}, e
			}(Lr);
		d.c.registeredClasses.MapLineSeries = bo, d.c.registeredClasses.MapLineSeriesDataItem = yo;
		var Po = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.className = "Graticule", e.applyTheme(), e.shortestDistance = !0, e
			}
			return Object(c.c)(e, t), e
		}(mo);
		d.c.registeredClasses.Graticule = Po;
		var _o = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "GraticuleSeriesDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e
			}(yo),
			So = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "GraticuleSeries", e.longitudeStep = 10, e.latitudeStep = 10, e.north = 90, e.south = -90, e.east = -180, e.west =
						180, e.fitExtent = !0, e.singleSprite = !0, e.events.disableType("geoBoundsChanged"), e.mapLines.template.line.strokeOpacity = .08,
						e.ignoreBounds = !1, e.hiddenInLegend = !0, e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new _o
				}, e.prototype.validateData = function () {
					var e = this;
					t.prototype.validateData.call(this), this.mapLines.clear();
					var n = Sn();
					if (n) {
						n.stepMinor([this.longitudeStep, this.latitudeStep]), n.stepMajor([360, 360]);
						var i = this.chart;
						if (this.fitExtent ? n.extent([
								[i.east, i.north],
								[i.west, i.south]
							]) : n.extent([
								[this.east, this.north],
								[this.west, this.south]
							]), this.singleSprite) {
							this.mapLines.create().multiLine = n().coordinates
						} else {
							var r = n.lines();
							Nr.each(r, function (t) {
								e.mapLines.create().multiLine = [t.coordinates]
							})
						}
					}
				}, e.prototype.createLine = function () {
					return new Po
				}, Object.defineProperty(e.prototype, "latitudeStep", {
					get: function () {
						return this.getPropertyValue("latitudeStep")
					},
					set: function (t) {
						this.setPropertyValue("latitudeStep", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "longitudeStep", {
					get: function () {
						return this.getPropertyValue("longitudeStep")
					},
					set: function (t) {
						this.setPropertyValue("longitudeStep", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "fitExtent", {
					get: function () {
						return this.getPropertyValue("fitExtent")
					},
					set: function (t) {
						this.setPropertyValue("fitExtent", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "singleSprite", {
					get: function () {
						return this.getPropertyValue("singleSprite")
					},
					set: function (t) {
						this.setPropertyValue("singleSprite", t) && this.invalidateData()
					},
					enumerable: !0,
					configurable: !0
				}), e
			}(bo);
		d.c.registeredClasses.GraticuleSeries = So, d.c.registeredClasses.GraticuleSeriesDataItem = _o;
		var Mo = n("zhwk"),
			xo = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapChartDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e
			}(l.b),
			jo = function (t) {
				function e() {
					var e = t.call(this) || this;
					e.scaleRatio = 1, e.zoomDuration = 1e3, e.zoomEasing = oo.cubicOut, e.minZoomLevel = 1, e.maxZoomLevel = 32, e._prevZoomGeoPoint = {
							latitude: 0,
							longitude: 0
						}, e.className = "MapChart", e.projection = new Qr, e.setPropertyValue("deltaLatitude", 0), e.setPropertyValue("deltaLongitude", 0),
						e.setPropertyValue("deltaGamma", 0), e.maxPanOut = .7, e.homeZoomLevel = 1, e.zoomStep = 2, e.layout = "absolute", e.centerMapOnZoomOut = !
						0, e.padding(0, 0, 0, 0), Yr.used(e.backgroundSeries), e.minWidth = 10, e.minHeight = 10, e.events.once("inited", e.handleAllInited,
							e, !1);
					var n = e.seriesContainer;
					n.visible = !1, n.inert = !0, n.resizable = !0, n.events.on("transformed", e.handleMapTransform, e, !1), n.events.on("doublehit", e
						.handleDoubleHit, e, !1), n.events.on("dragged", e.handleDrag, e, !1), n.zIndex = 0, n.dragWhileResize = !0, n.adapter.add(
						"scale",
						function (t, n) {
							return v.fitToRange(t, e.minZoomLevel, e.maxZoomLevel)
						}), e.events.on("maxsizechanged", function (t) {
						0 != t.previousWidth && 0 != t.previousHeight || (e.updateExtremes(), e.updateCenterGeoPoint())
					}, void 0, !1);
					var i = e.chartContainer;
					i.parent = e, i.zIndex = -1, e._disposers.push(e.events.on("maxsizechanged", function () {
						if (e.inited) {
							e._mapAnimation && e._mapAnimation.stop();
							var t = !0;
							e.series.each(function (e) {
								e.updateTooltipBounds(), e.inited && !e.dataInvalid || (t = !1)
							}), t && e.updateScaleRatio(), e.zoomToGeoPoint(e._zoomGeoPointReal, e.zoomLevel, !0, 0)
						}
					}, void 0, !1));
					var r = i.background;
					r.fillOpacity = 0, r.events.on("down", function (t) {
						e.seriesContainer.dragStart(t.target.interactions.downPointers.getIndex(0))
					}, e), r.events.on("up", function (t) {
						e.seriesContainer.dragStop()
					}, e), r.events.on("doublehit", e.handleDoubleHit, e), r.focusable = !0, i.events.on("down", e.handleMapDown, e, !1), e.addDisposer(
						n.events.on("down", function () {
							var t = e.seriesContainer.interactions.inertias.getKey("move");
							t && t.done()
						})), e.background.fillOpacity = 0, e._disposers.push(Object(Mo.b)().body.events.on("keyup", function (t) {
						if (e.topParent.hasFocused) {
							var n = io.b.getEventKey(t.event);
							if (!e._zoomControl || !e._zoomControl.thumb.isFocused) switch (n) {
							case "up":
								e.pan({
									x: 0,
									y: .1
								});
								break;
							case "down":
								e.pan({
									x: 0,
									y: -.1
								});
								break;
							case "left":
								e.pan({
									x: .1,
									y: 0
								});
								break;
							case "right":
								e.pan({
									x: -.1,
									y: 0
								})
							}
						}
					}, e)), e.mouseWheelBehavior = "zoom";
					var o = Object(Mo.b)();
					e._disposers.push(o.body.events.on("down", e.handlePanDown, e)), e._disposers.push(o.body.events.on("up", e.handlePanUp, e));
					var a = e.seriesContainer.createChild($r.a);
					return a.radius = 10, a.inert = !0, a.isMeasured = !1, a.events.on("transformed", e.handlePanMove, e, !1), a.interactionsEnabled = !
						1, a.opacity = 0, a.x = 0, a.y = 0, e.panSprite = a, e.panBehavior = "move", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.handlePanDown = function (t) {
					var e = Yr.documentPointToSvg(t.pointer.point, this.htmlContainer);
					e.x > 0 && e.y > 0 && e.x < this.svgContainer.width && e.y < this.svgContainer.height && (this._downPointOrig = Yr.documentPointToSprite(
							t.pointer.point, this.seriesContainer), this.panSprite.moveTo(this._downPointOrig), this.panSprite.dragStart(t.pointer), this._downDeltaLongitude =
						this.deltaLongitude, this._downDeltaLatitude = this.deltaLatitude)
				}, e.prototype.handlePanUp = function (t) {
					this._downPointOrig && this.panSprite.dragStop(t.pointer, !0), this._downPointOrig = void 0
				}, e.prototype.handlePanMove = function () {
					if (!this.seriesContainer.isResized) {
						if (Object(Mo.b)().areTransformed([this.panSprite.interactions, this.seriesContainer.interactions])) return;
						var t = this.projection.d3Projection,
							e = this.panBehavior;
						if ("move" != e && "none" != e && this._downPointOrig && t.rotate) {
							var n = t.rotate(),
								i = n[0],
								r = n[1],
								o = n[2];
							t.rotate([0, 0, 0]);
							var a = this.projection.invert(this._downPointOrig),
								u = {
									x: this.panSprite.pixelX,
									y: this.panSprite.pixelY
								},
								s = void 0;
							u && (s = this.projection.invert(u)), t.rotate([i, r, o]), s && ("rotateLat" != e && "rotateLongLat" != e || (this.deltaLatitude =
								this._downDeltaLatitude + s.latitude - a.latitude), "rotateLong" != e && "rotateLongLat" != e || (this.deltaLongitude = this._downDeltaLongitude +
								s.longitude - a.longitude))
						}
					}
				}, e.prototype.handleAllInited = function () {
					var t = this,
						e = !0;
					if (this.seriesContainer.visible = !0, this.series.each(function (t) {
							t.inited && !t.dataInvalid || (e = !1)
						}), e) this.updateCenterGeoPoint(), this.updateScaleRatio(), this.goHome(0);
					else {
						var n = d.c.events.once("exitframe", function () {
							t.removeDispose(n), t.handleAllInited()
						}, this, !1);
						this.addDisposer(n)
					}
				}, e.prototype.updateZoomGeoPoint = function () {
					var t = Yr.svgPointToSprite({
							x: this.innerWidth / 2 + this.pixelPaddingLeft,
							y: this.innerHeight / 2 + this.pixelPaddingTop
						}, this.series.getIndex(0)),
						e = this.projection.invert(t);
					this._zoomGeoPointReal = e
				}, e.prototype.updateCenterGeoPoint = function () {
					var t, e, n, i;
					if (this.backgroundSeries) {
						var r = this.backgroundSeries.getFeatures();
						if (r.length > 0) {
							var o = this.projection.d3Path.bounds(r[0].geometry);
							t = o[0][0], n = o[0][1], e = o[1][0], i = o[1][1]
						}
					} else this.series.each(function (r) {
						var o = r.group.node.getBBox();
						(t > o.x || !g.isNumber(t)) && (t = o.x), (e < o.x + o.width || !g.isNumber(e)) && (e = o.x + o.width), (n > o.y || !g.isNumber(
							n)) && (n = o.y), (i < o.y + o.height || !g.isNumber(i)) && (i = o.y + o.height)
					});
					this.seriesMaxLeft = t, this.seriesMaxRight = e, this.seriesMaxTop = n, this.seriesMaxBottom = i, this.seriesWidth = e - t, this.seriesHeight =
						i - n, this.seriesWidth > 0 && this.seriesHeight > 0 ? (this.chartContainer.visible = !0, this._centerGeoPoint = this.projection.invert({
							x: t + (e - t) / 2,
							y: n + (i - n) / 2
						}), this._zoomGeoPointReal && g.isNumber(this._zoomGeoPointReal.latitude) || (this._zoomGeoPointReal = this._centerGeoPoint)) :
						this.chartContainer.visible = !1
				}, e.prototype.handleDrag = function () {
					var t = this.zoomLevel * this.scaleRatio,
						e = this.seriesWidth * t,
						n = this.seriesHeight * t,
						i = this.seriesContainer,
						r = this.seriesMaxLeft * t,
						o = this.seriesMaxRight * t,
						a = this.seriesMaxTop * t,
						u = this.seriesMaxBottom * t,
						s = i.pixelX,
						c = i.pixelY,
						l = this.maxPanOut,
						h = Math.min(this.maxWidth * (1 - l) - e - r, -r);
					s < h && (s = h);
					var p = Math.max(this.maxWidth * l - r, this.maxWidth - o);
					s > p && (s = p);
					var f = Math.min(this.maxHeight * (1 - l) - n - a, -a);
					c < f && (c = f);
					var d = Math.max(this.maxHeight * l - a, this.maxHeight - u);
					c > d && (c = d), i.moveTo({
						x: s,
						y: c
					}, void 0, void 0, !0), this._zoomGeoPointReal = this.zoomGeoPoint
				}, e.prototype.applyInternalDefaults = function () {
					t.prototype.applyInternalDefaults.call(this), g.hasValue(this.readerTitle) || (this.readerTitle = this.language.translate("Map")),
						g.hasValue(this.background.readerTitle) || (this.background.readerTitle = this.language.translate(
							"Use plus and minus keys on your keyboard to zoom in and out"))
				}, e.prototype.handleMapDown = function () {
					this._mapAnimation && this._mapAnimation.stop()
				}, e.prototype.handleDoubleHit = function (t) {
					var e = Yr.documentPointToSvg(t.point, this.htmlContainer, this.svgContainer.cssScale),
						n = this.svgPointToGeo(e);
					this.zoomIn(n)
				}, e.prototype.handleWheel = function (t) {
					var e = this.seriesContainer.interactions.inertias.getKey("move");
					e && e.done();
					var n = Yr.documentPointToSvg(t.point, this.htmlContainer, this.svgContainer.cssScale),
						i = this.svgPointToGeo(n);
					t.shift.y < 0 ? this.zoomIn(i, void 0, this.interactions.mouseOptions.sensitivity) : this.zoomOut(i, void 0, this.interactions.mouseOptions
						.sensitivity)
				}, Object.defineProperty(e.prototype, "mouseWheelBehavior", {
					get: function () {
						return this.getPropertyValue("mouseWheelBehavior")
					},
					set: function (t) {
						this.setPropertyValue("mouseWheelBehavior", t) && ("none" != t ? (this._mouseWheelDisposer = this.chartContainer.events.on(
							"wheel", this.handleWheel, this, !1), this._disposers.push(this._mouseWheelDisposer)) : (this._mouseWheelDisposer && this._mouseWheelDisposer
							.dispose(), this.chartContainer.wheelable = !1))
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "panBehavior", {
					get: function () {
						return this.getPropertyValue("panBehavior")
					},
					set: function (t) {
						if (this.setPropertyValue("panBehavior", t)) {
							var e = this.seriesContainer;
							switch (this.panSprite.draggable = !1, e.draggable = !1, t) {
							case "move":
								e.draggable = !0;
								break;
							default:
								this.panSprite.draggable = !0
							}
						}
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "centerMapOnZoomOut", {
					get: function () {
						return this.getPropertyValue("centerMapOnZoomOut")
					},
					set: function (t) {
						this.setPropertyValue("centerMapOnZoomOut", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "projection", {
					get: function () {
						return this.getPropertyValue("projection")
					},
					set: function (t) {
						var e = this;
						this.setPropertyValue("projection", t) && (this.invalidateProjection(), t.chart = this, this._backgroundSeries && this._backgroundSeries
							.invalidate(), this.inited && this.updateExtremes(), this.series.each(function (t) {
								t.events.once("validated", function () {
									e.updateCenterGeoPoint(), e.updateScaleRatio(), e.goHome(0)
								})
							}))
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.validateDataItems = function () {
					t.prototype.validateDataItems.call(this), this.updateExtremes()
				}, e.prototype.updateExtremes = function () {
					var t, e, n, i;
					this.series.each(function (r) {
						r.ignoreBounds || r instanceof So && r.fitExtent || ((r.north > e || !g.isNumber(e)) && (e = r.north), (r.south < i || !g.isNumber(
							i)) && (i = r.south), (r.west < n || !g.isNumber(n)) && (n = r.west), (r.east > t || !g.isNumber(t)) && (t = r.east))
					});
					var r = [],
						o = !1;
					this.series.each(function (t) {
						t instanceof So && !t.fitExtent && (r = t.getFeatures(), o = !0)
					}), o || this.series.each(function (t) {
						t.ignoreBounds || t instanceof So && t.fitExtent || (r = r.concat(t.getFeatures()))
					});
					var a = v.max(50, this.innerWidth),
						u = v.max(50, this.innerHeight),
						s = this.projection.d3Projection;
					if (r.length > 0 && s && (this.east != t || this.west != n || this.north != e || this.south != i)) {
						if (this.east = t, this.west = n, this.north = e, this.south = i, s.rotate) {
							var c = s.rotate(),
								l = c[0],
								h = c[1],
								p = c[2];
							this.deltaLongitude = l, this.deltaLatitude = h, this.deltaGamma = p
						}
						var f = {
								type: "FeatureCollection",
								features: r
							},
							d = s.scale();
						if (s.fitSize([a, u], f), s.scale() != d && this.invalidateDataUsers(), this.series.each(function (t) {
								t instanceof So && t.invalidateData()
							}), this._backgroundSeries) {
							var m = this._backgroundSeries.mapPolygons.getIndex(0);
							m && (m.multiPolygon = Zr(this.north, this.east, this.south, this.west))
						}
						this._fitWidth = a, this._fitHeight = u
					}
					this._zoomGeoPointReal && g.isNumber(this._zoomGeoPointReal.latitude) || this.goHome(0)
				}, e.prototype.updateScaleRatio = function () {
					var t;
					this.updateCenterGeoPoint();
					var e = this.innerWidth / this.seriesWidth,
						n = this.innerHeight / this.seriesHeight;
					t = v.min(e, n), (g.isNaN(t) || t == 1 / 0) && (t = 1), t != this.scaleRatio && (this.scaleRatio = t, Ur.each(this.series.iterator(),
						function (e) {
							e.scale = t, e.updateTooltipBounds()
						}), this.backgroundSeries.scale = t, this.dispatch("scaleratiochanged"))
				}, e.prototype.svgPointToGeo = function (t) {
					var e = this.series.getIndex(0);
					if (e) {
						var n = Yr.svgPointToSprite(t, e);
						return this.seriesPointToGeo(n)
					}
				}, e.prototype.geoPointToSVG = function (t) {
					var e = this.series.getIndex(0);
					if (e) {
						var n = this.geoPointToSeries(t);
						return Yr.spritePointToSvg(n, e)
					}
				}, e.prototype.seriesPointToGeo = function (t) {
					return this.projection.invert(t)
				}, e.prototype.geoPointToSeries = function (t) {
					return this.projection.convert(t)
				}, Object.defineProperty(e.prototype, "geodata", {
					get: function () {
						return this._geodata
					},
					set: function (t) {
						t != this._geodata && (this._geodata = t, this.reverseGeodata && this.processReverseGeodata(this._geodata), this.invalidateData(),
							this.dataUsers.each(function (t) {
								for (var e = t.data.length - 1; e >= 0; e--) 1 == t.data[e].madeFromGeoData && t.data.splice(e, 1);
								t.disposeData(), t.invalidateData()
							}))
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "reverseGeodata", {
					get: function () {
						return this.getPropertyValue("reverseGeodata")
					},
					set: function (t) {
						this.setPropertyValue("reverseGeodata", t) && this._geodata && this.processReverseGeodata(this._geodata)
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.processReverseGeodata = function (t) {
					for (var e = 0; e < t.features.length; e++)
						for (var n = t.features[e], i = 0; i < n.geometry.coordinates.length; i++)
							if ("MultiPolygon" == n.geometry.type)
								for (var r = 0; r < n.geometry.coordinates[i].length; r++) n.geometry.coordinates[i][r].reverse();
							else n.geometry.coordinates[i].reverse()
				}, e.prototype.zoomToGeoPoint = function (t, e, n, i, r) {
					var o = this;
					if (!t) {
						var a = !1;
						if (this.series.each(function (t) {
								t.dataItems.length > 0 && (a = !0)
							}), !a) return;
						t = this.zoomGeoPoint
					}
					if (t && g.isNumber(t.longitude) && g.isNumber(t.latitude)) {
						this._zoomGeoPointReal = t, e = v.fitToRange(e, this.minZoomLevel, this.maxZoomLevel);
						var u = this.projection.convert(t);
						if (u) {
							var s = this.geoPointToSVG(t),
								c = Yr.svgPointToSprite(s, this);
							n && (c = {
								x: this.innerWidth / 2,
								y: this.innerHeight / 2
							}), g.isNumber(i) || (i = this.zoomDuration);
							var l = c.x - u.x * e * this.scaleRatio,
								h = c.y - u.y * e * this.scaleRatio;
							return !r && e < this.zoomLevel && this.centerMapOnZoomOut && e < 1.5 && (l = this.innerWidth / 2 - (this.seriesMaxLeft + (this.seriesMaxRight -
								this.seriesMaxLeft) / 2) * e * this.scaleRatio, h = this.innerHeight / 2 - (this.seriesMaxTop + (this.seriesMaxBottom - this.seriesMaxTop) /
								2) * e * this.scaleRatio), this._mapAnimation = this.seriesContainer.animate([{
								property: "scale",
								to: e
							}, {
								property: "x",
								from: this.seriesContainer.pixelX,
								to: l
							}, {
								property: "y",
								from: this.seriesContainer.pixelY,
								to: h
							}], i, this.zoomEasing), this._disposers.push(this._mapAnimation.events.on("animationended", function () {
								o._zoomGeoPointReal = o.zoomGeoPoint
							})), this.seriesContainer.validatePosition(), this._mapAnimation
						}
					}
				}, e.prototype.zoomToMapObject = function (t, e, n, i) {
					void 0 == n && (n = !0);
					var r = this.seriesContainer.interactions.inertias.getKey("move");
					if (r && r.done(), t instanceof Ir) return g.isNaN(e) && (e = 5), this.zoomToGeoPoint({
						latitude: t.latitude,
						longitude: t.longitude
					}, e, n, i, !0);
					var o = t.dataItem;
					if (o && g.isNumber(o.zoomLevel) && (e = o.zoomLevel), t instanceof qr) {
						var a = t.dataItem,
							u = t.polygon.bbox;
						0 != u.width && 0 != u.height || (u = t.polygon.group.getBBox()), g.isNumber(e) || (e = Math.min(this.seriesWidth / u.width, this
							.seriesHeight / u.height));
						var s = void 0;
						if (a && g.hasValue(a.zoomGeoPoint)) s = a.zoomGeoPoint;
						else {
							var c = {
									x: u.x + u.width / 2,
									y: u.y + u.height / 2
								},
								l = Yr.spritePointToSprite(c, t.polygon, t.series);
							s = this.seriesPointToGeo(l)
						}
						return this.zoomToGeoPoint(s, e, !0, i, !0)
					}
				}, e.prototype.zoomToRectangle = function (t, e, n, i, r, o, a) {
					g.isNaN(r) && (r = 1);
					var u = v.min(i, e),
						s = v.max(i, e);
					i = u, e = s;
					var c = v.normalizeAngle(180 - this.deltaLongitude);
					c > 180 && (c -= 360);
					var l = i + (e - i) / 2,
						h = i - e;
					i < c && e > c && (l += 180, h = v.normalizeAngle(e - i - 360));
					var p = r * Math.min((this.south - this.north) / (n - t), Math.abs((this.west - this.east) / h));
					return this.zoomToGeoPoint({
						latitude: t + (n - t) / 2,
						longitude: l
					}, p, o, a, !0)
				}, e.prototype.zoomIn = function (t, e, n) {
					void 0 === n && (n = 1);
					var i = 1 + (this.zoomStep - 1) * n;
					return i < 1 && (i = 1), this.zoomToGeoPoint(t, this.zoomLevel * i, !1, e)
				}, e.prototype.zoomOut = function (t, e, n) {
					void 0 === n && (n = 1);
					var i = 1 + (this.zoomStep - 1) * n;
					return i < 1 && (i = 1), this.zoomToGeoPoint(t, this.zoomLevel / i, !1, e)
				}, e.prototype.pan = function (t, e) {
					var n = this.geoPointToSVG(this.zoomGeoPoint);
					n.x += this.pixelWidth * t.x, n.y += this.pixelHeight * t.y, this.zoomToGeoPoint(this.svgPointToGeo(n), this.zoomLevel, !0, e, !0)
				}, Object.defineProperty(e.prototype, "zoomGeoPoint", {
					get: function () {
						var t = Yr.spritePointToSvg({
							x: this.pixelWidth / 2,
							y: this.pixelHeight / 2
						}, this);
						return this.svgPointToGeo(t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "zoomLevel", {
					get: function () {
						return this.seriesContainer.scale
					},
					set: function (t) {
						this.seriesContainer.scale = t
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.handleMapTransform = function () {
					this.zoomLevel != this._prevZoomLevel && (this.dispatch("zoomlevelchanged"), this._prevZoomLevel = this.zoomLevel, this.svgContainer
							.readerAlert(this.language.translate("Zoom level changed to %1", this.language.locale, g.castString(this.zoomLevel)))), !this.zoomGeoPoint ||
						this._prevZoomGeoPoint.latitude == this.zoomGeoPoint.latitude && this._prevZoomGeoPoint.longitude == this.zoomGeoPoint.longitude ||
						this.dispatch("mappositionchanged")
				}, Object.defineProperty(e.prototype, "smallMap", {
					get: function () {
						if (!this._smallMap) {
							var t = new no;
							this.smallMap = t
						}
						return this._smallMap
					},
					set: function (t) {
						this._smallMap && this.removeDispose(this._smallMap), this._smallMap = t, this._smallMap.chart = this, t.parent = this.chartContainer
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "zoomControl", {
					get: function () {
						return this._zoomControl
					},
					set: function (t) {
						this._zoomControl && this.removeDispose(this._zoomControl), this._zoomControl = t, t.chart = this, t.parent = this.chartContainer,
							t.plusButton.exportable = !1, t.minusButton.exportable = !1
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.createSeries = function () {
					return new Lr
				}, Object.defineProperty(e.prototype, "deltaLongitude", {
					get: function () {
						return this.getPropertyValue("deltaLongitude")
					},
					set: function (t) {
						t = v.round(t, 3), this.setPropertyValue("deltaLongitude", so(t)) && (this.rotateMap(), this.updateZoomGeoPoint())
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "deltaLatitude", {
					get: function () {
						return this.getPropertyValue("deltaLatitude")
					},
					set: function (t) {
						t = v.round(t, 3), this.setPropertyValue("deltaLatitude", t) && (this.rotateMap(), this.updateZoomGeoPoint())
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "deltaGamma", {
					get: function () {
						return this.getPropertyValue("deltaGamma")
					},
					set: function (t) {
						t = v.round(t, 3), this.setPropertyValue("deltaGamma", t) && (this.rotateMap(), this.updateZoomGeoPoint())
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.rotateMap = function () {
					this.projection.d3Projection && this.projection.d3Projection.rotate && (this.projection.d3Projection.rotate([this.deltaLongitude,
						this.deltaLatitude, this.deltaGamma
					]), this.invalidateProjection())
				}, Object.defineProperty(e.prototype, "maxPanOut", {
					get: function () {
						return this.getPropertyValue("maxPanOut")
					},
					set: function (t) {
						this.setPropertyValue("maxPanOut", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "homeGeoPoint", {
					get: function () {
						return this.getPropertyValue("homeGeoPoint")
					},
					set: function (t) {
						this.setPropertyValue("homeGeoPoint", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "homeZoomLevel", {
					get: function () {
						return this.getPropertyValue("homeZoomLevel")
					},
					set: function (t) {
						this.setPropertyValue("homeZoomLevel", t)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "zoomStep", {
					get: function () {
						return this.getPropertyValue("zoomStep")
					},
					set: function (t) {
						this.setPropertyValue("zoomStep", t)
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.invalidateProjection = function () {
					this.east = void 0, this.invalidateDataUsers(), this.updateCenterGeoPoint()
				}, Object.defineProperty(e.prototype, "geodataSource", {
					get: function () {
						return this._dataSources.geodata || this.getDataSource("geodata"), this._dataSources.geodata
					},
					set: function (t) {
						var e = this;
						this._dataSources.geodata && this.removeDispose(this._dataSources.geodata), this._dataSources.geodata = t, this._dataSources.geodata
							.component = this, this.events.on("inited", function () {
								e.loadData("geodata")
							}, this, !1), this.setDataSourceEvents(t, "geodata")
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.processConfig = function (e) {
					if (g.hasValue(e.geodata) && g.isString(e.geodata)) {
						var n = e.geodata;
						if (g.hasValue(window["am4geodata_" + e.geodata])) e.geodata = window["am4geodata_" + e.geodata];
						else try {
							e.geodata = JSON.parse(e.geodata)
						} catch (t) {
							this.raiseCriticalError(Error("MapChart error: Geodata `" + n + "` is not loaded or is incorrect."), !0)
						}
					}
					g.hasValue(e.projection) && g.isString(e.projection) && (e.projection = this.createClassInstance(e.projection)), g.hasValue(e.smallMap) &&
						!g.hasValue(e.smallMap.type) && (e.smallMap.type = "SmallMap"), g.hasValue(e.zoomControl) && !g.hasValue(e.zoomControl.type) && (
							e.zoomControl.type = "ZoomControl"), t.prototype.processConfig.call(this, e)
				}, e.prototype.handleSeriesAdded = function (e) {
					t.prototype.handleSeriesAdded.call(this, e);
					var n = e.newValue;
					n.scale = this.scaleRatio, n.events.on("validated", this.updateCenterGeoPoint, this, !1)
				}, e.prototype.configOrder = function (e, n) {
					return e == n ? 0 : "smallMap" == e ? 1 : "smallMap" == n ? -1 : "series" == e ? 1 : "series" == n ? -1 : t.prototype.configOrder.call(
						this, e, n)
				}, e.prototype.asIs = function (e) {
					return "projection" == e || "geodata" == e || t.prototype.asIs.call(this, e)
				}, Object.defineProperty(e.prototype, "centerGeoPoint", {
					get: function () {
						return this._centerGeoPoint
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.goHome = function (t) {
					var e = this.homeGeoPoint;
					e || (e = this.centerGeoPoint), e && this.zoomToGeoPoint(e, this.homeZoomLevel, !0, t, !0)
				}, e.prototype.setPaper = function (e) {
					return this.svgContainer && (this.svgContainer.hideOverflow = !0), t.prototype.setPaper.call(this, e)
				}, Object.defineProperty(e.prototype, "backgroundSeries", {
					get: function () {
						var t = this;
						if (!this._backgroundSeries) {
							var e = new Kr;
							e.parent = this.seriesContainer, e.chart = this, e.hiddenInLegend = !0, e.mapPolygons.template.focusable = !1, e.addDisposer(
								new h.b(function () {
									t._backgroundSeries = void 0
								})), this._disposers.push(e);
							var n = (new p.a).getFor("background"),
								i = e.mapPolygons.template.polygon;
							i.stroke = n, i.fill = n, i.fillOpacity = 0, i.strokeOpacity = 0, e.mapPolygons.create(), this._backgroundSeries = e
						}
						return this._backgroundSeries
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.setLegend = function (e) {
					t.prototype.setLegend.call(this, e), e && (e.parent = this)
				}, e.prototype.setTapToActivate = function (e) {
					t.prototype.setTapToActivate.call(this, e), this.seriesContainer.interactions.isTouchProtected = !0, this.panSprite.interactions.isTouchProtected = !
						0
				}, e.prototype.handleTapToActivate = function () {
					t.prototype.handleTapToActivate.call(this), this.seriesContainer.interactions.isTouchProtected = !1, this.panSprite.interactions.isTouchProtected = !
						1
				}, e.prototype.handleTapToActivateDeactivation = function () {
					t.prototype.handleTapToActivateDeactivation.call(this), this.seriesContainer.interactions.isTouchProtected = !0, this.panSprite.interactions
						.isTouchProtected = !0
				}, e.prototype.asFunction = function (e) {
					return "zoomEasing" == e || t.prototype.asIs.call(this, e)
				}, e.prototype.hasLicense = function () {
					if (ro.a.commercialLicense) return !0;
					if (!t.prototype.hasLicense.call(this)) return !1;
					for (var e = 0; e < ro.a.licenses.length; e++)
						if (ro.a.licenses[e].match(/^MP.{5,}/i)) return !0;
					return !1
				}, e
			}(l.a);
		d.c.registeredClasses.MapChart = jo;
		var wo = n("xgTw"),
			Oo = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapSpline", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createLine = function () {
					this.line = new wo.a, this.line.tensionX = .8, this.line.tensionY = .8
				}, Object.defineProperty(e.prototype, "shortestDistance", {
					get: function () {
						return !1
					},
					set: function (t) {},
					enumerable: !0,
					configurable: !0
				}), e
			}(mo);
		d.c.registeredClasses.MapSpline = Oo;
		var Lo = n("MXvJ"),
			Co = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapArc", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createLine = function () {
					this.line = new Lo.a
				}, Object.defineProperty(e.prototype, "shortestDistance", {
					get: function () {
						return !1
					},
					set: function (t) {},
					enumerable: !0,
					configurable: !0
				}), e
			}(mo);
		d.c.registeredClasses.MapArc = Co;
		var Eo = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapSplineSeriesDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e
			}(yo),
			Io = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapSplineSeries", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new Eo
				}, e.prototype.createLine = function () {
					return new Oo
				}, e
			}(bo);
		d.c.registeredClasses.MapSplineSeries = Io, d.c.registeredClasses.MapSplineSeriesDataItem = Eo;
		var To = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapArcSeriesDataItem", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e
			}(yo),
			Go = function (t) {
				function e() {
					var e = t.call(this) || this;
					return e.className = "MapArcSeries", e.applyTheme(), e
				}
				return Object(c.c)(e, t), e.prototype.createDataItem = function () {
					return new To
				}, e.prototype.createLine = function () {
					return new Co
				}, e
			}(bo);
		d.c.registeredClasses.MapArcSeries = Go, d.c.registeredClasses.MapArcSeriesDataItem = To;
		var Do = n("aGXA"),
			No = n("CnhP"),
			zo = function (t) {
				function e() {
					var e = t.call(this) || this;
					e._chart = new h.d, e.className = "ZoomControl", e.align = "right", e.valign = "bottom", e.layout = "vertical", e.padding(5, 5, 5,
						5);
					var n = new p.a,
						i = e.createChild(Do.a);
					i.shouldClone = !1, i.label.text = "+", e.plusButton = i;
					var r = e.createChild(Cr.a);
					r.shouldClone = !1, r.background.fill = n.getFor("alternativeBackground"), r.background.fillOpacity = .05, r.background.events.on(
						"hit", e.handleBackgroundClick, e, !1), r.events.on("sizechanged", e.updateThumbSize, e, !1), e.slider = r;
					var o = r.createChild(Do.a);
					o.shouldClone = !1, o.padding(0, 0, 0, 0), o.draggable = !0, o.events.on("drag", e.handleThumbDrag, e, !1), e.thumb = o;
					var a = e.createChild(Do.a);
					return a.shouldClone = !1, a.label.text = "-", e.minusButton = a, e.thumb.role = "slider", e.thumb.readerLive = "polite", e.thumb.readerTitle =
						e.language.translate("Use arrow keys to zoom in and out"), e.minusButton.readerTitle = e.language.translate(
							"Press ENTER to zoom in"), e.plusButton.readerTitle = e.language.translate("Press ENTER to zoom out"), e.applyTheme(), e.events.on(
							"propertychanged",
							function (t) {
								"layout" == t.property && e.fixLayout()
							}, void 0, !1), e._disposers.push(e._chart), e.fixLayout(), e
				}
				return Object(c.c)(e, t), e.prototype.fixLayout = function () {
					var t = this.plusButton,
						e = this.minusButton,
						n = this.thumb,
						i = this.slider;
					t.x = void 0, t.y = void 0, e.x = void 0, e.y = void 0, n.x = void 0, n.y = void 0, i.x = void 0, i.y = void 0, t.padding(6, 10, 6,
							10), e.padding(6, 10, 6, 10), e.label.align = "center", e.label.valign = "middle", t.label.align = "center", t.label.valign =
						"middle", "vertical" == this.layout ? (this.width = 40, this.height = void 0, e.width = Object(vo.c)(100), e.height = void 0, n.width =
							Object(vo.c)(100), n.height = void 0, t.width = Object(vo.c)(100), t.height = void 0, i.width = Object(vo.c)(100), e.marginTop =
							1, t.marginBottom = 2, i.height = 0, e.toFront(), t.toBack(), n.minX = 0, n.maxX = 0, n.minY = 0) : "horizontal" == this.layout &&
						(this.height = 40, this.width = void 0, e.height = Object(vo.c)(100), e.width = void 0, t.height = Object(vo.c)(100), t.width =
							void 0, n.height = Object(vo.c)(100), n.width = void 0, n.minX = 0, n.minY = 0, n.maxY = 0, i.height = Object(vo.c)(100), i.width =
							0, e.toBack(), t.toFront())
				}, e.prototype.handleBackgroundClick = function (t) {
					var e = t.target,
						n = t.spritePoint.y,
						i = this.chart,
						r = Math.log(i.maxZoomLevel) / Math.LN2,
						o = Math.log(i.minZoomLevel) / Math.LN2,
						a = (e.pixelHeight - n) / e.pixelHeight * (o + (r - o)),
						u = Math.pow(2, a);
					i.zoomToGeoPoint(i.zoomGeoPoint, u)
				}, Object.defineProperty(e.prototype, "chart", {
					get: function () {
						return this._chart.get()
					},
					set: function (t) {
						var e = this;
						this._chart.set(t, new h.c([t.events.on("maxsizechanged", this.updateThumbSize, this, !1), t.events.on("zoomlevelchanged", this
							.updateThumb, this, !1), this.minusButton.events.on("hit", function () {
							t.zoomOut(t.zoomGeoPoint)
						}, t, !1), Object(Mo.b)().body.events.on("keyup", function (n) {
							e.topParent.hasFocused && (io.b.isKey(n.event, "plus") ? t.zoomIn() : io.b.isKey(n.event, "minus") && t.zoomOut())
						}, t), this.plusButton.events.on("hit", function () {
							t.zoomIn(t.zoomGeoPoint)
						}, t, !1)]))
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.updateThumbSize = function () {
					if (this.chart) {
						var t = this.slider,
							e = this.thumb;
						"vertical" == this.layout ? (e.minHeight = Math.min(this.slider.pixelHeight, 20), e.height = t.pixelHeight / this.stepCount, e.maxY =
							t.pixelHeight - e.pixelHeight, e.pixelHeight <= 1 ? e.visible = !1 : e.visible = !0) : (e.minWidth = Math.min(this.slider.pixelWidth,
								20), e.width = t.pixelWidth / this.stepCount, e.maxX = t.pixelWidth - e.pixelWidth, e.pixelWidth <= 1 ? e.visible = !1 : e.visible = !
							0)
					}
				}, e.prototype.updateThumb = function () {
					var t = this.slider,
						e = this.chart,
						n = this.thumb;
					if (!n.isDown) {
						var i = (Math.log(e.zoomLevel) - Math.log(this.chart.minZoomLevel)) / Math.LN2;
						"vertical" == this.layout ? n.y = t.pixelHeight - (t.pixelHeight - n.pixelHeight) * i / this.stepCount - n.pixelHeight : n.x = t.pixelWidth *
							i / this.stepCount
					}
				}, e.prototype.handleThumbDrag = function () {
					var t, e = this.slider,
						n = this.chart,
						i = this.thumb;
					t = Math.log(this.chart.minZoomLevel) / Math.LN2 + (t = "vertical" == this.layout ? this.stepCount * (e.pixelHeight - i.pixelY - i
						.pixelHeight) / (e.pixelHeight - i.pixelHeight) : this.stepCount * i.pixelX / e.pixelWidth);
					var r = Math.pow(2, t);
					n.zoomToGeoPoint(void 0, r, !1, 0)
				}, Object.defineProperty(e.prototype, "stepCount", {
					get: function () {
						return Math.log(this.chart.maxZoomLevel) / Math.LN2 - Math.log(this.chart.minZoomLevel) / Math.LN2
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.createBackground = function () {
					return new No.a
				}, e
			}(Cr.a);
		d.c.registeredClasses.ZoomControl = zo;
		var Vo = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = tr(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.Mercator = Vo;
		var Ao = Math.abs,
			Ro = Math.atan,
			ko = Math.atan2,
			Fo = (Math.ceil, Math.cos),
			Bo = Math.exp,
			Ho = Math.floor,
			Wo = Math.log,
			Zo = Math.max,
			qo = Math.min,
			Xo = Math.pow,
			Yo = (Math.round, Math.sign || function (t) {
				return t > 0 ? 1 : t < 0 ? -1 : 0
			}),
			Uo = Math.sin,
			Jo = Math.tan,
			Ko = 1e-6,
			Qo = 1e-12,
			$o = Math.PI,
			ta = $o / 2,
			ea = $o / 4,
			na = Math.SQRT1_2,
			ia = la(2),
			ra = la($o),
			oa = 2 * $o,
			aa = 180 / $o,
			ua = $o / 180;

		function sa(t) {
			return t > 1 ? ta : t < -1 ? -ta : Math.asin(t)
		}

		function ca(t) {
			return t > 1 ? 0 : t < -1 ? $o : Math.acos(t)
		}

		function la(t) {
			return t > 0 ? Math.sqrt(t) : 0
		}

		function ha(t) {
			return (Bo(t) - Bo(-t)) / 2
		}

		function pa(t) {
			return (Bo(t) + Bo(-t)) / 2
		}

		function fa(t, e) {
			var n = Fo(e),
				i = function (t) {
					return t ? t / Math.sin(t) : 1
				}(ca(n * Fo(t /= 2)));
			return [2 * n * Uo(t) * i, Uo(e) * i]
		}
		fa.invert = function (t, e) {
			if (!(t * t + 4 * e * e > $o * $o + Ko)) {
				var n = t,
					i = e,
					r = 25;
				do {
					var o, a = Uo(n),
						u = Uo(n / 2),
						s = Fo(n / 2),
						c = Uo(i),
						l = Fo(i),
						h = Uo(2 * i),
						p = c * c,
						f = l * l,
						d = u * u,
						g = 1 - f * s * s,
						v = g ? ca(l * s) * la(o = 1 / g) : o = 0,
						m = 2 * v * l * u - t,
						y = v * c - e,
						b = o * (f * d + v * l * s * p),
						P = o * (.5 * a * h - 2 * v * c * u),
						_ = .25 * o * (h * u - v * c * f * a),
						S = o * (p * s + v * d * l),
						M = P * _ - S * b;
					if (!M) break;
					var x = (y * P - m * S) / M,
						j = (m * _ - y * b) / M;
					n -= x, i -= j
				} while ((Ao(x) > Ko || Ao(j) > Ko) && --r > 0);
				return [n, i]
			}
		};

		function da(t, e) {
			var n = Jo(e / 2),
				i = la(1 - n * n),
				r = 1 + i * Fo(t /= 2),
				o = Uo(t) * i / r,
				a = n / r,
				u = o * o,
				s = a * a;
			return [4 / 3 * o * (3 + u - 3 * s), 4 / 3 * a * (3 + 3 * u - s)]
		}
		da.invert = function (t, e) {
			if (e *= 3 / 8, !(t *= 3 / 8) && Ao(e) > 1) return null;
			var n = 1 + t * t + e * e,
				i = la((n - la(n * n - 4 * e * e)) / 2),
				r = sa(i) / 3,
				o = i ? function (t) {
					return Wo(t + la(t * t - 1))
				}(Ao(e / i)) / 3 : function (t) {
					return Wo(t + la(t * t + 1))
				}(Ao(t)) / 3,
				a = Fo(r),
				u = pa(o),
				s = u * u - a * a;
			return [2 * Yo(t) * ko(ha(o) * a, .25 - s), 2 * Yo(e) * ko(u * Uo(r), .25 + s)]
		};
		var ga = la(8),
			va = Wo(1 + ia);

		function ma(t, e) {
			var n = Ao(e);
			return n < ea ? [t, Wo(Jo(ea + e / 2))] : [t * Fo(n) * (2 * ia - 1 / Uo(n)), Yo(e) * (2 * ia * (n - ea) - Wo(Jo(n / 2)))]
		}
		ma.invert = function (t, e) {
			if ((i = Ao(e)) < va) return [t, 2 * Ro(Bo(e)) - ta];
			var n, i, r = ea,
				o = 25;
			do {
				var a = Fo(r / 2),
					u = Jo(r / 2);
				r -= n = (ga * (r - ea) - Wo(u) - i) / (ga - a * a / (2 * u))
			} while (Ao(n) > Qo && --o > 0);
			return [t / (Fo(r) * (ga - 1 / Uo(r))), Yo(e) * r]
		};

		function ya(t, e) {
			return [t * Fo(e) / Fo(e /= 2), 2 * Uo(e)]
		}
		ya.invert = function (t, e) {
			var n = 2 * sa(e / 2);
			return [t * Fo(n / 2) / Fo(n), n]
		};

		function ba(t, e, n) {
			var i, r, o, a = 100;
			n = void 0 === n ? 0 : +n, e = +e;
			do {
				(r = t(n)) === (o = t(n + Ko)) && (o = r + Ko), n -= i = -1 * Ko * (r - e) / (r - o)
			} while (a-- > 0 && Ao(i) > Ko);
			return a < 0 ? NaN : n
		}

		function Pa(t, e) {
			var n, i = t * Uo(e),
				r = 30;
			do {
				e -= n = (e + Uo(e) - i) / (1 + Fo(e))
			} while (Ao(n) > Ko && --r > 0);
			return e / 2
		}

		function _a(t, e, n) {
			function i(i, r) {
				return [t * i * Fo(r = Pa(n, r)), e * Uo(r)]
			}
			return i.invert = function (i, r) {
				return r = sa(r / e), [i / (t * Fo(r)), sa((2 * r + Uo(2 * r)) / n)]
			}, i
		}
		var Sa = _a(ia / ta, ia, $o),
			Ma = 2.00276,
			xa = 1.11072;

		function ja(t, e) {
			var n = Pa($o, e);
			return [Ma * t / (1 / Fo(e) + xa / Fo(n)), (e + ia * Uo(n)) / Ma]
		}
		ja.invert = function (t, e) {
			var n, i, r = Ma * e,
				o = e < 0 ? -ea : ea,
				a = 25;
			do {
				i = r - ia * Uo(o), o -= n = (Uo(2 * o) + 2 * o - $o * Uo(i)) / (2 * Fo(2 * o) + 2 + $o * Fo(i) * ia * Fo(o))
			} while (Ao(n) > Ko && --a > 0);
			return i = r - ia * Uo(o), [t * (1 / Fo(i) + xa / Fo(o)) / Ma, i]
		};

		function wa(t, e) {
			return [t * Fo(e), e]
		}
		wa.invert = function (t, e) {
			return [t / Fo(e), e]
		};
		_a(1, 4 / $o, $o);

		function Oa(t, e) {
			var n = la(1 - Uo(e));
			return [2 / ra * t * n, ra * (1 - n)]
		}
		Oa.invert = function (t, e) {
			var n = (n = e / ra - 1) * n;
			return [n > 0 ? t * la($o / n) / 2 : 0, sa(1 - n)]
		};
		var La = la(3);

		function Ca(t, e) {
			return [La * t * (2 * Fo(2 * e / 3) - 1) / ra, La * ra * Uo(e / 3)]
		}
		Ca.invert = function (t, e) {
			var n = 3 * sa(e / (La * ra));
			return [ra * t / (La * (2 * Fo(2 * n / 3) - 1)), n]
		};

		function Ea(t) {
			var e = Fo(t);

			function n(t, n) {
				return [t * e, Uo(n) / e]
			}
			return n.invert = function (t, n) {
				return [t / e, sa(n * e)]
			}, n
		}

		function Ia(t, e) {
			var n = la(8 / (3 * $o));
			return [n * t * (1 - Ao(e) / $o), n * e]
		}
		Ia.invert = function (t, e) {
			var n = la(8 / (3 * $o)),
				i = e / n;
			return [t / (n * (1 - Ao(i) / $o)), i]
		};

		function Ta(t, e) {
			var n = la(4 - 3 * Uo(Ao(e)));
			return [2 / la(6 * $o) * t * n, Yo(e) * la(2 * $o / 3) * (2 - n)]
		}
		Ta.invert = function (t, e) {
			var n = 2 - Ao(e) / la(2 * $o / 3);
			return [t * la(6 * $o) / (2 * n), Yo(e) * sa((4 - n * n) / 3)]
		};

		function Ga(t, e) {
			var n = la($o * (4 + $o));
			return [2 / n * t * (1 + la(1 - 4 * e * e / ($o * $o))), 4 / n * e]
		}
		Ga.invert = function (t, e) {
			var n = la($o * (4 + $o)) / 2;
			return [t * n / (1 + la(1 - e * e * (4 + $o) / (4 * $o))), e * n / 2]
		};

		function Da(t, e) {
			var n = (2 + ta) * Uo(e);
			e /= 2;
			for (var i = 0, r = 1 / 0; i < 10 && Ao(r) > Ko; i++) {
				var o = Fo(e);
				e -= r = (e + Uo(e) * (o + 2) - n) / (2 * o * (1 + o))
			}
			return [2 / la($o * (4 + $o)) * t * (1 + Fo(e)), 2 * la($o / (4 + $o)) * Uo(e)]
		}
		Da.invert = function (t, e) {
			var n = e * la((4 + $o) / $o) / 2,
				i = sa(n),
				r = Fo(i);
			return [t / (2 / la($o * (4 + $o)) * (1 + r)), sa((i + n * (r + 2)) / (2 + ta))]
		};

		function Na(t, e) {
			return [t * (1 + Fo(e)) / la(2 + $o), 2 * e / la(2 + $o)]
		}
		Na.invert = function (t, e) {
			var n = la(2 + $o),
				i = e * n / 2;
			return [n * t / (1 + Fo(i)), i]
		};

		function za(t, e) {
			for (var n = (1 + ta) * Uo(e), i = 0, r = 1 / 0; i < 10 && Ao(r) > Ko; i++) e -= r = (e + Uo(e) - n) / (1 + Fo(e));
			return n = la(2 + $o), [t * (1 + Fo(e)) / n, 2 * e / n]
		}
		za.invert = function (t, e) {
			var n = 1 + ta,
				i = la(n / 2);
			return [2 * t * i / (1 + Fo(e *= i)), sa((e + Uo(e)) / n)]
		};
		var Va = function () {
				return ki(za).scale(173.044)
			},
			Aa = 3 + 2 * ia;

		function Ra(t, e) {
			var n = Uo(t /= 2),
				i = Fo(t),
				r = la(Fo(e)),
				o = Fo(e /= 2),
				a = Uo(e) / (o + ia * i * r),
				u = la(2 / (1 + a * a)),
				s = la((ia * o + (i + n) * r) / (ia * o + (i - n) * r));
			return [Aa * (u * (s - 1 / s) - 2 * Wo(s)), Aa * (u * a * (s + 1 / s) - 2 * Ro(a))]
		}
		Ra.invert = function (t, e) {
			if (!(n = da.invert(t / 1.2, 1.065 * e))) return null;
			var n, i = n[0],
				r = n[1],
				o = 20;
			t /= Aa, e /= Aa;
			do {
				var a = i / 2,
					u = r / 2,
					s = Uo(a),
					c = Fo(a),
					l = Uo(u),
					h = Fo(u),
					p = Fo(r),
					f = la(p),
					d = l / (h + ia * c * f),
					g = d * d,
					v = la(2 / (1 + g)),
					m = (ia * h + (c + s) * f) / (ia * h + (c - s) * f),
					y = la(m),
					b = y - 1 / y,
					P = y + 1 / y,
					_ = v * b - 2 * Wo(y) - t,
					S = v * d * P - 2 * Ro(d) - e,
					M = l && na * f * s * g / l,
					x = (ia * c * h + f) / (2 * (h + ia * c * f) * (h + ia * c * f) * f),
					j = -.5 * d * v * v * v,
					w = j * M,
					O = j * x,
					L = (L = 2 * h + ia * f * (c - s)) * L * y,
					C = (ia * c * h * f + p) / L,
					E = -ia * s * l / (f * L),
					I = b * w - 2 * C / y + v * (C + C / m),
					T = b * O - 2 * E / y + v * (E + E / m),
					G = d * P * w - 2 * M / (1 + g) + v * P * M + v * d * (C - C / m),
					D = d * P * O - 2 * x / (1 + g) + v * P * x + v * d * (E - E / m),
					N = T * G - D * I;
				if (!N) break;
				var z = (S * T - _ * D) / N,
					V = (_ * G - S * I) / N;
				i -= z, r = Zo(-ta, qo(ta, r - V))
			} while ((Ao(z) > Ko || Ao(V) > Ko) && --o > 0);
			return Ao(Ao(r) - ta) < Ko ? [0, r] : o && [i, r]
		};
		var ka = Fo(35 * ua);

		function Fa(t, e) {
			var n = Jo(e / 2);
			return [t * ka * la(1 - n * n), (1 + ka) * n]
		}
		Fa.invert = function (t, e) {
			var n = e / (1 + ka);
			return [t && t / (ka * la(1 - n * n)), 2 * Ro(n)]
		};

		function Ba(t, e) {
			var n = e / 2,
				i = Fo(n);
			return [2 * t / ra * Fo(e) * i * i, ra * Jo(n)]
		}
		Ba.invert = function (t, e) {
			var n = Ro(e / ra),
				i = Fo(n),
				r = 2 * n;
			return [t * ra / 2 / (Fo(r) * i * i), r]
		};
		var Ha = function (t, e, n, i, r, o, a, u) {
			function s(s, c) {
				if (!c) return [t * s / $o, 0];
				var l = c * c,
					h = t + l * (e + l * (n + l * i)),
					p = c * (r - 1 + l * (o - u + l * a)),
					f = (h * h + p * p) / (2 * p),
					d = s * sa(h / f) / $o;
				return [f * Uo(d), c * (1 + l * u) + f * (1 - Fo(d))]
			}
			return arguments.length < 8 && (u = 0), s.invert = function (s, c) {
				var l, h, p = $o * s / t,
					f = c,
					d = 50;
				do {
					var g = f * f,
						v = t + g * (e + g * (n + g * i)),
						m = f * (r - 1 + g * (o - u + g * a)),
						y = v * v + m * m,
						b = 2 * m,
						P = y / b,
						_ = P * P,
						S = sa(v / P) / $o,
						M = p * S,
						x = v * v,
						j = (2 * e + g * (4 * n + 6 * g * i)) * f,
						w = r + g * (3 * o + 5 * g * a),
						O = (2 * (v * j + m * (w - 1)) * b - y * (2 * (w - 1))) / (b * b),
						L = Fo(M),
						C = Uo(M),
						E = P * L,
						I = P * C,
						T = p / $o * (1 / la(1 - x / _)) * (j * P - v * O) / _,
						G = I - s,
						D = f * (1 + g * u) + P - E - c,
						N = O * C + E * T,
						z = E * S,
						V = 1 + O - (O * L - I * T),
						A = I * S,
						R = N * A - V * z;
					if (!R) break;
					p -= l = (D * N - G * V) / R, f -= h = (G * A - D * z) / R
				} while ((Ao(l) > Ko || Ao(h) > Ko) && --d > 0);
				return [p, f]
			}, s
		};
		Ha(2.8284, -1.6988, .75432, -.18071, 1.76003, -.38914, .042555), Ha(2.583819, -.835827, .170354, -.038094, 1.543313, -.411435, .082742),
			Ha(5 / 6 * $o, -.62636, -.0344, 0, 1.3493, -.05524, 0, .045);

		function Wa(t, e) {
			var n = t * t,
				i = e * e;
			return [t * (1 - .162388 * i) * (.87 - 952426e-9 * n * n), e * (1 + i / 12)]
		}
		Wa.invert = function (t, e) {
			var n, i = t,
				r = e,
				o = 50;
			do {
				var a = r * r;
				r -= n = (r * (1 + a / 12) - e) / (1 + a / 4)
			} while (Ao(n) > Ko && --o > 0);
			o = 50, t /= 1 - .162388 * a;
			do {
				var u = (u = i * i) * u;
				i -= n = (i * (.87 - 952426e-9 * u) - t) / (.87 - .00476213 * u)
			} while (Ao(n) > Ko && --o > 0);
			return [i, r]
		};
		Ha(2.6516, -.76534, .19123, -.047094, 1.36289, -.13965, .031762);

		function Za(t, e) {
			var n = Yo(t),
				i = Yo(e),
				r = Fo(e),
				o = Fo(t) * r,
				a = Uo(t) * r,
				u = Uo(i * e);
			t = Ao(ko(a, u)), e = sa(o), Ao(t - ta) > Ko && (t %= ta);
			var s = function (t, e) {
				if (e === ta) return [0, 0];
				var n, i, r = Uo(e),
					o = r * r,
					a = o * o,
					u = 1 + a,
					s = 1 + 3 * a,
					c = 1 - a,
					l = sa(1 / la(u)),
					h = c + o * u * l,
					p = (1 - r) / h,
					f = la(p),
					d = p * u,
					g = la(d),
					v = f * c;
				if (0 === t) return [0, -(v + o * g)];
				var m, y = Fo(e),
					b = 1 / y,
					P = 2 * r * y,
					_ = (-h * y - (-3 * o + l * s) * P * (1 - r)) / (h * h),
					S = -b * P,
					M = -b * (o * u * _ + p * s * P),
					x = -2 * b * (c * (.5 * _ / f) - 2 * o * f * P),
					j = 4 * t / $o;
				if (t > .222 * $o || e < $o / 4 && t > .175 * $o) {
					if (n = (v + o * la(d * (1 + a) - v * v)) / (1 + a), t > $o / 4) return [n, n];
					var w = n,
						O = .5 * n;
					n = .5 * (O + w), i = 50;
					do {
						var L = la(d - n * n),
							C = n * (x + S * L) + M * sa(n / g) - j;
						if (!C) break;
						C < 0 ? O = n : w = n, n = .5 * (O + w)
					} while (Ao(w - O) > Ko && --i > 0)
				} else {
					n = Ko, i = 25;
					do {
						var E = n * n,
							I = la(d - E),
							T = x + S * I,
							G = n * T + M * sa(n / g) - j,
							D = T + (M - S * E) / I;
						n -= m = I ? G / D : 0
					} while (Ao(m) > Ko && --i > 0)
				}
				return [n, -v - o * la(d - n * n)]
			}(t > $o / 4 ? ta - t : t, e);
			return t > $o / 4 && (u = s[0], s[0] = -s[1], s[1] = -u), s[0] *= n, s[1] *= -i, s
		}
		Za.invert = function (t, e) {
			Ao(t) > 1 && (t = 2 * Yo(t) - t), Ao(e) > 1 && (e = 2 * Yo(e) - e);
			var n = Yo(t),
				i = Yo(e),
				r = -n * t,
				o = -i * e,
				a = o / r < 1,
				u = function (t, e) {
					var n = 0,
						i = 1,
						r = .5,
						o = 50;
					for (;;) {
						var a = r * r,
							u = la(r),
							s = sa(1 / la(1 + a)),
							c = 1 - a + r * (1 + a) * s,
							l = (1 - u) / c,
							h = la(l),
							p = l * (1 + a),
							f = h * (1 - a),
							d = p - t * t,
							g = la(d),
							v = e + f + r * g;
						if (Ao(i - n) < Qo || 0 == --o || 0 === v) break;
						v > 0 ? n = r : i = r, r = .5 * (n + i)
					}
					if (!o) return null;
					var m = sa(u),
						y = Fo(m),
						b = 1 / y,
						P = 2 * u * y,
						_ = (-c * y - (-3 * r + s * (1 + 3 * a)) * P * (1 - u)) / (c * c);
					return [$o / 4 * (t * (-2 * b * (.5 * _ / h * (1 - a) - 2 * r * h * P) + -b * P * g) + -b * (r * (1 + a) * _ + l * (1 + 3 * a) * P) *
						sa(t / la(p))), m]
				}(a ? o : r, a ? r : o),
				s = u[0],
				c = u[1],
				l = Fo(c);
			return a && (s = -ta - s), [n * (ko(Uo(s) * l, -Uo(c)) + $o), i * sa(Fo(s) * l)]
		};

		function qa(t, e) {
			var n, i, r, o, a;
			if (e < Ko) return [(o = Uo(t)) - (n = e * (t - o * (i = Fo(t))) / 4) * i, i + n * o, 1 - e * o * o / 2, t - n];
			if (e >= 1 - Ko) return n = (1 - e) / 4, r = 1 / (i = pa(t)), [(o = function (t) {
					return ((t = Bo(2 * t)) - 1) / (t + 1)
				}(t)) + n * ((a = i * ha(t)) - t) / (i * i), r - n * o * r * (a - t), r + n * o * r * (a + t), 2 * Ro(Bo(t)) - ta + n * (a - t) /
				i
			];
			var u = [1, 0, 0, 0, 0, 0, 0, 0, 0],
				s = [la(e), 0, 0, 0, 0, 0, 0, 0, 0],
				c = 0;
			for (i = la(1 - e), a = 1; Ao(s[c] / u[c]) > Ko && c < 8;) n = u[c++], s[c] = (n - i) / 2, u[c] = (n + i) / 2, i = la(n * i), a *= 2;
			r = a * u[c] * t;
			do {
				r = (sa(o = s[c] * Uo(i = r) / u[c]) + r) / 2
			} while (--c);
			return [Uo(r), o = Fo(r), o / Fo(r - i), r]
		}

		function Xa(t, e) {
			if (!e) return t;
			if (1 === e) return Wo(Jo(t / 2 + ea));
			for (var n = 1, i = la(1 - e), r = la(e), o = 0; Ao(r) > Ko; o++) {
				if (t % $o) {
					var a = Ro(i * Jo(t) / n);
					a < 0 && (a += $o), t += a + ~~(t / $o) * $o
				} else t += t;
				r = (n + i) / 2, i = la(n * i), r = ((n = r) - i) / 2
			}
			return t / (Xo(2, o) * n)
		}

		function Ya(t, e) {
			var n = (ia - 1) / (ia + 1),
				i = la(1 - n * n),
				r = Xa(ta, i * i),
				o = Wo(Jo($o / 4 + Ao(e) / 2)),
				a = Bo(-1 * o) / la(n),
				u = function (t, e) {
					var n = t * t,
						i = e + 1,
						r = 1 - n - e * e;
					return [.5 * ((t >= 0 ? ta : -ta) - ko(r, 2 * t)), -.25 * Wo(r * r + 4 * n) + .5 * Wo(i * i + n)]
				}(a * Fo(-1 * t), a * Uo(-1 * t)),
				s = function (t, e, n) {
					var i = Ao(t),
						r = ha(Ao(e));
					if (i) {
						var o = 1 / Uo(i),
							a = 1 / (Jo(i) * Jo(i)),
							u = -(a + n * (r * r * o * o) - 1 + n),
							s = (-u + la(u * u - (n - 1) * a * 4)) / 2;
						return [Xa(Ro(1 / la(s)), n) * Yo(t), Xa(Ro(la((s / a - 1) / n)), 1 - n) * Yo(e)]
					}
					return [0, Xa(Ro(r), 1 - n) * Yo(e)]
				}(u[0], u[1], i * i);
			return [-s[1], (e >= 0 ? 1 : -1) * (.5 * r - s[0])]
		}
		Ya.invert = function (t, e) {
			var n = (ia - 1) / (ia + 1),
				i = la(1 - n * n),
				r = function (t, e, n) {
					var i, r, o;
					return t ? (i = qa(t, n), e ? (o = (r = qa(e, 1 - n))[1] * r[1] + n * i[0] * i[0] * r[0] * r[0], [
						[i[0] * r[2] / o, i[1] * i[2] * r[0] * r[1] / o],
						[i[1] * r[1] / o, -i[0] * i[2] * r[0] * r[2] / o],
						[i[2] * r[1] * r[2] / o, -n * i[0] * i[1] * r[0] / o]
					]) : [
						[i[0], 0],
						[i[1], 0],
						[i[2], 0]
					]) : [
						[0, (r = qa(e, 1 - n))[0] / r[1]],
						[1 / r[1], 0],
						[r[2] / r[1], 0]
					]
				}(.5 * Xa(ta, i * i) - e, -t, i * i),
				o = function (t, e) {
					var n = e[0] * e[0] + e[1] * e[1];
					return [(t[0] * e[0] + t[1] * e[1]) / n, (t[1] * e[0] - t[0] * e[1]) / n]
				}(r[0], r[1]);
			return [ko(o[1], o[0]) / -1, 2 * Ro(Bo(-.5 * Wo(n * o[0] * o[0] + n * o[1] * o[1]))) - ta]
		};
		sa(1 - 1 / 3), Ea(0);
		var Ua = .7109889596207567,
			Ja = .0528035274542;

		function Ka(t, e) {
			return e > -Ua ? ((t = Sa(t, e))[1] += Ja, t) : wa(t, e)
		}
		Ka.invert = function (t, e) {
			return e > -Ua ? Sa.invert(t, e - Ja) : wa.invert(t, e)
		};

		function Qa(t, e) {
			return Ao(e) > Ua ? ((t = Sa(t, e))[1] -= e > 0 ? Ja : -Ja, t) : wa(t, e)
		}
		Qa.invert = function (t, e) {
			return Ao(e) > Ua ? Sa.invert(t, e + (e > 0 ? Ja : -Ja)) : wa.invert(t, e)
		};

		function $a(t, e) {
			return [3 / oa * t * la($o * $o / 3 - e * e), e]
		}
		$a.invert = function (t, e) {
			return [oa / 3 * t / la($o * $o / 3 - e * e), e]
		};
		var tu = $o / ia;

		function eu(t, e) {
			return [t * (1 + la(Fo(e))) / 2, e / (Fo(e / 2) * Fo(t / 6))]
		}
		eu.invert = function (t, e) {
			var n = Ao(t),
				i = Ao(e),
				r = Ko,
				o = ta;
			i < tu ? o *= i / tu : r += 6 * ca(tu / i);
			for (var a = 0; a < 25; a++) {
				var u = Uo(o),
					s = la(Fo(o)),
					c = Uo(o / 2),
					l = Fo(o / 2),
					h = Uo(r / 6),
					p = Fo(r / 6),
					f = .5 * r * (1 + s) - n,
					d = o / (l * p) - i,
					g = s ? -.25 * r * u / s : 0,
					v = .5 * (1 + s),
					m = (1 + .5 * o * c / l) / (l * p),
					y = o / l * (h / 6) / (p * p),
					b = g * y - m * v,
					P = (f * y - d * v) / b,
					_ = (d * g - f * m) / b;
				if (o -= P, r -= _, Ao(P) < Ko && Ao(_) < Ko) break
			}
			return [t < 0 ? -r : r, e < 0 ? -o : o]
		};

		function nu(t, e) {
			var n = t * t,
				i = e * e;
			return [t * (.975534 + i * (-.0143059 * n - .119161 + -.0547009 * i)), e * (1.00384 + n * (.0802894 + -.02855 * i + 199025e-9 * n) +
				i * (.0998909 + -.0491032 * i))]
		}
		nu.invert = function (t, e) {
			var n = Yo(t) * $o,
				i = e / 2,
				r = 50;
			do {
				var o = n * n,
					a = i * i,
					u = n * i,
					s = n * (.975534 + a * (-.0143059 * o - .119161 + -.0547009 * a)) - t,
					c = i * (1.00384 + o * (.0802894 + -.02855 * a + 199025e-9 * o) + a * (.0998909 + -.0491032 * a)) - e,
					l = .975534 - a * (.119161 + 3 * o * .0143059 + .0547009 * a),
					h = -u * (.238322 + .2188036 * a + .0286118 * o),
					p = u * (.1605788 + 7961e-7 * o + -.0571 * a),
					f = 1.00384 + o * (.0802894 + 199025e-9 * o) + a * (3 * (.0998909 - .02855 * o) - .245516 * a),
					d = h * p - f * l,
					g = (c * h - s * f) / d,
					v = (s * p - c * l) / d;
				n -= g, i -= v
			} while ((Ao(g) > Ko || Ao(v) > Ko) && --r > 0);
			return r && [n, i]
		};

		function iu(t, e) {
			return [Uo(t) / Fo(e), Jo(e) * Fo(t)]
		}
		iu.invert = function (t, e) {
			var n = t * t,
				i = e * e + 1,
				r = n + i,
				o = t ? na * la((r - la(r * r - 4 * n)) / n) : 1 / la(i);
			return [sa(t * o), Yo(e) * ca(o)]
		};

		function ru(t, e) {
			return [t, 1.25 * Wo(Jo(ea + .4 * e))]
		}
		ru.invert = function (t, e) {
			return [t, 2.5 * Ro(Bo(.8 * e)) - .625 * $o]
		};
		var ou = function () {
			return ki(ru).scale(108.318)
		};
		var au = la(6),
			uu = la(7);

		function su(t, e) {
			var n = sa(7 * Uo(e) / (3 * au));
			return [au * t * (2 * Fo(2 * n / 3) - 1) / uu, 9 * Uo(n / 3) / uu]
		}
		su.invert = function (t, e) {
			var n = 3 * sa(e * uu / 9);
			return [t * uu / (au * (2 * Fo(2 * n / 3) - 1)), sa(3 * Uo(n) * au / 7)]
		};

		function cu(t, e) {
			for (var n, i = (1 + na) * Uo(e), r = e, o = 0; o < 25 && (r -= n = (Uo(r / 2) + Uo(r) - i) / (.5 * Fo(r / 2) + Fo(r)), !(Ao(n) < Ko)); o++)
			;
			return [t * (1 + 2 * Fo(r) / Fo(r / 2)) / (3 * ia), 2 * la(3) * Uo(r / 2) / la(2 + ia)]
		}
		cu.invert = function (t, e) {
			var n = e * la(2 + ia) / (2 * la(3)),
				i = 2 * sa(n);
			return [3 * ia * t / (1 + 2 * Fo(i) / Fo(i / 2)), sa((n + Uo(i)) / (1 + na))]
		};

		function lu(t, e) {
			for (var n, i = la(6 / (4 + $o)), r = (1 + $o / 4) * Uo(e), o = e / 2, a = 0; a < 25 && (o -= n = (o / 2 + Uo(o) - r) / (.5 + Fo(o)), !
					(Ao(n) < Ko)); a++);
			return [i * (.5 + Fo(o)) * t / 1.5, i * o]
		}
		lu.invert = function (t, e) {
			var n = la(6 / (4 + $o)),
				i = e / n;
			return Ao(Ao(i) - ta) < Ko && (i = i < 0 ? -ta : ta), [1.5 * t / (n * (.5 + Fo(i))), sa((i / 2 + Uo(i)) / (1 + $o / 4))]
		};

		function hu(t, e) {
			var n = e * e,
				i = n * n,
				r = n * i;
			return [t * (.84719 - .13063 * n + r * r * (.05494 * n - .04515 - .02326 * i + .00331 * r)), e * (1.01183 + i * i * (.01926 * n -
				.02625 - .00396 * i))]
		}
		hu.invert = function (t, e) {
			var n, i, r, o, a = e,
				u = 25;
			do {
				a -= n = (a * (1.01183 + (r = (i = a * a) * i) * r * (.01926 * i - .02625 - .00396 * r)) - e) / (1.01183 + r * r * (.21186 * i -
					.23625 + -.05148 * r))
			} while (Ao(n) > Qo && --u > 0);
			return [t / (.84719 - .13063 * (i = a * a) + (o = i * (r = i * i)) * o * (.05494 * i - .04515 - .02326 * r + .00331 * o)), a]
		};

		function pu(t, e) {
			return [t * (1 + Fo(e)) / 2, 2 * (e - Jo(e / 2))]
		}
		pu.invert = function (t, e) {
			for (var n = e / 2, i = 0, r = 1 / 0; i < 10 && Ao(r) > Ko; ++i) {
				var o = Fo(e / 2);
				e -= r = (e - Jo(e / 2) - n) / (1 - .5 / (o * o))
			}
			return [2 * t / (1 + Fo(e)), e]
		};

		function fu(t, e) {
			var n = Uo(e),
				i = Fo(e),
				r = Yo(t);
			if (0 === t || Ao(e) === ta) return [0, e];
			if (0 === e) return [t, 0];
			if (Ao(t) === ta) return [t * i, ta * n];
			var o = $o / (2 * t) - 2 * t / $o,
				a = 2 * e / $o,
				u = (1 - a * a) / (n - a),
				s = o * o,
				c = u * u,
				l = 1 + s / c,
				h = 1 + c / s,
				p = (o * n / u - o / 2) / l,
				f = (c * n / s + u / 2) / h,
				d = f * f - (c * n * n / s + u * n - 1) / h;
			return [ta * (p + la(p * p + i * i / l) * r), ta * (f + la(d < 0 ? 0 : d) * Yo(-e * o) * r)]
		}
		fu.invert = function (t, e) {
			var n = (t /= ta) * t,
				i = n + (e /= ta) * e,
				r = $o * $o;
			return [t ? (i - 1 + la((1 - i) * (1 - i) + 4 * n)) / (2 * t) * ta : 0, ba(function (t) {
				return i * ($o * Uo(t) - 2 * t) * $o + 4 * t * t * (e - Uo(t)) + 2 * $o * t - r * e
			}, 0)]
		};
		var du = 1.0148,
			gu = .23185,
			vu = -.14499,
			mu = .02406,
			yu = du,
			bu = 5 * gu,
			Pu = 7 * vu,
			_u = 9 * mu;

		function Su(t, e) {
			var n = e * e;
			return [t, e * (du + n * n * (gu + n * (vu + mu * n)))]
		}
		Su.invert = function (t, e) {
			e > 1.790857183 ? e = 1.790857183 : e < -1.790857183 && (e = -1.790857183);
			var n, i = e;
			do {
				var r = i * i;
				i -= n = (i * (du + r * r * (gu + r * (vu + mu * r))) - e) / (yu + r * r * (bu + r * (Pu + _u * r)))
			} while (Ao(n) > Ko);
			return [t, i]
		};

		function Mu(t, e) {
			if (Ao(e) < Ko) return [t, 0];
			var n = Jo(e),
				i = t * Uo(e);
			return [Uo(i) / n, e + (1 - Fo(i)) / n]
		}
		Mu.invert = function (t, e) {
			if (Ao(e) < Ko) return [t, 0];
			var n, i = t * t + e * e,
				r = .5 * e,
				o = 10;
			do {
				var a = Jo(r),
					u = 1 / Fo(r),
					s = i - 2 * e * r + r * r;
				r -= n = (a * s + 2 * (r - e)) / (2 + s * u * u + 2 * (r - e) * a)
			} while (Ao(n) > Ko && --o > 0);
			return a = Jo(r), [(Ao(e) < Ao(r + 1 / a) ? sa(t * a) : Yo(e) * Yo(t) * (ca(Ao(t * a)) + ta)) / Uo(r), r]
		};
		var xu = [
				[0, 90],
				[-90, 0],
				[0, 0],
				[90, 0],
				[180, 0],
				[0, -90]
			],
			ju = ([
				[0, 2, 1],
				[0, 3, 2],
				[5, 1, 2],
				[5, 2, 3],
				[0, 1, 4],
				[0, 4, 3],
				[5, 4, 1],
				[5, 3, 4]
			].map(function (t) {
				return t.map(function (t) {
					return xu[t]
				})
			}), 2 / la(3));

		function wu(t, e) {
			var n = Oa(t, e);
			return [n[0] * ju, n[1]]
		}
		wu.invert = function (t, e) {
			return Oa.invert(t / ju, e)
		};
		var Ou = [
			[.9986, -.062],
			[1, 0],
			[.9986, .062],
			[.9954, .124],
			[.99, .186],
			[.9822, .248],
			[.973, .31],
			[.96, .372],
			[.9427, .434],
			[.9216, .4958],
			[.8962, .5571],
			[.8679, .6176],
			[.835, .6769],
			[.7986, .7346],
			[.7597, .7903],
			[.7186, .8435],
			[.6732, .8936],
			[.6213, .9394],
			[.5722, .9761],
			[.5322, 1]
		];

		function Lu(t, e) {
			var n, i = qo(18, 36 * Ao(e) / $o),
				r = Ho(i),
				o = i - r,
				a = (n = Ou[r])[0],
				u = n[1],
				s = (n = Ou[++r])[0],
				c = n[1],
				l = (n = Ou[qo(19, ++r)])[0],
				h = n[1];
			return [t * (s + o * (l - a) / 2 + o * o * (l - 2 * s + a) / 2), (e > 0 ? ta : -ta) * (c + o * (h - u) / 2 + o * o * (h - 2 * c + u) /
				2)]
		}
		Ou.forEach(function (t) {
			t[1] *= 1.0144
		}), Lu.invert = function (t, e) {
			var n = e / ta,
				i = 90 * n,
				r = qo(18, Ao(i / 5)),
				o = Zo(0, Ho(r));
			do {
				var a = Ou[o][1],
					u = Ou[o + 1][1],
					s = Ou[qo(19, o + 2)][1],
					c = s - a,
					l = s - 2 * u + a,
					h = 2 * (Ao(n) - u) / c,
					p = l / c,
					f = h * (1 - p * h * (1 - 2 * p * h));
				if (f >= 0 || 1 === o) {
					i = (e >= 0 ? 5 : -5) * (f + r);
					var d, g = 50;
					do {
						f = (r = qo(18, Ao(i) / 5)) - (o = Ho(r)), a = Ou[o][1], u = Ou[o + 1][1], s = Ou[qo(19, o + 2)][1], i -= (d = (e >= 0 ? ta : -ta) *
							(u + f * (s - a) / 2 + f * f * (s - 2 * u + a) / 2) - e) * aa
					} while (Ao(d) > Qo && --g > 0);
					break
				}
			} while (--o >= 0);
			var v = Ou[o][0],
				m = Ou[o + 1][0],
				y = Ou[qo(19, o + 2)][0];
			return [t / (m + f * (y - v) / 2 + f * f * (y - 2 * m + v) / 2), i * ua]
		};

		function Cu(t, e) {
			var n = Jo(e / 2),
				i = Uo(ea * n);
			return [t * (.74482 - .34588 * i * i), 1.70711 * n]
		}
		Cu.invert = function (t, e) {
			var n = e / 1.70711,
				i = Uo(ea * n);
			return [t / (.74482 - .34588 * i * i), 2 * Ro(n)]
		};

		function Eu(t, e) {
			if (Ao(e) < Ko) return [t, 0];
			var n = Ao(e / ta),
				i = sa(n);
			if (Ao(t) < Ko || Ao(Ao(e) - ta) < Ko) return [0, Yo(e) * $o * Jo(i / 2)];
			var r = Fo(i),
				o = Ao($o / t - t / $o) / 2,
				a = o * o,
				u = r / (n + r - 1),
				s = u * (2 / n - 1),
				c = s * s,
				l = c + a,
				h = u - c,
				p = a + u;
			return [Yo(t) * $o * (o * h + la(a * h * h - l * (u * u - c))) / l, Yo(e) * $o * (s * p - o * la((a + 1) * l - p * p)) / l]
		}
		Eu.invert = function (t, e) {
			if (Ao(e) < Ko) return [t, 0];
			if (Ao(t) < Ko) return [0, ta * Uo(2 * Ro(e / $o))];
			var n = (t /= $o) * t,
				i = (e /= $o) * e,
				r = n + i,
				o = r * r,
				a = -Ao(e) * (1 + r),
				u = a - 2 * i + n,
				s = -2 * a + 1 + 2 * i + o,
				c = i / s + (2 * u * u * u / (s * s * s) - 9 * a * u / (s * s)) / 27,
				l = (a - u * u / (3 * s)) / s,
				h = 2 * la(-l / 3),
				p = ca(3 * c / (l * h)) / 3;
			return [$o * (r - 1 + la(1 + 2 * (n - i) + o)) / (2 * t), Yo(e) * $o * (-h * Fo(p + $o / 3) - u / (3 * s))]
		};

		function Iu(t, e) {
			if (Ao(e) < Ko) return [t, 0];
			var n = Ao(e / ta),
				i = sa(n);
			if (Ao(t) < Ko || Ao(Ao(e) - ta) < Ko) return [0, Yo(e) * $o * Jo(i / 2)];
			var r = Fo(i),
				o = Ao($o / t - t / $o) / 2,
				a = o * o,
				u = r * (la(1 + a) - o * r) / (1 + a * n * n);
			return [Yo(t) * $o * u, Yo(e) * $o * la(1 - u * (2 * o + u))]
		}
		Iu.invert = function (t, e) {
			if (!t) return [0, ta * Uo(2 * Ro(e / $o))];
			var n = Ao(t / $o),
				i = (1 - n * n - (e /= $o) * e) / (2 * n),
				r = la(i * i + 1);
			return [Yo(t) * $o * (r - i), Yo(e) * ta * Uo(2 * ko(la((1 - 2 * i * n) * (i + r) - n), la(r + i + n)))]
		};

		function Tu(t, e) {
			if (Ao(e) < Ko) return [t, 0];
			var n = e / ta,
				i = sa(n);
			if (Ao(t) < Ko || Ao(Ao(e) - ta) < Ko) return [0, $o * Jo(i / 2)];
			var r = ($o / t - t / $o) / 2,
				o = n / (1 + Fo(i));
			return [$o * (Yo(t) * la(r * r + 1 - o * o) - r), $o * o]
		}
		Tu.invert = function (t, e) {
			if (!e) return [t, 0];
			var n = e / $o,
				i = ($o * $o * (1 - n * n) - t * t) / (2 * $o * t);
			return [t ? $o * (Yo(t) * la(i * i + 1) - i) : 0, ta * Uo(2 * Ro(n))]
		};

		function Gu(t, e) {
			if (!e) return [t, 0];
			var n = Ao(e);
			if (!t || n === ta) return [0, e];
			var i = n / ta,
				r = i * i,
				o = (8 * i - r * (r + 2) - 5) / (2 * r * (i - 1)),
				a = o * o,
				u = i * o,
				s = r + a + 2 * u,
				c = i + 3 * o,
				l = t / ta,
				h = l + 1 / l,
				p = Yo(Ao(t) - ta) * la(h * h - 4),
				f = p * p,
				d = (p * (s + a - 1) + 2 * la(s * (r + a * f - 1) + (1 - r) * (r * (c * c + 4 * a) + 12 * u * a + 4 * a * a))) / (4 * s + f);
			return [Yo(t) * ta * d, Yo(e) * ta * la(1 + p * Ao(d) - d * d)]
		}
		Gu.invert = function (t, e) {
			var n;
			if (!t || !e) return [t, e];
			var i = Yo(e);
			e = Ao(e) / $o;
			var r = Yo(t) * t / ta,
				o = (r * r - 1 + 4 * e * e) / Ao(r),
				a = o * o,
				u = e * (2 - (e > .5 ? qo(e, Ao(t)) : 0)),
				s = t * t + e * e,
				c = 50;
			do {
				var l = u * u,
					h = (8 * u - l * (l + 2) - 5) / (2 * l * (u - 1)),
					p = (3 * u - l * u - 10) / (2 * l * u),
					f = h * h,
					d = u * h,
					g = u + h,
					v = g * g,
					m = u + 3 * h,
					y = -2 * g * (4 * d * f + (1 - 4 * l + 3 * l * l) * (1 + p) + f * (14 * l - 6 - a + (8 * l - 8 - 2 * a) * p) + d * (12 * l - 8 + (
						10 * l - 10 - a) * p)),
					b = la(v * (l + f * a - 1) + (1 - l) * (l * (m * m + 4 * f) + f * (12 * d + 4 * f)));
				u -= n = (o * (v + f - 1) + 2 * b - r * (4 * v + a)) / (o * (2 * h * p + 2 * g * (1 + p)) + y / b - 8 * g * (o * (-1 + f + v) + 2 *
					b) * (1 + p) / (a + 4 * v))
			} while (n * s * s > Ko && --c > 0);
			return [Yo(t) * (la(o * o + 4) + o) * $o / 4, i * ta * u]
		};
		var Du = 4 * $o + 3 * la(3),
			Nu = 2 * la(2 * $o * la(3) / Du);
		_a(Nu * la(3) / $o, Nu, Du / 6);

		function zu(t, e) {
			return [t * la(1 - 3 * e * e / ($o * $o)), e]
		}
		zu.invert = function (t, e) {
			return [t / la(1 - 3 * e * e / ($o * $o)), e]
		};

		function Vu(t, e) {
			var n = Fo(e),
				i = Fo(t) * n,
				r = 1 - i,
				o = Fo(t = ko(Uo(t) * n, -Uo(e))),
				a = Uo(t);
			return [a * (n = la(1 - i * i)) - o * r, -o * n - a * r]
		}
		Vu.invert = function (t, e) {
			var n = (t * t + e * e) / -2,
				i = la(-n * (2 + n)),
				r = e * n + t * i,
				o = t * n - e * i,
				a = la(o * o + r * r);
			return [ko(i * r, a * (1 + n)), a ? -sa(i * o / a) : 0]
		};

		function Au(t, e) {
			var n = fa(t, e);
			return [(n[0] + t / ta) / 2, (n[1] + e) / 2]
		}
		Au.invert = function (t, e) {
			var n = t,
				i = e,
				r = 25;
			do {
				var o, a = Fo(i),
					u = Uo(i),
					s = Uo(2 * i),
					c = u * u,
					l = a * a,
					h = Uo(n),
					p = Fo(n / 2),
					f = Uo(n / 2),
					d = f * f,
					g = 1 - l * p * p,
					v = g ? ca(a * p) * la(o = 1 / g) : o = 0,
					m = .5 * (2 * v * a * f + n / ta) - t,
					y = .5 * (v * u + i) - e,
					b = .5 * o * (l * d + v * a * p * c) + .5 / ta,
					P = o * (h * s / 4 - v * u * f),
					_ = .125 * o * (s * f - v * u * l * h),
					S = .5 * o * (c * p + v * d * a) + .5,
					M = P * _ - S * b,
					x = (y * P - m * S) / M,
					j = (m * _ - y * b) / M;
				n -= x, i -= j
			} while ((Ao(x) > Ko || Ao(j) > Ko) && --r > 0);
			return [n, i]
		};
		var Ru = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = ou(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.Miller = Ru;
		var ku = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = Va(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.Eckert6 = ku;
		var Fu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = Sr(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.Orthographic = Fu;
		var Bu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = xr(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.Stereographic = Bu;
		var Hu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = Zi(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.Albers = Hu;
		var Wu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = qi(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.AlbersUsa = Wu;
		var Zu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = Pr(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.NaturalEarth1 = Zu;
		var qu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = Ji(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.AzimuthalEqualArea = qu;
		var Xu = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.d3Projection = gr(), e
			}
			return Object(c.c)(e, t), e
		}(Qr);
		d.c.registeredClasses.EqualEarth = Xu, window.am4maps = a
	},
	QaCB: function (t, e, n) {
		"use strict";

		function i(t, e) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), n.d(e, "default", function () {
			return r
		});
		var r = function () {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
				if (function (t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t), this.data = e, this.length = this.data.length, this.compare = n, this.length > 0)
					for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i)
			}
			return function (t, e, n) {
				e && i(t.prototype, e), n && i(t, n)
			}(t, [{
				key: "push",
				value: function (t) {
					this.data.push(t), this.length++, this._up(this.length - 1)
				}
			}, {
				key: "pop",
				value: function () {
					if (0 !== this.length) {
						var t = this.data[0],
							e = this.data.pop();
						return this.length--, this.length > 0 && (this.data[0] = e, this._down(0)), t
					}
				}
			}, {
				key: "peek",
				value: function () {
					return this.data[0]
				}
			}, {
				key: "_up",
				value: function (t) {
					for (var e = this.data, n = this.compare, i = e[t]; t > 0;) {
						var r = t - 1 >> 1,
							o = e[r];
						if (n(i, o) >= 0) break;
						e[t] = o, t = r
					}
					e[t] = i
				}
			}, {
				key: "_down",
				value: function (t) {
					for (var e = this.data, n = this.compare, i = this.length >> 1, r = e[t]; t < i;) {
						var o = 1 + (t << 1),
							a = e[o],
							u = o + 1;
						if (u < this.length && n(e[u], a) < 0 && (o = u, a = e[u]), n(a, r) >= 0) break;
						e[t] = a, t = o
					}
					e[t] = r
				}
			}]), t
		}();

		function o(t, e) {
			return t < e ? -1 : t > e ? 1 : 0
		}
	},
	"o+vr": function (t, e, n) {
		"use strict";
		var i = n("QaCB");

		function r(t, e, n) {
			var r, u, s, c;
			e = e || 1;
			for (var l = 0; l < t[0].length; l++) {
				var h = t[0][l];
				(!l || h[0] < r) && (r = h[0]), (!l || h[1] < u) && (u = h[1]), (!l || h[0] > s) && (s = h[0]), (!l || h[1] > c) && (c = h[1])
			}
			var p = s - r,
				f = c - u,
				d = Math.min(p, f),
				g = d / 2;
			if (0 === d) {
				var v = [r, u];
				return v.distance = 0, v
			}
			for (var m = new i(void 0, o), y = r; y < s; y += d)
				for (var b = u; b < c; b += d) m.push(new a(y + g, b + g, g, t));
			var P = function (t) {
					for (var e = 0, n = 0, i = 0, r = t[0], o = 0, u = r.length, s = u - 1; o < u; s = o++) {
						var c = r[o],
							l = r[s],
							h = c[0] * l[1] - l[0] * c[1];
						n += (c[0] + l[0]) * h, i += (c[1] + l[1]) * h, e += 3 * h
					}
					return 0 === e ? new a(r[0][0], r[0][1], 0, t) : new a(n / e, i / e, 0, t)
				}(t),
				_ = new a(r + p / 2, u + f / 2, 0, t);
			_.d > P.d && (P = _);
			for (var S = m.length; m.length;) {
				var M = m.pop();
				M.d > P.d && (P = M, n && console.log("found best %d after %d probes", Math.round(1e4 * M.d) / 1e4, S)), M.max - P.d <= e || (g = M.h /
					2, m.push(new a(M.x - g, M.y - g, g, t)), m.push(new a(M.x + g, M.y - g, g, t)), m.push(new a(M.x - g, M.y + g, g, t)), m.push(new a(
						M.x + g, M.y + g, g, t)), S += 4)
			}
			n && (console.log("num probes: " + S), console.log("best distance: " + P.d));
			var x = [P.x, P.y];
			return x.distance = P.d, x
		}

		function o(t, e) {
			return e.max - t.max
		}

		function a(t, e, n, i) {
			this.x = t, this.y = e, this.h = n, this.d = function (t, e, n) {
				for (var i = !1, r = 1 / 0, o = 0; o < n.length; o++)
					for (var a = n[o], s = 0, c = a.length, l = c - 1; s < c; l = s++) {
						var h = a[s],
							p = a[l];
						h[1] > e != p[1] > e && t < (p[0] - h[0]) * (e - h[1]) / (p[1] - h[1]) + h[0] && (i = !i), r = Math.min(r, u(t, e, h, p))
					}
				return 0 === r ? 0 : (i ? 1 : -1) * Math.sqrt(r)
			}(t, e, i), this.max = this.d + this.h * Math.SQRT2
		}

		function u(t, e, n, i) {
			var r = n[0],
				o = n[1],
				a = i[0] - r,
				u = i[1] - o;
			if (0 !== a || 0 !== u) {
				var s = ((t - r) * a + (e - o) * u) / (a * a + u * u);
				s > 1 ? (r = i[0], o = i[1]) : s > 0 && (r += a * s, o += u * s)
			}
			return (a = t - r) * a + (u = e - o) * u
		}
		i.default && (i = i.default), t.exports = r, t.exports.default = r
	}
}, ["QJ7E"]);
//# sourceMappingURL=maps.js.map