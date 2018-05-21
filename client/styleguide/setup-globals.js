// Set up `wp.*` aliases.  Doing this because any tests importing wp stuff will
// likely run into this.
global.wp = {
	shortcode: {
		next() {},
	},
};

[
	'components',
	'utils',
	'blocks',
	'date',
	'editor',
	'data',
	'core-data',
	'edit-post',
	'viewport',
	'plugins',
].forEach( entryPointName => {
	Object.defineProperty( global.wp, entryPointName, {
		get: () => require( 'gutenberg/' + entryPointName + '/build' ),
	} );
} );

Object.defineProperty( global.wp, 'element', {
	get: () => require( 'gutenberg/packages/element' ),
} );

Object.defineProperty( global.wp, 'dom', {
	get: () => require( 'gutenberg/packages/dom' ),
} );
