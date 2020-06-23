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
  ```
  $ react-tv-cli setup-webos
  ```
  
  
  ```

## React TV App

