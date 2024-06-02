import { PrismaService } from "prisma/client/prisma.service";
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class DataModule{}