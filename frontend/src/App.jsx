import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Marketplace from "./pages/Marketplace/Marketplace.jsx";
import Learn from "./pages/Learn/Learn.jsx";
import Ideas from "./pages/Ideas/Ideas.jsx";
import Help from "./pages/Help/Help.jsx";
import News from "./pages/News/News.jsx";
import Directory from "./pages/Directory/Directory.jsx";
import NotFound from "./pages/NotFound.jsx";
import Digital from "./pages/Learn/Digital.jsx";
import Farming from "./pages/Learn/Farming.jsx"
import Schemes from "./pages/Learn/Schemes.jsx";
import Market from "./pages/Learn/Market.jsx";
import ChatSupport from "./pages/Help/ChatSupport.jsx";
import Chat from "./pages/Learn/Chat.jsx";


function App() {
  return (
    <>
      <Navbar />

      <Routes>               //React Router route definition
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/learn" element={<Learn />} />
        {/* Ideas intentionally routes to Marketplace per user request */}
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/help" element={<Help />} />
        <Route path="/news" element={<News />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="*" element={<NotFound />} />

        {/* Learn section routes */}
        {/* User clicks "Farming"
                ↓
                URL becomes /learn/farming
                ↓
                React Router matches the path
                ↓
                <Farming /> component is rendered
                ↓
                NO PAGE RELOAD */}

 //This route means when the URL is /learn/farming, the Farming component will be rendered using React Router without reloading the page.

        <Route path="/Learn/farming" element={<Farming />} />
        <Route path="/Learn/schemes" element={<Schemes />} />
        <Route path="/Learn/market" element={<Market />} />
        <Route path="/Learn/digital" element={<Digital />} />

        <Route path="/ideas" element={<Ideas />} />

        <Route path="/help/chat" element={<ChatSupport />} />
        <Route path="/Chat" element={<Chat />} />


      </Routes>
    </>
  );
}

export default App;
