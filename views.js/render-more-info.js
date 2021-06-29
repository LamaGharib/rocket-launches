import { fetchData } from "../fetch.js";
import { main } from "../main.js";
import { creatEl } from "./creat.js";
import { addMap } from "./map.js";
export const infoListener = async (e) => {
  if (e == null) {
    return;
  }

  const secondFetch = e.target.getAttribute("data-value");
  document.body.innerHTML = "";
  const f = await fetchData(secondFetch);
  const long = f.pad.longitude;
  const lat = f.pad.latitude;
  const moreInfoDiv = creatEl("div", "more-info-div");

  const back = creatEl("div", "");
  back.textContent = "< back";
  back.addEventListener("click", async () => {
    document.body.innerHTML = "";
    await main();
  });
  moreInfoDiv.appendChild(back);
  //creating the elements and adding className
  const missionNameH2 = creatEl("h2", "");
  const missionCard = creatEl("div", "mission-card");
  const patchImgDiv = creatEl("div", "patch-img-div");
  const patchImg = creatEl("img", "patch-img");
  const descriptionEl = creatEl("div", "mission-description");
  const missionTextDiv = creatEl("div", "");
  const rocketH = creatEl("h2", "");
  const rocketCard = creatEl("div", "rocket-card");
  const logoImgDiv = creatEl("div", "logo-img-div");
  const rocketLogo = creatEl("img", "rocket-logo");
  const rocketInfo = creatEl("div", "rocket-info");
  const rocketInfoText = creatEl("div", "rocket-infoText");
  const wikiInfo = creatEl("a", "");
  const mapDiv = creatEl("div", "");
  mapDiv.id = "map";

  //adding the values

  missionNameH2.textContent = f.mission.name;
  f.mission_patches.length >= 1
    ? (patchImg.src = f.mission_patches[0].image_url)
    : (patchImg.src =
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Picture_Not_Yet_Available.png");
  missionTextDiv.textContent = f.mission.description;
  rocketH.textContent = f.rocket.configuration.name;
  rocketLogo.src = f.rocket.configuration.manufacturer.logo_url;
  rocketInfoText.textContent = f.rocket.configuration.description;
  wikiInfo.href = f.rocket.configuration.manufacturer.wiki_url;
  wikiInfo.textContent = "wikipedia";
  wikiInfo.setAttribute("target", "blank");

  //appending the dives
  moreInfoDiv.appendChild(missionNameH2);
  document.body.appendChild(moreInfoDiv);
  patchImgDiv.appendChild(patchImg);
  missionCard.appendChild(patchImgDiv);
  descriptionEl.appendChild(missionTextDiv);
  missionCard.appendChild(descriptionEl);
  moreInfoDiv.appendChild(missionCard);
  moreInfoDiv.appendChild(rocketH);
  logoImgDiv.appendChild(rocketLogo);
  rocketCard.appendChild(logoImgDiv);
  rocketInfo.appendChild(rocketInfoText);
  rocketCard.appendChild(rocketInfo);
  rocketInfo.appendChild(wikiInfo);
  moreInfoDiv.appendChild(rocketCard);
  moreInfoDiv.appendChild(mapDiv);

  //adding the map

  addMap(long, lat);
};
