import Technicians from '../models/Technicians';
import Supervisors from '../models/Supervisors';

class TechniciansController {
    async store(req, res) {
        const { email } = req.body;

        const supervisorExits = await Supervisors.findOne({
            where: {
                id: req.userId,
            },
        });

        if (!supervisorExits) {
            return res.status(401).json({
                error: 'Supervisor not found',
            });
        }

        const technicianExits = await Technicians.findOne({
            where: {
                email,
            },
        });

        if (technicianExits) {
            return res.status(400).json({
                error: 'User already exists',
            });
        }

        const { id, name } = await Technicians.create(req.body);

        return res.status(200).json({
            id,
            name,
            email,
            supervisor: supervisorExits
        });
    }
}

export default new TechniciansController();
