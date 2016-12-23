import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HackerNewsAPIService } from '../services/hackernews-api.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    user;
    
    constructor(
        private _hackerNewsAPIService: HackerNewsAPIService,
        private route: ActivatedRoute,
        private _location: Location
    ) {}

    ngOnInit() {
        
        let datas = this.route.params.subscribe(params => {
            let user_name = params['user'] ? params['user'] : 'johndoe';
            this._hackerNewsAPIService.fetchUserInfos(user_name).subscribe(data => {
                this.user = data;
            }, error => console.log('Could not load user' + this.user));
        });
    }
    
    goBack() {
        this._location.back();
    }

}
