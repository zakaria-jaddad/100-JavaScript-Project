import { useSelector } from "react-redux";
import Header from "./components/Header";
import Settings from "./components/Settings";
import Pomodoro from "./components/Pomodoro";
import TodoList from "./components/TodoList";
import useTheme from "./hooks/useTheme";
import useAuthentication from "./hooks/useAuthentication";

function App() {
  const isSettings = useSelector((state) => state.settings.settingsPage);
  const theme = useSelector((state) => state.settings.theme.themeColors);
  useTheme(theme);
  useAuthentication();

  // useEffect(() => {
  //   const userToken = getDataFromLocalStorage("Authentication", null);
  //   const api = new TodoistApi(userToken);

  //   api
  //     .getTasks()
  //     .then((tasks) => console.log(tasks))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <main className="relative">
      <div
        className={`container px-[10px] h-screen ${
          isSettings ? "overflow-hidden" : ""
        }`}
      >
        <Header />
        <Pomodoro />
        {/* make the todoist todo's here */}
        <TodoList />
      </div>
      {isSettings === true ? <Settings /> : null}
    </main>
  );
}

export default App;
