
import {
	Group,
	List, rem,
	Text, ThemeIcon, Timeline, TimelineItem, Title
} from "@mantine/core"
import {
	IconBook, IconCheck, IconPlane,
	IconRoad,
	IconSatellite
} from "@tabler/icons-react";

const Experience = () => {
    return(
		<>
			<Group mb='lg' gap={4}>
                <IconRoad size='48px'/>
                <Title>The Journey</Title>
            </Group>
			<Timeline bulletSize={36}>
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
		</>
    )
}

export default Experience;
