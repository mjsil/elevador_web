import Sequelize, { Model } from 'sequelize';

class ChecklistsAnswers extends Model {
    static init(sequelize) {
        super.init(
            {
                answer: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.ChecklistsQuestions, {
            foreignKey: 'id_question',
        });
    }
}

export default ChecklistsAnswers;
