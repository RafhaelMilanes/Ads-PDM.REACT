import { View } from 'react-native';

const Box = (props) => {
  //estilo inline
  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
    
  };
  return <View style={boxStyle}></View>;
};

export default Box;
