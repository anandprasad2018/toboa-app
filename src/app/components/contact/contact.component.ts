import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_18mcub4', 'template_yi6miub', e.target as HTMLFormElement, 'user_lCRLVpjrywmJnxG1NVE85')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  Alerting(){
    alert("Message Send!")
  }
  name: any; 
  message: any;   
  subject: any;   
  email: any;   

}
