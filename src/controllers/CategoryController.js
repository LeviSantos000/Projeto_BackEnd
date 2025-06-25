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
}