import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-color-select',
  standalone: true,
  templateUrl: './color-select.component.html',
  styleUrl: './color-select.component.scss',
  imports: [CommonModule],
})
export class ColorSelectComponent {
  selectedColor: string = ''
  colors: string[] = ['Red', 'Blue', 'Green']

    constructor(private stateService: StateService) { }

  @Output() colorChanged = new EventEmitter<string>()

  onColorChange(color: string): void {
    this.selectedColor = color
    this.colorChanged.emit(this.selectedColor)
  }

  ngOnInit() {
    setTimeout(() => {
      this.selectedColor = 'Green';
      this.selectedColor = this.stateService.getState('color') ?? ''
    }, 0); 
  }

}
