import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';
import BackToTop from '@clarityhub/unity-web/lib/components/BackToTop';

import Metadata from '../Metadata';
import Header from '../Header';
import Footer from '../Footer';

const LayoutWrapper = styled.div`
    background-color: ${colors.dove.default};
	overflow: hidden;
`;

const Content = styled.div`
    width: 100%;
`;

const NullComponent = () => null;

const Layout = ({ CTA = NullComponent, stickyHeader, transparentToSolid, children, location }) => (
	<LayoutWrapper>
		<Metadata pathname={location.pathname} />
		<Header
			location={location}
			CTA={CTA}
			stickyHeader={stickyHeader}
			transparentToSolid={transparentToSolid}
		/>

		<Content>
			{children}
		</Content>

		<BackToTop style={{ right: '80px' }} />

		<Footer />
	</LayoutWrapper>
);

export default Layout;
