import { Routes } from '@angular/router';
import { LoginViewComponent } from './pages/login/login-view/login-view.component';
import { MainLayoutComponent } from './pages/common/main-layout/main-layout.component';
import { authGuard } from './core/auth.guard';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { ViewerViewComponent } from './pages/viewer-view/viewer-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { CommonViewComponent } from './pages/common-view/common-view.component';
import { HeaderComponent } from './pages/header/header.component';

import { BookListComponent } from './pages/book/booklist/booklist.component';
import { BookCRUDComponent } from './pages/book/book-crud/book-crud.component';
import { BookItemsComponent } from './pages/book/book-items/book-items.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/adminP/adminHeader/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { WritersCrudListComponent } from './pages/book/writers-crud-list/writers-crud-list.component';
import { SListComponent } from './pages/slist/slist.component';


import { IslamiBooklistComponent } from './pages/book/islami-booklist/islami-booklist.component';
import { CatagoryCrudListComponent } from './pages/book/catagory-crud-list/catagory-crud-list.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { SidebarComponent } from './pages/common/sidebar/sidebar.component';
import { AvailableBooksComponent } from './pages/book/available-books/available-books.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { CatagoryComponent } from './pages/book/catagory/catagory.component';
import { RegFormComponent } from './pages/adminP/reg-form/reg-form.component';
import { AuthorListComponent } from './pages/adminP/author-list/author-list.component';
import { BookDetaildComponent } from './pages/book/details/book-detaild/book-detaild.component';

export const routes: Routes = [ {
    path: '',component: LoginViewComponent },
    { path: 'registration', component: RegistrationComponent },
    {
        path: 'main-layout', component: MainLayoutComponent,},
      {path: 'header', component: HeaderComponent},
// {
//     path: '',
//     component: HeaderComponent,
//     canActivate: [authGuard],
//     children: [
        { path: 'booklist', component: BookListComponent },  // Path for the BookList component
        { path: 'bookCRUD', component: BookCRUDComponent },  // Path for the BookCRUD component
         { path: 'customer-list', component: CustomerListComponent },
        { path: 'customer-list', component: CustomerViewComponent },
        { path: 'catagory-crud-list', component: CatagoryCrudListComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'islami-booklist', component: IslamiBooklistComponent },
        { path: 'customer-view', component: CustomerViewComponent },
         { path: 'writers-crud-list', component: WritersCrudListComponent },
        { path: 'book-items', component: BookItemsComponent },
         { path: 'adminHeader', component: AdminComponent },
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
       {path: 'main-layout', component: MainLayoutComponent},
       {path: 'footer', component: FooterComponent},
       {path: 'sidebar', component: SidebarComponent},
        { path: 'admin', component: AdminViewComponent },
        { path: 's-list', component: SListComponent },
        { path: 'cart', component: CartComponent },
        { path: 'dashboard', component: DashboardComponent },
        {path: 'all-books', component: AvailableBooksComponent},
{path: 'common-view', component: CommonViewComponent},
        { path: 'viewer-view', component: ViewerViewComponent },
        { path: 'admin-view', component: AdminViewComponent },
        {path:'catagory', component: CatagoryComponent},
        {path:'reg-form', component: RegFormComponent},
           {path:'author-list', component: AuthorListComponent}, 
           {path:'book-detaild', component: BookDetaildComponent},
        // { path: '', redirectTo: 'home' },
        { path: '**', redirectTo: 'home' },
   
//     {
//         path: '',
//         component: HeaderComponent,
//         canActivate: [authGuard],
//         children: [
//         ],
// },
];
