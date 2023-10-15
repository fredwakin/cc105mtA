import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Datas } from '../data.model';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent {
  
  form!:FormGroup;
  index:number=1;
  editmode=false;
  stats = [{'id':1, 'status':'out of stock'}, {'id':2, 'status': 'available'}];
  brands = [{'id':1, 'brand':'Nike'}, {'id':2, 'brand': 'Adidas'}, {'id':3, 'brand': 'Puma'}, {'id':4, 'brand': 'Vans'}, {'id':5, 'brand': 'Skechers'}, {'id':6, 'brand': 'Reebok'}];
  

    constructor(private dataservice:DataService, private router:Router, private actroute:ActivatedRoute){}
  
    ngOnInit():void{
      let name="";
      let color="";
      let brand="";
      let price:number=0;
      let img="";
      let status="";
         this.actroute.params.subscribe((params:Params)=>{
          if(params['index']){
            this.index=params['index'];
            const dataspec=this.dataservice.getSpecData(this.index);
            name=dataspec.name;
            color=dataspec.color;
            brand=dataspec.brand;
            price=dataspec.price;
            img=dataspec.img;
            status=dataspec.status;
            this.editmode=true;
          }
         }
         );

         this.form= new FormGroup({
          name:new FormControl(name, [Validators.required]),
          brand:new FormControl(brand, [Validators.required]),
          color:new FormControl(color, [Validators.required]),
          img:new FormControl(img, [Validators.required]),
          price:new FormControl(price, [Validators.required]),
          status:new FormControl(status, [Validators.required]),
        });
      }

      
      onSubmit(){
        const id = crypto.randomUUID();
        const name= this.form.value.name;
        const color= this.form.value.color;
        const brand= this.form.value.brand;
        const img= this.form.value.img;
        const price= this.form.value.price;
        const status= this.form.value.status;
        const data: Datas=new Datas(id,name,brand,color,price,img,status);
        if(this.editmode==true){
          this.dataservice.editData(this.index, data);
        }
        else{
          this.dataservice.addData(data);
        }
          this.router.navigate(['datatable']);
      }
    }