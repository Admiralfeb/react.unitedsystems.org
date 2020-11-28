import { IInfoButton } from "../infoButtonModel";

export const guidesList: IInfoButton[] = [
  {
    title: 'New Player Guide',
    caption: 'Created by Pixel Bandits',
    local: false,
    link:
      'https://www.pixelbandits.org/2020/04/elite-dangerous-beginners-guide/',
    beginner: true,
  },
  {
    title: 'USC Ship Builds List',
    caption: 'Compiled by Admiralfeb',
    local: true,
    link: '/builds',
    beginner: true,
  },
  {
    title: 'How to Explore',
    caption: "Commander's Toolbox",
    local: false,
    link: 'https://cmdrs-toolbox.com/guides/exploration',
    beginner: true,
  },
  {
    title: 'How to Mine',
    caption: 'Created by LocNor',
    local: false,
    link:
      'https://www.reddit.com/r/EliteDangerous/comments/4wmgja/general_mining_guide_20/',
    beginner: true,
  },
  {
    title: 'Ship Reviews',
    caption: 'Compiled by Admiralfeb',
    local: true,
    link: '/reviews',
    beginner: true,
  },
  {
    title: 'Cave Johnson',
    caption: 'Compiled by IM2D',
    local: true,
    link: '/cave',
    beginner: false,
  },
  {
    title: 'How to Unlock Engineers',
    caption: "Commander's Toolbox",
    local: false,
    link: 'https://cmdrs-toolbox.com/guides/engineering-unlock',
    beginner: false,
  },
  {
    title: 'How to unlock Guardian',
    caption: "Commander's Toolbox",
    local: false,
    link: 'https://cmdrs-toolbox.com/guides/guardian-modules',
    beginner: false,
  },
  {
    title: 'How to Grind Imperial Rank',
    caption: "Commander's Toolbox",
    local: false,
    link: 'https://cmdrs-toolbox.com/guides/empire-rank',
    beginner: false,
  },
  {
    title: 'How to Grind Federal Rank',
    caption: "Commander's Toolbox",
    local: false,
    link: 'https://cmdrs-toolbox.com/guides/fed-rank',
    beginner: false,
  },
];
