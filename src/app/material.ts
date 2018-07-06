import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatIconModule,
     MatMenuModule,
     MatCardModule,
     MatGridListModule,
     MatTabsModule,
    ],
    
    exports: [MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatGridListModule,
      MatTabsModule,
    ],

})

export class MaterialModule { }
