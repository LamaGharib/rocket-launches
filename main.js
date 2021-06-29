import { fetchData } from "../fetch.js";
import { renderLauncher } from "./views.js/render-launches.js";
export let launches = [];
export const main = async () => {
  const data = await fetchData(
    "https://ll.thespacedevs.com/2.2.0/launch/upcoming"
  );
  const spaceLaunches = data;
  launches = spaceLaunches.results;
  renderLauncher();
};

window.addEventListener("load", main);
