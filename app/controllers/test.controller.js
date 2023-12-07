const test = require('../models/test.model')

exports.create = async(req, res) => {
    const test = await test.create(req.body)

    if(test){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const test = await test.read();
    res.status(200).send(test)
}

exports.update = async(req, res) => {
    const test = await test.update(req.params.id, req.body)

    if(test){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const test = await test.delete(req.params.id, req.body);

    if (test) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


exports.readById = async(req, res) => {
    const test = await test.readById(req.params.id)
    res.status(200).send(test)
}