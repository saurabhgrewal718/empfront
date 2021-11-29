import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeptModel } from './department.model';
import {ApiService} from '../../shared/api.service'


@Component({
  selector: 'app-findemp',
  templateUrl: './findemp.component.html',
  styleUrls: ['./findemp.component.scss']
})
export class FindempComponent implements OnInit {

  formvalue !: FormGroup;
  deptModelobj: DeptModel = new DeptModel()
  deptData !: any
  showAdd !: boolean
  showUpdate !: boolean

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }


  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      departmentName : [''],
      departmentAddress : [''],
      departmentCode : ['']
    })
    this.getallemployees()
  }

  postDeptDetails(){ 
    this.deptModelobj.departmentName = this.formvalue.value.departmentName;
    this.deptModelobj.departmentCode = this.formvalue.value.departmentCode;
    this.deptModelobj.departmentAddress = this.formvalue.value.departmentAddress;
    
    this.api.postEmployee(this.deptModelobj).subscribe(res=>{
      console.log(res);
      alert("added sucessfully")
      this.getallemployees()
      let ref = document.getElementById("cancel")
      ref?.click();
      this.formvalue.reset();
    },
    err=>{
      alert("something went wrong")
    }
    )
  }

  getallemployees(){
    this.api.getEmployee().subscribe(res=>{
      console.log(res);
      this.deptData = res;
    })
  }

  deleteEmployee(row : any){
    this.api.deleteEmployee(row.departmentId).subscribe(res=>{
      console.log(res);
      alert("Employee Deleted")
      this.getallemployees()
    })
  }

  onEdit(row:any){
    this.showUpdate = true
    this.showAdd = false
    this.deptModelobj.id = row.departmentId;
    this.formvalue.controls['departmentName'].setValue(row.departmentName);
    this.formvalue.controls['departmentAddress'].setValue(row.departmentAddress);
    this.formvalue.controls['departmentCode'].setValue(row.departmentCode);
    
  }

  clickAddEmployee(){
    this.formvalue.reset()
    this.showAdd = true
    this.showUpdate = false
  }

  updateDetails(){
    this.deptModelobj.departmentName = this.formvalue.value.departmentName;
    this.deptModelobj.departmentCode = this.formvalue.value.departmentCode;
    this.deptModelobj.departmentAddress = this.formvalue.value.departmentAddress;
    
    this.api.updateEmployee(this.deptModelobj,this.deptModelobj.id).subscribe(res=>{
      console.log(res);
      alert("updated sucessfully")
      this.getallemployees()
      let ref = document.getElementById("cancel")
      ref?.click();
      this.formvalue.reset();
    },
    err=>{
      alert("something went wrong")
    }
    )    
  }

}
