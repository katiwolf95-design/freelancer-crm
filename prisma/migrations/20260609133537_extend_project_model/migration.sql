-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "dueDate" TEXT,
ADD COLUMN     "progress" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "status" SET DEFAULT 'Planning';
