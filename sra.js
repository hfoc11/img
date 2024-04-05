"use strict";
var alertaCompatibilidad = '<i aria-hidden="true" style="font-style:normal;color:orangered; display:block;font-size:40px;margin: 60px auto 30px;text-align:center;">⚠&#xFE0E;</i><h1 style="text-align:center;margin:0 auto;">Estás usando '
  , isIE = !!document.documentMode;
isIE && (alertaCompatibilidad += 'Internet Explorer. </h1><h2 style="text-align:center;margin:0 auto;">Por favor, usa otro navegador. Cualquier navegador moderno sirve.</h2>',
CUERPO.innerHTML = alertaCompatibilidad),
document.addEventListener("DOMContentLoaded", function(e) {
    const t = document.querySelector("body#gi-pag-curso");
    function n(e, t) {
        for (const n in t)
            e.setAttribute(n, t[n])
    }
    t.classList.remove("no-javascript"),
    t.classList.add("js-activo"),
    t.insertAdjacentHTML("afterbegin", '\n  <a class="gi-ayuda-boton" href="#" title="Ayuda" aria-label="Página de ayuda"><span>?</span></a>\n  <nav class="gi-nav-ppal" aria-label="main menu">\n    <ul class="gi-nav-ppal__controles" aria-labelledby="mainmenulabel">\n      <h2 id="mainmenulabel" hidden="">Menú principal</h2>\n      <li>\n        <a class="gi-nav-ppal__controles-prev" id="anterior" type="prev" href="javascript:void(0)" title="Anterior"><i class="gi-nav-ppal__gi-icono-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M2,55.4l41.1,41.1c2.6,2.6,6.9,2.6,9.5,0c2.6-2.6,2.6-6.9,0-9.5L22.2,56.7h71c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7h-71L52.6,13c2.6-2.6,2.6-6.9,0-9.5c-2.6-2.6-6.9-2.6-9.5,0L2,44.6c-1.5,1.5-2.1,3.5-1.9,5.4C-0.1,51.9,0.5,53.9,2,55.4z"/></svg></i><span hidden="">Anterior</span></a>\n      </li>\n      <li class="gi-nav-ppal__separador" aria-hidden="true"></li>\n      <li>\n        <a class="gi-nav-ppal__controles-next" id="siguiente" type="next" href="javascript:void(0)" title="Siguiente"><i class="gi-nav-ppal__gi-icono-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M98,44.6L56.9,3.5c-2.6-2.6-6.9-2.6-9.5,0c-2.6,2.6-2.6,6.9,0,9.5l30.3,30.3h-71C3,43.3,0,46.3,0,50c0,3.7,3,6.7,6.7,6.7h71L47.4,87c-2.6,2.6-2.6,6.9,0,9.5c2.6,2.6,6.9,2.6,9.5,0L98,55.4c1.5-1.5,2.1-3.5,1.9-5.4C100.1,48.1,99.5,46.1,98,44.6z"/></svg></i><span hidden="">Siguiente</span></a>\n      </li>\n    </ul>\n  </nav>\n'),
    function() {
        const e = t.querySelector("#siguiente")
          , n = t.querySelector("#anterior");
        function a(e, t) {
            let n = new XMLHttpRequest;
            n.addEventListener("load", function(e) {
                200 === n.status && t(),
                n.status
            }),
            n.open("HEAD", e),
            n.send()
        }
        function i(e) {
            return location.pathname.replace(/(\/\N-)(\d+)/, function(t, n, a) {
                return n + (parseInt(a) + e)
            })
        }
        function o(e) {
            location.pathname = e
        }
        const s = i(1)
          , r = i(-1);
        a(s, function() {
            e.addEventListener("click", o.bind(null, s))
        }),
        "N-1.html" === window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) ? n.setAttribute("disabled", "") : a(r, function() {
            n.addEventListener("click", o.bind(null, r))
        })
    }();
   let a = new Request("./toc.json"); // retoma el archivo json para el menú
    var i; // esta variable se usará junto con e
    fetch(a).then(e=>e.json()).then(e=>i = e).then(function() { // separar por campos los datos
        const e = i.DATOS[0].titulo_curso
          , n = i.DATOS[0].titulo_ud
          , a = window.location.href.split("").pop().split("/CONTENIDOS")[0]
          , o = window.location.href.split("N-")[0];
        t.insertAdjacentHTML("afterbegin", `\n      <header class="gi-cabecera-ppal">\n        <h1 class="gi-titulo-ppal">${n}</h1>\n      </header>\n    `);
        const s = (new Date).getFullYear();
        t.insertAdjacentHTML("beforeend", `\n
        <footer class="gi-pie-ppal">\n
        <p class="gi-folio-explicativo"><small><i class="gi-pie__logo"></i>\n
        <span>&copy;&nbsp;Universidad ISEP</span><br>\n
        <span>${e} ${s}</span><br/>\n
        <span> Ninguna parte de esta publicación, incluyendo tanto los contenidos como su diseño y maquetación,</span><br>\n
        <span>no se puede copiar, reproducir, almacenar o transmitir de ninguna forma ni de ningún medio (ni electrónico ni de ningún otro tipo),</span><br>\n
        <span>sin la autorización previa y por escrito de los titulares del copyright.</span>\n
</small></p>\n
        </footer>\n `),
        document.getElementById("gi-nav-sec__arbol-contenidos").innerHTML = `\n      ${i.DATOS[1].TOC.map(function(e) {
            return `\n        <li class="gi-menu-item" role="none">\n          <a href="${o}${e.href}" title="${e.tituloNodo}" class="gi-nav-sec__nav-item" role="menuitem">${e.tituloNodo}</a>\n        </li>\n        ${e.submenu ? function(t) {
                return `\n          <ul class="gi-submenu-list">\n          ${t.map((t,n)=>`\n            <li class="gi-menu-item" role="none">\n            <a href="${o}${e.href}#gi-seccion-${n}" title="${t}" class="gi-nav-sec__nav-item" role="menuitem">${t}</a>\n            </li>`).join("")}\n          </ul>\n        `
            }(e.submenu) : ""}\n      `
        }).join("")}\n    `
    }).then(function() {
        !sessionStorage.getItem("menu-lateral-expandido", "1") && sessionStorage.setItem("menu-lateral-expandido", "");
        const e = {
            body: document.getElementById("gi-pag-curso"),
            navToggle: document.getElementById("gi-nav-sec__boton"),
            nav: document.getElementById("gi-nav-sec"),
            preferencia: sessionStorage.getItem("menu-lateral-expandido"),
            acciona: function(t) {
                t.preventDefault(),
                e.nav.classList.toggle("js-expandido"),
                e.body.classList.toggle("js-menu-lateral"),
                e.navToggle.classList.toggle("js-expandido"),
                sessionStorage.getItem("menu-lateral-expandido", "1") ? sessionStorage.setItem("menu-lateral-expandido", "") : sessionStorage.setItem("menu-lateral-expandido", "1")
            }
        };
        function n(t) {
            t.matches && document.addEventListener("click", function(t) {
                t.target.closest("#gi-nav-sec") || t.target.closest("#gi-nav-sec__boton") || (e.nav.classList.remove("js-expandido"),
                e.body.classList.remove("js-menu-lateral"),
                e.navToggle.classList.remove("js-expandido"))
            })
        }
        sessionStorage.getItem("menu-lateral-expandido", "1") && (e.nav.classList.add("js-expandido"),
        e.body.classList.add("js-menu-lateral"),
        e.navToggle.classList.add("js-expandido")),
        e.navToggle.addEventListener("click", function(t) {
            e.acciona(t)
        });
        const a = window.matchMedia("(max-width: 48rem)");
        n(a),
        a.addListener(n);
        const i = document.querySelector('a[href*="' + location + '"]');
        i.classList.add("js-active"),
        i.scrollIntoView({
            block: "center"
        });
        const o = document.querySelectorAll(".gi-btn-cat-1");
        for (let e = 0; e < o.length; e++)
            o[e].addEventListener("click", function() {
                this.classList.toggle("js-active");
                var e = this.nextElementSibling;
                e.hasAttribute("open", !0) ? e.removeAttribute("open") : e.setAttribute("open", !0);
                var t = this.getAttribute("aria-expanded");
                t = "true" == t ? "false" : "true",
                this.setAttribute("aria-expanded", t)
            });
        const s = document.getElementById("gi-nav-sec__filtro");
        s.addEventListener("keyup", function() {
            const e = s.value.toUpperCase()
              , t = document.getElementById("gi-nav-sec__arbol-contenidos").getElementsByTagName("li");
            for (let n = 0; n < t.length; n++) {
                const a = t[n].textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "") || t[n].innerText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                for (a.toUpperCase().indexOf(e) > -1 ? t[n].style.display = "" : t[n].style.display = "none"; t[n].parentElement.hasAttribute("hidden"); )
                    t[n].parentElement.removeAttribute("hidden")
            }
        }),
        function() {
            const e = document.getElementById("adaptador-cromatico");
            var n;
            n = null !== localStorage.getItem("botonTema") && "dark" === localStorage.getItem("botonTema"),
            e.checked = n,
            n ? t.classList.add("js-alto-contraste") : t.classList.remove("js-alto-contraste"),
            console.log(n),
            e.addEventListener("change", n=>void (e.checked ? (t.classList.add("js-alto-contraste"),
            localStorage.setItem("botonTema", "dark")) : (t.classList.remove("js-alto-contraste"),
            localStorage.removeItem("botonTema")))),
            console.log(e)
        }();
        const r = document.getElementsByClassName("gi-submenu-list");
        if (r)
            for (let e = 0; e < r.length; e++) {
                var l = r[e].getElementsByClassName("gi-nav-sec__nav-item");
                for (let e = 0; e < l.length; e++) {
                    var c = l[e]
                      , d = c.getAttribute("href")
                      , u = c.parent.parent.previousElementSibling.getElementsByClassName("gi-nav-sec__nav-item");
                    for (let e = 0; e < u.length; e++) {
                        d += u[e].getAttribute("href"),
                        c.removeAttribute("href"),
                        c.setAttribute("href", d)
                    }
                }
            }
    }).catch(function(e) {
        console.log("Fetch Error", e)
    }),
    window.addEventListener("DOMContentLoaded", ()=>{
        const e = new IntersectionObserver(e=>{
            e.forEach(e=>{
                const t = e.target.getAttribute("id");
                e.intersectionRatio > 0 ? document.querySelector(`.gi-sumario li a[href="#${t}"]`).parentElement.classList.add("js-active") : document.querySelector(`.gi-sumario li a[href="#${t}"]`).parentElement.classList.remove("js-active")
            }
            )
        }
        );
        document.querySelectorAll("section.gi-seccion[id]").forEach(t=>{
            e.observe(t)
        }
        )
    }
    ),
    window.onscroll = (()=>document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? document.querySelector("body").classList.add("js-scroll--abajo") : document.querySelector("body").classList.remove("js-scroll--abajo")),
    function e() {
        let n, a, i, o, s;
        for (n = t.getElementsByTagName("*"),
        a = 0; a < n.length; a++)
            if (o = (i = n[a]).getAttribute("gi-bloque"))
                return (s = new XMLHttpRequest).onreadystatechange = function() {
                    4 == this.readyState && (200 == this.status && (i.innerHTML = this.responseText),
                    404 == this.status && (i.innerHTML = " "),
                    i.removeAttribute("gi-bloque"),
                    e())
                }
                ,
                s.open("GET", o, !0),
                void s.send()
    }();
    const o = t.querySelectorAll('[class^="gi-mosaico"][class*="--descubrible"]')
      , s = t.querySelectorAll('[class^="gi-clasificacion"][class*="--descubrible"]')
      , r = t.querySelectorAll('section >[class^="gi-acordeon"]')
      , l = t.querySelectorAll('[class^="gi-clasificacion-pestanas"]')
      , c = t.querySelectorAll('[class^="gi-rotables"]')
      , d = t.querySelectorAll('[class^="gi-linea-tiempo--descubrible"]');
    c.forEach(function(e) {
        e.insertAdjacentHTML("beforebegin", '\n    <p class="gi-instruccion">Pulsa sobre cada opción para ver más información:</p>\n  ')
    }),
    s.forEach(function(e) {
        e.insertAdjacentHTML("beforebegin", '\n    <p class="gi-instruccion">Pulsa sobre cada opción para ver más información:</p>\n  ')
    }),
    r.forEach(function(e) {
        e.insertAdjacentHTML("beforebegin", '\n    <p class="gi-instruccion">Pulsa sobre cada opción para ver más información:</p>\n  ')
    }),
    l.forEach(function(e) {
        e.insertAdjacentHTML("beforebegin", '\n    <p class="gi-instruccion">Pulsa sobre cada opción para ver más información:</p>\n  ')
    }),
    d.forEach(function(e) {
        e.insertAdjacentHTML("beforebegin", '\n    <p class="gi-instruccion">Pulsa sobre cada opción para ver más información:</p>\n  ')
    }),
    o.forEach(function(e) {
        e.insertAdjacentHTML("beforebegin", '\n    <p class="gi-instruccion">Pulsa sobre cada opción para ver más información:</p>\n  ')
    });
    const u = document.querySelectorAll(".boton-descargar");
    if (u)
        for (let e = 0; e < u.length; e++)
            u[e].onclick = function() {
                g(document.querySelector(".gi-descargable"))
            }
            ;
    function g(e) {
        const t = e.cloneNode(!0)
          , n = document.getElementById("js-seccion-imprimible");
        if (document.querySelector("body").classList.add("js-imprimible"),
        !n) {
            const e = document.createElement("div");
            e.id = "js-seccion-imprimible",
            document.body.appendChild(e)
        }
        n.innerHTML = "",
        n.appendChild(t),
        window.print()
    }
    const p = document.querySelectorAll("figure");
    for (let e = 0; e < p.length; e++)
        p[e].addEventListener("wheel", function(t) {
            t.deltaY > 0 ? p[e].scrollLeft += 100 : p[e].scrollLeft -= 100
        }, {
            passive: !0
        });
    document.addEventListener("DOMContentLoaded", function() {
        const e = [].slice.call(document.querySelectorAll("figure > img"));
        if (lazyImage.classList.add("lazy"),
        "IntersectionObserver"in window) {
            let t = new IntersectionObserver(function(e, n) {
                e.forEach(function(e) {
                    if (e.isIntersecting) {
                        let n = e.target;
                        n.src = n.dataset.src,
                        n.srcset = n.dataset.srcset,
                        n.classList.remove("lazy"),
                        t.unobserve(n)
                    }
                })
            }
            );
            e.forEach(function(e) {
                t.observe(e)
            })
        }
    }),
    function() {
        const e = document.querySelectorAll(".gi-tablist");
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            let a, i, o = !1;
            if (n.setAttribute("role", "tablist"),
            e) {
                n.addEventListener("mousedown", e=>{
                    o = !0,
                    n.classList.add("js-active"),
                    a = e.pageX - n.offsetLeft,
                    i = n.scrollLeft
                }
                ),
                n.addEventListener("mouseleave", ()=>{
                    o = !1,
                    n.classList.remove("js-active")
                }
                ),
                n.addEventListener("mouseup", ()=>{
                    o = !1,
                    n.classList.remove("js-active")
                }
                ),
                n.addEventListener("mousemove", e=>{
                    if (!o)
                        return;
                    e.preventDefault();
                    const t = 3 * (e.pageX - n.offsetLeft - a);
                    slider.scrollLeft = i - t,
                    console.log(t)
                }
                );
                const e = n.getElementsByTagName("label");
                for (t = 0; t < e.length; t++)
                    e[t].setAttribute("role", "tab");
                const s = document.querySelectorAll(".gi-pestana");
                for (let e = 0; e < s.length; e++)
                    s[e].setAttribute("tabindex", "0"),
                    s[e].setAttribute("role", "tabpanel")
            }
        }
    }(),
    function() {
        const e = document.querySelectorAll(".gi-descripcion-emergente");
        if (e)
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                n.addEventListener("click", function() {
                    const e = n.contains(event.target);
                    n.classList.toggle("js-activo"),
                    e || n.classList.remove("js-activo")
                })
            }
        const t = document.querySelectorAll(".gi-descripcion-S__texto");
        if (t)
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                n.addEventListener("click", function() {
                    n.classList.toggle("js-activo")
                }),
                n.onclick = function() {
                    document.execCommand("copy")
                }
                ,
                n.addEventListener("copy", function(e) {
                    e.preventDefault(),
                    e.clipboardData && (e.clipboardData.setData("text/plain", n.textContent),
                    console.log(e.clipboardData.getData("text")))
                })
            }
    }();
    const m = document.querySelectorAll(".gi-subseccion");
    m.forEach(e=>{
        e.addEventListener("click", ()=>{
            m.forEach(t=>{
                t !== e && t.removeAttribute("open")
            }
            )
        }
        )
    }
    ),
    function() {
        const e = document.createElement("details");
        e.innerHTML = "<summary>a</summary>b",
        e.setAttribute("style", "position: absolute; left: -9999px");
        const t = "open"in e && function() {
            (document.body || document.documentElement).appendChild(e);
            const t = e.offsetHeight;
            e.open = !0;
            const n = e.offsetHeight;
            return e.parentNode.removeChild(e),
            t != n
        }()
          , n = "ontoggle"in e;
        const a = "\ndetails, summary {\n display: block!important;\n}\ndetails:not([open]) > *:not(summary) {\n display: none;\n}\n.gi-recuadro-reflexion__gi-antetitulo{margin-right:1.3rem;}\n"
          , i = []
          , o = i.forEach
          , s = i.slice;
        function r(e) {
            (function(e, t) {
                return (e.tagName == t ? [e] : []).concat("function" == typeof e.getElementsByTagName ? s.call(e.getElementsByTagName(t)) : [])
            }
            )(e, "SUMMARY").forEach(function(e) {
                var t = u(e, "DETAILS");
                e.setAttribute("aria-expanded", t.hasAttribute("open")),
                e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"),
                e.hasAttribute("role") || e.setAttribute("role", "button")
            })
        }
        function l(e) {
            return !(e.defaultPrevented || e.ctrlKey || e.metaKey || e.shiftKey || e.target.isContentEditable)
        }
        function c(e) {
            addEventListener("click", function(t) {
                if (l(t) && t.which <= 1) {
                    var n = u(t.target, "SUMMARY");
                    n && n.parentNode && "DETAILS" == n.parentNode.tagName && e(n.parentNode)
                }
            }, !1),
            addEventListener("keydown", function(t) {
                if (l(t) && (13 == t.keyCode || 32 == t.keyCode)) {
                    var n = u(t.target, "SUMMARY");
                    n && n.parentNode && "DETAILS" == n.parentNode.tagName && (e(n.parentNode),
                    t.preventDefault())
                }
            }, !1)
        }
        function d(e) {
            var t = document.createEvent("Event");
            t.initEvent("toggle", !1, !1),
            e.dispatchEvent(t)
        }
        function u(e, t) {
            if ("function" == typeof e.closest)
                return e.closest(t);
            for (; e; ) {
                if (e.tagName == t)
                    return e;
                e = e.parentNode
            }
        }
        t || (document.head.insertAdjacentHTML("afterbegin", "<style>" + a + "</style>"),
        function() {
            const e = document.createElement("details").constructor.prototype
              , t = e.setAttribute
              , n = e.removeAttribute
              , a = Object.getOwnPropertyDescriptor(e, "open");
            Object.defineProperties(e, {
                open: {
                    get: function() {
                        return "DETAILS" == this.tagName ? this.hasAttribute("open") : a && a.get ? a.get.call(this) : void 0
                    },
                    set: function(e) {
                        return "DETAILS" == this.tagName ? e ? this.setAttribute("open", "") : this.removeAttribute("open") : a && a.set ? a.set.call(this, e) : void 0
                    }
                },
                setAttribute: {
                    value: function(e, n) {
                        const a = this
                          , i = function() {
                            return t.call(a, e, n)
                        };
                        if ("open" == e && "DETAILS" == this.tagName) {
                            const e = this.hasAttribute("open")
                              , t = i();
                            if (!e) {
                                const e = this.querySelector("summary");
                                e && e.setAttribute("aria-expanded", !0),
                                d(this)
                            }
                            return t
                        }
                        return i()
                    }
                },
                removeAttribute: {
                    value: function(e) {
                        const t = this
                          , a = function() {
                            return n.call(t, e)
                        };
                        if ("open" == e && "DETAILS" == this.tagName) {
                            const e = this.hasAttribute("open")
                              , t = a();
                            if (e) {
                                const e = this.querySelector("summary");
                                e && e.setAttribute("aria-expanded", !1),
                                d(this)
                            }
                            return t
                        }
                        return a()
                    }
                }
            })
        }(),
        c(function(e) {
            e.hasAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", "")
        }),
        r(document),
        window.MutationObserver ? new MutationObserver(function(e) {
            o.call(e, function(e) {
                o.call(e.addedNodes, r)
            })
        }
        ).observe(document.documentElement, {
            subtree: !0,
            childList: !0
        }) : document.addEventListener("DOMNodeInserted", function(e) {
            r(e.target)
        })),
        t && !n && (window.MutationObserver ? new MutationObserver(function(e) {
            o.call(e, function(e) {
                const t = e.target
                  , n = e.attributeName;
                "DETAILS" == t.tagName && "open" == n && d(t)
            })
        }
        ).observe(document.documentElement, {
            attributes: !0,
            subtree: !0
        }) : c(function(e) {
            const t = e.getAttribute("open");
            setTimeout(function() {
                const n = e.getAttribute("open");
                t != n && d(e)
            }, 1)
        }))
    }(),
    function() {
        const e = document.querySelectorAll(".gi-recuadro-ampliacion")
          , t = document.querySelectorAll(".gi-recuadro-anexo")
          , n = document.querySelectorAll(".gi-recuadro-audio")
          , a = document.querySelectorAll(".gi-recuadro-definicion")
          , i = document.querySelectorAll(".gi-recuadro-escenario")
          , o = document.querySelectorAll(".gi-recuadro-reflexion")
          , s = document.querySelectorAll('[class^="gi-recuadro-reflexion"][class*="--descubrible"] summary');
        if (e)
            for (let t = 0; t < e.length; t++)
                e[t].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-ampliacion__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-ampliacion__gi-icono"></i><span class="gi-recuadro__etiqueta">+ info</span></small>');
        if (t)
            for (let e = 0; e < t.length; e++)
                t[e].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-anexo__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-anexo__gi-icono"></i><span class="gi-recuadro__etiqueta">Anexo</span></small>');
        if (n)
            for (let e = 0; e < n.length; e++)
                n[e].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-audio__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-audio__gi-icono"></i><span class="gi-recuadro__etiqueta">Audio</span></small>');
        if (a)
            for (let e = 0; e < a.length; e++)
                a[e].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-definicion__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-definicion__gi-icono"></i><span class="gi-recuadro__etiqueta">Definición</span></small>');
        if (i)
            for (let e = 0; e < i.length; e++)
                i[e].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-escenario__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-escenario__gi-icono"></i></small>');
        if (o)
            for (let e = 0; e < o.length; e++)
                o[e].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-reflexion__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-reflexion__gi-icono"></i><span class="gi-recuadro__etiqueta">Reflexión</span></small>');
        if (s)
            for (let e = 0; e < s.length; e++)
                s[e].insertAdjacentHTML("afterbegin", '<small class="gi-recuadro-reflexion__gi-antetitulo" aria-hidden="true"><i class="gi-recuadro-reflexion__gi-icono"></i><span class="gi-recuadro__etiqueta">Reflexión</span></small>')
    }(),
    function() {
        const e = t.querySelectorAll(".gi-modal");
        for (let t = 0; t < e.length; t++) {
            const a = e[t]
              , i = "anexo_" + t
              , o = a.querySelector(".gi-titulo-modal")
              , s = o.parentNode
              , r = document.createElement("header")
              , l = `<a href="#${i}" class="modal-trigger">${o.textContent}</a>`
              , c = '<footer><button class="boton-descargar">Descargar</button></footer>'
              , d = '<button class="boton-cerrar" aria-label="Cerrar"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></button>'
              , u = '<b class="js-backdrop"></b>';
            n(a, {
                id: i,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "Material complementario",
                "aria-hidden": "true",
                tabindex: "-1"
            }),
            a.insertAdjacentHTML("beforebegin", l),
            a.insertAdjacentHTML("beforeend", c),
            a.insertAdjacentHTML("afterend", u),
            r.insertAdjacentHTML("beforeend", d),
            s.replaceChild(r, o),
            r.appendChild(o);
            let g = document.querySelectorAll(".modal-trigger")
              , p = document.querySelectorAll(".boton-cerrar")
              , m = document.querySelectorAll(".gi-modal");
            g.forEach(function(e) {
                e.addEventListener("click", function(e) {
                    const t = this.getAttribute("href").substr(1)
                      , n = document.getElementById(t);
                    n.classList && n.classList.add("js-open"),
                    document.querySelector("body").classList.add("js-modal-activa"),
                    e.preventDefault()
                })
            }),
            p.forEach(function(e) {
                e.addEventListener("click", function(e) {
                    const t = this.parentNode.parentNode;
                    document.querySelector("body").classList.remove("js-modal-activa"),
                    t.classList.remove("js-open"),
                    e.preventDefault()
                })
            }),
            m.forEach(function(e) {
                const t = e.parentNode;
                e.addEventListener("click", function() {
                    t.classList.remove("js-open")
                })
            }),
            window.onclick = function(e) {
                e.target !== a && (document.querySelector("body").classList.remove("js-modal-activa"),
                a.classList.remove("open"))
            }
        }
    }(),
    function() {
        const e = document.querySelectorAll("table.gi-tabla");
        if (e)
            for (let t = 0; t < e.length; t++) {
                const a = e[t]
                  , i = a.parentNode
                  , o = document.createElement("figure");
                o.setAttribute("class", "js-figura-tabla"),
                i.replaceChild(o, a),
                o.appendChild(a),
                n(a, {
                    "data-role": "table"
                });
                let s = 30;
                o.addEventListener("mousewheel", e=>{
                    if (!e.deltaY)
                        return;
                    let t = e.deltaY > 0 ? 1 : -1;
                    o.scrollLeft += s * t;
                    let n = Math.round(o.scrollLeft)
                      , a = Math.round(o.scrollWidth - o.clientWidth);
                    return (-1 === t && n > 0 || 1 === t && n < a) && e.preventDefault(),
                    !0
                }
                , !1)
            }
    }(),
    function() {
        const e = document.querySelector(".gi-facetado--descubrible")
          , t = document.querySelector(".gi-facetado__circulo")
          , n = document.querySelectorAll(".gi-facetado__circulo > *");
        t.offsetHeight;
        if (e) {
            for (let e = 0, t = n.length; e < t; e++)
                n[e].style.left = (40 - 35 * Math.cos(-.5 * Math.PI - 1 / t * 2 * e * Math.PI)).toFixed(4) + "%",
                n[e].style.top = (40 + 35 * Math.sin(-.5 * Math.PI - 1 / t * 2 * e * Math.PI)).toFixed(4) + "%";
            document.querySelector(".gi-facetado__elemento-central").onclick = function(e) {
                e.preventDefault(),
                document.querySelector(".gi-facetado__circulo").classList.toggle("js-open")
            }
        }
    }(),
    function() {
        const e = document.querySelectorAll(".gi-titulo-subseccion");
        for (let t = 0; t < e.length; t++) {
            n(e[t], {
                id: "gi-seccion-" + t
            })
        }
        const t = document.querySelectorAll(".subtitulo-1");
        for (let e = 0; e < t.length; e++) {
            n(t[e], {
                id: "subtitulo-1" + e
            })
        }
    }();
    let f = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                f = {
                    passive: !1
                }
            }
        }))
    } catch (e) {}
    !function() {
        var e, t;
        for (e = document.querySelectorAll(".img-comp-overlay"),
        t = 0; t < e.length; t++)
            n(e[t]);
        function n(e) {
            var t, n, a, i = 0;
            function o(e) {
                e.preventDefault(),
                i = 1,
                window.addEventListener("mousemove", r),
                window.addEventListener("touchmove", r)
            }
            function s() {
                i = 0
            }
            function r(a) {
                var o, s;
                if (0 == i)
                    return !1;
                (o = function(t) {
                    var n, a = 0;
                    return t = t || window.event,
                    n = e.getBoundingClientRect(),
                    a = t.pageX - n.left,
                    a -= window.pageXOffset
                }(a)) < 0 && (o = 0),
                o > n && (o = n),
                s = o,
                e.style.width = s + "px",
                t.style.left = e.offsetWidth - t.offsetWidth / 2 + "px"
            }
            n = e.offsetWidth,
            a = e.offsetHeight,
            e.style.width = n / 2 + "px",
            (t = document.createElement("LI")).setAttribute("class", "gi-figura-comparacion__slider"),
            e.parentElement.insertBefore(t, e),
            t.style.top = a / 2 - t.offsetHeight / 2 + "px",
            t.style.left = n / 2 - t.offsetWidth / 2 + "px",
            t.addEventListener("mousedown", o),
            window.addEventListener("mouseup", s),
            t.addEventListener("touchstart", o, f),
            window.addEventListener("touchstop", s)
        }
    }(),
    function() {
        const e = document.querySelectorAll('[class*="--descubrible"] h3:only-child')
          , t = document.querySelectorAll('[class*="--descubrible"] h3 img')
          , n = document.querySelectorAll('[class*="--descubrible"] details[open]');
        e.forEach(e=>{
            e.parentElement.parentElement.parentElement.classList.add("js-simple")
        }
        ),
        t.forEach(e=>{
            e.parentElement.parentElement.parentElement.parentElement.classList.add("js-ilustrado")
        }
        ),
        n.forEach(e=>{
            e.parentElement.classList.add("js-active")
        }
        )
    }(),
    function() {
        const e = (t = "h2",
        n = "Ideas clave",
        a = document.querySelectorAll(t),
        Array.prototype.filter.call(a, function(e) {
            return RegExp(n).test(e.textContent)
        }));
        var t, n, a;
        e.forEach(e=>{
            e.insertAdjacentHTML("afterend", '<div class="gi-contenedor-conclusiones"></div>')
        }
        )
    }(),
    querySelectorAll(img).forEach(e=>{
        e.setAttribute("onerror", "this.onerror=null;this.remove();")
    }
    ),
    window.customElements.define("gi-alerta", class extends HTMLElement {
    }
    )
});
