Mmenu.addons.screenReader=function(){var r=this,n=this.opts.screenReader,a=this.conf.screenReader;"boolean"==typeof n&&(n={aria:n,text:n}),"object"!=typeof n&&(n={}),this.opts.screenReader=Mmenu.extend(n,Mmenu.options.screenReader),n.aria&&(this.bind("initAddons:after",function(){r.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria",[].slice.call(arguments))}),r.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",[].slice.call(arguments))}),r.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",[].slice.call(arguments))}),r.bind("close:start",function(){this.trigger("close:start:sr-aria",[].slice.call(arguments))}),r.bind("close:finish",function(){this.trigger("close:finish:sr-aria",[].slice.call(arguments))}),r.bind("open:start",function(){this.trigger("open:start:sr-aria",[].slice.call(arguments))}),r.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria",[].slice.call(arguments))})}),this.bind("updateListview",function(){r.node.pnls.querySelectorAll(".mm-listitem").forEach(function(n){Mmenu.sr_aria(n,"hidden",n.matches(".mm-hidden"))})}),this.bind("openPanel:start",function(e){var n=Mmenu.DOM.find(r.node.pnls,".mm-panel").filter(function(n){return n!==e}).filter(function(n){return!n.parentElement.matches(".mm-panel")}),t=[e];Mmenu.DOM.find(e,".mm-listitem_vertical .mm-listitem_opened").forEach(function(n){t.push.apply(t,Mmenu.DOM.children(n,".mm-panel"))}),n.forEach(function(n){Mmenu.sr_aria(n,"hidden",!0)}),t.forEach(function(n){Mmenu.sr_aria(n,"hidden",!1)})}),this.bind("closePanel",function(n){Mmenu.sr_aria(n,"hidden",!0)}),this.bind("initPanels:after",function(n){n.forEach(function(n){Mmenu.DOM.find(n,".mm-btn").forEach(function(n){Mmenu.sr_aria(n,"owns",n.getAttribute("href").replace("#","")),Mmenu.sr_aria(n,"haspopup",!0)})})}),this.bind("initNavbar:after",function(n){var e=Mmenu.DOM.children(n,".mm-navbar")[0],t=!n.matches(".mm-panel_has-navbar");Mmenu.sr_aria(e,"hidden",t)}),n.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(n){var e=Mmenu.DOM.children(n,".mm-navbar")[0],t=!!e.querySelector(".mm-btn_prev");Mmenu.sr_aria(Mmenu.DOM.find(e,".mm-navbar__title")[0],"hidden",t)})),n.text&&(this.bind("initAddons:after",function(){r.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),r.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(n){var e=Mmenu.DOM.children(n,".mm-navbar")[0];if(e){var t=Mmenu.DOM.children(e,".mm-btn_prev")[0];t&&(t.innerHTML=Mmenu.sr_text(r.i18n(a.text.closeSubmenu)))}}),this.bind("initListview:after",function(n){var e=n.mmParent;if(e){var t=Mmenu.DOM.children(e,".mm-btn_next")[0];if(t){var i=r.i18n(a.text[t.parentElement.matches(".mm-listitem_vertical")?"toggleSubmenu":"openSubmenu"]);t.innerHTML+=Mmenu.sr_text(i)}}}))},Mmenu.options.screenReader={aria:!0,text:!0},Mmenu.configs.screenReader={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},function(){var i=function(n,e,t){(n[e]=t)?n.setAttribute(e,t.toString()):n.removeAttribute(e)};Mmenu.sr_aria=function(n,e,t){i(n,"aria-"+e,t)},Mmenu.sr_role=function(n,e){i(n,"role",e)},Mmenu.sr_text=function(n){return'<span class="mm-sronly">'+n+"</span>"}}();