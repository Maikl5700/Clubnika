export default function global_settings(prm) {
    if(!prm) {
      prm = {};
    }
  
    Object.assign(prm, {
      server_api: 'http://192.168.6.39:1337/api',
      grand_type: "password",
      client_id: "bea656e7-1cd4-4c74-b2a2-771918f68568",
      client_secret: "lkjasdfhfghmnafghfsdkjhdfk",
      req_offline_server_interval: 60000
    });
  
    return prm;
}