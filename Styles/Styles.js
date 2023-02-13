import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    Title: {
        fontSize: 30,
        fontFamily: 'ArialMT',
        fontWeight: 'bold',
        alignItems: 'center'
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
        paddingTop: 10,
        margin: 3,
        backgroundColor: 'grey',
        borderRadius: 10,
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
        fontSize: 20,
        borderRadius: 5
      }, 
      Switch: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        marginTop: -110,
        marginRight: 50
      }

});


export {Styles};