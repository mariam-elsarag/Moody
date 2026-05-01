import { API, apiKey } from "./api";

export async function getLandingHeroData() {
  try {
    const response = await fetch(`${apiKey}${API.landing.hero}`);
    const data = await response.json();
    console.log(data);
    return data?.at(0);
  } catch (err) {
    console.log("error", err);
  }
}
