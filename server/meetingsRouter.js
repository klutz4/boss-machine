const express = require('express');
const meetingsRouter = express.Router({mergeParams: true});
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('./db.js');


// /api/meetings
// GET /api/meetings to get an array of all meetings.
meetingsRouter.get('/api/meetings', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
}
)

// POST /api/meetings to create a new meeting and save it to the database.
meetingsRouter.post('/api/meetings', (req, res, next) => {
    
})


// DELETE /api/meetings to delete all meetings from the database.
meetingsRouter.delete('/api/meetings', (req, res, next) => {
    res.status(204).send(deleteAllFromDatabase('meetings'));
})

module.exports = meetingsRouter;