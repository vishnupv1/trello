import { createFeatureSelector, createSelector } from "@ngrx/store";



export const listSelectorState = createFeatureSelector<any[]>('lists')
export const listSelectorData = createSelector(listSelectorState, (state: any[]) => { return state })