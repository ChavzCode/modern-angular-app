import { Component, EventEmitter, signal, Output, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlus, heroMinus } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-add-remove-btn',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  providers: [provideIcons({heroPlus, heroMinus})],
  templateUrl: './add-remove-btn.component.html',
  styleUrl: './add-remove-btn.component.css'
})
export class AddRemoveBtnComponent {
  @Input() status: Boolean = false;
  @Output() clicked = new EventEmitter<boolean>()

  onClickBtn(){
    this.clicked.next(true);
  }
}
