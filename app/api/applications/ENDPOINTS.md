# Applications
- `GET /api/applications`: Retrieves a list of all applications. *(Admin only)*
- `POST /api/applications`: Submits a new application. *(Authenticated users only)*

## Organizations
- `GET /api/applications/organizations/{organizationId}`: Retrieves all applications related to a specific organization
- `DELETE /api/applications/organizations/{organizationId}`: Deletes all applications related to a specific organization
- `GET /api/applications/organizations/{organizationId}/{applicationId}`: Retrieves a specific application related to a specific organization. *(Admin, or organization associated with the application)*
- `PATCH /api/applications/organizations/{organizationId}/{applicationId}`: Updates a specific application's details. *(Admin, or organization associated with the application)*
- `DELETE /api/applications/organizations/{organizationId}/{applicationId}`: Deletes a specific application. *(Admin, or organization associated with the application)*

## Users
- `GET /api/applications/users/{userId}`: Retrieves all applications related to a specific user. *(Admin, or user/organization associated with the application)* 
- `DELETE /api/applications/users/{userId}`: Deletes all applications related to a specific user
- `GET /api/applications/users/{userId}/{applicationId}`: Retrieves a specific application related to a specific user. *(Admin, or user/organization associated with the application)*
- `PATCH /api/applications/users/{userId}/{applicationId}`: Updates a specific application's details. *(Admin, or user/organization associated with the application)*
- `DELETE /api/applications/users/{userId}/{applicationId}`: Deletes a specific application. *(Admin, or user associated with the application)*