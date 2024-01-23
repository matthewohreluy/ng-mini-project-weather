import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CachingService{
    private readonly refetchInterval = 600; //seconds

    private get refetchIntervalInMS(){
        return this.refetchInterval * 1000;
    }

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


    getMillisecondsNow(): number{
        const currentDate = new Date();
        return currentDate.getTime();
    }

    shouldRefetchData(timeStamp: number): boolean{
       console.log(this.getMillisecondsNow() - timeStamp);
       console.log(timeStamp);
       return this.getMillisecondsNow() - timeStamp  > this.refetchIntervalInMS
    }
}