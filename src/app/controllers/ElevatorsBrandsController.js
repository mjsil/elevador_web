import ElevatorsBrands from '../models/ElevatorsBrands';

class ElevatorsBrandsController {
    async index(req, res) {
        const allElevatorsBrands = await ElevatorsBrands.findAll();

        return res.json(allElevatorsBrands);
    }

    async store(req, res) {
        const { brand } = req.body;

        const brandExits = await ElevatorsBrands.findOne({
            where: {
                brand,
            },
        });

        if (brandExits) {
            return res.status(400).json({
                error: 'Brand already exists',
            });
        }

        const { id } = await ElevatorsBrands.create(req.body);

        return res.json({
            id,
            brand,
        });
    }
}

export default new ElevatorsBrandsController();
