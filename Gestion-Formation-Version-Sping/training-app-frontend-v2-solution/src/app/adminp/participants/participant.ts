export class Participant {
    constructor(
      public _id: number,
      public name: string,
      public lastName: string,
      public email:string,
      public adress: string,
      public tel: string,
      ) {  }
    static fromJson(json) {
      return new Participant(json._id, json.name, json.lastName,json.email,json.adress, json.tel);
    }
  }
  