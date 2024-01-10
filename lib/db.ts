import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

// 전역 변수인 prisma가 이미 정의되어 있으면 그 값을 사용하고, 그렇지 않으면 새로운 PrismaClient를 생성
export const db = global.prisma || new PrismaClient();


// 개발 중에는 전역으로 공유된 PrismaClient를 사용하고, 프로덕션 환경에서는 새로운 PrismaClient를 생성
if (process.env.NODE_ENV !== "production") {
    global.prisma = db;
}