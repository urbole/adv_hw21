import { CatalogSportPage} from '../pages/catalog/sports';
import { CatalogGadgetPage} from '../pages/catalog/gadget';

export const catalogRoutes = [
  {
    path: '/sport',
    component: CatalogSportPage
  },
  {
    path: '/gadget',
    component: CatalogGadgetPage
  },
]