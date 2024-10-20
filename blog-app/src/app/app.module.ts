import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ItemComponent } from './components/item/item.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { BodySectionComponent } from './components/body-section/body-section.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RightSideSectionsComponent } from './components/right-side-sections/right-side-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddItemComponent,
    FooterComponent,
    GalleryComponent,
    ItemComponent,
    ItemFormComponent,
    BodySectionComponent,
    HeaderComponent,
    SubscriptionComponent,
    SubscriptionFormComponent,
    RightSideSectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
