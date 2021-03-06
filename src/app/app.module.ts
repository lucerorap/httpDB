import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DbService } from './services/db.service';
import { AppComponent } from './app.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { ModifypersonComponent } from './modifyperson/modifyperson.component';
import { RemovepersonComponent } from './removeperson/removeperson.component';
import { ListingComponent } from './listing/listing.component';
import { ListingremoveComponent } from './listingremove/listingremove.component';

const routeOptions: Routes = [
  {path: 'insert', component: AddpersonComponent},
  {path: 'modify', component: ModifypersonComponent},
  {path: 'remove', component: RemovepersonComponent},
  {path: 'list', component: ListingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddpersonComponent,
    ModifypersonComponent,
    RemovepersonComponent,
    ListingComponent,
    ListingremoveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routeOptions)
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
