import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);    
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading){
    return (
    <section>
      loading ...
      </section> 
    );
  }


  return (
    <div>
      <h2>Jobs</h2>
    </div>
  );
}

export default App;
