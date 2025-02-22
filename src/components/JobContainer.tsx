import { useState } from "react";
import data from "../data/data.json";
import { JobListing } from "../types";
import FilterRow from "./FilterRow";
import "./style/styles.scss";

const JobContainer = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleAddFilter = (newFilter: string) => {
    if (!filters.includes(newFilter)) {
      setFilters([...filters, newFilter]);
    }
  };

  const handleRemoveFilter = (filterToRemove: string) => {
    setFilters(
      filters.filter((currentFilter) => currentFilter !== filterToRemove)
    );
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  const filterData = (data: JobListing[]) => {
    return data.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every((filter) => jobTags.includes(filter));
    });
  };
  const filteredJobs = filters.length ? filterData(data) : data;

  return (
    <div className="job-container">
      <FilterRow
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onClearFilters={handleClearFilters}
      />
      {filteredJobs.map((job: JobListing) => (
        <div key={job.id} className="card">
          <div className="left-side">
            <img alt="company-logo" src={job.logo} />
            <div className="info-container">
              <div className="card-body">
                <div className="job-company">{job.company}</div>
                {job.new && <div className="new">NEW!</div>}
                {job.featured && <div className="featured">FEATURED</div>}
              </div>
              <div>{job.position}</div>
              <div className="about-job">
                <div>{job.postedAt}</div>
                <div className="dot">{"\u2022"}</div>
                <div>{job.contract}</div>
                <div className="dot">{"\u2022"}</div>
                <div>{job.location}</div>
              </div>
            </div>
          </div>

          <div id="right-side">
            <div onClick={() => handleAddFilter(job.role)}>{job.role}</div>
            <div onClick={() => handleAddFilter(job.level)}>{job.level}</div>
            {job.languages.map((language) => (
              <div key={language} onClick={() => handleAddFilter(language)}>
                {language}
              </div>
            ))}
            {job.tools.map((tool) => (
              <div key={tool} onClick={() => handleAddFilter(tool)}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobContainer;
