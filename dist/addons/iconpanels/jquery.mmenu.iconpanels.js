Mmenu.addons.iconPanels=function(){var n=this.opts.iconPanels,a=!1;if("boolean"==typeof n&&(n={add:n}),"number"!=typeof n&&"string"!=typeof n||(n={add:!0,visible:n}),"object"!=typeof n&&(n={}),"first"==n.visible&&(a=!0,n.visible=1),(n=this.opts.iconPanels=jQuery.extend(!0,{},Mmenu.options.iconPanels,n)).visible=Math.min(3,Math.max(1,n.visible)),n.visible++,n.add){this.bind("initMenu:after",function(){var e=["mm-menu_iconpanel"];n.hideNavbar&&e.push("mm-menu_hidenavbar"),n.hideDivider&&e.push("mm-menu_hidedivider"),this.$menu.addClass(e.join(" "))});var t="";if(!a){for(var e=0;e<=n.visible;e++)t+=" mm-panel_iconpanel-"+e;t.length&&(t=t.slice(1))}function i(e){if(!e.parent(".mm-listitem_vertical").length){var i=this.node.$pnls.children(".mm-panel");a?i.removeClass("mm-panel_iconpanel-first").first().addClass("mm-panel_iconpanel-first"):i.removeClass(t).filter(".mm-panel_opened-parent").add(e).removeClass("mm-hidden").not(function(){return!!jQuery(this).parent(".mm-listitem_vertical").length}).slice(-n.visible).each(function(e,i){jQuery(i).addClass("mm-panel_iconpanel-"+e)})}}this.bind("openPanel:start",i),this.bind("initPanels:after",function(e){i.call(this,this.node.$pnls.children(".mm-panel_opened"))}),this.bind("initListview:after",function(e){!n.blockPanel||e.parent(".mm-listitem_vertical").length||e.children(".mm-panel__blocker").length||e.prepend('<a href="#'+e.closest(".mm-panel").attr("id")+'" class="mm-panel__blocker" />')})}},Mmenu.options.iconPanels={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,visible:3};