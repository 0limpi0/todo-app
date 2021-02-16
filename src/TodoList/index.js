import check from '../assets/images/icon-check.svg';
import cross from '../assets/images/icon-cross.svg';
import './index.css';

const TodoList = () => {
  return (
    <main>
      <section className="todo-list">
        <aside className="todo-item">
          <span className="icon-item">
            <img src={check} alt="check" />
          </span>
          <p className="item-text">
            Complete online JavaScript course.
        </p>
          <span className="icon-item">
            <img src={cross} alt="cross" />
          </span>
        </aside>
        <aside className="todo-item">
          <span className="icon-item">
            <img src={check} alt="check" />
          </span>
          <p className="item-text">
            Complete online JavaScript course.
        </p>
          <span className="icon-item">
            <img src={cross} alt="cross" />
          </span>
        </aside>
        <aside className="todo-item">
          <span className="icon-item">
            <img src={check} alt="check" />
          </span>
          <p className="item-text">
            Complete online JavaScript course.
        </p>
          <span className="icon-item">
            <img src={cross} alt="cross" />
          </span>
        </aside>
        <aside className="todo-item count-items">5 items left</aside>
        <aside className="todo-item categories">
          <span className="all">All</span>
          <span className="active">Active</span>
          <span className="completed">Completed</span>
        </aside>
        <aside className="todo-item clear-completed">Clear completed</aside>
      </section>
    </main>
  );
}

export default TodoList;