export class Product{
    pId:number;
    pCompany:String;
    pModel:String;
    price:number;
    pDescription:String;
    photos:String;
    category:String;
   fullName:String;
   mobile:number;
   city:String;

    constructor(){
        this.pId=0;
        this.pCompany="";
        this.price=0;
        this.pDescription="";
        this.photos="";
        this.category=" ";
        this.fullName="";
        this.mobile=0;
        this.city='';
        this.pModel='';
    }
}