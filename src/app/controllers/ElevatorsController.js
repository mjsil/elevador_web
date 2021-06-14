import Elevators from '../models/Elevators';
import Clients from '../models/Clients';
import ElevatorsBrands from '../models/ElevatorsBrands';
import ElevatorsModels from '../models/ElevatorsModels';
import Technicians from '../models/Technicians';

class ElevatorController {
    async index(req, res) {
        const { id_client } = req.params;

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

        const allElevators = await Elevator.findAll({
            where: {
                id_client,
            },
        });

        return res.status(200).json(allElevators);
    }

    async store(req, res) {
        const { id_client, id_model, id_brand } = req.body;

        const clientExits = await Clients.findOne({
            where: {
                id: id_client,
            },
        });

        if (!clientExits) {
            return res.status(401).json({
                error: 'Client not found',
            });
        }

        const brandExits = await ElevatorsBrands.findOne({
            where: {
                id: id_brand,
            },
        });

        const modelExits = await ElevatorsModels.findOne({
            where: {
                id: id_model,
            },
        });

        if (!brandExits || !modelExits) {
            return res.status(401).json({
                error: 'Model or brand not found',
            });
        }

        const {
            id,
            name,
            location,
            capacity,
            stops,
        } = await Elevators.create(req.body);

        return res.status(200).json({
            id,
            name,
            client: clientExits,
            model: modelExits,
            brand: brandExits,
            location,
            capacity,
            stops
        });
    }
}

export default new ElevatorController();
