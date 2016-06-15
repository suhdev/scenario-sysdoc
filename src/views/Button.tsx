import * as React from 'react'; 

export interface ButtonProps {
    onClick:Function;
    userData:any;
    className?:string;
    label:string;
}

export interface ButtonState {

}

/**
 * A stateless component representing a button.
 * 
 * @export
 * @class Button
 * @extends {React.Component<ButtonProps, ButtonState>}
 */
export class Button extends React.Component<ButtonProps,ButtonState>{
    constructor(props:ButtonProps){
        super(props);
        //binding functions in the constructor is mainly done to optimise performance 
        //of React components. 
        this.onClick = this.onClick.bind(this); 
        this.state = {};
    }

    onClick(e:any){
        this.props.onClick(this.props.userData,e); 
    }

    shouldComponentUpdate(props:ButtonProps){
        return props.label !== this.props.label ||
            props.userData !== this.props.userData;
    }

    render(){
        let clz = this.props.className || "";
        return (
            <div className={"of-btn "+clz} onClick={this.onClick}>{this.props.label}</div>
        );
    }
}