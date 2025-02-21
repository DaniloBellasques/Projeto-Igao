import { Router } from 'express';
import * as usuarioController from '../controllers/usuarioController';

const router = Router();

router.get('/', usuarioController.index);

// ✅ Garante que cada etapa tem apenas uma rota configurada corretamente
router.get('/etapa1', usuarioController.etapa1);
router.post('/etapa1', usuarioController.etapa1Post);

router.get('/etapa2', usuarioController.etapa2);
router.post('/etapa2', usuarioController.etapa2Post); // Etapa 2 POST leva para a finalização

router.get('/finalizacao', usuarioController.submit); // Página de finalização

// ✅ Remove as rotas duplicadas
router.get('/unha/:id_cliente', usuarioController.etapa2);

export default router;
import "express-session";

declare module "express-session" {
    interface SessionData {
        dadosCliente?: any;
        dadosUnha?: any;
    }
}
