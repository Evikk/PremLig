export function TeamItem ({team, toggleFavorite}) {
    return (
        <tr onClick={()=>toggleFavorite(team.team_id)}>
            <td>{team.isFavorite ? <i className="fa fa-star yellow"></i> : <i className="fa fa-star-o"></i>}</td>
            <td><img src={team.logo} alt="team-logo"/></td>
            <td>{team.name}</td>
            <td>{team.founded}</td>
        </tr>
    )
}