INSERT INTO requests (title, street_address, city, category_id, img_url, description, client_id, preferred_date, provider_id, date_assigned)

VALUES
('Leaky drain', '3577 Carling Avenue', 'Ottawa', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZU3Kx2z8U_NB6984peiq3VF8Tn1OoHhK8Zw&usqp=CAU', 'Drain under kitchen sink has leak in 2 places', 1, '13-AUG-2021', 1, '12-AUG-2021');

INSERT INTO requests (title, street_address, city, category_id, img_url, description, client_id, preferred_date)

VALUES
('Weak water flow from faucet', '3577 Carling Avenue', 'Ottawa', 1, 'https://www.familyhandyman.com/wp-content/uploads/2018/08/shutterstock_166772414-sink.jpg?w=1200', 'The faucet in the kitchen has weak water flow for past few days.', 1, '17-AUG-2021'),
('Slow water drain', '3004 MacLaren Street', 'Ottawa', 1, 'https://www.familyhandyman.com/wp-content/uploads/2019/01/shutterstock_735226639-sink.jpg?w=1200', 'Kitchen sink drains very slow causing it to be filled with water most of the time.', 2, '12-AUG-2021'),
('Moisture on ceiling', '4820 Merivale Road', 'Ottawa', 1, 'https://www.familyhandyman.com/wp-content/uploads/2019/01/shutterstock_1214330980-bump.jpg?w=1200', 'Moisture causing paint on ceiling to bubble and peel.', 3, '14-AUG-2021'),
('Slow water drain', '2740 Bank St', 'Ottawa', 1, 'https://www.familyhandyman.com/wp-content/uploads/2019/01/shutterstock_735226639-sink.jpg?w=1200', 'Kitchen sink drains very slow causing it to be filled with water most of the time.', 2, '12-AUG-2021'),
('Moisture on ceiling', '4333 Montreal Road', 'Ottawa', 1, 'https://www.familyhandyman.com/wp-content/uploads/2019/01/shutterstock_1214330980-bump.jpg?w=1200', 'Moisture causing paint on ceiling to bubble and peel.', 3, '14-AUG-2021'),
('No hot water', '3394 MacLaren Street', 'Ottawa', 1, 'https://www.familyhandyman.com/wp-content/uploads/2019/01/shutterstock_1214330980-bump.jpg?w=1200', 'Moisture causing paint on ceiling to bubble and peel.', 3, '14-AUG-2021'),
('Hedge installation', '3577 Carling Avenue', 'Ottawa', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmRT4Tsw7SAGptqI4oRj4cgH5WdyhP7ctGw&usqp=CAU', 'Need hedge installed around the yard around 80ft. length', 1, '18-AUG-2021'),
('Bathroom remodel', '3577 Carling Avenue', 'Ottawa', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZVQXo129gSjahVkhgtWEuFhpZm2LpbI23g&usqp=CAU', 'Bathroom about 300 sq.ft. nned remodel. Need quote on labor prices', 1, '18-AUG-2021');

INSERT INTO requests (title, street_address, city, category_id, description, client_id, preferred_date) VALUES
('Baby sitter needed', '3577 Carling Avenue', 7, 'Need a baby sitter for 2 kids (8y and 6y) from 1pm to 3pm', 1, '20-AUG-2021');

INSERT INTO requests (title, street_address, city, category_id, img_url, description, client_id,date_assigned)
VALUES
('Broken Fan', '111 King Street East', 'Toronto', 2, 'https://c8.alamy.com/comp/WDF2GC/close-up-of-abandoned-floor-fan-WDF2GC.jpg', 'Fan not working. Blades are broken and need someone to replace', 1,'2021-08-01');

INSERT INTO requests(
  title,
  street_address,
  city,
  category_id,
  img_url,
  preferred_date,
  description,
  client_id)
VALUES ('Leaky Faucet', '2146 Blind Bay Road', 'Black Pool', 1,'https://rdcnewsadvice.wpengine.com/wp-content/uploads/2018/10/leaky-faucet.jpg', '18-AUG-2021', 'Leaky Faucet in Kitchen.', 1),
('Paint Basement', '4350 Robson St', 'Vancouver', 3,'https://www.nolanpainting.com/content/uploads/2020/02/preventing-paint-damage-by-water-leaks-425x260.jpg', '16-AUG-2021', 'Need the whole basement repainted', 3),
('Flickering Lights', '3331 Front Street', 'Toronto', 2,'https://www.kirbyelectric.com/wp-content/uploads/2018/07/neon-tube-269365_960_720-848x480.jpg', '17-AUG-2021', 'The lights in the study keep flickering.', 4),
('Low water pressure in bathroom', '2147 James Street', 'St Catharines', 1,'https://lentheplumber.com/wp-content/uploads/2017/11/low-water-pressure.jpg', '17-AUG-2021', 'Water pressure in main bathroom ver ylow even when faucet fully open', 4);



INSERT INTO requests (title, street_address, city, category_id,
  preferred_date, img_url, description, client_id, provider_id)
VALUES
('broken sink', '111 King Street East', 'Toronto', 1, '1-AUG-2021', 'https://previews.123rf.com/images/engraver/engraver1412/engraver141200045/34972389-broken-sink-old-interior.jpg', 'Broken sink competely need urgent fix', 1, 2);




INSERT INTO requests (title, street_address, city, category_id, img_url, description, client_id)
VALUES
('broken fan', '111 King Street East', 'Toronto', 2, 'https://c8.alamy.com/comp/D97YMB/a-discarded-electric-fan-D97YMB.jpg', 'Broken fan competely need urgent fix in Toronto', 1);

INSERT INTO requests (title, street_address, city, category_id,
  preferred_date, img_url, description, client_id)
VALUES
('Clogged Toilet', '4261 rue Levy', 'Quebec', 1, '2-AUG-2021', 'https://previews.123rf.com/images/engraver/engraver1412/engraver141200045/34972389-broken-sink-old-interior.jpg', 'Toilet floods when flushed.', 1);
