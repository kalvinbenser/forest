-- CreateTable
CREATE TABLE `TreeSites` (
    `tree_site_id` INTEGER NOT NULL AUTO_INCREMENT,
    `site_name` VARCHAR(255) NOT NULL,
    `site_image` VARCHAR(255) NOT NULL,
    `rate_per_tree` INTEGER NOT NULL,
    `total_plant` INTEGER NOT NULL,
    `availabile_plant` INTEGER NOT NULL,
    `site_description` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `city` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tree_site_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
