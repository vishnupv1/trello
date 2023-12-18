import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { fetchList, fetchListSuccess } from "./action";
import { map, switchMap, tap } from "rxjs";
import { UserservicesService } from "../services/userservices.service";


@Injectable()
export class userEffects {
    constructor(private action$: Actions, private userService: UserservicesService) { }
    loadList$ = createEffect(() =>
        this.action$.pipe(ofType(fetchList), switchMap(() => {
            return this.userService.getBoard().pipe(map((data) => {
                return fetchListSuccess({ lists: Object.values(data) })
            }))
        })))
}