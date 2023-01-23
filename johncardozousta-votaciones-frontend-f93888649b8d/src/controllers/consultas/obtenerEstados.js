import { tokenStore } from "../../stores/tokens.js";
import axios from "axios";

export default async (idVotacion) => {
  try {
    let token = tokenStore();
    let res = await axios.get(
      `http://localhost:3001/votacion/${idVotacion}/posibles-estados`,
      {
        headers: {
          authorization: `Bearer ${token.token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    alert(error);
  }
};
