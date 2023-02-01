# MMA-Fighter-Tracker-CRUD
MMA Fighter Tracker APP: A simple crud app to track MMA fighters' and their professional records.
Users can add new fighters, as well access, edit, and delete existing fighters. USers also have the option to add skills to existing fighters to match their professional record. 
_________________________________________________________________
## Technologies used:
* Javascript
* HTML
* CSS
* MongoDB
_________________________________________________________________
## Screenshots:
This is what the app looks like:

![alt screenshot1](1.PNG "screenshot1")
![alt screenshot1](2.PNG "screenshot1")
![alt screenshot1](3.PNG "screenshot1")
![alt screenshot1](4.PNG "screenshot1")
![alt screenshot1](5.PNG "screenshot1")

_________________________________________________________________
## Getting Started

* create a user name and password. Then use it to log in. Once logged in, you will be able to access and modify fighter information.

_________________________________________________________________
## Next Steps
* As I want the app to connect to a fighter database via API.
* As a user, I want to query fighters based on specific categories (e.g. win record, knockout, submissions, team, country etc.).
* As a user, I want to access fight footage of specific fighters.
* As a user, I want to change the app's UI style from the settings.
_________________________________________________________________
## End Points

Method	Endpoint	Description
GET	/fighters/:id/skills	Retrieve a list of skills for a fighter
GET	/fighters/:id/skills/:id	Retrieve a single skill for a fighter by ID
POST	/fighters/:id/skills	Add a new skill for a fighter
PATCH	/fighters/:id/skills/:id	Update a skill for a fighter by ID
DELETE	/fighters/:id/skills/:id	Delete a skill for a fighter by ID
