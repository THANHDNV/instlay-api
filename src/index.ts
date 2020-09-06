import 'module-alias/register';
import app from './app';
import { logger } from '@helpers';

const port = process.env.PORT || 3000;

app.listen(port, () => {
	logger.info(`App is listening on ${port}`);
})