import {useMemo } from 'react';

import { Character } from '../../types';

interface TagsListProps {
  data: Character[]
  selectedFilters: string[]
  setSelectedFilters(arr: string[]): void
}

const TagsList = ({
  data,
  selectedFilters,
  setSelectedFilters
}: TagsListProps) => {
  const tagsList = useMemo(() => {
    const tagsFromAllChars = data.map(
        (row) => Boolean(row.tags)
          ? row.tags.map(tag => tag.tag_name)
          : []
        ).flat()
    
    return [...new Set(tagsFromAllChars)]
  }, [data])

  const handleTagClick = (tag: string) => {
    if (selectedFilters.includes(tag)) {
      const removedTagArr = selectedFilters.filter(oldTag => oldTag !== tag)
      setSelectedFilters(removedTagArr)
    } else {
      setSelectedFilters([...selectedFilters, tag])
    }
  }

  return (
    <ul className='tags selection-tags'>
      {tagsList.map(tag => (
        <li
          className={`tag ${selectedFilters.includes(tag) ? "active" : ""}`}
          key={tag}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </li>
      ))}
      <span
        onClick={() => setSelectedFilters([])}
      >
        Clear all
      </span>
    </ul>
  );
}

export default TagsList
