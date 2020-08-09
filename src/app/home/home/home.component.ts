import { Component, OnInit } from '@angular/core';
import { CommonService } from 'services/common.service';
import { AuthService } from 'services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:any=[ {
    'name':'apple',
    'count':10,
    'bgcolor':'red'
  },
  {
    'name':'orange',
    'count':10,
    'bgcolor':'orange'
  },
  {
    'name':'grape',
    'count':10,
    'bgcolor':'blue'
  }];

  bitems:any = [];

  constructor(private common: CommonService,private auth:AuthService) { }

  ngOnInit() {
  }

  incrementData(item:any){
    if(!this.checkUserPermission()){
      this.common.showToaster(`Only Admin can add or remove in basket..`);
      return 
    }
    if(item && item['count'] <= 10){
      item['count']--;
      if(item['count'] < 0){
        item['count'] = 0;
      }
      this.bitems.push(item);
    }

  }

  decrementData(item){

    if(!this.checkUserPermission()){
      this.common.showToaster(`Only Admin can add or remove in basket..`);
      return 
    }
    if(item && item['count'] < 10){

      let lastItem = this.bitems.map(d => d).reverse()[0];
      if(lastItem && lastItem.name == item.name){
        this.bitems.pop();
        item['count']++;
        if(item['count'] < 10){
          item['count'] = 10;
        }
      }else{
        this.common.showToaster(`Please remove the ${lastItem ? lastItem.name : 'last '} first ! `);
      }
    }
  }

  checkUserPermission(){
    return this.auth.isLoggedInUserIsAdmin()
  }

  logout(){
    this.auth.doLogout();
  }

}
