import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class DashboardComponent implements CanComponentDeactivate {
  constructor(private router: Router) {}

  ngOnInit() {}
  canDeactivate(): boolean {
    return confirm('Do you want to discard your changes?');
  }

  navigateToFeature() {
    this.router.navigate(['/feature']);
  }

  goToProducts(): void {
    this.router.navigate(['/products']);
  }
}
