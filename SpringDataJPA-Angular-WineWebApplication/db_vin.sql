-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 22 mars 2023 à 11:02
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_vin`
--

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(70),
(1);

-- --------------------------------------------------------

--
-- Structure de la table `producteur`
--

CREATE TABLE `producteur` (
  `id` bigint(20) NOT NULL,
  `idcompte` bigint(20) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `numero_fiscal` bigint(20) DEFAULT NULL,
  `regionviticole` varchar(255) DEFAULT NULL,
  `telephone` bigint(20) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `producteur`
--

INSERT INTO `producteur` (`id`, `idcompte`, `nom`, `numero_fiscal`, `regionviticole`, `telephone`, `ville`) VALUES
(43, 30, 'Château Comtesse du Parc ', 634275698642, 'Région Bordeaux', 622663287, 'Saint-Estèphe'),
(42, 32, 'Domaine du Mas des Tines ', 54678354987, ' Région Bourgogne', 650100196, 'Saint-Amour-Bellevue'),
(44, 1, 'Château de la Rose Sarron', 45628961459, 'Région Bordeaux', 767342287, 'Langon'),
(46, 45, 'Polytech', 98736475816, 'Région Loire', 898762722, 'Angers');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_PRODUCTEUR'),
(3, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`) VALUES
(30, 'sirine.ferchichi@gmail.com', 'Naima', 'Naima'),
(32, 'derin@gmail.com', 'derin', 'Derin'),
(1, 'admin@gmail.com', 'admin', 'admin'),
(45, 'polytech@gmail.com', 'test', 'polytechSAGI'),
(66, 'matteo@gmail.com', '$2a$10$Uwa8euRjDM2yPHsBJigMM.D9rsXB.Moo80Lv.dhjMLo9JG2wVgAmm', 'matt123'),
(69, 'producteur@gmail.com', '$2a$10$S7vR/DUG.5VT/jFEApDAuehTECb2xotraYeIFZ1KrKKbjpooj46AC', 'producteur'),
(65, 'test3@gmail.com', '$2a$10$3wMtw13VusGw2k5mk7.BTOtZv8.XyNslfZWmQtn/GSjJNt6Y8zTUK', 'test3'),
(68, 'test@test.com', '$2a$10$Iw4HilqU09pnURPhEPt6w.udlYNtg3poKNn8NPF7m0vAWyR.Qkpbm', 'test123');

-- --------------------------------------------------------

--
-- Structure de la table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(65, 1),
(65, 2),
(66, 1),
(67, 1),
(68, 1),
(69, 1);

-- --------------------------------------------------------

--
-- Structure de la table `vins`
--

CREATE TABLE `vins` (
  `id` bigint(20) NOT NULL,
  `appelation` varchar(255) DEFAULT NULL,
  `couleur` varchar(255) DEFAULT NULL,
  `cepage` varchar(255) DEFAULT NULL,
  `contenance` double DEFAULT NULL,
  `degre_alcool` double DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `prix` double DEFAULT NULL,
  `id_compte` bigint(20) NOT NULL,
  `region` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `vins`
--

INSERT INTO `vins` (`id`, `appelation`, `couleur`, `cepage`, `contenance`, `degre_alcool`, `description`, `prix`, `id_compte`, `region`) VALUES
(129, 'Bourgogne', 'Rouge', 'Pinot noir ', 75, 13, 'Couleur pourpre, intense, reflets pourpres. Boisé, intense, arômes de réglisse, arômes de pruneau, arômes d\'amande, arômes de fruits à noyau, subtile arômes de chêne.', 9.9, 32, ' Région Bourgogne'),
(130, 'Haut-Médoc AOP', 'Rouge', 'Cabernet Sauvignon-Merlot', 75, 13.5, 'Couleur rubis, éclatante, reflets pourpres. Expressif, frais, intense arômes de fruits rouges, arômes de chêne.', 14, 30, 'Région Bordeaux'),
(135, 'Bordeaux AOP', 'Rouge', 'Cabernet Sauvignon - Merlot', 75, 13.5, 'Bon vin.', 15, 1, 'Région Bordeaux'),
(136, 'Loire AOP', 'Rouge', 'Cabernet Sauvignon - Merlot', 100, 13, 'Vin de Polytech Angers', 10, 45, 'Région Loire'),
(132, 'Bordeaux AOP', 'Rosé', 'Cabernet Sauvignon - Merlot', 75, 12.5, 'Culture conventionnelle, Vendanges mécaniques, Egrappage total, Fermentation en cuve inox thermo-régulée, Pressurage, Elevage en cuve inox thermo-régulée, Elevage sur lies, Sols argilo-graveleux, Sols de galets.', 6, 1, 'Région Bordeaux'),
(133, 'Graves AOP', 'Rouge', 'Cabernet franc - Cabernet Sauvignon - Merlot - Petit Verdot', 75, 14, 'Culture raisonnée, Vendanges mécaniques, Egrappage total, Fermentation en cuve inox thermo-régulée, Pigeage fréquent, Utilisation de levures indigènes, Macération pré fermentaire à froid, Elevage en barrique de deux vins, Elevage en cuve inox, Assemblage.', 8, 1, 'Région Bordeaux'),
(134, 'Graves AOP', 'Blanc', 'Muscadelle - Sauvignon -Sémillon', 75, 13, 'Culture raisonnée, Vendanges mécaniques, Egrappage total, Fermentation en fût de chêne, Bâtonnage régulier, Macération pré fermentaire à froid, Elevage en fût de chêne, Elevage sur lies, Bâtonnage régulier, Bouchon technique.', 11, 1, 'Région Bordeaux');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `producteur`
--
ALTER TABLE `producteur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`) USING HASH;

--
-- Index pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- Index pour la table `vins`
--
ALTER TABLE `vins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `vins`
--
ALTER TABLE `vins`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
