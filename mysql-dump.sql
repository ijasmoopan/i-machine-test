
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `records-db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `records-db`;
DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `purchasePrice` decimal(10,2) NOT NULL,
  `salesPrice` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Product 1',100.00,80.00,'2024-08-20 14:38:06','2024-08-20 14:38:06'),(2,'Product 2',80.00,100.00,'2024-08-20 14:44:20','2024-08-20 14:44:20'),(3,'Product 3',450.00,500.00,'2024-08-20 15:02:26','2024-08-20 15:02:26'),(4,'Product 1',1234.00,1235.00,'2024-08-21 08:16:50','2024-08-21 08:16:50'),(5,'Product 3',3000.00,4000.00,'2024-08-21 09:24:42','2024-08-21 09:24:42'),(6,'Product 4',12344.00,12359.00,'2024-08-21 09:27:03','2024-08-21 09:27:03'),(7,'Product 5',5000.00,6000.00,'2024-08-21 09:28:21','2024-08-21 09:28:21'),(8,'Product 6',1000.00,1500.00,'2024-08-21 09:55:43','2024-08-21 09:55:43'),(9,'Product 7',1000.00,1500.00,'2024-08-21 11:00:09','2024-08-21 11:00:09'),(10,'ijas',1234.00,1234.00,'2024-08-21 11:14:42','2024-08-21 11:14:42'),(11,'Product 12',234.00,3421.00,'2024-08-21 12:04:19','2024-08-21 12:04:19'),(12,'Product 1',1235.00,12345.00,'2024-08-21 12:05:41','2024-08-21 12:05:41');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

