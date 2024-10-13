import { Text, StyleSheet, View } from "react-native";

export type User = {
  name: string;
  email: string;
  phone: string;
};

const UserData = ({ user }: { user: User | undefined }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user?.name}</Text>
      <Text style={styles.text}>{user?.email}</Text>
      <Text style={styles.text}>{user?.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default UserData;
