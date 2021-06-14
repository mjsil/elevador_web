import Sequelize, { Model } from 'sequelize';

class Companies extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Companies;
