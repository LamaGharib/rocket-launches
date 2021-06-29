import {launches} from '../main.js'
import {clock} from './clock.js';
import {infoListener} from './render-more-info.js'

 export const  renderLauncher = ()=>{
    const header = document.createElement('div');
    header.className = 'header';
    const headerImg = document.createElement('img');
    headerImg.className = 'logo';
    headerImg.src = 'https://joonto.com/wp-content/uploads/2020/11/b7d71cfa04225c00caa8530df01ea1e6.png';
    header.appendChild(headerImg);
    const headerText = document.createElement('h1');
    headerText.className = 'header-text';
    headerText.textContent = 'Upcoming Launches';
    header.appendChild(headerText);
    document.body.appendChild(header);

    launches.forEach(launch =>{
  
        const launchEL = document.createElement('div');
        launchEL.className = 'launch-card';
        const launchName = launch.name;
        const provider = launch.launch_service_provider.name;
        const status = launch.status.abbrev;
        const pad = launch.pad.name;
        const deadline = launch.net ;
        const launchInfo = launch.url;
        const launchTime = deadline.split('T').join(', ').replace('Z','');
        const img = launch.image;
        //adding the clock
         const timeEl = clock(deadline);
          //creating the countdown
        const countDown = document.createElement('div');
        countDown.className = 'countdown';
        countDown.textContent = ` T- ${timeEl.days}:${timeEl.hours}:${timeEl.minutes}:${timeEl.seconds}`;
        
        //updating the time 
        setInterval(function updateClock(){
            const a = clock(deadline)
            countDown.textContent = ` T-   ${a.days}  : ${a.hours} : ${a.minutes} : ${a.seconds}`
           
            if(a.timeToLaunch <= 0){
                clearInterval(updateClock)
            }
           },1000);
          
    
         const imgDiv = document.createElement('div');
         imgDiv.className = 'img-div';
         launchEL.appendChild(imgDiv);
         const image = document.createElement('img');
         image.src = img;
         image.className = 'launch-img';
         imgDiv.appendChild(image);
    
         const infoDiv = document.createElement('div');
         infoDiv.className = 'info-div';
         launchEL.appendChild(infoDiv);
    
         const nameAndStatusDiv = document.createElement('div');
         nameAndStatusDiv.className = 'name-status';
         infoDiv.appendChild(nameAndStatusDiv);
    
         const missionName = document.createElement('div');
         missionName.textContent = launchName;
         missionName.className= 'mission-name';
    
         const statusDiv = document.createElement('div');
         const statusSpan = document.createElement('div');
         statusDiv.appendChild(statusSpan);
         statusSpan.textContent = status;
         statusSpan.className = 'status-span';
         status ==='Go'? statusDiv.className = 'status-green':statusDiv.className = 'status-red';
         nameAndStatusDiv.appendChild(missionName);
         nameAndStatusDiv.appendChild(statusDiv);
         
         const providerName = document.createElement('div');
         providerName.textContent = provider;
         infoDiv.appendChild(providerName);
    
         const padName = document.createElement('div');
         padName.textContent = pad;
         infoDiv.appendChild(padName);
    
         infoDiv.appendChild(countDown);
        const launchTiming =document.createElement('div')
        launchTiming.className  = 'launch-date'
        launchTiming.textContent= launchTime
        infoDiv.appendChild(launchTiming)
       // more info div ,adding listener to make the second fetch
        const moreInfo = document.createElement('div')
        moreInfo.textContent = 'More Info'
        moreInfo.className = 'more-info'
        moreInfo.setAttribute('data-value',launchInfo) 
        moreInfo.addEventListener('click',infoListener);
        infoDiv.appendChild(moreInfo);
    
        
           
        document.body.appendChild(launchEL)
    
        
       
       
       
       
    })};
