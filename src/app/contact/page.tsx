'use client'

import { Group, Text, Title, UnstyledButton } from "@mantine/core";
import { IconMail, IconPencil } from "@tabler/icons-react";
import Image from "next/image";

import linkedin from '../../../public/LinkedIn_icon.svg';
const Contact = () => {
    return(
        <div>
            <Group mb='lg' gap={4}>
                <IconPencil size='48px'/>
                <Title>Contact Me</Title>
            </Group>
            <Text size='lg'>If you have any questions, feel free to contact me via Email or on LinkedIn.</Text>
            <Group mt='16' gap={8}>
                <a href="https://www.linkedin.com/in/nathan-dunn-125416137">
                    <Image style={{width: '3rem', height: '3rem'}}  src={linkedin} alt="Linkedin Link"/>
                </a>
                <a href= "mailto: ndunn2230@gmail.com">
                    <UnstyledButton>
                        <IconMail style={{width: '3rem', height: '3rem'}} size={'64px'}/>
                    </UnstyledButton>
                </a>
            </Group>
        </div>
    )
}

export default Contact;