const express = require('express');
const ideasRouter = express.Router({mergeParams: true});
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db.js');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

// params
ideasRouter.param('ideaId', (req, res, next, ideaId) => {
    if (getFromDatabaseById('ideas', ideaId)) {
        req.ideaId = ideaId;
        next();
    } else {
        res.status(404).send();
    }
});

// /api/ideas
// GET /api/ideas to get an array of all ideas.
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
}
)

// POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
}
)

// GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(getFromDatabaseById('ideas', req.ideaId));
}
)


// PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    if (updatedIdea) {
        res.send(updatedIdea);
    } else {
        res.status(400).send();
    }
}
)

// DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.ideaId);
    if ( deletedIdea) {
        res.status(204).send();
    } else {
        res.status(500).send();
    }
}
)

module.exports = ideasRouter;