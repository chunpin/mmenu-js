Mmenu.addons.navbars.tabs=function(a){var t=this,n=a.children("a");a.addClass("mm-navbar_tabs").parent().addClass("mm-navbars_has-tabs"),n.on("click.mm-navbars",function(a){a.preventDefault();var e=jQuery(a.currentTarget);if(e.hasClass("mm-navbar__tab_selected"))a.stopImmediatePropagation();else try{t.openPanel(jQuery(e.attr("href")),!1),a.stopImmediatePropagation()}catch(a){}}),this.bind("openPanel:start",function a(e){n.removeClass("mm-navbar__tab_selected");var t=n.filter('[href="#'+e.attr("id")+'"]');if(t.length)t.addClass("mm-navbar__tab_selected");else{var s=e.data("mm-parent");s&&s.length&&a.call(this,s.closest(".mm-panel"))}})};