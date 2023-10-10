import MainPage from "./MainPage";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}

export default App;
