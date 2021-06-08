import React, { useState } from 'react'
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Front = () => {

    const [val, setVal] = useState(0)
    const [val1, setVal1] = useState(0)
    const [range, setRange] = useState(0)
    const [state, setState] = useState({ value: null })
    const [bound, setBound] = useState({ lower: 20, upper: 40, value: [20, 40] })
    const SliderWithTooltip = createSliderWithTooltip(Slider);

    const handleChange = (e) => {
        // console.log(e);
        setVal(e)
    }
    const handleChange1 = (e) => {
        // console.log(e);
        setVal1(e)
    }
    const onSliderChange = value => {
        setState({ value });
    };
    const onAfterChange = value => {
        console.log(value); //eslint-disable-line
    };

    const handleRange = (e) => {
        console.log(e, 'eeeeeeeeeeeeeeeeee');
        setRange(e)
        setBound({ value: e })
    }
    const handleInput = (e) => {
        bound.lower = e.target.value
        // console.log(input);
    }
    const handleInput1 = (e) => {
        bound.upper = e.target.value
        // console.log(input);
    }

    const handleApply = () => {
        // const {lower,upper}=bound
        //this.setState({ value: [lowerBound, upperBound] });
        setBound({ value: [bound.lower, bound.upper] })
        console.log(bound);
    }
    const percentFormatter = (v) => {
        return `${v} %`;
    }
    return (
        <div>
            <Slider min={0} max={20} onChange={handleChange} />
            <p>{val}</p>
            <Slider min={0} max={40} defaultValue={3} onChange={handleChange1} />
            <p>{val1}</p>

            <div>
                <input type="number" name="lower" min={0} placeholder={`${bound.lower} Enter minimum Value here`} onChange={handleInput} /><br></br><br></br>
                <input type="number" name="upper" min={0} placeholder={`${bound.upper} Enter maximum Value here`} onChange={handleInput1} />
                <br></br><br></br>
                <button onClick={handleApply}>Apply</button>
                <Range
                    draggableTrack
                    value={bound.value}
                    tipFormatter={value => `${value}%`}
                    tipProps={{ overlayClassName: 'foo' }}
                    trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
                    handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
                    railStyle={{ backgroundColor: 'blue' }}
                    onChange={handleRange} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <SliderWithTooltip
                value={state.value}
                step={3}
                onChange={onSliderChange}
                onAfterChange={onAfterChange}
                handleStyle={{
                    borderColor: 'blue',
                    height: 10,
                    width: 10,
                    marginLeft: 3,
                    marginTop: -3.5,
                    backgroundColor: 'black',

                }}
                trackStyle={[{ backgroundColor: 'green' }, { backgroundColor: 'green' }]}
                railStyle={{ backgroundColor: 'red', height: 4 }}
                dots
                tipFormatter={percentFormatter}
                tipProps={{ overlayClassName: 'foo' }}

            />
        </div>
    )
}

export default Front
