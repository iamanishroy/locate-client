# locate-client

A node module for locating clients.

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

