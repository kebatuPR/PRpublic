import {PrismaClient} from '@prisma/client';
import { globalAgent } from 'http';

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == 'production') global.prismadb = client;

export default client;