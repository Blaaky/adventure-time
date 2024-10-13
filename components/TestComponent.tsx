import { Text, StyleSheet } from "react-native";

export type TestComponentProps = {
  firstName?: string;
  lastName?: string;
};

const TestComponent = (props: TestComponentProps) => {
  const { firstName, lastName } = props;

  return (
    <Text style={styles.text}>
      {firstName} {lastName}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default TestComponent;
