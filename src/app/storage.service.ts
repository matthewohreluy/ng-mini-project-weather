import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService{
    refetchInterval = 3000;

    get<T>(key: string): T{
        try {
            return JSON.parse(localStorage.getItem(key))
          } catch (e) {
            console.error('Error getting data from localstorage', e)
            return null
          }
    }

    set<T>(key: string, obj: T){
        const data = JSON.stringify(obj)
        try {
            localStorage.setItem(key, data)
            } catch (e) {
            console.error('Error saving to localStorage', e)
            }
    }

    remove(key: string){
        localStorage.removeItem(key);
    }

}