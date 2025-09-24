import routes from '../routes.tsx';
import {useRoutes} from 'react-router-dom';
import ContextItemsProvider from './components/module/Context/ItemsContext.tsx';

function App() {
  const router = useRoutes(routes);

  return <ContextItemsProvider>{router}</ContextItemsProvider>;
}

export default App;
