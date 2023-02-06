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

// Same notes here as the indentation notes I left over in the HTML file. We need to make sure we format our files to look clean and easy to read. 
// Skills
export const indexSkills = (fighterId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills`)
    }
    
    export const createSkill = (data) => {
    return fetch(`http://localhost:8000/skills`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    }
    
    export const showSkill = (fighterId, skillId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills/${skillId}`)
    }
    
    export const updateSkill = (data, fighterId, skillId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills/${skillId}`, {
    method: 'PATCH',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    }
    
    export const deleteSkill = (fighterId, skillId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills/${skillId}`, {
    method: 'DELETE'
    })
    }
