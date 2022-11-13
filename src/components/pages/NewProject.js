import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){
    return (
        <div className={styles.new_project_container}>
            <h1>Create Project</h1>
            <p>Create your project for later add services</p>
            <ProjectForm btnText="Create project"/>
        </div>
    )
}

export default NewProject