import * as React from 'react';
/**
 * (description)
 *
 * @export
 * @class ListItem
 * @extends {React.Component<ListItemProps, ListItemState>}
 */
export class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {};
    }
    onClick(e) {
        this.props.onClick(this.props.userData, e);
    }
    shouldComponentUpdate(props) {
        return props.label !== this.props.label ||
            props.itemKey !== this.props.itemKey ||
            props.userData !== this.props.userData;
    }
    render() {
        return (React.createElement("div", {className: "of-list-item", onClick: this.onClick}, this.props.label));
    }
}
/**
 * A stateless component representing a List.
 *
 * @export
 * @class List
 * @extends {React.Component<ListProps, ListState>}
 */
export class List extends React.Component {
    constructor(props) {
        super(props);
        //binding functions in the constructor is mainly done to optimise performance 
        //of React components. 
        this.onClick = this.onClick.bind(this);
        this.state = {};
    }
    onClick(userData, e) {
        this.props.onItemClick(userData, e);
    }
    shouldComponentUpdate(props) {
        return props.items !== this.props.items;
    }
    render() {
        let items = this.props.items.map((e) => {
            return (React.createElement(ListItem, {key: e.key, itemKey: e.key, label: e.label, onClick: this.onClick, userData: e.userData}));
        });
        return (React.createElement("div", {className: "of-list"}, items));
    }
}
