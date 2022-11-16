export class User {

  constructor(
    public email: string,
    public id: string,
    public firstname: string,
    public lastname: string,
    public company: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }

    return this._token;
  }
}
