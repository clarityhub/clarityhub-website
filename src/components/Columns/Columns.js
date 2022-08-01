import styled from '@emotion/styled';
import { css } from '@emotion/core';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

// XXX Columns and Column will come from the design system

const gutterSize = (gutters) => {
	switch (gutters) {
	case 'large':
		return '4rem';
	case 'medium':
		return '2rem';
	case 'small':
	default:
		return '1rem';
	}
};

export const Column = styled.div(css`
    flex: 1;
    width: 100%;
`, ({ flex }) => css`
    flex: ${flex};
`, ({ hide = [] }) => {
	const styles = [];

	// TODO use media constants from core
	if (hide.indexOf('xs') !== -1) {
		styles.push(`
            @media(max-width: ${breakpoints.xsmallMaxWidth}px) {
                display: none;
            }
        `);
	}

	if (hide.indexOf('sm') !== -1) {
		styles.push(`
            @media(max-width: ${breakpoints.smallMaxWidth}px) {
                display: none;
            }
        `);
	}

	return styles.join(' ');
});

export const Columns = styled.div(css`
    display: flex;
    flex-direction: row;
`, ({ column = [], gutters }) => {
	const styles = [];

	if (gutters) {
		styles.push(`
            > div + div {
                margin-left: ${gutterSize(gutters)};
            }
        `);
	}

	if (column.indexOf('xs') !== -1) {
		styles.push(`
            @media(max-width: ${breakpoints.xsmallMaxWidth}px) {
                flex-direction: column;
            }
        `);

		if (gutters) {
			styles.push(`
                @media(max-width: ${breakpoints.xsmallMaxWidth}px) {
                    > div + div {
                        margin-left: 0;
                        margin-top: ${gutterSize(gutters)};
                    }
                }
            `);
		}
	}

	if (column.indexOf('sm') !== -1) {
		styles.push(`
            @media(max-width: ${breakpoints.smallMaxWidth}px) {
                flex-direction: column;
            }
        `);

		if (gutters) {
			styles.push(`
                @media(max-width: ${breakpoints.smallMaxWidth}px) {
                    > div + div {
                        margin-left: 0;
                        margin-top: 1rem;
                    }
                }
            `);
		}
	}

	return styles.join(' ');
});
