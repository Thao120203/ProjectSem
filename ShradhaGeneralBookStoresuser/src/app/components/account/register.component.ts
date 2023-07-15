import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import { AccountService } from "src/app/Service/account.service";

@Component({
    selector: 'app-root',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{
    accountFormGroup: FormGroup;
    constructor(
        private formbuilder: FormBuilder,
        private _accountService:AccountService,
        private formBuilder: FormBuilder
    ){}
    ngOnInit(): void {
      this.accountFormGroup = this.formbuilder.group({
        email: ['',[
          Validators.required,
          Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/),
        ]],
        password: ['',[
          Validators.required
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
        avatar: ['no-avatar.jpg'],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        roleId: [[]],
      });
      console.log(this.accountFormGroup);
    }
}
