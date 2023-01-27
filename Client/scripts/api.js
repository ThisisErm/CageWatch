import { store } from './store.js'

// User
export const signUp = (data) => {
	return fetch(`http://localhost:8000/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8000/sign-in`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}


//fighter
export const indexFighter = () => {
    return fetch(`http://localhost:8000/fighters`)
}

export const createFighter = (data) => {
    return fetch(`http://localhost:8000/fighters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showFighter = (id) => {
    return fetch(`http://localhost:8000/fighters/${id}`)
}

export const updateFighter = (data, id) => {
    return fetch(`http://localhost:8000/fighters/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteFighter = (id) => {
    return fetch(`http://localhost:8000/fighters/${id}`, {
        method: 'DELETE'
    })
    
}


