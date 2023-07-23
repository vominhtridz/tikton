import Home from '..//Pages/Home/Home';
import Following from '..//Pages/Following/Following';
import Explore from '../Pages/Explore/explore.js';
import Profile from '../Pages/Profile/Profile';

//public routes
const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '/Following', component: <Following /> },
  { path: '/:username', component: <Profile /> },
  { path: '/discovery', component: <Explore /> },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
