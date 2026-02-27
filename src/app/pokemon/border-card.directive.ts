import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {


  constructor(private el: ElementRef) { // ElementRef é um elemento de angular que permite referenciar um elemento 
    this.setBorder('#f5f5f5');
  }

  @Input() pkmnBorderCard: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.pkmnBorderCard || '#fd6c9e'); // Se a cor for fornecida, use-a; caso contrário, use a cor padrão
  }


  @HostListener('mouseleave') onMouseLeave() { //Detect quando o curseur passa por um elemento
    this.setBorder('#f5f5f5');
  }

  setHight(height: number) {
    this.el.nativeElement.style.height = `${height}px`; //nativeElemetn para aceder realmente ao elemento do dom que queremos aceder
  }

  setBorder(color: string) {
    let border = `solid 4px ${color}`;;
    this.el.nativeElement.style.border = border;
  }
}
