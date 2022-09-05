import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Projects() {
    const[language,setLanguage]=useState(false);
    const project=["JavaScript Calculator","Build a Clock","Hex Color Application","Random Quote Generator","Timer"];
  return (
    <>

                <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Language/Library/{<button onClick={()=>{setLanguage(language=>!language)}}>React projects</button>}</th>
                  </tr>
                </thead>
                <tbody>
                    {
                    project.map((curPro,id)=>{
                        return(
                    <tr>
                        <td>{id+1}</td>
                       <td>{curPro}</td>
                        <td>{language?"ReactJs":"JavaScript"}</td>
                    </tr> 
                        )
                    })
                   }
                </tbody>
              </Table>
    </>
  );
}

export default Projects;