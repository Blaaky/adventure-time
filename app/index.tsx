import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import TestComponent from "@/components/TestComponent";
import { useEffect, useState } from "react";
import UserData, { User } from "@/components/UserData";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const getUser = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await response.json();
    setUser(json);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>

      <Link href="/search" style={styles.button}>
        Go to Search
      </Link>

      {/* customowy komponent */}
      <TestComponent firstName="Test" lastName="Component" />

      {/* komponent z danymi z api */}
      {isLoading ? <ActivityIndicator /> : <UserData user={user} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
