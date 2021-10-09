
import './App.css';

import PublicRoutes from './routes/routes'
import PrivateRoutes from './routes/routeAdmin'
import{ DataProvider} from './context/dataProvider';
import Navbar from './components/navBar'
const App =()=> {
 return(
 <DataProvider>
 < PrivateRoutes/>

 </DataProvider>

 )
 }
export default App;
