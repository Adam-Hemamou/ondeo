import { RouteMeta } from '@analogjs/router';
import HomeComponent from '../index.page';

// Version anglaise de l'accueil : même page, les textes suivent l'URL /en
export const routeMeta: RouteMeta = {
  title: 'Ondeo: Your Video Agency at the Best Price',
  meta: [
    {
      name: 'description',
      content:
        'ONDEO, a video agency specialized in filming, video editing and motion design. Captivating videos to win over your audience and boost your communication.',
    },
  ],
};

export default HomeComponent;
