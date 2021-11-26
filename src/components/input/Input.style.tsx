import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {        
        marginBottom: theme.spacing(2),

        '& .MuiInputBase-input': {
            padding: theme.spacing(2, 1),
            fontFamily: '"Roboto", sans-serif',
            fontSize: 14,
            color: '#20262d',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#888fdc',
                borderWidth: 1
            }
        }
    }
}));

export default useStyles;