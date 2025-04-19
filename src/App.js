import {Space} from 'antd';
import './App.css';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import AppFooter from './Components/AppFooter';
import PageContent from './Components/PageContent';
import LoginSignUp from './Components/LoginSingup/LoginSignUp.js';

function App(){
  return(
    <LoginSignUp/>
    /*<div className="App">
      <AppHeader/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>
    </div>*/
  )

}
export default App;
