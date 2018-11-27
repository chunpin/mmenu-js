Mmenu.addons.columns = function(
	this : Mmenu
) {
	var opts : mmOptionsColumns = this.opts.columns;


	//	Extend shorthand options
	if ( typeof opts == 'boolean' )
	{
		(opts as mmLooseObject) = {
			add 	: opts
		};
	}
	if ( typeof opts == 'number' )
	{
		opts = {
			add 	: true,
			visible : opts
		};
	}

	if ( typeof opts != 'object' )
	{
		(opts as mmLooseObject) = {};
	}
	if ( typeof opts.visible == 'number' )
	{
		opts.visible = {
			min 	: opts.visible,
			max 	: opts.visible
		};
	}
	opts = this.opts.columns = jQuery.extend( true, {}, Mmenu.options.columns, opts );
	//	/Extend shorthand options


	//	Add the columns
	if ( opts.add )
	{
		opts.visible.min = Math.max( 1, Math.min( 6, opts.visible.min ) );
		opts.visible.max = Math.max( opts.visible.min, Math.min( 6, opts.visible.max ) );


		var colm = '',
			colp = '';

		for ( var i = 0; i <= opts.visible.max; i++ )
		{
			colm += ' mm-menu_columns-' + i;
			colp += ' mm-panel_columns-' + i;
		}
		if ( colm.length )
		{
			colm = colm.slice( 1 );
			colp = colp.slice( 1 );
		}

		var rmvc = colp + ' mm-panel_opened mm-panel_opened-parent mm-panel_highest';


		//	Close all later opened panels
		this.bind( 'openPanel:before',
			function( 
				this 	: Mmenu,
				$panel	: JQuery
			) {
				var $parent = $panel.data( 'mm-parent' );
				if ( !$parent )
				{
					return;
				}

				$parent = $parent.closest( '.mm-panel' );
				if ( !$parent.length )
				{
					return;
				}

				var colnr = $parent.attr( 'class' );
				if ( !colnr )
				{
					return;
				}

				colnr = colnr.split( 'mm-panel_columns-' )[ 1 ];
				if ( !colnr )
				{
					return;
				}

				colnr = parseInt( colnr.split( ' ' )[ 0 ], 10 ) + 1;
				while( colnr > 0 )
				{
					$panel = this.node.$pnls.children( '.mm-panel_columns-' + colnr );
					if ( $panel.length )
					{
						colnr++;
						$panel.removeClass( rmvc )
							.addClass( 'mm-hidden' );
					}
					else
					{
						colnr = -1;
						break;
					}
				}
			}
		);

		this.bind( 'openPanel:start', 
			function( 
				this 	: Mmenu,
				$panel	: JQuery
			) {
				var _num = this.node.$pnls.children( '.mm-panel_opened-parent' ).length;
				if ( !$panel.hasClass( 'mm-panel_opened-parent' ) )
				{
					_num++;
				}
				_num = Math.min( opts.visible.max, Math.max( opts.visible.min, _num ) );

				this.node.$menu
					.removeClass( colm )
					.addClass( 'mm-menu_columns-' + _num );

				this.node.$pnls
					.children( '.mm-panel' )
					.removeClass( colp )
					.filter( '.mm-panel_opened-parent' )
					.add( $panel )
					.slice( -opts.visible.max )
					.each(
						function( i )
						{
							jQuery(this).addClass( 'mm-panel_columns-' + i );
						}
					);
			}
		);
	}
};


//	Default options and configuration.
(Mmenu.options.columns as mmOptionsColumns) = {
	add 		: false,
	visible		: {
		min			: 1,
		max			: 3
	}
};
