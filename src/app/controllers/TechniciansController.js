import Technicians from '../models/Technicians';
import Supervisors from '../models/Supervisors';

class TechniciansController {
    async store(req, res) {
        const { email, id_supervisor } = req.body;

        const emailExits = await Technicians.findOne({
            where: {
                email,
            },
        });

        if (emailExits) {
            return res.status(400).json({
                error: 'User already exists',
            });
        }

        const supervisorExits = await Supervisors.findOne({
            where: {
                id: id_supervisor,
            },
        });

        if (!supervisorExits) {
            return res.status(401).json({
                error: 'Suoervisor not found',
            });
        }

        const { id, name } = await Technicians.create(req.body);

        return res.status(200).json({
            id,
            name,
            email,
            supervisor: id_supervisor
        });
    }
}

export default new TechniciansController();
