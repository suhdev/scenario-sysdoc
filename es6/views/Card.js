import * as React from 'react';
/**
 * A stateless container component that can be used to contain other components.
 *
 * @export
 * @class Card
 * @extends {React.Component<CardProps, any>}
 */
export class Card extends React.Component {
    /**
     * Creates an instance of Card.
     *
     * @param {CardProps} props (description)
     */
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", {className: "of-card", "data-index": this.props.index}, React.createElement("div", {className: "of-card-label"}, this.props.label), React.createElement("div", {className: "content-wrapper"}, React.createElement("h2", {className: "tree-heading"}, this.props.heading), this.props.children)));
    }
}
