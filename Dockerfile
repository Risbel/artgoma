# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js application
RUN pnpm build

# Your app listens on port 3000
EXPOSE 3000

# Define the command to run your app
CMD [ "pnpm", "start" ]
