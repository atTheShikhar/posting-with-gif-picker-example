import styles from './App.module.css';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.homepage}>
        <Header/>
        <Posts/>
      </div>
    </div>
  );
}

export default App;
