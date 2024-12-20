-- Insert sample athletes
INSERT INTO athlete (name, age, team, created_at, updated_at)
VALUES 
    ('John Doe', 25, 'Team A', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Jane Smith', 28, 'Team B', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert performance metrics for John Doe (id=1)
INSERT INTO performance_metric (athlete_id, metric_type, value, unit, timestamp, created_at, updated_at)
VALUES 
    (1, 'speed', 25.5, 'seconds', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'endurance', 50, 'meters', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'stamina', 150, 'bpm', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert performance metrics for Jane Smith (id=2)
INSERT INTO performance_metric (athlete_id, metric_type, value, unit, timestamp, created_at, updated_at)
VALUES 
    (2, 'speed', 12.5, 'km/h', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'endurance', 10, 'kilometers', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'strength', 165, 'bpm', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 