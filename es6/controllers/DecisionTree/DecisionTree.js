import * as React from 'react';
import { ControllerView } from 'strikejs';
import { Reducer } from './Reducer';
import * as Immutable from 'immutable';
import { ACTIONS } from './Actions';
import { Switch } from '../../views/Switch';
import { Button } from '../../views/Button';
import { Card } from '../../views/Card';
import { List } from '../../views/List';
import { Footer } from './Footer';
import { SubFooter } from './SubFooter';
import { SOLUTION_TYPE_STATES, SOLUTION_VALUE_LEVELS } from '../../constants';
import { STATE_KEY, DecisionTreeInitialState } from './StateAndProps';
/**
 * A stateful component that serves as the container of the application.
 *
 * @export
 * @class DecisionTree
 * @extends {ControllerView<DecisionTreeProps, DecisionTreeState>}
 */
export class DecisionTreeCtrl extends ControllerView {
    /**
     * Creates an instance of DecisionTree.
     *
     * @param {DecisionTreeProps} props (description)
     */
    constructor(props) {
        super(props, STATE_KEY);
        this.state = DecisionTreeInitialState;
        this.onSolutionTypeChange = this.onSolutionTypeChange.bind(this);
        this.onStrategicChange = this.onStrategicChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onComplexityChange = this.onComplexityChange.bind(this);
        this.onNextCard = this.onNextCard.bind(this);
        this.onPrevCard = this.onPrevCard.bind(this);
        this.onFinish = this.onFinish.bind(this);
        this.onMemberClick = this.onMemberClick.bind(this);
    }
    /**
     * This has been added in case extra functionality is required upon clicking on a member of staff.
     *
     * @param {*} e (description)
     */
    onMemberClick(e) {
    }
    /**
     * Called when the user clicks on Finish. The method triggers the FINISH action,
     * which performs the calculation and provides the final results.
     */
    onFinish() {
        this.props.store.dispatch(ACTIONS.FINISH);
    }
    /**
     * Called when the next button is pressed.
     *
     */
    onNextCard() {
        this.props.store.dispatch(ACTIONS.NEXT_CARD);
    }
    /**
     * Called when the prev button is pressed.
     *
     */
    onPrevCard() {
        this.props.store.dispatch(ACTIONS.PREV_CARD);
    }
    /**
     * Called when the value switch is changed.
     *
     * @param {number} e the index of the new value state.
     */
    onValueChange(e) {
        this.props.store.dispatch(ACTIONS.VALUE(e));
    }
    /**
     * Called when the complexity switch is changed.
     *
     * @param {number} e the index of the new complexity state.
     */
    onComplexityChange(e) {
        this.props.store.dispatch(ACTIONS.COMPLEXITY(e));
    }
    /**
     * Called when the brand requirement switch is changed.
     *
     * @param {number} e the index of the new brand requirement state.
     */
    onSolutionTypeChange(e) {
        this.props.store.dispatch(ACTIONS.REQUIRES_BRAND(e));
    }
    /**
     * Called when the strategic
     *
     * @param {*} e (description)
     */
    onStrategicChange(e) {
        this.props.store.dispatch(ACTIONS.STRATEGIC(e));
    }
    /**
     * Called after the component's first render.
     */
    componentDidMount() {
        super.componentDidMount();
        this.props.store.replaceStateAt(STATE_KEY, Immutable.Map(DecisionTreeInitialState));
        this.props.store.combiner.addReducer(STATE_KEY, Reducer);
    }
    render() {
        let staff = this.state.filteredStaff.map((e) => {
            return {
                key: e.name,
                label: e.name + '( ' + e.roleLabel + ' )',
                userData: e,
            };
        });
        return (React.createElement("div", {id: "DecisionTree", "data-card": this.state.card}, React.createElement("a", {href: "http://www.sysdocgroup.com", target: "blank", className: "sysdoc-logo"}, React.createElement("img", {src: "http://sysdocgroup.com/addons/default/themes/sysdoc/img/sysdoc/logo.png"})), React.createElement(Card, {label: "End User Interaction", heading: "Does the Solution involve end user interaction?", index: 0}, React.createElement(Switch, {onChange: this.onSolutionTypeChange, selState: this.state.level, states: SOLUTION_TYPE_STATES, className: "primary"}), React.createElement(Button, {className: "next-button", onClick: this.onNextCard, userData: "", label: "Next"})), React.createElement(Card, {label: "Strategic Opportunity", heading: "Is it a strategic opportunity?", index: 1}, React.createElement(Switch, {onChange: this.onStrategicChange, selState: this.state.strategic, states: SOLUTION_TYPE_STATES, className: "primary"}), React.createElement(Button, {className: "next-button", onClick: this.onNextCard, userData: "", label: "Next"}), React.createElement(Button, {className: "prev-button", onClick: this.onPrevCard, userData: "", label: "Prev"})), React.createElement(Card, {label: "Consultation Value", heading: "What is the value of the consultation?", index: 2}, React.createElement(Switch, {onChange: this.onValueChange, selState: this.state.value, states: SOLUTION_VALUE_LEVELS, className: "primary"}), React.createElement(Button, {className: "next-button", onClick: this.onNextCard, userData: "", label: "Next"}), React.createElement(Button, {className: "prev-button", onClick: this.onPrevCard, userData: "", label: "Prev"})), React.createElement(Card, {label: "Consultation Complexity", heading: "What is the complexity of the consultation?", index: 3}, React.createElement(Switch, {onChange: this.onComplexityChange, selState: this.state.complexity, states: SOLUTION_VALUE_LEVELS, className: "primary"}), React.createElement(Button, {className: "next-button", onClick: this.onFinish, userData: "", label: "Finish"}), React.createElement(Button, {className: "prev-button", onClick: this.onPrevCard, userData: "", label: "Prev"})), React.createElement(Card, {label: "Who Should Go", heading: "The following should be involved:", index: 4}, React.createElement(List, {onItemClick: this.onMemberClick, items: staff}), React.createElement(Button, {className: "prev-button", onClick: this.onPrevCard, userData: "", label: "Prev"})), React.createElement(Footer, null), React.createElement(SubFooter, null)));
    }
}
