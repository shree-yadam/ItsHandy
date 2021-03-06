DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id  SERIAL PRIMARY KEY NOT NULL,
  request_id INTEGER REFERENCES requests(id) ON DELETE CASCADE,
  from_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  to_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  time_sent TIMESTAMP NOT NULL,
  message TEXT
);