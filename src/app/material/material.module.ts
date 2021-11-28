import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


//we mde this component so that all the material designs which need to be implemented may be impirted in this file only and that they doint clutter the ohter files
const MaterialComponents = [
  MatButtonModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})

export class MaterialModule { }
