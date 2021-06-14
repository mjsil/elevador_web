'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('checklists_images', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            id_question: {
                type: Sequelize.INTEGER,
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'checklist_questions', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            image: {
                type: Sequelize.TEXT,
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
        return queryInterface.dropTable('checklists_images');
    },
};
