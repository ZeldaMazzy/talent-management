import { ErrorHandlingService } from './../shared/error-handling.service';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { Talent } from '../models/talent';
import { Error } from '../models/errorMsg';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  private baseUrl: string = environment.baseApiUrl + "Talent/";

  private getUrl: string = this.baseUrl + "get";
  private postUrl: string = "";
  private updateUrl: string = "";
  private deleteUrl: string = "";

  constructor(private _http: HttpClient, private _errorHandling: ErrorHandlingService) { }

  getTalentTest() {
    const req = new HttpRequest('GET', this.getUrl + "?userId=1", {
      reportProgress: true
    });

    return this._http.request(req);
  }

  getTalent(): Array<Talent> {

    this._http.get(this.getUrl + "?userId=1").subscribe({
      next: (response: any) => {
        const talentResponse: Talent[] = [];

        response.forEach((t: any) => {
          const talent: Talent = {
            id: t.id,
            firstname: t.firstname,
            lastname: t.lastname,
            gender: t.gender,
            age: t.age,
            race: t.race,
            email: t.email,
            phone: t.phone
          }
          talentResponse.push(talent);
        })

        console.log(talentResponse);

        return talentResponse;
      },
      error: (reject) => {
        this._errorHandling.httpErrorHandle(reject.status, "talent")
        return [];
      }
    })
    return [];
  }

  getSingleTalent(id: number): Talent | Error | null {
    this._http.get(this.getUrl + id + "?userId=1").subscribe({
      next: (t: any) => {

        console.log(t);

        return {
          id: t.id,
          firstname: t.firstname,
          lastname: t.lastname,
          gender: t.gender,
          age: t.age,
          race: t.race,
          email: t.email,
          phone: t.phone
        }

      },
      error: (reject) => {
        return this._errorHandling.httpErrorHandle(reject.status, "talent");
      }
    })
    return null;
  }
}
