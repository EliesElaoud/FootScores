import { Injectable } from '@angular/core';
import { header } from '../utils/secret';
import axios from 'axios';
import { LeagueList, LeagueRanking } from '../models/leagues-model';

@Injectable({
  providedIn: 'root'
})

export class LeagueService {

  constructor() { }

  public async getLeaguesList() : Promise<LeagueList[]> {

    let response : LeagueList[] = [];

    const options = {
      method: 'GET',
      url: 'https://soccer-data.p.rapidapi.com/tournament/list',
      headers: header
    };

    try {
      const result = await axios.request(options);

      for (let i = 0; i < result.data.length; i++) {
        const item = result.data[i];
        const data : LeagueList = { id : item.id, league : item.name };
        response.push(data)
      }

    } catch (error) {
      console.error(error);
    }

    return response;
  }

  public async getLeagueRanking(leagueId : number) : Promise<LeagueRanking[]> {

    let response : LeagueRanking[] = [];

    const options = {
      method: 'GET',
      url: 'https://soccer-data.p.rapidapi.com/tournament/teams',
      params: {tournamentId: leagueId.toString()},
      headers: header
    };

    try {
      const result = await axios.request(options);

      for (let i = 0; i < result.data.length; i++) {
        const item = result.data[i];
        const data : LeagueRanking = { id : item.id, team : item.name };
        response.push(data)
      }

    } catch (error) {
      console.error(error);
    }

    return response;
  }
}
