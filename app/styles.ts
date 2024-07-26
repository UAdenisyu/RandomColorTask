import { ColorValue, StyleSheet } from "react-native";

export const getDynamicStyle = (backgroundColor: ColorValue) => StyleSheet.create({
  screenWrapper: {
    backgroundColor,
  }
})

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    userSelect: 'none',
  },
  label: {
    fontSize: 20,
    marginTop: 16,
    userSelect: 'none',
  }
})

export const dynamicColor =  StyleSheet.create({

})