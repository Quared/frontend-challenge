import { useState } from 'react'
import logo from './assets/img/Mortal-Kombat-Logo.png'
import './assets/styles/app.scss'
import DataTable from './components/table'
import Team from './components/team'
import TotalTeamPower from './components/total-team-power'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[]

function App() {
  const [team, setTeam] = useState<Character[]>([])
  
  const teamHeroesIds = team.map(hero => hero.id)
  return (
    <div className="fe-challange">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div className='content'>
        {team.length > 0 ? (
          <Team team={team} setTeam={setTeam}/>
        ) : (
          <h2 className='heading'>Select your squad to defend earthrealm</h2>
        )}
        
        <TotalTeamPower team={team}/>
        <DataTable
          data={data}
          setTeam={setTeam}
          teamHeroesIds={teamHeroesIds}
        />
      </div>
    </div>
  )
}

export default App
