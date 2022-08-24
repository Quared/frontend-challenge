import { Character } from "../../../types"

interface FilterOptions {
  filter: string[]
  globalSearchText: string
}

export const applyInMemoryFilter = (
  rows: Character[],
  {filter, globalSearchText}: FilterOptions,
): Character[] => {
  const filteredRows = rows.filter((row) => {
    return row.name.toLowerCase()
      .includes(globalSearchText.toLowerCase());
  });

  if (!filter.length) {
    return filteredRows
  }

  // Global filtering functionality
  return filteredRows
    .filter(row => filter.every(filter =>
        row.tags?.map(tag => tag.tag_name).includes(filter)))
}