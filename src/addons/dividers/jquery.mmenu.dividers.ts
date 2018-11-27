Mmenu.addons.dividers = function(
	this : Mmenu
) {
	var opts : mmOptionsDividers = this.opts.dividers;


	//	Extend shorthand options
	if ( typeof opts == 'boolean' )
	{
		(opts as mmLooseObject) = {
			add		: opts,
			fixed	: opts
		};
	}
	if ( typeof opts != 'object' )
	{
		(opts as mmLooseObject) = {};
	}
	opts = this.opts.dividers = jQuery.extend( true, {}, Mmenu.options.dividers, opts );
	//	/Extend shorthand options


	//	Add classname to the menu to specify the type of the dividers
	if ( opts.type )
	{
		this.bind( 'initMenu:after',
			function(
				this : Mmenu
			) {
				this.node.$menu.addClass( 'mm-menu_dividers-' + opts.type );
			}
		);
	}


	//	Add dividers
	if ( opts.add )
	{
		this.bind( 'initListview:after',
			function( 
				this	: Mmenu,
				$panel	: JQuery
			) {
				var $wrapper;
				switch( opts.addTo )
				{
					case 'panels':
						$wrapper = $panel;
						break;

					default:
						$wrapper = $panel.filter( opts.addTo );
						break;
				}

				if ( !$wrapper.length )
				{
					return;
				}

				$wrapper
					.find( '.mm-listitem_divider' )
					.remove();
					
				$wrapper
					.find( '.mm-listview' )
					.each(
						function()
						{
							var last = '';
							Mmenu.filterListItems( jQuery(this).children() )
								.each(
									function()
									{
										var letter = jQuery.trim( jQuery(this).children( '.mm-listitem__text' ).text() ).slice( 0, 1 ).toLowerCase();
										if ( letter != last && letter.length )
										{
											last = letter;
											jQuery( '<li class="mm-listitem mm-listitem_divider">' + letter + '</li>' ).insertBefore( this );
										}
									}
								);
						}
					);
			}
		);
	}
	

	//	Fixed dividers
	if ( opts.fixed )
	{
		//	Add the fixed divider
		this.bind( 'initPanels:after',
			function(
				this : Mmenu
			) {
				if ( typeof this.node.$fixeddivider == 'undefined' )
				{
					this.node.$fixeddivider = jQuery('<ul class="mm-listview mm-listview_fixeddivider"><li class="mm-listitem mm-listitem_divider"></li></ul>')
						.appendTo( this.node.$pnls )
						.children();
				}
			}
		);

		function setValue( 
			this	 : Mmenu,
			$panel	?: JQuery
		) {
			$panel = $panel || this.node.$pnls.children( '.mm-panel_opened' );
			if ( $panel.is( ':hidden' ) )
			{
				return;
			}

			var $dividers = $panel
				.find( '.mm-listitem_divider' )
				.not( '.mm-hidden' );

			var scrl = $panel.scrollTop() || 0,
				text = '';

			$dividers.each(
				function( i, elem )
				{
					let $divider = jQuery(elem);
					if ( $divider.position().top + scrl < scrl + 1 )
					{
						text = $divider.text();
					}
				}
			);

			this.node.$fixeddivider.text( text );
			this.node.$pnls[ text.length ? 'addClass' : 'removeClass' ]( 'mm-panel_dividers' );
		};

		//	Set correct value when 
		//		1) opening the menu,
		//		2) opening a panel,
		//		3) after updating listviews and
		//		4) after scrolling a panel
		this.bind( 'open:start'			, setValue );	// 1
		this.bind( 'openPanel:start'	, setValue );	// 2
		this.bind( 'updateListview'		, setValue );	// 3
		this.bind( 'initPanel:after',					// 4
			function( 
				this	: Mmenu,
				$panel	: JQuery
			) {
				$panel.off( 'scroll.mm-dividers touchmove.mm-dividers' )
					.on( 'scroll.mm-dividers touchmove.mm-dividers',
						( e ) => {
							if ( $panel.hasClass( 'mm-.panel_opened' ) )
							{
								setValue.call( this, $panel );
							}
						}
					);
			}
		);

	}
};


//	Default options and configuration.
(Mmenu.options.dividers as mmOptionsDividers) = {
	add		: false,
	addTo	: 'panels',
	fixed	: false,
	type	: null
};
