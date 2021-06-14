import Checklists from '../models/Checklists';
import Elevators from '../models/Elevators';
import ElevatorsChecklists from '../models/ElevatorsChecklists';

class ElevatorsChecklistsController {
    async show(req, res) {
        const { id_elevator, id_checklist } = req.body;

        const elevatorExits = await Elevators.findOne({
            where: {
                id: id_elevator,
            },
        });

        if (!elevatorExits) {
            return res.status(401).json({
                error: 'Elevator not found',
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

        const checklists = await ElevatorsChecklists.findOne({
            where: {
                id_elevator,
                id_checklist
            },
        });

        return res.status(200).json(checklists);
    }

    async index(req, res) {
        const { id_elevator } = req.body;

        const elevatorExits = await Elevators.findOne({
            where: {
                id: id_elevator,
            },
        });

        if (!elevatorExits) {
            return res.status(401).json({
                error: 'Elevator not found',
            });
        }

        const checklists = await ElevatorsChecklists.findAll({
            where: {
                id_elevator,
            },
        });

        return res.status(200).json(checklists);
    }

    async store(req, res) {
        const { id_elevator, id_checklist } = req.body;

        const elevatorExits = await Elevators.findOne({
            where: {
                id: id_elevator,
            },
        });

        if (!elevatorExits) {
            return res.status(401).json({
                error: 'Elevator not found',
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

        const { id } = await ElevatorsChecklists.create(req.body);

        return res.status(200).json({
            id,
            elevator: elevatorExits,
            checklist: checklistExits
        });
    }
}

export default new ElevatorsChecklistsController();
