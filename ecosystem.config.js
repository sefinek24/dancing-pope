module.exports = {
	apps: [{
		name            : 'jp2.sefinek.net',
		script          : './index.js',

		log_date_format : 'HH:mm:ss, DD.MM.YYYY',
		error_file      : '/home/ubuntu/logs/www/jp2.sefinek.net/error.log',
		out_file        : '/home/ubuntu/logs/www/jp2.sefinek.net/out.log',

		max_restarts          : 7,
		restart_delay         : 7000,
		shutdown_with_message : true,
		wait_ready            : true,
	}],
};