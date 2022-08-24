import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';

import { columns } from './columns';
import TagsList from './tags-list';
import { applyInMemoryFilter } from './common/helpers';
import { Character } from '../../types';


interface DataTableProps {
  data: Character[]
  teamHeroesIds: number[]
  setTeam(arr: Character[]): void
}

const DataTable = ({data, teamHeroesIds, setTeam}: DataTableProps) => {
  const [rows, setRows] = useState<DataTableProps['data']>(data);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  // Use useEffect hook to make search and filters work together
  useEffect(() => {
    const filteredRows = applyInMemoryFilter(data, {filter: selectedFilters, globalSearchText: searchValue})
    setRows(filteredRows);

    return
  }, [data, searchValue, selectedFilters, setRows])

  return (
    <div
      className='data-table-wrapper'
    >
      <SearchBar
        className='search-bar'
        value={searchValue}
        onChange={(searchVal) => setSearchValue(searchVal)}
        onCancelSearch={() => setSearchValue("")}
      />
      <TagsList
        data={data}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={92}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        selectionModel={teamHeroesIds}
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = data.filter((row) =>
            selectedIDs.has(row.id)
          )
          setTeam(selectedRowData)
        }}
        disableColumnMenu
        disableColumnFilter
      />
    </div>
  );
}

export default DataTable
