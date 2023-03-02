import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
 
  @Input() pageTitle? : string = '' ;
  isAuthenticated : boolean = false;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isAuthenticated = this.auth.getAuthStatus();
    });
  };

  constructor(private auth: AuthService,
    private router: Router){}

  logout(){
    this.auth.SignOut().then(response => {
      console.log(response);
      localStorage.clear();
      this.router.navigateByUrl('/login')
    }, error => {
      console.log(error)
    })
  }
}
