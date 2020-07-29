import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  closeResult: string;

  constructor(public modal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit() {
  }

  modalRegister() {
    this.modalService.dismissAll(LoginComponent);
    this.modalService.open(RegisterComponent);
  }

}
