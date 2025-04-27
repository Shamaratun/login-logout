import { Routes } from '@angular/router';
import { LoginViewComponent } from './pages/login/login-view/login-view.component';
import { MainLayoutComponent } from './pages/common/main-layout/main-layout.component';
import { authGuard } from './core/auth.guard';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { ViewerViewComponent } from './pages/viewer-view/viewer-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { CommonViewComponent } from './pages/common-view/common-view.component';

export const routes: Routes = [ {
    path: 'login-view',
    component: LoginViewComponent,
},
{
    path: 'dashboard',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
        {
            path: 'customer-view',
            component: CustomerViewComponent,
            data: { roles: ['customer', 'admin'] },
            canActivate: [authGuard]
        },
        {
            path: 'viewer-view',
            component: ViewerViewComponent,
            data: { roles: ['viewer', 'admin'] },
            canActivate: [authGuard]
        },
        {
            path: 'admin-view',
            component: AdminViewComponent,
            data: { roles: ['admin'] },
            canActivate: [authGuard]
        },
        
        {
            path: 'common',
            component: CommonViewComponent,
            canActivate: [authGuard],
            data: { roles: ['customer', 'viewer', 'admin'] }
        },
        {
            path: '',
            redirectTo: 'common',
            pathMatch: 'full'
        }
    ]
},
{
    path: '**',
    redirectTo: 'login-view',
}

];
