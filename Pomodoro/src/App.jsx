import Header from "./components/Header";
import { useSelector } from "react-redux";
import Settings from "./components/Settings";
import useTheme from "./components/Settings/hooks/useTheme";
import Pomodoro from "./components/Pomodoro";

function App() {
  const isSettings = useSelector((state) => state.settings.settingsPage);
  const theme = useSelector((state) => state.settings.theme.themeColors);
  useTheme(theme);
  
  return (
    <main className={`relative h-screen ${isSettings ? 'overflow-hidden' : ''}`}>
      <Header />
      {isSettings === true ? <Settings /> : null}
      <Pomodoro />
    </main>
  )
}

export default App;