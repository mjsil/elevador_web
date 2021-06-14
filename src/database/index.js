import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Supervidors from '../app/models/Supervidors';
import Companies from '../app/models/Companies';
import Technicians from '../app/models/Technicians';
import Clients from '../app/models/Clients';
import Elevators from '../app/models/Elevators';
import ElevatorsModels from '../app/models/ElevatorsModels';
import ElevatorsBrands from '../app/models/ElevatorsBrands';
import ElevatorsChecklists from '../app/models/ElevatorsChecklists';
import Checklists from '../app/models/Checklists';
import ChecklistsQuestions from '../app/models/ChecklistsQuestions';
import ChecklistsAnswers from '../app/models/ChecklistsAnswers';
import ChecklistsNotes from '../app/models/ChecklistsNotes';
import ChecklistsImages from '../app/models/ChecklistsImages';


const models = [
    Supervidors,
    Companies,
    Technicians,
    Clients,
    Elevators,
    ElevatorsModels,
    ElevatorsBrands,
    ElevatorsChecklists,
    Checklists,
    ChecklistsQuestions,
    ChecklistsAnswers,
    ChecklistsNotes,
    ChecklistsImages,
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection)),
            models.map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
