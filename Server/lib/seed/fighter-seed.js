const express = require('express')

const router = express.Router()

const Fighter = require('../../models/fighter')

const startingfighters = [
	{
		firstName: 'Anderson',
		lastName: 'Silva',
		skills: ['Muay-Thai'],
		wins: 9,
		losses: 1,
		draws: 0,
	},
	{
	firstName: 'George',
		lastName: 'St.Pierre',
		skills: ['BJJ', 'Kickboxing', 'wrestling'],
		wins: 10,
		losses: 1,
		draws: 0,
	},
	{
		firstName: 'Nate',
		lastName: 'Diaz',
		skills: ['Boxing', 'BJJ'],
		wins: 8,
		losses: 1,
		draws: 0,
	},
]

// /seed/fighters
router.get('/fighters', (req, res, next) => {
    Fighter.deleteMany({})
        .then(() => {
            Fighter.create(startingfighters)
                .then(fighters => {
                    res.status(200).json({ fighters: fighters })
                })
        })
        .catch(next)
})

module.exports = router