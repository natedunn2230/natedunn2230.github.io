'use client';

import { Group, Text, Title, useMantineColorScheme } from "@mantine/core"

import github from '../../../public/github-mark-white.svg';
import githubDark from '../../../public/github-mark.svg';
import { IconBook } from "@tabler/icons-react";
import Image from "next/image";

const Projects = () => {
	const { colorScheme } = useMantineColorScheme();
	return(
		<>
			<Group gap={4} mb={'lg'}>
				<IconBook size='48px'/>
				<Title>Projects</Title>
			</Group>
			<Group mb='md'>
				<Text size='lg'>Check out my GitHub to see what I've been working on lately!</Text>
				<a href="https://github.com/natedunn2230">
					<Image style={{width: '3rem', height: '3rem'}}  src={colorScheme === 'dark' ? github: githubDark} alt="Linkedin Link"/>
				</a>
			</Group>
			<Text c='dimmed'>I'll be adding project overviews here soon.</Text>
		</>
	);
};

export default Projects;
