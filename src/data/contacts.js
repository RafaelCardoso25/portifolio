import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

export const contacts = [
  {
    id: 'email',
    label: 'E-mail',
    value: 'rafaelabisaber@gmail.com',
    href: 'mailto:rafaelabisaber@gmail.com',
    icon: FaEnvelope,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '(31) 98467-3144',
    href: 'https://wa.me/5531984673144',
    icon: FaWhatsapp,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Rafael Abi-Saber Cardoso',
    href: 'https://www.linkedin.com/search/results/people/?keywords=Rafael%20Abi-Saber%20Cardoso',
    icon: FaLinkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'RafaelCardoso25',
    href: 'https://github.com/RafaelCardoso25',
    icon: FaGithub,
  },
]
