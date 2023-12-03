import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/auth",
        pathMatch: "full"
    },
    {
        path: "auth",
        loadComponent: () => import("@pages/auth/auth.component").then(c => c.AuthComponent)
    },
    {
        path: "auth-callback",
        loadComponent: () => import("@pages/auth-callback/auth-callback.component").then(c => c.AuthCallbackComponent)
    }
];
