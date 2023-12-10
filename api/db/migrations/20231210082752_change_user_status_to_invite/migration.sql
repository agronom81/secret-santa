/*
  Warnings:

  - You are about to drop the column `touserId` on the `ThankYou` table. All the data in the column will be lost.
  - You are about to drop the `UserStatus` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `toUserId` to the `ThankYou` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ThankYou" DROP CONSTRAINT "ThankYou_touserId_fkey";

-- DropForeignKey
ALTER TABLE "UserStatus" DROP CONSTRAINT "UserStatus_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserStatus" DROP CONSTRAINT "UserStatus_userId_fkey";

-- AlterTable
ALTER TABLE "ThankYou" DROP COLUMN "touserId",
ADD COLUMN     "toUserId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserStatus";

-- CreateTable
CREATE TABLE "Invite" (
    "id" TEXT NOT NULL,
    "userId" INTEGER,
    "status" "Status" NOT NULL DEFAULT 'INVITED',
    "eventId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThankYou" ADD CONSTRAINT "ThankYou_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
