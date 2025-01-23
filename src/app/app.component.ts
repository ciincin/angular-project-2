import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

interface ArreglitoItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, DashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Angular0';
  condition = true;
  options = ['uno','dos','tres'];
  selectedOption = 'tres';
  arreglito: ArreglitoItem[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
  ];

  trackByFn(index: number, item: ArreglitoItem): number {
    return item.id; // Usamos el ID como identificador único.
  }
}
