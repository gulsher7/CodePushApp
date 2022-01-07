//import liraries
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';
import Routes from './src/navigations/Routes';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const App = () => {

  const [progress, setProgress] = useState(false)

  useEffect(() => {
    codePush.sync(
      {
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
      },
      codePushStatusDidChange,
      codePushDownloadDidProgress
    );
  }, [])


  function codePushStatusDidChange(syncStatus) {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("Checking for update.")
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("Download packaging....")
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log("Awaiting user action....")
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("Installing update")
        setProgress(false)
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("codepush status up to date")
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        console.log("update cancel by user")
        setProgress(false)
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log("Update installed and will be applied on restart.")
        setProgress(false)
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.log("An unknown error occurred")
        setProgress(false)
        break;
    }
  }

  function codePushDownloadDidProgress(progress) {
    setProgress(progress)
  }

  console.log("progress value++", progress)


  const showProgressView = () => {
    return (
      <Modal
        visible={true}
        transparent
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.8)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 16
          }}>
            <Text>In Progress.......</Text>

            <View
              style={{ alignItems: 'center' }}
            >
              <Text style={{marginTop: 16}}>{`${(Number(progress?.receivedBytes)/1048576).toFixed(2)}MB/${(Number(progress?.totalBytes)/1048576).toFixed(2)}`}</Text>
              <ActivityIndicator style={{ marginVertical: 8 }} color={'blue'} />
              <Text>{((Number(progress?.receivedBytes) / Number(progress?.totalBytes)) * 100).toFixed(0)}%</Text>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Routes />
      {!!progress ? showProgressView() : null}
    </View>
  );
};

export default codePush(codePushOptions)(App);
