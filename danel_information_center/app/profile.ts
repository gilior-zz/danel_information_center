import { Component } from '@angular/core';
import {UserService} from './services.barrel'
import {LoginProperties} from './models'
@Component({
    moduleId: module.id,
    templateUrl: './profile.html',
    styleUrls: ['./profile.css']
})
export class ProfileComponent {
    constructor(private userService: UserService) { }
    send() { }
    currentPassword: string;
    newPasswordValidation: string;
    newPassword: string;
    validCaptcha: boolean;
    get loginProperties(): LoginProperties { return this.userService.loginProperties }
    setVerified(data) {

        setTimeout(this.validCaptcha = data, 0);

    }
    onChangePassword() { }

    onNewPasswordChanged(val: string) {
        this.newPasswordValidation = '';
        this.newPassword = val;
    }
}