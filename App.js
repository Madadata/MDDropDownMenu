import React from 'react';
import MDDropDownMenu from './src/MDDropDownMenu.jsx';
import styles from './App.css';
import 'font-awesome/css/font-awesome.css';

const App = () => (
  <div className={styles.container}>
    <MDDropDownMenu
      options={['caiyao', 'jiayu', 'yuxiang']}
      defaultOption="caiyao"
      onSelect={(option) => console.log(option)}
    />
  </div>
);

export default App;
