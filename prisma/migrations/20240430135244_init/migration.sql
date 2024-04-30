-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortUrlId" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "visitHistory" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastVisited" TIMESTAMP(3),

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);
