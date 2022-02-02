import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { HomeComponent } from './page/home/home.component';

import { ProductCardComponent } from './common/product-card/product-card.component';

import { TextSlicerPipe } from './pipe/text-slicer.pipe';

import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { CardsCarouselComponent } from './common/cards-carousel/cards-carousel.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './page/data-editor/data-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    HomeComponent,

    ProductCardComponent,

    TextSlicerPipe,

    ProductPagerComponent,
    ProductListComponent,
    FilterPipe,
    SorterPipe,
    FeaturedPipe,
    CardsCarouselComponent,
    ProductPageComponent,
    AdminComponent,
    DataEditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
