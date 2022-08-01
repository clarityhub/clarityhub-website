module.exports = {
	siteMetadata: {
		title: `Clarity Hub`,
		siteUrl: `https://www.clarityhub.io`,
		description: `Customer interview software for your business. Build what your customers want with AI-powered note taking, user research tools, and customer interview software.`,
		phoneNumber: '1-855-83-CLAIR',
		email: 'support@clarityhub.io',
		facebookUsername: 'clarityhubinc',
		twitterUsername: 'clarityhubinc',
		mediumUsername: 'clarityhub',
		linkedinUsername: 'clarityhubinc',
		googleUsername: '110681130273789633766',
	},
	plugins: [
		'gatsby-plugin-root-import',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.clarityhub.io',
				sitemap: 'https://www.clarityhub.io/sitemap.xml',
				resolveEnv: () => process.env.ENVIRONMENT,
				env: {
					development: {
						policy: [{ userAgent: '*', disallow: ['/'] }],
					},
					production: {
						policy: [{ userAgent: '*', allow: '/' }],
					},
				},
			},
		},
		// `gatsby-plugin-offline`,
		'gatsby-plugin-remove-serviceworker',
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Clarity Hub`,
				short_name: `Clarity Hub`,
				start_url: `/`,
				background_color: `#FDFDFD`,
				theme_color: `#FF6A5C`,
				display: `standalone`,
				icon: `src/favicon.png`,
				include_favicon: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-101505101-1",
				head: false,
				anonymize: true,
				respectDNT: true,
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/favicon.png',
				dir: 'auto',
				lang: 'en-US',
				background: '#fdfdfd',
				theme_color: '#fdfdfd',
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',
            
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: true,
					favicons: true,
					firefox: true,
					opengraph: true,
					twitter: true,
					yandex: true,
					windows: true,
				},
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Crimson Text', 'Roboto', 'Open Sans:300,400,600,700'],
				},
			},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/images/`,
				name: "static-images",
			},
		},
		`gatsby-remark-copy-linked-files`,
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				commonmark: true,
				footnotes: true,
				pedantic: true,
				gfm: true,
				excerpt_separator: `<!-- end -->`,
				plugins: [
					'@weknow/gatsby-remark-twitter',
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (eg <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (eg for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: "language-",
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in src/layouts/index.js
							// right after importing the prism color scheme:
							//  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
				],
			},
		},
	],
};
