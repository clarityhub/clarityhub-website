import React, { useEffect, useState } from 'react';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, { CardImage, CardBody } from '@clarityhub/unity-web/lib/components/Card';

import Section from 'src/designsystem/Section';
import FluidContainer from 'src/designsystem/FluidContainer';

const BlogPosts = () => {
	const [latestPosts, setLatestPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [failed, setFailed] = useState(false);

	useEffect(() => {
		setLoading(true);

		try {
			fetch('https://stellar.clarityhub.io/feed.json', {
				mode: 'cors',
			}).then((response) => response.json()).then((response) => {
				setFailed(false);
				setLoading(false);

				setLatestPosts(response.items);
			}).catch(error => {
				console.error(error);
    
				setFailed(true);
				setLoading(false);
			});
		} catch(error) {
			console.error(error);
			setLoading(false);
			setFailed(true);
		}

	}, []);

	if (loading || failed) {
		return null;
	}

	return (
		<Section style={{ backgroundColor: '#EFEFEF' }}>
			<Box margin={{ top: 'medium', bottom: 'medium' }}>
				<Typography center type="h2">
                    Latest Blog Posts
				</Typography>


				<FluidContainer>
					{latestPosts.slice(0, 3).map((post, id) => {
						return (
							<Card key={id}>
								<CardImage src={post.image} />
								<CardBody>
									<Box margin={{ bottom: 'medium' }}>
										<Typography type="h3">
											{post.title}
										</Typography>
									</Box>
									<Typography>
										{post.summary}
									</Typography>

									<Typography>
										<a href={post.url} target="_blank" rel="noreferrer noopener">Continue Reading</a>
									</Typography>
								</CardBody>
							</Card>
						);
					})}
				</FluidContainer>

				<Box margin={{ top: 'small' }}>
					<Typography color="darkGray" center>
                        Read more on <a href="https://stellar.clarityhub.io" target="_blank" rel="noreferrer noopener">our blog</a>
					</Typography>
				</Box>
			</Box>
		</Section>
	);
    
};

export default BlogPosts;
