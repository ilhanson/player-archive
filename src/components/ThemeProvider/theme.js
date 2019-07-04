import { StyleSheet } from 'aphrodite/no-important';

const theme = {
    common: {
        fontFamily: 'Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif',
        color: '#141e28',
        backgroundColor: '#fff',
        fontSize: '1rem'
    },
    primary: {
        color: '#323c46',
        backgroundColor: '#fff',
    },
    secondary: {
        color: '#577288',
        backgroundColor: '#f0f2f5',
    },
    accent: {
        color: '#32b846',
        backgroundColor: '#fff',
    },
    styles: StyleSheet.create({
        centerText: {
            textAlign: 'center'
        },
        formGroup: {
            display: 'inline-block',
        },
        input: {
            maxWidth: 400,
            border: '1px solid #999',
            boxSizing: 'border-box',
            padding: 6,
            transition: 'all 0.1s linear',
            borderRadius: 0,
            backgroundClip: 'padding-box'
        },
        customFocus: {
            ':focus': {
                boxShadow: '0 0 10px #2683cc',
                outline: 'none'
            }
        }
    })
};

export default theme;