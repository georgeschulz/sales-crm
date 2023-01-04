import './App.css';
import './output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import PipelinePage from './pages/pipeline';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/pipeline/:pipelineId' element={<PipelinePage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
