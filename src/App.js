import './App.css';
import Box from "./practice/Box";
import Text from './practice/Text';
import Border from './practice/Border';
import Flex from './practice/Flex';
import Res from './practice/Responsiveness.jsx';
import IpComp from './practice/IpComp.jsx';
import Ecard from './practice/Ecard';

function App() {
  return (
    <div className='h-full'>
      <Box /> 
      <hr />
      <Text />
      <hr />
      <Border />
      <hr />
      <Flex />
      <hr />
      <Res />
      <br/><hr/>
      <IpComp />
      <br/><hr/>
      <Ecard/>
    </div>

  );
}

export default App;
