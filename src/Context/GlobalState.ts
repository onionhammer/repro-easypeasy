import { createContextStore, computed, Computed, action, Action } from 'easy-peasy';

type GlobalState = {
    on: boolean
    setOn: Action<GlobalState, boolean>

    getSomething1: Computed<GlobalState>
    getSomething2: Computed<GlobalState>
    getSomething3: Computed<GlobalState>

}

const GlobalState = createContextStore<GlobalState>({
    on: false,
    setOn: action((state, on) => { state.on = on }),

    getSomething1: computed((state) => fetch("something1?on=" + state.on)),
    getSomething2: computed((state) => fetch("something2?on=" + state.on)),
    getSomething3: computed((state) => fetch("something3?on=" + state.on)),
});

export default GlobalState;