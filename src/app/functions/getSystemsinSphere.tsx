import axios from 'axios';

const apiURL = 'https://www.edsm.net/api-v1/sphere-systems';

/**
 * Gets systems in a sphere radius
 * @param systemName default Arugbal
 * @param distance distance (in LY) from center. Default 50
 */
const getSystemsinSphere = async (
  systemName: string = 'Arugbal',
  distance: number = 50
) => {
  try {
    const response = await axios.get(apiURL, {
      params: {
        systemName,
        radius: distance,
        showPrimaryStar: 1,
        showInformation: 1,
        showCoordinates: 1,
      },
    });

    return response;
  } catch (err) {
    throw err;
  }
};

export { getSystemsinSphere };
