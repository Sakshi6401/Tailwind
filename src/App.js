import './App.css';
import Box from "./practice/Box";
import Text from './practice/Text';
import Border from './practice/Border';
import Flex from './practice/Flex';

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
    </div>

  );
}

export default App;
