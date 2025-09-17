import Snowflakify from 'snowflakify';

const startTimestamp = new Date('2025-01-01');

export const snowflake = new Snowflakify({
    epoch: startTimestamp.getTime(),
});