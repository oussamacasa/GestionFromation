export class Session {
  constructor(
    public id: number,
    public name: string,
    public track: string,
    public date: Date,
    public duree: number,
    public adress: string,
    public participants: number,
    public isCompleted: boolean) {  }
  static fromJson(json) {
    return new Session(json.id, json.name, json.track, json.date, json.duree, json.adress,
       json.participants, json.isCompleted);
  }
}

