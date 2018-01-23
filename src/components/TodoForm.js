import React from 'react'
import PropTypes from 'prop-types';

const TodoForm =(props)=>{
    return(
        <form onSubmit={props.addTask}>
            <h1>TO do Form</h1>
            <input type="text" value={props.currenttask} onChange={props.updateTask}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}
TodoForm.propTypes={
    currenttask:PropTypes.func,
    updateTask:PropTypes.func,
    addTask:PropTypes.func
}
export default TodoForm;