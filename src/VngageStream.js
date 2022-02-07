define(function (require) {
	'use strict';

	var StreamEventTypes = require('./StreamEventTypes'),
		StreamErrors = require('./StreamErrors'),
		StreamConnector_WithDependencyInjection = require('./StreamConnector'),
		Subscription = require('./Subscription');

	return {
		StreamEventTypes: StreamEventTypes,	// Is this needed? Or could it be required/imported directly?
		StreamErrors: StreamErrors,	// Is this needed? Or could it be required/imported directly?
		StreamConnector: StreamConnector_WithDependencyInjection,
		Subscription: Subscription
	}
});
