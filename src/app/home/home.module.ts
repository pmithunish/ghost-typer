import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostTyperComponent } from './ghost-typer/ghost-typer.component';

@NgModule({
  declarations: [GhostTyperComponent],
  imports: [CommonModule],
  exports: [GhostTyperComponent],
  providers: []
})
export class HomeModule {}
