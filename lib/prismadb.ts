// Import PrismaClient from the Prisma client library
import { PrismaClient } from "@prisma/client";
// Import globalAgent from the http library
import { globalAgent } from "http";

// Check if there's already an instance of PrismaClient in the global object,
// if not, create a new instance and assign it to the 'client' variable
const client = global.prismadb || new PrismaClient();

// If the application is running in production mode, store the PrismaClient
// instance in the global object to reuse the connection across multiple
// invocations of the function (e.g., in serverless deployments)
if (process.env.NODE_ENV === "production") global.prismadb = client;

// Export the PrismaClient instance as the default export
export default client;