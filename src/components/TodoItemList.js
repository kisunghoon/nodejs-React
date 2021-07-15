import React,{Component} from 'react';
import TodoItem from './TodoItem';
class TodoItemList extends Component {
    shouldComponentUpdate(nextProps,nextState) {
        return this.props.todos !== nextProps.todos;
    } // 컴포넌트가 리렌더링을 할 지 말 지 정한다.
    render(){

       

        const {todos,onToggle,onRemove}=this.props;

        const todoList = todos.map(
            ({id, text, checked,color}) => (
              <TodoItem
                id={id}
                text={text}
                color={color}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
              />
            )
          );
        return (
            <div>
              {todoList}
            </div>
        );
    }
}

export default TodoItemList;