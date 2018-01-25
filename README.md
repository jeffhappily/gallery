# Gallery
A mobile app that simply fetch images from Behance and display it.

[Download link](https://drive.google.com/open?id=1jpr5R7eeMPjfY3h1PADRy5glLuDcq2Hk)

## Features
* __FBSDK implemented__, able to sign in with Facebook.
* __Search__, able to search for images with keyword, filter and sort.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you have to get a development env running

Create `.env` file for environment variable:

```
BEHANCE_API_KEY=xxxx
FACEBOOK_APP_ID=xxxx
FACEBOOK_APP_SCHEME=xxxx
FB_LOGIN_PROTOCOL_SCHEME=xxxx
```


Install all dependencies by running:

```
yarn
react-native link
```

And build the app

```
react-native run-ios
react-native run-android
```

