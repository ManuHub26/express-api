const Data = require('../models/dataModel');
const getDatas = (req, res) => {
    Data.find()
        .then()
        .catch()
}

// const addDatas = (req, res) => {
//     const data = new Data(req.body)
//     console.log(req);
//     data.save()
//         .then(() => res.status(201).json({message: 'Data added'}))
//         .catch(error => res.status(400).json({error}));
// }
// const deleteData = (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = datas.findIndex(data => data.id === id)
//     if(index !== 1) {
//         datas.splice(index, 1)
//         res.send({msg: 'Data deleted', datas})
//     } else {
//         res.status(404).send({error: 'Data not found'})
//     }
// }
//
// const updateData = (req, res) => {
//     const id = parseInt(req.params.id)
//     const index = datas.findIndex(data => data.id === id)
//     if(index !== 1) {
//       const updatedData = {
//           id,
//           name: req.body.name,
//           description: req.body.description
//       }
//       datas[index] = updatedData;
//       res.send({msg: 'Data update', datas})
//     } else {
//         res.status(404).send({error: 'Data not found'})
//     }
// }
//
module.exports = {getDatas};