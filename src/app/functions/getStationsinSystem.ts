import axios from 'axios';

const apiURL = 'https://www.edsm.net/api-system-v1/stations';

/**
 * Gets stations within a system
 * @param systemName default Arugbal
 */
const getStationsinSystem = async (systemName: string = 'Arugbal') => {
  try {
    const response = await axios.get(apiURL, {
      params: {
        systemName,
      },
    });

    return response.data;
  } catch (err) {
    throw err;
  }
};

export { getStationsinSystem };
