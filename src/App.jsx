import "./App.css";
import Achievements from "./Components/Achievements";
import Body from "./Components/Body";
import Calendar from "./Components/Calendar";
import Clients from "./Components/Clients";
import Community from "./Components/Community";
import CommunityUpdate from "./Components/CommunityUpdate";
import Customers from "./Components/Customers";
import Demo from "./Components/Demo";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Unlock from "./Components/Unlock";

function App() {
  return (
    <>
      <main className="font-primary w-full">
        <Navbar />
        <Body />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <Calendar />
        <Customers />
        <CommunityUpdate />
        <Demo />
        <Footer />
      </main>
    </>
  );
}

export default App;
