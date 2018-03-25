import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.head}>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} >
      Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.slider}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.isiBtn}>
          <View style={styles.btn1}>
            <View style={styles.button}><Text> L </Text></View>
            <View style={styles.button}><Text> O </Text></View>
            <View style={styles.button}><Text> V </Text></View>
            <View style={styles.button}><Text> E </Text></View>
            
          </View>
          <View style={styles.btn2}>
            <View style={styles.button}><Text> B </Text></View>
            <View style={styles.button}><Text> A </Text></View>
            <View style={styles.button}><Text> L </Text></View>
            <View style={styles.button}><Text> I </Text></View>
          </View>
          <View style={styles.footer}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} >
            #JaenKuliahDiPTI</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#004D40',
    flex: 1,
    flexDirection: 'column' //default Flex Direction adalah column
    //ketika Column maka memenuhi layar secara vertikal
    ////ketika Row maka memenuhi layar secara horizontal
  },
  head: { //Layar dalam android dibagi menjadi 3 lebar sesuai nilai flex
    flex: 1, //
    backgroundColor: '#0091EA',
    marginTop: 25,
    //alingItems: 'center',
    justifyContent: 'center',

  },
  slider: {
    flex: 6, // lebar dari box menjadi lebih besar dari 1
    backgroundColor: '#B3E5FC',
    flexDirection: 'column',
    justifyContent: 'space-around',
    //space-around membuat spasi pada tulisan ->main access
    //space-between membuat spasi diantara tulisan
    alignItems: 'center'
    //center mengatur tulisan pada box bagian tengah
    //flex-end mengatur tulisan pada box bagian akhir
    //flex-start mengatur tulisan pada box bagian awal
  },
  btn1: {
    flex: 4, // lebar box lebih besar dari 2
    backgroundColor: '#F44336',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  btn2: {
    flex: 4, // lebar box lebih besar dari 2
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#E8EAF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isiBtn: {
    flex: 9,
    backgroundColor: '#303F9F'
  },
  footer: {
    flex: 1, // lebar box lebih besar dari 2
    backgroundColor: '#0D47A1',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25
  },
});
