import React, { useState } from "react";
import { StyleSheet, StatusBar, Text, View, Switch, SafeAreaView } from "react-native";
import Button from "./src/components/Button";
import MyKeyboard from "./src/components/MyKeyboard";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider  value={theme}>  
     
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
   
      <StatusBar />
      <Switch
        value={theme === 'light'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : "light")}
      />
      <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

