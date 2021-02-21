import './App.css';
import Box from "./practice/box";
import Text from './practice/text';
import Border from './practice/border';
import Flex from './practice/flex';

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
