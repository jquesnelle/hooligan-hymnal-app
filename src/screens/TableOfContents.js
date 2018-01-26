import React from 'react';
import { Image, SectionList, StyleSheet, View, Text } from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import { Colors, FontSizes, Layout } from '../constants';
import { BoldText, SemiBoldText, RegularText } from '../components/StyledText';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

import Songs from '../data/songs.json';
import Songbook from '../data/songbook.json';
import { conferenceHasEnded } from '../utils/index';

import { find, propEq } from 'ramda';

import NavigationOptions from '../config/NavigationOptions';

// on click on a song row
// search each page in parent.parent component and look for a guid property (yet to be created), snap to that page

//
//  Note: ToC may not live within the pager forever,
//  it is just hanging out there now.
//  ToC may be a button on this screen or somewhere else
//

//console.log("Songbook ToC json: " + Songbook.songbook_title);
let ToCData = [];
Songbook.chapters.forEach(chapterChild => {
  let songList = [];

  //console.log(chapterChild.chapter_title);
  chapterChild.songs.forEach(songChild => {
    try {
      let song = {
        guid: songChild.guid,
        song_title: Songs.filter(song => song.guid === songChild.guid)[0].title
      };
      //console.log(songChild.guid + " " + song.song_title);
      songList.push(song);
    } catch (err) {
      console.log(songChild.guid + ' not found in songs database');
    }
  });

  if (0 < songList.length)
    ToCData.push({ title: chapterChild.chapter_title, data: songList });
});

class SongRow extends React.Component {
  render() {
    const { item: song } = this.props;

    return (
      <RectButton
        onPress={this._handlePress}
        activeOpacity={0.05}
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <View style={styles.row}>
          <View style={styles.rowData}>
            <RegularText>{song.song_title}</RegularText>
          </View>
        </View>
      </RectButton>
    );
  }

  _handlePressTOCButton = () => {
    // TODO: just close this window and go back
    console.log("close this/go back");
  };

  _handlePress = () => {
    this.props.onPress(this.props.item);
  };
}

export default class TableOfContents extends React.Component {
  static navigationOptions = {
    title: 'Songs',
    ...NavigationOptions
  };

  render() {
    return (
      <LoadingPlaceholder>
        <RectButton
            style={styles.tocButton}
            onPress={this._handlePressTOCButton}
            underlayColor="#fff">
            <RegularText style={styles.tocButtonText}>
              Table of Contents
            </RegularText>
          </RectButton>
        <SectionList
          renderScrollComponent={props => <ScrollView {...props} />}
          stickySectionHeadersEnabled={true}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={ToCData}
          keyExtractor={(item, index) => index}
        />
      </LoadingPlaceholder>
    );
  }

  _renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <RegularText>{section.title}</RegularText>
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return <SongRow item={item} onPress={this._handlePressRow} />;
  };

  _handlePressRow = item => {
    const song = find(propEq('guid', item.guid), Songs);
    //this.props.navigation.navigate('SingleSongScreen', { song });
    // TODO: This should go back to the previous screen and set the current <View> to the one with the selected guid
    // Android already has this stored in key property, so search those? <View key={item.guid} ...
    // UPDATE: it is setPage() and an index
    // https://facebook.github.io/react-native/docs/viewpagerandroid.html
    
    // Also since you're reading this already, consider testing iOS ScrollView with pagingEnabled and horizontal properties set to true
    // you may already be doing this, I can't tell (or test for that matter)
    // https://facebook.github.io/react-native/docs/scrollview.html
  };
}

const styles = StyleSheet.create({
  tocButton: {
    backgroundColor: Colors.green,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 100+"%",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row'
  },
  tocButtonText: {
    fontSize: FontSizes.normalButton,
    color: '#fff',
    textAlign: 'center'
  },
  row: {
    flex: 1,
    paddingTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row'
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0
  },
  rowData: {
    flex: 1
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee'
  }
});
