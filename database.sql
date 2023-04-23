    CREATE SEQUENCE id_provider;
    CREATE TABLE provider
    (
        id INTEGER NOT NULL DEFAULT nextval('id_provider') PRIMARY KEY ,
        ref VARCHAR(20) DEFAULT ('MN'||currval('id_provider')) NOT NULL ,
        name VARCHAR(50) NOT NULL ,
        surname VARCHAR(50) NOT NULL ,
        recovery VARCHAR(100) NOT NULL ,
        contact VARCHAR(15) NOT NULL
    );
    CREATE TABLE deliver
    (
        id SERIAL NOT NULL PRIMARY KEY ,
        name VARCHAR(50) NOT NULL ,
        surname VARCHAR(50) NOT NULL ,
        contact VARCHAR(50) NOT NULL
    );
    CREATE TABLE calendar
    (
        deliver INTEGER NOT NULL REFERENCES deliver(id),
        date_work DATE NOT NULL,
        UNIQUE (deliver,date_work)
    );
    CREATE TABLE delivery
    (
        id SERIAL NOT NULL PRIMARY KEY ,
        provider INTEGER NOT NULL REFERENCES provider(id),
        ref VARCHAR(50) NOT NULL ,
        date_delivery TIMESTAMP NOT NULL,
        deliver INTEGER DEFAULT NULL REFERENCES deliver(id),
        place VARCHAR(100) NOT NULL ,
        contact VARCHAR(15) NOT NULL ,
        price DOUBLE PRECISION NOT NULL CHECK ( price>=0 ),
        fee DOUBLE PRECISION NOT NULL CHECK ( fee>=0 ),
        type VARCHAR(1) NOT NULL CHECK ( type='R' OR type='L' ),
        stat INTEGER NOT NULL CHECK ( stat>=0 AND stat<=3 ),
        observation VARCHAR(150),
        UNIQUE(ref,date_delivery)
    );
    CREATE UNIQUE index ref_unique ON delivery(ref,DATE(date_delivery));
    CREATE TABLE spent
    (
        id SERIAL NOT NULL PRIMARY KEY ,
        deliver INTEGER NOT NULL REFERENCES deliver(id),
        date_spent DATE NOT NULL ,
        reason VARCHAR(100) NOT NULL ,
        amount DOUBLE PRECISION
    );
    CREATE TABLE users
    (
        id SERIAL NOT NULL PRIMARY KEY ,
        username VARCHAR(100) NOT NULL ,
        password VARCHAR(100) NOT NULL
    );
    CREATE TABLE tokens
    (
        token VARCHAR(50) NOT NULL ,
        users INTEGER NOT NULL REFERENCES users(id),
        begin_validation DATE NOT NULL ,
        end_validation DATE NOT NULL ,
        valid BOOLEAN DEFAULT true
    );
    CREATE VIEW fee AS
    SELECT SUM(fee*1000) fee,DATE(date_delivery) FROM delivery WHERE stat=3 OR stat=1 GROUP BY DATE(date_delivery);

    CREATE VIEW price AS
    SELECT SUM(price) price,DATE(date_delivery) FROM delivery WHERE stat=1 GROUP BY DATE(date_delivery);

    CREATE VIEW spent_date AS
    SELECT SUM(amount) spent,date_spent FROM spent GROUP BY date_spent;

    CREATE VIEW pre_report AS
        SELECT 0 fee,0 price,spent,date_spent date FROM spent_date
        UNION
        SELECT fee ,0 price,0 spent ,date FROM fee
        UNION
        SELECT 0 fee,price,0 spent, date FROM price;

    CREATE VIEW report AS
        SELECT SUM(fee) fee,SUM(price) price,SUM(spent) spent,SUM(fee)-SUM(spent) stayed,date FROM pre_report GROUP BY date;

    INSERT INTO users(username,password) VALUES ('MNLivraisonAmbotra123',md5('zDKWSXevE$)IHQnR'));
