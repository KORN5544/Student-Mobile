import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'


export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example this days baby</Text>
      <Link href="/hello" style={styles.link}>1.Hello World</Link>
      <Link href="/greet" style={styles.link}>2.Greet</Link>
      <Link href="/counter" style={styles.link}>3.Counter</Link>
      <Link href="/student_list" style={styles.link}>4.Student List</Link>
      <Link href="/students" style={styles.link}>5.Students</Link>
      <Link href="/profile" style={styles.link}>6.Profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBlock: 4,
  },
  link: {
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: 18,
    padding: 16,
    borderRadius: 12,
  }
})