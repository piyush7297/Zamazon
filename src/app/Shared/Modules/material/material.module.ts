import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatTooltipModule , } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule} from '@angular/material/tree';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatBadgeModule} from '@angular/material/badge';


const MaterialComponents : any [] = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  CdkTreeModule,
  MatDialogModule,
  MatPseudoCheckboxModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTreeModule,
  MatInputModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatBadgeModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
  ],
  exports : [
    MaterialComponents,
  ],
  providers : [
  ]
})
export class MaterialModule { }
