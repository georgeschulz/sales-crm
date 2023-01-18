import './App.css';
import './output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import PipelinePage from './pages/PipelinePage';
import NewLeadPage from './pages/NewLead';
import Account from './pages/account';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getServices } from './redux/servicesSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServices(1))
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/pipeline/:pipelineId' element={<PipelinePage />} />
          <Route path="/lead/new" element={<NewLeadPage />} />
          <Route path="/lead/:leadId" element={<Account />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
