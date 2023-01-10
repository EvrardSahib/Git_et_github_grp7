
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000)

const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textSeconds = document.getElementById('text-seconds')

const clockText = () =>{
    let date = new Date()
//date.getHours() permet de récupérer l'heure du système
    let hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds()
//if(hh<10){hh = '0${hh}'} signifie si hh est inférieure à 10 on ajoute 0 avant la variable de minute
    if(hh < 10){hh = `0${hh}`}
    if(mm < 10){mm = `0${mm}`}
    if(ss < 10){ss = `0${ss}`}
    textHour.innerHTML = `${hh}:`
    
    textMinutes.innerHTML = mm
    
    textSeconds.innerHTML = ss
    
}
//setInterval() permet de définir un intervale de temps d'éxécution régulière à une fonction
setInterval(clockText, 1000)