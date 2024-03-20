export default function JobListing(props) {
  const { job } = props;
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  const tags = [role, level];
  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }
  return (
    <div className={`job-listing ${featured ? "featured" : ""}`}>
      <div className="logo">
        <img src={logo} alt={company} />
      </div>
      <div className="job-details">
        <div className="top-row">
          <div className="company">{company}</div>
          {featured && <div className="featured-tag">Featured</div>}
        </div>
        <div className="position">{position}</div>
        <div className="bottom-row">
          <div className="postedAt">{postedAt}</div>
          <div className="contract">{contract}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
