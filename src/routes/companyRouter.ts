import { Router } from 'express';
import { container } from 'tsyringe';
import { companyController } from '../controllers/companyController';
const companyRouter = Router();
const CompanyController = container.resolve(companyController);
companyRouter.get('/getbyid/:id', CompanyController.gethangById.bind(CompanyController));
companyRouter.get('/getall', CompanyController.gethangAll.bind(CompanyController));
companyRouter.post('/update', CompanyController.updatehang.bind(CompanyController));
companyRouter.post('/create', CompanyController.createhang.bind(CompanyController));
companyRouter.post('/delete/:id', CompanyController.deletehang.bind(CompanyController));
export default companyRouter;