import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['a', 'arr'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component implements OnInit, OnChanges {
  a: any;
  b: number = 20;
  arr: any;
  @ViewChild('myInputBox') inputBox: any;

  refresh() {
    this.changeDetectorRef.markForCheck();
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('child constructor');
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('child ngOnChanges');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
    // this.changeDetectorRef.markForCheck();
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
    console.log(this.inputBox);
    this.inputBox.nativeElement.focus();
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('child ngOnDestory');
  }
}
