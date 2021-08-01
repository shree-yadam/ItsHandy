INSERT INTO requests(
  title,
  street_address,
  city,
  category_id,
  preferred_date,
  description,
  client_id)
VALUES ('Leaky Faucet', '2146 Blind Bay Road', 'Black Pool', 1, '18-AUG-2021', 'Leaky Faucet in Kitchen.', 1),
('Paint Basement', '4350 Robson St', 'Vancouver', 3, '16-AUG-2021', 'Need the whole basement repainted', 1),
('Clogged Toilet', '4261 rue Levy', 'Quebec', 1, '16-AUG-2021', 'Toilet floods when flushed.', 1),
('Flickering Lights', '3331 Front Street', 'Toronto', 2, '17-AUG-2021', 'The lights in the study keep flickering.', 1),
('Low water pressure in bathroom', '2147 James Street', 'St Catharines', 1, '17-AUG-2021', 'Water pressure in main bathroom ver ylow even when faucet fully open', 1);

INSERT INTO requests (title, street_address, city, category_id, img_url, description, client_id)

VALUES
('broken sink', '111 King Street East', 'Toronto', 1, 'https://previews.123rf.com/images/engraver/engraver1412/engraver141200045/34972389-broken-sink-old-interior.jpg', 'Broken sink competely need urgent fix', 1);


INSERT INTO requests (title, street_address, city, category_id, img_url, description, client_id)

VALUES
('broken fan', '111 King Street East', 'Toronto', 2, 'https://c8.alamy.com/comp/D97YMB/a-discarded-electric-fan-D97YMB.jpg', 'Broken fan competely need urgent fix in Toronto', 1);
