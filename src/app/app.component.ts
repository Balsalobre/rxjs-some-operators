import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'angular-rxjs';

  @ViewChild('myElement') myElement: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {

    // la potencia que tiene esto es que nos podemos "desuscribir" del observable cuando queramos
    const el = document.getElementById('element');
    const mouseMove = fromEvent(el, 'mousemove');
    mouseMove.subscribe((e: MouseEvent) => console.log(`Coordenadas: x: ${e.clientX}, y: ${e.clientY}`));
  }

  ngAfterViewInit(): void {
    console.log('>>>>', this.myElement);
    this.renderer.listen(this.myElement.nativeElement, 'click', (event: MouseEvent) => {
      console.log('CLICK', event);
    });
  }
}
