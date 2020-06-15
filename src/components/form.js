import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type='text' name='city' placeholder='choose a city'></input>
            <input type='text' name='country' placeholder='choose a country'></input>
            <button>Get Weather</button>
        </form>
    )
}
export default Form; 
