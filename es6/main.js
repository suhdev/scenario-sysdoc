import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, Combiner, IntegerPromisify } from 'strikejs';
import * as Immutable from 'immutable';
import { DataStore } from './services/DataStore';
import { DecisionTree } from './controllers/DecisionTree/DecisionTree';
import { ACTIONS } from './controllers/DecisionTree/Actions';
(function () {
    let store = Store.create(Immutable.Map({}), Combiner.combine(), [IntegerPromisify], false, false);
    let dataStore = new DataStore();
    ReactDOM.render(React.createElement(DecisionTree, {store: store}), document.getElementById('SiteContainer'), () => {
        store.ready();
        store.dispatch(ACTIONS.INIT);
        dataStore.loadStaff((e) => {
            store.dispatch(ACTIONS.STAFF_LOADED(e));
        });
    });
}());
