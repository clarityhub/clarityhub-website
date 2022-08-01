import React, { Fragment } from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import MarketingFooter from '@clarityhub/unity-marketing/lib/components/Footer';
import BaseLink from '@clarityhub/unity-web/lib/components/Link';

import { useFlag } from '../Flags';
import Link from '../GatsbyLink';

const Footer = () => {
	const isServicesEnabled = useFlag(["features", "services"]);

	return (
		<StaticQuery
			query={graphql`
				query FooterSiteMetadata {
					site {
						siteMetadata {
							siteUrl
							title
							phoneNumber
							email
							facebookUsername
							twitterUsername
							mediumUsername
							linkedinUsername
						}
					}
				}
			`}
			render={({
				site: {
					siteMetadata: {
						title,
						phoneNumber,
						email,
						facebookUsername,
						twitterUsername,
						mediumUsername,
						linkedinUsername,
					},
				},
			}) => (
				<MarketingFooter
					title={title}
					phoneNumber={phoneNumber}
					email={email}
					facebookUsername={facebookUsername}
					twitterUsername={twitterUsername}
					mediumUsername={mediumUsername}
					linkedinUsername={linkedinUsername}
					privacyLink="/terms/privacy"
					termsLink="/terms/"
					extraColumns={[
						<Fragment>
							<Typography noPadding type="h3" color="white">Information</Typography>

							<ul>
								<li><BaseLink href="https://status.clarityhub.io">Status Page</BaseLink></li>
								<li><Link to="/pricing">Pricing</Link></li>
								<li><Link to="/use-cases/startups">For Startups</Link></li>
								<li><Link to="/use-cases/product-managers">For Product Managers</Link></li>
								<li><Link to="/use-cases/ux-researchers">For UX Researchers</Link></li>
							</ul>
						</Fragment>,
						isServicesEnabled && (
							<Fragment>
								<Typography noPadding type="h3" color="white">Other Services</Typography>

								<ul>
									<li><BaseLink href="https://clarityhub.io/api">API Services</BaseLink></li>
									<li><BaseLink href="https://docs.clarityhub.io">API Docs</BaseLink></li>
								</ul>
							</Fragment>
						),
						<Fragment>
							<Typography noPadding type="h3" color="white">About</Typography>

							<ul>
								<li><Link to="/about">About Us</Link></li>
							</ul>
						</Fragment>,
					].filter(Boolean)}
				/>
			)}
		/>
	);
};

export default Footer;
