import { useState } from "react";


const Task = ( { task, toggleTask }) => {

    return (
        <div style={{ textDecoration: task.completed? 'line-through' : 'none'}}>
            {task.text}
            <button onClick={() => toggleTask(task.id)}>
                {task.completed? 'Annuler' : 'Terminer'}
            </button>
        </div>
    );
};


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    const addTask = () => {
        if(newTaskText.trim() === '') return;
        const newTask = {
            id: Date.now(),
            text: newTaskText,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    };

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map((task) => (
                task.id === taskId? {...task, completed: !task.completed } : task
            ))
        );
    };

    return (
        <div>
            <h1>Liste des tâches</h1>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="nouvel tache"
            
            />

            <button onClick={addTask}>Ajouter</button>
            { 
               tasks.map((task) => (
                <Task key={task.id} task={task} toggleTask={toggleTask} />
              )) 
            }
        </div>
    )
}

export default TaskList;