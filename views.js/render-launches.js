import { launches } from "../main.js";
import { clock } from "./clock.js";
import { infoListener } from "./render-more-info.js";
import { creatEl } from "./creat.js";

export const renderLauncher = () => {
  const header = creatEl("div", "header");
  const headerImg = creatEl("img", "logo");
  headerImg.src =
    "https://joonto.com/wp-content/uploads/2020/11/b7d71cfa04225c00caa8530df01ea1e6.png";
  header.appendChild(headerImg);
  const headerText = creatEl("h1", "header-text");

  headerText.textContent = "Upcoming Launches";
  header.appendChild(headerText);
  document.body.appendChild(header);

  launches.forEach((launch) => {
    const launchName = launch.name;
    const provider = launch.launch_service_provider.name;
    const status = launch.status.abbrev;
    const pad = launch.pad.name;
    const deadline = launch.net;
    const launchInfo = launch.url;
    const launchTime = deadline.split("T").join(", ").replace("Z", "");
    const img = launch.image;
    //adding the clock
    const timeEl = clock(deadline);
    const countDown = creatEl("div", "countdown");
    countDown.textContent = ` T- ${timeEl.days}:${timeEl.hours}:${timeEl.minutes}:${timeEl.seconds}`;

    //updating the time
    setInterval(function updateClock() {
      const a = clock(deadline);
      countDown.textContent = ` T-   ${a.days}  : ${a.hours} : ${a.minutes} : ${a.seconds}`;

      if (a.timeToLaunch <= 0) {
        clearInterval(updateClock);
      }
    }, 1000);
    //creating Dom elemnents and adding className
    const launchEL = creatEl("div", "launch-card");

    const imgDiv = creatEl("div", "img-div");
    const image = creatEl("img", "launch-img");
    const infoDiv = creatEl("div", "info-div");
    const nameAndStatusDiv = creatEl("div", "name-status");
    const missionName = creatEl("div", "mission-name");
    const statusDiv = creatEl("div", "");
    const statusSpan = creatEl("div", "status-span");
    status === "Go"
      ? (statusDiv.className = "status-green")
      : (statusDiv.className = "status-red");
    const providerName = creatEl("div", "");
    const padName = creatEl("div", "");
    const launchTiming = creatEl("div", "launch-date");
    const moreInfo = creatEl("div", "more-info");

    //adding values
    image.src = img;
    missionName.textContent = launchName;
    padName.textContent = pad;
    providerName.textContent = provider;
    launchTiming.textContent = launchTime;
    //appending

    nameAndStatusDiv.appendChild(missionName);
    nameAndStatusDiv.appendChild(statusDiv);
    launchEL.appendChild(imgDiv);
    imgDiv.appendChild(image);
    launchEL.appendChild(infoDiv);
    infoDiv.appendChild(nameAndStatusDiv);
    statusDiv.appendChild(statusSpan);
    statusSpan.textContent = status;
    infoDiv.appendChild(providerName);
    infoDiv.appendChild(padName);
    infoDiv.appendChild(countDown);
    infoDiv.appendChild(launchTiming);
    // more info div ,adding listener to make the second fetch

    moreInfo.textContent = "More Info";

    moreInfo.setAttribute("data-value", launchInfo);
    moreInfo.addEventListener("click", infoListener);
    infoDiv.appendChild(moreInfo);

    document.body.appendChild(launchEL);
  });
};
