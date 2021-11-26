import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInForm: {
        width: 300,
        backgroundColor: '#f3f6f9',
        borderRadius: 20,
        padding: theme.spacing(2)
    },
    title: {        
        fontFamily: '"Roboto", sans-serif',
        fontSize: 20,
        fontWeight: 600,
        color: '#000',
        marginBottom: theme.spacing(2.5)
    },
    signInBtn: {
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
    }
}));

export default useStyles;