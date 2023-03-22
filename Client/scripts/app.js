import { indexFighter, createFighter, showFighter, updateFighter, deleteFighter, signUp, signIn, indexSkills,  
		 
} from './api.js'
import {
	//fighter
	onIndexFighterSuccess,
	onFailure,
	onCreateFighterSuccess,
	onShowFighterSuccess,
	onUpdateFighterSuccess,
	onDeleteFighterSuccess,
	onSignUpSuccess,
	onSignInSuccess,
	 
} from './ui.js'

const createFighterForm = document.querySelector('#create-fighter-form')
const indexFighterContainer = document.querySelector('#index-fighter-container')
const showFighterContainer = document.querySelector('#show-fighter-container')
const signUpContainer = document.querySelector('#sign-up-form-container')
const signInContainer = document.querySelector('#sign-in-form-container')
const signupButton = document.querySelector('#show-sign-up-form')
const signinButton = document.querySelector('#hide-sign-up-form')

signupButton.addEventListener('click', function() {
  if (signUpContainer.style.display === 'none') {
    signUpContainer.style.display = 'block';
	signInContainer.style.display = 'none'
  } else {
    signUpContainer.style.display = 'none';
  }
})

signinButton.addEventListener('click', function() {
	if (signInContainer.style.display === 'none') {
		signInContainer.style.display = 'block';
		signUpContainer.style.display = 'none';
	} else {
		signInContainer.style.display = 'none';
	}
  })


//create fighter form
createFighterForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const fighterData = {
			fighter: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				// skills: event.target['skills'].value,
				wins: event.target['wins'].value,
                losses: event.target['losses'].value,
				draws: event.target['draws'].value,

			},
		}

    // console.log(fighterData)
    createFighter(fighterData)
			.then(onCreateFighterSuccess)
			.catch(onFailure)
})

indexFighterContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

	if (!id) return

    showFighter(id)
			.then((res) => res.json())
			.then((res) => {
				onShowFighterSuccess(res.fighter)
			})
			.catch(onFailure)
})


showFighterContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')


	const fighterData = {
		fighter: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			// skills: event.target['skills'].value,
			wins: event.target['wins'].value,
			losses: event.target['losses'].value,
			draws: event.target['draws'].value,
		}
	}
	

	if (!id) return

	updateFighter(fighterData, id)
	// this function (onUpdatefighterSuccess) does not need anything to run. NO params
	.then(onUpdateFighterSuccess)
	.catch(onFailure)
})

showFighterContainer.addEventListener('click', (event) => {
const id = event.target.getAttribute('data-id')

if (!id) return

	deleteFighter(id)
		.then(onDeleteFighterSuccess)
		.catch(onFailure)
})

// User 
signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).then(onSignUpSuccess).catch(onFailure)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		.then(indexFighter)
		.then((res) => res.json())
		.then((res) => onIndexFighterSuccess(res.fighters))
		.then(indexSkills(fighterId))
		.catch(onFailure)
})
				//index fighters
showFighterContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteFighter(id)
		.then(onDeleteFighterSuccess)
		.catch(onFailure)
})
