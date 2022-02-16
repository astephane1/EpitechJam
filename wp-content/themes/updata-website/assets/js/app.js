(self.webpackChunkupdata_website = self.webpackChunkupdata_website || []).push([
    [449], {
        495: function(e, t, n) {
            "use strict";
            var o = n(990),
                r = n(6466),
                i = n(7026),
                a = (n(4747), n(1038), n(8783), n(7941), n(2526), n(7327), n(5003), n(9337), n(9069)),
                s = n.n(a),
                c = n(5317),
                u = n(2212),
                l = n(649);

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var h = function() {
                    function e(t) {
                        var n = t.scene,
                            o = t.camera,
                            r = t.renderer,
                            i = t.isMobile;
                        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.scene = n, this.camera = o, this.renderer = r, this.isMobile = i, this.init()
                    }
                    var t, n, r;
                    return t = e, (n = [{ key: "init", value: function() { this.sphereProps = { phiLength: 2 * Math.PI, colors: [{ stop: 0, color: new u.Ilk(15972226) }, { stop: .25, color: new u.Ilk(14567284) }, { stop: .5, color: new u.Ilk(7416442) }, { stop: .75, color: new u.Ilk(3037079) }, { stop: 1, color: new u.Ilk(4571106) }] }, this.createObjects(), this.createSphereGradient(this.sphereGeometry, this.sphereProps.colors), this.createSphereGradient(this.coreGeometry, this.sphereProps.colors) } }, {
                        key: "regenerateSphereGeometry",
                        value: function(e, t, n, o, r, i, a) {
                            var s = new u.xo$(e, t, n, o, r, i, a);
                            this.sphereGeometry.dispose(), this.createSphereGradient(s, this.sphereProps.colors), this.sphere.geometry = s, this.sphereGeometry = s
                        }
                    }, {
                        key: "createSphereGradient",
                        value: function(e, t) {
                            var n = e,
                                o = t;
                            n.computeBoundingBox();
                            for (var r, i, a = n.boundingBox, s = (new u.Pa4).subVectors(a.max, a.min), c = ["a", "b", "c"], l = new u.Pa4, d = 0, h = 0; h < o.length - 1; h++)
                                for (var f = o[h + 1].stop - o[h].stop, p = 0; p < n.faces.length; p++) {
                                    r = n.faces[p];
                                    for (var m = 0; m < 3; m++)
                                        if (i = n.vertices[r[c[m]]], (d = 1 - (d = l.subVectors(i, a.min).divide(s).z)) >= o[h].stop && d <= o[h + 1].stop) {
                                            var y = (d - o[h].stop) / f;
                                            r.vertexColors[m] = o[h].color.clone().lerp(o[h + 1].color, y)
                                        }
                                }
                        }
                    }, {
                        key: "createObjects",
                        value: function() {
                            var e = this;
                            this.sphereGeometry = new u.xo$(2, 75, 75, 0, this.sphereProps.phiLength), this.material = new u.vBJ({ vertexColors: u.jSK }), this.sphere = new u.Kj0(this.sphereGeometry, this.material), this.sphere.rotation.x = 8.5, this.sphere.rotation.y = 2.4, this.scene.add(this.sphere), this.coreGeometry = new u.xo$(.3, 40, 40), this.coreMaterial = new u.vBJ({ color: 15972226, transparent: !0, opacity: 0 }), this.coreSphere = new u.Kj0(this.coreGeometry, this.coreMaterial), this.coreSphere.position.x = this.isMobile ? -.2 : -.4, this.coreSphere.position.y = -.2, this.coreSphere.position.z = -.4, this.coreSphere.rotation.x = 8.5, this.coreSphere.rotation.y = 2.4, this.scene.add(this.coreSphere), this.particleMaterial = new u.UY4({ color: 15972226, size: .01, transparent: !0, opacity: 0 });
                            var t = function(t, n) {
                                var o = new u.Aip(t, 15, 10, 100),
                                    r = new u.TOt(o),
                                    i = new u.woe(r, e.particleMaterial);
                                return n.add(i), i
                            };
                            this.particles0 = t(1.4, this.scene), this.particles1 = t(1.2, this.particles0), this.particles0.rotation.x = 2, this.particles1.rotation.y = 1, this.particles1.rotation.x = 1, this.linesMaterial = new u.nls({ color: 16777215, transparent: !0, opacity: 0 });
                            var n = function(t, n) {
                                var o = new u.fHI(t, t, .01, 64),
                                    r = new u.TOt(o),
                                    i = new u.ejS(r, e.linesMaterial);
                                return n.add(i), i
                            };
                            this.ring0 = n(1.3, this.scene), this.ring1 = n(1.5, this.ring0), this.ring0.rotation.x = 2, this.ring1.rotation.y = 1, this.ring1.rotation.x = 1, this.group = new u.Tme, this.group.add(this.sphere), this.group.add(this.coreSphere), this.group.add(this.particles0), this.group.add(this.particles1), this.group.add(this.ring0), this.group.add(this.ring1), this.scene.add(this.group), this.noiseControls = new function() { this.noise = .5, this.scale = .1, this.time = 5e-4 }, this.updateNoise = function(t, n, o) {
                                for (var r = performance.now() * n, i = 0; i < e.sphere.geometry.vertices.length; i++) {
                                    var a = e.sphere.geometry.vertices[i];
                                    a.normalize().multiplyScalar(1 + o * l.noise.perlin3(a.x * t + r, a.y * t, a.z * t))
                                }
                                e.sphere.geometry.computeVertexNormals(), e.sphere.geometry.normalsNeedUpdate = !0, e.sphere.geometry.verticesNeedUpdate = !0
                            }
                        }
                    }, {
                        key: "sphereParallax",
                        value: function() {
                            var e = this;
                            this.parallaxArea = document.querySelector("#page");
                            var t = this.parallaxArea.getBoundingClientRect(),
                                n = { x: 0, y: 0, moved: !1 };
                            this.sphereParallaxMove = function(e) { n.moved = !0, n.x = e.clientX - t.left, n.y = e.clientY - t.top }, o.ZP.ticker.add((function() { n.moved && e.initSphereParallax(e.group.rotation, -.8), n.moved = !1 })), this.initSphereParallax = function(e, r) { o.ZP.to(e, { y: (n.x - t.width / 2) / t.width * r, x: (n.y - t.height / 2) / t.height * r, duration: 1 }) }, this.isMobile || (window.addEventListener("resize", (function() { t = e.parallaxArea.getBoundingClientRect() }), !1), this.parallaxArea.addEventListener("mousemove", this.sphereParallaxMove))
                        }
                    }, { key: "removeSphereParallax", value: function() { this.parallaxArea.removeEventListener("mousemove", this.sphereParallaxMove, { passive: !0 }), o.ZP.to(this.group.rotation, { x: 0, y: 0, z: 0, duration: .1, delay: .5 }) } }, { key: "destroySphereGsap", value: function() { o.ZP.killTweensOf(this.sphere), o.ZP.killTweensOf(this.camera), o.ZP.killTweensOf(this.noiseControls) } }]) && d(t.prototype, n), r && d(t, r), e
                }(),
                f = n(2248);

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var m = function() {
                function e(t) {
                    var n = t.scene,
                        o = t.camera,
                        r = t.renderer,
                        i = t.sphere,
                        a = t.coreSphere,
                        s = t.group,
                        c = t.material;
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.scene = n, this.camera = o, this.renderer = r, this.group = s, this.sphere = i, this.coreSphere = a, this.material = c, this.createEffects()
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "createEffects",
                    value: function() {
                        this.composer = new f.xC(this.renderer, { frameBufferType: u.cLu });
                        var e = { blendFunction: f.YQ.LIGHTEN, kernelSize: f.DD.SMALL, useLuminanceFilter: !0, luminanceThreshold: .1, luminanceSmoothing: .1 },
                            t = new f.rk(e),
                            n = new f.Uy(this.camera, this.group.position, { speed: .8, size: .1, extent: 2.4, waveSize: 1, amplitude: .1 });
                        this.shockWaveEffect = n;
                        var o = new f.KI(this.camera, this.coreSphere, { height: 300, width: 300, density: .8, decay: .8, weight: 1, exposure: .2, samples: 30, clampMax: 1 }),
                            r = new f.H5(this.camera, o),
                            i = new f.CD(this.scene, this.camera),
                            a = new f.H5(this.camera, n),
                            s = new f.H5(this.camera, t);
                        this.composer.addPass(i), this.composer.addPass(a), this.composer.addPass(s), this.composer.addPass(r)
                    }
                }]) && p(t.prototype, n), o && p(t, o), e
            }();
            n(4376);

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var v = function() {
                    function e(t) {
                        var n = t.scene,
                            o = t.camera,
                            r = t.renderer,
                            i = t.sphere,
                            a = t.coreSphere,
                            s = t.group,
                            c = t.material;
                        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.scene = n, this.camera = o, this.renderer = r, this.group = s, this.sphere = i, this.coreSphere = a, this.material = c, this.init()
                    }
                    var t, n, o;
                    return t = e, (n = [{
                        key: "init",
                        value: function() {
                            for (var e = [], t = 0; t < 1500; t++) {
                                var n = u.M8C.randFloatSpread(2e3),
                                    o = u.M8C.randFloatSpread(2e3),
                                    r = u.M8C.randFloatSpread(2e3);
                                e.push(n, o, r)
                            }
                            var i = new u.u9r;
                            i.setAttribute("position", new u.a$l(e, 3));
                            var a = new u.UY4({ color: 16777215, transparent: !0, opacity: .8 });
                            this.pointsBackground = new u.woe(i, a), this.pointsBackground.position.z = 0, this.scene.add(this.pointsBackground)
                        }
                    }]) && y(t.prototype, n), o && y(t, o), e
                }(),
                w = (n(9720), n(2222), n(1817), n(1539), n(2165), n(6992), n(3948), n(7042), n(8309), n(8222)),
                g = n(9276);
            n(4916), n(4723), n(4603), n(9714), n(9600), n(3123), n(561);
            var b = function(e) { return "string" == typeof e ? document.querySelectorAll(e) : void 0 === e.length ? [e] : (t = e, Array.prototype.slice.call(t, 0, t.length)); var t },
                S = function(e, t) { b(e).forEach((function(e) { return e.classList ? e.classList.add(t) : e.className += " " + t })) },
                P = function(e, t) { b(e).forEach((function(e) { return e.classList ? e.classList.remove(t) : e.className = e.className.split(" ").filter((function(e) { return e !== t })).join(" ") })) };
            var k = function() { return !!navigator.userAgent.match(/i(ad|od|phone)|android/) || window.innerWidth <= 1112 };

            function x(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var o, r, i = [],
                        a = !0,
                        s = !1;
                    try { for (n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t); a = !0); } catch (e) { s = !0, r = e } finally { try { a || null == n.return || n.return() } finally { if (s) throw r } }
                    return i
                }(e, t) || function(e, t) { if (!e) return; if ("string" == typeof e) return E(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var A = function() {
                function e(t) {
                    var n = t.scene,
                        o = t.camera,
                        r = t.renderer,
                        i = t.sphere,
                        a = t.coreSphere,
                        s = t.group,
                        c = t.material,
                        u = t.jsonData;
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.scene = n, this.camera = o, this.renderer = r, this.group = s, this.sphere = i, this.coreSphere = a, this.material = c, this.jsonData = u, this.init()
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "init",
                    value: function() {
                        o.ZP.registerPlugin(w.Z), this.container = document.querySelector("#dataLabelContainer"), this.enabled = !0, this.circleRadius = 1.4, this.circleSegments = 15, this.radius = this.circleRadius / 1.2;
                        var e = new u.zf8(this.circleRadius, this.circleSegments),
                            t = new u.vBJ;
                        this.circle = new u.Kj0(e, t), k() ? (this.circle.position.x = -1.3, this.circle.position.y = -1.3, this.circle.position.z = .15) : (this.circle.position.x = -1.2, this.circle.position.y = -1.2), this.circle.visible = !1, this.scene.add(this.circle), this.group.add(this.circle), this.jsonData && (this.makeWords(this.jsonData.topics.topic1.topWords), this.makeCounters(this.jsonData.topics.topic1), this.makeLinks(this.jsonData)), this.labelRenderer = new g.M, this.labelRenderer.setSize(window.innerWidth, window.innerHeight), this.labelRenderer.domElement.style.position = "absolute", this.labelRenderer.domElement.style.top = "0px", this.container.appendChild(this.labelRenderer.domElement)
                    }
                }, {
                    key: "makeWordsArray",
                    value: function(e) {
                        var t = [];
                        return Object.entries(e).forEach((function(e) {
                            var n = x(e, 2),
                                o = n[0];
                            n[1], t.push([o])
                        })), t
                    }
                }, {
                    key: "makeWords",
                    value: function(e) {
                        var t = this.radius;
                        this.labels = [];
                        for (var n, o = this.makeWordsArray(e), r = 2 * Math.PI / o.length, i = 0; i < o.length; i++) {
                            n = r * i;
                            var a = o[i][0],
                                s = void 0;
                            s = i >= 0 && i < 5 ? "bl" : i >= 5 && i <= 7 ? "tl" : i >= 8 && i <= 10 ? "tr" : "br";
                            var c = document.createElement("span");
                            c.innerHTML = '<span class="word-holder">\n      <span class="word '.concat(s, '">').concat(a, "</span></span");
                            var u = new g.j(c);
                            this.labels.push(u), u.position.set(t + Math.sin(n) * t, t + Math.cos(n) * t, 0), this.circle.add(u)
                        }
                    }
                }, {
                    key: "refreshWords",
                    value: function(e) {
                        var t = new o.ZP.timeline,
                            n = this.container.querySelectorAll(".word"),
                            r = document.querySelector(".home-data-container").querySelectorAll(".word"),
                            i = this.makeWordsArray(e);
                        t.to(n, { autoAlpha: 0, ease: c.Au.easeIn, stagger: .03, duration: .3 }).call((function() {
                            for (var e = 0; e < n.length; e++) {
                                var t = i[e][0];
                                n[e].innerHTML = t
                            }
                        })), t.to(n, { autoAlpha: 1, ease: c.Au.easeOut, stagger: .03, duration: .3 });
                        for (var a = 0; a < r.length; a++) {
                            var s = i[a][0];
                            r[a].innerHTML = s;
                            for (var u = 0; u < r.length; u++) {
                                var l = i[u][0];
                                o.ZP.to(r[u], { duration: 2, delay: .01 * [u], scrambleText: { text: l, chars: r[u].textContent } })
                            }
                        }
                    }
                }, {
                    key: "makeCounters",
                    value: function(e) {
                        var t = this,
                            n = e.locationCount.toLocaleString(),
                            o = e.personCount.toLocaleString(),
                            r = e.organizationCount.toLocaleString(),
                            i = function(e, n, o, r, i) {
                                var a = document.createElement("span");
                                a.innerHTML = '<span class="counter-holder"><span class="counter '.concat(n, '">\n        <span class="value">').concat(e[0], '</span>\n        <span class="label">').concat(e[1], '</span>\n        <span class="ornament"><span class="line"></span></span>\n      </span></span>');
                                var s = new g.j(a);
                                s.position.set(o, r, i), t.coreSphere.add(s)
                            };
                        i([n, "Locations"], "counter-locations counter-style5", -.5, -1, 0), i([o, "Persons"], "counter-persons counter-style5", -.5, -.2, 0), i([r, "Organisations"], "counter-organization counter-style4", .5, .3, 0)
                    }
                }, {
                    key: "refreshCounter",
                    value: function(e) {
                        var t = new o.ZP.timeline,
                            n = document.querySelector(".counter-locations .value"),
                            r = document.querySelector(".counter-persons .value"),
                            i = document.querySelector(".counter-organization .value"),
                            a = e.locationCount.toLocaleString(),
                            s = e.personCount.toLocaleString(),
                            u = e.organizationCount.toLocaleString();
                        t.call((function() { n.innerHTML = a, r.innerHTML = s, i.innerHTML = u })), t.from([n, r, i], { autoAlpha: 0, ease: c.Au.easeOut, stagger: { each: .1, from: "random", ease: "power2.inOut" }, duration: .5 })
                    }
                }, {
                    key: "makeLinks",
                    value: function(e) {
                        var t, n = this,
                            o = .8 * this.radius;
                        t = e.links ? e.links : [
                            ["Error data", "/"]
                        ];
                        for (var r, i = function(e, t, o, r, i, a) {
                                var s = document.createElement("span");
                                s.innerHTML = '<span class="link-holder">\n      <a href="'.concat(t, '" target="blank" rel="noopener" class="link link-').concat(a, '">').concat(e, "</a></span>");
                                var c = new g.j(s);
                                c.position.set(o, r, i), n.circle.add(c)
                            }, a = 2 * Math.PI / t.length, s = 0; s < t.length; s++) r = a * s, i(t[s][0], t[s][1], o + Math.sin(r) * o, o + Math.cos(r) * o + .25, 0, s)
                    }
                }]) && O(t.prototype, n), r && O(t, r), e
            }();

            function Z(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var L = new(function() {
                    function e() {
                        if (function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.isDisabled = !1, this.canvasContainer = document.getElementById("canvas"), !this.canvasContainer) return this.isDisabled = !0, !1;
                        this.defaultCameraZ = window.innerWidth < 1112 ? 6.5 : 4.5, this.isMobile = window.innerWidth < 1112, this.isPaused = !1, document.querySelector("html").classList.add("has-threejs"), this.init()
                    }
                    var t, n, o;
                    return t = e, (n = [{
                        key: "init",
                        value: function() {
                            var e = this,
                                t = window.innerWidth,
                                n = window.innerHeight,
                                o = window.devicePixelRatio,
                                r = window.innerWidth / window.innerHeight;
                            this.clock = new u.SUY, this.scene = new u.xsS, this.camera = new u.cPb(50, r, .3, 1e3), this.camera.position.z = 8.5, this.renderer = new u.CP7({ canvas: this.canvasContainer, powerPreference: "high-performance", antialias: !0, stencil: !1, depth: !1, alpha: !0 }), this.renderer.setClearColor(0, 0), this.renderer.setPixelRatio(o), this.renderer.setSize(t, n), this.parts = new h({ scene: this.scene, camera: this.camera, renderer: this.renderer, defaultCameraZ: this.defaultCameraZ, isMobile: this.isMobile });
                            var i = { scene: this.scene, camera: this.camera, renderer: this.renderer, sphere: this.parts.sphere, coreSphere: this.parts.coreSphere, group: this.parts.group, material: this.parts.material, jsonData: __site_config || null };
                            this.sky = new v(i), this.effects = new m(i), this.textLabels = new A(i),
                                function t() { setTimeout((function() { e.isPaused || (e.parts.updateNoise(e.parts.noiseControls.noise, e.parts.noiseControls.time, e.parts.noiseControls.scale), e.parts.particles0.rotation.z += .003, e.parts.particles1.rotation.z -= .003, e.parts.particles0.rotation.x += .005, e.parts.particles1.rotation.y -= .005, e.parts.ring0.rotation.z += .011, e.parts.ring1.rotation.z += .013, e.sky.pointsBackground.rotation.x += 5e-4, e.renderer.render(e.scene, e.camera), e.effects.composer.render(e.clock.getDelta()), e.textLabels.enabled && e.textLabels.labelRenderer.render(e.scene, e.camera)), requestAnimationFrame(t) }), 25) }(), window.addEventListener("resize", (function() {
                                    var t = window.innerWidth,
                                        n = window.innerHeight;
                                    e.camera.aspect = t / n, e.camera.updateProjectionMatrix(), e.effects.composer.setSize(t, n), e.textLabels.labelRenderer.setSize(window.innerWidth, window.innerHeight)
                                }), !1)
                        }
                    }, { key: "explode", value: function() { this.effects.shockWaveEffect.speed = 1.4, this.effects.shockWaveEffect.size = .5, this.effects.shockWaveEffect.extent = 2.8, this.effects.shockWaveEffect.waveSize = .7, this.effects.shockWaveEffect.amplitude = .06, this.effects.shockWaveEffect.explode() } }]) && Z(t.prototype, n), o && Z(t, o), e
                }()),
                C = function(e) { return o.ZP.from(e, { autoAlpha: 0, duration: .3, ease: c.EA.easeOut }) },
                T = [{ name: "FadeInOut", sync: !1, once: function(e) { var t = e.next; return C(t.container) }, leave: function(e) { var t, n = e.current; return t = n.container, o.ZP.to(t, { onStart: function() { L.explode(), L.parts.destroySphereGsap() }, autoAlpha: 0, duration: .3, ease: c.EA.easeOut }) }, enter: function(e) { var t = e.next; return C(t.container) } }],
                D = (n(9601), (0, n(9391).Z)());

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var $ = "ontouchstart" in document.documentElement,
                j = function() {
                    function e(t, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), t && (this.options = Object.assign({ sectionsSelector: ".fs-section", onChange: function() {} }, n), this.$el = "string" == typeof t ? document.querySelector(t) : t, this.$sections = Array.from(this.$el.querySelectorAll(this.options.sectionsSelector)), this.currentIndex = 0, this.previousIndex = -1, this.init()) }
                    var t, n, o;
                    return t = e, n = [{ key: "init", value: function() { this.isAnimating = !1, this.hasPeak = !1, this.isDrag = !1, this.delta = 0, this.touchEvent = null, this.dragStart = 0, this.minHeight = window.innerHeight, this.onDragEnd = this.onDragEnd.bind(this), this.onDrag = this.onDrag.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onWheel = this.onWheel.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.animationDone = this.animationDone.bind(this), this.prevSlide = this.prevSlide.bind(this), this.nextSlide = this.nextSlide.bind(this), this.addListeners() } }, { key: "addListeners", value: function() { D.on("scroll:up", this.prevSlide), D.on("scroll:down", this.nextSlide), this.$el.addEventListener("mousedown", this.onDragStart), this.$el.addEventListener("touchstart", this.onDragStart, { passive: !0 }), this.$el.addEventListener("mousemove", this.onDrag), this.$el.addEventListener("touchmove", this.onDrag, { passive: !0 }), this.$el.addEventListener("mouseup", this.onDragEnd), this.$el.addEventListener("touchend", this.onDragEnd, { passive: !0 }), this.$el.addEventListener("touchleave", this.onDragEnd, { passive: !0 }), this.$el.addEventListener("mouseleave", this.onDragEnd), window.addEventListener("wheel", this.onWheel), window.addEventListener("keyup", this.onKeyUp) } }, { key: "removeListeners", value: function() { D.off("scroll:up", this.prevSlide), D.off("scroll:down", this.nextSlide), this.$el.removeEventListener("mousedown", this.onDragStart), this.$el.removeEventListener("touchstart", this.onDragStart, { passive: !0 }), this.$el.removeEventListener("mousemove", this.onDrag), this.$el.removeEventListener("touchmove", this.onDrag), this.$el.removeEventListener("mouseup", this.onDragEnd), this.$el.removeEventListener("touchend", this.onDragEnd), this.$el.removeEventListener("touchleave", this.onDragEnd), this.$el.removeEventListener("mouseleave", this.onDragEnd), window.removeEventListener("wheel", this.onWheel), window.removeEventListener("keyup", this.onKeyUp) } }, {
                        key: "onWheel",
                        value: function(e) {
                            var t = this,
                                n = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 40,
                                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 800,
                                        r = 0,
                                        i = 0,
                                        a = 0,
                                        s = 0;
                                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (r = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (r = i, i = 0), a = r * t, s = i * t, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (a = e.deltaX), (a || s) && e.deltaMode && (1 == e.deltaMode ? (a *= n, s *= n) : (a *= o, s *= o)), a && !r && (r = a < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), { spinX: r, spinY: i, pixelX: a, pixelY: s }
                                }(e);
                            if ((n.pixelY > 10 || n.pixelY < -10) && !this.hasPeak) {
                                this.hasPeak = !0;
                                var o = n.pixelY > 10 ? this.currentIndex + 1 : this.currentIndex - 1;
                                this.onIndexChange(o), setTimeout((function() { t.hasPeak = !1 }), 2e3)
                            }
                        }
                    }, { key: "onKeyUp", value: function(e) { 40 === e.keyCode || 39 === e.keyCode ? this.nextSlide() : 38 !== e.keyCode && 37 !== e.keyCode || this.prevSlide() } }, { key: "onDragStart", value: function(e) { this.isDrag = !0, this.touchEvent = $ && "mousemove" !== e.type ? e.touches[0] || e.changedTouches[0] : e, this.dragStart = this.touchEvent.clientY, this.delta = 0 } }, { key: "onDrag", value: function(e) { this.isDrag && (this.touchEvent = $ && "mousemove" !== e.type ? e.touches[0] || e.changedTouches[0] : e, this.delta = this.touchEvent.clientY - this.dragStart) } }, {
                        key: "onDragEnd",
                        value: function() {
                            if (this.isDrag) {
                                this.isDrag = !1;
                                var e = $ ? 5 : 2;
                                $ && Math.abs(this.delta) > this.minHeight / e && (this.delta < 0 ? this.nextSlide() : this.prevSlide())
                            }
                        }
                    }, { key: "nextSlide", value: function() { this.onIndexChange(this.currentIndex + 1) } }, { key: "prevSlide", value: function() { this.onIndexChange(this.currentIndex - 1) } }, { key: "goToIndex", value: function(e) { this.onIndexChange(e) } }, { key: "setIndex", value: function(e) { this.previousIndex = this.currentIndex, this.currentIndex = e } }, { key: "animationDone", value: function() { this.isAnimating = !1 } }, { key: "onIndexChange", value: function(e) { e < 0 || e >= this.$sections.length || this.isAnimating || (this.isAnimating = !0, this.setIndex(e), this.options.onChange({ currentIndex: this.currentIndex, previousIndex: this.previousIndex, current: this.$sections[this.currentIndex], previous: this.$sections[this.previousIndex], direction: this.currentIndex > this.previousIndex ? 1 : -1, animationDone: this.animationDone })) } }, { key: "destroy", value: function() { this.removeListeners() } }], n && I(t.prototype, n), o && I(t, o), e
                }(),
                q = n(7757),
                M = n.n(q);
            n(8674);

            function _(e, t, n, o, r, i, a) {
                try {
                    var s = e[i](a),
                        c = s.value
                } catch (e) { return void n(e) }
                s.done ? t(c) : Promise.resolve(c).then(o, r)
            }

            function z(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, r) {
                        var i = e.apply(t, n);

                        function a(e) { _(i, o, r, a, s, "next", e) }

                        function s(e) { _(i, o, r, a, s, "throw", e) }
                        a(void 0)
                    }))
                }
            }

            function H(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var F = function() {
                    function e() { var t = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.$el = document.querySelector(".footer"), this.$slogan = this.$el.querySelector(".footer-slogan"), this.$contacts = this.$el.querySelector(".footer_contacts"), this.$switchData = this.$el.querySelector(".footer_center"), this.$cta = this.$el.querySelector(".footer-cta"), this.$socials = this.$el.querySelector(".footer_socials"), this.$ctaLabel = this.$cta.querySelector(".label"), this.$scrollButton = this.$el.querySelector(".scroll-down"), this.$homeScrollButton = this.$el.querySelector(".home-scroll-down"), this.$sections = [this.$slogan, this.$contacts, this.$switchData, this.$cta, this.$socials], this.$scrollButton.addEventListener("click", (function() { var e = t.$scrollButton.getAttribute("data-scroll-direction"); "down" === e && D.emit("scroll:down"), "up" === e && D.emit("scroll:up") })) }
                    var t, n, r, i, a, s;
                    return t = e, n = [{ key: "hide", value: function(e) { e.forEach((function(e) { return e.classList.add("hide") })) } }, { key: "show", value: function(e) { e.forEach((function(e) { return e.classList.remove("hide") })) } }, { key: "getVisibleSections", value: function() { return this.$sections.filter((function(e) { return !e.classList.contains("hide") })) } }, { key: "animateOutVisibleSections", value: function() { var e = this; return o.ZP.to(this.getVisibleSections(), { autoAlpha: 0, stagger: .3, duration: .3, onComplete: function() { return e.hide(e.$sections) } }) } }, { key: "animateInSections", value: function(e) { o.ZP.set(e, { autoAlpha: 0 }), this.show(e), o.ZP.to(e, { autoAlpha: 1, stagger: .3, duration: .3 }) } }, {
                        key: "showDefault",
                        value: (s = z(M().mark((function e() {
                            var t, n, o = arguments;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = o.length > 0 && void 0 !== o[0] ? o[0] : "Back To Top", n = o.length > 1 && void 0 !== o[1] ? o[1] : "up", e.next = 4, this.animateOutVisibleSections();
                                    case 4:
                                        this.$scrollButton.setAttribute("data-scroll-direction", n), this.$ctaLabel.innerHTML = t, this.animateInSections([this.$contacts, this.$cta]);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return s.apply(this, arguments) })
                    }, {
                        key: "showHome",
                        value: (a = z(M().mark((function e() {
                            var t, n, o = arguments;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = o.length > 0 && void 0 !== o[0] ? o[0] : "", n = o.length > 1 && void 0 !== o[1] ? o[1] : "down", e.next = 4, this.animateOutVisibleSections();
                                    case 4:
                                        this.$scrollButton.setAttribute("data-scroll-direction", n), this.$ctaLabel.innerHTML = t, this.animateInSections([this.$slogan, this.$switchData, this.$cta]);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return a.apply(this, arguments) })
                    }, {
                        key: "showSocials",
                        value: (i = z(M().mark((function e() {
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.animateOutVisibleSections();
                                    case 2:
                                        this.animateInSections([this.$contacts, this.$socials]);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return i.apply(this, arguments) })
                    }], n && H(t.prototype, n), r && H(t, r), e
                }(),
                B = new F,
                R = function(e, t) { o.ZP.killTweensOf(L.parts.noiseControls), o.ZP.to(L.parts.noiseControls, { noise: e, scale: t, ease: c.Yp.easeOut, duration: 10, overflow: "all" }) },
                Y = function(e, t, n) { return o.ZP.killTweensOf(L.parts.group.position), o.ZP.to(L.parts.group.position, { x: e || 0, y: t || 0, z: n || 0, ease: c.Au.easeOut, duration: 2 }) },
                W = function(e, t, n) { return o.ZP.killTweensOf(L.parts.sphere.rotation), o.ZP.to(L.parts.sphere.rotation, { x: e || 0, y: t || 0, ease: c.Yp.easeOut, duration: 6, overflow: "all" }) },
                N = function(e, t, n) { return o.ZP.killTweensOf(L.camera.position), o.ZP.to(L.camera.position, { x: e || 0, y: t || 0, z: n || 0, ease: c.Yp.easeOut, duration: 1 }) },
                G = function(e, t, n) { o.ZP.timeline().to(e, { autoAlpha: 1, duration: .5, overwrite: "all", onComplete: n }, 0).fromTo(e.querySelectorAll("[data-anim-item]"), { opacity: 0, y: 50 * t }, { stagger: .05, opacity: 1, ease: c.Yp.easeOut, duration: 1, y: 0 }, 0) },
                U = function(e, t, n) { L.explode(), o.ZP.to(L.camera.position, { y: -1 * t * 3, z: 0, ease: c.Au.easeOut, duration: 3 }), o.ZP.timeline().to(e, { autoAlpha: 0, duration: .5, overwrite: "all", onComplete: n }, 0).to(e.querySelectorAll("[data-anim-item]"), { stagger: .05, opacity: 0, ease: c.Yp.easeOut, duration: 1, y: -1 * t * 50 }, 0) },
                K = function(e, t, n) { o.ZP.timeline().to(e, { autoAlpha: 0, duration: .5, overwrite: "all", onComplete: n }, 0).to(e.querySelectorAll("[data-anim-item]"), { stagger: .05, opacity: 1, ease: c.Yp.easeOut, duration: 1, y: -1 * t * 50 }, 0) },
                V = function(e) { o.ZP.timeline({ onComplete: function() { L.textLabels.enabled = e } }).set(".data-labels-container", { opacity: e ? 1 : 0, pointerEvents: e ? "all" : "none", overwrite: "all" }) },
                X = function(e) { var t; "words" === e && (t = ".word-holder"), "counters" === e && (t = ".counter-holder"), "links" === e && (t = ".link-holder"), o.ZP.timeline().set(".word-holder, .counter-holder, .link-holder", { opacity: 0, pointerEvents: "none", overwrite: "all" }).to(t, { opacity: 1, stagger: .03, duration: .3, pointerEvents: "all", overwrite: "all" }) },
                Q = function(e) { o.ZP.to(".switch-data", { opacity: e ? 1 : 0, duration: .5 }) },
                J = {
                    namespace: "home",
                    beforeEnter: function() { L.parts.sphereParallax() },
                    beforeLeave: function() { L.parts.removeSphereParallax(), L.parts.particleMaterial.opacity = 0, L.parts.coreMaterial.opacity = 0, L.parts.linesMaterial.opacity = 0, L.parts.regenerateSphereGeometry(2, 75, 75, 0, 2 * Math.PI), V(!1), Q(!1) },
                    afterLeave: function() {
                        var e;
                        null === (e = this.animatedSections) || void 0 === e || e.destroy()
                    },
                    afterEnter: function(e) { L.parts.material.wireframe = !1, this.initIntroAnimations(e.current.container), this.initSections(), B.showHome("", "down") },
                    initIntroAnimations: function(e) {
                        var t = this,
                            n = document.querySelectorAll(".home-data-container .item"),
                            r = new i.Z(".home-hero .title", { type: "lines, words" }).words;
                        this.tl_homeIntro = o.ZP.timeline({ paused: !0 }), this.tl_homeIntro.fromTo(r, { yPercent: 100 }, { duration: 1.2, yPercent: 0, stagger: .1, ease: c.Yp.easeOut }, 0), this.tl_homeIntro.set(".home-scroll-down", { opacity: 1 }, .8), this.tl_homeIntro.from(n, { autoAlpha: 0, transformOrigin: "center", stagger: { each: 5 / n.length }, duration: .8 }, .1);
                        var a = o.ZP.timeline({ delay: e ? 0 : 2, onComplete: function() { o.ZP.set(".updata-letters", { opacity: 0, display: "none" }) } });
                        a.add(N(0, 0, L.defaultCameraZ), 0), a.add(Y(0, 0, 0), 0), a.add(W(8.5, 2.4), 0), a.call(R, [13, 1], .1), a.add((function() { t.tl_homeIntro.play() }), .1), a.to(".page-scroll-down", { opacity: 1 }, .4)
                    },
                    initSections: function() {
                        var e = "#sections-container .section",
                            t = Array.from(document.querySelectorAll(e));
                        t.forEach((function(e, n) { return o.ZP.set(e, { zIndex: t.length - n, autoAlpha: 0 }) }));
                        var n = [{ in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                n && (i.add(Y(0, 0, 0), 0), i.add(W(8.5, 2.4), .1), i.add(N(0, 0, L.defaultCameraZ), .2), i.call(R, [13, 1], 0))
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                K(t, n, r);
                                var i = new o.ZP.timeline;
                                i.add(N(0, 0, L.defaultCameraZ), 0), i.add(Y(0, -1.2, 3.9), 0)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                if (G(t, n, r), B.showHome("", "down"), n) {
                                    var i = new o.ZP.timeline;
                                    i.add(N(0, 0, L.defaultCameraZ), 0), i.call(R, [13, 1], 0), i.add(Y(0, -1.2, 3.9), 0)
                                }
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                K(t, n, o), B.showHome("", "down")
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline({ onStart: function() { L.parts.particleMaterial.opacity = 1 } });
                                i.call(R, [4, .1], 0), L.isMobile ? i.add(Y(0, -.5, 0), 0) : i.add(Y(.8, 0, 0), 0), i.add(W(8.5, 2.4), .1), i.add(N(0, 0, L.defaultCameraZ), .2), i.add(V(!0), 1), i.add(Q(!0), 1), i.add(X("words"), 0)
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                L.parts.particleMaterial.opacity = 0, n < 0 ? (K(t, n, o), V(!1), Q(!1)) : U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline({ onStart: function() { L.parts.particleMaterial.opacity = 0, L.parts.coreMaterial.opacity = 1, L.parts.material.wireframe = !0, L.parts.regenerateSphereGeometry(2, 75, 75, 0, Math.PI) } });
                                i.call(R, [4.5, .2], 0), L.isMobile ? (i.add(Y(0, -.3, 0), 0), i.add(N(0, 0, 4.8), 0)) : (i.add(Y(-1.3, 0, -.2), 0), i.add(N(-.6, -.2, 2.9), .2)), i.add(W(5.3, 3.8), 0), i.add(V(!0), 0), i.add(Q(!0), 0), i.add(X("counters"), 0)
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                L.parts.material.wireframe = !1, L.parts.coreMaterial.opacity = 0, L.parts.regenerateSphereGeometry(2, 75, 75, 0, 2 * Math.PI), U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r), L.parts.linesMaterial.opacity = 1;
                                var i = new o.ZP.timeline;
                                i.call(R, [11, .15], 0), L.isMobile ? (i.add(Y(0, -.5, 0), 0), i.add(N(0, 0, 4.8), 0)) : i.add(Y(.7, 0, 0), 0), i.add(N(0, 0, L.defaultCameraZ), .2), i.add(W(8.5, 2.4), .2), i.add(V(!1), 0), i.add(Q(!0), 0)
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                L.parts.linesMaterial.opacity = 0, U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.call(R, [.7, .1], 0), L.isMobile ? i.add(Y(0, -.5, 1), 0) : i.add(Y(-.9, 0, 1), 0), i.add(N(0, 0, L.defaultCameraZ), .2), i.add(W(4.6, 7), .2), i.add(X("links"), 0), i.add(Q(!1), 0), i.add(V(!0), 0)
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                1 == n ? (K(t, n, o), V(!1)) : U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.add(Y(0, 0, 0), 0), i.add(W(8.5, 2.4), 0), i.call(R, [13, 1], .1), i.add(N(0, 0, .4), .2), B.showHome("Scroll up", "up")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                K(t, n, o), B.showHome("", "down")
                            }
                        }];
                        this.animatedSections = new j("#sections-container", {
                            sectionsSelector: e,
                            onChange: function(e) {
                                var r = e.current,
                                    i = e.previous,
                                    a = e.currentIndex,
                                    s = e.previousIndex,
                                    c = e.direction,
                                    u = e.animationDone;
                                o.ZP.set(i, { zIndex: 1 }), n[s].out({ element: i, direction: c, done: function() { o.ZP.set(i, { zIndex: t.length + 1 }), n[a].in({ element: r, direction: c, done: u }) } })
                            }
                        }), n[this.animatedSections.currentIndex].in({ element: this.animatedSections.$sections[this.animatedSections.currentIndex] })
                    }
                },
                ee = {
                    namespace: "about-us",
                    beforeEnter: function(e) { o.ZP.registerPlugin(i.Z) },
                    beforeLeave: function() { o.ZP.fromTo(".about-h-ornament path", { scale: .6, opacity: 1, stagger: .05, ease: c.tQ.easeOut.config(1, .4), duration: 1 }) },
                    afterLeave: function() {
                        var e;
                        null === (e = this.animatedSections) || void 0 === e || e.destroy()
                    },
                    afterEnter: function(e) { this.initIntroAnimations(e.current.container), this.initSections(), B.showDefault("", "down") },
                    initIntroAnimations: function(e) {
                        var t = new i.Z(".hero-section .title", { type: "lines, words" }).words,
                            n = new i.Z(".hero-section .right-copy .large-label", { type: "lines, words" }).words,
                            r = o.ZP.timeline({ delay: e ? 0 : 2 });
                        r.add(N(0, 0, L.defaultCameraZ), 0), r.add(N(0, 0, 0), .3), r.fromTo(".about-h-ornament path", { opacity: 0, scale: .5, transformOrigin: "center center" }, { scale: .8, opacity: 1, stagger: -.05, ease: c.tQ.easeOut.config(1.1, .4), duration: 2 }, .2), r.fromTo(t, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, .5), r.to(".hero-section .right-copy", { autoAlpha: 1, duration: 1, ease: c.sm.easeOut }, .5), r.fromTo(n, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, .6), r.to(".page-scroll-down", { opacity: 1 }, .4)
                    },
                    initSections: function() {
                        var e = "#sections-container .section",
                            t = Array.from(document.querySelectorAll(e));
                        t.forEach((function(e, n) { return o.ZP.set(e, { zIndex: t.length - n, autoAlpha: 0 }) }));
                        var n = [{ in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                n && i.fromTo(".about-h-ornament path", { opacity: 0, scale: .5, transformOrigin: "center center" }, { scale: .8, opacity: 1, stagger: -.05, ease: c.tQ.easeOut.config(1.1, .4), duration: 2 }, 0), -1 == n && B.showDefault("", "down")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                U(t, n, r), (new o.ZP.timeline).to(".about-h-ornament path", { scale: .5, opacity: 0, stagger: -.05, ease: c.Au.easeOut, duration: .5 }, 0)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r), (new o.ZP.timeline).fromTo(".about-s2-ornament path", { opacity: 0, scale: .5, transformOrigin: "center center" }, { scale: .8, opacity: 1, stagger: -.05, ease: c.tQ.easeOut.config(1.1, .4), duration: 2 }, 0)
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r), (new o.ZP.timeline).fromTo(".about-s3-ornament path", { opacity: 0, scale: .5, transformOrigin: "center center" }, { scale: .8, opacity: 1, stagger: -.05, ease: c.tQ.easeOut.config(1.1, .4), duration: 2 }, 0), document.querySelector(".about-casestudies") || B.showDefault("Scroll Up", "up")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }];
                        document.querySelector(".about-casestudies") && n.push({ in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                G(t, n, o), B.showDefault("Scroll Up", "up")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o), B.showDefault("", "down")
                            }
                        }), this.animatedSections = new j("#sections-container", {
                            sectionsSelector: e,
                            onChange: function(e) {
                                var r = e.current,
                                    i = e.previous,
                                    a = e.currentIndex,
                                    s = e.previousIndex,
                                    c = e.direction,
                                    u = e.animationDone;
                                o.ZP.set(i, { zIndex: 1 }), n[s].out({ element: i, direction: c, done: function() { o.ZP.set(i, { zIndex: t.length + 1 }), n[a].in({ element: r, direction: c, done: u }) } })
                            }
                        }), n[this.animatedSections.currentIndex].in({ element: this.animatedSections.$sections[this.animatedSections.currentIndex] })
                    }
                },
                te = {
                    namespace: "company",
                    beforeEnter: function() { o.ZP.registerPlugin(i.Z) },
                    afterLeave: function() {
                        var e;
                        null === (e = this.animatedSections) || void 0 === e || e.destroy()
                    },
                    afterEnter: function(e) { this.initIntroAnimations(e.current.container), this.initSections(), L.parts.material.wireframe = !1, B.showDefault("Explore the companies") },
                    initIntroAnimations: function(e) {
                        var t = new i.Z(".hero-section .title", { type: "lines, words" }).words,
                            n = new i.Z(".hero-section .right-copy .large-label", { type: "lines, words" }).words,
                            r = o.ZP.timeline({ delay: e ? 0 : 2 });
                        r.call(R, [10, 1], 0), r.add(N(0, 0, L.defaultCameraZ), 0), r.add(Y(0, -1.2, 3.9), 0), r.add(W(9, 8.8), 0), r.fromTo(t, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, .65), r.to(".hero-section .right-copy", { autoAlpha: 1, duration: 1, ease: c.sm.easeOut }, 1), r.fromTo(n, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, 1.1), r.to(".page-scroll-down", { opacity: 1 }, .4)
                    },
                    initSections: function() {
                        var e = "#sections-container .section",
                            t = Array.from(document.querySelectorAll(e));
                        t.forEach((function(e, n) { return o.ZP.set(e, { zIndex: t.length - n, autoAlpha: 0 }) }));
                        var n = [{ in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                n && (i.call(R, [10, 1], 0), i.add(Y(0, -1.2, 3.9), 0), i.add(W(9, 8.8), .1), i.add(N(0, 0, L.defaultCameraZ), .2), B.showDefault("Explore the companies"))
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.call(R, [4, .1], 0), L.isMobile ? (i.add(Y(1, -1, 4), 0), i.add(W(8.5, 2.4), .1), i.add(N(0, 0, L.defaultCameraZ), .2)) : (i.add(Y(2.9, -1.5, 1.3), 0), i.add(N(0, 0, L.defaultCameraZ), .2), i.add(W(8.5, 2.4), .1)), B.showDefault("Explore the companies - A Data Pro")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.call(R, [5, .6], 0), i.add(N(0, 0, L.defaultCameraZ), .2), B.showDefault("Explore the companies - Identrics")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.call(R, [11, .15], 0), i.add(N(0, 0, L.defaultCameraZ), .2), B.showDefault("Explore the companies - Perceptica")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.call(R, [.7, .1], 0), i.add(N(0, 0, L.defaultCameraZ), .2), B.showDefault("Explore the companies - SeeNews")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }, { in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                G(t, n, r);
                                var i = new o.ZP.timeline;
                                i.add(Y(0, -3, 3.9), 0), i.add(N(0, 0, L.defaultCameraZ), .2), B.showDefault("Scroll Up")
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done,
                                    i = new o.ZP.timeline;
                                L.isMobile ? i.add(Y(1, -1, 4), 0) : i.add(Y(2.9, -1.5, 1.3), 0), B.showDefault(""), U(t, n, r)
                            }
                        }];
                        this.animatedSections = new j("#sections-container", {
                            sectionsSelector: e,
                            onChange: function(e) {
                                var r = e.current,
                                    i = e.previous,
                                    a = e.currentIndex,
                                    s = e.previousIndex,
                                    c = e.direction,
                                    u = e.animationDone;
                                o.ZP.set(i, { zIndex: 1 }), n[s].out({ element: i, direction: c, done: function() { o.ZP.set(i, { zIndex: t.length + 1 }), n[a].in({ element: r, direction: c, done: u }) } })
                            }
                        }), n[this.animatedSections.currentIndex].in({ element: this.animatedSections.$sections[this.animatedSections.currentIndex] })
                    }
                },
                ne = {
                    namespace: "team",
                    beforeEnter: function() { o.ZP.registerPlugin(i.Z) },
                    afterLeave: function() {
                        var e;
                        null === (e = this.animatedSections) || void 0 === e || e.destroy()
                    },
                    afterEnter: function(e) { this.initIntroAnimations(e.current.container), this.initSections(), B.showDefault("Explore the team") },
                    initIntroAnimations: function(e) {
                        var t = new i.Z(".hero-section .title", { type: "lines, words" }).words,
                            n = new i.Z(".hero-section .right-copy .large-label", { type: "lines, words" }).words,
                            r = o.ZP.timeline({ delay: e ? 0 : 2 });
                        r.call(R, [.1, .1], 0), r.add(N(0, 0, L.defaultCameraZ), 0), r.add(Y(0, -1.2, 3.9), .1), r.add(W(1.8, 2.4), .1), r.fromTo(t, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, .65), r.to(".hero-section .right-copy", { autoAlpha: 1, duration: 1, ease: c.sm.easeOut }, 1), r.fromTo(n, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, 1.1), r.to(".page-scroll-down", { opacity: 1 }, .4)
                    },
                    gsapHideTeam: function(e, t) { o.ZP.fromTo(e.querySelectorAll(".person"), { y: 0, autoAlpha: 1 }, { autoAlpha: 0, y: 10 * t, stagger: .05 }, 0) },
                    gsapShowTeam: function(e, t) { o.ZP.fromTo(e.querySelectorAll(".person"), { y: -10 * t, autoAlpha: 0 }, { autoAlpha: 1, y: 0, stagger: .05 }, 0) },
                    initSections: function() {
                        var e = this,
                            t = "#sections-container .section",
                            n = Array.from(document.querySelectorAll(t)),
                            r = [{ in: function(e) {
                                    var t = e.element,
                                        n = e.direction,
                                        r = e.done;
                                    G(t, n, r);
                                    var i = new o.ZP.timeline; - 1 == n && (i.add(N(0, 0, L.defaultCameraZ), 0), i.add(Y(0, -1.2, 3.9), 0)), -1 == n && B.showDefault("", "down")
                                },
                                out: function(e) {
                                    var t = e.element,
                                        n = e.direction,
                                        o = e.done;
                                    U(t, n, o)
                                }
                            }];
                        n.forEach((function(t, i) {
                            o.ZP.set(t, { zIndex: n.length - i, autoAlpha: 0 }), i > 0 && r.push({ in: function(t) {
                                    var n = t.element,
                                        o = t.direction,
                                        r = t.done;
                                    G(n, o, r), Y(0, -3, 3.9), e.gsapShowTeam(n, o)
                                },
                                out: function(t) {
                                    var n = t.element,
                                        o = t.direction,
                                        r = t.done;
                                    U(n, o, r), e.gsapHideTeam(n, o), B.showDefault("Scroll Up", "up")
                                }
                            })
                        })), this.animatedSections = new j("#sections-container", {
                            sectionsSelector: t,
                            onChange: function(e) {
                                var t = e.current,
                                    i = e.previous,
                                    a = e.currentIndex,
                                    s = e.previousIndex,
                                    c = e.direction,
                                    u = e.animationDone;
                                o.ZP.set(i, { zIndex: 1 }), r[s].out({ element: i, direction: c, done: function() { o.ZP.set(i, { zIndex: n.length + 1 }), r[a].in({ element: t, direction: c, done: u }) } })
                            }
                        }), r[this.animatedSections.currentIndex].in({ element: this.animatedSections.$sections[this.animatedSections.currentIndex] })
                    }
                },
                oe = {
                    namespace: "contact",
                    beforeEnter: function() { o.ZP.registerPlugin(i.Z) },
                    beforeLeave: function() { L.parts.material.wireframe = !1 },
                    afterLeave: function() {
                        var e;
                        null === (e = this.animatedSections) || void 0 === e || e.destroy()
                    },
                    afterEnter: function(e) { this.initIntroAnimations(e.current.container), this.initSections(), B.showSocials() },
                    initIntroAnimations: function(e) {
                        var t = new i.Z(".hero-section .title", { type: "lines, words" }).words,
                            n = document.querySelectorAll("[data-el-in]"),
                            r = o.ZP.timeline({ delay: e ? 0 : 2, onStart: function() { L.parts.material.wireframe = !0 } });
                        r.call(R, [4.5, .1], 0), r.add(N(0, 0, L.defaultCameraZ), 0), r.add(W(1.8, 2.4), 0), L.isMobile ? r.add(Y(0, -2.1, 3.9), 0) : r.add(Y(0, -1.2, 3.9), 0), r.fromTo(t, { yPercent: 100 }, { duration: 1, yPercent: 0, stagger: .08, ease: c.Yp.easeOut }, .1), r.fromTo(n, { y: 10, autoAlpha: 0 }, { duration: 1, yPercent: 0, autoAlpha: 1, stagger: .08, ease: c.Yp.easeOut }, .1)
                    },
                    initSections: function() {
                        var e = "#sections-container .section",
                            t = Array.from(document.querySelectorAll(e));
                        t.forEach((function(e, n) { return o.ZP.set(e, { zIndex: t.length - n, autoAlpha: 0 }) }));
                        var n = [{ in: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    r = e.done;
                                if (G(t, n, r), -1 == n) {
                                    var i = new o.ZP.timeline;
                                    i.add(N(0, 0, L.defaultCameraZ), .8), i.add(Y(0, -1.2, 3.9), .8)
                                }
                            },
                            out: function(e) {
                                var t = e.element,
                                    n = e.direction,
                                    o = e.done;
                                U(t, n, o)
                            }
                        }];
                        this.animatedSections = new j("#sections-container", {
                            sectionsSelector: e,
                            onChange: function(e) {
                                var r = e.current,
                                    i = e.previous,
                                    a = e.currentIndex,
                                    s = e.previousIndex,
                                    c = e.direction,
                                    u = e.animationDone;
                                o.ZP.set(i, { zIndex: 1 }), n[s].out({ element: i, direction: c, done: function() { o.ZP.set(i, { zIndex: t.length + 1 }), n[a].in({ element: r, direction: c, done: u }) } })
                            }
                        }), n[this.animatedSections.currentIndex].in({ element: this.animatedSections.$sections[this.animatedSections.currentIndex] })
                    }
                },
                re = n(9669),
                ie = n.n(re),
                ae = [J, ee, te, ne, oe, {
                    namespace: "contact-form",
                    beforeEnter: function() {},
                    beforeLeave: function() { this.$contactForm && this.$contactForm.removeEventListener("submit", this.onContactFormSubmit), L.parts.material.wireframe = !1 },
                    afterLeave: function() {},
                    afterEnter: function(e) { this.initIntroAnimations(e.current.container), B.showSocials(), this.openCloseSelect(), this.initContactForm() },
                    initIntroAnimations: function(e) {
                        var t = o.ZP.timeline({ delay: e ? 0 : 2 });
                        t.call(R, [4.5, .1], 0), t.add(N(0, 0, L.defaultCameraZ), 0), t.add(W(1.8, 2.4), 0), L.isMobile ? t.add(Y(0, -2.1, 3.9), 0) : t.add(Y(0, -1.2, 3.9), 0), t.to(".sections-container .section", { opacity: 1, zIndex: 1 }, 1)
                    },
                    openCloseSelect: function() {
                        var e = document.querySelector(".select-field");
                        e.querySelector(".field-text").addEventListener("click", (function(t) { e.classList.add("open") })), e.querySelector(".dropdown-done").addEventListener("click", (function(t) { e.classList.remove("open") }))
                    },
                    initContactForm: function() { this.$contactForm = document.querySelector("#contact-form"), this.$contactForm && (this.onContactFormSubmit = this.onContactFormSubmit.bind(this), this.sendForm = this.sendForm.bind(this), this.showSuccess = this.showSuccess.bind(this), this.showError = this.showError.bind(this), this.$contactForm.addEventListener("submit", this.onContactFormSubmit)) },
                    removeFormErrors: function() { this.$contactForm && Array.from(this.$contactForm.querySelectorAll(".error")).forEach((function(e) { e.classList.remove("error") })) },
                    onContactFormSubmit: function(e) {
                        var t = this;
                        e.preventDefault(), this.removeFormErrors(), this.sendingForm = !1;
                        var n = !0,
                            o = this.$contactForm.querySelector('[name="full_name"]'),
                            r = this.$contactForm.querySelector('[name="email"]');
                        o.value.length < 3 && (n = !1, o.classList.add("error"));
                        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r.value).toLowerCase()) || (n = !1, r.classList.add("error")), n) { var i = this.$contactForm.querySelector('[type="submit"]').getAttribute("data-site-key"); if (i) { this.$contactForm.querySelector("#recaptchaResponse"); try { grecaptcha.ready((function() { grecaptcha.execute(i, { action: "send_contact_form" }).then((function(e) { recaptchaResponse.value = e, t.sendForm() })) })) } catch (e) { this.sendForm() } } else this.sendForm() } else window.setTimeout((function() { return t.removeFormErrors }), 5e3)
                    },
                    sendForm: function() {
                        var e = this;
                        if (!this.sendingForm) {
                            this.sendingForm = !0;
                            var t = new FormData(this.$contactForm),
                                n = this.$contactForm.getAttribute("data-ajax-action");
                            ie().post(n, t).then((function(t) { e.sendForm = !1, console.log(t.data), console.log("success", "true" == String(t.data.status)), "true" == String(t.data.status) ? (console.log("show success screen"), e.showSuccess()) : (console.log(t), console.log("show error screen"), e.showError()) })).catch((function(t) { e.sendForm = !1, console.log("error", t), e.showError() }))
                        }
                    },
                    showSuccess: function() {
                        var e = this;
                        o.ZP.to(this.$contactForm.querySelector(".form-data"), { autoAlpha: 0, onComplete: function() { e.$contactForm.querySelector(".form-data").classList.add("hidden"), o.ZP.fromTo(e.$contactForm.querySelector(".form-success"), { opacity: 0 }, { opacity: 1, display: "block" }) } })
                    },
                    showError: function() {
                        var e = this;
                        o.ZP.to(this.$contactForm.querySelector(".form-data"), { autoAlpha: 0, onComplete: function() { e.$contactForm.querySelector(".form-data").classList.add("hidden"), o.ZP.fromTo(e.$contactForm.querySelector(".form-error"), { opacity: 0 }, { opacity: 1, display: "block" }) } })
                    }
                }, { namespace: "blog", afterEnter: function() { B.showSocials() } }, { namespace: "page", afterEnter: function() { B.showSocials() } }],
                se = (n(9826), n(2479), n(1249), n(9755)),
                ce = n.n(se);

            function ue(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var o, r, i = [],
                        a = !0,
                        s = !1;
                    try { for (n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t); a = !0); } catch (e) { s = !0, r = e } finally { try { a || null == n.return || n.return() } finally { if (s) throw r } }
                    return i
                }(e, t) || de(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function le(e) { return function(e) { if (Array.isArray(e)) return he(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || de(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function de(e, t) { if (e) { if ("string" == typeof e) return he(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? he(e, t) : void 0 } }

            function he(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function fe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, o)
                }
                return n
            }

            function pe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function me(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var ye = function() {
                function e(t, n) {
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.$el = ce()(t), this.el = this.$el.get(0), this.options = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? fe(Object(n), !0).forEach((function(t) { me(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                        }
                        return e
                    }({ render: !0 }, n), this.$el.length && !ve(this.$el) ? (this.el.__component__ = this, this.initialize()) : this.options.render || this.initialize()
                }
                var t, n, o;
                return t = e, (n = [{ key: "initialize", value: function() {} }, { key: "mount", value: function() {} }, { key: "destroy", value: function() {} }, { key: "beforeEnter", value: function() {} }, { key: "enter", value: function() {} }, { key: "afterEnter", value: function() {} }, { key: "beforeLeave", value: function() {} }, { key: "leave", value: function() {} }, { key: "afterLeave", value: function() {} }, { key: "$", value: function(e) { return this.$el.find(e) } }, { key: "ref", value: function(e) { return this.$el.find('[data-ref="'.concat(e, '"]')) } }]) && pe(t.prototype, n), o && pe(t, o), e
            }();
            me(ye, "selector", void 0);
            var ve = function(e) { return ce()(e).get(0).__component__ },
                we = function(e) { return le(ce()(e).find("[data-component]")).map((function(e) { return e.__component__ })) },
                ge = function(e, t) { return t.prototype instanceof ye ? new t(e) : t(e) },
                be = function(e) {
                    var t = ve(e);
                    t && (t.destroy(), t.el.__component__ = null)
                };
            n(489), n(2419);

            function Se(e) { return Se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, Se(e) }

            function Pe(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function ke(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function xe(e, t) { return xe = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, xe(e, t) }

            function Ee(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, o = Ae(e);
                    if (t) {
                        var r = Ae(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Oe(this, n)
                }
            }

            function Oe(e, t) { if (t && ("object" === Se(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) }

            function Ae(e) { return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, Ae(e) }
            var Ze, Le, Ce, Te = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xe(e, t)
                }(s, e);
                var t, n, r, a = Ee(s);

                function s() { return Pe(this, s), a.apply(this, arguments) }
                return t = s, (n = [{
                    key: "initialize",
                    value: function() {
                        var e = this;
                        o.ZP.registerPlugin(i.Z, w.Z), this.switcher = this.$el[0], this.closeButton = this.switcher.parentNode.querySelector(".close-data-topics"), this.container = this.switcher.parentNode.parentNode, this.topicsList = this.switcher.parentNode.querySelector(".data-topics"), this.enabled = !0, this.year = this.container.querySelector("[data-year]"), this.period = this.container.querySelector("[data-period]"), this.documentsCount = this.container.querySelectorAll("[data-documentsCount]"), this.entitiesCount = this.container.querySelectorAll("[data-entitiesCount]"), this.name = this.container.querySelectorAll("[data-topicName]"), this.positive = this.container.querySelector("[data-positive]"), this.neutral = this.container.querySelector("[data-neutral]"), this.negative = this.container.querySelector("[data-negative]"), this.persons = this.container.querySelectorAll("[data-persons]"), this.locations = this.container.querySelectorAll("[data-locations]"), this.organizations = this.container.querySelectorAll("[data-organizations]"), this.numbers = this.container.querySelectorAll("[data-anim-number]"), this.switcher.addEventListener("click", (function(t) { o.ZP.to(e.topicsList, { display: "block", opacity: 1, duration: .5, ease: c.Au.easeOut }) })), this.initSwitcher(), setTimeout((function() { e.loadData("topic1"), e.loadTopicNames() }), 2500)
                    }
                }, {
                    key: "initSwitcher",
                    value: function() {
                        var e = this;
                        this.topics = this.topicsList.querySelectorAll("button"), this.topics.forEach((function(t) {
                            t.classList.add("active"), t.addEventListener("click", (function(t) {
                                var n = t.currentTarget.getAttribute("data-topic");
                                e.loadData(n), o.ZP.to(e.topicsList, { display: "none", opacity: 0, duration: .5, ease: c.Au.easeOut })
                            }))
                        })), this.closeButton.addEventListener("click", (function(t) { o.ZP.to(e.topicsList, { display: "none", opacity: 0, duration: .5, ease: c.Au.easeOut }) }))
                    }
                }, {
                    key: "loadTopicNames",
                    value: function() {
                        var e = document.querySelector("[data-topic='topic1']"),
                            t = document.querySelector("[data-topic='topic2']"),
                            n = document.querySelector("[data-topic='topic3']");
                        e.innerHTML = __site_config.topics.topic1.name, t.innerHTML = __site_config.topics.topic2.name, n.innerHTML = __site_config.topics.topic3.name
                    }
                }, {
                    key: "loadData",
                    value: function(e) {
                        var t = __site_config.topics[e];
                        this.enabled && (L.textLabels.refreshWords(t.topWords), L.textLabels.refreshCounter(t), this.refreshDomData(t))
                    }
                }, { key: "refreshDomData", value: function(e) { this.year.innerHTML = e.year, this.period.innerHTML = e.period, this.name.forEach((function(t) { o.ZP.to(t, { duration: .4, scrambleText: { text: e.name, chars: t.textContent } }) })), this.entitiesCount.forEach((function(t) { t.innerHTML = e.entitiesCount.toLocaleString() })), this.documentsCount.forEach((function(t) { t.innerHTML = e.documentsCount.toLocaleString() })), this.organizations.forEach((function(t) { t.innerHTML = e.organizationCount.toLocaleString() })), this.persons.forEach((function(t) { t.innerHTML = e.personCount.toLocaleString() })), this.locations.forEach((function(t) { t.innerHTML = e.locationCount.toLocaleString() })), this.positive.innerHTML = e.positiveSentimentCount.toLocaleString(), this.neutral.innerHTML = e.neutralSentimentCount.toLocaleString(), this.negative.innerHTML = e.negativeSentimentCount.toLocaleString(), this.animateNumbers() } }, {
                    key: "animateNumbers",
                    value: function() {
                        this.numbers.forEach((function(e) {
                            var t = new i.Z(e, { type: "chars", charsClass: "char" });
                            o.ZP.timeline().from(t.chars, { opacity: 0, duration: .3, stagger: { each: .05, from: "random", ease: "power2.inOut", repeat: 1 } })
                        }))
                    }
                }]) && ke(t.prototype, n), r && ke(t, r), s
            }(ye);

            function De(e) { return De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, De(e) }

            function Ie(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function $e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function je(e, t) { return je = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, je(e, t) }

            function qe(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, o = _e(e);
                    if (t) {
                        var r = _e(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Me(this, n)
                }
            }

            function Me(e, t) { if (t && ("object" === De(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) }

            function _e(e) { return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, _e(e) }
            Ce = ".switch-button", (Le = "selector") in (Ze = Te) ? Object.defineProperty(Ze, Le, { value: Ce, enumerable: !0, configurable: !0, writable: !0 }) : Ze[Le] = Ce;
            var ze = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && je(e, t)
                }(s, e);
                var t, n, r, a = qe(s);

                function s() { return Ie(this, s), a.apply(this, arguments) }
                return t = s, (n = [{
                    key: "initialize",
                    value: function() {
                        B.showSocials(), o.ZP.registerPlugin(i.Z);
                        var e = new i.Z(this.$el[0].querySelectorAll(".notfound-title"), { type: "lines, words" }),
                            t = o.ZP.timeline({ delay: 1, onComplete: function() { o.ZP.set(".updata-letters", { opacity: 0, display: "none" }) } });
                        t.add(N(0, 0, L.defaultCameraZ), 0), t.add(Y(0, 0, 0), 0), t.add(W(8.5, 2.4), 0), t.call(R, [13, 1], .1), t.to(this.$el[0].querySelectorAll(".section"), { opacity: 1, duration: .3 }, 0), t.fromTo(e.words, { yPercent: 100 }, { duration: 1.2, yPercent: 0, stagger: .05, ease: c.Yp.easeOut }, 1.2), t.fromTo(this.$el[0].querySelector(".notfound-cta"), { x: 20 }, { duration: 1.2, x: 0, opacity: 1, ease: c.Au.easeOut }, 1.9), t.add(N(0, 0, .6), .8)
                    }
                }, { key: "beforeEnter", value: function() { L.parts.sphereParallax() } }, { key: "beforeLeave", value: function() { L.parts.removeSphereParallax() } }]) && $e(t.prototype, n), r && $e(t, r), s
            }(ye);
            ! function(e, t, n) { t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n }(ze, "selector", '[data-page="notfound"]');
            n(5438), n(6699), n(2023);
            var He = n(6658);

            function Fe(e) { return Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, Fe(e) }

            function Be(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function Re(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function Ye(e, t) { return Ye = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, Ye(e, t) }

            function We(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, o = Ge(e);
                    if (t) {
                        var r = Ge(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Ne(this, n)
                }
            }

            function Ne(e, t) { if (t && ("object" === Fe(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) }

            function Ge(e) { return Ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, Ge(e) }
            var Ue = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ye(e, t)
                }(a, e);
                var t, n, r, i = We(a);

                function a() { return Be(this, a), i.apply(this, arguments) }
                return t = a, (n = [{
                    key: "initialize",
                    value: function() {
                        var e = this.$el[0];
                        if (!k()) {
                            var t, n, r, i, a, s, c, u, l, d, h = window.matchMedia("(prefers-reduced-motion: reduce)");
                            h && !h.matches && (t = e, n = { detail: 32, tension: 1, close: !0, range: { x: 24, y: 80 }, axis: ["x", "y"] }, r = (0, He.B$)(t, n.detail), i = r.map((function(e) { return { x: e.x, y: e.y } })), a = r.map((function(e) { return { x: e.x, y: e.y } })), s = { x: 0, y: 0 }, c = (0, He.vi)(t.closest("svg")), u = Math.hypot(i[0].x - i[1].x, i[0].y - i[1].y), l = n.axis.includes("x") ? u / 2 : 0, d = n.axis.includes("y") ? u / 2 : 0, o.ZP.ticker.add((function() { o.ZP.set(t, { attr: { d: (0, He.$y)(a, n.tension, n.close) } }) })), window.addEventListener("mousemove", (function(e) {
                                var t = c(e),
                                    r = t.x,
                                    u = t.y;
                                s.x = r, s.y = u, a.forEach((function(e, t) {
                                    var r = i[t],
                                        a = Math.abs(r.x - s.x),
                                        c = Math.abs(r.y - s.y);
                                    if (a <= n.range.x && c <= n.range.y) {
                                        var u = { x: r.x - s.x, y: r.y - s.y },
                                            h = { x: r.x + u.x, y: r.y + u.y },
                                            f = o.ZP.utils.clamp(r.x - l, r.x + l, h.x),
                                            p = o.ZP.utils.clamp(r.y - d, r.y + d, h.y);
                                        o.ZP.to(e, { x: f, y: p, ease: "sine", overwrite: !0, duration: .175, onComplete: function() { o.ZP.to(e, { x: r.x, y: r.y, ease: "elastic.out(1, 0.3)", duration: 1.25 }) } })
                                    }
                                }))
                            })))
                        }
                    }
                }]) && Re(t.prototype, n), r && Re(t, r), a
            }(ye);

            function Ke(e) { return Ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, Ke(e) }

            function Ve(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function Xe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function Qe(e, t) { return Qe = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, Qe(e, t) }

            function Je(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n, o = tt(e);
                    if (t) {
                        var r = tt(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return et(this, n)
                }
            }

            function et(e, t) { if (t && ("object" === Ke(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined"); return function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) }

            function tt(e) { return tt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, tt(e) }! function(e, t, n) { t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n }(Ue, "selector", ".liquidButton");
            var nt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Qe(e, t)
                }(i, e);
                var t, n, o, r = Je(i);

                function i() { return Ve(this, i), r.apply(this, arguments) }
                return t = i, (n = [{ key: "initialize", value: function() { this.$el[0].addEventListener("click", (function() { D.emit("scroll:down") })) } }]) && Xe(t.prototype, n), o && Xe(t, o), i
            }(ye);
            ! function(e, t, n) { t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n }(nt, "selector", "[data-section-scroll]");
            var ot = { SwitchData: Te, Notfound: ze, LiquidButton: Ue, ScrollDownButton: nt };

            function rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, o)
                }
                return n
            }

            function it(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
            var at = function e() {
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e);
                var t = !!document.querySelector("#wpadminbar"),
                    n = !!document.querySelector("[data-inner-page]"),
                    o = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? rt(Object(n), !0).forEach((function(t) { it(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                        }
                        return e
                    }({}, ot);

                function r(e) {
                    e || window.location.href;
                    Array.from(document.querySelectorAll("[data-barba-prevent]")).forEach((function(e) { return e.removeAttribute("data-barba-prevent") }))
                }
                document.addEventListener("click", (function(e) { e.target.closest("[data-barba-prevent]") && e.preventDefault() })), r(), s().hooks.beforeEnter((function(e) {
                    var t = e.next;
                    ! function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                        if (!e || !Object.keys(e).length) return console.warn("Empty components passed to ".concat(t)), !1;
                        var n = ce()(t),
                            o = n.get(0);
                        Array.isArray(o.__components__) || (o.__components__ = []);
                        for (var r = function() {
                                var e = ue(a[i], 2),
                                    t = e[0],
                                    r = e[1];
                                if (!r.selector) return "continue";
                                n.find(r.selector).each((function(e, n) {
                                    if (!ve(n) && "function" == typeof r) {
                                        var i = ce()(n).attr("data-component", t),
                                            a = ge(i, r);
                                        o.__components__.push(a), a.mount()
                                    }
                                }))
                            }, i = 0, a = Object.entries(e); i < a.length; i++) r()
                    }(o, t.container), we(t.container).forEach((function(e) { null == e || e.beforeEnter() }))
                })), s().hooks.once((function(e) {
                    var t = e.next;
                    we(t.container).forEach((function(e) { null == e || e.enter() }))
                })), s().hooks.enter((function(e) {
                    var t = e.next;
                    we(t.container).forEach((function(e) { null == e || e.enter() }))
                })), s().hooks.afterEnter((function(e) {
                    var t = e.next;
                    we(t.container).forEach((function(e) { null == e || e.afterEnter() }))
                })), s().hooks.beforeLeave((function(e) {
                    var t = e.current;
                    we(t.container).forEach((function(e) { null == e || e.beforeLeave() }))
                })), s().hooks.leave((function(e) {
                    var t = e.current;
                    we(t.container).forEach((function(e) { null == e || e.leave() }))
                })), s().hooks.afterLeave((function(e) {
                    var t = e.current;
                    we(t.container).forEach((function(e) { null == e || e.afterLeave() })),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement,
                                t = ce()(e),
                                n = t.get(0);
                            t.find("[data-component]").each((function(e, t) { be(t) })), Array.isArray(n.__components__) && (n.__components__.length = 0)
                        }(t.container)
                })), s().hooks.enter((function(e) { e.current.container.remove() })), s().hooks.beforeEnter((function(e) { r(e.next.href) })), s().init({ debug: !1, views: ae, transitions: T, prevent: function(e) { var o = e.el; return !(!t && !n) || o.classList && o.classList.contains("barba-prevent") } })
            };

            function st(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var ct = function() {
                function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.initAnimation() }
                var t, n, r;
                return t = e, n = [{
                    key: "initAnimation",
                    value: function() {
                        var e = document.querySelectorAll(".header .item"),
                            t = document.querySelectorAll(".footer .item"),
                            n = document.querySelector(".updata-letters");
                        this.timeline = o.ZP.timeline({ delay: n ? 1 : 0, onComplete: function() { n && o.ZP.set(".updata-letters", { opacity: 0, display: "none" }) } });
                        var r = this.timeline;
                        r.to(".header .bg", { y: 0, duration: 1 }, 0), r.to(".footer .bg", { y: 0, duration: 1 }, 0), n ? (r.to(".updata-letters .top svg", { y: 0, duration: 1, ease: c.Au.easeOut }, 0), r.to(".updata-letters .bottom svg", { y: 0, duration: 1, ease: c.Au.easeOut }, .3), r.to(".updata-letters .top svg", { yPercent: -130, duration: 1, ease: c.Au.easeOut }, 1.2), r.to(".updata-letters .bottom svg", { yPercent: -130, duration: 1, ease: c.Au.easeOut }, 1.3)) : o.ZP.to("[data-inner-page-wrapper]", { opacity: 1 }, 1), r.to(".header .line", { rotateY: 0, duration: 1 }, n ? 2.1 : 0), r.to(".footer .line", { rotateY: 0, duration: 1 }, n ? 2.1 : 0), r.fromTo(e, { y: 50, autoAlpha: 0 }, { autoAlpha: 1, y: 0, ease: c.Yp.easeOut, stagger: .2, duration: .8 }, n ? 3 : 1), r.fromTo(t, { y: 50, autoAlpha: 0 }, { autoAlpha: 1, y: 0, ease: c.Yp.easeOut, stagger: -.2, duration: .8 }, n ? 3 : 1)
                    }
                }], n && st(t.prototype, n), r && st(t, r), e
            }();

            function ut(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var lt = function() {
                    function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.init() }
                    var t, n, r;
                    return t = e, (n = [{ key: "init", value: function() { this.createAnimation(), this.bind() } }, {
                        key: "createAnimation",
                        value: function() {
                            var e = this;
                            this.nav = document.querySelector(".navigation"), this.timeline = new o.ZP.timeline({ paused: !0, onReverseComplete: function() { o.ZP.set(e.nav, { display: "none", clearProps: "all" }) } }), this.timeline.set(this.nav, { display: "block", autoAlpha: 0 }).to(this.nav, { autoAlpha: 1, duration: .4 }, 0).fromTo(".navigation .back-to-home", { y: 10 }, { y: 0, clearProps: "transform", duration: .3 }, "-=0.8").fromTo(".main-nav li a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: .1, duration: 1, ease: c.Yp.easeOut }, "-=0.8").fromTo(".navigation .links", { y: 10, opacity: 0 }, { y: 0, opacity: 1, clearProps: "transform", duration: .3 }, "-=0.9")
                        }
                    }, {
                        key: "bind",
                        value: function() {
                            var e = this;
                            document.querySelector(".open-menu").addEventListener("click", (function() { return e.open() })), document.querySelector(".close-menu").addEventListener("click", (function() { return e.close() })), document.querySelector(".back-to-home").addEventListener("click", (function() { return e.close() })), document.querySelector(".header-logo").addEventListener("click", (function() { return e.close() })), document.querySelectorAll(".main-nav a").forEach((function(t) { t.addEventListener("click", (function() { return e.close() })) })), document.querySelectorAll(".inner-link").forEach((function(t) { t.addEventListener("click", (function() { return e.close() })) }))
                        }
                    }, { key: "open", value: function() { o.ZP.to(".open-menu", { autoAlpha: 0, y: -5, duration: .1 }), o.ZP.fromTo(".close-menu", { autoAlpha: 0, y: 5 }, { autoAlpha: 1, y: 0, duration: .1, pointerEvents: "all" }), this.timeline.play() } }, { key: "close", value: function() { o.ZP.to(".open-menu", { autoAlpha: 1, y: 0, duration: .1 }), o.ZP.to(".close-menu", { autoAlpha: 0, y: 5 }, { pointerEvents: "none" }), this.timeline.timeScale(3).reverse() } }]) && ut(t.prototype, n), r && ut(t, r), e
                }(),
                dt = n(1766),
                ht = n(1955);

            function ft(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var pt = function() {
                function e() {
                    if (function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.canvasContainer = document.getElementById("canvas"), !this.canvasContainer) return !1;
                    k() || (this.initBackgroundSound(), this.initDefaultHoverSound(), this.initMenuHoverSound(), this.initMenuClickTransition(), this.paused = !1, this.volumeButton = document.querySelector("[data-volume]"), this.manifestoButton = document.querySelector("[data-play-manifesto]"), this.volumeControl(), ht.Z.get("muted") && (this.paused = !0, this.backgroundSound.pause(), this.volumeButton.classList.add("muted")))
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "volumeControl",
                    value: function() {
                        var e = this;
                        this.volumeButton.addEventListener("click", (function(t) { e.paused ? (e.paused = !1, e.backgroundSound.play(), ht.Z.remove("muted")) : (e.paused = !0, e.backgroundSound.pause(), ht.Z.set("muted")), t.currentTarget.classList.toggle("muted") })), this.manifestoButton.addEventListener("click", (function(t) { e.paused = !0, e.backgroundSound.pause() }))
                    }
                }, {
                    key: "initBackgroundSound",
                    value: function() {
                        this.backgroundSound = new dt.Howl({ src: ["/wp-content/themes/updata-website/assets/audio/updata-bg-long.mp3"], autoplay: !0, loop: !0, volume: .2 });
                        var e = this.backgroundSound;
                        e.once("load", (function() { e.play() }))
                    }
                }, { key: "enter", value: function(e, t) { e.addEventListener("mouseenter", (function() { t.play() })) } }, { key: "click", value: function(e, t) { e.addEventListener("click", (function() { t.play() })) } }, {
                    key: "initDefaultHoverSound",
                    value: function() {
                        var e = this,
                            t = new dt.Howl({ src: ["/wp-content/themes/updata-website/assets/audio/digital-click.mp3"], volume: .2 });
                        document.querySelectorAll("[data-button]").forEach((function(n) { e.enter(n, t) }))
                    }
                }, {
                    key: "initMenuHoverSound",
                    value: function() {
                        var e = this,
                            t = new dt.Howl({ src: ["/wp-content/themes/updata-website/assets/audio/menu-hover-2.mp3"], volume: .2 });
                        document.querySelectorAll(".main-nav a").forEach((function(n) { e.enter(n, t) })), document.querySelectorAll(".scroll-down, [data-section-scroll]").forEach((function(n) { e.enter(n, t) }))
                    }
                }, {
                    key: "initMenuClickTransition",
                    value: function() {
                        var e = this,
                            t = new dt.Howl({ src: ["/wp-content/themes/updata-website/assets/audio/menu-transition.mp3"], volume: .2 });
                        document.querySelectorAll(".main-nav a").forEach((function(n) { e.click(n, t) })), document.querySelectorAll("[data-button]").forEach((function(n) { e.click(n, t) }))
                    }
                }]) && ft(t.prototype, n), o && ft(t, o), e
            }();

            function mt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var yt = function() {
                function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.container = document.querySelector(".manifesto"), this.video = document.querySelector(".manifesto-video"), this.show(), this.hide() }
                var t, n, r;
                return t = e, (n = [{
                    key: "show",
                    value: function() {
                        var e = this,
                            t = o.ZP.timeline({ paused: !0, onComplete: function() { L.isPaused = !0, e.video.innerHTML = __manifesto_video, setTimeout((function() { e.container.querySelector("iframe").style.opacity = 1 }), 100) } });
                        t.to("#page, .background-container", { opacity: 0, duration: 1 }, 0), t.set(this.container, { opacity: 1 }, 0), document.querySelector("[data-play-manifesto]").addEventListener("click", (function(n) { S(e.container, "played"), t.progress(0).play() }))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var e = this,
                            t = o.ZP.timeline({ paused: !0, onStart: function() { e.container.querySelector("iframe").style.opacity = 0 }, onComplete: function() { e.video.innerHTML = "" } });
                        t.to("#page, .background-container", { opacity: 1, duration: 1, clearProps: "all" }, 0), t.to(this.container, { opacity: 0, clearProps: "all" }, 0), document.querySelector("[data-close-manifesto]").addEventListener("click", (function(n) { L.isPaused = !1, P(e.container, "played"), t.progress(0).play() }))
                    }
                }]) && mt(t.prototype, n), r && mt(t, r), e
            }();
            o.ZP.registerPlugin(i.Z, r.Z), window.onload = function() { new at, new ct, new lt, new pt, new yt }
        },
        649: function() {
            ! function(e) {
                var t = e.noise = {};

                function n(e, t, n) { this.x = e, this.y = t, this.z = n }
                n.prototype.dot2 = function(e, t) { return this.x * e + this.y * t }, n.prototype.dot3 = function(e, t, n) { return this.x * e + this.y * t + this.z * n };
                var o = [new n(1, 1, 0), new n(-1, 1, 0), new n(1, -1, 0), new n(-1, -1, 0), new n(1, 0, 1), new n(-1, 0, 1), new n(1, 0, -1), new n(-1, 0, -1), new n(0, 1, 1), new n(0, -1, 1), new n(0, 1, -1), new n(0, -1, -1)],
                    r = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
                    i = new Array(512),
                    a = new Array(512);
                t.seed = function(e) {
                    e > 0 && e < 1 && (e *= 65536), (e = Math.floor(e)) < 256 && (e |= e << 8);
                    for (var t = 0; t < 256; t++) {
                        var n;
                        n = 1 & t ? r[t] ^ 255 & e : r[t] ^ e >> 8 & 255, i[t] = i[t + 256] = n, a[t] = a[t + 256] = o[n % 12]
                    }
                }, t.seed(0);
                var s = .5 * (Math.sqrt(3) - 1),
                    c = (3 - Math.sqrt(3)) / 6,
                    u = 1 / 6;

                function l(e) { return e * e * e * (e * (6 * e - 15) + 10) }

                function d(e, t, n) { return (1 - n) * e + n * t }
                t.simplex2 = function(e, t) {
                    var n, o, r = (e + t) * s,
                        u = Math.floor(e + r),
                        l = Math.floor(t + r),
                        d = (u + l) * c,
                        h = e - u + d,
                        f = t - l + d;
                    h > f ? (n = 1, o = 0) : (n = 0, o = 1);
                    var p = h - n + c,
                        m = f - o + c,
                        y = h - 1 + 2 * c,
                        v = f - 1 + 2 * c,
                        w = a[(u &= 255) + i[l &= 255]],
                        g = a[u + n + i[l + o]],
                        b = a[u + 1 + i[l + 1]],
                        S = .5 - h * h - f * f,
                        P = .5 - p * p - m * m,
                        k = .5 - y * y - v * v;
                    return 70 * ((S < 0 ? 0 : (S *= S) * S * w.dot2(h, f)) + (P < 0 ? 0 : (P *= P) * P * g.dot2(p, m)) + (k < 0 ? 0 : (k *= k) * k * b.dot2(y, v)))
                }, t.simplex3 = function(e, t, n) {
                    var o, r, s, c, l, d, h = .3333333333333333 * (e + t + n),
                        f = Math.floor(e + h),
                        p = Math.floor(t + h),
                        m = Math.floor(n + h),
                        y = (f + p + m) * u,
                        v = e - f + y,
                        w = t - p + y,
                        g = n - m + y;
                    v >= w ? w >= g ? (o = 1, r = 0, s = 0, c = 1, l = 1, d = 0) : v >= g ? (o = 1, r = 0, s = 0, c = 1, l = 0, d = 1) : (o = 0, r = 0, s = 1, c = 1, l = 0, d = 1) : w < g ? (o = 0, r = 0, s = 1, c = 0, l = 1, d = 1) : v < g ? (o = 0, r = 1, s = 0, c = 0, l = 1, d = 1) : (o = 0, r = 1, s = 0, c = 1, l = 1, d = 0);
                    var b = v - o + u,
                        S = w - r + u,
                        P = g - s + u,
                        k = v - c + 2 * u,
                        x = w - l + 2 * u,
                        E = g - d + 2 * u,
                        O = v - 1 + .5,
                        A = w - 1 + .5,
                        Z = g - 1 + .5,
                        L = a[(f &= 255) + i[(p &= 255) + i[m &= 255]]],
                        C = a[f + o + i[p + r + i[m + s]]],
                        T = a[f + c + i[p + l + i[m + d]]],
                        D = a[f + 1 + i[p + 1 + i[m + 1]]],
                        I = .6 - v * v - w * w - g * g,
                        $ = .6 - b * b - S * S - P * P,
                        j = .6 - k * k - x * x - E * E,
                        q = .6 - O * O - A * A - Z * Z;
                    return 32 * ((I < 0 ? 0 : (I *= I) * I * L.dot3(v, w, g)) + ($ < 0 ? 0 : ($ *= $) * $ * C.dot3(b, S, P)) + (j < 0 ? 0 : (j *= j) * j * T.dot3(k, x, E)) + (q < 0 ? 0 : (q *= q) * q * D.dot3(O, A, Z)))
                }, t.perlin2 = function(e, t) {
                    var n = Math.floor(e),
                        o = Math.floor(t);
                    e -= n, t -= o;
                    var r = a[(n &= 255) + i[o &= 255]].dot2(e, t),
                        s = a[n + i[o + 1]].dot2(e, t - 1),
                        c = a[n + 1 + i[o]].dot2(e - 1, t),
                        u = a[n + 1 + i[o + 1]].dot2(e - 1, t - 1),
                        h = l(e);
                    return d(d(r, c, h), d(s, u, h), l(t))
                }, t.perlin3 = function(e, t, n) {
                    var o = Math.floor(e),
                        r = Math.floor(t),
                        s = Math.floor(n);
                    e -= o, t -= r, n -= s;
                    var c = a[(o &= 255) + i[(r &= 255) + i[s &= 255]]].dot3(e, t, n),
                        u = a[o + i[r + i[s + 1]]].dot3(e, t, n - 1),
                        h = a[o + i[r + 1 + i[s]]].dot3(e, t - 1, n),
                        f = a[o + i[r + 1 + i[s + 1]]].dot3(e, t - 1, n - 1),
                        p = a[o + 1 + i[r + i[s]]].dot3(e - 1, t, n),
                        m = a[o + 1 + i[r + i[s + 1]]].dot3(e - 1, t, n - 1),
                        y = a[o + 1 + i[r + 1 + i[s]]].dot3(e - 1, t - 1, n),
                        v = a[o + 1 + i[r + 1 + i[s + 1]]].dot3(e - 1, t - 1, n - 1),
                        w = l(e),
                        g = l(t),
                        b = l(n);
                    return d(d(d(c, p, w), d(u, m, w), b), d(d(h, y, w), d(f, v, w), b), g)
                }
            }(this)
        },
        9021: function() {},
        7430: function() {}
    },
    function(e) {
        var t = function(t) { return e(e.s = t) };
        e.O(0, [261, 900, 723], (function() { return t(495), t(9021), t(7430) }));
        e.O()
    }
]);