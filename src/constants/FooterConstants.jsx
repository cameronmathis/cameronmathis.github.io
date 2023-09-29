import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

const EMAIL = {
  name: "Email",
  link: "mailto: cmmathis98@gmail.com",
  icon: <MailIcon fontSize="large" />,
};

const GITHUB = {
  name: "GitHub",
  link: "https://github.com/cameronmathis",
  icon: <GitHubIcon fontSize="large" />,
};

const LINKED_IN = {
  name: "Linked In",
  link: "https://www.linkedin.com/in/cameronmathis/",
  icon: <LinkedInIcon fontSize="large" />,
};

export const FOOTER_OPTIONS = [EMAIL, GITHUB, LINKED_IN];
