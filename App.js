import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  //animation to circle map
  const [heading, setHeading] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeading((prevHeading) => (prevHeading + 0.1) % 360); // Increment heading, and reset to 0 after reaching 360
    }, 10);

    return () => clearInterval(intervalId); // Clear the interval when component is unmounted
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="satellite"
        camera={{
          center: {
            latitude: 29.978,
            longitude: 31.131,
          },
          pitch: 90, // Change this value to set the desired pitch
          heading: heading, // Direction faced by the camera, in degrees clockwise from North.
          zoom: 15.5, // Closer values mean a higher zoom level.
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
