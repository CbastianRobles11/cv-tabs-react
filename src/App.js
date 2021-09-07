import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
  
  
  const [loading,setLoading]= useState(true)
  const [jobs,setJobs]=useState([])
  const [value,setValue]= useState(0)

  const fetchJobs= async()=>{
    const response= await fetch(url);

    const newJobs= await response.json();

    setJobs(newJobs);
    setLoading(!loading)
   

  }

  //llamamos a la api apenas cargue
  useEffect(() => {
   fetchJobs()
 
  }, [])

  

  if (loading) {
    return <section  className="section loading">
      <h1>Cargando ...</h1>
    </section>
  }

  //value da el numero de data que aprece
  const {company, dates, duties,title}=jobs[value]

  console.log(jobs);
  return (<section className="section ">
      
      <div className="title">
          <h2>Experiencia</h2>
          <div className="underline"> </div>
      </div>
      <div  className="jobs-center">
          {/* boton container = creamos lista de botones*/}

          <div className="btn-container">
             {jobs.map((j,index)=>{
               return (
                  <button key={j.id} 
                  onClick={()=> setValue(index) } 
                  className={`job-btn  ${index===value && 'active-btn' }` }
                  >
                    {j.company} 
                  </button>
               );
             })}
          </div>



          {/* informacion del trabajo */}
        <article className="job-info">
            <h3>{ title}</h3>
            <h4>{company}</h4>
            <p className="{job-date}" >{dates}</p>
            
            {duties.map((d,index)=>{
                return(<div key={index} className="job-desc"> 
                    
                    <FaAngleDoubleRight className="job-icons">
                    </ FaAngleDoubleRight >
                    <p >{d}</p>
                </div>);
            })}

        </article>

      </div>

  </section > );
}



export default App
