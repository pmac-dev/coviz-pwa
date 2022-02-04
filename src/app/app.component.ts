import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

const URL = 'https://lo.gic.li/coviz' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coviz';


  safeUrl: any ;

  constructor(private domSanit: DomSanitizer) {
    this.safeUrl = this.getSafeUrl() ;
  }

  getSafeUrl(){
    return this.domSanit.bypassSecurityTrustResourceUrl(URL) ;
  }

  ngOnInit(): void {
    this.safeUrl = this.getSafeUrl() ;
  }

 


}
