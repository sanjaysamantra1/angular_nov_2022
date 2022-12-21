import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { ProductsComponent } from './components/products/products.component';
import { LoginModule } from 'src/login/login.module';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './components/directive/directive.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { UsersComponent } from './components/users/users.component';
import { GreetComponent } from './components/greet/greet.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { NumberonlyDirective } from './custom-directives/numberonly.directive';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { BackbuttonDirective } from './custom-directives/backbutton.directive';
import { ClickcountDirective } from './custom-directives/clickcount.directive';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { TruncatePipe } from './custom-pipes/truncate.pipe';
import { SearchPipe } from './custom-pipes/search.pipe';
import { MysortPipe } from './custom-pipes/mysort.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Math1Component } from './components/math1/math1.component';
import { Math2Component } from './components/math2/math2.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  // components,pipes,directives
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    OrdinalPipe,
    ProductsComponent,
    DatabindingComponent,
    DirectiveComponent,
    DynamicFormComponent,
    UsersComponent,
    GreetComponent,
    EmployeeCrudComponent,
    NumberonlyDirective,
    HighlightDirective,
    BackbuttonDirective,
    ClickcountDirective,
    PipesDemoComponent,
    RemainingPipe,
    TruncatePipe,
    SearchPipe,
    MysortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    Math1Component,
    Math2Component,
    UserTableComponent,
    UserCardComponent,
  ],
  // dependent modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  // Injectables (Services)
  providers: [],
  // which comp to load
  bootstrap: [AppComponent],
})
export class AppModule {}
