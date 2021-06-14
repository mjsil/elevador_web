import Clients from '../models/Clients';
import Technicians from '../models/Technicians';

class ClientsController {
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

        const allClients = await Clients.findAll({
            where: {
                id_technician: req.userId,
            },
        });

        return res.state(200).json(allClients);
    }

    async store(req, res) {
        const { email } = req.body;

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

        const clientExits = await Clients.findOne({
            where: {
                email,
            },
        });

        if (clientExits) {
            return res.status(400).json({
                error: 'Client already exists',
            });
        }

        const {
            id,
            client,
            address,
            city,
            state,
            responsible,
        } = await Client.create({
            ...req.body,
            id_technician: req.userId,
        });

        return res.status(200).json({
            id,
            client,
            address,
            city,
            state,
            responsible,
            email,
            technician: technicianExits
        });
    }
}

export default new ClientsController();
