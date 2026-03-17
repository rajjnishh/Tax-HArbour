import https from 'https';

https.get('https://www.google.com/maps/place/Tax+Harbour/@28.155262,80.4115497,17z/data=!4m8!3m7!1s0x399f670775cc6929:0xf6b336891a82656a!8m2!3d28.1552573!4d80.4141246!9m1!1b1!16s%2Fg%2F11y9qs5sdc?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/,"([^"]+)",\d+,"https:\/\/lh3\.googleusercontent\.com\/a\//g);
    if (matches) {
      console.log(matches.slice(0, 5));
    } else {
      console.log("No matches found");
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
