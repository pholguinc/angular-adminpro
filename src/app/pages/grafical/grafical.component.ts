import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent {



  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public data1 = [
    [350, 450, 100]
    ];


}
