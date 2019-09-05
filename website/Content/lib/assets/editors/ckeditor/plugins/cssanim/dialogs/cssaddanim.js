﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
var selectList_cache;

function iterationChange(k) {
    var g = k.ownerDocument, f = g.getElementById("rmAfterLoadSpan"), g = g.getElementById("rmAfterLoadInput");
    "0" === k.value ? (f.style.color = "lightgrey", g.disabled = !0) : (f.style.color = "black", g.disabled = !1)
}

function animSelectionChange(k) {
    var g = CKEDITOR.plugins.cssanim.ckEditor.lang.cssanim,
        f = k.parentElement.parentElement,
        l = f.parentNode.parentNode.parentNode.getElementsByClassName("cssAnimButton"),
        m = k.ownerDocument,
        n = m.getElementById("rmAfterLoadSpan"),
        p = m.getElementById("rmAfterLoadInput"),
        d = m.getElementsByName("anim_L").item(0),
        e = m.getElementsByName("anim_C").item(0),
        m = m.getElementsByName("anim_O").item(0);
    if ("anim_L" === k.name && "none" === d.value) {
        if ("cssAnimPause" === e.value) {
            alert(g.pbOnClickPause);
            d.selectedIndex = selectList_cache;
            return
        }
        if ("cssAnimPause" === m.value) {
            alert(g.pbOnOverPause);
            d.selectedIndex = selectList_cache;
            return
        }
    }
    if ("anim_C" === k.name && "none" === d.value && "cssAnimPause" === e.value)
        alert(g.pbOnClickOnLoadNone), e.selectedIndex = selectList_cache;
    else if ("anim_O" === k.name && "none" === d.value && "cssAnimPause" === m.value)
        alert(g.pbOnOverOnLoadNone), m.selectedIndex = selectList_cache;
    else if ("cssAnimPause" === k.value || "none" === k.value) {
        for (g = 1; g < f.childElementCount; g += 1)
            f.childNodes[g].style.opacity =
                0;
        l[0].style.display = "none";
        "anim_L" === k.name && (n.style.color = "lightgrey", p.disabled = !0)
    } else {
        for (g = 1; g < f.childElementCount; g += 1) f.childNodes[g].style.opacity = "initial";
        l[0].style.display = "initial";
        "anim_L" === k.name && (n.style.color = "black", p.disabled = !1)
    }
}

