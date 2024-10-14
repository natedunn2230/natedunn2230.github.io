'use client'

import React, { ReactNode, useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  AppShell, AppShellHeader, AppShellNavbar, AppShellMain,
  Burger,Group,  Stack, useMantineColorScheme,
  Title,
  Text,
  Flex,
  Button,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./components/ThemeToggle";

import bannerDark from '../../public/banner_dark_mode.svg';
import bannerLight from '../../public/banner_light_mode.svg';
import ProfilePicture from "../../public/Profile.png";

import styles from './home.module.scss';

interface LinkProps {
  closeMenu?: () => void;
  activePath: string;
}

const links = [
  {link: '/experience', label: 'Experience'},
  {link: '/projects', label: 'Projects'},
  {link: '/contact', label: 'Contact Me'},
];

const Links:React.FC<LinkProps> = ({closeMenu, activePath}) => {
  return links.map(link => (
    <Link
      key={link.label}
      href={link.link}
      className={`${styles.tab} ${activePath === link.link ? styles.selected : ''}`}
      onClick={closeMenu}
    >
      {link.label}
    </Link>
  ))
};

interface HomeProps {
  children: ReactNode;
}

const Main: React.FC<HomeProps> = ({children}) => {
  const [hydrated, setHydrated] = useState(false);
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const currentPath = usePathname();
  const onHome = currentPath === '/';

  // Remove this hook eventually
  useEffect(() => {
    // Ensures that the component is hydrated before rendering
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Render a loading state or nothing until hydration
    return null;
  }

  return (
    <AppShell
      header={{ height: 80}}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: true } }}
      padding="md"
      >
      <AppShellHeader className={styles.header}>
        <Link href='/'>
        <Image src={colorScheme === 'dark' ? bannerDark : bannerLight} alt="Banner image displaying website logo"/>
        </Link>
        <Group ml="md" gap={0} visibleFrom="sm">
          <div className={styles.themeToggleNav}>
            <ThemeToggle/>
          </div>
          <Links activePath={currentPath}/>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm"  />
      </AppShellHeader>
      <AppShellNavbar className={styles.navBar} py="md" px={4}>
        <Stack gap={0}>
          <Links closeMenu={toggle} activePath={currentPath} />
        </Stack>
        <ThemeToggle/>
      </AppShellNavbar>
      <AppShellMain mx='sm' className={`${onHome ? styles.main: ''}`}>
        {onHome ?
          <Flex gap='32px' align='center' wrap='wrap' justify='center'>
            <Stack align="center" flex='1'>
              <Group gap='xs' justify='center'><Title order={1}>Hi. I am</Title><Title c='red'>Nathan.</Title></Group>
              <Text c='dimmed' size='xl' fs='italic'>
                A fullstack software engineer with experience developing and
                maintaining mission critical applications serving a wide range of
                stakeholders.
              </Text>
              <Link href='/experience'>
              <Button variant='subtle' color='blue'>Learn more about me</Button>
              </Link>
            </Stack>
            <Image
              priority
              className={styles.headshot}
              src={ProfilePicture}
              alt="Profile Picture"
            />
          </Flex>
          : <>{children}</>
        }
      </AppShellMain>
    </AppShell>
  );
}

export default Main;
