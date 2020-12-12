import { IInfoButton } from '../models/infoButtonModel';
import { getLinks } from '../../hooks/useLinks';
const { inaraSquadLink, discordLink, patreonLink } = getLinks();
export const uscLinksList: IInfoButton[] = [
  {
    title: 'Rules',
    caption: '',
    local: true,
    link: '/about/rules',
    beginner: true,
  },
  {
    title: 'Our Management',
    caption: '',
    local: true,
    link: '/about/hc',
    beginner: true,
  },
  {
    title: 'Our Allies',
    caption: '',
    local: true,
    link: '/about/allies',
    beginner: true,
  },
  {
    title: 'Our Fleet Carriers',
    caption: '',
    local: true,
    link: '/about/fc',
    beginner: true,
  },
  {
    title: 'Discord',
    caption: '',
    local: false,
    link: discordLink,
    beginner: false,
  },
  {
    title: 'Inara USC Squadron',
    caption: '',
    local: false,
    link: inaraSquadLink,
    beginner: false,
  },
  {
    title: 'Patreon',
    caption: '',
    local: false,
    link: patreonLink,
    beginner: false,
  },
];
