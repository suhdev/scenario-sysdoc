import * as React from 'react';
export class SwitchItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.onClick(this.props.index, this.props.itemKey);
    }
    render() {
        let e = this.props;
        return (React.createElement("div", {className: "of-switch-state", onClick: this.onClick, "data-index": e.index}, e.label));
    }
}
export class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selState: props.selState
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            selState: nextProps.selState
        });
    }
    render() {
        let items = this.props.states.map((e, i) => {
            return (React.createElement(SwitchItem, {key: e.key, itemKey: e.key, label: e.label, onClick: this.props.onChange, index: i}));
        }), clz = this.props.className || "";
        return (React.createElement("div", {className: "of-switch " + clz, "data-state": this.state.selState}, items));
    }
}
