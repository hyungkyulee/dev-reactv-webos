# dev-reactv-webos
React-TV project on LG WebOS

## Dev Environment
### React-Tv-Cli

```
$ yarn global add react-tv-cli@0.3.0
```

### WebOS Dev Environment

1) Developer Account
  https://webostv.developer.lge.com/account/user_auth/

2) Install WebOS SDK
   - download : http://webostv.developer.lge.com/sdk/installation/#

   - in the location of the unzip folder
   ```
   -rwxr-xr-x@ 1 hyungkyu  staff   5.3M 25 Feb 11:25 installer_mac64
   drwxr-xr-x@ 3 hyungkyu  staff    96B 27 Mar  2018 jre8/
   -rwxr-xr-x@ 1 hyungkyu  staff   1.9G 25 Feb 11:19 webOS_SDK_TV_mac64.zip
   (hyungkyu) ~/_proj/_rnd/reactv/webOS_SDK_TV_Installer_mac64_full $ sudo ./installer_mac64 
   ```

   - Accept the agreement and install the virtualbox for emulator
   - restart system
  
3) WebOS TV setup
   - Go to Contents Strore
   - Search and Install 'Developer Mode' App
   - Login with the developer account created
   - Enable 'Dev Mode Status', followed by restarting TV
   - launch the 'Developer Mode' app once again and enable 'Key Server' option
   - Registry your TV on react-tv
    * please check the TV and developer PC(cli installed system) should be under the same local network.
    * when using 'Dev Mode', password is not required.  
   ```
   $ react-tv-cli setup-webos
   name      deviceinfo                connection  profile
   --------  ------------------------  ----------  -------
   emulator  developer@127.0.0.1:6622  ssh         tv     

   ** You can modify the device info in the above list, or add new device.
   ? Select: add
   ? Enter Device Name: lg-uk64
   ? Enter Device IP address: 192.168.1.90
   ? Enter Device Port: 22
   ? Enter ssh user: root
   ? Enter description: new device
   ? Select authentification: password
   ? Enter password: 
   ? Save ? Yes
   name      deviceinfo                connection  profile
   --------  ------------------------  ----------  -------
   lg-uk64   root@192.168.1.90:22      ssh         tv     
   emulator  developer@127.0.0.1:6622  ssh         tv  
   ```

5) ares cli 
react-tv-cli might be not working(compatible) with webos. In this case, ares-cli should be installed and can directly set the devices.
The path of webOS SDK CLI will be ```/opt/webOS_TV_SDK/CLI```

   - ares configuration
     it's expected to use the webOS TV CLI (installed icon on the desktop)
     (OR you can set the PATH for the CLI ``` $ /opt/webOS_TV_SDK/CLI/bin/ares ```)
     ```
     .bash_profile
     :
        export WEBOS_HOME=/opt/webOS_TV_SDK
        export PATH=$WEBOS_HOME/CLI/bin:$PATH
     :
     ```

     - connect the TV with ssh key
     ```
     (hyungkyu) ~ $ ares-setup-device
     name      deviceinfo                connection  profile
     --------  ------------------------  ----------  -------
     emulator  developer@127.0.0.1:6622  ssh         tv     

     ** You can modify the device info in the above list, or add new device.
     ? Select add
     ? Enter Device Name: mytv
     ? Enter Device IP address: 192.168.1.90
     ? Enter Device Port: 22
     ? Enter ssh user: root
     ? Enter description: mytv
     ? Select authentication ssh key
     ? Enter ssh private key file name: webos_emul
     ? Enter key's passphrase: ****** (please put the passphrase on the TV screen of 'developer mode' app)
     ? Save ? Yes
     name      deviceinfo                connection  profile
     --------  ------------------------  ----------  -------
     emulator  developer@127.0.0.1:6622  ssh         tv     
     mytv      root@192.168.1.90:22      ssh         tv     

     (hyungkyu) ~ $ ares-novacom --device mytv --getkey
     SSH Private Key: /Users/albert/.ssh/mytv_webos
     input passphrase [default: webos]: ******
     ```
  
5) Component Manager
   - Move to 'in webOS SDK installed folder : ```/opt/webOS_TV_SDK/ComponentManager```
   - Run the component manager executable file (internet connection is required) : ``` sudo ./componentmanager_mac64 ```
   - Add/Update/Remove components
    * Emulator 3.0.0 is required for react-tv
  
6) App Installer
The App(xxx.ipk) will be installed on the launcher bar by 'react-tv-cli run-webos <device>'
However, it's more convenient way to setup App Installer.
it provides one more benifit - prevents to turn off developer mode after 2 days.
   - Change the TV SDP server to QA1
   - Search 'App Installer'
   - Install 'App Installer'

  
## React TV App

1) Create a simple app
```
$ react-tv-cli init ./ (or app name)
```

2) Build and launch the app on the browser
```
$ yarn && yarn start-dev
```

3) launch the app on the emulator
```
yarn start
```

4) launch the app on the device
(e.g. react-tv-cli run-webos <device>)
```
$ react-tv-cli run-webos mytv
```
