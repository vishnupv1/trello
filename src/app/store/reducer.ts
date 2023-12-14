import { createReducer, on } from "@ngrx/store";
import { fetchList, fetchListSuccess } from "./action";


let initalState: any[] = []


const _listReducer = createReducer(initalState,
    on(fetchListSuccess, (_state, { lists }) => {
        return Object.values(lists)
    })
)
export function listReducer(state: any, action: any) {
    return _listReducer(state, action);
}
