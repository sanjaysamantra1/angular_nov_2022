import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { HttpDemo1Component } from './components/http-demo1/http-demo1.component';
import { CommentsComponent } from './components/comments/comments.component';
import { EmployeesComponent } from './employees/employees.component';
import { Myinterceptor1 } from './interceptors/myinterceptor1';
import { ObservableDemo1Component } from './components/observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from './components/observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from './components/observable-demo3/observable-demo3.component';
import { SubjectDemo1Component } from './components/subject-demo1/subject-demo1.component';
import { MessageAddComponent } from './components/message-add/message-add.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { FormDemo2Component } from './components/form-demo2/form-demo2.component';
import { FormDemo3Component } from './components/form-demo3/form-demo3.component';
import { FormDemo4Component } from './components/form-demo4/form-demo4.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';

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
    HttpDemo1Component,
    CommentsComponent,
    EmployeesComponent,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component,
    SubjectDemo1Component,
    MessageAddComponent,
    MessageListComponent,
    TodoListComponent,
    TodoAddComponent,
    FormDemo1Component,
    FormDemo2Component,
    FormDemo3Component,
    FormDemo4Component,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    CareersComponent,
    NotfoundComponent,
    ProductdetailsComponent,
    ProductdetailComponent,
    ContractjobsComponent,
    PermanentjobsComponent,
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
    HttpClientModule,
  ],
  // Injectables (Services)
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Myinterceptor1, multi: true },
  ],
  // which comp to load
  bootstrap: [AppComponent],
})
export class AppModule {}
