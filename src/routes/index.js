import { HomePage } from '../pages/homePage';
import { PostPage } from '../pages/posts/postPage';
import { GalleryPage } from '../pages/galleryPage';
import { ContactPage } from '../pages/contacts/contactPage';

export const appRoutes = [
  {
    path: '/adv_hw21/',
    exact: true,
    component: HomePage
  },
  {
    path: '/adv_hw21/posts',
    component: PostPage
  },
  {
    path: '/adv_hw21/gallery',
    component : GalleryPage
  },
  {
    path: '/adv_hw21/contacts',
    component: ContactPage
  },
]