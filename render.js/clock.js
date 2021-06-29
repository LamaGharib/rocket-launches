export  const clock = (deadline)=>{
    const launchTime = deadline
    const date = new Date()
    let timeToLaunch = Date.parse(launchTime) - Date.parse(date)
    let seconds = Math.floor((timeToLaunch/1000)%60);
    let minutes = Math.floor((timeToLaunch/1000/60)%60);
    let hours = Math.floor((timeToLaunch/(1000*60*60))%24);
   let days = Math.floor(timeToLaunch/(1000*60*60*24));
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
  return {timeToLaunch,
    days
    ,hours 
    ,minutes
    ,seconds}
   };