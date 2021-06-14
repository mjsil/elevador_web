import Sequelize, { Model } from 'sequelize';

class Clients extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                address: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                responsible: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Technicians, {
            foreignKey: 'id_technician',
        });
    }
}

export default Clients;
