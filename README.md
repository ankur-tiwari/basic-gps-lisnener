# Basic GPS listener
GT06 | GT02 | AIS140 | Teltonika | All GPS data receiving script in Node Js

This is a basic GPS listener, can be use for GT06, GT02, GT06N, GT06A, GT02D, AIS140 and other GPS devices. The listnere is created using basic node JS. 

# Installation 

- First you need to take clone of the repo, Use `git clone https://github.com/ankur-tiwari/basic-gps-lisnener`
- Run following command `cd basic-gps-lisnener`
- `npm install` It will install all the dev depedancies 
- The latest stable version of PM2 is available to install via npm. Use `sudo npm i -g pm2`
- `sudo pm2 start basic-lisnener.js` or `sudo pm2 start your-filename.js`
- Enjoy !!!

# Basic Command to setup a GPS Device 

## GT02 Commands
```
#6666#IP#103.9.13.229#5000# - To point device to our server
#6666@AAD#1#9424702420# - To set center number (instead of 9424702420 put your number)
Relay Cut Off : RELAY,1#
Relay Cut On  :RELAY,0#
```
## BW08 Commands
```
#6666#IP#103.9.13.229#5000# - To point device to our server
#6666@AAD#1#9424702420# - To set center number (instead of 9424702420 put your number)
Relay Cut Off : #6666#CF#
Relay Cut On  : #6666#OF#
Where  : #6666#GF# - to get location status of device
```
## BW09 Device Commands
```
#6666#IP#103.9.13.242#5009# - To point device to our server
Relay Cut Off : RELAY,1#
Relay Cut On  :RELAY,0#
```
## GT06 Commands 
```
SERVER,0,103.9.13.229,5023,0# - To point device to our server
STATUS#	- To check device status
WHERE#	- To check device current position
TIMER,05# - To set data invterval 5 second	
SOS,A,9424702420# - To set SOS number
CENTER,A,9424702420# - To set center number (instead of 9424702420 put your number)
Relay Cut Off : RELAY,1#
Relay Cut On  :RELAY,0#
```


## AIS140 Device Commands 
```
CLRSOS - To clear sos commands
GETSTS - To get check GSM or GPS Status if GPS and GSM are 1, then everything is working fine.
SETPS 103.9.13.242:5003 - To point an AIS140 device to our server.
GETPARAMS - To get Ip details set on the device.
GETIOSTS - To check Ignition SOS, Digitial pin1(D1), Digitial pin2(D2) etc.
GETCONFIG - To get config details of the device
SETDOP 2,0 - To turn off digital output 2 pin (We are using it as a relay in fleetpro)
SETDOP 2,1 - To turn on digital output 2 pin (We are using it as a relay in fleetpro)
SETDOP 1,0 - To turn off digital output 1 pin (We are using it as a laid closing in fleetpro)
SETDOP 1,1 - To turn on digital output 1 pin (We are using it as a laid opening in fleetpro)
```


## TK103 Commands 
```
Ip103.9.13.229port8090 - To point device to our server
```

# Different Device with Specifications

## GT02D: 

