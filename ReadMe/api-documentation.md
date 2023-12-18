# API Endpoints Documentation

This document outlines the API endpoints for our application, which is designed to connect companies with interns. It includes endpoints for managing company and intern profiles, applications, and premium memberships.

## Table of Contents

- [Intern Endpoints](#intern-endpoints)
  - [Create Intern Profile](#create-intern-profile)
  - [Browse Companies](#browse-companies)
  - [Apply to Company](#apply-to-company)
  - [Premium Membership Subscription](#premium-membership-subscription)
- [Company Endpoints](#company-endpoints)
  - [Create Company Profile](#create-company-profile)
  - [Browse Intern Profiles](#browse-intern-profiles)
  - [Review Intern Applications](#review-intern-applications)
- [General Endpoints](#general-endpoints)
  - [User Feedback](#user-feedback)
  - [Data Privacy Management](#data-privacy-management)

## Intern Endpoints

### Create Intern Profile

- **Endpoint:** `/api/interns/create`
- **Method:** `POST`
- **Description:** Allows interns to create their profiles.
- **Request Body:** `{ name, age, skills, education, experience }`
- **Response:** `{ internId, status }`

### Browse Companies

- **Endpoint:** `/api/companies/browse`
- **Method:** `GET`
- **Description:** Enables interns to browse through company profiles.
- **Response:** `{ companies: [company details] }`

### Apply to Company

- **Endpoint:** `/api/interns/apply`
- **Method:** `POST`
- **Description:** Interns can apply to companies or specific departments.
- **Request Body:** `{ internId, companyId, departmentId }`
- **Response:** `{ applicationId, status }`

### Premium Membership Subscription

- **Endpoint:** `/api/interns/premium`
- **Method:** `POST`
- **Description:** Interns can subscribe to premium membership.
- **Request Body:** `{ internId, subscriptionDetails }`
- **Response:** `{ subscriptionId, status }`

## Company Endpoints

### Create Company Profile

- **Endpoint:** `/api/companies/create`
- **Method:** `POST`
- **Description:** Companies can create their profiles with department details.
- **Request Body:** `{ companyName, departments }`
- **Response:** `{ companyId, status }`

### Browse Intern Profiles

- **Endpoint:** `/api/companies/interns`
- **Method:** `GET`
- **Description:** Companies can view profiles of interns.
- **Response:** `{ interns: [intern details] }`

### Review Intern Applications

- **Endpoint:** `/api/companies/review`
- **Method:** `POST`
- **Description:** Companies review and respond to intern applications.
- **Request Body:** `{ companyId, applicationId, decision }`
- **Response:** `{ responseId, status }`

## General Endpoints

### User Feedback

- **Endpoint:** `/api/feedback`
- **Method:** `POST`
- **Description:** Collect user feedback for continuous improvement.
- **Request Body:** `{ userId, feedback }`
- **Response:** `{ feedbackId, status }`

### Data Privacy Management

- **Endpoint:** `/api/privacy`
- **Method:** `POST`
- **Description:** Manage data privacy settings.
- **Request Body:** `{ userId, privacySettings }`
- **Response:** `{ settingId, status }`
