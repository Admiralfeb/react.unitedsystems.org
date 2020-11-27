import { makeStyles } from "@material-ui/core";

const infoStyles = makeStyles({
    paper: {
        textAlign: 'center',
        width: '80%',
        margin: 'auto',
        padding: 5,
        paddingBottom: 10,
        marginBottom: 5,
    },
    specialButton: {
        display: 'flex',
        flexDirection: 'column',
    },
    flex: {
        '& button': {
            margin: 5,
        },
        '& a': {
            margin: 5,
        },
    },
});

export default infoStyles;