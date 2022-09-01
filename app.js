const daysDisplay = document.getElementById('days'),
hoursDisplay = document.getElementById('hours'),
minutesDisplay = document.getElementById('minutes'),
secondsDisplay = document.getElementById('seconds')

function getDate(){
    const endDate = new Date('September 31, 2022, 00:00:00').getTime()
    const now = new Date().getTime()

    const diffrence = endDate - now

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let getDay = Math.floor(diffrence / days)
   let getHours = Math.floor((diffrence % days) / hours )
   let getMinutes = Math.floor((diffrence % hours) / minutes)
   let getSeconds = Math.floor((diffrence % minutes) / seconds)

  getHours = getHours < 10 ? '0' + getHours: getHours
  getMinutes =  getMinutes < 10 ? '0' + getMinutes: getMinutes
  getSeconds= getSeconds < 10 ? '0' + getSeconds: getSeconds

   daysDisplay.innerHTML = getDay
   hoursDisplay.innerHTML = getHours
   minutesDisplay.innerHTML = getMinutes
   secondsDisplay.innerHTML = getSeconds
}

setInterval(getDate, 1000)