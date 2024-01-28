import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const isSettings = useSelector((state) => state.settings);

  return (
    <main className={`relative h-screen ${isSettings ? 'overflow-hidden' : ''}`}>
      <Header />
    </main>
  )
}

export default App;