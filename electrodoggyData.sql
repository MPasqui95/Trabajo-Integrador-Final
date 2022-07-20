CREATE DATABASE  IF NOT EXISTS `electrodoggy_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `electrodoggy_db`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: electrodoggy_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoriesbrands`
--

DROP TABLE IF EXISTS `categoriesbrands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriesbrands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesbrands`
--

LOCK TABLES `categoriesbrands` WRITE;
/*!40000 ALTER TABLE `categoriesbrands` DISABLE KEYS */;
INSERT INTO `categoriesbrands` VALUES (1,'Samsung'),(2,'Apple'),(3,'LG'),(4,'Huawei'),(5,'Sony'),(6,'Acer'),(7,'Phillip'),(8,'Nintendo'),(9,'SkullCandy'),(10,'Logitech'),(11,'HP'),(12,'Lenovo'),(13,'Asus'),(14,'Xiaomi');
/*!40000 ALTER TABLE `categoriesbrands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriescolors`
--

DROP TABLE IF EXISTS `categoriescolors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriescolors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriescolors`
--

LOCK TABLES `categoriescolors` WRITE;
/*!40000 ALTER TABLE `categoriescolors` DISABLE KEYS */;
INSERT INTO `categoriescolors` VALUES (1,'Red'),(2,'Blue'),(3,'White'),(4,'Black'),(5,'Green'),(6,'Pink'),(7,'Violet'),(8,'Yellow'),(9,'Grey'),(10,'Sky blue');
/*!40000 ALTER TABLE `categoriescolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriesproducts`
--

DROP TABLE IF EXISTS `categoriesproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriesproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesproducts`
--

LOCK TABLES `categoriesproducts` WRITE;
/*!40000 ALTER TABLE `categoriesproducts` DISABLE KEYS */;
INSERT INTO `categoriesproducts` VALUES (1,'Celulares'),(2,'Laptops'),(3,'Tablets'),(4,'Gamer'),(5,'Audio'),(6,'Accesorios');
/*!40000 ALTER TABLE `categoriesproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriesusers`
--

DROP TABLE IF EXISTS `categoriesusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriesusers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesusers`
--

LOCK TABLES `categoriesusers` WRITE;
/*!40000 ALTER TABLE `categoriesusers` DISABLE KEYS */;
INSERT INTO `categoriesusers` VALUES (1,'Admin'),(2,'Usuario');
/*!40000 ALTER TABLE `categoriesusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productimages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `imageProduct` blob,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `regularPrice` decimal(10,0) NOT NULL,
  `offerPrice` decimal(10,0) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `image` blob,
  `specification` text NOT NULL,
  `stock` tinyint NOT NULL,
  `categoriesBrands_id` int NOT NULL,
  `categoriesProductos_id` int NOT NULL,
  `categoriesColors_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriesBrands_id_idx` (`categoriesBrands_id`),
  KEY `categoriesProducts_id_idx` (`categoriesProductos_id`),
  KEY `colors_id` (`categoriesColors_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 13 Pro',1500,1200,20,NULL,'iPhone 13 Pro 16GB RAM 256GB',20,2,1,2),(2,'Chromebook S330',3500,2975,15,NULL,'Chromebook Lenovo S330 14\" Mediatek MT8173C 64GB 4GB',30,12,2,9),(3,'Nintendo Switch',1800,1620,10,NULL,'Consola Nintendo Switch Modelo Oled Neón',12,8,4,1),(4,'Matebook D14',3200,2432,24,NULL,'Laptop Huawei Matebook D14 i5 8GB RAM 512GB SSD + Regalos',4,4,2,9),(5,'Redmi Note 11',720,504,30,NULL,'Celular Xiaomi Redmi Note 11 EU 128GB, 4GB ram, cámara principal 50MP + 8MP + 2MP + 2MP, frontal 13MP, 6.43\"',20,14,1,4),(6,'Tablet Galaxy S6 Lite',120,1032,14,NULL,'Tablet SAMSUNG Galaxy S6 Lite 10.4\" 4 GB RAM 64 GB',6,1,3,9),(7,'iPad Pro',6400,5632,12,NULL,'iPad Pro 12.9\" 512GB Wi-Fi Space Gray Chip M1 2021',5,2,3,9),(8,'PlayStation 5',2400,1632,32,NULL,'Consola PlayStation 5 con lector de discos',7,8,4,3),(9,'Audífonos Sesh Evo',1990,1672,12,NULL,'Audífonos bluetooth True Wireless Skullcandy Sesh Evo resistente al agua IP55, duración máx. 5 horas, negro',2,9,5,4),(10,'Parlante inalámbrico SRS-XB13',200,140,30,NULL,'Parlante inalámbrico Sony SRS-XB13 con Extra Bass y Bluetooth',24,5,5,2),(11,'Kit Teclado Mecanico y Mouse',520,208,60,NULL,'Kit Teclado Mecanico y Mouse Logitech Pop Keys Blast',5,10,6,8),(12,'Docking Station',140,105,25,NULL,'Docking Station HP USB Type-C Universal RJ45 DisplayPorts- 1MK33AA',2,11,6,9);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categoriescolors`
--

DROP TABLE IF EXISTS `products_categoriescolors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_categoriescolors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productsCategories_id` int NOT NULL,
  `categoriesColors_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_idx` (`productsCategories_id`),
  KEY `categoriesColors_id_idx` (`categoriesColors_id`),
  CONSTRAINT `categoriesColors_id` FOREIGN KEY (`categoriesColors_id`) REFERENCES `categoriescolors` (`id`),
  CONSTRAINT `productsCategories_id` FOREIGN KEY (`productsCategories_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categoriescolors`
--

LOCK TABLES `products_categoriescolors` WRITE;
/*!40000 ALTER TABLE `products_categoriescolors` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_categoriescolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_products`
--

DROP TABLE IF EXISTS `user_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id_idx` (`users_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `productos_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_products`
--

LOCK TABLES `user_products` WRITE;
/*!40000 ALTER TABLE `user_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `direction` varchar(100) NOT NULL,
  `dateBirth` date DEFAULT NULL,
  `userImage` blob,
  `userscol` varchar(45) DEFAULT NULL,
  `categoriesUsers_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `categoriesUsers_id_idx` (`categoriesUsers_id`),
  CONSTRAINT `categoriesUsers_id` FOREIGN KEY (`categoriesUsers_id`) REFERENCES `categoriesusers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Angie','Bolanos','angie@gmail.com','angie123','calle 11','1994-08-11',NULL,NULL,1),(2,'Ana','Uchuya','ana@gmail.com','ana123','calle 10','1995-07-06',NULL,NULL,1),(3,'Diego','Arbeláez','diego@gmail.com','diego123','calle 9','1990-02-14',NULL,NULL,1),(4,'Matias','Pasquini','mati@gmail.com','mati123','calle 8','1995-09-20',NULL,NULL,1),(5,'Carla','Diaz','carla@gmail.com','carla123','calle 7','1993-04-07',NULL,NULL,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'electrodoggy_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-10 20:52:25
