
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

type SuperDoubleRangePropsType = {
    value: number[]
    setValue: (value: number[]) => void
}

export function SuperDoubleRange(props: SuperDoubleRangePropsType) {
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        props.setValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                SuperDoubleRange
            </Typography>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}