import Header from "./components/Header";
import { useSelector } from "react-redux";
import Settings from "./components/Settings";

function App() {
  const isSettings = useSelector((state) => state.settings.settingsPage);

  return (
    <main className={`relative h-screen ${isSettings ? 'overflow-hidden' : ''}`}>
      <Header />
      {isSettings === true ? <Settings /> : null}
    </main>
  )
}

export default App;