Mmenu.addons.drag=function(){if(this.opts.offCanvas&&!("function"!=typeof Hammer||Hammer.VERSION<2)){var y=this.opts.drag,_=this.conf.drag;"boolean"==typeof y&&(y={menu:y,panels:y}),"object"!=typeof y&&(y={}),"boolean"==typeof y.menu&&(y={open:y.menu}),"object"!=typeof y.menu&&(y.menu={}),"boolean"==typeof y.panels&&(y.panels={close:y.panels}),"object"!=typeof y.panels&&(y.panels={}),(y=this.opts.drag=jQuery.extend(!0,{},Mmenu.options.drag,y)).menu.open&&this.bind("setPage:after",function(){var n,t,o,r=this,i={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},a="width",s=i.open_dir,p=function(e){e<=y.menu.maxStartPos&&(u=1)},m=function(){return jQuery(".mm-slideout")},u=0,d=0,l=0,e=this.opts.extensions.all,c=void 0===e?"left":-1<e.indexOf("mm-menu_position-right")?"right":-1<e.indexOf("mm-menu_position-top")?"top":-1<e.indexOf("mm-menu_position-bottom")?"bottom":"left",f=void 0===e?"back":-1<e.indexOf("mm-menu_position-top")||-1<e.indexOf("mm-menu_position-bottom")||-1<e.indexOf("mm-menu_position-front")?"front":"back";switch(c){case"top":case"bottom":i.events="panup pandown",i.typeLower="y",i.typeUpper="Y",a="height"}switch(c){case"right":case"bottom":i.negative=!0,p=function(e){e>=jQuery(window)[a]()-y.menu.maxStartPos&&(u=1)}}switch(c){case"right":i.open_dir="left",i.close_dir="right";break;case"top":i.open_dir="down",i.close_dir="up";break;case"bottom":i.open_dir="up",i.close_dir="down"}switch(f){case"front":m=function(){return this.node.$menu}}var h,g=Mmenu.valueOrFn(this.node.$menu,y.menu.node,Mmenu.node.$page);"string"==typeof g&&(g=jQuery(g));var v=new Hammer(g[0],this.opts.drag.vendors.hammer);v.on("panstart",function(e){p.call(r,e.center[i.typeLower]),h=m.call(r),s=i.open_dir}),v.on(i.events+" panend",function(e){0<u&&e.preventDefault()}),v.on(i.events,function(e){if(n=e["delta"+i.typeUpper],i.negative&&(n=-n),n!=d&&(s=d<=n?i.open_dir:i.close_dir),(d=n)>y.menu.threshold&&1==u){if(jQuery("html").hasClass("mm-wrapper_opened"))return;u=2,r._openSetup(),r.trigger("open:start"),jQuery("html").addClass("mm-wrapper_dragging"),l=w(jQuery(window)[a]()*_.menu[a].perc,_.menu[a].min,_.menu[a].max)}2==u&&(t=w(d,10,l)-("front"==f?l:0),i.negative&&(t=-t),o="translate"+i.typeUpper+"("+t+"px )",h.css({"-webkit-transform":"-webkit-"+o,transform:o}))}),v.on("panend",function(e){2==u&&(jQuery("html").removeClass("mm-wrapper_dragging"),h.css("transform",""),r[s==i.open_dir?"_openFinish":"close"]()),u=0})}),y.panels.close&&this.bind("initPanel:after",function(e){var n=this,t=e.data("mm-parent");if(t){t=t.closest(".mm-panel");var o=new Hammer(e[0],this.opts.drag.vendors.hammer),r=null;o.on("panright",function(e){r||(n.openPanel(t),r=setTimeout(function(){clearTimeout(r),r=null},n.conf.openingInterval+n.conf.transitionDuration))})}})}function w(e,n,t){return e<n&&(e=n),t<e&&(e=t),e}},Mmenu.options.drag={menu:{open:!1,node:null,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},Mmenu.configs.drag={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}}};