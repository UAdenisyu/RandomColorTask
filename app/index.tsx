import { useState } from 'react';
import { ColorValue, Pressable, Text } from 'react-native';
import { getDynamicStyle, styles } from './styles';

export default function MainScreen() {
  const [currentColor, setCurrentColor] = useState<ColorValue>('#fff');

  const onPress = () => {
    let randomHexColor = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');;
    setCurrentColor(`#${randomHexColor}`);
  }

  return (
    <Pressable style={[styles.screenWrapper, getDynamicStyle(currentColor).screenWrapper]} onPress={onPress}>
      <Text style={styles.mainTitle}>Hello world</Text>
      <Text style={styles.label}>press anywhere to change the color</Text>
    </Pressable>
  );
}
