import React, { useState } from 'react';
import Prism from 'prismjs';
// import loadLanguages from 'prismjs/components';
import styled from '@emotion/styled';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { darken } from '@clarityhub/unity-core/lib/utilities/color';
import Button, { ButtonSet } from '@clarityhub/unity-web/lib/components/Buttons';
import { Lead } from 'src/components/MarketingTypography';

import steps from './steps';
// loadLanguages(['json']);

const CodeContainer = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-flow: column;
    /* flex-flow: row; */
    border: 1px solid ${colors.muted.default};
    border-radius: ${borders.borderRadius.rem}rem;
    box-shadow: ${colors.shadow.default};
    text-align: left;
`;

const TerminalSection = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1;
    border-bottom-right-radius: ${borders.borderRadius.rem}rem;
    border-bottom-left-radius: ${borders.borderRadius.rem}rem;
    background-color: ${colors.dark.default};
    color: ${colors.gray.default};
    line-height: 1.5;

    & code {
        font-size: inherit;
    }
    & pre {
        font-size: inherit;
    }
`;

const CodeSection = styled.div`
    border-bottom: 1px solid ${colors.darkGray.default};
    padding: 2rem;
    font-size: 1.1rem;
    overflow: scroll;
`;

const OutputSection = styled.div`
    min-height: 100px;
    padding: 2rem;
    font-size: 0.9rem;
    color: ${darken(colors.darkGray.default)};
`;

const DescriptionSection = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1;
    /* max-width: 50%; */
    padding: 2rem;
    font-size: 1.4rem;
    line-height: 1.5;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 1.5rem;
`;

const Indicator = styled.li((props) => props.filled && `
        border-color: ${colors.notification.default};
        background: ${colors.notification.default};
    `,`
    width: 12px;
    height: 12px;
    margin-right: 16px;
    border-radius: 50%;
    border: 2px solid ${colors.notification.default};
    display: inline-block;
    position: relative;
    transition: all .2s cubic-bezier(.4,0,.2,1);

    &:not(:first-of-type):before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -1px;
        vertical-align: middle;
        height: 0;
        width: 16px;
        right: 10px;
        border-top: 2px solid ${colors.notification.default};
    }
`);


const CodeExample = () => {
	const [step, setStep] = useState(0);
    
	const code = Prism.highlight(steps[step].codeText, Prism.languages.javascript, "javascript");
	// const output = Prism.highlight(steps[step].codeOutput, Prism.languages.json, "json");

	return (
		<CodeContainer>
			<DescriptionSection>
				<Header>
					<div>
						<ul>
							{steps.map((__, i) => (
								<Indicator key={i} filled={i <= step} />
							))}
						</ul>
					</div>
					<ButtonSet>
						{
							step > 0  && (
								<Button outline text size="small" disabled={step === 0} onClick={() => setStep(step - 1)}>
                                Previous
								</Button>
							)
						}
						{
							step < steps.length - 1 && (
								<Button outline text size="small" disabled={step === steps.length -1} onClick={() => setStep(step + 1)}>
                                    Next
								</Button>
							)
						}
					</ButtonSet>
				</Header>
				<Lead>{steps[step].description}</Lead>
			</DescriptionSection>
			<TerminalSection>
				<CodeSection>
					<code>
						<pre>
					        <div dangerouslySetInnerHTML={{__html: code}} />
						</pre>
					</code>
				</CodeSection>
				<OutputSection>
					<code>
						<pre>
						    {steps[step].codeOutput}
							{/* <div dangerouslySetInnerHTML={{ __html: output }} /> */}
						</pre>
					</code>
				</OutputSection>
			</TerminalSection>
			
		</CodeContainer>
	);
};

export default CodeExample;