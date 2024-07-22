const express = require('express');
const ideasRouter = express.Router({mergeParams: true});
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('./db.js');

// /api/ideas
// GET /api/ideas to get an array of all ideas.
ideasRouter.get('/api/ideas', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
}
)

// POST /api/ideas to create a new idea and save it to the database.


// GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get('/api/ideas/:ideaId', (req, res, next) => {
    res.send(getFromDatabaseById('ideas', req.params.minionId));
}
)


// PUT /api/ideas/:ideaId to update a single idea by id.


// DELETE /api/ideas/:ideaId to delete a single idea by id.

module.exports = ideasRouter;