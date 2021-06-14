import Sequelize, { Model } from 'sequelize';

class ChecklistsQuestions extends Model {
    static init(sequelize) {
        super.init(
            {
                question: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Checklists, {
            foreignKey: 'id_checklist',
        });
    }
}

export default ChecklistsQuestions;
