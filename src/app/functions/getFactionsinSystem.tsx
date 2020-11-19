import axios from 'axios';

const apiURL = 'https://www.edsm.net/api-system-v1/factions';

/**
 * Gets systems in a sphere radius
 * @param systemName default Arugbal
 */
const getFactionsinSystem = async (systemName: string = 'Arugbal') => {
    try {
        const response = await axios.get(apiURL, {
            params: {
                systemName,
            }
        })

        return response;
    }
    catch (err) {
        throw err;
    }
}

export { getFactionsinSystem };
