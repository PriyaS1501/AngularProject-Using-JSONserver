import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { FormBuilder } from '@angular/forms';
import { regExFullName, regExEmail, regExContact, regExExperience } from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: any
  docObj: any
  editForm: any
  tableName = "Doctors"
  submitted: boolean = false
  centresData:any 
  tableName1="Centres"
  regularExpFullName = regExFullName
  regularExpExperience = regExExperience
  regularExpEmail = regExEmail
  regularExpContact = regExContact
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private service: GlobalService, private router: Router) { }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((para) => {
      this.id = para.get('id')
      console.log(">>" + this.id)
    })


    this.service.getRecord(this.tableName, this.id).subscribe((res) => {
      this.docObj = { ...res }
      console.log(res)
    })
    this.service.getRecords(this.tableName1).subscribe((res)=>{
      //console.log(res)
      this.centresData = res
    })

  }
  putData(data: any) {
    this.submitted = true
    // console.log(data)
    const temp = {
      id: this.id,
      name: data.name,
      qualification: data.qualification,
      speciality: data.speciality,
      experience: data.experience,
      about: data.about,
      email: data.email,
      contact: data.contact,
      centre: data.centre,
      OPDtimeAM: data.OPDtimeAM,
      OPDtimePM: data.OPDtimePM,
      OPDdays: data.OPDdays,
      gender: data.gender
    }
    this.service.updateRecord(this.tableName, temp).subscribe(() => {
      alert("Data of employee id " + this.id + " is updated sucessfully")
      this.router.navigate(['/admin/doctorlist'])
    })

   
  }
}
