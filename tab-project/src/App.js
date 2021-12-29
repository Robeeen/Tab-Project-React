import React, {useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
//import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0); //If we change value 0 to 1 or 2, it will show respective Job Description. 

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

const {company, title, dates, duties} = jobs[value];
  return (
   <section className='section'>
     <div className='title'>
       <h2>Experience</h2>
       <div className='underline'></div>
     </div>

     <div className='job-center'>
  
      <div className='btn-container'>
    {/* Display Tab (company) only */}
        {jobs.map((item, index) =>{
          return (
            <button key={item.id} onClick={(() => 
              setValue(index) //Render the items onclick Tabs, asign setValue to index.
            )}>
                {item.company}
                </button>
          )
        })}
      </div>
       <article className='job-info'>
         <h3>{title}</h3>
         <h4>{company}</h4>
         <p className='job-date'>
           {dates}
         </p>
         {/* iterate the duties inside the Div*/}
         {duties.map((duty, index) => {
           return (
             <div key={index} className='job-desc'>
               <FaAngleDoubleRight />
               {duty}
             </div>
           )
         })}
       </article>
     </div>
   </section>
  );
}

export default App;
