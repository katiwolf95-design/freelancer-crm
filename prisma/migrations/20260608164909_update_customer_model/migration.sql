-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "company" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Active';
