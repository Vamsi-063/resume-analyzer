import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import api from "../services/api";

function ResumeDetails(){

 const {id}=useParams();

 const [resume,setResume]=
 useState(null);

 useEffect(()=>{
   getResume();
 },[]);

 async function getResume(){

   const response =
   await api.get(`/resumes/${id}`);

   setResume(response.data);
 }

 if(!resume){
   return <h2>Loading...</h2>;
 }

 return(
   <div>

     <h1>{resume.name}</h1>

     <p>Email: {resume.email}</p>

     <p>
       Experience:
       {resume.experience}
     </p>

     <p>
       Education:
       {resume.education}
     </p>

     <p>
       Score:
       {resume.score}%
     </p>

     <p>
       Status:
       {resume.status}
     </p>

   </div>
 );
}

export default ResumeDetails;