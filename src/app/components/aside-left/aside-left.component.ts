import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.scss']
})
export class AsideLeftComponent implements OnInit {

  constructor(private router: Router) { }
  public listArr: any = [
    {
      title: '首页',
      content: null
    },
    {
      title: '预约管理',
      content: ['创建预约场地', '场地列表', '预约列表']
    },
    {
      title: '访问管理',
      content: ['访问历史']
    },
    {
      title: '会议室管理',
      content: ['创建会议室场地', '会议室场地列表', '会议室预约列表']
    },
    {
      title: '报修通知',
      content: ['报修申请']
    },
    {
      title: '菜品管理',
      content: ['新增菜品', '菜品列表', '菜品发布', '菜品发布列表', '菜品预约列表']
    },
    {
      title: '班车管理',
      content: ['路线设置', '班车发布', '班车列表']
    },
    {
      title: '投诉建议',
      content: ['建议列表']
    },
    {
      title: '用户管理',
      content: ['客户账号管理', '权限管理']
    },
  ];
  public tf: any = [true, true, true, true, true, true, true, true, true];
  // public url: any = [
  //   'home',
  //   'appoint-admin',
  //   'visitor-admin',
  //   'conferenece-admin',
  //   'warranty-notice',
  //   'vegetable-admin',
  //   'bus-admin',
  //   'complaint-suggestions',
  //   'user-admin'
  // ];
  url: any = [
  ];
  ngOnInit() {
  }
  open(key) {
    this.tf = [true, true, true, true, true, true, true, true, true];
    this.tf[key] = false;
  }
  go(x, y) {
    // this.router.navigate(['/' + url]);
    console.log(x, y);
  }
}
