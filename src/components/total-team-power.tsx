import { Character } from "../types"

interface TotalTeamPowerProps {
  team: Character[]
}

const TotalTeamPower = ({team}: TotalTeamPowerProps) => {
  const getAvg = () => {
    const teamAbilities = team.map(hero => hero.abilities)
    return teamAbilities.flat().reduce((acc, curr) => {
      return {
        ...acc,
        [curr.abilityName]: acc[curr.abilityName] + curr.abilityScore / teamAbilities.length
      }
    }, {
      Power: 0,
      Mobility: 0,
      Technique: 0,
      Survivability: 0,
      Energy: 0,
    })
  }

  const getAvgValue = (key: "Power" | "Mobility" | "Technique" | "Survivability" | "Energy") => {
    const average = getAvg()

    return Object.keys(team).length ? average[key].toLocaleString('en-US') : "-"
  }
    
  return (
    <div className="team-power">
      <ul className='team-power-list'>
        <li>
          <p className='title'>Power</p>
          <p className='value'>{getAvgValue("Power")}</p>
        </li>
        <li>
          <p className='title'>Mobility</p>
          <p className='value'>{getAvgValue("Mobility")}</p>
        </li>
        <li>
          <p className='title'>Technique</p>
          <p className='value'>{getAvgValue("Technique")}</p>
        </li>
        <li>
          <p className='title'>Survivability</p>
          <p className='value'>{getAvgValue("Survivability")}</p>
        </li>
        <li>
          <p className='title'>Energy</p>
          <p className='value'>{getAvgValue("Energy")}</p>
        </li>
      </ul>
      <span className="team-power-note">* Totals as average for squad</span>
    </div>
  )
}

export default TotalTeamPower
