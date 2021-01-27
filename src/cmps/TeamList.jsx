import { TeamItem } from "./TeamItem"
import "../assets/styles/teamList.css"

export function TeamList ({teams, toggleFavorite}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Favorite</th>
                        <th>Crest</th>
                        <th>Name</th>
                        <th>Year Founded</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team =>{
                        return <TeamItem key={team.team_id} team={team} toggleFavorite={toggleFavorite}/>
                    })}   
                </tbody>
            </table>
        </div>
    )
}