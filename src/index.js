import React, { useEffect, useState } from 'react';
import { Text, StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import CurrencyPicker from './components/CurrencyPicker';

import api from './services/api';

export default function App() {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        api.get('/json/all').then(response => {
            const currencies = Object.keys(response.data).map(code => {
                return {
                    code: response.data[code].code,
                    name: response.data[code].name
                }
            });

            setCurrencies([
                ...currencies
            ]);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            
            <SafeAreaView style={styles.container}>
                <CurrencyPicker key="from_currency" currencies={currencies} title="Converter para BRL" />
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignContent: 'center',
        justifyContent: 'center'
    }
});