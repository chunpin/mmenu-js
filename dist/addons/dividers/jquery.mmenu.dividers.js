Mmenu.addons.dividers=function(){var t=this.opts.dividers;if("boolean"==typeof t&&(t={add:t,fixed:t}),"object"!=typeof t&&(t={}),(t=this.opts.dividers=jQuery.extend(!0,{},Mmenu.options.dividers,t)).type&&this.bind("initMenu:after",function(){this.node.$menu.addClass("mm-menu_dividers-"+t.type)}),t.add&&this.bind("initListview:after",function(i){var e;switch(t.addTo){case"panels":e=i;break;default:e=i.filter(t.addTo)}e.length&&(e.find(".mm-listitem_divider").remove(),e.find(".mm-listview").each(function(){var e="";Mmenu.filterListItems(jQuery(this).children()).each(function(){var i=jQuery.trim(jQuery(this).children(".mm-listitem__text").text()).slice(0,1).toLowerCase();i!=e&&i.length&&jQuery('<li class="mm-listitem mm-listitem_divider">'+(e=i)+"</li>").insertBefore(this)})}))}),t.fixed){function d(i){if(!(i=i||this.node.$pnls.children(".mm-panel_opened")).is(":hidden")){var e=i.find(".mm-listitem_divider").not(".mm-hidden"),d=i.scrollTop()||0,n="";e.each(function(i,e){var t=jQuery(e);t.position().top+d<d+1&&(n=t.text())}),this.node.$fixeddivider.text(n),this.node.$pnls[n.length?"addClass":"removeClass"]("mm-panel_dividers")}}this.bind("initPanels:after",function(){void 0===this.node.$fixeddivider&&(this.node.$fixeddivider=jQuery('<ul class="mm-listview mm-listview_fixeddivider"><li class="mm-listitem mm-listitem_divider"></li></ul>').appendTo(this.node.$pnls).children())}),this.bind("open:start",d),this.bind("openPanel:start",d),this.bind("updateListview",d),this.bind("initPanel:after",function(e){var t=this;e.off("scroll.mm-dividers touchmove.mm-dividers").on("scroll.mm-dividers touchmove.mm-dividers",function(i){e.hasClass("mm-.panel_opened")&&d.call(t,e)})})}},Mmenu.options.dividers={add:!1,addTo:"panels",fixed:!1,type:null};