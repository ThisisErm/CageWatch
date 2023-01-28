import { store } from './store.js'

document.querySelector('#fighters').style.display = 'none'


const indexFighterContainer = document.querySelector('#index-fighter-container')
const messageContainer = document.querySelector('#message-container')
const showFighterContainer = document.querySelector('#show-fighter-container')
const createFighterForm = document.querySelector('#create-fighter-form')
//add auth
const authContainer = document.querySelector('#auth-container')



const homeButton = document.querySelector('.home-button')
const fighterButton = document.querySelector('.fighter-button')
const createButton = document.querySelector('.create-button')

//go home (refresh)
homeButton.addEventListener('click', function(){
    location.reload()

})

//go to see fighters
fighterButton.addEventListener('click', function() {
    indexFighterContainer.style.display ='block'
    document.querySelector('#create-fighter-form').style.display = 'none'
    showFighterContainer.style.display ='none'
    authContainer.style.display= 'none'
    document.querySelector('#fighters').style.display = 'block'
    // document.querySelector('form').style.display = 'none'
})

//go to create fighter
createButton.addEventListener('click', function() {
    document.querySelector('#create-fighter-form').style.display = 'block'
    indexFighterContainer.style.display ='none'
    authContainer.style.display= 'none'
    document.querySelector('#fighter-title').style.display = 'none'

})

//Showing fighter actions
export const onIndexFighterSuccess = (fighters) => {
    fighters.forEach(fighter => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${fighter.firstName}  ${fighter.lastName}</h3>
            <button data-id="${fighter._id}" >Show fighter</button>
        `
        indexFighterContainer.appendChild(div)
        showFighterContainer.style.display ='none'
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
        <p>${fighter.skills}</p>
        <p>${fighter.wins}</p>
        <p>${fighter.losses}</p>
        <p>${fighter.draws}</p>
        <p>${fighter._id}</p>

        <form data-id="${fighter._id}">
            <input type="text" name="firstName" value="${fighter.firstName}" />
            <input type="text" name="lastName" value="${fighter.lastName}" />
            <input type="text" name="skills" value="${fighter.skills}" />
            <input type="number" name="wins" value="${fighter.wins}" />
            <input type="number" name="losses" value="${fighter.losses}" />
            <input type="number" name="draws" value="${fighter.draws}" />
            <input type="submit" value="Update fighter" />
        </form>

        <button type="button" data-id="${fighter._id}">Delete fighter</button>
    `
    showFighterContainer.appendChild(div)
    document.querySelector('#index-fighter-container').style.display ='none'
    showFighterContainer.style.display ='block'
    document.querySelector('div').style.display = 'none'


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
    document.querySelector('.create-button').style.display = 'block'
    document.querySelector('.fighter-button').style.display = 'block'
}

