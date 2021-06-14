'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('elevators', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            id_client: {
                type: Sequelize.INTEGER,
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'clients', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            id_model: {
                type: Sequelize.INTEGER,
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'models', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            id_brand: {
                type: Sequelize.INTEGER,
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'brands', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            capacity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            stops: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('elevators');
    },
};
