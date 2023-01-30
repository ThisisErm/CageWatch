import {createSkill, 
		 
} from './api.js'

import { store } from './store.js'


document.querySelector('#fighters').style.display = 'none'


const indexFighterContainer = document.querySelector('#index-fighter-container')
const messageContainer = document.querySelector('#message-container')
const showFighterContainer = document.querySelector('#show-fighter-container')
const createFighterForm = document.querySelector('#create-fighter-form')

//add auth
const authContainer = document.querySelector('#auth-container')


//buttons
const logOut = document.querySelector('.logout-button')
const indexButton = document.querySelector('.index-button')
const createButton = document.querySelector('.create-button')

//go home (refresh)
logOut.addEventListener('click', function(){
    location.reload()

})

//index fighters
indexButton.addEventListener('click', function() {
    indexFighterContainer.style.display ='block'
    createFighterForm.style.display = 'none'
    showFighterContainer.style.display ='none'
    authContainer.style.display= 'none'
    document.querySelector('#fighters').style.display = 'block'
    // document.querySelector('form').style.display = 'none'
})

//create fighter
createButton.addEventListener('click', function() {
    createFighterForm.style.display = 'block'
    indexFighterContainer.style.display ='none'
    showFighterContainer.style.display ='none'
    authContainer.style.display= 'none'
    document.querySelector('#fighter-title').style.display = 'none'

})

//Show individual fighter
export const onIndexFighterSuccess = (fighters) => {
    fighters.forEach(fighter => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${fighter.firstName}  ${fighter.lastName}</h3>
            <button data-id="${fighter._id}" >Show fighter</button>
        `
        indexFighterContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateFighterSuccess = () => {
    messageContainer.innerText = 'You have created a fighter!! :)'
}

export const onShowFighterSuccess = (fighter) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${fighter.firstName}  ${fighter.lastName}</h3>
        <p> Skills: ${fighter.skills.map(skill => skill.title).join(', ')}</p>
        <p> Wins: ${fighter.wins}</p>
        <p> Losses: ${fighter.losses}</p>
        <p> Draws: ${fighter.draws}</p>

        <form data-id="${fighter._id}">
            <input type="text" name="firstName" value="${fighter.firstName}" />
            <input type="text" name="lastName" value="${fighter.lastName}" />
            <input type="number" name="wins" value="${fighter.wins}" />
            <input type="number" name="losses" value="${fighter.losses}" />
            <input type="number" name="draws" value="${fighter.draws}" />
            <input type="submit" value="Update fighter" />
            <input id="edit-skills-button" type="button" value="Edit fighter Skills" />
        </form>
        <button type="button" data-id="${fighter._id}">Delete fighter</button>
    `
    showFighterContainer.appendChild(div)
    indexFighterContainer.style.display ='none'
    showFighterContainer.style.display ='block'


    // editting skills
const skillsButton = document.querySelector('#edit-skills-button')

skillsButton.addEventListener('click', function() {
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <form id="skills-form">
            <input type="text" name="title">
            <input type="submit" value="Add Skill" />
        </form>
    `
    showFighterContainer.appendChild(div)
    indexFighterContainer.style.display ='none'
    showFighterContainer.style.display ='block'
    const skillsForm = document.querySelector('#skills-form')
    skillsForm.addEventListener('submit' , function(event){
        event.preventDefault()

        const skillsData = {
            skill: {
                title: event.target['title'].value,
                fighterId: fighter._id
                },
        }
        
        createSkill(skillsData)
            .then(onCreateSkillSuccess)
            .catch(onFailure)
    })
})
}

export const onCreateSkillSuccess =() => {
    messageContainer.innerText = 'Skill was added successfully :)'
    
}



export const onUpdateFighterSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteFighterSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}

// User
export const onSignUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = `Sign-in successful`
    store.userToken = userToken
    authContainer.classList.add('hidden')
    createButton.style.display = 'block'
    indexButton.style.display = 'block'
    logOut.style.display= 'block'
}

