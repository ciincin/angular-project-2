import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush, //control de cambios
  imports: [DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  text = 'dashboard'

  // constructor(cd: ChangeDetectorRef){
  //   setTimeout(()=>{
  //     this.text = 'dashboard text changed';
  //     cd.detectChanges(); //esto es un control de cambios
  //   }, 5000)
  // }

  handleClick(){
    this.text = 'dashboard text change';
  }

}
