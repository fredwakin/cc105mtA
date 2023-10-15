import { Injectable } from '@angular/core';
import { Datas } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listofdata:Datas[]=[
    new Datas(crypto.randomUUID(),'Suede Icons Of Unity Two Sneakers','Puma','Black & White',5800,'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/393751/01/sv01/fnd/PHL/fmt/png','available'),
    new Datas(crypto.randomUUID(),'Vans Old Skool Black Skateboarding Shoes','Vans','Black & White',2718,'https://i.ebayimg.com/images/g/xFcAAOSwJcZWdL5y/s-l1200.jpg','out of stock'),
    new Datas(crypto.randomUUID(),"ForeverRun NITRO Women's Running Shoes",'Puma','Black & White',8700,"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377758/01/sv01/fnd/PHL/fmt/png/ForeverRun-NITRO-Women's-Running-Shoes",'available'),

  ];

  getData(){
    return this.listofdata;
  }
  addData(datas:Datas){
    this.listofdata.push(datas);
  }
  deleteData(index:number){
    this.listofdata.splice(index,1)
  }
  editData(index:number,datas:Datas){
    this.listofdata[index]=datas;
  }
  getSpecData(index:number){
    return this.listofdata[index]
  }
}