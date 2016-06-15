import * as React from 'react';
/**
 * A stateless component representing a button.
 *
 * @export
 * @class Button
 * @extends {React.Component<ButtonProps, ButtonState>}
 */
export class Button extends React.Component {
    constructor(props) {
        super(props);
        //binding functions in the constructor is mainly done to optimise performance 
        //of React components. 
        this.onClick = this.onClick.bind(this);
        this.state = {};
    }
    onClick(e) {
        this.props.onClick(this.props.userData, e);
    }
    shouldComponentUpdate(props) {
        return props.label !== this.props.label ||
            props.userData !== this.props.userData;
    }
    render() {
        let clz = this.props.className || "";
        return (React.createElement("div", {className: "of-btn " + clz, onClick: this.onClick}, this.props.label));
    }
}
