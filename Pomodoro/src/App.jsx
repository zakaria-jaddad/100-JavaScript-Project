import { useSelector } from "react-redux";
import Header from "./components/Header";
import Settings from "./components/Settings";
import useTheme from "./components/Settings/hooks/useTheme";
import Pomodoro from "./components/Pomodoro";

function App() {
  const isSettings = useSelector((state) => state.settings.settingsPage);
  const theme = useSelector((state) => state.settings.theme.themeColors);
  useTheme(theme);

  return (
    <main className="relative">
      <div
        className={`container px-[10px] h-screen ${
          isSettings ? "overflow-hidden" : ""
        }`}
      >
        <Header />
        <Pomodoro />
      </div>
      {isSettings === true ? <Settings /> : null}
    </main>
  );
}

export default App;
