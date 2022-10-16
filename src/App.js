import logo from './logo.svg';
import './App.css';
import CodeEditor from './Components/CodeEditor';
import Editor from "@monaco-editor/react";
import { Grid, ListItem } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>CodeRunner</h2>
      </div>
      <div>
        <Grid container spacing={2} className="Grid">
          <Grid item xs={12} lg={8}>
            <CodeEditor />
          </Grid>
          <Grid item xs={6} lg={4}>
            <h2 className='colorBox2'> Cutom Input </h2>
          </Grid>
          <Grid item xs={6} lg={4}>
            <h2 className='colorBox3'> Output </h2>
          </Grid>
        </Grid>
      </div>
        <CustomInput />
    </div>
  );
}

function CustomInput({ customInput }) {
  return (
    <div>
      <h3>Custom Input</h3>
    </div>
  );
}

function OutputWindow({ output }) {
  return (
    <div>
      <h3>Output</h3>
    </div>
  );
}

export default App;
