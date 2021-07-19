import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import s from './DiscreteSlider.module.css'
import { useDispatch } from 'react-redux';
import { switchThemeAC } from '../../h10/bll/switchThemeReducer';

const marks = [
  {
    value: 0,
    label: 'dark',
  },
  {
    value: 33,
    label: 'red',
  },
  {
    value: 66,
    label: 'green',
  },
  {
    value: 100,
    label: 'yellow',
  },
];

function valuetext(value: number) {
  return `${value} style`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider() {

  const dispatch = useDispatch()

  const onChangeHandler = (e: any, value: any) => {

    console.log(value);

    if (value === 0) {
      dispatch(switchThemeAC('dark'))
    } else if (value === 33) {
      dispatch(switchThemeAC('red'))
    }
    else if (value === 66) {
      dispatch(switchThemeAC('green'))
    }
    else if (value === 100) {
      dispatch(switchThemeAC('yellow'))
    } else { dispatch(switchThemeAC('dark')) }
  }

  return (
    <div className={s.sliderContainer}>
      <Typography id="discrete-slider-restrict" gutterBottom className={s.typo}>
        Choose theme
      </Typography>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={onChangeHandler}
      />
    </div>
  );
}