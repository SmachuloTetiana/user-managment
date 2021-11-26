import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    error: {        
        fontFamily: '"Roboto", sans-serif',
        fontSize: 14,
        color: '#000',
        marginBottom: theme.spacing(3)
    }
}));

export default useStyles;