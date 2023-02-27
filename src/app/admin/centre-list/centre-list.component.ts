import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
@Component({
  selector: 'app-centre-list',
  templateUrl: './centre-list.component.html',
  styleUrls: ['./centre-list.component.css']
})
export class CentreListComponent implements OnInit  {
  centresData:any 
  tableName="Centres"
  p: number = 1;
  term:any
  order: string = 'name';
  reverse: boolean = true;
  changeOrder(val:any){
    this.order=val
    this.reverse =!this.reverse
  }
   constructor(private globalService:GlobalService){  
   }
   // Get Record
   ngOnInit():void{
     this.globalService.getRecords(this.tableName).subscribe((res)=>{
       //console.log(res)
       this.centresData = res
     })
   }
  // Delete Record
  delete(id:any){
   this.globalService.deleteRecord(this.tableName,id).subscribe(()=>{
     alert('Records of "id ' + id + '" is deleted successfully')
     this.ngOnInit() // refresh the page after deleting
   })
  }
}