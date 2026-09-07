import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.jsx";
import Home from "./features/home/pages/Home.jsx";
import Marketplace from "./features/marketplace/pages/Marketplace.jsx";
import Learn from "./features/learn/pages/Learn.jsx";
import Ideas from "./features/ideas/pages/Ideas.jsx";
import Help from "./features/help/pages/Help.jsx";
import News from "./features/news/pages/News.jsx";
import Directory from "./features/directory/pages/Directory.jsx";
import NotFound from "./pages/NotFound.jsx";
import Digital from "./features/learn/pages/Digital.jsx";
import Farming from "./features/learn/pages/Farming.jsx";
import Schemes from "./features/learn/pages/Schemes.jsx";
import Market from "./features/learn/pages/Market.jsx";
import ChatSupport from "./features/help/components/ChatSupport.jsx";
import Chat from "./features/learn/pages/Chat.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {" "}
        //React Router route definition
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
        //This route means when the URL is /learn/farming, the Farming component
        will be rendered using React Router without reloading the page.
        <Route path="/learn/farming" element={<Farming />} />
        <Route path="/learn/schemes" element={<Schemes />} />
        <Route path="/learn/market" element={<Market />} />
        <Route path="/learn/digital" element={<Digital />} />
        <Route path="/help/chat" element={<ChatSupport />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
