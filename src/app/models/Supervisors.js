import Sequelize, { Model } from 'sequelize';

class Supervidors extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async (supervidor) => {
            if (supervidor.password) {
                supervidor.password_hash = await bcrypt.hash(supervidor.password, 8);
            }
        });
    }

    static associate(models) {
        this.hasOne(models.Companies, {
            foreignKey: 'id_companie',
        });
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default Supervidors;
