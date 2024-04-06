import { readFileSync } from 'fs';

export default () => ({
	JWT_SECRET: process.env.SECRET_KEY || 'secret',
	PORT: parseInt(process.env.PORT, 10) || 3000,
	database: {
		type: 'postgres',
		url: process.env.DATABASE_URL,
		ssl: {
			ca: readFileSync('ca_cert.crt').toString(),
		},
	},
});
