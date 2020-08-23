
Feature('หน้า Login');

Scenario('เชื่อมต่อ MQTT สำเร็จ', (I) => {
  I.amOnPage('http://cmmc.io/mqtt/client/');
  I.see('Connection');
  I.see('Username');
  I.see('Password');
  I.see('ClientID');
  I.see('Host');
  I.see('Port');
  I.fillField('#urlInput', 'mqtt.cmmc.io')
  I.fillField('#userInput', '')

  I.click('#connectButton')
  I.waitForText("connected");

});
