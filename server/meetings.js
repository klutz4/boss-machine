const express = require('express');
const meetingsRouter = express.Router({mergeParams: true});
const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db.js');


// /api/meetings
// GET /api/meetings to get an array of all meetings.
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
}
)

// POST /api/meetings to create a new meeting and save it to the database.
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
    
})


// DELETE /api/meetings to delete all meetings from the database.
meetingsRouter.delete('/', (req, res, next) => {
    res.status(204).send(deleteAllFromDatabase('meetings'));
})

module.exports = meetingsRouter;