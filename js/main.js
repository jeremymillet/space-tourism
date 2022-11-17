/*recuperation des img background*/
const moon = document.getElementById('moon')
const mars = document.getElementById('mars')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')
const home = document.getElementById('home')
const commander = document.getElementById('commander')
const missionSpecialist = document.getElementById('mission-specialist')
const pilot = document.getElementById('pilot')
const flightEngineer = document.getElementById('flight-engineer')
const spaceport = document.getElementById('spaceport')
const launchVehicle = document.getElementById('launch-vehicle')
const spaceCapsule = document.getElementById('space-capsule')
const allPages = [moon,mars,europa,titan,home,commander,missionSpecialist,pilot,flightEngineer,spaceport,launchVehicle,spaceCapsule]

let currentPage = ''

function handlePage(pageClicked) {

    const elementClicked = document.getElementById(pageClicked)

    if (elementClicked.style.display === 'flex' && currentPage !== elementClicked.id) {
        elementClicked.style.display = 'none'
    } else {
        elementClicked.style.display = 'flex'
        currentPage = elementClicked.id
        // désactive tous les autres
        allPages.forEach(page => {
            if (page.id !== elementClicked.id) page.style.display = 'none'
        })
    }
}