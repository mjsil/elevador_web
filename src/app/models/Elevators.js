import Sequelize, { Model } from 'sequelize';

class Elevators extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                location: Sequelize.STRING,
                capacity: Sequelize.INTEGER,
                stops: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Clients, {
            foreignKey: 'id_client',
        });
    }

    static associate(models) {
        this.belongsTo(models.ElevatorsBrands, {
            foreignKey: 'id_brand',
        });
    }

    static associate(models) {
        this.belongsTo(models.ElevatorsModels, {
            foreignKey: 'id_model',
        });
    }
}

export default Elevators;
