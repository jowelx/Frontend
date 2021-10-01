
import './App.css';

import PublicRoutes from './routes/routes'

import{ DataProvider} from './context/dataProvider';


const App =()=> {
 return(
 <DataProvider>
 < PublicRoutes/>
 </DataProvider>

 )
 }
export default App;
