import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btnStyles: {
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
    tableHead: {
        backgroundColor: '#f3f6f9',

        '& th': {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 16,
            color: '#20262d',
            fontWeight: 'bold',
            textTransform: 'capitalize'
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_Box: {
        width: 450,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: '20px 16px'
    },
    modal_Title: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: 20,
        color: '#20262d',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    modal_Btn: {
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
    closeBtn: {
        padding: 0
    },
    tableCell: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: 14,
        color: '#20262d'
    },
    fileTextField: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        },
        '& .MuiOutlinedInput-input': {
            padding: theme.spacing(1, 0)
        }
    }
}));

export default useStyles;