import Sequelize, { Model } from 'sequelize';

class Checklists extends Model {
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

    static associate(models) {
        this.belongsTo(models.Elevators, {
            foreignKey: 'id_elevator',
        });
    }
}

export default Checklists;
