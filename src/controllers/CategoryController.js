const Category = require('../models/Category')

class CategoryController {
    async listar(request, response) {
        try {

            const limit = parseInt(request.query.limit) || 12
            const page = parseInt(request.query.limit) || 1
            const fields = request.query.fields ? request.query.fields.split(',') : ['id', 'name', 'slug', 'use_in_menu']
            const useInMenu = request.query.use_in_menu

            let findOptions = {
                where: {},
                attributes: fields
            };

            if (useInMenu !== undefined) {
                const isUseInMenuBoolean = useInMenu.toLowerCase() === 'true';
                findOptions.where.use_in_menu = isUseInMenuBoolean;
            }

            const totalCategories = await Category.count( { where: findOptions.where })

            if (limit !== -1) {
                findOptions.limit = limit;
                findOptions.offset = (page - 1) * limit;
            } else {
                delete findOptions.limit;
                delete findOptions.offset;
            }

            const categories = await Category.findAll(findOptions)
            return response.status(200).json({
                data: categories,
                total: totalCategories,
                limit: limit,
                page: page
            })
            
        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }

    async buscarPorId(request, response) {
        try {

            const id = request.params.id
            const category = await Category.findByPk(id)

            if (!category) {
                return response.status(404).json({
                    message: "Categoria não existe."
                })
            }

            return response.status(200).json(category)
            
        } catch (error) {
            console.error(error)
            return response.status(500).json({
                message: "Erro interno no servidor."
            })
        }
    }

    async criar(request, response) {
        try {

            const {name, slug, use_in_menu} = request.body

            if (!name || !slug || use_in_menu === undefined) {
                return response.status(400).json({
                    message: "Todos os campos são obrigatórios."
                })
            }

            if (typeof use_in_menu !== 'boolean') {
                 return response.status(400).json({
                    message: "O campo 'use_in_menu' deve ser um valor booleano (true ou false)."
                });
            }

            await Category.create({name, slug, use_in_menu})
            return response.status(201).json({
                message: "Categoria cadastrada com sucesso!"
            })
            
        } catch (error) {
           console.error(error)
           return response.status(500).json({
            message: "Erro interno no servidor."
           })
        }
    }
}

module.exports = CategoryController