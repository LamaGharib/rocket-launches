import { fetchData } from '../fetch.js';
import { main } from '../main.js';

 export const  infoListener =  async (e)=>{
    if(e === undefined){return}
     
    const secondFetch = e.target.getAttribute('data-value')
    document.body.innerHTML = ''
    const f = await fetchData(secondFetch)
    const moreInfoDiv = document.createElement('div')
   moreInfoDiv.className = 'more-info-div'
   
  const back = document.createElement('div')
  back.textContent = '< back'
  back.addEventListener('click',async()=>{
     document.body.innerHTML = '';
     await main()
    
  })
  moreInfoDiv.appendChild(back)
  const missionNameH2 = document.createElement('h2')
  missionNameH2.textContent = f.mission.name
  moreInfoDiv.appendChild(missionNameH2)
 
   document.body.appendChild(moreInfoDiv)
   const missionCard = document.createElement('div')
   missionCard.className = 'mission-card' 
   const patchImgDiv = document.createElement('div')
   patchImgDiv.className = 'patch-img-div'
   const patchImg = document.createElement('img')
   f.mission_patches.length >= 1 ? patchImg.src = f.mission_patches[0].image_url : patchImg.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Picture_Not_Yet_Available.png';
   patchImg.className = 'patch-img'
   patchImgDiv.appendChild(patchImg)
   missionCard.appendChild(patchImgDiv)

    const descriptionEl = document.createElement('div')
    const missionTextDiv = document.createElement('div')
    missionTextDiv.textContent = f.mission.description
    descriptionEl.appendChild(missionTextDiv)
    descriptionEl.className = 'mission-description'
    missionCard.appendChild(descriptionEl)
    moreInfoDiv.appendChild(missionCard)
    
    const rocketH = document.createElement('h2')
    rocketH.textContent = f.rocket.configuration.name
    moreInfoDiv.appendChild(rocketH)

    const rocketCard = document.createElement('div')
    rocketCard.className = 'rocket-card'
    const logoImgDiv = document.createElement('div')
    logoImgDiv.className = 'logo-img-div'
    const rocketLogo = document.createElement('img')
    rocketLogo.src = f.rocket.configuration.manufacturer.logo_url
    rocketLogo.className = 'rocket-logo'
    logoImgDiv.appendChild(rocketLogo)
    rocketCard.appendChild(logoImgDiv)

 

    const rocketInfo = document.createElement('div')  
    const rocketInfoText = document.createElement('div')
    rocketInfoText.className = 'rocket-infoText'
    rocketInfoText.textContent = f.rocket.configuration.description
    rocketInfo.appendChild(rocketInfoText)
    rocketInfo.className = 'rocket-info'
    rocketCard.appendChild(rocketInfo)
   
    const wikiInfo = document.createElement('a')
    wikiInfo.href = f.rocket.configuration.manufacturer.wiki_url
    wikiInfo.textContent = 'wikipedia'
    wikiInfo.setAttribute('target','blank')
    rocketInfo.appendChild(wikiInfo)
    

    moreInfoDiv.appendChild(rocketCard)

  const mapDiv = document.createElement('div')
  mapDiv.id = 'map'
  moreInfoDiv.appendChild(mapDiv)

  const addMap = () =>{
   mapboxgl.accessToken = 'pk.eyJ1IjoibGFtYTMiLCJhIjoiY2txZ3MzM3J6MTI0bTJ1c2NkOXAwMXpnZiJ9.5kg3kLMUeLH24ikkpuJFlw';
   
   const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/streets-v11',
   center:[f.pad.longitude,f.pad.latitude],
    zoom:14
 });

   const marker = new mapboxgl.Marker().setLngLat([f.pad.longitude,f.pad.latitude]);
   marker.addTo(map)
};

  addMap();


  }

