import styled from '@emotion/styled';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

const SwooshOne = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: '';
    background-image: url('/images/header-background.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 110%;
    position: absolute;
    bottom: 280px;
    left: 0px;
    right: 0px;
    top: -95px;
    width: 100%;
    z-index: 0;

    @media (max-width: ${breakpoints.smallMaxWidth}px) {
      height: 130%;
    }
  }
`;

export default SwooshOne;
