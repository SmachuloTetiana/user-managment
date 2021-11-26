import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    name: {
        margin: '0 15px',
        fontFamily: '"Roboto", sans-serif',
        fontSize: 16,
        color: '#20262d',
    },
    signOutBtn: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: 16,
        color: '#20262d',
        textTransform: 'capitalize',
        boxShadow: 'none',
        backgroundColor: '#f3f6f9',
        border: '1px solid #dfdfdf',
        '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#dfdfdf'
        }
    }
}));

export default useStyles;