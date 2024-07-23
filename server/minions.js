const express = require('express');
const minionsRouter = express.Router({mergeParams: true});
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db.js');

// params
minionsRouter.param('minionId', (req, res, next, minionId) => {
    if (getFromDatabaseById('minions', minionId)) {
        req.minionId = minionId;
        next();
    } else {
        res.status(404).send();
    }
    
});

// api/minions
// GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
}
)

// POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
}
)

// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(getFromDatabaseById('minions', req.minionId));
}
)

// PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    if (updatedMinion) {
        res.send(updatedMinion);
    } else {
        res.status(400).send();
    }
}
)

// DELETE /api/minions/:minionId to delete a single minion by id.
minionsRouter.delete('/:minionId', (req, res, next) => {
    const deletedMinion = deleteFromDatabasebyId('minions', req.minionId);
    if ( deletedMinion) {
        res.status(204).send();
    } else {
        res.status(500).send();
    }
}
)

module.exports = minionsRouter;