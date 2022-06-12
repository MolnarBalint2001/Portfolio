
import "./App.css";

import { Introduction } from "./components/Introduction/Introduction";
import { Opening } from "./components/Opening/Opening";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";



const App = () => {





  return (
    <div id="container">
        <Opening/>
        <Introduction/>
        <Skills/>
        <Projects/>
        <Contact/>

    </div>
   
  );

}

export default App;