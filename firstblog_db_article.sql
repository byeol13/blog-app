-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: firstblog_db
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT 'null',
  `description` varchar(1000) DEFAULT 'null',
  `img_url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (51,'A Culinary Tour of Vienna: Must-Try Dishes and Where to Find Them',' Vienna’s culinary scene is a feast for the senses, from traditional favorites like Wiener Schnitzel to sweet treats like Sachertorte. This article takes readers on a food lover’s journey through Vienna, highlighting the best places to sample iconic dishes. I explore beloved eateries, from historic Gasthäuser serving classic Tafelspitz to charming bakeries offering flaky, buttery Apfelstrudel. With tips on the must-visit spots and insights into the history behind each dish, this guide is perfect for anyone wanting to taste Vienna’s authentic flavors.','https://th.bing.com/th/id/R.d3e8178f415bcfe34b7a97adf0e15963?rik=ivwNSB8S%2bTeQSQ&pid=ImgRaw&r=0','2024-10-09 15:50:43'),(52,'Vienna’s Hidden Wine Cellars: Exploring the Secrets of the City’s Winemaking Tradition','Beneath Vienna’s bustling streets lie centuries-old wine cellars, each with stories of the city’s winemaking heritage. This article uncovers hidden gems like the atmospheric Augustinerkeller and the intimate Weingut Mayer am Pfarrplatz. I describe my visits to these underground retreats, where I tasted exquisite local wines, learned about the city’s unique winemaking methods, and discovered the historical significance of each cellar. For wine enthusiasts and history buffs alike, these cellars offer a glimpse into Vienna’s rich vinicultural tradition.','https://s3-media2.fl.yelpcdn.com/bphoto/qcVtLdITghsZJssfMrkh6Q/o.jpg','2024-10-09 16:15:11'),(53,'Embracing Vienna’s Timeless Charm: A Journey Through Its Historic Districts','Vienna’s historic districts offer a window into the city’s past, each neighborhood telling its own story. In this article, I explore the winding streets of the Inner City (1st District), with its imperial architecture, ornate palaces, and iconic landmarks like St. Stephen’s Cathedral. I also venture into Alsergrund, home to Freud’s former residence, and explore the quieter, tree-lined avenues of Josefstadt, filled with quaint cafés and boutique shops. Through these districts, I uncover Vienna’s timeless charm, sharing personal anecdotes about hidden courtyards, local bakeries, and lesser-known museums that give each area its unique character.','https://www.tripsavvy.com/thmb/TJeumIJ6CMFWiPcT74pfkto9xoc=/3704x2469/filters:no_upscale():max_bytes(150000):strip_icc()/St-Stephens-Cathedral-Angel-Villalba-Moment-5a6df0da43a103003750dff3.jpg','2024-10-09 16:32:25'),(54,'Art and Soul of Vienna: A Personal Journey Through the City’s Museums and Galleries','Vienna is a city where art flourishes on every corner, and this article takes you on a tour of its most fascinating museums and galleries. I share my experiences wandering through the halls of the Kunsthistorisches Museum, home to works by masters like Caravaggio and Vermeer, and the Albertina, where contemporary art blends with classic pieces. Beyond the famous institutions, I delve into lesser-known spots like the Secession Building, an ode to the Jugendstil (Art Nouveau) movement, and the quirky MuseumsQuartier, where modern art meets urban vibes. Each museum visit offers insights into Vienna’s rich cultural heritage and contemporary creative spirit.','https://www.inexhibit.com/wp-content/uploads/2015/09/Kunsthistorisches-Museum-Vienna-exterior-large.jpg','2024-10-10 16:04:17'),(55,'Finding Peace in Vienna’s Parks: A Day of Relaxation and Reflection','While Vienna is known for its bustling cultural life, it also offers numerous parks that provide a serene escape from the city\'s hustle. In this article, I spend a day exploring the city’s most beautiful green spaces, from the elegant rose gardens of Volksgarten to the sprawling landscapes of Prater. I share my experiences lounging by the pond at Stadtpark, where locals enjoy picnics and classical concerts, and wandering through the lush Schönbrunn Palace Gardens, admiring its baroque design and stunning views. This guide also offers tips on seasonal highlights, like fall foliage and spring blossoms, to help you experience Vienna’s parks at their best.','https://www.theviennablog.com/wp-content/uploads/2017/11/StadtParkVienna_theviennablog-15.jpeg','2024-10-11 13:59:23'),(56,'Vienna’s Seasonal Festivals: Celebrating Tradition and Culture Year-Round','Vienna’s festival calendar is a testament to its love for tradition and cultural celebrations. I share my experiences attending seasonal events, starting with the festive Christmas markets in December, where the air is filled with the scent of mulled wine and gingerbread. I also explore springtime events like the Vienna City Marathon and the vibrant Donauinselfest, Europe’s largest open-air festival. Each season brings a new reason to celebrate, and this guide highlights the must-see festivals that capture Vienna’s spirit and provide a deeper connection to its traditions.','https://i.pinimg.com/originals/3b/a1/8d/3ba18d16c6a59a90dfb87b7c358291e9.jpg','2024-10-12 15:06:32');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-19 16:17:18
