import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'

const CustomButton = ({text,variant}) => (
    <Button className="custom-button" variant={variant}>{text}</Button>
)

export default CustomButton;

// const CustomButton = (props) => (
//     <Button className="custom-button" variant={props.variant}>{props.text}</Button>
// )

// export default CustomButton;