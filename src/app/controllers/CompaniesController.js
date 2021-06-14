import Companies from '../models/Companies';
import Supervisors from '../models/Supervisors';

class CompaniesController {
    async show(req, res) {
        const { id_companie } = req.body;

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

        const companieExits = await Companies.findOne({
            where: {
                id: id_companie,
            }
        });

        if (!companieExits) {
            return res.status(401).json({
                error: 'Companie not found',
            });
        }

        return res.status(200).json(companieExits);
    }

    async store(req, res) {
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

        const companieExits = await Companies.findOne({
            where: {
                companie: req.body.companie
            }
        });

        if (companieExits) {
            return res.status(400).json({
                error: 'Companie already exists',
            });
        }

        const { id, companie } = await Companies.create(req.body);

        return res.status(200).json({
            id,
            companie,
        });
    }
}

export default new CompaniesController();
