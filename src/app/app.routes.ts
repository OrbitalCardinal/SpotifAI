import { Routes } from '@angular/router';
import { mainGuard } from './guards/main.guard';
import { rootGuard } from './guards/root.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/auth",
        pathMatch: "full"
    },
    {
        path: "auth",
        loadComponent: () => import("@pages/auth/auth.component").then(c => c.AuthComponent),
        canActivate: [
            rootGuard
        ]
    },
    {
        path: "auth-callback",
        loadComponent: () => import("@pages/auth-callback/auth-callback.component").then(c => c.AuthCallbackComponent),
        canActivate: [
            rootGuard
        ]
    },
    {
        path: 'main',
        loadComponent: () => import("@pages/main/main.component").then(c => c.MainComponent),
        canActivate: [
            mainGuard
        ],
    },
    {
        path: "**",
        loadComponent: () => import("@pages/error/error.component").then(c => c.ErrorComponent)
    },
];
