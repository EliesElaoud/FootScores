import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { InfosComponent } from './pages/infos/infos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rankings',
        component: RankingComponent
    },
    {
        path: 'infos',
        component: InfosComponent
    }
];
