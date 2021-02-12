import dark from '../../assets/images/icon-moon.svg';
import light from '../../assets/images/icon-sun.svg';
import './index.css';

const Nav = () => {

  return (
    <nav>
      <h2 className="todo-title">TODO</h2>
      <div className="theme-toogle">
        <img src={dark} alt="icon dark" />
      </div>
    </nav>
  );
}

export default Nav;