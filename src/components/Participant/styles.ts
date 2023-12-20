import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 20,
    height: 56,
    color: '#fff',
    marginRight: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
