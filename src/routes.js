import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import SupervisorsController from './app/controllers/SupervisorsController';
import TechniciansController from './app/controllers/TechniciansController';
import ClientsController from './app/controllers/ClientsController';
import CompaniesController from './app/controllers/CompaniesController';
import ElevatorsController from './app/controllers/ElevatorsController';
import ElevatorsModelsController from './app/controllers/ElevatorsModelsController';
import ElevatorsBrandsController from './app/controllers/ElevatorsBrandsController';
import ElevatorsChecklistsController from './app/controllers/ElevatorsChecklistsController';
import ChecklistsController from './app/controllers/ChecklistsController';
import ChecklistsQuestionsController from './app/controllers/ChecklistsQuestionsController';
import ChecklistsAnswersController from './app/controllers/ChecklistsAnswersController';
import ChecklistsImagesController from './app/controllers/ChecklistsImagesController';
import ChecklistsNotesController from './app/controllers/ChecklistsNotesController';

import cors from 'cors';

import autMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.use(cors());

routes.post('/create/supervisor', SupervisorsController.store);

routes.post('/session', SessionController.store);

routes.use(autMiddleware);

routes.post('/create/technician', TechniciansController.store);

routes.post('/create/client', ClientsController.store);
routes.get('/clients/:id_technician', ClientsController.index);

routes.post('/create/companie', CompaniesController.store);

routes.post('/create/elevator', ElevatorsController.store);
routes.get('/elevators/:id_client', ElevatorsController.index);

routes.post('/create/elevators/model', ElevatorsModelsController.store);
routes.get('/elevators/models', ElevatorsModelsController.index);

routes.post('/create/elevators/brand', ElevatorsBrandsController.store);
routes.get('/elevators/brands', ElevatorsBrandsController.index);

routes.post('/create/elevators/checklists', ElevatorsChecklistsController.store);
routes.get('/elevators/checklists/:id_elevator', ElevatorsChecklistsController.index);
routes.get('/elevators/checklist/:ids', ElevatorsChecklistsController.show);

routes.post('/create/checklist', ChecklistsController.store);

routes.post('/create/checklists/question', ChecklistsQuestionsController.store);

routes.post('/create/checklists/answer', ChecklistsAnswersController.store);

routes.post('/create/checklists/image', ChecklistsImagesController.store);

routes.post('/create/checklists/note', ChecklistsNotesController.store);

export default routes;
