# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies dengan --legacy-peer-deps untuk menghindari konflik
RUN npm install --legacy-peer-deps

# Copy seluruh file proyek
COPY . .

# Build aplikasi
RUN npm run build

# Expose port
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["npm", "start"]
