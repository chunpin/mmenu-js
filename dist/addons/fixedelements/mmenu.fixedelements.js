Mmenu.addons.fixedElements=function(){var n=this;if(this.opts.offCanvas){var t,i,s,o,f=this.conf.fixedElements;this.bind("setPage:after",function(e){t=n.conf.classNames.fixedElements.fixed,(s=Mmenu.DOM.find(e,"."+t)).forEach(function(e){Mmenu.refactorClass(e,t,"mm-slideout")}),document.querySelector(f.fixed.insertSelector)[f.fixed.insertMethod](s),i=n.conf.classNames.fixedElements.sticky,Mmenu.DOM.find(e,"."+i).forEach(function(e){Mmenu.refactorClass(e,i,"mm-sticky")}),o=Mmenu.DOM.find(e,".mm-sticky")}),this.bind("open:start",function(){if(o.length&&"hidden"==window.getComputedStyle(document.documentElement).overflow){var n=Mmenu.$(window).scrollTop()+f.sticky.offset;o.forEach(function(e){e.style.top=parseInt(Mmenu.$(e).css("top"),10)+n+"px"})}}),this.bind("close:finish",function(){o.forEach(function(e){e.style.top=""})})}},Mmenu.configs.fixedElements={fixed:{insertMethod:"append",insertSelector:"body"},sticky:{offset:0}},Mmenu.configs.classNames.fixedElements={fixed:"Fixed",sticky:"Sticky"};