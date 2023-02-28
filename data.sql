CREATE DATABASE mn;
    CREATE TABLE fournisseur
    (
        id           INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
        nom          VARCHAR(50) NOT NULL,
        prenom       VARCHAR(50) NOT NULL,
        recuperation VARCHAR(50) NOT NULL,
        contact      VARCHAR(20) NOT NULL
    );
    CREATE TABLE livreur
    (
        id      INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
        nom     VARCHAR(50) NOT NULL,
        prenom  VARCHAR(50) NOT NULL,
        contact VARCHAR(20) NOT NULL
    );
    CREATE TABLE operation
    (
        id            INTEGER          NOT NULL PRIMARY KEY AUTOINCREMENT,
        ref           VARCHAR(10)      NOT NULL,
        fournisseur        INTEGER          NOT NULL,
        livreur       INTEGER         ,
        type          VARCHAR(1)       NOT NULL,
        prixSansFrais DOUBLE PRECISION,
        prix          DOUBLE PRECISION,
        contact       VARCHAR(20)      NOT NULL,
        lieu          VARCHAR(50)      NOT NULL,
        dateHeure     DATETIME NOT NULL,
        etat          INTEGER NOT NULL,
        observation   VARCHAR(100),
        FOREIGN KEY (fournisseur) REFERENCES fournisseur(id),
        FOREIGN KEY (livreur) REFERENCES livreur(id)
    );
    CREATE TABLE depenses
    (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        livreur INTEGER NOT NULL,
        depense DOUBLE PRECISION NOT NULL,
	designation VARCHAR(50) NOT NULL,
        date DATE NOT NULL,
        FOREIGN KEY (livreur) REFERENCES livreur(id)
    );
    INSERT INTO fournisseur (nom, prenom, recuperation, contact) VALUES ("Test","Test","Test","Test");
    CREATE TABLE calendrier(
        livreur INTEGER NOT NULL,
        date DATE NOT NULL ,
        FOREIGN KEY (livreur) REFERENCES livreur(id)
    );

-- CREATE VIEW operationofday AS
-- SELECT * FROM operation WHERE DATE('dateHeure')=DATE('now');

-- CREATE VIEW as fournisseurofday AS
-- SELECT * FROM fournisseur WHERE id IN (SELECT fournisseur FROM operationofday)

CREATE VIEW full_operation AS
SELECT op.*,l.nom nomlivreur FROM operation op LEFT JOIN livreur l ON op.livreur=l.id;
