import jwt from 'jsonwebtoken';
import Supervisors from '../models/Supervisors';
import Technicians from '../models/Technicians';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const { email, password, type } = req.body;

        let user;

        if (type === 'Supervisors') {
            user = await Supervisors.findOne({
                where: {
                    email,
                },
            });
        }else {
            user = await Technicians.findOne({
                where: {
                    email,
                },
            });
        }

        if (!user) {
            return res.status(401).json({
                error: 'User not found',
            });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                error: 'Password does not match',
            });
        }

        const { id, name } = user;

        return res.status(200).json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id, email }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
