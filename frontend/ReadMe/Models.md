# Database Models and Attributes

## User Model

**Attributes:** UserID (primary key), Username, Email, Password, UserType (Intern or Company), ProfileCreatedDate

**Description:** Manages the basic authentication and identification information for all users.

## InternProfile Model

**Attributes:** ProfileID (primary key), UserID (foreign key), Name, Age, Skills (list), Resume, EducationDetails, Experience, ContactInfo

**Description:** Stores detailed information about intern users, including their professional skills and background.

## Company Model

**Attributes:** CompanyID (primary key), UserID (foreign key), CompanyName, Industry, Size, Description, Location, ContactInfo

**Description:** Represents companies on the platform, containing basic information about each company.

## Department Model

**Attributes:** DepartmentID (primary key), CompanyID (foreign key), DepartmentName, Description

**Description:** Specific departments within companies, each with its unique identity and role.

## JobListing Model

**Attributes:** JobID (primary key), DepartmentID (foreign key), Title, Description, Requirements, Duration, ApplicationDeadline

**Description:** Details of internship opportunities available in different departments.

## Application Model

**Attributes:** ApplicationID (primary key), JobID (foreign key), InternID (foreign key), SubmissionDate, Status (Pending, Accepted, Rejected), CoverLetter

**Description:** Tracks applications made by interns to various job listings.

## PremiumMembership Model

**Attributes:** MembershipID (primary key), InternID (foreign key), StartDate, EndDate, MembershipType

**Description:** Manages premium membership subscriptions for interns, allowing access to additional features.

# User Actions Post-Authentication

## For Interns:

**Profile Completion:** After signing in, interns complete or update their profiles with relevant details like education, skills, and experience.

**Browse and Apply:** Interns browse through the listed companies and their departments, viewing available job listings.

**Submit Applications:** They can apply to internships by submitting their applications through the platform.

**Upgrade to Premium:** Interns can opt for a premium membership to access enhanced features such as applying to multiple jobs simultaneously and viewing companies that have checked their profile.

**Application Tracking:** Interns can track the status of their applications (pending, accepted, or rejected).

## For Companies:

**Profile and Department Management:** Companies, upon logging in, can create or update their profiles and add information about different departments.

**Post Job Listings:** They can post new internship opportunities under relevant departments.

**Browse Talent Pool:** Companies can browse through intern profiles to find suitable candidates.

**Review Applications:** They review applications received from interns and decide to accept or reject them.

**Communicate with Interns:** Accepted interns can be contacted through the platform for further processes.