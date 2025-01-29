Create database Dwebb;

CREATE TABLE IF NOT EXISTS `accounts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create the contacts table
CREATE TABLE IF NOT EXISTS `contacts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `program` VARCHAR(100) NOT NULL,
    `batch` VARCHAR(50) NOT NULL,
    `message` TEXT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
