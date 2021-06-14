import Sequelize, { Model } from 'sequelize';

class ElevatorModels extends Model {
    static init(sequelize) {
        super.init(
            {
                model: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default ElevatorModels;
