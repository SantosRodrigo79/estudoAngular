export class Loja {
    status:any;
    data: any;
    daily:any;
    entries:any;
    category:any;
    items: any;
    name:any;
    images:any;
    smallIcon:any;
    description:any;
    featured:any;
    regularPrice:any;
    finalPrice:any;


    constructor(values:Object){
        Object.assign(this, values)

    }


}