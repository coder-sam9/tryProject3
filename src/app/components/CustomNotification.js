import { View, Text, Button } from 'react-native'
import React from 'react';
import notifee, { AndroidStyle } from '@notifee/react-native';

const CustomNotification = () => {
    // 
    async function onDisplayNotification() {
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    // 
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
              style:{type:AndroidStyle.BIGPICTURE,picture:'https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/wael-dahdouh.jpg.webp?itok=1U448r5o'},
            channelId,
            // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
              id: 'default',
            },
          },
        });
      }
    // 
      return (
        <View>
          <Button title="Display Notification" onPress={() => onDisplayNotification()} />
        </View>
      );
}
// 
export default CustomNotification
// import { View, Text } from 'react-native'
// import React from 'react'

// const CustomNotification = () => {
//   return (
//     <View>
//       <Text>CustomNotification</Text>
//     </View>
//   )
// }

// export default CustomNotification