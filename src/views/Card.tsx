import * as React from 'react';
import{Button} from './Button'; 

/**
 * Card component properties
 * 
 * @export
 * @interface CardProps
 */
export interface CardProps {
    /**
     * The label of the card.
     * 
     * @type {string}
     */
    label:string;
    /**
     * The heading of the card. 
     * 
     * @type {string}
     */
    heading:string;
    /**
     * The index of the card.
     * 
     * @type {number}
     */
    index:number;

}


/**
 * A stateless container component that can be used to contain other components. 
 * 
 * @export
 * @class Card
 * @extends {React.Component<CardProps, any>}
 */
export class Card extends React.Component<CardProps,any>{
    /**
     * Creates an instance of Card.
     * 
     * @param {CardProps} props (description)
     */
    constructor(props:CardProps){
        super(props);
        this.state = {}; 
    }

    render(){
        return (
            <div className="of-card" data-index={this.props.index}>
                <div className="of-card-label">{this.props.label}</div>
                <div className="content-wrapper">
                    <h2 className="tree-heading">{this.props.heading}</h2>
                    {this.props.children}
                </div>
            </div>
        ); 
    }
}