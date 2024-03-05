import { Component } from '@angular/core';
import { CustomTitleComponent } from '../../components/custom-title/custom-title.component';
import { CustomLoaderComponent } from '../../components/custom-loader/custom-loader.component';
import { CustomListComponent } from '../../components/custom-list/custom-list.component';
import { List } from '../../models/list-models';
import { LeagueService } from '../../services/league.service';
import { LeagueList } from '../../models/leagues-model';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CustomTitleComponent, CustomLoaderComponent, CustomListComponent, CustomButtonComponent],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})

export class RankingComponent {

  isLoading = true;
  navigation = 'leagues';
  leaguesList : List[] = [];
  teamsList : List[] = [];

  constructor(private leagueService : LeagueService) {
    
    this.getLeaguesList();

  }

  goBack = () => {
    this.navigation = 'leagues';
  }

  getLeagueRanking = async (leagueId : number) => {
    this.isLoading = true;

    this.leagueService.getLeagueRanking(leagueId).then(response => {
      this.isLoading = false;
      this.navigation = 'datas';
      this.teamsList = response.map(item => {
        let tl : List = {
          text : item.team,
          onClick : () => {}
        }
        return tl;
      });
    })
  }

  getLeaguesList = async () => {
    this.isLoading = true;

    this.leagueService.getLeaguesList().then(response => {
      this.isLoading = false;
      this.leaguesList = response.map(item => {
        let ll : List = {
          text : item.league,
          onClick : () => { this.getLeagueRanking(item.id) }
        }
        return ll;
      })
    });
  }

}
