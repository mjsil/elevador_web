import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClientController from './app/controllers/ClientController';
import ElevatorController from './app/controllers/ElevatorController';
import ChecklistController from './app/controllers/ChecklistController';
import HouseMachineCheckController from './app/controllers/HouseMachineCheckController';
import HouseMachineMessageController from './app/controllers/HouseMachineMessageController';
import HouseMachineImageController from './app/controllers/HouseMachineImageController';
import WellCheckController from './app/controllers/WellCheckController';
import WellMessageController from './app/controllers/WellMessageController';
import WellImageController from './app/controllers/WellImageController';
import IndoorCabinCheckController from './app/controllers/IndoorCabinCheckController';
import IndoorCabinMessageController from './app/controllers/IndoorCabinMessageController';
import IndoorCabinImageController from './app/controllers/IndoorCabinImageController';
import CabinOnTopCheckController from './app/controllers/CabinOnTopCheckController';
import CabinOnTopMessageController from './app/controllers/CabinOnTopMessageController';
import CabinOnTopImageController from './app/controllers/CabinOnTopImageController';
import DoorOperatorCheckController from './app/controllers/DoorOperatorCheckController';
import DoorOperatorMessageController from './app/controllers/DoorOperatorMessageController';
import DoorOperatorImageController from './app/controllers/DoorOperatorImageController';
import UploadImageController from './app/controllers/UploadImageController';

import cors from 'cors';

import autMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();

routes.use(cors());

routes.post('/create/user', UserController.store);

routes.post('/session', SessionController.store);

routes.use(autMiddleware);

routes.post('/create/client', ClientController.store);
routes.get('/clients', ClientController.index);

routes.post('/create/elevator', ElevatorController.store);
routes.get('/elevators/:id_client', ElevatorController.index);

routes.post('/create/ckecklist', ChecklistController.store);
routes.get('/ckecklist/:id_elevator', ChecklistController.index);

routes.post('/create/house/machine/check', HouseMachineCheckController.store);
routes.post(
    '/create/house/machine/message',
    HouseMachineMessageController.store
);
routes.post('/create/house/machine/image', HouseMachineImageController.store);

routes.post('/create/well/check', WellCheckController.store);
routes.post('/create/well/message', WellMessageController.store);
routes.post('/create/well/image', WellImageController.store);

routes.post('/create/indoor/cabin/check', IndoorCabinCheckController.store);
routes.post('/create/indoor/cabin/message', IndoorCabinMessageController.store);
routes.post('/create/indoor/cabin/image', IndoorCabinImageController.store);

routes.post('/create/cabin/top/check', CabinOnTopCheckController.store);
routes.post('/create/cabin/top/message', CabinOnTopMessageController.store);
routes.post('/create/cabin/top/image', CabinOnTopImageController.store);

routes.post('/create/door/operator/check', DoorOperatorCheckController.store);
routes.post(
    '/create/door/operator/message',
    DoorOperatorMessageController.store
);
routes.post('/create/door/operator/image', DoorOperatorImageController.store);

routes.post(
    '/upload/image',
    multer(multerConfig).single('file'),
    UploadImageController.store
);

export default routes;
