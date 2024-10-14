
import {
	List, ListItem, rem, Tabs, TabsList, TabsPanel,
	TabsTab, Text, ThemeIcon, Timeline, TimelineItem
} from "@mantine/core"
import {
	IconBook, IconBulb, IconCheck, IconPlane,
	IconRoad, IconSatellite
} from "@tabler/icons-react";

import styles from './experience.module.scss';

const Experience = () => {
    return(
			<div className={styles.experience}>
				<Tabs variant="outline" defaultValue='work'>
					<TabsList >
						<TabsTab value="work" leftSection={<IconRoad/>}>
							The Journey
						</TabsTab>
						<TabsTab value="skills" leftSection={<IconBulb/>}>
							Skills
						</TabsTab>
					</TabsList>
					<TabsPanel value='work'>
						<Timeline bulletSize={36} className={styles.timeline}>
							<TimelineItem
								title='Viasat'
								bullet={
									<ThemeIcon
										size={30}
										variant="gradient"
										gradient={{ from: 'red', to: 'yellow' }}
										radius="xl"
									>
										<IconSatellite size="1.2rem" />
									</ThemeIcon>
								}>
								<Text c='blue' fs='italic' size='sm'>Software Engineer</Text>
								<Text c="dimmed" fs="italic" size="xs">
									Carlsbad, CA; Nov. 2021 - Present
								</Text>
								<List spacing="sm" mt='md' icon={
									<ThemeIcon color="teal" size={24} radius="xl">
										<IconCheck style={{ width: rem(16), height: rem(16) }} />
									</ThemeIcon>
								}>
									<ListItem>Lead Engineer</ListItem>
								</List>
							</TimelineItem>
							<TimelineItem
								title="The Perduco Group (A LinQuest Company)"
								bullet={
									<ThemeIcon
										size={30}
										variant="gradient"
										gradient={{ from: 'blue', to: 'red' }}
										radius="xl"
									>
										<IconPlane size="1.2rem" />
									</ThemeIcon>
								}
							>
								<Text c='blue' fs='italic' size='sm'>Software Engineer</Text>
								<Text c="dimmed" fs="italic" size="xs">
									Beavercreek, OH; April 2018 - Nov 2021
								</Text>
							</TimelineItem>
							<TimelineItem
								title="Wright State Unversity"
								bullet={
									<ThemeIcon
										size={30}
										variant="gradient"
										gradient={{ from: 'lime', to: 'cyan' }}
										radius="xl"
									>
										<IconBook size="1.2rem" />
									</ThemeIcon>
								}
							>
								<Text c='blue' fs='italic' size='sm'>Student-Athlete</Text>
								<Text c="dimmed" size="xs" fs='italic'>
									Beavercreek, OH; August 2016 - April 2020
								</Text>
								<List></List>
							</TimelineItem>
						</Timeline>
					</TabsPanel>
					<TabsPanel value='skills'>
						<Text>Skills are constantly evolving...</Text>
					</TabsPanel>
				</Tabs>
			</div>
    )
}

export default Experience;
