import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function App() {
  const [count, setCount] = useState(0);
  const Increement = () => {
    setCount(count + 1);
  };
  const Decreement = () => {
    setCount(count - 1);
  };

  return (
    <View style={{}}>
      <View>
        <Text
          style={{
            color: "red",
            textAlign: "center",
            marginTop: 10,
            fontSize: 20,
            border: "1px solid blue",
            borderRadius: 20
          }}
        >
          Hii This Is Counter App
        </Text>
      </View>
      <View>
        <Button title="Increement" onPress={Increement} style={style.button} />
      </View>
      <View
        style={{ margin: 20, textAlign: "center", color: "red", fontSize: 100 }}
      >
        {count}
      </View>
      <View>
        <Button title="Decreement" onPress={Decreement} style={style.button} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: "red",
    height: 200,
    borderRadius: 30,
    margin: 50
  }
});

export default App;
