import { Component } from "react";
import { storageService } from "../services/storageService";
import { teamService } from "../services/teamService";
import { TeamList } from "../cmps/TeamList";
import { Pagination } from "../cmps/Pagination";
import { FilterSort } from "../cmps/FilterSort";

const STORAGE_KEY = 'teams_db'

export class Main extends Component {

    state = {
        teams: [],
        sortBy: null,
        showFavOnly: false,
        pagination: {
            itemsToShow: 0,
            currPage: 1
        }
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
        const teamsCopy = [...this.state.teams]
        const teamIdx = teamsCopy.findIndex(team => team.team_id === teamId)
        const team = teamsCopy[teamIdx]
        team.isFavorite = !team.isFavorite
        this.setState({teams: teamsCopy}, ()=>{
            storageService.save(STORAGE_KEY,this.state.teams)
        })
    }

    getTeamsForDisplay = ()=> {
        var { teams, sortBy, showFavOnly, pagination } = this.state
        if (showFavOnly) teams = teams.filter(team => team.isFavorite)
        if (sortBy === 'favorite') {
            teams.sort((a,b)=>{
                return b.isFavorite - a.isFavorite
            })
        }
        else if (sortBy === 'name') {
            teams.sort ((a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0;
            })
        }
        else if (sortBy === 'year') {
            teams.sort((a,b)=>{
                return b.founded - a.founded
            })
        }
        if (pagination.itemsToShow !== 0) return this.paginate(teams)
        return teams
    }

    paginate = (teams)=> {
        const { itemsToShow, currPage } = this.state.pagination
        return teams.slice((currPage - 1) * itemsToShow, currPage * itemsToShow)
    }

    handleSortFilter = (ev)=> {
        if (ev.target.name === 'favOnly') this.setState({showFavOnly: ev.target.checked})
        else if (ev.target.name === 'paginate') {
            const paginationCopy = {...this.state.pagination}
            paginationCopy.itemsToShow = +ev.target.value
            paginationCopy.currPage = 1
            this.setState({pagination: paginationCopy})
        }
        
        else this.setState({sortBy: ev.target.value})
    }

    clearFavorites = ()=> {
        const teamsCopy = this.state.teams
        teamsCopy.map(team=>team.isFavorite = false)
        this.setState({teams: teamsCopy}, ()=>{
            storageService.save(STORAGE_KEY,this.state.teams)
        })
    }

    onPageChange = (page)=>{
        const paginationCopy = {...this.state.pagination}
        paginationCopy.currPage = page
        this.setState({pagination: paginationCopy})
    }

    render(){
        const { showFavOnly } = this.state
        const teams = this.getTeamsForDisplay()
        var teamsLength
        showFavOnly ? teamsLength = teams.length : teamsLength = this.state.teams.length
        return (
            <main>
                <div>
                    <FilterSort 
                        handleSortFilter={this.handleSortFilter} 
                        clearFavorites={this.clearFavorites}
                        showFavOnly={showFavOnly}
                    />
                    <TeamList 
                        teams={teams} 
                        toggleFavorite={this.toggleFavorite}
                    />
                </div>
                {this.state.pagination.itemsToShow !== 0 &&
                    <Pagination 
                        teamsLength={teamsLength} 
                        itemsPerPage={this.state.pagination.itemsToShow}
                        currPage={this.state.pagination.currPage}
                        onPageChange={this.onPageChange}
                    />
                }
            </main>
        )
    }
}