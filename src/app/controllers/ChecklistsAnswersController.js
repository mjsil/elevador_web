import ChecklistsQuestions from '../models/ChecklistsQuestions';
import ChecklistsAnswers from '../models/ChecklistsAnswers';
import Technicians from '../models/Technicians';

class ChecklistsAnswersController {
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

        const { id, answer } = await ChecklistsAnswers.create(req.body);

        return res.status(200).json({
            id,
            answer,
            question: questionExits,
        });
    }
}

export default new ChecklistsAnswersController();
