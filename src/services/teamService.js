import axios from 'axios'

async function getTeams(){
    const options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "653d3b3764mshebe02e9e409a19bp1a3220jsn2a73f5baa876",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    }
    const url = "https://api-football-v1.p.rapidapi.com/v2/teams/league/2"
    const res = await axios.get(url, options)
    const teams = res.data.api.teams
    console.log(teams);
    return teams
    
}

export const teamService = {
    getTeams
}