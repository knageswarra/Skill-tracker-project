import { Component, OnInit, ElementRef } from '@angular/core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AddAssociateService } from 'src/app/service/add-associate.service';
import { Associate } from 'src/app/model/associate';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
   
    { path: '/search/:id', title: 'Search',  icon:'ni-bullet-list-67 text-red', class: '' }

   ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  type=""
  public menuItems: any[] | undefined;
  public isCollapsed = true;

  public focus: any;
  public listTitles: any[] | undefined;
  public location: Location | undefined;
  associate:Associate | undefined;

  admin:string | undefined

  constructor(location: Location,  
    private element: ElementRef,
     private router: Router,
    private AssociateService:AddAssociateService) { 


    
       
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  



  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.type = sessionStorage.getItem('type') || ''; // Provide an empty string as a default value
let id = sessionStorage.getItem('id');
let iid = +id!;
    console.log(this.type);
   

    this.menuItems = ROUTES.filter(menuItem => menuItem);




  }
 

  logout(){
    sessionStorage.removeItem('type');
sessionStorage.removeItem('currentUser');
sessionStorage.removeItem('id');
window.location.reload();
this.router.navigate(['login']);
  }
  


}
