import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.empty .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f00'
        }
    },
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpForm: {
        width: 300,
        backgroundColor: '#f3f6f9',
        borderRadius: 20,
        padding: theme.spacing(2)
    },
    title: {        
        fontFamily: '"Roboto", sans-serif',
        fontSize: 20,
        fontWeight: 600,
        color: '#20262d',
        marginBottom: theme.spacing(2.5)
    },
    signUpBtn: {
        backgroundColor: '#888fdc',
        boxShadow: 'none',
        fontFamily: '"Roboto", sans-serif',
        fontSize: 16,
        color: '#FFF',
        textTransform: 'capitalize',
        
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#888fdc'
        }
    },
    text: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: 14,
        color: '#20262d'
    },
    link: {
        color: '#888fdc',
        paddingLeft: theme.spacing(1)
    }
}));

export default useStyles;