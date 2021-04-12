const axios = require("axios");
module.exports = async () => {
  try {
    var ip;
    var ipRes = await axios.get("https://www.cloudflare.com/cdn-cgi/trace");
    ipRes.data.split("\n").forEach((data) => {
      if (data.split("=")[0] == "ip") {
        ip = data.split("=")[1];
        return;
      }
    });
    data = (await axios.get(`http://ip-api.com/json/${ip}`)).data;
    if (data) {
      var returnData = {
        status: "success",
        country: data.country,
        countryCode: data.countryCode,
        region: data.region,
        regionName: data.regionName,
        city: data.city,
        zip: data.zip,
        lat: data.lat,
        lon: data.lon,
        timezone: data.timezone,
        isp: data.isp,
        org: data.org,
        as: data.as,
      };
      return returnData;
    } else {
      return { status: "failed" };
    }
  } catch (error) {
    return { status: "failed" };
  }
};
