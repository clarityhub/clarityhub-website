import styled from '@emotion/styled';

const SwooshTwo = styled.div`
    display: flex;
    margin-top: -480px;
    overflow: hidden;
    position: relative;
    padding-top: 500px;

    &:after {
        content: '';
        background-color: #FCF7F7;
        position: absolute;
        left: 0;
        right: 0;
        top: 520px;
        height: 600px;
        transform: skew(0, -6deg);
        z-index: 0;
    }
`;

export default SwooshTwo;
