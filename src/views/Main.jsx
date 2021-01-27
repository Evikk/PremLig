import { Component } from "react";
import { storageService } from "../services/storageService";
import { teamService } from "../services/teamService";
import { TeamList } from "../cmps/TeamList";

const STORAGE_KEY = 'teams_db'

export class Main extends Component {

    state = {
        teams: [],
        sortBy: null
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

    getTeamsForDisplay = ()=> {
        const { teams, sortBy } = this.state
        if (sortBy === 'favorite') {
            return teams.sort((a,b)=>{
                return b.isFavorite - a.isFavorite
            })
        }
        else if (sortBy === 'name') {
            return teams.sort ((a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0;
            })
        }
        return teams
    }

    handleSort = (ev)=> {
        this.setState({sortBy: ev.target.value})
    }

    render(){
        const teams = this.getTeamsForDisplay()
        return (
            <main>
                <select name="sortBy" onChange={this.handleSort}>
                    <option value="">Sort By</option>
                    <option value="name">By Name</option>
                    <option value="favorite">Favorites First</option>
                </select>
                <TeamList teams={teams} toggleFavorite={this.toggleFavorite}/>
            </main>
        )
    }
}