import  React from 'react';
import PropTypes from 'prop-types';
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEditing:false
        }
        this.render1=this.render1.bind(this);
        this.renderForm=this.renderForm.bind(this);
        this.toggleState=this.toggleState.bind(this);
        this.updateItem=this.updateItem.bind(this);

    }
    updateItem(e){

        e.preventDefault();
        console.log(this.input.value);
        this.props.editTask(this.props.index,this.input.value);
        this.toggleState();
    }
    toggleState(){
        const {isEditing}=this.state;
        this.setState({
            isEditing:!isEditing
        })
    }
    render1(){
        return(
            <li onClick={()=>{
                this.props.clickHandler(this.props.index)
            }} className={this.props.detail.completed ?'completed':''}>
                {this.props.detail.name}
                <button onClick={(e)=>{
                    e.stopPropagation();
                    this.props.deleteTask(this.props.index)
                }}>Delete</button>

                <button onClick={(e)=>{
                    e.stopPropagation();
                    this.toggleState( )
                }}>Edit Item</button>
            </li>
        )

    }
    renderForm(){
        return(
            <form onSubmit={this.updateItem}>
                <input type="text" ref={(value)=>{
                    this.input=value;
                }} defaultValue={this.props.detail.name}/>
                <button type="submit">Update</button>
            </form>
        )

    }
    render(){
        const {isEditing}=this.state;
        return(
        <section>
            {
                isEditing ? this.renderForm() : this.render1()
            }
        </section>

        )
    }
}

TodoItem.propTypes={
    deleteTask:PropTypes.func,
    editTask:PropTypes.func,
    clickHandler:PropTypes.func,
    index:PropTypes.number,
    detail:PropTypes.object.isRequired
}
// const TodoItem=(props)=>{
//         return(
//             <li onClick={()=>{
//                 props.clickHandler(props.index)
//             }} className={props.detail.completed ?'completed':''}>
//                 {props.detail.name}
//
//                 <button onClick={(e)=>{
//                     e.stopPropagation();
//                     props.deleteTask(props.index)
//                 }}>Delete</button>
//             </li>
//         )
// }
export default TodoItem