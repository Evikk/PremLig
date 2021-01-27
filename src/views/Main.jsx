import { Component } from "react";
import { storageService } from "../services/storageService";
import { teamService } from "../services/teamService";
import { TeamList } from "../cmps/TeamList";

const STORAGE_KEY = 'teams_db'

export class Main extends Component {
    state = {
        teams: []
    }

    componentDidMount(){
        this.loadTeams()
    }

    loadTeams = async()=> {
        var teams = []
        if (storageService.load(STORAGE_KEY)) {
            teams = storageService.load(STORAGE_KEY)
        }
        else {
            teams = await teamService.getTeams()
            teams.map(team => team.isFavorite = false)
            storageService.save(STORAGE_KEY,teams)
        }
        this.setState({ teams })
    }

    toggleFavorite = (teamId) => {
        const teamsCopy = this.state.teams
        const teamIdx = teamsCopy.findIndex(team => team.team_id === teamId)
        const team = teamsCopy[teamIdx]
        team.isFavorite = !team.isFavorite
        this.setState({teams: teamsCopy}, ()=>{
            storageService.save(STORAGE_KEY,this.state.teams)
        })
    }

    

    render(){
        const { teams } = this.state
        return (
            <div>
                <TeamList teams={teams} toggleFavorite={this.toggleFavorite}/>
            </div>
        )
    }
}