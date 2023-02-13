import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Button, Switch, SafeAreaView } from 'react-native';
import { Styles } from './Styles/Styles';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function App() {
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [time, setTime] = useState(0);
    const [gender, setGender] = useState("Male");
    const [calculation, setCalculation] = useState('');

    const Genders = [
      {type: 'Male'},
      {type: 'Female'}
    ]

    function calculate() {
    
      let result = 0;
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let grams_left = grams - (burning * time);

      if (gender === "Male") {
        result = grams_left / (weight * 0.7);
      } else {
        result = grams_left / (weight * 0.6);
      }
      if (result < 0) {
        result = 0;
      }
      
      setCalculation(result.toFixed(2));
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={Styles.container} contentContainerStyle={Styles.scrollContent}>
    <View style={Styles.Switch}>
      <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}>
          </Switch>
          </View>
    <View style={Styles.view}>
      <Text style={Styles.Title}>Alcometer</Text>
      <TextInput style={Styles.input}
       placeholder='Weight'
      value={weight}
      maxLength={3}
      onChangeText={setWeight}
      keyboardType='numeric'>
      </TextInput>
      <Text style={Styles.NumInputText}>Bottles</Text>
      <NumericInput
      value={bottles}
      onChange={b => setBottles(b)}
      minValue={0}
      rounded
      />
      <Text style={Styles.NumInputText}>Hours</Text>
      <NumericInput style={Styles.numinput}
      value={time}
      onChange={t => setTime(t)}
      minValue={0}
      rounded
      />
      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={Styles.radiostyle}>
        <RadioButton value="Male"/>
        <Text style={Styles.RadioText}>Male</Text>
        </View>
        <View style={Styles.radiostyle}>
        <RadioButton value="Female"/>
        <Text style={Styles.RadioText}>Female</Text>
        </View>
      </RadioButton.Group>

      <Button mode='contained' title='Calculate' onPress={calculate}></Button>
      <Text>{calculation}</Text>
    </View>
    </ScrollView>
    
  );
}