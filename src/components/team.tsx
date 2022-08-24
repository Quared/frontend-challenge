import { Character } from "../types"

interface TeamProps {
  team: Character[]
  setTeam(arr: Character[]): void
}

const Team = ({team, setTeam}: TeamProps) => {
  const removeHero = (id: number) => {
    const updatedTeam = team.filter(hero => hero.id !== id)
    setTeam(updatedTeam)
  }

  return (
    <>
      <h2 className='heading'>Your champions!</h2>
      <ul className='team-list'>
        {team.map((hero) => (
          <li
            key={hero.id}
            onClick={() => removeHero(hero.id)}
          >
            <img alt='hero-pic' src={hero.image}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Team
