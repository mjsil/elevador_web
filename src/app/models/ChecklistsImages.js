import Sequelize, { Model } from 'sequelize';

class ChecklistsImages extends Model {
    static init(sequelize) {
        super.init(
            {
                image: Sequelize.TEXT,
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

export default ChecklistsImages;
