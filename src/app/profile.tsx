import { StyleSheet, Text, View } from 'react-native'


export default function profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>นายวัชรากร คำชมภู</Text>
      <Text style={styles.subtitle}>รหัสประจำตัว 68319010010</Text>
      <Text style={styles.subtitle}>สาขาวิชา เทคโนโลยีสารสนเทศ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2263eb",
    },
    subtitle: {
        fontSize: 18,
        color: "#475569",
        marginTop: 8,
    }
})