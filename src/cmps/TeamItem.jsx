import "../assets/styles/teamItem.css"

export function TeamItem ({team, toggleFavorite}) {
    return (
        <tr onClick={()=>toggleFavorite(team.team_id)}>
            <td className="star-icon-wrapper">{team.isFavorite ? <i className="fa fa-star yellow"></i> : <i className="fa fa-star-o"></i>}</td>
            <td>
                <div className="logo-wrapper">
                    <img src={team.logo} alt="team-logo"/>
                </div>
            </td>
            <td><span className="title-mobile">Team: </span>{team.name}</td>
            <td><span className="title-mobile">Founded: </span>{team.founded}</td>
        </tr>
    )
}