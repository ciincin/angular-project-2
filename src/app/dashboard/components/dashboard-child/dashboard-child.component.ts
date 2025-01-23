import { CommonModule } from '@angular/common';
import { EventEmitter , ChangeDetectionStrategy, Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.css'
})
export class DashboardChildComponent implements OnInit{
  @Input() text: string='';
  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('dashboard-child was changed', changes);
    
  }

  ngOnInit(): void {
    console.log('dashboard-child was initialized');
    
  }

  handleClick(){
    this.text = 'dashboard text changed by the child';
    this.textChange.emit(this.text);
  }
}
