import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import { money } from '../lib/utils';

export default function ComboBox(props) {
    const [selectedCurrency, setSelectedCurrency] = useState(props.currencies[0] ? props.currencies[0].code : 'USD');
    const [currencyValue, setCurrencyValue] = useState(`${selectedCurrency} 0,00`);

    const handleUpdateCurrency = (currency) => {
        setSelectedCurrency(currency);

        setCurrencyValue(`${currency} ${money(currencyValue)}`);
    }

    const handleUpdateCurrencyValue = (value) => {
        const currencyLabel = selectedCurrency;

        setCurrencyValue(`${currencyLabel} ${money(value)}`);
    }

    return (
        <View style={styles.currencyContainer}>
            <Text style={styles.title}>{props.title}</Text>

            <View style={styles.comboBox}>
                <Picker selectedValue={selectedCurrency} onValueChange={handleUpdateCurrency}>
                    {props.currencies.map(currency => 

                    <Picker.Item
                        label={currency.name} 
                        value={currency.code}
                        key={currency.code}
                    />

                    )}
                </Picker>
            </View>

            <View style={styles.input}>
                <TextInput
                    color="black"
                    fontSize={16}
                    placeholder="Digite o valor"
                    keyboardType='numeric'
                    onChangeText={handleUpdateCurrencyValue}
                    value={currencyValue}
                />
            </View>

            <TouchableOpacity
                activeOpacity={.8}>
                <Text style={styles.button}>Converter</Text>
            </TouchableOpacity>
        </View>
    )
}

/*export class ComboBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCurrency: '',
            currencyValue: 0
        };
    }

    handleUpdateCurrency = (currency) => {
        this.setState({
            currencyValue: this.state.currencyValue,
            selectedCurrency: currency
        });
    }

    handleUpdateCurrencyValue = (value) => {
        this.setState({
            selectedCurrency: this.state.selectedCurrency,
            currencyValue: value.replace(/\D/g, '')/100
        });
    }

    render() {
        return (
            <View style={styles.currencyContainer}>
                <Text style={styles.title}>{this.props.title}</Text>

                <View style={styles.input}>
                    <TextInput
                        placeholder="Digite o valor"
                        keyboardType='numeric'
                        onChangeText={(text) => this.handleUpdateCurrencyValue(text)}
                        defaultValue={this.state.currencyValue}
                        value={this.state.currencyValue}
                    />
                </View>

                <View style={styles.comboBox}>
                    <Picker selectedValue={this.state.selectedCurrency} onValueChange={this.handleUpdateCurrency}>
                        {this.props.currencies.map(currency => 

                        <Picker.Item
                            label={currency.name} 
                            value={currency.code}
                            key={currency.code}
                        />

                        )}
                    </Picker>
                </View>
            </View>
        )
    }
}

export default ComboBox;
*/

const styles = StyleSheet.create({
    currencyContainer: {
        padding: 12
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },

    input: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginTop: 14,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000000AA',
    },
    
    comboBox: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginTop: 14,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000000AA',
    },

    comboText: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#FFF'
    },

    button: {
        fontSize: 18,
        paddingVertical: 12,
        backgroundColor: 'white',
        marginTop: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#000000AA'
    }
});