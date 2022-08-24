import { GridColDef } from '@mui/x-data-grid'
import { CharacterAbility, CharacterTag } from '../../types';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Character',
    width: 250,
    renderCell: ({row}) => {
      return (
        <p className='char-name'>
          <img alt="char-pic" src={row.thumbnail}/>
          <span>{row.name}</span>
        </p>
      )
    }
  },
  {
    field: 'tags',
    headerName: 'Tags',
    width: 310,
    sortable: false,
    renderCell: ({row}) => {
      const {tags} = row
      return (
        <div className="tags table-tags">
          {tags.map((tag: CharacterTag, idx: number) =>
            <div className='tag' key={idx}>
              {tag.tag_name}
            </div>
          )}
        </div>
      )
    }
  },
  {
    field: 'power',
    headerName: 'Power',
    width: 120,
    headerAlign: "center",
    renderCell: ({row}) => {
      const {abilities} = row
      const value = abilities.find((el: CharacterAbility) => el.abilityName === 'Power')?.abilityScore || '0'
      return (
        <p className={`table-value ${parseInt(value) === 10 ? 'max' : ''}`}>
          {value}
        </p>
      )
    }
  },
  {
    field: 'mobility',
    headerName: 'Mobility',
    width: 140,
    headerAlign: "center",
    renderCell: ({row}) => {
      const {abilities} = row
      const value = abilities.find((el: CharacterAbility) => el.abilityName === 'Mobility')?.abilityScore || '0'
      return (
        <p className={`table-value ${parseInt(value) === 10 ? 'max' : ''}`}>
          {value}
        </p>
      )
    }
  },
  {
    field: 'tech',
    headerName: 'Technique',
    width: 140,
    headerAlign: "center",
    renderCell: ({row}) => {
      const {abilities} = row
      const value = abilities.find((el: CharacterAbility) => el.abilityName === 'Technique')?.abilityScore || '0'
      return (
        <p className={`table-value ${parseInt(value) === 10 ? 'max' : ''}`}>
          {value}
        </p>
      )
    }
  },
  {
    field: 'surv',
    headerName: 'Survivability',
    width: 150,
    headerAlign: "center",
    renderCell: ({row}) => {
      const {abilities} = row
      const value = abilities.find((el: CharacterAbility) => el.abilityName === 'Survivability')?.abilityScore || '0'
      return (
        <p className={`table-value ${parseInt(value) === 10 ? 'max' : ''}`}>
          {value}
        </p>
      )
    }
  },
  {
    field: 'energy',
    headerName: 'Energy',
    width: 140,
    headerAlign: "center",
    renderCell: ({row}) => {
      const {abilities} = row
      const value = abilities.find((el: CharacterAbility) => el.abilityName === 'Energy')?.abilityScore || '0'
      return (
        <p className={`table-value ${parseInt(value) === 10 ? 'max' : ''}`}>
          {value}
        </p>
      )
    }
  },
];