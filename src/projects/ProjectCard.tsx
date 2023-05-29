import React from 'react';
import { Project } from './Project';
import { Link } from 'react-router-dom';
interface ProjectCardProps {
  pro: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(projects : ProjectCardProps) {
   const handleEditClick = (projectBeingEdited: Project) => {
        onEdit(projectBeingEdited);
    };
   const { pro,onEdit } = projects;
   return(
            <div className='card'>
                <img src= {pro.imageUrl} alt={pro.name}/>
                <section className='section dark'>
                    <Link to={'/projects/' + pro.id}>
                    <h5 className='strong'>
                        <strong>{pro.name}</strong>
                    </h5>
                    <p>{formatDesc(pro.description)}</p>
                    <p>Budget : {pro.budget.toLocaleString()}</p>
                    </Link>
                    <button className="bordered"onClick={() => {
            handleEditClick(pro);
          }}>
                        
                    <span className="icon-edit "></span>
                            Edit
                    </button>
                </section>
            </div>
      );
}

function formatDesc(desc: string):string{
    return desc.substring(0, 60) + '...';
}

export default ProjectCard;