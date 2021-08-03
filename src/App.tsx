import './styles/App.ts';
import {GlobalStyles} from './styles/App'
import { Head } from './components/Head/Head';
import { Content } from './components/Content/Content';

export function App() {
  return (
    <>
    <GlobalStyles />     
    <Head /> 
    <Content />         
    </>
  );
}


