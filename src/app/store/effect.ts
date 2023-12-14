import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { fetchList, fetchListSuccess } from "./action";
import { map, switchMap, tap } from "rxjs";
import { UserservicesService } from "../services/userservices.service";


@Injectable()
export class userEffects {
    userNum: string | null = localStorage.getItem('userNum')
    constructor(private action$: Actions, private userService: UserservicesService) { }

    loadLists$ = createEffect(() =>
        this.action$.pipe(ofType(fetchList), switchMap(() => {
            return this.userService.getList().pipe(map((data) =>
                fetchListSuccess({ lists: Object.values(data) })))
        })))
}