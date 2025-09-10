import routes from "../routes.tsx";
import { useRoutes } from "react-router-dom";
import ContextItemsProvider from "./components/module/Context/ItemsContext.tsx";
import { AuthProvider } from "./components/module/Context/AuthUser.tsx";

function App() {
  const router = useRoutes(routes);

  return (
    <AuthProvider>
      <ContextItemsProvider>
        {router}
      </ContextItemsProvider>
    </AuthProvider>
  );
}

export default App;
