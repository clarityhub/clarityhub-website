/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

export const Heading = (props) => (
	<Typography
		css={css`
            font-size: 2.6rem;
            font-weight: 400;
            /* line-height: 2.8rem; */
			line-height: 3.5rem;
        `}
		{...props}
	/>
);

export const Heading2 = (props) => (
	<Typography
		css={css`
            font-size: 2.2rem;
            font-weight: 600;
            line-height: 2.8rem;
        `}
		{...props}
	/>
);

export const Lead = (props) => (
	<Typography
		css={css`
            font-size: 1.4rem;
            letter-spacing: 0.001rem;
        `}
		{...props}
	/>
);