export class Formateur {
    constructor(
      public id: number,
      public name: string,
      public lastname: string,
      public email:string,
      public adress: string,
      public tel: string,
      ) {  }
    static fromJson(json) {
      return new Formateur(json.id, json.name, json.lastname,json.email,json.adress, json.tel);
    }
  }
  