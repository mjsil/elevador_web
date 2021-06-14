import ChecklistsQuestions from '../models/ChecklistsQuestions';
import ChecklistsNotes from '../models/ChecklistsNotes';
import Technicians from '../models/Technicians';

class ChecklistsNotesController {
    async store(req, res) {
        const { id_question } = req.body;

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

        const questionExits = await ChecklistsQuestions.findOne({
            where: {
                id: id_question,
            },
        });

        if (!questionExits) {
            return res.status(401).json({
                error: 'Question not found',
            });
        }

        const { id, note } = await ChecklistsNotes.create(req.body);

        return res.status(200).json({
            id,
            note,
            question: questionExits,
        });
    }
}

export default new ChecklistsNotesController();
