import Supervisors from '../models/Supervisors';
import Companies from '../models/Companies';

class SupervisorsController {
    async store(req, res) {
        const { email, id_companie } = req.body;

        const emailExits = await Supervisors.findOne({
            where: {
                email,
            },
        });

        if (emailExits) {
            return res.status(400).json({
                error: 'Supervisor already exists',
            });
        }

        const companieExits = await Companies.findOne({
            where: {
                id: id_companie,
            },
        });

        if (!companieExits) {
            return res.status(401).json({
                error: 'Companie not found',
            });
        }

        const { id, name } = await Supervisors.create(req.body);

        return res.status(200).json({
            id,
            name,
            email,
            companie: companieExits
        });
    }
}

export default new SupervisorsController();
