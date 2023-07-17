import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import moment from "moment";

@Component({
    selector: 'app-root',
    templateUrl: './registerAdmin.component.html'
})
export class RegisterAdminComponent implements OnInit{
    registerFormGroup: FormGroup;
    constructor(
      private formBuilder: FormBuilder
    ){}
    ngOnInit(): void {
      this.registerFormGroup = this.formBuilder.group({
        email: ['',[
          Validators.required,
          Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/),
        ]],
        password: ['',[
          Validators.required,
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
        avatar: ['no-avatar.jpg'],
        createdAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        updatedAt: [moment().format('DD/MM/YYYY HH:mm:ss')],
        roleId: ['',[
          Validators.required
        ]],
      });
    }
}
