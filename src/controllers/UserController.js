const User = require('../models/User')

class UserController {

    async listar(request, response) {
        let users = await User.findAll({
            attributes: ['id', 'firstname', 'surname', 'email']
        })

        return response.status(200).json(users)
    }
    
    async buscarPorId(request, response) {
        try {

            let id = request.params.id
            let users = await User.findByPk(id, {
            attributes: ['id', 'firstname', 'surname', 'email']
            })

            return response.status(200).json(users)

        } catch (error) {
            return response.status(404).json("Usuário não existe")
        }
    }
}

module.exports = UserController