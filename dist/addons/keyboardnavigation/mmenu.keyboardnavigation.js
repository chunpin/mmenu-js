Mmenu.addons.keyboardNavigation=function(){var e=this;if(!Mmenu.support.touch){var a=this.opts.keyboardNavigation;if("boolean"!=typeof a&&"string"!=typeof a||(a={enable:a}),"object"!=typeof a&&(a={}),this.opts.keyboardNavigation=Mmenu.extend(a,Mmenu.options.keyboardNavigation),a.enable){var n=Mmenu.DOM.create("button.mm-tabstart"),t=Mmenu.DOM.create("button.mm-tabend"),m=Mmenu.DOM.create("button.mm-tabend");this.bind("initMenu:after",function(){a.enhance&&e.node.menu.classList.add("mm-menu_keyboardfocus"),e._initWindow_keyboardNavigation(a.enhance)}),this.bind("initOpened:before",function(){e.node.menu.prepend(n),e.node.menu.append(t),Mmenu.DOM.children(e.node.menu,".mm-navbars-top, .mm-navbars-bottom").forEach(function(e){e.querySelectorAll("a.mm-navbar__title").forEach(function(e){e.setAttribute("tabindex",-1)})})}),this.bind("initBlocker:after",function(){Mmenu.node.blck.append(m),Mmenu.DOM.children(Mmenu.node.blck,"a")[0].classList.add("mm-tabstart")});var o="input, select, textarea, button, label, a[href]";function i(e){e=e||Mmenu.DOM.children(this.node.pnls,".mm-panel_opened")[0];var n=Mmenu.$(),t=Mmenu.$(this.node.menu).children(".mm-navbars_top, .mm-navbars_bottom").children(".mm-navbar");t.find(o).filter(":focus").length||("default"==a.enable&&((n=Mmenu.$(e).children(".mm-listview").find("a[href]").not(".mm-hidden")).length||(n=Mmenu.$(e).find(o).not(".mm-hidden")),n.length||(n=t.find(o).not(".mm-hidden"))),n.length||(n=Mmenu.$(this.node.menu).children(".mm-tabstart")),n.first().focus())}this.bind("open:finish",i),this.bind("openPanel:finish",i),this.bind("initOpened:after:sr-aria",function(){Mmenu.$(e.node.menu).add(Mmenu.node.blck).children(".mm-tabstart, .mm-tabend").each(function(e,n){Mmenu.sr_aria(n,"hidden",!0),Mmenu.sr_role(n,"presentation")})})}}},Mmenu.options.keyboardNavigation={enable:!1,enhance:!1},Mmenu.prototype._initWindow_keyboardNavigation=function(e){Mmenu.$(window).off("keydown.mm-offCanvas").off("focusin.mm-keyboardNavigation").on("focusin.mm-keyboardNavigation",function(e){if(document.documentElement.matches(".mm-wrapper_opened")){var n=e.target;if(n.matches(".mm-tabend")){var t=void 0;n.parentElement.matches(".mm-menu")&&Mmenu.node.blck&&(t=Mmenu.node.blck),n.parentElement.matches(".mm-wrapper__blocker")&&(t=Mmenu.DOM.find(document.body,".mm-menu_offcanvas.mm-menu_opened")[0]),t||(t=n.parentElement),Mmenu.DOM.children(t,".mm-tabstart")[0].focus()}}}).off("keydown.mm-keyboardNavigation").on("keydown.mm-keyboardNavigation",function(e){var n=e.target,t=n.closest(".mm-menu");if(t){t.mmenu;if(n.matches("input, textarea"));else switch(e.keyCode){case 13:(n.matches(".mm-toggle")||n.matches(".mm-check"))&&Mmenu.$(n).trigger("click.mm");break;case 32:case 37:case 38:case 39:case 40:e.preventDefault()}}}),e&&Mmenu.$(window).off("keydown.mm-keyboardNavigation").on("keydown.mm-keyboardNavigation",function(e){var n=e.target,t=n.closest(".mm-menu");if(t){var a=t.mmenu;if(n.matches("input"))switch(e.keyCode){case 27:n.value=""}else switch(e.keyCode){case 8:var m=t.querySelector(".mm-panel_opened").mmParent;m&&a.openPanel(m.closest(".mm-panel"));break;case 27:t.matches(".mm-menu_offcanvas")&&a.close()}}})};