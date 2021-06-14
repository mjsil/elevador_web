import Sequelize, { Model } from 'sequelize';

class ElevatorsChecklists extends Model {
    static init(sequelize) {
        super.init(
            {},
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

    static associate(models) {
        this.belongsTo(models.Checklists, {
            foreignKey: 'id_checklist',
        });
    }
}

export default ElevatorsChecklists;
