import { RouterModule, Routes } from '@angular/router';
// import { coreRoutes } from './app/component/core/core.routes';
import { CommenComponent } from './components/commen/commen.component';

export const routes: Routes = [
    // ...coreRoutes,
    {
        path: 'app',
        component: CommenComponent,
        // canActivate: [TokenService],
        // canActivateChild: [TokenService],
        // resolve: { connection: ConnectionResolver },
        children: [
            // 布局
            //   { path: '', redirectTo: 'main-import', pathMatch: 'full' },
            //   { path: 'account-book', loadChildren: './account-book/account-book.module#AccountBookModule' },
            //   { path: 'import-base', loadChildren: './import-base/import-base.module#ImportBaseModule' },
            //   { path: 'main-import', loadChildren: './main-import/main-import.module#MainImportModule' },
            //   { path: 'mapping', loadChildren: './mapping/mapping.module#AccountMappingModule' },
            //   { path: 'generate', loadChildren: './generate-file/generate-file.module#GenerateFileModule' },
            //   { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
            //   { path: 'auxiliary', loadChildren: './auxiliary-accounting/auxiliary-accounting.module#AuxiliaryAccountingModule' }
        ]
    },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'registered', component: RegisterComponent },
    //   { path: '**', component: LoginComponent },
];
export const routing = RouterModule.forRoot(routes, {
});
