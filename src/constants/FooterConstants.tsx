import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Mail as MailIcon,
} from '@mui/icons-material';
import React, { ReactElement } from 'react';

interface FooterConstant {
    link: string;
    icon: ReactElement;
}

const EMAIL: FooterConstant = {
    link: 'mailto: cmmathis98@gmail.com',
    icon: <MailIcon fontSize='large' />,
};

const GITHUB: FooterConstant = {
    link: 'https://github.com/cameronmathis',
    icon: <GitHubIcon fontSize='large' />,
};

const LINKED_IN: FooterConstant = {
    link: 'https://www.linkedin.com/in/cameronmathis/',
    icon: <LinkedInIcon fontSize='large' />,
};

export const FOOTER_OPTIONS: FooterConstant[] = [EMAIL, GITHUB, LINKED_IN];
