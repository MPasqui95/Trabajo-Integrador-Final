-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema electrodoggy_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema electrodoggy_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `electrodoggy_db` DEFAULT CHARACTER SET utf8mb3 ;
USE `electrodoggy_db` ;

-- -----------------------------------------------------
-- Table `electrodoggy_db`.`categoriesbrands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`categoriesbrands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`categoriescolors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`categoriescolors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`categoriesproducts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`categoriesproducts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`categoriesusers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`categoriesusers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `regularPrice` DECIMAL(10,0) NOT NULL,
  `offerPrice` DECIMAL(10,0) NULL DEFAULT NULL,
  `discount` DECIMAL(10,0) NULL DEFAULT NULL,
  `image` VARCHAR(100) NULL DEFAULT NULL,
  `specification` TEXT NOT NULL,
  `stock` TINYINT NOT NULL,
  `categoriesBrands_id` INT NOT NULL,
  `categoriesProductos_id` INT NOT NULL,
  `categoriesColors_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoriesBrands_id_idx` (`categoriesBrands_id` ASC) VISIBLE,
  INDEX `categoriesProducts_id_idx` (`categoriesProductos_id` ASC) VISIBLE,
  INDEX `colors_id` (`categoriesColors_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`productimages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`productimages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `imageProduct` BLOB NULL DEFAULT NULL,
  `product_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `electrodoggy_db`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`products_categoriescolors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`products_categoriescolors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productsCategories_id` INT NOT NULL,
  `categoriesColors_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `products_id_idx` (`productsCategories_id` ASC) VISIBLE,
  INDEX `categoriesColors_id_idx` (`categoriesColors_id` ASC) VISIBLE,
  CONSTRAINT `categoriesColors_id`
    FOREIGN KEY (`categoriesColors_id`)
    REFERENCES `electrodoggy_db`.`categoriescolors` (`id`),
  CONSTRAINT `productsCategories_id`
    FOREIGN KEY (`productsCategories_id`)
    REFERENCES `electrodoggy_db`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(100) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `direction` VARCHAR(100) NOT NULL,
  `dateBirth` DATE NULL DEFAULT NULL,
  `userImage` VARCHAR(100) NULL DEFAULT NULL,
  `userscol` VARCHAR(45) NULL DEFAULT NULL,
  `categoriesUsers_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `categoriesUsers_id_idx` (`categoriesUsers_id` ASC) VISIBLE,
  CONSTRAINT `categoriesUsers_id`
    FOREIGN KEY (`categoriesUsers_id`)
    REFERENCES `electrodoggy_db`.`categoriesusers` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `electrodoggy_db`.`user_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `electrodoggy_db`.`user_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `users_id_idx` (`users_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `productos_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `electrodoggy_db`.`products` (`id`),
  CONSTRAINT `users_id`
    FOREIGN KEY (`users_id`)
    REFERENCES `electrodoggy_db`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
