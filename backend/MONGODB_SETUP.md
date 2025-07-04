# MongoDB API Setup Guide

## Prerequisites

1. **MongoDB Installation**: Make sure you have MongoDB installed and running
   - Local MongoDB: Install MongoDB Community Server
   - MongoDB Atlas: Create a free cluster at https://cloud.mongodb.com

2. **Environment Variables**: Create a `.env` file in the backend directory with your MongoDB connection string

## Setup Instructions

### 1. Create Environment File

Create a `.env` file in the `backend` directory:

```env
# For local MongoDB
MongoDB_URI=mongodb://localhost:27017/practicenest

# For MongoDB Atlas (replace with your actual connection string)
# MongoDB_URI=mongodb+srv://username:password@cluster.mongodb.net/practicenest?retryWrites=true&w=majority

PORT=3000
NODE_ENV=development
```

### 2. Test MongoDB Connection

Run the test script to verify your MongoDB connection:

```bash
cd backend
node test-mongo.js
```

### 3. Start the Development Server

```bash
npm run start:dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Users API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Create a new user |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| PATCH | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

### Example API Calls

#### Create a User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "isActive": true
  }'
```

#### Get All Users
```bash
curl http://localhost:3000/users
```

#### Get User by ID
```bash
curl http://localhost:3000/users/USER_ID_HERE
```

#### Update User
```bash
curl -X PATCH http://localhost:3000/users/USER_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "age": 25
  }'
```

#### Delete User
```bash
curl -X DELETE http://localhost:3000/users/USER_ID_HERE
```

## MongoDB Connection Options

### Local MongoDB
1. Install MongoDB Community Server
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/practicenest`

### MongoDB Atlas (Cloud)
1. Create account at https://cloud.mongodb.com
2. Create a new cluster
3. Get connection string from cluster
4. Replace username, password, and cluster details in the connection string

## Troubleshooting

### Connection Issues
- Ensure MongoDB is running
- Check your connection string format
- Verify network connectivity (for Atlas)
- Check firewall settings

### Common Errors
- `ECONNREFUSED`: MongoDB not running
- `Authentication failed`: Wrong credentials (Atlas)
- `Network timeout`: Network connectivity issues

## Next Steps

1. Add more models/schemas as needed
2. Implement authentication and authorization
3. Add data validation and sanitization
4. Set up proper error handling
5. Add logging and monitoring 