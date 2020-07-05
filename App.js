import React from 'react';
import { Notes } from './components/Notes'
import { NotesConfig } from './components/NotesConfig'
import { StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper'

export default class App extends React.Component {
  state = {
    note: 'C4',
    key: 'CM',
    showNote: true,
    noteRange: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5']
  }

  constructor(props){
    super(props)
  }

  render() {
    //returns an array, we can deconstruct the output
    //of the function with the below syntax
    let [index, setIndex] = React.useState(0) //what does this do?
    let [routes] = React.useState([
      { key: 'notes', title: 'Notes', icon: 'music-note' },
      { key: 'notesConfig', title: 'Notes Settings', icon: 'playlist-music' },
    ])
    let renderScene = ({ route, jumpTo }) => {
      switch (route.key) {
        case 'notes': return <Notes key={key}></Notes>
        case 'notesConfig': return <NotesConfig></NotesConfig>
      }
    }
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0
  }
});
