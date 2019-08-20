export class Order {
    OrderId: number;
    LabelInfo: string;
    OrderDate: string;
    DeliveryAddress: {
        name:string;
        Address1: string;
        Address2: string;
        Suburb: string;
        State: string;
        PostCode : string;
        Country:string;
        Phone: number;
        Email: string;       
    };
  };