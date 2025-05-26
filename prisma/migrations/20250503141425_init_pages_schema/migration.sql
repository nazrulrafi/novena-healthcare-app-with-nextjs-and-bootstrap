-- CreateTable
CREATE TABLE `Page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `metaKey` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PageMeta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `metaKey` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `pageId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PageMeta` ADD CONSTRAINT `PageMeta_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
