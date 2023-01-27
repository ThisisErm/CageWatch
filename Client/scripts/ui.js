import { store } from './store.js'


const indexFighterContainer = document.querySelector('#index-fighter-container')
const messageContainer = document.querySelector('#message-container')
const showFighterContainer = document.querySelector('#show-fighter-container')
const indexContainer = document.querySelector('#index-container')


//add auth
const authContainer = document.querySelector('#auth-container')



const homeButton = document.querySelector('.home-button')
const fighterButton = document.querySelector('.fighter-button')

//go home (refresh)
homeButton.addEventListener('click', function(){
    location.reload()
})

//go to create fighters
fighterButton.addEventListener('click', function() {
    document.querySelector('#index-fighter-container').style.display ='none'
    document.querySelector('#create-fighter-form').style.display = 'block'
    document.querySelector('#fighter-title').style.display = 'none'
    document.querySelector('div').style.display = 'none'


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
        <p>${fighter.skill}</p>
        <p>${fighter.wins}</p>
        <p>${fighter.losses}</p>
        <p>${fighter.draws}</p>
        <p>${fighter._id}</p>

        <form data-id="${fighter._id}">
            <input type="text" name="firstName" value="${fighter.firstName}" />
            <input type="text" name="lastName" value="${fighter.lastName}" />
            <input type="text" name="skills" value="${fighter.skill}" />
            <input type="number" name="wins" value="${fighter.wins}" />
            <input type="number" name="losses" value="${fighter.losses}" />
            <input type="number" name="draws" value="${fighter.draws}" />
            <input type="submit" value="Update fighter" />
        </form>

        <button type="button" data-id="${fighter._id}">Delete fighter</button>
    `
    showFighterContainer.appendChild(div)
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
    messageContainer.innerHTML = ''
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexContainer.classList.remove('hide')
}

