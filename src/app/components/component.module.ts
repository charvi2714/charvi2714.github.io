import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TopBarComponent, BottomBarComponent],
    exports: [TopBarComponent, BottomBarComponent],
    imports: [RouterModule]
})
export class ComponentModule{}
