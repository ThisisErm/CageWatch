const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skillSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
	},
	{
		timestamps: true,
	}
)

module.exports = skillSchema