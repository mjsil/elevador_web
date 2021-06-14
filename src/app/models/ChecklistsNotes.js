import Sequelize, { Model } from 'sequelize';

class ChecklistsNotes extends Model {
    static init(sequelize) {
        super.init(
            {
                note: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.hasOne(models.ChecklistsQuestions, {
            foreignKey: 'id_question',
        });
    }
}

export default ChecklistsNotes;
