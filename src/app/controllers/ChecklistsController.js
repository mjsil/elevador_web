import Checklists from '../models/Checklists';
import Supervisors from '../models/Supervisors';

class ChecklistsController {
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

        const { id, checklist } = await Checklists.create(req.body);

        return res.status(200).json({
            id,
            checklist,
            supervisor: supervisorExits
        });
    }
}

export default new ChecklistsController();