CKEDITOR.dialog.add("cssanimAddAnimDialog",
    function(k) {
        function g(d, e, b, c) {
            var a = "",
                f = 'checked \x3d "checked"',
                g = 0,
                k = "normal",
                m = 1,
                n = 1,
                p = "none",
                w = "linear",
                t = ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
                u = ["normal", "alternate"],
                h = null,
                h = "",
                h = "black";
            c &&
            (0 <= c.indexOf("animation-play-state")
                    ? h = {
                        name: "cssAnimPause",
                        duration: null,
                        timingFunction: "linear",
                        delay: 0,
                        iterationCount: 1,
                        direction: "normal"
                    }
                    : (g = c.replace("{animation:", "").replace("}", "").replace(";", "").trim(), h =
                        parseCSS3AnimationShorthand(g)),
                g = h.delay / 1E3, k = h.direction, m = h.duration / 1E3, n =
                    h.iterationCount, "infinite" === n && (n = 0, b = !1), p = h.name, w = h.timingFunction);
            var a = a +
                    '\x3ctable style\x3d"display:block; overflow-y\x3dscroll;  overflow-y: auto; width:550px;"\x3e\x3ctr\x3e',
                a = a +
                    '\x3cth style\x3d"text-align: center;font-weight: bold;border: 1px solid grey;padding: 2px; width:100px;"\x3e',
                a = a + l.name,
                a = a + "\x3c/th\x3e",
                a = a +
                    '\x3cth style\x3d"text-align: center;font-weight: bold;border: 1px solid grey;padding: 2px; width:60px;"\x3e',
                a = a + l.duration,
                a = a + "\x3c/th\x3e",
                a =
                    a +
                        '\x3cth style\x3d"text-align: center;font-weight: bold;border: 1px solid grey;padding: 2px; width:100px;"\x3e',
                a = a + l.tFunc,
                a = a + "\x3c/th\x3e",
                a = a +
                    '\x3cth style\x3d"text-align: center;font-weight: bold;border: 1px solid grey;padding: 2px; width:60px;"\x3e',
                a = a + l.delay,
                a = a + "\x3c/th\x3e",
                a = a +
                    '\x3cth title\x3d"If set to 0, iteration will be set as \'infinite\'" style\x3d"text-align: center;font-weight: bold;border: 1px solid grey;padding: 2px; width:70px;"\x3e',
                a = a + l.iter,
                a = a + "\x3c/th\x3e",
                a = a +
                    '\x3cth style\x3d"text-align: center;font-weight: bold;border: 1px solid grey;padding: 2px;"\x3e',
                a = a + l.direction,
                a = a + "\x3c/th\x3e",
                a = a + "\x3c/tr\x3e",
                a = a + "\x3ctr\x3e",
                a = a + '\x3ctd style\x3d"text-align: center;padding: 3px;border: 1px solid gainsboro;"\x3e',
                q,
                h = "";
            "none" === p && (h = "selected");
            c = "" +
                ('\x3cselect  onclick\x3d"selectList_cache\x3dthis.selectedIndex" onChange\x3d"animSelectionChange(this);" name\x3d"anim' +
                    e +
                    '"\x3e') +
                ('\x3coption value\x3d"none" ' + h + "\x3e" + l.none + "\x3c/option\x3e");
            "_L" !==
                e &&
                (h = "", "cssAnimPause" === p && (h = "selected"), c += '\x3coption value\x3d"cssAnimPause" ' +
                    h +
                    "\x3e" +
                    l.cssAnimPause +
                    "\x3c/option\x3e");
            var v, r;
            for (v in d) {
                r = d[v];
                c += '\x3coptgroup label\x3d"' + v + '" style\x3d"font-weight:bold"\x3e';
                for (q = 0; q < r.length; q += 1)
                    h = "", r[q] === p && (h = "selected"), c += '\x3coption value\x3d"' +
                        r[q] +
                        '" ' +
                        h +
                        "\x3e" +
                        r[q] +
                        "\x3c/option\x3e";
                c += "  \x3c/optgroup\x3e"
            }
            c += "\x3c/select\x3e";
            a += c;
            a += "\x3c/td\x3e";
            a += '\x3ctd style\x3d"text-align: center;padding: 3px;border: 1px solid gainsboro;"\x3e';
            a += '\x3cinput name\x3d"duration' +
                e +
                '" type\x3d"number" min\x3d"1" max\x3d"600" value\x3d"' +
                m +
                '" style\x3d"width:4em; border:1px solid gainsboro;"\x3esec';
            a += "\x3c/td\x3e";
            a += '\x3ctd style\x3d"text-align: center;padding: 3px;border: 1px solid gainsboro;"\x3e';
            a += '\x3cselect name\x3d"timing' + e + '" style\x3d"border:1px solid gainsboro;"\x3e';
            for (d = 0; d < t.length; d += 1)
                h = "", t[d] === w && (h = "selected"), a += '\x3coption value\x3d"' +
                    t[d] +
                    '" ' +
                    h +
                    "\x3e" +
                    t[d] +
                    "\x3c/option\x3e";
            a += "\x3c/select\x3e";
            a += "\x3c/td\x3e";
            a += '\x3ctd style\x3d"text-align: center;padding: 3px;border: 1px solid gainsboro;"\x3e';
            a += '\x3cinput name\x3d"delay' +
                e +
                '" type\x3d"number" min\x3d"0" max\x3d"600" value\x3d"' +
                g +
                '" style\x3d"width:4em; border:1px solid gainsboro;"\x3esec';
            a += "\x3c/td\x3e";
            a +=
                '\x3ctd title\x3d"If set to 0, iteration will be set as \'infinite\'" style\x3d"text-align: center;padding: 3px;border: 1px solid gainsboro;"\x3e';
            a += '\x3cinput name\x3d"iteration' +
                e +
                '" type\x3d"number" min\x3d"0" max\x3d"99" value\x3d"' +
                n +
                '" style\x3d"width:3em; border:1px solid gainsboro" onChange\x3d"iterationChange(this);"\x3e';
            a += "\x3c/td\x3e";
            a += '\x3ctd style\x3d"text-align: center;padding: 3px;border: 1px solid gainsboro;"\x3e';
            a += '\x3cselect name\x3d"direction' + e + '" style\x3d"border:1px solid gainsboro;"\x3e';
            for (d = 0; d < u.length; d += 1)
                h = "", u[d] === k && (h = "selected"), a += '\x3coption value\x3d"' +
                    u[d] +
                    '" ' +
                    h +
                    "\x3e" +
                    u[d] +
                    "\x3c/option\x3e";
            a += "\x3c/select\x3e";
            a += "\x3c/td\x3e";
            a += "\x3c/tr\x3e";
            h = "black";
            null !== b &&
            (!1 === b && (f = ""), 0 === n && (f = "disabled", h = "lightgrey"), a += "\x3ctr\x3e", a +=
                    '\x3ctd colspan\x3d"3" style\x3d"text-align: center;padding: 3px; border-left: 1px solid gainsboro; border-bottom: 1px solid gainsboro;"\x3e',
                a += '\x3cspan id\x3d"rmAfterLoadSpan" style\x3d"color:' +
                    h +
                    '" title\x3d"' +
                    l.ralTitle +
                    '"\x3e' +
                    l.ral +
                    "\x3c/span\x3e", a += "\x3c/td\x3e", a +=
                    '\x3ctd colspan\x3d"3" style\x3d"text-align: left; padding: 3px;  border-right: 1px solid gainsboro; border-bottom: 1px solid gainsboro;"\x3e',
                a += '\x3cinput  id\x3d"rmAfterLoadInput" type\x3d"checkbox" name\x3d"rmAfterLoad"  ' + f + "\x3e", a +=
                    "\x3c/td\x3e", a += "\x3c/tr\x3e");
            return a += "\x3c/table\x3e"
        }

        function f(d, e) {
            var b;
            for (b = 0; b < d.$.length; b++) if (d.$[b].name == e) return new CKEDITOR.dom.node(d.$[b]);
            return null
        }

        var l = k.lang.cssanim,
            m = CKEDITOR.getUrl(CKEDITOR.plugins.get("cssanim").path + "dialogs/css3animation.png"),
            n = null,
            p;
        return{
            title: l.editAnimsTitle,
            width: 600,
            minWidth: 600,
            height: 400,
            minHeight: 400,
            resizable: CKEDITOR.DIALOG_RESIZE_NONE,
            contents: [
                {
                    id: "mainPanel",
                    label: "CSS_Animation",
                    title: "Animation",
                    padding: 0,
                    elements: [
                        {
                            type: "html",
                            id: "htmlAnim",
                            html: "",
                            setup: function() {
                                var d = document.getElementById(this.domId), e = k.config.allowedAnimations;
                                CKEDITOR.plugins.cssanim.runHighLightElem(n);
                                var b =
                                        n,
                                    c = null,
                                    a;
                                if (c = b.getAttribute("data-animation"))
                                    a = decodeURIComponent(c), c =
                                        JSON.parse(a), CKEDITOR.plugins.cssanim.managePending &&
                                        (p[p.length] = [b.getId(), a]);
                                b = '\x3cdiv class\x3d"tabs" style\x3d"width:600px;"\x3e\x3cdiv class\x3d"tab"\x3e';
                                b += '\x3cspan style\x3d"font-weight:bold; font-size: larger;"\x3eOnOver\x3c/span\x3e';
                                b +=
                                    '\x3cdiv id\x3d"cssanimAddAnimDialogTabOver" class\x3d"content" style\x3d"height:55px;"\x3e';
                                a = c && c.cdo ? c.cdo : null;
                                b += g(e, "_O", null, a);
                                b += '\x3cdiv style\x3d"text-align: center; padding: 2px;"\x3e';
                                b += '\x3cinput type\x3d"button" class\x3d"cssAnimButton" value\x3d"' +
                                    l.testIt +
                                    ' !" name\x3d"overBtn" onclick\x3d"CKEDITOR.plugins.cssanim.cssanimAddAnimDialogTest(this);"\x3e';
                                b += "\x3c/div\x3e ";
                                b += "\x3c/div\x3e ";
                                b += '\x3cdiv class\x3d"tab"\x3e';
                                b += '\x3cspan style\x3d"font-weight:bold;font-size: larger;"\x3eOnClick\x3c/span\x3e';
                                b +=
                                    '\x3cdiv  id\x3d"cssanimAddAnimDialogTabClick" class\x3d"content" style\x3d"height:55px;"\x3e';
                                a = c && c.cdc ? c.cdc : null;
                                b += g(e, "_C", null, a);
                                b += '\x3cdiv style\x3d"text-align: center; padding: 2px;"\x3e';
                                b += '\x3cinput type\x3d"button" class\x3d"cssAnimButton" value\x3d"' +
                                    l.testIt +
                                    ' !" name\x3d"clickBtn" onclick\x3d"CKEDITOR.plugins.cssanim.cssanimAddAnimDialogTest(this);"\x3e';
                                b += "\x3c/div\x3e ";
                                b += "\x3c/div\x3e ";
                                b += '\x3cdiv class\x3d"tab"\x3e';
                                b += '\x3cspan style\x3d"font-weight:bold;font-size: larger;"\x3eOnLoad\x3c/span\x3e';
                                b +=
                                    '\x3cdiv  id\x3d"cssanimAddAnimDialogTabLoad" class\x3d"content" style\x3d"height:85px;"\x3e';
                                a = c && c.cds ? c.cds : null;
                                b += g(e, "_L", c ? c.ral : !0, a);
                                b += '\x3cdiv style\x3d"text-align: center; padding: 2px;"\x3e';
                                b += '\x3cinput type\x3d"button" class\x3d"cssAnimButton" value\x3d"' +
                                    l.testIt +
                                    ' !" name\x3d"loadBtn" onclick\x3d"CKEDITOR.plugins.cssanim.cssanimAddAnimDialogTest(this);"\x3e';
                                b += "\x3c/div\x3e ";
                                b += "\x3c/div\x3e ";
                                b += "\x3c/div\x3e";
                                e =
                                    '\x3clink rel\x3d"stylesheet" href\x3d"./ckeditor/plugins/cssanim/css/cssanim.css"\x3e\x3cstyle type\x3d"text/css"\x3e.cke_cssanim_container{color:#000 !important;padding:10px 10px 0;margin-top:5px;text-align: center;}.cke_cssanim_container p{margin: 0 0 10px;}\x3c/style\x3e\x3cdiv class\x3d"cke_cssanim_container"\x3e\x3cdiv class\x3d"cke_cssanim_container_div" style\x3d"text-align: center; border: 1px solid grey; width:50%;margin-left: auto;margin-right: auto;"\x3e\x3cimg class\x3d"cke_cssanim_container_img" src\x3d"' +
                                    m +
                                    '" alt\x3d"CSS Animation" style\x3d"border: 1px solid grey; padding: 5px; margin: 10px;"\x3e\x3c/div\x3e\x3cbr\x3e\x3cbr\x3e\x3cp id\x3d"elemName" style\x3d"font-weight:bold;font-size: larger;text-align: -webkit-center;"\x3eAnimation ' +
                                    l.forStr +
                                    " : " +
                                    n.getName() +
                                    "\x3c/p\x3e\x3cbr\x3e" +
                                    b +
                                    "\x3c/div\x3e";
                                d.innerHTML = e;
                                CKEDITOR.plugins.cssanim.cssanimAddAnimDialog = d
                            },
                            cancel: function() { CKEDITOR.plugins.cssanim.cleanHighlight() },
                            commit: function() {
                                CKEDITOR.plugins.cssanim.cleanHighlight();
                                var d,
                                    e = this.getElement().getElementsByTag("input"),
                                    b = this.getElement().getElementsByTag("select"),
                                    c = { animStart: null, animClick: null, animOver: null, ral: !1 };
                                d = f(b, "anim_L").getValue();
                                "none" !== d &&
                                (c.animStart =
                                        d + " ", c.animStart += f(e, "duration_L").getValue() + "s ", c.animStart +=
                                        f(b, "timing_L").getValue() + " ", c.animStart += f(e, "delay_L").getValue() +
                                        "s ",
                                    d = f(e, "iteration_L").getValue(), "0" === d && (d = "infinite"), c.animStart +=
                                        d + " ", c.animStart += f(b, "direction_L").getValue(), f(e, "rmAfterLoad").$
                                        .checked &&
                                        "infinite" !== d &&
                                        (c.ral = !0));
                                d = f(b, "anim_C").getValue();
                                "none" !==
                                    d &&
                                    (c.animClick =
                                        d + " ", c.animClick += f(e, "duration_C").getValue() + "s ", c.animClick +=
                                        f(b, "timing_C").getValue() + " ", c.animClick +=
                                        f(e, "delay_C").getValue() + "s ", d =
                                        f(e, "iteration_C").getValue(), "0" === d && (d = "infinite"), c.animClick +=
                                        d + " ", c.animClick += f(b, "direction_C").getValue());
                                d = f(b, "anim_O").getValue();
                                "none" !== d &&
                                (c.animOver =
                                        d + " ", c.animOver += f(e, "duration_O").getValue() + "s ", c.animOver +=
                                        f(b, "timing_O").getValue() + " ", c.animOver += f(e, "delay_O").getValue() +
                                        "s ",
                                    d = f(e, "iteration_O").getValue(), "0" ===
                                        d &&
                                        (d = "infinite"), c.animOver += d + " ", c.animOver += f(b, "direction_O")
                                        .getValue());
                                CKEDITOR.plugins.cssanim.runAddAnimElem(n, c)
                            }
                        }
                    ]
                }
            ],
            onShow: function() {
                n = CKEDITOR.plugins.cssanim.curSelectedElement;
                CKEDITOR.plugins.cssanim.managePending && (p = CKEDITOR.plugins.cssanim.pendingChanges);
                this.setupContent();
                var d = this.getContentElement("mainPanel", "htmlAnim").getInputElement().getElementsByTag("select"), e;
                e = f(d, "anim_L");
                animSelectionChange(e.$);
                e = f(d, "anim_C");
                animSelectionChange(e.$);
                e = f(d, "anim_O");
                animSelectionChange(e.$)
            },
            onOk: function() {
                this.commitContent();
                CKEDITOR.plugins.cssanim.managePending &&
                (CKEDITOR.plugins.cssanim.pendingChanges =
                    p, CKEDITOR.plugins.cssanim.refreshCssAnimDialogAnimationsTab())
            },
            onCancel: function() { this.foreach(function(d) { d.cancel && d.cancel.apply(d) }) }
        }
    });