import React from 'react';
import { StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import clarityhubIcon from '../../assets/clarityhub-icon.png';

const Metadata = ({ pathname }) => (
	<StaticQuery
		query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            description
            twitterUsername
          }
        }
      }
    `}
		render={({
			site: {
				siteMetadata: { siteUrl, title, description, twitterUsername },
			},
		}) => (
			<Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
				<html lang="en" />
				<link rel="canonical" href={`${siteUrl}${pathname}`} />
				<meta name="docsearch:version" content="2.0" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
				/>
				<meta name="description" content={description} />

				<meta property="og:url" content={siteUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en" />
				<meta property="og:site_name" content={title} />
				<meta property="og:image" content={`${clarityhubIcon}`} />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={`@${twitterUsername}`} />

				{/* Drift code */}
				<script>
					{`
						"use strict";
												
						!function() {
						var t = window.driftt = window.drift = window.driftt || [];
						if (!t.init) {
							if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
												t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
							t.factory = function(e) {
							return function() {
								var n = Array.prototype.slice.call(arguments);
												return n.unshift(e), t.push(n), t;
											};
							}, t.methods.forEach(function(e) {
													t[e] = t.factory(e);
												}), t.load = function(t) {
							var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
												o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
												var i = document.getElementsByTagName("script")[0];
												i.parentNode.insertBefore(o, i);
											};
											}
										}();
										drift.SNIPPET_VERSION = '0.3.1';
										drift.load('5fsrskr8dn2e');
					`}
				</script>
			</Helmet>
		)}
	/>
);

export default Metadata;