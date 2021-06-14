import ElevatorsBrands from '../models/ElevatorsBrands';
import Technicians from '../models/Technicians';

class ElevatorsBrandsController {
    async index(req, res) {
        const technicianExits = await Technicians.findOne({
            where: {
                id: req.userId,
            },
        });

        if (!technicianExits) {
            return res.status(401).json({
                error: 'Technician not found',
            });
        }

        const allElevatorsBrands = await ElevatorsBrands.findAll();

        return res.json(allElevatorsBrands);
    }

    async store(req, res) {
        const { brand } = req.body;

        const technicianExits = await Technicians.findOne({
            where: {
                id: req.userId,
            },
        });

        if (!technicianExits) {
            return res.status(401).json({
                error: 'Technician not found',
            });
        }

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
