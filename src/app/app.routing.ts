import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { OnlineTestComponent } from './online-test/online-test.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'online-test',
        component: OnlineTestComponent
    }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);