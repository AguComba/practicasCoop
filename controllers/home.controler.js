const { Person } = require('../schemas/Person.schema');

const testPerson = [{
    id: 1,
    nombre: 'Juan',
    edad: 20,
}, {
    id: 2,
    nombre: 'Pedro',
    edad: 25,
}]

const home = (req, res) => {
    res.json({
        message: 'Hello World',
    });
};

const test = (req, res) => {
    const { id } = req.params;
    try {
        if(testPerson.map((person) => person.id).includes(parseInt(id))){
            const personReturn = testPerson.filter((person) => person.id === parseInt(id));
            return res.json({
                message: 'Person found',
                person: personReturn,
            });
        }else{
            throw new Error('Person not found');
        }
    } catch (error) {
        return res.status(404).json({
            error: error.message,
        });
    }
};

const postTest = (req, res) => {
    const { name, edad } = req.body;
    const person = {name, edad}
    try {
        Person.parse(person);
        res.status(200).json({
            message: 'Person created',
            person,
        });
    } catch (error) {
        res.status(400).json({
            error: error.issues.map((issue) => issue.message),
        });
    }
};
module.exports = { home, test, postTest };
