import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userI } from 'src/app/interface/user.interface';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page = 1;
  pageSize = 6;
  collectionSize = 0;
  users: userI[] = [];
  data$?: Observable<any>;


  constructor(private userService: UsersService) {
    this.refreshPagination();
  }

  refreshPagination() {
    this.loadData(this.page);
  }
  ngOnInit(): void {
  }

  loadData(loadPage: number) {
    this.data$ = this.userService.getUsers(loadPage);
    this.data$.subscribe(res => {
      this.users = res.data;
      console.log('this.users: ', this.users);
      this.collectionSize = res.total
    })
  }
  editUser(user: any): void {
    console.log('Edit user:', user);
  }

  deleteUser(user: any): void {
    console.log('Delete user:', user);
  }

}
