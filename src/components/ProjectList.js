import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let names, abt, tech, id;
let item = projects.map((project)=>{
  
  return ( 
    id= project.id, 
    names = project.name,
    abt= project.about,
    tech = project.technologies,
      <ProjectItem key={id} name ={names} about={abt} technologies={tech}/>
    
    );})
   return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {item}
      </div>
    </div>
  );
}

export default ProjectList;
