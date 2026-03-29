import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Team from "./Team";
import Member from "./Member";
import "./App.css";

function Home() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="main-title">🚀 CI/CD Pipeline Project</h1>
        <p className="subtitle">
          Software Continuous Development, Integration and Deployment
        </p>

        <div className="card">
          <h2>Project Overview</h2>
          <p>
            This project demonstrates an automated CI/CD pipeline using
            GitHub Actions, Docker Hub, and AWS EC2.
          </p>
        </div>

        <div className="card">
          <h2>Technologies</h2>
          <p>React | Docker | GitHub Actions | AWS EC2</p>
        </div>

        <div className="card">
          <h2>Status</h2>
          <p>✅ Deployed Successfully</p>
        </div>

        <Link to="/team" className="btn-link">
          <button className="btn">View Team Members</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/member/:id" element={<Member />} />
      </Routes>
    </Router>
  );
}

export default App;