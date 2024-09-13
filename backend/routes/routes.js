import { Router } from 'express';
import { getAll } from '../controllers/servers.js';

const router = Router();
router.get('/api/data', getAll);

export default router;
