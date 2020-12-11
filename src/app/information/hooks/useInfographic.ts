import { infoGraphics } from '../data/infographicList';

export const useInfographic = (imgID: string) => {
  return infoGraphics.find((x) => x.id === imgID);
};
