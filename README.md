# react-native-soundcloud-waveform
Creating a simple transform to the SoundCloud's waveforms from the image url

## Show Cases
![Alt Text](https://media.giphy.com/media/35EH7lliWnUah8B9Ev/giphy.gif)

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Contribution](#contribution)
- [Questions](#questions)

### Installation

```bash
$ npm i react-native-soundcloud-waveform --save
```

### Basic Usage
```
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SoundCloudWaveform from 'react-native-soundcloud-waveform'

...
setTime = (time) => {
  
}

render() {
   <View style={Styles.progressContainer}>
      <SoundCloudWaveform
        waveformUrl={track.waveform_url}
        percentPlayable={playableTime}
        percentPlayed={currentTime)}
        setTime={this.setTime}  
      />
   </View>
}
```

### Properties
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| waveformUrl | required | `string` | The png format `waveform_url` object of the SoundCloud's `track` |
| setTime | required | `func` | Callback function to update the current time. (returns progress in between `0 - 100`) |
| percentPlayed | required | `number` | The current time of the track (progress in between `0 - 1`) |
| percentPlayable | 0 | `number` | The percentage of the track that has been buffered (progress in between `0 - 1`)|
| height | 50 | `number` | The height of the waveform |
| width | `screenWidth` | `number` | The width of the waveform |
| active | `#FF1844` | `string` | Active Color of the waveform |
| activeInverse | `#4F1224` | `string` | Active Color of the inverse waveform |
| activePlayable   | `#1b1b26` | `string` | Active buffered track color of the waveform |
| activePlayableInverse | `#131116` | `string` | Active buffered track color of the inverse waveform |
| inactive | `#424056` | `string` | Inactive color of the waveform |
| inactiveInverse | `#1C1A27` | `string` | Inactive color of the inverse waveform |

## Contribution

- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.

## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.co) or [create an issue](https://github.com/pritishvaidya/soundcloud-waveform/issues/new)
