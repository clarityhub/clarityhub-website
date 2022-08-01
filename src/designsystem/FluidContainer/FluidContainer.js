import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { WEBSITE_MAX_WIDTH } from '../config';

const FluidContainer = styled.div`
    display: flex;
    flex-direction: row;

    > * {
        flex: 1;
    }

    > * + * {
        margin-left: 2rem;
        margin-top: 0;
    }

    @media(max-width: ${WEBSITE_MAX_WIDTH}px) {
        flex-direction: column;

        ${({ flipDirectionOnBreak }) => flipDirectionOnBreak && css`
            flex-direction: column-reverse;
        `}
        
        > * + * {
            margin-left: 0;
            margin-top: 2rem;
        }
    }
`;

export default FluidContainer;
