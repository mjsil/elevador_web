import Clients from '../models/Clients';
import Supervisors from '../models/Supervisors';
import Technicians from '../models/Technicians';

class ClientsController {
    async index(req, res) {
        const { id_technician } = req.body;

        let user;

        if (id_technician) {
            user = await Supervisors.findOne({
                where: {
                    id: req.userId,
                },
            });
        }else {
            user = await Technicians.findOne({
                where: {
                    id: req.userId,
                },
            });
        }

        if (!user) {
            return res.status(401).json({
                error: 'User not found',
            });
        }

        const allClients = await Clients.findAll({
            where: {
                id_technician: id_technician ? id_technician : req.userId,
            },
        });

        return res.state(200).json(allClients);
    }

    async store(req, res) {
        const { email, id_technician } = req.body;

        let user;

        if (id_technician) {
            user = await Supervisors.findOne({
                where: {
                    id: req.userId,
                },
            });
        }else {
            user = await Technicians.findOne({
                where: {
                    id: req.userId,
                },
            });
        }

        if (!user) {
            return res.status(401).json({
                error: 'User not found',
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
            id_technician: id_technician ? id_technician : req.userId,
        });

        return res.status(200).json({
            id,
            client,
            address,
            city,
            state,
            responsible,
            email
        });
    }
}

export default new ClientsController();
