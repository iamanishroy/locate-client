# locate-client

A node module for locating clients.

## Usage limits

 [ip-api.com](http://ip-api.com/) will automatically ban any IP addresses doing over 150 requests per minute. To unban your IP click [here](http://ip-api.com/docs/unban).
You are free to use [ip-api.com](http://ip-api.com/) for non-commercial use.   [ip-api.com](http://ip-api.com/) does not allow commercial use without prior approval.
For commercial, unlimited use see ip-api.com [pro service](http://ip-api.com/docs/pro).


## Install

    npm i --save locate-client
    
## Usage

```js
const locateClient  =  require("locate-client");

(async  ()  => {
	var location  = await locateClient();
	console.log(location);
})();

/*
{
	status: 'success',
	country: 'India',
	countryCode: 'IN',
	region: 'WB',
	regionName: 'West Bengal',
	city: 'Kolkata',
	zip: '700019',
	lat: 22.5602,
	lon: 88.3698,
	timezone: 'Asia/Kolkata',
	isp: 'Bharti Airtel Limited',
	org: 'Sai Complex',
	as: 'AS45609 Bharti Airtel Ltd. AS for GPRS Service'
}
*/
```

