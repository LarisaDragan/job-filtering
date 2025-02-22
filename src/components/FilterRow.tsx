import "./style/styles.scss";

interface FilterRowProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearFilters: () => void;
}

const FilterRow: React.FC<FilterRowProps> = ({
  filters,
  onRemoveFilter,
  onClearFilters,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-tags">
        {filters.map((filter) => (
          <div key={filter} className="filter">
            <div className="selected-filter"> {filter}</div>
            <button
              className="remove-btn"
              onClick={() => onRemoveFilter(filter)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button className="clear-btn" onClick={() => onClearFilters()}>
        Clear
      </button>
    </div>
  );
};

export default FilterRow;
