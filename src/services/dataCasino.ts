import { casinoApiWeb } from "../api/apiCasino";
import { Root } from "../interfaces";
import { EncryptedIdHallManager } from "../sections/register/models";

export const getDataCasino =async ():Promise<Root> => {
        try {
          const data = await casinoApiWeb.get<Root>(`casino/${EncryptedIdHallManager.producction}/v2`);
          return data.data
        } catch (error) {
            throw error;
        }
}