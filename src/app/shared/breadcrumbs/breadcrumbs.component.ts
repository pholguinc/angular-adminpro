import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title!: string;

  public titleSubs$ : Subscription;

  constructor(private router: Router) {

    this.titleSubs$ = this.getDataRoute()
    .subscribe({
      next: (data: ActivationEnd) => {
        this.title = data.snapshot.data['title'];
        document.title = `AdminPro - ${this.title}`;
      }
    });
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute(){
    return this.router.events
      .pipe(
        filter((event: any) =>
          event instanceof ActivationEnd &&
          event.snapshot.firstChild === null &&
          event.snapshot.data != null)
      );

  }
}
