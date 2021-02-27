import React,{useContext} from 'react'
import Test from "./components/Test/Test";
import Form from "./components/Form/Form";
import {ThemeContext} from "./components/ThemeContext";
import Routing from "./components/Routing/Routing";
import styles from "./App.css" 
import { BucketContext } from './components/Products/BucketContext';

function App() {
const [appTheme, setAppTheme] = useContext(ThemeContext)
const [appBucket, setAppBucket] = useContext(BucketContext)
   return(
     <div className={styles.App} >
        <Routing bucket={appBucket} theme={appTheme}/>
        
        {/* <Test theme={appTheme}/> */}
     </div>
   )
}
export default App;
