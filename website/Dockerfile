# Use a lighter base image for production
FROM node:20-alpine AS builder

# Set environment variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json separately
# This allows Docker to cache dependencies layer if they haven't changed
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build your application (assuming you have a build script in your package.json)
RUN npm run build

# Stage 2: Serve the built application with a lightweight server
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app/build /app

# Expose the port that the server will run on
EXPOSE 5173

# Run the server
CMD ["npx", "serve", "-s", "-l", "5173", "."]
