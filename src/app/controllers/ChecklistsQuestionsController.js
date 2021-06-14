import Checklists from '../models/Checklists';
import ChecklistsQuestions from '../models/ChecklistsQuestions';
import Supervisors from '../models/Supervisors';

class ChecklistsQuestionsController {
    async store(req, res) {
        const { id_checklist } = req.body;

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

        const checklistExits = await Checklists.findOne({
            where: {
                id: id_checklist,
            },
        });

        if (!checklistExits) {
            return res.status(401).json({
                error: 'Checklist not found',
            });
        }

        const { id, question } = await ChecklistsQuestions.create(req.body);

        return res.status(200).json({
            id,
            question,
            checklist: checklistExits,
        });
    }
}

export default new ChecklistsQuestionsController();
