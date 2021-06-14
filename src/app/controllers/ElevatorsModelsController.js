import ElevatorsModels from '../models/ElevatorsModels';

class ElevatorsModelsController {
    async index(req, res) {
        const allElevatorsModels = await ElevatorsModels.findAll();

        return res.status(200).json(allElevatorsModels);
    }

    async store(req, res) {
        const { model } = req.body;

        const modelExits = await ElevatorsModels.findOne({
            where: {
                model,
            },
        });

        if (modelExits) {
            return res.status(400).json({
                error: 'Model already exists',
            });
        }

        const { id } = await ElevatorsModels.create(req.body);

        return res.status(200).json({
            id,
            model,
        });
    }
}

export default new ElevatorsModelsController();
