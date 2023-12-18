import { createAction, props } from "@ngrx/store";


//fetch userProfile
export const fetchList = createAction(
    '[List API] fetch list API',
)
export const fetchListSuccess = createAction(
    '[List API Success] fetch list API Success',
    props<{ lists: any[] }>()
)