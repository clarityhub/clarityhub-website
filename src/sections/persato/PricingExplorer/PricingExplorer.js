import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import FluidContainer from 'src/designsystem/FluidContainer';
import Toggle from 'src/designsystem/Toggle';
import colors from '@clarityhub/unity-core/lib/colors';

const PriceBox = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	height: 4rem;
	margin-bottom: 2rem;
`;

const UL = styled.ul`
	list-style-type: disc;
    margin-left: 1.3rem;
	margin-top: 1rem;
`;

const PricingExplorer = () => {
	const [checked, setChecked] = useState(true);

	return (
		<Box>
			<Box>
				<Toggle
					labelLeft={<b>Monthly</b>}
					labelRight={<b>Yearly</b>}
					checked={checked}
					onClick={() => setChecked((state) => !state)}
					center
				/>

				<Box margin={{ top: 'small', bottom: 'small' }}>
					<Typography center type="h5" color="darkGray">
						Pay annually and save 20%
					</Typography>
				</Box>
			</Box>

			<Box margin={{ top: 'small' }}>
				<FluidContainer breakAt={['tablet']}>
					<Card>
						<CardBody>
							<Box margin={{ bottom: 'small' }}>
								<Typography center type="h3">
									Free Trial
								</Typography>
							</Box>

							<PriceBox>
								<Typography center>
									<b>Start with a 14 day free trial</b>
								</Typography>
							</PriceBox>

							<Typography>
								Try out all the Premium features before you buy.
							</Typography>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<Box margin={{ bottom: 'small' }}>
								<Typography center type="h3">
									Premium
								</Typography>
							</Box>

							<PriceBox>
								<Typography type="h2" center noMargin noPadding>
									<span style={{
										fontSize: '1rem',
										color: colors.dark.default,
									}}>$</span>
									{checked ? '28' : '35'}
								</Typography>
								<Typography center noMargin color="darkGray">
									user / month
								</Typography>
							</PriceBox>

							<Typography>
								All the features you need to:

								<UL>
									<li>Take rich interview notes</li>
									<li>Turn interviews into searchable data</li>
									<li>Add images, audio clips, and more</li>
								</UL>
							</Typography>

							<Typography>
								Includes:
								<UL>
									<li>Unlimited Interviews</li>
									<li>Unlimited File Uploads</li>
									<li>600 Transcription minutes per user per month</li>
								</UL>
							</Typography>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<Box margin={{ bottom: 'small' }}>
								<Typography center type="h3">
									Enterprise
								</Typography>
							</Box>

							<PriceBox>
								<Typography center>
									<b>Contact for pricing</b>
								</Typography>
							</PriceBox>

							<Typography>
								Includes all the features of the Premium plan and:

								<UL>
									<li>Additional support</li>
									<li>Onboarding</li>
									<li>Unlimited transcriptions</li>
								</UL>
							</Typography>
						</CardBody>
					</Card>
				</FluidContainer>
			</Box>
		</Box>
	);
};

export default PricingExplorer;