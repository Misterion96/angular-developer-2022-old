import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.css'],
})
export class NgTemplateOutletComponent<T> implements OnInit {
  @Input()
  public items: T[] = [];

  @Input()
  public optionRef: TemplateRef<any> | null = null;

  constructor() {}

  ngOnInit() {}
}
