const User = require('../models/User')

class UserController {

    async listar(request, response) {
        try {

            let users = await User.findAll({
            attributes: ['id', 'firstname', 'surname', 'email']
            })

            return response.status(200).json(users)

        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }
    
    async buscarPorId(request, response) {
        try {

            let id = request.params.id
            let users = await User.findByPk(id, {
            attributes: ['id', 'firstname', 'surname', 'email']
            })

            if (!users) {
                return response.status(404).json({
                    message: "Usuário não existe."
                })
            }

            return response.status(200).json(users)

        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }

    async criar(request, response) {
        try {

            let body = request.body
            const {firstname, surname, email, password} = body

            if (!firstname || !surname || !email || !password) {
                return response.status(400).json({
                    message: "Todos os campos são obrigatórios."
                })
            }

            if (await User.findOne({ where: { email } })) {
                return response.status(400).json({
                    message: "Email já cadastrado."
                })
            }

            await User.create(body)
            return response.status(201).json({
                message: "Usuário criado com sucesso!"
            })

        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }

    async atualizar(request, response) {
        try {

            const id = request.params.id
            const body = request.body
            const {firstname, surname, email, password} = body

            if (!firstname || !surname || !email || !password) {
                return response.status(400).json({
                    message: "Todos os campos são obrigatórios."
                })
            }

            if (await User.findOne({ where: { email } })) {
                return response.status(400).json({
                    message: "Email já cadastrado."
                })
            }
            
            if (!await User.findOne({ where: { id } })) {
                return response.status(404).json({
                    message: "Usuário não existe."
                })
            }

            await User.update(body, { where: { id } })
            return response.status(204).end()
            
        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }

    async deletar(request, response) {
        try {

            const id = request.params.id

            if (!await User.findOne({ where: { id } })) {
                return response.status(404).json({
                    message: "Usuário não existe."
                })
            }
        
            await User.destroy({ where: { id } })
            return response.status(204).end()
            
        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }
}

module.exports = UserController