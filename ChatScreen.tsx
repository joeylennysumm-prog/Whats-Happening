import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { io } from "socket.io-client";

const socket = io(process.env.EXPO_PUBLIC_WS_URL || "http://localhost:8081", {
  autoConnect: false
});

export default function ChatScreen() {
  useEffect(() => {
    socket.auth = { token: "dev-token" };
    socket.connect();
    return () => socket.disconnect();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0b0b0c" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "700" }}>Global Messaging</Text>
        <Text style={{ color: "#a1a1aa", marginTop: 8 }}>Realtime mobile chat foundation is ready.</Text>
      </View>
    </SafeAreaView>
  );
}
