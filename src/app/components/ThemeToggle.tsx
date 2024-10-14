'use client'

import { ThemeIcon, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
	const { setColorScheme, colorScheme } = useMantineColorScheme();

	return (
		<UnstyledButton
			className={`${styles.themeToggle}`}
			onClick={() => setColorScheme(colorScheme === 'dark' ? 'light': 'dark')}
			>
			{colorScheme === 'light' ? 
				<ThemeIcon color='blue.5'>
					<IconSun/>
				</ThemeIcon>:
				<ThemeIcon color='blue.4' variant='outline'>
					<IconMoon/>
				</ThemeIcon>
			}
		</UnstyledButton>
	);
}

export default ThemeToggle;
