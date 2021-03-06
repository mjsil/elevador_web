'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('elevators_checklists', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            id_elevator: {
                type: Sequelize.INTEGER,
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'elevators', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            id_checklist: {
                type: Sequelize.INTEGER,
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'checklists', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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
        return queryInterface.dropTable('elevators_checklists');
    },
};
