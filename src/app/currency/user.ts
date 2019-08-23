export class User {
    userName : String;
    address : String;
    phone : Number[];

    constructor(uName:String,add:String,phone:Number[]){
        this.userName = uName;
        this.address = add;
        this.phone = phone;
    }
    display(){
        console.log('Display Log');
    }
}
