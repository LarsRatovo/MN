CREATE DATABASE mn;
    \c mn
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
        price DOUBLE PRECISION NOT NULL CHECK ( price>0 ),
        fee DOUBLE PRECISION NOT NULL CHECK ( fee>0 ),
        type VARCHAR(1) NOT NULL CHECK ( type='R' OR type='L' ),
        stat INTEGER NOT NULL CHECK ( stat>=0 AND stat<=3 ),
        observation VARCHAR(150) NOT NULL
    );
    CREATE TABLE spent
    (
        deliver INTEGER NOT NULL REFERENCES deliver(id),
        date_spent DATE NOT NULL ,
        reason VARCHAR(100) NOT NULL ,
        amount DOUBLE PRECISION
    );
    CREATE VIEW fee_price AS
    SELECT SUM(fee) fee,SUM(price) price,DATE(date_delivery) FROM delivery GROUP BY DATE(date_delivery);

    CREATE VIEW spent_date AS
    SELECT SUM(amount) spent,date_spent FROM spent GROUP BY date_spent;

    CREATE VIEW report AS
    SELECT fp.fee,fp.price,fp.fee-sd.spent stayed,sd.spent,fp.date FROM fee_price fp JOIN spent_date sd ON fp.date=sd.date_spent;
