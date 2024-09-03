import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  // @Input() set appHighlight(stock:number) {
  //   this.changeColor(stock);
  // }

  @Input('appHighlight') stock:number=0;
  constructor(private el : ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }
  
  changeColor(): void {
    if(this.stock<=0){
      this.el.nativeElement.style.backgroundColor='rgb(127, 224, 151)'
    }else{
      this.el.nativeElement.style.backgroundColor='rgb(245, 148, 148)'
    }
    
  }
}
