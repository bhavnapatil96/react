import  React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem.js'
import TodoForm from './components/TodoForm.js'

class Hello extends React.Component{


    render(){
        return(
            <h1>Hello</h1>
        )
    }
}
class World extends React.Component{
    render(){
        return(
            <p>World</p>
        )
    }
}
class HelloWorld extends  React.Component{
    constructor(){
        super();
    this.name="Bhavana";
}

    render(){
        return(
            <section>
                <Hello/>
                {this.name}
                <World/>
            </section>

        )
    }
}

class TodoList extends React.Component{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.addTask=this.addTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.editTask=this.editTask.bind(this);

        this.state={
         tasks:[{
            name:"buy a Milk",
            completed:false
        } ,
       {
           name:"buy a Cheese",
           completed:false
       } ,
       {
           name:"buy a Vegetables",
           completed:false
       }],currenttask:''}
    }
    changeStatus(index){
        var tasks=this.state.tasks;
        var task=tasks[index];
        task.completed=!task.completed;
        this.setState({
            tasks:tasks
        })
        //console.log(this.state.tasks[index]);

    }
    updateTask(newvalue){
        console.log('hji1');
        this.setState({
            currenttask:newvalue.target.value
        })
    }
    addTask(evt){
        alert('ad');
        evt.preventDefault();
        let tasks=this.state.tasks;
        let currenttask=this.state.currenttask;

        tasks.push({
            name:currenttask,
            completed:false
        })

        this.setState({
            tasks
        })
    }

    deleteTask=(index)=>{
        let tasks=this.state.tasks;
        tasks.splice(index,1);

        this.setState({
            tasks
        })
    }
    editTask=(index,newvalue)=>{
        const tasks=this.state.tasks;
        var task=tasks[index];
        task['name']=newvalue;
        this.setState({
            tasks
        })
    }
    render(){
        return(
            <section>
                <TodoForm currenttask={this.state.currenttask}
                          updateTask={this.updateTask}
                          addTask={this.addTask}/>
                <ul>
                    {
                        this.state.tasks.map((task,index)=>{
                            return <TodoItem  deleteTask={this.deleteTask}
                                              editTask={this.editTask}
                                              key={task.name}
                                              clickHandler={this.changeStatus}
                                              index={index}
                                              detail={task}/>
                        })
                    }
                </ul>
            </section>

        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("Constructor...");


    }

    inc=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    componentWillMount(){
        console.log("Will Mount...");
    }
    shouldComponentUpdate(){

        console.log("Did Mount...");

        if(this.state.count>10)
        {
            return false;
        }
        return true;
    }
    componentDidMount(){
        console.log("Did Mount...");
    }
    render(){
        console.log("rendering.......");
        return(
            <section>
                {this.state.count}
                <input type="submit" value="Increemnt" onClick={this.inc}/>
            </section>
        )
        console.log("Constructor...");
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));