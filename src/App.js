import './App.css';
import Box from "./practice/Box";
import Text from './practice/Text';
import Border from './practice/Border';
import Flex from './practice/Flex';
import Res from './practice/Responsiveness.jsx';

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
    </div>

  );
}

export default App;
