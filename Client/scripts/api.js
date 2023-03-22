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
    return fetch(`http://localhost:8000/fighters`, {
        headers: {
            'Authorization': `Bearer ${store.userToken}`,
        },
    })
}


export const createFighter = (data) => {
    return fetch(`http://localhost:8000/fighters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const showFighter = (id) => {
    return fetch(`http://localhost:8000/fighters/${id}`, {
        headers: {
            Authorization: `Bearer ${store.userToken}`,
        }
    })
}

export const updateFighter = (data, id) => {
    return fetch(`http://localhost:8000/fighters/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const deleteFighter = (id) => {
    return fetch(`http://localhost:8000/fighters/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${store.userToken}`,
        },
    })
    
}
// Skills
export const indexSkills = (fighterId) => {
    console.log('fighterId:', fighterId);
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills`, {
        headers: {
            Authorization: `Bearer ${store.userToken}`,
        },
    })
}


    
    export const createSkill = (data) => {
    return fetch(`http://localhost:8000/skills`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${store.userToken}`,
    },
    body: JSON.stringify(data)
    })
    }
    
    export const showSkill = (fighterId, skillId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills/${skillId}`), {
        headers: {
            Authorization: `Bearer ${store.userToken}`,
        },
    }
}
    
    export const updateSkill = (data, fighterId, skillId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills/${skillId}`, {
    method: 'PATCH',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${store.userToken}`,
    },
    body: JSON.stringify(data)
    })
    }
    
    export const deleteSkill = (fighterId, skillId) => {
    return fetch(`http://localhost:8000/fighters/${fighterId}/skills/${skillId}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}



