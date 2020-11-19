import axios from 'axios';

const apiURL = 'https://www.edsm.net/api-system-v1/bodies';

/**
 * Gets celestial bodies within a system
 * @param systemName default Arugbal
 */
const getBodiesinSystem = async (systemName: string = 'Arugbal') => {
  try {
    const response = await axios.get(apiURL, {
      params: {
        systemName,
      },
    });

    return response;
  } catch (err) {
    throw err;
  }
};

export { getBodiesinSystem };
