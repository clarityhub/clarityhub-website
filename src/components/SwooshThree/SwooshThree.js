import styled from '@emotion/styled';

import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import colors from '@clarityhub/unity-core/lib/colors';

const SwooshThree = styled.div`
    position: relative;
    margin-bottom: 10rem;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
        background-color: ${colors.dark.default};
        margin-top: 130px;
        margin-bottom: 0;
        padding: 0 0 20px 0;
    }

    &:after {
        content: '';
        background-image: url('/images/user-background.svg');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        height: 178%;
        position: absolute;
        bottom: -141px;
        left: -1px;
        right: -1px;
        top: -160px;
        width: 100%;
        z-index: 1;

        @media (max-width: ${breakpoints.smallMaxWidth}px) {
            background-image: none;
        }
    }
`;

export default SwooshThree;