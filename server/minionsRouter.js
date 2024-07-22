const express = require('express');
const minionsRouter = express.Router({mergeParams: true});
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('./db.js');


// api/minions
// GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions);
}
)

// POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {
    const newMinion = {
        name: req.query.name,
        title: req.query.title,
        salary: req.query.salary,
        weaknesses: req.query.weaknesses
    }

    res.send(addToDatabase('minions', newMinion));
}
)

// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get('/api/minions/:minionId', (req, res, next) => {
    res.send(getFromDatabaseById('minions', req.params.minionId));
}
)

// PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put('/api/minions/:minionId', (req, res, next) => {
    
}
)

// DELETE /api/minions/:minionId to delete a single minion by id.
minionsRouter.delete('/api/minions/:minionId', (req, res, next) => {
    
}
)

module.exports = minionsRouter;