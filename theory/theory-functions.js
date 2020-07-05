import { TONES, TONE_VALUES } from './theory-consts'
import { proc } from 'react-native-reanimated'

export function transpose(NOTES, currentKey, targetKey) {
  let targetNotes = []
  NOTES = removePitches(NOTES)
  currentKey = removePitch(currentKey)
  targetKey = removePitch(targetKey)
  let jump = TONES[targetKey] - TONES[currentKey]
  NOTES.forEach(note => {
    let currentNoteValue = TONES[note]
    while (currentNoteValue + jump >= 12) {
      jump -= 12
    }
    while(currentNoteValue + jump < 0){
      jump += 12
    }
    targetNotes.push(TONE_VALUES[currentNoteValue + jump])
  })
  return targetNotes
}

export function applyPitches(NOTES){
  let processedNotes = []
  let pitchedNotes = NOTES.map(note => {
    if(processedNotes.indexOf(note)<0){
      processedNotes.push(note)
      return note + '4'
    } else {
      return note + '5'
    }
  })
  return pitchedNotes
}

export const removePitches = (NOTES) => {
  return NOTES.map(note => removePitch(note))
}

export const removePitch = (note) => {
  return note.length == 2 ? note[0]
      : note[0] + note[1]
}

function detectKey(NOTES){
  //Count black keys
  //detect which side of circle of fifths it belongs to
  //return mixed key
}

const keySignatureMajorSharps = {
  0: 'C',
  1: 'G',
  2: 'D',
  3: 'A',
  4: 'E',
  5: 'B',
  6: 'F#',
  7: 'C#'
}

const keySignatureMajorFlats = {
  0: 'C',
  1: 'F',
  2: 'Bb',
  3: 'Eb',
  4: 'Ab',
  5: 'Db',
  6: 'Gb',
  7: 'Cb'
}

const circleOfFifthsSides = {
  Right: 'R',
  Left: 'L'
}

const isBlackNote = (note) => {
  if (note.includes('b') || note.includes('#')) {
    return true
  }
  else {
    return false
  }
}

function countBlackNotes(NOTES){
  let blackNotes = NOTES.filter(note => {
    return isBlackNote(note)
  })
  return blackNotes.length
}

function getUniqueNotes(){

}