Features
GPS+GSM+GPRS wireless network
 - The built-in high sensitive GPS chipset
 - Built-in GPS & GSM antenna
 - Check location information via SMS and GPRS (TCP)
 - Real-time positioning, automatically upload location information by interval
 - Delete driving data up to 90 days history 
 - Geo-fence, automatical in/out fence alarm (via SMS/Server
 - Low power alarm
 - Support ACC detection 
 - Install relay for tele-cut off petrol/electricity 
 - External power supply for different types of electric vehicles
 - Three colors LED status display to indicate working status
 - Check location via platform service 
 - Technical Specification:
 - GSM：850/900/1800/1900MHZ
 - GPRS: Class12, TCP/IP
 - Working Voltage：9-40V DC
 - Working current：≈22mA (12VDC)
 - Working current：≈12mA (24VDC)
 - GPS locating time：Cold start≈38s（Open sky）
 - Warm start≈32s
 - Hot start≈2s（Open sky）
 - GPS Precision：10m（2D RM）
 - Working temperature：-20℃～+70℃
 - Working humidity：20%～80%RH
 - Measurement：90(L) x 45(W) x 13.5(H) mm 

## GT06N: 

Features
- Remote cut-off (petrol/power): Compel the vehicle to stop by breaking off the fuel connection.
- Built-in 450mAh Battery: High capacity Li-ion battery ensuring sufficient power supply.
- ACC detection for ignition status: Be aware of the ignition status whenever you need.
- SOS Emergency Call: Thumb-sized button allowing urgent call during an emergency case
- Configurable Tracking Modes: Location uploaded following fixed distance, time interval, preset cornering
- Multiple Alarms: Instant alert for vibration, over speed. power off, geo-fence
- Voice Monitor: Activate listen-in mode via text
- Tracked By: SMS, APP, Web: Reports location in real time through different interfaces
- Technical Specification:
- GSM frequency 850/900/1800/1900 MHz
- GPRS Class 12, TCP/IP
- Memory 64Mb
- Phase error RMSPE<5,PPE<20
- Max output GSM850/GSM900:33±3dBm
- GSM1800/GSM1900:30±3Bm
- Max frequency error ±0.1ppm
- GPS chipset MTK high sensitivity chip
- Frequency L1,1575.42MHz C/A code
- GPS channel 66
- Location accuracy <10 meters
- Tracking sensitivity -165dBm
- Acquisition sensitivity -148dBm
- TTFF (open sky) Avg. hot start≤1sec
- Avg. cold start≤32sec
- Voice monitor range ≤5 meters
- Battery 450mAh/3.7V Li-Polymer battery
Working voltage/current 9-36VDC/30mA
- Operating temperature -20℃～ 70℃
- Standby time 60 hours
- Working time 4 hours
- Device weight 96g
- Device dimension 105.8(L)*54.5(W)*16.4(H)mm
- Box weight 409g
- Box dimension 155(L)*95(W)*78(H)mm

## AIS140:

Features
- The device is an indigenously developed GPS-SBAS based Vehicle Tracking Device (VTD) product that provides the precise location, time, speed, distance, etc and aimed at tracking applications.
- The device is a VTD with built-in GPS-SBAS receiver which provides unmatched performance in terms of sensitivity and TTFF.
- The GPS and GSM antennas are embedded within the enclosure thereby ensuring tamper-proof operation.
- The Device consists of a multi-band GSM / GPRS modem for data communication.
- The general purpose I/O's of the Device are conditioned and brought out to serve as digital I/O and analog input.
- The Device power supply design is robust enough to handle the vehicle supply variations.
- It can operate from 7V up to 32V and provide protection against surges, short circuit and reverse battery connection.
- The device consists of a Li-Ion backup battery for operations when the mains intentionally/ unintentionally disconnected.
- The device supports HTTP, TCP/IP and UDP/IP protocols for the communication with the server.
- Over the air, firmware upgrade feature helps in upgrading the firmware of the device when the device is live on the field.
- The device can be integrated with many accessories such as SOS button, temperature sensor, fuel sensor, RS-232 based active/passive RFID's, etc, 2-way voice communication with external mic and speaker.
- Technical Specification:
- Input Voltage 8-42 VDC with surge protection
- GPS RECEIVER Support AGPS, SBAS ranging (WAAS, EGNOS, GAGAN, MSAS)
- 66 acquisition-channel
- Maximum Update Rate: 10H
- GPS Tracking Sensitivity Tracking: -165 dBm
 Reacquisition: -160 dBm
- Cold starts: -147 dBm
- GPS ACCURACY 2.5 Meter-5 Meter
- GSM / GPRS Specications Quad-band 850/900/1800/1900MHz
- GPRS multi-slot class 12/10
- Bluetooth: Compliant with 3.0+EDR
- GPRS DATA GPRS class 12: max. 85.6 kbps (downlink/uplink)
- PBCCH support
- PROTOCOL Embedded TCP/HTTP protocol
- JAMMING DETECTION YES
- Antenna Internal GPS & GSM high gain Antenna
- LED STATUS Three LEDs for MCU, GPS and GSM status indication
- Battery 350 mah ( Expandable up to 4400 mah)
- Device Working Mode Continuous Tracking Interval Tracking
- Sleep Mode and Deep Sleep Modes.
- Input / output 4 Digital Outputs (2 AIS+2) 3 analog input
- 6 digital input 2 RS232 ( Serial Communication)
- 2 (1 wire protocol) 1 SOS
- Memory 32 Mb Non Volatile Memory, Stores up to 50000 strings data
- Housing IP 65
- Accelerometer 6 Axis
- Tamper Switch Yes
- Output Supply 3.3 V,4.6 V
- Accessories GB 140, 20 pin Wire, 16 pin wire, User Manual
- Measurement (L*B*H mm)/ Weight (gm) 100*100*36/100

GPS-Camer Device :

Features & Technical Specification:
- Real-Time GPS Tracking
- 4G GPS Live Streaming
- Fleet Management Software
- All-inclusive Dash Cam
- 128gb Removable Storage Capacity
- Tamper Resistant Hardware and Software Solution
- Real-Time Vehicle and Camera Status Alerts

## Social Link

<a href="https://twitter.com/tiwariankur77">
  <img align="left" alt="damianrincondrc" width="22px" src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
</a>
<a href="https://www.linkedin.com/in/tiwariankur77/">
  <img align="left" alt="Linkdein" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>
<a href="https://github.com/ankur-tiwari/">
  <img align="left" alt="Github" width="22px" src="https://img.icons8.com/fluent/48/000000/github.png"/>
</a>
<a href="https://t.me/heyankur">
  <img align="left" alt="Telegram" width="22px" src="https://img.icons8.com/fluent/48/000000/telegram-app.png"/>
</a>
<a href="https://www.instagram.com/tiwariankur29/">
  <img align="left" alt="Instagram" width="22px" src="https://img.icons8.com/nolan/64/instagram-new.png"/>
</a>
<a href="https://www.facebook.com/ankurtiwariIt">
  <img align="left" alt="Facebook" width="22px" src="https://img.icons8.com/android/24/000000/facebook.png"/>
</a>
<a href="https://stackoverflow.com/users/11956084/ankur-tiwari?tab=profile">
  <img align="left" alt="Stack" width="22px" src="https://img.icons8.com/color/48/000000/stackoverflow.png"/>
</a>
<a href="https://www.youtube.com/channel/UCA6spt9MUDESmQBfsNoHYwQ?view_as=subscriber">
  <img align="left" alt="Youtube" width="22px" src="https://img.icons8.com/fluent/48/000000/youtube-play.png"/>
</a>


