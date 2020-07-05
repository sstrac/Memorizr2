import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { IMAGES, log } from '../consts'
import { applyPitches, removePitches, transpose } from '../theory/theory-functions'
import { Button } from 'react-native-paper'

export class Notes extends React.Component {
  state = {
    note: 'C4',
    key: '',
    showNote: true,
    noteRange: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5']
  }

  constructor(props) {
    super(props)
    this.setState({
      key: props.key
    })
  }

  render() {
    let showHideButton, noteText
    let image
    if (this.state.showNote) {
      showHideButton = <Button onPress={this.toggleNoteShowing}>
        <Text>Hide</Text>
      </Button>
      noteText = <Text style={styles.noteText}>{this.state.note[0]}</Text>
    } else if (!this.state.showNote) {
      showHideButton = <Button onPress={this.toggleNoteShowing}>
        <Text>Show</Text>
      </Button>
      noteText = <Text style={styles.noteText}>?</Text>
    }
    switch (this.state.key + this.state.note) {
      case 'CMC4': image = <NoteImage uri='./assets/keys/CM/C4.png'></NoteImage>; break;
      case 'CMD4': image = <NoteImage uri='./assets/keys/CM/D4.png'></NoteImage>; break;
      case 'CME4': image = <NoteImage uri='./assets/keys/CM/E4.png'></NoteImage>; break;
      case 'CMF4': image = <NoteImage uri='./assets/keys/CM/F4.png'></NoteImage>; break;
      case 'CMG4': image = <NoteImage uri='./assets/keys/CM/G4.png'></NoteImage>; break;
      case 'CMA4': image = <NoteImage uri='./assets/keys/CM/A4.png'></NoteImage>; break;
      case 'CMB4': image = <NoteImage uri='./assets/keys/CM/B4.png'></NoteImage>; break;
      case 'CMC5': image = <NoteImage uri='./assets/keys/CM/C5.png'></NoteImage>; break;
      case 'CMD5': image = <NoteImage uri='./assets/keys/CM/D5.png'></NoteImage>; break;
      case 'CME5': image = <NoteImage uri='./assets/keys/CM/E5.png'></NoteImage>; break;
      case 'CMF5': image = <NoteImage uri='./assets/keys/CM/F5.png'></NoteImage>; break;
      case 'CMG5': image = <NoteImage uri='./assets/keys/CM/G5.png'></NoteImage>; break;
      default: image = <NoteImage uri=''></NoteImage>; break;
    }

    return (
      <View>
        <View style={styles.center_aligned}>
          {noteText}
        </View>
        <View style={styles.noteImage}>
          {image}
        </View>
        <View style={styles.center_aligned}>
          <Button onPress={this.changeNote}>
            <Text>Next</Text>
          </Button>
          {showHideButton}
        </View>
      </View>
    )
  }

  toggleNoteShowing = () => {
    this.setState(prevState => ({
      showNote: !prevState.showNote
    }))
  }

  changeNote = () => {
    let randomNote = this.randomNote()
    this.setState(prevState => ({
      note: randomNote
    }))
  }

  changeKey = () => {
    let targetKey = 'GM'
    let newNotes = transpose(this.state.noteRange, this.state.key, targetKey)
    newNotes = applyPitches(newNotes)
    this.setState(prevState => ({
      key: targetKey,
      noteRange: newNotes,
      note: newNotes[0]
    }))
  }

  randomNote() {
    return this.state.noteRange[Math.floor((Math.random() * 11) + 1)]
  }

}
//Good example of presentational component
const NoteImage = (props) => {
  const imageToRender = IMAGES[props.uri]
  const style = { width: 250, height: 200, margin: 10}
  return (
    <Image source={imageToRender} style={style}></Image>
  )
}

const styles = StyleSheet.create({
  noteImage: {
    width: Dimensions.get('window').width,
    height: 'fit-content',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1
  },
  sideNav: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50
  },
  sideItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  noteText: {
    fontSize: 80
  },
  button: {
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'black',
    width: 200,
    height: 120,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  center_aligned: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center_row: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  small_circle: {
    borderWidth: 2,
    borderRadius: 100
  }
});
