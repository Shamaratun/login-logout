import { Routes } from '@angular/router';
import { LoginViewComponent } from './pages/login/login-view/login-view.component';
import { authGuard } from './core/auth.guard';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { HeaderComponent } from './pages/header/header.component';
import { BookCRUDComponent } from './pages/book/book-crud/book-crud.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/adminP/adminHeader/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SListComponent } from './pages/slist/slist.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { SidebarComponent } from './pages/common/sidebar/sidebar.component';
import { AvailableBooksComponent } from './pages/book/available-books/available-books.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { WarehouseComponent } from './pages/adminP/warehouse/warehouse.component';
import { AuthorListComponent } from './pages/adminP/author-list/author-list.component';
import { OfferComponent } from './design/offer/offer.component';
import { DiscountComponent } from './design/discount/discount.component';

import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   { path: 'login', component: LoginViewComponent },
    { path: 'register', component: RegistrationComponent },
    {
        path: '', component: AppComponent,
        canActivate: [authGuard],
        children: [
        { path: 'bookCRUD', component: BookCRUDComponent },
        { path: 'customer-list', component: CustomerListComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'customer-view', component: CustomerViewComponent },
        { path: 'adminHeader', component: AdminComponent },
        { path: 'about-us', component: AboutUsComponent },
        { path: 'contact-us', component: ContactUsComponent },
        { path: 'footer', component: FooterComponent },
        { path: 'sidebar', component: SidebarComponent },
        { path: 'admin', component: AdminComponent },
        { path: 's-list', component: SListComponent },
        { path: 'cart', component: CartComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'all-books', component: AvailableBooksComponent },
        { path: 'admin-view', component: AdminViewComponent },
        { path: 'warehouse', component: WarehouseComponent },
        { path: 'author-list', component: AuthorListComponent },
        { path: 'book-crud', component: BookCRUDComponent },
        { path: 'available-books', component: AvailableBooksComponent },
        { path: 'offer', component: OfferComponent },

        { path: '**', redirectTo: 'home' }
        ]
      }
];
