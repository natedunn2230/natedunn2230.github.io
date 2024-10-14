'use client'

import { Group, Stack, Text, Title, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";

import github from '../../../public/github-mark-white.svg';
import githubDark from '../../../public/github-mark.svg';
import linkedin from '../../../public/LinkedIn_icon.svg';

import styles from './contact.module.scss';

const Contact = () => {
    const { colorScheme } = useMantineColorScheme();

    return(
        <div>
            <Text size='lg'>If you have any questions, feel free to contact me via Email or on LinkedIn.</Text>
            <Stack gap={0} mt='32px'>
                <Title order={3}>Email:</Title>
                <Text>ndunn2230@gmail.com</Text>
            </Stack>
            <Stack gap={0} mt='lg'>
                <Title order={3}>Other places:</Title>
                <Group mt='16'>
                    <a  href="https://github.com/natedunn2230">
                        <Image className={styles.link} src={colorScheme === 'dark' ? github : githubDark} alt="Github link" width={25}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nathan-dunn-125416137">
                        <Image className={styles.link}  src={linkedin} alt="Linkedin Link"/>
                    </a>
                </Group>
            </Stack>
        </div>
    )
}

export default Contact;