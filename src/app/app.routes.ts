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
import { DashboardComponent } from './pages/header/dashboard/dashboard.component';
import { BookItemsComponent } from './pages/book/book-items/book-items.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/adminP/adminHeader/admin.component';

export const routes: Routes = [ {
    path: '',component: LoginViewComponent },
    { path: 'registration', component: RegistrationComponent },
{
    path: '',
    component: HeaderComponent,
    canActivate: [authGuard],
    children: [
        { path: 'booklist', component: BookListComponent },  // Path for the BookList component
        { path: 'bookCRUD', component: BookCRUDComponent },  // Path for the BookCRUD component
        // { path: 'customer-reg', component: CustomerRegComponent },
        { path: 'customer-list', component: CustomerViewComponent },
        // { path: 'catagory-crud-list', component: CatagoryCrudListComponent },
        { path: 'dashboard', component: DashboardComponent },
        // { path: 'islami-booklist', component: IslamiBooklistComponent },
        // { path: 'customer-header', component: CustomerHeaderComponent },
        // { path: 'writers-crud-list', component: WritersCrudListComponent },
        { path: 'book-items', component: BookItemsComponent },
         { path: 'adminHeader', component: AdminComponent },
        // { path: 'card-view', component: CardViewComponent },
       
        { path: 'admin', component: AdminViewComponent },
        // { path: 's-list', component: SListComponent },
        { path: 'cart', component: CartComponent },
        { path: 'dashboard', component: DashboardComponent },
        // {path: 'all-books', component: AvailableBooksComponent},

        { path: '**', redirectTo: 'home' },
    ],
},
];
