---
name: pusher-status
tldr: Simple node client for Pusher's Status Page
opensource: true
link: https://github.com/raffaelecalza/pusher-status
---

[![npm version](https://img.shields.io/npm/v/pusher-status?style=flat-square)](https://www.npmjs.com/package/pusher-status)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
![Github build status](https://img.shields.io/github/workflow/status/raffaelecalza/pusher-status/CI?style=flat-square)
[![License MIT](https://img.shields.io/github/license/raffaelecalza/pusher-status?style=flat-square)](https://github.com/raffaelecalza/pusher-status/blob/master/LICENSE)

This library returns the status of Pusher's components using the data from the [status page](https://status.pusher.com/) of Pusher.

## Installation
Open a terminal inside your project and type:
```shell
npm i --save pusher-status
```

## Usage
```js
const Pusher = require('pusher-status')

Pusher.status((err, res) => {
    if (err) {
        // process error
    }

    console.log(`Status = ${res.status}`)
    console.log(`Numbers of components correctly working = ${res['components']['operational'].length}`)

    if (res.status != 'OK') {
        console.log(`Numbers of components not working = ${res['components']['outage'].lenght}`)
    }
})
```

## Components
Inside Pusher's Status Page you can find the following components:
| Name        | Description |
| ----------- | ----------- |
| Channels REST API	| The API your servers use to publish messages and query channel state, described here: https://pusher.com/docs/rest_api	 |
| Channels WebSocket client API	| The API which Pusher Channels end-users connect to, generally for subscribing to events	 |
| Channels Dashboard	| dashboard.pusher.com: Where you can view statistics and manage your apps.	 |
| Channels Stats Integrations	| Integration of Pusher Channels with Datadog and other 3rd party providers	 |
| Channels presence channels	| *No description provided*	 |
| Channels Webhooks	| *No description provided*	 |
| Channels Pusher.js CDN	| The CDN backing js.pusher.com, serving the javascript client library to end users.	 |
| Beams	| *No description provided*	 |
| Beams dashboard	| *No description provided*	 |
| Marketing Website	| The website at www.pusher.com	 |
| Payment API	| The API that handle charging, plan upgrade, downgrade and cancellation	 |

## Examples
You can also find the `.json` files of the examples below inside the `/examples` folder.

### All operational
```json
{
	"status": "OK",
	"components": {
		"operational": [{
			"name": "Channels REST API",
			"position": 1,
			"description": "The API your servers use to publish messages and query channel state, described here: https://pusher.com/docs/rest_api"
		}, {
			"name": "Channels WebSocket client API",
			"position": 2,
			"description": "The API which Pusher Channels end-users connect to, generally for subscribing to events"
		}, {
			"name": "Channels Dashboard",
			"position": 3,
			"description": "dashboard.pusher.com: Where you can view statistics and manage your apps."
		}, {
			"name": "Channels Stats Integrations",
			"position": 4,
			"description": "Integration of Pusher Channels with Datadog and other 3rd party providers"
		}, {
			"name": "Channels presence channels",
			"position": 5,
			"description": null
		}, {
			"name": "Channels Webhooks",
			"position": 6,
			"description": null
		}, {
			"name": "Channels Pusher.js CDN",
			"position": 7,
			"description": "The CDN backing js.pusher.com, serving the javascript client library to end users."
		}, {
			"name": "Beams",
			"position": 8,
			"description": null
		}, {
			"name": "Chatkit",
			"position": 9,
			"description": null
		}, {
			"name": "Marketing Website",
			"position": 10,
			"description": "The website at www.pusher.com"
		}, {
			"name": "Payment API",
			"position": 11,
			"description": "The API that handle charging, plan upgrade, downgrade and cancellation"
		}],
		"outage": []
	}
}
```

### Some not working
```json
{
	"status": "ERROR",
	"components": {
		"operational": [{
			"name": "Channels REST API",
			"position": 1,
			"description": "The API your servers use to publish messages and query channel state, described here: https://pusher.com/docs/rest_api"
		}, {
			"name": "Channels WebSocket client API",
			"position": 2,
			"description": "The API which Pusher Channels end-users connect to, generally for subscribing to events"
		}, {
			"name": "Channels Dashboard",
			"position": 3,
			"description": "dashboard.pusher.com: Where you can view statistics and manage your apps."
		}, {
			"name": "Channels Stats Integrations",
			"position": 4,
			"description": "Integration of Pusher Channels with Datadog and other 3rd party providers"
		}, {
			"name": "Channels presence channels",
			"position": 5,
			"description": null
		}, {
			"name": "Channels Webhooks",
			"position": 6,
			"description": null
		}, {
			"name": "Channels Pusher.js CDN",
			"position": 7,
			"description": "The CDN backing js.pusher.com, serving the javascript client library to end users."
		}, {
			"name": "Beams",
			"position": 8,
			"description": null
		}, {
			"name": "Chatkit",
			"position": 9,
			"description": null
		}],
		"outage": [{
			"name": "Marketing Website",
			"position": 10,
			"description": "The website at www.pusher.com"
		}, {
			"name": "Payment API",
			"position": 11,
			"description": "The API that handle charging, plan upgrade, downgrade and cancellation"
		}]
	}
}
```