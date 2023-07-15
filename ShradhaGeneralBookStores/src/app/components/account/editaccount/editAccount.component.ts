import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { AccountService } from 'src/app/Service/account.service';
import { RoleService } from 'src/app/Service/role.service';
import { Role } from 'src/app/models/role.model';
import { AccountAPI } from 'src/app/modelapi/accountapi.model';
import { UtilsServiceService } from 'src/app/Service/utils-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './editAccount.component.html',
})

export class EditAccountComponent implements OnInit{
  roles: Role[];
  password: string;
  dontexist: boolean = false;
  accountFormGroup: FormGroup;
  account: AccountAPI = new AccountAPI();
  constructor(
    private _roleService: RoleService,
    private utils: UtilsServiceService,
    private _accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router,
    private activevateRoute:ActivatedRoute,

  ) {}
    ngOnInit() {
      this.activevateRoute.paramMap.subscribe(c=>{
        this._accountService.get(parseInt(c.get('id'))).then(result=>{
          this.account = result as AccountAPI;
           //set value from
          this.accountFormGroup.get('id').setValue(this.account[0].id);
          this.accountFormGroup.get('email').setValue(this.account[0].email);
          this.accountFormGroup.get('firstName').setValue(this.account[0].firstName);
          this.accountFormGroup.get('lastName').setValue(this.account[0].lastName);
          this.accountFormGroup.get('phone').setValue(this.account[0].phone);
          this.accountFormGroup.get('roleId').setValue(this.account[0].roleId);

        });
      });


      this._roleService.read().then(result => {
        this.roles = result as Role[];
      });



      this.accountFormGroup = this.formbuilder.group({
        id:[''],
        email: [''],
        password: ['',[
          Validators.pattern( /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)
        ]],
        firstName: ['',[
          Validators.required
        ]],
        lastName: ['',[
          Validators.required
        ]],
        phone: ['',[
          Validators.required,
          Validators.pattern(/^[0-9]{10,10}$/)
        ]],
        status: [true],
        SecurityCode: ['00000'],
        avatar: ['no-avatar.jpg'],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        roleId: ['',[
          Validators.required
        ]],
      });
    }

    save(){
      let account = this.accountFormGroup.value as AccountAPI;
      if(this.accountFormGroup.get('password').value == null)
        account.password = '';
      this._accountService.update(account).then(result=>{
        if(result as true){
          this.utils.updateToast('Success')
          this.router.navigate(['listaccount']);
        }
      });
      console.dir(account);
    }
    checkExist(evt:any){
      let email = evt.target.value as string;
      this._accountService.checkexists(email).then(result=>{
        if(result as boolean){
          this.dontexist = false;
          console.log(this.dontexist);
        }else{
          this.dontexist = true;
          console.log(this.dontexist);
        }
      });
    }

    reset(){
      this.ngOnInit();
    }
}
