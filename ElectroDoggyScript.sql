-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ElectroDoggy_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ElectroDoggy_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ElectroDoggy_db` DEFAULT CHARACTER SET utf8 ;
USE `ElectroDoggy_db` ;

-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`categoriesBrands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`categoriesBrands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`categoriesProducts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`categoriesProducts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`productImages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`productImages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `regularPrice` DECIMAL NOT NULL,
  `offerPrice` DECIMAL NULL,
  `discount` DECIMAL NULL,
  `image` BLOB NULL,
  `specification` TEXT NOT NULL,
  `stock` TINYINT(10) NOT NULL,
  `categoríasBrands_id` INT NOT NULL,
  `categoríasProductos_id` INT NOT NULL,
  `productsImage_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoriesBrands_id_idx` (`categoríasBrands_id` ASC) VISIBLE,
  INDEX `categoriesProducts_id_idx` (`categoríasProductos_id` ASC) VISIBLE,
  INDEX `productsImage_id_idx` (`productsImage_id` ASC) VISIBLE,
  CONSTRAINT `categoriesBrands_id`
    FOREIGN KEY (`categoríasBrands_id`)
    REFERENCES `ElectroDoggy_db`.`categoriesBrands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `categoriesProducts_id`
    FOREIGN KEY (`categoríasProductos_id`)
    REFERENCES `ElectroDoggy_db`.`categoriesProducts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `productsImage_id`
    FOREIGN KEY (`productsImage_id`)
    REFERENCES `ElectroDoggy_db`.`productImages` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`categoriesColors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`categoriesColors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`products_categoriesColors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`products_categoriesColors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productsCategories_id` INT NOT NULL,
  `categoriesColors_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `products_id_idx` (`productsCategories_id` ASC) VISIBLE,
  INDEX `categoriesColors_id_idx` (`categoriesColors_id` ASC) VISIBLE,
  CONSTRAINT `productsCategories_id`
    FOREIGN KEY (`productsCategories_id`)
    REFERENCES `ElectroDoggy_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `categoriesColors_id`
    FOREIGN KEY (`categoriesColors_id`)
    REFERENCES `ElectroDoggy_db`.`categoriesColors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`categoriesUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`categoriesUsers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`userImage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`userImage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(100) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `direction` VARCHAR(100) NOT NULL,
  `dateBirth` DATE NULL,
  `userImage` BLOB NULL,
  `userscol` VARCHAR(45) NULL,
  `categoriesUsers_id` INT NULL,
  `userImage_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `categoriesUsers_id_idx` (`categoriesUsers_id` ASC) VISIBLE,
  INDEX `userImage_id_idx` (`userImage_id` ASC) VISIBLE,
  CONSTRAINT `categoriesUsers_id`
    FOREIGN KEY (`categoriesUsers_id`)
    REFERENCES `ElectroDoggy_db`.`categoriesUsers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `userImage_id`
    FOREIGN KEY (`userImage_id`)
    REFERENCES `ElectroDoggy_db`.`userImage` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ElectroDoggy_db`.`user_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ElectroDoggy_db`.`user_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NULL,
  `product_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `users_id_idx` (`users_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `users_id`
    FOREIGN KEY (`users_id`)
    REFERENCES `ElectroDoggy_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `productos_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `ElectroDoggy_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `ElectroDoggy_db` ;

-- -----------------------------------------------------
--  routine1
-- -----------------------------------------------------

DELIMITER $$
USE `ElectroDoggy_db`$$
$$

DELIMITER ;

-- -----------------------------------------------------
--  routine2
-- -----------------------------------------------------

DELIMITER $$
USE `ElectroDoggy_db`$$
$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
