/* eslint-disable camelcase */
const commentModel = require('../model/comment.model')

const commentController = {
  list: (req, res) => {
    commentModel.selectAll()
      .then((result) => {
        res.json(result)
      }).catch((err) => {
        res.json(err)
      })
  },
  insert: (req, res) => {
    const { id, id_user, id_recipe, comments } = req.body
    commentModel.store(id, id_user, id_recipe, comments).then((result) => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
  },
  destroy: (req, res) => {
    const { id } = req.params
    commentModel.destroy(id).then((result) => {
      res.json({
        message: 'success delete data',
        data: result
      })
    }).catch((err) => {
      res.json(err)
    })
  }
}

module.exports = commentController
