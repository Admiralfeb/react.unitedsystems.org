import { InaraSquadLink, DiscordLink, PatreonLink } from 'data/uscLinks';
export const useLinks = () => {
  return {
    inaraSquadLink: InaraSquadLink,
    discordLink: DiscordLink,
    patreonLink: PatreonLink,
  };
};

export const getLinks = () => {
  return {
    inaraSquadLink: InaraSquadLink,
    discordLink: DiscordLink,
    patreonLink: PatreonLink,
  };
};
