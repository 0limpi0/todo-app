import Nav from '../components/Nav';
import './index.css';
import AddTodo from '../components/AddTodo';

const Header = () => {
  return (
    <header>
      <Nav />
      <AddTodo />
    </header>
  );
}

export default Header;