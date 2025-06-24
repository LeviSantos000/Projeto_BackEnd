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

    async criar(request, response) {
        try {
            let body = request.body
            const {username, surname, email, password} = body

            if (!username || !surname || !email || !password) {
                return response.status(400).json({
                    message: "Todos os campos são obrigatórios!"
                })
            }

            await User.create(body)
            return response.status(201).json({
                message: "Usuário criado com sucesso!"
            })

        } catch (error) {
            return response.status(400).json({
                message: "Dados da requisição incorretos!"
            })
        }
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id
            const body = request.body

            await User.update(body, { where: {id} })
            return response.status(204).json({
                message: "Usuário atualizado com sucesso!"
            })
            
        } catch (error) {
            return response.json({
                message: "Requisição com dados incorretos!"
            })
        }
    }

    async deletar(request, response) {
        const id = request.params.id
        
        await User.destroy({ where: {id} })
        return response.status(204).json({
            message: "Usuário excluído com sucesso!"
        })
    }
}

module.exports = UserController