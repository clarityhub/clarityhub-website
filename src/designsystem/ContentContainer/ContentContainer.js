import styled from '@emotion/styled';

import { WEBSITE_MAX_WIDTH } from '../config';

const ContentContainer = styled.div`
    max-width: calc(${WEBSITE_MAX_WIDTH}px + 2rem);
    margin: 0 auto;
    width: 100%;

    @media(max-width: ${WEBSITE_MAX_WIDTH}px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export default ContentContainer;