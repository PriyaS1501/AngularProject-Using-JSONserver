import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit  {
  appointmentsData:any 
  tableName="Appointments"
  p: number = 1;
  term:any
  order: string = 'doa';
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
       this.appointmentsData = res
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
