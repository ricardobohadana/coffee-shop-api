-- CreateTable
CREATE TABLE "Coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
