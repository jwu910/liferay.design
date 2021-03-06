import { Container } from 'components/atoms'
import { CardLexicon } from 'components/molecules'
import { MainLayout } from 'components/templates'
import React from 'react'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const ResourcesPage = () => (
	<MainLayout section="Resources">
		<Container>
			<Grid className={styles.grid} gap="2rem">
				<Grid.Item>
					<CardLexicon
						dark
						icon="lexicon"
						title="Lexicon"
						text="Our Experience Language"
						to="/lexicon"
						cta="Get Started"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						delay='0.1s'
						dark
						icon="liferayDesicon"
						title="Principles"
						text="What does good design look like at Liferay?"
						to="/principles"
						cta="First Things First"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						delay='0.2s'
						dark
						icon="whyBlueprints"
						title="Blueprints"
						text="Liferay's Brand Style Guidelines"
						to="/blueprints"
						cta="The Blue Abides"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						delay='.3s'
						dark
						icon="fa_figma"
						title="Figma Resources"
						text="Open Source Design Projects"
						to="/resources/figma"
						cta="Help Us, Help You"
					/>
				</Grid.Item>

				<Grid.Item>
					<CardLexicon
						delay='.4s'
						dark
						icon="faqs"
						title="Help Center"
						text="Documentation and how-to's for Liferay-ers"
						to="https://help.liferay.design"
						cta="Get Help"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						delay='.5s'
						dark
						icon="waffle"
						title="Style"
						text="Digital Marketing Styleguide"
						to="https://style.liferay.design"
						cta="Get in Style"
					/>
				</Grid.Item>
				{/* <Grid.Item>
					<CardLexicon
						dark
						icon="fa_terminal"
						title="Dashboard"
						text="Coming Soon!"
						to="https://dashboard.liferay.design"
						cta="Sneak a Peek"
					/>
				</Grid.Item> */}
			</Grid>
		</Container>
	</MainLayout>
)

export default ResourcesPage
