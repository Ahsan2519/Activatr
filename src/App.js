import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assest/style/App.css";
import Completed from "./pages/Completed";
import CompaignIdeas from "./pages/CompaignIdeas";
import { useRef } from "react";

const App = () => {
  const campaignIdeasRef = useRef(null);
  const metricMeasuresRef = useRef(null);
  const createCampaignRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              campaignIdeasRef={campaignIdeasRef}
              metricMeasuresRef={metricMeasuresRef}
              createCampaignRef={createCampaignRef}
              homeRef={homeRef}
            />
          }
        />
        <Route path="/completed" element={<Completed />} />
        <Route path="/campaign/campaign-detail" element={<CompaignIdeas />} />
      </Routes>
    </Router>
  );
};

export default App;
