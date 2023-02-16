import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgrey'
    },
    Title: {
        fontSize: 30,
        fontFamily: 'ArialMT',
        fontWeight: 'bold',
        alignItems: 'center',
        paddingBottom: 100
    },
    scrollContent:{
        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center'
      },
      NumInputText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center'
      },
      
      radiostyle: {
        flexDirection: 'row',
        margin: 7,
        backgroundColor: 'grey',
        borderRadius: 200,
        paddingTop: 10
      },
      RadioText: {
        fontSize: 25,

      },
      numinput: {
        padding: 5
      },
      input: {
        height: 30,
        borderwidth: 2,
        margin: 5,
        backgroundColor: '#e0dbdb',
        width: 130,
        fontSize: 15,
        borderColor: 'black',
        borderBottomWidth: 2
      }, 
      Switch: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        marginTop: -110,
        marginRight: 50
      },
      green: {
        color: 'green'
      },
      yellow: {
        color: 'yellow'
      },
      red: {
        color: 'red'
      }

});


export {Styles};