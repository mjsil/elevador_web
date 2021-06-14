import Sequelize, { Model } from 'sequelize';

class ElevatorBrands extends Model {
    static init(sequelize) {
        super.init(
            {
                brand: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default ElevatorBrands;
