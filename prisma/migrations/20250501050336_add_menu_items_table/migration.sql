-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `fName` VARCHAR(100) NOT NULL,
    `lName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `otp` VARCHAR(191) NOT NULL,
    `role` ENUM('SUBSCRIBER', 'EDITOR', 'ADMIN') NOT NULL DEFAULT 'ADMIN',
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SiteMeta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `meta_key` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SiteMeta_meta_key_key`(`meta_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MenuItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `siteMetaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MenuItem` ADD CONSTRAINT `MenuItem_siteMetaId_fkey` FOREIGN KEY (`siteMetaId`) REFERENCES `SiteMeta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
